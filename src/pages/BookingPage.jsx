import { useState } from 'react';
import { Link }     from 'react-router-dom';
import SectionLabel          from '../components/ui/SectionLabel';
import AddressAutocomplete   from '../components/ui/AddressAutocomplete';
import { PHONE, PHONE_HREF, WHATSAPP } from '../data/constants';
import { API_URL }  from '../config/api';

const SERVICES = [
  { group: 'Electrical', icon: 'bi-lightning-charge-fill', options: [
    'EICR Certificate (Residential)',
    'EICR Certificate (Commercial)',
    'Consumer Unit / Fuse Box Upgrade',
    'PAT Testing',
    'Electrical Fault Finding',
  ]},
  { group: 'Gas Services', icon: 'bi-fire', options: [
    'Landlord Gas Safety Certificate (CP12)',
    'Commercial Gas Safety Certificate',
    'Boiler Service',
    'Boiler Installation',
    'Boiler Repair',
  ]},
  { group: 'Fire Safety', icon: 'bi-shield-fill-check', options: [
    'Fire Risk Assessment (Residential)',
    'Fire Risk Assessment (Commercial)',
    'Fire Alarm Certificate (Residential)',
    'Fire Alarm Certificate (Commercial)',
    'Emergency Lights Certificate (Residential)',
    'Emergency Lights Certificate (Commercial)',
    'Fire Door Inspection',
    'Fire Extinguisher Servicing',
  ]},
  { group: 'Asbestos & EPC', icon: 'bi-clipboard-check', options: [
    'Residential Asbestos Survey',
    'Commercial Asbestos Survey',
    'Residential EPC',
    'Commercial EPC',
  ]},
];

const STEPS = [
  { icon: 'bi-calendar-check', title: 'Choose a Service', body: 'Select the certificate or inspection you need from our full range of residential and commercial services.' },
  { icon: 'bi-geo-alt-fill', title: 'Enter Property Details', body: 'Tell us your property address, type, and any relevant details so we can match you with the right engineer.' },
  { icon: 'bi-person-check-fill', title: 'Confirm Your Booking', body: 'Choose a convenient date and time. We offer same-day, next-day, and weekend appointments across London and the M25.' },
  { icon: 'bi-file-earmark-check-fill', title: 'Receive Your Certificate', body: 'Our certified engineer visits, completes the inspection, and your certificate is emailed to you within 24–48 hours.' },
];

const WHY_BOOK = [
  { icon: 'bi-patch-check-fill',         title: 'Gas Safe & NICEIC Registered',    body: 'All our engineers are fully accredited — Gas Safe registered, NICEIC approved, and BAFE registered for fire safety.' },
  { icon: 'bi-clock-fill',               title: 'Same-Day Appointments Available', body: 'We understand urgency. Same-day and next-day bookings are available subject to engineer availability in your area.' },
  { icon: 'bi-envelope-check-fill',      title: 'Digital Certificates in 24 hrs',  body: 'All certificates are issued digitally and emailed to you within 24–48 hours of the completed inspection.' },
  { icon: 'bi-currency-pound',           title: 'Transparent Fixed Pricing',       body: 'No hidden fees or surprise charges. Our prices are fixed and include VAT — you always know exactly what you\'ll pay.' },
  { icon: 'bi-geo-alt-fill',             title: 'London & M25 Coverage',           body: 'We cover all of London and the wider M25 area with a large network of local engineers available 7 days a week.' },
  { icon: 'bi-headset',                  title: 'Dedicated Support Team',          body: 'Our UK-based support team is available to help with bookings, queries, and follow-ups Monday to Saturday, 8am–6pm.' },
];

export default function BookingPage() {
  const [step, setStep]     = useState(1);
  const [form, setForm]     = useState({
    service: '',
    propertyType: '',
    bedrooms: '',
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

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const res  = await fetch(`${API_URL}/api/bookings`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
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

  if (submitted) {
    return (
      <section className="booking-success">
        <div className="container text-center">
          <div className="booking-success__icon">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <h1 className="fw-bold mb-3">Booking Request Received!</h1>
          <p className="text-muted mb-4" style={{ maxWidth: 520, margin: '0 auto 2rem' }}>
            Thank you, <strong>{form.name}</strong>. We have received your booking request for <strong>{form.service}</strong> and will confirm your appointment within 2 hours by email and phone.
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
              <h1 className="fw-bold mb-3">Residential Booking Service</h1>
              <p className="text-muted mb-4">
                Book your safety certificate online in minutes. Choose your service, enter your property details, and select a convenient appointment. We cover all of London and the M25 area.
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

      {/* Form */}
      <section className="booking-form-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>

                {/* Step 1: Select Service */}
                {step === 1 && (
                  <div className="booking-step-panel">
                    <h3 className="fw-bold mb-1">Select Your Service</h3>
                    <p className="text-muted mb-4">Choose the certificate or inspection you require.</p>
                    <div className="row g-3">
                      {SERVICES.map((group) => (
                        <div className="col-12" key={group.group}>
                          <p className="fw-semibold text-uppercase small text-muted mb-2">{group.group}</p>
                          <div className="row g-2">
                            {group.options.map((opt) => (
                              <div className="col-md-6" key={opt}>
                                <div
                                  className={`booking-service-card${form.service === opt ? ' selected' : ''}`}
                                  onClick={() => update('service', opt)}
                                >
                                  <i className={`bi ${group.icon || 'bi-clipboard-check'} me-2`}></i>
                                  {opt}
                                  {form.service === opt && <i className="bi bi-check-circle-fill ms-auto"></i>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-end">
                      <button
                        type="button"
                        className="btn-green"
                        disabled={!form.service}
                        onClick={() => setStep(2)}
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
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Property Type *</label>
                        <select
                          className="form-select form-select-lg"
                          value={form.propertyType}
                          onChange={e => update('propertyType', e.target.value)}
                          required
                        >
                          <option value="">Select property type</option>
                          <option>Flat / Apartment</option>
                          <option>Terraced House</option>
                          <option>Semi-Detached House</option>
                          <option>Detached House</option>
                          <option>HMO</option>
                          <option>Bungalow</option>
                          <option>Commercial Property</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Number of Bedrooms *</label>
                        <select
                          className="form-select form-select-lg"
                          value={form.bedrooms}
                          onChange={e => update('bedrooms', e.target.value)}
                          required
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
                      <div className="col-12">
                        <label className="form-label fw-semibold">Property Address *</label>
                        <AddressAutocomplete
                          id="property-address"
                          value={form.address}
                          onChange={val => update('address', val)}
                          onSelect={({ address, postcode }) => {
                            update('address', address);
                            if (postcode) update('postcode', postcode);
                          }}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Postcode *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="e.g. SW1A 1AA"
                          value={form.postcode}
                          onChange={e => update('postcode', e.target.value.toUpperCase())}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Preferred Date *</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          value={form.date}
                          onChange={e => update('date', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Preferred Time *</label>
                        <select
                          className="form-select form-select-lg"
                          value={form.timeSlot}
                          onChange={e => update('timeSlot', e.target.value)}
                          required
                        >
                          <option value="">Select time</option>
                          <option>Morning (8am – 12pm)</option>
                          <option>Afternoon (12pm – 5pm)</option>
                          <option>Evening (5pm – 8pm)</option>
                          <option>Any time</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 d-flex gap-3 justify-content-between">
                      <button type="button" className="btn-outline-green" onClick={() => setStep(1)}>
                        <i className="bi bi-arrow-left me-2"></i> Back
                      </button>
                      <button
                        type="button"
                        className="btn-green"
                        disabled={!form.propertyType || !form.address || !form.postcode || !form.date || !form.timeSlot}
                        onClick={() => setStep(3)}
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
                          required
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
                          required
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
                          required
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
                          <input className="form-check-input" type="checkbox" id="privacy" required />
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
                        disabled={!form.name || !form.email || !form.phone}
                        onClick={() => setStep(4)}
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
                        <span className="booking-summary__label"><i className="bi bi-tools me-2"></i>Service</span>
                        <span className="booking-summary__value">{form.service}</span>
                      </div>
                      <div className="booking-summary__row">
                        <span className="booking-summary__label"><i className="bi bi-house me-2"></i>Property Type</span>
                        <span className="booking-summary__value">{form.propertyType} · {form.bedrooms}</span>
                      </div>
                      <div className="booking-summary__row">
                        <span className="booking-summary__label"><i className="bi bi-geo-alt me-2"></i>Address</span>
                        <span className="booking-summary__value">{form.address}, {form.postcode}</span>
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
                      <button type="submit" className="btn-green px-5" disabled={submitting}>
                        {submitting
                          ? <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Submitting…</>
                          : <><i className="bi bi-check-circle me-2"></i> Confirm Booking</>
                        }
                      </button>
                    </div>
                  </div>
                )}

              </form>
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
