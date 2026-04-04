import { FIRE_RISK_ASBESTOS } from '../../data/fireData';
import ServiceHero from '../../components/ui/ServiceHero';
import StatsBar from '../../components/ui/StatsBar';
import IntroSection from '../../components/ui/IntroSection';
import BenefitCards from '../../components/ui/BenefitCards';
import ProcessSteps from '../../components/ui/ProcessSteps';
import RelatedServices from '../../components/ui/RelatedServices';
import FaqAccordion from '../../components/ui/FaqAccordion';
import CtaBanner from '../../components/ui/CtaBanner';
import SectionLabel from '../../components/ui/SectionLabel';

const { hero, stats, intro, benefits, process: proc, related, faqs, cta } = FIRE_RISK_ASBESTOS;

export default function FireRiskAsbestosPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <IntroSection {...intro} />
      <BenefitCards {...benefits} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Fire & Safety Services" services={related} />

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
