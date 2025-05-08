import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const toRotate = ['Software Developer', 'Online Mentor'];
  const period = 2000;
  const typingRef = useRef();

  useEffect(() => {
    // Function to handle theme changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme);
      
      // Add the theme as a data attribute to the document body as well
      document.body.setAttribute('data-theme', currentTheme);
    };

    // Initial theme
    handleThemeChange();

    // Set up observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ticker = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      let newText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(newText);

      if (isDeleting) {
        setTypingSpeed(50); // Faster when deleting
      }

      if (!isDeleting && newText === fullText) {
        // Wait before starting to delete
        setIsDeleting(true);
        setTypingSpeed(period);
      } else if (isDeleting && newText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        // Normal typing speed
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    typingRef.current = setTimeout(ticker, typingSpeed);
    return () => clearTimeout(typingRef.current);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section id="home">
      <div className={`hero-container ${theme === 'light' ? 'light-theme' : ''}`}>
        <div className="hero-text" data-aos="fade-in">
          <h2 style={{ fontFamily: 'Kode Mono, monospace', fontWeight: 'bold' }}>
            Sintayehu <strong style={{ color: 'var(--primary-color)' }}>Belfa</strong>
          </h2>
          <p>
            I'm <span className="typing-text">{text}</span><span className="cursor">|</span>
          </p>
          
          <div className="button-group">
            <a href="https://drive.google.com/file/d/17sTgj4NHbeKEtF2ySg0ELMrr-iPtkd4M/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="cv">Resume</button>
            </a>
            <a href="https://t.me/J0sinte" target="_blank" rel="noopener noreferrer">
              <button className="cv"><FaTelegram /> let's talk</button>
            </a>
          </div>

          <div className="social-links" data-theme={theme}>
            <a href="https://github.com/sintayehu-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100035202185891" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/jo_sinte/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="http://linkedin.com/in/sintayehu-belfa" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 