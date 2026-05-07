import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetailPage from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { ToastProvider } from './contexts/ToastContext';
import { ProjectsProvider } from './contexts/ProjectsContext';
import { initScrollAnimation, triggerAnimations } from './utils/scrollAnimation';

// Component to handle route changes and scroll animations
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Reinitialize scroll animations on route change
    const cleanup = initScrollAnimation();
    
    // Also trigger animations immediately for visible elements
    setTimeout(() => {
      triggerAnimations();
    }, 100);
    
    return cleanup;
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer than the preloader animation to ensure smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastProvider>
        <ProjectsProvider>
          <div className="App">
            {isLoading ? (
              <Preloader />
            ) : (
              <AppContent />
            )}
          </div>
        </ProjectsProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
