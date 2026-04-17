// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownUpMeta: IconMeta = {
  name: 'arrow-down-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m3 17 4 4 4-4" />
        <path d="M7 21V3" />
        <path d="m21 7-4-4-4 4" />
        <path d="M17 3v18" />
      </Icon>
    )
  },
)

ArrowDownUpIcon.displayName = 'ArrowDownUpIcon'
