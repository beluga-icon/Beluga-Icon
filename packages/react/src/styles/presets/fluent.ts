export const className = 'ppi-style-fluent'
export const css = `
/* Windows Fluent Design — acrylic material with layered noise-like depth */
.ppi-style-fluent {
  border-radius: 8px;
  padding: 14px;
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.14) 0%,
      rgba(255,255,255,0.04) 100%
    ),
    color-mix(in srgb, currentColor 6%, rgba(255,255,255,0.72));
  backdrop-filter: blur(20px) saturate(1.6);
  -webkit-backdrop-filter: blur(20px) saturate(1.6);
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow:
    0 0 0 0.5px color-mix(in srgb, currentColor 10%, rgba(0,0,0,0.06)),
    0 2px 4px rgba(0,0,0,0.06),
    0 8px 16px color-mix(in srgb, currentColor 8%, rgba(0,0,0,0.06));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-fluent {
    background:
      linear-gradient(
        145deg,
        rgba(255,255,255,0.08) 0%,
        rgba(255,255,255,0.02) 100%
      ),
      color-mix(in srgb, currentColor 8%, rgba(32,32,32,0.82));
    border-color: rgba(255,255,255,0.1);
    box-shadow:
      0 0 0 0.5px rgba(255,255,255,0.05),
      0 2px 4px rgba(0,0,0,0.3),
      0 8px 16px rgba(0,0,0,0.25);
  }
}
`
