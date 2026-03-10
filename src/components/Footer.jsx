export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-lightning-charge-fill text-primary me-2"></i>MyApp
            </h5>
            <p className="text-muted small">
              A React + Bootstrap 5 starter template built with Vite. Fast, modern, and ready to customize.
            </p>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="fw-semibold mb-3">Product</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Features</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Docs</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Stay Updated</h6>
            <div className="input-group">
              <input
                type="email"
                className="form-control bg-secondary border-0 text-white"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="text-muted small mb-0">
            &copy; {year} MyApp. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-muted fs-5"><i className="bi bi-github"></i></a>
            <a href="#" className="text-muted fs-5"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-muted fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
