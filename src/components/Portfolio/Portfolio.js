import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with user authentication and payment processing.",
      image: "/assets/ecommerce.png",
      technologies: "React, Django, PostgreSQL, Stripe",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Haile Resort Clone",
      description: "A beautiful recreation of Haile Resort website with modern UI design and responsive layout.",
      image: "/assets/haileresort.png",
      technologies: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Ethiopian Recipe App",
      description: "An application showcasing traditional Ethiopian recipes with step-by-step cooking instructions.",
      image: "/assets/ethiorecipe.png",
      technologies: "React, Firebase, Styled Components",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Class Scheduling System",
      description: "An interactive class scheduling application to organize and manage educational timetables efficiently.",
      image: "/assets/class scheduling.png",
      technologies: "React, Spring Boot, PostgreSQL, restful api",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Employee Evaluation System",
      description: "A comprehensive solution for managing employee performance reviews and feedback processes.",
      image: "/assets/employe evaluation system.jpg",
      technologies: "React, Spring Boot, PostgreSQL, restful api",
      github: "#",
      demo: "#"
    }
  ];

  // Create an array with duplicated projects for continuous scrolling
  const extendedProjects = [...projects, ...projects, ...projects];
  
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideWidth, setSlideWidth] = useState(33.333);
  
  // Detect screen size and set the appropriate slide width percentage
  useEffect(() => {
    const updateSlideWidth = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlideWidth(100);
      } else if (width <= 768) {
        setSlideWidth(50);
      } else {
        setSlideWidth(33.333);
      }
    };
    
    // Initial call
    updateSlideWidth();
    
    // Add event listener
    window.addEventListener('resize', updateSlideWidth);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);
  
  // Advance slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    // When reaching the end of the duplicate projects, reset to the original position seamlessly
    if (currentIndex >= projects.length - 1) {
      setTimeout(() => {
        if (slidesRef.current) {
          slidesRef.current.style.transition = 'none';
          setCurrentIndex(0);
          
          // Force reflow to make the transition removal take effect
          void slidesRef.current.offsetHeight;
          
          // Re-enable transition
          setTimeout(() => {
            if (slidesRef.current) {
              slidesRef.current.style.transition = 'transform 0.8s ease';
              setIsTransitioning(false);
            }
          }, 50);
        }
      }, 800);
    } else {
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [currentIndex, isTransitioning]);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-title-custom hidden" data-animation="animate-fade-up">
          <FaChevronLeft className="title-icon" />
          <h2>Portfolio</h2>
          <FaChevronRight className="title-icon" />
        </div>

        <div className="slider-container hidden" data-animation="animate-fade-up" data-delay="delay-200">
          <div 
            ref={slidesRef}
            className="slides" 
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {extendedProjects.map((project, index) => (
              <div className="slide" key={`${project.id}-${index}`}>
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} className="btn-project">GitHub</a>
                        <a href={project.demo} className="btn-project">Live Demo</a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      <span>{project.technologies}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {projects.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex % projects.length ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  if (slidesRef.current) {
                    slidesRef.current.style.transition = 'transform 0.8s ease';
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 