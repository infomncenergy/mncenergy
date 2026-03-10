import { WHATSAPP } from '../../data/constants';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
