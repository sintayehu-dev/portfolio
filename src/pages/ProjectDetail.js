import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import { useProjectDetail } from '../hooks/useProjectDetail';
import Loader from '../components/Loader/Loader';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { project, loading, error } = useProjectDetail(id);
  
  const handleClose = () => {
    navigate('/projects');
  };

  // Loading state
  if (loading) {
    return <Loader fullScreen={true} />;
  }

  // Error or not found state
  if (error || !project) {
    return (
      <div className="project-not-found" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '500px',
          padding: '2rem',
          borderRadius: '10px',
          background: 'var(--card-bg)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: 'var(--primary-color)' }}>
            {error ? 'Error Loading Project' : 'Project Not Found'}
          </h1>
          <p style={{ fontSize: '1.1rem', margin: '0 0 2rem 0', opacity: 0.8 }}>
            {error || "The project you're looking for doesn't exist."}
          </p>
          <button 
            onClick={() => navigate('/projects')}
            style={{
              padding: '12px 24px',
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--primary-hover)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-color)'}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProjectDetail 
      project={project}
      onClose={handleClose}
      isVisible={true}
    />
  );
};

export default ProjectDetailPage;
