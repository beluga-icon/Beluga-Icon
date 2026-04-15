export const className = 'ppi-flicker'
export const durations = { slow: '5s', normal: '3s', fast: '1.5s' } as const
export const css = `
  @keyframes ppi-flicker {
    /*
     * Neon/fluorescent tube failure pattern with three distinct events:
     *
     * Cluster 1 (4%–22%): Startup stutter — rapid voltage instability
     *   as the tube warms up. Multiple quick drops and brightness spikes,
     *   ending in a brief recovery. Mimics cold-cathode fluorescent startup.
     *
     * Cluster 2 (45%–55%): Partial dim event — the tube partially loses
     *   pressure and doesn't fully recover. Opacity stays low longer before
     *   coming back. No full blackout, just a sustained dim.
     *
     * Cluster 3 (72%–84%): Full failure + recovery — deepest drop (near
     *   blackout), followed by an over-voltage recovery spike (brightness
     *   above 1), then stabilisation. The "deep drop then bright spike" is
     *   the characteristic signature of a failing neon sign.
     *
     * Stable periods between clusters (22%–45%, 55%–72%, 84%–100%) are
     *   fully lit — the contrast between stable and unstable makes each
     *   event feel deliberate rather than random noise.
     */
    0%,100% { opacity: 1;    filter: brightness(1); }

    /* Cluster 1 — startup stutter */
    4%   { opacity: 0.8;  filter: brightness(0.75); }
    6%   { opacity: 1;    filter: brightness(1.25); }
    10%  { opacity: 0.15; filter: brightness(0.3); }
    12%  { opacity: 1;    filter: brightness(1.35); }
    16%  { opacity: 0.6;  filter: brightness(0.65); }
    18%  { opacity: 1;    filter: brightness(1.1); }
    22%  { opacity: 1;    filter: brightness(1); }

    /* Cluster 2 — partial dim */
    45%  { opacity: 1;    filter: brightness(1); }
    47%  { opacity: 0.45; filter: brightness(0.55); }
    52%  { opacity: 0.4;  filter: brightness(0.5); }
    55%  { opacity: 1;    filter: brightness(1); }

    /* Cluster 3 — full failure + recovery */
    72%  { opacity: 1;    filter: brightness(1); }
    74%  { opacity: 0.1;  filter: brightness(0.2); }
    77%  { opacity: 0.05; filter: brightness(0.15); }
    80%  { opacity: 1;    filter: brightness(1.5); }
    82%  { opacity: 0.85; filter: brightness(0.9); }
    84%  { opacity: 1;    filter: brightness(1); }
  }
  .ppi-flicker {
    animation: ppi-flicker var(--ppi-dur, 3s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
  }
`
