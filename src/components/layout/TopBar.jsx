import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../../data/constants';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div className="top-bar__left">
          <span className="top-bar__item">
            <i className="bi bi-patch-check-fill me-2"></i>
             Gas Safe · NICEIC · NAPIT · BAFE Registered Engineer
          </span>
          <span className="top-bar__sep d-none d-md-inline">|</span>
          <span className="top-bar__item d-none d-md-inline">
            <i className="bi bi-geo-alt-fill me-1"></i>
            London
          </span>
        </div>
        <div className="top-bar__right d-flex align-items-center gap-3">
          <a href={EMAIL_HREF} className="top-bar__link d-none d-md-inline">
            <i className="bi bi-envelope me-1"></i>{EMAIL}
          </a>
          <a href={PHONE_HREF} className="top-bar__link">
            <i className="bi bi-telephone me-1"></i>{PHONE}
          </a>
          <div className="top-bar__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
