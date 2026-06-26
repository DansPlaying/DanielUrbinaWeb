"use client";

import { useEffect, useRef } from "react";

// Venezuela centroid
const VEN = { lat: 8, lon: -66 };

// Simplified continent polygons: [lat, lon][]
// Intentionally coarse — looks great at small sizes
const LAND_POLYS: [number, number][][] = [
  // North America
  [
    [72, -140], [72, -60], [60, -64], [52, -55], [44, -66],
    [30, -80], [20, -87], [15, -85], [16, -92], [20, -105],
    [30, -117], [40, -124], [50, -126], [60, -140], [72, -140],
  ],
  // Greenland
  [[84, -60], [84, -18], [72, -20], [60, -44], [68, -54], [76, -66], [84, -60]],
  // Central America / Caribbean coast (narrow strip)
  [[20, -87], [10, -83], [8, -77], [12, -72], [16, -88], [20, -87]],
  // South America
  [
    [12, -82], [12, -60], [8, -62], [4, -51], [0, -50],
    [-10, -37], [-20, -40], [-36, -58], [-56, -68], [-40, -74],
    [-22, -70], [-5, -78], [5, -76], [10, -62], [12, -82],
  ],
  // Europe (incl. UK as rough blob)
  [
    [72, 14], [70, 32], [60, 32], [55, 28], [48, 24],
    [44, 28], [36, 28], [36, -6], [44, -8], [50, -5],
    [58, -3], [58, 6], [68, 16], [72, 14],
  ],
  // Scandinavia
  [[72, 14], [72, 30], [70, 32], [60, 32], [58, 6], [68, 16], [72, 14]],
  // Africa
  [
    [37, -6], [37, 22], [30, 32], [22, 38], [12, 44],
    [0, 42], [-10, 40], [-26, 34], [-35, 18], [-28, 16],
    [-18, 12], [-2, 8], [4, -8], [14, -18], [22, -16],
    [30, -10], [37, -6],
  ],
  // Madagascar
  [[-13, 44], [-13, 50], [-26, 48], [-26, 44], [-13, 44]],
  // Asia (main landmass)
  [
    [72, 26], [72, 180], [60, 180], [50, 140], [40, 130],
    [34, 120], [22, 118], [10, 104], [2, 102], [0, 108],
    [-8, 118], [0, 118], [10, 124], [20, 108], [34, 60],
    [28, 56], [20, 56], [14, 44], [24, 38], [36, 36],
    [44, 38], [50, 36], [60, 32], [70, 32], [72, 26],
  ],
  // Japan
  [[45, 130], [45, 146], [36, 140], [34, 130], [40, 128], [45, 130]],
  // SE Asia / Borneo
  [[8, 100], [8, 120], [0, 118], [-4, 114], [0, 108], [8, 100]],
  // Sri Lanka
  [[9, 80], [9, 82], [6, 82], [6, 80], [9, 80]],
  // Australia
  [
    [-10, 130], [-10, 154], [-38, 148], [-38, 140],
    [-32, 128], [-26, 114], [-14, 126], [-10, 130],
  ],
  // New Zealand (south island)
  [[-44, 168], [-44, 172], [-46, 170], [-44, 168]],
  // Antarctica (top fringe only)
  [[-70, -180], [-70, 180], [-90, 180], [-90, -180], [-70, -180]],
];

/** Ray-casting point-in-polygon for lat/lon polygons */
function inPoly(lat: number, lon: number, poly: [number, number][]): boolean {
  let inside = false;
  const n = poly.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [yi, xi] = poly[i];
    const [yj, xj] = poly[j];
    if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function isLand(lat: number, lon: number): boolean {
  return LAND_POLYS.some((p) => inPoly(lat, lon, p));
}

function latLon3D(lat: number, lon: number) {
  const φ = (lat * Math.PI) / 180;
  const λ = (lon * Math.PI) / 180;
  return { x: Math.cos(φ) * Math.cos(λ), y: -Math.sin(φ), z: Math.cos(φ) * Math.sin(λ) };
}

function rotY(p: { x: number; y: number; z: number }, a: number) {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

// Initial rotation so Venezuela faces the viewer: angle = lonR - π/2
const INIT_ANGLE = (VEN.lon * Math.PI) / 180 - Math.PI / 2;

export function GlobeVenezuela({
  className = "",
  lightMode = false,
  size = 72,
}: {
  className?: string;
  lightMode?: boolean;
  size?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef  = useRef(lightMode);
  useEffect(() => { lightRef.current = lightMode; }, [lightMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R  = size * 0.44;

    // Build dot grid — more rows = crisper at larger sizes
    const ROWS = Math.max(14, Math.round(size * 0.28));
    const dots: { pos: { x: number; y: number; z: number }; land: boolean }[] = [];
    for (let row = 0; row < ROWS; row++) {
      const lat = -90 + (180 / ROWS) * (row + 0.5);
      const φ   = (lat * Math.PI) / 180;
      const cols = Math.max(1, Math.round(ROWS * 2 * Math.cos(φ)));
      for (let col = 0; col < cols; col++) {
        const lon  = -180 + (360 / cols) * (col + 0.5);
        dots.push({ pos: latLon3D(lat, lon), land: isLand(lat, lon) });
      }
    }

    const venPos = latLon3D(VEN.lat, VEN.lon);
    let angle = INIT_ANGLE;
    let raf: number;

    const draw = (ts: number) => {
      const light = lightRef.current;
      ctx.clearRect(0, 0, size, size);

      // Subtle sphere glow background
      const bg = ctx.createRadialGradient(cx * 0.85, cy * 0.8, 0, cx, cy, R * 1.05);
      if (light) {
        bg.addColorStop(0, "rgba(180,160,240,0.14)");
        bg.addColorStop(1, "rgba(120,90,200,0.03)");
      } else {
        bg.addColorStop(0, "rgba(108,99,255,0.10)");
        bg.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.05, 0, Math.PI * 2);
      ctx.fillStyle = bg;
      ctx.fill();

      // Rotate & sort dots by z depth
      const rotated = dots.map(({ pos, land }) => ({ r: rotY(pos, angle), land }))
        .sort((a, b) => a.r.z - b.r.z);

      // Dot colour
      const [dr, dg, db] = light ? [80, 55, 170] : [155, 140, 255];

      for (const { r, land } of rotated) {
        if (r.z < 0) continue;
        if (!land) continue; // ocean = empty (like reference image)
        const depth = r.z;
        const alpha = 0.30 + depth * 0.65;
        const dotR  = (0.65 + depth * 0.55) * (size / 72); // scale dot size with globe size

        ctx.beginPath();
        ctx.arc(cx + r.x * R, cy + r.y * R, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dr},${dg},${db},${alpha})`;
        ctx.fill();
      }

      // Venezuela pin
      const ven = rotY(venPos, angle);
      if (ven.z > 0) {
        const vpx = cx + ven.x * R;
        const vpy = cy + ven.y * R;
        const vis = Math.min(1, ven.z * 1.5);

        // Outer pulse ring
        const pulse = (Math.sin(ts / 700) + 1) / 2;
        ctx.beginPath();
        ctx.arc(vpx, vpy, 4 + pulse * 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34,211,238,${0.55 * vis * (1 - pulse * 0.7)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(vpx, vpy, 2 + pulse * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34,211,238,${0.80 * vis * (1 - pulse * 0.4)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Glow fill
        const glow = ctx.createRadialGradient(vpx, vpy, 0, vpx, vpy, 5);
        glow.addColorStop(0, `rgba(255,255,255,${vis})`);
        glow.addColorStop(0.35, `rgba(34,211,238,${vis * 0.9})`);
        glow.addColorStop(1, "rgba(34,211,238,0)");
        ctx.beginPath();
        ctx.arc(vpx, vpy, 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Solid core
        ctx.beginPath();
        ctx.arc(vpx, vpy, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${vis})`;
        ctx.fill();
      }

      angle += 0.0022; // slow auto-rotation
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
