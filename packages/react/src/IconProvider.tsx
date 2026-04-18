import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { IconBaseProps } from '@beluga-icon/core'

// Props that make sense as subtree-wide defaults.
// label / className / style / iconStyle / styleColors are intentionally excluded:
//   label     — per-icon semantic content, cannot be shared globally
//   className / style — layout concerns that should cascade via CSS
//   iconStyle / styleColors — visual container, per-icon decision
type InheritableProps = Omit<
  IconBaseProps,
  'label' | 'className' | 'style' | 'iconStyle' | 'styleColors'
>

/**
 * Global default props readable by every Icon in the subtree.
 * Adds classNamePrefix / classNameSuffix for automatic class injection.
 */
export interface IconContextValue extends InheritableProps {
  /** CSS class prepended to every icon's className in this subtree */
  classNamePrefix?: string
  /** CSS class appended to every icon's className in this subtree */
  classNameSuffix?: string
}

export interface IconProviderProps {
  /** Global default props for all Beluga icons nested within this provider */
  value: IconContextValue
  children: ReactNode
}

const IconContext = createContext<IconContextValue>({})

/**
 * Provides global default props to all Beluga Icon components nested within it.
 * Explicit props on individual icons always take precedence over provider defaults.
 *
 * @example
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
  // Inner values win over outer values for matching keys.
  const merged = { ...parent, ...value }
  return <IconContext.Provider value={merged}>{children}</IconContext.Provider>
}

/**
 * Hook to read the nearest IconProvider context.
 * Returns an empty object (all undefined) when no provider is present.
 */
export function useIconContext(): IconContextValue {
  return useContext(IconContext)
}
