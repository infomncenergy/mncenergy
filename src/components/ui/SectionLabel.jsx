/**
 * Reusable section eyebrow label — gradient pill with animated dot.
 * @param {boolean} center - center the pill horizontally (auto-margin)
 */
export default function SectionLabel({ children, center = false }) {
  return (
    <div className={`section-label${center ? ' section-label--center' : ''}`}>
      {children}
    </div>
  );
}
