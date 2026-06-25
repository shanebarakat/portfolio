import { useEffect } from 'react';
import { drawGlobe } from './globe/drawGlobe';
import { DEFAULT_GLOBE_VARIATION } from './globe/variations';

const SIZE = 32;
const SPIN_SPEED = 0.012;

/** Animates the tab favicon as a slowly spinning 3D globe. */
const SpinningGlobeFavicon: React.FC = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    let omega = 0;
    let frameId = 0;

    const tick = () => {
      drawGlobe(ctx, omega, DEFAULT_GLOBE_VARIATION, SIZE);
      link!.type = 'image/png';
      link!.href = canvas.toDataURL('image/png');
      omega +=
        (DEFAULT_GLOBE_VARIATION.spinSpeed ?? SPIN_SPEED) *
        (DEFAULT_GLOBE_VARIATION.spinDirection ?? 1);
      frameId = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return null;
};

export default SpinningGlobeFavicon;