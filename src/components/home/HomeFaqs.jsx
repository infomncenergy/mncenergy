import SectionLabel from '../ui/SectionLabel';
import FaqAccordion from '../ui/FaqAccordion';
import { HOME_FAQS } from '../../data/homeData';

export default function HomeFaqs() {
  return (
    <section className="faq-section" id="faqs">
      <div className="container">
        <SectionLabel center>FAQs</SectionLabel>
        <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <FaqAccordion items={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
