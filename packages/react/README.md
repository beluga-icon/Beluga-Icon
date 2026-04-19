# @beluga-icon/react

React icon components for the Beluga Icon library. Stroke-based SVG icons with built-in animations, visual styles, and full TypeScript support.

> **Bring your own style.** Every icon accepts an `iconStyle` and `animation` prop out of the box — no extra wrappers, no CSS overrides needed. You can also inject custom colors per-style via `styleColors`.

## Install

```bash
npm install @beluga-icon/react
```

**Peer dependency:** React ≥ 17

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

      {/* Neon style with custom color */}
      <BellIcon iconStyle="neon" color="#a855f7" animation="pulse" />

      {/* Accessible — announces to screen readers */}
      <SearchIcon size="lg" label="Search" />
    </div>
  )
}
```

## Props

| Prop          | Type                                                      | Default          | Description                                   |
| ------------- | --------------------------------------------------------- | ---------------- | --------------------------------------------- |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'md'`           | Icon size — named preset or pixel value       |
| `color`       | `string`                                                  | `'currentColor'` | Stroke color — any valid CSS color            |
| `strokeWidth` | `number`                                                  | `2`              | Stroke width in pixels                        |
| `iconStyle`   | `IconStyleType`                                           | —                | Visual style preset (see Styles section)      |
| `styleColors` | `Record<string, string>`                                  | —                | Custom color injection for color-aware styles |
| `animation`   | `AnimKey`                                                 | —                | Animation preset (see Animations section)     |
| `trigger`     | `'auto' \| 'hover' \| 'click' \| 'visible'`               | `'auto'`         | When the animation plays                      |
| `speed`       | `'slow' \| 'normal' \| 'fast'`                            | `'normal'`       | Animation speed                               |
| `playOnce`    | `boolean`                                                 | `false`          | Play animation once instead of looping        |
| `label`       | `string`                                                  | —                | Accessible label. Omit for decorative icons   |
| `className`   | `string`                                                  | —                | Extra CSS class on the `<svg>` element        |

All standard SVG attributes (`onClick`, `style`, `data-*`, etc.) are also accepted.

## Sizes

| Name  | Pixels |
| ----- | ------ |
| `xs`  | 12     |
| `sm`  | 16     |
| `md`  | 20     |
| `lg`  | 24     |
| `xl`  | 32     |
| `2xl` | 48     |

Pass a number for a custom pixel size: `<SearchIcon size={36} />`

## Styles

21 built-in visual style presets. Apply any one via the `iconStyle` prop.

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

Some styles accept custom colors via `styleColors`:

```tsx
{
  /* Gradient: from / mid / to */
}
;<StarIcon iconStyle="gradient" styleColors={{ from: '#f43f5e', mid: '#a855f7', to: '#06b6d4' }} />

{
  /* Aurora: three hue stops */
}
;<BellIcon iconStyle="aurora" styleColors={{ a: '#06b6d4', b: '#8b5cf6', c: '#f43f5e' }} />

{
  /* Metallic: light / base / dark */
}
;<LockIcon
  iconStyle="metallic"
  styleColors={{ light: '#e2e8f0', base: '#94a3b8', dark: '#475569' }}
/>

{
  /* Duotone: foreground / background */
}
;<HeartIcon iconStyle="duotone" styleColors={{ a: '#f43f5e', b: '#fecdd3' }} />
```

## Animations

46 built-in animation presets. Apply any one via the `animation` prop.

### Mechanical

`spin` · `pulse` · `bounce` · `shake` · `wiggle` · `ping` · `blink` · `float` · `heartbeat` · `flash` · `tada` · `jello` · `swing` · `rubberBand` · `flipX` · `breathe` · `wobble` · `roll`

### SVG Path

`draw` · `erase` · `trace`

### Effects

`neon` · `glitch` · `flicker` · `hologram` · `electric` · `ghost` · `burst` · `heat` · `crystal` · `rgbSplit` · `liquidMorph` · `aurora` · `shatter` · `cinematic`

### Physics

`zoomIn` · `fadeUp` · `levitate` · `springPop` · `decay` · `magnetPulse` · `wobbleSpring`

### Trigger Modes

```tsx
{
  /* Plays automatically on mount, loops */
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

## Shared Config — IconProvider

Wrap your app (or a section) to set defaults once:

```tsx
import { IconProvider } from '@beluga-icon/react'

;<IconProvider iconStyle="glass" animation="pulse" trigger="hover" size="lg">
  <SearchIcon /> {/* inherits all provider defaults */}
  <HeartIcon color="#ef4444" /> {/* override individual props */}
</IconProvider>
```

## Accessibility

Icons are **decorative by default** (`aria-hidden="true"`).

Add a `label` to expose the icon to screen readers:

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

When `label` is provided the icon receives `role="img"` and `aria-label` automatically.

## Tree Shaking

All exports are named and `"sideEffects": false` is set in `package.json`. Only the icons you import are included in your bundle.

```tsx
import { SearchIcon, HeartIcon, BellIcon } from '@beluga-icon/react'
```

## Icon Library — 1800+ Icons across 30+ Categories

| Category       | Examples                                       |
| -------------- | ---------------------------------------------- |
| ui             | Search, Menu, Settings, Lock, Eye, Edit        |
| arrows         | ArrowUp, ChevronDown, Refresh, CornerUpRight   |
| status         | AlertCircle, CheckCircle, Info, Loader         |
| files          | File, Folder, Download, Upload, Trash          |
| navigation     | Home, MapPin, ExternalLink, Compass            |
| communication  | Mail, Bell, MessageCircle, Phone               |
| social         | Heart, Star, Bookmark, Share, ThumbsUp         |
| media          | Play, Pause, Volume, SkipForward               |
| commerce       | QrCode, PiggyBank, Euro, SaudiRiyal            |
| development    | Code, Terminal, Git, Bug, Api                  |
| devices        | Monitor, Tablet, Mobile, Keyboard              |
| accessibility  | EyeOff, Contrast, TextSize, HandPointer        |
| nature         | Leaf, Sun, Moon, Cloud, Wind                   |
| weather        | Rain, Snow, Thunder, Fog                       |
| medical        | Heart, Pill, Syringe, Stethoscope              |
| food           | Pizza, Coffee, Apple, Fork                     |
| sports         | Football, Basketball, Tennis, Trophy           |
| gaming         | Gamepad, Dice, Trophy, Puzzle                  |
| transportation | Car, Plane, Train, Bike                        |
| buildings      | House, Office, Hospital, School                |
| … and more     | math, chart, shapes, text, time, layout, users |

[→ Browse all icons in the demo](https://github.com/beluga-icon/beluga-icon)

## License

MIT
