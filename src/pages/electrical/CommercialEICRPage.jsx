import { COMM_EICR }   from '../../data/electricalData';
import ServiceHero      from '../../components/ui/ServiceHero';
import IntroSection     from '../../components/ui/IntroSection';
import BenefitCards     from '../../components/ui/BenefitCards';
import PricingBox       from '../../components/ui/PricingBox';
import FaqAccordion     from '../../components/ui/FaqAccordion';
import CtaBanner        from '../../components/ui/CtaBanner';
import SectionLabel     from '../../components/ui/SectionLabel';
import { Link }         from 'react-router-dom';

const { hero, intro, benefits, pricing, propertyTypes, whatToExpect, legalRequirements, faqs, cta } = COMM_EICR;

export default function CommercialEICRPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero {...hero} />

      {/* What is Commercial EICR */}
      <IntroSection {...intro} />

      {/* Benefits */}
      <PricingBox {...pricing} />

      {/* Pricing */}
      <BenefitCards {...benefits} />

      {/* Property Types (Commercial) */}
      <section className="property-types-section">
        <div className="container">
          <h2 className="fw-bold text-center mb-2">{propertyTypes.title}</h2>
          <p className="text-center text-muted mb-5">{propertyTypes.subtitle}</p>
          <div className="row g-4">
            {propertyTypes.items.map((pt, i) => (
              <div className="col-md-4 col-sm-6" key={i}>
                <div className="property-type-card">
                  <div className="property-type-card__icon"><i className={`bi ${pt.icon}`}></i></div>
                  <h5>{pt.title}</h5>
                  <p>{pt.body}</p>
                  <Link to={pt.to} className="btn-green btn-green--sm">Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="what-expect-section">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What to Expect During a Commercial EICR Inspection</h2>
          <div className="row g-4 justify-content-center">
            {whatToExpect.steps.map((step, i) => (
              <div className="col-md-4" key={i}>
                <div className="expect-card">
                  <div className="expect-card__icon"><i className={`bi ${step.icon}`}></i></div>
                  <h5>{step.title}</h5>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="legal-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">{legalRequirements.title}</h2>
              <ul className="intro-checklist">
                {legalRequirements.items.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
              <Link to="/book-now" className="btn-green mt-3 d-inline-block">Get a Quote</Link>
            </div>
            <div className="col-lg-5">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80"
                alt="Legal requirements for commercial EICR"
                className="intro-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}

      {/* CTA */}
      <CtaBanner title={cta} />
    </>
  );
}
