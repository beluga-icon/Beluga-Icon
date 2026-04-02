// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/network.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const NetworkMeta: IconMeta = {
  name: 'network',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const NetworkIcon = forwardRef<SVGSVGElement, IconProps>(function NetworkIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="5" r="2"/>
  <circle cx="5" cy="19" r="2"/>
  <circle cx="19" cy="19" r="2"/>
  <line x1="12" y1="7" x2="5" y2="17"/>
  <line x1="12" y1="7" x2="19" y2="17"/>
  <line x1="5" y1="19" x2="19" y2="19"/>
    </Icon>
  )
})

NetworkIcon.displayName = 'NetworkIcon'
