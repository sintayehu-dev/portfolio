/**
 * Loader Component
 * Internal loading animation for projects and content loading states
 * Features: Spinning rings with smooth animations
 */

import './Loader.css';

const Loader = ({ fullScreen = false, message = '' }) => {
  return (
    <div className={`loader-wrapper ${fullScreen ? 'fullscreen' : 'inline'}`}>
      <div className="loader-container">
        <div className="modern-loader">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-dot"></div>
        </div>

        {message && (
          <div className="loader-message">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Loader;
