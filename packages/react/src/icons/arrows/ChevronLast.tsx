// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevron-last.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronLastMeta: IconMeta = {
  name: 'chevron-last',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronLastIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronLastIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 18 6-6-6-6" />
        <path d="M17 6v12" />
      </Icon>
    )
  },
)

ChevronLastIcon.displayName = 'ChevronLastIcon'
