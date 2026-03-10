export default function Hero() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-light text-primary mb-3 px-3 py-2 fs-6">
              🚀 Welcome to MyApp
            </span>
            <h1 className="display-4 fw-bold mb-4">
              Build Amazing Things with React &amp; Bootstrap 5
            </h1>
            <p className="lead mb-4 opacity-75">
              A modern starter template combining the power of React 18, Vite, and
              Bootstrap 5. Everything you need to kickstart your next project.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-light text-primary fw-bold px-4 py-2">
                <i className="bi bi-play-fill me-2"></i>Get Started
              </button>
              <button className="btn btn-outline-light fw-bold px-4 py-2">
                <i className="bi bi-github me-2"></i>View on GitHub
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="p-4 bg-white bg-opacity-10 rounded-4">
              <i className="bi bi-code-slash" style={{ fontSize: '8rem', opacity: 0.8 }}></i>
              <p className="mt-3 mb-0 fs-5 fw-semibold">React + Bootstrap 5 + Vite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
