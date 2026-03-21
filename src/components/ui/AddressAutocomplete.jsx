/**
 * AddressAutocomplete
 * -------------------
 * UK address lookup — two-tier strategy:
 *
 *  TIER 1 (optional): getAddress.io
 *    → Returns individual house-numbered addresses from Royal Mail PAF data
 *    → e.g. "36 Imperial Drive, Harrow, HA2 7LH"
 *    → Requires VITE_GETADDRESS_API_KEY in your .env / Vercel env vars
 *    → Free tier: 20 lookups/day  |  Paid: from £7/month (1,000/day)
 *    → Sign up at: https://getaddress.io
 *
 *  TIER 2 (default — free, no signup): Overpass API (OpenStreetMap)
 *    → Returns individual house-numbered addresses from OSM data
 *    → e.g. "36 Imperial Drive, Harrow" then "38 Imperial Drive, Harrow"...
 *    → Completely free, no registration, no rate limit for normal use
 *    → Coverage: excellent in cities/towns, thinner in rural areas
 *
 *  TIER 3 (last resort): postcodes.io + Nominatim
 *    → Returns street-level results only (no house numbers)
 *    → e.g. "Imperial Drive, Harrow, HA2 7LH"
 *    → Used when Overpass returns nothing (very rural or unmapped areas)
 *
 * When input looks like a UK postcode (e.g. "HA2 7LH", "SW1A 1AA"):
 *   → Tier 1: getAddress.io returns full individual addresses
 *   → Tier 2: postcodes.io validates it, Nominatim gives street names
 *
 * When input looks like an address (e.g. "22 Baker Street"):
 *   → Nominatim free-text search (Tier 2 always used here).
 */
import { useEffect, useRef, useState, useCallback } from 'react';

// ── getAddress.io — PAF-level individual house addresses ─────────────────────
// Sign up free at https://getaddress.io and add VITE_GETADDRESS_API_KEY to
// your .env.local (dev) and Vercel environment variables (production).
const GETADDRESS_KEY = import.meta.env.VITE_GETADDRESS_API_KEY;

async function fetchGetAddress(postcode) {
  if (!GETADDRESS_KEY) return null; // no key → fall through to Nominatim
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
      const lines = (addr.formatted_address || []).filter(l => l && l.trim());
      // Deduplicate adjacent identical parts (e.g. "Harrow, Harrow")
      const unique = lines.filter((l, i) => i === 0 || l !== lines[i - 1]);
      const display = unique.slice(0, 3).join(', '); // "36 Imperial Drive, Harrow"
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

function isFullPostcode(val) {
  return UK_POSTCODE_FULL.test(val.trim());
}

function isPartialPostcode(val) {
  const t = val.trim();
  if (!t || t.length < 2) return false;
  if (/[,\s]{2,}|[a-z]{3,}/i.test(t)) return false; // likely an address phrase
  if (t.split(' ').length > 2) return false;
  return UK_POSTCODE_PARTIAL.test(t);
}

// ── Step 1: postcodes.io → lat/lon + district ────────────────────────────────
async function lookupPostcodesIO(postcode) {
  const clean = postcode.replace(/\s/g, '').toUpperCase();
  const res   = await fetch(`https://api.postcodes.io/postcodes/${clean}`);
  const data  = await res.json();
  if (data.status !== 200 || !data.result) return null;
  return data.result; // { latitude, longitude, postcode, admin_district, admin_ward, ... }
}

// ── Tier 2: Overpass API — free, no signup, OSM house-level data ──────────────
// Queries OpenStreetMap nodes/ways with addr:housenumber + addr:street inside
// a ~250m bounding box centred on the postcode lat/lon.
async function fetchOverpassAddresses(lat, lon, formattedPostcode) {
  // ~250 m radius in degrees
  const d    = 0.0022;
  const bbox = `${lat - d},${lon - d},${lat + d},${lon + d}`;

  // Ask for any node or way that has both addr:housenumber AND addr:street
  const query = `[out:json][timeout:8];
(
  node["addr:housenumber"]["addr:street"](${bbox});
  way["addr:housenumber"]["addr:street"](${bbox});
);
out center tags;`;

  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    `data=${encodeURIComponent(query)}`,
    });
    if (!res.ok) return [];

    const data = await res.json();
    const seen    = new Set();
    const results = [];

    for (const el of (data.elements || [])) {
      const tags   = el.tags || {};
      const num    = (tags['addr:housenumber'] || '').trim();
      const street = (tags['addr:street'] || '').trim();
      if (!num || !street) continue;

      // Prefer suburb/city from OSM tags, fall back to postcodes.io district
      const suburb  = (tags['addr:suburb'] || tags['addr:district'] || '').trim();
      const town    = (tags['addr:city'] || tags['addr:town'] || tags['addr:village'] || '').trim();

      const addrKey = `${num}|${street}`.toLowerCase();
      if (seen.has(addrKey)) continue;
      seen.add(addrKey);

      const parts   = [`${num} ${street}`, suburb, town].filter(Boolean);
      // Deduplicate adjacent identical segments (e.g. "Harrow, Harrow")
      const unique  = parts.filter((p, i) => i === 0 || p !== parts[i - 1]);
      const display = unique.slice(0, 3).join(', ');

      results.push({
        _source:   'overpass',
        _display:  display,
        _postcode: formattedPostcode,
        _numericHouseNo: parseInt(num, 10) || 0,
        display_name: `${display}, ${formattedPostcode}`,
        address: { road: display, postcode: formattedPostcode },
      });
    }

    // Sort numerically by house number so list reads 2, 4, 6, 8…
    results.sort((a, b) => a._numericHouseNo - b._numericHouseNo || a._display.localeCompare(b._display));

    return results;
  } catch {
    return [];
  }
}

// ── Tier 3: Nominatim reverse → road name ────────────────────────────────────
async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${lat}&lon=${lon}&zoom=17`;
  const res  = await fetch(url, { headers: { 'Accept-Language': 'en-GB' } });
  const data = await res.json();
  return data.address || {};
}

// ── Build address suggestions — three-tier strategy ───────────────────────────
//   Tier 1: getAddress.io (VITE_GETADDRESS_API_KEY) → full PAF house addresses
//   Tier 2: Overpass API (free, no signup)          → OSM house addresses
//   Tier 3: postcodes.io + Nominatim (fallback)     → street names only
async function buildPostcodeSuggestions(postcode) {
  // ── Tier 1: getAddress.io (optional — skipped when no API key) ──────────────
  const gaResults = await fetchGetAddress(postcode);
  if (gaResults && gaResults.length) return gaResults;

  // ── Both Tier 2 & 3 need the postcode lat/lon from postcodes.io ─────────────
  const pc = await lookupPostcodesIO(postcode);
  if (!pc) return [];

  const formattedPostcode = pc.postcode;

  // ── Tier 2: Overpass — house-level OSM data (free, no signup) ───────────────
  const [overpassResult, revResult, searchResult] = await Promise.allSettled([
    fetchOverpassAddresses(pc.latitude, pc.longitude, formattedPostcode),
    reverseGeocode(pc.latitude, pc.longitude),
    searchNominatim(`${formattedPostcode.replace(/\s/g, '')}, UK`),
  ]);

  const overpassData = overpassResult.status === 'fulfilled' ? (overpassResult.value || []) : [];

  if (overpassData.length > 0) {
    // Got house-level results — return up to 30 (covers typical UK postcode ~15–25 addresses)
    return overpassData.slice(0, 30);
  }

  // ── Tier 3: Nominatim street-level fallback ──────────────────────────────────
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

  // Reverse geocode result
  const revRoad = revAddr.road || revAddr.pedestrian || revAddr.footway || '';
  if (revRoad) {
    const suburb   = revAddr.suburb || pc.admin_ward || '';
    const district = (revAddr.city_district || '').replace('London Borough of ', '') || pc.admin_district || '';
    addStreet(revRoad, suburb, district, 'nominatim-reverse');
  }

  // Nominatim search results
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

  // Last resort — postcodes.io district
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

// ── Nominatim free-text search ────────────────────────────────────────────────
async function searchNominatim(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=gb&limit=6&q=${encodeURIComponent(query)}`;
  const res  = await fetch(url, { headers: { 'Accept-Language': 'en-GB' } });
  const data = await res.json();
  return data;
}

// ── Parse any result into { address, postcode } ───────────────────────────────
function parseResult(item) {
  // getAddress.io or Overpass result — already clean
  if (item._source === 'getaddress' || item._source === 'overpass') {
    return { address: item._display, postcode: item._postcode };
  }

  // Nominatim / postcodes.io result
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
  placeholder = 'Enter address or postcode (e.g. HA2 7LH)…',
  className   = 'form-control form-control-lg',
  required    = false,
  id,
  // forceQuery: when this changes to a non-empty string (e.g. a postcode typed
  // in a separate field), the autocomplete will immediately search and open
  // the dropdown showing the matching street list.
  forceQuery  = '',
}) {
  const [suggestions,  setSuggestions]  = useState([]);
  const [loading,      setLoading]      = useState(false);
  const [open,         setOpen]         = useState(false);
  const [focused,      setFocused]      = useState(false);
  const [highlighted,  setHighlighted]  = useState(-1);
  const debounceRef = useRef(null);
  const wrapRef     = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Core fetch logic
  const fetchSuggestions = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) { setSuggestions([]); setOpen(false); return; }

    setLoading(true);
    try {
      let results = [];

      if (isFullPostcode(trimmed)) {
        // Full postcode → postcodes.io + Nominatim reverse
        results = await buildPostcodeSuggestions(trimmed);
        // Fallback to Nominatim if postcodes.io gave nothing
        if (!results.length) {
          const nom = await searchNominatim(trimmed);
          results = nom.filter(d => d.address && (d.address.road || d.address.postcode));
        }
      } else if (isPartialPostcode(trimmed) && trimmed.length >= 3) {
        // Partial postcode → Nominatim free-text (postalcode= often returns empty)
        const nom = await searchNominatim(trimmed);
        results = nom;
      } else {
        // Regular address text → Nominatim free-text
        const nom = await searchNominatim(trimmed);
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

  // When forceQuery changes (triggered by an external postcode field), open the
  // dropdown with a list of matching streets for that postcode.
  // forceQuery format: "HA2 7LH_<timestamp>" — the timestamp suffix lets the
  // same postcode re-trigger (e.g. if user clears address and re-enters same postcode).
  useEffect(() => {
    if (!forceQuery || !forceQuery.trim()) return;
    const query = forceQuery.split('_')[0].trim(); // strip timestamp suffix
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
          Enter your postcode (e.g. HA2 7LH) or start typing your address
        </p>
      )}

      {/* Suggestions dropdown */}
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
            {(suggestions[0]?._source === 'getaddress' || suggestions[0]?._source === 'overpass')
              ? 'Select your full address from the list'
              : 'Select your street — you can add your house/flat number in the address field'}
          </li>
        </ul>
      )}
    </div>
  );
}
