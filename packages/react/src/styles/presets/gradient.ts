export const className = 'ppi-style-gradient'
export const css = `
.ppi-style-gradient {
  border-radius: 50%;
  padding: 14px;
  background: linear-gradient(
    135deg,
    var(--ppi-c-from, #4f46e5) 0%,
    var(--ppi-c-mid, #7c3aed) 45%,
    var(--ppi-c-to, #c026d3) 100%
  );
  outline: 1.5px solid rgba(255,255,255,0.15);
  outline-offset: -2px;
}

.ppi-style-gradient > svg {
  color: #fff;
  stroke: #fff;
}
`
