"use client";

import { useEffect, useRef } from "react";

interface Layer {
  yFrac: number;   // base horizon as fraction of canvas height
  ampFrac: number; // wave amplitude as fraction of canvas height
  r: number; g: number; b: number;
  alpha: number;
  speed: number;   // animation speed multiplier
  phases: [number, number, number]; // phase offsets for the three sine components
}

// Back → front dark mode: deep navy/teal mountain silhouettes
const LAYERS_DARK: Layer[] = [
  { yFrac: 0.42, ampFrac: 0.11, r: 22, g: 72,  b: 100, alpha: 0.50, speed: 0.30, phases: [0.0, 1.4, 2.8] },
  { yFrac: 0.49, ampFrac: 0.10, r: 16, g: 55,  b: 80,  alpha: 0.65, speed: 0.24, phases: [0.6, 2.1, 3.7] },
  { yFrac: 0.55, ampFrac: 0.09, r: 11, g: 42,  b: 62,  alpha: 0.78, speed: 0.19, phases: [1.2, 2.8, 4.6] },
  { yFrac: 0.61, ampFrac: 0.07, r:  7, g: 30,  b: 46,  alpha: 0.87, speed: 0.15, phases: [1.8, 3.5, 5.5] },
  { yFrac: 0.66, ampFrac: 0.06, r:  4, g: 18,  b: 30,  alpha: 0.94, speed: 0.12, phases: [2.4, 4.2, 6.4] },
];

// Back → front light mode: lavender-to-indigo mountain silhouettes on light sky
const LAYERS_LIGHT: Layer[] = [
  { yFrac: 0.42, ampFrac: 0.11, r: 165, g: 130, b: 220, alpha: 0.38, speed: 0.30, phases: [0.0, 1.4, 2.8] },
  { yFrac: 0.49, ampFrac: 0.10, r: 130, g: 95,  b: 200, alpha: 0.55, speed: 0.24, phases: [0.6, 2.1, 3.7] },
  { yFrac: 0.55, ampFrac: 0.09, r: 100, g: 65,  b: 180, alpha: 0.68, speed: 0.19, phases: [1.2, 2.8, 4.6] },
  { yFrac: 0.61, ampFrac: 0.07, r:  72, g: 42,  b: 160, alpha: 0.80, speed: 0.15, phases: [1.8, 3.5, 5.5] },
  { yFrac: 0.66, ampFrac: 0.06, r:  48, g: 22,  b: 140, alpha: 0.90, speed: 0.12, phases: [2.4, 4.2, 6.4] },
];

// Spatial frequencies for the three sine waves per layer
const FQ: [number, number, number] = [0.0052, 0.0094, 0.0158];

function waveY(layer: Layer, x: number, H: number, t: number): number {
  const base = H * layer.yFrac;
  const amp  = H * layer.ampFrac;
  return (
    base +
    Math.sin(x * FQ[0] + t * layer.speed         + layer.phases[0]) * amp +
    Math.sin(x * FQ[1] + t * layer.speed * 1.45  + layer.phases[1]) * amp * 0.55 +
    Math.sin(x * FQ[2] - t * layer.speed * 0.82  + layer.phases[2]) * amp * 0.28
  );
}

export function MountainScene({
  className = "",
  lightMode = false,
}: {
  className?: string;
  lightMode?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef  = useRef(lightMode);

  useEffect(() => { lightRef.current = lightMode; }, [lightMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const light = lightRef.current;
      ctx.clearRect(0, 0, W, H);

      // Sky background
      ctx.fillStyle = light ? "#f5f5f7" : "#0a0a0f";
      ctx.fillRect(0, 0, W, H);

      // Draw mountain layers back → front
      const STEPS = Math.ceil(W / 1.5);
      const layers = light ? LAYERS_LIGHT : LAYERS_DARK;
      layers.forEach((layer) => {
        ctx.beginPath();
        for (let i = 0; i <= STEPS; i++) {
          const x = (i / STEPS) * W;
          const y = waveY(layer, x, H, t);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${layer.r},${layer.g},${layer.b},${layer.alpha})`;
        ctx.fill();
      });

      // Top fade — blends canvas sky into the section above it
      const skyRgb = light ? "245,245,247" : "10,10,15";
      const topFade = ctx.createLinearGradient(0, 0, 0, H * 0.28);
      topFade.addColorStop(0, `rgba(${skyRgb},1)`);
      topFade.addColorStop(1, `rgba(${skyRgb},0)`);
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, W, H * 0.28);

      t += 0.007;
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
