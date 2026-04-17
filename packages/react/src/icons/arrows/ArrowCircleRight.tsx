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

export const ArrowCircleRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowCircleRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="m12 8 4 4-4 4" />
      </Icon>
    )
  },
)

ArrowCircleRightIcon.displayName = 'ArrowCircleRightIcon'
