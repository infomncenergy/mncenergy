// ============================================================
// Fire Services — all page content
// ============================================================

// ── Shared FAQs ──────────────────────────────────────────────
export const FRA_FAQS = [
  {
    q: 'What is a Fire Risk Assessment (FRA)?',
    a: 'A Fire Risk Assessment is a systematic evaluation of a property to identify fire hazards, assess risks to occupants, and recommend measures to reduce or eliminate those risks. It is a legal requirement for most non-domestic and multi-occupancy residential premises.',
  },
  {
    q: 'How often should a Fire Risk Assessment be carried out?',
    a: 'The Regulatory Reform (Fire Safety) Order 2005 requires that an FRA is reviewed regularly and whenever there are significant changes to the building, occupancy, or use. Annual reviews are recommended for most premises.',
  },
  {
    q: 'Who is legally responsible for a Fire Risk Assessment?',
    a: 'The "responsible person" — typically the employer, building owner, or managing agent — is legally obligated to ensure a suitable and sufficient FRA is carried out and kept up to date.',
  },
  {
    q: 'What happens during a Fire Risk Assessment?',
    a: 'Our assessor will inspect all areas of the property, identify fire hazards and ignition sources, evaluate escape routes and fire detection systems, review existing fire safety measures, and produce a written report with an action plan.',
  },
  {
    q: 'How long does a Fire Risk Assessment take?',
    a: 'Typically 1–3 hours for a standard residential property or small commercial premises. Larger or more complex buildings may require a full day or multiple visits.',
  },
];

export const EMERGENCY_LIGHTS_FAQS = [
  {
    q: 'What are emergency lights?',
    a: 'Emergency lights are battery-backed lighting units that automatically activate when the main power supply fails. They are designed to illuminate escape routes and exits, enabling safe evacuation during a power failure or fire.',
  },
  {
    q: 'Are emergency lights a legal requirement?',
    a: 'Yes. Under BS 5266-1 and the Regulatory Reform (Fire Safety) Order 2005, most non-domestic and multi-occupancy premises are legally required to install and regularly test emergency lighting.',
  },
  {
    q: 'How often should emergency lighting be tested?',
    a: 'Monthly function tests and an annual full-duration discharge test are required under BS 5266-1. A certificate should be issued following each annual test.',
  },
  {
    q: 'What happens during an emergency lighting inspection?',
    a: 'Our engineer tests all emergency luminaires, checks battery performance, verifies correct placement and coverage of escape routes, and issues a certificate detailing the condition and any remedial work required.',
  },
  {
    q: 'Can you install new emergency lighting as well as certify existing systems?',
    a: 'Yes – our engineers can design, supply, and install new emergency lighting systems for residential and commercial properties, as well as carry out testing and certification of existing installations.',
  },
];

export const FIRE_ALARM_FAQS = [
  {
    q: 'What types of fire alarm systems do you certify?',
    a: 'We certify all categories of fire alarm systems as defined by BS 5839-1 and BS 5839-6 — from simple Grade D domestic systems to Grade A addressable commercial systems.',
  },
  {
    q: 'How often should a fire alarm system be serviced?',
    a: 'BS 5839-1 recommends that commercial fire alarm systems are serviced at least twice per year. Domestic systems (BS 5839-6) should be tested weekly and serviced annually.',
  },
  {
    q: 'What is a fire alarm certificate?',
    a: 'A fire alarm certificate is a document issued following an inspection and test of a fire alarm system, confirming it has been installed and is operating in accordance with the relevant British Standard.',
  },
  {
    q: 'Can you install a new fire alarm system?',
    a: 'Yes – we design, supply, install, and commission fire alarm systems for all property types. We also carry out remedial repairs on existing systems before certifying them.',
  },
  {
    q: 'What happens if faults are found during the inspection?',
    a: 'If faults are found, the engineer will document them in the service report and advise on the required remedial work. We can usually carry out repairs on the same visit to restore the system to full compliance.',
  },
];

export const FIRE_DOOR_FAQS = [
  {
    q: 'What is a fire door inspection?',
    a: 'A fire door inspection assesses whether a fire door assembly meets the required performance standard, checking the door leaf, frame, intumescent seals, cold smoke seals, hinges, closers, hardware, and glazing — ensuring the door will perform as designed in a fire.',
  },
  {
    q: 'Are fire door inspections a legal requirement?',
    a: 'Yes. The Fire Safety (England) Regulations 2022 require responsible persons in multi-occupancy residential buildings to carry out quarterly checks of communal fire doors and annual checks of individual flat entrance doors.',
  },
  {
    q: 'How often should fire doors be inspected?',
    a: 'Quarterly checks are required for communal fire doors in buildings over 11 metres. Flat entrance doors require annual inspection. Any fire door that has been installed or altered also requires a post-installation inspection.',
  },
  {
    q: 'What makes a fire door non-compliant?',
    a: 'Common non-compliances include damaged or missing intumescent seals, gaps around the door leaf exceeding 3–4mm, faulty or missing self-closers, missing or incorrect hardware, and missing certification marks (CE or UKCA).',
  },
  {
    q: 'Do you supply and fit new fire doors?',
    a: 'Yes – we can supply, fit, and certify certified fire doors for all applications, from flat entrance doors to communal and commercial fire doors, ensuring full compliance with BS 476 and BS EN 1634.',
  },
];

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL FIRE RISK ASSESSMENT (FRA)
// ══════════════════════════════════════════════════════════════
export const RES_FRA = {
  hero: {
    title: 'Residential Fire Risk Assessment (FRA)',
    subtitle: 'Legally Compliant Fire Risk Assessments for HMOs, Blocks of Flats & Multi-Occupancy Residential Properties Across London.',
    price: 'From £84.99',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&q=80',
  },
  stats: [
    { value: 'BAFE', label: 'Accredited Assessors' },
    { value: 'Same Day', label: 'Reports Available' },
    { value: 'FRA', label: 'Compliant Reports' },
  ],
  intro: {
    title: 'What is a Residential Fire Risk Assessment?',
    body: 'A Residential Fire Risk Assessment (FRA) is a legal requirement for HMOs, blocks of flats, bedsits, and any residential building where the common areas are not solely used by a single household. Under the Regulatory Reform (Fire Safety) Order 2005, landlords and managing agents must ensure a suitable and sufficient FRA is carried out by a competent person. Our assessors produce detailed, action-prioritised reports across London.',
    imgSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    imgAlt: 'Fire risk assessor inspecting residential building',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'FIRE RISK ASSESSMENT',
    title: 'Why Do You Need a Residential Fire Risk Assessment?',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'The Regulatory Reform (Fire Safety) Order 2005 makes it a legal obligation for landlords and responsible persons to conduct FRAs in HMOs and multi-occupancy buildings.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Protect Your Tenants',
        body: 'Identifying and mitigating fire hazards protects the lives of your tenants and reduces your liability as a property owner or managing agent.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Compliance',
        body: 'Most residential landlord insurance policies require a valid, up-to-date fire risk assessment. Operating without one may invalidate your cover.',
      },
      {
        icon: 'bi-house-check-fill',
        title: 'HMO Licensing',
        body: 'Local authorities require a fire risk assessment as part of the HMO licensing process. Without one, your licence application will be refused or revoked.',
      },
    ],
  },
  pricing: {
    title: 'Residential FRA Pricing',
    body: 'Competitive, transparent pricing for fire risk assessments. Price is based on property size and number of units.',
    prices: [
      { label: 'Studio',                      price: '£84.99' },
      { label: 'Communal Area',               price: '£139.99' },
      { label: '1–3 Bedroom',                 price: '£149.99' },
      { label: '3–6 Bedroom',                 price: '£199.99' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Fixed pricing. Travel surcharge may apply outside Greater London.',
  },
  propertyTypes: {
    title: 'Residential Properties We Cover',
    subtitle: 'We carry out fire risk assessments for all types of residential properties requiring a statutory FRA.',
    items: [
      { icon: 'bi-house-door-fill', title: 'Houses in Multiple Occupation (HMOs)', body: 'Mandatory FRAs for all licensed and unlicensed HMOs including bedsits, shared houses, and multi-let properties.' },
      { icon: 'bi-buildings', title: 'Blocks of Flats', body: 'Common area fire risk assessments for purpose-built and converted residential blocks of any size.' },
      { icon: 'bi-building', title: 'Converted Buildings', body: 'FRAs for converted townhouses, maisonettes, and mixed-use residential buildings.' },
      { icon: 'bi-shop-window', title: 'Mixed-Use Properties', body: 'Fire risk assessments for buildings with ground-floor commercial use and residential above.' },
      { icon: 'bi-hospital', title: 'Sheltered Housing & Hostels', body: 'FRAs for supported living, sheltered housing schemes, and residential hostels.' },
      { icon: 'bi-building-check', title: 'Purpose-Built Student Accommodation', body: 'Fire risk assessments for purpose-built student residential blocks and managed student lets.' },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'The Fire Risk Assessment Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Assessment', body: 'Book online or by phone. We confirm a convenient time and advise on any information or access needed before the visit.' },
      { icon: 'bi-search', title: 'On-Site Inspection', body: 'Our competent assessor inspects all areas of the property, identifying fire hazards, means of escape, fire detection, and existing controls.' },
      { icon: 'bi-file-earmark-text-fill', title: 'Receive Your FRA Report', body: 'A detailed, prioritised fire risk assessment report is issued, outlining findings and a recommended action plan for compliance.' },
    ],
  },
  related: [
    { icon: 'bi-bell-fill', title: 'Fire Alarm Certificate', body: 'Ensure your fire detection and alarm system is tested and certified to the appropriate British Standard.', to: '/fire/residential-fire-alarm' },
    { icon: 'bi-lightbulb-fill', title: 'Emergency Lights Certificate', body: 'Test and certify emergency lighting across all communal escape routes in your building.', to: '/fire/residential-emergency-lights' },
    { icon: 'bi-door-closed-fill', title: 'Fire Door Inspection', body: 'Have your fire doors inspected and certified to ensure they perform correctly in the event of a fire.', to: '/fire/residential-fire-door' },
  ],
  faqs: FRA_FAQS,
  cta: 'Book Your Residential Fire Risk Assessment Today – Stay Compliant!',
};

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL EMERGENCY LIGHTS CERTIFICATE
// ══════════════════════════════════════════════════════════════
export const RES_EMERGENCY_LIGHTS = {
  hero: {
    title: 'Residential Emergency Lights Certificate',
    subtitle: 'Emergency Lighting Testing & Certification for HMOs, Blocks of Flats & Residential Properties Across London.',
    price: 'From £89',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&q=80',
  },
  stats: [
    { value: 'BS 5266', label: 'Compliant Testing' },
    { value: 'Same Day', label: 'Certificates Issued' },
    { value: 'All Systems', label: 'Tested & Certified' },
  ],
  intro: {
    title: 'Residential Emergency Lighting Testing & Certification',
    body: 'Emergency lighting is a critical component of fire safety in HMOs, blocks of flats, and other residential properties. Under BS 5266-1 and the Regulatory Reform (Fire Safety) Order 2005, responsible persons must ensure that emergency lighting in communal areas is regularly tested and maintained. Our engineers carry out annual full-duration discharge tests and issue BS 5266-compliant certificates across London.',
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80',
    imgAlt: 'Emergency lighting inspection in residential building',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'EMERGENCY LIGHTING',
    title: 'Why is Emergency Lighting Essential for Residential Properties?',
    items: [
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Safety During Power Failure',
        body: 'Emergency lighting automatically activates during power cuts, ensuring occupants can safely navigate escape routes and exit the building.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Compliance',
        body: 'The Regulatory Reform (Fire Safety) Order 2005 and BS 5266-1 require regular testing and certification of emergency lighting in multi-occupancy residential premises.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance & HMO Licensing',
        body: 'A current emergency lighting certificate is typically required for HMO licence applications and residential landlord insurance policies.',
      },
      {
        icon: 'bi-patch-check-fill',
        title: 'Certificate of Compliance',
        body: 'Our engineers issue a BS 5266-compliant certificate following a full-duration test, providing documented evidence of your compliance.',
      },
    ],
  },
  pricing: {
    title: 'Emergency Lighting Certificate Pricing',
    body: 'Transparent, fixed pricing for residential emergency lighting testing and certification.',
    prices: [
      { label: 'Up to 5 Units / Fittings',       price: 'From £89' },
      { label: '6–15 Units / Fittings',           price: 'From £129' },
      { label: '16+ Units (Large Blocks)',         price: 'POA' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Fixed pricing. Travel surcharge may apply outside Greater London.',
  },
  whatsCovered: {
    title: 'What Does Emergency Lighting Testing Include?',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    items: [
      { label: 'Full Duration Discharge Test', text: 'Each emergency luminaire is tested for its full 3-hour discharge period to confirm battery performance meets BS 5266.' },
      { label: 'Visual Condition Check', text: 'All fittings are visually inspected for damage, obstruction, or incorrect positioning relative to escape routes.' },
      { label: 'Legend & Signage Check', text: 'Verification that emergency exit signs are correctly placed, illuminated, and visible along all means of escape.' },
      { label: 'Certificate Issued', text: 'A BS 5266-1 compliant emergency lighting certificate is issued detailing all fittings tested, pass/fail status, and any remedial actions.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Emergency Lighting Testing – What to Expect',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Test', body: 'Schedule a convenient time. We recommend booking annual tests around the same time each year to maintain your compliance record.' },
      { icon: 'bi-lightbulb-fill', title: 'Full Duration Test', body: 'Our engineer tests each emergency fitting for the full 3-hour discharge period as required by BS 5266-1.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate Issued', body: 'Your emergency lighting certificate is issued on the day or digitally within 24 hours, documenting all fittings and their test results.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Fire Risk Assessment', body: 'Combine your emergency lighting test with a full fire risk assessment to address all fire safety obligations in one visit.', to: '/fire/residential-fra' },
    { icon: 'bi-bell-fill', title: 'Fire Alarm Certificate', body: 'Ensure your fire detection and warning system is certified and compliant alongside your emergency lighting.', to: '/fire/residential-fire-alarm' },
    { icon: 'bi-door-closed-fill', title: 'Fire Door Inspection', body: 'Complete your fire safety compliance with a certified fire door inspection for your property.', to: '/fire/residential-fire-door' },
  ],
  faqs: EMERGENCY_LIGHTS_FAQS,
  cta: 'Book Your Emergency Lighting Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL FIRE ALARM CERTIFICATE
// ══════════════════════════════════════════════════════════════
export const RES_FIRE_ALARM = {
  hero: {
    title: 'Residential Fire Alarm Certificate',
    subtitle: 'Fire Alarm System Testing, Servicing & Certification for HMOs, Blocks of Flats & Residential Properties. BS 5839-6 Compliant.',
    price: 'From £89',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'BS 5839', label: 'Compliant Servicing' },
    { value: 'All Grades', label: 'A–F Covered' },
    { value: 'Same Day', label: 'Certificates Issued' },
  ],
  intro: {
    title: 'Residential Fire Alarm Servicing & Certification',
    body: 'A functioning fire detection and alarm system is essential for the safety of occupants in HMOs, blocks of flats, and multi-occupancy residential buildings. Under BS 5839-6 and the Regulatory Reform (Fire Safety) Order 2005, responsible persons must ensure that fire alarm systems are regularly serviced and tested. Our engineers service and certify all categories and grades of residential fire alarm systems across London.',
    imgSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    imgAlt: 'Fire alarm panel inspection in residential building',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'FIRE ALARM CERTIFICATE',
    title: 'Why Regular Fire Alarm Servicing is Essential',
    items: [
      {
        icon: 'bi-bell-fill',
        title: 'Early Warning Saves Lives',
        body: 'A properly maintained fire alarm system provides the critical early warning needed to evacuate occupants safely before a fire becomes life-threatening.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Compliance',
        body: 'Landlords and managing agents are legally required to maintain and test fire alarm systems under the Regulatory Reform (Fire Safety) Order 2005 and Housing Act 2004.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance & HMO Licensing',
        body: 'A current fire alarm service certificate is required for HMO licensing applications and is expected by residential landlord insurance providers.',
      },
      {
        icon: 'bi-tools',
        title: 'Preventive Maintenance',
        body: 'Regular servicing identifies faults, failing detectors, and wiring issues before they result in system failure or nuisance alarms that put occupants at risk.',
      },
    ],
  },
  pricing: {
    title: 'Fire Alarm Certificate Pricing',
    body: 'Transparent pricing for residential fire alarm servicing and certification based on system size and grade.',
    prices: [
      { label: 'Grade D / LD3 (Up to 6 Heads)',  price: 'From £89' },
      { label: 'Grade C / LD2 (6–20 Heads)',      price: 'From £139' },
      { label: 'Grade A / LD1 (Addressable)',     price: 'From £199' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Fixed pricing. Travel surcharge may apply outside Greater London.',
  },
  whatsCovered: {
    title: "What's Included in a Fire Alarm Service?",
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80',
    items: [
      { label: 'Detector Testing', text: 'All smoke, heat, and multi-sensor detectors are individually tested for correct response and sensitivity.' },
      { label: 'Control Panel Inspection', text: 'Full inspection of the fire alarm control panel, indicators, power supply, and battery backup.' },
      { label: 'Sounder & Call Point Testing', text: 'All sounders, bells, and manual call points are tested to confirm correct activation and audibility.' },
      { label: 'Zone & Wiring Check', text: 'Verification of zone integrity, cable condition, and correct wiring throughout the system.' },
      { label: 'Service Certificate', text: 'A full BS 5839-6 fire alarm service certificate is issued, including findings, test results, and any recommended actions.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Fire Alarm Service – What to Expect',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Service', body: 'Schedule your annual fire alarm service. We advise tenants in advance to minimise disruption during testing.' },
      { icon: 'bi-bell-fill', title: 'Full System Test', body: 'Our engineer tests every detector, call point, sounder, and panel component in accordance with BS 5839-6.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate Issued', body: 'Your fire alarm service certificate is issued on the day, documenting all components tested and the overall system condition.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Fire Risk Assessment', body: 'A fire risk assessment identifies all fire hazards and provides a full action plan for your property.', to: '/fire/residential-fra' },
    { icon: 'bi-lightbulb-fill', title: 'Emergency Lights Certificate', body: 'Ensure emergency lighting across all communal escape routes is tested and certified.', to: '/fire/residential-emergency-lights' },
    { icon: 'bi-door-closed-fill', title: 'Fire Door Inspection', body: 'Complement your fire alarm service with a certified fire door inspection for complete compliance.', to: '/fire/residential-fire-door' },
  ],
  faqs: FIRE_ALARM_FAQS,
  cta: 'Book Your Residential Fire Alarm Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// RESIDENTIAL FIRE DOOR INSPECTION
// ══════════════════════════════════════════════════════════════
export const RES_FIRE_DOOR = {
  hero: {
    title: 'Residential Fire Door Inspection Certificate',
    subtitle: 'Fire Door Inspection & Certification for HMOs, Blocks of Flats & Residential Buildings. Compliant with Fire Safety (England) Regulations 2022.',
    price: 'From £79',
    ctaText: 'Book Now',
    ctaSecText: 'Get a Quote',
    bgImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&q=80',
  },
  stats: [
    { value: 'BS 9999', label: 'Compliant Inspection' },
    { value: 'FDIS', label: 'Qualified Inspectors' },
    { value: 'Same Day', label: 'Certificates Issued' },
  ],
  intro: {
    title: 'Residential Fire Door Inspection & Certification',
    body: 'Fire doors are a critical passive fire protection measure in any multi-occupancy residential building. The Fire Safety (England) Regulations 2022 require responsible persons in buildings over 11 metres to carry out quarterly checks of communal fire doors and annual inspections of individual flat entrance fire doors. Our FDIS-qualified inspectors carry out thorough fire door inspections and issue detailed compliance certificates across London.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Fire door inspection in residential building',
    ctaText: 'Book Now',
    imgRight: true,
  },
  benefits: {
    label: 'FIRE DOOR INSPECTION',
    title: 'Why Fire Door Inspections Are Essential',
    items: [
      {
        icon: 'bi-door-closed-fill',
        title: 'Contain Fire & Smoke',
        body: 'A compliant fire door provides up to 30–60 minutes of fire and smoke resistance, giving occupants time to evacuate and emergency services time to respond.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'The Fire Safety (England) Regulations 2022 require quarterly communal door checks and annual flat entrance door inspections in buildings over 11 metres tall.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Protect Occupants',
        body: 'A faulty fire door can fail catastrophically within minutes of a fire starting. Regular inspection ensures your doors will perform when lives depend on them.',
      },
      {
        icon: 'bi-patch-check-fill',
        title: 'Certificated Compliance',
        body: 'Our inspectors issue a detailed certificate for each door, providing documented evidence of inspection for your fire safety records and insurance requirements.',
      },
    ],
  },
  pricing: {
    title: 'Fire Door Inspection Pricing',
    body: 'Competitive pricing for fire door inspection and certification. Discounts available for bulk door inspections in large blocks.',
    prices: [
      { label: 'Single Door Inspection',          price: 'From £79' },
      { label: '2–10 Doors (Per Door)',            price: 'From £49' },
      { label: '11+ Doors (Bulk / Block)',         price: 'POA' },
    ],
    ctaText: 'Book Now',
    disclaimer: '* Fixed pricing. Travel surcharge may apply outside Greater London.',
  },
  whatsCovered: {
    title: 'What Does a Fire Door Inspection Check?',
    imgSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    items: [
      { label: 'Door Leaf & Frame', text: 'Assessment of the door leaf and frame for damage, distortion, or gaps that would compromise fire resistance.' },
      { label: 'Intumescent Seals', text: 'Checking all intumescent and cold smoke seals are present, undamaged, and correctly fitted.' },
      { label: 'Self-Closer', text: 'Testing the door closer to confirm the door returns fully to the closed position from any opening angle.' },
      { label: 'Hardware & Hinges', text: 'Inspection of all hinges, latches, locks, and other hardware to confirm fire-rated compliance.' },
      { label: 'Glazing', text: 'Verification that any glazing is fire-rated and correctly installed with the appropriate intumescent glazing seals.' },
      { label: 'Certification Mark', text: 'Checking for the presence of a valid CE, UKCA, or third-party certification mark on the door or frame.' },
    ],
    ctaText: 'Book Now',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Fire Door Inspection – The Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Inspection', body: 'Schedule a convenient time. Tell us how many fire doors require inspection so we can plan the visit efficiently.' },
      { icon: 'bi-door-open-fill', title: 'Detailed Door Check', body: 'Our FDIS-qualified inspector carries out a full assessment of each fire door, checking all components against BS 9999 requirements.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate Issued', body: 'A certificate is issued for each door detailing its condition, any defects found, and the remedial action required.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Fire Risk Assessment', body: 'A full fire risk assessment will identify all fire door-related risks and recommend corrective actions.', to: '/fire/residential-fra' },
    { icon: 'bi-bell-fill', title: 'Fire Alarm Certificate', body: 'Complement your fire door inspection with a certified fire alarm service for complete fire safety compliance.', to: '/fire/residential-fire-alarm' },
    { icon: 'bi-lightbulb-fill', title: 'Emergency Lights Certificate', body: 'Ensure emergency lighting on all escape routes is tested and compliant.', to: '/fire/residential-emergency-lights' },
  ],
  faqs: FIRE_DOOR_FAQS,
  cta: 'Book a Fire Door Inspection Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL FIRE RISK ASSESSMENT
// ══════════════════════════════════════════════════════════════
export const COMM_FRA = {
  hero: {
    title: 'Commercial Fire Risk Assessment (FRA)',
    subtitle: 'Legally Compliant Fire Risk Assessments for Offices, Retail, Warehouses & All Commercial Premises Across London.',
    price: 'From £149',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&q=80',
  },
  stats: [
    { value: 'BAFE SP205', label: 'Accredited Assessors' },
    { value: 'All Commercial', label: 'Property Types' },
    { value: 'Action Plans', label: 'Prioritised Reports' },
  ],
  intro: {
    title: 'Commercial Fire Risk Assessment for Your Business',
    body: 'The Regulatory Reform (Fire Safety) Order 2005 requires all employers and building owners to carry out and maintain a suitable and sufficient fire risk assessment for their premises. Failure to comply can result in unlimited fines and prosecution. Our BAFE SP205-registered assessors carry out thorough, professionally documented fire risk assessments for all types of commercial premises across London, producing prioritised action plans that make compliance straightforward.',
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80',
    imgAlt: 'Commercial fire risk assessment in office building',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL FRA',
    title: 'Why Your Business Needs a Fire Risk Assessment',
    items: [
      {
        icon: 'bi-scale',
        title: 'Legal Obligation',
        body: 'Under the Regulatory Reform (Fire Safety) Order 2005, all non-domestic premises must have a documented fire risk assessment carried out by a competent person.',
      },
      {
        icon: 'bi-people-fill',
        title: 'Protect Staff & Visitors',
        body: 'A thorough FRA identifies hazards that could endanger your employees, customers, and visitors, enabling you to implement effective controls before an incident occurs.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Requirement',
        body: 'Commercial insurance policies require an up-to-date fire risk assessment. An invalid FRA can result in claims being refused following a fire incident.',
      },
      {
        icon: 'bi-building-check',
        title: 'Business Continuity',
        body: 'Preventing fire incidents through proactive risk management protects your assets, operations, and reputation — reducing the risk of costly disruption to your business.',
      },
    ],
  },
  pricing: {
    title: 'Commercial FRA Pricing',
    body: 'Pricing is based on the size and complexity of your premises. Contact us for a tailored quote.',
    prices: [
      { label: 'Small Premises (Up to 500m²)',    price: 'From £149' },
      { label: 'Medium (500–2,000m²)',             price: 'From £299' },
      { label: 'Large / Complex Premises',         price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Fixed pricing. Travel surcharge may apply outside Greater London.',
  },
  propertyTypes: {
    title: 'Commercial Properties We Cover',
    subtitle: 'We provide fire risk assessments for all types of commercial and non-domestic premises across London.',
    items: [
      { icon: 'bi-building', title: 'Offices & Office Blocks', body: 'Fire risk assessments for single and multi-floor offices, business parks, and managed workspaces.' },
      { icon: 'bi-shop', title: 'Retail & Shopping', body: 'FRAs for retail units, shops, supermarkets, and shopping centre units.' },
      { icon: 'bi-gear-wide-connected', title: 'Warehouses & Industrial', body: 'Commercial fire risk assessments for warehouses, factories, and light industrial premises.' },
      { icon: 'bi-cup-hot-fill', title: 'Restaurants & Hospitality', body: 'FRAs for restaurants, cafes, bars, hotels, and event venues.' },
      { icon: 'bi-hospital', title: 'Healthcare & Education', body: 'Fire risk assessments for GP surgeries, dental practices, schools, and nurseries.' },
      { icon: 'bi-house-door-fill', title: 'HMOs & Mixed Use', body: 'FRAs for HMOs, mixed commercial and residential buildings, and purpose-built student accommodation.' },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'The Commercial Fire Risk Assessment Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Assessment', body: 'Contact us to discuss your premises and schedule a site visit at a time that causes minimal disruption to your operations.' },
      { icon: 'bi-search', title: 'Site Survey & Inspection', body: 'Our assessor inspects all areas of your premises, assessing fire hazards, means of escape, fire detection, suppression, and existing controls.' },
      { icon: 'bi-file-earmark-text-fill', title: 'Prioritised Report & Action Plan', body: 'A detailed, colour-coded FRA report is issued with findings classified by risk level and a clear, prioritised action plan.' },
    ],
  },
  related: [
    { icon: 'bi-bell-fill', title: 'Commercial Fire Alarm Certificate', body: 'Have your commercial fire alarm system serviced and certified to BS 5839-1 by our experienced engineers.', to: '/fire/commercial-fire-alarm' },
    { icon: 'bi-lightbulb-fill', title: 'Commercial Emergency Lights', body: 'Ensure your emergency lighting is tested and compliant with BS 5266-1 for your commercial premises.', to: '/fire/commercial-emergency-lights' },
    { icon: 'bi-door-closed-fill', title: 'Commercial Fire Door Inspection', body: 'Fire door inspections for offices, warehouses, hotels, and all commercial property types.', to: '/fire/commercial-fire-door' },
  ],
  faqs: FRA_FAQS,
  cta: 'Book Your Commercial Fire Risk Assessment Today – Protect Your Business!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL EMERGENCY LIGHTS CERTIFICATE
// ══════════════════════════════════════════════════════════════
export const COMM_EMERGENCY_LIGHTS = {
  hero: {
    title: 'Commercial Emergency Lights Certificate',
    subtitle: 'Emergency Lighting Testing & Certification for Offices, Retail, Warehouses & All Commercial Premises. BS 5266-1 Compliant.',
    price: 'From £99',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: 'BS 5266-1', label: 'Compliant Certification' },
    { value: 'All Commercial', label: 'Premises Covered' },
    { value: 'Same Day', label: 'Certificates Issued' },
  ],
  intro: {
    title: 'Commercial Emergency Lighting Testing & Certification',
    body: 'Emergency lighting is a fundamental fire safety requirement for all commercial premises. Under BS 5266-1 and the Regulatory Reform (Fire Safety) Order 2005, responsible persons must ensure emergency lighting is installed, tested, and maintained in all commercial buildings. Our engineers carry out annual full-duration discharge tests, monthly function tests, and issue BS 5266-1 compliant certificates for offices, retail units, warehouses, hotels, and all other commercial premises across London.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial emergency lighting inspection',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL EMERGENCY LIGHTING',
    title: 'Why Commercial Emergency Lighting Certification Matters',
    items: [
      {
        icon: 'bi-lightning-charge-fill',
        title: 'Ensures Safe Evacuation',
        body: 'Emergency lighting illuminates escape routes when the main power fails, enabling staff and customers to evacuate quickly and safely.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Compliance',
        body: 'BS 5266-1 and the Regulatory Reform (Fire Safety) Order 2005 require all commercial premises to have compliant, certified emergency lighting systems.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance Validity',
        body: 'Commercial insurers require evidence of regularly tested and certified emergency lighting. Operating without a current certificate may invalidate your policy.',
      },
      {
        icon: 'bi-tools',
        title: 'Preventive Maintenance',
        body: 'Annual testing identifies failing batteries, faulty fittings, and coverage gaps before they result in a non-compliant system in an emergency.',
      },
    ],
  },
  pricing: {
    title: 'Commercial Emergency Lighting Pricing',
    body: 'Transparent pricing for commercial emergency lighting testing and certification based on the number of fittings.',
    prices: [
      { label: 'Up to 10 Fittings',               price: 'From £99' },
      { label: '11–30 Fittings',                   price: 'From £179' },
      { label: '31+ Fittings (Large Premises)',     price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Fixed pricing. Parking and congestion zone charges may apply.',
  },
  whatsCovered: {
    title: "What's Included in Commercial Emergency Lighting Testing?",
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80',
    items: [
      { label: 'Full 3-Hour Discharge Test', text: 'Each emergency luminaire is tested for the full 3-hour discharge period required by BS 5266-1.' },
      { label: 'Fitting Condition Check', text: 'Visual inspection of all emergency fittings for damage, corrosion, or obstructions affecting performance.' },
      { label: 'Exit Sign & Signage Audit', text: 'Verification that all emergency exit signs are present, correctly positioned, and visible from all angles.' },
      { label: 'Coverage Assessment', text: 'Checking that all escape routes, stairwells, and exit points are adequately covered by the emergency lighting system.' },
      { label: 'BS 5266-1 Certificate', text: 'A full compliance certificate is issued, listing all fittings tested, pass/fail status, and any remedial recommendations.' },
    ],
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Commercial Emergency Lighting Test – What to Expect',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Test', body: 'Schedule your annual test at a time convenient for your business. We can work outside of trading hours to minimise disruption.' },
      { icon: 'bi-lightbulb-fill', title: 'Full Duration Test', body: 'Our engineer carries out a full 3-hour discharge test on each emergency fitting, documenting pass/fail results throughout.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate Issued', body: 'Your BS 5266-1 compliant emergency lighting certificate is issued on the day or digitally within 24 hours.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Commercial Fire Risk Assessment', body: 'A commercial FRA will include emergency lighting as part of a full fire safety evaluation of your premises.', to: '/fire/commercial-fra' },
    { icon: 'bi-bell-fill', title: 'Commercial Fire Alarm Certificate', body: 'Combine your emergency lighting test with a commercial fire alarm service for a complete fire safety compliance visit.', to: '/fire/commercial-fire-alarm' },
    { icon: 'bi-door-closed-fill', title: 'Commercial Fire Door Inspection', body: 'Ensure all fire doors in your commercial premises are inspected and certified.', to: '/fire/commercial-fire-door' },
  ],
  faqs: EMERGENCY_LIGHTS_FAQS,
  cta: 'Book Your Commercial Emergency Lights Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL FIRE ALARM CERTIFICATE
// ══════════════════════════════════════════════════════════════
export const COMM_FIRE_ALARM = {
  hero: {
    title: 'Commercial Fire Alarm Certificate',
    subtitle: 'Fire Alarm System Servicing, Testing & Certification for Offices, Retail, Warehouses & All Commercial Premises. BS 5839-1 Compliant.',
    price: 'From £149',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&q=80',
  },
  stats: [
    { value: 'BS 5839-1', label: 'Compliant Servicing' },
    { value: 'All Systems', label: 'Categories Covered' },
    { value: 'Certificates', label: 'Issued Same Day' },
  ],
  intro: {
    title: 'Commercial Fire Alarm Servicing & Certification',
    body: 'A reliable fire alarm system is the cornerstone of fire safety in any commercial premises. Under BS 5839-1 and the Regulatory Reform (Fire Safety) Order 2005, commercial fire alarm systems must be inspected and serviced by a competent engineer at least twice per year. Our engineers service, test, and certify all categories of commercial fire alarm systems — from conventional zone-based systems to full addressable and wireless systems — across London.',
    imgSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    imgAlt: 'Commercial fire alarm panel service',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL FIRE ALARM',
    title: 'Why Your Business Needs Regular Fire Alarm Servicing',
    items: [
      {
        icon: 'bi-bell-fill',
        title: 'Mandatory Early Warning',
        body: 'A maintained commercial fire alarm ensures immediate warning across your entire premises in the event of a fire, enabling safe evacuation and emergency service response.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Compliance',
        body: 'BS 5839-1 requires commercial fire alarm systems to be serviced at least twice yearly by a competent person, with service records maintained.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance & Licensing',
        body: 'A current fire alarm service certificate is required by commercial insurers and regulators. Failure to maintain records can invalidate insurance coverage.',
      },
      {
        icon: 'bi-tools',
        title: 'Reduce False Alarms',
        body: 'Regular servicing and calibration reduces nuisance false alarms that disrupt operations and risk desensitising staff to alarm activations.',
      },
    ],
  },
  pricing: {
    title: 'Commercial Fire Alarm Certificate Pricing',
    body: 'Pricing based on system type and number of detection points. We offer service contracts for ongoing compliance.',
    prices: [
      { label: 'Conventional (Up to 4 Zones)',    price: 'From £149' },
      { label: 'Addressable (Up to 50 Devices)',   price: 'From £249' },
      { label: 'Large / Complex Systems',          price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Fixed pricing per service visit. Bi-annual servicing contracts available at reduced rates.',
  },
  whatsCovered: {
    title: "What's Included in a Commercial Fire Alarm Service?",
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=700&q=80',
    items: [
      { label: 'Control Panel Inspection', text: 'Full inspection of the fire alarm control panel, power supply, battery backup, and all indicators and outputs.' },
      { label: 'Detector Testing', text: 'All smoke, heat, and specialist detectors are individually tested for correct operation and sensitivity.' },
      { label: 'Manual Call Points', text: 'Testing of all break glass manual call points to confirm correct activation and zone indication.' },
      { label: 'Sounders & Beacons', text: 'All sounders, bells, and visual alarm devices are tested to confirm correct activation and sufficient coverage.' },
      { label: 'Interface & Integration', text: 'Checking interfaces with door holders, suppression systems, and building management systems where present.' },
      { label: 'BS 5839-1 Service Certificate', text: 'A full service certificate is issued, documenting all test results, system condition, and any recommended remedial work.' },
    ],
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Commercial Fire Alarm Service – What to Expect',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Service', body: 'Schedule a convenient visit. We recommend bi-annual servicing and can set up a maintenance contract to keep you on track.' },
      { icon: 'bi-bell-fill', title: 'Full System Service', body: 'Our engineer tests every detector, call point, sounder, and panel function, cleaning and adjusting components as required.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate & Report Issued', body: 'A BS 5839-1 compliant service certificate is issued on the day, with a full record of all devices tested and their condition.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Commercial Fire Risk Assessment', body: 'A commercial FRA provides the complete fire safety audit your premises needs alongside a certified alarm service.', to: '/fire/commercial-fra' },
    { icon: 'bi-lightbulb-fill', title: 'Commercial Emergency Lights', body: 'Ensure emergency lighting is tested and compliant throughout your commercial premises.', to: '/fire/commercial-emergency-lights' },
    { icon: 'bi-door-closed-fill', title: 'Commercial Fire Door Inspection', body: 'Complete your commercial fire safety compliance with a certified fire door inspection.', to: '/fire/commercial-fire-door' },
  ],
  faqs: FIRE_ALARM_FAQS,
  cta: 'Book Your Commercial Fire Alarm Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// COMMERCIAL FIRE DOOR INSPECTION
// ══════════════════════════════════════════════════════════════
export const COMM_FIRE_DOOR = {
  hero: {
    title: 'Commercial Fire Door Inspection Certificate',
    subtitle: 'Fire Door Inspection & Certification for Offices, Hotels, Schools, Care Homes & All Commercial Buildings Across London.',
    price: 'From £89',
    ctaText: 'Get a Quote',
    ctaSecText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&q=80',
  },
  stats: [
    { value: 'FDIS', label: 'Qualified Inspectors' },
    { value: 'BS 9999', label: 'Compliant Reports' },
    { value: 'All Door', label: 'Types Covered' },
  ],
  intro: {
    title: 'Commercial Fire Door Inspection & Certification',
    body: 'Fire doors are a critical element of compartmentation in commercial buildings, containing fire and smoke and maintaining the integrity of escape routes. The Regulatory Reform (Fire Safety) Order 2005 and BS 9999 require responsible persons to ensure all fire doors in commercial premises are regularly inspected and maintained by competent inspectors. Our FDIS-qualified engineers carry out thorough inspections and issue detailed certificates for offices, hotels, schools, care homes, warehouses, and all commercial property types across London.',
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    imgAlt: 'Commercial fire door inspection',
    ctaText: 'Get a Quote',
    imgRight: true,
  },
  benefits: {
    label: 'COMMERCIAL FIRE DOOR INSPECTION',
    title: 'Why Commercial Fire Door Inspections Are Essential',
    items: [
      {
        icon: 'bi-door-closed-fill',
        title: 'Critical Compartmentation',
        body: 'Compliant fire doors contain fire and smoke for 30–120 minutes, protecting escape routes and limiting damage to your building and assets.',
      },
      {
        icon: 'bi-scale',
        title: 'Legal Requirement',
        body: 'The Regulatory Reform (Fire Safety) Order 2005 and BS 9999 require responsible persons to ensure fire doors are maintained and regularly inspected by a competent person.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Protect Staff & Visitors',
        body: 'A non-compliant fire door can fail in minutes during a fire, putting lives at risk and exposing your business to prosecution and civil liability.',
      },
      {
        icon: 'bi-file-earmark-lock-fill',
        title: 'Insurance & Compliance Records',
        body: 'A detailed inspection certificate provides the documented evidence of compliance required by commercial insurers, fire authorities, and local councils.',
      },
    ],
  },
  pricing: {
    title: 'Commercial Fire Door Inspection Pricing',
    body: 'Competitive pricing for commercial fire door inspections. Volume discounts available for large portfolios.',
    prices: [
      { label: 'Single Door Inspection',          price: 'From £89' },
      { label: '2–20 Doors (Per Door)',            price: 'From £59' },
      { label: '21+ Doors / Large Premises',       price: 'POA' },
    ],
    ctaText: 'Get a Quote',
    disclaimer: '* Fixed pricing. Parking and congestion zone charges may apply.',
  },
  whatsCovered: {
    title: 'What Does a Commercial Fire Door Inspection Assess?',
    imgSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    items: [
      { label: 'Door Leaf & Frame Integrity', text: 'Checking the door leaf and frame for damage, warping, gaps, or modifications that would compromise fire resistance performance.' },
      { label: 'Intumescent & Smoke Seals', text: 'Verifying all intumescent strips and cold smoke seals are present, undamaged, and correctly fitted throughout the door perimeter.' },
      { label: 'Self-Closer Performance', text: 'Testing door closers and hold-open devices to confirm the door latches fully from any open position.' },
      { label: 'Ironmongery & Hinges', text: 'Assessment of all hinges, latches, locks, panic hardware, and other ironmongery for fire-rating compliance.' },
      { label: 'Glazing & Vision Panels', text: 'Verification that all glazed panels are fire-rated and installed with appropriate intumescent glazing seals.' },
      { label: 'Certification Mark', text: 'Checking for a valid CE, UKCA, or approved third-party certification mark confirming the door\'s fire performance rating.' },
    ],
    ctaText: 'Get a Quote',
    imgRight: false,
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Commercial Fire Door Inspection – The Process',
    steps: [
      { icon: 'bi-calendar-check', title: 'Book Your Inspection', body: 'Contact us to schedule a visit. Provide the number and type of fire doors so we can plan the inspection efficiently.' },
      { icon: 'bi-door-open-fill', title: 'Full Door-by-Door Assessment', body: 'Our FDIS-qualified inspector assesses each fire door against BS 9999 requirements, recording findings for each individual door.' },
      { icon: 'bi-file-earmark-check-fill', title: 'Certificate & Report Issued', body: 'An individual certificate is issued for each door, with a summary report for the premises detailing all findings and recommended remedial work.' },
    ],
  },
  propertyTypes: {
    title: 'Commercial Buildings We Inspect',
    subtitle: 'We provide fire door inspection certificates for all types of commercial and public buildings across London.',
    items: [
      { icon: 'bi-building', title: 'Offices & Office Blocks', body: 'Fire door inspections for single and multi-floor commercial offices and managed workspaces.' },
      { icon: 'bi-hospital', title: 'Care Homes & Healthcare', body: 'Mandatory fire door inspections for care homes, hospitals, GP surgeries, and dental practices.' },
      { icon: 'bi-mortarboard', title: 'Schools & Education', body: 'Fire door compliance inspections for schools, colleges, universities, and nurseries.' },
      { icon: 'bi-buildings', title: 'Hotels & Hospitality', body: 'Fire door inspections for hotels, serviced apartments, hostels, and event venues.' },
      { icon: 'bi-gear-wide-connected', title: 'Warehouses & Industrial', body: 'Industrial fire door inspections for warehouses, factories, and distribution centres.' },
      { icon: 'bi-shop', title: 'Retail & Leisure', body: 'Fire door certification for retail units, shopping centres, gyms, and leisure facilities.' },
    ],
  },
  related: [
    { icon: 'bi-clipboard-check', title: 'Commercial Fire Risk Assessment', body: 'A full FRA will identify all fire door-related deficiencies as part of a complete fire safety assessment.', to: '/fire/commercial-fra' },
    { icon: 'bi-bell-fill', title: 'Commercial Fire Alarm Certificate', body: 'Pair your fire door inspection with a certified fire alarm service for full commercial fire safety compliance.', to: '/fire/commercial-fire-alarm' },
    { icon: 'bi-lightbulb-fill', title: 'Commercial Emergency Lights', body: 'Ensure your emergency lighting is tested and compliant on all escape routes.', to: '/fire/commercial-emergency-lights' },
  ],
  faqs: FIRE_DOOR_FAQS,
  cta: 'Book a Commercial Fire Door Inspection Certificate Today!',
};

// ══════════════════════════════════════════════════════════════
// FIRE SAFETY CHECK
// ══════════════════════════════════════════════════════════════
export const FIRE_SAFETY_CHECK = {
  hero: {
    title: 'Fire Safety Certificate Check London',
    subtitle: 'Professional fire safety inspections and certificates for residential properties. Document that your property meets fire safety standards with expert assessment.',
    price: 'From £69.99',
    ctaText: 'Book Now',
    ctaTo: '/book-now',
    bgImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  stats: [
    { value: '£69.99', label: 'Starting Price' },
    { value: 'Comprehensive', label: 'Property Assessment' },
    { value: 'Clear', label: 'Recommendations' },
    { value: 'Insurance', label: 'Compatible' },
  ],
  intro: {
    title: 'Fire Safety Certificate Service',
    body: 'Professional fire safety assessment documenting that your property meets fire safety standards. Our inspections identify fire hazards and provide clear recommendations for improving safety without requiring major property modifications.',
    checklist: [
      'Comprehensive property fire hazard assessment',
      'Clear recommendations for safety improvements',
      'Insurance and compliance documentation',
      'Professional certificate issued on completion',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80',
    imgAlt: 'Fire safety inspection',
    imgRight: true,
  },
  benefits: {
    label: 'FIRE SAFETY BENEFITS',
    title: 'Why Professional Fire Safety Checks Matter',
    items: [
      {
        icon: 'bi-exclamation-triangle-fill',
        title: 'Hazard Identification',
        body: 'Professional assessment identifies fire hazards such as blocked exits, missing fire barriers, or inadequate escape routes that may not be obvious.',
      },
      {
        icon: 'bi-shield-fill-check',
        title: 'Insurance Compliance',
        body: 'Fire safety certificates support insurance requirements and demonstrate your commitment to property safety compliance.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Regulatory Alignment',
        body: 'Assessment checks alignment with fire safety regulations and building standards for residential properties.',
      },
      {
        icon: 'bi-lightbulb-fill',
        title: 'Practical Recommendations',
        body: 'Clear, actionable recommendations to improve fire safety without requiring expensive major property modifications.',
      },
    ],
  },
  pricing: {
    title: 'Fire Safety Check Pricing',
    body: 'Competitive transparent pricing for professional fire safety inspections.',
    prices: [
      {
        label: 'Fire Safety Certificate',
        price: '£69.99',
        features: [
          'Professional assessment',
          'Comprehensive inspection',
          'Safety recommendations',
          'Digital certificate',
        ],
      },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Fire Safety Check Process',
    steps: [
      {
        icon: 'bi-search',
        title: 'Property Assessment',
        body: 'Professional inspector conducts thorough walkthrough of your property assessing fire hazards and safety features.',
      },
      {
        icon: 'bi-door-open',
        title: 'Exit Routes Inspection',
        body: 'Evaluation of escape routes, exit doors, stairwells, and accessibility to ensure occupants can evacuate safely.',
      },
      {
        icon: 'bi-fire',
        title: 'Fire Prevention Features',
        body: 'Check of fire extinguishers, alarm systems, emergency lighting, smoke detection, and fire-resistant materials.',
      },
      {
        icon: 'bi-file-earmark-check-fill',
        title: 'Certificate & Recommendations',
        body: 'You receive fire safety certificate with clear recommendations for improving safety compliance and risk reduction.',
      },
    ],
  },
  related: [
    {
      icon: 'bi-exclamation-diamond',
      title: 'Fire Risk Assessment',
      body: 'Comprehensive FRA with detailed hazard analysis and prioritized action plans for fire safety improvements.',
      to: '/fire/residential-fra',
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Emergency Lighting',
      body: 'Installation and certification of emergency lighting systems for safe evacuation.',
      to: '/fire/residential-emergency-lights',
    },
    {
      icon: 'bi-bell-fill',
      title: 'Fire Alarm Certificate',
      body: 'Professional fire alarm system testing and certification for residential properties.',
      to: '/fire/residential-fire-alarm',
    },
  ],
  faqs: [
    {
      q: 'What does a fire safety check include?',
      a: 'Assessment of fire hazards, exit routes, emergency lighting, fire extinguishers, alarms, smoke detection, and escape route accessibility.',
    },
    {
      q: 'Why do I need a fire safety certificate?',
      a: 'Fire safety certificates document that your property has been professionally assessed. Insurance companies often require them for coverage.',
    },
    {
      q: 'What happens if fire safety issues are found?',
      a: 'Issues are documented with recommendations for improvement. Simple fixes like clearing exit blockages can often be resolved immediately.',
    },
    {
      q: 'Do I need fire safety checks every year?',
      a: 'For residential properties, periodic checks are recommended. We can advise on appropriate frequency based on your property and circumstances.',
    },
    {
      q: 'Is the inspection non-invasive?',
      a: 'Yes, fire safety assessments are completely non-invasive. We inspect without causing damage or disruption to your property.',
    },
  ],
  cta: 'Get Your Fire Safety Certificate Today',
};

// ══════════════════════════════════════════════════════════════
// FIRE RISK ASSESSMENT & ASBESTOS REPORT
// ══════════════════════════════════════════════════════════════
export const FIRE_RISK_ASBESTOS = {
  hero: {
    title: 'Fire Risk Assessment and Asbestos Report Combined Service',
    subtitle: 'Comprehensive property safety assessment combining fire risk evaluation with asbestos identification. Complete documentation for compliance and hazard management.',
    price: 'Contact for Quote',
    ctaText: 'Get a Quote',
    ctaTo: '/book-now',
    bgImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1600&q=80',
  },
  stats: [
    { value: 'Dual', label: 'Assessment Service' },
    { value: 'Complete', label: 'Safety Documentation' },
    { value: 'Expert', label: 'Analysis' },
    { value: 'Action', label: 'Plans Provided' },
  ],
  intro: {
    title: 'Fire Risk Assessment and Asbestos Combined Service',
    body: 'Comprehensive property hazard assessment combining fire risk evaluation with asbestos identification. A single integrated report documenting both safety concerns provides cost-effective compliance coverage for your property.',
    checklist: [
      'Combined fire and asbestos assessment',
      'Integrated comprehensive reporting',
      'Prioritized remedial action planning',
      'Single site visit reduces disruption',
    ],
    imgSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    imgAlt: 'Property assessment and inspection',
    imgRight: false,
  },
  benefits: {
    label: 'COMBINED ASSESSMENT BENEFITS',
    title: 'Fire Risk and Asbestos Assessment',
    items: [
      {
        icon: 'bi-check-circle-fill',
        title: 'Comprehensive Safety Assessment',
        body: 'Combined assessment covers both fire safety and asbestos hazards in a single visit, reducing disruption and providing complete documentation.',
      },
      {
        icon: 'bi-currency-pound',
        title: 'Cost Efficiency',
        body: 'Combined service is significantly more cost-effective than booking separate fire risk and asbestos assessments at different times.',
      },
      {
        icon: 'bi-file-earmark',
        title: 'Integrated Documentation',
        body: 'Single comprehensive report covering both hazard types with prioritized action plan addressing fire and asbestos risks.',
      },
      {
        icon: 'bi-lightbulb-fill',
        title: 'Risk Identification',
        body: 'Expert assessment identifies both fire safety hazards and asbestos-containing materials requiring management or remediation.',
      },
    ],
  },
  process: {
    label: 'HOW IT WORKS',
    title: 'Combined Assessment Process',
    steps: [
      {
        icon: 'bi-building',
        title: 'Property Overview',
        body: 'Initial assessment of building structure, construction period, and materials which informs asbestos likelihood and fire risk profile.',
      },
      {
        icon: 'bi-fire',
        title: 'Fire Risk Inspection',
        body: 'Comprehensive fire hazard assessment identifying sources, escape routes, and existing safety controls throughout the property.',
      },
      {
        icon: 'bi-exclamation-triangle',
        title: 'Asbestos Assessment',
        body: 'Survey for asbestos-containing materials in insulation, pipe wrapping, flooring, and other common locations within the building.',
      },
      {
        icon: 'bi-graph-up',
        title: 'Risk Analysis',
        body: 'Both fire and asbestos hazards evaluated for severity and prioritized by risk level for action planning.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Comprehensive Report',
        body: 'Integrated report documenting fire risks, asbestos findings, risk ratings, and prioritized action plan for both hazards.',
      },
    ],
  },
  related: [
    {
      icon: 'bi-exclamation-diamond',
      title: 'Fire Risk Assessment',
      body: 'Standalone Fire Risk Assessment with detailed hazard analysis and action planning.',
      to: '/fire/residential-fra',
    },
    {
      icon: 'bi-warning',
      title: 'Asbestos Survey',
      body: 'Detailed asbestos identification and testing with professional guidance on management.',
      to: '/book-now',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Fire Safety Check',
      body: 'Professional fire safety inspection and certification for residential properties.',
      to: '/fire/fire-safety-check',
    },
  ],
  faqs: [
    {
      q: 'Why combine fire risk assessment with asbestos report?',
      a: 'Combined assessment is efficient and cost-effective, providing comprehensive safety documentation addressing multiple hazards in a single property visit.',
    },
    {
      q: 'What if asbestos is found?',
      a: 'Report identifies asbestos locations and condition. Further testing or management decisions depend on type and current condition of materials.',
    },
    {
      q: 'Can you remove asbestos?',
      a: 'Our assessment identifies asbestos locations and condition. Removal requires specialized licensed contractors. We can recommend appropriate removal services.',
    },
    {
      q: 'How do fire safety and asbestos assessments differ?',
      a: 'Fire assessment focuses on hazard identification and emergency response. Asbestos assessment identifies materials and evaluates exposure risk.',
    },
    {
      q: 'What if multiple high-risk issues are found?',
      a: 'Both hazards are documented with recommendations prioritized by risk level. We guide you through addressing critical issues first.',
    },
  ],
  cta: 'Schedule Your Combined Fire Risk and Asbestos Assessment',
};
