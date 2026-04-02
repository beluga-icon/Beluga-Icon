// This file is auto-generated. Do not edit manually.
// Source: svgs/social/flag.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FlagMeta: IconMeta = {
  name: 'flag',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const FlagIcon = forwardRef<SVGSVGElement, IconProps>(function FlagIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
  <line x1="4" y1="22" x2="4" y2="15"/>
    </Icon>
  )
})

FlagIcon.displayName = 'FlagIcon'
