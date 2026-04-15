import { dampedOscillation } from '../physics'

export const durations = { slow: '2s', normal: '1.2s', fast: '0.6s' } as const

/**
 * Rotational decay — an object that was flicked and spins to rest.
 *
 * Uses an exponentially-decaying cosine oscillation:
 *   value(t) = amplitude × e^(-damping×t) × cos(2π × frequency × t)
 *
 * Parameters tuned for a satisfying, visible settlement:
 *   amplitude = 15 deg  — initial rotation (down from 18 for refinement)
 *   frequency = 3.0 Hz  — 3 full oscillations over the normalised duration,
 *                          giving 5–6 visible direction reversals
 *   damping   = 3.5     — slower decay than the previous 5.0, so more
 *                          oscillations are visible before the motion fades
 *                          to imperceptible. Feels like a lighter, less
 *                          viscous medium (air vs syrup).
 *   frames    = 60      — higher resolution for a smoother rotation curve
 *
 * Compared to the previous (amplitude=18, freq=2.5, damping=5, frames=50),
 * this version decays more gradually — the audience can follow the physics
 * rather than seeing the motion snap to rest too quickly.
 */
export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const kf = dampedOscillation(15, 3.0, 3.5, 60)
  return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
}
