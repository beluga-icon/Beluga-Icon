// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/minimize.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const MinimizeMeta: IconMeta = {
  name: 'minimize',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const MinimizeIcon = forwardRef<SVGSVGElement, IconProps>(function MinimizeIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
    </Icon>
  )
})

MinimizeIcon.displayName = 'MinimizeIcon'
