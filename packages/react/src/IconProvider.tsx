import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { IconSize, IconFlip, IconVariant, AnimationSpeed, AnimationTrigger } from '@beluga-icon/core'

/**
 * Subset of IconBaseProps that can be set as global defaults.
 * `label`, `className`, and `style` are intentionally excluded:
 * - label: per-icon semantic content — cannot be shared globally
 * - className/style: layout concerns that should cascade via CSS
 *
 * Additionally provides `classNamePrefix`/`classNameSuffix` for automatically
 * injecting CSS classes around every icon's own className in the subtree.
 */
export interface IconContextValue {
  size?: IconSize
  color?: string
  strokeWidth?: number
  rotate?: number
  flip?: IconFlip
  spin?: boolean
  pulse?: boolean
  bounce?: boolean
  shake?: boolean
  wiggle?: boolean
  ping?: boolean
  blink?: boolean
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
  /** SVG draw (sketch) animation — strokes revealed as if hand-drawn */
  draw?: boolean
  /** Reverse of draw — strokes disappear as if being erased */
  erase?: boolean
  /** A short stroke segment travels continuously along the path */
  trace?: boolean
  /** Pulsing neon glow using drop-shadow filter animation */
  neon?: boolean
  /** Digital glitch: hue-rotate + translate jitter */
  glitch?: boolean
  /** Animate.css-style wobble: translateX + rotateZ combination */
  wobble?: boolean
  /** Rolling entrance: translateX from left + rotateZ 360° */
  roll?: boolean
  /** Scale entrance: scale(0.3) → scale(1) with opacity */
  zoomIn?: boolean
  /** Fade-up entrance: translateY(-16px) → 0 with opacity */
  fadeUp?: boolean
  /** Erratic dying-neon flicker */
  flicker?: boolean
  /** Holographic hue-rotate + skew projection */
  hologram?: boolean
  /** Electric shock jitter + cyan brightness bursts */
  electric?: boolean
  /** Spectral blur wave + opacity + upward drift */
  ghost?: boolean
  /** 3D perspective lift with deepening drop-shadow */
  levitate?: boolean
  /** Explosive scale pop with blur (plays once) */
  burst?: boolean
  /** Heat shimmer: micro scaleX/Y + blur oscillation */
  heat?: boolean
  /** Crystal light catch: brightness/contrast/saturate cycle */
  crystal?: boolean
  /** True spring physics scale pop with overshoot (plays once) */
  springPop?: boolean
  /** Damped rotational oscillation after impact (plays once) */
  decay?: boolean
  /** Living spring-based scale breathe */
  magnetPulse?: boolean
  /** Compress scaleY then spring-release (plays once) */
  slingshot?: boolean
  /** Physically accurate spring wobble rotation */
  wobbleSpring?: boolean
  /** Controls when the animation starts playing */
  trigger?: AnimationTrigger
  /** When true, the animation plays only once and then stops */
  playOnce?: boolean
  speed?: AnimationSpeed
  duration?: number
  delay?: number
  iterationCount?: number | 'infinite'
  easing?: string
  fill?: string
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'miter' | 'round' | 'bevel'
  variant?: IconVariant
  opacity?: number
  shadow?: boolean
  /** CSS class prepended to every icon's className in this subtree */
  classNamePrefix?: string
  /** CSS class appended to every icon's className in this subtree */
  classNameSuffix?: string
}

export interface IconProviderProps {
  /** Global default props for all Beluga icons nested within this provider */
  value: IconContextValue
  children: ReactNode
}

const IconContext = createContext<IconContextValue>({})

/**
 * Provides global default props to all Beluga Icon components nested within it.
 * Explicit props on individual icons always take precedence over provider defaults.
 *
 * @example
 * // Set global defaults for all icons in the app:
 * <IconProvider value={{ size: 'lg', color: '#333', strokeWidth: 1.5 }}>
 *   <App />
 * </IconProvider>
 *
 * @example
 * // Nested providers: inner overrides outer for matching props only
 * <IconProvider value={{ size: 'md', color: 'blue' }}>
 *   <IconProvider value={{ color: 'red' }}>
 *     <SomeIcon /> // size='md' from outer, color='red' from inner
 *   </IconProvider>
 * </IconProvider>
 */
export function IconProvider({ value, children }: IconProviderProps) {
  const parent = useContext(IconContext)
  // Merge with parent so nested providers only override what they explicitly set.
  // Inner values win over outer values for matching keys.
  const merged = { ...parent, ...value }
  return <IconContext.Provider value={merged}>{children}</IconContext.Provider>
}

/**
 * Hook to read the nearest IconProvider context.
 * Returns an empty object (all undefined) when no provider is present — safe default.
 */
export function useIconContext(): IconContextValue {
  return useContext(IconContext)
}
