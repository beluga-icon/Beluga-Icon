import type { AnimKey } from './types'

// ---------------------------------------------------------------------------
// Speed → duration lookup
// ---------------------------------------------------------------------------

const SPEED_DURATION: Record<string, Record<string, string>> = {
  spin:         { slow: '2s',   normal: '1s',    fast: '0.4s'  },
  pulse:        { slow: '2s',   normal: '1s',    fast: '0.4s'  },
  bounce:       { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  shake:        { slow: '0.9s', normal: '0.5s',  fast: '0.25s' },
  wiggle:       { slow: '1s',   normal: '0.6s',  fast: '0.3s'  },
  ping:         { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  blink:        { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  float:        { slow: '4s',   normal: '3s',    fast: '1.5s'  },
  heartbeat:    { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  flash:        { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  tada:         { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  jello:        { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  swing:        { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  rubberBand:   { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  flipX:        { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  breathe:      { slow: '6s',   normal: '4s',    fast: '2s'    },
  draw:         { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  erase:        { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  trace:        { slow: '4s',   normal: '2s',    fast: '1s'    },
  neon:         { slow: '3s',   normal: '2s',    fast: '0.8s'  },
  glitch:       { slow: '0.8s', normal: '0.4s',  fast: '0.2s'  },
  wobble:       { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  roll:         { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  zoomIn:       { slow: '0.8s', normal: '0.5s',  fast: '0.25s' },
  fadeUp:       { slow: '0.8s', normal: '0.5s',  fast: '0.25s' },
  flicker:      { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  hologram:     { slow: '8s',   normal: '4s',    fast: '2s'    },
  electric:     { slow: '1s',   normal: '0.5s',  fast: '0.25s' },
  ghost:        { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  levitate:     { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  burst:        { slow: '1s',   normal: '0.6s',  fast: '0.3s'  },
  heat:         { slow: '3.5s', normal: '2s',    fast: '1s'    },
  crystal:      { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  springPop:    { slow: '1.2s', normal: '0.7s',  fast: '0.4s'  },
  decay:        { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  magnetPulse:  { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  wobbleSpring: { slow: '2.5s', normal: '1.5s',  fast: '0.8s'  },
}

export function resolveAnimDuration(
  animType: string,
  speed: string,
  duration?: number,
): string {
  if (duration != null) return `${duration}ms`
  return SPEED_DURATION[animType]?.[speed] ?? '1s'
}

// ---------------------------------------------------------------------------
// Named spring / elastic easing presets
// ---------------------------------------------------------------------------

const SPRING_EASINGS: Record<string, string> = {
  'spring-soft':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'spring-medium': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'spring-stiff':  'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'bounce-soft':   'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
  'elastic':       'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
}

export function resolveEasing(easing?: string): string | undefined {
  if (!easing) return undefined
  return SPRING_EASINGS[easing] ?? easing
}

// ---------------------------------------------------------------------------
// Runtime CSS injection (SSR-safe guard)
// ---------------------------------------------------------------------------

const ANIM_STYLE_ID = 'ppi-animations'

const CSS = `
  @keyframes ppi-spin {
    from { transform: var(--ppi-bt,) rotate(0deg); }
    to   { transform: var(--ppi-bt,) rotate(360deg); }
  }
  @keyframes ppi-pulse {
    0%,100% { transform: var(--ppi-bt,) scale(1); }
    50%     { transform: var(--ppi-bt,) scale(1.15); }
  }
  @keyframes ppi-bounce {
    0%,100% { transform: var(--ppi-bt,) translateY(0); animation-timing-function: ease-in; }
    50%     { transform: var(--ppi-bt,) translateY(-6px); animation-timing-function: ease-out; }
  }
  @keyframes ppi-shake {
    0%,100% { transform: var(--ppi-bt,) translateX(0); }
    20%     { transform: var(--ppi-bt,) translateX(-4px); }
    40%     { transform: var(--ppi-bt,) translateX(4px); }
    60%     { transform: var(--ppi-bt,) translateX(-4px); }
    80%     { transform: var(--ppi-bt,) translateX(4px); }
  }
  @keyframes ppi-wiggle {
    0%,100% { transform: var(--ppi-bt,) rotate(0deg); }
    25%     { transform: var(--ppi-bt,) rotate(-10deg); }
    75%     { transform: var(--ppi-bt,) rotate(10deg); }
  }
  @keyframes ppi-ping {
    0%       { transform: var(--ppi-bt,) scale(1);   opacity: 1; }
    75%,100% { transform: var(--ppi-bt,) scale(1.3); opacity: 0; }
  }
  @keyframes ppi-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
  @keyframes ppi-float {
    0%,100% { transform: var(--ppi-bt,) translateY(0); }
    50%     { transform: var(--ppi-bt,) translateY(-4px); }
  }
  @keyframes ppi-heartbeat {
    0%       { transform: var(--ppi-bt,) scale(1); }
    14%      { transform: var(--ppi-bt,) scale(1.15); }
    28%      { transform: var(--ppi-bt,) scale(1); }
    42%      { transform: var(--ppi-bt,) scale(1.3); }
    70%,100% { transform: var(--ppi-bt,) scale(1); }
  }
  @keyframes ppi-flash {
    0%,100% { opacity: 1; }
    25%,75% { opacity: 0; }
    50%     { opacity: 1; }
  }
  @keyframes ppi-tada {
    0%              { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
    10%,20%         { transform: var(--ppi-bt,) scale(0.9) rotate(-3deg); }
    30%,50%,70%,90% { transform: var(--ppi-bt,) scale(1.1) rotate(3deg); }
    40%,60%,80%     { transform: var(--ppi-bt,) scale(1.1) rotate(-3deg); }
    100%            { transform: var(--ppi-bt,) scale(1) rotate(0deg); }
  }
  @keyframes ppi-jello {
    0%,100% { transform: var(--ppi-bt,) skewX(0deg) skewY(0deg); }
    11.1%   { transform: var(--ppi-bt,) skewX(-12.5deg) skewY(-12.5deg); }
    22.2%   { transform: var(--ppi-bt,) skewX(6.25deg) skewY(6.25deg); }
    33.3%   { transform: var(--ppi-bt,) skewX(-3.125deg) skewY(-3.125deg); }
    44.4%   { transform: var(--ppi-bt,) skewX(1.5625deg) skewY(1.5625deg); }
    55.5%   { transform: var(--ppi-bt,) skewX(-0.78125deg) skewY(-0.78125deg); }
    66.6%   { transform: var(--ppi-bt,) skewX(0.390625deg) skewY(0.390625deg); }
    77.7%   { transform: var(--ppi-bt,) skewX(-0.1953125deg) skewY(-0.1953125deg); }
  }
  @keyframes ppi-swing {
    0%   { transform: var(--ppi-bt,) rotate(0deg); }
    20%  { transform: var(--ppi-bt,) rotate(15deg); }
    40%  { transform: var(--ppi-bt,) rotate(-10deg); }
    60%  { transform: var(--ppi-bt,) rotate(5deg); }
    80%  { transform: var(--ppi-bt,) rotate(-5deg); }
    100% { transform: var(--ppi-bt,) rotate(0deg); }
  }
  @keyframes ppi-rubber-band {
    0%   { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
    30%  { transform: var(--ppi-bt,) scaleX(1.25) scaleY(0.75); }
    40%  { transform: var(--ppi-bt,) scaleX(0.75) scaleY(1.25); }
    50%  { transform: var(--ppi-bt,) scaleX(1.15) scaleY(0.85); }
    65%  { transform: var(--ppi-bt,) scaleX(0.95) scaleY(1.05); }
    75%  { transform: var(--ppi-bt,) scaleX(1.05) scaleY(0.95); }
    100% { transform: var(--ppi-bt,) scaleX(1) scaleY(1); }
  }
  @keyframes ppi-flip-x {
    0%   { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
    40%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-20deg); animation-timing-function: ease-in; }
    60%  { transform: var(--ppi-bt,) perspective(400px) rotateY(10deg); }
    80%  { transform: var(--ppi-bt,) perspective(400px) rotateY(-5deg); }
    100% { transform: var(--ppi-bt,) perspective(400px) rotateY(0deg); }
  }
  @keyframes ppi-breathe {
    0%,100% { opacity: 1; }
    50%     { opacity: 0.4; }
  }
  @keyframes ppi-neon {
    0%, 100% {
      filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 6px currentColor);
      opacity: 0.9;
    }
    50% {
      filter: drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor) drop-shadow(0 0 20px currentColor);
      opacity: 1;
    }
  }
  @keyframes ppi-glitch {
    0%,100% { transform: var(--ppi-bt,) translateX(0); filter: none; }
    2%      { transform: var(--ppi-bt,) translateX(-3px); filter: hue-rotate(90deg); }
    4%      { transform: var(--ppi-bt,) translateX(3px) skewX(2deg); filter: hue-rotate(180deg) saturate(2); }
    6%      { transform: var(--ppi-bt,) translateX(-2px); filter: hue-rotate(270deg); }
    8%      { transform: var(--ppi-bt,) translateX(0); filter: none; }
    52%     { transform: var(--ppi-bt,) translateX(0); filter: none; }
    54%     { transform: var(--ppi-bt,) translateX(2px) skewX(-1deg); filter: hue-rotate(90deg) saturate(1.5); }
    56%     { transform: var(--ppi-bt,) translateX(-3px); filter: hue-rotate(180deg); }
    58%     { transform: var(--ppi-bt,) translateX(0); filter: none; }
  }
  @keyframes ppi-wobble {
    0%   { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); }
    15%  { transform: var(--ppi-bt,) translateX(-6px) rotateZ(-5deg); }
    30%  { transform: var(--ppi-bt,) translateX(5px) rotateZ(3deg); }
    45%  { transform: var(--ppi-bt,) translateX(-3px) rotateZ(-2deg); }
    60%  { transform: var(--ppi-bt,) translateX(2px) rotateZ(1deg); }
    100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); }
  }
  @keyframes ppi-roll {
    0%   { transform: var(--ppi-bt,) translateX(-100%) rotateZ(-360deg); opacity: 0; }
    100% { transform: var(--ppi-bt,) translateX(0) rotateZ(0deg); opacity: 1; }
  }
  @keyframes ppi-zoom-in {
    0%   { transform: var(--ppi-bt,) scale(0.3); opacity: 0; }
    100% { transform: var(--ppi-bt,) scale(1); opacity: 1; }
  }
  @keyframes ppi-fade-up {
    0%   { transform: var(--ppi-bt,) translateY(-16px); opacity: 0; }
    100% { transform: var(--ppi-bt,) translateY(0); opacity: 1; }
  }
  @keyframes ppi-flicker {
    0%,100% { opacity:1;    filter:brightness(1); }
    5%      { opacity:0.85; filter:brightness(0.8); }
    10%     { opacity:1;    filter:brightness(1.2); }
    15%     { opacity:0.2;  filter:brightness(0.4); }
    20%     { opacity:1;    filter:brightness(1.3); }
    25%     { opacity:0.7;  filter:brightness(0.7); }
    30%     { opacity:1;    filter:brightness(1); }
    68%     { opacity:1;    filter:brightness(1); }
    70%     { opacity:0.15; filter:brightness(0.3); }
    72%     { opacity:1;    filter:brightness(1.4); }
    74%     { opacity:0.6;  filter:brightness(0.6); }
    76%     { opacity:1;    filter:brightness(1.1); }
    78%     { opacity:0.3;  filter:brightness(0.5); }
    80%     { opacity:1;    filter:brightness(1); }
  }
  @keyframes ppi-hologram {
    0%   { filter:hue-rotate(0deg)   brightness(1);   opacity:0.9;  transform:var(--ppi-bt,) skewX(0deg); }
    25%  { filter:hue-rotate(90deg)  brightness(1.2); opacity:0.65; transform:var(--ppi-bt,) skewX(1deg); }
    50%  { filter:hue-rotate(180deg) brightness(0.8); opacity:1;    transform:var(--ppi-bt,) skewX(-1deg); }
    75%  { filter:hue-rotate(270deg) brightness(1.3); opacity:0.6;  transform:var(--ppi-bt,) skewX(0.5deg); }
    100% { filter:hue-rotate(360deg) brightness(1);   opacity:0.9;  transform:var(--ppi-bt,) skewX(0deg); }
  }
  @keyframes ppi-electric {
    0%,100% { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1)   hue-rotate(0deg); }
    5%      { transform:var(--ppi-bt,) translate(-2px,1px); filter:brightness(2.5) hue-rotate(185deg) saturate(4); }
    10%     { transform:var(--ppi-bt,) translate(2px,-1px); filter:brightness(1.8) hue-rotate(195deg); }
    15%     { transform:var(--ppi-bt,) translate(-1px,2px); filter:brightness(3)   hue-rotate(210deg) saturate(5); }
    20%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1)   hue-rotate(0deg); }
    78%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1); }
    80%     { transform:var(--ppi-bt,) translate(2px,-2px); filter:brightness(2.2) hue-rotate(190deg) saturate(3); }
    83%     { transform:var(--ppi-bt,) translate(-2px,1px); filter:brightness(3.5) hue-rotate(200deg); }
    86%     { transform:var(--ppi-bt,) translate(1px,-1px); filter:brightness(1.5) hue-rotate(185deg); }
    89%     { transform:var(--ppi-bt,) translate(0,0);      filter:brightness(1); }
  }
  @keyframes ppi-ghost {
    0%,100% { opacity:1;    filter:blur(0px)   brightness(1);   transform:var(--ppi-bt,) translateY(0); }
    25%     { opacity:0.35; filter:blur(1.5px) brightness(1.2); transform:var(--ppi-bt,) translateY(-3px); }
    50%     { opacity:0.75; filter:blur(0.5px) brightness(0.9); transform:var(--ppi-bt,) translateY(-1px); }
    75%     { opacity:0.25; filter:blur(2px)   brightness(1.1); transform:var(--ppi-bt,) translateY(-4px); }
  }
  @keyframes ppi-levitate {
    0%,100% { transform:var(--ppi-bt,) perspective(160px) translateY(0)    rotateX(0deg); filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
    50%     { transform:var(--ppi-bt,) perspective(160px) translateY(-7px) rotateX(8deg); filter:drop-shadow(0 10px 14px rgba(0,0,0,0.12)); }
  }
  @keyframes ppi-burst {
    0%   { transform:var(--ppi-bt,) scale(1);    filter:brightness(1)   saturate(1)   blur(0px); opacity:1; }
    12%  { transform:var(--ppi-bt,) scale(1.35); filter:brightness(2)   saturate(2.5) blur(1px); opacity:0.85; }
    28%  { transform:var(--ppi-bt,) scale(0.92); filter:brightness(1.1) saturate(1.2) blur(0px); opacity:1; }
    42%  { transform:var(--ppi-bt,) scale(1.06); filter:brightness(1.2); }
    100% { transform:var(--ppi-bt,) scale(1);    filter:brightness(1)   saturate(1); opacity:1; }
  }
  @keyframes ppi-heat {
    0%,100% { transform:var(--ppi-bt,) scaleX(1)    scaleY(1);    filter:blur(0px)    brightness(1); }
    20%     { transform:var(--ppi-bt,) scaleX(1.02) scaleY(0.99); filter:blur(0.3px)  brightness(1.05); }
    40%     { transform:var(--ppi-bt,) scaleX(0.99) scaleY(1.01); filter:blur(0.5px)  brightness(0.97); }
    60%     { transform:var(--ppi-bt,) scaleX(1.01) scaleY(0.98); filter:blur(0.25px) brightness(1.03); }
    80%     { transform:var(--ppi-bt,) scaleX(0.98) scaleY(1.02); filter:blur(0.4px)  brightness(1.01); }
  }
  @keyframes ppi-crystal {
    0%,100% { filter: brightness(1)   drop-shadow(0 0 0px transparent); }
    20%     { filter: brightness(1.4) drop-shadow(-2px 0 4px #ff6b6b) drop-shadow(2px 0 4px #6bc5ff); }
    40%     { filter: brightness(1.6) drop-shadow(0 -2px 6px #a8ff6b) drop-shadow(0 2px 6px #e06bff); }
    60%     { filter: brightness(1.3) drop-shadow(2px 0 4px #ffed6b) drop-shadow(-2px 0 4px #6bffed); }
    80%     { filter: brightness(1.5) drop-shadow(0 2px 5px #6b8fff) drop-shadow(0 -2px 5px #ff6b8f); }
  }
  .ppi-spin        { animation: ppi-spin        var(--ppi-dur, 1s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-pulse       { animation: ppi-pulse       var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-bounce      { animation: ppi-bounce      var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-shake       { animation: ppi-shake       var(--ppi-dur, 0.5s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-wiggle      { animation: ppi-wiggle      var(--ppi-dur, 0.6s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-ping        { animation: ppi-ping        var(--ppi-dur, 1s)   ease-out    var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-blink       { animation: ppi-blink       var(--ppi-dur, 1s)   step-start  var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-float       { animation: ppi-float       var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-heartbeat   { animation: ppi-heartbeat   var(--ppi-dur, 1.2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-flash       { animation: ppi-flash       var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-tada        { animation: ppi-tada        var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-jello       { animation: ppi-jello       var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-swing       { animation: ppi-swing       var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); transform-origin: top center; }
  .ppi-rubber-band { animation: ppi-rubber-band var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-flip-x      { animation: ppi-flip-x      var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-breathe     { animation: ppi-breathe     var(--ppi-dur, 4s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-neon        { animation: ppi-neon        var(--ppi-dur, 2s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-glitch      { animation: ppi-glitch      var(--ppi-dur, 0.4s) linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-wobble      { animation: ppi-wobble      var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-roll        { animation: ppi-roll        var(--ppi-dur, 0.8s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
  .ppi-zoom-in     { animation: ppi-zoom-in     var(--ppi-dur, 0.5s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
  .ppi-fade-up     { animation: ppi-fade-up     var(--ppi-dur, 0.5s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
  .ppi-flicker     { animation: ppi-flicker     var(--ppi-dur, 3s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-hologram    { animation: ppi-hologram    var(--ppi-dur, 4s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-electric    { animation: ppi-electric    var(--ppi-dur, 0.5s) linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-ghost       { animation: ppi-ghost       var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-levitate    { animation: ppi-levitate    var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-burst       { animation: ppi-burst       var(--ppi-dur, 0.6s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1)        both; }
  .ppi-heat        { animation: ppi-heat        var(--ppi-dur, 2s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  .ppi-crystal     { animation: ppi-crystal     var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
  @media (prefers-reduced-motion: reduce) {
    .ppi-spin, .ppi-pulse, .ppi-bounce, .ppi-shake,
    .ppi-wiggle, .ppi-ping, .ppi-blink, .ppi-float,
    .ppi-heartbeat, .ppi-flash, .ppi-tada, .ppi-jello,
    .ppi-swing, .ppi-rubber-band, .ppi-flip-x, .ppi-breathe,
    .ppi-neon, .ppi-glitch, .ppi-wobble, .ppi-roll, .ppi-zoom-in, .ppi-fade-up,
    .ppi-flicker, .ppi-hologram, .ppi-electric, .ppi-ghost,
    .ppi-levitate, .ppi-burst, .ppi-heat, .ppi-crystal {
      animation: none;
    }
  }
`

export function ensureAnimStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(ANIM_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = ANIM_STYLE_ID
  el.textContent = CSS
  document.head.appendChild(el)
}

// Re-export AnimKey so callers don't need a separate import.
export type { AnimKey }
