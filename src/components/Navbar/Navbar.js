import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Get current path for active link styling
  const getCurrentPath = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/projects') return 'projects';
    if (path === '/contact') return 'contact';
    if (path.startsWith('/project/')) return 'projects';
    return 'home';
  };

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, handleKeyDown]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkTheme ? <FaSun /> : <FaMoon />}
            </button>
            <div className="logo">
              <Link to="/" onClick={closeMenu} style={{ textDecoration: 'none' }}>
                <h4 style={{ fontFamily: 'Kode Mono, monospace', fontWeight: 'bold', color: 'var(--text-color)' }}>
                  S<strong style={{ color: 'var(--primary-color)' }}>B</strong>
                </h4>
              </Link>
            </div>
          </div>
          
          <div className="navbar-right">
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div 
            className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            role="navigation"
            aria-label="Main navigation"
            aria-hidden={!isMenuOpen}
          >
            <Link 
              to="/"
              className={`nav-link ${getCurrentPath() === 'home' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/projects"
              className={`nav-link ${getCurrentPath() === 'projects' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className={`nav-link ${getCurrentPath() === 'contact' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu backdrop */}
      {isMenuOpen && <div className={`mobile-menu-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar; 