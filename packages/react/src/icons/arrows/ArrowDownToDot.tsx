// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down-to-dot.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownToDotMeta: IconMeta = {
  name: 'arrow-down-to-dot',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownToDotIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowDownToDotIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M12 2v13" />
        <path d="m19 8-7 7-7-7" />
        <circle cx="12" cy="21" r="1" />
      </Icon>
    )
  },
)

ArrowDownToDotIcon.displayName = 'ArrowDownToDotIcon'
