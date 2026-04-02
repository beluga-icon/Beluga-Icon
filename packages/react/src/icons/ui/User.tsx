// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/user.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UserMeta: IconMeta = {
  name: 'user',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const UserIcon = forwardRef<SVGSVGElement, IconProps>(function UserIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
    </Icon>
  )
})

UserIcon.displayName = 'UserIcon'
