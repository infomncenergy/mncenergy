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
          <span style={{ color: '#4285F4', fontWeight: 700 }}>G</span>
          <span style={{ color: '#EA4335', fontWeight: 700 }}>o</span>
          <span style={{ color: '#FBBC05', fontWeight: 700 }}>o</span>
          <span style={{ color: '#4285F4', fontWeight: 700 }}>g</span>
          <span style={{ color: '#34A853', fontWeight: 700 }}>l</span>
          <span style={{ color: '#EA4335', fontWeight: 700 }}>e</span>
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
            <p className="text-muted">Trusted by thousands of landlords across London &amp; M25</p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <div className="reviews-v2__rating-block">
              <div className="reviews-v2__score">4.9</div>
              <div>
                <div className="reviews-v2__stars">★★★★★</div>
                <div style={{ fontSize: '0.82rem', color: '#777' }}>Based on <strong>79 reviews</strong></div>
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
