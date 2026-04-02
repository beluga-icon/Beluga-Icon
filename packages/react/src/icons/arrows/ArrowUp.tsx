// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpMeta: IconMeta = {
  name: 'arrow-up',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowUpIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="12" y1="19" x2="12" y2="5"/>
  <polyline points="5 12 12 5 19 12"/>
    </Icon>
  )
})

ArrowUpIcon.displayName = 'ArrowUpIcon'
