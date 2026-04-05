import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF, WHATSAPP } from '../../data/constants';

export default function Hero() {
  return (
    <section className="hero-v2">
      <div className="container position-relative z-1">
        <div className="row align-items-center g-4 g-lg-5">

          {/* ── Left content ── */}
          <div className="col-lg-7">
            <div className="hero-v2__badge">
              <i className="bi bi-patch-check-fill"></i>
              London Wide · Fast Appointments · Digital Certificates
            </div>

            <h1 className="hero-v2__title">
              London's Trusted<br />
              <span className="hero-v2__title-accent">Property Safety</span><br />
              Specialists
            </h1>

            <p className="hero-v2__sub">
              Fast, affordable safety certificates for landlords and property managers across
              London. Gas, Electrical, Fire, Asbestos &amp; EPC — all under one roof.
            </p>

            <div className="hero-v2__ctas">
              <Link to="/book-now" className="hero-v2__btn-primary">
                <i className="bi bi-calendar-check me-2"></i>Book Now
              </Link>
              <a href={PHONE_HREF} className="hero-v2__btn-secondary">
                <i className="bi bi-telephone me-2"></i>{PHONE}
              </a>
            </div>

            <div className="hero-v2__stats">
              <div className="hero-v2__stat">
                <strong><i className="bi bi-clock-fill"></i></strong>
                <span>Quick Response</span>
              </div>
              <div className="hero-v2__stat-div"></div>
              <div className="hero-v2__stat">
                <strong><i className="bi bi-patch-check-fill"></i></strong>
                <span>Certification</span>
              </div>
              <div className="hero-v2__stat-div"></div>
              <div className="hero-v2__stat">
                <strong><i className="bi bi-tags-fill"></i></strong>
                <span>Affordable Prices</span>
              </div>
              <div className="hero-v2__stat-div"></div>
              <div className="hero-v2__stat">
                <strong><i className="bi bi-calendar-check-fill"></i></strong>
                <span>Book Today</span>
              </div>
            </div>
          </div>

          {/* ── Right floating card ── */}
          <div className="col-lg-5">
            <div className="hero-v2__card">
              <div className="hero-v2__card-head">
                <i className="bi bi-lightning-charge-fill me-2 text-teal"></i>
                Quick Book
              </div>
              <p className="hero-v2__card-sub">Select a service to get started</p>

              <div className="hero-v2__grid">
                <Link to="/gas/landlord-gas-safety"    className="hero-v2__item">
                  <i className="bi bi-fire"></i><span>Gas Safety</span>
                </Link>
                <Link to="/electrical/residential-eicr" className="hero-v2__item">
                  <i className="bi bi-lightning-charge"></i><span>EICR Cert</span>
                </Link>
                <Link to="/fire/residential-fra"       className="hero-v2__item">
                  <i className="bi bi-shield-exclamation"></i><span>Fire Safety</span>
                </Link>
                <Link to="/asbestos/residential"       className="hero-v2__item">
                  <i className="bi bi-binoculars-fill"></i><span>Asbestos</span>
                </Link>
                <Link to="/epc/residential"            className="hero-v2__item">
                  <i className="bi bi-house-fill"></i><span>EPC</span>
                </Link>
                <Link to="/book-now"                   className="hero-v2__item hero-v2__item--more">
                  <i className="bi bi-grid-3x3-gap"></i><span>All Services</span>
                </Link>
              </div>

              <Link to="/book-now" className="hero-v2__card-cta">
                <i className="bi bi-calendar-check me-2"></i>Book Online Now
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank" rel="noopener noreferrer"
                className="hero-v2__card-wa"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
