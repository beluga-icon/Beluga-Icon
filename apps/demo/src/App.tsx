import { useState, useEffect, useMemo } from 'react'
import { SunIcon, MoonIcon, PackageIcon, Grid2x2Icon, WandIcon, HeartIcon, SearchIcon, XIcon } from '@beluga-icon/react'
import { SearchBar } from './components/SearchBar'
import { IconGrid } from './components/IconGrid'
import { Playground } from './components/Playground'
import { useIconSearch } from './hooks/useIconSearch'
import { icons, categories } from './data/iconRegistry'

const CATEGORIES_COUNT = 24

function prefersDark() {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
}

type Tab = 'gallery' | 'playground'

export function App() {
  const [tab, setTab] = useState<Tab>('gallery')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [catSearch, setCatSearch] = useState('')
  const [dark, setDark] = useState(() => prefersDark())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const results = useIconSearch(query, category)

  // Icon count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    icons.forEach(i => {
      counts[i.meta.category] = (counts[i.meta.category] || 0) + 1
    })
    return counts
  }, [])

  // Filtered sidebar category list
  const filteredCategories = useMemo(() => {
    const q = catSearch.trim().toLowerCase()
    if (!q) return categories
    return categories.filter(c => c.toLowerCase().includes(q))
  }, [catSearch])

  const handleThemeToggle = () => setDark(prev => !prev)

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-logo-wrap">
              <img src="/beluga-icon.svg" alt="Beluga Icon logo" className="header-logo-img" />
            </div>
            <div>
              <h1 className="header-title">Beluga Icon</h1>
            </div>
          </div>

          <div className="header-actions">
            <a
              href="https://www.npmjs.com/package/@beluga-icon/react"
              className="header-npm"
              target="_blank"
              rel="noreferrer"
            >
              <span className="header-npm-inner">
                <PackageIcon size="xs" />
                npm
              </span>
            </a>
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon size="xs" /> : <MoonIcon size="xs" />}
            </button>
          </div>
        </div>
      </header>

      {/* Tab navigation */}
      <nav className="nav-tabs">
        <div className="nav-tabs-inner">
          <button
            className={`nav-tab${tab === 'gallery' ? ' active' : ''}`}
            onClick={() => setTab('gallery')}
          >
            <span className="nav-tab-inner">
              <Grid2x2Icon size="xs" />
              Gallery
            </span>
          </button>
          <button
            className={`nav-tab${tab === 'playground' ? ' active' : ''}`}
            onClick={() => setTab('playground')}
          >
            <span className="nav-tab-inner">
              <WandIcon size="xs" />
              Playground
            </span>
          </button>
        </div>
      </nav>

      {tab === 'gallery' ? (
        <>
          <main className="main">
            <aside className="sidebar">

              {/* Category search */}
              <div className="sidebar-section">
                <span className="sidebar-section-title">Categories</span>
                <div className="sidebar-cat-search-wrap">
                  <span className="sidebar-cat-search-icon">
                    <SearchIcon size="xs" />
                  </span>
                  <input
                    type="text"
                    className="sidebar-cat-search-input"
                    placeholder="Filter categories…"
                    value={catSearch}
                    onChange={e => setCatSearch(e.target.value)}
                    spellCheck={false}
                  />
                  {catSearch && (
                    <button className="sidebar-cat-search-clear" onClick={() => setCatSearch('')}>
                      <XIcon size="xs" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category list */}
              <div className="sidebar-cat-list">
                <button
                  className={`sidebar-cat-item${category === 'all' ? ' active' : ''}`}
                  onClick={() => setCategory('all')}
                >
                  <span className="sidebar-cat-name">All</span>
                  <span className="sidebar-cat-count">{icons.length}</span>
                </button>
                {filteredCategories.map(cat => (
                  <button
                    key={cat}
                    className={`sidebar-cat-item${category === cat ? ' active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    <span className="sidebar-cat-name">{cat}</span>
                    <span className="sidebar-cat-count">{categoryCounts[cat] ?? 0}</span>
                  </button>
                ))}
                {filteredCategories.length === 0 && (
                  <p className="sidebar-cat-empty">No categories found</p>
                )}
              </div>

            </aside>

            <section className="content">
              <SearchBar query={query} onQueryChange={setQuery} />

              <p className="result-count">
                {results.length} of {icons.length} icons
                {category !== 'all' && <> in <strong>{category}</strong></>}
              </p>

              <IconGrid icons={results} />
            </section>
          </main>

          <footer className="footer">
            <p className="footer-text" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Beluga Icon — {icons.length} open source icons
              <HeartIcon size="xs" />
              for React
            </p>
          </footer>
        </>
      ) : (
        <Playground />
      )}
    </div>
  )
}
