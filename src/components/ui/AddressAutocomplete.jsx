/**
 * AddressAutocomplete
 * -------------------
 * UK address lookup using two free APIs:
 *
 *  ① postcodes.io  — validates postcode, returns lat/lon + district
 *  ② Nominatim     — reverse geocode at lat/lon → gets road name
 *
 * When input looks like a UK postcode (e.g. "HA2 7LH", "SW1A 1AA"):
 *   → postcodes.io validates it, Nominatim gives the street name.
 *   Result: "Imperial Drive, Rayners Lane, Harrow · HA2 7LH"
 *
 * When input looks like an address (e.g. "22 Baker Street"):
 *   → Nominatim free-text search.
 *
 * No API keys needed. Works on localhost and production.
 */
import { useEffect, useRef, useState, useCallback } from 'react';

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

// ── Step 2: Nominatim reverse → road name ────────────────────────────────────
async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&lat=${lat}&lon=${lon}&zoom=17`;
  const res  = await fetch(url, { headers: { 'Accept-Language': 'en-GB' } });
  const data = await res.json();
  return data.address || {};
}

// ── Build a list of address suggestions from postcodes.io + Nominatim ────────
// Returns multiple street-level results so the user can pick the correct street
// from a dropdown, then type their house/flat number in the separate field.
async function buildPostcodeSuggestions(postcode) {
  const pc = await lookupPostcodesIO(postcode);
  if (!pc) return [];

  const formattedPostcode = pc.postcode;

  // Run reverse geocode + Nominatim search in parallel for maximum results
  const [revResult, searchResult] = await Promise.allSettled([
    reverseGeocode(pc.latitude, pc.longitude),
    searchNominatim(`${formattedPostcode.replace(/\s/g, '')}, UK`),
  ]);

  const revAddr    = revResult.status    === 'fulfilled' ? (revResult.value    || {}) : {};
  const searchData = searchResult.status === 'fulfilled' ? (searchResult.value || []) : [];

  // Collect unique streets — no duplicates
  const seen    = new Set();
  const results = [];

  const addResult = (road, suburb, district, source) => {
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

  // 1. Reverse geocode result (most accurate for the postcode centroid)
  const revRoad = revAddr.road || revAddr.pedestrian || revAddr.footway || '';
  if (revRoad) {
    const suburb   = revAddr.suburb || pc.admin_ward || '';
    const district = (revAddr.city_district || '').replace('London Borough of ', '') || pc.admin_district || '';
    addResult(revRoad, suburb, district, 'nominatim-reverse');
  }

  // 2. Nominatim search results — multiple streets in the same postcode area
  for (const r of searchData) {
    if (!r.address) continue;
    const a    = r.address;
    const road = a.road || a.pedestrian || a.footway || '';
    if (!road) continue;
    const suburb   = a.suburb || a.neighbourhood || pc.admin_ward || '';
    const district = (a.city_district || '').replace('London Borough of ', '') || a.city || a.town || pc.admin_district || '';
    addResult(road, suburb, district, 'nominatim-search');
    if (results.length >= 8) break;
  }

  // Fallback to postcodes.io district data if Nominatim found nothing
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
  const a = item.address || {};

  const road   = a.road || a.pedestrian || a.footway || '';
  const houseNo = a.house_number ? `${a.house_number} ` : '';
  const street = `${houseNo}${road}`.trim();

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
            Select your street, then add your house/flat number
          </li>
        </ul>
      )}
    </div>
  );
}
