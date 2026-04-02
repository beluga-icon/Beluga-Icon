// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowRightMeta: IconMeta = {
  name: 'arrow-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowRightIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
    </Icon>
  )
})

ArrowRightIcon.displayName = 'ArrowRightIcon'
