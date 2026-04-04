/**
 * AddressAutocomplete — two-step Royal Mail-style address lookup
 * ---------------------------------------------------------------
 *
 * STEP 1  User types postcode  →  dropdown shows correct street(s)
 *           (postcodes.io centroid + Nominatim reverse geocode)
 *
 * STEP 2  User clicks a street →  dropdown expands to individual house
 *           numbers on that street, filtered to the postcode area
 *           (Overpass API queried by STREET NAME, not bbox — avoids
 *            showing addresses from neighbouring postcodes)
 *
 *         If no houses are found in OSM the user can still type their
 *         house/flat number in the separate field above.
 *
 * OPTIONAL TIER 1: set VITE_GETADDRESS_API_KEY → getAddress.io returns
 *   full PAF house-level addresses in one step (no street click needed).
 *   Sign up free at https://getaddress.io
 */
import { useEffect, useRef, useState, useCallback } from 'react';

// ── Optional: getAddress.io ───────────────────────────────────────────────────
const GETADDRESS_KEY = import.meta.env.VITE_GETADDRESS_API_KEY;

async function fetchGetAddress(postcode) {
  if (!GETADDRESS_KEY) return null;
  const clean = postcode.replace(/\s/g, '').toUpperCase();
  try {
    const res = await fetch(
      `https://api.getaddress.io/find/${clean}?api-key=${GETADDRESS_KEY}&expand=true`,
      { headers: { Accept: 'application/json' } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.addresses?.length) return null;
    const pc = (data.postcode || postcode).toUpperCase();
    return data.addresses.map(addr => {
      const lines  = (addr.formatted_address || []).filter(l => l?.trim());
      const unique = lines.filter((l, i) => i === 0 || l !== lines[i - 1]);
      const display = unique.slice(0, 3).join(', ');
      return {
        _source: 'getaddress', _display: display, _postcode: pc,
        display_name: `${display}, ${pc}`,
        address: { road: display, postcode: pc },
      };
    });
  } catch { return null; }
}

// ── UK postcode patterns ──────────────────────────────────────────────────────
const UK_POSTCODE_FULL    = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i;
const UK_POSTCODE_PARTIAL = /^[A-Z]{1,2}[0-9][0-9A-Z]?(\s*[0-9]?[A-Z]{0,2})?$/i;

function isFullPostcode(val)    { return UK_POSTCODE_FULL.test(val.trim()); }
function isPartialPostcode(val) {
  const t = val.trim();
  if (!t || t.length < 2) return false;
  if (/[,\s]{2,}|[a-z]{3,}/i.test(t)) return false;
  if (t.split(' ').length > 2) return false;
  return UK_POSTCODE_PARTIAL.test(t);
}

// ── postcodes.io → lat/lon + district ────────────────────────────────────────
async function lookupPostcodesIO(postcode) {
  const clean = postcode.replace(/\s/g, '').toUpperCase();
  const res   = await fetch(`https://api.postcodes.io/postcodes/${clean}`);
  const data  = await res.json();
  if (data.status !== 200 || !data.result) return null;
  return data.result;
}

// ── Nominatim reverse geocode ─────────────────────────────────────────────────
async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${lat}&lon=${lon}&zoom=17`;
  const res  = await fetch(url, { headers: { 'Accept-Language': 'en-GB' } });
  const data = await res.json();
  return data.address || {};
}

// ── Nominatim free-text search ────────────────────────────────────────────────
async function searchNominatim(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=gb&limit=6&q=${encodeURIComponent(query)}`;
  const res  = await fetch(url, { headers: { 'Accept-Language': 'en-GB' } });
  return res.json();
}

// ── STEP 2: Overpass — fetch individual houses for a specific street ───────────
// Searches by STREET NAME within a 1.5 km bbox around the postcode centroid.
// This is accurate because it matches the exact street, not a geographic blob.
async function fetchHousesByStreet(streetName, lat, lon, postcode) {
  const d    = 0.014; // ~1.5 km radius in degrees
  const bbox = `${lat - d},${lon - d},${lat + d},${lon + d}`;
  const pc   = postcode.replace(/\s/g, '').toUpperCase();

  // Escape special chars for Overpass regex (e.g. apostrophes)
  const safeName = streetName.replace(/['"]/g, '.');

  const query = `[out:json][timeout:12];
(
  node["addr:street"~"^${safeName}$",i]["addr:housenumber"](${bbox});
  way["addr:street"~"^${safeName}$",i]["addr:housenumber"](${bbox});
);
out center tags;`;

  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    `data=${encodeURIComponent(query)}`,
    });
    if (!res.ok) return [];

    const data     = await res.json();
    const elements = data.elements || [];

    // Prefer elements whose postcode tag matches — fall back to all if none match
    // Only use elements that either have no postcode tag (can't verify) OR match our postcode.
    // Never fall back to wrong-postcode elements — it's better to show nothing than wrong addresses.
    const withMatchingPc = elements.filter(el => {
      const elPc = (el.tags?.['addr:postcode'] || '').replace(/\s/g, '').toUpperCase();
      return !elPc || elPc === pc;
    });
    const toUse = withMatchingPc;

    const seen    = new Set();
    const results = [];
    const formattedPc = postcode.toUpperCase();

    for (const el of toUse) {
      const tags   = el.tags || {};
      const num    = (tags['addr:housenumber'] || '').trim();
      const street = (tags['addr:street']      || '').trim();
      if (!num || !street) continue;

      const key = `${num}|${street}`.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);

      const suburb  = (tags['addr:suburb']  || tags['addr:district'] || '').trim();
      const town    = (tags['addr:city']    || tags['addr:town']     || '').trim();
      const parts   = [`${num} ${street}`, suburb, town].filter(Boolean);
      const unique  = parts.filter((p, i) => i === 0 || p !== parts[i - 1]);
      const display = unique.slice(0, 3).join(', ');

      results.push({
        _source:    'overpass-house',
        _display:   display,
        _postcode:  formattedPc,
        _numericNo: parseInt(num, 10) || 0,
        display_name: `${display}, ${formattedPc}`,
        address: { road: display, postcode: formattedPc },
      });
    }

    results.sort((a, b) => a._numericNo - b._numericNo || a._display.localeCompare(b._display));
    return results;
  } catch {
    return [];
  }
}

// ── Build street-level suggestions from postcodes.io + Nominatim ──────────────
// Attaches _lat/_lon so Step 2 (Overpass) knows where to search.
async function buildPostcodeSuggestions(postcode) {
  // Tier 1: getAddress.io if key is set (skips Step 2 — returns houses directly)
  const gaResults = await fetchGetAddress(postcode);
  if (gaResults?.length) return gaResults;

  // Tier 2: postcodes.io + Nominatim → correct street name(s)
  const pc = await lookupPostcodesIO(postcode);
  if (!pc) return [];

  const formattedPostcode = pc.postcode;

  const [revResult, searchResult] = await Promise.allSettled([
    reverseGeocode(pc.latitude, pc.longitude),
    searchNominatim(`${formattedPostcode.replace(/\s/g, '')}, UK`),
  ]);

  const revAddr    = revResult.status    === 'fulfilled' ? (revResult.value    || {}) : {};
  const searchData = searchResult.status === 'fulfilled' ? (searchResult.value || []) : [];

  const seen    = new Set();
  const results = [];

  const addStreet = (road, suburb, district, source, lat, lon) => {
    const key = road.toLowerCase().trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    const parts = [road, suburb, district].filter(Boolean);
    results.push({
      _source:      source,
      _lat:         lat,   // passed to Overpass in Step 2
      _lon:         lon,
      display_name: `${parts.join(', ')}, ${formattedPostcode}`,
      address: { road, suburb, city: district, postcode: formattedPostcode },
    });
  };

  const revRoad = revAddr.road || revAddr.pedestrian || revAddr.footway || '';
  if (revRoad) {
    const suburb   = revAddr.suburb || pc.admin_ward || '';
    const district = (revAddr.city_district || '').replace('London Borough of ', '') || pc.admin_district || '';
    addStreet(revRoad, suburb, district, 'nominatim-reverse', pc.latitude, pc.longitude);
  }

  for (const r of searchData) {
    if (!r.address) continue;
    const a    = r.address;
    const road = a.road || a.pedestrian || a.footway || '';
    if (!road) continue;
    const suburb   = a.suburb || a.neighbourhood || pc.admin_ward || '';
    const district = (a.city_district || '').replace('London Borough of ', '') || a.city || a.town || pc.admin_district || '';
    const rLat     = parseFloat(r.lat) || pc.latitude;
    const rLon     = parseFloat(r.lon) || pc.longitude;
    addStreet(road, suburb, district, 'nominatim-search', rLat, rLon);
    if (results.length >= 8) break;
  }

  if (!results.length) {
    const fallbackParts = [pc.admin_ward, pc.admin_district].filter(Boolean);
    if (!fallbackParts.length) return [];
    return [{
      _source: 'postcodes.io', _lat: pc.latitude, _lon: pc.longitude,
      display_name: `${fallbackParts.join(', ')}, ${formattedPostcode}`,
      address: { road: '', suburb: pc.admin_ward || '', city: pc.admin_district || '', postcode: formattedPostcode },
    }];
  }

  return results;
}

// ── Parse any result into { address, postcode } ───────────────────────────────
function parseResult(item) {
  if (item._source === 'getaddress' || item._source === 'overpass-house') {
    return { address: item._display, postcode: item._postcode };
  }
  const a        = item.address || {};
  const road     = a.road || a.pedestrian || a.footway || '';
  const houseNo  = a.house_number ? `${a.house_number} ` : '';
  const street   = `${houseNo}${road}`.trim();
  const parts    = [
    street,
    a.suburb || a.neighbourhood,
    a.city_district?.replace('London Borough of ', '') || a.town || a.city || a.village,
  ].filter(Boolean);
  const address  = parts.length
    ? parts.join(', ')
    : (item.display_name || '').split(',').slice(0, 3).join(',').trim();
  return { address, postcode: (a.postcode || '').toUpperCase() };
}

// ── Component ─────────────────────────────────────────────────────────────────
// mode:
//   'streets'   — showing Nominatim street-level results (Step 1)
//   'expanding' — user clicked a street, Overpass is loading houses (Step 2)
//   'houses'    — showing Overpass house list for the chosen street (Step 2)
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = 'Select your street from the list…',
  className   = 'form-control form-control-lg',
  required    = false,
  id,
  forceQuery  = '',
}) {
  const [suggestions,  setSuggestions]  = useState([]);
  const [loading,      setLoading]      = useState(false);
  const [open,         setOpen]         = useState(false);
  const [focused,      setFocused]      = useState(false);
  const [highlighted,  setHighlighted]  = useState(-1);
  const [mode,         setMode]         = useState('streets'); // 'streets' | 'expanding' | 'houses' | 'no-houses'
  const [houseList,    setHouseList]    = useState([]);
  const [expandLabel,  setExpandLabel]  = useState('');       // street name shown while expanding
  const noHousesTimer = useRef(null);

  const debounceRef = useRef(null);
  const wrapRef     = useRef(null);

  // Close on outside click/tap (pointerdown covers mouse + touch)
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        clearTimeout(noHousesTimer.current);
        setOpen(false);
        setMode('streets');
        setHouseList([]);
      }
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, []);

  const fetchSuggestions = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) { setSuggestions([]); setOpen(false); return; }

    // Reset house-expand mode whenever a fresh search runs
    setMode('streets');
    setHouseList([]);
    setLoading(true);
    try {
      let results = [];
      if (isFullPostcode(trimmed)) {
        results = await buildPostcodeSuggestions(trimmed);
        if (!results.length) {
          const nom = await searchNominatim(trimmed);
          results = nom.filter(d => d.address && (d.address.road || d.address.postcode));
        }
      } else if (isPartialPostcode(trimmed) && trimmed.length >= 3) {
        results = await searchNominatim(trimmed);
      } else {
        const nom      = await searchNominatim(trimmed);
        const filtered = nom.filter(d => d.address && (d.address.road || d.address.postcode));
        results = filtered.length ? filtered : nom;
      }
      setSuggestions(results.slice(0, 8));
      setOpen(results.length > 0);
      setHighlighted(-1);
    } catch {
      setSuggestions([]); setOpen(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!forceQuery?.trim()) return;
    const query = forceQuery.split('_')[0].trim();
    if (!query) return;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(query), 100);
  }, [forceQuery, fetchSuggestions]);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    setMode('streets');
    setHouseList([]);
    clearTimeout(debounceRef.current);
    if (val.trim().length < 2) { setSuggestions([]); setOpen(false); return; }
    const delay = isFullPostcode(val) ? 150 : 350;
    debounceRef.current = setTimeout(() => fetchSuggestions(val), delay);
  };

  // ── Pick handler — two behaviours depending on result type ─────────────────
  const handlePick = useCallback((item) => {
    const isFullAddress = item._source === 'getaddress' || item._source === 'overpass-house';

    if (isFullAddress) {
      // ── Full house address selected — done ─────────────────────────────────
      const parsed = parseResult(item);
      onChange(parsed.address);
      onSelect({ address: parsed.address, postcode: parsed.postcode });
      setSuggestions([]);
      setOpen(false);
      setMode('streets');
      setHouseList([]);
    } else {
      // ── Street-level result clicked — expand to house list ─────────────────
      const parsed     = parseResult(item);
      const streetName = item.address?.road || '';
      const lat        = item._lat;
      const lon        = item._lon;
      const postcode   = parsed.postcode || item.address?.postcode || '';

      if (streetName && lat !== undefined && lon !== undefined) {
        setExpandLabel(parsed.address);
        setMode('expanding');
        setHouseList([]);
        setOpen(true);

        fetchHousesByStreet(streetName, lat, lon, postcode).then(houses => {
          if (houses.length > 0) {
            setHouseList(houses);
            setMode('houses');
          } else {
            // No individual houses in OSM for this postcode.
            // Fill the street address and show a clear guidance message so
            // the user knows to type their house/flat number in the field above.
            onChange(parsed.address);
            onSelect({ address: parsed.address, postcode });
            setSuggestions([]);
            setMode('no-houses');
            setOpen(true);
            clearTimeout(noHousesTimer.current);
            noHousesTimer.current = setTimeout(() => {
              setOpen(false);
              setMode('streets');
            }, 3000);
          }
        });
      } else {
        // No coordinates available — just pick the street
        onChange(parsed.address);
        onSelect({ address: parsed.address, postcode });
        setSuggestions([]);
        setOpen(false);
      }
    }
  }, [onChange, onSelect]);

  const handleKeyDown = (e) => {
    const list = mode === 'houses' ? houseList : suggestions;
    if (!open || !list.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted(h => Math.min(h + 1, list.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setHighlighted(h => Math.max(h - 1, -1)); }
    if (e.key === 'Enter')     { e.preventDefault(); if (highlighted >= 0 && list[highlighted]) handlePick(list[highlighted]); }
    if (e.key === 'Escape')    { setOpen(false); setMode('streets'); setHouseList([]); }
  };

  // ── What to render in the dropdown ─────────────────────────────────────────
  const renderDropdown = () => {
    if (!open) return null;

    // No houses found in OSM — show brief guidance then close
    if (mode === 'no-houses') {
      return (
        <ul className="address-autocomplete__dropdown">
          <li style={{ padding: '14px 16px', pointerEvents: 'none', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <i className="bi bi-check-circle-fill" style={{ color: '#4ade80', fontSize: '1.1rem', flexShrink: 0, marginTop: 1 }} />
            <span>
              <span style={{ fontSize: '.88rem', fontWeight: 600, color: '#fff', display: 'block' }}>Street selected!</span>
              <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.6)', marginTop: 2, display: 'block' }}>
                Now enter your house or flat number in the{' '}
                <strong style={{ color: 'rgba(255,255,255,0.85)' }}>House / Flat No.</strong> field above.
              </span>
            </span>
          </li>
        </ul>
      );
    }

    // Loading house list after street click
    if (mode === 'expanding') {
      return (
        <ul className="address-autocomplete__dropdown">
          <li style={{ padding: '12px 14px', pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="address-autocomplete__spinner" style={{ display: 'inline-block' }} />
            <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.6)' }}>
              Finding addresses on <strong>{expandLabel.split(',')[0]}</strong>…
            </span>
          </li>
        </ul>
      );
    }

    // Individual houses list
    if (mode === 'houses' && houseList.length > 0) {
      return (
        <ul className="address-autocomplete__dropdown">
          <li style={{ padding: '6px 14px 4px', fontSize: '.72rem', color: 'rgba(255,255,255,0.45)', pointerEvents: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <i className="bi bi-house-fill me-1" style={{ color: 'var(--accent2)' }} />
            Select your address
          </li>
          {houseList.map((h, i) => (
            <li
              key={i}
              className={`address-autocomplete__option${highlighted === i ? ' address-autocomplete__option--active' : ''}`}
              onPointerDown={(e) => { e.preventDefault(); handlePick(h); }}
              onMouseEnter={() => setHighlighted(i)}
            >
              <i className="bi bi-geo-alt me-2" style={{ color: 'var(--accent2)', flexShrink: 0, marginTop: 2 }} />
              <span>
                <span className="address-autocomplete__main">{h._display}</span>
                <span className="address-autocomplete__postcode">&nbsp;· {h._postcode}</span>
              </span>
            </li>
          ))}
          <li style={{ padding: '7px 14px', fontSize: '.73rem', color: 'rgba(255,255,255,0.35)', borderTop: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }}>
            <i className="bi bi-info-circle me-1" />
            Can't see your address? Enter your house number in the field above
          </li>
        </ul>
      );
    }

    // Step 1 — street-level results
    if (suggestions.length > 0) {
      const isFullAddressList = suggestions[0]?._source === 'getaddress';
      return (
        <ul className="address-autocomplete__dropdown">
          {!isFullAddressList && (
            <li style={{ padding: '6px 14px 4px', fontSize: '.72rem', color: 'rgba(255,255,255,0.45)', pointerEvents: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <i className="bi bi-cursor-fill me-1" style={{ color: 'var(--accent2)' }} />
              Click a street to see all addresses on it
            </li>
          )}
          {suggestions.map((s, i) => {
            const parsed = parseResult(s);
            return (
              <li
                key={i}
                className={`address-autocomplete__option${highlighted === i ? ' address-autocomplete__option--active' : ''}`}
                onPointerDown={(e) => { e.preventDefault(); handlePick(s); }}
                onMouseEnter={() => setHighlighted(i)}
              >
                <i className="bi bi-geo-alt me-2" style={{ color: 'var(--accent2)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span className="address-autocomplete__main">{parsed.address}</span>
                  {parsed.postcode && (
                    <span className="address-autocomplete__postcode">&nbsp;· {parsed.postcode}</span>
                  )}
                </span>
                {!isFullAddressList && (
                  <i className="bi bi-chevron-right ms-auto" style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, fontSize: '.75rem' }} />
                )}
              </li>
            );
          })}
          {isFullAddressList && (
            <li style={{ padding: '7px 14px', fontSize: '.73rem', color: 'rgba(255,255,255,0.35)', borderTop: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }}>
              <i className="bi bi-info-circle me-1" />
              Select your full address from the list
            </li>
          )}
        </ul>
      );
    }

    return null;
  };

  return (
    <div
      ref={wrapRef}
      className={`address-autocomplete${focused ? ' address-autocomplete--active' : ''}`}
    >
      <div className="address-autocomplete__wrap">
        <i className="bi bi-geo-alt-fill address-autocomplete__icon" />
        <input
          type="text"
          id={id}
          className={`address-autocomplete__input ${className}`}
          placeholder={loading ? 'Looking up address…' : placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => { setFocused(true); setHighlighted(-1); if (suggestions.length || houseList.length) setOpen(true); }}
          onBlur={() => setFocused(false)}
          required={required}
          autoComplete="off"
        />
        {(loading || mode === 'expanding') && <span className="address-autocomplete__spinner" />}
      </div>

      {!value && !loading && !focused && (
        <p className="address-autocomplete__hint">
          <i className="bi bi-lightning-charge-fill me-1" />
          Enter your postcode below to see your street
        </p>
      )}

      {renderDropdown()}
    </div>
  );
}
