// This file is auto-generated. Do not edit manually.
// Source: svgs/social/profile-card.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ProfileCardMeta: IconMeta = {
  name: 'profile-card',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const ProfileCardIcon = forwardRef<SVGSVGElement, IconProps>(function ProfileCardIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
  <circle cx="8" cy="12" r="3"/>
  <path d="M13 10h5"/>
  <path d="M13 14h4"/>
    </Icon>
  )
})

ProfileCardIcon.displayName = 'ProfileCardIcon'
