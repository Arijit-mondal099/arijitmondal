import { Project, Skill, TimelineItem, SocialLink, SEOMetadata } from "@/types";

// ================= PERSONAL INFORMATION =================
export const PERSONAL_INFO = {
  name: "Arijit Mondal",
  title: "Full Stack Web Developer",
  tagline: "Building scalable, high-performance web applications",
  email: "arijitm717@gmail.com",
  location: "West Bengal, India",
  bio: `Full Stack Web Developer with 6 months of hands-on industry experience and a strong foundation in 
  React.js, Node.js, and MongoDB. I specialize in building responsive user interfaces, secure REST APIs, 
  and real-time features. Experienced in AWS Lambda-based backend systems, scalable dashboards, 
  and performance-focused frontend development. Passionate about writing clean, maintainable code 
  and continuously improving my skill set.`,
};

// ================= SKILLS =================
export const SKILLS: Skill[] = [
  // Languages and Databases
  { name: "C++", category: "Languages and Databases", icon: '/tech_stack_images/cpp.png' },
  { name: "JavaScript", category: "Languages and Databases", icon: '/tech_stack_images/js.png' },
  { name: "TypeScript", category: "Languages and Databases", icon: '/tech_stack_images/ts.png' },
  { name: "HTML", category: "Languages and Databases", icon: '/tech_stack_images/html.png' },
  { name: "CSS", category: "Languages and Databases", icon: '/tech_stack_images/css.png' },
  { name: "MongoDB", category: "Languages and Databases", icon: '/tech_stack_images/mongodb.png' },

  // Frameworks & Libraries
  { name: "React.js", category: "Frameworks and Libraries", icon: '/tech_stack_images/reactjs.png' },
  { name: "Next.js", category: "Frameworks and Libraries", icon: '/tech_stack_images/nextjs.png' },
  { name: "Angular", category: "Frameworks and Libraries", icon: '/tech_stack_images/angular.png' },
  { name: "Node.js", category: "Frameworks and Libraries", icon: '/tech_stack_images/nodejs.png' },
  { name: "Express.js", category: "Frameworks and Libraries", icon: '/tech_stack_images/expressjs.png' },
  { name: "Redux", category: "Frameworks and Libraries", icon: '/tech_stack_images/redux.png' },
  { name: "Mongoose", category: "Frameworks and Libraries", icon: '/tech_stack_images/mongoose.png' },
  { name: "Bootstrap", category: "Frameworks and Libraries", icon: '/tech_stack_images/bootstrap.png' },


  // Tools & Platforms
  { name: "Git", category: "Tools and Platforms", icon: '/tech_stack_images/git.png' },
  { name: "GitHub", category: "Tools and Platforms", icon: '/tech_stack_images/github.png' },
  { name: "AWS", category: "Tools and Platforms", icon: '/tech_stack_images/aws.png' },
  { name: "Vs Code", category: "Tools and Platforms", icon: '/tech_stack_images/vscode.png' }
];

// ================= PROJECTS =================
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "DroneTV Platform (Professional Work)",
    description:
      "Large-scale platform for professionals, companies, and events with admin dashboards.",
    longDescription:
      "Worked as a Frontend / Full Stack Developer on DroneTV, building professional, company, and event modules. " +
      "Implemented editable templates, AWS Lambda APIs, admin dashboards, image cropping using react-easy-crop, " +
      "lead management, chat systems, and role-based workflows.",
    image: "/project_images/dronetv.png",
    techStack: [
      "React",
      "AWS Lambda",
      "REST APIs",
      "Tailwind CSS",
      "MongoDB",
      "Socket.IO",
    ],
    githubUrl: "https://github.com/gisipageums-droid/Dronetv/tree/main",
    liveUrl: "https://dronetv.in",
    featured: true,
  },
  {
    id: "2",
    title: "Doctor Appointment Booking App",
    description: "Full-stack appointment booking system with payments.",
    longDescription:
      "Developed a full-stack doctor appointment system with role-based dashboards for doctors and admins. " +
      "Implemented JWT authentication, appointment scheduling, Razorpay payments, and file uploads using " +
      "Multer and Cloudinary. Improved booking efficiency by ~40%.",
    image: "/project_images/doctor-app.png",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Razorpay"],
    githubUrl: "https://github.com/Arijit-mondal099/health",
    liveUrl: "https://health-frontend-c4x4.onrender.com",
    featured: true,
  },
  {
    id: "3",
    title: "Task Management Application",
    description: "Task and workflow management system.",
    longDescription:
      "Built a task management application using React, Zustand, Node.js, and MongoDB. " +
      "Implemented secure JWT authentication, optimized state handling, full CRUD functionality, " +
      "and a responsive UI compatible with 40+ device types.",
    image: "/project_images/taskpilot.png",
    techStack: [
      "React",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Arijit-mondal099/taskPilot",
    liveUrl: "https://taskpilot-6i8g.onrender.com",
    featured: true,
  },
  {
    id: "4",
    title: "Real-Time Chat Application",
    description: "Real-time 1-on-1 chat application.",
    longDescription:
      "Developed a real-time chat application supporting 50+ users using Socket.IO. " +
      "Implemented JWT authentication, online presence tracking, message history, " +
      "and global state management using Zustand.",
    image: "/project_images/chathub.png",
    techStack: [
      "React",
      "Socket.IO",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
    ],
    githubUrl: "https://github.com/Arijit-mondal099/chat-hub",
    liveUrl: "https://chat-hub-vm2i.onrender.com",
    featured: false,
  },
  {
    id: "5",
    title: "An blog app with AI features",
    description: `A modern, full-stack blog application that allows users to create, view, and manage blog posts.`,
    image: "/project_images/blog-app.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "Axios",
      "Framer Motion",
      "React Quill",
      "Node.js",
      "Express.js",
      "@google/genai",
      "ImageKit",
      "MongoDB",
      "Multer",
    ],
    githubUrl: "https://github.com/Arijit-mondal099/quickBlog",
    liveUrl: "https://quick-blog-nine-kappa.vercel.app/",
    featured: true,
  },
  {
    id: "6",
    title: "E-Commerce Application",
    description:
      "A modern, full-stack e-commerce platform built with React and Node.js, featuring a sleek user interface and robust backend functionality.",
    longDescription:
      "Developed a real-time chat application supporting 50+ users using Socket.IO. " +
      "Implemented JWT authentication, online presence tracking, message history, " +
      "and global state management using Zustand.",
    image: "/project_images/zenocart.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Cloudinary",
      "Razorpay",
    ],
    githubUrl: "https://github.com/Arijit-mondal099/zenocart",
    liveUrl: "https://zenocart.onrender.com/",
    featured: true,
  },
];

// ================= EXPERIENCE & EDUCATION =================
export const TIMELINE: TimelineItem[] = [
  {
    id: "1",
    title: "Frontend / Full Stack Developer",
    organization: "DroneTV",
    location: "Remote",
    startDate: "2024-07",
    endDate: "2025-01",
    description: [
      "Developed Professional, Company, and Event modules with editable templates",
      "Integrated AWS Lambda APIs for admin approval, dashboard data, and lead management",
      "Built user dashboard with template tracking, chat system, and lead workflows",
      "Implemented image cropping, UI optimizations, and validation logic",
    ],
    type: "experience",
  },
  {
    id: "2",
    title: "Diploma in Computer Science & Technology",
    organization: "Berhampore Polytechnic College",
    location: "West Bengal, India",
    startDate: "2023-07",
    endDate: "2026-06",
    description: [
      "Current GPA: 8.3 / 10",
      "Core subjects: Data Structures, Algorithms, Web Development",
      "Strong focus on full-stack web technologies",
      "Last year 5th semester",
    ],
    type: "education",
  },
];

// ================= SOCIAL LINKS =================
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Arijit-mondal099",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arijit-mondal-211217287",
    icon: "linkedin",
  },
  {
    name: "twitter",
    url: "https://x.com/arijit_m_000999",
    icon: "twitter",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/arijit_mondal009",
    icon: "instagram",
  },
  {
    name: "email",
    url: "mailto:arijitm717@gmail.com",
    icon: "email",
  },
  {
    name: "phone",
    url: "tel:+918016075232",
    icon: "phone",
  },
];

// ================= SEO =================
export const SEO_METADATA: SEOMetadata = {
  title: "Arijit Mondal | Full Stack Web Developer",
  description:
    "Full Stack Web Developer with experience in React, Node.js, MongoDB, AWS Lambda, and real-time applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "AWS Lambda",
    "Web Developer Portfolio",
  ],
  ogImage: "/app_images/profile.jpg",
  twitterHandle: "@arijitmondal",
};
