import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaCode, FaMobile, FaDesktop, FaServer, FaDatabase, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if there's a theme preference
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    // Add theme change listener
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(newTheme);
    };

    // MutationObserver to detect theme changes
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get all skill categories and add the animate class
          const skillCategories = document.querySelectorAll('.skill-category');
          skillCategories.forEach(category => {
            category.classList.add('animate');
          });
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef} data-theme={theme}>
      <div className="container">
        <div className="section-title-custom hidden" data-animation="animate-fade-up">
          <FaChevronLeft className="title-icon" />
          <h2>Skills</h2>
          <FaChevronRight className="title-icon" />
        </div>

        <div className="skills-container">
          {/* Programming Languages */}
          <div className="skill-category hidden" data-animation="animate-from-left" data-delay="delay-200" ref={el => skillsRef.current[0] = el}>
            <div className="skill-header">
              <FaCode className="skill-icon" />
              <h4>Programming Languages</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Dart</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="skill-category hidden" data-animation="animate-from-right" data-delay="delay-300" ref={el => skillsRef.current[1] = el}>
            <div className="skill-header">
              <FaMobile className="skill-icon" />
              <h4>Mobile Development</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Bloc</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">FCM</span>
              <span className="skill-tag">Android</span>
              <span className="skill-tag">iOS</span>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="skill-category hidden" data-animation="animate-from-left" data-delay="delay-400" ref={el => skillsRef.current[2] = el}>
            <div className="skill-header">
              <FaDesktop className="skill-icon" />
              <h4>Frontend Development</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">axios</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap</span>  
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill-category hidden" data-animation="animate-from-right" data-delay="delay-500" ref={el => skillsRef.current[3] = el}>
            <div className="skill-header">
              <FaServer className="skill-icon" />
              <h4>Backend Development</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Go</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">RESTful APIs</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category hidden" data-animation="animate-from-left" data-delay="delay-600" ref={el => skillsRef.current[4] = el}>
            <div className="skill-header">
              <FaDatabase className="skill-icon" />
              <h4>Databases</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category hidden" data-animation="animate-from-right" data-delay="delay-700" ref={el => skillsRef.current[5] = el}>
            <div className="skill-header">
              <FaTools className="skill-icon" />
              <h4>Tools</h4>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">IntelliJ</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Slack</span>
              <span className="skill-tag">Taiga</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 