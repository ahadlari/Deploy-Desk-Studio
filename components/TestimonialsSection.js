'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Director, Éclat Fragrance',
    quote: 'CutFlow Studio transformed our product launch video into a cinematic experience. The attention to detail in every frame was extraordinary. Our campaign views tripled.',
    rating: 5,
    avatar: 'SM',
    accentColor: '#8B5CF6',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Independent Filmmaker',
    quote: 'Working with CutFlow was a game-changer for my short film. Their color grading alone elevated the entire production to festival-quality. We won three awards.',
    rating: 5,
    avatar: 'JR',
    accentColor: '#EC4899',
  },
  {
    id: 3,
    name: 'Emma Chen',
    role: 'CEO, NovaTech Startups',
    quote: 'They made our boring corporate video into something our team actually wanted to share. The motion graphics and pacing were perfect. Highly recommend.',
    rating: 5,
    avatar: 'EC',
    accentColor: '#06B6D4',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Music Artist & Producer',
    quote: 'My music video for "Neon Waves" went viral thanks to CutFlow\'s incredible editing and VFX. They understood my vision from day one and brought it to life.',
    rating: 5,
    avatar: 'DP',
    accentColor: '#F59E0B',
  },
  {
    id: 5,
    name: 'Olivia & Marcus',
    role: 'Wedding Clients',
    quote: 'We cry every time we watch our wedding film. CutFlow captured moments we didn\'t even know happened. It\'s the most precious thing we own.',
    rating: 5,
    avatar: 'O&M',
    accentColor: '#8B5CF6',
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index) => setCurrentIndex(index);

  return (
    <>
      <section id="testimonials" className="testimonials section" ref={sectionRef}>
        <div className="testimonials__glow" />
        <div className="container">
          <div className={`section-header ${visible ? 'animate-fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
            <div className="section-eyebrow">Testimonials</div>
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients</span> Say
            </h2>
            <p className="section-subtitle">
              Don&apos;t just take our word for it — hear from the people we&apos;ve worked with.
            </p>
          </div>

          <div
            className="testimonials__carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="testimonials__track"
              ref={trackRef}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="testimonials__slide">
                  <div className="testimonials__card glass-card">
                    <div className="testimonials__card-quote">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" opacity="0.15">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2c1 0 1 0 1 1v1c0 3-2 4-4 4H3z" fill="currentColor"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2c1 0 1 0 1 1v1c0 3-2 4-4 4h-1z" fill="currentColor"/>
                      </svg>
                    </div>

                    <div className="testimonials__stars">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={t.accentColor}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>

                    <p className="testimonials__text">&ldquo;{t.quote}&rdquo;</p>

                    <div className="testimonials__author">
                      <div className="testimonials__avatar" style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentColor}88)` }}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="testimonials__name">{t.name}</div>
                        <div className="testimonials__role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${currentIndex === i ? 'testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .testimonials {
          position: relative;
          overflow: hidden;
        }

        .testimonials__glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 50%);
          top: 10%;
          left: 20%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        .testimonials__carousel {
          overflow: hidden;
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .testimonials__track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .testimonials__slide {
          min-width: 100%;
          padding: 0 1rem;
        }

        .testimonials__card {
          padding: 2.5rem;
          text-align: center;
          position: relative;
        }

        .testimonials__card-quote {
          margin-bottom: 1rem;
          color: var(--color-violet);
        }

        .testimonials__stars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .testimonials__text {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonials__author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .testimonials__avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8125rem;
          font-weight: 700;
          color: white;
        }

        .testimonials__name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
        }

        .testimonials__role {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }

        /* Dots */
        .testimonials__dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          position: relative;
          z-index: 1;
        }

        .testimonials__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .testimonials__dot--active {
          background: var(--color-violet);
          width: 28px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
        }

        @media (max-width: 640px) {
          .testimonials__card {
            padding: 1.5rem;
          }

          .testimonials__text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
