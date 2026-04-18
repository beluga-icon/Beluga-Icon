export const className = 'ppi-style-glow'
export const css = `
/* Ambient diffuse glow — no hard border, soft halo radiates outward */
@keyframes ppi-sk-glow-pulse {
  0%, 100% {
    filter:
      drop-shadow(0 0 4px color-mix(in srgb, currentColor 60%, transparent))
      drop-shadow(0 0 12px color-mix(in srgb, currentColor 35%, transparent))
      drop-shadow(0 0 28px color-mix(in srgb, currentColor 15%, transparent));
  }
  50% {
    filter:
      drop-shadow(0 0 6px color-mix(in srgb, currentColor 80%, transparent))
      drop-shadow(0 0 18px color-mix(in srgb, currentColor 50%, transparent))
      drop-shadow(0 0 40px color-mix(in srgb, currentColor 25%, transparent));
  }
}

.ppi-style-glow {
  border-radius: 50%;
  padding: 14px;
  background: color-mix(in srgb, currentColor 8%, transparent);
  animation: ppi-sk-glow-pulse 2.4s ease-in-out infinite;
}
`
