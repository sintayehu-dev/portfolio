import React from 'react';
import './Services.css';
import { FaLaptopCode, FaCode, FaMobile, FaServer, FaDatabase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces with React, TypeScript, and advanced CSS. Creating smooth animations and implementing best practices for optimal user experience."
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Creating responsive and modern web applications using React, Spring Boot, and other cutting-edge technologies. Focus on clean code and optimal user experience."
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with Flutter, bloc and native technologies. Implementing responsive UI designs, device-specific features, and optimizing performance across iOS and Android. Creating engaging mobile experiences with smooth animations and gesture-based interactions."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Spring Boot, Django, and other modern frameworks. Designing efficient APIs with RESTful and GraphQL patterns, implementing authentication systems, and building scalable microservices architectures. Optimizing server performance and implementing security best practices."
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Designing and implementing efficient database solutions using MongoDB, PostgreSQL, MySQL, and other technologies. Creating optimized schemas, complex queries, and database migration strategies. Implementing data validation, indexing techniques, and ensuring data integrity across applications."
    }
  ];

  return (
    <section id="services">
      <div className="section-title-custom hidden" data-animation="animate-fade-up">
        <FaChevronLeft className="title-icon" />
        <h2>Services</h2>
        <FaChevronRight className="title-icon" />
      </div>
      <div className="timeline-container">
        {services.map((service, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} hidden`} data-animation={index % 2 === 0 ? "animate-from-left" : "animate-from-right"} data-delay={`delay-${index * 100 + 200}`}>
            <div className="timeline-content">
              <div className="service-icon">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 