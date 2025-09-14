/**
 * Enhanced project data structure with detailed information
 * Includes extended fields for comprehensive project showcase
 */

const projects = [
  {
    id: 1,
    title: "Goh Betoch Banking Platform",
    description: "A modern cross-platform mobile banking application built for both Android and iOS using Flutter, with secure transfer capabilities and comprehensive financial services.",
    detailedDescription: "A comprehensive cross-platform mobile banking platform designed for Goh Betoch Bank, where I developed both Android and iOS applications using Flutter with clean architecture and modern development practices. As a cross-platform expert, I built a single codebase that delivers native performance on both platforms. The application features secure money transfers, account management, and mortgage services with a seamless user experience across Android and iOS devices. Implemented using DDD (Domain-Driven Design) architecture, Clean Code principles, BLoC state management, and feature-first approach for scalable and maintainable codebase. The mobile app integrates with a robust Golang backend for real-time transaction processing, push notifications, and secure financial operations.",
    image: "/assets/goh bet.png",
    screenshots: [
      "/assets/goh bet.png",
      "/assets/goh bet1.png",
      "/assets/goh bet2.png",
      "/assets/goh bet3.png",
      "/assets/goh bet4.png",
      "/assets/goh bet5.png",
      "/assets/goh bet6.png"
    ],
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "DDD", "Dio", "Firebase", "Push Notifications", "REST API", "JWT", "Golang (Backend)", "PostgreSQL"],
    github: "#",
    demo: "#",
    features: [
      "Cross-platform expert: Built both Android and iOS applications",
      "Single Flutter codebase delivering native performance on both platforms",
      "Developed frontend mobile application using Flutter",
      "DDD (Domain-Driven Design) architecture for scalable codebase",
      "Clean Code principles and SOLID design patterns",
      "BLoC state management for reactive UI updates",
      "Feature-first approach for modular development",
      "Dio HTTP client for robust API communication with Golang backend",
      "Firebase push notifications for real-time alerts",
      "Secure money transfers with end-to-end encryption",
      "Digital wallet integration with card management",
      "Real-time transaction processing and confirmation",
      "Mortgage loan application and management system",
      "Comprehensive transaction history and reporting",
      "Multi-factor authentication for enhanced security",
      "Offline transaction queuing for poor connectivity",
      "Biometric authentication support",
      "Multi-language support for diverse user base"
    ],
    challenges: [
      "Cross-platform development: Ensuring consistent UX across Android and iOS",
      "Implementing DDD architecture in Flutter for complex banking domain",
      "Managing state across multiple features using BLoC pattern",
      "Designing intuitive mobile UI for complex banking operations",
      "Integrating Flutter frontend with Golang backend APIs",
      "Implementing secure financial transactions with PCI compliance",
      "Creating real-time synchronization across multiple banking systems",
      "Ensuring data security and fraud prevention mechanisms",
      "Optimizing Flutter app performance for low-end mobile devices",
      "Implementing clean architecture with proper separation of concerns",
      "Managing complex business logic with feature-first approach",
      "Handling offline scenarios and data synchronization with backend",
      "Platform-specific optimizations for Android and iOS native features"
    ],
    category: "Mobile App",
    status: "Completed",
    duration: "6 months",
    teamSize: 4
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with user authentication and payment processing.",
    detailedDescription: "A comprehensive e-commerce solution built with modern web technologies. This platform provides a complete shopping experience with secure user authentication, robust payment processing through Stripe integration, and an intuitive admin dashboard for inventory management. The application features a responsive design that works seamlessly across all devices and includes advanced features like shopping cart persistence, order tracking, and email notifications.",
    image: "/assets/ecommerce.png",
    screenshots: [
      "/assets/ecommerce.png",
      "/assets/ecommerce-dashboard.png",
      "/assets/ecommerce-mobile.png"
    ],
    technologies: ["React", "Django", "PostgreSQL", "Stripe", "Redux", "Django REST Framework"],
    github: "#",
    demo: "#",
    features: [
      "User authentication and authorization with JWT tokens",
      "Shopping cart functionality with persistent storage",
      "Secure payment processing with Stripe integration",
      "Admin dashboard for inventory and order management",
      "Responsive design optimized for all devices",
      "Email notifications for order confirmations",
      "Advanced search and filtering capabilities",
      "User profile management and order history"
    ],
    challenges: [
      "Implementing secure payment processing while maintaining PCI compliance",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all device sizes",
      "Managing complex state for shopping cart and user sessions",
      "Integrating real-time inventory updates across multiple users"
    ],
    category: "Full Stack",
    status: "Completed",
    duration: "3 months",
    teamSize: 1
  },
  {
    id: 3,
    title: "Haile Resort Clone",
    description: "A beautiful recreation of Haile Resort website with modern UI design and responsive layout.",
    detailedDescription: "A pixel-perfect recreation of the Haile Resort website featuring modern web design principles and responsive layouts. This project showcases advanced CSS techniques, smooth animations, and interactive elements that create an engaging user experience. The website includes booking functionality, image galleries, and detailed resort information presented in an elegant, professional manner.",
    image: "/assets/haileresort.png",
    screenshots: [
      "/assets/haileresort.png",
      "/assets/haileresort-rooms.png",
      "/assets/haileresort-booking.png"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL", "jQuery"],
    github: "#",
    demo: "#",
    features: [
      "Responsive design with mobile-first approach",
      "Interactive image galleries with lightbox functionality",
      "Booking system with date selection and availability checking",
      "Smooth scroll animations and hover effects",
      "Contact form with server-side validation",
      "Room showcase with detailed descriptions and pricing",
      "Location integration with interactive maps",
      "Multi-language support for international visitors"
    ],
    challenges: [
      "Recreating complex layouts without modern CSS Grid support",
      "Implementing smooth animations while maintaining performance",
      "Creating a booking system with real-time availability",
      "Optimizing images for fast loading without quality loss",
      "Ensuring cross-browser compatibility across older browsers"
    ],
    category: "Frontend",
    status: "Completed",
    duration: "2 months",
    teamSize: 1
  },
  {
    id: 4,
    title: "Ethiopian Recipe App",
    description: "An application showcasing traditional Ethiopian recipes with step-by-step cooking instructions.",
    detailedDescription: "A comprehensive recipe application dedicated to preserving and sharing traditional Ethiopian cuisine. The app features an extensive collection of authentic recipes with detailed step-by-step instructions, ingredient lists, and cultural context. Built with React and Firebase, it provides real-time data synchronization and allows users to save favorite recipes, create shopping lists, and share their own family recipes with the community.",
    image: "/assets/ethiorecipe.png",
    screenshots: [
      "/assets/ethiorecipe.png",
      "/assets/ethiorecipe-detail.png",
      "/assets/ethiorecipe-favorites.png"
    ],
    technologies: ["React", "Firebase", "Styled Components", "React Router", "Context API"],
    github: "#",
    demo: "#",
    features: [
      "Extensive collection of traditional Ethiopian recipes",
      "Step-by-step cooking instructions with images",
      "Ingredient lists with measurement conversions",
      "User authentication and profile management",
      "Favorite recipes and personal collections",
      "Recipe search and filtering by ingredients or cuisine type",
      "Shopping list generation from recipe ingredients",
      "Community features for sharing and rating recipes",
      "Cultural context and history for each dish"
    ],
    challenges: [
      "Organizing complex recipe data with multiple cooking steps",
      "Implementing efficient search functionality across large recipe database",
      "Creating an intuitive user interface for recipe browsing",
      "Managing user-generated content and moderation",
      "Optimizing Firebase queries for cost-effective scaling"
    ],
    category: "Frontend",
    status: "Completed",
    duration: "2.5 months",
    teamSize: 1
  },
  {
    id: 5,
    title: "Class Scheduling System",
    description: "An interactive class scheduling application to organize and manage educational timetables efficiently.",
    detailedDescription: "A sophisticated class scheduling system designed for educational institutions to manage complex timetabling requirements. The application handles multiple constraints including teacher availability, room capacity, subject requirements, and student conflicts. Built with React frontend and Spring Boot backend, it provides real-time scheduling updates, conflict detection, and automated optimization suggestions for efficient resource utilization.",
    image: "/assets/class scheduling.png",
    screenshots: [
      "/assets/class scheduling.png",
      "/assets/scheduling-calendar.png",
      "/assets/scheduling-conflicts.png"
    ],
    technologies: ["React", "Spring Boot", "PostgreSQL", "REST API", "Material-UI", "JPA/Hibernate"],
    github: "#",
    demo: "#",
    features: [
      "Interactive drag-and-drop scheduling interface",
      "Real-time conflict detection and resolution suggestions",
      "Multi-constraint optimization for resource allocation",
      "Teacher and student availability management",
      "Room capacity and equipment requirement tracking",
      "Automated schedule generation with customizable parameters",
      "Export functionality for various calendar formats",
      "Role-based access control for administrators and teachers",
      "Mobile-responsive design for on-the-go access"
    ],
    challenges: [
      "Implementing complex scheduling algorithms with multiple constraints",
      "Creating an intuitive drag-and-drop interface for schedule management",
      "Optimizing database queries for large-scale scheduling operations",
      "Handling real-time updates across multiple user sessions",
      "Designing efficient conflict detection and resolution mechanisms"
    ],
    category: "Full Stack",
    status: "Completed",
    duration: "4 months",
    teamSize: 2
  },
  {
    id: 6,
    title: "Employee Evaluation System",
    description: "A comprehensive solution for managing employee performance reviews and feedback processes.",
    detailedDescription: "An enterprise-grade employee evaluation system that streamlines the performance review process for organizations. The platform supports 360-degree feedback, goal setting and tracking, competency assessments, and automated report generation. Built with React and Spring Boot, it provides role-based dashboards for employees, managers, and HR personnel, ensuring a transparent and fair evaluation process while maintaining data security and privacy.",
    image: "/assets/employe evaluation system.jpg",
    screenshots: [
      "/assets/employe evaluation system.jpg",
      "/assets/evaluation-dashboard.png",
      "/assets/evaluation-reports.png"
    ],
    technologies: ["React", "Spring Boot", "PostgreSQL", "REST API", "Chart.js", "Spring Security"],
    github: "#",
    demo: "#",
    features: [
      "360-degree feedback system with peer, manager, and self-evaluations",
      "Goal setting and progress tracking with milestone management",
      "Competency-based assessment with customizable skill matrices",
      "Automated report generation with visual analytics",
      "Role-based dashboards for different user types",
      "Email notifications for evaluation deadlines and reminders",
      "Historical performance data and trend analysis",
      "Secure document management for evaluation records",
      "Integration with HR systems for employee data synchronization"
    ],
    challenges: [
      "Designing a flexible evaluation framework for different job roles",
      "Implementing secure multi-role authentication and authorization",
      "Creating comprehensive reporting with meaningful analytics",
      "Ensuring data privacy and compliance with HR regulations",
      "Building scalable architecture for large enterprise deployments"
    ],
    category: "Full Stack",
    status: "Completed",
    duration: "5 months",
    teamSize: 3
  }
];

export default projects;