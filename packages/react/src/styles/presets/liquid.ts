export const className = 'ppi-style-liquid'
export const css = `
/* Apple Liquid Glass ─────────────────────────────────────────────────────── */

.ppi-style-liquid {
  position: relative;
  padding: 18px;
  border-radius: 36%;

  /*
   * Layered glass background:
   * 1. Top-left specular catchlight  — brightest point on the glass surface
   * 2. Bottom-right secondary glint  — opposite-corner depth reflection
   * 3. Edge inner bloom              — internal light scatter on the rim
   * 4. currentColor tint             — ambient colour absorption
   */
  background:
    radial-gradient(
      ellipse 88% 48% at 22% 8%,
      rgba(255,255,255,0.62) 0%,
      rgba(255,255,255,0.22) 28%,
      transparent 60%
    ),
    radial-gradient(
      ellipse 48% 32% at 80% 90%,
      rgba(255,255,255,0.2) 0%,
      rgba(255,255,255,0.06) 40%,
      transparent 65%
    ),
    radial-gradient(
      ellipse 100% 100% at 50% 50%,
      rgba(255,255,255,0.06) 0%,
      transparent 70%
    ),
    color-mix(in srgb, currentColor 7%, rgba(255,255,255,0.07));

  backdrop-filter: blur(28px) saturate(1.9) brightness(1.06);
  -webkit-backdrop-filter: blur(28px) saturate(1.9) brightness(1.06);

  border: 1px solid color-mix(in srgb, currentColor 10%, rgba(255,255,255,0.38));

  box-shadow:
    inset 0 2px 0 rgba(255,255,255,0.65),
    inset 0 -1.5px 0 rgba(255,255,255,0.1),
    inset 0 0 28px rgba(255,255,255,0.05);
}

@media (prefers-color-scheme: dark) {
  .ppi-style-liquid {
    background:
      radial-gradient(
        ellipse 88% 48% at 22% 8%,
        rgba(255,255,255,0.32) 0%,
        rgba(255,255,255,0.1) 28%,
        transparent 60%
      ),
      radial-gradient(
        ellipse 48% 32% at 80% 90%,
        rgba(255,255,255,0.12) 0%,
        rgba(255,255,255,0.03) 40%,
        transparent 65%
      ),
      radial-gradient(
        ellipse 100% 100% at 50% 50%,
        rgba(255,255,255,0.03) 0%,
        transparent 70%
      ),
      color-mix(in srgb, currentColor 10%, rgba(255,255,255,0.03));

    backdrop-filter: blur(28px) saturate(2.1) brightness(1.14);
    -webkit-backdrop-filter: blur(28px) saturate(2.1) brightness(1.14);

    border-color: color-mix(in srgb, currentColor 12%, rgba(255,255,255,0.18));

    box-shadow:
      inset 0 2px 0 rgba(255,255,255,0.3),
      inset 0 -1.5px 0 rgba(255,255,255,0.05),
      inset 0 0 28px rgba(255,255,255,0.02);
  }
}
`
