import { Link } from 'react-router-dom';

/**
 * Two-column intro: text + image (alternating)
 * @param {string}  title      - heading
 * @param {string}  body       - paragraph text
 * @param {Array}   checklist  - optional bullet list
 * @param {string}  imgSrc     - image URL
 * @param {string}  imgAlt     - image alt text
 * @param {boolean} imgRight   - image on right (default true)
 * @param {string}  ctaText    - optional CTA button text
 * @param {string}  ctaTo      - optional CTA button link
 * @param {string}  bgColor    - section background color
 */
export default function IntroSection({
  title,
  body,
  checklist,
  imgSrc,
  imgAlt   = 'Service image',
  imgRight = true,
  ctaText,
  ctaTo    = '/book-now',
  bgColor  = '#fff',
}) {
  const textCol = (
    <div className="col-lg-6">
      <h2 className="fw-bold mb-4">{title}</h2>
      {body && <p style={{ lineHeight: 1.85, color: '#444' }}>{body}</p>}
      {checklist && (
        <ul className="intro-checklist">
          {checklist.map((item, i) => (
            <li key={i}>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {typeof item === 'string' ? item : <><strong>{item.label}:</strong> {item.text}</>}
            </li>
          ))}
        </ul>
      )}
      {ctaText && (
        <Link to={ctaTo} className="btn-green mt-3 d-inline-block">{ctaText}</Link>
      )}
    </div>
  );

  const imgCol = imgSrc && (
    <div className="col-lg-6">
      <img src={imgSrc} alt={imgAlt} className="intro-img" />
    </div>
  );

  return (
    <section className="intro-section" style={{ background: bgColor }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {imgRight ? <>{textCol}{imgCol}</> : <>{imgCol}{textCol}</>}
        </div>
      </div>
    </section>
  );
}
