// This file is auto-generated. Do not edit manually.
// Source: svgs/time/stopwatch.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const StopwatchMeta: IconMeta = {
  name: 'stopwatch',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const StopwatchIcon = forwardRef<SVGSVGElement, IconProps>(function StopwatchIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="14" r="8"/>
  <polyline points="12 10 12 14 14 16"/>
  <line x1="10" y1="2" x2="14" y2="2"/>
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="19" y1="5" x2="21" y2="3"/>
    </Icon>
  )
})

StopwatchIcon.displayName = 'StopwatchIcon'
