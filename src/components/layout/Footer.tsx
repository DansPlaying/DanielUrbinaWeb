import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div>
            <Logo size="md" />
            <p className="text-text-secondary text-sm mt-4">
              Building digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background-tertiary text-text-secondary hover:text-accent-cyan hover:bg-accent/10 transition-all duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon iconName={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Daniel Urbina. All rights
            reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Built with <span className="text-accent-cyan">Next.js</span> &amp;
            deployed on <span className="text-accent-cyan">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
