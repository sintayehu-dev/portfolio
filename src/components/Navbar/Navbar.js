import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is currently in view
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
  };

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>
          <div className="logo">
            <a href="#home"> <h4 style={{ fontFamily: 'Kode Mono, monospace', fontWeight: 'bold' }}>
            S<strong style={{ color: 'var(--primary-color)' }}>B</strong>
          </h4></a>
          </div>
        </div>
        
        <div className="navbar-right">
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a>
          <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={closeMenu}>About</a>
          <a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a>
          <a href="#services" className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={closeMenu}>Services</a>
          <a href="#portfolio" className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`} onClick={closeMenu}>Portfolio</a>
          <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 