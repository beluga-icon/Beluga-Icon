// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-right-from-line.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowRightFromLineMeta: IconMeta = {
  name: 'arrow-right-from-line',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowRightFromLineIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowRightFromLineIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 5v14" />
        <path d="M21 12H6" />
        <path d="m15 18 6-6-6-6" />
      </Icon>
    )
  },
)

ArrowRightFromLineIcon.displayName = 'ArrowRightFromLineIcon'
