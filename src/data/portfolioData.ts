import { Project, Certification, SkillCategory, GitHubStats } from '../types';

// Profile picture: import so Vite bundles the image for production builds
import profileImg from '../assets/images/profile_picture_1785778751198.jpg';
import project1Img from '../assets/images/project_student_success_1785778779069.jpg';
import project2Img from '../assets/images/project_agenda_craft_1785778805875.jpg';
import project3Img from '../assets/images/project_emotion_detector_1785778830158.jpg';
import project4Img from '../assets/images/project_multi_agent_1785778853779.jpg';
import deepLearningAiLogo from '../assets/images/deeplearning-ai-logo.svg';

export const PERSONAL_INFO = {
  name: 'Haseeb',
  title: 'Computer Science Student @ UET Lahore',
  heroText: "I build intelligent software using Artificial Intelligence, Machine Learning and Full Stack Development.",
  location: 'Lahore, Pakistan',
  email: 'safderhaseeb46@gmail.com',
  phone: '+923091688369',
  whatsapp: 'https://wa.me/923091688369',
  github: 'https://github.com/haseeb356/personal_portfolio',
  linkedin: 'https://www.linkedin.com/in/haseeb-b36aa632a',
  fiverr: 'https://www.fiverr.com/s/2KXoNQQ',
  profileImage: profileImg,
  typewriterRoles: [
    'Full Stack AI Developer',
    'Machine Learning Engineer',
    'AI Engineer',
    'Data Scientist',
    'Building Intelligent Applications',
    'Developing Explainable AI Systems',
  ],
  bio: "I'm a Computer Science student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building intelligent applications that solve real-world problems using modern AI technologies.",
  interests: [
    'Machine Learning',
    'Explainable AI (XAI)',
    'Large Language Models (LLMs)',
    'Generative AI',
    'Backend Development',
    'Full Stack Development',
    'Data Science',
  ],
  currentLearning: "Currently learning Machine Learning through DeepLearning.AI's Machine Learning Specialization while building real-world AI applications.",
  experienceOverview: "Currently focusing on building AI applications, machine learning systems, and full-stack software projects through academic coursework at UET Lahore and personal portfolio development.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 95, tag: 'Primary' },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'Machine Learning', level: 92, tag: 'Core' },
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow', level: 82 },
      { name: 'SHAP (XAI)', level: 88, tag: 'Explainability' },
      { name: 'Explainable AI', level: 88 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'LLM Applications', level: 92, tag: 'GenAI' },
      { name: 'Google Gemini', level: 94 },
      { name: 'IBM Watson NLP', level: 85 },
    ],
  },
  {
    title: 'Backend',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', level: 90, tag: 'High-Perf API' },
      { name: 'Flask', level: 88 },
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 86 },
      { name: 'REST APIs', level: 94 },
    ],
  },
  {
    title: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 92, tag: 'UI' },
      { name: 'Vite', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 92 },
    ],
  },
  {
    title: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'SQLite', level: 88 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Jupyter Notebook', level: 92 },
      { name: 'Postman', level: 90 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'student-success-predictor',
    title: 'AI Student Success Predictor',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/haseeb356/ai-student-success-predictor',
    liveUrl: 'https://github.com/haseeb356/ai-student-success-predictor',
    imageUrl: project1Img,
    description:
      'Built a full-stack machine learning application that predicts whether a student will Drop Out, remain Enrolled, or Graduate. Developed an end-to-end ML pipeline including data cleaning, EDA, statistical hypothesis testing, feature engineering, model comparison, SHAP explainability, FastAPI backend, and React dashboard.',
    highlights: [
      'End-to-End ML Pipeline',
      'EDA',
      'ANOVA',
      'Chi-Square Test',
      'Feature Engineering',
      'Logistic Regression',
      'Random Forest',
      'Gradient Boosting',
      'SHAP Explainability',
      'FastAPI',
      'React Dashboard',
    ],
    techStack: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'SHAP', 'Pandas', 'NumPy'],
    detailedSpecs: {
      overview:
        'Comprehensive machine learning solution for educational institutions to proactively identify students needing academic intervention.',
      keyFeatures: [
        'Predicts student academic outcomes into 3 classes: Dropout, Enrolled, or Graduated.',
        'Explains model predictions using SHAP (SHapley Additive exPlanations) for glass-box transparency.',
        'FastAPI high-speed RESTful inference endpoints paired with an interactive React dashboard.',
        ' Rigorous statistical testing (ANOVA, Chi-Square) during feature selection.',
      ],
      architecture: 'FastAPI Backend + Scikit-Learn Inference Engine + React SPA Frontend',
    },
  },
  {
    id: 'agenda-craft-ai',
    title: 'Agenda Craft AI',
    category: 'Generative AI',
    githubUrl: 'https://github.com/haseeb356/Agenda-Craft-AI',
    liveUrl: 'https://github.com/haseeb356/Agenda-Craft-AI',
    imageUrl: project2Img,
    description:
      'AI-powered meeting agenda generator that analyzes uploaded documents and automatically creates structured meeting agendas with summaries, stakeholders, action items, and intelligent time allocation using Google Gemini.',
    highlights: [
      'Google Gemini',
      'Prompt Engineering',
      'Structured JSON Output',
      'Document Processing',
      'Multer',
      'Mammoth',
      'Express',
      'React',
    ],
    techStack: ['Node.js', 'Express', 'React', 'Gemini API', 'TypeScript'],
    detailedSpecs: {
      overview:
        'Intelligent productivity tool leveraging Google Gemini LLM to transform raw notes and documents into executive-level structured meeting agendas.',
      keyFeatures: [
        'Parses Word (.docx) and text files using Mammoth document extraction.',
        'Uses advanced prompt engineering with structured JSON schema responses.',
        'Calculates dynamic stakeholder roles and time allocation blocks automatically.',
        'Clean responsive dark UI for quick agenda export and sharing.',
      ],
      architecture: 'Node.js/Express Multer file stream proxy + Gemini 3.6 Flash LLM + React Frontend',
    },
  },
  {
    id: 'emotion-detector',
    title: 'Emotion Detector',
    category: 'Natural Language Processing',
    githubUrl: 'https://github.com/haseeb356/oaqjp-final-project-emb-ai',
    liveUrl: 'https://github.com/haseeb356/oaqjp-final-project-emb-ai',
    imageUrl: project3Img,
    description:
      'AI-powered emotion detection web application built using IBM Watson NLP that predicts emotions from user text and identifies the dominant emotion through a Flask REST API.',
    highlights: ['IBM Watson NLP', 'REST API', 'Flask', 'Emotion Analysis'],
    techStack: ['Python', 'Flask', 'IBM Watson NLP'],
    detailedSpecs: {
      overview:
        'Sentiment & emotion breakdown microservice capable of dissecting nuanced human emotions (joy, sadness, anger, fear, disgust) from text input.',
      keyFeatures: [
        'Integrated with IBM Watson NLP Embed Library for high precision.',
        'Flask REST API providing real-time emotion probability distributions.',
        'Highlights dominant emotion score with optical color cues.',
      ],
      architecture: 'Flask Microservice + IBM Watson Embed SDK + REST Endpoint',
    },
  },
  {
    id: 'multi-agent-research-ai',
    title: 'Multi-Agent Research Intelligence System',
    category: 'Collaborative Project',
    badge: '👥 Team Project',
    githubUrl: 'https://github.com/Abdul-Rehman131/multi-agent-research-ai',
    liveUrl: 'https://github.com/Abdul-Rehman131/multi-agent-research-ai',
    imageUrl: project4Img,
    description:
      'Collaboratively developed an AI-powered multi-agent research platform that searches, analyzes, and summarizes academic papers using Google Gemini and arXiv. My role was Project Manager, coordinating planning, execution, and delivery.',
    highlights: [
      'Multi-Agent AI',
      'Google Gemini',
      'Streamlit',
      'arXiv API',
      'Literature Review',
      'Research Gap Analysis',
    ],
    techStack: ['Python', 'Google Gemini', 'Streamlit', 'arXiv API'],
    detailedSpecs: {
      overview:
        'Multi-agent autonomous framework for researchers to synthesize academic papers and pinpoint unaddressed literature gaps.',
      keyFeatures: [
        'Multi-agent task decomposition: Search Agent, Synthesizer Agent, and Gap Inspector Agent.',
        'Direct integration with arXiv API for live paper indexing.',
        'Role as Project Manager: Led sprint planning, module separation, and architectural integration.',
      ],
      architecture: 'Multi-Agent Python Framework + arXiv API + Gemini LLM + Streamlit Interface',
    },
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-ai-developer',
    name: 'IBM AI Developer Professional Certificate',
    provider: 'IBM',
    date: 'Jul 14, 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/RLK43URV2O1B',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    coursesCount: 10,
    skills: ['Python', 'Flask', 'Generative AI', 'Prompt Engineering', 'REST APIs', 'AI Applications'],
    certificateSummary:
      'Completed 10 comprehensive courses covering software engineering, AI fundamentals, Python for data science, developing AI web applications with Flask, building generative AI chatbots, and software development career readiness.',
  },
  {
    id: 'ml-specialization',
    name: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Stanford',
    date: 'Jul 31, 2026',
    verifyUrl: 'https://coursera.org/verify/RTPTHF9GXHDY',
    logo: deepLearningAiLogo,
    skills: ['Supervised Machine Learning', 'Regression', 'Classification', 'Neural Networks', 'Cost Functions', 'Gradient Descent'],
    completedDetails: ['Supervised Machine Learning: Regression and Classification'],
    certificateSummary:
      'Authorized by DeepLearning.AI and Stanford University, taught by Andrew Ng. Mastered fundamental ML algorithms, regularized regression models, binary/multiclass classification, and mathematical optimization.',
  },
  {
    id: 'google-ai-professional',
    name: 'Google AI Professional Certificate',
    provider: 'Google',
    date: 'Jun 30, 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/J2AFGHDRB4UR',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    coursesCount: 7,
    skills: ['Prompt Engineering', 'Generative AI', 'AI Productivity', 'Responsible AI', 'AI Fundamentals', 'Data Analysis', 'App Building'],
    certificateSummary:
      'Demonstrated fluent application of AI to brainstorming, research, content creation, coding, and building custom vibe-coded AI solutions while adhering to responsible AI standards across 7 rigorous courses.',
  },
  {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials',
    provider: 'Google',
    date: 'Jun 25, 2026',
    verifyUrl: 'https://coursera.org/verify/specialization/EKFA8U3BRFGS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    coursesCount: 5,
    skills: ['AI Tools', 'Prompt Engineering', 'Responsible AI', 'Productivity Optimization', 'Workflow Automation'],
    certificateSummary:
      'Developed by Google featuring 5 courses with practical hands-on practice utilizing modern AI tools to accelerate software engineering productivity.',
  },
  {
    id: 'genai-software-dev',
    name: 'Generative AI for Software Development',
    provider: 'DeepLearning.AI',
    date: 'Jul 7, 2026',
    verifyUrl: 'https://coursera.org/verify/professional-cert/2T604LRB374Y',
    logo: deepLearningAiLogo,
    coursesCount: 3,
    skills: ['LLMs', 'AI Software Engineering', 'Prompt Engineering', 'System Design', 'Team Engineering with AI'],
    completedDetails: [
      'Introduction to Generative AI for Software Development',
      'Team Software Engineering with AI',
      'AI-Powered Software and System Design',
    ],
    certificateSummary:
      '3-course professional certificate taught by Laurence Moroney. Applied LLMs to rapid iterative prototyping, test-driven development, code synthesis, and multi-role AI team workflows.',
  },
];

export const GITHUB_DATA: GitHubStats = {
  username: 'haseeb356',
  reposCount: 18,
  totalCommits: 485,
  starsCount: 34,
  contributions: 312,
  languages: [
    { name: 'Python', percentage: 55, color: '#3572A5' },
    { name: 'TypeScript', percentage: 22, color: '#3178C6' },
    { name: 'JavaScript', percentage: 14, color: '#F7DF1E' },
    { name: 'HTML/CSS', percentage: 6, color: '#E34F26' },
    { name: 'C++', percentage: 3, color: '#F34B7D' },
  ],
};
