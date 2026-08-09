import type { PortfolioConfig } from '../types/portfolio';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Aayan Khan",
    title: "Full-Stack Developer | AI Enthusiast",
    roles: [
      "Information Science Engineering Student",
      "Full-Stack Developer",
      "AI Enthusiast",
      "Problem Solver"
    ],
    shortIntro: "I'm Aayan Khan, an Information Science Engineering student at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru.",
    fullBio: "I am passionate about Full-Stack Development, Artificial Intelligence, and Data Structures & Algorithms. I enjoy building modern web applications, solving algorithmic problems, and continuously improving my software engineering skills.",
    journeyBio: "My current focus is building production-ready full-stack projects, strengthening my DSA skills, and preparing for Software Engineering roles.",
    careerObjective: "Open to Software Engineering Internships and Full-Time Opportunities where I can build production-ready software solutions and contribute to engineering teams.",
    location: "Bengaluru, Karnataka, India",
    email: "khan01aayan@gmail.com",
    availability: "Open to Software Engineering Internships and Full-Time Opportunities",
    resumeUrl: "#", // Replace with your resume link
    socials: {
      github: "https://github.com/AayanKhan-debug",
      linkedin: "https://www.linkedin.com/in/aayankhan18/",
      leetcode: "https://leetcode.com/u/khancancode/",
      email: "mailto:khan01aayan@gmail.com"
    }
  },

  stats: [
    {
      label: "Projects Completed",
      value: 1,
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
      label: "Technologies Learned",
      value: 10,
      suffix: "+",
      iconName: "Cpu"
    },
    {
      label: "Currently Learning",
      value: "Full-Stack & AI",
      suffix: "",
      iconName: "GitCommit"
    }
  ],

  learningJourney: [
    {
      year: "2023 - 2024",
      title: "Programming Foundations & Data Structures",
      description: "Learned core programming languages including C++, Java, and Python while building strong fundamentals in Data Structures & Algorithms."
    },
    {
      year: "2024 - 2025",
      title: "Modern Web Development",
      description: "Mastered frontend and backend web development using HTML, CSS, Tailwind CSS, JavaScript, React, Vite, Node.js, Express.js, and databases."
    },
    {
      year: "2025 - Present",
      title: "Full-Stack Projects & Advanced Problem Solving",
      description: "Building production-ready full-stack applications like the AI Expense Analyzer and solving 300+ LeetCode algorithmic challenges."
    }
  ],

  skills: [
    // Languages
    { name: "Java", category: "Languages", iconName: "Coffee" },
    { name: "C++", category: "Languages", iconName: "FileCode" },
    { name: "Python", category: "Languages", iconName: "Snake" },
    { name: "JavaScript", category: "Languages", iconName: "SquareCode" },

    // Frontend
    { name: "HTML", category: "Frontend", iconName: "Layout" },
    { name: "CSS", category: "Frontend", iconName: "Palette" },
    { name: "JavaScript", category: "Frontend", iconName: "SquareCode" },
    { name: "React", category: "Frontend", iconName: "Atom" },

    // Backend
    { name: "Node.js", category: "Backend", iconName: "Server" },
    { name: "Express.js", category: "Backend", iconName: "Route" },
    { name: "Spring Boot", category: "Backend", iconName: "Layers" },

    // Database
    { name: "MySQL", category: "Database", iconName: "Table" },
    { name: "MongoDB", category: "Database", iconName: "Database" },

    // Tools & Technologies
    { name: "Git", category: "Tools & Technologies", iconName: "GitBranch" },
    { name: "GitHub", category: "Tools & Technologies", iconName: "Github" },
    { name: "REST APIs", category: "Tools & Technologies", iconName: "Network" },
    { name: "Docker", category: "Tools & Technologies", iconName: "Box" }
  ],

  projects: [
    {
      id: "ai-expense-analyzer",
      title: "AI Expense Analyzer",
      description: "Intelligent financial tracking & transaction analysis application built with modern full-stack web technologies.",
      fullDescription: "A full-stack web application designed to track personal expenses, categorize financial transactions, and provide automated insights for budgeting.",
      category: "AI / ML",
      image: "/images/project_ai_expense.jpg",
      techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveDemoUrl: "#",
      githubUrl: "https://github.com/AayanKhan-debug",
      features: [
        "Interactive dashboard for expense categorization and tracking",
        "Visual financial breakdown with responsive charts",
        "Clean REST API integration between React frontend and Express backend",
        "User data management and database persistence with MongoDB"
      ],
      highlighted: true
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Full-Stack Development & DSA Focus",
      company: "Personal & Academic Projects",
      type: "Independent",
      period: "2024 – Present",
      location: "Bengaluru, Karnataka, India",
      description: "Currently focused on building production-ready full-stack projects, strengthening Data Structures & Algorithms skills, and preparing for Software Engineering opportunities.",
      highlights: [
        "Architected and built full-stack web applications including AI Expense Analyzer",
        "Solved 300+ algorithmic challenges on LeetCode focusing on data structures and dynamic programming",
        "Solid foundation in core computer science subjects: Object-Oriented Programming, DBMS, Operating Systems, and Networks"
      ],
      techStack: ["React", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB", "C++", "Tailwind CSS"]
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
      description: "Consistently practicing algorithmic problem solving on LeetCode.",
      category: "LeetCode",
      iconName: "Code2",
      link: "https://leetcode.com/u/khancancode/"
    },
    {
      id: "ach-2",
      title: "Built AI Expense Analyzer.",
      metric: "Full-Stack Web App",
      description: "Designed and built an intelligent expense tracking application using React, Node.js, Express, and MongoDB.",
      category: "Project",
      iconName: "FolderGit2",
      link: "#projects"
    },
    {
      id: "ach-3",
      title: "Strong foundation in Data Structures and Algorithms.",
      metric: "Core CS",
      description: "Deep understanding of fundamental data structures, graph algorithms, and dynamic programming.",
      category: "Core CS",
      iconName: "Brain"
    },
    {
      id: "ach-4",
      title: "Continuously learning Full-Stack Development.",
      metric: "Web Technologies",
      description: "Actively mastering modern frontend frameworks, backend API architectures, and database design.",
      category: "Skill",
      iconName: "Cpu"
    }
  ],

  emailJS: {
    serviceId: "service_portfolio",
    templateId: "template_portfolio",
    publicKey: "user_public_key"
  }
};
