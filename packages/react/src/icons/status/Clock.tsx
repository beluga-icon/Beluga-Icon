// This file is auto-generated. Do not edit manually.
// Source: svgs/status/clock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClockMeta: IconMeta = {
  name: 'clock',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const ClockIcon = forwardRef<SVGSVGElement, IconProps>(function ClockIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
    </Icon>
  )
})

ClockIcon.displayName = 'ClockIcon'
