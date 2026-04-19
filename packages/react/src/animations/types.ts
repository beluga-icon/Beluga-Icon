/** CSS selector covering every SVG geometry element that carries stroke animations. */
export const SVG_GEOMETRY_SELECTOR = 'path, circle, line, polyline, rect, ellipse' as const

export type AnimKey =
  | 'spin'
  | 'pulse'
  | 'bounce'
  | 'shake'
  | 'wiggle'
  | 'ping'
  | 'blink'
  | 'float'
  | 'heartbeat'
  | 'flash'
  | 'tada'
  | 'jello'
  | 'swing'
  | 'rubberBand'
  | 'flipX'
  | 'breathe'
  | 'draw'
  | 'erase'
  | 'trace'
  | 'neon'
  | 'glitch'
  | 'wobble'
  | 'roll'
  | 'zoomIn'
  | 'fadeUp'
  | 'flicker'
  | 'hologram'
  | 'electric'
  | 'ghost'
  | 'levitate'
  | 'burst'
  | 'heat'
  | 'crystal'
  | 'springPop'
  | 'decay'
  | 'magnetPulse'
  | 'wobbleSpring'
  | 'rgbSplit'
  | 'liquidMorph'
  | 'aurora'
  | 'shatter'
  | 'cinematic'

/**
 * Priority order used to pick a winner when multiple animation flags are true.
 * Lower index = higher priority.
 */
export const ANIM_PRIORITY: AnimKey[] = [
  'spin',
  'pulse',
  'bounce',
  'shake',
  'wiggle',
  'ping',
  'blink',
  'float',
  'heartbeat',
  'flash',
  'tada',
  'jello',
  'swing',
  'rubberBand',
  'flipX',
  'breathe',
  'draw',
  'neon',
  'glitch',
  'trace',
  'wobble',
  'erase',
  'roll',
  'zoomIn',
  'fadeUp',
  'flicker',
  'hologram',
  'electric',
  'ghost',
  'levitate',
  'heat',
  'crystal',
  'burst',
  'springPop',
  'decay',
  'magnetPulse',
  'wobbleSpring',
  'rgbSplit',
  'liquidMorph',
  'aurora',
  'shatter',
  'cinematic',
]

/** Keys whose CSS class name differs from the `ppi-<key>` pattern. */
const ANIM_CLASS_OVERRIDES: Partial<Record<AnimKey, string>> = {
  rubberBand: 'ppi-rubber-band',
  flipX: 'ppi-flip-x',
  zoomIn: 'ppi-zoom-in',
  fadeUp: 'ppi-fade-up',
  rgbSplit: 'ppi-rgb-split',
  liquidMorph: 'ppi-liquid-morph',
}

export function animClass(key: AnimKey): string {
  return ANIM_CLASS_OVERRIDES[key] ?? `ppi-${key}`
}

/** Entrance / impact animations that default to a single iteration. */
export const ONCE_BY_DEFAULT = new Set<AnimKey>([
  'roll',
  'zoomIn',
  'fadeUp',
  'burst',
  'springPop',
  'decay',
  'shatter',
  'cinematic',
])

/** Animations driven by WAAPI (el.animate()) rather than CSS class injection. */
export const WAAPI_ANIMS = new Set<AnimKey>(['springPop', 'decay', 'magnetPulse', 'wobbleSpring'])

export const DRAW_ANIMS = new Set<AnimKey>(['draw', 'erase', 'trace'])

/**
 * Keys that are only accessible via the `animate` prop — they have no
 * corresponding boolean shorthand prop. Always false in legacy resolution.
 */
export const ANIMATE_ONLY_KEYS = new Set<AnimKey>([
  'rgbSplit',
  'liquidMorph',
  'aurora',
  'shatter',
  'cinematic',
])
