// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-left-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowLeftRightMeta: IconMeta = {
  name: 'arrow-left-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowLeftRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeftRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M8 4 4 8l4 4" />
        <path d="M4 8h16" />
        <path d="m16 20 4-4-4-4" />
        <path d="M20 16H4" />
      </Icon>
    )
  },
)

ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon'
