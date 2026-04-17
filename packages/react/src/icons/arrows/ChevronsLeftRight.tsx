// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-left-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsLeftRightMeta: IconMeta = {
  name: 'chevrons-left-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsLeftRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsLeftRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
      </Icon>
    )
  },
)

ChevronsLeftRightIcon.displayName = 'ChevronsLeftRightIcon'
