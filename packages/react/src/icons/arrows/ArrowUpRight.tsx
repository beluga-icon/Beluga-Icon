// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpRightMeta: IconMeta = {
  name: 'arrow-up-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </Icon>
    )
  },
)

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon'
