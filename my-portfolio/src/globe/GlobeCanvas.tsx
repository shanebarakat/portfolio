import { useEffect, useRef } from 'react';
import { drawGlobe } from './drawGlobe';
import type { GlobeVariation } from './types';

type GlobeCanvasProps = {
  variation: GlobeVariation;
  size?: number;
  speed?: number;
  className?: string;
};

const GlobeCanvas: React.FC<GlobeCanvasProps> = ({
  variation,
  size = 128,
  speed = 0.012,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let omega = 0;
    let frameId = 0;

    const dir = variation.spinDirection ?? 1;
    const spin = variation.spinSpeed ?? speed;

    const tick = () => {
      drawGlobe(ctx, omega, variation, size);
      omega += spin * dir;
      frameId = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(frameId);
  }, [variation, size, speed]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
};

export default GlobeCanvas;