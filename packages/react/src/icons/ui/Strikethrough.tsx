// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/strikethrough.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const StrikethroughMeta: IconMeta = {
  name: 'strikethrough',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const StrikethroughIcon = forwardRef<SVGSVGElement, IconProps>(
  function StrikethroughIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17 8C17 4 7 4 7 12" />

        <path d="M17 12C17 20 7 20 7 16" />

        <line x1="2" y1="12" x2="22" y2="12" />
      </Icon>
    )
  },
)

StrikethroughIcon.displayName = 'StrikethroughIcon'
