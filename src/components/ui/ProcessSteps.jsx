import SectionLabel from './SectionLabel';

/**
 * Numbered process / "how it works" steps on a green background
 * @param {string} label   - eyebrow label
 * @param {string} title   - section heading
 * @param {Array}  steps   - [{ icon, title, body }]
 */
export default function ProcessSteps({ label, title, steps = [] }) {
  return (
    <section className="process-section">
      <div className="container">
        {label && <SectionLabel center>{label}</SectionLabel>}
        {title && <h2 className="fw-bold text-center mb-5 text-white">{title}</h2>}
        <div className="row g-4 justify-content-center">
          {steps.map((step, i) => (
            <div className="col-md-4" key={i}>
              <div className="process-step">
                <div className="process-step__num">{i + 1}</div>
                <div className="process-step__icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h5 className="process-step__title">{step.title}</h5>
                <p className="process-step__body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
