// This file is auto-generated. Do not edit manually.
// Source: svgs/layout/split-horizontal.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SplitHorizontalMeta: IconMeta = {
  name: 'split-horizontal',
  category: 'layout',
  tags: [],
  version: '0.1.0',
}

export const SplitHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(function SplitHorizontalIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"/>
  <path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"/>
  <line x1="12" y1="4" x2="12" y2="20"/>
    </Icon>
  )
})

SplitHorizontalIcon.displayName = 'SplitHorizontalIcon'
