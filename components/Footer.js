'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'SERVICES',
      links: [
        { label: 'Video Editing', href: '#services' },
        { label: 'Color Grading', href: '#services' },
        { label: 'Motion Graphics', href: '#services' },
        { label: 'Sound Design', href: '#services' },
      ],
    },
    {
      title: 'PORTFOLIO',
      links: [
        { label: 'Our Work', href: '#portfolio' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'QUICK LINKS',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <>
      <footer className="footer">
        {/* Giant outlined watermark text */}
        <div className="footer__watermark-wrap">
          <h2 className="footer__watermark">DEPLOY DESK STUDIO</h2>
        </div>

        <div className="container">
          <div className="footer__grid">
            {/* Brand column */}
            <div className="footer__brand-col">
              <span className="footer__brand-name">DEPLOY DESK STUDIO</span>
              <a href="mailto:deploydesk@deploydesk.com" className="footer__email-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>

            {/* Link columns */}
            {columns.map(col => (
              <nav key={col.title} className="footer__col">
                <span className="footer__col-title">{col.title}</span>
                <ul>
                  {col.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__col-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          position: relative;
          background: #000;
          overflow: hidden;
          padding-bottom: 2.5rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        /* Giant outlined watermark */
        .footer__watermark-wrap {
          width: 100%;
          overflow: hidden;
          padding: 3rem 0 2rem;
        }

        .footer__watermark {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(3.5rem, 10vw, 9rem);
          letter-spacing: 0.04em;
          text-align: center;
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.08);
          line-height: 1.1;
          user-select: none;
          pointer-events: none;
        }

        /* Footer grid */
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-top: 1rem;
        }

        /* Brand column */
        .footer__brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer__brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
        }

        .footer__email-icon {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }

        .footer__email-icon:hover {
          border-color: var(--color-violet);
          color: var(--color-violet);
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.25);
        }

        /* Link columns */
        .footer__col {
          display: flex;
          flex-direction: column;
        }

        .footer__col-title {
          display: block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8125rem;
          letter-spacing: 0.12em;
          color: #fff;
          margin-bottom: 1.25rem;
        }

        .footer__col ul {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__col-link {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          transition: color 0.3s ease;
        }

        .footer__col-link:hover {
          color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 768px) {
          .footer__watermark {
            font-size: clamp(2rem, 8vw, 3.5rem);
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
          }

          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer__brand-col {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 480px) {
          .footer__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
