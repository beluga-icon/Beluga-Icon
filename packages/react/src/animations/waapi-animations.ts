import type { AnimKey } from './types'

// ---------------------------------------------------------------------------
// Spring / damping physics simulators
// ---------------------------------------------------------------------------

/**
 * Numerically integrate a spring ODE (Hooke's law + damping).
 * Returns {offset, value} pairs where value is the animated property (scale or degrees).
 */
export function simulateSpring(
  stiffness: number,
  damping: number,
  mass: number,
  from: number,
  to: number,
  frames: number,
): Array<{ offset: number; value: number }> {
  const dt = 1 / frames
  let x = from - to, v = 0
  return Array.from({ length: frames + 1 }, (_, i) => {
    const F = -stiffness * x - damping * v
    v += (F / mass) * dt
    x += v * dt
    return { offset: i / frames, value: to + x }
  })
}

/**
 * Exponentially-decaying cosine oscillation — for rotational damping effects.
 */
export function dampedOscillation(
  amplitude: number,
  frequency: number,
  damping: number,
  frames: number,
): Array<{ offset: number; value: number }> {
  return Array.from({ length: frames + 1 }, (_, i) => {
    const t = i / frames
    return { offset: t, value: amplitude * Math.exp(-damping * t) * Math.cos(2 * Math.PI * frequency * t) }
  })
}

// ---------------------------------------------------------------------------
// WAAPI keyframe builder
// ---------------------------------------------------------------------------

/** Build WAAPI Keyframe[] for physics-based animations. */
export function buildWaapiKeyframes(key: AnimKey, baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  switch (key) {
    case 'springPop': {
      const kf = simulateSpring(280, 18, 1, 0, 1, 40)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}scale(${f.value.toFixed(4)})` }))
    }
    case 'decay': {
      const kf = dampedOscillation(18, 2.5, 5, 50)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
    }
    case 'magnetPulse': {
      const half = simulateSpring(200, 14, 1, 1, 1.18, 20)
      const back = simulateSpring(200, 14, 1, 1.18, 1, 20)
      return [
        ...half.map(f => ({ offset: f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
        ...back.slice(1).map(f => ({ offset: 0.5 + f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
      ]
    }
    case 'wobbleSpring': {
      const kf = dampedOscillation(12, 1.8, 3.5, 50)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
    }
    default:
      return []
  }
}
