import { Link } from 'react-router-dom';

/**
 * Side-by-side pricing layout (text on left, price cards on right)
 * @param {string}  title         - heading
 * @param {string}  body          - description
 * @param {Array}   prices        - [{ label, price, note? }]
 * @param {string}  ctaText
 * @param {string}  ctaTo
 * @param {string}  disclaimer    - small footnote
 */
export default function PricingBox({
  title,
  body,
  prices = [],
  ctaText    = 'Book Now',
  ctaTo      = '/book-now',
  disclaimer = '* All prices include VAT. Parking charged at local rate. Congestion Zone: +£15.',
}) {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text side */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-3">{title}</h2>
            {body && <p style={{ color: '#555', lineHeight: 1.8 }}>{body}</p>}
            <Link to={ctaTo} className="btn-green mt-2 d-inline-block">{ctaText}</Link>
          </div>

          {/* Price cards side */}
          <div className="col-lg-7">
            <div className="pricing-cards">
              {prices.map((p, i) => (
                <div className="pricing-card-item" key={i}>
                  <i className="bi bi-star-fill me-2" style={{ color: '#f4b400' }}></i>
                  <div className="flex-grow-1">
                    <span className="pricing-card-item__label">{p.label}:</span>
                    {p.note && <span className="pricing-card-item__note ms-1">{p.note}</span>}
                  </div>
                  <span className="pricing-card-item__price">{p.price}</span>
                </div>
              ))}
            </div>
            {disclaimer && <p className="pricing-disclaimer">{disclaimer}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
