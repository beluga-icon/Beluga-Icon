// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-right-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowRightLeftMeta: IconMeta = {
  name: 'arrow-right-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowRightLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowRightLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m16 4 4 4-4 4" />
        <path d="M20 8H4" />
        <path d="m8 20-4-4 4-4" />
        <path d="M4 16h16" />
      </Icon>
    )
  },
)

ArrowRightLeftIcon.displayName = 'ArrowRightLeftIcon'
