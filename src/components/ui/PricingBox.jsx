import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';

const ICONS = [
  { kw: ['studio','bedsit'],            icon: 'bi-building'          },
  { kw: ['1','one'],                    icon: 'bi-house-fill'        },
  { kw: ['2','two'],                    icon: 'bi-house-fill'        },
  { kw: ['3','three'],                  icon: 'bi-house-fill'        },
  { kw: ['4','four'],                   icon: 'bi-houses-fill'       },
  { kw: ['5','6','7','five','six'],     icon: 'bi-house-heart-fill'  },
  { kw: ['commercial','office','shop'], icon: 'bi-building-fill'     },
  { kw: ['appliance'],                  icon: 'bi-fire'              },
  { kw: ['small','up to'],             icon: 'bi-building'          },
  { kw: ['medium'],                     icon: 'bi-buildings'         },
  { kw: ['large','major'],              icon: 'bi-buildings-fill'    },
  { kw: ['landlord'],                   icon: 'bi-key-fill'          },
  { kw: ['homeowner','domestic'],       icon: 'bi-house-door-fill'   },
  { kw: ['pat','device','item'],        icon: 'bi-plug-fill'         },
];

function iconFor(label = '') {
  const l = label.toLowerCase();
  for (const { kw, icon } of ICONS) {
    if (kw.some(k => l.includes(k))) return icon;
  }
  return 'bi-house-fill';
}

export default function PricingBox({
  title,
  body,
  prices     = [],
  ctaText    = 'Book Now',
  ctaTo      = '/book-now',
  disclaimer = '* All prices are fixed. Parking charged at local rate. Congestion Zone: +£15.',
}) {
  return (
    <section className="pricing-section">
      <div className="container">

        {/* heading */}
        <SectionLabel center>PRICING</SectionLabel>
        <h2 className="fw-bold text-center mb-2">{title}</h2>
        {body && <p className="text-center intro-body mb-5 mx-auto" style={{ maxWidth: 600 }}>{body}</p>}

        {/* cards */}
        <div className="pg-grid">
          {prices.map((p, i) => (
            <div className={`pg-card${i === 0 ? ' pg-card--lead' : ''}`} key={i}>
              {i === 0 && <div className="pg-card__badge">Best Price</div>}
              <div className="pg-card__icon"><i className={`bi ${iconFor(p.label)}`}></i></div>
              <div className="pg-card__label">{p.label}</div>
              {p.note && <div className="pg-card__note">{p.note}</div>}
              <div className="pg-card__price">{p.price}</div>
              <div className="pg-card__incl">All inclusive</div>
              <Link to={ctaTo} className="pg-card__btn">
                {ctaText} <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="pg-bottom-note">
          <i className="bi bi-shield-check-fill"></i>
          No hidden costs · Digital certificate within 24h · London wide coverage
        </div>

        {disclaimer && <p className="pricing-disclaimer text-center">{disclaimer}</p>}
      </div>
    </section>
  );
}
