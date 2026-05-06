/**
 * Custom hook for fetching single project details
 * Fetches ONLY from Contentful with caching support
 */

import { useState, useEffect } from 'react';
import { useProjectsContext } from '../contexts/ProjectsContext';

export const useProjectDetail = (projectId) => {
  const { getProjectById } = useProjectsContext();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!projectId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const result = await getProjectById(projectId);
      setProject(result.project);
      setError(result.error);
      setLoading(false);
    };

    loadProject();
  }, [projectId, getProjectById]);

  return { project, loading, error };
};

export default useProjectDetail;
