export const className = 'ppi-rubber-band'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.45s' } as const
export const css = `
  @keyframes ppi-rubber-band {
    /*
     * Elastic impulse response — a rubber band that is stretched and
     * released snaps through several overshoots before settling:
     *
     * 0%→25%  Sudden horizontal stretch (ease-out: instant snap feel)
     *         scaleX 1.3 / scaleY 0.7 — the band is fully extended
     * 25%→40% Overshoot vertical (ease-in-out: elastic rebound)
     *         scaleX 0.78 / scaleY 1.28 — spring past neutral
     * 40%→55% Damped horizontal overshoot, smaller than the first
     *         scaleX 1.15 / scaleY 0.88
     * 55%→68% Damped vertical, smaller again
     *         scaleX 0.95 / scaleY 1.06
     * 68%→80% Near-neutral horizontal twitch
     *         scaleX 1.04 / scaleY 0.97
     * 80%→100%Settle to rest (ease-out: smooth landing)
     *
     * Each successive overshoot is ~60% of the previous, matching the
     * energy loss of a real elastic material. Outer easing is linear so
     * per-keyframe timing drives the feel of each deformation independently.
     */
    0%   { transform: var(--ppi-bt,) scaleX(1)    scaleY(1);    animation-timing-function: ease-out; }
    25%  { transform: var(--ppi-bt,) scaleX(1.3)  scaleY(0.7);  animation-timing-function: ease-in-out; }
    40%  { transform: var(--ppi-bt,) scaleX(0.78) scaleY(1.28); animation-timing-function: ease-in-out; }
    55%  { transform: var(--ppi-bt,) scaleX(1.15) scaleY(0.88); animation-timing-function: ease-in-out; }
    68%  { transform: var(--ppi-bt,) scaleX(0.95) scaleY(1.06); animation-timing-function: ease-in-out; }
    80%  { transform: var(--ppi-bt,) scaleX(1.04) scaleY(0.97); animation-timing-function: ease-out; }
    100% { transform: var(--ppi-bt,) scaleX(1)    scaleY(1); }
  }
  .ppi-rubber-band {
    animation: ppi-rubber-band var(--ppi-dur, 0.9s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
