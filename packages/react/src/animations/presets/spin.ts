export const className = 'ppi-spin'
export const durations = { slow: '2s', normal: '1s', fast: '0.4s' } as const
export const css = `
  @keyframes ppi-spin {
    from { transform: var(--ppi-bt,) rotate(0deg); }
    to   { transform: var(--ppi-bt,) rotate(360deg); }
  }
  .ppi-spin {
    /*
     * Smooth-Step cubic-bezier (0.65, 0, 0.35, 1):
     * Each revolution starts slowly, accelerates through the midpoint, then
     * decelerates — the slow end connects seamlessly to the slow start of the
     * next loop, giving the icon a sense of real rotational inertia rather
     * than the mechanical feel of a plain linear spin.
     */
    animation: ppi-spin var(--ppi-dur, 1s) cubic-bezier(0.65, 0, 0.35, 1) var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
