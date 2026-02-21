import { Project, Skill, TimelineItem, SocialLink, SEOMetadata } from "@/types";

// ================= PERSONAL INFORMATION =================
export const PERSONAL_INFO = {
  name: "Arijit Mondal",
  title: "Full Stack Web Developer",
  tagline: "Building scalable, high-performance web applications",
  email: "arijitm717@gmail.com",
  location: "West Bengal, India",
  bio: `Full Stack Developer specializing in scalable, high-performance applications with React.js, Next.js, 
  Node.js, Express.js, and MongoDB. Experienced in building production-ready AI systems using RAG, 
  LLM integrations, and real-time architectures, delivered on AWS and Docker. Passionate about writing 
  clean, maintainable code and continuously improving my skill set.`,
};

// ================= SKILLS =================
export const SKILLS: Skill[] = [
  // Languages and Databases
  {
    name: "C++",
    category: "Languages and Databases",
    icon: "/tech_stack_images/cpp.png",
  },
  {
    name: "JavaScript",
    category: "Languages and Databases",
    icon: "/tech_stack_images/js.png",
  },
  {
    name: "TypeScript",
    category: "Languages and Databases",
    icon: "/tech_stack_images/ts.png",
  },
  {
    name: "HTML",
    category: "Languages and Databases",
    icon: "/tech_stack_images/html.png",
  },
  {
    name: "CSS",
    category: "Languages and Databases",
    icon: "/tech_stack_images/css.png",
  },
  {
    name: "MongoDB",
    category: "Languages and Databases",
    icon: "/tech_stack_images/mongodb.png",
  },
  {
    name: "Pinecone (Vector DB)",
    category: "Languages and Databases",
    icon: "/tech_stack_images/pinecone.png",
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/reactjs.png",
  },
  {
    name: "Next.js",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/nextjs.png",
  },
  {
    name: "Node.js",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/nodejs.png",
  },
  {
    name: "Express.js",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/expressjs.png",
  },
  {
    name: "Redux",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/redux.png",
  },
  {
    name: "Mongoose",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/mongoose.png",
  },
  {
    name: "Socket.IO",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/socketio.png",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/tailwindcss.png",
  },
  {
    name: "Shadcn UI",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/shadcn.png",
  },
  {
    name: "Motion",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/motion.png",
  },
  {
    name: "LangChain",
    category: "Frameworks and Libraries",
    icon: "/tech_stack_images/langchain.png",
  },

  // AI / Data
  {
    name: "RAG",
    category: "AI and Data",
    icon: "/tech_stack_images/rag.png",
  },
  {
    name: "LLM Integration",
    category: "AI and Data",
    icon: "/tech_stack_images/llm.png",
  },
  {
    name: "Embeddings",
    category: "AI and Data",
    icon: "/tech_stack_images/embeddings.png",
  },
  {
    name: "AI Agents",
    category: "AI and Data",
    icon: "/tech_stack_images/agents.png",
  },

  // Tools & Platforms
  {
    name: "Git",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/git.png",
  },
  {
    name: "GitHub",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/github.png",
  },
  {
    name: "AWS",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/aws.png",
  },
  {
    name: "Docker",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/docker.png",
  },
  {
    name: "Postman",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/postman.png",
  },
  {
    name: "VS Code",
    category: "Tools and Platforms",
    icon: "/tech_stack_images/vscode.png",
  },
];

// ================= PROJECTS =================
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Customer Support Chatbot",
    description:
      "Full-stack AI-powered customer support platform with an embeddable chat widget.",
    longDescription:
      "Designed a full-stack AI-powered customer support platform using Next.js 16 (App Router), React 19, TypeScript, and MongoDB, " +
      "featuring a production-ready embeddable chat widget deployable across external websites in under 10 minutes. " +
      "Integrated Google Gemini AI for context-aware response generation using custom business knowledge bases. " +
      "Architected secure REST API routes with enterprise-grade authentication via Scalekit SDK. " +
      "Engineered a dynamic chatbot configuration system allowing businesses to customize AI personality, tone, and training data.",
    image: "/project_images/ai-chatbot.png",
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Google Gemini AI",
      "RAG",
      "Scalekit SDK",
      "REST APIs",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "Doctor Appointment Booking App",
    description: "Full-stack appointment booking system with payments.",
    longDescription:
      "Engineered a full-stack doctor appointment system using React.js, Redux, Node.js, Express.js, and MongoDB, " +
      "featuring role-based dashboards for doctors and admins. " +
      "Integrated secure JWT-based authentication, appointment scheduling, and Razorpay for online payment processing. " +
      "Managed file uploads using Multer and Cloudinary, reducing manual effort by 50%. " +
      "Increased booking efficiency by approximately 40%, supporting over 100 users through backend optimization and streamlined workflows.",
    image: "/project_images/doctor-app.png",
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Razorpay", "Multer", "Cloudinary"],
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
    title: "Blog App with AI Features",
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
      "Built a full-featured e-commerce platform with product listings, cart management, and payment integration. " +
      "Implemented global state management using Redux Toolkit and handled media with Cloudinary. " +
      "Integrated Razorpay for secure payment processing.",
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
    title: "Full Stack MERN Intern",
    organization: "IPage Group (IPAGE UM SERVICES PVT LTD)",
    location: "Hyderabad, India (Remote)",
    startDate: "2025-09",
    endDate: "2026-02",
    description: [
      "Built and deployed end-to-end full-stack features using the MERN stack across a multi-module production project, including responsive UI components, authentication flows, and interactive dashboard modules",
      "Designed and integrated multiple RESTful API endpoints via AWS API Gateway, enabling secure communication between frontend applications and scalable serverless backend services",
      "Engineered serverless backend workflows using AWS Lambda and AWS DynamoDB to handle structured data operations and real-time updates, improving system scalability",
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
      "3rd Year, 6th Semester",
      "Core subjects: Data Structures, Algorithms, Web Development",
      "Strong focus on full-stack web technologies",
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
    "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, AWS, and AI/RAG-powered applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "AWS Lambda",
    "RAG",
    "LLM Integration",
    "AI Developer",
    "Web Developer Portfolio",
  ],
  ogImage: "/app_images/profile.jpg",
  twitterHandle: "@arijitmondal",
};
