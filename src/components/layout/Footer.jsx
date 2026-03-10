import { Link } from 'react-router-dom';
import { COMPANY_NUM, ADDRESS } from '../../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-logo">
              <span>LANDLORD</span> SAFETY
              <span className="footer-logo__sub">CERTIFICATE</span>
            </div>
            <p className="footer-desc">
              Landlord Safety Certificate's team are certified, top-quality engineers ready to provide
              you with all types of landlord safety certificates in London and the M25 area for
              domestic and commercial purposes.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-6">
            <div className="footer-title">Quick Links</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/electrical">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/#faqs">FAQs</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="col-lg-3 col-6">
            <div className="footer-title">Certifications</div>
            <div className="d-flex gap-2 flex-wrap">
              <div className="cert-badge" title="NAPIT Certified">
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#003087' }}>NAPIT</span>
              </div>
              <div className="cert-badge" title="Gas Safe Registered">
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#d4b800' }}>GAS SAFE</span>
              </div>
              <div className="cert-badge" title="NICEIC Approved">
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#e63333' }}>NICEIC</span>
              </div>
            </div>
          </div>

          {/* Company info */}
          <div className="col-lg-3">
            <div className="footer-title">Company Info</div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.8 }}>
              <strong>Company Number:</strong> {COMPANY_NUM}<br />
              <strong>Address:</strong> {ADDRESS}
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
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <span>© {year} TGS Homes Limited. All Rights Reserved.</span>
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
