// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/arrow-up-right.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ArrowUpRightMeta: IconMeta = {
  name: 'arrow-up-right',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const ArrowUpRightIcon = forwardRef<SVGSVGElement, IconProps>(function ArrowUpRightIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="7" y1="17" x2="17" y2="7"/>
  <polyline points="7 7 17 7 17 17"/>
    </Icon>
  )
})

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon'
