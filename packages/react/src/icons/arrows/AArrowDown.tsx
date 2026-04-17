// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/a-arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const AArrowDownMeta: IconMeta = {
  name: 'a-arrow-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const AArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function AArrowDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m14 13 4 4 4-4" />
        <path d="M18 17V6" />
        <path d="m2 17 4.5-10a.5.5 0 0 1 .923 0L12 17" />
        <path d="M3.7 13.5h5.6" />
      </Icon>
    )
  },
)

AArrowDownIcon.displayName = 'AArrowDownIcon'
