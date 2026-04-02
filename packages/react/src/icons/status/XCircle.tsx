// This file is auto-generated. Do not edit manually.
// Source: svgs/status/x-circle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const XCircleMeta: IconMeta = {
  name: 'x-circle',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const XCircleIcon = forwardRef<SVGSVGElement, IconProps>(function XCircleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="15" y1="9" x2="9" y2="15"/>
  <line x1="9" y1="9" x2="15" y2="15"/>
    </Icon>
  )
})

XCircleIcon.displayName = 'XCircleIcon'
