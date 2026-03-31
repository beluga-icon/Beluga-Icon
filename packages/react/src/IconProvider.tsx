import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { IconSize } from '@power-puff/core'

/**
 * Subset of IconBaseProps that can be set as global defaults.
 * `label`, `className`, and `style` are intentionally excluded:
 * - label: per-icon semantic content — cannot be shared globally
 * - className/style: layout concerns that should cascade via CSS
 */
export interface IconContextValue {
  size?: IconSize
  color?: string
  strokeWidth?: number
}

export interface IconProviderProps {
  /** Global default props for all Power Puff icons nested within this provider */
  value: IconContextValue
  children: ReactNode
}

const IconContext = createContext<IconContextValue>({})

/**
 * Provides global default props to all Power Puff Icon components nested within it.
 * Explicit props on individual icons always take precedence over provider defaults.
 *
 * @example
 * // Set global defaults for all icons in the app:
 * <IconProvider value={{ size: 'lg', color: '#333', strokeWidth: 1.5 }}>
 *   <App />
 * </IconProvider>
 *
 * @example
 * // Nested providers: inner overrides outer for matching props only
 * <IconProvider value={{ size: 'md', color: 'blue' }}>
 *   <IconProvider value={{ color: 'red' }}>
 *     <SomeIcon /> // size='md' from outer, color='red' from inner
 *   </IconProvider>
 * </IconProvider>
 */
export function IconProvider({ value, children }: IconProviderProps) {
  const parent = useContext(IconContext)
  // Merge with parent so nested providers only override what they explicitly set.
  // Inner values win over outer values for matching keys.
  const merged = { ...parent, ...value }
  return <IconContext.Provider value={merged}>{children}</IconContext.Provider>
}

/**
 * Hook to read the nearest IconProvider context.
 * Returns an empty object (all undefined) when no provider is present — safe default.
 */
export function useIconContext(): IconContextValue {
  return useContext(IconContext)
}
