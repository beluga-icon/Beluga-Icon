import { simulateSpring } from '../physics'

export const durations = { slow: '1.2s', normal: '0.7s', fast: '0.4s' } as const

/**
 * Spring-pop entrance using numerically integrated Hooke's law.
 *
 * Parameters tuned for a tight, satisfying UI pop:
 *   stiffness = 380  — stiffer than default, snaps to target fast
 *   damping   = 14   — underdamped (ζ ≈ 0.36), produces a visible overshoot
 *                       and 1–2 visible bounces before settling
 *   mass      = 1
 *   from → to = 0 → 1 (scale)
 *   frames    = 50   — high enough resolution for a smooth spring curve
 *
 * Critical damping at these params = 2√(380) ≈ 39.
 * With damping=14, ζ ≈ 0.36 — lively spring with a crisp overshoot peak
 * around scale(1.18) before settling at scale(1). More energetic than the
 * previous ζ≈0.54 setting while still resolving cleanly within the duration.
 */
export function buildKeyframes(baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  const kf = simulateSpring(380, 14, 1, 0, 1, 50)
  return kf.map(f => ({ offset: f.offset, transform: `${bt}scale(${f.value.toFixed(4)})` }))
}
