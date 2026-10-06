import type { PortfolioConfig } from '../types/portfolio';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Aayan Khan",
    title: "Java & Spring Boot Developer",
    roles: [
      "Java & Spring Boot Developer",
      "Backend Engineer",
      "Information Science Engineering Student",
      "Problem Solver"
    ],
    shortIntro: "Building secure, scalable backend systems and full-stack applications using Java, Spring Boot, REST APIs, databases, and modern frontend technologies.",
    fullBio: "I am an Information Science Engineering student at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, specializing in backend software engineering with Java and Spring Boot. My technical focus centers on architecting resilient RESTful APIs, relational data modeling with MySQL and PostgreSQL, and implementing robust authorization via Spring Security and JWT. While I leverage React for building clean end-to-end applications, backend architecture, concurrency control, and scalable systems are my primary focus.",
    journeyBio: "My software engineering journey is driven by designing production-oriented backend systems and solving algorithmic problems. Through projects like CampusOS and NMIT Confessions, I have tackled concurrency control using pessimistic locking, waitlist promotion queues, device-token deduplication, and automated testing with JUnit and Mockito, supported by 300+ problems solved on LeetCode.",
    careerObjective: "Seeking software engineering internships and backend developer roles where I can apply Java, Spring Boot, Spring Security, and database engineering to build high-performance, maintainable services.",
    location: "Bengaluru, Karnataka, India",
    email: "khan01aayan@gmail.com",
    availability: "Open to Software Engineering Internships and Full-Time Opportunities",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/AayanKhan-debug",
      linkedin: "https://www.linkedin.com/in/aayankhan18/",
      leetcode: "https://leetcode.com/u/khancancode/",
      email: "mailto:khan01aayan@gmail.com"
    }
  },

  stats: [
    {
      label: "Featured Backend Projects",
      value: 2,
      suffix: "+",
      iconName: "FolderGit2"
    },
    {
      label: "LeetCode Problems Solved",
      value: 300,
      suffix: "+",
      iconName: "Code2"
    },
    {
      label: "Core Technologies",
      value: 12,
      suffix: "+",
      iconName: "Cpu"
    },
    {
      label: "Primary Focus",
      value: "Java & Spring Boot",
      suffix: "",
      iconName: "GitCommit"
    }
  ],

  learningJourney: [
    {
      year: "2023 - 2024",
      title: "Core CS & Algorithmic Foundations",
      description: "Mastered object-oriented programming in Java and C++, building deep fundamentals in Data Structures & Algorithms and computer science theory."
    },
    {
      year: "2024 - 2025",
      title: "Backend & Enterprise Java Architecture",
      description: "Specialized in Spring Boot, Spring Data JPA, Hibernate, relational database design with MySQL and PostgreSQL, and RESTful API architecture."
    },
    {
      year: "2025 - Present",
      title: "Production Systems, Concurrency & Security",
      description: "Architecting production-ready platforms including CampusOS and NMIT Confessions with Spring Security, pessimistic concurrency control, and automated testing."
    }
  ],

  skills: [
    // Backend
    { name: "Java", category: "Backend", iconName: "Coffee" },
    { name: "Spring Boot", category: "Backend", iconName: "Layers" },
    { name: "Spring Security", category: "Backend", iconName: "Shield" },
    { name: "Spring Data JPA", category: "Backend", iconName: "Database" },
    { name: "Hibernate", category: "Backend", iconName: "Boxes" },
    { name: "REST APIs", category: "Backend", iconName: "Network" },
    { name: "JWT", category: "Backend", iconName: "Key" },
    { name: "Maven", category: "Backend", iconName: "Package" },

    // Databases
    { name: "MySQL", category: "Databases", iconName: "Table" },
    { name: "PostgreSQL", category: "Databases", iconName: "Database" },
    { name: "SQL", category: "Databases", iconName: "FileCode" },

    // Testing
    { name: "JUnit", category: "Testing", iconName: "CheckCircle2" },
    { name: "Mockito", category: "Testing", iconName: "Sparkles" },

    // Frontend
    { name: "React", category: "Frontend", iconName: "Atom" },
    { name: "TypeScript", category: "Frontend", iconName: "FileCode" },
    { name: "HTML", category: "Frontend", iconName: "Layout" },
    { name: "CSS", category: "Frontend", iconName: "Palette" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "Wind" },

    // Tools
    { name: "Git", category: "Tools", iconName: "GitBranch" },
    { name: "GitHub", category: "Tools", iconName: "Github" },
    { name: "Docker", category: "Tools", iconName: "Box" },

    // Supporting Languages
    { name: "C++", category: "Languages", iconName: "FileCode" },
    { name: "Python", category: "Languages", iconName: "Terminal" }
  ],

  projects: [
    {
      id: "campusos",
      title: "CampusOS",
      description: "Production-oriented campus management platform engineered with Spring Boot, Spring Security, and MySQL with pessimistic locking for event capacity.",
      fullDescription: "A comprehensive, production-oriented campus operations and student management platform engineered with Java, Spring Boot, Spring Security, and MySQL. Features role-based authorization, pessimistic locking for event capacity to prevent race conditions, automated waitlist promotion, global exception handling, and automated JUnit test coverage.",
      category: "Backend",
      image: "/images/project_campusos.jpg",
      techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "MySQL", "React", "REST APIs", "JUnit", "Maven"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AayanKhan-debug",
      features: [
        "JWT authentication and fine-grained role-based access control (RBAC)",
        "Pessimistic locking on event registration to prevent concurrent overbooking",
        "Automated waitlist queueing and promotion workflow upon cancellations",
        "Modules for clubs, campus announcements, resources, lost & found, and help desk",
        "Centralized global exception handling with standardized API response structures",
        "Automated unit and integration test suite with JUnit and Mockito"
      ],
      highlighted: true
    },
    {
      id: "nmit-confessions",
      title: "NMIT Confessions",
      description: "Anonymous and moderated campus community confession platform with rate limiting, duplicate detection, and device-token reaction deduplication.",
      fullDescription: "An anonymous, moderated campus confession platform engineered with Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, and React. Built on an anonymous architecture with zero author identity persistence, secure device-token based reaction and report deduplication, content moderation workflows, and automated backend testing.",
      category: "Full Stack",
      image: "/images/project_nmit_confessions.jpg",
      techStack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Maven", "Docker"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AayanKhan-debug",
      features: [
        "Strictly anonymous confession submission pipeline with zero author identity storage",
        "Device-token based deduplication for reactions and reports without user authentication",
        "Content moderation workflow with report thresholds, search, and archiving",
        "Rate limiting and duplicate content detection to prevent spam",
        "Containerized backend deployment using Docker",
        "Automated backend test coverage for core business logic and API contracts"
      ],
      highlighted: true
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Java & Spring Boot Backend Engineering",
      company: "Personal & Academic Projects",
      type: "Independent",
      period: "2024 – Present",
      location: "Bengaluru, Karnataka, India",
      description: "Focused on architecting scalable backend systems with Java and Spring Boot, implementing concurrency control, designing relational databases, and practicing algorithmic problem solving.",
      highlights: [
        "Architected backend services and platforms including CampusOS and NMIT Confessions using Spring Boot, Spring Security, and Spring Data JPA",
        "Implemented pessimistic concurrency locking for registration systems and device-token reaction deduplication",
        "Solved 300+ algorithmic challenges on LeetCode with strong focus on Data Structures, Graphs, and Dynamic Programming"
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "PostgreSQL", "JUnit", "Docker", "REST APIs"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering in Information Science and Engineering",
      institution: "Nitte Meenakshi Institute of Technology (NMIT)",
      location: "Bengaluru, Karnataka, India",
      period: "Pursuing",
      graduationYear: "2028",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    }
  ],

  certifications: [],

  achievements: [
    {
      id: "ach-1",
      title: "Solved 300+ LeetCode problems.",
      metric: "300+ Solved",
      description: "Consistently practicing algorithmic problem solving and data structures on LeetCode.",
      category: "LeetCode",
      iconName: "Code2",
      link: "https://leetcode.com/u/khancancode/"
    },
    {
      id: "ach-2",
      title: "Architected CampusOS Platform",
      metric: "Spring Boot & MySQL",
      description: "Engineered production-oriented campus system with pessimistic locking, waitlists, and Spring Security.",
      category: "Project",
      iconName: "FolderGit2",
      link: "#projects"
    },
    {
      id: "ach-3",
      title: "Built NMIT Confessions",
      metric: "Spring Boot & PostgreSQL",
      description: "Developed anonymous campus platform with rate limiting, moderation workflows, and device-token deduplication.",
      category: "Project",
      iconName: "FolderGit2",
      link: "#projects"
    },
    {
      id: "ach-4",
      title: "Strong Core CS & Concurrency Foundation",
      metric: "System Design & DSA",
      description: "Deep understanding of relational database normalization, transactions, concurrency control, and OOP principles.",
      category: "Core CS",
      iconName: "Brain"
    }
  ],

  emailJS: {
    serviceId: "service_x2snheg",
    templateId: "template_7swxeif",
    publicKey: "-9J7on6i_VUvY1F_f"
  }
};
