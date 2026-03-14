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
    columns: [
      {
        title: "",
        items: [
          { label: "EICR Certificate",              path: "/electrical/residential-eicr" },
          { label: "Commercial EICR",               path: "/electrical/commercial-eicr" },
          { label: "Electrical Fault Finding",      path: "/electrical/fault-finding" },
          { label: "Fuse Box Installation",         path: "/electrical/residential-fuse-box" },
          { label: "PAT Testing",                   path: "/electrical/pat-testing" },
        ],
      },
    ],
  },
  {
    label: "Gas",
    columns: [
      {
        title: "",
        items: [
          { label: "Gas Safety Certificate",         path: "/gas/landlord-gas-safety" },
          { label: "Commercial Gas Safety",          path: "/gas/commercial-gas-safety" },
          { label: "Boiler Installation",            path: "/gas/boiler-installation" },
          { label: "Boiler Repair",                  path: "/gas/boiler-repair" },
          { label: "Gas Engineer",                   path: "/gas/gas-engineer" },
          { label: "Commercial Gas Engineer",        path: "/gas/commercial-gas-engineer" },
        ],
      },
    ],
  },
  {
    label: "Fire Safety",
    columns: [
      {
        title: "",
        items: [
          { label: "Fire Safety Check",                        path: "/fire/fire-safety-check" },
          { label: "Fire Risk Assessment",                     path: "/fire/residential-fra" },
          { label: "Commercial Fire Risk Assessment",          path: "/fire/commercial-fra" },
          { label: "Fire Alarm Certificate",                   path: "/fire/residential-fire-alarm" },
          { label: "Fire Extinguisher Inspection",             path: "/fire/fire-extinguisher" },
          { label: "Emergency Lighting Testing",               path: "/fire/residential-emergency-lights" },
          { label: "Fire Door Certificate",                    path: "/fire/residential-fire-door" },
          { label: "Fire Risk Assessment & Asbestos Report",   path: "/fire/fire-risk-asbestos" },
        ],
      },
    ],
  },
  {
    label: "More",
    columns: [
      {
        title: "",
        items: [
          { label: "Asbestos Survey",   path: "/asbestos/residential" },
          { label: "EPC Certificate",   path: "/epc/residential" },
          { label: "FAQs",              path: "/faqs" },
          { label: "Blog",              path: "/blog" },
          { label: "Contact Us",        path: "/contact" },
        ],
      },
    ],
  },
];
