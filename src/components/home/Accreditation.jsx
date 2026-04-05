import SectionLabel from '../ui/SectionLabel';

const BADGES = [
  {
    icon: 'bi-building',
    title: 'Companies House',
    sub: 'Registered Company',
    note: 'MNC Energy Ltd',
  },
  {
    icon: 'bi-shield-lock-fill',
    title: 'ICO Registered',
    sub: 'Data Protection',
    note: 'UK GDPR Compliant',
  },
  {
    icon: 'bi-file-earmark-check-fill',
    title: 'BS 7671:2018',
    sub: 'Wiring Regulations',
    note: 'Electrical Standard',
  },
  {
    icon: 'bi-fire',
    title: 'Gas Safety Regs',
    sub: 'Installation & Use',
    note: '1998 Regulations',
  },
  {
    icon: 'bi-house-check-fill',
    title: 'TrustMark',
    sub: 'Gov-Endorsed Standard',
    note: 'Quality Assured',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Fully Insured',
    sub: 'Public Liability',
    note: '£5m Coverage',
  },
];

export default function Accreditation() {
  return (
    <section className="accreditation-section">
      <div className="container">
        <SectionLabel center>ACCREDITATION</SectionLabel>
        <h2 className="fw-bold text-center mb-2">Regulated, Insured &amp; Compliant</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-sub)', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          MNC Safety Certificate operates to the highest UK industry standards,
          fully insured and compliant with all relevant legislation.
        </p>

        <div className="accred-grid">
          {BADGES.map((b, i) => (
            <div className="accred-card" key={i}>
              <div className="accred-card__icon">
                <i className={`bi ${b.icon}`}></i>
              </div>
              <div className="accred-card__title">{b.title}</div>
              <div className="accred-card__sub">{b.sub}</div>
              <div className="accred-card__note">{b.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
