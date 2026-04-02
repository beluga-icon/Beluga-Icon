// This file is auto-generated. Do not edit manually.
// Source: svgs/social/contact.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ContactMeta: IconMeta = {
  name: 'contact',
  category: 'social',
  tags: [],
  version: '0.1.0',
}

export const ContactIcon = forwardRef<SVGSVGElement, IconProps>(function ContactIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
  <circle cx="9" cy="10" r="3"/>
  <path d="M15 8h2"/>
  <path d="M15 12h2"/>
  <path d="M5 16c0-2 2-3 4-3s4 1 4 3"/>
    </Icon>
  )
})

ContactIcon.displayName = 'ContactIcon'
