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

  // Initial check on page load
  setTimeout(handleScrollAnimation, 100);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation, { passive: true });
  
  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScrollAnimation);
  };
}; 