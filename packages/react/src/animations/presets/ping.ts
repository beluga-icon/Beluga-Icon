export const className = 'ppi-ping'
export const durations = { slow: '1.8s', normal: '1.1s', fast: '0.55s' } as const
export const css = `
  @keyframes ppi-ping {
    /*
     * Sonar-pulse ripple: the icon expands outward like a radar ring
     * while fading away.
     *
     * Scale goes to 1.7 (vs the previous 1.3) so the ring is clearly
     * visible. A mid-point opacity keyframe at 45% delays the fade,
     * keeping the ring legible for longer before it disappears.
     *
     * The 75%–100% hold at fully transparent gives a natural breath
     * between pulses when looping.
     */
    0%       { transform: var(--ppi-bt,) scale(1);   opacity: 1; }
    45%      { opacity: 0.5; }
    75%,100% { transform: var(--ppi-bt,) scale(1.7); opacity: 0; }
  }
  .ppi-ping {
    animation: ppi-ping var(--ppi-dur, 1.1s) ease-out var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
