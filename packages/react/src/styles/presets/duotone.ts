export const className = 'ppi-style-duotone'
export const css = `
/* Duotone — diagonal two-color split with soft blend in the middle */
.ppi-style-duotone {
  border-radius: 50%;
  padding: 14px;
  background: linear-gradient(
    135deg,
    var(--ppi-c-a, #0ea5e9) 0%,
    color-mix(in srgb, var(--ppi-c-a, #0ea5e9) 50%, var(--ppi-c-b, #8b5cf6)) 50%,
    var(--ppi-c-b, #8b5cf6) 100%
  );
  outline: 1.5px solid rgba(255,255,255,0.18);
  outline-offset: -2px;
}

.ppi-style-duotone > svg {
  color: rgba(255,255,255,0.92);
  stroke: rgba(255,255,255,0.92);
  mix-blend-mode: overlay;
}
`
