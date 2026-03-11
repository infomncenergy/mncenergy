import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

const STATS = [
  { value: '5,000+', label: 'Certificates Issued' },
  { value: '10+',    label: 'Years Experience'    },
  { value: '24h',    label: 'Cert Delivery'        },
  { value: '★ 4.9',  label: 'Google Rating'        },
];

const FEATURES = [
  { icon: 'bi-patch-check-fill',        text: 'Gas Safe, NICEIC, NAPIT & BAFE registered engineers' },
  { icon: 'bi-clock-fill',              text: 'Same-day and next-day appointment availability'        },
  { icon: 'bi-file-earmark-check-fill', text: 'Digital certificates delivered within 24–48 hours'    },
  { icon: 'bi-geo-alt-fill',            text: 'Covering all of London and the wider M25 area'         },
];

export default function About() {
  return (
    <section className="about-v2">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left: image + stats overlay ── */}
          <div className="col-lg-5">
            <div className="about-v2__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="MNC Energy team"
                className="about-v2__img"
              />
              <div className="about-v2__stats-grid">
                {STATS.map((s, i) => (
                  <div className="about-v2__stat" key={i}>
                    <div className="about-v2__stat-value">{s.value}</div>
                    <div className="about-v2__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="col-lg-7">
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="fw-bold mb-4">
              MNC Energy — Reliable, Qualified &amp; Experienced Safety Experts
            </h2>
            <p style={{ lineHeight: 1.8, color: '#444' }}>
              MNC Energy is a fully certified property safety company providing compliance
              certificates and safety inspections for landlords, businesses, and homeowners
              across London and the M25 area.
            </p>

            <div className="about-v2__features">
              {FEATURES.map((f, i) => (
                <div className="about-v2__feature" key={i}>
                  <i className={`bi ${f.icon}`}></i>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            <Link to="/book-now" className="btn-green mt-3 d-inline-flex align-items-center gap-2">
              <i className="bi bi-calendar-check"></i>Book Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
