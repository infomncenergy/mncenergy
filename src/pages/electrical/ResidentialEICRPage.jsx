import { RES_EICR } from '../../data/electricalData';
import ServiceHero    from '../../components/ui/ServiceHero';
import StatsBar       from '../../components/ui/StatsBar';
import IntroSection   from '../../components/ui/IntroSection';
import BenefitCards   from '../../components/ui/BenefitCards';
import PricingBox     from '../../components/ui/PricingBox';
import RelatedServices from '../../components/ui/RelatedServices';
import FaqAccordion   from '../../components/ui/FaqAccordion';
import CtaBanner      from '../../components/ui/CtaBanner';
import SectionLabel   from '../../components/ui/SectionLabel';
import { Link }       from 'react-router-dom';

const { hero, stats, intro, benefits, pricing, propertyTypes, related, faqs, cta } = RES_EICR;

export default function ResidentialEICRPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero {...hero} />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Benefits */}
      <PricingBox {...pricing} />

      {/* Pricing */}
      <BenefitCards {...benefits} />

      {/* What is EICR */}
      <IntroSection {...intro} />

      {/* Property Types */}
      <section className="property-types-section">
        <div className="container">
          <SectionLabel center>EICR FOR DIFFERENT PROPERTY TYPES</SectionLabel>
          <h2 className="fw-bold text-center mb-2">We offer EICR services for all residential property types in London</h2>
          <p className="text-center text-muted mb-5">Whether you are a landlord, homeowner or tenant, we can provide an EICR for your property.</p>
          <div className="row g-4">
            {propertyTypes.map((pt, i) => (
              <div className="col-md-4" key={i}>
                <div className="property-type-card">
                  <div className="property-type-card__icon"><i className={`bi ${pt.icon}`}></i></div>
                  <h5>{pt.title}</h5>
                  <p>{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <RelatedServices title="Additional Services We Offer" subtitle="Explore our other professional services to ensure complete electrical safety." services={related} />

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

      {/* CTA */}
      <CtaBanner title={cta} />
    </>
  );
}
