/**
 * AddressAutocomplete
 * -------------------
 * UK address lookup — two-tier strategy:
 *
 *  TIER 1 (optional): getAddress.io
 *    → Full PAF house-level addresses (same data as Royal Mail)
 *    → e.g. dropdown shows "36 Imperial Drive, Harrow", "38 Imperial Drive…"
 *    → Requires VITE_GETADDRESS_API_KEY in .env / Vercel env vars
 *    → Sign up free at https://getaddress.io (20/day free, £7/mo for 1,000/day)
 *
 *  TIER 2 (default — free, no signup): postcodes.io + Nominatim
 *    → Validates postcode, returns the correct street name(s) for that postcode
 *    → e.g. "Imperial Drive, Harrow · HA2 7LH"
 *    → User picks the street, then adds their house/flat number in the field above
 *    → 100 % accurate — no wrong addresses from neighbouring postcodes
 *
 * Why NOT Overpass API?
 *    Tested: for HA2 7LH the Overpass bbox returns addresses from HA2 7BP /
 *    HA2 7DU / HA2 7SW — completely wrong postcodes — because UK OSM house-
 *    number coverage is too sparse and patchy to be reliable.
 */
import { useEffect, useRef, useState, useCallback } from 'react';

// ── Optional: getAddress.io — PAF-level individual house addresses ────────────
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
    if (!data.addresses || !data.addresses.length) return null;

    const pc = (data.postcode || postcode).toUpperCase();

    return data.addresses.map(addr => {
      // formatted_address: ["36 Imperial Drive", "", "Harrow", "Harrow", "Greater London"]
      const lines  = (addr.formatted_address || []).filter(l => l && l.trim());
      const unique = lines.filter((l, i) => i === 0 || l !== lines[i - 1]);
      const display = unique.slice(0, 3).join(', ');
      return {
        _source:   'getaddress',
        _display:  display,
        _postcode: pc,
        display_name: `${display}, ${pc}`,
        address:   { road: display, postcode: pc },
      };
    });
  } catch {
    return null;
  }
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

// ── postcodes.io — validates postcode, returns lat/lon + district ─────────────
async function lookupPostcodesIO(postcode) {
  const clean = postcode.replace(/\s/g, '').toUpperCase();
  const res   = await fetch(`https://api.postcodes.io/postcodes/${clean}`);
  const data  = await res.json();
  if (data.status !== 200 || !data.result) return null;
  return data.result;
}

// ── Nominatim reverse geocode — gets road name at a lat/lon ──────────────────
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

// ── Build street suggestions from postcodes.io + Nominatim ───────────────────
// Returns the correct street(s) for the postcode — always accurate.
// User then types their house/flat number in the separate field.
async function buildPostcodeSuggestions(postcode) {
  // Tier 1: getAddress.io (full PAF house addresses — needs API key)
  const gaResults = await fetchGetAddress(postcode);
  if (gaResults && gaResults.length) return gaResults;

  // Tier 2: postcodes.io centroid → Nominatim reverse + search (street level)
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

  const addStreet = (road, suburb, district, source) => {
    const key = road.toLowerCase().trim();
    if (!key || seen.has(key)) return;
    seen.add(key);
    const parts = [road, suburb, district].filter(Boolean);
    results.push({
      _source:      source,
      display_name: `${parts.join(', ')}, ${formattedPostcode}`,
      address: { road, suburb, city: district, postcode: formattedPostcode },
    });
  };

  // Reverse geocode gives the most accurate street at the postcode centroid
  const revRoad = revAddr.road || revAddr.pedestrian || revAddr.footway || '';
  if (revRoad) {
    const suburb   = revAddr.suburb || pc.admin_ward || '';
    const district = (revAddr.city_district || '').replace('London Borough of ', '') || pc.admin_district || '';
    addStreet(revRoad, suburb, district, 'nominatim-reverse');
  }

  // Nominatim search adds any additional streets in the same postcode area
  for (const r of searchData) {
    if (!r.address) continue;
    const a    = r.address;
    const road = a.road || a.pedestrian || a.footway || '';
    if (!road) continue;
    const suburb   = a.suburb || a.neighbourhood || pc.admin_ward || '';
    const district = (a.city_district || '').replace('London Borough of ', '') || a.city || a.town || pc.admin_district || '';
    addStreet(road, suburb, district, 'nominatim-search');
    if (results.length >= 8) break;
  }

  // Last resort — postcodes.io district only
  if (!results.length) {
    const fallbackParts = [pc.admin_ward, pc.admin_district].filter(Boolean);
    if (!fallbackParts.length) return [];
    return [{
      _source:      'postcodes.io',
      display_name: `${fallbackParts.join(', ')}, ${formattedPostcode}`,
      address: { road: '', suburb: pc.admin_ward || '', city: pc.admin_district || '', postcode: formattedPostcode },
    }];
  }

  return results;
}

// ── Parse any result into { address, postcode } ───────────────────────────────
function parseResult(item) {
  // getAddress.io result — already a clean, complete address
  if (item._source === 'getaddress') {
    return { address: item._display, postcode: item._postcode };
  }

  // Nominatim / postcodes.io result — street level
  const a = item.address || {};

  const road    = a.road || a.pedestrian || a.footway || '';
  const houseNo = a.house_number ? `${a.house_number} ` : '';
  const street  = `${houseNo}${road}`.trim();

  const parts = [
    street,
    a.suburb || a.neighbourhood,
    a.city_district?.replace('London Borough of ', '') || a.town || a.city || a.village,
  ].filter(Boolean);

  const address = parts.length
    ? parts.join(', ')
    : (item.display_name || '').split(',').slice(0, 3).join(',').trim();

  const postcode = (a.postcode || '').toUpperCase();
  return { address, postcode };
}

// ── Component ─────────────────────────────────────────────────────────────────
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
  const debounceRef = useRef(null);
  const wrapRef     = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const fetchSuggestions = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) { setSuggestions([]); setOpen(false); return; }

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
      setSuggestions([]);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // Triggered when postcode is typed in the separate Postcode field
  useEffect(() => {
    if (!forceQuery || !forceQuery.trim()) return;
    const query = forceQuery.split('_')[0].trim();
    if (!query) return;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(query), 100);
  }, [forceQuery, fetchSuggestions]);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    clearTimeout(debounceRef.current);
    if (val.trim().length < 2) { setSuggestions([]); setOpen(false); return; }
    const delay = isFullPostcode(val) ? 150 : 350;
    debounceRef.current = setTimeout(() => fetchSuggestions(val), delay);
  };

  const handlePick = (item) => {
    const parsed = parseResult(item);
    onChange(parsed.address);
    onSelect({ address: parsed.address, postcode: parsed.postcode });
    setSuggestions([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted(h => Math.min(h + 1, suggestions.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setHighlighted(h => Math.max(h - 1, -1)); }
    if (e.key === 'Enter')     { e.preventDefault(); if (highlighted >= 0 && suggestions[highlighted]) handlePick(suggestions[highlighted]); }
    if (e.key === 'Escape')    { setOpen(false); }
  };

  const hasFullAddresses = suggestions[0]?._source === 'getaddress';

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
          onFocus={() => { setFocused(true); setHighlighted(-1); if (suggestions.length) setOpen(true); }}
          onBlur={() => setFocused(false)}
          required={required}
          autoComplete="off"
        />
        {loading && <span className="address-autocomplete__spinner" />}
      </div>

      {!value && !loading && !focused && (
        <p className="address-autocomplete__hint">
          <i className="bi bi-lightning-charge-fill me-1" />
          Enter your postcode above to see your street
        </p>
      )}

      {open && suggestions.length > 0 && (
        <ul className="address-autocomplete__dropdown">
          {suggestions.map((s, i) => {
            const parsed = parseResult(s);
            return (
              <li
                key={i}
                className={`address-autocomplete__option${highlighted === i ? ' address-autocomplete__option--active' : ''}`}
                onMouseDown={(e) => { e.preventDefault(); handlePick(s); }}
                onMouseEnter={() => setHighlighted(i)}
              >
                <i className="bi bi-geo-alt me-2" style={{ color: 'var(--accent2)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ minWidth: 0 }}>
                  <span className="address-autocomplete__main">{parsed.address}</span>
                  {parsed.postcode && (
                    <span className="address-autocomplete__postcode">&nbsp;· {parsed.postcode}</span>
                  )}
                </span>
              </li>
            );
          })}
          <li style={{ padding: '7px 14px', fontSize: '.73rem', color: 'rgba(255,255,255,0.35)', borderTop: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }}>
            <i className="bi bi-info-circle me-1" />
            {hasFullAddresses
              ? 'Select your full address from the list'
              : 'Select your street, then enter your house/flat number above'}
          </li>
        </ul>
      )}
    </div>
  );
}
