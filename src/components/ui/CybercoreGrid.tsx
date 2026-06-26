"use client";

import { useEffect, useRef } from "react";

export function CybercoreGrid({ className = "" }: { className?: string }) {
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

      // Dark background base
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, W, H);

      // Horizon radial glow
      const horizGlow = ctx.createRadialGradient(W / 2, H * 0.55, 0, W / 2, H * 0.55, W * 0.55);
      horizGlow.addColorStop(0, "rgba(34,211,238,0.14)");
      horizGlow.addColorStop(0.5, "rgba(108,99,255,0.05)");
      horizGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = horizGlow;
      ctx.fillRect(0, 0, W, H);

      const VPX = W / 2;
      const VPY = H * 0.48; // vanishing point (horizon)

      // ── Perspective depth lines (converge to VP) ──
      const NUM_DEPTH = 26;
      for (let c = 0; c <= NUM_DEPTH; c++) {
        const u = c / NUM_DEPTH; // 0→1 across full width
        const bottomX = W * u;
        const distFromCenter = Math.abs(u - 0.5) * 2; // 0 center, 1 edge
        const alpha = Math.max(0.03, 0.18 - distFromCenter * 0.14);
        ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(VPX, VPY);
        ctx.lineTo(bottomX, H);
        ctx.stroke();
      }

      // ── Horizontal perspective slices ──
      const NUM_ROWS = 16;
      for (let r = 1; r <= NUM_ROWS; r++) {
        const rT = r / NUM_ROWS;
        // Quadratic spacing for stronger perspective near horizon
        const y = VPY + (H - VPY) * (rT * rT * 0.4 + rT * 0.6);
        const halfW = (W * 0.5) * rT;
        const alpha = 0.03 + rT * 0.12;
        ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(VPX - halfW, y);
        ctx.lineTo(VPX + halfW, y);
        ctx.stroke();
      }

      // ── Energy bars (rising from grid floor) ──
      const NUM_BARS = 24;
      for (let b = 0; b < NUM_BARS; b++) {
        const u = b / (NUM_BARS - 1);
        // Skip extreme edges
        if (u < 0.03 || u > 0.97) continue;

        const bottomX = W * u;

        // Animated height — compound sine for organic movement
        const raw =
          Math.sin(b * 0.72 + t * 1.1) * 0.28 +
          Math.sin(b * 0.38 + t * 0.75 + 1.4) * 0.2 +
          Math.sin(b * 1.1 - t * 0.55) * 0.1 +
          0.52;
        const maxH = H * 0.62;
        const barH = Math.max(0.06 * maxH, raw * maxH);
        const barY = H - barH;

        // Color: cyan primary, purple accent every 7th, dimmed between
        let cr: number, cg: number, cb: number;
        if (b % 7 === 3) { cr = 168; cg = 85; cb = 247; }      // purple
        else if (b % 5 === 0) { cr = 6; cg = 182; cb = 212; }   // teal variant
        else { cr = 34; cg = 211; cb = 238; }                    // cyan

        const glow = 0.45 + Math.sin(b * 1.9 + t * 1.4) * 0.25;

        // Wide ambient glow
        const glowW = 18 + (1 - Math.abs(u - 0.5) * 1.8) * 16;
        const glowGrad = ctx.createLinearGradient(0, barY - 10, 0, H);
        glowGrad.addColorStop(0, `rgba(${cr},${cg},${cb},0)`);
        glowGrad.addColorStop(0.05, `rgba(${cr},${cg},${cb},${glow * 0.22})`);
        glowGrad.addColorStop(0.5, `rgba(${cr},${cg},${cb},${glow * 0.12})`);
        glowGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0.04)`);
        ctx.fillStyle = glowGrad;
        ctx.fillRect(bottomX - glowW, barY - 10, glowW * 2, barH + 10);

        // Core bar
        const coreGrad = ctx.createLinearGradient(0, barY, 0, H);
        coreGrad.addColorStop(0, `rgba(${cr},${cg},${cb},${glow})`);
        coreGrad.addColorStop(0.4, `rgba(${cr},${cg},${cb},${glow * 0.65})`);
        coreGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0.15)`);
        ctx.fillStyle = coreGrad;
        ctx.fillRect(bottomX - 1, barY, 2, barH);

        // Bright top cap with flicker
        const capH = 3 + Math.sin(b * 2.3 + t * 3) * 1.5;
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${Math.min(1, glow * 1.4)})`;
        ctx.fillRect(bottomX - 1.5, barY, 3, capH);
      }

      // Top fade — blends canvas into site background (#0a0a0f)
      const topFade = ctx.createLinearGradient(0, 0, 0, H * 0.38);
      topFade.addColorStop(0, "rgba(10,10,15,1)");
      topFade.addColorStop(1, "rgba(10,10,15,0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, W, H);

      t += 0.013;
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
