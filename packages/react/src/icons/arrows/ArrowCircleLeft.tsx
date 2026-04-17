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

export const ArrowCircleLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowCircleLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12H8" />
        <path d="m12 8-4 4 4 4" />
      </Icon>
    )
  },
)

ArrowCircleLeftIcon.displayName = 'ArrowCircleLeftIcon'
