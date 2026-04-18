import * as rgbSplit from './presets/rgb-split'
import * as liquidMorph from './presets/liquid-morph'
import * as aurora from './presets/aurora'
import * as shatter from './presets/shatter'
import * as cinematic from './presets/cinematic'
import * as spin from './presets/spin'
import * as pulse from './presets/pulse'
import * as bounce from './presets/bounce'
import * as shake from './presets/shake'
import * as wiggle from './presets/wiggle'
import * as ping from './presets/ping'
import * as blink from './presets/blink'
import * as float from './presets/float'
import * as heartbeat from './presets/heartbeat'
import * as flash from './presets/flash'
import * as tada from './presets/tada'
import * as jello from './presets/jello'
import * as swing from './presets/swing'
import * as rubberBand from './presets/rubber-band'
import * as flipX from './presets/flip-x'
import * as breathe from './presets/breathe'
import * as neon from './presets/neon'
import * as glitch from './presets/glitch'
import * as wobble from './presets/wobble'
import * as roll from './presets/roll'
import * as zoomIn from './presets/zoom-in'
import * as fadeUp from './presets/fade-up'
import * as flicker from './presets/flicker'
import * as hologram from './presets/hologram'
import * as electric from './presets/electric'
import * as ghost from './presets/ghost'
import * as levitate from './presets/levitate'
import * as burst from './presets/burst'
import * as heat from './presets/heat'
import * as crystal from './presets/crystal'

// ---------------------------------------------------------------------------
// Preset registry — maps AnimKey → { className, durations, css }
// ---------------------------------------------------------------------------

type CssPreset = {
  className: string
  durations: { slow: string; normal: string; fast: string }
  css: string
}

const CSS_PRESETS: Record<string, CssPreset> = {
  spin,
  pulse,
  bounce,
  shake,
  wiggle,
  ping,
  blink,
  float,
  heartbeat,
  flash,
  tada,
  jello,
  swing,
  rubberBand,
  flipX,
  breathe,
  neon,
  glitch,
  wobble,
  roll,
  zoomIn,
  fadeUp,
  flicker,
  hologram,
  electric,
  ghost,
  levitate,
  burst,
  heat,
  crystal,
  rgbSplit,
  liquidMorph,
  aurora,
  shatter,
  cinematic,
}

// ---------------------------------------------------------------------------
// Speed → duration lookup (auto-built from presets)
// ---------------------------------------------------------------------------

export const SPEED_DURATION: Record<
  string,
  Record<'slow' | 'normal' | 'fast', string>
> = Object.fromEntries(Object.entries(CSS_PRESETS).map(([key, p]) => [key, p.durations]))

/**
 * Merge additional duration tables (draw, WAAPI) so a single lookup works for
 * every animation key. Called once during module initialisation.
 */
export function extendSpeedDuration(extra: Record<string, Record<string, string>>): void {
  Object.assign(SPEED_DURATION, extra)
}

export function resolveAnimDuration(animType: string, speed: string, duration?: number): string {
  if (duration != null) return `${duration}ms`
  return SPEED_DURATION[animType]?.[speed] ?? '1s'
}

// ---------------------------------------------------------------------------
// Named spring / elastic easing presets
// ---------------------------------------------------------------------------

const SPRING_EASINGS: Record<string, string> = {
  'spring-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'spring-medium': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'spring-stiff': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'bounce-soft': 'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
  elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
}

export function resolveEasing(easing?: string): string | undefined {
  if (!easing) return undefined
  return SPRING_EASINGS[easing] ?? easing
}

// ---------------------------------------------------------------------------
// Runtime CSS injection (SSR-safe)
// ---------------------------------------------------------------------------

const ANIM_STYLE_ID = 'ppi-animations'

// Combine all preset CSS strings + reduced-motion reset (auto-generated from presets).
const REDUCED_MOTION_CLASSES = Object.values(CSS_PRESETS)
  .map((p) => `.${p.className}`)
  .join(', ')

const COMBINED_CSS =
  Object.values(CSS_PRESETS)
    .map((p) => p.css)
    .join('\n') +
  `\n  @media (prefers-reduced-motion: reduce) {\n    ${REDUCED_MOTION_CLASSES} { animation: none; }\n  }`

export function ensureAnimStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(ANIM_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = ANIM_STYLE_ID
  el.textContent = COMBINED_CSS
  document.head.appendChild(el)
}
