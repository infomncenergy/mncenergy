import { Link } from 'react-router-dom';

/**
 * Reusable CTA banner with dark overlay background
 * @param {string} title
 * @param {string} btnText
 * @param {string} btnTo
 */
export default function CtaBanner({
  title   = "Ready to Book Your Safety Certificate?",
  btnText = "Book Now",
  btnTo   = "/book-now",
}) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{title}</h2>
        <Link to={btnTo} className="btn-green">{btnText}</Link>
      </div>
    </section>
  );
}
