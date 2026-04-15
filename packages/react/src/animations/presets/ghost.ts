export const className = 'ppi-ghost'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-ghost {
    /*
     * Ethereal drift with coupled blur/opacity and irregular timing:
     *
     * Blur is inversely proportional to opacity — the more transparent the
     * icon, the more diffuse it becomes, as if phasing into another plane.
     * At full opacity the icon is crisp; at its most transparent it is soft
     * and undefined, matching the visual language of supernatural effects.
     *
     * Movement combines vertical rise (the classic ghost "floating up") with
     * a subtle horizontal drift — giving it an organic, unpredictable path
     * rather than a mechanical sine wave.
     *
     * Timing is deliberately irregular (30%, 55%, 72%, 88%) so the phase-in
     * and phase-out events never feel mechanical or evenly spaced.
     *
     * Per-keyframe ease-in-out ensures each transition is smooth at both
     * ends — fading in and out softly rather than linearly materialising.
     * Outer easing is linear so the per-keyframe functions control each
     * segment independently.
     */
    0%,100% {
      transform: var(--ppi-bt,) translateX(0)    translateY(0);
      opacity: 1;
      filter: blur(0px) brightness(1);
      animation-timing-function: ease-in-out;
    }
    30% {
      transform: var(--ppi-bt,) translateX(3px)  translateY(-5px);
      opacity: 0.25;
      filter: blur(2px) brightness(1.2);
      animation-timing-function: ease-in-out;
    }
    55% {
      transform: var(--ppi-bt,) translateX(-2px) translateY(-2px);
      opacity: 0.6;
      filter: blur(0.8px) brightness(0.95);
      animation-timing-function: ease-in-out;
    }
    72% {
      transform: var(--ppi-bt,) translateX(2px)  translateY(-6px);
      opacity: 0.2;
      filter: blur(2.5px) brightness(1.15);
      animation-timing-function: ease-in-out;
    }
    88% {
      transform: var(--ppi-bt,) translateX(-1px) translateY(-1px);
      opacity: 0.8;
      filter: blur(0.3px) brightness(1);
      animation-timing-function: ease-in-out;
    }
  }
  .ppi-ghost {
    animation: ppi-ghost var(--ppi-dur, 3s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
