"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 lg:py-32 overflow-hidden">
      {/* CSS gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="font-mono text-sm text-accent-cyan mb-4">
              <span className="text-text-secondary">&gt;</span> hello.world()
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-text-primary">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Daniel Urbina
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary mt-4 h-10 md:h-12">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Creative Coder",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mt-6 max-w-2xl">
              I build modern web applications with clean code and great user
              experiences. Passionate about turning ideas into reality through
              technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" href="#projects">
                View My Work
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background-tertiary text-text-secondary hover:text-accent-cyan hover:bg-accent/10 hover:scale-110 transition-all duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon iconName={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-md opacity-50 scale-105" />
              <div className="relative rounded-full p-1 bg-gradient-to-br from-accent to-accent-purple">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-background-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    DU
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
