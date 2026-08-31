'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 'eclat-noir',
    title: 'Éclat Noir',
    category: 'Commercial',
    description: 'Luxury perfume brand commercial with dramatic lighting and golden particle effects.',
    image: '/assets/portfolio/commercial.jpg',
    client: 'Éclat Fragrance',
    year: '2024',
  },
  {
    id: 'neon-waves',
    title: 'Neon Waves',
    category: 'Music Video',
    description: 'High-energy music video featuring dynamic LED visuals and atmospheric staging.',
    image: '/assets/portfolio/musicvideo.jpg',
    client: 'Luna Riot',
    year: '2024',
  },
  {
    id: 'the-encounter',
    title: 'The Encounter',
    category: 'Short Film',
    description: 'Award-winning noir short film with dramatic chiaroscuro lighting.',
    image: '/assets/portfolio/shortfilm.jpg',
    client: 'Indie Film Collective',
    year: '2023',
  },
  {
    id: 'drive-beyond',
    title: 'Drive Beyond',
    category: 'Commercial',
    description: 'Cinematic car commercial shot on coastal roads at golden hour.',
    image: '/assets/portfolio/automotive.jpg',
    client: 'AutoLux Motors',
    year: '2024',
  },
  {
    id: 'taste-of-indulgence',
    title: 'Taste of Indulgence',
    category: 'Commercial',
    description: 'Macro food cinematography for a premium chocolate brand.',
    image: '/assets/portfolio/food.jpg',
    client: 'Maison Cacao',
    year: '2023',
  },
  {
    id: 'eternal-moments',
    title: 'Eternal Moments',
    category: 'Wedding',
    description: 'Romantic wedding film captured in an elegant European ballroom.',
    image: '/assets/portfolio/wedding.jpg',
    client: 'Private Client',
    year: '2024',
  },
];

const categories = ['All', 'Commercial', 'Music Video', 'Short Film', 'Wedding'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
      <section id="portfolio" className="portfolio section" ref={sectionRef}>
        <div className="portfolio__glow" />
        <div className="container">
          <div className={`section-header ${visible ? 'animate-fade-in-up' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
            <div className="section-eyebrow">Our Work</div>
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              A curated selection of our finest work across genres and industries.
            </p>
          </div>

          {/* Category filters */}
          <div className="portfolio__filters">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                className={`portfolio__filter ${activeCategory === cat ? 'portfolio__filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio__grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`portfolio__card ${visible ? 'portfolio__card--visible' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="portfolio__card-image">
                  <img src={project.image} alt={project.title} />
                  <div className={`portfolio__card-overlay ${hoveredId === project.id ? 'portfolio__card-overlay--active' : ''}`}>
                    <div className="portfolio__card-play">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="portfolio__card-info">
                  <span className="portfolio__card-category">{project.category}</span>
                  <h3 className="portfolio__card-title">{project.title}</h3>
                  <p className="portfolio__card-desc">{project.description}</p>
                  <div className="portfolio__card-meta">
                    <span>{project.client}</span>
                    <span className="portfolio__card-dot">•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio {
          position: relative;
          overflow: hidden;
        }

        .portfolio__glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle at center, rgba(6, 182, 212, 0.12) 0%, transparent 50%);
          top: 20%;
          right: -25%;
          pointer-events: none;
          transform: translateZ(0);
          pointer-events: none;
        }

        /* Filters */
        .portfolio__filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .portfolio__filter {
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .portfolio__filter:hover {
          color: var(--color-text-primary);
          border-color: rgba(139, 92, 246, 0.2);
        }

        .portfolio__filter--active {
          color: white;
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.15);
        }

        /* Grid */
        .portfolio__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .portfolio__card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-card);
          border: 1px solid rgba(139, 92, 246, 0.1);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 0;
          transform: translateY(30px);
        }

        .portfolio__card--visible {
          animation: fadeInUp 0.7s var(--ease-smooth) both;
        }

        .portfolio__card:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.1);
        }

        .portfolio__card-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .portfolio__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .portfolio__card:hover .portfolio__card-image img {
          transform: scale(1.05);
        }

        .portfolio__card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 15, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio__card-overlay--active {
          opacity: 1;
        }

        .portfolio__card-play {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .portfolio__card-overlay--active .portfolio__card-play {
          transform: scale(1);
        }

        .portfolio__card-info {
          padding: 1.25rem;
        }

        .portfolio__card-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-violet);
        }

        .portfolio__card-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0.375rem 0;
        }

        .portfolio__card-desc {
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .portfolio__card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .portfolio__card-dot {
          color: var(--color-violet);
        }

        @media (max-width: 1024px) {
          .portfolio__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .portfolio__grid {
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
