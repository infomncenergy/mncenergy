import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/constants';

export default function Navbar() {
  const [openMenu, setOpenMenu]   = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };

  return (
    <nav className="main-nav" ref={navRef}>
      <div className="container d-flex align-items-center justify-content-between flex-wrap">

        {/* ── Desktop nav ── */}
        <div className="d-none d-lg-flex align-items-center">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeAll}>
            Home
          </NavLink>

          {NAV_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="position-relative"
              onMouseEnter={() => setOpenMenu(idx)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to={item.path} className="nav-link d-flex align-items-center gap-1" onClick={closeAll}>
                {item.label}
                <i className={`bi bi-chevron-${openMenu === idx ? 'up' : 'down'}`} style={{ fontSize: '0.6rem' }}></i>
              </Link>

              {openMenu === idx && (
                <div className="dropdown-menu show d-flex mega-menu" style={{ top: '100%', left: 0 }}>
                  {item.columns.map((col, ci) => (
                    <div key={ci} className="mega-col px-0">
                      <div className="dropdown-header">{col.title}</div>
                      {col.items.map((sub, si) => (
                        <Link key={si} to={sub.path} className="dropdown-item" onClick={closeAll}>
                          <i className="bi bi-chevron-right me-2" style={{ fontSize: '0.6rem', color: 'var(--teal)' }}></i>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink to="/blog" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeAll}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeAll}>
            Contact
          </NavLink>
        </div>

        <Link to="/book-now" className="book-btn nav-link d-none d-lg-block" onClick={closeAll}>
          BOOK NOW
        </Link>

        {/* ── Mobile toggle ── */}
        <button
          className="btn d-lg-none text-white py-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bi bi-${mobileOpen ? 'x-lg' : 'list'} fs-4`}></i>
        </button>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="mobile-menu w-100">
            <NavLink to="/" className="d-block nav-link" onClick={closeAll}>Home</NavLink>

            {NAV_ITEMS.map((item, idx) => (
              <div key={idx}>
                <div
                  className="mobile-cat-title nav-link"
                  onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                >
                  {item.label}
                  <i className={`bi bi-chevron-${openMenu === idx ? 'up' : 'down'} ms-1`} style={{ fontSize: '0.65rem' }}></i>
                </div>
                {openMenu === idx && item.columns.map((col, ci) => (
                  <div key={ci} style={{ paddingLeft: 14 }}>
                    <div style={{ color: '#aaa', fontSize: '0.72rem', padding: '4px 14px', textTransform: 'uppercase', letterSpacing: 1 }}>
                      {col.title}
                    </div>
                    {col.items.map((sub, si) => (
                      <Link key={si} to={sub.path} className="d-block mobile-sub-link nav-link" onClick={closeAll}>
                        › {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            <NavLink to="/blog" className="d-block nav-link" onClick={closeAll}>Blog</NavLink>
            <NavLink to="/contact" className="d-block nav-link" onClick={closeAll}>Contact</NavLink>
            <Link to="/book-now" className="book-btn nav-link d-inline-block mt-2" onClick={closeAll}>
              BOOK NOW
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
