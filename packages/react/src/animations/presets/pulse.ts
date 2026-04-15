export const className = 'ppi-pulse'
export const durations = { slow: '2s', normal: '1.4s', fast: '0.6s' } as const
export const css = `
  @keyframes ppi-pulse {
    /*
     * Asymmetric timing: the icon expands quickly to its peak (ease-out on
     * the 0%→35% segment) then glides back slowly (ease-in-out on 35%→100%).
     * Peak is deliberately early (35% not 50%) to emphasise the snap — like
     * a heartbeat or a soft tap rather than a mechanical oscillation.
     * Scale is kept at 1.1 (vs the previous 1.15) for a more refined feel.
     */
    0%   { transform: var(--ppi-bt,) scale(1);   animation-timing-function: ease-out; }
    35%  { transform: var(--ppi-bt,) scale(1.1); animation-timing-function: ease-in-out; }
    100% { transform: var(--ppi-bt,) scale(1); }
  }
  .ppi-pulse {
    animation: ppi-pulse var(--ppi-dur, 1.4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
