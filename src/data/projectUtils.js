import projects from './projects';
import { validateProjects } from './projectTypes';

/**
 * Utility functions for project data operations
 * Provides helper functions for filtering, searching, and manipulating project data
 */

/**
 * Get all projects with validation
 * @returns {Array} - Array of validated project objects
 */
export const getAllProjects = () => {
  const validation = validateProjects(projects);
  if (!validation.isValid) {
    console.error('Project data validation failed:', validation.errors);
    // In development, you might want to throw an error
    // In production, you might want to return a filtered array or default data
  }
  return projects;
};

/**
 * Get project by ID
 * @param {number} id - Project ID to search for
 * @returns {Object|null} - Project object or null if not found
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

/**
 * Filter projects by category
 * @param {string} category - Category to filter by
 * @returns {Array} - Array of projects matching the category
 */
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

/**
 * Filter projects by status
 * @param {string} status - Status to filter by
 * @returns {Array} - Array of projects matching the status
 */
export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

/**
 * Filter projects by technology
 * @param {string} technology - Technology to search for
 * @returns {Array} - Array of projects using the specified technology
 */
export const getProjectsByTechnology = (technology) => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

/**
 * Search projects by title or description
 * @param {string} searchTerm - Term to search for
 * @returns {Array} - Array of projects matching the search term
 */
export const searchProjects = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(term) ||
    project.description.toLowerCase().includes(term) ||
    project.detailedDescription.toLowerCase().includes(term)
  );
};

/**
 * Get unique categories from all projects
 * @returns {Array} - Array of unique category strings
 */
export const getUniqueCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};

/**
 * Get unique technologies from all projects
 * @returns {Array} - Array of unique technology strings
 */
export const getUniqueTechnologies = () => {
  const allTechnologies = projects.flatMap(project => project.technologies);
  return [...new Set(allTechnologies)].sort();
};

/**
 * Get projects sorted by a specific field
 * @param {string} field - Field to sort by (title, category, status, duration, teamSize)
 * @param {string} order - Sort order ('asc' or 'desc')
 * @returns {Array} - Array of sorted projects
 */
export const getSortedProjects = (field = 'id', order = 'asc') => {
  const sortedProjects = [...projects];
  
  sortedProjects.sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];
    
    // Handle string comparisons
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (order === 'desc') {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    } else {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    }
  });
  
  return sortedProjects;
};

/**
 * Get featured projects (completed projects with high complexity)
 * @param {number} limit - Maximum number of projects to return
 * @returns {Array} - Array of featured projects
 */
export const getFeaturedProjects = (limit = 3) => {
  return projects
    .filter(project => project.status === 'Completed')
    .filter(project => project.category === 'Full Stack' || project.teamSize > 1)
    .slice(0, limit);
};

/**
 * Get project statistics
 * @returns {Object} - Object containing various project statistics
 */
export const getProjectStatistics = () => {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'In Progress').length;
  
  const categoryStats = {};
  projects.forEach(project => {
    categoryStats[project.category] = (categoryStats[project.category] || 0) + 1;
  });
  
  const technologyStats = {};
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      technologyStats[tech] = (technologyStats[tech] || 0) + 1;
    });
  });
  
  return {
    total: totalProjects,
    completed: completedProjects,
    inProgress: inProgressProjects,
    completionRate: Math.round((completedProjects / totalProjects) * 100),
    categories: categoryStats,
    technologies: technologyStats,
    averageTeamSize: Math.round(projects.reduce((sum, p) => sum + p.teamSize, 0) / totalProjects)
  };
};

/**
 * Format project data for display
 * @param {Object} project - Project object to format
 * @returns {Object} - Formatted project object with display-friendly values
 */
export const formatProjectForDisplay = (project) => {
  return {
    ...project,
    technologiesString: project.technologies.join(', '),
    featuresCount: project.features.length,
    challengesCount: project.challenges.length,
    screenshotsCount: project.screenshots ? project.screenshots.length : 0,
    shortDescription: project.description.length > 100 
      ? project.description.substring(0, 100) + '...' 
      : project.description
  };
};