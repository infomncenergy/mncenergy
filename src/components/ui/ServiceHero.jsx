import { Link } from 'react-router-dom';

/**
 * Reusable full-width hero for service pages
 * @param {string}   title       - main heading
 * @param {string}   subtitle    - sub-heading line
 * @param {string}   price       - optional price badge text
 * @param {string[]} checklist   - optional bullet list shown below subtitle
 * @param {string}   ctaText     - primary CTA text
 * @param {string}   ctaTo       - primary CTA link
 * @param {string}   ctaSecText  - optional secondary CTA text
 * @param {string}   ctaSecTo    - optional secondary CTA link
 * @param {string}   bgImage     - background image URL
 */
export default function ServiceHero({
  title,
  subtitle,
  price,
  checklist,
  ctaText    = 'Get a Quote',
  ctaTo      = '/book-now',
  ctaSecText,
  ctaSecTo,
  bgImage    = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80',
}) {
  return (
    <section
      className="service-hero"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) , url('${bgImage}') center/cover no-repeat`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center text-white">
            {price && <span className="service-hero__price-badge">{price}</span>}
            <h1 className="service-hero__title">{title}</h1>
            {subtitle && <p className="service-hero__subtitle">{subtitle}</p>}
            {checklist && (
              <ul className="service-hero__checklist">
                {checklist.map((item, i) => (
                  <li key={i}><i className="bi bi-check-circle-fill me-2"></i>{item}</li>
                ))}
              </ul>
            )}
            <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
              <Link to={ctaTo} className="btn-green">{ctaText}</Link>
              {ctaSecText && <Link to={ctaSecTo || '/book-now'} className="btn-outline-white">{ctaSecText}</Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
