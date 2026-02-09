"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 48, height: 48 },
};

// Path animation variants with proper typing
const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" as const },
      fillOpacity: { duration: 0.5, delay: 1 },
    },
  },
};

export function Logo({ className, size = "md", animate = false }: LogoProps) {
  const { width, height } = sizes[size];

  if (!animate) {
    // Static SVG (faster, no animation overhead)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        width={width}
        height={height}
        className={cn("select-none", className)}
        aria-label="Daniel Urbina"
        role="img"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        {/* D letterform */}
        <path
          d="M6 8h8c7.5 0 13 5.5 13 16s-5.5 16-13 16H6V8zm5 4.5v23h3c5.5 0 9.5-4 9.5-11.5S19.5 12.5 14 12.5h-3z"
          fill="url(#logo-gradient)"
        />
        {/* U letterform */}
        <path
          d="M30 8v22c0 4.5 2.5 7.5 6 7.5s6-3 6-7.5V8h-4.5v21.5c0 2.2-.6 3.5-1.5 3.5s-1.5-1.3-1.5-3.5V8H30z"
          fill="url(#logo-gradient)"
        />
      </svg>
    );
  }

  // Animated SVG with draw-in effect
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={width}
      height={height}
      className={cn("select-none", className)}
      aria-label="Daniel Urbina"
      role="img"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="logo-gradient-anim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      {/* D letterform - animated */}
      <motion.path
        d="M6 8h8c7.5 0 13 5.5 13 16s-5.5 16-13 16H6V8zm5 4.5v23h3c5.5 0 9.5-4 9.5-11.5S19.5 12.5 14 12.5h-3z"
        fill="url(#logo-gradient-anim)"
        stroke="url(#logo-gradient-anim)"
        strokeWidth="1"
        variants={pathVariants}
      />
      {/* U letterform - animated with delay */}
      <motion.path
        d="M30 8v22c0 4.5 2.5 7.5 6 7.5s6-3 6-7.5V8h-4.5v21.5c0 2.2-.6 3.5-1.5 3.5s-1.5-1.3-1.5-3.5V8H30z"
        fill="url(#logo-gradient-anim)"
        stroke="url(#logo-gradient-anim)"
        strokeWidth="1"
        variants={pathVariants}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut" as const, delay: 0.3 },
          fillOpacity: { duration: 0.5, delay: 1.3 },
        }}
      />
    </motion.svg>
  );
}
