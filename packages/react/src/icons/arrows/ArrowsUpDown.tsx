// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrows-up-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowsUpDownMeta: IconMeta = {
  name: 'arrows-up-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowsUpDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowsUpDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 4-4 4 4 4" />
        <path d="M3 8h14" />
        <path d="m17 20 4-4-4-4" />
        <path d="M21 16H7" />
      </Icon>
    )
  },
)

ArrowsUpDownIcon.displayName = 'ArrowsUpDownIcon'
