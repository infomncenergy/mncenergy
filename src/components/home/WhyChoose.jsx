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
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
                alt="MNC Safety Certificate professional inspection engineer"
                className="why-v2__img"
              />
              <div className="why-v2__float">
                <div className="why-v2__float-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div>
                  <div className="why-v2__float-title">10+ Years Experience</div>
                  <div className="why-v2__float-sub">London &amp; M25 Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="col-lg-7">
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <h2 className="why-v2__heading">
              Why London's Landlords Choose{' '}
              <span className="why-v2__heading-accent">MNC Safety Certificate</span>
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
