# @beluga-icon/core

Shared types and utilities for the Beluga Icon library.

> **This package is not intended for direct installation.**
> It is an internal dependency used by framework adapter packages such as `@beluga-icon/react`.

## Exports

### Types

| Export         | Description                                       |
|----------------|---------------------------------------------------|
| `IconSize`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` |
| `IconBaseProps`| Base props shared across all framework adapters   |
| `IconMeta`     | Metadata embedded in every generated icon module  |

### Utilities

| Export         | Description                                |
|----------------|--------------------------------------------|
| `SIZE_MAP`     | Maps named sizes to pixel values           |
| `resolveSize`  | Resolves an `IconSize` to a pixel `number` |

## License

MIT © Beluga Icon Contributors
