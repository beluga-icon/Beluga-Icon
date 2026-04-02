// This file is auto-generated. Do not edit manually.
// Source: svgs/status/alert-circle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AlertCircleMeta: IconMeta = {
  name: 'alert-circle',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const AlertCircleIcon = forwardRef<SVGSVGElement, IconProps>(function AlertCircleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <line x1="12" y1="16" x2="12.01" y2="16"/>
    </Icon>
  )
})

AlertCircleIcon.displayName = 'AlertCircleIcon'
