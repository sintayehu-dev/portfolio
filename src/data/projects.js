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
    id: 3,
    title: "E‑learning Platform – Interactive Simulations",
    description: "Mobile platform for interactive STEM simulations and concept visualizations.",
    detailedDescription: "An E‑learning mobile application built with Flutter that delivers interactive simulations for STEM subjects. Learners can manipulate parameters in real time, visualize outcomes, and track progress. The backend services are implemented in Golang and exposed via secure REST APIs.",
    image: "/assets/Elearning.png",
    videoUrl: "https://www.youtube.com/embed/gnvf9yXHB1o",
    documentUrl: "https://example.com/e-learning-platform-doc.pdf",
    screenshots: [],
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "Golang (Backend)"],
    github: "#",
    demo: "#",
    features: [
      "Interactive, parameter‑driven simulations",
      "Concept visualizations with charts/animations",
      "Progress tracking and session persistence",
      "Authoring model for adding new simulations",
      "Responsive UI for phones and tablets"
    ],
    challenges: [
      "Rendering performance for complex visuals",
      "Designing an extensible simulation model",
      "Accessible controls and gestures"
    ],
    category: "Mobile App",
    status: "Completed",
    duration: "2 months",
    teamSize: 1
  },
  {
    id: 2,
    title: "Communication Book App (CRM)",
    description: "Teacher–Parent Communication App bridging educational communication gaps.",
    detailedDescription: "A mobile-first communication platform designed to connect teachers and parents in real time. It supports announcements, attendance, behaviour reports, homework updates, and direct messaging. Built to reduce communication gaps, improve parent engagement, and streamline classroom coordination.",
    image: "/assets/comunication.png",
    // YouTube embed URL for the provided video
    videoUrl: "https://www.youtube.com/embed/KwnRgls2BzY",
    documentUrl: "https://example.com/communication-book-app-doc.pdf",
    screenshots: [],
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Firebase", "REST API"],
    github: "#",
    demo: "#",
    features: [
      "Announcements and broadcast messages",
      "Attendance and behaviour tracking",
      "Homework updates and reminders",
      "Direct teacher–parent messaging",
      "Multi-school and multi-class support",
      "Push notifications for real-time updates"
    ],
    challenges: [
      "Designing a simple UX for non-technical users",
      "Real-time sync across parents and teachers",
      "Ensuring message delivery and offline support",
      "Granular roles and permissions for schools"
    ],
    category: "Mobile App",
    status: "Completed",
    duration: "3 months",
    teamSize: 2
  }
  ,
  {
    id: 7,
    title: "Geo‑Attendance (CRM)",
    description: "Next‑generation attendance system with geofencing, offline sync, and real‑time dashboards.",
    detailedDescription: "Geo‑Attendance is a CRM‑grade attendance platform that leverages geofencing and device sensors to ensure location‑verified check‑ins/outs. It supports team location coverage, shift rules, leave flows, and supervisor approvals with real‑time analytics dashboards.",
    image: "/assets/attendance.png",
    videoUrl: "https://www.youtube.com/embed/fXXSGMfI2rA",
    documentUrl: "https://example.com/geo-attendance-doc.pdf",
    screenshots: [],
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "SQLite/Room", "GPS/Geofencing", "REST API"],
    github: "#",
    demo: "#",
    features: [
      "Geofenced, location‑verified attendance",
      "Offline‑first capture with background sync",
      "Shift rules, approvals, and leave workflows",
      "Team heatmaps and coverage dashboards",
      "Push notifications and reminders"
    ],
    challenges: [
      "Reliable geofence detection across devices",
      "Battery‑friendly background location strategy",
      "Secure tamper‑resistant check‑ins",
      "Robust offline synchronization"
    ],
    category: "Mobile App",
    status: "Completed",
    duration: "4 months",
    teamSize: 3
  },
  {
    id: 8,
    title: "Kebar Restaurant App",
    description: "Mobile restaurant app built with Flutter, powered by a Golang backend.",
    detailedDescription: "Kebar Restaurant is a cross‑platform mobile application developed in Flutter with a Go (Golang) backend. It features menu browsing with high‑quality imagery, cart and checkout, order tracking, invoices/receipts, and push notifications. The backend exposes secure REST APIs with JWT auth and integrates with payment gateways.",
    image: "/assets/kebar resturant.png",
    videoUrl: "",
    documentUrl: "",
    screenshots: [],
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API", "JWT", "Golang (Backend)", "PostgreSQL"],
    github: "#",
    demo: "#",
    features: [
      "Rich menu browsing with categories and search",
      "Cart, checkout, and order tracking",
      "Digital invoices/receipts",
      "Push notifications for order status",
      "Admin endpoints for menu and pricing",
      "Responsive layouts for phones and tablets"
    ],
    challenges: [
      "Synchronizing cart and orders across devices",
      "Payment integration and secure token handling",
      "Optimizing image delivery and caching"
    ],
    category: "Mobile App",
    status: "Completed",
    duration: "3 months",
    teamSize: 2
  }
];

export default projects;
