/**
 * AddressAutocomplete
 * -------------------
 * Renders a text input powered by Google Places Autocomplete (UK only).
 * When the user picks a suggestion, it calls onSelect({ address, postcode })
 * so the parent can fill both the address AND postcode fields automatically.
 *
 * Requires:  VITE_GOOGLE_MAPS_API_KEY in your .env file.
 *
 * Props:
 *   value       {string}   – controlled input value
 *   onChange    {fn}       – called with raw string while the user types
 *   onSelect    {fn}       – called with { address, postcode } on place pick
 *   placeholder {string}
 *   className   {string}
 *   required    {bool}
 */
import { useEffect, useRef, useState } from 'react';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

/* ── Singleton script loader ─────────────────────────────────────────────── */
let _state = 'idle'; // 'idle' | 'loading' | 'ready' | 'error'
const _queue = [];

function loadScript(cb) {
  if (_state === 'ready')  { cb(null); return; }
  if (_state === 'error')  { cb(new Error('Google Maps failed to load')); return; }
  _queue.push(cb);
  if (_state === 'loading') return;

  _state = 'loading';
  const s = document.createElement('script');
  s.src   = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&loading=async`;
  s.async = true;
  s.defer = true;
  s.onload  = () => { _state = 'ready'; _queue.forEach(fn => fn(null));  _queue.length = 0; };
  s.onerror = () => { _state = 'error'; _queue.forEach(fn => fn(new Error('Script failed'))); _queue.length = 0; };
  document.head.appendChild(s);
}

/* ── Helper: extract parts from Google place ─────────────────────────────── */
function parsePlace(place) {
  const get = (type, nameType = 'long_name') =>
    (place.address_components || []).find(c => c.types.includes(type))?.[nameType] ?? '';

  const streetNum  = get('street_number');
  const route      = get('route');
  const sublocal   = get('sublocality_level_1');
  const locality   = get('locality') || get('postal_town');
  const postcode   = get('postal_code');

  // Build a clean street address (no postcode, no country)
  const parts = [streetNum, route, sublocal, locality].filter(Boolean);
  const address = parts.length ? parts.join(', ') : place.formatted_address.replace(/,?\s*[A-Z]{1,2}\d[\d A-Z]*\d[A-Z]{2}\s*,?\s*UK$/, '').trim();

  return { address, postcode };
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = 'Start typing your address or postcode…',
  className = 'form-control form-control-lg',
  required = false,
  id,
}) {
  const inputRef        = useRef(null);
  const acRef           = useRef(null);   // Autocomplete instance
  const onSelectRef     = useRef(onSelect);
  const [ready, setReady]   = useState(_state === 'ready');
  const [error, setError]   = useState(null);
  const [active, setActive] = useState(false);

  // Keep onSelect ref fresh without re-running effect
  useEffect(() => { onSelectRef.current = onSelect; }, [onSelect]);

  // Load Google Maps script once
  useEffect(() => {
    if (!API_KEY) {
      setError('missing-key');
      return;
    }
    if (_state === 'ready') { setReady(true); return; }
    loadScript(err => {
      if (err) { setError('load-failed'); return; }
      setReady(true);
    });
  }, []);

  // Attach Autocomplete to the input once script is ready
  useEffect(() => {
    if (!ready || !inputRef.current || acRef.current) return;

    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'gb' },
      fields: ['address_components', 'formatted_address'],
      types: ['address'],
    });

    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (!place?.address_components) return;
      const parsed = parsePlace(place);
      onSelectRef.current(parsed);
    });

    acRef.current = ac;
  }, [ready]);

  // ── No API key configured ──
  if (error === 'missing-key') {
    return (
      <div className="address-autocomplete">
        <input
          type="text"
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          id={id}
          autoComplete="off"
        />
        <div className="address-autocomplete__notice address-autocomplete__notice--warn">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Address autocomplete requires <code>VITE_GOOGLE_MAPS_API_KEY</code> in your <code>.env</code> file.
        </div>
      </div>
    );
  }

  return (
    <div className={`address-autocomplete${active ? ' address-autocomplete--active' : ''}`}>
      <div className="address-autocomplete__wrap">
        <i className="bi bi-search address-autocomplete__icon"></i>
        <input
          ref={inputRef}
          type="text"
          id={id}
          className={`address-autocomplete__input ${className}`}
          placeholder={ready ? placeholder : 'Loading address search…'}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          required={required}
          autoComplete="off"
          disabled={!ready && !error}
        />
        {!ready && !error && (
          <span className="address-autocomplete__spinner"></span>
        )}
      </div>
      {ready && (
        <p className="address-autocomplete__hint">
          <i className="bi bi-lightning-charge-fill me-1"></i>
          Start typing — suggestions will appear automatically
        </p>
      )}
    </div>
  );
}
