import { ImageResponse } from "next/og";

export const alt = "Daniel Urbina - Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #1A1A2E 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo */}
        <svg
          viewBox="0 0 48 48"
          width="96"
          height="96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <path
            d="M6 8h8c7.5 0 13 5.5 13 16s-5.5 16-13 16H6V8zm5 4.5v23h3c5.5 0 9.5-4 9.5-11.5S19.5 12.5 14 12.5h-3z"
            fill="url(#g)"
          />
          <path
            d="M30 8v22c0 4.5 2.5 7.5 6 7.5s6-3 6-7.5V8h-4.5v21.5c0 2.2-.6 3.5-1.5 3.5s-1.5-1.3-1.5-3.5V8H30z"
            fill="url(#g)"
          />
        </svg>

        {/* Name */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #6C63FF, #A855F7)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Daniel Urbina
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: "16px",
            fontSize: "24px",
            color: "#8B8B9E",
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          Full-Stack Developer
        </div>

        {/* Terminal accent */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "16px",
            color: "#22D3EE",
            fontFamily: "monospace",
          }}
        >
          &gt; portfolio.open()
        </div>
      </div>
    ),
    { ...size }
  );
}
