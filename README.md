# Power Puff Icon

[![CI](https://github.com/fatihserhatturan/Power-Puff-Icon/actions/workflows/ci.yml/badge.svg)](https://github.com/fatihserhatturan/Power-Puff-Icon/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@power-puff/react)](https://www.npmjs.com/package/@power-puff/react)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@power-puff/react)](https://bundlephobia.com/package/@power-puff/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)

**500 icons · 24 categories · React · TypeScript · Tree-shakeable**

Stroke-based SVG icons with React support, full TypeScript types, and tree-shaking built in.

---

## Packages

| Package | Description |
|---------|-------------|
| [`@power-puff/react`](./packages/react) | React icon components |
| [`@power-puff/core`](./packages/core) | Shared types & utilities |

---

## Installation

```bash
npm install @power-puff/react
```

---

## Usage

```tsx
import { SearchIcon, HeartIcon, ArrowUpIcon } from '@power-puff/react'

// Basic usage
<SearchIcon />

// With props
<HeartIcon size="xl" color="#e11d48" strokeWidth={1.5} />

// Accessible icon (screen-reader visible)
<ArrowUpIcon label="Scroll to top" />

// Ref forwarding
const ref = useRef<SVGSVGElement>(null)
<SearchIcon ref={ref} />
```

---

## Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'md'` | Named sizes: xs=12, sm=16, md=20, lg=24, xl=32, 2xl=48px. Numeric values are pixel width/height. |
| `color` | `string` | `'currentColor'` | Stroke color — any CSS color. Inherits text color by default. |
| `strokeWidth` | `number` | `2` | Stroke width in pixels. |
| `label` | `string` | — | Accessible label. Sets `aria-label` + `role="img"`. Omit for decorative icons. |
| `className` | `string` | — | CSS class forwarded to the `<svg>` element. |
| `style` | `Record<string, string \| number>` | — | Inline styles forwarded to the `<svg>` element. |
| `ref` | `React.Ref<SVGSVGElement>` | — | Forwarded ref to the underlying `<svg>` element. |
| `...rest` | `SVGProps<SVGSVGElement>` | — | All other native SVG attributes are forwarded. |

---

## `IconProvider` — Global Defaults

Set default props for all icons in a subtree. Explicit props on individual icons always win.

```tsx
import { IconProvider } from '@power-puff/react'

// Global defaults for the whole app
<IconProvider value={{ size: 'lg', color: '#333', strokeWidth: 1.5 }}>
  <App />
</IconProvider>

// Nested providers — inner overrides outer for matching props only
<IconProvider value={{ size: 'md', color: 'blue' }}>
  <Header />
  <IconProvider value={{ color: 'red' }}>
    {/* size='md' from outer, color='red' from inner */}
    <Sidebar />
  </IconProvider>
</IconProvider>

// Per-icon override always takes precedence
<IconProvider value={{ size: 'xl' }}>
  <HeartIcon />            {/* size='xl' from provider */}
  <HeartIcon size="sm" />  {/* size='sm' — explicit wins */}
</IconProvider>
```

---

## `createIcon` — Custom Icons

Create custom icons with identical behavior and API to library icons, including ref forwarding, `IconProvider` support, and full TypeScript types.

```tsx
import { createIcon } from '@power-puff/react'

const MyBrandIcon = createIcon({
  displayName: 'MyBrandIcon',
  render: () => (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </>
  ),
})

// Behaves exactly like any library icon
<MyBrandIcon size="xl" color="blue" label="My brand" />
<MyBrandIcon ref={ref} strokeWidth={1} />
```

---

## Categories

| Category | Category | Category | Category |
|----------|----------|----------|----------|
| accessibility | arrows | buildings | chart |
| commerce | communication | development | devices |
| files | food | layout | math |
| media | medical | nature | navigation |
| productivity | shapes | social | status |
| time | transportation | ui | weather |

---

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

```bash
npm install          # install dependencies
npm run demo         # icon browser at http://localhost:5173
npm test             # run tests
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run build        # build all packages
npm run size         # bundle size check
npm run generate     # regenerate icons from svgs/
```

---

## Project Structure

```
power-puff-icon/
├── .github/workflows/    CI + release automation
├── apps/demo/            Vite + React icon browser
├── packages/
│   ├── core/             @power-puff/core — shared types
│   └── react/            @power-puff/react — React components
├── scripts/
│   └── generate-icons.ts SVG → TSX generator
└── svgs/                 Source SVG files (24 category dirs)
```

---

## Publishing

This project uses [Changesets](https://github.com/changesets/changesets). The [release workflow](.github/workflows/release.yml) handles versioning and publishing automatically.

```bash
npm run changeset  # create a changeset after making changes
npm run version    # bump versions (run by CI)
npm run release    # publish to npm (run by CI)
```

---

## License

MIT © Power Puff Icon Contributors
