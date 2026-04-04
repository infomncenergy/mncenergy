import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF } from '../../data/constants';

export default function CtaBanner({
  title   = "Ready to Book Your Safety Certificate?",
  btnText = "Book Now",
  btnTo   = "/book-now",
}) {
  return (
    <section className="cta-v2">
      <div className="container">
        <div className="cta-v2__inner">

          <div className="cta-v2__content">
            <div className="cta-v2__badge">
              <i className="bi bi-patch-check-fill me-2"></i>
              Gas Safe · NICEIC · NAPIT · BAFE
            </div>
            <h2 className="cta-v2__title">{title}</h2>
            <p className="cta-v2__sub">
              Book online in under 2 minutes. Same-day appointments available across London.
            </p>
            <div className="cta-v2__actions">
              <Link to={btnTo} className="cta-v2__btn-book">
                <i className="bi bi-calendar-check me-2"></i>{btnText}
              </Link>
              <a href={PHONE_HREF} className="cta-v2__btn-call">
                <i className="bi bi-telephone me-2"></i>{PHONE}
              </a>
            </div>
          </div>

          <div className="cta-v2__certs d-none d-lg-flex">
            {['GAS SAFE', 'NICEIC', 'NAPIT', 'BAFE'].map(b => (
              <div className="cta-v2__cert" key={b}>{b}</div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
