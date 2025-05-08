import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  // Add useEffect to clear the success message after a delay
  useEffect(() => {
    let fadeTimer;
    let removeTimer;
    
    if (submitResult && submitResult.success) {
      // Set timer to add the fade-out class after 4 seconds
      fadeTimer = setTimeout(() => {
        const resultElement = document.querySelector('.form-result');
        if (resultElement) {
          resultElement.classList.add('fade-out');
        }
      }, 4000);
      
      // Set timer to completely remove the message after animation completes
      removeTimer = setTimeout(() => {
        setSubmitResult(null);
      }, 4500); // 4000ms + 500ms for the animation
    }
    
    // Clear timeouts when component unmounts or submitResult changes
    return () => {
      if (fadeTimer) clearTimeout(fadeTimer);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, [submitResult]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      setSubmitResult({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-custom hidden" data-animation="animate-fade-up">
          <FaChevronLeft className="title-icon" />
          <h2>Contact Me</h2>
          <FaChevronRight className="title-icon" />
        </div>

        <div className="contact-content">
          <div className="map-container hidden" data-animation="animate-from-left" data-delay="delay-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159374.43208662453!2d38.71406030015643!3d9.145000393012566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635491fff961f93%3A0x4f507b27629295c5!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1649292464588!5m2!1sen!2sus"
              title="Addis Ababa Map"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              aria-label="Google Maps location of Addis Ababa, Ethiopia"
            ></iframe>
          </div>

          <div className="form-container hidden" data-animation="animate-from-right" data-delay="delay-300">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
                aria-label="Your Name"
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
                aria-label="Your Email"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                className="form-textarea"
                aria-label="Your Message"
              ></textarea>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                aria-label={isSubmitting ? 'Sending message...' : 'Submit message'}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
              
              {submitResult && (
                <div 
                  className={`form-result ${submitResult.success ? 'success' : 'error'}`}
                  role="alert"
                  aria-live="assertive"
                >
                  {submitResult.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 