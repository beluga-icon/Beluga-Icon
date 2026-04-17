// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowRightMeta: IconMeta = {
  name: 'arrow-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </Icon>
    )
  },
)

ArrowRightIcon.displayName = 'ArrowRightIcon'
