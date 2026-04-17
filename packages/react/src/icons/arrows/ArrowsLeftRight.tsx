// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrows-left-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowsLeftRightMeta: IconMeta = {
  name: 'arrows-left-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowsLeftRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowsLeftRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m8 8-4 4 4 4" />
        <path d="M4 12h16" />
        <path d="m16 8 4 4-4 4" />
      </Icon>
    )
  },
)

ArrowsLeftRightIcon.displayName = 'ArrowsLeftRightIcon'
