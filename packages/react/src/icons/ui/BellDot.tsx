// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/bell-dot.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BellDotMeta: IconMeta = {
  name: 'bell-dot',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const BellDotIcon = forwardRef<SVGSVGElement, IconProps>(function BellDotIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M11.7 2A6 6 0 0 0 6 8c0 5-1.5 7-3 9h16c-1.5-2-3-4-3-9" />

      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />

      <circle cx="18" cy="5" r="2" />
    </Icon>
  )
})

BellDotIcon.displayName = 'BellDotIcon'
