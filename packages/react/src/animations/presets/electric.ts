export const className = 'ppi-electric'
export const durations = { slow: '1s', normal: '0.5s', fast: '0.25s' } as const
export const css = `
  @keyframes ppi-electric {
    /*
     * Three-phase electrical discharge with authentic arc colours:
     *
     * Burst 1 (2%–18%): Primary strike — most intense. A white-hot flash
     *   (brightness spike, no hue-rotate) transitions into a blue corona
     *   (hue-rotate ~195deg) as the arc establishes. skewX adds the visual
     *   chaos of uncontrolled current path. contrast(1.8) crisps the icon
     *   edges to simulate the high-contrast look of a lit arc.
     *
     * Burst 2 (40%–52%): Secondary arc — moderate intensity, offset timing
     *   (not symmetric with burst 1). Inverted hue direction (yellow-green
     *   range ~160deg) for variety — real arcs shift colour with electrode
     *   temperature.
     *
     * Burst 3 (72%–80%): Terminal crackle — brief residual discharge.
     *   Low intensity, short duration — the system nearly stabilised.
     *
     * Rest periods are fully clean so the arc events read as sudden
     * intrusions rather than a continuous effect.
     */
    0%,100% { transform: var(--ppi-bt,) translate(0,0);             filter: brightness(1)   hue-rotate(0deg); }

    /* Burst 1 — primary strike */
    2%  { transform: var(--ppi-bt,) translate(-3px, 2px) skewX(3deg);  filter: brightness(3.5) contrast(1.8); }
    5%  { transform: var(--ppi-bt,) translate(3px, -2px) skewX(-2deg); filter: brightness(2.5) hue-rotate(195deg) saturate(5); }
    9%  { transform: var(--ppi-bt,) translate(-2px, 3px) skewX(2deg);  filter: brightness(3)   hue-rotate(205deg) saturate(4) contrast(1.5); }
    13% { transform: var(--ppi-bt,) translate(2px, -1px) skewX(-1deg); filter: brightness(2)   hue-rotate(190deg) saturate(3); }
    18% { transform: var(--ppi-bt,) translate(0, 0);                   filter: brightness(1)   hue-rotate(0deg); }

    /* Burst 2 — secondary arc */
    40% { transform: var(--ppi-bt,) translate(0, 0);                   filter: brightness(1); }
    42% { transform: var(--ppi-bt,) translate(2px, 2px)  skewX(-2deg); filter: brightness(2.2) hue-rotate(160deg) saturate(4); }
    46% { transform: var(--ppi-bt,) translate(-3px, -1px) skewX(2deg); filter: brightness(2.8) hue-rotate(170deg) saturate(3) contrast(1.4); }
    50% { transform: var(--ppi-bt,) translate(1px, -2px) skewX(-1deg); filter: brightness(1.8) hue-rotate(155deg) saturate(2); }
    52% { transform: var(--ppi-bt,) translate(0, 0);                   filter: brightness(1); }

    /* Burst 3 — terminal crackle */
    72% { transform: var(--ppi-bt,) translate(0, 0);                   filter: brightness(1); }
    74% { transform: var(--ppi-bt,) translate(-2px, 1px) skewX(1deg);  filter: brightness(2)   hue-rotate(195deg) saturate(2.5); }
    78% { transform: var(--ppi-bt,) translate(1px, -1px);              filter: brightness(1.4) hue-rotate(185deg); }
    80% { transform: var(--ppi-bt,) translate(0, 0);                   filter: brightness(1); }
  }
  .ppi-electric {
    animation: ppi-electric var(--ppi-dur, 0.5s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
