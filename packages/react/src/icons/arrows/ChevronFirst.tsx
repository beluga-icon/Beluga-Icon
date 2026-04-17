// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/chevron-first.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ChevronFirstMeta: IconMeta = {
  name: 'chevron-first',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ChevronFirstIcon = forwardRef<SVGSVGElement, IconProps>(
  function ChevronFirstIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <path d="m17 18-6-6 6-6" />
        <path d="M7 6v12" />
      </Icon>
    )
  },
)

ChevronFirstIcon.displayName = 'ChevronFirstIcon'
