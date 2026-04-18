export const className = 'ppi-style-emboss'
export const css = `
/* 3D embossed — raised surface with specular highlight edge and deep cast shadow */
.ppi-style-emboss {
  border-radius: 14px;
  padding: 14px;
  background: color-mix(in srgb, currentColor 10%, Canvas);
  border: 1px solid color-mix(in srgb, currentColor 20%, transparent);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.8) inset,
    0 -1px 0 rgba(0,0,0,0.12) inset,
    1px 0 0 rgba(255,255,255,0.5) inset,
    -1px 0 0 rgba(0,0,0,0.08) inset,
    0 4px 8px color-mix(in srgb, currentColor 15%, rgba(0,0,0,0.2)),
    0 1px 2px color-mix(in srgb, currentColor 10%, rgba(0,0,0,0.15));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-emboss {
    box-shadow:
      0 1px 0 rgba(255,255,255,0.12) inset,
      0 -1px 0 rgba(0,0,0,0.4) inset,
      1px 0 0 rgba(255,255,255,0.06) inset,
      -1px 0 0 rgba(0,0,0,0.3) inset,
      0 4px 8px rgba(0,0,0,0.5),
      0 1px 2px rgba(0,0,0,0.4);
  }
}
`
