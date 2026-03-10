import SectionLabel from './SectionLabel';

/**
 * Reusable benefit cards grid
 * @param {string}  label    - eyebrow label
 * @param {string}  title    - section heading
 * @param {Array}   items    - [{ icon, title, body }]
 * @param {number}  cols     - Bootstrap grid cols per card (default 4 → 3 per row)
 */
export default function BenefitCards({ label, title, items = [], cols = 4 }) {
  return (
    <section className="benefits-section">
      <div className="container">
        {label && <SectionLabel center>{label}</SectionLabel>}
        {title && <h2 className="fw-bold text-center mb-5">{title}</h2>}
        <div className="row g-4 justify-content-center">
          {items.map((item, i) => (
            <div className={`col-md-6 col-lg-${cols}`} key={i}>
              <div className="benefit-card h-100">
                <div className="benefit-card__icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="benefit-card__title">{item.title}</h5>
                <p className="benefit-card__body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
