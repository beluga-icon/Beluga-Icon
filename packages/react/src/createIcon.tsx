import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Icon } from './components/Icon'
import type { IconProps } from './components/Icon'

export interface CreateIconOptions {
  /**
   * The displayName assigned to the resulting component.
   * Appears in React DevTools. Typically PascalCase, e.g. "HeartIcon".
   */
  displayName: string
  /**
   * A function returning the SVG inner elements (paths, circles, etc.).
   * These are placed as children of the base <Icon> SVG wrapper.
   *
   * @example
   * render: () => <path d="M12 2L..." />
   */
  render: () => ReactNode
}

/**
 * Factory that creates a custom icon component identical in behavior to
 * library-generated icons. The returned component:
 * - Accepts all IconProps (size, color, strokeWidth, label, className, style, + all SVG attrs)
 * - Forwards its ref to the underlying SVGSVGElement
 * - Has a proper displayName for React DevTools
 * - Picks up global defaults from IconProvider if one is present in the tree
 *
 * @example
 * const MyBrandIcon = createIcon({
 *   displayName: 'MyBrandIcon',
 *   render: () => (
 *     <>
 *       <circle cx="12" cy="12" r="10" />
 *       <path d="M8 12h8M12 8v8" />
 *     </>
 *   ),
 * })
 *
 * // Use exactly like any library icon:
 * <MyBrandIcon size="xl" color="blue" label="My brand" />
 */
export function createIcon({ displayName, render }: CreateIconOptions) {
  const IconComponent = forwardRef<SVGSVGElement, IconProps>(
    function IconComponent(props, ref) {
      return <Icon ref={ref} {...props}>{render()}</Icon>
    }
  )
  IconComponent.displayName = displayName
  return IconComponent
}
