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
        </div>

        <div className="about-content">
          <div className="about-text hidden" data-animation="animate-from-left" data-delay="delay-200">
            <p className="about-intro">
              <strong>SINTAYEHU BELFA</strong><br/>
              Flutter Mobile Application Developer | Android & iOS Cross-Platform Expert | Spring Boot Backend Engineer
            </p>
            
            <p className="about-focus">
              Mobile Application Developer specializing in building high-performance Android & iOS apps using Flutter and architecting scalable backend services with Spring Boot. Skilled in designing clean, maintainable code, integrating secure APIs, and optimizing app performance for enterprise-grade solutions. Experienced in deploying apps to both Play Store and App Store, implementing CI/CD pipelines, integrating third-party APIs, and working with real-time data synchronization.
            </p>
            
            <p className="about-vision">
              Proficient in Agile development practices, cloud deployment, and delivering scalable, user-centric mobile solutions that meet business goals and enhance user experience. Expert in mobile development with Flutter, implementing DDD (Domain-Driven Design) architecture, BLoC state management, and feature-first approach for building robust cross-platform mobile applications. Specialized in secure transaction processing, real-time data synchronization, and comprehensive mobile platforms that deliver exceptional user experiences across Android and iOS devices.
            </p>

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
                <span className="highlight-text">Spring Boot Backend</span>
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