// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-from-line.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownFromLineMeta: IconMeta = {
  name: 'arrow-down-from-line',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownFromLineIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownFromLineIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M20 3H4" />
        <path d="M12 21V7" />
        <path d="m6 15 6 6 6-6" />
      </Icon>
    )
  },
)

ArrowDownFromLineIcon.displayName = 'ArrowDownFromLineIcon'
