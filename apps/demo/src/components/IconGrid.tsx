import { FilterIcon } from '@beluga-icon/react'
import type { IconEntry } from '../data/iconRegistry'
import { IconCard } from './IconCard'

interface IconGridProps {
  icons: IconEntry[]
}

export function IconGrid({ icons }: IconGridProps) {
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
        />
      ))}
    </div>
  )
}
