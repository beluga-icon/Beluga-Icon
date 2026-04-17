// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsLeftMeta: IconMeta = {
  name: 'chevrons-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m10 17-5-5 5-5" />
        <path d="m17 17-5-5 5-5" />
      </Icon>
    )
  },
)

ChevronsLeftIcon.displayName = 'ChevronsLeftIcon'
