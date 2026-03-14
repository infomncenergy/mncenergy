import { COMM_EIC }    from '../../data/electricalData';
import ServiceHero      from '../../components/ui/ServiceHero';
import IntroSection     from '../../components/ui/IntroSection';
import BenefitCards     from '../../components/ui/BenefitCards';
import PricingBox       from '../../components/ui/PricingBox';
import RelatedServices  from '../../components/ui/RelatedServices';
import FaqAccordion     from '../../components/ui/FaqAccordion';
import PageReviews      from '../../components/ui/PageReviews';
import CtaBanner        from '../../components/ui/CtaBanner';
import SectionLabel     from '../../components/ui/SectionLabel';
import { Link }         from 'react-router-dom';

const { hero, intro, benefits, legalRequirements, services, pricing, faqs, cta } = COMM_EIC;

export default function CommercialEICPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero {...hero} />

      {/* What is Commercial EIC */}
      <IntroSection {...intro} />

      {/* Benefits */}
      <BenefitCards {...benefits} />

      {/* Legal Requirements */}
      <section className="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">{legalRequirements.title}</h2>
              <p className="text-muted mb-4">{legalRequirements.body}</p>
              <ul className="intro-checklist">
                {legalRequirements.items.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
              <Link to="/book-now" className="btn-green mt-3 d-inline-block">Book Now</Link>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80"
                alt="Commercial EIC legal requirements"
                className="intro-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <RelatedServices
        title={services.title}
        subtitle={services.subtitle}
        services={services.items}
      />

      {/* Pricing */}
      <PricingBox {...pricing} />

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <PageReviews title="See What Our Clients Say:" />

      {/* CTA */}
      <CtaBanner title={cta} />
    </>
  );
}
