import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then hide preloader
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible';
    }, 2500);

    // Initially prevent scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className={`preloader ${loading ? 'active' : 'fade-out'}`}>
      <div className="preloader-content">
        <div className="loader">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 