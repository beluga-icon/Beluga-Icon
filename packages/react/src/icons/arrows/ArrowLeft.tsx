// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowLeftMeta: IconMeta = {
  name: 'arrow-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ArrowLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </Icon>
    )
  },
)

ArrowLeftIcon.displayName = 'ArrowLeftIcon'
