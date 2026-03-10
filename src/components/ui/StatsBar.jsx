/**
 * Horizontal stats / trust bar
 * @param {Array} stats - [{ value, label }]
 */
export default function StatsBar({ stats = [] }) {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="row g-0 justify-content-center">
          {stats.map((s, i) => (
            <div className="col-auto stats-bar__item" key={i}>
              <div className="stats-bar__value">{s.value}</div>
              <div className="stats-bar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
