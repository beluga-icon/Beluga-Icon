// This file is auto-generated. Do not edit manually.
// Source: svgs/development/git-branch.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const GitBranchMeta: IconMeta = {
  name: 'git-branch',
  category: 'development',
  tags: [],
  version: '0.1.0',
}

export const GitBranchIcon = forwardRef<SVGSVGElement, IconProps>(function GitBranchIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <line x1="6" y1="3" x2="6" y2="15"/>
  <circle cx="18" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M18 9a9 9 0 0 1-9 9"/>
    </Icon>
  )
})

GitBranchIcon.displayName = 'GitBranchIcon'
