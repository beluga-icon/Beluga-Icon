import * as circle from './presets/circle'
import * as rounded from './presets/rounded'
import * as glass from './presets/glass'
import * as neon from './presets/neon'
import * as gradient from './presets/gradient'
import * as liquid from './presets/liquid'
import * as shadow from './presets/shadow'
import * as outlineRing from './presets/outline-ring'
import * as badge from './presets/badge'
import * as flat from './presets/flat'
import * as outline from './presets/outline'
import * as ghost from './presets/ghost'
import * as neumorphic from './presets/neumorphic'
import * as emboss from './presets/emboss'
import * as inset from './presets/inset'
import * as glow from './presets/glow'
import * as ios from './presets/ios'
import * as fluent from './presets/fluent'
import * as metallic from './presets/metallic'
import * as duotone from './presets/duotone'
import * as aurora from './presets/aurora'

type StylePreset = { className: string; css: string }

const STYLE_PRESETS: Record<string, StylePreset> = {
  circle,
  rounded,
  glass,
  neon,
  gradient,
  liquid,
  shadow,
  'outline-ring': outlineRing,
  badge,
  flat,
  outline,
  ghost,
  neumorphic,
  emboss,
  inset,
  glow,
  ios,
  fluent,
  metallic,
  duotone,
  aurora,
}

const STYLE_ID = 'ppi-icon-styles'

const WRAP_CSS = `
.ppi-style-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
`

const COMBINED_CSS =
  WRAP_CSS +
  Object.values(STYLE_PRESETS)
    .map((p) => p.css)
    .join('\n')

export function ensureIconStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const el = document.createElement('style')
  el.id = STYLE_ID
  el.textContent = COMBINED_CSS
  document.head.appendChild(el)
}
