export const className = 'ppi-heat'
export const durations = { slow: '3.5s', normal: '2s', fast: '1s' } as const
export const css = `
  @keyframes ppi-heat {
    /*
     * Heat haze shimmer with turbulent distortion and vertical rise:
     *
     * Real heat shimmer is caused by localised refraction as hot air rises —
     * the distortion is irregular, slightly vertical, and has random intensity.
     *
     * Irregular keyframe spacing (17%, 32%, 48%, 63%, 78%) breaks the
     * mechanical 20%-step pattern. Each frame has its own distortion
     * signature — no two consecutive frames move in the same direction.
     *
     * scaleX / scaleY are kept in opposing phase (when one expands the other
     * contracts) to simulate the anamorphic lens distortion of a heat column.
     * Range extended to 0.96–1.04 (from 0.98–1.02) for clearer visibility.
     *
     * translateY fluctuates between -1.5px and +1px — the net upward bias
     * represents convective rise. Values are small enough to be subliminal
     * but add the sense that the icon is immersed in moving hot air.
     *
     * blur 0–0.8px and brightness 0.93–1.08 complete the optical distortion.
     * Per-keyframe ease-in-out gives each transition a smooth, organic feel.
     */
    0%,100% {
      transform: var(--ppi-bt,) translateY(0)     scaleX(1)    scaleY(1);
      filter: blur(0px)    brightness(1);
      animation-timing-function: ease-in-out;
    }
    17% {
      transform: var(--ppi-bt,) translateY(-1.5px) scaleX(1.04) scaleY(0.97);
      filter: blur(0.6px)  brightness(1.06);
      animation-timing-function: ease-in-out;
    }
    32% {
      transform: var(--ppi-bt,) translateY(0.5px)  scaleX(0.97) scaleY(1.03);
      filter: blur(0.3px)  brightness(0.95);
      animation-timing-function: ease-in-out;
    }
    48% {
      transform: var(--ppi-bt,) translateY(-1px)   scaleX(1.03) scaleY(0.96);
      filter: blur(0.8px)  brightness(1.08);
      animation-timing-function: ease-in-out;
    }
    63% {
      transform: var(--ppi-bt,) translateY(1px)    scaleX(0.96) scaleY(1.04);
      filter: blur(0.4px)  brightness(0.93);
      animation-timing-function: ease-in-out;
    }
    78% {
      transform: var(--ppi-bt,) translateY(-0.5px) scaleX(1.02) scaleY(0.98);
      filter: blur(0.5px)  brightness(1.04);
      animation-timing-function: ease-in-out;
    }
  }
  .ppi-heat {
    animation: ppi-heat var(--ppi-dur, 2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
