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
  category: "AI & Systems" | "Web & Platforms" | "Automation & Tools" | "Enterprise Software";
  points: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description?: string;
  certificateUrl?: string;
}

export interface HackathonItem {
  title: string;
  organizer: string;
  details: string[];
  image?: string;
  certificateUrl?: string;
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
    "",
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
    { label: "BS Data Science (IITM)", value: 8.63, isDecimal: true, suffix: " CGPA" },
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
    grade: "CGPA: 8.63 / 10",
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
    id: "refind",
    title: "ReFind",
    stack: ["Java", "Java Swing", "JDBC", "MySQL", "Maven", "BCrypt"],
    category: "Web & Platforms",
    featured: true,
    points: [
      "Collaborated with a team to develop ReFind, a centralized Lost and Found Management System designed to streamline item reporting, claiming, and moderation.",
      "Contributed to the development of Java Swing interfaces and backend service workflows for authentication, lost/found item management, and claim processing.",
      "Implemented database-backed authentication using JDBC and BCrypt password hashing, with MySQL for persistent data management.",
      "Developed Claims and Moderation functionalities with role-based access control, addressing concurrent operations and preventing unauthorized item updates.",
      "Improved application reliability through service-layer enhancements, database integration testing, and automated Maven test execution.",
    ],
    githubUrl: "https://github.com/ashikthanzeer/refind",
  },
  {
    id: "brightloop",
    title: "Brightloop Subscription Management",
    stack: ["Python", "Odoo 19", "PostgreSQL", "XML", "Odoo ORM"],
    category: "Enterprise Software",
    featured: true,
    points: [
      "Collaborated with a team during the Odoo Hackathon to develop Brightloop, a custom Subscription Management solution extending Odoo 19's ERP capabilities.",
      "Developed a custom Odoo module with dedicated models, business logic, and XML-based views to support subscription management workflows.",
      "Integrated subscription functionality with Odoo's existing Product, Accounting, and Mail modules using its ORM and modular architecture.",
      "Configured access controls and security rules to establish role-based permissions for subscription-related operations.",
      "Performed module installation, functional testing, and debugging, resolving integration issues involving XML configurations, database models, and Odoo's framework.",
    ],
    githubUrl: "https://github.com/ashikthanzeer/odoo-hackathon",
  },
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
    githubUrl: "https://github.com/NeuraCET/NeuraCET-rag-pipeline",
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
    githubUrl: "https://github.com/abban-v/CollegeManagement",
    liveUrl: "https://cet-management.vercel.app",
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
    githubUrl: "https://github.com/ashikthanzeer/civicgrid",
    liveUrl: "https://civicgrid.vercel.app",
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
    githubUrl: "https://github.com/ashikthanzeer/keam-monitor",
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
    githubUrl: "https://github.com/ashikthanzeer/studyplanapp",
    liveUrl: "https://studyplanapp.vercel.app",
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
    githubUrl: "https://github.com/ashikthanzeer/scorefusion",
    liveUrl: "https://civicgrid.vercel.app",
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
    githubUrl: "https://github.com/ashikthanzeer/expense-tracker",
    liveUrl: "https://groupexptracker.vercel.app",
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
    description:
      "Serving as the Web Development Lead at the Institution's Innovation Council (IIC), CET, contributing to its web development initiatives. Developed the AICTE IDEA Lab website to showcase the laboratory, its facilities, and innovation activities.",
  },
  {
    role: "Department Magazine - Proofreading Team",
    organization: "CS Association CET",
    period: "September - October 2026",
    description:
      "Worked as a member of the Proofreading Team for AXIS - the CS Department Magazine 2025–26, reviewing content for grammatical accuracy, spelling, consistency, and readability to ensure a polished final publication.",
  },
  {
    organization: "Dhwani CET",
    role: "Technical Team Member",
    period: "July – October 2026",
    description:
      "Contributed to the Technical Team for Dhwani’26 by designing and developing the website for the Rangam Film Festival, focusing on presenting festival information and updates through a responsive and user-friendly interface.",
  },
  {
    organization: "Drishti CET",
    role: "Marketing Team Member",
    period: "August – September 2026",
    description:
      "Supported the Marketing Team at Drishti CET by assisting with social media outreach and distributing promotional content across student networks and relevant platforms.",
  },
  {
    organization: "Mashi CET",
    role: "Content Team Member",
    period: "July – August 2026",
    description:
      "Created captions and written content for social media posts, event speeches, announcements, and official event communications.",
  },
];
export interface WorkExperienceItem {
  position: string;
  company: string;
  period: string;
  description?: string;
  certificateUrls?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const WORK_EXPERIENCE_LIST: WorkExperienceItem[] = [
  {
    position: "Front-end AI Engineering Intern",
    company: "FlyRank AI",
    period: "September 2026 - Present",
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
  certificateUrl: "https://example.com/hackathon-certificate.pdf",
};

export const VOLUNTEERING_LIST: VolunteeringItem[] = [
  {
    organization: "Dhwani CET",
    role: "Technical Team Member",
    period: "July – October 2026",
    description:
      "Contributed to the Technical Team for Dhwani’26 by designing and developing the website for the Rangam Film Festival, focusing on presenting festival information and updates through a responsive and user-friendly interface.",
  },
  {
    organization: "Drishti CET",
    role: "Marketing Team Member",
    period: "August – September 2026",
    description:
      "Supported the Marketing Team at Drishti CET by assisting with social media outreach and distributing promotional content across student networks and relevant platforms.",
  },
  {
    organization: "Mashi CET",
    role: "Content Team Member",
    period: "July – August 2026",
    description:
      "Created captions and written content for social media posts, event speeches, announcements, and official event communications.",
  },
];
