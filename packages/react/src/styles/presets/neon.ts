export const className = 'ppi-style-neon'
export const css = `
.ppi-style-neon {
  border-radius: 50%;
  padding: 14px;
  border: 1.5px solid currentColor;
  background: color-mix(in srgb, currentColor 6%, transparent);
  filter:
    drop-shadow(0 0 3px color-mix(in srgb, currentColor 80%, transparent))
    drop-shadow(0 0 8px color-mix(in srgb, currentColor 45%, transparent))
    drop-shadow(0 0 18px color-mix(in srgb, currentColor 20%, transparent));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-neon {
    background: color-mix(in srgb, currentColor 10%, transparent);
    filter:
      drop-shadow(0 0 4px color-mix(in srgb, currentColor 90%, transparent))
      drop-shadow(0 0 12px color-mix(in srgb, currentColor 60%, transparent))
      drop-shadow(0 0 28px color-mix(in srgb, currentColor 30%, transparent));
  }
}
`
