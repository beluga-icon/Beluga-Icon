export const className = 'ppi-bounce'
export const durations = { slow: '1.6s', normal: '0.9s', fast: '0.45s' } as const
export const css = `
  @keyframes ppi-bounce {
    /*
     * Physics-aware bounce with squash & stretch:
     *
     * 0%  → 50%  Rise:   ease-out (fast launch, decelerates near the peak)
     * 50% → 85%  Fall:   ease-in  (slow near the peak, gravity accelerates it down)
     * 85%        Impact: squash — wider + shorter to simulate the collision
     * 85% → 100% Rebound: ease-out quick snap back to rest
     *
     * The stretch at the peak (scaleX 0.97 / scaleY 1.03) and squash at
     * impact (scaleX 1.07 / scaleY 0.93) are kept subtle so complex icons
     * don't look distorted.
     */
    0%   {
      transform: var(--ppi-bt,) translateY(0) scaleX(1) scaleY(1);
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    }
    50%  {
      transform: var(--ppi-bt,) translateY(-10px) scaleX(0.97) scaleY(1.03);
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
    }
    85%  {
      transform: var(--ppi-bt,) translateY(0) scaleX(1.07) scaleY(0.93);
      animation-timing-function: ease-out;
    }
    100% { transform: var(--ppi-bt,) translateY(0) scaleX(1) scaleY(1); }
  }
  .ppi-bounce {
    animation: ppi-bounce var(--ppi-dur, 0.9s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
