import { Link } from 'react-router-dom';

export default function IntroSection({
  title,
  body,
  checklist,
  imgSrc,
  imgAlt   = 'Service image',
  imgRight = true,
  ctaText,
  ctaTo    = '/book-now',
  bgColor,   // accepted but ignored — CSS handles background
}) {
  const textCol = (
    <div className="col-lg-6">
      <h2 className="fw-bold mb-4">{title}</h2>
      {body && <p className="intro-body">{body}</p>}
      {checklist && (
        <ul className="intro-checklist">
          {checklist.map((item, i) => (
            <li key={i}>
              <i className="bi bi-check-circle-fill me-2"></i>
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
    <section className="intro-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {imgRight ? <>{textCol}{imgCol}</> : <>{imgCol}{textCol}</>}
        </div>
      </div>
    </section>
  );
}
