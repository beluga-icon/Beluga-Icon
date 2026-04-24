<p align="center">
  <img src="docs/beluga-icon.svg" width="140" height="140" alt="Beluga Icon" />
</p>

<h1 align="center">Beluga Icon</h1>

<p align="center">
  1800+ stroke-based SVG icons for React — with built-in animations, visual styles, and full TypeScript support.
</p>

<p align="center">
  <a href="https://github.com/fatihserhatturan/Beluga-Icon/actions/workflows/ci.yml">
    <img src="https://github.com/fatihserhatturan/Beluga-Icon/actions/workflows/ci.yml/badge.svg" alt="CI" />
  </a>
  <a href="https://www.npmjs.com/package/@beluga-icon/react">
    <img src="https://img.shields.io/npm/v/@beluga-icon/react?color=0ea5e9&label=npm" alt="npm version" />
  </a>
  <a href="https://bundlephobia.com/package/@beluga-icon/react">
    <img src="https://img.shields.io/bundlephobia/minzip/@beluga-icon/react?label=minzipped" alt="Bundle size" />
  </a>
  <img src="https://img.shields.io/badge/TypeScript-strict-3178c6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/license-MIT-black" alt="License: MIT" />
</p>

<p align="center">
  <b>Bring your own style.</b> Every icon accepts an <code>iconStyle</code> and <code>animation</code> prop — no extra wrappers, no CSS overrides needed.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@beluga-icon/react"><b>→ View on npm</b></a>
</p>

---

## Packages

| Package                                  | Version                                                                                                                  | Description              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| [`@beluga-icon/react`](./packages/react) | [![npm](https://img.shields.io/npm/v/@beluga-icon/react?color=0ea5e9)](https://www.npmjs.com/package/@beluga-icon/react) | React icon components    |
| [`@beluga-icon/core`](./packages/core)   | [![npm](https://img.shields.io/npm/v/@beluga-icon/core?color=0ea5e9)](https://www.npmjs.com/package/@beluga-icon/core)   | Shared types & utilities |

---

## Installation

```bash
npm install @beluga-icon/react
```

**Peer dependency:** React ≥ 17

---

## Quick Start

```tsx
import { SearchIcon, HeartIcon, BellIcon } from '@beluga-icon/react'

function App() {
  return (
    <div>
      {/* Default — inherits color from CSS */}
      <SearchIcon />

      {/* Glass style with hover animation */}
      <HeartIcon iconStyle="glass" animation="heartbeat" trigger="hover" />

      {/* Neon glow with custom color */}
      <BellIcon iconStyle="neon" color="#a855f7" animation="pulse" />

      {/* Accessible — screen reader visible */}
      <SearchIcon size="lg" label="Search" />
    </div>
  )
}
```

---

## Props

| Prop          | Type                                                      | Default          | Description                                    |
| ------------- | --------------------------------------------------------- | ---------------- | ---------------------------------------------- |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'md'`           | Named size or pixel value                      |
| `color`       | `string`                                                  | `'currentColor'` | Stroke color — any valid CSS color             |
| `strokeWidth` | `number`                                                  | `2`              | Stroke width in pixels                         |
| `iconStyle`   | `IconStyleType`                                           | —                | Visual style preset                            |
| `styleColors` | `Record<string, string>`                                  | —                | Custom color injection for color-aware styles  |
| `animation`   | `AnimKey`                                                 | —                | Animation preset                               |
| `trigger`     | `'auto' \| 'hover' \| 'click' \| 'visible'`               | `'auto'`         | When the animation plays                       |
| `speed`       | `'slow' \| 'normal' \| 'fast'`                            | `'normal'`       | Animation speed                                |
| `playOnce`    | `boolean`                                                 | `false`          | Play once instead of looping                   |
| `label`       | `string`                                                  | —                | Accessible label (`aria-label` + `role="img"`) |
| `className`   | `string`                                                  | —                | Extra class on the `<svg>` element             |
| `ref`         | `React.Ref<SVGSVGElement>`                                | —                | Forwarded ref to the underlying SVG            |

All standard SVG attributes (`onClick`, `style`, `data-*`, etc.) are also accepted.

---

## Styles

21 built-in visual style presets — apply any one with the `iconStyle` prop.

| Style          | Description                                      |
| -------------- | ------------------------------------------------ |
| `circle`       | Solid filled circle background                   |
| `rounded`      | Rounded square background                        |
| `flat`         | Minimal flat background                          |
| `outline`      | Thin border, transparent fill                    |
| `ghost`        | Subtle transparent fill, no border               |
| `glass`        | Frosted glass with backdrop blur                 |
| `liquid`       | Apple Liquid Glass — layered specular highlights |
| `neon`         | Glowing neon drop-shadow                         |
| `glow`         | Soft pulsing glow ring                           |
| `shadow`       | Elevated with layered box shadow                 |
| `gradient`     | Diagonal gradient background                     |
| `badge`        | Compact badge shape                              |
| `outline-ring` | Double border ring                               |
| `neumorphic`   | Soft-UI extruded surface                         |
| `emboss`       | Pressed emboss effect                            |
| `inset`        | Inset / debossed surface                         |
| `ios`          | iOS-style rounded square                         |
| `fluent`       | Microsoft Fluent-inspired surface                |
| `metallic`     | Brushed metal sheen                              |
| `duotone`      | Two-tone layered fill                            |
| `aurora`       | Animated hue-shifting gradient                   |

### Color Injection

Color-aware styles accept custom palettes via `styleColors`:

```tsx
{
  /* Gradient */
}
;<StarIcon iconStyle="gradient" styleColors={{ from: '#f43f5e', mid: '#a855f7', to: '#06b6d4' }} />

{
  /* Aurora — three hue stops */
}
;<BellIcon iconStyle="aurora" styleColors={{ a: '#06b6d4', b: '#8b5cf6', c: '#f43f5e' }} />

{
  /* Metallic */
}
;<LockIcon
  iconStyle="metallic"
  styleColors={{ light: '#e2e8f0', base: '#94a3b8', dark: '#475569' }}
/>

{
  /* Duotone */
}
;<HeartIcon iconStyle="duotone" styleColors={{ a: '#f43f5e', b: '#fecdd3' }} />
```

---

## Animations

46 built-in animation presets — apply any one with the `animation` prop.

**Mechanical**
`spin` · `pulse` · `bounce` · `shake` · `wiggle` · `ping` · `blink` · `float` · `heartbeat` · `flash` · `tada` · `jello` · `swing` · `rubberBand` · `flipX` · `breathe` · `wobble` · `roll`

**SVG Path**
`draw` · `erase` · `trace`

**Effects**
`neon` · `glitch` · `flicker` · `hologram` · `electric` · `ghost` · `burst` · `heat` · `crystal` · `rgbSplit` · `liquidMorph` · `aurora` · `shatter` · `cinematic`

**Physics**
`zoomIn` · `fadeUp` · `levitate` · `springPop` · `decay` · `magnetPulse` · `wobbleSpring`

### Trigger Modes

```tsx
{
  /* Plays on mount, loops */
}
;<LoaderIcon animation="spin" trigger="auto" />

{
  /* Plays once on hover */
}
;<BellIcon animation="shake" trigger="hover" playOnce />

{
  /* Plays on click */
}
;<HeartIcon animation="heartbeat" trigger="click" />

{
  /* Plays when scrolled into view */
}
;<StarIcon animation="draw" trigger="visible" playOnce />
```

---

## IconProvider — Global Defaults

Set default props for all icons in a subtree. Explicit props on individual icons always win.

```tsx
import { IconProvider } from '@beluga-icon/react'
;<IconProvider iconStyle="glass" animation="pulse" trigger="hover" size="lg">
  <SearchIcon /> {/* inherits all provider defaults */}
  <HeartIcon color="#ef4444" /> {/* overrides color, inherits the rest */}
</IconProvider>
```

---

## Custom Icons

Create your own icons with the same API — animations, styles, and provider support included.

```tsx
import { createIcon } from '@beluga-icon/react'

const MyBrandIcon = createIcon({
  displayName: 'MyBrandIcon',
  render: () => (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </>
  ),
})

<MyBrandIcon size="xl" iconStyle="glass" animation="pulse" label="My Brand" />
```

---

## Accessibility

Icons are **decorative by default** (`aria-hidden="true"`). Add a `label` to expose them to screen readers:

```tsx
{
  /* Decorative — hidden from screen readers */
}
;<HeartIcon />

{
  /* Accessible — announces "Add to favorites" */
}
;<HeartIcon label="Add to favorites" />
```

---

## License

MIT. Some icon artwork is derived from or inspired by Lucide Icons and remains
subject to the notices in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

## Tree Shaking

All exports are named and `"sideEffects": false` is set in `package.json`. Only the icons you import are included in your bundle.

```tsx
import { SearchIcon, HeartIcon, BellIcon } from '@beluga-icon/react'
```

For the smallest possible import path, you can also import a single icon module:

```tsx
import { SearchIcon } from '@beluga-icon/react/icons/ui/Search'
```

---

## Icon Library — 1800+ Icons · 30+ Categories

| Category      | Category      | Category       | Category |
| ------------- | ------------- | -------------- | -------- |
| accessibility | arrows        | buildings      | chart    |
| commerce      | communication | development    | devices  |
| files         | food          | gaming         | layout   |
| math          | media         | medical        | nature   |
| navigation    | network       | productivity   | security |
| shapes        | social        | sports         | status   |
| text          | time          | transportation | ui       |
| users         | weather       | …              |          |

---
