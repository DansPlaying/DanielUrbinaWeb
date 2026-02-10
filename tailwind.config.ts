import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "rgb(var(--background) / <alpha-value>)",
          secondary: "rgb(var(--background-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--background-tertiary) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          purple: "rgb(var(--accent-purple) / <alpha-value>)",
          cyan: "rgb(var(--accent-cyan) / <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          highlight: "rgb(var(--text-highlight) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
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
