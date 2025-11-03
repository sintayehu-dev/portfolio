import React, { useState } from 'react';
import './About.css';
import { FaUser } from 'react-icons/fa';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="home" className="section">
      <div className="container">
        {/* Welcome Message */}
        <div className="welcome-section hidden" data-animation="animate-fade-up" data-delay="delay-100">
          <h1 className="welcome-title">Hello! 👋</h1>
          <p className="welcome-subtitle">Welcome to my portfolio site</p>
        </div>

        <div className="about-content">
          <div className="about-text hidden" data-animation="animate-from-left" data-delay="delay-200">
            <p className="about-intro">
              <strong>SINTAYEHU BELFA</strong><br/>
              Flutter Mobile Application Developer | Android & iOS Cross-Platform Expert
            </p>
            
            <p className="about-focus">
              Mobile Application Developer specializing in building high-performance Android & iOS apps using Flutter. Skilled in designing clean, maintainable code with Dart, integrating secure REST/GraphQL APIs and Firebase/Supabase backends, and optimizing app performance for enterprise-grade solutions. Experienced in deploying apps to both Play Store and App Store, implementing CI/CD pipelines, integrating third-party services, and working with real-time data synchronization.
            </p>
            
            <p className="about-vision">
            Proficient in Agile development practices and dedicated to delivering high-performance, user-centric mobile applications that align with business goals and enhance user experience. Expert in Flutter development, applying Domain-Driven Design (DDD), BLoC state management, and a feature-first approach to build robust, maintainable cross-platform apps. Experienced in integrating secure payment systems, enabling real-time data synchronization, and crafting smooth, consistent experiences across Android and iOS devices.</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">📱</span>
                <span className="highlight-text">Flutter Expert</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔄</span>
                <span className="highlight-text">Cross-Platform</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚙️</span>
                <span className="highlight-text">Flutter & Dart</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏗️</span>
                <span className="highlight-text">Clean Architecture</span>
              </div>
            </div>
          </div>
          
          <div className="about-image-container hidden" data-animation="animate-from-right" data-delay="delay-300">
            <div className="about-image-frame">
              {!imageError ? (
                <img 
                  src="/assets/profile-photo.jpg" 
                  alt="Sintayehu Belfa" 
                  className="about-image"
                  onError={handleImageError}
                />
              ) : (
                <div className="image-placeholder">
                  <FaUser />
                  <p>Image could not be loaded</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 