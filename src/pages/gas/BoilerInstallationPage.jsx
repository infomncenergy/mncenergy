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
  title:     'Boiler Installation London',
  subtitle:  'Certified gas engineers installing combi, system, and heat-only boilers across London. New boiler fitted in a day with 10-year warranty options.',
  price:     'From £1,499 Fully Fitted',
  checklist: ['Certified Gas Engineers', 'All Major Brands', '10-Year Warranty Available', 'Same-Week Installation'],
  ctaText:   'Get a Free Quote',
  ctaTo:     '/book-now',
  bgImage:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
};

const stats = [
  { value: '500+',  label: 'Boilers Installed' },
  { value: '1 Day', label: 'Typical Installation' },
  { value: '10 Yr', label: 'Warranty Available' },
  { value: '5★',    label: 'Google Rating' },
];

const benefits = {
  label: 'WHY CHOOSE US',
  title: 'Professional Boiler Installation',
  items: [
    { icon: 'bi-patch-check-fill',  title: 'Certified Gas Engineers',      body: 'All our gas engineers are fully qualified and certified, ensuring your installation meets all UK safety regulations and manufacturer requirements.' },
    { icon: 'bi-award-fill',        title: 'All Major Brands',          body: 'We install Worcester Bosch, Vaillant, Baxi, Ideal, Alpha, Viessmann, and all major boiler brands. We recommend the right boiler for your property and budget.' },
    { icon: 'bi-shield-check',      title: 'Manufacturer Warranty',     body: 'New boilers come with manufacturer warranties of up to 10 years when installed by a registered engineer. We handle all warranty registration for you.' },
    { icon: 'bi-receipt-cutoff',    title: 'Fixed Price Quote',         body: 'We provide a detailed written quote before any work begins. No hidden charges — the price we quote is the price you pay, including all labour and materials.' },
  ],
};

const pricing = {
  title:  'Boiler Installation Prices',
  body:   'Our prices include supply and installation of the new boiler, removal of old boiler, all necessary pipework modifications, system flush, and Gas Safe certificate.',
  prices: [
    { label: 'Combi Boiler (Standard)',    price: 'From £1,499' },
    { label: 'Combi Boiler (Premium)',     price: 'From £1,899' },
    { label: 'System Boiler',              price: 'From £1,699' },
    { label: 'Heat-Only Boiler',           price: 'From £1,599', note: '(excludes cylinder)' },
  ],
  disclaimer: '* All prices include labour and boiler supply. Additional work (e.g. flue extension, system power flush) quoted separately.',
};

const intro = {
  title:    'What is Included in the Installation?',
  body:     'Our boiler installation service is fully comprehensive. We handle everything from removing your old boiler to commissioning and registering the new one, leaving you with a fully functioning heating system and all documentation.',
  checklist: [
    'Removal and safe disposal of old boiler',
    'Supply and installation of new boiler',
    'All necessary pipework and connection modifications',
    'Magnetic system filter fitted (Fernox or Magnaclean)',
    'Powerflush of heating system (if required)',
    'Full commissioning and boiler registration',
    'Building Regulations compliance certificate',
    'Gas Safe certificate issued',
  ],
  imgSrc:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  imgRight: false,
};

const proc = {
  label: 'HOW IT WORKS',
  title: 'New Boiler in 3 Simple Steps',
  steps: [
    { icon: 'bi-calculator',         title: 'Free Survey & Quote',    body: 'Our engineer surveys your property, assesses your heating requirements, and recommends the right boiler. We provide a detailed fixed-price quote.' },
    { icon: 'bi-wrench-adjustable',  title: 'Installation Day',       body: 'our certified gas engineer arrives early and completes the full installation in a single day in most cases, including removing the old boiler and all commissioning.' },
    { icon: 'bi-file-earmark-check', title: 'Certificates & Warranty', body: 'You receive your gas safety certificate, Building Regulations documentation, and manufacturer warranty registration — all handled by us.' },
  ],
};

const faqs = [
  { q: 'How long does a boiler installation take?',
    a: 'Most standard combi boiler replacements take one full day (8–10 hours). More complex installations involving system changes, new pipework, or moving the boiler location may take 1–2 days.' },
  { q: 'Which boiler brand do you recommend?',
    a: 'We are experienced with all major brands. Worcester Bosch and Vaillant are our top recommendations for reliability and warranty support. We discuss your budget and property requirements and recommend accordingly.' },
  { q: 'Do I need Building Regulations approval for a new boiler?',
    a: 'Yes. All boiler installations must comply with Building Regulations Part L. Our certified engineers ensure the installation complies with Building Regulations Part L and all applicable safety standards.' },
  { q: 'Can you finance a new boiler?',
    a: 'We can discuss payment options. Please call us to discuss your situation. We also advise checking eligibility for government grants (ECO4 scheme) if you meet certain criteria.' },
  { q: 'What warranty comes with a new boiler?',
    a: 'Manufacturer warranties range from 2 to 10 years depending on the brand and model chosen. Worcester Bosch and Vaillant offer up to 10-year warranties when installed by registered engineers. We handle all warranty registration.' },
];

const related = [
  { icon: 'bi-fire',          title: 'Boiler Service',           body: 'Annual boiler service to maintain efficiency and extend your boiler\'s lifespan.', to: '/gas/boiler-service' },
  { icon: 'bi-tools',         title: 'Boiler Repair',            body: 'Fast diagnosis and repair of boiler faults by Gas Safe engineers.', to: '/gas/boiler-repair' },
  { icon: 'bi-house-check',   title: 'Landlord Gas Safety (CP12)', body: 'Annual gas safety certificate required for all landlords with gas properties.', to: '/gas/landlord-gas-safety' },
];

export default function BoilerInstallationPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <PricingBox {...pricing} />
      <BenefitCards {...benefits} />
      <IntroSection {...intro} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Gas Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Boiler Installation FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <CtaBanner title="Ready for a New Boiler? Get Your Free Quote Today!" />
    </>
  );
}
