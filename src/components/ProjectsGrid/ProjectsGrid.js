import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProjectsGrid.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useToast } from '../../contexts/ToastContext';
import projects from '../../data/projects';

const ProjectsGrid = ({ onProjectSelect }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  const handleProjectClick = (project) => {
    if (onProjectSelect) {
      onProjectSelect(project);
    } else {
      // Use React Router navigation if no callback is provided
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title-custom hidden" data-animation="animate-fade-up">
         
        </div>

        <div className="projects-grid-container hidden" data-animation="animate-fade-up" data-delay="delay-200">
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => handleProjectClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProjectClick(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = '/assets/placeholder-project.png';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a 
                        href={project.github} 
                        className="project-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          showToast("Contact me if you want to github link url");
                        }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.demo} 
                        className="project-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          showToast("Contact me to get the APK");
                        }}
                        aria-label={`Contact to get APK for ${project.title}`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    <div className="project-overlay-text">
                      <span>Click to view details</span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectsGrid.propTypes = {
  onProjectSelect: PropTypes.func
};

export default ProjectsGrid;