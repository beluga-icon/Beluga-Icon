import { SearchIcon, XIcon } from '@beluga-icon/react'

interface SearchBarProps {
  query: string
  onQueryChange: (q: string) => void
}

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
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
  )
}
