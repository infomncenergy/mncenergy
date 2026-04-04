// ============================================================
// Gas Services — all page content
// ============================================================

// ── Shared Gas Benefits ──────────────────────────────────────
export const GAS_BENEFITS = [
  {
    icon: 'bi-scale',
    title: 'Legal Requirement',
    body: 'Landlords are legally required under the Gas Safety (Installation and Use) Regulations 1998 to have all gas appliances inspected annually by a Gas Safe registered engineer.',
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'Protect Your Tenants',
    body: 'Regular gas safety checks prevent dangerous leaks, carbon monoxide poisoning, and fire hazards, keeping your tenants and property safe.',
  },
  {
    icon: 'bi-exclamation-triangle-fill',
    title: 'Avoid Heavy Fines',
    body: 'Failure to provide a valid CP12 can result in fines of up to £6,000 per appliance and potential criminal prosecution under UK law.',
  },
  {
    icon: 'bi-house-check-fill',
    title: 'Peace of Mind',
    body: 'Know that all gas appliances in your property are operating safely and efficiently, protecting both your investment and your tenants.',
  },
];

// ── Shared Gas FAQs ──────────────────────────────────────────
export const GAS_FAQS = [
  {
    q: 'What is a Gas Safety Certificate (CP12)?',
    a: 'A CP12 is an official certificate issued by a Gas Safe registered engineer after inspecting all gas appliances, pipework, and flues in a property. It confirms everything meets UK safety standards and is legally required for landlords annually.',
  },
  {
    q: 'How often do I need a Gas Safety Certificate?',
    a: 'Landlords must renew their CP12 annually. The certificate must be provided to existing tenants within 28 days of the check, and to new tenants before they move in.',
  },
  {
    q: 'What happens during a gas safety inspection?',
    a: 'The engineer checks all gas appliances (boilers, hobs, fires), tests for gas tightness, examines flues and ventilation, and checks for carbon monoxide risks. A certificate is issued on successful completion.',
  },
  {
    q: 'Can I see the Gas Safe register?',
    a: 'Yes, all our engineers are registered with Gas Safe. You can verify any engineer\'s credentials at the official Gas Safe Register website at www.gassaferegister.co.uk.',
  },
  {
    q: 'How quickly can I get a Gas Safety Certificate after booking?',
    a: 'We offer flexible scheduling with same-day or next-day appointments available across London. Certificates are issued digitally within 24–48 hours of the inspection.',
  },
];

// ── Shared Boiler FAQs ───────────────────────────────────────
export const BOILER_FAQS = [
  {
    q: 'What is included in a boiler service?',
    a: 'A full visual inspection, combustion analysis, checking controls and safety devices, cleaning key components, checking the flue and heat exchanger, and testing for gas tightness.',
  },
  {
    q: 'How long does a boiler service take?',
    a: 'Typically 45–90 minutes for a standard combi boiler. System and conventional boilers may take slightly longer depending on their age and condition.',
  },
  {
    q: 'How often should I service my boiler?',
    a: 'Annual servicing is strongly recommended by all boiler manufacturers and required to keep most warranty agreements valid.',
  },
  {
    q: 'What brands do you service?',
    a: 'We service all major boiler brands including Vaillant, Worcester Bosch, Baxi, Ideal, Glow-worm, Potterton, Viessmann, and more.',
  },
  {
    q: 'Do I need a boiler service if I have a gas safety certificate?',
    a: 'Yes – a Gas Safety Certificate (CP12) checks appliance safety but does not constitute a full service. Annual servicing keeps your boiler efficient, extends its lifespan, and maintains your warranty.',
  },
];

// ══════════════════════════════════════════════════════════════
// LANDLORD GAS SAFETY CERTIFICATE (CP12)
// ══════════════════════════════════════════════════════════════
export const CP12 = {
  hero: {
    title: 'Landlord Gas Safety Certificate (CP12)',
    subtitle: 'Annual Gas Safety Inspections for Rental Properties – From £57.99. Certified by Gas Safe Registered Engineers Across London.',
    price: 'From £57.99',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  },
  stats: [
    { value: 'Gas Safe', label: 'Registered Engineers' },
    { value: 'Certificates', label: 'Issued Within 24–48 hrs' },
    { value: 'Same Day', label: 'Appointments Available' },
  ],
  intro: {
    title: 'What is a Landlord Gas Safety Certificate (CP12)?',
    body: 'A Landlord Gas Safety Certificate, also known as a CP12, is a legal document required by all UK landlords who provide gas appliances in their rental properties. Under the Gas Safety (Installation and Use) Regulations 1998, landlords must have all gas appliances, pipework, and flues checked annually by a Gas Safe registered engineer. Our engineers cover London with next-day appointment availability and same-day digital certificate delivery.',
    imgSrc: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
    imgAlt: 'Gas Safe engineer performing CP12 inspection',
    ctaText: 'Book Now',
  },
  benefits: {
    label: 'CP12 GAS SAFETY CERTIFICATE',
    title: 'Why Do You Need a Landlord Gas Safety Certificate?',
    items: GAS_BENEFITS,
  },
  pricing: {
    title: 'Landlord Gas Safety Certificate Pricing',
    body: 'Our transparent pricing covers all gas appliances in your rental property. Additional appliances can be added at the time of booking.',
    prices: [
      { label: '1 Appliance',     price: '£59.99' },
      { label: '2 Appliances',    price: '£79.99' },
      { label: '3+ Appliances',   price: 'From £99' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Prices include VAT. Parking not included and charged at the local rate. London Congestion Zone: +£15.',
  },
  whatsCovered: {
    title: 'What\'s Covered in a CP12 Gas Safety Inspection?',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    items: [
      { label: 'Gas Appliances', text: 'Boilers, gas hobs, gas fires, and any other gas-powered appliances.' },
      { label: 'Gas Pipework', text: 'Checking for leaks, corrosion, and correct installation of all supply pipes.' },
      { label: 'Flues & Ventilation', text: 'Ensuring combustion gases are safely expelled and ventilation is adequate.' },
      { label: 'Carbon Monoxide Risks', text: 'Testing for CO presence and checking alarms are functional.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Getting Your CP12 Certificate',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Online or by Phone', body: 'Schedule your gas safety inspection online or call us. Same-day and next-day slots are available across London.' },
      { icon: 'bi-person-badge-fill', title: 'Engineer Visit', body: 'A Gas Safe registered engineer visits your property and inspects all gas appliances, pipework, flues, and ventilation.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Receive Your CP12', body: 'Your digital CP12 certificate is emailed within 24–48 hours. Share it with your tenants and keep a copy for your records.' },
    ],
  },
  related: [
    { icon: 'bi-fire', title: 'Homeowner Gas Safety', body: 'Keep your own home\'s gas appliances safe with a homeowner gas safety check from our Gas Safe engineers.', to: '/gas/homeowner-gas-safety' },
    { icon: 'bi-thermometer-sun', title: 'Boiler Service', body: 'Annual boiler servicing to keep your heating system efficient, safe, and under manufacturer warranty.', to: '/gas/boiler-service' },
    { icon: 'bi-building', title: 'Commercial Gas Safety (CP15)', body: 'Gas safety certificates for commercial properties, boilers, and catering equipment across London.', to: '/gas/commercial-boiler-cp15' },
  ],
  faqs: GAS_FAQS,
  cta: 'Book Your Annual Landlord Gas Safety Check Today – Stay Compliant!',
};

// ══════════════════════════════════════════════════════════════
// HOMEOWNER GAS SAFETY CERTIFICATE
// ══════════════════════════════════════════════════════════════
export const HOMEOWNER_GAS = {
  hero: {
    title: 'Homeowner Gas Safety Certificate',
    subtitle: 'Keep Your Home\'s Gas Appliances Safe and Efficient with Certified Gas Safe Engineers.',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
  },
  intro: {
    title: 'Gas Safety Checks for Homeowners',
    body: 'While not legally required for homeowners (unlike landlords), having your gas appliances regularly checked by a Gas Safe registered engineer is strongly recommended. Annual checks give you confidence that your boiler, gas hob, fires, and pipework are safe to use. Our engineers provide thorough inspections and issue a homeowner gas safety certificate following every visit across London.',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    imgAlt: 'Gas engineer checking home appliances',
    ctaText: 'Book Now',
  },
  benefits: {
    label: 'HOMEOWNER GAS SAFETY',
    title: 'Why Get a Homeowner Gas Safety Check?',
    items: [
      {
        icon: 'bi-house-fill',
        title: 'Protect Your Home & Family',
        body: 'Prevent dangerous gas leaks, carbon monoxide poisoning, and appliance-related fires with regular, professional gas inspections.',
      },
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Save on Energy Bills',
        body: 'Well-maintained appliances run more efficiently, reducing your gas consumption and monthly energy bills.',
      },
      {
        icon: 'bi-clock-history',
        title: 'Extend Appliance Lifespan',
        body: 'Regular servicing keeps your boiler and gas appliances in optimal condition, extending their operational life significantly.',
      },
      {
        icon: 'bi-file-earmark-text-fill',
        title: 'Documentation for Property Sale',
        body: 'A history of gas safety checks and certificates adds reassurance for buyers and can speed up the conveyancing process.',
      },
    ],
  },
  pricing: {
    title: 'Homeowner Gas Safety Certificate Pricing',
    body: 'Affordable gas safety checks for homeowners across London. Protect your family and your home.',
    prices: [
      { label: '1 Appliance',     price: '£59.99' },
      { label: '2 Appliances',    price: '£79.99' },
      { label: '3+ Appliances',   price: 'From £99' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Prices include VAT. Parking not included and charged at the local rate. London Congestion Zone: +£15.',
  },
  whatsCovered: {
    title: 'What is Included in a Homeowner Gas Safety Check?',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    items: [
      { label: 'Boiler Inspection', text: 'Visual and operational check of your boiler, including safety controls and heat exchanger.' },
      { label: 'Gas Hob & Fires', text: 'Testing of all gas cooking appliances and gas fires for safe operation and gas tightness.' },
      { label: 'Pipework Check', text: 'Inspection of accessible gas pipework for leaks, corrosion, or incorrect installation.' },
      { label: 'CO Alarm Check', text: 'Verification that carbon monoxide alarms are present, functioning, and correctly positioned.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Getting Your Homeowner Gas Safety Check',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book an Appointment', body: 'Choose a convenient time online or call us. Evening and weekend slots are available across London.' },
      { icon: 'bi-person-badge-fill', title: 'Engineer Visit', body: 'A Gas Safe registered engineer will inspect all gas appliances, pipework, and safety devices at your property.' },
      { icon: 'bi-envelope-check-fill', title: 'Receive Your Certificate', body: 'Your homeowner gas safety certificate is emailed digitally within 24–48 hours of the completed inspection.' },
    ],
  },
  related: [
    { icon: 'bi-thermometer-sun', title: 'Boiler Service', body: 'Complement your gas safety check with a full annual boiler service to maximise efficiency and longevity.', to: '/gas/boiler-service' },
    { icon: 'bi-building2', title: 'Landlord CP12', body: 'If you rent out a property, a Landlord Gas Safety Certificate (CP12) is a legal annual requirement.', to: '/gas/landlord-gas-safety' },
    { icon: 'bi-lightning-charge-fill', title: 'EICR Certificate', body: 'Combine your gas safety check with an electrical installation condition report for complete home safety.', to: '/electrical/residential-eicr' },
  ],
  faqs: [
    { q: 'Do homeowners legally need a gas safety certificate?', a: 'No – the legal requirement only applies to landlords renting out properties. However, an annual check is strongly recommended for your family\'s safety.' },
    { q: 'How often should homeowners have a gas check?', a: 'Annually is recommended, especially for boilers and other frequently used gas appliances. Regular checks can identify problems early and prevent costly breakdowns.' },
    { q: 'What happens if a fault is found during the inspection?', a: 'If our engineer identifies an unsafe appliance, they will advise you on the necessary remedial work. In cases of immediate danger, the appliance may be isolated for safety.' },
    { q: 'Can I book a gas safety check and boiler service together?', a: 'Yes – we offer combined packages that include both a homeowner gas safety check and a full boiler service at a discounted rate. Ask us when you book.' },
  ],
  cta: 'Book a Homeowner Gas Safety Check – Protect Your Family Today!',
};

// ══════════════════════════════════════════════════════════════
// BOILER SERVICE
// ══════════════════════════════════════════════════════════════
export const BOILER_SERVICE = {
  hero: {
    title: 'Boiler Service in London',
    subtitle: 'Annual Boiler Servicing to Keep Your Heating System Reliable, Safe and Efficient.',
    price: 'From £79.99',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
  },
  stats: [
    { value: 'All Major', label: 'Brands Serviced' },
    { value: 'Gas Safe', label: 'Registered Engineers' },
    { value: 'Same Day', label: 'Slots Available' },
  ],
  intro: {
    title: 'Professional Boiler Servicing in London',
    body: 'An annual boiler service is essential for maintaining the safety, efficiency, and longevity of your heating system. Our Gas Safe registered engineers carry out comprehensive boiler services across London, checking for faults, cleaning components, and ensuring your boiler operates at peak efficiency. We service all major boiler brands including Vaillant, Worcester Bosch, Baxi, Ideal, Glow-worm, and more.',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    imgAlt: 'Gas engineer servicing a boiler',
    ctaText: 'Book Now',
  },
  benefits: {
    label: 'ANNUAL BOILER SERVICE',
    title: 'Why Service Your Boiler Every Year?',
    items: [
      {
        icon: 'bi-shield-fill-check',
        title: 'Safety First',
        body: 'Identify and resolve potential gas leaks, CO risks, heat exchanger cracks, and component failures before they become dangerous.',
      },
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Improved Efficiency',
        body: 'A clean, well-maintained boiler uses less gas to produce the same heat, lowering your energy bills and carbon footprint.',
      },
      {
        icon: 'bi-tools',
        title: 'Prevent Breakdowns',
        body: 'Catch issues early to avoid unexpected breakdowns in cold weather when you need your heating the most.',
      },
      {
        icon: 'bi-patch-check-fill',
        title: 'Warranty Compliance',
        body: 'Most boiler manufacturers require annual servicing by a Gas Safe engineer to keep your warranty valid.',
      },
    ],
  },
  pricing: {
    title: 'Boiler Service Pricing',
    body: 'Affordable annual boiler servicing for homes and businesses across London. Transparent pricing with no hidden fees.',
    prices: [
      { label: 'Boiler Service',                price: 'From £79.99' },
      { label: 'Service + Gas Safety Check (CP12)', price: 'From £119.99' },
      { label: 'Service + CP12 + PAT Testing',  price: 'From £159.99' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Prices include VAT. Parking not included and charged at the local rate. London Congestion Zone: +£15.',
  },
  whatsCovered: {
    title: 'What\'s Included in a Boiler Service?',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    items: [
      { label: 'Visual Inspection', text: 'Checking the boiler casing, pipework, and all visible components for signs of corrosion, leaks, or damage.' },
      { label: 'Combustion Analysis', text: 'Measuring flue gas emissions to ensure the burner is operating efficiently and safely.' },
      { label: 'Safety Devices Check', text: 'Testing the pressure relief valve, thermostat, and all safety cut-offs and controls.' },
      { label: 'Component Cleaning', text: 'Cleaning the heat exchanger, burner, and other key components to restore peak efficiency.' },
      { label: 'Gas Tightness Test', text: 'Ensuring no gas leaks are present in the supply to the boiler.' },
      { label: 'Full Service Report', text: 'A written report detailing the condition of your boiler and any recommended actions.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Your Boiler Service Appointment',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Service', body: 'Book online or by phone. We offer flexible morning and afternoon slots, including weekends, across London.' },
      { icon: 'bi-search', title: 'Thorough Inspection', body: 'Our Gas Safe engineer inspects, cleans, and tests every component of your boiler following manufacturer guidelines.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Service Report Issued', body: 'Receive a full digital service report confirming your boiler\'s condition, with any recommendations clearly noted.' },
    ],
  },
  brands: ['Vaillant', 'Worcester Bosch', 'Baxi', 'Ideal', 'Glow-worm', 'Potterton', 'Viessmann', 'Ariston', 'Ferroli', 'Heatline'],
  related: [
    { icon: 'bi-fire', title: 'Landlord Gas Safety (CP12)', body: 'Combine your boiler service with an annual Landlord Gas Safety Certificate to meet your legal obligations.', to: '/gas/landlord-gas-safety' },
    { icon: 'bi-house-fill', title: 'Homeowner Gas Safety', body: 'Complete peace of mind with a homeowner gas safety certificate alongside your boiler service.', to: '/gas/homeowner-gas-safety' },
    { icon: 'bi-plug-fill', title: 'EICR Certificate', body: 'Complete your property safety checks with an electrical installation condition report from our certified electricians.', to: '/electrical/residential-eicr' },
  ],
  faqs: BOILER_FAQS,
  cta: 'Book Your Annual Boiler Service Today – Keep Your Heating Reliable!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL BOILER GAS SAFETY (CP15)
// ══════════════════════════════════════════════════════════════
export const CP15 = {
  hero: {
    title: 'Commercial Boiler Gas Safety Certificate (CP15)',
    subtitle: 'Annual Gas Safety Inspections for Commercial Properties Across London. Certified CP15 Certificates from Gas Safe Registered Engineers.',
    price: 'From £99.99',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'Gas Safe', label: 'Registered Engineers' },
    { value: 'All Commercial', label: 'Property Types' },
    { value: 'CP15 Certs', label: 'Issued 24–48 hrs' },
  ],
  intro: {
    title: 'What is a CP15 – Commercial Boiler Gas Safety Certificate?',
    body: 'The CP15 certificate is required for commercial properties with natural gas or LPG boilers. Our Gas Safe registered engineers carry out thorough inspections of commercial boilers, gas appliances, and associated pipework to ensure compliance with the Gas Safety (Installation and Use) Regulations 1998. We serve businesses, landlords, and property managers across London with fast turnaround and next-day appointment availability.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial gas safety inspection',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'CP15 COMMERCIAL GAS SAFETY',
    title: 'Why Does Your Business Need a CP15 Certificate?',
    items: [
      {
        icon: 'bi-bank2',
        title: 'Legal Compliance',
        body: 'The Gas Safety (Installation and Use) Regulations 1998 requires all commercial premises to have gas appliances inspected annually by a Gas Safe registered engineer.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Protect Staff & Visitors',
        body: 'A valid CP15 certificate protects your employees, customers, and visitors from the risks of gas leaks, CO exposure, and appliance-related fires.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Requirements',
        body: 'Commercial insurers often require an up-to-date CP15 certificate. Operating without one may invalidate your business insurance policy.',
      },
      {
        icon: 'bi-building-check',
        title: 'Business Continuity',
        body: 'Proactive annual checks identify faults before they cause gas shutdowns, heating failures, or costly emergency repairs.',
      },
    ],
  },
  pricing: {
    title: 'CP15 Commercial Gas Safety Pricing',
    body: 'Competitive pricing for commercial gas safety inspections. We offer fixed pricing for standard premises and tailored quotes for larger or more complex sites.',
    prices: [
      { label: 'Small Commercial (1–2 appliances)', price: 'From £99.99' },
      { label: 'Medium Premises (3–5 appliances)',   price: 'From £149.99' },
      { label: 'Large / Industrial',                 price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Prices include VAT. Parking and congestion zone charges may apply. Please advise at booking.',
  },
  propertyTypes: {
    title: 'Commercial Properties We Cover',
    subtitle: 'We provide CP15 gas safety certificates for all types of commercial premises across London.',
    items: [
      { icon: 'bi-building', title: 'Offices & Office Buildings', body: 'Ensure your office heating systems and gas appliances are legally compliant and safe for staff.' },
      { icon: 'bi-shop', title: 'Retail Units & Shops', body: 'Annual gas inspections for retail spaces with gas heating or catering equipment.' },
      { icon: 'bi-house-door-fill', title: 'HMOs & Multi-Occupancy', body: 'Gas safety certificates for houses in multiple occupation and managed blocks.' },
      { icon: 'bi-gear-wide-connected', title: 'Warehouses & Industrial', body: 'Gas safety inspections for industrial sites with high-capacity commercial boilers and heating.' },
      { icon: 'bi-hospital', title: 'Care Homes & Schools', body: 'Mandatory annual gas safety checks for schools, care homes, and public sector premises.' },
      { icon: 'bi-cup-hot-fill', title: 'Restaurants & Hospitality', body: 'Gas safety for commercial kitchens, catering equipment, and heating systems.' },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Your CP15 Inspection Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Inspection', body: 'Schedule a convenient time for our Gas Safe engineer to visit. We offer flexible slots to minimise disruption to your business.' },
      { icon: 'bi-search', title: 'On-Site Inspection', body: 'Our engineer inspects all commercial boilers, gas pipework, flues, and appliances. Pressure testing and combustion analysis are carried out.' },
      { icon: 'bi-file-earmark-check-fill', title: 'CP15 Certificate Issued', body: 'Your digital CP15 certificate is issued within 24–48 hours. Keep it on file for your insurers, compliance records, and licensing applications.' },
    ],
  },
  related: [
    { icon: 'bi-cup-hot-fill', title: 'Catering Gas Safety (CP42)', body: 'Gas safety certificate specifically for commercial catering appliances and kitchens.', to: '/gas/commercial-catering-cp42' },
    { icon: 'bi-tools', title: 'Gas Installation Testing (CP16)', body: 'Testing and purging of new or altered commercial gas installations before use.', to: '/gas/commercial-installation-cp16' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EICR', body: 'Pair your gas safety check with a commercial electrical installation condition report.', to: '/electrical/commercial-eicr' },
  ],
  faqs: [
    { q: 'What is a CP15 gas safety certificate?', a: 'A CP15 is the commercial equivalent of a residential CP12. It is issued by a Gas Safe registered engineer after inspecting commercial gas boilers and appliances, confirming they meet UK safety standards.' },
    { q: 'Is a CP15 legally required for all businesses?', a: 'Yes. Under the Gas Safety (Installation and Use) Regulations 1998, all employers and businesses with gas appliances must have them inspected annually by a Gas Safe engineer.' },
    { q: 'How is a CP15 different from a CP12?', a: 'A CP12 is issued for residential properties (landlord safety certificate), while a CP15 is issued for commercial premises. Both are annual legal requirements but cover different types of property and appliance loads.' },
    { q: 'How long does a commercial gas inspection take?', a: 'Typically 1–3 hours for standard commercial premises. Larger sites with multiple boilers and complex pipework may take longer. We advise at booking based on your site details.' },
    { q: 'What happens if a fault is found?', a: 'If a dangerous fault is found, the engineer may isolate the appliance for safety. You will receive a report detailing the fault and the remedial work required. We can also carry out repair work.' },
  ],
  cta: 'Book Your CP15 Commercial Gas Safety Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// GAS INSTALLATION TESTING & PURGING (CP16)
// ══════════════════════════════════════════════════════════════
export const CP16 = {
  hero: {
    title: 'Commercial Gas Installation Testing & Purging (CP16)',
    subtitle: 'Professional Gas Tightness Testing and Purging for New or Altered Commercial Gas Installations Across London.',
    ctaText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  intro: {
    title: 'What is a CP16 Certificate?',
    body: 'A CP16 certificate documents the testing and purging of new or altered commercial gas installations. This is an essential step in commissioning new gas supply systems or reinstating gas supplies after works or interruptions. Our Gas Safe registered engineers carry out pressure testing, purging procedures, and issue the CP16 documentation required for safety sign-off and regulatory compliance across London.',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    imgAlt: 'Gas installation testing and purging',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'CP16 GAS INSTALLATION TESTING',
    title: 'Why is Gas Installation Testing & Purging Required?',
    items: [
      {
        icon: 'bi-shield-fill-exclamation',
        title: 'Safety Before Commissioning',
        body: 'Pressure testing confirms there are no leaks in new or modified pipework before gas is introduced, preventing potentially catastrophic incidents.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Regulatory Requirement',
        body: 'Gas Safe and HSE regulations require all new commercial gas installations to be tested and purged before being commissioned for use.',
      },
      {
        icon: 'bi-building-check',
        title: 'Insurance & Sign-Off',
        body: 'A CP16 certificate is required by building control, insurers, and utility providers before a new gas supply can be activated and used.',
      },
      {
        icon: 'bi-check-circle-fill',
        title: 'Peace of Mind',
        body: 'Know that your new gas installation has been professionally verified and meets all UK safety standards before operation begins.',
      },
    ],
  },
  whatsCovered: {
    title: 'What Does CP16 Testing & Purging Include?',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    items: [
      { label: 'Strength Test', text: 'Pressure testing the installation above working pressure to confirm structural integrity of all pipework.' },
      { label: 'Tightness Test', text: 'Testing at working pressure to confirm no leaks are present in the complete installation.' },
      { label: 'Purging', text: 'Safely purging air from the pipework and introducing gas supply in a controlled and documented procedure.' },
      { label: 'CP16 Documentation', text: 'Full written documentation of all test results and purging procedures issued as the CP16 certificate.' },
    ],
    ctaText: 'Get a Quote',
  },
  pricing: {
    title: 'CP16 Testing & Purging Pricing',
    body: 'Our CP16 pricing is based on the size and complexity of the installation. Contact us for a tailored quote for your site.',
    prices: [
      { label: 'Small Installation (single supply)',  price: 'From £149' },
      { label: 'Medium / Multi-outlet Installation', price: 'From £249' },
      { label: 'Large Commercial / Industrial',       price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* All prices include VAT. Site visits may include travel and access charges for remote locations.',
  },
  process: {
    label: 'THE CP16 PROCESS',
    title: 'How Gas Installation Testing & Purging Works',
    steps: [
      { icon: 'bi-search', title: 'Site Assessment', body: 'Our engineer assesses the installation, reviews drawings if available, and plans the testing and purging procedure.' },
      { icon: 'bi-speedometer2', title: 'Pressure Testing', body: 'Strength and tightness tests are performed using calibrated gauges to confirm the installation\'s integrity.' },
      { icon: 'bi-wind', title: 'Purging & Commissioning', body: 'Air is safely purged from the system and gas is introduced in a controlled manner. Documentation is completed and the CP16 issued.' },
    ],
  },
  related: [
    { icon: 'bi-building', title: 'CP15 Commercial Gas Safety', body: 'Once your installation is commissioned, ensure ongoing compliance with an annual CP15 gas safety certificate.', to: '/gas/commercial-boiler-cp15' },
    { icon: 'bi-file-text', title: 'CP17 Gas Installation Safety Report', body: 'A comprehensive safety report for non-domestic gas installations, covering the full installation system.', to: '/gas/commercial-safety-report-cp17' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EICR', body: 'Complete your commercial compliance with an electrical installation condition report.', to: '/electrical/commercial-eicr' },
  ],
  faqs: [
    { q: 'What is the difference between CP16 and CP15?', a: 'A CP16 is issued after the testing and purging of new or altered gas installations, confirming they are safe to commission. A CP15 is the annual gas safety inspection for commercial premises already in use.' },
    { q: 'When is a CP16 required?', a: 'A CP16 is required when a new commercial gas installation is completed, when significant alterations are made to existing pipework, or when a gas supply has been interrupted and needs to be reinstated safely.' },
    { q: 'How long does CP16 testing take?', a: 'This depends on the size of the installation. Small installations may take 2–4 hours; larger or more complex systems can take a full day or more.' },
    { q: 'Who can carry out CP16 testing and purging?', a: 'Only Gas Safe registered engineers with the relevant commercial gas competencies are qualified to carry out CP16 testing and purging and issue the certificate.' },
  ],
  cta: 'Need CP16 Gas Installation Testing? Contact Us Today!',
};

// ══════════════════════════════════════════════════════════════
// GAS INSTALLATION SAFETY REPORT (CP17)
// ══════════════════════════════════════════════════════════════
export const CP17 = {
  hero: {
    title: 'Commercial Gas Installation Safety Report (CP17)',
    subtitle: 'Comprehensive Non-Domestic Gas Installation Safety Reports for London Businesses.',
    ctaText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  intro: {
    title: 'What is a CP17 Gas Installation Safety Report?',
    body: 'The CP17 is a comprehensive safety report for non-domestic gas installations. It covers the inspection of the entire gas installation system in a commercial property, assessing pipework, meters, appliances, and safety devices. Required for insurance, compliance, and due diligence purposes, the CP17 is issued by our Gas Safe registered engineers following a thorough site survey across London.',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    imgAlt: 'Gas installation safety report inspection',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'CP17 GAS INSTALLATION SAFETY REPORT',
    title: 'Why Do You Need a CP17 Safety Report?',
    items: [
      {
        icon: 'bi-file-earmark-text-fill',
        title: 'Due Diligence Documentation',
        body: 'The CP17 provides written evidence that your commercial gas installation has been professionally assessed, essential for property transactions and compliance audits.',
      },
      {
        icon: 'bi-bank2',
        title: 'Insurance Requirements',
        body: 'Many commercial insurers require a CP17 report to validate policy coverage for premises with complex or older non-domestic gas installations.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Identify Hidden Risks',
        body: 'A CP17 inspection covers the complete installation system, uncovering issues that an annual service may not address, including pipework and meter integrity.',
      },
      {
        icon: 'bi-building-check',
        title: 'Property Transactions',
        body: 'Required during commercial property purchases, lettings, or refinancing to demonstrate the gas installation is safe, compliant, and fit for purpose.',
      },
    ],
  },
  whatsCovered: {
    title: 'What Does a CP17 Report Cover?',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    items: [
      { label: 'Gas Meter & Supply', text: 'Inspection of the meter installation, emergency control valve, and supply pipework from the meter to the installation.' },
      { label: 'Internal Pipework', text: 'Assessment of all internal gas pipework, including concealed runs, joints, and supports, for condition and compliance.' },
      { label: 'Gas Appliances', text: 'Visual and operational checks of all connected gas appliances, including boilers, heaters, and catering equipment.' },
      { label: 'Safety Devices', text: 'Testing of pressure relief valves, automatic shut-off valves, and other safety devices fitted to the installation.' },
      { label: 'Ventilation', text: 'Checking that ventilation provisions for all gas appliances are adequate and meet regulatory requirements.' },
      { label: 'Detailed Report', text: 'A comprehensive written CP17 report classifying the condition of each element and providing clear recommendations.' },
    ],
    ctaText: 'Get a Quote',
  },
  pricing: {
    title: 'CP17 Safety Report Pricing',
    body: 'CP17 pricing is based on the complexity and size of the installation. We provide a site-specific quote following a brief consultation.',
    prices: [
      { label: 'Small Commercial Premises',   price: 'From £199' },
      { label: 'Medium / Multi-appliance',    price: 'From £349' },
      { label: 'Large / Complex Installation', price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* All prices include VAT. Pricing may vary based on site access and installation complexity.',
  },
  process: {
    label: 'THE CP17 PROCESS',
    title: 'How Your CP17 Report is Produced',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book a Site Survey', body: 'Contact us to arrange a site survey. We\'ll confirm the scope of the inspection and any access requirements in advance.' },
      { icon: 'bi-clipboard-check', title: 'Comprehensive Inspection', body: 'Our Gas Safe engineer conducts a thorough inspection of the entire gas installation, documenting the condition of every component.' },
      { icon: 'bi-file-earmark-text', title: 'CP17 Report Issued', body: 'A full CP17 report is produced, classifying the installation\'s condition and providing prioritised recommendations for any remedial work.' },
    ],
  },
  related: [
    { icon: 'bi-building', title: 'CP15 Annual Gas Safety', body: 'Follow up your CP17 with an annual CP15 commercial gas safety certificate to maintain ongoing compliance.', to: '/gas/commercial-boiler-cp15' },
    { icon: 'bi-speedometer2', title: 'CP16 Testing & Purging', body: 'If your installation has been altered, a CP16 testing and purging certificate may also be required.', to: '/gas/commercial-installation-cp16' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EICR', body: 'Complete your commercial compliance with a full electrical installation condition report.', to: '/electrical/commercial-eicr' },
  ],
  faqs: [
    { q: 'What is the difference between CP17 and CP15?', a: 'A CP15 is an annual gas safety certificate for specific commercial appliances. A CP17 is a more comprehensive safety report covering the entire gas installation — all pipework, meters, appliances, and safety devices — and is typically required for compliance audits, property transactions, or insurance purposes.' },
    { q: 'When is a CP17 required?', a: 'A CP17 is typically required when purchasing or letting a commercial property, when an insurer requests evidence of gas installation safety, or as part of a broader compliance or due diligence process.' },
    { q: 'How long is a CP17 report valid?', a: 'Unlike the CP15, a CP17 has no fixed renewal period. However, it should be updated after any significant changes to the installation, and at least every few years as part of good practice.' },
    { q: 'Who can issue a CP17 report?', a: 'Only Gas Safe registered engineers with the appropriate non-domestic commercial gas competencies are authorised to inspect and issue CP17 safety reports.' },
  ],
  cta: 'Book a CP17 Gas Safety Report for Your Commercial Property!',
};

// ══════════════════════════════════════════════════════════════
// CATERING GAS SAFETY CERTIFICATE (CP42)
// ══════════════════════════════════════════════════════════════
export const CP42 = {
  hero: {
    title: 'Commercial Catering Gas Safety Certificate (CP42)',
    subtitle: 'Gas Safety Inspections for Commercial Kitchens, Catering Appliances & Hospitality Businesses Across London.',
    price: 'From £99.99',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'Gas Safe', label: 'Catering Engineers' },
    { value: 'All Kitchen', label: 'Appliances Covered' },
    { value: 'Certificates', label: 'Issued 24–48 hrs' },
  ],
  intro: {
    title: 'What is a CP42 Catering Gas Safety Certificate?',
    body: 'The CP42 certificate is specifically designed for commercial catering establishments, covering the inspection of gas cooking appliances, grills, fryers, ovens, ranges, and associated gas pipework. Restaurants, cafes, hotels, pubs, and food businesses are legally required to have their gas catering equipment inspected annually by a Gas Safe registered engineer with commercial catering competency. We provide fast, reliable CP42 inspections across London.',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    imgAlt: 'Commercial kitchen gas safety inspection',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'CP42 CATERING GAS SAFETY',
    title: 'Why Your Catering Business Needs a CP42 Certificate',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'Under the Gas Safety (Installation and Use) Regulations 1998, all businesses with gas catering appliances must have them inspected annually by a qualified Gas Safe engineer.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Protect Staff & Customers',
        body: 'Commercial kitchens carry higher gas safety risks due to intensity of use. Regular inspections prevent leaks, CO exposure, and gas-related fires.',
      },
      {
        icon: 'bi-cup-hot-fill',
        title: 'Food Business Compliance',
        body: 'Environmental health officers may request CP42 certificates during food safety inspections. Stay ahead of compliance requirements to avoid enforcement action.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Validity',
        body: 'Commercial kitchen insurance policies typically require valid gas safety documentation. Operating without a CP42 may invalidate your cover.',
      },
    ],
  },
  pricing: {
    title: 'CP42 Catering Gas Safety Pricing',
    body: 'Competitive pricing for commercial catering gas safety inspections. Pricing is based on the number and type of appliances.',
    prices: [
      { label: 'Up to 3 Catering Appliances',    price: 'From £99.99' },
      { label: '4–7 Catering Appliances',         price: 'From £149.99' },
      { label: '8+ Appliances / Large Kitchen',   price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Prices include VAT. Parking and congestion zone charges may apply. Please advise at booking.',
  },
  whatsCovered: {
    title: 'What Gas Catering Appliances Do We Inspect?',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    items: [
      { label: 'Commercial Ovens & Ranges', text: 'Full inspection of gas ovens, ranges, and combination ovens for safe operation and gas tightness.' },
      { label: 'Grills & Salamanders', text: 'Gas tightness testing and burner checks on commercial grills and overhead salamander units.' },
      { label: 'Fryers', text: 'Inspection of gas fryers including thermostat, safety cut-off, and burner combustion checks.' },
      { label: 'Hobs & Wok Burners', text: 'Safety checks on gas hobs, wok burners, and solid top ranges.' },
      { label: 'Catering Gas Pipework', text: 'Inspection of all gas supply pipework and flexible connections within the kitchen.' },
      { label: 'Extraction & Ventilation', text: 'Verifying that ventilation systems adequately serve the gas appliance load in the kitchen.' },
    ],
    ctaText: 'Get a Quote',
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Your CP42 Inspection Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Schedule Inspection', body: 'Book a convenient time — we offer early morning slots to minimise disruption to kitchen operations and trading hours.' },
      { icon: 'bi-search', title: 'Kitchen Inspection', body: 'Our Gas Safe catering engineer inspects and tests every gas appliance, connection, and pipework run in your kitchen.' },
      { icon: 'bi-file-earmark-check-fill', title: 'CP42 Certificate Issued', body: 'Your digital CP42 certificate is issued within 24–48 hours, ready to show environmental health officers, insurers, and your landlord.' },
    ],
  },
  propertyTypes: {
    title: 'Commercial Catering Businesses We Serve',
    subtitle: 'We provide CP42 certificates for all types of food and hospitality businesses across London.',
    items: [
      { icon: 'bi-cup-hot-fill', title: 'Restaurants & Cafes', body: 'Annual gas safety certificates for restaurant and cafe kitchens of all sizes.' },
      { icon: 'bi-building', title: 'Hotels & Conference Venues', body: 'CP42 inspections for hotel kitchens, banqueting facilities, and bar equipment.' },
      { icon: 'bi-truck', title: 'Food Trucks & Vans', body: 'Gas safety certificates for mobile catering units, food trucks, and market stalls.' },
      { icon: 'bi-house-door-fill', title: 'Pubs & Bars', body: 'Gas safety for pub kitchens, open kitchen counters, and bar catering areas.' },
      { icon: 'bi-mortarboard', title: 'Schools & Canteens', body: 'CP42 inspections for school kitchens, university canteens, and staff cafeterias.' },
      { icon: 'bi-bag-heart-fill', title: 'Takeaways & Bakeries', body: 'Gas safety certificates for takeaway kitchens, bakery ovens, and specialist food businesses.' },
    ],
  },
  related: [
    { icon: 'bi-building', title: 'CP15 Commercial Gas Safety', body: 'Annual gas safety certificate for your commercial boilers and non-catering gas appliances.', to: '/gas/commercial-boiler-cp15' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EICR', body: 'Complement your gas safety with a commercial electrical installation condition report.', to: '/electrical/commercial-eicr' },
    { icon: 'bi-clipboard-pulse', title: 'PAT Testing', body: 'Ensure all portable electrical appliances in your kitchen are safe and compliant.', to: '/book-now' },
  ],
  faqs: [
    { q: 'What is a CP42 gas safety certificate?', a: 'A CP42 is a gas safety certificate specifically for commercial catering appliances. It confirms that all gas cooking equipment, pipework, and connections in a commercial kitchen have been inspected and are safe by a Gas Safe registered engineer with commercial catering competency.' },
    { q: 'Is a CP42 legally required?', a: 'Yes. Under the Gas Safety (Installation and Use) Regulations 1998, all businesses with gas appliances — including catering equipment — must have them inspected annually by a Gas Safe engineer.' },
    { q: 'How is a CP42 different from a CP15?', a: 'A CP15 covers commercial boilers and general gas appliances. A CP42 is specifically for commercial catering appliances such as ovens, fryers, grills, and ranges, and requires an engineer with specialist catering gas competency.' },
    { q: 'Do food trucks need a CP42?', a: 'Yes. Mobile catering units, food trucks, and market stalls using gas appliances require annual gas safety inspections and a valid CP42 certificate. This is also a requirement for trading at most markets and events.' },
    { q: 'Can I combine a CP42 with a CP15 inspection?', a: 'Yes – if your premises has both commercial boilers and catering gas appliances, we can combine the CP15 and CP42 inspections in a single visit, saving you time and reducing costs.' },
  ],
  cta: 'Book Your CP42 Catering Gas Safety Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL GAS SAFETY (CP42)
// ══════════════════════════════════════════════════════════════
export const COMM_GAS_SAFETY = {
  hero: {
    title: 'Commercial Gas Safety Certificate (CP42) London',
    subtitle: 'Professional gas safety inspections for business premises including restaurants, offices, and mixed-use buildings. CP42 certificates issued by Gas Safe registered engineers.',
    price: 'From £199.99',
    ctaText: 'Get a Quote',
    ctaTo: '/book-now',
    bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80',
  },
  stats: [
    { value: '£199.99', label: 'Starting Price' },
    { value: 'CP42', label: 'Commercial Certification' },
    { value: '24-48 hrs', label: 'Certificate Turnaround' },
    { value: 'Multi-Appliance', label: 'Coverage' },
  ],
  intro: {
    title: 'Commercial Gas Safety Certification',
    body: 'A CP42 commercial gas safety certificate documents that your business gas installations have been professionally inspected and are safe. Required for compliance and insurance on commercial premises, restaurants, offices, and mixed-use buildings.',
    checklist: [
      'Covers commercial kitchens, heating systems, and all gas appliances',
      'Required for business insurance and regulatory compliance',
      'Issued by Gas Safe registered engineers with commercial expertise',
      'Minimal disruption to kitchen or business operations',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    imgAlt: 'Commercial kitchen gas safety inspection',
    imgRight: false,
  },
  benefits: {
    label: 'WHY CHOOSE US',
    title: 'Commercial Gas Safety Compliance',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'Gas Safety Regulations require all businesses with gas appliances to have annual inspections by Gas Safe registered engineers. A valid CP42 certificate demonstrates compliance.',
      },
      {
        icon: 'bi-building',
        title: 'Business Compliance',
        body: 'Professional certification meets requirements for commercial properties, restaurants, cafes, hotels, and office buildings. Insurance policies typically require current certificates.',
      },
      {
        icon: 'bi-check-circle-fill',
        title: 'Multi-Appliance Testing',
        body: 'Comprehensive inspection of commercial kitchen equipment, heating systems, boilers, and all gas appliances in your premises during a single efficient visit.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Staff Safety Documentation',
        body: 'Demonstrates duty of care toward employees and customers by maintaining safe gas installations and following regulatory requirements.',
      },
    ],
  },
  pricing: {
    title: 'Commercial Gas Safety Pricing',
    body: 'Fixed transparent pricing for commercial CP42 gas safety inspections.',
    prices: [
      {
        label: 'Commercial Gas Safety',
        price: '£199.99',
        features: [
          'CP42 certificate',
          'Multi-appliance inspection',
          'Commercial standard testing',
          'Digital certificate within 48 hours',
        ],
      },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Commercial Gas Safety Process',
    steps: [
      {
        icon: 'bi-clipboard-check',
        title: 'Scope Assessment',
        body: 'We confirm the number and type of gas appliances at your premises, including kitchen equipment, heating systems, and water heaters.',
      },
      {
        icon: 'bi-binoculars',
        title: 'Visual Inspection',
        body: 'Comprehensive visual check of all gas appliances, pipework, connections, and installation condition for safety compliance.',
      },
      {
        icon: 'bi-search',
        title: 'Safety Testing',
        body: 'Gas leak detection, combustion analysis, and functional testing of safety features on all appliances to ensure safe operation.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'CP42 Certificate Issue',
        body: 'Professional commercial gas safety certificate issued documenting all appliances tested and results within 24-48 hours.',
      },
    ],
  },
  related: [
    {
      icon: 'bi-flame',
      title: 'Boiler Installation',
      body: 'Professional installation of commercial heating systems by qualified Gas Safe engineers.',
      to: '/gas/boiler-installation',
    },
    {
      icon: 'bi-wrench-adjustable',
      title: 'Gas Equipment Repair',
      body: 'Emergency repairs and servicing for commercial gas appliances and heating systems.',
      to: '/book-now',
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Commercial EICR',
      body: 'Complement your gas safety with commercial electrical installation condition reports.',
      to: '/electrical/commercial-eicr',
    },
  ],
  faqs: [
    {
      q: 'What is a CP42 certificate?',
      a: 'A CP42 is a commercial gas safety certificate equivalent to the residential CP12. It documents that commercial gas installations have been safely inspected by a Gas Safe engineer and are operating to safety standards.',
    },
    {
      q: 'Who needs a commercial gas safety certificate?',
      a: 'Commercial properties including restaurants, cafes, offices, hotels, warehouses, and mixed-use buildings with gas appliances require annual CP42 inspections.',
    },
    {
      q: 'How often is testing required?',
      a: 'Most commercial properties require annual CP42 testing. Some high-use kitchens or specific premises may need more frequent inspections depending on risk assessment and usage levels.',
    },
    {
      q: 'Can you test all types of commercial equipment?',
      a: 'Yes, we inspect all commercial gas cooking appliances, steamers, boilers, water heaters, and heating equipment commonly found in commercial kitchens and business premises.',
    },
    {
      q: 'Will testing disrupt operations?',
      a: 'We schedule inspections to minimize disruption. Testing is non-invasive and can often be completed during off-peak hours or scheduled service windows.',
    },
  ],
  cta: 'Ensure Your Commercial Gas Safety Compliance Today',
};

// ══════════════════════════════════════════════════════════════
// DOMESTIC GAS ENGINEER SERVICES
// ══════════════════════════════════════════════════════════════
export const GAS_ENGINEER = {
  hero: {
    title: 'Domestic Gas Engineer Services London',
    subtitle: 'Qualified gas engineers for residential properties providing installation, repair, servicing, and safety checks. Gas Safe registered professionals handling all gas appliances.',
    price: 'Contact for Quote',
    ctaText: 'Book Now',
    ctaTo: '/book-now',
    bgImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80',
  },
  stats: [
    { value: 'Gas Safe', label: 'All Engineers Registered' },
    { value: 'Boilers to Fires', label: 'All Appliance Types' },
    { value: 'Same-Day', label: 'Emergency Available' },
    { value: '10+', label: 'Years Experience' },
  ],
  intro: {
    title: 'Domestic Gas Engineering Services',
    body: 'Qualified Gas Safe engineers providing comprehensive gas services for residential properties. From emergency repairs to installations, our certified technicians handle all types of domestic gas appliances with safety as our priority.',
    checklist: [
      'Full range of boiler and appliance services',
      'Gas Safe registered and qualified technicians',
      'Emergency response and same-day service available',
      'Transparent pricing and professional certification',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    imgAlt: 'Gas engineer working on domestic heating system',
    imgRight: true,
  },
  benefits: {
    label: 'WHY CHOOSE US',
    title: 'Expert Gas Engineering Services',
    items: [
      {
        icon: 'bi-patch-check-fill',
        title: 'Gas Safe Qualified',
        body: 'All engineers are registered with Gas Safe and maintain current qualifications for legal and safety compliance. You can verify credentials on the official Gas Safe Register.',
      },
      {
        icon: 'bi-tools',
        title: 'Full Service Range',
        body: 'Installation of new boilers, repair of existing equipment, annual safety checks, servicing, and maintenance for all domestic gas appliances.',
      },
      {
        icon: 'bi-clock-fill',
        title: 'Emergency Response',
        body: 'Same-day response available for emergency situations where heating or hot water is lost. We prioritize urgent repairs and aim for rapid restoration.',
      },
      {
        icon: 'bi-currency-pound',
        title: 'Transparent Pricing',
        body: 'Clear explanation of problems found and detailed quotations before work begins. No hidden charges or surprise costs on your repair bill.',
      },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Gas Engineering Service Process',
    steps: [
      {
        icon: 'bi-telephone-fill',
        title: 'Initial Contact',
        body: 'Call or book online to describe your gas appliance problem or servicing need. We assess urgency and can offer same-day service if needed.',
      },
      {
        icon: 'bi-search',
        title: 'Engineer Assessment',
        body: 'Qualified Gas Safe engineer attends to assess your boiler, fire, hob, or other appliance and identify any issues.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Diagnosis & Quotation',
        body: 'Clear explanation of problems found and a detailed quote for repair or service work before proceeding with any work.',
      },
      {
        icon: 'bi-wrench-adjustable',
        title: 'Professional Service',
        body: 'Installation, repair, or servicing completed to the highest professional standards with safety as our priority.',
      },
    ],
  },
  related: [
    {
      icon: 'bi-flame',
      title: 'Boiler Repair',
      body: 'Fast emergency boiler repairs with same-day response for heating and hot water problems.',
      to: '/gas/boiler-repair',
    },
    {
      icon: 'bi-house-check',
      title: 'Landlord Gas Safety',
      body: 'Annual CP12 gas safety certificates required for rental properties.',
      to: '/gas/landlord-gas-safety',
    },
    {
      icon: 'bi-thermometer-half',
      title: 'Boiler Service',
      body: 'Annual boiler servicing to maintain efficiency and prevent breakdowns.',
      to: '/gas/boiler-service',
    },
  ],
  faqs: [
    {
      q: 'What services do gas engineers provide?',
      a: 'Installation of new boilers and appliances, repair of existing equipment, annual safety checks (CP12), servicing, and maintenance of all domestic gas systems.',
    },
    {
      q: 'Are you Gas Safe registered?',
      a: 'Yes, all our engineers are Gas Safe registered and maintain current qualifications for legal compliance and safety. You can verify any engineer on the Gas Safe Register website.',
    },
    {
      q: 'Do you offer emergency repairs?',
      a: 'Yes, we offer same-day emergency response for situations where you have no heating or hot water. Call us directly for the fastest response.',
    },
    {
      q: 'Should I service my boiler annually?',
      a: 'Yes, annual boiler servicing is recommended to maintain efficiency, reliability, and ensure any issues are identified early before they become expensive problems.',
    },
    {
      q: 'What if I need a new boiler?',
      a: 'We can assess your heating needs, recommend appropriate boiler types for your property, and complete professional installation with full safety certification and warranty.',
    },
  ],
  cta: 'Get Expert Gas Engineering Support Today',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL GAS ENGINEER SERVICES
// ══════════════════════════════════════════════════════════════
export const COMM_GAS_ENGINEER = {
  hero: {
    title: 'Commercial Gas Engineer Services London',
    subtitle: 'Expert gas engineering for commercial properties including restaurants, offices, and mixed-use buildings. CP42 certification, kitchen equipment, and heating system expertise.',
    price: 'Contact for Quote',
    ctaText: 'Get a Quote',
    ctaTo: '/book-now',
    bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80',
  },
  stats: [
    { value: 'CP42', label: 'Commercial Certification' },
    { value: 'Kitchens', label: 'Equipment Specialists' },
    { value: 'Same-Day', label: 'Emergency Response' },
    { value: 'Contract', label: 'Maintenance Available' },
  ],
  intro: {
    title: 'Commercial Gas Engineering Services',
    body: 'Specialized gas engineering for commercial properties combining heating systems, kitchen equipment, and compliance certification. Our engineers have expert knowledge of commercial kitchen equipment and large-scale heating systems.',
    checklist: [
      'Commercial kitchen equipment expertise',
      'CP42 certification and compliance documentation',
      'Emergency response and contract maintenance',
      'Minimal disruption to kitchen operations',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    imgAlt: 'Commercial kitchen gas equipment inspection',
    imgRight: false,
  },
  benefits: {
    label: 'COMMERCIAL EXPERTISE',
    title: 'Professional Commercial Gas Services',
    items: [
      {
        icon: 'bi-cup-hot-fill',
        title: 'Kitchen Equipment Specialists',
        body: 'Experience with commercial cooking appliances, steamers, grills, and all kitchen gas equipment safety and maintenance.',
      },
      {
        icon: 'bi-building',
        title: 'Commercial Expertise',
        body: 'Specialized knowledge of commercial building heating systems, large-capacity boilers, and commercial property requirements.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Compliance Documentation',
        body: 'Full CP42 certification and compliance documentation for insurance and health and safety record requirements.',
      },
      {
        icon: 'bi-calendar-check',
        title: 'Business Continuity',
        body: 'Scheduled service and repairs to minimize kitchen downtime and maintain your business operations efficiently.',
      },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Commercial Gas Engineering Process',
    steps: [
      {
        icon: 'bi-list-check',
        title: 'Scope Assessment',
        body: 'We assess your commercial property, identify all gas appliances, and determine testing and servicing requirements.',
      },
      {
        icon: 'bi-calendar2-check',
        title: 'Service Planning',
        body: 'Schedule regular maintenance or respond to urgent repairs, timing services to minimize impact on kitchen or business operations.',
      },
      {
        icon: 'bi-wrench',
        title: 'Professional Service',
        body: 'Qualified engineers complete inspection, testing, repair, or servicing to commercial standards and safety regulations.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Certification & Documentation',
        body: 'CP42 certificate and full compliance documentation provided for insurance and health and safety records.',
      },
    ],
  },
  related: [
    {
      icon: 'bi-check-circle-fill',
      title: 'Commercial Gas Safety',
      body: 'CP42 certificates for all commercial gas appliances and installations.',
      to: '/gas/commercial-gas-safety',
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Commercial EICR',
      body: 'Electrical safety inspections for commercial premises and businesses.',
      to: '/electrical/commercial-eicr',
    },
    {
      icon: 'bi-clipboard-pulse',
      title: 'Fire Risk Assessment',
      body: 'Comprehensive fire safety assessments for commercial buildings.',
      to: '/fire/residential-fra',
    },
  ],
  faqs: [
    {
      q: 'What commercial gas appliances do you service?',
      a: 'Commercial kitchen equipment including cookers, grills, steamers, boilers, water heaters, and all gas heating systems for commercial buildings.',
    },
    {
      q: 'Do you issue CP42 certificates?',
      a: 'Yes, our engineers are qualified to issue CP42 (commercial gas safety) certificates after inspections and testing of all commercial gas equipment.',
    },
    {
      q: 'Can you schedule service around our operations?',
      a: 'Absolutely. We schedule maintenance during quieter service periods or scheduled breaks to minimize disruption to your kitchen operations.',
    },
    {
      q: 'What if we have an emergency?',
      a: 'We offer same-day emergency response for critical failures in kitchens or heating systems. Call immediately for urgent gas system problems.',
    },
    {
      q: 'Can we have a maintenance contract?',
      a: 'Yes, we provide maintenance contract arrangements with regular servicing at negotiated rates for ongoing compliance and system reliability.',
    },
  ],
  cta: 'Arrange Your Commercial Gas Engineering Support',
};
