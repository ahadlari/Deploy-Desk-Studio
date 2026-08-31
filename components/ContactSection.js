'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'deploydesk@deploydesk.com',
      href: 'mailto:deploydesk@deploydesk.com',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: 'Phone',
      value: '6307031771',
      href: 'tel:6307031771',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'Barabanki',
      href: null,
    },
  ];

  const socials = [
    { name: 'Instagram', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { name: 'YouTube', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg> },
    { name: 'Vimeo', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.42c-.09 2.1-1.57 4.97-4.42 8.61C14.64 19.97 12.16 22 10.12 22c-1.26 0-2.33-1.16-3.2-3.49-.58-2.13-1.17-4.27-1.75-6.4C4.55 9.78 3.87 8.6 3.14 8.6c-.16 0-.7.33-1.64.98L.5 8.35c1.03-.9 2.05-1.81 3.05-2.72C4.86 4.52 5.96 3.95 6.7 3.89c1.47-.14 2.37.86 2.71 3 .36 2.32.61 3.76.76 4.32.42 1.91.88 2.87 1.39 2.87.39 0 .98-.62 1.76-1.86.78-1.24 1.2-2.19 1.25-2.85.11-1.09-.32-1.64-1.29-1.64-.46 0-.93.1-1.42.32.94-3.08 2.74-4.58 5.4-4.49 1.97.06 2.9 1.34 2.76 3.86z"/></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  ];

  return (
    <>
      <section id="contact" className="contact section" ref={sectionRef}>
        <div className="contact__glow" />
        <div className="container">
          <div className={`section-header ${visible ? 'animate-fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title">
              Let&apos;s Create <span className="text-gradient">Together</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind? We&apos;d love to hear about it. Let&apos;s bring your vision to life.
            </p>
          </div>

          <div className={`contact__grid ${visible ? 'contact__grid--visible' : ''}`}>
            {/* Form */}
            <div className="contact__form-wrap glass-card">
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form">
                  <div className="contact__field">
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="contact-name">Your Name</label>
                  </div>
                  <div className="contact__field">
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="contact-email">Email Address</label>
                  </div>
                  <div className="contact__field">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="color-grading">Color Grading</option>
                      <option value="motion-graphics">Motion Graphics</option>
                      <option value="sound-design">Sound Design</option>
                      <option value="full-package">Full Package</option>
                    </select>
                    <label htmlFor="contact-service">Service Needed</label>
                  </div>
                  <div className="contact__field">
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      placeholder=" "
                    />
                    <label htmlFor="contact-message">Tell us about your project</label>
                  </div>
                  <button type="submit" className="btn btn-primary contact__submit" id="contact-submit">
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info side */}
            <div className="contact__info">
              <div className="contact__info-cards">
                {contactInfo.map((info, i) => (
                  <div key={i} className="contact__info-card glass-card">
                    <div className="contact__info-icon">{info.icon}</div>
                    <div>
                      <div className="contact__info-label">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="contact__info-value">{info.value}</a>
                      ) : (
                        <span className="contact__info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="contact__socials">
                <span className="contact__socials-label">Follow us</span>
                <div className="contact__socials-list">
                  {socials.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="contact__social-link"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact {
          position: relative;
          overflow: hidden;
          background: var(--color-bg-secondary);
        }

        .contact__glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(236, 72, 153, 0.12) 0%, transparent 50%);
          bottom: 0%;
          left: 10%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        .contact__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        .contact__grid > * {
          opacity: 0;
        }

        .contact__grid--visible > * {
          opacity: 1;
          animation: fadeInUp 0.7s var(--ease-smooth) both;
        }

        .contact__grid--visible > *:last-child {
          animation-delay: 0.2s;
        }

        /* Form */
        .contact__form-wrap {
          padding: 2.5rem;
        }

        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact__field {
          position: relative;
        }

        .contact__field input,
        .contact__field textarea,
        .contact__field select {
          width: 100%;
          padding: 1rem;
          background: rgba(10, 10, 15, 0.5);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: var(--radius-md);
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .contact__field input:focus,
        .contact__field textarea:focus,
        .contact__field select:focus {
          border-color: var(--color-violet);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
        }

        .contact__field label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .contact__field input:focus + label,
        .contact__field input:not(:placeholder-shown) + label,
        .contact__field textarea:focus + label,
        .contact__field textarea:not(:placeholder-shown) + label {
          top: -0.625rem;
          left: 0.75rem;
          font-size: 0.75rem;
          color: var(--color-violet);
          background: var(--color-bg-card);
          padding: 0 0.25rem;
        }

        .contact__field select + label {
          top: -0.625rem;
          left: 0.75rem;
          font-size: 0.75rem;
          color: var(--color-violet);
          background: var(--color-bg-card);
          padding: 0 0.25rem;
        }

        .contact__field select {
          cursor: pointer;
        }

        .contact__field select option {
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
        }

        .contact__field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact__submit {
          width: 100%;
          padding: 1rem;
        }

        /* Success state */
        .contact__success {
          text-align: center;
          padding: 3rem 1rem;
        }

        .contact__success-icon {
          margin-bottom: 1.5rem;
          animation: countUp 0.6s ease both;
        }

        .contact__success h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .contact__success p {
          color: var(--color-text-secondary);
        }

        /* Info side */
        .contact__info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact__info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact__info-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact__info-card:hover {
          transform: translateY(-2px);
        }

        .contact__info-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-violet);
          flex-shrink: 0;
        }

        .contact__info-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.125rem;
        }

        .contact__info-value {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text-primary);
          transition: color 0.3s ease;
        }

        a.contact__info-value:hover {
          color: var(--color-violet);
        }

        /* Socials */
        .contact__socials {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          background: var(--color-bg-glass);
          border: 1px solid rgba(139, 92, 246, 0.1);
        }

        .contact__socials-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          display: block;
        }

        .contact__socials-list {
          display: flex;
          gap: 0.75rem;
        }

        .contact__social-link {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all 0.3s ease;
        }

        .contact__social-link:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: var(--color-violet);
          color: var(--color-violet);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 860px) {
          .contact__grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
