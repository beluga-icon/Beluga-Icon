export const className = 'ppi-style-aurora'
export const css = `
/* Aurora borealis — animated hue-shifting gradient with optional color injection */
@keyframes ppi-sk-aurora-shift {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}

.ppi-style-aurora {
  border-radius: 50%;
  padding: 14px;
  background: linear-gradient(
    -45deg,
    var(--ppi-c-a, #06b6d4),
    var(--ppi-c-b, #8b5cf6),
    var(--ppi-c-c, #f43f5e),
    var(--ppi-c-b, #8b5cf6),
    var(--ppi-c-a, #06b6d4)
  );
  background-size: 300% 300%;
  animation: ppi-sk-aurora-shift 5s ease infinite;
  border: 1px solid rgba(255,255,255,0.25);
  box-shadow:
    0 0 0 2px rgba(255,255,255,0.12),
    0 4px 20px color-mix(in srgb, var(--ppi-c-b, #8b5cf6) 40%, transparent);
}

.ppi-style-aurora > svg {
  color: rgba(255,255,255,0.95);
  stroke: rgba(255,255,255,0.95);
}
`
