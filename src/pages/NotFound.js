import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-color)',
      color: 'var(--text-color)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div className="not-found-container" style={{
        maxWidth: '500px',
        padding: '2rem',
        borderRadius: '10px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', color: 'var(--primary-color)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.1rem', margin: '0 0 2rem 0', opacity: 0.8 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="back-home-btn"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: 'var(--primary-color)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.background = 'var(--primary-hover)'}
          onMouseOut={(e) => e.target.style.background = 'var(--primary-color)'}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
