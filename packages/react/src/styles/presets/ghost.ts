export const className = 'ppi-style-ghost'
export const css = `
/* Ultra-subtle tint, no border — ideal as hover/inactive state base */
.ppi-style-ghost {
  border-radius: 10px;
  padding: 10px;
  background: color-mix(in srgb, currentColor 6%, transparent);
  transition: background 150ms ease;
}

.ppi-style-ghost:hover {
  background: color-mix(in srgb, currentColor 12%, transparent);
}
`
