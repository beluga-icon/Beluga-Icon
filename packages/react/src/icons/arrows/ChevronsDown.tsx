// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsDownMeta: IconMeta = {
  name: 'chevrons-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsDownIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsDownIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 7 5 5 5-5" />
        <path d="m7 14 5 5 5-5" />
      </Icon>
    )
  },
)

ChevronsDownIcon.displayName = 'ChevronsDownIcon'
