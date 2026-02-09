import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { skills } from "@/data/skills";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "Tools & DevOps",
  other: "Other",
};

export function Skills() {
  const categories = ["frontend", "backend", "devops", "other"] as const;
  const grouped = categories
    .map((cat) => ({
      key: cat,
      label: categoryLabels[cat],
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills &"
          highlight="Technologies"
          description="The tools and technologies I work with"
        />

        <div className="space-y-12">
          {grouped.map((group) => (
            <div key={group.key}>
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative bg-background-secondary rounded-lg p-6 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
                  >
                    <div className="w-12 h-12 mb-4 text-accent-cyan" aria-hidden="true">
                      <SocialIcon iconName={skill.icon} size={32} />
                    </div>
                    <h4 className="text-base font-semibold text-text-primary">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
