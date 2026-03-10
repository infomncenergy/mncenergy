const features = [
  {
    icon: 'bi-lightning-charge',
    color: 'text-warning',
    title: 'Lightning Fast',
    description: 'Powered by Vite for instant HMR and blazing fast builds in development and production.',
  },
  {
    icon: 'bi-phone',
    color: 'text-success',
    title: 'Fully Responsive',
    description: 'Bootstrap 5 grid system and utilities ensure your app looks great on every screen size.',
  },
  {
    icon: 'bi-puzzle',
    color: 'text-primary',
    title: 'Component Ready',
    description: 'Pre-built React components using Bootstrap classes — just customize and ship.',
  },
  {
    icon: 'bi-palette',
    color: 'text-danger',
    title: 'Easy Theming',
    description: 'Override Bootstrap CSS variables in index.css to match your brand instantly.',
  },
  {
    icon: 'bi-router',
    color: 'text-info',
    title: 'Routing Included',
    description: 'React Router DOM is set up and ready. Add new pages in seconds.',
  },
  {
    icon: 'bi-shield-check',
    color: 'text-secondary',
    title: 'Best Practices',
    description: 'Clean folder structure and ESLint configured to keep your codebase maintainable.',
  },
]

export default function Cards() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Why Use This Template?</h2>
          <p className="text-muted fs-5">Everything you need to move fast and build well.</p>
        </div>
        <div className="row g-4">
          {features.map((f, i) => (
            <div key={i} className="col-sm-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-1">
                <div className="card-body p-4">
                  <div className={`fs-1 mb-3 ${f.color}`}>
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">{f.title}</h5>
                  <p className="card-text text-muted">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
