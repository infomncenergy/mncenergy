import { COMM_ASBESTOS } from '../../data/asbestosData';
import ServiceHero        from '../../components/ui/ServiceHero';
import StatsBar           from '../../components/ui/StatsBar';
import IntroSection       from '../../components/ui/IntroSection';
import BenefitCards       from '../../components/ui/BenefitCards';
import PricingBox         from '../../components/ui/PricingBox';
import ProcessSteps       from '../../components/ui/ProcessSteps';
import RelatedServices    from '../../components/ui/RelatedServices';
import FaqAccordion       from '../../components/ui/FaqAccordion';
import CtaBanner          from '../../components/ui/CtaBanner';
import SectionLabel       from '../../components/ui/SectionLabel';
import { Link }           from 'react-router-dom';

const { hero, stats, intro, benefits, surveyTypes, pricing, propertyTypes, process: proc, related, faqs, cta } = COMM_ASBESTOS;

export default function CommercialAsbestosPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <PricingBox {...pricing} />

      <IntroSection {...intro} />
      {/* Survey Types */}
      <section className="py-5 glass-section">
        <div className="container">
          <SectionLabel center>SURVEY TYPES</SectionLabel>
          <h2 className="fw-bold text-center mb-5">{surveyTypes.title}</h2>
          <div className="row g-4 justify-content-center">
            {surveyTypes.items.map((s, i) => (
              <div className="col-md-5" key={i}>
                <div className="benefit-card h-100 position-relative">
                  {s.badge && (
                    <span className="badge bg-accent position-absolute top-0 end-0 m-3">{s.badge}</span>
                  )}
                  <div className="benefit-card__icon">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mt-3 mb-2">{s.title}</h5>
                  <p className="text-muted mb-0">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitCards {...benefits} />

      {/* Property Types */}
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
                  <Link to="/book-now" className="btn-green btn-green--sm">Get a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps {...proc} />
      <RelatedServices title="Related Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <CtaBanner title={cta} />
    </>
  );
}
