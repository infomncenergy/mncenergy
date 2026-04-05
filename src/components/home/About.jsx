import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

const FEATURES = [
  { icon: 'bi-patch-check-fill',        text: 'Fully certified and experienced engineers across London' },
  { icon: 'bi-clock-fill',              text: 'Flexible appointment availability across London'        },
  { icon: 'bi-file-earmark-check-fill', text: 'Digital certificates delivered within 24–48 hours'    },
  { icon: 'bi-geo-alt-fill',            text: 'Covering all of London'         },
];

export default function About() {
  return (
    <section className="about-v2">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left: image ── */}
          <div className="col-lg-5">
            <div className="about-v2__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80"
                alt="MNC Safety Certificate team"
                className="about-v2__img"
              />
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="col-lg-7">
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="fw-bold mb-4">
              MNC Safety Certificate — Reliable, Qualified &amp; Experienced Safety Experts
            </h2>
            <p style={{ lineHeight: 1.8 }}>
              MNC Safety Certificate is a fully certified property safety company providing compliance
              certificates and safety inspections for landlords, businesses, and homeowners
              across London.
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
