// This file is auto-generated. Do not edit manually.
// Source: svgs/files/image.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ImageMeta: IconMeta = {
  name: 'image',
  category: 'files',
  tags: [],
  version: '0.1.0',
}

export const ImageIcon = forwardRef<SVGSVGElement, IconProps>(function ImageIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <polyline points="21 15 16 10 5 21"/>
    </Icon>
  )
})

ImageIcon.displayName = 'ImageIcon'
