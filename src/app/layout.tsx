import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Urbina | Developer Portfolio",
    template: "%s | Daniel Urbina",
  },
  description:
    "Full-Stack Developer portfolio showcasing projects, skills, and experience.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://danielurbina.dev"
  ),
  openGraph: {
    title: "Daniel Urbina | Developer Portfolio",
    description:
      "Full-Stack Developer portfolio showcasing projects, skills, and experience.",
    url: "/",
    siteName: "Daniel Urbina",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Urbina | Developer Portfolio",
    description:
      "Full-Stack Developer portfolio showcasing projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
