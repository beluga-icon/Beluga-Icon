import { useState, useEffect } from 'react'
import type { IconSize } from '@power-puff/core'
import { SunIcon, MoonIcon, PackageIcon, Grid2x2Icon, WandIcon, HeartIcon } from '@power-puff/react'
import { SearchBar } from './components/SearchBar'
import { PropControls } from './components/PropControls'
import { IconGrid } from './components/IconGrid'
import { Playground } from './components/Playground'
import { useIconSearch } from './hooks/useIconSearch'
import { icons } from './data/iconRegistry'

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
  const [size, setSize] = useState<IconSize>('lg')
  const [color, setColor] = useState(() => (prefersDark() ? '#f0f0f0' : '#0c0c0c'))
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [dark, setDark] = useState(() => prefersDark())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const results = useIconSearch(query, category)

  const handleThemeToggle = () => {
    const next = !dark
    setDark(next)
    setColor(next ? '#f0f0f0' : '#0c0c0c')
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="header-logo-wrap">
              <img src="/beluga-icon.svg" alt="Power Puff Icon logo" className="header-logo-img" />
            </div>
            <div>
              <h1 className="header-title">Power Puff Icon</h1>
              <p className="header-subtitle">
                {icons.length} icons · {CATEGORIES_COUNT} categories · React
              </p>
            </div>
          </div>

          <div className="header-actions">
            <a
              href="https://www.npmjs.com/package/@power-puff/react"
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
              <div className="sidebar-section">
                <span className="sidebar-section-title">Preview</span>
                <PropControls
                  size={size}
                  color={color}
                  strokeWidth={strokeWidth}
                  onSizeChange={setSize}
                  onColorChange={setColor}
                  onStrokeWidthChange={setStrokeWidth}
                />
              </div>

              <div className="sidebar-divider" />

              <div className="sidebar-section">
                <span className="sidebar-section-title">Usage</span>
                <div className="install-box">
                  <p className="install-label">Install</p>
                  <code className="install-code">npm i @power-puff/react</code>
                </div>
                <div className="install-box">
                  <p className="install-label">Import</p>
                  <code className="install-code">
                    {'import { SearchIcon }'}
                    <br />
                    {"from '@power-puff/react'"}
                  </code>
                </div>
              </div>

              <div className="sidebar-divider" />

              <p className="install-hint">
                Click any icon to copy its import statement.
              </p>
            </aside>

            <section className="content">
              <SearchBar
                query={query}
                category={category}
                onQueryChange={setQuery}
                onCategoryChange={setCategory}
              />

              <p className="result-count">
                {results.length} of {icons.length} icons
              </p>

              <IconGrid
                icons={results}
                size={size}
                color={color}
                strokeWidth={strokeWidth}
              />
            </section>
          </main>

          <footer className="footer">
            <p className="footer-text" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Power Puff Icon — {icons.length} open source icons
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
