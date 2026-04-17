// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevron-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronLeftMeta: IconMeta = {
  name: 'chevron-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m15 18-6-6 6-6" />
      </Icon>
    )
  },
)

ChevronLeftIcon.displayName = 'ChevronLeftIcon'
