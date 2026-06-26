"use client";

import { useEffect, useRef } from "react";

export function WaveCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const gap = 22;
      const cols = Math.ceil(W / gap) + 1;
      const rows = Math.ceil(H / gap) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * gap;
          const y = r * gap;

          // Layered sine waves for organic feel
          const waveY =
            H * 0.52 +
            Math.sin(c * 0.13 + t) * 80 +
            Math.sin(c * 0.07 + t * 0.6 + 1.2) * 45 +
            Math.sin(c * 0.2 - t * 0.8) * 22;

          const below = y - waveY;
          const norm = Math.max(0, Math.min(1, (below + 130) / 260));
          const radius = norm * gap * 0.42;
          if (radius < 0.4) continue;

          // Purple (#6C63FF) → Cyan (#22D3EE)
          const colT = c / cols;
          const R = Math.round(108 + (34 - 108) * colT);
          const G = Math.round(99 + (211 - 99) * colT);
          const B = Math.round(255 + (238 - 255) * colT);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.28 + norm * 0.62})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      t += 0.016;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
