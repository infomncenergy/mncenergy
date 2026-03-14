import { WHATSAPP } from '../../data/constants';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
