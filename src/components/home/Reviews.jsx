import SectionLabel from '../ui/SectionLabel';
import { REVIEWS } from '../../data/homeData';

function ReviewCard({ name, date, color, text }) {
  return (
    <div className="review-v2">
      <div className="review-v2__quote">"</div>
      <p className="review-v2__text">{text}</p>
      <div className="review-v2__footer">
        <div className="review-v2__avatar" style={{ background: color }}>
          {name[0]}
        </div>
        <div>
          <div className="review-v2__name">{name}</div>
          <div className="review-v2__meta">
            <span className="review-v2__stars">★★★★★</span>
            <span className="review-v2__date"> · {date}</span>
          </div>
        </div>
        <div className="review-v2__google ms-auto">
          <span className="google-g">G</span><span className="google-o1">o</span><span className="google-o2">o</span><span className="google-g2">g</span><span className="google-l">l</span><span className="google-e">e</span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews-v2">
      <div className="container">
        {/* Header */}
        <div className="row align-items-end mb-5">
          <div className="col-lg-7">
            <SectionLabel>CUSTOMER REVIEWS</SectionLabel>
            <h2 className="fw-bold mb-2">What Our Clients Say</h2>
            <p className="text-muted">Trusted by thousands of landlords across London</p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <div className="reviews-v2__rating-block">
              <div className="reviews-v2__score">4.9</div>
              <div>
                <div className="reviews-v2__stars">★★★★★</div>
                <div className="review-v2__meta-count">Based on <strong>79 reviews</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {REVIEWS.map((r, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <ReviewCard {...r} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5 d-flex gap-3 justify-content-center flex-wrap">
          <a
            href="https://www.google.com/maps"
            target="_blank" rel="noreferrer"
            className="btn-green btn-green--sm"
          >
            <i className="bi bi-google me-2"></i>Read More on Google
          </a>
          <a
            href="https://www.trustpilot.com"
            target="_blank" rel="noreferrer"
            className="btn-outline-dark"
          >
            Read More on Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
