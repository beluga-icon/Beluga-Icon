// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/minimize-2.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const Minimize2Meta: IconMeta = {
  name: 'minimize-2',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const Minimize2Icon = forwardRef<SVGSVGElement, IconProps>(function Minimize2Icon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="4 14 10 14 10 20"/>
  <polyline points="20 10 14 10 14 4"/>
  <line x1="10" y1="14" x2="3" y2="21"/>
  <line x1="21" y1="3" x2="14" y2="10"/>
    </Icon>
  )
})

Minimize2Icon.displayName = 'Minimize2Icon'
