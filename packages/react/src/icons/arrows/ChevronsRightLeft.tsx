// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-right-left.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsRightLeftMeta: IconMeta = {
  name: 'chevrons-right-left',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsRightLeftIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsRightLeftIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m19 17-5-5 5-5" />
        <path d="m5 17 5-5-5-5" />
      </Icon>
    )
  },
)

ChevronsRightLeftIcon.displayName = 'ChevronsRightLeftIcon'
