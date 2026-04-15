export const className = 'ppi-zoom-in'
export const durations = { slow: '0.8s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-zoom-in {
    /*
     * Spring-pop zoom entrance with overshoot and settle:
     *
     * 0%→65%  Main zoom: scale 0 → 1.08, cubic-bezier(0.34,1.56,0.64,1)
     *         is a spring curve that naturally overshoots past 1.0 to 1.08,
     *         giving the zoom its characteristic "pop" without needing an
     *         explicit overshoot keyframe. Opacity opens quickly in the
     *         first 45% so the icon is visible early.
     *
     * 65%→80% Undershoot: scale pulls back to 0.96 (elastic rebound).
     *         ease-in-out for a smooth reversal.
     *
     * 80%→100% Final settle: scale 0.96 → 1.0 with ease-out.
     *          The icon lands confidently at its natural size.
     *
     * The three-phase spring (overshoot → undershoot → rest) is the
     * classic "bouncy" feel without going so far that complex icons
     * look distorted.
     */
    0%   {
      transform: var(--ppi-bt,) scale(0);
      opacity: 0;
      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    45%  { opacity: 1; }
    65%  {
      transform: var(--ppi-bt,) scale(1.08);
      animation-timing-function: ease-in-out;
    }
    80%  {
      transform: var(--ppi-bt,) scale(0.96);
      animation-timing-function: ease-out;
    }
    100% { transform: var(--ppi-bt,) scale(1); opacity: 1; }
  }
  .ppi-zoom-in {
    animation: ppi-zoom-in var(--ppi-dur, 0.5s) linear var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
