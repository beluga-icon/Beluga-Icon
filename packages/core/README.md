# @beluga-icon/core

Shared types and utilities for the Beluga Icon library.

> **This package is not intended for direct installation.**
> It is an internal dependency used by `@beluga-icon/react` and future framework adapters.

## What's in here

### Types

| Export             | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `IconSize`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` |
| `IconStyleType`    | Union of all 21 built-in style preset names               |
| `IconBaseProps`    | Base props shared across all framework adapters           |
| `IconMeta`         | Metadata embedded in every generated icon module          |
| `AnimationTrigger` | `'auto' \| 'hover' \| 'click' \| 'visible'`               |

### Utilities

| Export        | Description                                |
| ------------- | ------------------------------------------ |
| `resolveSize` | Resolves an `IconSize` to a pixel `number` |

## License

MIT
