import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import { initScrollAnimation } from './utils/scrollAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer than the preloader animation to ensure smooth transition

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize scroll animations after preloading is complete
    if (!isLoading) {
      const cleanup = initScrollAnimation();
      return cleanup;
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
