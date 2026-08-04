export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Generative AI' | 'Natural Language Processing' | 'Collaborative Project' | 'All';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  badge?: string;
  detailedSpecs?: {
    overview: string;
    keyFeatures: string[];
    architecture?: string;
  };
}

export interface Certification {
  id: string;
  name: string;
  provider: 'IBM' | 'DeepLearning.AI & Stanford' | 'Google' | 'DeepLearning.AI';
  date: string;
  skills: string[];
  verifyUrl: string;
  logo: string;
  coursesCount?: number;
  completedDetails?: string[];
  certificateSummary?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface GitHubStats {
  username: string;
  reposCount: number;
  totalCommits: number;
  starsCount: number;
  contributions: number;
  languages: { name: string; percentage: number; color: string }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}
