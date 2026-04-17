// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevrons-down-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronsDownUpMeta: IconMeta = {
  name: 'chevrons-down-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronsDownUpIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronsDownUpIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m7 19 5-5 5 5" />
        <path d="m7 5 5 5 5-5" />
      </Icon>
    )
  },
)

ChevronsDownUpIcon.displayName = 'ChevronsDownUpIcon'
