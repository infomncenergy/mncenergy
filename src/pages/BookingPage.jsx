import { useState, useCallback } from 'react';
import { Link }     from 'react-router-dom';
import SectionLabel          from '../components/ui/SectionLabel';
import AddressAutocomplete   from '../components/ui/AddressAutocomplete';
import { PHONE, PHONE_HREF, WHATSAPP } from '../data/constants';
import { API_URL }  from '../config/api';

// UK full postcode regex
const UK_POSTCODE_FULL = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i;

const RESIDENTIAL_TYPES = [
  'Flat / Apartment',
  'Terraced House',
  'Semi-Detached House',
  'Detached House',
  'HMO',
  'Bungalow',
  'Other',
];

const COMMERCIAL_TYPES = [
  'Office',
  'Retail Unit',
  'Restaurant / Café',
  'Hotel',
  'Warehouse',
  'Industrial Unit',
  'Other',
];

const SERVICES = [
  { group: 'Electrical', icon: 'bi-lightning-charge-fill', options: [
    'Residential EICR',
    'Electrical Fault Finding',
    'Fuse Box Installation',
    'Portable Appliance Test',
  ]},
  { group: 'Gas', icon: 'bi-fire', options: [
    'Gas Safety Certificate',
    'Boiler Installation',
    'Boiler Repair',
    'Gas Engineer',
  ]},
  { group: 'Fire Safety', icon: 'bi-shield-fill-check', options: [
    'Fire Safety Certificate',
    'Fire Risk Assessment',
    'Fire Alarm Installation',
    'Fire Extinguisher Inspection',
    'Emergency Lightning Test',
    'Fire Door Certificate',
  ]},
  { group: 'Asbestos & EPC', icon: 'bi-clipboard-check', options: [
    'Asbestos Management Survey',
    'EPC Certificate',
  ]},
];

const STEPS = [
  { icon: 'bi-calendar-check', title: 'Choose a Service', body: 'Select the certificate or inspection you need from our full range of residential and commercial services.' },
  { icon: 'bi-geo-alt-fill', title: 'Enter Property Details', body: 'Tell us your property address, type, and any relevant details so we can match you with the right engineer.' },
  { icon: 'bi-person-check-fill', title: 'Confirm Your Booking', body: 'Choose a convenient date and time. We offer same-day, next-day, and weekend appointments across London.' },
  { icon: 'bi-file-earmark-check-fill', title: 'Receive Your Certificate', body: 'Our certified engineer visits, completes the inspection, and your certificate is emailed to you within 24–48 hours.' },
];

const WHY_BOOK = [
  { icon: 'bi-patch-check-fill',         title: 'Gas Safe & NICEIC Registered',    body: 'All our engineers are fully accredited — Gas Safe registered, NICEIC approved, and BAFE registered for fire safety.' },
  { icon: 'bi-clock-fill',               title: 'Same-Day Appointments Available', body: 'We understand urgency. Same-day and next-day bookings are available subject to engineer availability in your area.' },
  { icon: 'bi-envelope-check-fill',      title: 'Digital Certificates in 24 hrs',  body: 'All certificates are issued digitally and emailed to you within 24–48 hours of the completed inspection.' },
  { icon: 'bi-currency-pound',           title: 'Transparent Fixed Pricing',       body: 'No hidden charges or surprise fees. Our prices are fixed — you always know exactly what you\'ll pay.' },
  { icon: 'bi-geo-alt-fill',             title: 'London Coverage',           body: 'We cover all of London with a large network of local engineers available 7 days a week.' },
  { icon: 'bi-headset',                  title: 'Dedicated Support Team',          body: 'Our UK-based support team is available to help with bookings, queries, and follow-ups Monday to Saturday, 8am–6pm.' },
];

export default function BookingPage() {
  const [step, setStep]     = useState(1);
  const [form, setForm]     = useState({
    services: [],          // array — supports multi-service booking
    propertyCategory: '',  // 'Residential' | 'Commercial'
    propertyType: '',
    bedrooms: '',
    houseNumber: '',       // flat/house number — prepended to address on submit
    address: '',
    postcode: '',
    date: '',
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [privacyChecked, setPrivacyChecked] = useState(false);
  // addressQuery: when set to a valid postcode, AddressAutocomplete opens its
  // dropdown showing a list of streets for that postcode area.
  const [addressQuery, setAddressQuery] = useState('');

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  // Toggle a service in/out of the services array
  const toggleService = (opt) => setForm(f => ({
    ...f,
    services: f.services.includes(opt)
      ? f.services.filter(s => s !== opt)
      : [...f.services, opt],
  }));

  // When the user types a full postcode in the Postcode field, push it to
  // AddressAutocomplete as a forceQuery so it shows a street list to pick from.
  const handlePostcodeLookup = useCallback((postcodeVal) => {
    const clean = postcodeVal.trim().toUpperCase();
    if (!UK_POSTCODE_FULL.test(clean)) return;
    // Normalise spacing (e.g. "HA27LH" → "HA2 7LH") and store as postcode
    const spaced = clean.length > 4
      ? `${clean.slice(0, -3).trim()} ${clean.slice(-3)}`
      : clean;
    update('postcode', spaced);
    // Trigger the address autocomplete to show a list of streets for this postcode
    setAddressQuery(spaced + '_' + Date.now()); // suffix forces re-trigger on repeated same postcode
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError('');

    try {
      // Prepend house/flat number to street address before submitting
      const fullAddress = form.houseNumber
        ? `${form.houseNumber.trim()}, ${form.address}`
        : form.address;

      const res  = await fetch(`${API_URL}/api/bookings`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          ...form,
          address: fullAddress,
          services: form.services,
          service: form.services.join(', '), // backward-compat single string
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Submission failed');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  const step2Valid = form.propertyCategory && form.propertyType && form.houseNumber && form.address && form.postcode && form.date && form.timeSlot;
  const step1Valid = form.services.length > 0;
  const step3Valid = form.name && form.email && form.phone && privacyChecked;

  if (submitted) {
    return (
      <section className="booking-success">
        <div className="container text-center">
          <div className="booking-success__icon">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <h1 className="fw-bold mb-3">Booking Request Received!</h1>
          <p className="text-muted mb-4" style={{ maxWidth: 520, margin: '0 auto 2rem' }}>
            Thank you, <strong>{form.name}</strong>. We have received your booking request for <strong>{form.services.join(', ')}</strong> and will confirm your appointment within 2 hours by email and phone.
          </p>
          <div className="booking-success__details mb-5">
            <div className="row g-3 justify-content-center">
              <div className="col-auto">
                <div className="booking-confirm-badge">
                  <i className="bi bi-envelope-fill me-2"></i>Confirmation sent to {form.email}
                </div>
              </div>
              <div className="col-auto">
                <div className="booking-confirm-badge">
                  <i className="bi bi-telephone-fill me-2"></i>We will call {form.phone} to confirm
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/" className="btn-green">Back to Home</Link>
            <a href={PHONE_HREF} className="btn-outline-green">Call Us Now: {PHONE}</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="booking-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <SectionLabel>BOOK ONLINE</SectionLabel>
              <h1 className="fw-bold mb-3">Book Your Safety Certificate</h1>
              <p className="text-muted mb-4">
                Book your safety certificate online in minutes. Choose your service, enter your property details, and select a convenient appointment. We cover all of London.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="booking-hero__badge">
                  <i className="bi bi-patch-check-fill me-2"></i> Gas Safe Registered
                </div>
                <div className="booking-hero__badge">
                  <i className="bi bi-patch-check-fill me-2"></i> NICEIC Approved
                </div>
                <div className="booking-hero__badge">
                  <i className="bi bi-patch-check-fill me-2"></i> BAFE Registered
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-hero__card">
                <div className="booking-hero__card-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <h5 className="fw-bold mb-1">Prefer to Book by Phone?</h5>
                <p className="text-muted mb-3">Call our team and we will book your appointment instantly.</p>
                <a href={PHONE_HREF} className="btn-green w-100 text-center d-block mb-2">{PHONE}</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                   className="btn-outline-green w-100 text-center d-block">
                  <i className="bi bi-whatsapp me-2"></i>WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="booking-progress">
        <div className="container">
          <div className="booking-progress__steps">
            {['Select Service', 'Property Details', 'Your Details', 'Confirm'].map((label, i) => (
              <div
                key={i}
                className={`booking-progress__step${step > i + 1 ? ' done' : ''}${step === i + 1 ? ' active' : ''}`}
                onClick={() => step > i + 1 && setStep(i + 1)}
              >
                <div className="booking-progress__num">
                  {step > i + 1 ? <i className="bi bi-check-lg"></i> : i + 1}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps — plain div wrapper (no <form>) to prevent accidental Enter-key submission */}
      <section className="booking-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* Step 1: Select Service(s) */}
              {step === 1 && (
                <div className="booking-step-panel">
                  <h3 className="fw-bold mb-1">Select Your Service(s)</h3>
                  <p className="text-muted mb-1">You can select <strong>multiple services</strong> for the same visit — tick all that apply.</p>
                  {form.services.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mb-3 mt-2">
                      <span className="badge rounded-pill px-3 py-2" style={{ background: 'var(--brand-gradient)', color: '#fff', fontSize: '0.82rem' }}>
                        <i className="bi bi-check-circle-fill me-2"></i>
                        {form.services.length} service{form.services.length > 1 ? 's' : ''} selected
                      </span>
                      {form.services.map(s => (
                        <span key={s} className="badge rounded-pill px-3 py-2" style={{ background: 'var(--purple-light)', color: 'var(--accent)', fontSize: '0.78rem', border: '1px solid rgba(107,47,160,0.2)' }}>
                          {s}
                          <button type="button" className="ms-2 p-0 border-0 bg-transparent" style={{ color: 'var(--accent)', lineHeight: 1 }} onClick={() => toggleService(s)}>
                            <i className="bi bi-x"></i>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="row g-3 mt-1">
                    {SERVICES.map((group) => (
                      <div className="col-12" key={group.group}>
                        <p className="fw-semibold text-uppercase small text-muted mb-2">
                          <i className={`bi ${group.icon} me-2`} style={{ color: 'var(--accent)' }}></i>
                          {group.group}
                        </p>
                        <div className="row g-2">
                          {group.options.map((opt) => {
                            const isSelected = form.services.includes(opt);
                            return (
                              <div className="col-md-6" key={opt}>
                                <div
                                  className={`booking-service-card${isSelected ? ' selected' : ''}`}
                                  onClick={() => toggleService(opt)}
                                  role="checkbox"
                                  aria-checked={isSelected}
                                  tabIndex={0}
                                  onKeyDown={(e) => e.key === 'Enter' && toggleService(opt)}
                                >
                                  <span className="flex-grow-1">{opt}</span>
                                  <span
                                    className="ms-auto flex-shrink-0"
                                    style={{
                                      width: 20, height: 20, borderRadius: 5,
                                      border: isSelected ? 'none' : '2px solid var(--glass-rim)',
                                      background: isSelected ? 'var(--brand-gradient)' : 'transparent',
                                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}
                                  >
                                    {isSelected && <i className="bi bi-check text-white" style={{ fontSize: '0.75rem' }}></i>}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-end">
                    <button
                      type="button"
                      className="btn-green"
                      disabled={!step1Valid}
                      onClick={() => { if (step1Valid) setStep(2); }}
                    >
                      Continue <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {step === 2 && (
                <div className="booking-step-panel">
                  <h3 className="fw-bold mb-1">Property Details</h3>
                  <p className="text-muted mb-4">Tell us about the property and your preferred appointment.</p>
                  <div className="row g-3">

                    {/* Property Category — Residential vs Commercial */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">Property Category *</label>
                      <div className="d-flex gap-3">
                        {['Residential', 'Commercial'].map(cat => (
                          <div
                            key={cat}
                            className={`booking-service-card flex-fill text-center${form.propertyCategory === cat ? ' selected' : ''}`}
                            style={{ padding: '16px 12px' }}
                            onClick={() => {
                              update('propertyCategory', cat);
                              update('propertyType', '');
                              update('bedrooms', '');
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && (update('propertyCategory', cat), update('propertyType', ''), update('bedrooms', ''))}
                          >
                            <i className={`bi ${cat === 'Residential' ? 'bi-house-fill' : 'bi-building-fill'} me-2`}></i>
                            {cat}
                            {form.propertyCategory === cat && <i className="bi bi-check-circle-fill ms-2"></i>}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Property Type — filtered by category */}
                    {form.propertyCategory && (
                      <div className={form.propertyCategory === 'Residential' ? 'col-md-6' : 'col-md-12'}>
                        <label className="form-label fw-semibold">Property Type *</label>
                        <select
                          className="form-select form-select-lg"
                          value={form.propertyType}
                          onChange={e => update('propertyType', e.target.value)}
                        >
                          <option value="">Select property type</option>
                          {(form.propertyCategory === 'Residential' ? RESIDENTIAL_TYPES : COMMERCIAL_TYPES).map(t => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Bedrooms — only for Residential */}
                    {form.propertyCategory === 'Residential' && (
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Number of Bedrooms</label>
                        <select
                          className="form-select form-select-lg"
                          value={form.bedrooms}
                          onChange={e => update('bedrooms', e.target.value)}
                        >
                          <option value="">Select bedrooms</option>
                          <option>Studio</option>
                          <option>1 Bedroom</option>
                          <option>2 Bedrooms</option>
                          <option>3 Bedrooms</option>
                          <option>4 Bedrooms</option>
                          <option>5+ Bedrooms</option>
                        </select>
                      </div>
                    )}

                    {/* House / Flat No. + Street Address */}
                    {form.propertyCategory && (
                      <>
                        <div className="col-md-3">
                          <label className="form-label fw-semibold">
                            {form.propertyCategory === 'Commercial' ? 'Unit / Floor No.' : 'House / Flat No.'} *
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder={form.propertyCategory === 'Commercial' ? 'e.g. Unit 5' : 'e.g. 36 or Flat 3B'}
                            value={form.houseNumber}
                            onChange={e => update('houseNumber', e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                          />
                        </div>
                        <div className="col-md-9">
                          <label className="form-label fw-semibold">Street Address *</label>
                          <AddressAutocomplete
                            id="property-address"
                            placeholder="Enter postcode below, then select your street…"
                            value={form.address}
                            forceQuery={addressQuery}
                            onChange={val => update('address', val)}
                            onSelect={({ address, postcode }) => {
                              update('address', address);
                              if (postcode) update('postcode', postcode);
                            }}
                          />
                        </div>
                      </>
                    )}

                    {/* Postcode — triggers the address dropdown above */}
                    {form.propertyCategory && (
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Postcode *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="e.g. HA2 7LH"
                          value={form.postcode}
                          onChange={e => {
                            const v = e.target.value.toUpperCase();
                            update('postcode', v);
                            if (UK_POSTCODE_FULL.test(v.trim())) handlePostcodeLookup(v);
                          }}
                          onBlur={e => handlePostcodeLookup(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                        />
                        <small className="text-muted d-block mt-1" style={{ fontSize: '.73rem' }}>
                          <i className="bi bi-lightbulb me-1" />
                          Enter your postcode — your street will appear in the field above to select
                        </small>
                      </div>
                    )}

                    {/* Date & Time */}
                    {form.propertyCategory && (
                      <>
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Preferred Date *</label>
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            value={form.date}
                            onChange={e => update('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">Preferred Time *</label>
                          <select
                            className="form-select form-select-lg"
                            value={form.timeSlot}
                            onChange={e => update('timeSlot', e.target.value)}
                          >
                            <option value="">Select time</option>
                            <option>Morning (8am – 12pm)</option>
                            <option>Afternoon (12pm – 5pm)</option>
                            <option>Evening (5pm – 8pm)</option>
                            <option>Any time</option>
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-4 d-flex gap-3 justify-content-between">
                    <button type="button" className="btn-outline-green" onClick={() => setStep(1)}>
                      <i className="bi bi-arrow-left me-2"></i> Back
                    </button>
                    <button
                      type="button"
                      className="btn-green"
                      disabled={!step2Valid}
                      onClick={() => { if (step2Valid) setStep(3); }}
                    >
                      Continue <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Your Details */}
              {step === 3 && (
                <div className="booking-step-panel">
                  <h3 className="fw-bold mb-1">Your Contact Details</h3>
                  <p className="text-muted mb-4">We will use these details to confirm your booking.</p>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label fw-semibold">Full Name *</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email Address *</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="07700 000000"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Additional Notes <span className="text-muted fw-normal">(optional)</span></label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Any access instructions, special requirements, or questions for the engineer..."
                        value={form.notes}
                        onChange={e => update('notes', e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="privacy"
                          checked={privacyChecked}
                          onChange={e => setPrivacyChecked(e.target.checked)}
                        />
                        <label className="form-check-label text-muted" htmlFor="privacy">
                          I agree to the <Link to="/" style={{ color: 'var(--accent2)' }}>Privacy Policy</Link> and consent to being contacted regarding my booking.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 d-flex gap-3 justify-content-between">
                    <button type="button" className="btn-outline-green" onClick={() => setStep(2)}>
                      <i className="bi bi-arrow-left me-2"></i> Back
                    </button>
                    <button
                      type="button"
                      className="btn-green"
                      disabled={!step3Valid}
                      onClick={() => { if (step3Valid) setStep(4); }}
                    >
                      Review Booking <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <div className="booking-step-panel">
                  <h3 className="fw-bold mb-1">Review &amp; Confirm</h3>
                  <p className="text-muted mb-4">Please check your booking details before submitting.</p>

                  <div className="booking-summary">
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-tools me-2"></i>Service{form.services.length > 1 ? 's' : ''}</span>
                      <span className="booking-summary__value">
                        <span className="d-flex flex-wrap gap-1">
                          {form.services.map(s => (
                            <span key={s} className="badge rounded-pill px-2 py-1" style={{ background: 'var(--purple-light)', color: 'var(--accent)', fontSize: '0.78rem', border: '1px solid rgba(107,47,160,0.2)' }}>{s}</span>
                          ))}
                        </span>
                      </span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-house me-2"></i>Property</span>
                      <span className="booking-summary__value">
                        {form.propertyCategory} · {form.propertyType}{form.bedrooms ? ` · ${form.bedrooms}` : ''}
                      </span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-geo-alt me-2"></i>Address</span>
                      <span className="booking-summary__value">
                        {form.houseNumber ? `${form.houseNumber}, ` : ''}{form.address}{form.postcode ? `, ${form.postcode}` : ''}
                      </span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-calendar3 me-2"></i>Appointment</span>
                      <span className="booking-summary__value">{form.date} · {form.timeSlot}</span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-person me-2"></i>Name</span>
                      <span className="booking-summary__value">{form.name}</span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-envelope me-2"></i>Email</span>
                      <span className="booking-summary__value">{form.email}</span>
                    </div>
                    <div className="booking-summary__row">
                      <span className="booking-summary__label"><i className="bi bi-telephone me-2"></i>Phone</span>
                      <span className="booking-summary__value">{form.phone}</span>
                    </div>
                    {form.notes && (
                      <div className="booking-summary__row">
                        <span className="booking-summary__label"><i className="bi bi-chat-text me-2"></i>Notes</span>
                        <span className="booking-summary__value">{form.notes}</span>
                      </div>
                    )}
                  </div>

                  <div className="booking-summary__notice mt-3">
                    <i className="bi bi-info-circle-fill me-2"></i>
                    Our team will confirm your appointment within 2 hours by email and phone call.
                  </div>

                  {submitError && (
                    <div className="alert alert-danger mt-3" style={{ borderRadius: 10 }}>
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>{submitError}
                    </div>
                  )}
                  <div className="mt-4 d-flex gap-3 justify-content-between">
                    <button type="button" className="btn-outline-green" onClick={() => setStep(3)}>
                      <i className="bi bi-arrow-left me-2"></i> Back
                    </button>
                    <button
                      type="button"
                      className="btn-green px-5"
                      disabled={submitting}
                      onClick={handleSubmit}
                    >
                      {submitting
                        ? <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Submitting…</>
                        : <><i className="bi bi-check-circle me-2"></i> Confirm Booking</>
                      }
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="booking-sidebar">
                <h5 className="fw-bold mb-4">Why Book With Us?</h5>
                {WHY_BOOK.map((item, i) => (
                  <div className="booking-sidebar__item" key={i}>
                    <div className="booking-sidebar__icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="text-muted small mb-0">{item.body}</p>
                    </div>
                  </div>
                ))}
                <div className="booking-sidebar__cta">
                  <p className="fw-semibold mb-2">Prefer to speak to someone?</p>
                  <a href={PHONE_HREF} className="btn-green w-100 text-center d-block mb-2">
                    <i className="bi bi-telephone-fill me-2"></i>{PHONE}
                  </a>
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                     className="btn-outline-green w-100 text-center d-block">
                    <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <SectionLabel center>HOW IT WORKS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">From Booking to Certificate in 4 Simple Steps</h2>
          <div className="row g-4">
            {STEPS.map((s, i) => (
              <div className="col-md-3 col-sm-6 text-center" key={i}>
                <div className="process-step-card">
                  <div className="process-step-card__num">{i + 1}</div>
                  <div className="process-step-card__icon">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h6 className="fw-bold mt-3 mb-2">{s.title}</h6>
                  <p className="text-muted small mb-0">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
