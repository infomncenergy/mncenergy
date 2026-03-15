import { PHONE, PHONE_HREF } from '../data/constants';
import SectionLabel from '../components/ui/SectionLabel';
import FaqAccordion from '../components/ui/FaqAccordion';

const faqItems = [
  // Electrical FAQs
  {
    q: 'What is an EICR certificate and why do I need one?',
    a: 'An Electrical Installation Condition Report (EICR) is a comprehensive safety assessment of your property\'s fixed electrical installation. It identifies potential hazards and is legally required for rental properties under UK safety regulations.',
  },
  {
    q: 'How often should I get an EICR inspection?',
    a: 'For residential rental properties, an EICR is typically required every 5 years. For commercial properties, inspections should be carried out according to the level of risk and building usage, often every 3 years.',
  },
  {
    q: 'What does an EICR inspection involve?',
    a: 'Our qualified electrician will visually inspect your electrical installation including consumer units, wiring, earthing systems, bonding, and protective devices. Where safe, we perform electrical testing and provide you with a detailed report.',
  },
  {
    q: 'How long does an EICR take?',
    a: 'Typical inspection times range from 45 minutes to 3 hours depending on property size and electrical system complexity. Older installations or limited access may require additional time.',
  },

  // Gas FAQs
  {
    q: 'What is a Gas Safety Certificate (CP12) for landlords?',
    a: 'A CP12 is an official certificate issued by a Gas Safe registered engineer confirming that all gas appliances, pipework, and flues in a property meet UK safety standards. Landlords must renew it annually and provide copies to tenants.',
  },
  {
    q: 'How much does a gas safety certificate cost?',
    a: 'Residential gas safety certificates typically start from £99. Commercial CP42 certificates start from £199.99. Pricing varies based on the number and type of appliances to be inspected.',
  },
  {
    q: 'What happens if I fail to provide a valid gas safety certificate?',
    a: 'Failure to provide a valid CP12 can result in fines up to £6,000 per appliance and potential criminal prosecution. It also typically invalidates landlord insurance and can result in tenancy disputes.',
  },
  {
    q: 'Can you repair my boiler on the same visit as the gas safety check?',
    a: 'Yes, if our engineer identifies a boiler fault during the safety check, they can often provide a quote for repair. Emergency repairs can usually be arranged quickly, including same-day service if needed.',
  },
  {
    q: 'Is boiler servicing the same as a gas safety check?',
    a: 'No. A boiler service is preventive maintenance that checks efficiency and prevents breakdowns. A gas safety check verifies that all gas appliances and pipework meet safety regulations. We recommend both annually.',
  },

  // Commercial Gas FAQs
  {
    q: 'What is a CP42 commercial gas safety certificate?',
    a: 'A CP42 is a commercial gas safety certificate specifically for business premises with gas catering appliances. It confirms that all gas cooking equipment, pipework, and connections have been safely inspected by a Gas Safe registered engineer.',
  },
  {
    q: 'Who needs a commercial gas safety certificate?',
    a: 'Commercial properties including restaurants, cafes, hotels, offices, and any business premises with gas appliances must have annual gas safety inspections and hold a valid CP42 certificate.',
  },
  {
    q: 'How does a commercial gas engineer differ from a domestic engineer?',
    a: 'Commercial gas engineers have specialist qualifications in commercial heating systems, large-capacity boilers, and commercial kitchen equipment. They understand the higher safety demands and compliance requirements of commercial premises.',
  },
  {
    q: 'Can you service my restaurant kitchen without disrupting service?',
    a: 'Yes, we schedule commercial inspections and maintenance during quieter service periods to minimize disruption. Our engineers work efficiently to complete assessments without impacting your kitchen operations.',
  },

  // Fire Safety FAQs
  {
    q: 'What is a Fire Risk Assessment (FRA)?',
    a: 'A Fire Risk Assessment is a systematic evaluation of a property to identify fire hazards, assess risks to occupants, and recommend measures to reduce or eliminate those risks. It\'s a legal requirement for most non-domestic and multi-occupancy residential premises.',
  },
  {
    q: 'How often should I have a Fire Risk Assessment?',
    a: 'The Regulatory Reform (Fire Safety) Order 2005 requires regular reviews. Annual assessments are recommended for most premises, and reviews must be carried out whenever there are significant changes to the building, occupancy, or use.',
  },
  {
    q: 'Who is legally responsible for a Fire Risk Assessment?',
    a: 'The "responsible person" — typically the employer, building owner, or managing agent — is legally obligated to ensure a suitable and sufficient FRA is carried out and kept up to date.',
  },
  {
    q: 'What does a fire safety check include?',
    a: 'A fire safety assessment examines fire hazards, exit routes, emergency lighting, fire extinguishers, alarm systems, and escape route accessibility. We provide recommendations for improving compliance and safety.',
  },
  {
    q: 'What is the difference between a fire safety check and a fire risk assessment?',
    a: 'A fire safety check is a simpler inspection documenting that your property meets basic fire safety standards. A comprehensive Fire Risk Assessment involves detailed hazard analysis, risk prioritization, and a formal action plan for remediation.',
  },

  // Asbestos FAQs
  {
    q: 'Why should I be concerned about asbestos?',
    a: 'Asbestos is a highly dangerous material that can cause serious respiratory diseases, mesothelioma, and lung cancer when fibers are inhaled. Properties built before 2000 are particularly likely to contain asbestos-containing materials.',
  },
  {
    q: 'Can you identify asbestos during a fire risk assessment?',
    a: 'Yes, our combined Fire Risk Assessment and asbestos service includes visual identification of materials suspected to contain asbestos. Samples can be tested in certified laboratories to confirm the presence of asbestos fibers.',
  },
  {
    q: 'What happens if asbestos is found in my property?',
    a: 'If asbestos is identified, our assessment documents its location and condition. Further management or removal decisions depend on the type and current condition. We can recommend appropriate specialist contractors for removal if needed.',
  },
  {
    q: 'Do I need to remove asbestos if it\'s found?',
    a: 'Not necessarily. If asbestos is in good condition and not disturbed, it can often be safely managed in place. Removal is required if it\'s damaged, being renovated, or poses a risk of fiber release.',
  },
  {
    q: 'Is a combined Fire Risk Assessment and asbestos report cost-effective?',
    a: 'Yes, combining both assessments in a single visit reduces disruption and is more cost-effective than booking separate inspections. You get comprehensive safety documentation covering multiple hazards.',
  },

  // EPC FAQs
  {
    q: 'What is an Energy Performance Certificate (EPC)?',
    a: 'An EPC is a document that shows the energy efficiency rating of a property on a scale from A (most efficient) to G (least efficient). It includes recommendations for cost-effective energy improvements.',
  },
  {
    q: 'When do I need an EPC?',
    a: 'An EPC is legally required when a property is sold, let, or when a new tenancy begins. The certificate must be provided to potential buyers or tenants before they commit to the transaction.',
  },
  {
    q: 'How long is an EPC valid for?',
    a: 'An EPC is valid for 10 years from the date of assessment. However, if major improvements or changes are made to the property, a new EPC may be recommended.',
  },
  {
    q: 'How much does an EPC cost?',
    a: 'EPC costs vary depending on property size but typically range from £35 to £120. We provide competitive fixed pricing with rapid turnaround for digital delivery.',
  },
  {
    q: 'Can I improve my property\'s EPC rating?',
    a: 'Yes, our EPC report includes recommendations for cost-effective improvements such as loft insulation, efficient heating systems, and window upgrades that can improve your energy rating and reduce bills.',
  },
];

export default function FaqsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, rgba(25,135,84,0.95) 0%, rgba(13,110,253,0.95) 100%)',
        padding: '80px 20px',
        color: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="fw-bold mb-4" style={{ fontSize: '3.5rem' }}>
                Frequently Asked Questions
              </h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem', opacity: 0.95 }}>
                Find answers to common questions about our electrical, gas, fire, asbestos, and energy services across London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FaqAccordion items={faqItems} />
            </div>
          </div>

          {/* Contact CTA */}
          <div className="row justify-content-center mt-5 pt-5 border-top">
            <div className="col-lg-8 text-center">
              <h3 className="fw-bold mb-3">Didn't Find Your Answer?</h3>
              <p className="text-muted mb-4">
                Our team is ready to help with any questions about our services. Get in touch today for a consultation or to discuss your specific requirements.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="/book-now" className="btn btn-success btn-lg">
                  Book Now
                </a>
                <a href={PHONE_HREF} className="btn btn-outline-success btn-lg">
                  Call: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <SectionLabel center>OUR SERVICES</SectionLabel>
            <h2 className="fw-bold">Comprehensive Safety & Compliance Solutions</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="service-card p-4 h-100 text-center" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-lightning-charge-fill text-warning" style={{ fontSize: '3rem' }}></i>
                <h5 className="fw-bold mt-3 mb-2">Electrical Safety</h5>
                <p className="text-muted small">EICR inspections, fault finding, and electrical compliance certifications.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card p-4 h-100 text-center" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-fire text-danger" style={{ fontSize: '3rem' }}></i>
                <h5 className="fw-bold mt-3 mb-2">Fire Safety</h5>
                <p className="text-muted small">Fire risk assessments, safety checks, and emergency preparedness.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card p-4 h-100 text-center" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-flame" style={{ fontSize: '3rem', color: '#fd7e14' }}></i>
                <h5 className="fw-bold mt-3 mb-2">Gas Services</h5>
                <p className="text-muted small">Gas safety certificates, boiler services, and repairs for homes and businesses.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card p-4 h-100 text-center" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <i className="bi bi-exclamation-diamond-fill" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                <h5 className="fw-bold mt-3 mb-2">Asbestos & EPC</h5>
                <p className="text-muted small">Asbestos surveys, energy performance certificates, and compliance documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Experience Banner */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#198754' }}>500+</div>
                <p className="text-muted">Properties Certified Monthly</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#198754' }}>5★</div>
                <p className="text-muted">Google Rating</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#198754' }}>10+</div>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#198754' }}>24/7</div>
                <p className="text-muted">Emergency Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
