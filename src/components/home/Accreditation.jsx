import SectionLabel from '../ui/SectionLabel';

import logoNiceic    from '../../assets/images/logo-1.webp';
import logoGasSafe   from '../../assets/images/logo-2.webp';
import logoCityGuild from '../../assets/images/logo-3.webp';
import logoTrustmark from '../../assets/images/logo-4.png';
import logoNebosh    from '../../assets/images/logo-5.webp';
import logoIfsm      from '../../assets/images/logo-6.jpg';
import logoBohs      from '../../assets/images/logo-7.png';

const LOGOS = [
  { src: logoNiceic,    alt: 'NICEIC Contractors'                        },
  { src: logoBohs,      alt: 'BOHS – British Occupational Hygiene Society' },
  { src: logoIfsm,      alt: 'IFSM – Institute of Fire Safety Managers'  },
  { src: logoNebosh,    alt: 'NEBOSH'                                     },
  { src: logoTrustmark, alt: 'TrustMark – Government Endorsed Quality'   },
  { src: logoCityGuild, alt: 'City & Guilds'                              },
  { src: logoGasSafe,   alt: 'Gas Safe Register'                          },
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
