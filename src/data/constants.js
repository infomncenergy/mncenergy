// ── Brand constants ──────────────────────────────────────────
export const COMPANY_NAME = "MNC Energy";
export const PHONE        = "+44 7345 158783";
export const PHONE_HREF   = "tel:+447345158783";
export const EMAIL        = "Info@mncenergy.co.uk";
export const EMAIL_HREF   = "mailto:Info@mncenergy.co.uk";
export const WHATSAPP     = "447345158783";
export const COMPANY_NUM  = "16255515";
export const ADDRESS      = "London & M25 Area, United Kingdom";
export const WEBSITE      = "mncenergyltd.com";

// ── Navigation structure ──────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Electrical",
    path: "/electrical",
    columns: [
      {
        title: "Residential",
        items: [
          { label: "EICR Certificate",      path: "/electrical/residential-eicr" },
          { label: "EIC Certificate",       path: "/electrical/residential-eic" },
          { label: "Fuse Box Replacement",  path: "/electrical/residential-fuse-box" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { label: "EICR Certificate",      path: "/electrical/commercial-eicr" },
          { label: "EIC Certificate",       path: "/electrical/commercial-eic" },
          { label: "Fuse Box Replacement",  path: "/electrical/commercial-fuse-box" },
        ],
      },
    ],
  },
  {
    label: "Gas Services",
    path: "/gas",
    columns: [
      {
        title: "Residential",
        items: [
          { label: "Landlord Gas Safety (CP12)", path: "/gas/landlord-gas-safety" },
          { label: "Homeowner Gas Safety",       path: "/gas/homeowner-gas-safety" },
          { label: "Boiler Service",             path: "/gas/boiler-service" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { label: "Commercial Boiler (CP15)",   path: "/gas/commercial-boiler-cp15" },
          { label: "Installation Testing (CP16)",path: "/gas/commercial-installation-cp16" },
          { label: "Safety Report (CP17)",       path: "/gas/commercial-safety-report-cp17" },
          { label: "Catering Gas Safety (CP42)", path: "/gas/commercial-catering-cp42" },
        ],
      },
    ],
  },
  {
    label: "Fire Services",
    path: "/fire",
    columns: [
      {
        title: "Residential",
        items: [
          { label: "Fire Risk Assessment",   path: "/fire/residential-fra" },
          { label: "Emergency Lights",       path: "/fire/residential-emergency-lights" },
          { label: "Fire Alarm Certificate", path: "/fire/residential-fire-alarm" },
          { label: "Fire Door Inspection",   path: "/fire/residential-fire-door" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { label: "Fire Risk Assessment",   path: "/fire/commercial-fra" },
          { label: "Emergency Lights",       path: "/fire/commercial-emergency-lights" },
          { label: "Fire Alarm Certificate", path: "/fire/commercial-fire-alarm" },
          { label: "Fire Door Inspection",   path: "/fire/commercial-fire-door" },
        ],
      },
    ],
  },
  {
    label: "Asbestos",
    path: "/asbestos",
    columns: [
      { title: "Residential", items: [{ label: "Residential Asbestos Survey", path: "/asbestos/residential" }] },
      { title: "Commercial",  items: [{ label: "Commercial Asbestos Survey",  path: "/asbestos/commercial" }] },
    ],
  },
  {
    label: "EPC",
    path: "/epc",
    columns: [
      { title: "Residential", items: [{ label: "Residential EPC", path: "/epc/residential" }] },
      { title: "Commercial",  items: [{ label: "Commercial EPC",  path: "/epc/commercial" }] },
    ],
  },
];
