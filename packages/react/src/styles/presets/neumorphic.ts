export const className = 'ppi-style-neumorphic'
export const css = `
/* Soft UI / neumorphism — dual shadows from opposite corners on matching background */
.ppi-style-neumorphic {
  border-radius: 16px;
  padding: 14px;
  background: color-mix(in srgb, currentColor 5%, Canvas);
  box-shadow:
    5px 5px 12px color-mix(in srgb, currentColor 18%, rgba(0,0,0,0.18)),
    -5px -5px 12px rgba(255,255,255,0.7);
  border: 1px solid color-mix(in srgb, currentColor 6%, rgba(255,255,255,0.5));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-neumorphic {
    box-shadow:
      5px 5px 12px rgba(0,0,0,0.45),
      -5px -5px 12px color-mix(in srgb, currentColor 12%, rgba(255,255,255,0.04));
    border-color: color-mix(in srgb, currentColor 8%, rgba(255,255,255,0.06));
  }
}
`
