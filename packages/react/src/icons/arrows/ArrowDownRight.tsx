// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownRightMeta: IconMeta = {
  name: 'arrow-down-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M7 7 17 17" />
        <path d="M7 17h10V7" />
      </Icon>
    )
  },
)

ArrowDownRightIcon.displayName = 'ArrowDownRightIcon'
