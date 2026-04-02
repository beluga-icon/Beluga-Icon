// This file is auto-generated. Do not edit manually.
// Source: svgs/transportation/traffic-light.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TrafficLightMeta: IconMeta = {
  name: 'traffic-light',
  category: 'transportation',
  tags: [],
  version: '0.1.0',
}

export const TrafficLightIcon = forwardRef<SVGSVGElement, IconProps>(function TrafficLightIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="7" y="2" width="10" height="18" rx="2"/>
  <circle cx="12" cy="6" r="1.5"/>
  <circle cx="12" cy="11" r="1.5"/>
  <circle cx="12" cy="16" r="1.5"/>
  <path d="M12 20v2"/>
  <path d="M9 22h6"/>
    </Icon>
  )
})

TrafficLightIcon.displayName = 'TrafficLightIcon'
