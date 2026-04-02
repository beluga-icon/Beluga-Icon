// This file is auto-generated. Do not edit manually.
// Source: svgs/time/clock-alert.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ClockAlertMeta: IconMeta = {
  name: 'clock-alert',
  category: 'time',
  tags: [],
  version: '0.1.0',
}

export const ClockAlertIcon = forwardRef<SVGSVGElement, IconProps>(function ClockAlertIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
  <line x1="12" y1="17" x2="12" y2="17.01"/>
    </Icon>
  )
})

ClockAlertIcon.displayName = 'ClockAlertIcon'
