"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { GlobeVenezuela } from "@/components/ui/GlobeVenezuela";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { AetherFlow } from "@/components/ui/AetherFlow";

const stats = [
  { num: 3,   suffix: "+", label: "Years Experience" },
  { num: 10,  suffix: "+", label: "Projects Completed" },
  { num: 15,  suffix: "+", label: "Technologies" },
  { num: 100, suffix: "%", label: "Commitment" },
];

function CountUp({
  num,
  suffix,
  duration = 1600,
}: {
  num: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setCount(Math.round(eased * num));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <div
      ref={wrapRef}
      className="text-5xl font-bold bg-gradient-to-b from-accent-cyan via-accent to-accent-purple bg-clip-text text-transparent tabular-nums"
    >
      {count}
      {suffix}
    </div>
  );
}

export function About() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && theme === "light";

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-background-secondary"
    >
      {/* AetherFlow WebGL — mouse-reactive purple plasma */}
      <AetherFlow
        lightMode={isLight}
        className={`absolute inset-0 w-full h-full ${isLight ? "opacity-70" : "opacity-55"}`}
      />

      {/* Gradient overlay for readability */}
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${
        isLight
          ? "from-background-secondary/50 via-background-secondary/20 to-background-secondary/50"
          : "from-background-secondary/70 via-background-secondary/40 to-background-secondary/70"
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About"
            highlight="Me"
            description="Get to know the person behind the code"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-14">
          {/* ── Left: Bio glass card ── */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="h-full rounded-2xl border border-border bg-background-secondary/60 backdrop-blur-md p-8 flex flex-col gap-6">
              <div className="font-mono text-sm text-accent-cyan bg-background-tertiary/70 rounded-lg px-4 py-2.5 inline-flex items-center gap-2 self-start border border-border/50">
                <span className="text-text-secondary">&gt;</span>
                <span>daniel.about()</span>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-text-secondary flex-1">
                <p>
                  I&apos;m a{" "}
                  <span className="text-text-primary font-semibold">
                    Full-Stack Developer
                  </span>{" "}
                  and{" "}
                  <span className="text-text-primary font-semibold">
                    Electronic Engineer
                  </span>{" "}
                  graduated{" "}
                  <span className="text-accent-cyan font-semibold italic">
                    Summa Cum Laude
                  </span>
                  . I build scalable, production-ready web applications using
                  Laravel, Node.js, Next.js, Python, and Angular — with
                  additional experience in Vue.js, Flutter, and headless CMS
                  platforms like{" "}
                  <span className="text-text-primary font-medium">Strapi</span>{" "}
                  and{" "}
                  <span className="text-text-primary font-medium">
                    Contentful
                  </span>
                  .
                </p>
                <p>
                  I care deeply about clean architecture, RESTful API design,
                  database modeling, and shipping code that holds up under
                  pressure. An engineering background means I bring rigor and
                  first-principles thinking to every layer of the stack.
                </p>
                <p>
                  Beyond the screen, I&apos;m a{" "}
                  <span className="text-text-primary font-medium">
                    gym regular
                  </span>{" "}
                  — consistency in training carries over to consistency in
                  code. I&apos;m also a{" "}
                  <span className="text-text-primary font-medium">
                    space geek
                  </span>{" "}
                  at heart; nothing resets perspective quite like thinking at
                  cosmic scale.
                </p>
              </div>

              <div className="pt-5 border-t border-border flex items-center gap-4">
                <GlobeVenezuela
                  size={72}
                  lightMode={isLight}
                  className="flex-shrink-0"
                />
                <div className="flex flex-col gap-2 text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Venezuela</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)] animate-pulse flex-shrink-0" />
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Stat glass cards with count-up ── */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group h-full rounded-2xl border border-border bg-background-secondary/60 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center hover:border-accent/50 hover:bg-background-secondary/75 transition-all duration-300 cursor-default min-h-[140px]">
                  <CountUp num={stat.num} suffix={stat.suffix} />
                  <div className="text-text-secondary text-sm mt-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
