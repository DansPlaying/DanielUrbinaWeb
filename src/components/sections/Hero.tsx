"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";

// Animation variants for page load sequence
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 lg:py-32 overflow-hidden">
      {/* CSS gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              className="font-mono text-sm text-accent-cyan mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-text-secondary">&gt;</span> hello.world()
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-text-primary"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Daniel Urbina
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary mt-4 h-10 md:h-12"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
            >
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
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-text-secondary leading-relaxed mt-6 max-w-2xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Building scalable web applications with Laravel, Angular, and Vue.js.
              Focused on clean code, RESTful APIs, and delivering great user experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="primary" href="#projects">
                View My Work
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 mt-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background-tertiary text-text-secondary hover:text-accent-cyan hover:bg-accent/10 hover:scale-110 transition-all duration-200"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <SocialIcon iconName={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-md opacity-50 scale-105" />
              <div className="relative rounded-full p-1 bg-gradient-to-br from-accent to-accent-purple">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <Image
                    src="/images/profile/daniel-urbina-photo.webp"
                    alt="Daniel Urbina"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
