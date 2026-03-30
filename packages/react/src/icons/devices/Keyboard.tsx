// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/keyboard.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const KeyboardMeta: IconMeta = {
  name: 'keyboard',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const KeyboardIcon = forwardRef<SVGSVGElement, IconProps>(function KeyboardIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>
  <line x1="6" y1="10" x2="6.01" y2="10"/>
  <line x1="10" y1="10" x2="10.01" y2="10"/>
  <line x1="14" y1="10" x2="14.01" y2="10"/>
  <line x1="18" y1="10" x2="18.01" y2="10"/>
  <line x1="8" y1="14" x2="16" y2="14"/>
    </Icon>
  )
})

KeyboardIcon.displayName = 'KeyboardIcon'
