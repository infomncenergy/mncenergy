import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import { PACKAGES } from '../../data/homeData';

const POPULAR_IDX = 1; // Mark "HMO Safety Check" as most popular

export default function Packages() {
  return (
    <section className="packages-v2">
      <div className="container">
        <div className="text-center mb-5">
          <SectionLabel center>BUNDLE &amp; SAVE</SectionLabel>
          <h2 className="fw-bold">Safety Packages for Landlords</h2>
          <p className="text-muted mt-2">Book multiple certificates together and save money</p>
        </div>

        <div className="row g-4 justify-content-center">
          {PACKAGES.map((pkg, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className={`pkg-card${i === POPULAR_IDX ? ' pkg-card--popular' : ''}`}>
                {i === POPULAR_IDX && (
                  <div className="pkg-card__popular-badge">Most Popular</div>
                )}
                <div className="pkg-card__save">{pkg.save}</div>
                <h5 className="pkg-card__name">{pkg.name}</h5>
                <div className="pkg-card__price">{pkg.price}</div>
                <div className="pkg-card__vat">{pkg.vat}</div>
                <ul className="pkg-card__list">
                  {pkg.items.map((it, j) => (
                    <li key={j}>
                      <i className="bi bi-check-circle-fill me-2"></i>{it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-now"
                  className={`pkg-card__cta${i === POPULAR_IDX ? ' pkg-card__cta--featured' : ''}`}
                >
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-4" className="pricing-disclaimer">
          Parking is not included. If required, it will be added at the local rate.
          If the property is inside the London Congestion Zone, a £15 charge will apply.
        </p>
      </div>
    </section>
  );
}
