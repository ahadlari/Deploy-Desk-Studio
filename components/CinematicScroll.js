'use client';

import { useEffect, useRef } from 'react';

export default function CinematicScroll() {
  const containerRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    // Dynamically import the vanilla JS engine
    import('./scrub-engine-v7.js').then((engine) => {
      if (!containerRef.current) return;
      
      engine.mountLetsScroll(containerRef.current, {
        nav: false,
        hint: 'scroll to fly in',
        diveScroll: 1.3,
        connScroll: 0.9,
        sections: [
          {
            id: 'scene1', label: 'The Cut',
            still: '/assets/scroll/scene1.jpg',
            clip: '/assets/scroll/dive_1.mp4',
            accent: '#8B5CF6',
            eyebrow: 'Assembly',
            title: 'The Cutting Room',
            body: 'Where raw footage transforms into narrative magic. We assemble your story with precision and pacing.',
            tags: ['Narrative Flow', 'Multi-cam Sync', 'Rough Cuts'],
          },
          {
            id: 'scene2', label: 'The Grade',
            still: '/assets/scroll/scene2.jpg',
            clip: '/assets/scroll/dive_2.mp4',
            accent: '#06B6D4',
            eyebrow: 'Atmosphere',
            title: 'The Color Suite',
            body: 'Cinematic color science that elevates every frame, establishing the perfect mood for your vision.',
            tags: ['HDR Finishing', 'Custom LUTs', 'Skin Tones'],
          },
          {
            id: 'scene3', label: 'The Magic',
            still: '/assets/scroll/scene3.jpg',
            clip: '/assets/scroll/dive_3.mp4',
            accent: '#EC4899',
            eyebrow: 'Visuals',
            title: 'VFX & Motion Graphics',
            body: 'Dynamic titles and seamless visual effects that push your content beyond the ordinary.',
            tags: ['3D Tracking', 'Compositing', 'Title Design'],
          },
          {
            id: 'finale', label: 'The Premiere',
            still: '/assets/scroll/scene4.jpg',
            clip: '/assets/scroll/dive_4.mp4',
            accent: '#8B5CF6',
            eyebrow: 'Delivery',
            title: 'The Final Masterpiece',
            body: 'Ready for the big screen. Delivered flawlessly in any format you need.',
            tags: [],
            cta: { primary: { label: 'Get in Touch', href: '#contact' },
                   secondary: { label: 'View Portfolio', href: '#portfolio' } },
          },
        ],
        connectors: [
          '/assets/scroll/conn1.mp4',
          '/assets/scroll/conn2.mp4',
          '/assets/scroll/conn3.mp4',
        ],
      });
    });
  }, []);

  return <div id="world" ref={containerRef} className="cinematic-scroll-container"></div>;
}
