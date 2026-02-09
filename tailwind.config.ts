import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0F",
          secondary: "#12121A",
          tertiary: "#1A1A2E",
        },
        accent: {
          DEFAULT: "#6C63FF",
          purple: "#A855F7",
          cyan: "#22D3EE",
        },
        text: {
          primary: "#F1F1F1",
          secondary: "#8B8B9E",
          highlight: "#A855F7",
        },
        border: {
          DEFAULT: "#1E1E2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6C63FF, #A855F7)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 99, 255, 0.4)",
        "glow-lg": "0 0 40px rgba(108, 99, 255, 0.6)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.4)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
