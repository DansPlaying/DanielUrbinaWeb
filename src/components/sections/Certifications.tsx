"use client";

import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certifications, CREDLY_PROFILE_URL } from "@/data/certifications";
import { Certification } from "@/lib/types";

// Seconds per card — total loop duration scales with the number of badges so
// the belt always moves at the same perceived speed.
const SECONDS_PER_CARD = 6;

function formatIssued(date: string, locale: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function BadgeCard({ cert }: { cert: Certification }) {
  const locale = useLocale();
  const t = useTranslations("certifications");

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      title={cert.name}
      aria-label={`${cert.name} — ${cert.issuer} (${t("verifyOn")} Credly)`}
      className="group flex-shrink-0 w-[220px] h-[240px] flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent-cyan/60 hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
    >
      <div className="relative w-[88px] h-[88px] flex-shrink-0">
        <Image
          src={cert.image}
          alt=""
          fill
          sizes="88px"
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-center gap-1 flex-grow">
        <h3 className="text-sm font-semibold leading-snug text-text-primary group-hover:text-accent-cyan transition-colors">
          {cert.shortName}
        </h3>
        <p className="font-mono text-xs text-accent-purple">{cert.issuer}</p>
      </div>

      <div className="w-full pt-3 mt-auto border-t border-border flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-secondary">
        <span>
          {t("issued")} {formatIssued(cert.issuedDate, locale)}
        </span>
        <ExternalLink
          size={11}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}

export function Certifications() {
  const t = useTranslations("certifications");

  // Two identical copies → translating the track by -50% lands exactly on the
  // start of the second copy, so the loop is seamless.
  const track = [...certifications, ...certifications];
  const duration = certifications.length * SECONDS_PER_CARD;

  return (
    <section
      id="certifications"
      className="py-16 md:py-20 lg:py-24 bg-background-secondary relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34, 211, 238, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 border border-accent-cyan/30 bg-accent-cyan/10 rounded-full px-4 py-1.5 text-sm font-mono text-accent-cyan">
                <ShieldCheck size={14} />
                {t("badge")}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="pt-4 pb-2">
              <SectionHeading
                title={t("title")}
                highlight={t("highlight")}
                description={t("description")}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Infinite marquee — full-bleed, edges faded out */}
        <ScrollReveal delay={0.1} className="marquee-mask mt-2">
          <div
            className="marquee-viewport"
            role="list"
            aria-label={t("listLabel")}
          >
            <div
              className="marquee-track flex w-max"
              style={{ animationDuration: `${duration}s` }}
            >
              {track.map((cert, i) => (
                // Spacing lives on the item, not as a flex `gap`, so one copy
                // measures exactly 50% of the track and the wrap is seamless.
                <div
                  key={`${cert.id}-${i}`}
                  role="listitem"
                  className="px-2.5"
                  // The second copy is a visual duplicate — hide it from AT.
                  aria-hidden={i >= certifications.length}
                >
                  <BadgeCard cert={cert} />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.2}>
            <p className="text-center text-text-secondary text-xs mt-8 font-mono">
              <span className="text-accent-cyan">&gt;</span> {t("footer")}{" "}
              <a
                href={CREDLY_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-text-highlight underline underline-offset-2 transition-colors"
              >
                credly.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
