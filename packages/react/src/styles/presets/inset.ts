export const className = 'ppi-style-inset'
export const css = `
/* Pressed / depressed — inner shadow creates a sunken cavity feel */
.ppi-style-inset {
  border-radius: 14px;
  padding: 14px;
  background: color-mix(in srgb, currentColor 6%, Canvas);
  border: 1px solid color-mix(in srgb, currentColor 15%, rgba(0,0,0,0.1));
  box-shadow:
    0 2px 4px rgba(0,0,0,0.12) inset,
    0 4px 10px color-mix(in srgb, currentColor 12%, rgba(0,0,0,0.12)) inset,
    0 1px 0 rgba(255,255,255,0.6);
}

@media (prefers-color-scheme: dark) {
  .ppi-style-inset {
    box-shadow:
      0 2px 4px rgba(0,0,0,0.35) inset,
      0 4px 10px rgba(0,0,0,0.4) inset,
      0 1px 0 rgba(255,255,255,0.05);
    border-color: color-mix(in srgb, currentColor 15%, rgba(0,0,0,0.4));
  }
}
`
