export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  featured: boolean;
  /** True for products shipped to real users, false/omitted for demos and assessments. */
  realProject?: boolean;
  category: "web" | "mobile" | "tool" | "other";
  links: {
    demo?: string;
    github?: string;
  };
  /** True when the work was delivered as part of a company development team, not solo. */
  teamProject?: boolean;
  /** Company that owns the product and its rights, when the work was done for a client or employer. */
  rightsHolder?: string;
  /** Company whose development team built it, when that differs from the rights holder. */
  teamCompany?: string;
  /** Reference contact at the client or company, for anyone who wants to verify the work. */
  contact?: {
    name?: string;
    role?: string;
    email?: string;
    phone?: string;
  };
  date: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "other";
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

export interface Certification {
  id: string;
  name: string;
  shortName: string;
  issuer: string;
  image: string;
  url: string;
  issuedDate: string;
  expiresDate?: string;
}
