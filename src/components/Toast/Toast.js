import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className={`toast ${isVisible ? 'toast-visible' : ''}`} role="status" aria-live="polite">
      <div className="toast-content">
        <span className="toast-icon" aria-hidden="true">🔔</span>
        <span className="toast-message">{message}</span>
        <button 
          className="toast-close" 
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      <div className="toast-timer" style={{ animationDuration: `${duration}ms` }} />
    </div>
  );
};

export default Toast;


