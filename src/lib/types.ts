export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  featured: boolean;
  category: "web" | "mobile" | "tool" | "other";
  links: {
    demo?: string;
    github?: string;
  };
  date: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "other";
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | "present";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  username?: string;
}
