/**
 * Icon size variants.
 * Can be extended with numeric values for custom sizes.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

/** Flip direction for mirroring an icon */
export type IconFlip = 'horizontal' | 'vertical' | 'both'

/** Visual style variant */
export type IconVariant = 'outline' | 'bold' | 'sharp'

/** Animation speed */
export type AnimationSpeed = 'slow' | 'normal' | 'fast'

/**
 * Controls when an animation starts playing.
 * - `'auto'`    — starts immediately on render (default, existing behaviour)
 * - `'hover'`   — plays while the cursor is over the icon, pauses on mouse-leave
 * - `'click'`   — plays once each time the icon is clicked
 * - `'visible'` — plays when the icon enters the viewport (IntersectionObserver)
 */
export type AnimationTrigger = 'auto' | 'hover' | 'click' | 'visible'

/** All available animation types */
export type AnimationType =
  'spin' | 'pulse' | 'bounce' | 'shake' | 'wiggle' | 'ping' | 'blink' | 'float'
  | 'heartbeat' | 'flash' | 'tada' | 'jello' | 'swing' | 'rubberBand' | 'flipX' | 'breathe'
  | 'erase' | 'trace' | 'neon' | 'glitch' | 'wobble' | 'roll' | 'zoomIn' | 'fadeUp'
  | 'flicker' | 'hologram' | 'electric' | 'ghost' | 'levitate' | 'burst' | 'heat' | 'crystal'

/**
 * Base props shared across all framework adapters.
 * Each framework package (React, Vue, Svelte…) maps these to its own prop types.
 */
export interface IconBaseProps {
  /** Icon size — named variant or pixel value */
  size?: IconSize
  /** Stroke/fill color — any valid CSS color */
  color?: string
  /** CSS class name */
  className?: string
  /** Inline style */
  style?: Record<string, string | number>
  /** Accessible label. Omit for decorative icons */
  label?: string
  /** Stroke width in pixels (default: 2) */
  strokeWidth?: number
  /** Rotate icon by degrees (e.g. 90, 180, 270) */
  rotate?: number
  /** Mirror the icon horizontally, vertically, or both */
  flip?: IconFlip
  /** Continuous spinning animation */
  spin?: boolean
  /** Pulsing scale animation */
  pulse?: boolean
  /** Vertical bounce animation */
  bounce?: boolean
  /** Horizontal shake animation */
  shake?: boolean
  /** Rotation wiggle animation (like a notification bell) */
  wiggle?: boolean
  /** Scale + opacity radar-ping animation */
  ping?: boolean
  /** Opacity blink animation */
  blink?: boolean
  /** Gentle Y-axis float animation */
  float?: boolean
  /** Double-peak heartbeat scale pulse animation */
  heartbeat?: boolean
  /** Fast opacity flash with ease curves (distinct from step-based blink) */
  flash?: boolean
  /** Celebratory scale + oscillating rotation */
  tada?: boolean
  /** Skew-based jiggly wobble */
  jello?: boolean
  /** Pendulum rotation from top-center origin */
  swing?: boolean
  /** Elastic stretch and squash */
  rubberBand?: boolean
  /** 3D horizontal flip via rotateY */
  flipX?: boolean
  /** Slow ambient opacity breathing */
  breathe?: boolean
  /**
   * SVG draw (sketch) animation — strokes are revealed as if hand-drawn.
   * Works best with stroke-based icons. Plays once by default (iterationCount=1).
   */
  draw?: boolean
  /** Reverse of draw — strokes disappear as if being erased. Plays once by default. */
  erase?: boolean
  /** A short stroke segment travels continuously along the path */
  trace?: boolean
  /** Pulsing neon glow using drop-shadow filter animation */
  neon?: boolean
  /** Digital glitch: hue-rotate + translate jitter */
  glitch?: boolean
  /** Animate.css-style wobble: translateX + rotateZ combination */
  wobble?: boolean
  /** Rolling entrance: translateX from left + rotateZ 360°. Plays once by default. */
  roll?: boolean
  /** Scale entrance: scale(0.3) → scale(1) with opacity. Plays once by default. */
  zoomIn?: boolean
  /** Fade-up entrance: translateY(-16px) → 0 with opacity. Plays once by default. */
  fadeUp?: boolean
  /** Erratic dying-neon flicker: irregular brightness/opacity spikes */
  flicker?: boolean
  /** Holographic projection: 360° hue-rotate + skewX oscillation + opacity dip */
  hologram?: boolean
  /** Electric shock: burst jitter + cyan hue-rotate + brightness spikes */
  electric?: boolean
  /** Spectral blur wave + opacity oscillation + upward drift */
  ghost?: boolean
  /** 3D perspective lift with deepening drop-shadow */
  levitate?: boolean
  /** Explosive scale pop with blur (plays once by default) */
  burst?: boolean
  /** Heat shimmer: micro scaleX/Y oscillation + blur wave */
  heat?: boolean
  /** Crystal light catch: brightness/contrast/saturate cycle */
  crystal?: boolean
  /**
   * Controls when the animation starts.
   * - `'auto'`    — starts immediately on render (default)
   * - `'hover'`   — plays on mouse-enter, pauses on mouse-leave
   * - `'click'`   — plays once on each click
   * - `'visible'` — plays when the icon enters the viewport
   */
  trigger?: AnimationTrigger
  /**
   * When true, the animation plays only once and then stops.
   * Applies to all trigger modes. For `trigger='hover'` it means
   * the animation won't replay on the next hover.
   */
  playOnce?: boolean
  /** Animation speed (default: 'normal') */
  speed?: AnimationSpeed
  /** Custom animation duration in milliseconds — overrides speed preset */
  duration?: number
  /** Animation start delay in milliseconds */
  delay?: number
  /** Number of times to run the animation, or 'infinite' */
  iterationCount?: number | 'infinite'
  /** CSS easing function string (e.g. 'ease-in-out', 'cubic-bezier(0.4,0,0.2,1)') */
  easing?: string
  /** SVG fill color (default: 'none') */
  fill?: string
  /** SVG stroke-linecap (default: 'round') */
  strokeLinecap?: 'butt' | 'round' | 'square'
  /** SVG stroke-linejoin (default: 'round') */
  strokeLinejoin?: 'miter' | 'round' | 'bevel'
  /** Visual style variant affecting stroke weight and style */
  variant?: IconVariant
  /** Icon opacity (0–1) */
  opacity?: number
  /** Adds a CSS drop-shadow filter (SVG-compatible) */
  shadow?: boolean
}

/**
 * Metadata embedded in every generated icon module.
 */
export interface IconMeta {
  name: string
  category: string
  tags: string[]
  version: string
}

/**
 * Resolved pixel dimensions for a given IconSize value.
 */
export const SIZE_MAP: Record<string, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 48,
}

/**
 * Resolve an IconSize value to a pixel number.
 */
export function resolveSize(size: IconSize = 'md'): number {
  if (typeof size === 'number') return size
  return SIZE_MAP[size] ?? SIZE_MAP.md
}
