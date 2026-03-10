import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';
import { SERVICES } from '../../data/homeData';

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <SectionLabel center>OUR SERVICES</SectionLabel>
        <h2 className="fw-bold text-center mb-5">Our Certification Services</h2>

        <div className="row g-4">
          {SERVICES.map((s, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  <Link to={s.links[0].to} className="btn-green btn-green--sm">
                    {s.links[0].label}
                  </Link>
                  <Link to={s.links[1].to} className="btn-outline-dark">
                    {s.links[1].label}
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
