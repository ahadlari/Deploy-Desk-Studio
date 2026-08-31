'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0, awards: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const targets = { years: 8, projects: 200, clients: 50, awards: 15 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.round(eased * targets.years),
        projects: Math.round(eased * targets.projects),
        clients: Math.round(eased * targets.clients),
        awards: Math.round(eased * targets.awards),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <>
      <section id="about" className="about section" ref={sectionRef}>
        <div className="about__glow" />
        <div className="container">
          <div className={`about__grid ${visible ? 'about__grid--visible' : ''}`}>
            {/* Image side */}
            <div className="about__image-wrap">
              <div className="about__image-frame">
                <img
                  src="/assets/portrait.jpg"
                  alt="CutFlow Studio editor"
                  className="about__image"
                />
                <div className="about__image-border" />
              </div>
              {/* Experience badge */}
              <div className="about__exp-badge">
                <span className="about__exp-number">{counters.years}+</span>
                <span className="about__exp-label">Years of<br/>Experience</span>
              </div>
            </div>

            {/* Text side */}
            <div className="about__text">
              <div className="section-eyebrow">About Us</div>
              <h2 className="section-title">
                Crafting Visual <span className="text-gradient">Masterpieces</span> Since 2018
              </h2>
              <p className="about__description">
                At Deploy Desk Studio, we believe that great editing is invisible — it serves the story,
                not the ego. Founded by a passionate team of filmmakers and technologists, we&apos;ve
                spent nearly a decade perfecting the art of post-production.
              </p>
              <p className="about__description about__description--secondary">
                From blockbuster commercials to intimate wedding films, from pulsating music videos
                to compelling documentaries — we bring the same obsessive attention to detail and
                creative fire to every single frame.
              </p>

              {/* Tools we use */}
              <div className="about__tools">
                <span className="about__tools-label">Tools we master:</span>
                <div className="about__tools-list">
                  {['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Cinema 4D', 'Nuke'].map(tool => (
                    <span key={tool} className="about__tool-tag">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="about__counters">
                <div className="about__counter">
                  <span className="about__counter-value">{counters.projects}+</span>
                  <span className="about__counter-label">Projects</span>
                </div>
                <div className="about__counter">
                  <span className="about__counter-value">{counters.clients}+</span>
                  <span className="about__counter-label">Clients</span>
                </div>
                <div className="about__counter">
                  <span className="about__counter-value">{counters.awards}</span>
                  <span className="about__counter-label">Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about {
          position: relative;
          overflow: hidden;
        }

        .about__glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
          top: 10%;
          left: -20%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about__grid > * {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about__grid--visible > *:first-child {
          opacity: 1;
          transform: translateX(0);
          animation: slideInLeft 0.8s var(--ease-smooth) both;
        }

        .about__grid--visible > *:last-child {
          opacity: 1;
          transform: translateX(0);
          animation: slideInRight 0.8s var(--ease-smooth) 0.2s both;
        }

        /* Image */
        .about__image-wrap {
          position: relative;
        }

        .about__image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .about__image {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
        }

        .about__image-border {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(139, 92, 246, 0.2);
          pointer-events: none;
        }

        .about__exp-badge {
          position: absolute;
          bottom: -1rem;
          right: -1rem;
          background: var(--color-bg-secondary);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-lg);
          backdrop-filter: blur(10px);
        }

        .about__exp-number {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about__exp-label {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          line-height: 1.3;
        }

        /* Text */
        .about__text {
          display: flex;
          flex-direction: column;
        }

        .about__text .section-eyebrow {
          justify-content: flex-start;
        }

        .about__text .section-title {
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .about__description {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .about__description--secondary {
          margin-bottom: 2rem;
        }

        /* Tools */
        .about__tools {
          margin-bottom: 2rem;
        }

        .about__tools-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          display: block;
        }

        .about__tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .about__tool-tag {
          padding: 0.375rem 1rem;
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 500;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--color-violet);
          transition: all 0.3s ease;
        }

        .about__tool-tag:hover {
          background: rgba(139, 92, 246, 0.2);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
        }

        /* Counters */
        .about__counters {
          display: flex;
          gap: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(139, 92, 246, 0.1);
        }

        .about__counter {
          display: flex;
          flex-direction: column;
        }

        .about__counter-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text-primary);
        }

        .about__counter-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 860px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about__image-wrap {
            max-width: 400px;
            margin: 0 auto;
          }

          .about__text .section-title,
          .about__text .section-eyebrow {
            text-align: center;
            justify-content: center;
          }

          .about__description {
            text-align: center;
          }

          .about__tools {
            text-align: center;
          }

          .about__tools-list {
            justify-content: center;
          }

          .about__counters {
            justify-content: center;
          }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
