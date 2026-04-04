import ServiceHero     from '../../components/ui/ServiceHero';
import StatsBar        from '../../components/ui/StatsBar';
import BenefitCards    from '../../components/ui/BenefitCards';
import IntroSection    from '../../components/ui/IntroSection';
import ProcessSteps    from '../../components/ui/ProcessSteps';
import FaqAccordion    from '../../components/ui/FaqAccordion';
import CtaBanner       from '../../components/ui/CtaBanner';
import SectionLabel    from '../../components/ui/SectionLabel';
import RelatedServices from '../../components/ui/RelatedServices';

const hero = {
  title:     'Boiler Repair London',
  subtitle:  'Fast, reliable boiler repair by Gas Safe registered engineers. We diagnose and fix all boiler makes and models across London.',
  price:     'From £89 Diagnosis',
  checklist: ['Same-Day Emergency Available', 'Gas Safe Registered', 'All Boiler Makes & Models', 'Transparent Fixed Pricing'],
  ctaText:   'Book Boiler Repair',
  ctaTo:     '/book-now',
  bgImage:   'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
};

const stats = [
  { value: '95%',    label: 'First-Visit Fix Rate' },
  { value: 'Same Day', label: 'Emergency Response' },
  { value: '5★',     label: 'Google Rating' },
  { value: '10+',    label: 'Years Experience' },
];

const benefits = {
  label: 'WHY CHOOSE US',
  title: 'Expert Boiler Repair Service',
  items: [
    { icon: 'bi-patch-check-fill', title: 'Gas Safe Registered',    body: 'Every engineer is Gas Safe registered and carries their Gas Safe ID card. You can verify credentials on the official Gas Safe Register website.' },
    { icon: 'bi-clock-fill',       title: 'Same-Day Emergency',     body: 'Boiler broken down? We prioritise emergency callouts and aim to attend the same day. Hot water and heating restored as quickly as possible.' },
    { icon: 'bi-boxes',            title: 'Fully Stocked Vans',     body: 'Our engineers carry a wide range of spare parts enabling most boiler repairs to be completed on the first visit without a return trip.' },
    { icon: 'bi-currency-pound',   title: 'No Fix, No Fee Option',  body: 'If we diagnose the fault but you decide not to proceed with the repair, you only pay the diagnostic fee. We are transparent about costs upfront.' },
  ],
};

const intro = {
  title:    'Common Boiler Faults We Repair',
  body:     'Our Gas Safe engineers repair all types of boiler faults across all major makes including Worcester Bosch, Vaillant, Baxi, Ideal, Alpha, Glow-worm, Potterton, and more.',
  checklist: [
    'No hot water or heating',
    'Boiler showing error/fault codes',
    'Boiler making banging or kettling noises',
    'Pilot light keeps going out',
    'Boiler losing pressure repeatedly',
    'Leaking or dripping boiler',
    'Boiler cutting out or cycling on/off',
    'Frozen condensate pipe issues',
  ],
  imgSrc:   'https://images.unsplash.com/photo-1590674899484-13da0e394dca?w=800&q=80',
  imgRight: false,
};

const proc = {
  label: 'HOW IT WORKS',
  title: 'Boiler Repair in 3 Steps',
  steps: [
    { icon: 'bi-telephone-fill',    title: 'Call or Book Online',    body: 'Contact us to describe your boiler problem. For emergencies, call directly for fastest response. We book the earliest available slot.' },
    { icon: 'bi-search',            title: 'Diagnose & Quote',       body: 'Our Gas Safe engineer diagnoses the fault and provides a transparent fixed-price quote for the repair before any work begins.' },
    { icon: 'bi-wrench-adjustable', title: 'Repair & Commission',    body: 'We complete the repair using genuine or high-quality equivalent parts, test the boiler fully, and ensure it is safe and operational before leaving.' },
  ],
};

const faqs = [
  { q: 'How much does a boiler repair cost?',
    a: 'Boiler repair costs start from £89 for a diagnostic visit. The total cost depends on the fault and parts required. We always provide a fixed-price quote before starting any repair work, so you know exactly what you\'ll pay.' },
  { q: 'How quickly can you attend an emergency boiler repair?',
    a: 'We aim to attend emergency callouts the same day across London, subject to engineer availability. Call us directly for the fastest response — we prioritise no heating and no hot water situations.' },
  { q: 'Is it worth repairing an old boiler or should I replace it?',
    a: 'Generally, if a boiler is over 10–12 years old and the repair cost exceeds 50% of a new boiler price, replacement is more cost-effective. Our engineer will give you an honest assessment of whether repair or replacement makes more sense.' },
  { q: 'Will you need to turn off my gas?',
    a: 'For most boiler repairs, we will need to isolate the gas supply to the boiler for safety. We will turn the gas back on and test everything thoroughly before leaving your property.' },
  { q: 'Do you offer a warranty on repairs?',
    a: 'Yes, we offer a 3-month warranty on all repair work carried out by our engineers. Any parts installed are covered by the manufacturer warranty. Full details are provided on your job sheet.' },
];

const related = [
  { icon: 'bi-gear-fill',     title: 'Boiler Service',              body: 'Annual boiler service to prevent breakdowns and maintain efficiency.', to: '/gas/boiler-service' },
  { icon: 'bi-plus-circle',   title: 'Boiler Installation',         body: 'If your boiler needs replacing, we supply and install all major brands.', to: '/gas/boiler-installation' },
  { icon: 'bi-house-check',   title: 'Landlord Gas Safety (CP12)',  body: 'Annual gas safety check legally required for all rental properties.', to: '/gas/landlord-gas-safety' },
];

export default function BoilerRepairPage() {
  return (
    <>
      <ServiceHero {...hero} />
      <StatsBar stats={stats} />
      <BenefitCards {...benefits} />
      <IntroSection {...intro} />
      <ProcessSteps {...proc} />
      <RelatedServices title="Related Gas Services" services={related} />

      <section className="faq-section">
        <div className="container">
          <SectionLabel center>FAQS</SectionLabel>
          <h2 className="fw-bold text-center mb-5">Boiler Repair FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9"><FaqAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      <CtaBanner title="Boiler Broken Down? Get It Fixed Today!" />
    </>
  );
}
