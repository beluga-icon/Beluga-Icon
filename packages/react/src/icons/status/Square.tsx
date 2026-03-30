// This file is auto-generated. Do not edit manually.
// Source: svgs/status/square.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SquareMeta: IconMeta = {
  name: 'square',
  category: 'status',
  tags: [],
  version: '0.1.0',
}

export const SquareIcon = forwardRef<SVGSVGElement, IconProps>(function SquareIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    </Icon>
  )
})

SquareIcon.displayName = 'SquareIcon'
