// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-right-to-line.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowRightToLineMeta: IconMeta = {
  name: 'arrow-right-to-line',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowRightToLineIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowRightToLineIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M17 12H4" />
        <path d="m11 18 6-6-6-6" />
        <path d="M21 5v14" />
      </Icon>
    )
  },
)

ArrowRightToLineIcon.displayName = 'ArrowRightToLineIcon'
