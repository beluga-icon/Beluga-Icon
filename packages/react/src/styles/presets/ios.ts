export const className = 'ppi-style-ios'
export const css = `
/* iOS App Store squircle — superellipse corners, subtle specular on top edge */
.ppi-style-ios {
  border-radius: 27.6%;
  padding: 14px;
  background:
    radial-gradient(
      ellipse 90% 40% at 50% 0%,
      rgba(255,255,255,0.22) 0%,
      transparent 70%
    ),
    color-mix(in srgb, currentColor 12%, Canvas);
  border: 1px solid color-mix(in srgb, currentColor 18%, rgba(0,0,0,0.08));
  box-shadow:
    0 1px 0 rgba(255,255,255,0.5) inset,
    0 2px 6px color-mix(in srgb, currentColor 10%, rgba(0,0,0,0.1)),
    0 8px 20px color-mix(in srgb, currentColor 12%, rgba(0,0,0,0.08));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-ios {
    background:
      radial-gradient(
        ellipse 90% 40% at 50% 0%,
        rgba(255,255,255,0.1) 0%,
        transparent 70%
      ),
      color-mix(in srgb, currentColor 16%, rgba(30,30,30,0.9));
    border-color: color-mix(in srgb, currentColor 20%, rgba(255,255,255,0.08));
    box-shadow:
      0 1px 0 rgba(255,255,255,0.1) inset,
      0 2px 6px rgba(0,0,0,0.4),
      0 8px 20px rgba(0,0,0,0.35);
  }
}
`
