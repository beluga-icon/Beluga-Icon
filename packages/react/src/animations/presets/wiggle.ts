export const className = 'ppi-wiggle'
export const durations = { slow: '1.2s', normal: '0.8s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-wiggle {
    /*
     * Damped pendulum oscillation — each swing is smaller than the previous,
     * like a notification bell or antenna that was flicked and settles back.
     *
     * Rotation decay: -12° → +10° → -8° → +6° → -3° → +1° → 0°
     * Per-keyframe ease-in-out smooths each direction reversal.
     */
    0%   { transform: var(--ppi-bt,) rotate(0deg);    animation-timing-function: ease-out; }
    15%  { transform: var(--ppi-bt,) rotate(-12deg);  animation-timing-function: ease-in-out; }
    30%  { transform: var(--ppi-bt,) rotate(10deg);   animation-timing-function: ease-in-out; }
    45%  { transform: var(--ppi-bt,) rotate(-8deg);   animation-timing-function: ease-in-out; }
    60%  { transform: var(--ppi-bt,) rotate(6deg);    animation-timing-function: ease-in-out; }
    72%  { transform: var(--ppi-bt,) rotate(-3deg);   animation-timing-function: ease-in-out; }
    84%  { transform: var(--ppi-bt,) rotate(1deg);    animation-timing-function: ease-out; }
    100% { transform: var(--ppi-bt,) rotate(0deg); }
  }
  .ppi-wiggle {
    animation: ppi-wiggle var(--ppi-dur, 0.8s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
