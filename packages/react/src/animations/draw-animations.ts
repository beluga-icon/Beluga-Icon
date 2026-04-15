const DRAW_STYLE_ID = 'ppi-draw-styles'

const CSS = `
  @keyframes ppi-draw {
    from { stroke-dashoffset: var(--ppi-draw-len, 100); }
    to   { stroke-dashoffset: 0; }
  }
  .ppi-draw path,
  .ppi-draw circle,
  .ppi-draw line,
  .ppi-draw polyline,
  .ppi-draw rect,
  .ppi-draw ellipse {
    stroke-dasharray: var(--ppi-draw-len, 100);
    stroke-dashoffset: var(--ppi-draw-len, 100);
    animation: ppi-draw var(--ppi-dur, 1s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
  }
  @keyframes ppi-erase {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: var(--ppi-draw-len, 100); }
  }
  .ppi-erase path, .ppi-erase circle, .ppi-erase line,
  .ppi-erase polyline, .ppi-erase rect, .ppi-erase ellipse {
    stroke-dasharray: var(--ppi-draw-len, 100);
    stroke-dashoffset: 0;
    animation: ppi-erase var(--ppi-dur, 1s) ease-in var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
  }
  @keyframes ppi-trace {
    0%   { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: calc(-1 * var(--ppi-draw-len, 100)); }
  }
  .ppi-trace path, .ppi-trace circle, .ppi-trace line,
  .ppi-trace polyline, .ppi-trace rect, .ppi-trace ellipse {
    stroke-dasharray: var(--ppi-trace-len, 30) calc(var(--ppi-draw-len, 100) - var(--ppi-trace-len, 30));
    stroke-dashoffset: 0;
    animation: ppi-trace var(--ppi-dur, 2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
  @media (prefers-reduced-motion: reduce) {
    .ppi-draw path, .ppi-draw circle, .ppi-draw line,
    .ppi-draw polyline, .ppi-draw rect, .ppi-draw ellipse,
    .ppi-erase path, .ppi-erase circle, .ppi-erase line,
    .ppi-erase polyline, .ppi-erase rect, .ppi-erase ellipse,
    .ppi-trace path, .ppi-trace circle, .ppi-trace line,
    .ppi-trace polyline, .ppi-trace rect, .ppi-trace ellipse {
      animation: none;
      stroke-dasharray: unset;
      stroke-dashoffset: unset;
    }
  }
`

export function ensureDrawStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(DRAW_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = DRAW_STYLE_ID
  el.textContent = CSS
  document.head.appendChild(el)
}
