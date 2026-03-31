import { resolveSize } from '@power-puff/core'
import type { IconBaseProps } from '@power-puff/core'
import { forwardRef, type SVGProps } from 'react'
import { useIconContext } from '../IconProvider'

export interface IconProps
  extends IconBaseProps,
    Omit<SVGProps<SVGSVGElement>, 'color' | 'style' | 'strokeWidth'> {}

/**
 * Base SVG wrapper used by every generated icon component.
 * Handles size, color, accessibility, and forwards all native SVG props.
 * Prop resolution order: explicit prop > IconProvider context > hardcoded default
 */
export const Icon = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  function Icon({ size, color, className, label, strokeWidth, children, ...rest }, ref) {
    const ctx = useIconContext()

    // ?? (nullish coalescing) is intentional over ||:
    // strokeWidth={0} and size={0} are valid values that || would incorrectly skip.
    const resolvedSize = size ?? ctx.size ?? 'md'
    const resolvedColor = color ?? ctx.color ?? 'currentColor'
    const resolvedStrokeWidth = strokeWidth ?? ctx.strokeWidth ?? 2

    const px = resolveSize(resolvedSize)

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        stroke={resolvedColor}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...rest}
      >
        {children}
      </svg>
    )
  },
)
