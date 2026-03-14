/**
 * AddressAutocomplete
 * -------------------
 * UK address lookup powered by OpenStreetMap Nominatim.
 * No API key needed. Works on localhost and every domain.
 * Debounces input → calls Nominatim → shows a styled dropdown.
 *
 * Props:
 *   value       {string}  – controlled input value
 *   onChange    {fn}      – called with raw string while typing
 *   onSelect    {fn}      – called with { address, postcode } on pick
 *   placeholder {string}
 *   className   {string}
 *   required    {bool}
 *   id          {string}
 */
import { useEffect, useRef, useState, useCallback } from 'react';

/* ── Parse Nominatim result into { address, postcode } ───────────────────── */
function parseNominatim(item) {
  const a = item.address || {};

  const parts = [
    a.house_number,
    a.road,
    a.neighbourhood || a.suburb,
    a.town || a.city || a.village || a.county,
  ].filter(Boolean);

  const address = parts.length
    ? parts.join(', ')
    : (item.display_name || '').split(',').slice(0, 3).join(',').trim();

  const postcode = a.postcode || '';
  return { address, postcode };
}

/* ── Trim long display names for the dropdown ────────────────────────────── */
function formatLabel(displayName) {
  // Keep first 4 comma-parts only — usually enough for UK addresses
  return displayName.split(',').slice(0, 4).join(',').trim();
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = 'Start typing your address or postcode…',
  className   = 'form-control form-control-lg',
  required    = false,
  id,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading,     setLoading]     = useState(false);
  const [open,        setOpen]        = useState(false);
  const [focused,     setFocused]     = useState(false);
  const debounceRef = useRef(null);
  const wrapRef     = useRef(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Fetch suggestions from Nominatim */
  const fetchSuggestions = useCallback(async (query) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    try {
      const url =
        `https://nominatim.openstreetmap.org/search` +
        `?format=json&addressdetails=1&countrycodes=gb&limit=6` +
        `&q=${encodeURIComponent(query)}`;

      const res  = await fetch(url, {
        headers: {
          'Accept-Language': 'en-GB',
          'Accept': 'application/json',
        },
      });
      const data = await res.json();

      // Filter for sensible UK results (has a road or postcode)
      const filtered = data.filter(
        (d) => d.address && (d.address.road || d.address.postcode)
      );
      setSuggestions(filtered.length ? filtered : data.slice(0, 5));
      setOpen(filtered.length > 0 || data.length > 0);
    } catch {
      setSuggestions([]);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }, []);

  /* Handle typing with 350 ms debounce */
  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    clearTimeout(debounceRef.current);
    if (val.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 350);
  };

  /* Handle suggestion pick */
  const handlePick = (item) => {
    const parsed = parseNominatim(item);
    onChange(parsed.address);
    onSelect(parsed);
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div
      ref={wrapRef}
      className={`address-autocomplete${focused ? ' address-autocomplete--active' : ''}`}
    >
      <div className="address-autocomplete__wrap">
        <i className="bi bi-geo-alt-fill address-autocomplete__icon"></i>
        <input
          type="text"
          id={id}
          className={`address-autocomplete__input ${className}`}
          placeholder={loading ? 'Searching…' : placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => { setFocused(true); if (suggestions.length) setOpen(true); }}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
          required={required}
          autoComplete="off"
        />
        {loading && <span className="address-autocomplete__spinner" />}
      </div>

      {!open && !loading && value.length === 0 && (
        <p className="address-autocomplete__hint">
          <i className="bi bi-lightning-charge-fill me-1" />
          Start typing your UK address or postcode
        </p>
      )}

      {/* Suggestions dropdown */}
      {open && suggestions.length > 0 && (
        <ul className="address-autocomplete__dropdown">
          {suggestions.map((s, i) => {
            const parsed = parseNominatim(s);
            return (
              <li
                key={i}
                className="address-autocomplete__option"
                onMouseDown={(e) => { e.preventDefault(); handlePick(s); }}
              >
                <i className="bi bi-geo-alt me-2" style={{ color: 'var(--accent2)', flexShrink: 0 }} />
                <span>
                  <strong>{parsed.address}</strong>
                  {parsed.postcode && (
                    <span className="address-autocomplete__postcode">&nbsp;· {parsed.postcode}</span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
