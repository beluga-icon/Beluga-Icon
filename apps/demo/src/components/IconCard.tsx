import { useState } from 'react'
import type { IconSize } from '@power-puff/core'
import { CheckIcon } from '@power-puff/react'
import type { IconEntry } from '../data/iconRegistry'

interface IconCardProps {
  entry: IconEntry
  size: IconSize
  color: string
  strokeWidth: number
}

export function IconCard({ entry, size, color, strokeWidth }: IconCardProps) {
  const [copied, setCopied] = useState(false)

  const componentName = `${entry.meta.name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')}Icon`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `import { ${componentName} } from '@power-puff/react'`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      // clipboard not available
    }
  }

  const IconComponent = entry.component

  return (
    <button
      className="icon-card"
      onClick={handleCopy}
      title={`Copy import for ${componentName}`}
    >
      <div className="icon-card-preview">
        <IconComponent size={size} color={color} strokeWidth={strokeWidth} />
      </div>
      <span className="icon-card-name">{componentName.replace('Icon', '')}</span>
      <span className="icon-card-category">{entry.meta.category}</span>

      {copied && (
        <div className="icon-card-copied">
          <CheckIcon size="sm" />
          <span className="icon-card-copied-label">Copied</span>
        </div>
      )}
    </button>
  )
}
