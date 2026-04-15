export const className = 'ppi-glitch'
export const durations = { slow: '0.8s', normal: '0.4s', fast: '0.2s' } as const
export const css = `
  @keyframes ppi-glitch {
    /*
     * Three-burst digital corruption pattern with decaying intensity:
     *
     * Burst 1 (0%–9%): Primary hit — most intense. Aggressive lateral
     * shift, skew, hue rotation, and a brightness spike simulate a
     * voltage surge corrupting the signal.
     *
     * Burst 2 (33%–40%): Secondary echo — medium intensity. Offset
     * timing from burst 1 (not at 50%) prevents the mechanical feel
     * of symmetric placement. Inverted hue direction.
     *
     * Burst 3 (68%–72%): Tertiary aftershock — subtle residual noise.
     * Short and quiet, like the last frame of corruption before the
     * signal stabilises.
     *
     * Rest periods (9%–33%, 40%–68%, 72%–100%) hold fully clean so
     * contrast between normal and corrupted states reads clearly.
     * Outer easing is linear — glitch is inherently abrupt.
     */
    0%,100% { transform: var(--ppi-bt,) translateX(0);              filter: none; }

    /* Burst 1 — primary corruption */
    2%  { transform: var(--ppi-bt,) translateX(-4px) skewX(3deg);  filter: hue-rotate(90deg) brightness(1.4); }
    4%  { transform: var(--ppi-bt,) translateX(4px)  skewX(-3deg); filter: hue-rotate(200deg) saturate(2) brightness(0.8); }
    6%  { transform: var(--ppi-bt,) translateX(-3px) skewX(1deg);  filter: hue-rotate(300deg) contrast(1.5); }
    9%  { transform: var(--ppi-bt,) translateX(0);                  filter: none; }

    /* Burst 2 — secondary echo */
    33% { transform: var(--ppi-bt,) translateX(0);                  filter: none; }
    35% { transform: var(--ppi-bt,) translateX(3px)  skewX(-2deg); filter: hue-rotate(-90deg) saturate(1.8); }
    37% { transform: var(--ppi-bt,) translateX(-3px) skewX(2deg);  filter: hue-rotate(-180deg) brightness(1.2); }
    40% { transform: var(--ppi-bt,) translateX(0);                  filter: none; }

    /* Burst 3 — tertiary aftershock */
    68% { transform: var(--ppi-bt,) translateX(0);                  filter: none; }
    70% { transform: var(--ppi-bt,) translateX(-2px) skewX(1deg);  filter: hue-rotate(120deg) brightness(1.1); }
    72% { transform: var(--ppi-bt,) translateX(0);                  filter: none; }
  }
  .ppi-glitch {
    animation: ppi-glitch var(--ppi-dur, 0.4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
