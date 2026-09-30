/**
 * Shared thin-line floral shapes, drawn at the origin so they can be placed with
 * transform="translate(x y) rotate(a) scale(s)". Used by FloralCorner and FloralDivider.
 */

/** Leaf pointing right (+x), 22 units long, with a centre vein. */
export const LEAF = 'M0 0C6-7 16-7 22 0C16 7 6 7 0 0ZM3 0L17 0';

/** Closed bud pointing up, with two small sepals. */
export const BUD = 'M0 0C-4-4-3.5-10 0-14C3.5-10 4-4 0 0ZM0 0C-3-1-5-3-6-6M0 0C3-1 5-3 6-6';

/** Five petals around the origin; draw a small circle in the centre separately. */
export const PETAL_ANGLES = [0, 72, 144, 216, 288];
export const PETAL = { cy: -7, rx: 4.2, ry: 7 };

export type Placement = [x: number, y: number, rotate: number, scale: number];

export function place([x, y, r, s]: Placement): string {
  return `translate(${x} ${y}) rotate(${r}) scale(${s})`;
}
