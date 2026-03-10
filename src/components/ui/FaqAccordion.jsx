import { useState } from 'react';

/**
 * Reusable FAQ accordion
 * @param {Array} items - array of { q, a }
 */
export default function FaqAccordion({ items = [] }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion" id="faqAccordion">
      {items.map((item, i) => (
        <div className="accordion-item border-0 mb-2 rounded-3 overflow-hidden shadow-sm" key={i}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button${open === i ? '' : ' collapsed'}`}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.q}
            </button>
          </h2>
          {open === i && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body" style={{ lineHeight: 1.8, color: '#555' }}>
                {item.a}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
