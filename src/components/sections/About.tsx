import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About"
          highlight="Me"
          description="Get to know the person behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="font-mono text-sm text-accent-cyan bg-background-tertiary rounded-lg p-4 inline-block mb-6">
              <span className="text-text-secondary">&gt;</span> daniel.about()
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed text-text-secondary">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-text-primary font-medium">
                  Full-Stack Developer
                </span>{" "}
                who loves building modern web applications. With a strong
                foundation in both frontend and backend technologies, I create
                seamless digital experiences that make a difference.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, and
                continuously learning to stay at the cutting edge of web
                development.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background-tertiary rounded-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-accent-cyan">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
