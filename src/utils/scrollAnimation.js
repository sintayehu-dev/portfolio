// Scroll animation utility
export const initScrollAnimation = () => {
  // Function to check if an element is in viewport
  const isInViewport = (element, offset = 100) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight - offset &&
      rect.bottom >= 0
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.hidden');
    
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        // Remove 'hidden' class and add the appropriate animation class
        element.classList.remove('hidden');
        
        // Add animation class based on data attribute
        if (element.dataset.animation) {
          element.classList.add(element.dataset.animation);
        }
        
        // Add delay class if specified
        if (element.dataset.delay) {
          element.classList.add(element.dataset.delay);
        }
      }
    });
  };

  // Function to trigger animations immediately for visible elements
  const triggerVisibleAnimations = () => {
    const animatedElements = document.querySelectorAll('.hidden');
    
    animatedElements.forEach(element => {
      // Check if element is already visible or in viewport
      if (isInViewport(element, 0) || element.getBoundingClientRect().top < window.innerHeight) {
        // Remove 'hidden' class and add the appropriate animation class
        element.classList.remove('hidden');
        
        // Add animation class based on data attribute
        if (element.dataset.animation) {
          element.classList.add(element.dataset.animation);
        }
        
        // Add delay class if specified
        if (element.dataset.delay) {
          element.classList.add(element.dataset.delay);
        }
      }
    });
  };

  // Initial check on page load and route changes
  setTimeout(triggerVisibleAnimations, 100);
  setTimeout(handleScrollAnimation, 200);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation, { passive: true });
  
  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
  };
};

// Export function to manually trigger animations
export const triggerAnimations = () => {
  const animatedElements = document.querySelectorAll('.hidden');
  
  animatedElements.forEach(element => {
    // Remove 'hidden' class and add the appropriate animation class
    element.classList.remove('hidden');
    
    // Add animation class based on data attribute
    if (element.dataset.animation) {
      element.classList.add(element.dataset.animation);
    }
    
    // Add delay class if specified
    if (element.dataset.delay) {
      element.classList.add(element.dataset.delay);
    }
  });
}; 