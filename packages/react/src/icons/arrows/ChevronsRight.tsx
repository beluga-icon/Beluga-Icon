// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsRightMeta: IconMeta = {
  name: 'chevrons-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsRightIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsRightIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 17 5-5-5-5" />
        <path d="m14 17 5-5-5-5" />
      </Icon>
    )
  },
)

ChevronsRightIcon.displayName = 'ChevronsRightIcon'
