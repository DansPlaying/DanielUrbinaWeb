"use client";

import { useEffect, useState } from "react";

interface MeteorItem {
  id: number;
  top: number;   // % from top
  left: number;  // % from left
  width: number; // trail length in px
  delay: number; // animation delay in s
  duration: number; // animation duration in s
  r: number;
  g: number;
  b: number;
}

export function Meteors({
  count = 22,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [items, setItems] = useState<MeteorItem[]>([]);

  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => {
        // Colour: mostly white, some cyan, some purple
        const pick = Math.random();
        const [r, g, b] =
          pick < 0.25
            ? [34, 211, 238]   // cyan
            : pick < 0.4
            ? [168, 85, 247]   // purple
            : [255, 255, 255]; // white

        return {
          id: i,
          top: Math.random() * 65,
          left: Math.random() * 100,
          width: 70 + Math.round(Math.random() * 120),
          delay: Math.random() * 8,
          duration: 1 + Math.random() * 2.5,
          r, g, b,
        };
      })
    );
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map((m) => (
        <span
          key={m.id}
          className="absolute"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animation: `meteor-fall ${m.duration}s ${m.delay}s linear infinite`,
            opacity: 0,
          }}
        >
          {/* Streak: rotated 45° so it points in the direction of travel */}
          <div
            style={{
              width: m.width,
              height: 1,
              transform: "rotate(45deg)",
              transformOrigin: "0 0",
              background: `linear-gradient(to right, transparent 0%, rgba(${m.r},${m.g},${m.b},0.55) 35%, rgba(${m.r},${m.g},${m.b},1) 100%)`,
              boxShadow: `0 0 4px 0.5px rgba(${m.r},${m.g},${m.b},0.4)`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
