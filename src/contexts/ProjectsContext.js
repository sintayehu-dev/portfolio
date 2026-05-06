/**
 * Projects Context - Provides caching for projects data
 * Prevents unnecessary reloading when navigating back to projects page
 */

import React, { createContext, useContext, useState, useCallback } from 'react';
import { fetchProjects, fetchProjectById } from '../services/contentful';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projectsCache, setProjectsCache] = useState(null);
  const [projectDetailsCache, setProjectDetailsCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all projects with caching
  const getProjects = useCallback(async (forceRefresh = false) => {
    // Return cached data if available and not forcing refresh
    if (projectsCache && !forceRefresh) {
      return { projects: projectsCache, loading: false, error: null };
    }

    setLoading(true);
    setError(null);

    try {
      const projects = await fetchProjects();
      setProjectsCache(projects);
      setLoading(false);
      return { projects, loading: false, error: null };
    } catch (err) {
      console.error('Error loading projects:', err);
      setError(err.message);
      setLoading(false);
      return { projects: [], loading: false, error: err.message };
    }
  }, [projectsCache]);

  // Fetch single project with caching
  const getProjectById = useCallback(async (id, forceRefresh = false) => {
    // Return cached data if available and not forcing refresh
    if (projectDetailsCache[id] && !forceRefresh) {
      return { project: projectDetailsCache[id], loading: false, error: null };
    }

    setLoading(true);
    setError(null);

    try {
      const project = await fetchProjectById(id);
      setProjectDetailsCache(prev => ({ ...prev, [id]: project }));
      setLoading(false);
      return { project, loading: false, error: null };
    } catch (err) {
      console.error(`Error loading project ${id}:`, err);
      setError(err.message);
      setLoading(false);
      return { project: null, loading: false, error: err.message };
    }
  }, [projectDetailsCache]);

  // Clear cache (useful for refresh)
  const clearCache = useCallback(() => {
    setProjectsCache(null);
    setProjectDetailsCache({});
  }, []);

  const value = {
    projectsCache,
    projectDetailsCache,
    loading,
    error,
    getProjects,
    getProjectById,
    clearCache
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within ProjectsProvider');
  }
  return context;
};

export default ProjectsContext;
