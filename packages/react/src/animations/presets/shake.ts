export const className = 'ppi-shake'
export const durations = { slow: '0.9s', normal: '0.7s', fast: '0.35s' } as const
export const css = `
  @keyframes ppi-shake {
    /*
     * Damped oscillation — each pass is smaller than the previous,
     * simulating a physical disturbance that loses energy over time.
     * A subtle rotation accompanies the lateral movement to give the
     * shake more dimension (like a phone receiving a notification).
     *
     * Amplitude decay: ±5px → ±4px → ±3px → ±2px → ±1px → rest
     */
    0%   { transform: var(--ppi-bt,) translateX(0) rotate(0deg); }
    10%  { transform: var(--ppi-bt,) translateX(-5px) rotate(-2deg); animation-timing-function: ease-in-out; }
    22%  { transform: var(--ppi-bt,) translateX(5px)  rotate(2deg);  animation-timing-function: ease-in-out; }
    34%  { transform: var(--ppi-bt,) translateX(-4px) rotate(-1.5deg); animation-timing-function: ease-in-out; }
    46%  { transform: var(--ppi-bt,) translateX(3px)  rotate(1.5deg);  animation-timing-function: ease-in-out; }
    58%  { transform: var(--ppi-bt,) translateX(-2px) rotate(-1deg);   animation-timing-function: ease-in-out; }
    70%  { transform: var(--ppi-bt,) translateX(2px)  rotate(1deg);    animation-timing-function: ease-in-out; }
    82%  { transform: var(--ppi-bt,) translateX(-1px) rotate(-0.5deg); animation-timing-function: ease-out; }
    100% { transform: var(--ppi-bt,) translateX(0) rotate(0deg); }
  }
  .ppi-shake {
    animation: ppi-shake var(--ppi-dur, 0.7s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
