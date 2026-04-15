export const className = 'ppi-levitate'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-levitate {
    /*
     * Organic 3D levitation with multi-axis drift and dynamic shadow:
     *
     * Four keyframes break the two-keyframe sine-wave feel, creating a
     * path that rises, drifts slightly sideways, hovers, then settles —
     * like an object suspended in a light magnetic field with minor
     * turbulence.
     *
     * rotateX tilts the icon away as it rises (perspective foreshortening),
     * while a subtle rotateY adds left/right wobble — the combination reads
     * as genuinely three-dimensional rather than a flat vertical oscillation.
     *
     * drop-shadow tracks the altitude: large soft shadow at rest (close to
     * ground), small faint shadow at peak (far from ground). The shadow
     * shift is a strong depth cue that sells the levitation illusion.
     *
     * cubic-bezier(0.45, 0.05, 0.55, 0.95) is a flat S-curve — spends more
     * time near each extreme (hovering pause) vs standard ease-in-out.
     * Outer easing is linear so per-keyframe functions control each phase.
     */
    0%,100% {
      transform: var(--ppi-bt,) perspective(200px) translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.32));
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
    30% {
      transform: var(--ppi-bt,) perspective(200px) translateY(-5px) rotateX(5deg) rotateY(2deg) scale(1.02);
      filter: drop-shadow(0 8px 12px rgba(0,0,0,0.18));
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
    55% {
      transform: var(--ppi-bt,) perspective(200px) translateY(-8px) rotateX(9deg) rotateY(-2deg) scale(1.03);
      filter: drop-shadow(0 14px 18px rgba(0,0,0,0.08));
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
    78% {
      transform: var(--ppi-bt,) perspective(200px) translateY(-4px) rotateX(4deg) rotateY(1deg) scale(1.01);
      filter: drop-shadow(0 7px 10px rgba(0,0,0,0.2));
      animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    }
  }
  .ppi-levitate {
    animation: ppi-levitate var(--ppi-dur, 3s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
