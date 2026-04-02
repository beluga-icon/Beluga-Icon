# Changesets

This directory is used by [Changesets](https://github.com/changesets/changesets) to track pending version changes.

## Workflow

**After making a change that should be released:**

```bash
npm run changeset
```

Follow the prompts:
1. Select which packages changed (`@beluga-icon/react`, `@beluga-icon/core`)
2. Choose the bump type (`patch` / `minor` / `major`)
3. Write a summary of the change

This creates a `.md` file in this directory describing the change.

**To apply versions and update changelogs (usually done in CI):**

```bash
npm run version
```

**To publish to npm:**

```bash
npm run release
```

## Bump type guide

| Type | When to use |
|------|-------------|
| `patch` | Bug fixes, documentation, internal refactors |
| `minor` | New icons, new props, new features (backwards compatible) |
| `major` | Breaking API changes, removed props, renamed exports |
