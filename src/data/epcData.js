// ============================================================
// EPC (Energy Performance Certificate) — all page content
// ============================================================

export const EPC_FAQS = [
  {
    q: 'What is an Energy Performance Certificate (EPC)?',
    a: 'An EPC is a document that rates the energy efficiency of a property on a scale from A (most efficient) to G (least efficient). It also provides recommendations for improving energy efficiency and estimates the cost of running the property.',
  },
  {
    q: 'When is an EPC legally required?',
    a: 'An EPC is required whenever a property is built, sold, or rented. Landlords must have a valid EPC before marketing a property, and the property must achieve at least an E rating to be legally let under the Minimum Energy Efficiency Standards (MEES).',
  },
  {
    q: 'How long does an EPC last?',
    a: 'An EPC is valid for 10 years. After this period, a new assessment must be carried out if the property is sold or rented. A new EPC may also be required earlier if significant energy efficiency improvements have been made.',
  },
  {
    q: 'What happens during an EPC assessment?',
    a: 'Our accredited energy assessor visits the property and collects data on construction type, insulation, heating systems, windows, lighting, and renewable energy features. This data is entered into government-approved software to calculate the EPC rating.',
  },
  {
    q: 'What is the minimum EPC rating required to rent a property?',
    a: 'Under the Minimum Energy Efficiency Standards (MEES), all privately rented properties in England and Wales must have a minimum EPC rating of E. The government has proposed raising this to C by 2028 for new tenancies, so improving your rating now is advisable.',
  },
];

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL EPC
// ══════════════════════════════════════════════════════════════
export const RES_EPC = {
  hero: {
    title: 'Residential Energy Performance Certificate (EPC)',
    subtitle: 'Fast, Accredited EPC Assessments for Homes, Rental Properties & HMOs Across London. Certificates Issued Within 24 Hours.',
    price: 'From £99.99',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  },
  stats: [
    { value: 'Accredited', label: 'DEA Assessors' },
    { value: 'Within 24hrs', label: 'Certificate Issued' },
    { value: 'Lodged on', label: 'Gov. EPC Register' },
  ],
  intro: {
    title: 'What is a Residential EPC?',
    body: 'A Residential Energy Performance Certificate (EPC) is a legal requirement for any home being sold or rented in England and Wales. The certificate rates your property\'s energy efficiency from A to G and must be available to prospective buyers or tenants before marketing begins. Our accredited Domestic Energy Assessors (DEAs) carry out swift, accurate EPC assessments across London, lodging certificates directly to the official government EPC register within 24 hours.',
    imgSrc: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
    imgAlt: 'EPC assessor visiting residential property',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'RESIDENTIAL EPC',
    title: 'Why You Need a Valid Residential EPC',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'EPCs are a legal requirement for all properties being sold or rented. Landlords face fines of up to £5,000 for letting a property without a valid EPC.',
      },
      {
        icon: 'bi-house-check-fill',
        title: 'Minimum E Rating to Let',
        body: 'Under the Minimum Energy Efficiency Standards (MEES), a property must achieve at least an E rating to be legally rented in the private sector.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Improve Property Value',
        body: 'A higher EPC rating makes your property more attractive to buyers and tenants, can increase its market value, and reduces running costs for occupants.',
      },
      {
        icon: 'bi-lightbulb-fill',
        title: 'Energy Saving Recommendations',
        body: 'Your EPC includes tailored recommendations showing which improvements — such as insulation, heating upgrades, or solar panels — will have the greatest impact on your rating.',
      },
    ],
  },
  pricing: {
    title: 'Residential EPC Pricing',
    body: 'Fast, affordable EPC assessments for all property types across London.',
    prices: [
      { label: '1–3 Bedroom Property',        price: '£99.99' },
      { label: '4 Bedroom Property',          price: '£109.99' },
      { label: '5 Bedroom Property',          price: '£130.00' },
      { label: '6 Bedroom Property',          price: '£140.00' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Fixed pricing includes EPC lodgement on the government register and PDF certificate. Travel surcharge may apply outside Greater London.',
  },
  whatsCovered: {
    title: 'What Does an EPC Assessment Cover?',
    imgSrc: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    items: [
      { label: 'Property Construction', text: 'Assessment of wall type, floor, roof, and window construction to evaluate the building fabric\'s thermal performance.' },
      { label: 'Heating System', text: 'Inspection and recording of the main and secondary heating systems, controls, and fuel type.' },
      { label: 'Hot Water & Lighting', text: 'Assessment of the hot water cylinder, immersion heaters, and the proportion of low-energy lighting installed.' },
      { label: 'Insulation', text: 'Evaluation of loft, wall, and floor insulation levels and their impact on energy efficiency.' },
      { label: 'Renewable Energy', text: 'Any solar panels, heat pumps, or other renewable energy systems are assessed and factored into the rating.' },
      { label: 'EPC Certificate & Report', text: 'A full EPC is issued within 24 hours, lodged to the government register, and emailed to you as a PDF with improvement recommendations.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  epcRatings: {
    title: 'EPC Ratings Explained',
    subtitle: 'EPC ratings run from A (most efficient) to G (least efficient). Most UK homes fall in the D–E range.',
    items: [
      { band: 'A', range: '92–100', colour: '#00873c', label: 'Very Energy Efficient' },
      { band: 'B', range: '81–91',  colour: '#19b345', label: 'Energy Efficient' },
      { band: 'C', range: '69–80',  colour: '#8cc73f', label: 'Average' },
      { band: 'D', range: '55–68',  colour: '#f6c100', label: 'Below Average' },
      { band: 'E', range: '39–54',  colour: '#f08100', label: 'Minimum Legal Standard' },
      { band: 'F', range: '21–38',  colour: '#e9450a', label: 'Poor Efficiency' },
      { band: 'G', range: '1–20',   colour: '#c81300', label: 'Very Inefficient' },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Getting Your Residential EPC',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Assessment', body: 'Book online or by phone. We offer flexible appointment times including evenings and weekends across London.' },
      { icon: 'bi-clipboard-check', title: 'Property Assessment', body: 'Our accredited DEA visits your property, inspects all relevant features, and records the data needed to generate an accurate EPC rating.' },
      { icon: 'bi-file-earmark-check-fill', title: 'EPC Issued Within 24 Hours', body: 'Your EPC is lodged on the official government register and emailed to you as a PDF certificate within 24 hours of the assessment.' },
    ],
  },
  related: [
    { icon: 'bi-building', title: 'Commercial EPC', body: 'Need an EPC for a commercial property or office? We carry out accredited commercial EPC assessments across London.', to: '/epc/commercial' },
    { icon: 'bi-lightning-fill', title: 'EICR Certificate', body: 'Combine your EPC with an electrical installation condition report for landlord compliance in one visit.', to: '/electrical/residential-eicr' },
    { icon: 'bi-fire', title: 'Gas Safety Certificate (CP12)', body: 'Stay fully compliant with an annual CP12 landlord gas safety certificate alongside your EPC.', to: '/gas/landlord-gas-safety' },
  ],
  faqs: EPC_FAQS,
  cta: 'Book Your Residential EPC Today – Fast, Accredited & Affordable!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL EPC
// ══════════════════════════════════════════════════════════════
export const COMM_EPC = {
  hero: {
    title: 'Commercial Energy Performance Certificate (EPC)',
    subtitle: 'Accredited Commercial EPC Assessments for Offices, Retail, Warehouses & All Non-Domestic Premises Across London.',
    price: 'From £149',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'CIBSE', label: 'Accredited Assessors' },
    { value: 'All Commercial', label: 'Property Types' },
    { value: 'Gov. EPC', label: 'Register Lodgement' },
  ],
  intro: {
    title: 'What is a Commercial EPC?',
    body: 'A Commercial Energy Performance Certificate (EPC) is a legal requirement for all non-domestic buildings being sold, let, or constructed in England and Wales. Unlike residential EPCs, commercial assessments use Display Energy Certificates (DECs) for public buildings and Non-Domestic EPCs for offices, retail, and industrial premises. Our CIBSE-accredited Non-Domestic Energy Assessors (NDEAs) provide accurate, cost-effective commercial EPC assessments across all sectors in London, with certificates lodged directly to the government EPC register.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial EPC assessor in office building',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL EPC',
    title: 'Why Your Business Needs a Commercial EPC',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'All non-domestic buildings being sold, let, or newly constructed must have a valid EPC. Failure to provide one carries fines of up to £5,000 for smaller properties and up to £150,000 for larger ones.',
      },
      {
        icon: 'bi-building-check',
        title: 'MEES Compliance',
        body: 'From April 2023, all commercially let properties must have a minimum EPC rating of E. The government plans to raise this to B by 2030, making proactive improvement essential.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Attract Tenants & Buyers',
        body: 'A high EPC rating demonstrates energy efficiency to prospective tenants and buyers, reducing void periods and supporting higher rental or sale values.',
      },
      {
        icon: 'bi-lightbulb-fill',
        title: 'Identify Improvement Opportunities',
        body: 'Your commercial EPC report includes recommendations for energy improvements — helping you reduce operating costs, lower your carbon footprint, and stay ahead of tightening regulations.',
      },
    ],
  },
  pricing: {
    title: 'Commercial EPC Pricing',
    body: 'Pricing based on the size, complexity, and type of commercial premises. Contact us for a tailored quote.',
    prices: [
      { label: 'Small Premises (Up to 500m²)',    price: 'From £149' },
      { label: 'Medium Premises (500–2,000m²)',    price: 'From £299' },
      { label: 'Large / Complex Premises',         price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Fixed pricing includes EPC lodgement on the government register and PDF certificate. Parking and access charges may apply.',
  },
  propertyTypes: {
    title: 'Commercial Properties We Assess',
    subtitle: 'We provide accredited commercial EPC assessments for all types of non-domestic premises across London.',
    items: [
      { icon: 'bi-building', title: 'Offices & Office Blocks', body: 'Commercial EPC assessments for single and multi-floor offices, business parks, and managed workspaces.' },
      { icon: 'bi-shop', title: 'Retail Units & Shops', body: 'EPC assessments for retail units, shops, showrooms, and shopping centre units.' },
      { icon: 'bi-gear-wide-connected', title: 'Warehouses & Industrial', body: 'Commercial EPC assessments for warehouses, factories, and light industrial premises.' },
      { icon: 'bi-cup-hot-fill', title: 'Restaurants & Hospitality', body: 'EPC assessments for restaurants, cafes, hotels, pubs, and event venues.' },
      { icon: 'bi-hospital', title: 'Healthcare & Education', body: 'Non-domestic EPC and Display Energy Certificates for schools, GP surgeries, care homes, and nurseries.' },
      { icon: 'bi-house-door-fill', title: 'Mixed-Use & HMO', body: 'Commercial EPC assessments for mixed-use buildings and HMOs where a non-domestic certificate is required.' },
    ],
  },
  whatsCovered: {
    title: 'What Does a Commercial EPC Assessment Include?',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    items: [
      { label: 'Building Fabric', text: 'Assessment of the construction type, wall, roof, floor, and window specifications and their thermal performance.' },
      { label: 'Heating & Cooling Systems', text: 'Inspection of all space heating, air conditioning, and mechanical ventilation systems and their energy source.' },
      { label: 'Hot Water & Lighting', text: 'Assessment of hot water systems, lighting efficiency, and controls including zoning and time switches.' },
      { label: 'Renewable Energy', text: 'Any renewable energy generation systems — solar PV, wind, heat pumps — are assessed and factored into the rating.' },
      { label: 'Building Services', text: 'Review of BMS controls, energy meters, and any automatic energy monitoring systems in place.' },
      { label: 'EPC Certificate & Recommendations', text: 'Full commercial EPC lodged on the government register within 3–5 working days, with an improvement recommendations report.' },
    ],
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Getting Your Commercial EPC',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book an Assessment', body: 'Contact us with your property details. We will advise on the correct type of assessment and arrange a site visit at a time convenient for your business.' },
      { icon: 'bi-clipboard-check', title: 'On-Site Assessment', body: 'Our NDEA visits your premises, collects all required building data, and measures and records the performance of all building services.' },
      { icon: 'bi-file-earmark-check-fill', title: 'EPC Issued & Lodged', body: 'Your commercial EPC is calculated, lodged to the government register, and issued to you as a PDF within 3–5 working days of the assessment.' },
    ],
  },
  related: [
    { icon: 'bi-house-fill', title: 'Residential EPC', body: 'Need an EPC for a residential property? We carry out accredited domestic EPC assessments across London.', to: '/epc/residential' },
    { icon: 'bi-lightning-fill', title: 'Commercial EICR', body: 'Combine your EPC assessment with a commercial electrical installation condition report for complete compliance.', to: '/electrical/commercial-eicr' },
    { icon: 'bi-clipboard-check', title: 'Commercial Fire Risk Assessment', body: 'Ensure your premises meets all fire safety obligations with a professionally completed FRA.', to: '/fire/commercial-fra' },
  ],
  faqs: EPC_FAQS,
  cta: 'Book Your Commercial EPC Assessment Today – Fast & Accredited!',
};
