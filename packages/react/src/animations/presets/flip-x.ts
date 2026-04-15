export const className = 'ppi-flip-x'
export const durations = { slow: '1.8s', normal: '1s', fast: '0.5s' } as const
export const css = `
  @keyframes ppi-flip-x {
    /*
     * Full 360° coin-toss flip on the Y axis with asymmetric easing:
     *
     * 0%→45%  First half: ease-in — starts slow, builds momentum into
     *         the flip (like a coin leaving the thumb, accelerating).
     *         Reaches the "back face" at -180°.
     * 45%→65% Second half: ease-out — fast out of the flip, decelerates
     *         as it approaches the landing position at -360° (= 0°).
     * 65%→100% Rest: holds at the original face before the next toss.
     *         This breath makes rapid loops feel rhythmic, not chaotic.
     *
     * perspective(400px) provides a realistic depth cue so the icon
     * appears to recede as it rotates rather than simply squashing flat.
     *
     * Outer easing is linear — the per-keyframe functions on the two
     * active segments drive the acceleration curve independently.
     */
    0%   { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg);    animation-timing-function: ease-in; }
    45%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-180deg); animation-timing-function: ease-out; }
    65%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-360deg); }
    100% { transform: var(--ppi-bt,) perspective(400px) rotateY(-360deg); }
  }
  .ppi-flip-x {
    animation: ppi-flip-x var(--ppi-dur, 1s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
