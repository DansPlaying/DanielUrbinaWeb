import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "chaski",
    title: "Chaski",
    description:
      "AI agent for conversational commerce, built at Sancrisoft. Answers a store's customers 24/7 on web and WhatsApp using the shop's real catalog and policies.",
    longDescription:
      "Contributed to the development of Chaski at Sancrisoft, an AI sales agent that online stores plug into their own channels. Merchants connect their catalog — a site link, social profiles, or a photo/PDF of their product list — answer a short set of questions about shipping, payments, hours, and brand tone, then test the agent against real data in a playground before switching it on. Once live, it handles customer messages around the clock in the customer's own language, recommends products, checks orders, and helps close the sale. Answers are grounded strictly in the store's real catalog and policies, with a citation for where each one came from; when the agent does not know something it says so and hands the conversation to a human instead of inventing an answer. Available on web and WhatsApp, with Instagram and Messenger on the way.",
    image: "/images/projects/chaski.webp",
    tags: ["Next.js", "React", "Conversational AI", "WhatsApp", "E-commerce"],
    featured: true,
    realProject: true,
    teamProject: true,
    rightsHolder: "Sancrisoft",
    category: "web",
    links: {
      demo: "https://chaski.sancrisoft.com/",
    },
    contact: {
      name: "Sancrisoft",
      email: "info@sancrisoft.com",
      phone: "+1 (754) 273-7633",
    },
    date: "2026",
  },
  {
    id: "sancrisoft-website",
    title: "Sancrisoft Company Website",
    description:
      "Corporate website for Sancrisoft, a software development company. Built as part of the development team.",
    longDescription:
      "Contributed to building the official corporate website for Sancrisoft, a software development company specializing in custom solutions. The site showcases the company's services, team, and portfolio with a modern, professional design optimized for lead generation and brand presence. Content is delivered from Strapi as a headless CMS, so the team can update services, people, and portfolio entries without a code deploy.",
    image: "/images/projects/sancrisoft-web.png",
    tags: ["Next.js", "React", "TypeScript", "Strapi", "Corporate"],
    featured: true,
    realProject: true,
    teamProject: true,
    rightsHolder: "Sancrisoft",
    category: "web",
    links: {
      demo: "https://www.sancrisoft.com",
    },
    contact: {
      name: "Sancrisoft",
      email: "info@sancrisoft.com",
      phone: "+1 (754) 273-7633",
    },
    date: "2025",
  },
  {
    id: "infinitics-app",
    title: "Infinitics Self-Service & Payments App",
    description:
      "Billing and self-service platform for Infinitics, a Venezuelan internet provider. Handles automated and manually reported payments, support tickets, and a Next.js admin panel with CRM.",
    longDescription:
      "A production platform used every month by the subscribers of Infinitics (infinitics.com.ve), a CONATEL-licensed wireless internet provider operating in Táchira, Venezuela. The customer app is built with Flutter and shipped to both web and mobile from a single codebase: each subscriber can switch between the services registered under their name, review their plan, see the amount due for the current month and their cut-off day, and settle the bill without calling an agent. Payments are the heart of the product and run on two tracks. Automated rails such as Zelle are matched and cleared without human intervention, while the manually reported channels that dominate the Venezuelan market — Pago Móvil, Bancolombia, and international bank transfers — let the customer submit a reference that the operations team verifies from the back office, keeping the product usable under local banking constraints instead of forcing a single card processor. Around that, the app covers payment history, support tickets, internal VPN provisioning, and IP details. On the operations side I contributed to the Next.js admin panel and its CRM: subscriber and service records, payment reconciliation and verification queues, and ticket handling — with Firebase (Auth, Firestore, Cloud Functions, and Hosting) as the shared backend behind both clients. Work on the platform is ongoing, delivered as improvements requested by the business.",
    image: "/images/projects/infinitics.webp",
    tags: ["Flutter", "Dart", "Firebase", "Next.js", "Payments", "CRM"],
    featured: true,
    realProject: true,
    rightsHolder: "Infinitics",
    category: "mobile",
    links: {
      demo: "https://app-infinitics-web.web.app",
    },
    contact: {
      name: "Melvick Ocanto",
      email: "melvick.ocanto@infinitics.com.ve",
    },
    date: "2025",
  },
  {
    id: "pwrl",
    title: "PWRL — Powerlaw Funds",
    description:
      "Investor-facing website for PWRL (Nasdaq: PWRL), a closed-end fund giving public investors exposure to private tech companies. Built with the Sancrisoft development team.",
    longDescription:
      "Contributed, as part of the Sancrisoft development team, to the public website of Powerlaw Corp. — a Nasdaq-listed closed-end fund whose pitch is access, through a single publicly traded ticker, to private technology companies that retail investors normally cannot reach: SpaceX, OpenAI, Stripe, Databricks, Figma, Perplexity, Waymo, and others. The site has to serve two audiences at once. For prospective investors it explains the fund's vision, its portfolio holdings, and how to trade the stock. For existing shareholders and regulators it acts as an investor-relations hub, surfacing monthly NAV reporting, quarterly portfolio disclosures, SEC filings, board and governance information, and the risk disclaimers a regulated fund is required to publish. Because the audience skews broad and the content is financial and legally sensitive, accessibility and clarity were treated as requirements rather than polish: I worked on the front end applying WCAG 2.1 AA standards — keyboard navigation, ARIA labelling, and sufficient color contrast over the site's dark, image-heavy hero treatments — so the disclosures stay readable for every visitor. The site's content is served from Contentful as a headless CMS, which lets the fund's team publish updates and disclosures without going through a code deploy.",
    image: "/images/projects/pwrl.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Contentful",
      "Accessibility",
      "Fintech",
    ],
    featured: true,
    realProject: true,
    teamProject: true,
    rightsHolder: "Powerlaw Corp",
    teamCompany: "Sancrisoft",
    category: "web",
    links: {
      demo: "https://www.powerlawfunds.com/pwrl",
    },
    contact: {
      name: "Sancrisoft",
      email: "info@sancrisoft.com",
      phone: "+1 (754) 273-7633",
    },
    date: "2026",
  },
  {
    id: "centinela",
    title: "Centinela — El Guardián de los Páramos",
    description:
      "Flutter app for Centinela, an IoT platform that monitors high-Andean páramo forests. Shows live readings from field sensors — CO₂, humidity, temperature, and rainfall — tied to each plot and device.",
    longDescription:
      "Centinela, el Guardián de los Páramos, is an environmental monitoring platform for the high-Andean páramos — the moorland forests that regulate the water supply for much of Colombia and Venezuela. Sensors installed in the field feed an IoT network that measures and quantifies the real impact of the money stakeholders put into conservation, combining machine learning, AI, big data, pattern recognition, and satellite image analysis to turn raw readings into something a landowner or an investor can act on. I built the Flutter client that puts all of that in the hands of the people on the ground: register and sign in, then see the páramo's current conditions, browse your plots with their surveyed area and satellite boundary polygons, drill into each registered sensor by its coordinates, and read temperature and relative-humidity time series charted by day or month. A plot view rolls the sensor network up into the numbers that matter — carbon dioxide, relative humidity, relative temperature, and precipitation — over a map that locates the plot in the wider region, alongside an in-app support channel. Firebase handles authentication and real-time data for the client, with AWS behind the sensor ingestion and processing pipeline. The app is published on Google Play; the source is private.",
    image: "/images/projects/centinela.webp",
    tags: ["Flutter", "Dart", "Firebase", "AWS", "IoT", "Sustainability"],
    featured: true,
    realProject: true,
    privateSource: true,
    rightsHolder: "Centinela El Guardián de los Páramos",
    category: "mobile",
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.digitalnode.centinela_client",
      videoOverview: "https://www.youtube.com/watch?v=z-UttIzncic",
      videoTeam: "https://www.youtube.com/watch?v=GQoekrKiF3Y",
    },
    contact: {
      name: "Melvick Ocanto",
      email: "melvick.ocanto@infinitics.com.ve",
    },
    date: "2023",
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
    id: "inventory-management",
    title: "Inventory Management",
    description:
      "A comprehensive inventory management system with credit control features. Built with Next.js and Neon database.",
    longDescription:
      "A full-featured inventory management application designed to streamline stock tracking and credit control operations. Built with Next.js for a fast, modern user experience, Neon as the serverless PostgreSQL database for reliable data persistence, and styled with Tailwind CSS for a clean, responsive interface.",
    image: "/images/projects/inventory-management.png",
    tags: ["Next.js", "Neon", "Tailwind CSS", "HTML"],
    featured: true,
    category: "web",
    links: {
      demo: "https://inventory-management-dans.netlify.app/dashboard/creditControl",
      github: "https://github.com/DansPlaying/inventory-managment",
    },
    date: "2023",
  },
  {
    id: "coalitions-assessment",
    title: "Tech.Care Patient Dashboard",
    description:
      "Healthcare patient management dashboard built as a frontend technical assessment. Features real-time vital signs, diagnosis history charts, and lab results.",
    longDescription:
      "A frontend technical assessment in which I built a fully functional healthcare management platform from a provided design and REST API. The dashboard displays a roster of patients with their demographics, and selecting a patient surfaces a rich detail view: a six-month blood pressure history chart with systolic/diastolic trend lines, a diagnostic list table showing conditions, descriptions, and statuses, vital signs cards (respiratory rate, temperature, heart rate) with above/below-average indicators, and a lab results panel covering blood tests, CT scans, and radiology reports. The interface mirrors a production-grade EMR UI with a tabbed navigation bar (Overview, Patients, Schedule, Message, Transactions) and a clean, accessible layout. Built with Next.js and deployed on Netlify. Source code is kept private per assessment confidentiality requirements.",
    image: "/images/projects/coalitions-assessment.png",
    tags: ["Next.js", "React", "TypeScript", "REST API", "Healthcare"],
    featured: true,
    category: "web",
    links: {
      demo: "https://assessment-daniel-urbina-fornt.netlify.app/",
    },
    date: "2026",
  },
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
    rightsHolder: "Daniel Urbina",
    category: "web",
    links: {
      demo: "#top",
      github: "https://github.com/DansPlaying/DanielUrbinaWeb",
    },
    date: "2026",
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
      github: "https://github.com/DansPlaying/sancrisoft-technical-assessment",
    },
    date: "2025",
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
      github: "https://github.com/DansPlaying/noteCalculatorUnet",
    },
    date: "2025",
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
    date: "2025",
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
    date: "2026",
  },
];
