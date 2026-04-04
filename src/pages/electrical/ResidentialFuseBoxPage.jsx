import { RES_FUSE_BOX } from '../../data/electricalData';
import ServiceHero       from '../../components/ui/ServiceHero';
import IntroSection      from '../../components/ui/IntroSection';
import BenefitCards      from '../../components/ui/BenefitCards';
import ProcessSteps      from '../../components/ui/ProcessSteps';
import RelatedServices   from '../../components/ui/RelatedServices';
import FaqAccordion      from '../../components/ui/FaqAccordion';
import CtaBanner         from '../../components/ui/CtaBanner';
import SectionLabel      from '../../components/ui/SectionLabel';
import { Link }          from 'react-router-dom';

const { hero, intro, benefits, needsReplacement, process: proc, related, faqs, cta } = RES_FUSE_BOX;

export default function ResidentialFuseBoxPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero {...hero} />

      {/* What is Fuse Board Replacement */}
      <IntroSection {...intro} />

      {/* Why Replace */}
      <BenefitCards {...benefits} />

      {/* Do You Need Replacement */}
      <section className="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src={needsReplacement.imgSrc} alt="Fuse board signs" className="intro-img" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">{needsReplacement.title}</h2>
              <p className="text-muted mb-3">{needsReplacement.subtitle}</p>
              <ul className="intro-checklist">
                {needsReplacement.items.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/book-now" className="btn-green mt-3 d-inline-block">{needsReplacement.ctaText}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps {...proc} />

      {/* Related Services */}
      <RelatedServices title="Related Services You May Need" subtitle="Explore our other professional services." services={related} />

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
