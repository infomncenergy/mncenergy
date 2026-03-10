import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Landlord Safety Certificate | Book Your Gas Safety Certificate Now</h1>
        <p>Your Trusted Partner in Property Safety Certifications</p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/book-now" className="btn-green">Book Now</Link>
          <Link to="/gas/landlord-gas-safety" className="btn-outline-white">Get a Quote</Link>
        </div>
      </div>
    </section>
  );
}
