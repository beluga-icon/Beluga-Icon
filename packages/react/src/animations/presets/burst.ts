export const className = 'ppi-burst'
export const durations = { slow: '1s', normal: '0.6s', fast: '0.3s' } as const
export const css = `
  @keyframes ppi-burst {
    /*
     * Explosive pop with energy-dispersal flash and spring settle:
     *
     * 0%→10%  Detonation: scale rockets to 1.4 with a high-brightness
     *         white-hot flash (brightness 2.5), motion blur (1.5px), and
     *         slight opacity drop — energy is radiating outward, the icon
     *         itself momentarily loses definition.
     *         ease-out: fast outward expansion that decelerates.
     *
     * 10%→26% Contraction: elastic rebound pulls back hard to 0.88 —
     *         the spring overshoot below rest. brightness settles quickly.
     *         ease-out: snap back is fast at first, decelerates near floor.
     *
     * 26%→42% First bounce: springs back up to 1.08, still carrying energy.
     *         ease-in-out: smooth arc through the bounce peak.
     *
     * 42%→58% Second bounce: settles to 0.97 — nearly at rest, minor twitch.
     *         ease-in-out: losing energy fast.
     *
     * 58%→100% Final settle: ease-out to 1.0. Fully at rest.
     */
    0%   {
      transform: var(--ppi-bt,) scale(1);
      filter: brightness(1) saturate(1) blur(0px);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    10%  {
      transform: var(--ppi-bt,) scale(1.4);
      filter: brightness(2.5) saturate(2) blur(1.5px);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    26%  {
      transform: var(--ppi-bt,) scale(0.88);
      filter: brightness(1.05) saturate(1) blur(0px);
      opacity: 1;
      animation-timing-function: ease-in-out;
    }
    42%  {
      transform: var(--ppi-bt,) scale(1.08);
      filter: brightness(1.1);
      animation-timing-function: ease-in-out;
    }
    58%  {
      transform: var(--ppi-bt,) scale(0.97);
      animation-timing-function: ease-out;
    }
    100% {
      transform: var(--ppi-bt,) scale(1);
      filter: brightness(1) saturate(1);
      opacity: 1;
    }
  }
  .ppi-burst {
    animation: ppi-burst var(--ppi-dur, 0.6s) linear var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
