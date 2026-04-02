// This file is auto-generated. Do not edit manually.
// Source: svgs/arrows/move.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MoveMeta: IconMeta = {
  name: 'move',
  category: 'arrows',
  tags: [],
  version: '0.1.0',
}

export const MoveIcon = forwardRef<SVGSVGElement, IconProps>(function MoveIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="5 9 2 12 5 15"/>
  <polyline points="9 5 12 2 15 5"/>
  <polyline points="15 19 12 22 9 19"/>
  <polyline points="19 9 22 12 19 15"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <line x1="12" y1="2" x2="12" y2="22"/>
    </Icon>
  )
})

MoveIcon.displayName = 'MoveIcon'
