import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing my work and skills. Built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "A modern, dark-themed developer portfolio featuring smooth animations with Framer Motion, responsive design, and optimized performance. The site showcases my projects, skills, and professional experience with a clean terminal-inspired aesthetic. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS for a fast, accessible, and SEO-friendly experience.",
    image: "/images/projects/personal-portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    category: "web",
    links: {
      demo: "#top",
      github: "https://github.com/DansPlaying/DanielUrbinaWeb",
    },
    date: "2025",
  },
  {
    id: "sancrisoft-website",
    title: "Sancrisoft Company Website",
    description:
      "Corporate website for Sancrisoft, a software development company. Built as part of the development team.",
    longDescription:
      "Contributed to building the official corporate website for Sancrisoft, a software development company specializing in custom solutions. The site showcases the company's services, team, and portfolio with a modern, professional design optimized for lead generation and brand presence.",
    image: "/images/projects/sancrisoft-web.png",
    tags: ["Next.js", "React", "TypeScript", "Corporate"],
    featured: true,
    category: "web",
    links: {
      demo: "https://www.sancrisoft.com",
    },
    date: "2024",
  },
  {
    id: "sancrisoft-business-wizard",
    title: "Business Registration Wizard",
    description:
      "Multi-step business registration form built as a technical assessment for Sancrisoft. Features a clean wizard interface with form validation and progress tracking.",
    longDescription:
      "A comprehensive business registration wizard that guides users through a 3-step process to incorporate a new company. Built with Next.js and React, it features a clean side navigation, visual progress indicators, and supports multiple business types including sole proprietorships, LLCs, corporations, and nonprofits. The form includes complete address capture with all 50 U.S. states and implements progressive disclosure for an intuitive user experience.",
    image: "/images/projects/tecnical-assesment-sancrisoft.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Form Validation"],
    featured: true,
    category: "web",
    links: {
      demo: "https://sancrisoft-assignment.netlify.app",
    },
    date: "2024",
  },
  {
    id: "unet-grade-calculator",
    title: "UNET Grade Calculator",
    description:
      "Academic grade calculator designed for UNET students to convert and project their grades throughout the semester.",
    longDescription:
      "A specialized grade calculation tool built for students at Universidad Nacional Experimental del Táchira (UNET). The calculator helps students convert grades between different scales, project final grades based on current performance, and plan their study efforts by understanding how future assessments will impact their overall standing. Features a clean, intuitive interface optimized for quick calculations.",
    image: "/images/projects/calculator-unet.webp",
    tags: ["Vue.js", "JavaScript", "CSS", "Academic Tools"],
    featured: true,
    category: "tool",
    links: {
      demo: "https://unetnotecalculator.netlify.app",
    },
    date: "2023",
  },
  {
    id: "trama-graph",
    title: "Trama Graph",
    description:
      "Real-time gas sensor monitoring system with Arduino integration, featuring live data visualization, configurable alerts, and data persistence.",
    longDescription:
      "A full-stack IoT monitoring solution that visualizes real-time Arduino gas sensor readings (CO, H2, CH4, LPG, AL) with 30-second rolling window charts. Features threshold-based alarm management with visual notifications, batch data uploads to PostgreSQL, and network resilience handling. The system uses Web Serial API for direct Arduino communication and includes snapshot generation for alarm reports.",
    image: "/images/projects/trama-graph.svg",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Arduino",
      "IoT",
    ],
    featured: true,
    category: "tool",
    links: {
      github: "https://github.com/21harley/trama-graph",
    },
    date: "2024",
  },
  {
    id: "cycle-app",
    title: "Cycle App",
    description:
      "A Flutter mobile application for tracking women's menstrual cycles with predictions and health insights.",
    longDescription:
      "A comprehensive menstrual cycle tracking app built with Flutter for cross-platform mobile support. Helps users track their periods, predict upcoming cycles, and monitor symptoms. Features an intuitive calendar interface, cycle history, and personalized insights to help women better understand their health patterns.",
    image: "/images/projects/cycle-app.png",
    tags: ["Flutter", "Dart", "Mobile", "Health"],
    featured: true,
    category: "mobile",
    links: {
      github: "https://github.com/DansPlaying/cycleApp",
    },
    date: "2024",
  },
  {
    id: "bdl-cap",
    title: "BDL Cap",
    description:
      "Web application for BDL Cap, developed at TLUX. Built with Laravel, Vue.js, HTML, and CSS.",
    longDescription:
      "A full-featured web application developed for BDL Cap as part of the work done at TLUX. Built with a Laravel backend powering a Vue.js frontend, delivering a responsive and dynamic user experience with clean HTML and CSS craftsmanship throughout.",
    image: "/images/projects/bdl-cap.png",
    tags: ["Laravel", "Vue.js", "HTML", "CSS", "PHP"],
    featured: true,
    category: "web",
    links: {
      demo: "https://bdlcap.com/",
    },
    date: "2024",
  },
  {
    id: "vistalite",
    title: "Vistalite",
    description:
      "Landing page for Vistalite, developed at TLUX. A clean, modern marketing site built with WordPress, HTML, and CSS.",
    longDescription:
      "A professional landing page built for Vistalite as part of the work done at TLUX. The site delivers a polished marketing experience with a modern design, crafted using WordPress as the CMS backbone alongside custom HTML and CSS to achieve pixel-perfect layouts and brand consistency.",
    image: "/images/projects/vistalite.png",
    tags: ["WordPress", "HTML", "CSS"],
    featured: true,
    category: "web",
    links: {
      demo: "https://vistalite.net/es/landing/",
    },
    date: "2024",
  },
  {
    id: "ensolvers-notes-app",
    title: "ENSOLVERS Notes App",
    description:
      "Full-stack notes application with authentication, tagging, and archiving. Built as a technical assessment for ENSOLVERS.",
    longDescription:
      "A complete notes management platform built as a technical assessment for ENSOLVERS, demonstrating full-stack proficiency with modern technologies. Features secure JWT-based authentication with 30-day session persistence, complete CRUD operations for notes, and an archive system for organizing content. Users can create custom category tags, assign multiple tags to notes, and filter their collection by category. The application implements user-isolated data storage, ensuring each user maintains their own private notes and categories. Built with a NestJS REST API backend using TypeORM for database operations, and a Next.js frontend styled with Tailwind CSS featuring dark mode support.",
    image: "/images/projects/ensolvers-notes.png",
    tags: ["Next.js", "NestJS", "TypeScript", "JWT", "TypeORM", "Tailwind CSS"],
    featured: true,
    category: "web",
    links: {
      demo: "https://urbina-frontend.netlify.app",
      github: "https://github.com/DansPlaying/ensolver-assesment",
    },
    date: "2024",
  },
];
