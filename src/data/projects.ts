import { Project } from "@/lib/types";

export const projects: Project[] = [
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
];
