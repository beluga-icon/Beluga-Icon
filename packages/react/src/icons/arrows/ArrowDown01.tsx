// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-0-1.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDown01Meta: IconMeta = {
  name: 'arrow-down-0-1',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDown01Icon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDown01Icon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m3 16 4 4 4-4" />
        <path d="M7 20V4" />
        <rect x="14" y="4" width="5" height="6" rx="2" />
        <path d="M17 20v-6h-2" />
        <path d="M14 20h5" />
      </Icon>
    )
  },
)

ArrowDown01Icon.displayName = 'ArrowDown01Icon'
