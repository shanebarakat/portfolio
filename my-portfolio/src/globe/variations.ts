import type { GlobeVariation } from './types';

export const GLOBE_VARIATIONS: GlobeVariation[] = [
  {
    id: 'halftone-dots',
    name: 'Halftone Dots',
    description: 'Classic print dots that grow and shrink with depth.',
    style: 'halftone-dots',
    spinSpeed: 0.008,
  },
  {
    id: 'crosshatch',
    name: 'Crosshatch',
    description: 'Diagonal ink lines cross over each other. Illustration style.',
    style: 'crosshatch',
    spinSpeed: 0.007,
  },
  {
    id: 'engraving',
    name: 'Engraving',
    description: 'Horizontal hatch lines like currency or old banknotes.',
    style: 'engraving',
    spinSpeed: 0.006,
  },
  {
    id: 'moire',
    name: 'Moiré',
    description: 'Two spinning line grids interfere. Optical shimmer.',
    style: 'moire',
    spinSpeed: 0.011,
    spinDirection: -1,
  },
  {
    id: 'stipple-density',
    name: 'Stipple',
    description: 'Same-size dots, packed tighter in the shadows. Pen-and-ink.',
    style: 'stipple-density',
    spinSpeed: 0.008,
  },
  {
    id: 'block-dither',
    name: 'Block Dither',
    description: 'Chunky square tiles. Early Macintosh energy.',
    style: 'block-dither',
    spinSpeed: 0.009,
  },
  {
    id: 'contour-rings',
    name: 'Contour Rings',
    description: 'Only latitude rings. Topographic map, no grid.',
    style: 'contour-rings',
    spinSpeed: 0.007,
  },
  {
    id: 'radial-burst',
    name: 'Radial Burst',
    description: 'Lines shoot from the pole like a cut orange.',
    style: 'radial-burst',
    spinSpeed: 0.01,
  },
  {
    id: 'etch-scratch',
    name: 'Etch Scratch',
    description: 'Chaotic short scratches. Drypoint etching texture.',
    style: 'etch-scratch',
    spinSpeed: 0.012,
    spinDirection: -1,
  },
  {
    id: 'pop-dots',
    name: 'Pop Dots',
    description: 'Only two dot sizes. Bold Ben-Day pop art.',
    style: 'pop-dots',
    spinSpeed: 0.008,
  },
];

export const DEFAULT_GLOBE_VARIATION = GLOBE_VARIATIONS[8]; // Etch Scratch

export function globeVariationById(id: string): GlobeVariation {
  return GLOBE_VARIATIONS.find((v) => v.id === id) ?? DEFAULT_GLOBE_VARIATION;
}