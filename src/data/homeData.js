// ── Home page data ────────────────────────────────────────────

export const WHY_ITEMS = [
  {
    icon: "bi-patch-check-fill",
    title: "Certified Professionals",
    body: "Our team consists of fully qualified and experienced engineers, dedicated to ensuring your property's safety.",
  },
  {
    icon: "bi-tags-fill",
    title: "Transparent Pricing Plans",
    body: "We offer competitive pricing with clear, detailed plans for each service to fit your budget and needs.",
  },
  {
    icon: "bi-calendar-check-fill",
    title: "Fast and Flexible Scheduling",
    body: "We accommodate your schedule with flexible availability, minimising disruption to you and your tenants.",
  },
  {
    icon: "bi-file-earmark-check-fill",
    title: "Fast Certificate Delivery",
    body: "Receive your digital safety certificate within 24–48 hours of inspection, keeping you fully compliant without delay.",
  },
];

export const SERVICES = [
  {
    icon: "bi-lightning-charge-fill",
    title: "Electrical Services",
    desc: "EICR certificates, consumer unit upgrades, PAT testing, and fault finding by certified engineers across London.",
    links: [
      { label: "EICR Certificate",    to: "/electrical/residential-eicr" },
      { label: "PAT Testing",         to: "/electrical/pat-testing" },
      { label: "Fault Finding",       to: "/electrical/fault-finding" },
      { label: "Fuse Box Upgrade",    to: "/electrical/residential-fuse-box" },
    ],
  },
  {
    icon: "bi-fire",
    title: "Gas Services",
    desc: "Landlord gas safety certificates, boiler service, installation, and repair by certified gas engineers.",
    links: [
      { label: "Landlord Gas Safety (CP12)", to: "/gas/landlord-gas-safety" },
      { label: "Commercial Gas Safety",      to: "/gas/commercial-gas-safety" },
      { label: "Boiler Service",             to: "/gas/boiler-service" },
      { label: "Boiler Installation",        to: "/gas/boiler-installation" },
    ],
  },
  {
    icon: "bi-shield-fill-check",
    title: "Fire Safety Services",
    desc: "Fire risk assessments, alarm certification, emergency lighting, fire door inspection, and extinguisher servicing.",
    links: [
      { label: "Fire Risk Assessment",    to: "/fire/residential-fra" },
      { label: "Fire Alarm Certificate",  to: "/fire/residential-fire-alarm" },
      { label: "Emergency Lights",        to: "/fire/residential-emergency-lights" },
      { label: "Fire Extinguisher",       to: "/fire/fire-extinguisher" },
    ],
  },
  {
    icon: "bi-binoculars-fill",
    title: "Asbestos Survey",
    desc: "Professional asbestos surveys and management plans for residential and commercial properties by accredited surveyors.",
    links: [
      { label: "Residential Survey", to: "/asbestos/residential" },
      { label: "Commercial Survey",  to: "/asbestos/commercial" },
    ],
  },
  {
    icon: "bi-house-fill",
    title: "EPC Certificate",
    desc: "Energy Performance Certificates required for selling or renting property, rated A–G to indicate energy efficiency.",
    links: [
      { label: "Residential EPC", to: "/epc/residential" },
      { label: "Commercial EPC",  to: "/epc/commercial" },
    ],
  },
];

export const PACKAGES = [
  {
    name: "Electric Check + PAT",
    save: "You Save £50.99",
    price: "£129",
    vat: "Incl. VAT",
    items: [
      "EICR (Electrical Check For Up To 3-Bed)",
      "PAT Testing (Up To 10 Appliances)",
      "Perfect For Smaller Homes And Flats",
    ],
  },
  {
    name: "HMO Safety Check",
    save: "You Save Over £90",
    price: "£189",
    vat: "Incl. VAT",
    items: [
      "EICR",
      "PAT Testing",
      "Fire Alarm Test",
      "Emergency Lighting Test",
      "Ideal For HMOs And Shared Houses",
    ],
  },
  {
    name: "Gas + Electric (2 Visits)",
    save: "You Save £40.97",
    price: "£199",
    vat: "Incl. VAT",
    items: [
      "EICR",
      "PAT Testing",
      "Gas Safety Certificate (CP12)",
      "Perfect For Smaller Homes And Flats",
    ],
  },
  {
    name: "Full Property Bundle",
    save: "You Save £50.99",
    price: "£289",
    vat: "Incl. VAT",
    items: [
      "EICR",
      "PAT Testing",
      "Fire Alarm Test",
      "Emergency Lighting",
      "Gas Safety Certificate",
      "EPC (Energy Performance Certificate)",
      "Best For HMOs, Licensing, And New Lets",
    ],
  },
];

export const REVIEWS = [
  {
    name: "Alex White",
    date: "1 year ago",
    color: "#6c63ff",
    text: "I found them to be very professional and efficient. Each individual with whom I spoke on the phone was as helpful as the last. Highly recommend!",
  },
  {
    name: "Abdul Shuyeb",
    date: "1 year ago",
    color: "#e67e22",
    text: "Aiman was very helpful today whilst doing my certificate checks. Would recommend!",
  },
  {
    name: "Paril Patel",
    date: "1 year ago",
    color: "#27ae60",
    text: "Quick and efficient bookings. Very satisfied with the service provided.",
  },
  {
    name: "Atif Ali",
    date: "1 year ago",
    color: "#6c63ff",
    text: "Brilliant customer service by Aiman. The team was very responsive and professional.",
  },
  {
    name: "Mosaic Holdings",
    date: "4 days ago",
    color: "#e74c3c",
    text: "Had a top-notch experience with these guys, especially Ibrahim, for our EICR testing across our 3 flats. Really responsive over WhatsApp and email. Highly recommended!",
  },
];

export const HOME_FAQS = [
  {
    q: "What is an EICR Certificate?",
    a: "An EICR (Electrical Installation Condition Report) is a comprehensive safety inspection that assesses the condition of a property's electrical installations. It ensures compliance with BS 7671 and UK regulations, helping identify potential hazards such as faulty wiring, overloaded circuits, or unsafe connections. The report is carried out by a qualified electrician and is essential for ensuring the ongoing safety and legal compliance of a property's electrical system — especially for landlords, homeowners, and businesses.",
  },
  {
    q: "How often is a Gas Safety Certificate needed?",
    a: "Landlords are legally required to have a Gas Safety Certificate (CP12) renewed every 12 months. The certificate must be issued by a Gas Safe registered engineer and provided to existing tenants within 28 days of the inspection, and to new tenants before they move in. Homeowners are not legally required to hold one, but annual checks are strongly recommended for safety.",
  },
  {
    q: "What services can I bundle together?",
    a: "We offer a range of bundle packages that combine multiple safety certificates in a single visit, saving you both time and money. Popular bundles include EICR + Gas Safety (CP12), EICR + PAT Testing, and our Full Property Bundle which includes EICR, Gas Safety, Fire Alarm Test, Emergency Lighting, and EPC. Contact us or visit our packages section to find the right combination for your property.",
  },
  {
    q: "Do you offer emergency services?",
    a: "Yes — we offer fast emergency appointments across London for most of our services. If you have an urgent compliance requirement, a tenant moving in, or a letting agent deadline, call us directly on 0800 048 7030 and our team will do everything possible to arrange an emergency slot with a local engineer.",
  },
  {
    q: "What is PAT Testing, and is it required for landlords?",
    a: "PAT (Portable Appliance Testing) involves inspecting and testing electrical appliances to ensure they are safe to use. While there is no specific law requiring landlords to carry out PAT testing, the Health and Safety at Work Act 1974 and the Landlord and Tenant Act 1985 require that all electrical appliances supplied are safe. Most lettings agents and HMO licensing authorities expect a current PAT test certificate. We recommend annual testing for furnished rental properties.",
  },
  {
    q: "How quickly can I get a Gas Safety Certificate after booking?",
    a: "We offer flexible scheduling with fast appointments available across London. Our certified gas engineers carry out the inspection at your property, and your digital CP12 Gas Safety Certificate is issued within 24–48 hours of the completed inspection — sent directly to your email.",
  },
  {
    q: "What is included in a Fire Safety Certificate?",
    a: "A fire safety certificate covers a full assessment of your property's fire safety provisions, including escape routes and means of escape, fire detection and alarm systems, emergency lighting, fire-fighting equipment, fire doors, and overall fire risk management procedures. For HMOs and commercial properties, a formal Fire Risk Assessment report is produced with a prioritised action plan for any identified hazards.",
  },
];
