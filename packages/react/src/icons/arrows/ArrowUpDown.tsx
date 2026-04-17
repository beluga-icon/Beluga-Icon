// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpDownMeta: IconMeta = {
  name: 'arrow-up-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m21 17-4 4-4-4" />
        <path d="M17 21V3" />
        <path d="m3 7 4-4 4 4" />
        <path d="M7 3v18" />
      </Icon>
    )
  },
)

ArrowUpDownIcon.displayName = 'ArrowUpDownIcon'
