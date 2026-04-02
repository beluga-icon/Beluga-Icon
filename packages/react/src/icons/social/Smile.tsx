// This file is auto-generated. Do not edit manually.
// Source: svgs/social/smile.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SmileMeta: IconMeta = {
  name: 'smile',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const SmileIcon = forwardRef<SVGSVGElement, IconProps>(function SmileIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <circle cx="12" cy="12" r="10"/>
  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
  <line x1="9" y1="9" x2="9.01" y2="9"/>
  <line x1="15" y1="9" x2="15.01" y2="9"/>
    </Icon>
  )
})

SmileIcon.displayName = 'SmileIcon'
