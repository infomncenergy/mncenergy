import SectionLabel from '../ui/SectionLabel';
import { REVIEWS } from '../../data/homeData';

function ReviewCard({ name, date, color, text }) {
  return (
    <div className="review-card">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="reviewer-avatar" style={{ background: color }}>
          {name[0]}
        </div>
        <div>
          <div className="reviewer-name">{name}</div>
          <div className="reviewer-date">{date}</div>
        </div>
        <div className="ms-auto stars" style={{ fontSize: '0.85rem' }}>★★★★★</div>
      </div>
      <p className="review-text">{text}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container">
        <SectionLabel center>WHAT OUR CLIENTS SAY</SectionLabel>
        <h2 className="fw-bold text-center mb-3">Customer Reviews</h2>

        {/* Rating summary */}
        <div className="text-center mb-5">
          <div className="rating-badge">GOOD</div>
          <div className="stars">★★★★½</div>
          <div style={{ fontSize: '0.9rem', color: '#777' }}>
            Based on <strong>79 reviews</strong> on&nbsp;
            <span style={{ color: '#4285F4', fontWeight: 700 }}>G</span>
            <span style={{ color: '#EA4335', fontWeight: 700 }}>o</span>
            <span style={{ color: '#FBBC05', fontWeight: 700 }}>o</span>
            <span style={{ color: '#4285F4', fontWeight: 700 }}>g</span>
            <span style={{ color: '#34A853', fontWeight: 700 }}>l</span>
            <span style={{ color: '#EA4335', fontWeight: 700 }}>e</span>
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

        {/* CTA links */}
        <div className="text-center mt-4 d-flex gap-3 justify-content-center flex-wrap">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="btn-green btn-green--sm"
          >
            Read More Reviews on Google
          </a>
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-dark"
          >
            Read More Reviews on Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
