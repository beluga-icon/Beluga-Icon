export const className = 'ppi-hologram'
export const durations = { slow: '8s', normal: '4s', fast: '2s' } as const
export const css = `
  @keyframes ppi-hologram {
    /*
     * Holographic projection with scan-line artifacts and colour separation:
     *
     * A real hologram projector sweeps a beam — the icon's colour shifts as
     * different wavelengths dominate, brightness pulsates with beam intensity,
     * and occasional scan-line interference causes brief opacity drops and
     * horizontal skew distortion.
     *
     * Irregular keyframe spacing (0%, 20%, 38%, 55%, 70%, 85%, 100%) breaks
     * the mechanical feel of even 25% steps. Each transition has its own
     * character:
     *   0%→20%   Initial flicker + cyan cast (beam warming up)
     *   20%→38%  Scan interference — brief opacity drop, skew artifact
     *   38%→55%  Stable magenta phase, peak brightness
     *   55%→70%  Second interference event — deeper drop
     *   70%→85%  Recovery, cyan-green phase
     *   85%→100% Return to base
     *
     * saturate spikes simulate RGB channel separation artifacts visible in
     * real holographic and laser projection systems.
     */
    0%   {
      filter: hue-rotate(0deg)   brightness(1)   saturate(1);
      opacity: 0.9;
      transform: var(--ppi-bt,) skewX(0deg);
    }
    20%  {
      filter: hue-rotate(72deg)  brightness(1.3) saturate(2.5);
      opacity: 0.55;
      transform: var(--ppi-bt,) skewX(2deg);
    }
    38%  {
      filter: hue-rotate(150deg) brightness(0.75) saturate(1.5);
      opacity: 0.85;
      transform: var(--ppi-bt,) skewX(-1.5deg);
    }
    55%  {
      filter: hue-rotate(210deg) brightness(1.4) saturate(3);
      opacity: 0.4;
      transform: var(--ppi-bt,) skewX(2.5deg);
    }
    70%  {
      filter: hue-rotate(280deg) brightness(1.1) saturate(2);
      opacity: 0.8;
      transform: var(--ppi-bt,) skewX(-1deg);
    }
    85%  {
      filter: hue-rotate(330deg) brightness(0.85) saturate(1.8);
      opacity: 0.95;
      transform: var(--ppi-bt,) skewX(0.5deg);
    }
    100% {
      filter: hue-rotate(360deg) brightness(1)   saturate(1);
      opacity: 0.9;
      transform: var(--ppi-bt,) skewX(0deg);
    }
  }
  .ppi-hologram {
    animation: ppi-hologram var(--ppi-dur, 4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
