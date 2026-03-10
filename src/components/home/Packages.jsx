import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import { PACKAGES } from '../../data/homeData';

export default function Packages() {
  return (
    <section className="packages-section">
      <div className="container">
        <SectionLabel center>LANDLORD SAFETY PACKAGES</SectionLabel>
        <h2 className="fw-bold text-center mb-2">Book Multiple Safety Checks Together &amp; Save</h2>
        <p className="text-center mb-5" style={{ color: '#777' }}>
          Fast, Simple, And Everything You Need As A Landlord — All Sorted In One Go
        </p>

        <div className="row g-4">
          {PACKAGES.map((pkg, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="package-card">
                <div className="save-badge">{pkg.save}</div>
                <h5 className="fw-bold mt-1">{pkg.name}</h5>
                <div className="pack-price">{pkg.price}</div>
                <small style={{ color: '#777' }}>({pkg.vat})</small>
                <ul className="mt-3">
                  {pkg.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
                <Link to="/book-now" className="btn-green btn-green--sm d-block text-center mt-3">
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-4" style={{ color: '#888', fontSize: '0.82rem' }}>
          • Parking Is Not Included. If Required, It Will Be Added At The Local Rate.<br />
          • If The Property Is Inside The London Congestion Zone, A £15 Charge Will Apply.
        </p>
      </div>
    </section>
  );
}
