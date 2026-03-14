import { REVIEWS } from '../../data/homeData';

export default function PageReviews({ title = 'What Our Clients Say', max = 4 }) {
  const shown = REVIEWS.slice(0, max);

  return (
    <section className="page-reviews">
      <div className="container">
        <p className="page-reviews__label">CUSTOMER REVIEWS</p>
        <h2 className="fw-bold text-center mb-3">{title}</h2>

        <div className="text-center mb-5">
          <div className="rating-badge">★★★★½ &nbsp;4.9 / 5</div>
          <div className="page-reviews__sub">
            Based on <strong>79 reviews</strong> on&nbsp;
            <span className="google-g">G</span><span className="google-o1">o</span><span className="google-o2">o</span><span className="google-g2">g</span><span className="google-l">l</span><span className="google-e">e</span>
          </div>
        </div>

        <div className="row g-3 justify-content-center">
          {shown.map((r, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="review-card">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="reviewer-avatar" style={{ background: r.color }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-date">{r.date}</div>
                  </div>
                  <div className="ms-auto reviewer-stars">★★★★★</div>
                </div>
                <p className="review-text">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="btn-green">
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
