// This file is auto-generated. Do not edit manually.
// Source: svgs/navigation/anchor.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AnchorMeta: IconMeta = {
  name: 'anchor',
  category: 'navigation',
  tags: [],
  version: '0.1.0',
}

export const AnchorIcon = forwardRef<SVGSVGElement, IconProps>(function AnchorIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="5" r="3"/>
  <line x1="12" y1="22" x2="12" y2="8"/>
  <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </Icon>
  )
})

AnchorIcon.displayName = 'AnchorIcon'
