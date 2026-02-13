import { Project } from "@/lib/types";

export const projects: Project[] = [
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
];
