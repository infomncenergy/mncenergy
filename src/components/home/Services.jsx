import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import { SERVICES } from '../../data/homeData';

export default function Services() {
  return (
    <section className="services-v2">
      <div className="container">
        <div className="text-center mb-5">
          <SectionLabel center>OUR SERVICES</SectionLabel>
          <h2 className="fw-bold">Certification Services We Offer</h2>
          <p className="text-muted mt-2">Professional, fast, and affordable safety certificates across London</p>
        </div>

        <div className="row g-4">
          {SERVICES.map((s, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="svc-card">
                <div className="svc-card__icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h4 className="svc-card__title">{s.title}</h4>
                <p className="svc-card__desc">{s.desc}</p>
                <div className="svc-card__links">
                  <Link to={s.links[0].to} className="svc-card__link">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>{s.links[0].label}
                  </Link>
                  <Link to={s.links[1].to} className="svc-card__link">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>{s.links[1].label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
