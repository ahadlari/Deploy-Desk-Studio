'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'video-editing',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="7" x2="7" y2="7"/>
        <line x1="2" y1="17" x2="7" y2="17"/>
        <line x1="17" y1="7" x2="22" y2="7"/>
        <line x1="17" y1="17" x2="22" y2="17"/>
      </svg>
    ),
    title: 'Video Editing',
    description: 'From rough cuts to final delivery. We assemble your story with precision, pacing, and emotional impact that keeps audiences engaged.',
    features: ['Narrative Editing', 'Assembly & Rough Cut', 'Multi-cam Sync', 'Subtitle Integration'],
    price: 'From $500',
    accent: '#8B5CF6',
  },
  {
    id: 'color-grading',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    title: 'Color Grading',
    description: 'Transform your footage with cinematic color science. We create custom LUTs and grade every shot for visual consistency and mood.',
    features: ['Custom LUT Creation', 'HDR / SDR Finishing', 'Look Development', 'Skin Tone Matching'],
    price: 'From $350',
    accent: '#EC4899',
  },
  {
    id: 'motion-graphics',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Motion Graphics',
    description: 'Dynamic titles, lower thirds, infographics, and visual effects that elevate your content from professional to extraordinary.',
    features: ['Title Design', '2D/3D Animation', 'Visual Effects', 'Logo Animation'],
    price: 'From $750',
    accent: '#06B6D4',
  },
  {
    id: 'sound-design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    title: 'Sound Design',
    description: 'Crystal-clear audio mixing, foley art, and sound design that brings your visuals to life with immersive sonic landscapes.',
    features: ['Audio Mixing', 'Foley & SFX', 'Music Licensing', 'Dialogue Cleanup'],
    price: 'From $400',
    accent: '#F59E0B',
  },
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
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

  return (
    <>
      <section id="services" className="services section" ref={sectionRef}>
        <div className="services__glow-1" />
        <div className="services__glow-2" />
        <div className="container">
          <div className={`section-header ${visible ? 'animate-fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="section-subtitle">
              End-to-end post-production services tailored to bring your vision to life.
            </p>
          </div>

          <div className="services__grid">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`services__card ${visible ? 'services__card--visible' : ''}`}
                style={{
                  animationDelay: `${0.15 + i * 0.1}s`,
                  '--card-accent': service.accent,
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="services__card-glow" />
                <div className="services__card-icon" style={{ color: service.accent }}>
                  {service.icon}
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.description}</p>
                <ul className="services__card-features">
                  {service.features.map(f => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="services__card-bottom">
                  <span className="services__card-price" style={{ color: service.accent }}>{service.price}</span>
                  <a href="#contact" className="services__card-link" style={{ color: service.accent }}>
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .services {
          position: relative;
          overflow: hidden;
          background: var(--color-bg-secondary);
        }

        .services__glow-1 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 50%);
          top: 0%;
          left: -20%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        .services__glow-2 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(6, 182, 212, 0.12) 0%, transparent 50%);
          bottom: 0%;
          right: -20%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        .services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .services__card {
          position: relative;
          padding: 2rem 1.5rem;
          border-radius: var(--radius-lg);
          background: var(--color-bg-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.1);
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .services__card--visible {
          animation: fadeInUp 0.7s var(--ease-smooth) both;
        }

        .services__card:hover {
          transform: translateY(-6px);
          border-color: var(--card-accent, rgba(139, 92, 246, 0.3));
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 30px color-mix(in srgb, var(--card-accent) 20%, transparent);
        }

        .services__card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, color-mix(in srgb, var(--card-accent) 5%, transparent), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .services__card:hover .services__card-glow {
          opacity: 1;
        }

        .services__card-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: color-mix(in srgb, var(--card-accent) 10%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
        }

        .services__card:hover .services__card-icon {
          background: color-mix(in srgb, var(--card-accent) 20%, transparent);
          box-shadow: 0 0 20px color-mix(in srgb, var(--card-accent) 20%, transparent);
        }

        .services__card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .services__card-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .services__card-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .services__card-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
        }

        .services__card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(139, 92, 246, 0.1);
        }

        .services__card-price {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
        }

        .services__card-link {
          font-size: 0.8125rem;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }

        .services__card-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services__grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
