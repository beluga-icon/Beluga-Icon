// This file is auto-generated. Do not edit manually.
// Source: svgs/accessibility/accessibility.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AccessibilityMeta: IconMeta = {
  name: 'accessibility',
  category: 'accessibility',
  tags: [],
  version: '0.1.0',
}

export const AccessibilityIcon = forwardRef<SVGSVGElement, IconProps>(
  function AccessibilityIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="4" r="1" />
        <path d="M12 5v9" />
        <path d="M7 9h10" />
        <path d="M9 20l3-6 3 6" />
      </Icon>
    )
  },
)

AccessibilityIcon.displayName = 'AccessibilityIcon'
