// ============================================================
// Electrical Services — all page content
// ============================================================

// ── Shared reviews (imported in PageReviews component) ──────

// ── Shared EICR FAQs ─────────────────────────────────────────
export const EICR_FAQS = [
  {
    q: 'What is an EICR certificate?',
    a: 'An Electrical Installation Condition Report (EICR) is a detailed safety assessment of your property\'s electrical system, covering wiring, fuse boards, circuits, and components to ensure they meet UK safety standards (BS 7671).',
  },
  {
    q: 'How often do I need an EICR?',
    a: 'For rental properties, every five years or at the start of a new tenancy. Homeowners should have one every ten years or after major renovations.',
  },
  {
    q: 'What happens if my EICR fails?',
    a: 'If issues are identified, our engineers will provide the necessary remedial work and a follow-up inspection to ensure full compliance with BS7671 standards.',
  },
  {
    q: 'How long does an EICR inspection take?',
    a: 'Typically 2–4 hours for standard homes. Larger or commercial properties may take longer. We aim to minimise disruption throughout.',
  },
  {
    q: 'How much does an EICR cost?',
    a: 'Residential prices start from £69.99 for studio apartments and from £120 for 1–3 bedroom properties. Commercial pricing is available on request. Contact us for a tailored quote.',
  },
];

// ── Shared EIC FAQs ──────────────────────────────────────────
export const EIC_FAQS = [
  {
    q: 'Why choose qualified electrical contractors?',
    a: 'NICEIC certified professionals guarantee compliance with UK regulations, reducing the risk of electrical faults and ensuring insurance validity.',
  },
  {
    q: 'How quickly can I get an Electrical Installation Certificate?',
    a: 'We typically issue EICs within 24–48 hours of completing the installation work. Same-day certificates are available for urgent requirements.',
  },
  {
    q: "What's the difference between an EIC and an EICR?",
    a: 'An EIC confirms new installation work has been completed to BS 7671 standards. An EICR is a periodic inspection of an existing installation\'s condition.',
  },
  {
    q: 'How long does this certification remain valid?',
    a: 'An EIC has no expiry date but is superseded when further significant work is done. A periodic EICR should be carried out at regular intervals thereafter.',
  },
  {
    q: 'Why do landlords and homeowners need an electrical safety certificate?',
    a: 'Landlords are legally required to have valid electrical safety certification. Homeowners benefit from proof of compliance for insurance, mortgage, and property sale purposes.',
  },
  {
    q: 'Who provides residential electrical compliance reports?',
    a: 'Only NICEIC or NAPIT-registered electricians can issue valid Electrical Installation Certificates in England.',
  },
];

// ── Shared Fuse Box FAQs ─────────────────────────────────────
export const FUSE_BOX_FAQS = [
  {
    q: 'What is a fuse board, and why does it need replacing?',
    a: 'A fuse board (or consumer unit) is the hub of your property\'s electrical system. It distributes electricity and protects circuits. Older units often lack RCDs and other modern safety features. Replacing a fuse board ensures your system meets current BS 7671 Wiring Regulations and prevents risks like fires or shocks.',
  },
  {
    q: 'How can I tell if my fuse board is outdated?',
    a: 'Signs include: frequent circuit tripping, no RCD protection, overheating or visible burn marks, and C2 faults flagged in your EICR report.',
  },
  {
    q: 'How long does fuse board replacement take?',
    a: 'Typically half a day (3–5 hours) for a standard residential property. Commercial replacements may take longer depending on the size of the installation.',
  },
  {
    q: 'Is fuse board replacement disruptive?',
    a: 'Power will be off during the replacement. We schedule work to minimise disruption and can offer evening or weekend slots for businesses.',
  },
  {
    q: 'What documentation do I receive after the replacement?',
    a: 'You will receive a full Electrical Installation Certificate (EIC) confirming the work was completed safely and in compliance with BS 7671.',
  },
];

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL EICR
// ══════════════════════════════════════════════════════════════
export const RES_EICR = {
  hero: {
    title: 'Keep Your Property Electrically Safe with an EICR Certificate',
    subtitle: 'Get your Electrical Safety Certificate from trusted certified Engineers Across London and M25 Area. Starting at Just £69.99',
    price: 'From £69.99',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80',
  },
  stats: [
    { value: 'Certificates Delivered', label: 'In 24–48 Hours' },
    { value: 'All Work By Qualified', label: 'In-House Engineers' },
  ],
  intro: {
    title: 'What is a Residential EICR?',
    body: 'An Electrical Installation Condition Report (EICR) is a detailed safety check of your property\'s electrical system. It assesses wiring, fuse boards, circuits, and other components to ensure they meet UK safety standards (BS 7671). Our certified electricians in London perform thorough inspections, identifying hazards and ensuring compliance. Whether you are a landlord meeting legal requirements or a homeowner seeking peace of mind, an EICR certificate ensures your property is electrically safe.',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    imgAlt: 'Electrician performing EICR inspection',
    ctaText: 'Book Now',
  },
  benefits: {
    label: 'RESIDENTIAL EICR',
    title: 'Why Do You Need a Residential EICR?',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement for Landlords',
        body: 'UK law mandates an EICR certificate every five years or at the start of a tenancy, as per the Electrical Safety Standards in the Private Rented Sector (2020).',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Protect Tenants',
        body: 'An EICR report identifies hazards like faulty wiring, preventing risks of electrical fires or electric shocks for your tenants.',
      },
      {
        icon: 'bi-house-check-fill',
        title: 'Peace of Mind for Homeowners',
        body: 'EICR testing keeps your home\'s electrics safe and aligned with current wiring regulations (BS7671), giving you complete peace of mind.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Compliance',
        body: 'Many insurers require a valid electrical safety certificate to maintain full coverage for your property. Stay protected and compliant.',
      },
    ],
  },
  pricing: {
    title: 'Residential EICR Cost & Pricing',
    body: 'A Residential EICR is a legal requirement for landlords, homeowners and tenants who want to ensure their property is safe from electrical hazards.',
    prices: [
      { label: 'Studio',                   price: '£69.99' },
      { label: '1–3 Bedroom',              price: '£120.00' },
      { label: 'Each Additional Bedroom',  price: '£15.00' },
    ],
    ctaText: 'Book Now',
  },
  propertyTypes: [
    { icon: 'bi-building', title: 'Houses in Multiple Occupation (HMOs)', body: 'EICR inspections for HMOs including two additional circuits at no extra cost, ensuring a safe living environment for multiple tenants.' },
    { icon: 'bi-house-fill', title: 'Single Tenant Properties', body: 'Compliant inspections for buy-to-let landlords, covering all circuits and consumer units in line with current regulations.' },
    { icon: 'bi-buildings', title: 'Flats and Apartments', body: 'Residential EICR for flats with due attention to communal areas, ensuring the entire building meets electrical safety standards.' },
  ],
  related: [
    { icon: 'bi-clipboard-pulse', title: 'PAT Testing', body: 'Ensure all your portable appliances are safe with our professional PAT testing service.', to: '/book-now' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EICR', body: 'Book a commercial EICR for your business premises across London and the M25 area.', to: '/electrical/commercial-eicr' },
  ],
  faqs: EICR_FAQS,
  cta: 'Book Your Residential EICR in London Today – Prices Starting from £69.99!',
};

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL EIC
// ══════════════════════════════════════════════════════════════
export const RES_EIC = {
  hero: {
    title: 'Electrical Safety Reports for London Properties',
    subtitle: 'Certified Electrical Installations for Safe Properties — BS 7671-Compliant Electrical Systems by Accredited Professionals',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
    ctaText: 'Book Now',
  },
  intro: {
    title: 'What is an Electrical Installation Certificate (EIC)?',
    body: 'This mandatory safety document is issued after new installations or major upgrades, confirming compliance with UK Wiring Regulations (BS 7671) and electrical safety standards. Our NICEIC-certified electricians provide EICs for residential properties across London and the M25.',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    imgAlt: 'Electrician issuing EIC certificate',
    ctaText: 'Book Now',
  },
  benefits: {
    label: 'RESIDENTIAL EIC',
    title: 'Why You Need an EIC for Your Property',
    items: [
      {
        icon: 'bi-shield-fill-check',
        title: 'Legal Protection',
        body: 'This certification ensures compliance with Part P Building Regulations and validates insurance, property sales, or rental agreements.',
      },
      {
        icon: 'bi-file-earmark-check-fill',
        title: 'Documentation',
        body: 'An EIC certificate serves as essential documentation, providing proof of compliance for property sales, rentals, and future electrical inspections.',
      },
      {
        icon: 'bi-lock-fill',
        title: 'Safety Compliance',
        body: 'The inspection report confirms installations meet safety standards and identifies risks like faulty wiring before they become dangerous.',
      },
    ],
    cols: 4,
  },
  whenRequired: {
    title: 'When is an EIC Required?',
    imgSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
    items: [
      { label: 'New Installations', text: 'For wiring, circuits, or systems.' },
      { label: 'Major Upgrades', text: 'Including new consumer units or significant modifications.' },
      { label: 'Rental Properties', text: 'Required post-upgrades to meet current tenant safety laws.' },
    ],
    ctaText: 'Book Now',
  },
  pricing: {
    title: 'EIC Services and Pricing',
    body: 'Our accredited professionals offer compliance services starting at £250 for standard installations.',
    prices: [
      { label: 'Standard Installations', price: 'From £250' },
      { label: 'Additional costs may apply for complex systems or extra circuits', price: '' },
    ],
    ctaText: 'Get a Quote',
  },
  related: [
    { icon: 'bi-lightning-charge-fill', title: 'Need an EICR?', body: 'Check out our Electrical Installation Condition Report (EICR) service for periodic inspections.', to: '/electrical/residential-eicr' },
    { icon: 'bi-plug-fill', title: 'Looking for PAT Testing?', body: 'Ensure all appliances are safe with our Portable Appliance Testing services.', to: '/book-now' },
    { icon: 'bi-shield-fill-check', title: 'Comprehensive Landlord Compliance', body: 'Explore our Gas Safety Certificates and Boiler Servicing options.', to: '/gas/landlord-gas-safety' },
  ],
  faqs: EIC_FAQS,
  cta: 'Book Your Electrical Compliance Inspection Today for £250!',
};

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL FUSE BOX
// ══════════════════════════════════════════════════════════════
export const RES_FUSE_BOX = {
  hero: {
    title: 'Upgrade Your Fuse Board with Certified Experts',
    subtitle: 'Replace outdated fuse boards for modern safety and reliability. Book today!',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    ctaText: 'Get a Quote',
  },
  intro: {
    title: 'What is Fuse Board Replacement?',
    body: 'Fuse board replacement, also called consumer unit replacement, involves upgrading old or unsafe units with modern ones that meet today\'s safety standards. Modern consumer units include:',
    checklist: [
      { label: 'RCDs (Residual Current Devices)', text: 'Automatically cut power during faults.' },
      { label: 'MCBs (Miniature Circuit Breakers)', text: 'Protect circuits from overloads.' },
      { label: 'Surge Protection Devices', text: 'Guard against power surges that can damage appliances.' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    imgAlt: 'Fuse board replacement engineer',
    ctaText: 'Call Now',
    imgRight: false,
  },
  benefits: {
    label: 'FUSE BOARD REPLACEMENT',
    title: 'Why Replace Your Fuse Board?',
    items: [
      { icon: 'bi-lightning-charge-fill', title: 'Enhanced Safety', body: 'Modern fuse boards reduce the risk of fire, electric shocks and electrical failures with built-in RCD protection.' },
      { icon: 'bi-check-circle-fill', title: 'Legal Compliance', body: 'Landlords must meet the Electrical Safety Standards in the Private Rented Sector Regulations 2020, ensuring safe electrical systems in rental properties.' },
      { icon: 'bi-plug-fill', title: 'Support for Modern Appliances', body: 'Upgrades handle higher energy demands from modern appliances efficiently without the risk of overloading.' },
      { icon: 'bi-shield-fill-exclamation', title: 'Avoid Penalties', body: 'Addressing C2 issues in ECRs prevents fines of up to £30,000 for landlords who fail to maintain electrical safety.' },
    ],
  },
  needsReplacement: {
    title: 'Do You Need a Fuse Board Replacement?',
    subtitle: 'Signs that your fuse board needs replacing:',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    items: [
      'Frequent circuit tripping.',
      'Overheating or visible burn marks.',
      'No RCD protection or outdated ceramic fuses.',
      'C2 faults flagged in your EICR Report.',
    ],
    ctaText: 'Get a Quote',
  },
  process: {
    label: 'WHAT HAPPENS DURING',
    title: 'Fuse Board Replacement',
    steps: [
      { icon: 'bi-search', title: 'Initial Assessment', body: 'Inspecting the current system for faults and identifying the correct replacement unit for your property.' },
      { icon: 'bi-tools', title: 'Installation', body: 'Replacing the old board with a modern unit featuring RCDs and surge protection, ensuring all circuits are correctly wired.' },
      { icon: 'bi-patch-check-fill', title: 'Testing and Certification', body: 'Ensuring safety and providing full compliance certification. An Electrical Installation Certificate is issued on completion.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-pulse', title: 'EICR Inspections', body: 'Ensure your property meets legal electrical safety standards with our periodic EICR inspection service.', to: '/electrical/residential-eicr' },
    { icon: 'bi-lightning-charge', title: 'Electrical Repairs', body: 'Fix faulty wiring or damaged circuits with our professional electrical repair service.', to: '/book-now' },
    { icon: 'bi-plug', title: 'Socket Installation', body: 'Add extra outlets for modern functionality with our certified socket installation service.', to: '/book-now' },
  ],
  faqs: FUSE_BOX_FAQS,
  cta: 'Book Your Fuse Board Replacement Today – Stay Safe & Compliant!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL EICR
// ══════════════════════════════════════════════════════════════
export const COMM_EICR = {
  hero: {
    title: 'Protect Your Business with Reliable Electrical Safety Inspections',
    subtitle: 'Commercial EICR Inspections Starting from £144.99 – Fast, Professional, and Fully Compliant with BS7671 Standards.',
    checklist: [
      'C1 (Danger Present): Immediate action required',
      'C2 (Potentially Dangerous): Risk if not addressed',
      'C3 (Improvement Recommended): Not immediately dangerous but should be improved',
      'FI (Further Investigation): Requires further assessment',
    ],
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
    ctaText: 'Get a Quote',
  },
  intro: {
    title: 'What is a Commercial Electrical Certificate?',
    body: 'A Commercial EICR is a professional inspection and condition report issued for non-domestic properties. It assesses the safety of your electrical installation, identifies any C1 (Danger Present) or C2 (Potentially Dangerous) issues, provides C3 (Improvement Recommendations), and flags any FI (Further Investigation) requirements. Our Landlord Safety Certificate team are certified top-quality engineers ready to provide you with all types of landlord safety certificates.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial EICR inspection',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'COMMERCIAL EICR',
    title: 'Why is an Electrical Safety Inspection Essential for Your Business in London and M25?',
    items: [
      { icon: 'bi-bank2', title: 'Stay Legally Compliant', body: 'The Electricity at Work Regulations 1989 requires businesses to maintain safe electrical installations. Non-compliance can lead to significant fines and prosecution.' },
      { icon: 'bi-file-earmark-lock-fill', title: 'Satisfy Insurance Conditions', body: 'Many commercial insurers require valid EICR documentation. Without it, you may risk invalidating your business insurance policy.' },
      { icon: 'bi-building-check', title: 'Protect Your Business', body: 'Identify and eliminate electrical hazards before they result in fires, injuries, or costly business interruptions and downtime.' },
    ],
    cols: 4,
  },
  pricing: {
    title: 'Pricing',
    body: 'Our commercial EICR service offers affordable, transparent pricing for businesses across London and M25.',
    prices: [
      { label: 'Small Commercial Units (up to 3 circuits and 3 fuse board)', price: '£144.99' },
      { label: 'Larger Properties', note: 'Pricing available for reasonable properties upon request', price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Once the inspection is complete, any necessary remedial work will be quoted separately. Pricing may vary based on property size and complexity.',
  },
  propertyTypes: {
    title: 'Types of Commercial Properties We Serve in London',
    subtitle: 'We provide our professional EICR service to a range of businesses and premises across the city.',
    items: [
      { icon: 'bi-building', title: 'Offices and Office Buildings', body: 'Regular inspections keep your office safe with robust protection for all electrical equipment.', to: '/book-now' },
      { icon: 'bi-shop', title: 'Retail Units and Shops', body: 'Protect your customers and revenue with a compliant and safe electrical installation.', to: '/book-now' },
      { icon: 'bi-boxes', title: 'Warehouses', body: 'Full commercial EICR for large sites with multiple circuits and distribution boards.', to: '/book-now' },
      { icon: 'bi-gear-wide-connected', title: 'Industrial Units', body: 'High-voltage and complex industrial installations require specialist knowledge and accreditation.', to: '/book-now' },
      { icon: 'bi-bank', title: 'Public Buildings', body: 'Schools, community halls, and public facilities require regular mandatory inspections.', to: '/book-now' },
      { icon: 'bi-plug-fill', title: 'Do You Also Need PAT Testing?', body: 'From office IT to warehouse machinery, all appliances in your business should be tested regularly.', to: '/book-now' },
    ],
  },
  whatToExpect: {
    steps: [
      { icon: 'bi-eye', title: 'Perform a Visual Inspection', body: 'Our engineer inspects all visible electrical components, including switchgear, trunking, sockets, and distribution boards.' },
      { icon: 'bi-lightning-charge', title: 'Test Electrical Components', body: 'Continuity, insulation, and RCD testing are carried out on all circuits to verify safety and detect any faults.' },
      { icon: 'bi-file-text', title: 'Provide a Detailed Report', body: 'Produce the EICR (BS 7671) compliant report classifying any faults and recommending corrective actions.' },
    ],
  },
  legalRequirements: {
    title: 'Legal Requirements for Commercial EICR in London and M25 Area',
    items: [
      { label: 'The Electricity at Work Regulations 1989', text: 'Businesses must maintain electrical systems to prevent danger, conducting periodic inspections as required.' },
      { label: 'The Health and Safety at Work Act 1974', text: 'Ensures you maintain a safe working environment for your staff and clients.' },
      { label: 'The Regulatory Reform (Fire Safety) Order 2005', text: 'Electrical faults are one of the leading causes of commercial fires.' },
    ],
  },
  faqs: [
    { q: 'How much does a commercial EICR cost?', a: 'Our prices start at £144.99 for small commercial units with up to 3 circuits and 3 fuse boards. Additional costs may apply for larger properties. Contact us for a tailored quote.' },
    { q: 'Why is a Commercial Electrical Safety Check required for my Business?', a: 'The Electricity at Work Regulations 1989 mandates that all commercial premises maintain safe electrical systems. An EICR provides documented evidence of compliance and identifies any risks.' },
    { q: 'Do I need PAT testing along with my commercial EICR?', a: 'While an EICR covers fixed wiring, PAT testing covers portable appliances. Both are recommended for comprehensive electrical safety compliance in commercial premises.' },
    { q: 'How long does an EICR inspection take?', a: 'This depends on the size and complexity of the electrical installation. Small offices may take 2–4 hours; larger premises can take a full day or more.' },
  ],
  cta: 'Book Your Commercial EICR in London Today – From £144.99!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL EIC
// ══════════════════════════════════════════════════════════════
export const COMM_EIC = {
  hero: {
    title: 'Commercial EIC Certificate in London & M25 Area',
    subtitle: 'Certified Commercial EIC Services in London – Ensure Safety and Compliance Today!',
    bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
    ctaText: 'Get a Quote',
  },
  intro: {
    title: 'Commercial Electrical Installation Certificate (EIC)',
    body: 'A Commercial Electrical Installation Certificate (EIC) is an official document issued by a certified electrician after completing new installations or significant electrical modifications in a commercial property. It confirms that the work complies with BS 7671 (British Standards) and UK safety regulations, ensuring the installation is safe and compliant for business use.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial electrician issuing EIC',
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  benefits: {
    label: 'COMMERCIAL EIC',
    title: 'Why You Need an EIC for Your Property',
    items: [
      { icon: 'bi-shield-fill-check', title: 'Ensure Workplace Safety', body: 'Certifies that electrical systems are correctly installed, reducing the risk of fires like electric shocks.' },
      { icon: 'bi-file-earmark-text-fill', title: 'Meet Legal Requirements', body: 'Complies with UK wiring regulations and health and safety laws to avoid penalties and enforcement action.' },
      { icon: 'bi-building-check', title: 'Maintain Business Integrity', body: 'Acts as essential documentation for insurance claims, inspections, and property transactions.' },
    ],
    cols: 4,
  },
  legalRequirements: {
    title: 'Legal Requirements for a Commercial Electrical Installation Certificate',
    body: 'A Commercial EIC is required in the following situations:',
    items: [
      { label: 'New Installations', text: 'Certifies new wiring, circuits, or systems meet safety standards.' },
      { label: 'Major Electrical Modifications', text: 'Required for upgrades such as new fuse boards or extensive rewiring.' },
      { label: 'Workplace Safety Modifications', text: 'Ensures your business meets health and safety regulations, protecting employees and customers.' },
      { label: 'Insurance and Liability', text: 'Provides proof that installations meet safety standards, reducing risks in case of incidents.' },
    ],
  },
  services: {
    title: 'Our Commercial EIC Services in London and M25 Area',
    subtitle: 'We provide comprehensive solutions tailored to your business\'s electrical needs.',
    items: [
      { icon: 'bi-lightning-charge-fill', title: 'Complete Installations and Major Modifications:', body: 'From new circuits to full rewiring.', to: '/book-now' },
      { icon: 'bi-person-badge-fill', title: 'Certified Electricians:', body: 'All work is carried out by our qualified electricians, ensuring compliance with UK regulations.', to: '/book-now' },
      { icon: 'bi-file-earmark-text', title: 'Detailed Documentation:', body: 'Includes all test results and records to meet BS 7671 and building regulation standards.', to: '/book-now' },
    ],
  },
  pricing: {
    title: 'Commercial EIC Pricing',
    body: 'Our transparent pricing is tailored to meet your needs.',
    prices: [
      { label: 'Full Installation Certification',      price: 'From £199' },
      { label: 'Distribution Board Certification',     price: 'From £149' },
      { label: 'Additional Circuit Certification',     price: 'From £50/circuit' },
    ],
    ctaText: 'Get a Quote',
  },
  faqs: [
    { q: 'What is the difference between a Commercial EIC and an EICR?', a: 'An EIC certifies new installations or major modifications, while an EICR is a periodic inspection of existing systems to ensure ongoing safety and compliance.' },
    { q: 'When should I get a Commercial EIC?', a: 'Whenever new electrical installation work is completed, including new circuits, distribution boards, complete rewiring, or significant modifications.' },
    { q: 'Is an EIC necessary for minor changes?', a: 'Minor works (like adding a socket to an existing circuit) require a Minor Electrical Works Certificate, not a full EIC.' },
    { q: 'How long does it take to receive an EIC?', a: 'We typically issue the certificate within 24–48 hours of completing the installation work. Urgent certificates are available on request.' },
    { q: "What happens if my business doesn't have an EIC when required?", a: 'Without a valid EIC, you may face enforcement action under health and safety legislation, insurance complications, and liability issues if electrical incidents occur.' },
  ],
  cta: 'Book Your Commercial EIC in London Today – Stay Compliant!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL FUSE BOX
// ══════════════════════════════════════════════════════════════
export const COMM_FUSE_BOX = {
  hero: {
    title: 'Commercial Fuse Board Replacement in London & M25 Area',
    subtitle: 'Upgrade your commercial distribution board for safety, compliance, and reliability. Starting from £450.',
    bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
    ctaText: 'Get a Quote',
  },
  intro: {
    title: 'What is Commercial Fuse Board Replacement?',
    body: 'Commercial fuse board (distribution board) replacement involves upgrading outdated or unsafe consumer units in business premises with modern, compliant units. Commercial distribution boards must handle higher electrical loads than residential units. Our NICEIC-certified engineers specialise in upgrading commercial electrical panels with minimal disruption to your operations.',
    checklist: [
      { label: 'RCDs (Residual Current Devices)', text: 'Essential protection against electric shock for staff and customers.' },
      { label: 'MCBs (Miniature Circuit Breakers)', text: 'Protect high-demand commercial circuits from overloads and short circuits.' },
      { label: 'RCBO Protection', text: 'Combined RCD and MCB for individual circuit protection.' },
      { label: 'Surge Protection', text: 'Safeguard business-critical equipment from power surges.' },
    ],
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial distribution board upgrade',
    ctaText: 'Call Now',
    imgRight: false,
  },
  benefits: {
    label: 'COMMERCIAL FUSE BOARD REPLACEMENT',
    title: 'Why Replace Your Commercial Fuse Board?',
    items: [
      { icon: 'bi-building-check', title: 'Business Safety', body: 'Prevent electrical failures that could harm staff, customers, or damage equipment and business premises.' },
      { icon: 'bi-file-earmark-lock-fill', title: 'Regulatory Compliance', body: 'Ensure your electrical infrastructure meets the Electricity at Work Regulations 1989 and BS 7671.' },
      { icon: 'bi-clock-fill', title: 'Minimise Downtime', body: 'We plan replacements to minimise operational disruption, offering evening and weekend appointments for businesses.' },
      { icon: 'bi-graph-up-arrow', title: 'Future-Proof Capacity', body: 'Upgrade to handle growing electrical demands as your business expands and installs new equipment.' },
    ],
  },
  process: {
    label: 'WHAT HAPPENS DURING',
    title: 'Commercial Fuse Board Replacement',
    steps: [
      { icon: 'bi-search', title: 'Site Assessment', body: 'Full assessment of your current distribution board, load requirements, and building layout to design the right solution.' },
      { icon: 'bi-tools', title: 'Board Replacement', body: 'Installation of a new, compliant distribution board with appropriate RCD, MCB, and surge protection for your commercial load.' },
      { icon: 'bi-patch-check-fill', title: 'Testing & Certification', body: 'Full electrical testing of all circuits and issuance of an Electrical Installation Certificate on successful completion.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-pulse', title: 'Commercial EICR', body: 'Follow up your fuse board upgrade with a commercial EICR to ensure the full installation is fully compliant.', to: '/electrical/commercial-eicr' },
    { icon: 'bi-lightning-charge-fill', title: 'Commercial EIC', body: 'Receive an Electrical Installation Certificate confirming your new board meets BS 7671 standards.', to: '/electrical/commercial-eic' },
    { icon: 'bi-plug-fill', title: 'PAT Testing', body: 'Ensure all portable appliances in your business are safe and compliant with our PAT testing service.', to: '/book-now' },
  ],
  faqs: FUSE_BOX_FAQS,
  cta: 'Upgrade Your Commercial Distribution Board Today – Call Us!',
};
