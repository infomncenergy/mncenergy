import SectionLabel from '../ui/SectionLabel';

const LOGOS = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/NICEIC_logo.svg/200px-NICEIC_logo.svg.png',
    alt: 'NICEIC Contractors',
  },
  {
    src: 'https://www.bohs.org/media/1200/bohs-logo.png',
    alt: 'BOHS – British Occupational Hygiene Society',
  },
  {
    src: 'https://www.ifsm.org.uk/wp-content/uploads/2020/01/IFSM-Logo.png',
    alt: 'IFSM – Institute of Fire Safety Managers',
  },
  {
    src: 'https://www.nebosh.org.uk/globalassets/assets/logos/nebosh-logo.png',
    alt: 'NEBOSH',
  },
  {
    src: 'https://www.trustmark.org.uk/wp-content/uploads/2022/05/TrustMark-Logo.png',
    alt: 'TrustMark – Government Endorsed Quality',
  },
  {
    src: 'https://www.cityandguilds.com/~/media/cityandguilds-site/documents/news/2019/cityandguilds_logo_rgb_pos.ashx',
    alt: 'City & Guilds',
  },
  {
    src: 'https://www.gassaferegister.co.uk/media/2597/gas-safe-register-logo.png',
    alt: 'Gas Safe Register',
  },
];

// Duplicate for seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS];

export default function Accreditation() {
  return (
    <section className="accreditation-section">
      <div className="container-fluid px-0">
        <div className="text-center mb-4 px-3">
          <SectionLabel center>ACCREDITATION</SectionLabel>
          <h2 className="fw-bold">Accreditation</h2>
        </div>

        {/* Marquee wrapper with edge fade */}
        <div className="accred-marquee-outer">
          <div className="accred-marquee-track">
            {TRACK.map((logo, i) => (
              <div className="accred-marquee-item" key={i}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="accred-marquee-img"
                  onError={e => { e.target.style.opacity = '0'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
