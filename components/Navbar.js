'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e) => {
    setMobileOpen(false);
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`}>
        <div className="navbar__inner container">
          {/* Left: Brand */}
          <a href="#top" className="navbar__brand">
            <span className="navbar__logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="2" width="24" height="24" rx="6" stroke="#fff" strokeWidth="2.5"/>
                <polygon points="11,8 21,14 11,20" fill="#fff"/>
              </svg>
            </span>
            <span className="navbar__brand-divider"></span>
            <span className="navbar__brand-text">Deploy Desk<br />Studio</span>
          </a>

          {/* Center: Pill Nav */}
          <div className="navbar__center">
            <ul className="navbar__links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="navbar__link" onClick={handleLinkClick}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="navbar__right">
            <a href="#contact" className="navbar__cta btn-request" onClick={handleLinkClick}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Get a Quote
            </a>
          </div>

          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__overlay" onClick={() => setMobileOpen(false)} />
        <div className="mobile-drawer__content">
          <ul className="mobile-drawer__links">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                <a href={link.href} className="mobile-drawer__link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mobile-drawer__cta" onClick={handleLinkClick}>
            Get a Quote
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-nav);
          padding: 1.5rem 0;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), padding 0.4s ease, background 0.4s ease;
        }

        .navbar--hidden {
          transform: translateY(-100%);
        }

        .navbar--scrolled {
          padding: 1rem 0;
          background: rgba(0, 0, 0, 0.98);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          z-index: 10;
        }

        .navbar__logo-icon {
          display: flex;
          align-items: center;
        }

        .navbar__brand-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.2);
        }

        .navbar__brand-text {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.2;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .navbar__center {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 6px;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar__link {
          font-size: 0.9rem;
          font-weight: 400;
          color: #a0a0a0;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .navbar__link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .navbar__right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .btn-request {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(140, 50, 20, 0.2);
          border: 1px solid #a8421c;
          color: #fff;
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-size: 0.9rem;
          font-weight: 400;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-request:hover {
          background: rgba(168, 66, 28, 0.4);
        }

        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          z-index: 10;
        }

        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar__hamburger--open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar__hamburger--open span:nth-child(2) {
          opacity: 0;
        }

        .navbar__hamburger--open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          display: none;
        }

        .mobile-drawer__overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: calc(var(--z-nav) + 1);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-drawer--open .mobile-drawer__overlay {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-drawer__content {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 360px;
          height: 100vh;
          background: var(--color-bg-secondary);
          border-left: 1px solid rgba(139, 92, 246, 0.15);
          z-index: calc(var(--z-nav) + 2);
          padding: 5rem 2rem 2rem;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-drawer--open .mobile-drawer__content {
          transform: translateX(0);
        }

        .mobile-drawer__links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-drawer__links li {
          opacity: 0;
          animation: fadeInUp 0.5s var(--ease-smooth) both;
        }

        .mobile-drawer--open .mobile-drawer__links li {
          opacity: 1;
        }

        .mobile-drawer__link {
          display: block;
          padding: 0.875rem 0;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          border-bottom: 1px solid rgba(139, 92, 246, 0.1);
          transition: color 0.3s ease;
        }

        .mobile-drawer__link:hover {
          color: var(--color-violet);
        }

        .mobile-drawer__cta {
          width: 100%;
          text-align: center;
        }

        @media (max-width: 860px) {
          .navbar__center,
          .navbar__right {
            display: none;
          }

          .navbar__hamburger {
            display: flex;
          }

          .mobile-drawer {
            display: block;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
