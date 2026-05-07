/**
 * Preloader Component
 * Full-screen loading animation shown during initial website load
 * Features: Elegant wave animation with brand colors
 */

import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after initial load
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    }, 2500);

    // Prevent scrolling during preload
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className={`preloader ${loading ? 'active' : 'fade-out'}`}>
      <div className="preloader-content">
        <div className="preloader-animation">
          {/* Wave circles animation */}
          <div className="wave-circle wave-1"></div>
          <div className="wave-circle wave-2"></div>
          <div className="wave-circle wave-3"></div>
          <div className="wave-circle wave-4"></div>

          {/* Center logo/icon */}
          <div className="preloader-icon">
            <div className="icon-inner"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="preloader-text">
          <span className="loading-letter">L</span>
          <span className="loading-letter">o</span>
          <span className="loading-letter">a</span>
          <span className="loading-letter">d</span>
          <span className="loading-letter">i</span>
          <span className="loading-letter">n</span>
          <span className="loading-letter">g</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
