// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-circle-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowCircleDownMeta: IconMeta = {
  name: 'arrow-circle-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowCircleDownIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowCircleDownIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polyline points="8 12 12 16 16 12"/>
  <line x1="12" y1="8" x2="12" y2="16"/>
    </Icon>
  )
})

ArrowCircleDownIcon.displayName = 'ArrowCircleDownIcon'
