// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-0-1.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUp01Meta: IconMeta = {
  name: 'arrow-up-0-1',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUp01Icon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUp01Icon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
        <rect x="14" y="4" width="5" height="6" rx="2" />
        <path d="M17 20v-6h-2" />
        <path d="M14 20h5" />
      </Icon>
    )
  },
)

ArrowUp01Icon.displayName = 'ArrowUp01Icon'
