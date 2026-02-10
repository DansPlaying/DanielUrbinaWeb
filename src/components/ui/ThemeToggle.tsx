"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-background-tertiary animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "linear-gradient(180deg, #1e293b 0%, #334155 100%)"
            : "linear-gradient(180deg, #38bdf8 0%, #0ea5e9 100%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Dark mode: stars */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-1.5 left-2"
            >
              <svg width="6" height="6" viewBox="0 0 8 8" fill="white">
                <path d="M4 0L4.5 3.5L8 4L4.5 4.5L4 8L3.5 4.5L0 4L3.5 3.5L4 0Z" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="absolute top-2.5 left-6 w-0.5 h-0.5 bg-white rounded-full"
            />
          </>
        )}
      </AnimatePresence>

      {/* Sun/Moon orb */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full shadow-md z-10"
        animate={{
          left: isDark ? "calc(100% - 28px)" : "4px",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Sun appearance */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isDark
              ? "linear-gradient(145deg, #f1f5f9 0%, #cbd5e1 100%)"
              : "linear-gradient(145deg, #fcd34d 0%, #f59e0b 100%)",
            boxShadow: isDark
              ? "inset -2px -2px 4px rgba(0,0,0,0.1)"
              : "0 0 12px rgba(251, 191, 36, 0.6)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Moon craters */}
        <AnimatePresence>
          {isDark && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="absolute top-1 right-1 w-1.5 h-1.5 bg-slate-400 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-1.5 left-1 w-1 h-1 bg-slate-400 rounded-full"
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
