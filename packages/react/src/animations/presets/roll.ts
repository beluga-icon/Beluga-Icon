export const className = 'ppi-roll'
export const durations = { slow: '1.4s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-roll {
    /*
     * Physics-aware roll-in with momentum overshoot:
     *
     * 0%→70%  Entry: the icon rolls in from the left. cubic-bezier(0.22,1,0.36,1)
     *         is an aggressive ease-out — fast entry that decelerates sharply,
     *         simulating a ball rolling to a stop. Rotation decelerates in sync
     *         with translation (no-slip rolling condition).
     *
     * 70%→85% Overshoot: momentum carries the icon 5px past the rest position
     *         with a slight counter-rotation (the ball's spin settling).
     *         ease-out so the overshoot itself decelerates naturally.
     *
     * 85%→100% Snap back: spring return to rest position. ease-out for a
     *          clean, confident landing.
     *
     * opacity fades in during the first 40% so the icon is fully visible
     * well before the spring-settle plays out.
     */
    0%   {
      transform: var(--ppi-bt,) translateX(-100%) rotateZ(-360deg);
      opacity: 0;
      animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    }
    40%  { opacity: 1; }
    70%  {
      transform: var(--ppi-bt,) translateX(5px) rotateZ(4deg);
      animation-timing-function: ease-out;
    }
    85%  {
      transform: var(--ppi-bt,) translateX(-2px) rotateZ(-1deg);
      animation-timing-function: ease-out;
    }
    100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); opacity: 1; }
  }
  .ppi-roll {
    animation: ppi-roll var(--ppi-dur, 0.8s) linear var(--ppi-delay, 0s) var(--ppi-count, 1) both;
  }
`
