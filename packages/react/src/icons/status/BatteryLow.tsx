// This file is auto-generated. Do not edit manually.
// Source: svgs/status/battery-low.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BatteryLowMeta: IconMeta = {
  name: 'battery-low',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const BatteryLowIcon = forwardRef<SVGSVGElement, IconProps>(function BatteryLowIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="1" y="8" width="18" height="8" rx="2" ry="2"/>
  <line x1="23" y1="13" x2="23" y2="11"/>
  <line x1="4" y1="12" x2="7" y2="12"/>
    </Icon>
  )
})

BatteryLowIcon.displayName = 'BatteryLowIcon'
