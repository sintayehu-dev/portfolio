/**
 * Custom hook for managing project data
 * Fetches ONLY from Contentful with caching support
 */

import { useState, useEffect } from 'react';
import { useProjectsContext } from '../contexts/ProjectsContext';

export const useProjects = () => {
  const { getProjects } = useProjectsContext();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const result = await getProjects();
      setProjects(result.projects);
      setError(result.error);
      setLoading(false);
    };

    loadProjects();
  }, [getProjects]);

  return { projects, loading, error };
};

export default useProjects;
