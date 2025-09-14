import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ProjectDetailPropTypes } from '../../data/projectTypes';
import './ProjectDetail.css';

const ProjectDetail = ({ project, onClose, isVisible }) => {
  const navigate = useNavigate();
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isVisible) {
        if (onClose) {
          onClose();
        } else {
          navigate('/projects');
        }
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, onClose, navigate]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      if (onClose) {
        onClose();
      } else {
        navigate('/projects');
      }
    }
  };

  // Handle close button click
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/projects');
    }
  };

  if (!isVisible || !project) {
    return null;
  }

  return (
    <div 
      className="project-detail-overlay" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      aria-describedby="project-description"
    >
      <div className="project-detail-modal">
        {/* Close button */}
        <button 
          className="project-detail-close"
          onClick={handleClose}
          aria-label="Close project details"
        >
          <span>&times;</span>
        </button>

        {/* Project header */}
        <div className="project-detail-header">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-detail-image"
            onError={(e) => {
              e.target.src = '/assets/placeholder.png';
            }}
          />
          <div className="project-detail-info">
            <h1 id="project-title" className="project-detail-title">
              {project.title}
            </h1>
            <div className="project-detail-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-status">{project.status}</span>
              <span className="project-duration">{project.duration}</span>
              <span className="project-team">Team: {project.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="project-detail-content">
          {/* Description */}
          <section className="project-section">
            <h2>About This Project</h2>
            <p id="project-description" className="project-detailed-description">
              {project.detailedDescription}
            </p>
          </section>

          {/* Technologies */}
          <section className="project-section">
            <h2>Technologies Used</h2>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="project-features">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="project-section">
            <h2>Challenges & Solutions</h2>
            <ul className="project-challenges">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="challenge-item">
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 1 && (
            <section className="project-section">
              <h2>Samples</h2>
              <div className="project-screenshots">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="screenshot-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Action buttons */}
          <section className="project-section">
            <div className="project-actions">
              {project.github && project.github !== '#' && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-action-btn github-btn"
                >
                  <span>View Code</span>
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-action-btn demo-btn"
                >
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </section>
        </div>

        {/* Back to grid button */}
        <div className="project-detail-footer">
          <button 
            className="back-to-grid-btn"
            onClick={handleClose}
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  ...ProjectDetailPropTypes,
  onClose: PropTypes.func
};

ProjectDetail.defaultProps = {
  isVisible: false,
  onClose: null
};

export default ProjectDetail;