// This file is auto-generated. Do not edit manually.
// Source: svgs/ui/lock.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const LockMeta: IconMeta = {
  name: 'lock',
  category: 'ui',
  tags: [],
  version: '0.1.0',
}

export const LockIcon = forwardRef<SVGSVGElement, IconProps>(function LockIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </Icon>
  )
})

LockIcon.displayName = 'LockIcon'
