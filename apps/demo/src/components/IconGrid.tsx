import type { IconSize } from '@power-puff/core'
import { FilterIcon } from '@power-puff/react'
import type { IconEntry } from '../data/iconRegistry'
import { IconCard } from './IconCard'

interface IconGridProps {
  icons: IconEntry[]
  size: IconSize
  color: string
  strokeWidth: number
}

export function IconGrid({ icons, size, color, strokeWidth }: IconGridProps) {
  if (icons.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <FilterIcon size="xl" />
        </div>
        <p className="empty-title">No icons found</p>
        <p className="empty-hint">Try a different search term or category.</p>
      </div>
    )
  }

  return (
    <div className="icon-grid">
      {icons.map((entry) => (
        <IconCard
          key={`${entry.meta.category}-${entry.meta.name}`}
          entry={entry}
          size={size}
          color={color}
          strokeWidth={strokeWidth}
        />
      ))}
    </div>
  )
}
