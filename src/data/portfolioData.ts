export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  stack: string[];
  category: "AI & Systems" | "Web & Platforms" | "Automation & Tools";
  points: string[];
  featured?: boolean;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
}

export interface HackathonItem {
  title: string;
  organizer: string;
  details: string[];
  image?: string;
}

export interface VolunteeringItem {
  organization: string;
  role: string;
  period: string;
  description?: string;
}

export const PERSONAL_INFO = {
  name: "Ashik Muhammed T",
  roleTitle: "Computer Science Undergrad · Builder · Learner",
  tagline:
    "CS Undergrad at CET | BS in Data Science at IIT M",
  contacts: {
    phone: "+91 98955 26880",
    email: "ashikthanzeer6@outlook.com",
    portfolio: "ashikmuhdt-portfolio.vercel.app",
    portfolioUrl: "https://ashikmuhdt-portfolio.vercel.app",
    linkedin: "linkedin.com/in/ashikthanzeer",
    linkedinUrl: "https://linkedin.com/in/ashikthanzeer",
    github: "github.com/ashikthanzeer",
    githubUrl: "https://github.com/ashikthanzeer",
    resumeUrl: "/resume.pdf",
  },
  metrics: [
    { label: "B.Tech CSE (CET)", value: 9.66, isDecimal: true, suffix: " CGPA" },
    { label: "BS Data Science (IITM)", value: 8.625, isDecimal: true, suffix: " CGPA" },
    { label: "Built Projects", value: 7, isDecimal: false, suffix: "" },
    { label: "Hackathons Participated", value: 1, isDecimal: false, suffix: "" },
  ],
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "College of Engineering Trivandrum",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    period: "August 2025 – Present",
    grade: "CGPA: 9.66 / 10",
  },
  {
    institution: "Indian Institute of Technology, Madras",
    degree: "Bachelor of Science, Data Science and Applications",
    period: "September 2025 – Present",
    grade: "CGPA: 8.625 / 10",
  },
  {
    institution: "Al Huda English School Neerkunnam",
    degree: "Senior Secondary Education, CBSE",
    period: "May 2023 – April 2025",
    grade: "Class 12th: 97.4%",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "Java"],
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Frameworks / Libraries",
    skills: ["NumPy", "Pandas", "Next.js", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures", "Object-Oriented Programming", "Problem Solving"],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "drishti-ai",
    title: "Drishti AI",
    stack: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "RAG", "Ollama"],
    category: "AI & Systems",
    featured: true,
    points: [
      "Collaborated as part of the NeuraCET team to develop an interactive AI-powered kiosk assistant for the Drishti 2026 AI Summit at the College of Engineering Trivandrum.",
      "Contributed to the Frontend/UI development of the kiosk, building responsive interaction screens and user flows for asking questions, displaying streamed responses, and presenting event information.",
      "Integrated the kiosk interface with the backend RAG pipeline through Server-Sent Events (SSE), enabling real-time token streaming and seamless transitions between thinking and answer states.",
      "Helped deliver a fully local, offline-capable RAG assistant powered by Qwen 3.5 4B and hybrid BM25 + dense retrieval for grounded Drishti 2026 information.",
    ],
  },
  {
    id: "campusfix",
    title: "CampusFix",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Openrouter API"],
    category: "Web & Platforms",
    featured: true,
    points: [
      "Built an AI-powered campus infrastructure administration platform as part of Slashforge at Dotslash'26, enabling students to report, locate, and track infrastructure issues across campus.",
      "Designed a Campus Asset Registry for structured asset registration and retrieval during grievance submission, with AI-assisted image analysis and duplicate/spam detection to improve report quality.",
      "Implemented role-based authorization for Students, Moderators, Officials, and Admins, supporting controlled issue verification, assignment, resolution workflows, and administrative oversight.",
    ],
  },
  {
    id: "civicgrid",
    title: "CivicGrid",
    stack: ["React", "FastAPI", "Python", "Gemini API", "PostgreSQL", "Docker"],
    category: "Web & Platforms",
    featured: true,
    points: [
      "Developed an AI-assisted civic grievance management platform that enables citizens to submit, track, and verify municipal complaints end-to-end.",
      "Implemented AI-powered grievance classification, department routing, SLA tracking, public tracking tokens, resolution proof-of-work, and citizen satisfaction verification.",
      "Engineered role-based citizen/officer workflows with persistent audit logs, automated lifecycle tracking, and a deployable full-stack architecture for scalable municipal use.",
    ],
  },
  {
    id: "keam-monitor-bot",
    title: "KEAM Monitor Bot",
    stack: ["Python", "Requests", "BeautifulSoup", "Telegram", "GCP"],
    category: "Automation & Tools",
    points: [
      "Developed a cloud-based monitoring system that tracks KEAM allotment portal updates in real time and notifies subscribers instantly.",
      "Implemented intelligent change detection with state persistence, Telegram bot commands, and multi-user subscription management.",
      "Deployed the service continuously on a Google Cloud VM using Linux systemd automation and robust Python error handling.",
    ],
  },
  {
    id: "studyplanner",
    title: "StudyPlanner",
    stack: ["React", "Vite", "TypeScript", "Express.js", "PostgreSQL"],
    category: "Web & Platforms",
    points: [
      "Developed a comprehensive student productivity platform for task management, study planning, and progress tracking.",
      "Implemented features including Pomodoro timer, streak tracking, deadline reminders, and notification support.",
      "Built web and Android applications connected to a shared backend database.",
    ],
  },
  {
    id: "scorefusion",
    title: "ScoreFusion",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Automation & Tools",
    points: [
      "Developed a JEE Main, NEET and KEAM score calculator that computes marks directly from candidates' response sheets.",
      "Automated score calculation and result analysis, reducing manual effort and improving accuracy.",
      "Designed an intuitive interface for uploading response data and viewing calculated scores.",
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Web & Platforms",
    points: [
      "Built a personal and group expense management application for tracking and organizing expenditures.",
      "Implemented trip expense sharing and automated bill-splitting among multiple participants.",
      "Designed dashboards for monitoring spending patterns and managing shared expenses efficiently.",
    ],
  },
];

export const LEADERSHIP_LIST: LeadershipItem[] = [
  {
    role: "RAG Module - Member",
    organization: "NeuraCET",
    period: "September 2026 – Present",
  },
  {
    role: "Web and Technology - Subpanel Member",
    organization: "Heritage and Collectibles Society (HCS) CET",
    period: "September 2026 – Present",
  },
  {
    role: "Web Development Lead",
    organization: "Institution's Innovation Council (IIC) CET",
    period: "August 2026 – Present",
  },
];

export const HACKATHON_ITEM: HackathonItem = {
  title: "Bharathiya Antariksh Hackathon 2026",
  organizer: "Conducted by ISRO, powered by Hack2skill",
  image: "/ISRO_BAH_Hackathon.png",
  details: [
    "Tackled IR satellite image colorization and enhancement to improve interpretation of objects such as roads, buildings, vegetation, and vehicles.",
    "Collaborated in a 4-member team on an end-to-end IR-to-RGB deep learning pipeline combining image enhancement and colorization.",
    "Focused on preserving semantic integrity and improving downstream object interpretation using metrics such as PSNR, SSIM, and FID.",
  ],
};

export const VOLUNTEERING_LIST: VolunteeringItem[] = [
  {
    organization: "Dhwani CET",
    role: "Technical Team Member",
    period: "July 2026 – Present",
  },
  {
    organization: "Drishti CET",
    role: "Marketing Team Member",
    period: "August – September 2026",
  },
  {
    organization: "Mashi CET",
    role: "Content Team Member",
    period: "July – August 2026",
    description:
      "Created captions and written content for social media posts, event speeches, announcements, and official event communications.",
  },
];
