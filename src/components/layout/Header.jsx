import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF } from '../../data/constants';

export default function Header() {
  return (
    <div className="site-header">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <Link to="/" className="logo">
          <span className="logo__main">LANDLORD</span>
          <span className="logo__secondary"> SAFETY</span>
          <span className="logo__sub">CERTIFICATE</span>
        </Link>

        <div className="phone-box">
          <div className="phone-icon">
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div>
            <div className="phone-label">Call Us Free</div>
            <a href={PHONE_HREF} className="phone-number">{PHONE}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
