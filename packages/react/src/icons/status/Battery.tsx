// This file is auto-generated. Do not edit manually.
// Source: svgs/status/battery.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BatteryMeta: IconMeta = {
  name: 'battery',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const BatteryIcon = forwardRef<SVGSVGElement, IconProps>(function BatteryIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
  <line x1="23" y1="13" x2="23" y2="11"/>
    </Icon>
  )
})

BatteryIcon.displayName = 'BatteryIcon'
