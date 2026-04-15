export const className = 'ppi-breathe'
export const durations = { slow: '6s', normal: '4s', fast: '2s' } as const
export const css = `
  @keyframes ppi-breathe {
    /*
     * Organic respiration with asymmetric inhale/exhale timing:
     *
     * Inhale (0%→38%): the icon expands and brightens — ease-out makes it
     * start quickly (lungs filling fast) then slow as capacity is reached.
     * Scale peaks at 1.07 (subtle enough for complex icons) combined with
     * full opacity so the icon feels "present" at full breath.
     *
     * Exhale (38%→100%): longer than the inhale (62% vs 38% of cycle) —
     * matching real resting respiration where exhalation is passive and
     * slower than active inhalation. ease-in starts slowly (passive
     * release) then accelerates as the lungs empty.
     *
     * opacity 0.45 at rest (not 0) keeps the icon always legible.
     * The scale + opacity combination reads as "alive" rather than just
     * "dimming", which is what separates it from a simple fade.
     */
    0%,100% {
      transform: var(--ppi-bt,) scale(1);
      opacity: 0.45;
      animation-timing-function: ease-out;
    }
    38% {
      transform: var(--ppi-bt,) scale(1.07);
      opacity: 1;
      animation-timing-function: ease-in;
    }
  }
  .ppi-breathe {
    animation: ppi-breathe var(--ppi-dur, 4s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
