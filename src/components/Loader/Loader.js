/**
 * Modern Loading Component
 * Sleek, animated loader for better UX
 */

import React from 'react';
import './Loader.css';

const Loader = ({ fullScreen = false }) => {
  const containerStyle = fullScreen ? {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-color)'
  } : {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
          <div className="loader-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
