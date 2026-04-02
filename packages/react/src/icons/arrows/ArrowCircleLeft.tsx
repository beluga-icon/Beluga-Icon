// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-circle-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowCircleLeftMeta: IconMeta = {
  name: 'arrow-circle-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowCircleLeftIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowCircleLeftIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <polyline points="12 8 8 12 12 16"/>
  <line x1="16" y1="12" x2="8" y2="12"/>
    </Icon>
  )
})

ArrowCircleLeftIcon.displayName = 'ArrowCircleLeftIcon'
