"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = locale === "en" ? "es" : "en";
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;SameSite=Lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className="relative flex items-center gap-1 font-mono text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-background-tertiary hover:border-accent-purple/50 hover:text-accent-purple transition-all duration-200 text-text-secondary disabled:opacity-50"
      aria-label="Toggle language"
    >
      <span className={locale === "en" ? "text-accent-cyan" : "text-text-secondary/50"}>EN</span>
      <span className="text-border">/</span>
      <span className={locale === "es" ? "text-accent-cyan" : "text-text-secondary/50"}>ES</span>
    </button>
  );
}
