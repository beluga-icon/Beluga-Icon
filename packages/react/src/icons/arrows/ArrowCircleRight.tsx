// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-circle-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowCircleRightMeta: IconMeta = {
  name: 'arrow-circle-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowCircleRightIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowCircleRightIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polyline points="12 8 16 12 12 16"/>
  <line x1="8" y1="12" x2="16" y2="12"/>
    </Icon>
  )
})

ArrowCircleRightIcon.displayName = 'ArrowCircleRightIcon'
