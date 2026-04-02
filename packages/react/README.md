# @beluga-icon/react

React icon components for the Beluga Icon library. Stroke-based SVG icons built for accessibility, tree-shaking, and full TypeScript support.

## Install

```bash
npm install @beluga-icon/react
```

**Peer dependency:** React ≥ 17

## Quick Start

```tsx
import { SearchIcon, HeartIcon, ArrowUpIcon } from '@beluga-icon/react'

function App() {
  return (
    <div>
      {/* Default — inherits color from CSS */}
      <SearchIcon />

      {/* Custom size and color */}
      <HeartIcon size="lg" color="#ef4444" />

      {/* Accessible — with screen reader label */}
      <ArrowUpIcon size="sm" label="Scroll to top" />
    </div>
  )
}
```

## Props

| Prop          | Type                                   | Default          | Description                                      |
|---------------|----------------------------------------|------------------|--------------------------------------------------|
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'md'` | Icon size (named or pixel value) |
| `color`       | `string`                               | `'currentColor'` | Stroke color — any valid CSS color               |
| `strokeWidth` | `number`                               | `2`              | Stroke width in pixels                           |
| `className`   | `string`                               | —                | CSS class forwarded to the `<svg>` element       |
| `label`       | `string`                               | —                | Accessible label. Omit for decorative icons      |

All standard SVG attributes (`onClick`, `style`, `data-*`, etc.) are also accepted and forwarded to the underlying `<svg>`.

## Sizes

| Name  | Pixels |
|-------|--------|
| `xs`  | 12     |
| `sm`  | 16     |
| `md`  | 20     |
| `lg`  | 24     |
| `xl`  | 32     |
| `2xl` | 48     |

Pass a number for a custom pixel size: `<SearchIcon size={36} />`

## Accessibility

Icons are **decorative by default** (`aria-hidden="true"`).

To make an icon accessible to screen readers, pass a `label` prop:

```tsx
{/* Decorative — hidden from screen readers */}
<HeartIcon />

{/* Accessible — announces "Add to favorites" */}
<HeartIcon label="Add to favorites" />
```

When `label` is provided, the icon receives `role="img"` and `aria-label` automatically.

## Tree Shaking

All exports are named and `sideEffects: false` is set in `package.json`. Only the icons you import will be included in your bundle.

```tsx
// ✅ Only SearchIcon ends up in the bundle
import { SearchIcon } from '@beluga-icon/react'

// ✅ Multiple named imports are individually tree-shaken
import { SearchIcon, HeartIcon, BellIcon } from '@beluga-icon/react'
```

## Icon Categories

| Category      | Examples                                      |
|---------------|-----------------------------------------------|
| arrows        | ArrowUp, ChevronDown, Refresh, CornerUpRight  |
| ui            | Search, Menu, Settings, Lock, Eye, Edit       |
| status        | AlertCircle, CheckCircle, Info, Loader        |
| files         | File, Folder, Download, Upload, Trash         |
| navigation    | Home, MapPin, ExternalLink, Compass           |
| communication | Mail, Bell, MessageCircle, Phone              |
| social        | Heart, Star, Bookmark, Share, ThumbsUp        |
| media         | Play, Pause, Volume, SkipForward              |

## All Icons

[→ Browse all icons in the demo](https://github.com/beluga-icon/beluga-icon)

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) in the root of the repository.

## License

MIT © Beluga Icon Contributors
