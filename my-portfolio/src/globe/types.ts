export type MonoGlobeStyle =
  | 'halftone-dots'
  | 'crosshatch'
  | 'engraving'
  | 'moire'
  | 'stipple-density'
  | 'block-dither'
  | 'contour-rings'
  | 'radial-burst'
  | 'etch-scratch'
  | 'pop-dots';

export type GlobeVariation = {
  id: string;
  name: string;
  description: string;
  style: MonoGlobeStyle;
  inverted?: boolean;
  spinSpeed?: number;
  spinDirection?: 1 | -1;
};