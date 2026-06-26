"use client";

import { useEffect, useRef } from "react";

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_res;
  uniform vec2  u_mouse; /* normalised [0,1] smoothed mouse */
  uniform float u_light; /* 0 = dark mode, 1 = light mode */

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),              hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 6; i++) {
      v += a * noise(p);
      p  = rot * p * 2.1 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = (2.0 * gl_FragCoord.xy - u_res) / min(u_res.x, u_res.y);

    /* Mouse in [-1, 1] space — drives parallax shift */
    vec2 m = (u_mouse - 0.5) * 2.0;

    /* Parallax: shift the view slightly toward the cursor (camera follows mouse) */
    uv -= m * 0.18;

    float t = u_time * 0.15;

    /* Layer-1 warp */
    vec2 q = vec2(
      fbm(uv * 6.0 + m * 0.4 + t),
      fbm(uv * 6.0 + m * 0.4 + vec2(5.2, 1.3) + t)
    );

    /* Layer-2 warp */
    vec2 r = vec2(
      fbm(uv * 6.0 + 0.4 * q + vec2(1.7, 9.2) + 0.150 * t),
      fbm(uv * 6.0 + 0.4 * q + vec2(8.3, 2.8) + 0.126 * t)
    );

    float f = fbm(uv * 6.0 + 0.4 * r + t * 0.4);

    float hue, sat, val;

    if (u_light > 0.5) {
      /* Light mode: deep indigo-purple with strong saturation for contrast on white */
      hue = 0.67 + f * 0.10;
      sat = 0.72 + f * 0.25;
      val = 0.28 + f * 0.55;      /* 0.28 → 0.83 — stays mid-dark, always visible */
    } else {
      /* Dark mode: deep purple / violet plasma */
      hue = 0.694 + f * 0.06;
      sat = 0.80 + f * 0.15;
      val = clamp(f * f * 1.8 * 0.70, 0.0, 1.0);
    }

    vec3 col = hsv2rgb(vec3(hue, sat, val));

    /* Soft glow that follows the mouse */
    float md = length(uv - m * 0.75);
    float glowAmt = u_light > 0.5 ? 0.35 : 0.28;
    float glow = exp(-md * md * 1.6) * glowAmt;
    col += u_light > 0.5
      ? vec3(glow * 0.55, glow * 0.10, glow * 0.85)
      : vec3(glow * 0.38, glow * 0.15, glow * 0.65);
    col = clamp(col, 0.0, 1.0);

    /* Vignette */
    float vig = 1.0 - smoothstep(0.5, 1.6, length(uv));
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function AetherFlow({
  className = "",
  lightMode = false,
}: {
  className?: string;
  lightMode?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef  = useRef(lightMode);

  // Keep ref in sync so the draw loop reads the latest value without re-init
  useEffect(() => {
    lightRef.current = lightMode;
  }, [lightMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const compile = (type: number, src: string): WebGLShader => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, "u_time");
    const uRes   = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uLight = gl.getUniformLocation(prog, "u_light");

    const startMs = Date.now();
    let raf: number;

    const target  = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };

    const onMouseMove = (e: MouseEvent) => {
      target.x = e.clientX / window.innerWidth;
      target.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const draw = () => {
      current.x += (target.x - current.x) * 0.045;
      current.y += (target.y - current.y) * 0.045;

      gl.uniform1f(uTime,  (Date.now() - startMs) / 1000);
      gl.uniform2f(uRes,   canvas.width, canvas.height);
      gl.uniform2f(uMouse, current.x, current.y);
      gl.uniform1f(uLight, lightRef.current ? 1.0 : 0.0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      gl.deleteProgram(prog);
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
