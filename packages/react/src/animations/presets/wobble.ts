export const className = 'ppi-wobble'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-wobble {
    /*
     * Large-amplitude lateral wobble with rotation and damped decay:
     *
     * The first keyframe snaps hard to the left (ease-out: instant impact
     * feel) — like an object that receives a sideways impulse. Subsequent
     * oscillations decay in both translation and rotation, simulating the
     * energy loss of a real physical object finding its equilibrium.
     *
     * Amplitude decay (translation): -8px → +6px → -4px → +2.5px → 0
     * Amplitude decay (rotation):    -6°  → +4°  → -2.5°→ +1.5° → 0
     * Each pass is ~65% of the previous — matches a moderately damped system.
     *
     * Per-keyframe ease-in-out smooths each direction reversal, while the
     * initial ease-out preserves the snap of the first hit.
     * A 20% rest period at the end (80%→100%) gives the eye a beat before
     * the next cycle so rapid looping reads as deliberate, not chaotic.
     * Outer easing is linear.
     */
    0%   { transform: var(--ppi-bt,) translateX(0)     rotateZ(0deg);    animation-timing-function: ease-out; }
    14%  { transform: var(--ppi-bt,) translateX(-8px)  rotateZ(-6deg);   animation-timing-function: ease-in-out; }
    28%  { transform: var(--ppi-bt,) translateX(6px)   rotateZ(4deg);    animation-timing-function: ease-in-out; }
    42%  { transform: var(--ppi-bt,) translateX(-4px)  rotateZ(-2.5deg); animation-timing-function: ease-in-out; }
    56%  { transform: var(--ppi-bt,) translateX(2.5px) rotateZ(1.5deg);  animation-timing-function: ease-in-out; }
    68%  { transform: var(--ppi-bt,) translateX(-1px)  rotateZ(-0.5deg); animation-timing-function: ease-out; }
    80%,100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); }
  }
  .ppi-wobble {
    animation: ppi-wobble var(--ppi-dur, 1s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
