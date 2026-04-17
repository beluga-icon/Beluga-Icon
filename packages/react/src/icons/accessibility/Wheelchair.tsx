// This file is auto-generated. Do not edit manually.
// Source: svgs/accessibility/wheelchair.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const WheelchairMeta: IconMeta = {
  name: 'wheelchair',
  category: 'accessibility',
  tags: [],
  version: '0.1.0',
}

export const WheelchairIcon = forwardRef<SVGSVGElement, IconProps>(
  function WheelchairIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <circle cx="10" cy="3" r="1" />
        <path d="M10 4v10" />
        <path d="M10 9h6" />
        <path d="M10 14h6l1 4" />
        <path d="M14 18h6" />
        <circle cx="10" cy="19" r="4" />
        <circle cx="21" cy="21" r="1" />
      </Icon>
    )
  },
)

WheelchairIcon.displayName = 'WheelchairIcon'
