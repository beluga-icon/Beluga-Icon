// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/split-vertical.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SplitVerticalMeta: IconMeta = {
  name: 'split-vertical',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const SplitVerticalIcon = forwardRef<SVGSVGElement, IconProps>(function SplitVerticalIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"/>
  <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
    </Icon>
  )
})

SplitVerticalIcon.displayName = 'SplitVerticalIcon'
