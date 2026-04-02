// This file is auto-generated. Do not edit manually.
// Source: svgs/status/minus-circle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MinusCircleMeta: IconMeta = {
  name: 'minus-circle',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const MinusCircleIcon = forwardRef<SVGSVGElement, IconProps>(function MinusCircleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <line x1="8" y1="12" x2="16" y2="12"/>
    </Icon>
  )
})

MinusCircleIcon.displayName = 'MinusCircleIcon'
