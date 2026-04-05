import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF } from '../../data/constants';

const FEATURES = [
  { icon: 'bi-clock-fill',           label: 'Same-Day',     sub: 'Appointments' },
  { icon: 'bi-file-earmark-check-fill', label: 'Digital Cert', sub: 'Within 24h'  },
  { icon: 'bi-telephone-fill',        label: 'Call Anytime', sub: 'We Answer Fast' },
  { icon: 'bi-geo-alt-fill',          label: 'All London',   sub: 'M25 Covered'   },
];

export default function CtaBanner({
  title   = "Ready to Book Your Safety Certificate?",
  btnText = "Book Now",
  btnTo   = "/book-now",
}) {
  return (
    <section className="cta-v2">
      {/* decorative blobs */}
      <div className="cta-v2__blob cta-v2__blob--l" aria-hidden="true" />
      <div className="cta-v2__blob cta-v2__blob--r" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>

        {/* ── Heading ── */}
        <div className="text-center mb-4">
          <div className="cta-v2__badge">
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Fast · Reliable · Affordable
          </div>
          <h2 className="cta-v2__title">{title}</h2>
          <p className="cta-v2__sub">
            Book online in under 2 minutes. Our certified engineers cover all of London and the M25.
          </p>
        </div>

        {/* ── Feature pills ── */}
        <div className="cta-v2__features">
          {FEATURES.map(f => (
            <div className="cta-v2__feature" key={f.label}>
              <div className="cta-v2__feature-icon">
                <i className={`bi ${f.icon}`}></i>
              </div>
              <div>
                <div className="cta-v2__feature-label">{f.label}</div>
                <div className="cta-v2__feature-sub">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Buttons ── */}
        <div className="cta-v2__actions">
          <Link to={btnTo} className="cta-v2__btn-book">
            <i className="bi bi-calendar-check me-2"></i>{btnText}
          </Link>
          <a href={PHONE_HREF} className="cta-v2__btn-call">
            <i className="bi bi-telephone me-2"></i>{PHONE}
          </a>
        </div>

      </div>
    </section>
  );
}
