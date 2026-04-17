// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpLeftMeta: IconMeta = {
  name: 'arrow-up-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17 17 7 7" />
        <path d="M17 7H7v10" />
      </Icon>
    )
  },
)

ArrowUpLeftIcon.displayName = 'ArrowUpLeftIcon'
