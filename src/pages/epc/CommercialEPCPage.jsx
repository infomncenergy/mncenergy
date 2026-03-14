import { COMM_EPC }       from '../../data/epcData';
import ServiceHero        from '../../components/ui/ServiceHero';
import StatsBar           from '../../components/ui/StatsBar';
import IntroSection       from '../../components/ui/IntroSection';
import BenefitCards       from '../../components/ui/BenefitCards';
import PricingBox         from '../../components/ui/PricingBox';
import ProcessSteps       from '../../components/ui/ProcessSteps';
import RelatedServices    from '../../components/ui/RelatedServices';
import FaqAccordion       from '../../components/ui/FaqAccordion';
import PageReviews        from '../../components/ui/PageReviews';
import CtaBanner          from '../../components/ui/CtaBanner';
import SectionLabel       from '../../components/ui/SectionLabel';
import { Link }           from 'react-router-dom';

const { hero, stats, intro, benefits, pricing, propertyTypes, whatsCovered, process: proc, related, faqs, cta } = COMM_EPC;

export default function CommercialEPCPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <IntroSection {...intro} />
      <BenefitCards {...benefits} />
      <PricingBox {...pricing} />

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

      {/* What Assessment Covers */}
      <section className="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={whatsCovered.imgSrc} alt="Commercial EPC assessment" className="intro-img" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">{whatsCovered.title}</h2>
              <ul className="intro-checklist">
                {whatsCovered.items.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
              <Link to="/book-now" className="btn-green mt-3 d-inline-block">{whatsCovered.ctaText}</Link>
            </div>
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

      <PageReviews title="What Our Commercial Clients Say" />
      <CtaBanner title={cta} />
    </>
  );
}
