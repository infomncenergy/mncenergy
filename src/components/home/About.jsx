import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
              alt="About Landlord Safety Certificate"
              className="about-img"
            />
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="fw-bold mb-4">
              Landlord Safety Certificate – Reliable, Qualified, and Experienced
            </h2>
            <p style={{ lineHeight: 1.8 }}>
              At Landlord Safety Certificate, our Gas Safe registered, NICEIC-certified, and
              Stroma-accredited engineers provide essential safety inspections for landlords,
              businesses, and homeowners across London.
            </p>
            <ul>
              <li>
                Our team is equipped to handle fire alarm inspections, carbon monoxide alarm checks,
                gas appliance assessments, electrical installations, and emergency lighting.
              </li>
              <li>
                Rely on us for professional, trusted safety services that prioritise compliance and quality.
              </li>
              <li>
                We serve London and the M25 area with fast turnaround times and fully qualified
                in-house engineers.
              </li>
            </ul>
            <Link to="/book-now" className="btn-green mt-2 d-inline-block">Book Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
