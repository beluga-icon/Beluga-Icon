// This file is auto-generated. Do not edit manually.
// Source: svgs/files/trash.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const TrashMeta: IconMeta = {
  name: 'trash',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const TrashIcon = forwardRef<SVGSVGElement, IconProps>(function TrashIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <polyline points="3 6 5 6 21 6"/>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </Icon>
  )
})

TrashIcon.displayName = 'TrashIcon'
