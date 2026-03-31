// This file is auto-generated. Do not edit manually.
// Source: svgs/buildings/school.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const SchoolMeta: IconMeta = {
  name: 'school',
  category: 'buildings',
  tags: [],
  version: '0.1.0',
}

export const SchoolIcon = forwardRef<SVGSVGElement, IconProps>(function SchoolIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="m4 6 8-4 8 4"/>
  <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/>
  <path d="M14 22v-4a2 2 0 0 0-4 0v4"/>
  <path d="M18 5v17"/>
  <path d="M6 5v17"/>
  <circle cx="12" cy="9" r="2"/>
    </Icon>
  )
})

SchoolIcon.displayName = 'SchoolIcon'
