// This file is auto-generated. Do not edit manually.
// Source: svgs/chart/gauge.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GaugeMeta: IconMeta = {
  name: 'gauge',
  category: 'chart',
  tags: [],
  version: '0.1.0',
}

export const GaugeIcon = forwardRef<SVGSVGElement, IconProps>(function GaugeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M6 20A10 10 0 1 1 18 20"/>
  <circle cx="12" cy="12" r="2"/>
  <path d="M12 12L5 5"/>
    </Icon>
  )
})

GaugeIcon.displayName = 'GaugeIcon'
