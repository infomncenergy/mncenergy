import { FIRE_SAFETY_CHECK } from '../../data/fireData';
import ServiceHero from '../../components/ui/ServiceHero';
import StatsBar from '../../components/ui/StatsBar';
import IntroSection from '../../components/ui/IntroSection';
import BenefitCards from '../../components/ui/BenefitCards';
import PricingBox from '../../components/ui/PricingBox';
import ProcessSteps from '../../components/ui/ProcessSteps';
import RelatedServices from '../../components/ui/RelatedServices';
import FaqAccordion from '../../components/ui/FaqAccordion';
import CtaBanner from '../../components/ui/CtaBanner';
import SectionLabel from '../../components/ui/SectionLabel';

const { hero, stats, intro, benefits, pricing, process: proc, related, faqs, cta } = FIRE_SAFETY_CHECK;

export default function FireSafetyCheckPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <IntroSection {...intro} />
      <PricingBox {...pricing} />
      <BenefitCards {...benefits} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Fire Safety Services" services={related} />

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
