// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownMeta: IconMeta = {
  name: 'arrow-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </Icon>
    )
  },
)

ArrowDownIcon.displayName = 'ArrowDownIcon'
