import { Link } from 'react-router-dom';

/**
 * "Related / Additional Services" card row
 * @param {string} title
 * @param {string} subtitle
 * @param {Array}  services - [{ icon, title, body, to }]
 */
export default function RelatedServices({ title = 'Additional Services We Offer', subtitle, services = [] }) {
  return (
    <section className="related-services">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">{title}</h2>
        {subtitle && <p className="text-center text-muted mb-5">{subtitle}</p>}
        <div className="row g-4 justify-content-center">
          {services.map((s, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div className="related-card">
                <div className="related-card__icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h5 className="related-card__title">{s.title}</h5>
                <p className="related-card__body">{s.body}</p>
                <Link to={s.to} className="btn-green btn-green--sm">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
