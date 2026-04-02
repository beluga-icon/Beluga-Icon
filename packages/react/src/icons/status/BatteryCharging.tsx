// This file is auto-generated. Do not edit manually.
// Source: svgs/status/battery-charging.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BatteryChargingMeta: IconMeta = {
  name: 'battery-charging',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const BatteryChargingIcon = forwardRef<SVGSVGElement, IconProps>(function BatteryChargingIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"/>
  <line x1="23" y1="13" x2="23" y2="11"/>
  <polyline points="11 6 7 12 13 12 9 18"/>
    </Icon>
  )
})

BatteryChargingIcon.displayName = 'BatteryChargingIcon'
