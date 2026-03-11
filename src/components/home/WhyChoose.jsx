import SectionLabel from '../ui/SectionLabel';
import { WHY_ITEMS } from '../../data/homeData';

export default function WhyChoose() {
  return (
    <section className="why-v2">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left: image with floating badge */}
          <div className="col-lg-5">
            <div className="why-v2__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="Certified MNC Energy engineer"
                className="why-v2__img"
              />
              <div className="why-v2__float">
                <div className="why-v2__float-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div>
                  <div className="why-v2__float-title">Gas Safe Registered</div>
                  <div className="why-v2__float-sub">NICEIC · NAPIT · BAFE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="col-lg-7">
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <h2 className="why-v2__heading">
              Why London's Landlords Choose{' '}
              <span className="why-v2__heading-accent">MNC Energy</span>
            </h2>
            <p className="why-v2__intro">
              We combine certified expertise, competitive pricing, and industry-leading response
              times to keep your property compliant.
            </p>

            <div className="row g-3">
              {WHY_ITEMS.map((item, i) => (
                <div className="col-sm-6" key={i}>
                  <div className="why-v2__card">
                    <div className="why-v2__card-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h5 className="why-v2__card-title">{item.title}</h5>
                    <p className="why-v2__card-body">{item.body}</p>
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
