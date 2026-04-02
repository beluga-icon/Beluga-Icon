// This file is auto-generated. Do not edit manually.
// Source: svgs/development/bug.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const BugMeta: IconMeta = {
  name: 'bug',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const BugIcon = forwardRef<SVGSVGElement, IconProps>(function BugIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="8" y="6" width="8" height="14" rx="4"/>
  <path d="m19 7-3 2"/>
  <path d="m5 7 3 2"/>
  <path d="m19 19-3-2"/>
  <path d="m5 19 3-2"/>
  <path d="M20 13h-4"/>
  <path d="M4 13h4"/>
  <path d="m10 4 1 2h2l1-2"/>
    </Icon>
  )
})

BugIcon.displayName = 'BugIcon'
