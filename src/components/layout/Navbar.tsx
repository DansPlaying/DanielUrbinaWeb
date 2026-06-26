"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navLinks = [
    { label: t("openSource"), href: "#open-source", id: "open-source" },
    { label: t("about"), href: "#about", id: "about" },
    { label: t("skills"), href: "#skills", id: "skills" },
    { label: t("projects"), href: "#projects", id: "projects" },
    { label: t("experience"), href: "#experience", id: "experience" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background-secondary/80 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex-shrink-0" aria-label="Back to top">
          <Logo size="sm" className="md:hidden" />
          <Logo size="md" className="hidden md:block" />
        </a>

        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-cyan after:transition-transform after:origin-left",
                activeSection === link.id
                  ? "text-text-primary after:scale-x-100"
                  : "text-text-secondary hover:text-text-primary after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="p-2 text-text-primary hover:bg-background-tertiary rounded-md transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background-secondary z-50 shadow-xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex justify-end mb-8">
                <button
                  className="p-2 text-text-primary hover:bg-background-tertiary rounded-md transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block text-lg font-medium transition-colors",
                      activeSection === link.id
                        ? "text-accent-cyan border-l-2 border-accent-cyan pl-3"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <Button
                  variant="primary"
                  href="/Daniel-Urbina-Resume.pdf"
                  className="w-full text-sm"
                  download
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Download size={16} />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
