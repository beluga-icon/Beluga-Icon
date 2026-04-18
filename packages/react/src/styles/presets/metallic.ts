export const className = 'ppi-style-metallic'
export const css = `
/* Chrome / metallic — radial specular highlight + angled gloss band */
.ppi-style-metallic {
  border-radius: 14px;
  padding: 14px;
  background:
    radial-gradient(
      ellipse 70% 55% at 30% 20%,
      rgba(255,255,255,0.55) 0%,
      rgba(255,255,255,0.1) 35%,
      transparent 60%
    ),
    linear-gradient(
      160deg,
      var(--ppi-c-light, #e2e8f0) 0%,
      var(--ppi-c-base, #94a3b8) 40%,
      var(--ppi-c-dark, #475569) 100%
    );
  border: 1px solid rgba(255,255,255,0.45);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.7) inset,
    0 -1px 0 rgba(0,0,0,0.2) inset,
    0 4px 12px rgba(0,0,0,0.25),
    0 1px 3px rgba(0,0,0,0.2);
}

.ppi-style-metallic > svg {
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.35));
}
`
