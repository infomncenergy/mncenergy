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
        title: "Certificates",
        items: [
          { label: "EICR Certificate (Residential)",  path: "/electrical/residential-eicr" },
          { label: "EICR Certificate (Commercial)",   path: "/electrical/commercial-eicr" },
          { label: "Consumer Unit / Fuse Box",        path: "/electrical/residential-fuse-box" },
        ],
      },
      {
        title: "Other Electrical",
        items: [
          { label: "PAT Testing",                     path: "/electrical/pat-testing" },
          { label: "Electrical Fault Finding",        path: "/electrical/fault-finding" },
          { label: "Commercial Fuse Box",             path: "/electrical/commercial-fuse-box" },
        ],
      },
    ],
  },
  {
    label: "Gas Services",
    path: "/gas",
    columns: [
      {
        title: "Gas Certificates",
        items: [
          { label: "Landlord Gas Safety (CP12)", path: "/gas/landlord-gas-safety" },
          { label: "Commercial Gas Safety",      path: "/gas/commercial-gas-safety" },
        ],
      },
      {
        title: "Boiler Services",
        items: [
          { label: "Boiler Service",             path: "/gas/boiler-service" },
          { label: "Boiler Installation",        path: "/gas/boiler-installation" },
          { label: "Boiler Repair",              path: "/gas/boiler-repair" },
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
          { label: "Fire Risk Assessment",        path: "/fire/residential-fra" },
          { label: "Emergency Lights",            path: "/fire/residential-emergency-lights" },
          { label: "Fire Alarm Certificate",      path: "/fire/residential-fire-alarm" },
          { label: "Fire Door Inspection",        path: "/fire/residential-fire-door" },
        ],
      },
      {
        title: "Commercial",
        items: [
          { label: "Fire Risk Assessment",        path: "/fire/commercial-fra" },
          { label: "Emergency Lights",            path: "/fire/commercial-emergency-lights" },
          { label: "Fire Alarm Certificate",      path: "/fire/commercial-fire-alarm" },
          { label: "Fire Door Inspection",        path: "/fire/commercial-fire-door" },
          { label: "Fire Extinguisher Servicing", path: "/fire/fire-extinguisher" },
        ],
      },
    ],
  },
  {
    label: "Asbestos & EPC",
    path: "/asbestos",
    columns: [
      {
        title: "Asbestos Survey",
        items: [
          { label: "Residential Asbestos Survey", path: "/asbestos/residential" },
          { label: "Commercial Asbestos Survey",  path: "/asbestos/commercial" },
        ],
      },
      {
        title: "EPC Certificate",
        items: [
          { label: "Residential EPC", path: "/epc/residential" },
          { label: "Commercial EPC",  path: "/epc/commercial" },
        ],
      },
    ],
  },
];
