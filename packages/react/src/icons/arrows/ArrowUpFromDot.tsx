// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-from-dot.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpFromDotMeta: IconMeta = {
  name: 'arrow-up-from-dot',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpFromDotIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowUpFromDotIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m5 9 7-7 7 7" />
        <path d="M12 15V2" />
        <circle cx="12" cy="21" r="1" />
      </Icon>
    )
  },
)

ArrowUpFromDotIcon.displayName = 'ArrowUpFromDotIcon'
