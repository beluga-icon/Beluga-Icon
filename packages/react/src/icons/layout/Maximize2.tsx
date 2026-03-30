// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/maximize-2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Maximize2Meta: IconMeta = {
  name: 'maximize-2',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const Maximize2Icon = forwardRef<SVGSVGElement, IconProps>(function Maximize2Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="15 3 21 3 21 9"/>
  <polyline points="9 21 3 21 3 15"/>
  <line x1="21" y1="3" x2="14" y2="10"/>
  <line x1="3" y1="21" x2="10" y2="14"/>
    </Icon>
  )
})

Maximize2Icon.displayName = 'Maximize2Icon'
