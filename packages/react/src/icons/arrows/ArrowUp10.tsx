// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-1-0.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUp10Meta: IconMeta = {
  name: 'arrow-up-1-0',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUp10Icon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUp10Icon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
        <path d="M17 10V4h-2" />
        <path d="M14 10h5" />
        <rect x="14" y="14" width="5" height="6" rx="2" />
      </Icon>
    )
  },
)

ArrowUp10Icon.displayName = 'ArrowUp10Icon'
