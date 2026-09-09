import { Certification, CertificationRow } from "@/lib/types";

// Public badges from https://www.credly.com/users/daniel-urbina.d15ea4b3
// `url` points at the verifiable public badge page on Credly.
// Grouped by issuer, newest first — the Certifications section renders one
// marquee row per issuer, in the order declared here.
const contentful: Certification[] = [
  {
    id: "f0cb642a-9244-4a05-9284-ad11c4f9c0a7",
    name: "Contentful Certified Content Manager",
    shortName: "Certified Content Manager",
    issuer: "Contentful",
    image: "/images/badges/contentful-certified-content-manager.png",
    url: "https://www.credly.com/badges/f0cb642a-9244-4a05-9284-ad11c4f9c0a7/public_url",
    issuedDate: "2026-09-04",
    expiresDate: "2028-09-04",
  },
  {
    id: "af540e91-4d83-49ce-b7f7-05271e31bbb4",
    name: "Contentful Verified Skill Badge: Contentful Foundations",
    shortName: "Contentful Foundations",
    issuer: "Contentful",
    image: "/images/badges/contentful-foundations.png",
    url: "https://www.credly.com/badges/af540e91-4d83-49ce-b7f7-05271e31bbb4/public_url",
    issuedDate: "2026-08-28",
  },
  {
    id: "9cc6b20d-c2a1-4e04-9992-75da4f44ff08",
    name: "Contentful Verified Skill Badge: Studio for Content Managers",
    shortName: "Studio for Content Managers",
    issuer: "Contentful",
    image: "/images/badges/contentful-studio-content-managers.png",
    url: "https://www.credly.com/badges/9cc6b20d-c2a1-4e04-9992-75da4f44ff08/public_url",
    issuedDate: "2026-08-28",
  },
  {
    id: "8b15acd4-2bc5-45a8-9788-ebf53009f146",
    name: "Contentful Verified Skill Badge: Studio for Developers",
    shortName: "Studio for Developers",
    issuer: "Contentful",
    image: "/images/badges/contentful-studio-developers.png",
    url: "https://www.credly.com/badges/8b15acd4-2bc5-45a8-9788-ebf53009f146/public_url",
    issuedDate: "2026-08-28",
  },
  {
    id: "58f66777-eab7-4871-ba9a-9a8540a097e1",
    name: "Contentful Verified Skill Badge: Personalizing Experiences",
    shortName: "Personalizing Experiences",
    issuer: "Contentful",
    image: "/images/badges/contentful-personalizing-experiences.png",
    url: "https://www.credly.com/badges/58f66777-eab7-4871-ba9a-9a8540a097e1/public_url",
    issuedDate: "2026-07-31",
  },
  {
    id: "f4d49ff0-3099-4b6a-885a-029720de6852",
    name: "Contentful Verified Skill Badge: Implementing Solutions",
    shortName: "Implementing Solutions",
    issuer: "Contentful",
    image: "/images/badges/contentful-implementing-solutions.png",
    url: "https://www.credly.com/badges/f4d49ff0-3099-4b6a-885a-029720de6852/public_url",
    issuedDate: "2026-07-30",
  },
  {
    id: "cc83c1d4-b2c0-4fdc-bf99-519ca5d6976d",
    name: "Contentful Verified Skill Badge: Architecting Solutions",
    shortName: "Architecting Solutions",
    issuer: "Contentful",
    image: "/images/badges/contentful-architecting-solutions.png",
    url: "https://www.credly.com/badges/cc83c1d4-b2c0-4fdc-bf99-519ca5d6976d/public_url",
    issuedDate: "2026-07-23",
  },
];

const mongodb: Certification[] = [
  {
    id: "87d5496f-203d-457c-9310-7187461129ad",
    name: "MongoDB Advanced Schema Design Patterns and Anti-patterns Skill Badge",
    shortName: "Advanced Schema Design Patterns",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-advanced-schema-design-patterns.png",
    url: "https://www.credly.com/badges/87d5496f-203d-457c-9310-7187461129ad/public_url",
    issuedDate: "2026-09-09",
  },
  {
    id: "4f8e9a7c-1aa1-4747-b438-441e4f7cfa2e",
    name: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
    shortName: "Schema Design Patterns",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-schema-design-patterns.png",
    url: "https://www.credly.com/badges/4f8e9a7c-1aa1-4747-b438-441e4f7cfa2e/public_url",
    issuedDate: "2026-09-08",
  },
  {
    id: "28afefc3-e3a4-41bc-b236-bddebfb3b9f6",
    name: "Building an App with Code Agents and MongoDB",
    shortName: "Apps with Code Agents",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-app-code-agents.png",
    url: "https://www.credly.com/badges/28afefc3-e3a4-41bc-b236-bddebfb3b9f6/public_url",
    issuedDate: "2026-09-07",
  },
  {
    id: "055d0a8e-baf8-4368-a7a7-7f2ab117525e",
    name: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
    shortName: "Resilient AI Strategy",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-ai-resilient-strategy.png",
    url: "https://www.credly.com/badges/055d0a8e-baf8-4368-a7a7-7f2ab117525e/public_url",
    issuedDate: "2026-09-07",
  },
  {
    id: "e8066b0a-e417-4458-b72b-590bbba21189",
    name: "From Relational Model (SQL) to MongoDB's Document Model",
    shortName: "SQL to Document Model",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-relational-to-document.png",
    url: "https://www.credly.com/badges/e8066b0a-e417-4458-b72b-590bbba21189/public_url",
    issuedDate: "2026-09-04",
  },
  {
    id: "083957a9-93e4-44c4-a9f2-4e661121e1ac",
    name: "MongoDB Overview: Core Concepts and Architecture",
    shortName: "MongoDB Core Concepts",
    issuer: "MongoDB",
    image: "/images/badges/mongodb-overview-core-concepts.png",
    url: "https://www.credly.com/badges/083957a9-93e4-44c4-a9f2-4e661121e1ac/public_url",
    issuedDate: "2026-09-04",
  },
];

// One row per issuer. The section alternates each row's scroll direction, so
// the two belts drift opposite ways and read as two distinct rows.
export const certificationRows: CertificationRow[] = [
  { issuer: "Contentful", items: contentful },
  { issuer: "MongoDB", items: mongodb },
];

export const CREDLY_PROFILE_URL =
  "https://www.credly.com/users/daniel-urbina.d15ea4b3";
