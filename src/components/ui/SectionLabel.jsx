/**
 * Reusable section eyebrow label
 * @param {boolean} center - center-align text
 */
export default function SectionLabel({ children, center = false }) {
  return (
    <span className={`section-label${center ? ' text-center d-block' : ''}`}>
      {children}
    </span>
  );
}
