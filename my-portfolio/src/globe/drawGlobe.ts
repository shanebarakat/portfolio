import type { GlobeVariation, MonoGlobeStyle } from './types';

type Ctx = CanvasRenderingContext2D;
type Frame = { cx: number; cy: number; r: number; size: number };

const PAPER = '#fafaf9';
const INK = '#09090b';

function frame(size: number): Frame {
  return { cx: size / 2, cy: size / 2, r: (size / 32) * 13, size };
}

function spherePoint(
  mu: number,
  lambda: number,
  omega: number,
  r: number,
): { x: number; y: number; z: number } {
  const lam = lambda + omega;
  const cosMu = Math.cos(mu);
  return {
    x: r * cosMu * Math.cos(lam),
    y: r * Math.sin(mu),
    z: r * cosMu * Math.sin(lam),
  };
}

function shadeAt(
  px: number,
  py: number,
  f: Frame,
  omega: number,
): { depth: number; shade: number; inside: boolean } {
  const dx = px - f.cx;
  const dy = f.cy - py;
  const d2 = dx * dx + dy * dy;
  if (d2 > f.r * f.r) return { depth: 0, shade: 0, inside: false };
  const depth = Math.sqrt(1 - d2 / (f.r * f.r));
  const mu = Math.asin(Math.max(-1, Math.min(1, dy / f.r)));
  const cosMu = Math.cos(mu);
  const lam = Math.atan2(dx / f.r / Math.max(0.01, Math.abs(cosMu)), 1) + omega;
  const shade = 0.5 + 0.5 * Math.sin(lam * 2 + mu * 3);
  return { depth, shade, inside: true };
}

function clipCircle(ctx: Ctx, { cx, cy, r }: Frame) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
}

function drawBorder(ctx: Ctx, f: Frame, inverted: boolean) {
  ctx.beginPath();
  ctx.arc(f.cx, f.cy, f.r, 0, Math.PI * 2);
  ctx.strokeStyle = inverted ? '#71717a' : INK;
  ctx.lineWidth = Math.max(1, f.size / 32);
  ctx.stroke();
}

function fillPaper(ctx: Ctx, f: Frame, inverted: boolean) {
  ctx.fillStyle = inverted ? INK : PAPER;
  ctx.fillRect(0, 0, f.size, f.size);
}

function ink(inverted: boolean, alpha = 1): string {
  return inverted
    ? `rgba(250, 250, 249, ${alpha})`
    : `rgba(9, 9, 11, ${alpha})`;
}

/* ---------- renderers ---------- */

function drawHalftoneDots(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  const spacing = Math.max(2, f.size / 14);
  ctx.save();
  clipCircle(ctx, f);
  for (let py = f.cy - f.r; py <= f.cy + f.r; py += spacing) {
    for (let px = f.cx - f.r; px <= f.cx + f.r; px += spacing) {
      const { depth, shade, inside } = shadeAt(px, py, f, omega);
      if (!inside) continue;
      const dotR = spacing * 0.15 + spacing * 0.38 * depth * shade;
      ctx.beginPath();
      ctx.arc(px, py, dotR, 0, Math.PI * 2);
      ctx.fillStyle = ink(inverted, 0.2 + shade * 0.75);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawCrosshatch(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  const spacing = Math.max(3, f.size / 10);
  for (let pass = 0; pass < 2; pass++) {
    const angle = pass === 0 ? Math.PI / 4 : -Math.PI / 4;
    ctx.save();
    ctx.translate(f.cx, f.cy);
    ctx.rotate(angle);
    for (let y = -f.r * 1.5; y <= f.r * 1.5; y += spacing) {
      let started = false;
      for (let x = -f.r * 1.5; x <= f.r * 1.5; x += 2) {
        const px = f.cx + x * Math.cos(angle) - y * Math.sin(angle);
        const py = f.cy - (x * Math.sin(angle) + y * Math.cos(angle));
        const { shade, inside } = shadeAt(px, py, f, omega + pass * 0.2);
        if (!inside || shade < 0.35 + pass * 0.15) {
          started = false;
          continue;
        }
        if (!started) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      if (started) {
        ctx.strokeStyle = ink(inverted, 0.15 + pass * 0.1);
        ctx.lineWidth = Math.max(0.5, f.size / 48);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
  ctx.restore();
}

function drawEngraving(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  const spacing = Math.max(2, f.size / 18);
  for (let y = f.cy - f.r; y <= f.cy + f.r; y += spacing) {
    let started = false;
    for (let x = f.cx - f.r; x <= f.cx + f.r; x += 1.5) {
      const { shade, inside } = shadeAt(x, y, f, omega);
      if (!inside || shade < 0.28) {
        started = false;
        continue;
      }
      const gap = spacing * (1.1 - shade);
      if (!started) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
      void gap;
    }
    if (started) {
      ctx.strokeStyle = ink(inverted, 0.35);
      ctx.lineWidth = Math.max(0.5, f.size / 56);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawMoire(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  ctx.lineWidth = Math.max(0.5, f.size / 50);
  for (const offset of [0, 0.18]) {
    for (const lam of [-0.6, -0.3, 0, 0.3, 0.6]) {
      let started = false;
      for (let i = 0; i <= 32; i++) {
        const mu = -Math.PI / 2 + (Math.PI * i) / 32;
        const p = spherePoint(mu, lam, omega + offset, f.r);
        if (p.z < -f.r * 0.1) {
          started = false;
          continue;
        }
        const sx = f.cx + p.x;
        const sy = f.cy - p.y;
        if (!started) {
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          started = true;
        } else {
          ctx.lineTo(sx, sy);
        }
      }
      if (started) {
        ctx.strokeStyle = ink(inverted, offset === 0 ? 0.55 : 0.35);
        ctx.stroke();
      }
    }
  }
  ctx.restore();
}

function drawStippleDensity(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  const spacing = Math.max(3, f.size / 16);
  const dotR = Math.max(0.6, f.size / 40);
  ctx.save();
  clipCircle(ctx, f);
  for (let py = f.cy - f.r; py <= f.cy + f.r; py += spacing) {
    for (let px = f.cx - f.r; px <= f.cx + f.r; px += spacing) {
      const { shade, inside } = shadeAt(px, py, f, omega);
      if (!inside) continue;
      const jitter = Math.sin(px * 0.9 + py * 1.3) * 0.5;
      if (shade + jitter < 0.42) continue;
      ctx.beginPath();
      ctx.arc(px + jitter, py - jitter, dotR, 0, Math.PI * 2);
      ctx.fillStyle = ink(inverted, 0.55 + shade * 0.4);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawBlockDither(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  const block = Math.max(3, Math.floor(f.size / 12));
  ctx.save();
  clipCircle(ctx, f);
  const matrix = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];
  for (let py = f.cy - f.r; py <= f.cy + f.r; py += block) {
    for (let px = f.cx - f.r; px <= f.cx + f.r; px += block) {
      const { shade, inside } = shadeAt(px + block / 2, py + block / 2, f, omega);
      if (!inside) continue;
      const mx = Math.floor(px / block) % 4;
      const my = Math.floor(py / block) % 4;
      const threshold = matrix[my][mx] / 16;
      if (shade > threshold) {
        ctx.fillStyle = ink(inverted, 0.85);
        ctx.fillRect(px, py, block - 1, block - 1);
      }
    }
  }
  ctx.restore();
}

function drawContourRings(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  const bands = 11;
  for (let b = 0; b < bands; b++) {
    const mu = -Math.PI / 2 + (Math.PI * b) / (bands - 1);
    const lw = b % 3 === 0 ? f.size / 28 : f.size / 48;
    const alpha = b % 3 === 0 ? 0.9 : 0.45;
    let started = false;
    for (let i = 0; i <= 40; i++) {
      const lambda = -Math.PI / 2 + (Math.PI * i) / 40;
      const p = spherePoint(mu, lambda, omega, f.r);
      if (p.z < -f.r * 0.15) {
        started = false;
        continue;
      }
      const sx = f.cx + p.x;
      const sy = f.cy - p.y;
      if (!started) {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        started = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    if (started) {
      ctx.strokeStyle = ink(inverted, alpha);
      ctx.lineWidth = lw;
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawRadialBurst(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  const spokes = 18;
  for (let s = 0; s < spokes; s++) {
    const lam = (Math.PI * 2 * s) / spokes;
    let started = false;
    for (let i = 0; i <= 24; i++) {
      const mu = -Math.PI / 2 + (Math.PI * i) / 24;
      const p = spherePoint(mu, lam, omega, f.r);
      if (p.z < -f.r * 0.05) {
        started = false;
        continue;
      }
      const sx = f.cx + p.x;
      const sy = f.cy - p.y;
      if (!started) {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        started = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    if (started) {
      ctx.strokeStyle = ink(inverted, 0.25 + (s % 3) * 0.15);
      ctx.lineWidth = Math.max(0.5, f.size / (s % 2 === 0 ? 44 : 36));
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawEtchScratch(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  ctx.save();
  clipCircle(ctx, f);
  const count = Math.floor(f.size * f.size / 28);
  for (let i = 0; i < count; i++) {
    const angle = (i * 2.399963) + omega;
    const dist = Math.sqrt((i % 17) / 17) * f.r * 0.92;
    const px = f.cx + Math.cos(angle) * dist;
    const py = f.cy - Math.sin(angle) * dist;
    const { shade, inside } = shadeAt(px, py, f, omega);
    if (!inside || shade < 0.3) continue;
    const len = f.size / 10 + shade * f.size / 14;
    const scratchAngle = angle + omega * 2 + i;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(
      px + Math.cos(scratchAngle) * len,
      py - Math.sin(scratchAngle) * len,
    );
    ctx.strokeStyle = ink(inverted, 0.2 + shade * 0.55);
    ctx.lineWidth = Math.max(0.4, f.size / 64);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPopDots(ctx: Ctx, omega: number, f: Frame, inverted: boolean) {
  const spacing = Math.max(4, f.size / 9);
  ctx.save();
  clipCircle(ctx, f);
  for (let py = f.cy - f.r; py <= f.cy + f.r; py += spacing) {
    for (let px = f.cx - f.r; px <= f.cx + f.r; px += spacing) {
      const { shade, inside } = shadeAt(px, py, f, omega);
      if (!inside) continue;
      const big = shade > 0.55;
      const dotR = big ? spacing * 0.38 : spacing * 0.14;
      if (!big && shade < 0.38) continue;
      ctx.beginPath();
      ctx.arc(px, py, dotR, 0, Math.PI * 2);
      ctx.fillStyle = ink(inverted, big ? 1 : 0.55);
      ctx.fill();
    }
  }
  ctx.restore();
}

const MONO_RENDERERS: Record<
  MonoGlobeStyle,
  (ctx: Ctx, omega: number, f: Frame, inverted: boolean) => void
> = {
  'halftone-dots': drawHalftoneDots,
  crosshatch: drawCrosshatch,
  engraving: drawEngraving,
  moire: drawMoire,
  'stipple-density': drawStippleDensity,
  'block-dither': drawBlockDither,
  'contour-rings': drawContourRings,
  'radial-burst': drawRadialBurst,
  'etch-scratch': drawEtchScratch,
  'pop-dots': drawPopDots,
};

export function drawGlobe(
  ctx: CanvasRenderingContext2D,
  omega: number,
  variation: GlobeVariation,
  size = 32,
) {
  const f = frame(size);
  const inverted = variation.inverted ?? false;
  fillPaper(ctx, f, inverted);
  MONO_RENDERERS[variation.style](ctx, omega, f, inverted);
  drawBorder(ctx, f, inverted);
}