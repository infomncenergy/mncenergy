import { WHY_ITEMS } from '../../data/homeData';

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Image */}
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              alt="Certified engineer"
              className="why-img"
            />
          </div>

          {/* Feature list */}
          <div className="col-lg-7">
            <div className="why-card h-100">
              <h2>Why Choose Landlord Safety Certificate?</h2>
              {WHY_ITEMS.map((item, i) => (
                <div className="why-item" key={i}>
                  <div className="why-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
