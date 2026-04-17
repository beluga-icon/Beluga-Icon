// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownLeftMeta: IconMeta = {
  name: 'arrow-down-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17 7 7 17" />
        <path d="M17 17H7V7" />
      </Icon>
    )
  },
)

ArrowDownLeftIcon.displayName = 'ArrowDownLeftIcon'
