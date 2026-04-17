// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-left-to-line.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowLeftToLineMeta: IconMeta = {
  name: 'arrow-left-to-line',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowLeftToLineIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeftToLineIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 19V5" />
        <path d="m13 6-6 6 6 6" />
        <path d="M7 12h13" />
      </Icon>
    )
  },
)

ArrowLeftToLineIcon.displayName = 'ArrowLeftToLineIcon'
