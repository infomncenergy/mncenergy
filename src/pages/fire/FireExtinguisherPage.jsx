import ServiceHero     from '../../components/ui/ServiceHero';
import StatsBar        from '../../components/ui/StatsBar';
import BenefitCards    from '../../components/ui/BenefitCards';
import PricingBox      from '../../components/ui/PricingBox';
import IntroSection    from '../../components/ui/IntroSection';
import ProcessSteps    from '../../components/ui/ProcessSteps';
import FaqAccordion    from '../../components/ui/FaqAccordion';
import CtaBanner       from '../../components/ui/CtaBanner';
import SectionLabel    from '../../components/ui/SectionLabel';
import RelatedServices from '../../components/ui/RelatedServices';

const hero = {
  title:     'Fire Extinguisher Servicing London',
  subtitle:  'Certified engineers servicing, inspecting, and supplying fire extinguishers for businesses and landlords across London. Stay compliant with BS 5306-3.',
  price:     'From £15 Per Extinguisher',
  checklist: ['BS 5306-3 Compliant', 'Certified Engineers', 'All Types Covered', 'Certificate Provided'],
  ctaText:   'Book Service',
  ctaTo:     '/book-now',
  bgImage:   'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&q=80',
};

const stats = [
  { value: '500+',   label: 'Extinguishers Serviced' },
  { value: '24h', label: 'Certificate Delivery' },
  { value: '24 hrs', label: 'Certificate Turnaround' },
  { value: '5★',     label: 'Google Rating' },
];

const benefits = {
  label: 'WHY SERVICE YOUR EXTINGUISHERS?',
  title: 'Fire Extinguisher Compliance',
  items: [
    { icon: 'bi-shield-fill-check',  title: 'Legal Requirement',        body: 'The Regulatory Reform (Fire Safety) Order 2005 requires all businesses to maintain fire extinguishers in good working condition. Annual servicing is essential.' },
    { icon: 'bi-person-check-fill',  title: 'Certified Engineers',          body: 'Our engineers are fully trained and certified to carry out fire extinguisher servicing to British Standards, as required by insurers and regulations.' },
    { icon: 'bi-clipboard-check',    title: 'BS 5306-3 Compliant',      body: 'All servicing is carried out in accordance with BS 5306-3, the British Standard for inspection and maintenance of portable fire extinguishers.' },
    { icon: 'bi-file-earmark-check', title: 'Service Certificate',      body: 'A full service certificate is issued for each extinguisher, listing its type, condition, and next service date — essential for audits and insurance.' },
  ],
};

const pricing = {
  title:  'Fire Extinguisher Service Prices',
  body:   'Competitive pricing for annual servicing of all extinguisher types. Volume discounts available for multiple units.',
  prices: [
    { label: 'Basic Service (per unit)',       price: 'From £15' },
    { label: 'Extended Service (per unit)',    price: 'From £25' },
    { label: 'Overhaul Service (per unit)',    price: 'From £35' },
    { label: 'New Extinguisher Supply & Fit', price: 'From £45', note: '(call for quote)' },
  ],
  disclaimer: '* Service type depends on extinguisher age and manufacturer guidelines. Call-out charge applies.',
};

const intro = {
  title:    'Extinguisher Types We Service',
  body:     'Our certified engineers are trained and certified to service all types of fire extinguishers to the manufacturer specification and British Standards.',
  checklist: [
    'Water and water mist extinguishers',
    'Foam extinguishers (AFFF)',
    'Dry powder extinguishers (ABC)',
    'CO₂ extinguishers',
    'Wet chemical extinguishers (kitchen)',
    'Clean agent and halon replacements',
    'Fire blankets and hose reels',
    'Supply of new extinguishers where required',
  ],
  imgSrc:   'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
  imgRight: false,
};

const proc = {
  label: 'HOW IT WORKS',
  title: 'Extinguisher Servicing Process',
  steps: [
    { icon: 'bi-calendar-check',    title: 'Book Annual Service',    body: 'Book your extinguisher service online or by phone. We schedule a convenient visit and service all extinguishers on the premises in one visit.' },
    { icon: 'bi-search',            title: 'Full Inspection',        body: 'Our engineer carries out a full visual and operational inspection of each extinguisher in accordance with BS 5306-3 requirements.' },
    { icon: 'bi-file-earmark-check','title': 'Certificate Issued',   body: 'A service label is applied to each extinguisher and a full service certificate emailed within 24 hours, showing each unit, condition, and next service date.' },
  ],
};

const faqs = [
  { q: 'How often do fire extinguishers need servicing?',
    a: 'Fire extinguishers require a basic service annually, an extended service every 5 years, and an overhaul or replacement every 10 years. These intervals are set out in BS 5306-3 and should be followed to maintain compliance.' },
  { q: 'Is fire extinguisher servicing a legal requirement?',
    a: 'Yes. Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person for a business premises must ensure fire-fighting equipment (including extinguishers) is maintained in efficient working order. Annual servicing is the standard way to demonstrate compliance.' },
  { q: 'What is the difference between a basic and extended service?',
    a: 'A basic service (annual) involves a full visual inspection, check of pressure/weight, discharge test of CO₂, and label renewal. An extended service (every 5 years) includes emptying, internal inspection, refilling, and pressure testing of the body.' },
  { q: 'Can you supply new fire extinguishers?',
    a: 'Yes, we supply and install all types of fire extinguishers. We can advise on the correct type and quantity required for your premises based on a fire risk assessment and BS 5306 Part 8 guidelines.' },
  { q: 'Do you service extinguishers in residential properties?',
    a: 'Yes — particularly for HMOs and blocks of flats where fire extinguishers are required under fire safety regulations. We also service extinguishers in all types of commercial premises.' },
];

const related = [
  { icon: 'bi-clipboard2-check', title: 'Fire Risk Assessment',      body: 'Comprehensive FRA for commercial and residential properties.', to: '/fire/commercial-fra' },
  { icon: 'bi-bell-fill',        title: 'Fire Alarm Certificate',    body: 'Fire alarm installation and testing for compliance.', to: '/fire/commercial-fire-alarm' },
  { icon: 'bi-lightbulb-fill',   title: 'Emergency Lights',          body: 'Emergency lighting testing and certification.', to: '/fire/commercial-emergency-lights' },
];

export default function FireExtinguisherPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <PricingBox {...pricing} />
      <BenefitCards {...benefits} />
      <IntroSection {...intro} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Fire Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Fire Extinguisher Service FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <CtaBanner title="Need Your Fire Extinguishers Serviced? Book Online Today!" />
    </>
  );
}
