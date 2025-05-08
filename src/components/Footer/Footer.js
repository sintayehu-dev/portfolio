import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaArrowUp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Get the About section position
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        // Show button when scrolled past About section
        setShowScrollTop(aboutPosition < 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-logo-area">
            <a href="#home"> <h4 style={{ fontFamily: 'Kode Mono, monospace', fontWeight: 'bold' }}>
            S<strong style={{ color: 'var(--primary-color)' }}>B</strong>
          </h4></a>
              <p>Building digital experiences that inspire</p>
              
              <div className="social-links">
                <a href="https://github.com/sintayehu-dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.facebook.com/profile.php?id=100035202185891" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/jo_sinte/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="http://linkedin.com/in/sintayehu-belfa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:sintayehubelfa23@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
            
            <div className="contact-info-footer">
              <h3>Contact Information</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+251928870057">+251 928 870 057</a>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:sintayehubelfa23@gmail.com">sintayehubelfa23@gmail.com</a>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <a href="https://www.google.com/maps/place/Addis+Ababa" target="_blank" rel="noopener noreferrer">
                    Addis Ababa, Ethiopia
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {currentYear} | All Rights Reserved</p>
            <div className="footer-bottom-links">
              <p>Designed by Sintayehu Dev</p>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
          <span className="back-to-top-circle"></span>
        </div>
      )}
    </footer>
  );
};

export default Footer; 