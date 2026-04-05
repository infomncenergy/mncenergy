import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../data/constants';

export default function Header() {
  return (
    <div className="site-header">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">

        {/* Logo */}
        <Link to="/" className="header-logo">
          <img src="/images/mnc-energy-logo.png" alt="MNC Safety Certificate" className="header-logo__img" />
        </Link>

        {/* Contact info */}
        <div className="header-contact">
          <a href={PHONE_HREF} className="header-contact__item">
            <div className="header-contact__icon header-contact__icon--purple">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>
              <div className="header-contact__label">Call Us Now</div>
              <div className="header-contact__value">{PHONE}</div>
            </div>
          </a>
          <div className="header-contact__divider"></div>
          <a href={EMAIL_HREF} className="header-contact__item">
            <div className="header-contact__icon header-contact__icon--teal">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>
              <div className="header-contact__label">Email Us</div>
              <div className="header-contact__value">{EMAIL}</div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
