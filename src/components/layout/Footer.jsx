import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS, COMPANY_NUM } from '../../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4">
            <Link to="/">
              <img src="/images/mnc-energy-logo.png" alt="MNC Energy" className="footer-logo-img" />
            </Link>
            <p className="footer-desc mt-3">
              MNC Energy provides fully certified safety inspections and certificates for landlords,
              homeowners and businesses across London and the M25 area. Gas Safe, NICEIC and BAFE registered.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-6">
            <div className="footer-title">Quick Links</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/electrical">Electrical</Link></li>
              <li><Link to="/gas">Gas Services</Link></li>
              <li><Link to="/fire">Fire Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-6">
            <div className="footer-title">Our Services</div>
            <ul className="footer-links">
              <li><Link to="/gas/landlord-gas-safety">Gas Safety Certificate</Link></li>
              <li><Link to="/electrical/residential-eicr">EICR Certificate</Link></li>
              <li><Link to="/fire/residential-fra">Fire Risk Assessment</Link></li>
              <li><Link to="/asbestos/residential">Asbestos Survey</Link></li>
              <li><Link to="/epc/residential">EPC Certificate</Link></li>
              <li><Link to="/electrical/residential-fuse-box">Fuse Box Replacement</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-lg-3">
            <div className="footer-title">Get In Touch</div>
            <div className="footer-contact-list">
              <a href={PHONE_HREF} className="footer-contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>{PHONE}</span>
              </a>
              <a href={EMAIL_HREF} className="footer-contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>{EMAIL}</span>
              </a>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>{ADDRESS}</span>
              </div>
            </div>
            <div className="footer-certs mt-3">
              <span className="cert-badge" title="Gas Safe Registered">GAS SAFE</span>
              <span className="cert-badge" title="NICEIC Approved">NICEIC</span>
              <span className="cert-badge" title="NAPIT Certified">NAPIT</span>
              <span className="cert-badge" title="BAFE Registered">BAFE</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <span>© {year} MNC Energy Ltd. Company No: {COMPANY_NUM}. All Rights Reserved.</span>
          <span>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
