import SectionLabel from '../ui/SectionLabel';

const LOGOS = [
  {
    src: 'https://www.trustmark.org.uk/images/trustmark-logo.png',
    alt: 'TrustMark – Government Endorsed Quality',
    fallback: 'TRUSTMARK',
  },
  {
    src: 'https://www.chas.co.uk/wp-content/uploads/2021/03/CHAS-Logo.png',
    alt: 'CHAS – Contractors Health and Safety',
    fallback: 'CHAS',
  },
  {
    src: 'https://www.nebosh.org.uk/media/1018/nebosh-logo.png',
    alt: 'NEBOSH',
    fallback: 'NEBOSH',
  },
  {
    src: 'https://www.cityandguilds.com/-/media/cityandguilds/images/logos/city-and-guilds-logo.png',
    alt: 'City & Guilds',
    fallback: 'City & Guilds',
  },
  {
    src: 'https://www.bohs.org/media/1169/bohs-logo-2019.png',
    alt: 'BOHS – British Occupational Hygiene Society',
    fallback: 'BOHS',
  },
  {
    src: 'https://www.ifsm.org.uk/media/1001/ifsm-logo.png',
    alt: 'IFSM – Institute of Fire Safety Managers',
    fallback: 'IFSM',
  },
];

function LogoItem({ src, alt, fallback }) {
  return (
    <div className="accred-logo-item">
      <img
        src={src}
        alt={alt}
        className="accred-logo-img"
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <span className="accred-logo-fallback" style={{ display: 'none' }}>
        {fallback}
      </span>
    </div>
  );
}

export default function Accreditation() {
  return (
    <section className="accreditation-section">
      <div className="container">
        <SectionLabel center>ACCREDITATION</SectionLabel>
        <h2 className="fw-bold text-center mb-5">Accreditation</h2>
        <div className="accred-logo-strip">
          {LOGOS.map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
