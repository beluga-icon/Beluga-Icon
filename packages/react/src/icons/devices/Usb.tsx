// This file is auto-generated. Do not edit manually.
// Source: svgs/devices/usb.svg
import { forwardRef } from 'react'
import type { IconMeta } from '@power-puff/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const UsbMeta: IconMeta = {
  name: 'usb',
  category: 'devices',
  tags: [],
  version: '0.1.0',
}

export const UsbIcon = forwardRef<SVGSVGElement, IconProps>(function UsbIcon(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M10 14l4-4"/>
  <path d="M8 18a4 4 0 1 0 8 0"/>
  <path d="M12 2v8"/>
  <path d="M9 5l3-3 3 3"/>
  <line x1="6" y1="10" x2="10" y2="10"/>
  <line x1="14" y1="8" x2="18" y2="8"/>
  <line x1="6" y1="8" x2="6" y2="12"/>
  <line x1="18" y1="6" x2="18" y2="10"/>
    </Icon>
  )
})

UsbIcon.displayName = 'UsbIcon'
