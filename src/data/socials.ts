import { Social } from "@/lib/types";

// Social links loaded from environment variables to avoid indexation
export const socials: Social[] = [
  {
    name: "GitHub",
    url: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    icon: "Linkedin",
  },
  {
    name: "X",
    url: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    icon: "Instagram",
  },
].filter((social) => social.url); // Only include socials with URLs configured
