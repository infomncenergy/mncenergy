import ServiceHero     from '../../components/ui/ServiceHero';
import StatsBar        from '../../components/ui/StatsBar';
import BenefitCards    from '../../components/ui/BenefitCards';
import PricingBox      from '../../components/ui/PricingBox';
import IntroSection    from '../../components/ui/IntroSection';
import ProcessSteps    from '../../components/ui/ProcessSteps';
import FaqAccordion    from '../../components/ui/FaqAccordion';
import PageReviews     from '../../components/ui/PageReviews';
import CtaBanner       from '../../components/ui/CtaBanner';
import SectionLabel    from '../../components/ui/SectionLabel';
import RelatedServices from '../../components/ui/RelatedServices';

const hero = {
  title:     'PAT Testing London',
  subtitle:  'Portable Appliance Testing for landlords, businesses, and letting agents. Fast turnaround, NICEIC-approved engineers across London & M25.',
  price:     'From £1.50 per item',
  checklist: ['Same-Day Available', 'Certificate Issued Within 24 hrs', 'All Appliances & Equipment Covered'],
  ctaText:   'Book PAT Testing',
  ctaTo:     '/book-now',
  bgImage:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
};

const stats = [
  { value: '2,000+', label: 'Items Tested Monthly' },
  { value: '24 hrs', label: 'Certificate Turnaround' },
  { value: '5★',     label: 'Google Rating' },
  { value: '100%',   label: 'Compliance Rate' },
];

const benefits = {
  label: 'WHY PAT TEST?',
  title: 'Keep Your Property & Business Safe',
  items: [
    { icon: 'bi-plug-fill',         title: 'Legal Compliance',        body: 'PAT testing is required under the Electricity at Work Regulations 1989. Landlords and employers must ensure electrical appliances are safe.' },
    { icon: 'bi-shield-check',      title: 'Insurance Protection',    body: 'Most insurance policies require PAT testing to be carried out. Failure to test could invalidate your cover in the event of a claim.' },
    { icon: 'bi-file-earmark-check',title: 'Certificate Provided',    body: 'Receive a full PAT testing certificate listing each item tested, its condition, and the next recommended test date.' },
    { icon: 'bi-people-fill',       title: 'Tenant & Staff Safety',   body: 'Faulty appliances cause thousands of fires annually. Regular PAT testing protects your tenants, staff, and property from electrical hazards.' },
  ],
};

const pricing = {
  title:  'PAT Testing Prices',
  body:   'Competitive per-item pricing with volume discounts available for large numbers of appliances. All prices include VAT and testing report.',
  prices: [
    { label: '1–10 items',   price: '£3.50/item' },
    { label: '11–50 items',  price: '£2.50/item' },
    { label: '51–100 items', price: '£2.00/item' },
    { label: '100+ items',   price: 'From £1.50/item', note: '(call for quote)' },
  ],
  disclaimer: '* All prices include VAT. Minimum call-out charge applies. Prices vary by location.',
};

const intro = {
  title:    'What is PAT Testing?',
  body:     'Portable Appliance Testing (PAT) is the process of checking electrical appliances for safety through a series of visual inspections and electronic tests. Our NICEIC-approved engineers test every appliance, label it, and provide a detailed certificate.',
  checklist: [
    'Visual inspection of plug, cable and casing',
    'Earth continuity testing',
    'Insulation resistance testing',
    'Functional tests where applicable',
    'Pass/fail labels applied to each item',
    'Detailed report with next test recommendations',
  ],
  imgSrc:   'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
  imgRight: false,
};

const proc = {
  label: 'HOW IT WORKS',
  title: 'PAT Testing in 3 Simple Steps',
  steps: [
    { icon: 'bi-calendar-check', title: 'Book Online',          body: 'Select PAT Testing from our booking form. Tell us approximately how many items need testing and provide your address.' },
    { icon: 'bi-person-gear',    title: 'Engineer Visits',       body: 'Our NICEIC-approved engineer arrives at your property at the agreed time and tests all specified appliances quickly and efficiently.' },
    { icon: 'bi-file-earmark-check-fill', title: 'Get Certificate', body: 'Receive your PAT testing certificate by email within 24 hours, listing every appliance tested, pass/fail status, and retest date.' },
  ],
};

const faqs = [
  { q: 'How often should PAT testing be done?',
    a: 'The frequency depends on the type of appliance and environment. Generally, Class I appliances in offices need testing every 4 years, while high-risk environments may require annual testing. We recommend following the IET Code of Practice guidelines.' },
  { q: 'Is PAT testing a legal requirement for landlords?',
    a: 'Under the Electrical Equipment (Safety) Regulations 1994 and the Landlord and Tenant Act, landlords must ensure all electrical equipment is safe. PAT testing is the most recognised way to demonstrate compliance.' },
  { q: 'What appliances need PAT testing?',
    a: 'Any portable electrical appliance that connects to the mains via a plug, including kettles, toasters, computers, printers, extension leads, power tools, TVs, washing machines, and more.' },
  { q: 'How long does PAT testing take?',
    a: 'Testing typically takes 3–5 minutes per item. For a typical office or rental property with 20–30 items, expect around 2–3 hours including visual inspection and labelling.' },
  { q: 'Do you provide a certificate after PAT testing?',
    a: 'Yes. We provide a full PAT testing certificate and detailed register of all tested items, emailed within 24 hours of the inspection. This is accepted by insurers, letting agents, and auditors.' },
];

const related = [
  { icon: 'bi-lightning-charge-fill', title: 'EICR Certificate',     body: 'Fixed wiring inspection for residential and commercial properties.', to: '/electrical/residential-eicr' },
  { icon: 'bi-plug-fill',            title: 'Electrical Fault Finding', body: 'Expert diagnosis and repair of electrical faults throughout your property.', to: '/electrical/fault-finding' },
  { icon: 'bi-house-gear-fill',      title: 'Consumer Unit Upgrade', body: 'Replace your old fuse box with a modern consumer unit for safer electrics.', to: '/electrical/residential-fuse-box' },
];

export default function PATTestingPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <BenefitCards {...benefits} />
      <PricingBox {...pricing} />
      <IntroSection {...intro} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Electrical Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">PAT Testing FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <PageReviews title="What Our Clients Say" />
      <CtaBanner title="Need PAT Testing? Book Your Appointment Online Today!" />
    </>
  );
}
