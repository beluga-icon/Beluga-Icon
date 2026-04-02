// This file is auto-generated. Do not edit manually.
// Source: svgs/files/file.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const FileMeta: IconMeta = {
  name: 'file',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const FileIcon = forwardRef<SVGSVGElement, IconProps>(function FileIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
    </Icon>
  )
})

FileIcon.displayName = 'FileIcon'
