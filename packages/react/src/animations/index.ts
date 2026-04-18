export type { AnimKey } from './types'
export {
  ANIM_PRIORITY,
  ONCE_BY_DEFAULT,
  WAAPI_ANIMS,
  DRAW_ANIMS,
  ANIMATE_ONLY_KEYS,
  SVG_GEOMETRY_SELECTOR,
  animClass,
} from './types'
export {
  SPEED_DURATION,
  extendSpeedDuration,
  ensureAnimStyles,
  resolveAnimDuration,
  resolveEasing,
} from './css-animations'
export { ensureDrawStyles, DRAW_SPEED_DURATION } from './draw-animations'
export {
  simulateSpring,
  dampedOscillation,
  buildWaapiKeyframes,
  WAAPI_SPEED_DURATION,
} from './waapi-animations'

// ---------------------------------------------------------------------------
// Merge draw + WAAPI durations into the shared SPEED_DURATION table on import
// so `resolveAnimDuration` works for every AnimKey with a single call.
// ---------------------------------------------------------------------------
import { extendSpeedDuration } from './css-animations'
import { DRAW_SPEED_DURATION } from './draw-animations'
import { WAAPI_SPEED_DURATION } from './waapi-animations'

extendSpeedDuration({ ...DRAW_SPEED_DURATION, ...WAAPI_SPEED_DURATION })
