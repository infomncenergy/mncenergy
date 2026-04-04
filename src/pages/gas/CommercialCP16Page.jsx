import { CP16 }           from '../../data/gasData';
import ServiceHero        from '../../components/ui/ServiceHero';
import IntroSection       from '../../components/ui/IntroSection';
import BenefitCards       from '../../components/ui/BenefitCards';
import PricingBox         from '../../components/ui/PricingBox';
import ProcessSteps       from '../../components/ui/ProcessSteps';
import RelatedServices    from '../../components/ui/RelatedServices';
import FaqAccordion       from '../../components/ui/FaqAccordion';
import CtaBanner          from '../../components/ui/CtaBanner';
import SectionLabel       from '../../components/ui/SectionLabel';
import { Link }           from 'react-router-dom';

const { hero, intro, benefits, whatsCovered, pricing, process: proc, related, faqs, cta } = CP16;

export default function CommercialCP16Page() {
  return (
    <>
      <ServiceHero {...hero} />
      <IntroSection {...intro} />
      <PricingBox {...pricing} />

      {/* What's Covered */}
      <section className="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={whatsCovered.imgSrc} alt="Gas installation testing and purging" className="intro-img" />
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

      <BenefitCards {...benefits} />
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
