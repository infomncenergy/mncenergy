// ── Brand constants ──────────────────────────────────────────
export const PHONE      = "0800 048 7030";
export const PHONE_HREF = "tel:08000487030";
export const WHATSAPP   = "https://wa.me/441234567890";
export const COMPANY_NUM = "16255515";
export const ADDRESS    = "Lynx House, Ferndown, Northwood, England, HA6 1PQ";

// ── Navigation structure ──────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Electrical Certificates",
    path: "/electrical",
    columns: [
      {
        title: "Residential",
        items: [
          { label: "EICR",               path: "/electrical/residential-eicr" },
          { label: "EIC",                path: "/electrical/residential-eic" },
          { label: "Fuse Box Replacement",path: "/electrical/residential-fuse-box" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { label: "EICR",               path: "/electrical/commercial-eicr" },
          { label: "EIC",                path: "/electrical/commercial-eic" },
          { label: "Fuse Box Replacement",path: "/electrical/commercial-fuse-box" },
        ],
      },
    ],
  },
  {
    label: "Gas Services",
    path: "/gas",
    columns: [
      {
        title: "Residential Certificates",
        items: [
          { label: "Landlord Gas Safety Certificate (CP12)", path: "/gas/landlord-gas-safety" },
          { label: "Homeowner Gas Safety Certificate",       path: "/gas/homeowner-gas-safety" },
          { label: "Boiler Service",                         path: "/gas/boiler-service" },
        ],
      },
      {
        title: "Commercial Certificates",
        items: [
          { label: "Commercial Boiler Gas Safety (CP15)",         path: "/gas/commercial-boiler-cp15" },
          { label: "Gas Installation Testing & Purging (CP16)",   path: "/gas/commercial-installation-cp16" },
          { label: "Gas Installation Safety Report (CP17)",       path: "/gas/commercial-safety-report-cp17" },
          { label: "Catering Gas Safety Certificate (CP42)",      path: "/gas/commercial-catering-cp42" },
        ],
      },
    ],
  },
  {
    label: "Fire Services",
    path: "/fire",
    columns: [
      {
        title: "Residential Certificates",
        items: [
          { label: "Fire Risk Assessment (FRA)",   path: "/fire/residential-fra" },
          { label: "Emergency Lights Certificate", path: "/fire/residential-emergency-lights" },
          { label: "Fire Alarm Certificate",       path: "/fire/residential-fire-alarm" },
          { label: "Fire Door Certificate",        path: "/fire/residential-fire-door" },
        ],
      },
      {
        title: "Commercial Certificates",
        items: [
          { label: "Fire Risk Assessment (FRA)",   path: "/fire/commercial-fra" },
          { label: "Emergency Lights Certificate", path: "/fire/commercial-emergency-lights" },
          { label: "Fire Alarm Certificate",       path: "/fire/commercial-fire-alarm" },
          { label: "Fire Door Certificate",        path: "/fire/commercial-fire-door" },
        ],
      },
    ],
  },
  {
    label: "Asbestos",
    path: "/asbestos",
    columns: [
      { title: "Residential", items: [{ label: "Asbestos Residential", path: "/asbestos/residential" }] },
      { title: "Commercial",  items: [{ label: "Asbestos Commercial",  path: "/asbestos/commercial" }] },
    ],
  },
  {
    label: "EPC",
    path: "/epc",
    columns: [
      { title: "Residential", items: [{ label: "EPC Residential", path: "/epc/residential" }] },
      { title: "Commercial",  items: [{ label: "EPC Commercial",  path: "/epc/commercial" }] },
    ],
  },
];
