import PropTypes from 'prop-types';

/**
 * PropTypes definitions for project data validation
 * Ensures data integrity and provides development-time type checking
 */

// Individual project PropTypes
export const ProjectPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detailedDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  screenshots: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.oneOf(['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Desktop']).isRequired,
  status: PropTypes.oneOf(['In Progress', 'Completed', 'On Hold', 'Cancelled']).isRequired,
  duration: PropTypes.string.isRequired,
  teamSize: PropTypes.number.isRequired
});

// Array of projects PropTypes
export const ProjectsPropTypes = PropTypes.arrayOf(ProjectPropTypes);

// PropTypes for components that use project data
export const ProjectCardPropTypes = {
  project: ProjectPropTypes.isRequired,
  onClick: PropTypes.func
};

export const ProjectDetailPropTypes = {
  project: ProjectPropTypes.isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export const ProjectsGridPropTypes = {
  projects: ProjectsPropTypes.isRequired,
  onProjectSelect: PropTypes.func.isRequired
};

// Default props for optional fields
export const ProjectDefaultProps = {
  screenshots: [],
  onClick: () => {}
};

export const ProjectDetailDefaultProps = {
  isVisible: false
};

/**
 * Validation function to check if project data meets requirements
 * @param {Object} project - Project object to validate
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
export const validateProject = (project) => {
  const errors = [];
  
  // Required fields validation
  if (!project.id || typeof project.id !== 'number') {
    errors.push('Project ID is required and must be a number');
  }
  
  if (!project.title || typeof project.title !== 'string' || project.title.trim().length === 0) {
    errors.push('Project title is required and must be a non-empty string');
  }
  
  if (!project.description || typeof project.description !== 'string' || project.description.trim().length === 0) {
    errors.push('Project description is required and must be a non-empty string');
  }
  
  if (!project.detailedDescription || typeof project.detailedDescription !== 'string' || project.detailedDescription.trim().length === 0) {
    errors.push('Project detailed description is required and must be a non-empty string');
  }
  
  if (!project.technologies || !Array.isArray(project.technologies) || project.technologies.length === 0) {
    errors.push('Project technologies must be a non-empty array');
  }
  
  if (!project.features || !Array.isArray(project.features) || project.features.length === 0) {
    errors.push('Project features must be a non-empty array');
  }
  
  if (!project.challenges || !Array.isArray(project.challenges) || project.challenges.length === 0) {
    errors.push('Project challenges must be a non-empty array');
  }
  
  // URL validation for github and demo links
  if (!project.github || typeof project.github !== 'string') {
    errors.push('Project GitHub link is required');
  }
  
  if (!project.demo || typeof project.demo !== 'string') {
    errors.push('Project demo link is required');
  }
  
  // Category validation
  const validCategories = ['Frontend', 'Backend', 'Full Stack', 'Mobile', 'Desktop'];
  if (!project.category || !validCategories.includes(project.category)) {
    errors.push(`Project category must be one of: ${validCategories.join(', ')}`);
  }
  
  // Status validation
  const validStatuses = ['In Progress', 'Completed', 'On Hold', 'Cancelled'];
  if (!project.status || !validStatuses.includes(project.status)) {
    errors.push(`Project status must be one of: ${validStatuses.join(', ')}`);
  }
  
  // Team size validation
  if (!project.teamSize || typeof project.teamSize !== 'number' || project.teamSize < 1) {
    errors.push('Project team size must be a positive number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validation function for arrays of projects
 * @param {Array} projects - Array of project objects to validate
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
export const validateProjects = (projects) => {
  const errors = [];
  
  if (!Array.isArray(projects)) {
    errors.push('Projects must be an array');
    return { isValid: false, errors };
  }
  
  if (projects.length === 0) {
    errors.push('Projects array cannot be empty');
    return { isValid: false, errors };
  }
  
  // Check for duplicate IDs
  const ids = projects.map(project => project.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    errors.push(`Duplicate project IDs found: ${duplicateIds.join(', ')}`);
  }
  
  // Validate each project
  projects.forEach((project, index) => {
    const validation = validateProject(project);
    if (!validation.isValid) {
      errors.push(`Project at index ${index}: ${validation.errors.join(', ')}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};