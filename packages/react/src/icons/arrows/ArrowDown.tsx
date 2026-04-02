// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-down.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowDownMeta: IconMeta = {
  name: 'arrow-down',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowDownIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="12" y1="5" x2="12" y2="19"/>
  <polyline points="19 12 12 19 5 12"/>
    </Icon>
  )
})

ArrowDownIcon.displayName = 'ArrowDownIcon'
