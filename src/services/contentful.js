/**
 * Contentful CMS Service
 * Handles all interactions with Contentful API
 */

import { createClient } from 'contentful';

// Get environment variables with fallback to hardcoded values for testing
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID || 'ljv58ycon8ns';
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || 'NOL_cKEn9psxI0Njm0kFaRYZLJIqJZnFUnHJ-vidDXc';
const ENVIRONMENT = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

// Log for debugging
console.log('Contentful Config:', {
  spaceId: SPACE_ID,
  hasToken: !!ACCESS_TOKEN,
  environment: ENVIRONMENT,
  fromEnv: !!process.env.REACT_APP_CONTENTFUL_SPACE_ID
});

// Create Contentful client
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT
});

/**
 * Transform Contentful project entry to application format
 */
const transformProject = (entry) => {
  const fields = entry.fields;
  
  // Helper function to ensure array format (handles both list and single text fields)
  const ensureArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value];
    return [];
  };
  
  return {
    id: entry.sys.id,
    title: fields.title || '',
    slug: fields.slug || '',
    description: fields.description || '',
    detailedDescription: fields.detailedDescription || '',
    image: fields.mainImage?.fields?.file?.url 
      ? `https:${fields.mainImage.fields.file.url}` 
      : '/assets/placeholder-project.png',
    screenshots: fields.screenshots?.map(img => 
      img.fields?.file?.url ? `https:${img.fields.file.url}` : ''
    ).filter(Boolean) || [],
    videoUrl: fields.videoUrl || '',
    documentUrl: fields.documentUrl || '',
    technologies: ensureArray(fields.technologies),
    features: ensureArray(fields.features),
    challenges: ensureArray(fields.challengesList || fields.challenges), // Support both old and new field
    solutions: ensureArray(fields.solutions),
    category: fields.category || 'Uncategorized',
    status: fields.status || 'In Progress',
    duration: fields.duration || '',
    teamSize: fields.teamSize || 0,
    github: fields.githubUrl || '#',
    demo: fields.demoUrl || '#',
    order: fields.order || 999
  };
};

/**
 * Fetch all projects from Contentful
 */
export const fetchProjects = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'pproject', // Changed to match your Contentful model name
      order: '-sys.createdAt' // Order by creation date (newest first)
    });

    return response.items.map(transformProject);
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
    throw new Error('Failed to fetch projects. Please try again later.');
  }
};

/**
 * Fetch a single project by ID
 */
export const fetchProjectById = async (id) => {
  try {
    const entry = await client.getEntry(id);
    return transformProject(entry);
  } catch (error) {
    console.error(`Error fetching project ${id} from Contentful:`, error);
    throw new Error('Failed to fetch project details. Please try again later.');
  }
};

/**
 * Fetch a single project by slug
 */
export const fetchProjectBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'pproject', // Changed to match your Contentful model name
      'fields.slug': slug,
      limit: 1
    });

    if (response.items.length === 0) {
      throw new Error('Project not found');
    }

    return transformProject(response.items[0]);
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    throw new Error('Failed to fetch project details. Please try again later.');
  }
};

/**
 * Fetch projects by category
 */
export const fetchProjectsByCategory = async (category) => {
  try {
    const response = await client.getEntries({
      content_type: 'pproject', // Changed to match your Contentful model name
      'fields.category': category,
      order: '-sys.createdAt'
    });

    return response.items.map(transformProject);
  } catch (error) {
    console.error(`Error fetching projects in category ${category}:`, error);
    throw new Error('Failed to fetch projects. Please try again later.');
  }
};

/**
 * Check if Contentful is properly configured
 */
export const isContentfulConfigured = () => {
  return true; // Always return true since we have fallback values
};

// Default export for convenience
const contentfulService = {
  fetchProjects,
  fetchProjectById,
  fetchProjectBySlug,
  fetchProjectsByCategory,
  isContentfulConfigured
};

export default contentfulService;
