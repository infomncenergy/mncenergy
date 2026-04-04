import { useState } from 'react';
import { Link }      from 'react-router-dom';
import SectionLabel  from '../components/ui/SectionLabel';
import { PHONE, PHONE_HREF, WHATSAPP } from '../data/constants';
import { API_URL }   from '../config/api';

const SUBJECTS = [
  'General Enquiry',
  'Book a Service',
  'Quote Request',
  'Certificate Query',
  'Complaint',
  'Other',
];

const CONTACT_CARDS = [
  { icon: 'bi-telephone-fill', title: 'Call Us',       lines: [PHONE, 'Mon–Sat: 8am – 6pm'],                         href: PHONE_HREF,                    cta: 'Call Now',    color: 'purple'   },
  { icon: 'bi-whatsapp',       title: 'WhatsApp',      lines: ['Chat with our team', 'Fast response guaranteed'],    href: `https://wa.me/${WHATSAPP}`,   cta: 'Message Us',  color: 'whatsapp' },
  { icon: 'bi-envelope-fill',  title: 'Email Us',      lines: ['info@mncenergy.co.uk', 'Reply within 24 hours'],    href: 'mailto:info@mncenergy.co.uk', cta: 'Send Email',  color: 'blue'     },
  { icon: 'bi-geo-alt-fill',   title: 'Coverage Area', lines: ['London', 'Engineers available 7 days a week'], href: null,                      cta: null,          color: 'amber'    },
];

const FAQS = [
  { q: 'How quickly can you respond to my enquiry?', a: 'We aim to respond to all email enquiries within 24 hours. For urgent matters, please call us directly — our team is available Mon–Sat 8am–6pm.' },
  { q: 'Can I get a quote before booking?',          a: 'Absolutely. Simply fill in the contact form with the details of your property and the service you need, and we will send you a fixed-price quote with no hidden fees.' },
  { q: 'Do you cover my area?',                      a: 'We cover all of London. If you are unsure whether we cover your postcode, just send us a message and we will confirm.' },
  { q: 'I have a complaint — how do I raise it?',    a: 'We take all feedback seriously. Please select "Complaint" from the subject dropdown and describe the issue. Our customer service team will investigate and respond within 2 business days.' },
];

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res  = await fetch(`${API_URL}/api/contacts`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Submission failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <SectionLabel>GET IN TOUCH</SectionLabel>
              <h1 className="fw-bold mb-3">Contact Us</h1>
              <p className="mb-4" style={{ fontSize: '1.05rem' }}>
                Have a question about our services, need a quote, or want to check your certificate? Our team is here to help. We aim to respond within 24 hours.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="booking-hero__badge"><i className="bi bi-clock-fill me-2"></i> Mon–Sat 8am–6pm</div>
                <div className="booking-hero__badge"><i className="bi bi-patch-check-fill me-2"></i> Fast Response</div>
                <div className="booking-hero__badge"><i className="bi bi-geo-alt-fill me-2"></i> London</div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-hero__card">
                <div className="booking-hero__card-icon"><i className="bi bi-telephone-fill"></i></div>
                <h5 className="fw-bold mb-1">Need Urgent Help?</h5>
                <p className="mb-3" style={{ fontSize: '0.9rem' }}>Call our team directly for same-day and emergency bookings.</p>
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

      {/* Contact cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {CONTACT_CARDS.map((card, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="contact-card h-100">
                  <div className={`contact-card__icon contact-card__icon--${card.color}`}>
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <h6 className="fw-bold mt-3 mb-1">{card.title}</h6>
                  {card.lines.map((l, j) => (
                    <p key={j} className={`mb-${j === card.lines.length - 1 ? '0' : '1'}`} style={{ fontSize: '0.85rem', opacity: 0.7 }}>{l}</p>
                  ))}
                  {card.href && card.cta && (
                    <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer" className="btn-outline-green mt-3 d-inline-block"
                       style={{ padding: '6px 16px', fontSize: '.85rem' }}>
                      {card.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-7">
              <SectionLabel>SEND A MESSAGE</SectionLabel>
              <h2 className="fw-bold mb-2">We'd Love to Hear From You</h2>
              <p className="mb-4">Fill in the form below and one of our team will get back to you within 24 hours.</p>

              {status === 'success' && (
                <div className="contact-success-msg mb-4">
                  <div className="contact-success-msg__icon"><i className="bi bi-check-circle-fill"></i></div>
                  <div>
                    <strong>Message Sent!</strong>
                    <p className="mb-0 small" style={{ opacity: 0.7 }}>Thank you for getting in touch. We will reply within 24 hours.</p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger mb-4">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>{errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Your full name"
                      value={form.name} onChange={e => update('name', e.target.value)} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-control form-control-lg" placeholder="your@email.com"
                      value={form.email} onChange={e => update('email', e.target.value)} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone <span style={{ opacity: 0.5 }}>(optional)</span></label>
                    <input type="tel" className="form-control form-control-lg" placeholder="07700 000000"
                      value={form.phone} onChange={e => update('phone', e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subject *</label>
                    <select className="form-select form-select-lg" value={form.subject}
                      onChange={e => update('subject', e.target.value)} required>
                      <option value="">Select a subject</option>
                      {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message *</label>
                    <textarea className="form-control" rows={5}
                      placeholder="Tell us how we can help…"
                      value={form.message} onChange={e => update('message', e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="contact-privacy" required />
                      <label className="form-check-label" htmlFor="contact-privacy">
                        I agree to the <Link to="/" style={{ color: 'var(--accent2)' }}>Privacy Policy</Link> and consent to being contacted.
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-green px-5" disabled={status === 'loading'}>
                      {status === 'loading'
                        ? <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Sending…</>
                        : <><i className="bi bi-send-fill me-2"></i>Send Message</>}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="col-lg-5">
              <SectionLabel>COMMON QUESTIONS</SectionLabel>
              <h3 className="fw-bold mb-4">Quick Answers</h3>
              <div className="accordion" id="contact-faq">
                {FAQS.map((faq, i) => (
                  <div className="accordion-item border-0 mb-3 overflow-hidden" key={i}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button fw-semibold${i !== 0 ? ' collapsed' : ''}`}
                        type="button" data-bs-toggle="collapse" data-bs-target={`#cfaq-${i}`}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`cfaq-${i}`} className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}>
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-sidebar-box mt-4">
                <h6 className="fw-bold mb-2">Want to book directly?</h6>
                <p className="small mb-3" style={{ opacity: 0.7 }}>Skip the form and book your service online in under 2 minutes.</p>
                <Link to="/book-now" className="btn-green d-inline-block">
                  <i className="bi bi-calendar-check me-2"></i>Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
