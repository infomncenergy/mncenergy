// ============================================================
// Asbestos Services — all page content
// ============================================================

export const ASBESTOS_FAQS = [
  {
    q: 'What is asbestos and why is it dangerous?',
    a: 'Asbestos is a naturally occurring fibrous mineral that was widely used in UK construction until it was banned in 1999. When asbestos-containing materials are disturbed, microscopic fibres are released into the air. Inhaling these fibres can cause serious diseases including mesothelioma, asbestosis, and lung cancer — often decades after exposure.',
  },
  {
    q: 'Do I need an asbestos survey before renovating?',
    a: 'Yes. Under the Control of Asbestos Regulations 2012, a Management or Refurbishment/Demolition survey must be carried out before any building work begins on a property built before 2000. This is a legal requirement to protect workers and occupants.',
  },
  {
    q: 'What types of asbestos survey are there?',
    a: 'There are two main types: a Management Survey (for properties in normal use, to manage asbestos in place) and a Refurbishment & Demolition Survey (required before any intrusive works or demolition to locate all asbestos-containing materials).',
  },
  {
    q: 'How long does an asbestos survey take?',
    a: 'A standard residential management survey typically takes 1–2 hours. Refurbishment surveys and larger commercial properties may take several hours or require multiple visits depending on size and complexity.',
  },
  {
    q: 'What happens if asbestos is found?',
    a: 'If asbestos-containing materials (ACMs) are found, our report will classify each item by risk level and condition, and advise whether it should be managed in place, encapsulated, or removed by a licensed asbestos contractor. We can also advise on the next steps.',
  },
];

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL ASBESTOS SURVEY
// ══════════════════════════════════════════════════════════════
export const RES_ASBESTOS = {
  hero: {
    title: 'Residential Asbestos Survey',
    subtitle: 'UKAS-Accredited Asbestos Surveys for Homes, HMOs & Residential Properties Across London. Management & Refurbishment Surveys Available.',
    price: 'From £300',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'UKAS', label: 'Accredited Surveyors' },
    { value: 'Same Day', label: 'Reports Available' },
    { value: 'Full Lab', label: 'Analysis Included' },
  ],
  intro: {
    title: 'What is a Residential Asbestos Survey?',
    body: 'Any home built before 2000 may contain asbestos-containing materials (ACMs) in textured coatings, floor tiles, pipe lagging, roof felt, and many other building products. Under the Control of Asbestos Regulations 2012, a survey is legally required before any refurbishment or demolition work. Our UKAS-accredited surveyors carry out thorough inspections and laboratory analysis, issuing a detailed report that tells you exactly what is present, where it is, and what to do about it.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Asbestos surveyor inspecting residential property',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'RESIDENTIAL ASBESTOS SURVEY',
    title: 'Why You Need an Asbestos Survey Before Any Work',
    items: [
      {
        icon: 'bi-shield-fill-check',
        title: 'Protect Your Family',
        body: 'Disturbing asbestos during DIY or renovation work without knowing it is present is one of the most common causes of dangerous asbestos fibre exposure in domestic settings.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'The Control of Asbestos Regulations 2012 requires a Refurbishment & Demolition Survey before any intrusive works in properties built before 2000.',
      },
      {
        icon: 'bi-house-check-fill',
        title: 'Required for Sale & Remortgage',
        body: 'Many mortgage lenders and solicitors request asbestos survey reports as part of the conveyancing process, particularly for older properties.',
      },
      {
        icon: 'bi-file-earmark-text-fill',
        title: 'Detailed Written Report',
        body: 'Our report classifies all ACMs by risk level, location, condition, and urgency — giving you clear guidance on how to proceed safely.',
      },
    ],
  },
  surveyTypes: {
    title: 'Types of Residential Asbestos Survey',
    items: [
      {
        icon: 'bi-clipboard-check',
        title: 'Management Survey',
        body: 'A standard survey for homes in normal occupancy. Identifies and assesses asbestos-containing materials that could be disturbed during everyday activities or minor maintenance. Required by landlords for rental properties.',
        badge: 'Most Popular',
      },
      {
        icon: 'bi-tools',
        title: 'Refurbishment & Demolition Survey',
        body: 'An intrusive survey required before any refurbishment, renovation, or demolition work. Locates all ACMs in the areas to be worked on, including those hidden within the building fabric.',
        badge: 'Required Before Renovation',
      },
    ],
  },
  pricing: {
    title: 'Residential Asbestos Survey Pricing',
    body: 'Competitive fixed pricing for residential asbestos surveys including laboratory analysis and full written report.',
    prices: [
      { label: '1–2 Bedroom Property',        price: 'From £149' },
      { label: '3–4 Bedroom Property',        price: 'From £199' },
      { label: '5+ Bedrooms / HMO',           price: 'From £299' },
      { label: 'Refurbishment & Demolition',  price: 'POA' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Prices include laboratory analysis and written report. Travel surcharge may apply outside Greater London.',
  },
  whatsCovered: {
    title: 'Where Asbestos is Commonly Found in Homes',
    imgSrc: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
    items: [
      { label: 'Artex & Textured Coatings', text: 'Textured ceiling and wall coatings applied before 1999 commonly contain chrysotile (white) asbestos.' },
      { label: 'Floor Tiles & Adhesive', text: 'Vinyl floor tiles and the black bitumen adhesive used to fix them frequently contain asbestos in pre-2000 homes.' },
      { label: 'Pipe & Boiler Lagging', text: 'Thermal insulation on hot water pipes, boilers, and storage heaters is a common location for asbestos-containing materials.' },
      { label: 'Roof Felt & Guttering', text: 'Asbestos cement was widely used in roof tiles, soffits, guttering, and garage roofs in properties built before 1980.' },
      { label: 'Partition Boards', text: 'Asbestos insulating board (AIB) was used in fire doors, ceiling tiles, partition boards, and soffits.' },
      { label: 'Around Fireplaces', text: 'Asbestos rope, boards, and sprayed coatings were used around fireplaces, boiler cupboards, and storage heaters.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'The Residential Asbestos Survey Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Survey', body: 'Book online or by phone. Tell us the property size and the purpose of the survey (management or pre-renovation) so we can advise the correct survey type.' },
      { icon: 'bi-search', title: 'On-Site Survey', body: 'Our UKAS-accredited surveyor visits the property, takes representative samples from any suspected ACMs, and records their location and condition.' },
      { icon: 'bi-file-earmark-text-fill', title: 'Lab Analysis & Report', body: 'Samples are sent to our UKAS-accredited laboratory for analysis. A full written report with risk ratings and recommendations is issued within 3–5 working days.' },
    ],
  },
  related: [
    { icon: 'bi-building', title: 'Commercial Asbestos Survey', body: 'Need an asbestos survey for a commercial property? We cover all types of non-domestic premises across London.', to: '/asbestos/commercial' },
    { icon: 'bi-lightning-fill', title: 'EICR Certificate', body: 'Combine your asbestos survey with an electrical installation condition report for complete pre-renovation compliance.', to: '/electrical/residential-eicr' },
    { icon: 'bi-fire', title: 'Gas Safety Certificate', body: 'Ensure your gas appliances are safe and legally compliant with a CP12 landlord gas safety certificate.', to: '/gas/landlord-gas-safety' },
  ],
  faqs: ASBESTOS_FAQS,
  cta: 'Book Your Residential Asbestos Survey Today – Work Safely!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL ASBESTOS SURVEY
// ══════════════════════════════════════════════════════════════
export const COMM_ASBESTOS = {
  hero: {
    title: 'Commercial Asbestos Survey',
    subtitle: 'UKAS-Accredited Asbestos Management & Refurbishment Surveys for Offices, Retail, Warehouses & All Commercial Premises Across London.',
    price: 'From £249',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'UKAS', label: 'Accredited Laboratory' },
    { value: 'All Commercial', label: 'Property Types' },
    { value: 'CAR 2012', label: 'Fully Compliant' },
  ],
  intro: {
    title: 'Commercial Asbestos Surveys – Management & Refurbishment',
    body: 'The Control of Asbestos Regulations 2012 places a legal duty on owners and managers of non-domestic premises to manage asbestos. This begins with a professional asbestos survey to identify and assess all asbestos-containing materials (ACMs) in the building. Our UKAS-accredited surveyors carry out both Management Surveys for premises in use and Refurbishment & Demolition Surveys before any planned building works, delivering detailed, risk-rated reports that give you a clear asbestos management plan.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial asbestos survey in office building',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL ASBESTOS SURVEY',
    title: 'Why Your Business Needs an Asbestos Survey',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Duty to Manage',
        body: 'The Control of Asbestos Regulations 2012 (Regulation 4) places a legal duty on all owners and occupiers of non-domestic premises to identify, manage, and control asbestos risks.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Protect Workers & Visitors',
        body: 'Asbestos is the single biggest cause of work-related deaths in the UK. Identifying and managing ACMs protects your employees, contractors, and visitors from life-threatening exposure.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance & Due Diligence',
        body: 'Commercial insurers and solicitors require a current asbestos management survey as part of any property transaction, refurbishment project, or insurance application.',
      },
      {
        icon: 'bi-building-check',
        title: 'Required Before Any Works',
        body: 'A Refurbishment & Demolition Survey is mandatory before any building, maintenance, or refurbishment work begins on commercial premises built before 2000.',
      },
    ],
  },
  surveyTypes: {
    title: 'Commercial Asbestos Survey Types',
    items: [
      {
        icon: 'bi-clipboard-check',
        title: 'Management Survey',
        body: 'Required for all commercial premises in normal use. Locates and assesses asbestos-containing materials that could be disturbed during normal occupancy, maintenance, or minor works. Forms the basis of your asbestos management plan.',
        badge: 'Legal Requirement',
      },
      {
        icon: 'bi-tools',
        title: 'Refurbishment & Demolition Survey',
        body: 'Mandatory before any refurbishment, fit-out, or demolition work. Intrusive in nature — accessing voids, above ceilings, and within the building fabric to locate all ACMs in the affected area.',
        badge: 'Required Before Works',
      },
    ],
  },
  pricing: {
    title: 'Commercial Asbestos Survey Pricing',
    body: 'Pricing is based on the size and complexity of your premises. Contact us for a tailored quote for your building.',
    prices: [
      { label: 'Small Premises (Up to 500m²)',   price: 'From £249' },
      { label: 'Medium Premises (500–2,000m²)',   price: 'From £449' },
      { label: 'Large / Complex Sites',           price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Prices include UKAS laboratory analysis and full written report. Parking and access charges may apply.',
  },
  propertyTypes: {
    title: 'Commercial Properties We Survey',
    subtitle: 'We carry out asbestos surveys for all types of non-domestic premises across London.',
    items: [
      { icon: 'bi-building', title: 'Offices & Office Blocks', body: 'Management and refurbishment surveys for single and multi-floor commercial offices and managed workspaces.' },
      { icon: 'bi-shop', title: 'Retail & Leisure', body: 'Asbestos surveys for retail units, supermarkets, gyms, and leisure facilities before fit-out or renovation.' },
      { icon: 'bi-gear-wide-connected', title: 'Warehouses & Industrial', body: 'Commercial asbestos surveys for warehouses, factories, and industrial units including roof and cladding surveys.' },
      { icon: 'bi-cup-hot-fill', title: 'Restaurants & Hospitality', body: 'Pre-refurbishment asbestos surveys for restaurants, hotels, pubs, and commercial kitchens.' },
      { icon: 'bi-hospital', title: 'Healthcare & Education', body: 'Management and refurbishment surveys for schools, GP surgeries, care homes, and nurseries.' },
      { icon: 'bi-house-door-fill', title: 'HMOs & Mixed-Use', body: 'Asbestos surveys for HMOs, blocks of flats, and mixed commercial and residential buildings.' },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'The Commercial Asbestos Survey Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book a Site Survey', body: 'Contact us to discuss the type of survey required, the size of your premises, and any planned works. We will confirm a convenient appointment time.' },
      { icon: 'bi-search', title: 'On-Site Inspection & Sampling', body: 'Our UKAS-accredited surveyor inspects all accessible areas, takes representative samples from suspected ACMs, and records their location, condition, and extent.' },
      { icon: 'bi-file-earmark-text-fill', title: 'Lab Analysis & Asbestos Register', body: 'Samples are analysed by our UKAS-accredited laboratory. A full report and asbestos register is issued within 3–5 working days, including risk ratings and a management action plan.' },
    ],
  },
  related: [
    { icon: 'bi-house-fill', title: 'Residential Asbestos Survey', body: 'We also carry out residential asbestos surveys for homes, HMOs, and residential investment properties.', to: '/asbestos/residential' },
    { icon: 'bi-lightning-fill', title: 'Commercial EICR', body: 'Combine your asbestos survey with a commercial electrical installation condition report for full pre-works compliance.', to: '/electrical/commercial-eicr' },
    { icon: 'bi-clipboard-check', title: 'Commercial Fire Risk Assessment', body: 'Ensure your commercial premises meets all fire safety obligations alongside your asbestos management.', to: '/fire/commercial-fra' },
  ],
  faqs: ASBESTOS_FAQS,
  cta: 'Book Your Commercial Asbestos Survey Today – Stay Compliant!',
};
