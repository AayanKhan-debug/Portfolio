export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  shortIntro: string;
  fullBio: string;
  journeyBio: string;
  careerObjective: string;
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
}

export interface StatItem {
  label: string;
  value: number | string;
  suffix: string;
  iconName: string;
}

export interface LearningStep {
  year: string;
  title: string;
  description: string;
}

export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools & Technologies';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: 'AI / ML' | 'Full Stack' | 'Frontend' | 'Web App';
  image: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  features: string[];
  highlighted?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: 'Internship' | 'Freelance' | 'Open Source' | 'Full-Time' | 'Independent';
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  graduationYear: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  category: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  category: 'LeetCode' | 'Project' | 'Skill' | 'Core CS';
  iconName: string;
  link?: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  stats: StatItem[];
  learningJourney: LearningStep[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  emailJS: EmailJSConfig;
}
