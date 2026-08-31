'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(true);
  }, []);

  return (
    <>
      <section id="top" className="hero" ref={heroRef}>
        {/* Animated background */}
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className={`hero__content container ${loaded ? 'hero__content--visible' : ''}`}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Video Editing & Post-Production
          </div>

          <h1 className="hero__title">
            Where Every <span className="text-gradient">Frame</span>
            <br />Tells a Story
          </h1>

          <p className="hero__subtitle">
            We craft cinematic experiences that captivate audiences.
            From raw footage to final cut, every frame is meticulously shaped
            to deliver emotion, impact, and unforgettable visual storytelling.
          </p>

          <div className="hero__actions">
            <a href="#portfolio" className="btn btn-primary hero__btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              View Our Work
            </a>
            <a href="#contact" className="btn btn-outline hero__btn">
              Start a Project
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">8+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <span>Scroll to explore</span>
          <div className="hero__scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        {/* Showreel preview images */}
        <div className={`hero__reel ${loaded ? 'hero__reel--visible' : ''}`}>
          <div className="hero__reel-card hero__reel-card--1">
            <img src="/assets/hero/scene1.jpg" alt="Editing workspace" />
          </div>
          <div className="hero__reel-card hero__reel-card--2">
            <img src="/assets/hero/scene2.jpg" alt="Color grading" />
          </div>
          <div className="hero__reel-card hero__reel-card--3">
            <img src="/assets/hero/scene3.jpg" alt="Screening room" />
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6rem 0 2rem;
        }

        /* Background effects */
        .hero__bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .hero__orb--1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35), transparent 70%);
          top: -10%;
          right: -10%;
          animation: float 8s ease-in-out infinite;
        }

        .hero__orb--2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%);
          bottom: -15%;
          left: -10%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero__orb--3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.25), transparent 70%);
          top: 40%;
          left: 50%;
          animation: float 12s ease-in-out infinite;
        }

        .hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }

        /* Content */
        .hero__content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero__content--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-violet);
          margin-bottom: 2rem;
        }

        .hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-violet);
          animation: pulse 2s ease-in-out infinite;
        }

        .hero__title {
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero__subtitle {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          max-width: 560px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }

        .hero__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .hero__btn {
          padding: 1rem 2.25rem;
        }

        /* Stats */
        .hero__stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero__stat-number {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__stat-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-top: 0.25rem;
        }

        .hero__stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(139, 92, 246, 0.2);
        }

        /* Scroll indicator */
        .hero__scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
        }

        .hero__scroll-indicator span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
        }

        .hero__scroll-arrow {
          animation: float 2s ease-in-out infinite;
          color: var(--color-violet);
        }

        /* Showreel cards */
        .hero__reel {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .hero__reel-card {
          position: absolute;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.15);
          box-shadow: var(--shadow-lg);
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero__reel--visible .hero__reel-card {
          opacity: 0.25;
        }

        .hero__reel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero__reel-card--1 {
          width: 280px;
          height: 160px;
          top: 15%;
          left: 3%;
          transform: rotate(-8deg);
          transition-delay: 0.3s;
        }

        .hero__reel-card--2 {
          width: 240px;
          height: 140px;
          top: 20%;
          right: 3%;
          transform: rotate(6deg);
          transition-delay: 0.5s;
        }

        .hero__reel-card--3 {
          width: 260px;
          height: 150px;
          bottom: 15%;
          right: 8%;
          transform: rotate(-4deg);
          transition-delay: 0.7s;
        }

        @media (max-width: 1200px) {
          .hero__reel-card {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero__actions {
            flex-direction: column;
          }

          .hero__btn {
            width: 100%;
          }

          .hero__stats {
            gap: 1rem;
          }

          .hero__stat-number {
            font-size: 1.375rem;
          }

          .hero__stat-label {
            font-size: 0.6875rem;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
