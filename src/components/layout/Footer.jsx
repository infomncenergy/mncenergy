import { Link } from 'react-router-dom';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS, COMPANY_NUM, WHATSAPP } from '../../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-3">
            <Link to="/">
              <img src="/images/mnc-energy-logo.png" alt="MNC Safety Certificate" className="footer-logo-img" />
            </Link>
            <p className="footer-desc mt-3">
              MNC Safety Certificate provides professional safety inspections and certificates for landlords,
              homeowners and businesses across London. Fast, reliable, and affordable.
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
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Electrical & Gas */}
          <div className="col-lg-2 col-6">
            <div className="footer-title">Electrical</div>
            <ul className="footer-links">
              <li><Link to="/electrical/residential-eicr">EICR Certificate</Link></li>
              <li><Link to="/electrical/commercial-eicr">Commercial EICR</Link></li>
              <li><Link to="/electrical/fault-finding">Fault Finding</Link></li>
              <li><Link to="/electrical/residential-fuse-box">Fuse Box Installation</Link></li>
              <li><Link to="/electrical/pat-testing">PAT Testing</Link></li>
            </ul>
            <div className="footer-title mt-4">Gas</div>
            <ul className="footer-links">
              <li><Link to="/gas/landlord-gas-safety">Gas Safety Certificate</Link></li>
              <li><Link to="/gas/commercial-gas-safety">Commercial Gas Safety</Link></li>
              <li><Link to="/gas/boiler-installation">Boiler Installation</Link></li>
              <li><Link to="/gas/boiler-repair">Boiler Repair</Link></li>
              <li><Link to="/gas/gas-engineer">Gas Engineer</Link></li>
              <li><Link to="/gas/commercial-gas-engineer">Commercial Gas Engineer</Link></li>
            </ul>
          </div>

          {/* Fire Safety */}
          <div className="col-lg-3 col-6">
            <div className="footer-title">Fire Safety</div>
            <ul className="footer-links">
              <li><Link to="/fire/fire-safety-check">Fire Safety Check</Link></li>
              <li><Link to="/fire/residential-fra">Fire Risk Assessment</Link></li>
              <li><Link to="/fire/commercial-fra">Commercial Fire Risk Assessment</Link></li>
              <li><Link to="/fire/residential-fire-alarm">Fire Alarm Certificate</Link></li>
              <li><Link to="/fire/fire-extinguisher">Fire Extinguisher Inspection</Link></li>
              <li><Link to="/fire/residential-emergency-lights">Emergency Lighting Testing</Link></li>
              <li><Link to="/fire/residential-fire-door">Fire Door Certificate</Link></li>
              <li><Link to="/fire/fire-risk-asbestos">Fire Risk & Asbestos Report</Link></li>
            </ul>
            <div className="footer-title mt-4">More Services</div>
            <ul className="footer-links">
              <li><Link to="/asbestos/residential">Asbestos Survey</Link></li>
              <li><Link to="/epc/residential">EPC Certificate</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-lg-4">
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
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="footer-contact-item">
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
            <div className="footer-certs mt-3">
              <span className="cert-badge" title="Digital Certificates">DIGITAL CERT</span>
              <span className="cert-badge" title="London Wide Coverage">ALL LONDON</span>
              <span className="cert-badge" title="Fast Appointments">FAST BOOKING</span>
            </div>
            <div className="mt-4">
              <Link to="/book-now" className="btn-green d-inline-flex">
                <i className="bi bi-calendar-check me-2"></i>Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <span>Copyright {year}@ MNC ENERGY Ltd T/A MNC Safety Certificate &nbsp;&nbsp;·&nbsp;&nbsp; Registered office only - no customer visit 58 Imperial Drive, London, England, HA2 7LH</span>
          <span>
            <Link to="/faqs">FAQs</Link>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
