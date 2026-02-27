export const projects = [
  {
    name: "FairShot Coffee",
    period: "Dec 2025 – Jan 2026",
    tech: ["Java 21", "Spring Boot", "React.js", "PostgreSQL"],
    demo: "https://fairshot-coffee.onrender.com",
    repo: "https://github.com/suryanshukumarrai/FairShot-Coffee",
    summary:
      "Intelligent queue management platform focused on fairness-aware prioritization, SLA compliance, and real-time performance analytics.",
    bullets: [
      "Engineered dynamic priority scoring based on wait time, customer type, drink complexity, and fairness penalties to prevent starvation.",
      "Designed automated barista assignment using concurrent collections and workload balancing for optimal throughput.",
      "Delivered REST APIs for order lifecycle, SLA monitoring with 8-minute breach threshold, simulation engine, analytics, and complaint handling.",
      "Built multi-role dashboards (Customer, Barista, Manager, Public Queue) with real-time polling and optimistic UI updates.",
      "Implemented simulation mode processing 200 concurrent orders with execution metrics and fairness tracking."
    ],
    architecture: [
      "Priority scoring engine with configurable weight matrix",
      "Concurrent queue processor with SLA breach monitor",
      "Analytics pipeline for throughput, wait-time variance, and fairness index",
      "Role-based UI with centralized state management"
    ],
    metrics: [
      { label: "Concurrent orders", value: 200 },
      { label: "SLA threshold (mins)", value: 8 },
      { label: "Role dashboards", value: 4 }
    ]
  },
  {
    name: "Dorm Care Elite",
    period: "Jan 2026 – Feb 2026",
    tech: ["Java 21", "Spring Boot", "React.js", "PostgreSQL", "ChromaDB"],
    demo: null,
    repo: "https://github.com/suryanshukumarrai/Hostel-Complaint-management-system",
    summary:
      "Secure complaint lifecycle and hostel management system with strict role-based access, analytics, and normalized data modeling.",
    bullets: [
      "Architected CLIENT/ADMIN complaint workflow with ownership validation and lifecycle transitions.",
      "Led an 8-member team, coordinated feature branches, reviewed pull requests, and resolved merge conflicts.",
      "Implemented Spring Security with BCrypt authentication, method-level authorization, and defensive API checks.",
      "Designed normalized PostgreSQL schema with JPA/Hibernate and delivered responsive React analytics dashboards.",
      "Integrated semantic search capabilities using ChromaDB for faster issue resolution."
    ],
    architecture: [
      "Role-based security at controller + method layers",
      "Normalized schema with audit fields and SLA timestamps",
      "JPA/Hibernate persistence with service-level validation",
      "Analytics-ready dashboard with RBAC-aware components"
    ],
    security: [
      "BCrypt authentication with salted hashing",
      "Method-level authorization with ownership validation",
      "Defensive API checks for role-aware data access"
    ],
    metrics: [
      { label: "Team size", value: 8 },
      { label: "Auth layers", value: 2 },
      { label: "Core modules", value: 5 }
    ]
  }
];
