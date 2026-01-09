// TypeScript interfaces for portfolio data

export interface Skill {
  name: string;
  category: "Languages and Databases" | "Frameworks and Libraries" | "Tools and Platforms";
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: "experience" | "education";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterHandle?: string;
}
