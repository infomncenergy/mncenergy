import { REVIEWS } from '../../data/homeData';

/**
 * Compact reviews section for service pages
 * @param {string} title
 * @param {number} max   - max number of reviews to show (default 4)
 */
export default function PageReviews({ title = 'Customer Testimonials and Google Reviews', max = 4 }) {
  const shown = REVIEWS.slice(0, max);

  return (
    <section className="page-reviews">
      <div className="container">
        <p className="page-reviews__label">CUSTOMER REVIEWS</p>
        <h2 className="fw-bold text-center mb-3">{title}</h2>

        <div className="text-center mb-5">
          <div className="rating-badge">GOOD</div>
          <div className="stars">★★★★½</div>
          <div style={{ fontSize: '0.88rem', color: '#777' }}>
            Based on <strong>79 reviews</strong> on&nbsp;
            <span style={{ color: '#4285F4', fontWeight: 700 }}>G</span>
            <span style={{ color: '#EA4335', fontWeight: 700 }}>o</span>
            <span style={{ color: '#FBBC05', fontWeight: 700 }}>o</span>
            <span style={{ color: '#4285F4', fontWeight: 700 }}>g</span>
            <span style={{ color: '#34A853', fontWeight: 700 }}>l</span>
            <span style={{ color: '#EA4335', fontWeight: 700 }}>e</span>
          </div>
        </div>

        <div className="row g-3 justify-content-center">
          {shown.map((r, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="review-card">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="reviewer-avatar" style={{ background: r.color, width: 38, height: 38, fontSize: '0.95rem' }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="reviewer-name" style={{ fontSize: '0.88rem' }}>{r.name}</div>
                    <div className="reviewer-date">{r.date}</div>
                  </div>
                  <div className="ms-auto stars" style={{ fontSize: '0.8rem' }}>★★★★★</div>
                </div>
                <p className="review-text" style={{ fontSize: '0.82rem' }}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="btn-green btn-green--sm">
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
