export const className = 'ppi-swing'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-swing {
    /*
     * Authentic top-anchored pendulum with decaying amplitude:
     *
     * A pendulum has zero velocity at each extreme and maximum velocity
     * as it passes through centre. Per-keyframe ease-in-out approximates
     * this by decelerating into each turning point and accelerating away.
     *
     * Amplitude decay: 18° → -13° → 9° → -6° → 3° → 0°
     * Each successive swing loses roughly 30% of its amplitude, matching
     * a lightly damped physical pendulum (Q ≈ 3).
     *
     * Outer easing is linear so per-keyframe timing functions drive each
     * arc independently. transform-origin: top center keeps the pivot at
     * the suspension point.
     */
    0%   { transform: var(--ppi-bt,) rotate(0deg);   animation-timing-function: ease-out; }
    18%  { transform: var(--ppi-bt,) rotate(18deg);  animation-timing-function: ease-in-out; }
    36%  { transform: var(--ppi-bt,) rotate(-13deg); animation-timing-function: ease-in-out; }
    52%  { transform: var(--ppi-bt,) rotate(9deg);   animation-timing-function: ease-in-out; }
    66%  { transform: var(--ppi-bt,) rotate(-6deg);  animation-timing-function: ease-in-out; }
    78%  { transform: var(--ppi-bt,) rotate(3deg);   animation-timing-function: ease-out; }
    100% { transform: var(--ppi-bt,) rotate(0deg); }
  }
  .ppi-swing {
    animation: ppi-swing var(--ppi-dur, 1s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
    transform-origin: top center;
  }
`
