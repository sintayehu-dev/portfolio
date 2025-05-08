import React, { useState } from 'react';
import './About.css';
import { FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-custom hidden" data-animation="animate-fade-up">
          <FaChevronLeft className="title-icon" />
          <h2>About Me</h2>
          <FaChevronRight className="title-icon" />
        </div>

        <div className="about-content">
          <div className="about-image-container hidden" data-animation="animate-from-left" data-delay="delay-200">
            <div className="about-image-frame">
              {!imageError ? (
                <img 
                  src="/assets/profile-photo.png" 
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
          
          <div className="about-text hidden" data-animation="animate-from-right" data-delay="delay-300">
            <h3>Who I am?</h3>
            <p>
            I'm Sintayehu Belfa, a Computer Science graduate from Arbaminch University and
             a passionate Full-Stack Developer with a strong background in building scalable, 
             user-centered web and mobile applications. I focus on delivering clean, intuitive, 
             and efficient digital solutions that enhance user experience and drive meaningful results. 
             With a history of successful project delivery and open-source contributions, 
             I thrive in collaborative, forward-thinking environments. I see technology as
              a powerful medium for innovation and positive change, and I'm eager to contribute my skills
             to impactful projects that shape a better future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 