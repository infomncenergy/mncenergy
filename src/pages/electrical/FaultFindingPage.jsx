import ServiceHero     from '../../components/ui/ServiceHero';
import StatsBar        from '../../components/ui/StatsBar';
import BenefitCards    from '../../components/ui/BenefitCards';
import IntroSection    from '../../components/ui/IntroSection';
import ProcessSteps    from '../../components/ui/ProcessSteps';
import FaqAccordion    from '../../components/ui/FaqAccordion';
import PageReviews     from '../../components/ui/PageReviews';
import CtaBanner       from '../../components/ui/CtaBanner';
import SectionLabel    from '../../components/ui/SectionLabel';
import RelatedServices from '../../components/ui/RelatedServices';

const hero = {
  title:     'Electrical Fault Finding London',
  subtitle:  'Expert diagnosis and repair of electrical faults. From tripping circuits to power failures — our NICEIC engineers identify and fix the problem fast.',
  price:     'From £89 Call-Out',
  checklist: ['Same-Day Emergency Available', 'All Fault Types Covered', 'Full Written Report Provided'],
  ctaText:   'Book Fault Finding',
  ctaTo:     '/book-now',
  bgImage:   'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80',
};

const stats = [
  { value: '95%',    label: 'Faults Fixed Same Visit' },
  { value: '24/7',   label: 'Emergency Callouts' },
  { value: '5★',     label: 'Google Rating' },
  { value: '10+',    label: 'Years Experience' },
];

const benefits = {
  label: 'WHY CHOOSE US',
  title: 'Professional Electrical Fault Diagnosis',
  items: [
    { icon: 'bi-search',            title: 'Advanced Diagnostics',      body: 'We use professional test equipment including insulation resistance testers, clamp meters, and circuit analysers to pinpoint faults quickly.' },
    { icon: 'bi-clock-fill',        title: 'Fast Response',             body: 'Same-day and emergency callout services available. We understand electrical faults can be urgent, especially in rental properties.' },
    { icon: 'bi-file-earmark-text', title: 'Full Fault Report',         body: 'Receive a written report detailing the fault found, work carried out, and any recommendations to prevent future issues.' },
    { icon: 'bi-tools',             title: 'Fix on the Spot',           body: 'Our engineers carry a comprehensive van stock of parts, enabling us to fix the majority of faults during the initial visit.' },
  ],
};

const intro = {
  title:    'Common Electrical Faults We Fix',
  body:     'Our NICEIC-approved electricians have experience diagnosing and repairing all types of electrical faults across residential and commercial properties in London and the M25.',
  checklist: [
    'Tripping RCDs and circuit breakers',
    'Partial or total power loss',
    'Burning smells or scorch marks near sockets',
    'Flickering or intermittent lighting',
    'Overloaded circuits and wiring faults',
    'Earth faults and insulation failures',
    'Faulty sockets, switches, and light fittings',
    'Outdoor and garden electrical faults',
  ],
  imgSrc:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  imgRight: true,
};

const proc = {
  label: 'HOW IT WORKS',
  title: 'How We Find & Fix Electrical Faults',
  steps: [
    { icon: 'bi-telephone-fill',  title: 'Call or Book Online',  body: 'Contact us by phone or book online. Describe the problem as best you can. For emergencies, we prioritise same-day slots.' },
    { icon: 'bi-search',          title: 'Diagnose the Fault',   body: 'Our engineer arrives with professional test equipment, carries out a systematic inspection, and identifies the root cause of the problem.' },
    { icon: 'bi-wrench-adjustable',title: 'Repair & Report',     body: 'We repair the fault (where parts are available) and provide a full written report. Any further work required is quoted transparently.' },
  ],
};

const faqs = [
  { q: 'What causes an RCD to keep tripping?',
    a: 'An RCD (Residual Current Device) trips when it detects a current leakage to earth. This is usually caused by a faulty appliance, damaged wiring, moisture ingress, or an earth fault in a circuit. Our engineers can identify the exact cause using specialist equipment.' },
  { q: 'Why have I lost power in one area of my property?',
    a: 'Partial power loss is commonly caused by a tripped circuit breaker, a blown fuse, or a fault on a specific circuit. In older properties it can indicate wiring deterioration. Our engineers can restore power and identify the root cause.' },
  { q: 'Is there a call-out charge?',
    a: 'Yes, we charge a call-out fee from £89 which covers the first hour of diagnostic work. Any parts or additional labour are quoted separately before work begins — no hidden charges.' },
  { q: 'How quickly can you respond to an emergency?',
    a: 'We aim to respond to emergency callouts within 2–4 hours across London and the M25, subject to engineer availability. Priority slots are available — please call us directly for emergencies.' },
  { q: 'Do I need to be present during the fault-finding visit?',
    a: 'Yes, someone over 18 must be present to give the engineer access to the property and all relevant electrical equipment. For rental properties, this can be the tenant with landlord authorisation.' },
];

const related = [
  { icon: 'bi-lightning-charge-fill', title: 'EICR Certificate',  body: 'Full fixed wiring inspection to identify all electrical hazards.', to: '/electrical/residential-eicr' },
  { icon: 'bi-plug-fill',            title: 'PAT Testing',        body: 'Portable appliance testing for landlords and businesses.', to: '/electrical/pat-testing' },
  { icon: 'bi-house-gear-fill',      title: 'Consumer Unit Upgrade', body: 'Replace your old fuse box with a modern consumer unit.', to: '/electrical/residential-fuse-box' },
];

export default function FaultFindingPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <BenefitCards {...benefits} />
      <IntroSection {...intro} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Electrical Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Electrical Fault Finding FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <PageReviews title="What Our Clients Say" />
      <CtaBanner title="Got an Electrical Fault? Book a Diagnosis Today!" />
    </>
  );
}
