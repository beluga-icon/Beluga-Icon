// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/shuffle.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ShuffleMeta: IconMeta = {
  name: 'shuffle',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ShuffleIcon = forwardRef<SVGSVGElement, IconProps>(function ShuffleIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="16 3 21 3 21 8"/>
  <line x1="4" y1="20" x2="21" y2="3"/>
  <polyline points="21 16 21 21 16 21"/>
  <line x1="15" y1="15" x2="21" y2="21"/>
  <line x1="4" y1="4" x2="9" y2="9"/>
    </Icon>
  )
})

ShuffleIcon.displayName = 'ShuffleIcon'
