import { COMM_FUSE_BOX } from '../../data/electricalData';
import ServiceHero        from '../../components/ui/ServiceHero';
import IntroSection       from '../../components/ui/IntroSection';
import BenefitCards       from '../../components/ui/BenefitCards';
import ProcessSteps       from '../../components/ui/ProcessSteps';
import RelatedServices    from '../../components/ui/RelatedServices';
import FaqAccordion       from '../../components/ui/FaqAccordion';
import PageReviews        from '../../components/ui/PageReviews';
import CtaBanner          from '../../components/ui/CtaBanner';
import SectionLabel       from '../../components/ui/SectionLabel';

const { hero, intro, benefits, process: proc, related, faqs, cta } = COMM_FUSE_BOX;

export default function CommercialFuseBoxPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero {...hero} />

      {/* What is Commercial Fuse Board Replacement */}
      <IntroSection {...intro} />

      {/* Why Replace */}
      <BenefitCards {...benefits} />

      {/* Process Steps */}
      <ProcessSteps {...proc} />

      {/* Related Services */}
      <RelatedServices
        title="Related Services You May Need"
        subtitle="Explore our other professional electrical services."
        services={related}
      />

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
      <PageReviews title="What Our Commercial Clients Say" />

      {/* CTA */}
      <CtaBanner title={cta} />
    </>
  );
}
