import { resolveSize } from '@beluga-icon/core'
import type { IconBaseProps, IconFlip } from '@beluga-icon/core'
import { forwardRef, useEffect, useRef, type SVGProps } from 'react'
import { useIconContext } from '../IconProvider'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth' | 'rotate' | 'speed' | 'strokeLinecap' | 'strokeLinejoin' | 'opacity'> {}

// ---------------------------------------------------------------------------
// Module-scope helpers
// ---------------------------------------------------------------------------

const VARIANT_PRESETS = {
  outline: { multiplier: 1,    linecap: 'round' as const, linejoin: 'round' as const },
  bold:    { multiplier: 1.25, linecap: 'round' as const, linejoin: 'round' as const },
  sharp:   { multiplier: 1,    linecap: 'butt'  as const, linejoin: 'miter' as const },
}

const ANIM_STYLE_ID = 'ppi-animations'

function ensureAnimStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(ANIM_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = ANIM_STYLE_ID
  el.textContent = `
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
    .ppi-spin   { animation: ppi-spin   var(--ppi-dur, 1s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-pulse  { animation: ppi-pulse  var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-bounce { animation: ppi-bounce var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-shake  { animation: ppi-shake  var(--ppi-dur, 0.5s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-wiggle { animation: ppi-wiggle var(--ppi-dur, 0.6s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-ping   { animation: ppi-ping   var(--ppi-dur, 1s)   ease-out    var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-blink  { animation: ppi-blink  var(--ppi-dur, 1s)   step-start  var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-float  { animation: ppi-float  var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
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
    .ppi-heartbeat   { animation: ppi-heartbeat   var(--ppi-dur, 1.2s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-flash       { animation: ppi-flash        var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-tada        { animation: ppi-tada         var(--ppi-dur, 0.8s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-jello       { animation: ppi-jello        var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-swing       { animation: ppi-swing        var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); transform-origin: top center; }
    .ppi-rubber-band { animation: ppi-rubber-band  var(--ppi-dur, 0.9s) ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-flip-x      { animation: ppi-flip-x       var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-breathe     { animation: ppi-breathe      var(--ppi-dur, 4s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
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
    .ppi-neon    { animation: ppi-neon    var(--ppi-dur, 2s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-glitch  { animation: ppi-glitch  var(--ppi-dur, 0.4s) linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-wobble  { animation: ppi-wobble  var(--ppi-dur, 1s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-roll    { animation: ppi-roll    var(--ppi-dur, 0.8s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
    .ppi-zoom-in { animation: ppi-zoom-in var(--ppi-dur, 0.5s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
    .ppi-fade-up { animation: ppi-fade-up var(--ppi-dur, 0.5s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1) both; }
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
    .ppi-flicker  { animation: ppi-flicker  var(--ppi-dur, 3s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-hologram { animation: ppi-hologram var(--ppi-dur, 4s)   linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-electric { animation: ppi-electric var(--ppi-dur, 0.5s) linear      var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-ghost    { animation: ppi-ghost    var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-levitate { animation: ppi-levitate var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-burst    { animation: ppi-burst    var(--ppi-dur, 0.6s) ease-out    var(--ppi-delay, 0s) var(--ppi-count, 1)        both; }
    .ppi-heat     { animation: ppi-heat     var(--ppi-dur, 2s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
    .ppi-crystal  { animation: ppi-crystal  var(--ppi-dur, 3s)   ease-in-out var(--ppi-delay, 0s) var(--ppi-count, infinite); }
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
  document.head.appendChild(el)
}

// Duration presets per animation type and speed
const SPEED_DURATION: Record<string, Record<string, string>> = {
  spin:   { slow: '2s',   normal: '1s',    fast: '0.4s' },
  pulse:  { slow: '2s',   normal: '1s',    fast: '0.4s' },
  bounce: { slow: '1.4s', normal: '0.8s',  fast: '0.4s' },
  shake:  { slow: '0.9s', normal: '0.5s',  fast: '0.25s' },
  wiggle: { slow: '1s',   normal: '0.6s',  fast: '0.3s' },
  ping:   { slow: '1.8s', normal: '1s',    fast: '0.5s' },
  blink:      { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  float:      { slow: '4s',   normal: '3s',    fast: '1.5s'  },
  heartbeat:  { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  flash:      { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  tada:       { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  jello:      { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  swing:      { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  rubberBand: { slow: '1.6s', normal: '0.9s',  fast: '0.45s' },
  flipX:      { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  breathe:    { slow: '6s',   normal: '4s',    fast: '2s'    },
  erase:      { slow: '2s',   normal: '1s',    fast: '0.5s'  },
  trace:      { slow: '4s',   normal: '2s',    fast: '1s'    },
  neon:       { slow: '3s',   normal: '2s',    fast: '0.8s'  },
  glitch:     { slow: '0.8s', normal: '0.4s',  fast: '0.2s'  },
  wobble:     { slow: '1.8s', normal: '1s',    fast: '0.5s'  },
  roll:       { slow: '1.4s', normal: '0.8s',  fast: '0.4s'  },
  zoomIn:     { slow: '0.8s', normal: '0.5s',  fast: '0.25s' },
  fadeUp:     { slow: '0.8s', normal: '0.5s',  fast: '0.25s' },
  flicker:    { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  hologram:   { slow: '8s',   normal: '4s',    fast: '2s'    },
  electric:   { slow: '1s',   normal: '0.5s',  fast: '0.25s' },
  ghost:      { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  levitate:   { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  burst:      { slow: '1s',   normal: '0.6s',  fast: '0.3s'  },
  heat:       { slow: '3.5s', normal: '2s',    fast: '1s'    },
  crystal:      { slow: '5s',   normal: '3s',    fast: '1.5s'  },
  springPop:    { slow: '1.2s', normal: '0.7s',  fast: '0.4s'  },
  decay:        { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  magnetPulse:  { slow: '2s',   normal: '1.2s',  fast: '0.6s'  },
  slingshot:    { slow: '1.2s', normal: '0.7s',  fast: '0.35s' },
  wobbleSpring: { slow: '2.5s', normal: '1.5s',  fast: '0.8s'  },
}

function resolveAnimDuration(animType: string, speed: string, duration?: number): string {
  if (duration != null) return `${duration}ms`
  return SPEED_DURATION[animType]?.[speed] ?? '1s'
}

// Named spring/elastic easing presets — resolved to CSS cubic-bezier values
const SPRING_EASINGS: Record<string, string> = {
  'spring-soft':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'spring-medium': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'spring-stiff':  'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'bounce-soft':   'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
  'elastic':       'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
}

function resolveEasing(easing?: string): string | undefined {
  if (!easing) return undefined
  return SPRING_EASINGS[easing] ?? easing
}

// ---------------------------------------------------------------------------
// WAAPI physics helpers — zero dependencies, pure math
// ---------------------------------------------------------------------------

/** Numerically integrate a spring ODE (Hooke's law + damping).
 *  Returns {offset, value} pairs where value is the animated property (scale or degrees). */
function simulateSpring(
  stiffness: number, damping: number, mass: number,
  from: number, to: number, frames: number,
): Array<{ offset: number; value: number }> {
  const dt = 1 / frames
  let x = from - to, v = 0
  return Array.from({ length: frames + 1 }, (_, i) => {
    const F = -stiffness * x - damping * v
    v += (F / mass) * dt
    x += v * dt
    return { offset: i / frames, value: to + x }
  })
}

/** Exponentially-decaying cosine oscillation — for rotational damping effects. */
function dampedOscillation(
  amplitude: number, frequency: number, damping: number, frames: number,
): Array<{ offset: number; value: number }> {
  return Array.from({ length: frames + 1 }, (_, i) => {
    const t = i / frames
    return { offset: t, value: amplitude * Math.exp(-damping * t) * Math.cos(2 * Math.PI * frequency * t) }
  })
}

/** WAAPI animation keys — these skip CSS class injection and are driven by el.animate() */
const WAAPI_ANIMS = new Set<string>(['springPop', 'decay', 'magnetPulse', 'slingshot', 'wobbleSpring'])

function buildWaapiKeyframes(key: string, baseTransform: string): Keyframe[] {
  const bt = baseTransform ? baseTransform + ' ' : ''
  switch (key) {
    case 'springPop': {
      const kf = simulateSpring(280, 18, 1, 0, 1, 40)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}scale(${f.value.toFixed(4)})` }))
    }
    case 'decay': {
      const kf = dampedOscillation(18, 2.5, 5, 50)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
    }
    case 'magnetPulse': {
      const half = simulateSpring(200, 14, 1, 1, 1.18, 20)
      const back = simulateSpring(200, 14, 1, 1.18, 1, 20)
      return [
        ...half.map(f => ({ offset: f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
        ...back.slice(1).map(f => ({ offset: 0.5 + f.offset * 0.5, transform: `${bt}scale(${f.value.toFixed(4)})` })),
      ]
    }
    case 'slingshot': {
      const compress = simulateSpring(400, 30, 1, 1, 0.6, 10)
      const release  = simulateSpring(300, 16, 1, 0.6, 1, 30)
      return [
        ...compress.map(f => ({ offset: f.offset * 0.25, transform: `${bt}scaleY(${f.value.toFixed(4)})` })),
        ...release.slice(1).map(f => ({ offset: 0.25 + f.offset * 0.75, transform: `${bt}scaleY(${f.value.toFixed(4)})` })),
      ]
    }
    case 'wobbleSpring': {
      const kf = dampedOscillation(12, 1.8, 3.5, 50)
      return kf.map(f => ({ offset: f.offset, transform: `${bt}rotate(${f.value.toFixed(2)}deg)` }))
    }
    default:
      return []
  }
}

// ---------------------------------------------------------------------------
// Draw animation styles (injected once, separately from main anim styles)
// ---------------------------------------------------------------------------

const DRAW_STYLE_ID = 'ppi-draw-styles'

function ensureDrawStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(DRAW_STYLE_ID)) return
  const el = document.createElement('style')
  el.id = DRAW_STYLE_ID
  el.textContent = `
    @keyframes ppi-draw {
      from { stroke-dashoffset: var(--ppi-draw-len, 100); }
      to   { stroke-dashoffset: 0; }
    }
    .ppi-draw path,
    .ppi-draw circle,
    .ppi-draw line,
    .ppi-draw polyline,
    .ppi-draw rect,
    .ppi-draw ellipse {
      stroke-dasharray: var(--ppi-draw-len, 100);
      stroke-dashoffset: var(--ppi-draw-len, 100);
      animation: ppi-draw var(--ppi-dur, 1s) ease-out var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
    }
    @keyframes ppi-erase {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: var(--ppi-draw-len, 100); }
    }
    .ppi-erase path, .ppi-erase circle, .ppi-erase line,
    .ppi-erase polyline, .ppi-erase rect, .ppi-erase ellipse {
      stroke-dasharray: var(--ppi-draw-len, 100);
      stroke-dashoffset: 0;
      animation: ppi-erase var(--ppi-dur, 1s) ease-in var(--ppi-delay, 0s) var(--ppi-count, 1) forwards;
    }
    @keyframes ppi-trace {
      0%   { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: calc(-1 * var(--ppi-draw-len, 100)); }
    }
    .ppi-trace path, .ppi-trace circle, .ppi-trace line,
    .ppi-trace polyline, .ppi-trace rect, .ppi-trace ellipse {
      stroke-dasharray: var(--ppi-trace-len, 30) calc(var(--ppi-draw-len, 100) - var(--ppi-trace-len, 30));
      stroke-dashoffset: 0;
      animation: ppi-trace var(--ppi-dur, 2s) linear var(--ppi-delay, 0s) var(--ppi-count, infinite);
    }
    @media (prefers-reduced-motion: reduce) {
      .ppi-draw path, .ppi-draw circle, .ppi-draw line,
      .ppi-draw polyline, .ppi-draw rect, .ppi-draw ellipse,
      .ppi-erase path, .ppi-erase circle, .ppi-erase line,
      .ppi-erase polyline, .ppi-erase rect, .ppi-erase ellipse,
      .ppi-trace path, .ppi-trace circle, .ppi-trace line,
      .ppi-trace polyline, .ppi-trace rect, .ppi-trace ellipse {
        animation: none;
        stroke-dasharray: unset;
        stroke-dashoffset: unset;
      }
    }
  `
  document.head.appendChild(el)
}

function buildBaseTransform(rotate?: number, flip?: IconFlip): string {
  const parts: string[] = []
  if (rotate != null && rotate !== 0) parts.push(`rotate(${rotate}deg)`)
  if (flip === 'horizontal') parts.push('scaleX(-1)')
  else if (flip === 'vertical') parts.push('scaleY(-1)')
  else if (flip === 'both') parts.push('scale(-1,-1)')
  return parts.join(' ')
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

type AnimKey = 'spin' | 'pulse' | 'bounce' | 'shake' | 'wiggle' | 'ping' | 'blink' | 'float'
             | 'heartbeat' | 'flash' | 'tada' | 'jello' | 'swing' | 'rubberBand' | 'flipX' | 'breathe'
             | 'erase' | 'trace' | 'neon' | 'glitch' | 'wobble' | 'roll' | 'zoomIn' | 'fadeUp'
             | 'flicker' | 'hologram' | 'electric' | 'ghost' | 'levitate' | 'burst' | 'heat' | 'crystal'
             | 'springPop' | 'decay' | 'magnetPulse' | 'slingshot' | 'wobbleSpring'
const ANIM_PRIORITY: AnimKey[] = [
  'spin', 'pulse', 'bounce', 'shake', 'wiggle', 'ping', 'blink', 'float',
  'heartbeat', 'flash', 'tada', 'jello', 'swing', 'rubberBand', 'flipX', 'breathe',
  'neon', 'glitch', 'trace', 'wobble', 'erase', 'roll', 'zoomIn', 'fadeUp',
  'flicker', 'hologram', 'electric', 'ghost', 'levitate', 'heat', 'crystal', 'burst',
  'springPop', 'decay', 'magnetPulse', 'slingshot', 'wobbleSpring',
]
const ANIM_CLASS: Partial<Record<AnimKey, string>> = {
  rubberBand: 'ppi-rubber-band',
  flipX:      'ppi-flip-x',
  zoomIn:     'ppi-zoom-in',
  fadeUp:     'ppi-fade-up',
}
function animClass(key: AnimKey): string {
  return ANIM_CLASS[key] ?? `ppi-${key}`
}

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, transforms, animations, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > variant preset > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon(
    {
      size, color, className, label, strokeWidth, style, children,
      rotate, flip, spin, pulse, bounce, shake, wiggle, ping, blink, float,
      heartbeat, flash, tada, jello, swing, rubberBand, flipX, breathe,
      draw, erase, trace, neon, glitch, wobble, roll, zoomIn, fadeUp,
      flicker, hologram, electric, ghost, levitate, burst, heat, crystal,
      springPop, decay, magnetPulse, slingshot, wobbleSpring,
      trigger, playOnce,
      speed, duration, delay, iterationCount, easing,
      fill, strokeLinecap, strokeLinejoin, variant,
      opacity, shadow,
      ...rest
    },
    ref,
  ) {
    const ctx = useIconContext()
    const { classNamePrefix, classNameSuffix } = ctx

    // Internal ref for draw/trigger effects; also merges the forwarded ref
    const svgRef = useRef<SVGSVGElement>(null)
    const setRef = (el: SVGSVGElement | null) => {
      (svgRef as React.MutableRefObject<SVGSVGElement | null>).current = el
      if (typeof ref === 'function') ref(el)
      else if (ref) (ref as React.MutableRefObject<SVGSVGElement | null>).current = el
    }

    // --- Size & color ---
    // ?? (nullish coalescing) is intentional over ||:
    // strokeWidth={0} and size={0} are valid values that || would incorrectly skip.
    const resolvedSize = size ?? ctx.size ?? 'md'
    const resolvedColor = color ?? ctx.color ?? 'currentColor'
    const px = resolveSize(resolvedSize)

    // --- Variant ---
    const resolvedVariant = variant ?? ctx.variant
    const preset = resolvedVariant ? VARIANT_PRESETS[resolvedVariant] : null

    // strokeWidth: if an explicit prop is given, skip variant multiplier entirely
    const baseStrokeWidth = ctx.strokeWidth ?? 2
    const resolvedStrokeWidth =
      strokeWidth != null
        ? strokeWidth
        : preset
          ? baseStrokeWidth * preset.multiplier
          : baseStrokeWidth

    // Stroke style: explicit prop > context > variant preset > hardcoded default
    const resolvedLinecap  = strokeLinecap  ?? ctx.strokeLinecap  ?? preset?.linecap  ?? 'round'
    const resolvedLinejoin = strokeLinejoin ?? ctx.strokeLinejoin ?? preset?.linejoin ?? 'round'

    // --- Fill ---
    const resolvedFill = fill ?? ctx.fill ?? 'none'

    // --- Transforms & animations ---
    const resolvedRotate = rotate ?? ctx.rotate
    const resolvedFlip   = flip   ?? ctx.flip
    const resolvedSpeed  = speed  ?? ctx.speed  ?? 'normal'

    // New animation booleans
    const resolvedSpin   = spin   ?? ctx.spin   ?? false
    const resolvedPulse  = pulse  ?? ctx.pulse  ?? false
    const resolvedBounce = bounce ?? ctx.bounce ?? false
    const resolvedShake  = shake  ?? ctx.shake  ?? false
    const resolvedWiggle = wiggle ?? ctx.wiggle ?? false
    const resolvedPing   = ping   ?? ctx.ping   ?? false
    const resolvedBlink  = blink  ?? ctx.blink  ?? false
    const resolvedFloat  = float  ?? ctx.float  ?? false

    const resolvedHeartbeat  = heartbeat  ?? ctx.heartbeat  ?? false
    const resolvedFlash      = flash      ?? ctx.flash      ?? false
    const resolvedTada       = tada       ?? ctx.tada       ?? false
    const resolvedJello      = jello      ?? ctx.jello      ?? false
    const resolvedSwing      = swing      ?? ctx.swing      ?? false
    const resolvedRubberBand = rubberBand ?? ctx.rubberBand ?? false
    const resolvedFlipX      = flipX      ?? ctx.flipX      ?? false
    const resolvedBreathe    = breathe    ?? ctx.breathe    ?? false

    // Advanced animation controls
    const resolvedDraw     = draw     ?? ctx.draw     ?? false
    const resolvedErase    = erase    ?? ctx.erase    ?? false
    const resolvedTrace    = trace    ?? ctx.trace    ?? false
    const resolvedNeon     = neon     ?? ctx.neon     ?? false
    const resolvedGlitch   = glitch   ?? ctx.glitch   ?? false
    const resolvedWobble   = wobble   ?? ctx.wobble   ?? false
    const resolvedRoll     = roll     ?? ctx.roll     ?? false
    const resolvedZoomIn   = zoomIn   ?? ctx.zoomIn   ?? false
    const resolvedFadeUp   = fadeUp   ?? ctx.fadeUp   ?? false
    const resolvedFlicker  = flicker  ?? ctx.flicker  ?? false
    const resolvedHologram = hologram ?? ctx.hologram ?? false
    const resolvedElectric = electric ?? ctx.electric ?? false
    const resolvedGhost    = ghost    ?? ctx.ghost    ?? false
    const resolvedLevitate = levitate ?? ctx.levitate ?? false
    const resolvedBurst    = burst    ?? ctx.burst    ?? false
    const resolvedHeat     = heat     ?? ctx.heat     ?? false
    const resolvedCrystal      = crystal      ?? ctx.crystal      ?? false
    const resolvedSpringPop    = springPop    ?? ctx.springPop    ?? false
    const resolvedDecay        = decay        ?? ctx.decay        ?? false
    const resolvedMagnetPulse  = magnetPulse  ?? ctx.magnetPulse  ?? false
    const resolvedSlingshot    = slingshot    ?? ctx.slingshot    ?? false
    const resolvedWobbleSpring = wobbleSpring ?? ctx.wobbleSpring ?? false
    const resolvedTrigger      = trigger      ?? ctx.trigger      ?? 'auto'
    const resolvedPlayOnce = playOnce ?? ctx.playOnce ?? false

    // Fine-tuning
    const resolvedDuration      = duration      ?? ctx.duration
    const resolvedDelay         = delay         ?? ctx.delay
    // playOnce forces a single iteration regardless of iterationCount
    const resolvedIterationCount = resolvedPlayOnce ? 1 : (iterationCount ?? ctx.iterationCount)
    // Named spring presets are resolved to their cubic-bezier equivalents
    const resolvedEasing        = resolveEasing(easing ?? ctx.easing)

    // Style enhancements
    const resolvedOpacity = opacity ?? ctx.opacity
    const resolvedShadow  = shadow  ?? ctx.shadow  ?? false

    const animFlags: Record<AnimKey, boolean> = {
      spin: resolvedSpin, pulse: resolvedPulse, bounce: resolvedBounce,
      shake: resolvedShake, wiggle: resolvedWiggle, ping: resolvedPing,
      blink: resolvedBlink, float: resolvedFloat,
      heartbeat: resolvedHeartbeat, flash: resolvedFlash, tada: resolvedTada,
      jello: resolvedJello, swing: resolvedSwing, rubberBand: resolvedRubberBand,
      flipX: resolvedFlipX, breathe: resolvedBreathe,
      erase: resolvedErase, trace: resolvedTrace,
      neon: resolvedNeon, glitch: resolvedGlitch,
      wobble: resolvedWobble, roll: resolvedRoll,
      zoomIn: resolvedZoomIn, fadeUp: resolvedFadeUp,
      flicker: resolvedFlicker, hologram: resolvedHologram,
      electric: resolvedElectric, ghost: resolvedGhost,
      levitate: resolvedLevitate, burst: resolvedBurst,
      heat: resolvedHeat, crystal: resolvedCrystal,
      springPop: resolvedSpringPop, decay: resolvedDecay,
      magnetPulse: resolvedMagnetPulse, slingshot: resolvedSlingshot,
      wobbleSpring: resolvedWobbleSpring,
    }
    const activeAnim = ANIM_PRIORITY.find(k => animFlags[k]) ?? null
    const isAnimating = activeAnim !== null

    if (isAnimating) ensureAnimStyles()
    if (resolvedDraw || resolvedErase || resolvedTrace) ensureDrawStyles()

    const baseTransform = buildBaseTransform(resolvedRotate, resolvedFlip)

    // Build style: when animating, pass static transforms via CSS custom property so
    // the keyframe animation can compose them (rotate + spin works correctly).
    const computedStyle: Record<string, string | number> = {}

    if (isAnimating && baseTransform) {
      // trailing space is intentional — CSS var concat: "rotate(90deg) rotate(Xdeg)"
      computedStyle['--ppi-bt'] = baseTransform + ' '
    } else if (baseTransform) {
      computedStyle.transform = baseTransform
    }

    // Animation timing custom properties (shared by both regular anims and draw-family)
    const drawFamilyActive = resolvedDraw || resolvedErase || resolvedTrace
    if (activeAnim || drawFamilyActive) {
      const durSource = activeAnim ?? (resolvedErase ? 'erase' : resolvedTrace ? 'trace' : 'draw')
      computedStyle['--ppi-dur']   = resolveAnimDuration(durSource, resolvedSpeed, resolvedDuration)
      computedStyle['--ppi-delay'] = resolvedDelay != null ? `${resolvedDelay}ms` : '0s'
      // entrance & erase animations default to 1 iteration; looping anims default to infinite
      const isOnceByDefault = (drawFamilyActive && !resolvedTrace && !activeAnim)
        || ['erase', 'roll', 'zoomIn', 'fadeUp', 'burst', 'springPop', 'decay', 'slingshot'].includes(activeAnim ?? '')
      const defaultCount = isOnceByDefault ? 1 : 'infinite'
      computedStyle['--ppi-count'] = String(resolvedIterationCount ?? defaultCount)
      if (resolvedEasing != null) {
        computedStyle['--ppi-ease'] = resolvedEasing
      }
    }
    // draw-only speed preset (no activeAnim, no custom duration)
    if (resolvedDraw && !activeAnim && !resolvedErase && !resolvedTrace && !resolvedDuration) {
      computedStyle['--ppi-dur'] = { slow: '2s', normal: '1s', fast: '0.5s' }[resolvedSpeed] ?? '1s'
    }

    // Opacity
    if (resolvedOpacity != null) {
      computedStyle.opacity = resolvedOpacity
    }

    // Shadow — compose with any existing user filter (drop-shadow works with SVGs unlike box-shadow)
    if (resolvedShadow) {
      const shadowVal = 'drop-shadow(0 1px 3px rgba(0,0,0,0.25))'
      const userStyle = style as Record<string, string | number> | undefined
      const existingFilter = userStyle?.filter
      computedStyle.filter = existingFilter ? `${existingFilter} ${shadowVal}` : shadowVal
    }

    // Merge computed styles with user styles. If shadow was composed, omit filter from user style
    // to avoid double-applying it.
    let styleForMerge = style
    if (resolvedShadow && (style as Record<string, string | number> | undefined)?.filter) {
      const { filter: _f, ...rest } = style as Record<string, string | number>
      styleForMerge = rest
    }

    const finalStyle =
      Object.keys(computedStyle).length > 0
        ? { ...computedStyle, ...styleForMerge }
        : style

    // --- className composition ---
    const animClasses: string[] = []
    if (activeAnim && !WAAPI_ANIMS.has(activeAnim)) animClasses.push(animClass(activeAnim))
    if (resolvedDraw) animClasses.push('ppi-draw')

    const classParts = [classNamePrefix, className, ...animClasses, classNameSuffix].filter(Boolean)
    const finalClassName = classParts.length > 0 ? classParts.join(' ') : undefined

    // --- Draw / Erase / Trace: compute per-element path lengths after mount/update ---
    useEffect(() => {
      if ((!resolvedDraw && !resolvedErase && !resolvedTrace) || !svgRef.current) return
      const elements = svgRef.current.querySelectorAll('path, circle, line, polyline, rect, ellipse')
      elements.forEach(el => {
        const len = typeof (el as SVGGeometryElement).getTotalLength === 'function'
          ? (el as SVGGeometryElement).getTotalLength()
          : 100
        const s = (el as SVGElement & { style: CSSStyleDeclaration }).style
        s.setProperty('--ppi-draw-len', String(len))
        if (resolvedTrace) {
          s.setProperty('--ppi-trace-len', String(Math.max(len * 0.3, 20)))
        }
      })
    }, [resolvedDraw, resolvedErase, resolvedTrace])

    // --- WAAPI physics animations — driven by el.animate(), no CSS class ---
    const waapiAnimRef = useRef<Animation | null>(null)

    useEffect(() => {
      const el = svgRef.current
      if (!el || !activeAnim || !WAAPI_ANIMS.has(activeAnim)) {
        waapiAnimRef.current?.cancel()
        waapiAnimRef.current = null
        return
      }

      const durMs = parseFloat(resolveAnimDuration(activeAnim, resolvedSpeed, resolvedDuration)) * 1000
      const delayMs = resolvedDelay ?? 0
      const isOnce = ['springPop', 'decay', 'slingshot'].includes(activeAnim) || resolvedPlayOnce
      const iterations =
        resolvedIterationCount != null
          ? resolvedIterationCount === 'infinite' ? Infinity : Number(resolvedIterationCount)
          : isOnce ? 1 : Infinity

      const keyframes = buildWaapiKeyframes(activeAnim, baseTransform ?? '')
      const anim = el.animate(keyframes, {
        duration: durMs,
        delay: delayMs,
        iterations,
        fill: isOnce ? 'forwards' : 'none',
        easing: 'linear', // physics is baked into keyframe values
      })

      if (resolvedTrigger !== 'auto') anim.pause()

      waapiAnimRef.current = anim
      return () => { anim.cancel(); waapiAnimRef.current = null }
    }, [activeAnim, resolvedSpeed, resolvedDuration, resolvedDelay,
        resolvedTrigger, resolvedPlayOnce, resolvedIterationCount, baseTransform])

    // --- Trigger: control animation playback via event listeners / IntersectionObserver ---
    useEffect(() => {
      const el = svgRef.current
      if (!el || resolvedTrigger === 'auto' || (!isAnimating && !resolvedDraw)) return

      const setPlayState = (state: 'running' | 'paused') => {
        el.style.animationPlayState = state
        el.querySelectorAll('path, circle, line, polyline, rect, ellipse').forEach(child => {
          ;(child as HTMLElement).style.animationPlayState = state
        })
        // Also control WAAPI animation if active
        if (state === 'running') waapiAnimRef.current?.play()
        else waapiAnimRef.current?.pause()
      }

      // Start paused — will be played by the trigger
      setPlayState('paused')

      let cleanup: () => void

      if (resolvedTrigger === 'hover') {
        let hasPlayed = false
        const onEnter = () => {
          if (resolvedPlayOnce && hasPlayed) return
          hasPlayed = true
          setPlayState('running')
        }
        const onLeave = () => setPlayState('paused')
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
        cleanup = () => {
          el.removeEventListener('mouseenter', onEnter)
          el.removeEventListener('mouseleave', onLeave)
        }
      } else if (resolvedTrigger === 'click') {
        let hasPlayed = false
        const onClick = () => {
          if (resolvedPlayOnce && hasPlayed) return
          hasPlayed = true
          // Restart: pause, force reflow via getBoundingClientRect, then play
          setPlayState('paused')
          void el.getBoundingClientRect()
          setPlayState('running')
        }
        el.addEventListener('click', onClick)
        cleanup = () => el.removeEventListener('click', onClick)
      } else {
        // 'visible'
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setPlayState('running')
              if (resolvedPlayOnce) observer.disconnect()
            } else if (!resolvedPlayOnce) {
              setPlayState('paused')
            }
          },
          { threshold: 0.1 },
        )
        observer.observe(el)
        cleanup = () => observer.disconnect()
      }

      return () => {
        cleanup()
        if (el) {
          el.style.animationPlayState = ''
          el.querySelectorAll('path, circle, line, polyline, rect, ellipse').forEach(child => {
            ;(child as HTMLElement).style.animationPlayState = ''
          })
        }
      }
    }, [resolvedTrigger, resolvedPlayOnce, isAnimating, resolvedDraw])

    return (
      <svg
        ref={setRef}
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill={resolvedFill}
        stroke={resolvedColor}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap={resolvedLinecap}
        strokeLinejoin={resolvedLinejoin}
        className={finalClassName}
        style={finalStyle as React.CSSProperties}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...rest}
      >
        {children}
      </svg>
    )
  },
)
