import { GAS_ENGINEER } from '../../data/gasData';
import ServiceHero from '../../components/ui/ServiceHero';
import StatsBar from '../../components/ui/StatsBar';
import IntroSection from '../../components/ui/IntroSection';
import BenefitCards from '../../components/ui/BenefitCards';
import ProcessSteps from '../../components/ui/ProcessSteps';
import RelatedServices from '../../components/ui/RelatedServices';
import FaqAccordion from '../../components/ui/FaqAccordion';
import PageReviews from '../../components/ui/PageReviews';
import CtaBanner from '../../components/ui/CtaBanner';
import SectionLabel from '../../components/ui/SectionLabel';

const { hero, stats, intro, benefits, process: proc, related, faqs, cta } = GAS_ENGINEER;

export default function GasEngineerPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <IntroSection {...intro} />
      <BenefitCards {...benefits} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Gas Services" services={related} />

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
