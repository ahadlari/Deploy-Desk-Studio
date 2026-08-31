'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a slight delay once everything is loaded
    const hidePreloader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 800); // 800ms delay to make sure the message is read and assets are ready
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }

    // Fallback just in case load event takes too long
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', hidePreloader);
      clearTimeout(timeout);
    };
  }, []);

  if (typeof window === 'undefined') {
    // Render the preloader state during SSR so it's there immediately
    return (
      <div className="sw-preloader">
        <div className="sw-preloader__content">
          <h1 className="sw-preloader__text">Welcome to Deploy Desk Studio</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={`sw-preloader ${loading ? '' : 'sw-preloader--hidden'}`}>
      <div className="sw-preloader__content">
        <h1 className="sw-preloader__text">Welcome to Deploy Desk Studio</h1>
      </div>
    </div>
  );
}
