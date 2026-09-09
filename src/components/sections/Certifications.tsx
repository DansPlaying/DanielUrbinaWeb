"use client";

import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certificationRows, CREDLY_PROFILE_URL } from "@/data/certifications";
import { Certification, CertificationRow } from "@/lib/types";

// Seconds per card — total loop duration scales with the number of badges so
// every belt moves at the same perceived speed regardless of how many cards
// its issuer has.
const SECONDS_PER_CARD = 6;

// Rendered width of one card slot: the 220px card plus its 10px side padding.
const CARD_SLOT_WIDTH = 240;

// Widest viewport the belt has to stay filled on. The track needs enough
// copies that the ones to the left of the wrap point still span this much,
// or a short row would show empty space just before the loop restarts.
const MAX_VIEWPORT_WIDTH = 2560;

// How many times to repeat a row so its loop is seamless everywhere.
function copiesFor(count: number): number {
  const copyWidth = count * CARD_SLOT_WIDTH;
  return Math.max(2, Math.ceil(MAX_VIEWPORT_WIDTH / copyWidth) + 1);
}

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

function BadgeRow({ row, reverse }: { row: CertificationRow; reverse: boolean }) {
  const t = useTranslations("certifications");

  const copies = copiesFor(row.items.length);
  const track = Array.from({ length: copies }, () => row.items).flat();

  return (
    <div>
      {/* Issuer label, aligned to the page container rather than the
          full-bleed belt below it. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
            {row.issuer}
          </h3>
          <span className="h-px flex-grow bg-border" aria-hidden="true" />
          <span
            className="font-mono text-[11px] text-text-secondary"
            aria-hidden="true"
          >
            {row.items.length}
          </span>
        </div>
      </div>

      {/* Infinite marquee — full-bleed, edges faded out */}
      <div className="marquee-mask mt-3">
        <div
          className="marquee-viewport"
          role="list"
          aria-label={`${row.issuer} — ${t("listLabel")}`}
        >
          <div
            className={`marquee-track flex w-max${reverse ? " marquee-track--reverse" : ""}`}
            style={{
              animationDuration: `${row.items.length * SECONDS_PER_CARD}s`,
              // Shifting by exactly one copy makes the wrap seamless.
              ["--marquee-shift" as string]: `-${100 / copies}%`,
            }}
          >
            {track.map((cert, i) => (
              // Spacing lives on the item, not as a flex `gap`, so one copy
              // measures exactly 100%/copies of the track and the wrap is
              // seamless.
              <div
                key={`${cert.id}-${i}`}
                role="listitem"
                className="px-2.5"
                // Copies after the first are visual duplicates — hide from AT.
                aria-hidden={i >= row.items.length}
              >
                <BadgeCard cert={cert} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const t = useTranslations("certifications");

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

        {/* One belt per issuer, alternating direction */}
        <div className="mt-6 space-y-8">
          {certificationRows.map((row, i) => (
            <ScrollReveal key={row.issuer} delay={0.1 + i * 0.05}>
              <BadgeRow row={row} reverse={i % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>

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
