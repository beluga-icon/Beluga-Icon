// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/underline.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UnderlineMeta: IconMeta = {
  name: 'underline',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const UnderlineIcon = forwardRef<SVGSVGElement, IconProps>(function UnderlineIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
  <line x1="4" y1="21" x2="20" y2="21"/>
    </Icon>
  )
})

UnderlineIcon.displayName = 'UnderlineIcon'
