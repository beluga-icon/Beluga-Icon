// This file is auto-generated. Do not edit manually.
// Source: svgs/social/user-check.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserCheckMeta: IconMeta = {
  name: 'user-check',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const UserCheckIcon = forwardRef<SVGSVGElement, IconProps>(function UserCheckIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
  <circle cx="8.5" cy="7" r="4"/>
  <polyline points="17 11 19 13 23 9"/>
    </Icon>
  )
})

UserCheckIcon.displayName = 'UserCheckIcon'
