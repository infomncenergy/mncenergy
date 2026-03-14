import { RES_EPC }        from '../../data/epcData';
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

const { hero, stats, intro, benefits, pricing, whatsCovered, epcRatings, process: proc, related, faqs, cta } = RES_EPC;

export default function ResidentialEPCPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <IntroSection {...intro} />
      <BenefitCards {...benefits} />
      <PricingBox {...pricing} />

      {/* What Assessment Covers */}
      <section className="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={whatsCovered.imgSrc} alt="EPC assessment checklist" className="intro-img" />
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

      {/* EPC Rating Bands */}
      <section className="py-5">
        <div className="container">
          <SectionLabel center>EPC RATINGS</SectionLabel>
          <h2 className="fw-bold text-center mb-2">{epcRatings.title}</h2>
          <p className="text-center text-muted mb-5">{epcRatings.subtitle}</p>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              {epcRatings.items.map((r, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center mb-2 rounded-2 px-4 py-2 text-white fw-bold"
                  style={{ background: r.colour, width: `${40 + (7 - i) * 9}%` }}
                >
                  <span className="fs-5 me-3">{r.band}</span>
                  <span className="me-auto small">{r.label}</span>
                  <span className="small">{r.range}</span>
                </div>
              ))}
              <div className="mt-4 text-center">
                <Link to="/book-now" className="btn-green">Book Your EPC Assessment</Link>
              </div>
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

      <PageReviews title="What Our Clients Say" />
      <CtaBanner title={cta} />
    </>
  );
}
