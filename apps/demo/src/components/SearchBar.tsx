import { SearchIcon, XIcon } from '@power-puff/react'
import { categories } from '../data/iconRegistry'

interface SearchBarProps {
  query: string
  category: string
  onQueryChange: (q: string) => void
  onCategoryChange: (c: string) => void
}

export function SearchBar({ query, category, onQueryChange, onCategoryChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input-wrap">
        <span className="search-icon">
          <SearchIcon size="sm" aria-hidden />
        </span>
        <input
          type="text"
          placeholder="Search icons…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="search-input"
          spellCheck={false}
          autoComplete="off"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
          >
            <XIcon size="xs" aria-hidden />
          </button>
        )}
      </div>

      <div className="category-tabs">
        <button
          className={`category-tab ${category === 'all' ? 'active' : ''}`}
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${category === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
