export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span>
          <i className="bi bi-check-circle-fill me-2"></i>
          Qualified to carry out a range of safety checks &amp; issue safety certificates to Landlords,
          Businesses &amp; Homeowners in London &amp; M25 area
        </span>
        <div className="d-flex gap-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
