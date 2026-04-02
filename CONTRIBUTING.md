# Contributing to Beluga Icon

## Dev Setup

**Prerequisites**: Node ≥ 18, npm ≥ 9

```bash
git clone https://github.com/fatihserhatturan/Power-Puff-Icon.git
cd Power-Puff-Icon
npm install

npm run demo      # start the icon browser at http://localhost:5173
npm test          # run all tests
npm run lint      # lint source files
npm run typecheck # type check packages
```

---

## How to Add a New Icon

1. Create an SVG file at `svgs/<category>/icon-name.svg` (kebab-case filename)
2. Follow the SVG standards below
3. Optionally create a sidecar file `svgs/<category>/icon-name.meta.json` to add searchable tags:
   ```json
   { "tags": ["search", "find", "look"] }
   ```
4. Run the generator:
   ```bash
   npm run generate
   ```
5. Verify it renders correctly:
   ```bash
   npm run demo
   ```
6. Write a changeset (see [Changeset Process](#changeset-process))

---

## SVG Standards

All icons must follow these rules or the generated components will be inconsistent:

| Rule | Value |
|------|-------|
| `viewBox` | `0 0 24 24` — exactly |
| `fill` | `none` |
| Stroke style | `stroke="currentColor"` (the generator strips and re-applies via props) |
| `stroke-width` | `2` (default, overridable by prop) |
| `stroke-linecap` | `round` |
| `stroke-linejoin` | `round` |
| Colors | No hardcoded hex colors — `currentColor` only |
| Text/metadata | No `<title>`, `<desc>`, or XML comments (stripped by generator) |
| Root attributes | No `width`/`height` on `<svg>` root (ignored by generator) |

**Valid example:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 8v4l3 3"/>
</svg>
```

---

## Adding a New Category

1. Create a new subdirectory: `svgs/<new-category>/`
2. Add icon SVG files following the standards above
3. Run `npm run generate` — the category is automatically picked up
4. The category name (directory name) should be lowercase and hyphenated (e.g., `social`, `file-system`)

---

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

Format: `type(scope): description`

| Type | When to use |
|------|-------------|
| `feat` | New icon, new API feature |
| `fix` | Bug fix |
| `chore` | Tooling, CI, dependencies |
| `docs` | Documentation only |
| `test` | Test additions or changes |
| `refactor` | Code change with no feature/fix |

Scopes: `react`, `core`, `demo`, `scripts`, `ci`

**Examples:**
```
feat(react): add IconProvider for global defaults
fix(core): correct SIZE_MAP for xs variant
chore(ci): add release workflow
docs: update README with createIcon example
```

---

## Changeset Process

Every user-facing change to `@beluga-icon/react` or `@beluga-icon/core` needs a changeset.

```bash
# 1. Make your changes
# 2. Create a changeset — interactive CLI will guide you
npm run changeset

# 3. Commit both your code changes AND the generated .changeset/*.md file
git add .
git commit -m "feat(react): add IconProvider"
```

**Bump type guide:**
- `patch` — bug fix, internal refactor, performance improvement
- `minor` — new icon, new API (backward compatible)
- `major` — breaking change (prop rename, removed export, etc.)

The CI release workflow handles versioning and npm publishing automatically when a changeset PR is merged to `main`.

---

## Testing

Tests live in `packages/react/src/__tests__/`.

```bash
npm test          # run once
npm run test:watch # watch mode
npm run test:coverage # with coverage report
```

**What to test:**
- New utilities (e.g., `createIcon` usage, `useIconContext` behavior)
- `IconProvider` context changes
- Accessibility behavior (aria attributes, role)
- Ref forwarding

**What NOT to test:**
- Generated icon files in `packages/react/src/icons/` — these are auto-generated and covered by snapshot tests
- Implementation details of SVG paths

---

## Code Style

```bash
npx prettier --write .   # format all files
npm run lint             # ESLint (TypeScript rules)
npm run typecheck        # TypeScript strict type checking
```

Prettier and ESLint configs are in `.prettierrc` and `eslint.config.js` at the project root. Both run in CI.

---

## Build & Release

```bash
npm run build   # build all packages (core + react)
npm run size    # check bundle size against limits
npm run release # publish to npm (requires NPM_TOKEN, run by CI)
```

The `release` command is handled automatically by the [Changesets GitHub Action](.github/workflows/release.yml) — you don't need to run it manually.
