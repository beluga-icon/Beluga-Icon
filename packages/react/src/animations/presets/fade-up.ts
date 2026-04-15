export const className = 'ppi-fade-up'
export const durations = { slow: '0.8s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-fade-up {
    /*
     * Gravity-drop entrance with spring settle:
     *
     * The icon enters from above (translateY -16px) and falls into place,
     * overshooting due to momentum before the spring pulls it back.
     *
     * 0%→60%  Drop: cubic-bezier(0.22,1,0.36,1) — aggressive ease-out
     *         simulates gravity decelerating as the object nears rest.
     *         Opacity opens in the first 40% so the icon is readable
     *         before the spring completes.
     *         Overshoots to translateY(+4px) — momentum past rest.
     *
     * 60%→78% Spring back: ease-in-out pulls back to translateY(-2px) —
     *         elastic rebound above the rest position.
     *
     * 78%→100% Final settle: ease-out lands cleanly at translateY(0).
     *
     * The overshoot (+4px) and rebound (-2px) are small enough to be
     * invisible at a glance but give the entrance a felt physicality
     * vs a flat ease-out slide.
     */
    0%   {
      transform: var(--ppi-bt,) translateY(-16px);
      opacity: 0;
      animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    }
    40%  { opacity: 1; }
    60%  {
      transform: var(--ppi-bt,) translateY(4px);
      animation-timing-function: ease-in-out;
    }
    78%  {
      transform: var(--ppi-bt,) translateY(-2px);
      animation-timing-function: ease-out;
    }
    100% { transform: var(--ppi-bt,) translateY(0); opacity: 1; }
  }
  .ppi-fade-up {
    animation: ppi-fade-up var(--ppi-dur, 0.5s) linear var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
