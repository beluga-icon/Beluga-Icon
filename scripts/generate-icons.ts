/**
 * generate-icons.ts
 *
 * Reads SVG files from /svgs (including subdirectories) and generates:
 *   - packages/react/src/icons/<Category>/<Name>.tsx   (React component + IconMeta)
 *   - packages/react/src/icons/index.ts                (barrel export)
 *
 * Directory structure:
 *   svgs/
 *     arrows/
 *       arrow-up.svg
 *       arrow-up.meta.json   (optional) → { "tags": ["direction", "up"] }
 *     ui/
 *       search.svg
 *
 * Rules:
 *   - SVG files must be named in kebab-case (e.g. arrow-up.svg)
 *   - Each SVG should use a 24x24 viewBox and be stroke-based (fill="none")
 *   - Flat svgs/ files (no subdirectory) land in category "general"
 *
 * Usage:
 *   npm run generate
 */

import fs from 'node:fs'
import path from 'node:path'

const SVG_DIR = path.resolve('svgs')
const REACT_ICONS_DIR = path.resolve('packages/react/src/icons')
const ICON_VERSION = '0.1.0'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SvgEntry {
  file: string        // e.g. "arrow-up.svg"
  category: string    // e.g. "arrows" | "general"
  baseName: string    // e.g. "arrow-up"
  pascalName: string  // e.g. "ArrowUp"
  tags: string[]
  absPath: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('')
}

/**
 * Strip the outer <svg …> wrapper and return only the inner elements.
 * Also removes XML declarations, comments, and title/desc tags.
 */
function extractSvgInner(svgContent: string): string {
  return svgContent
    .replace(/<\?xml[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<desc[^>]*>[\s\S]*?<\/desc>/gi, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    .trim()
}

/**
 * Convert SVG attribute names to JSX-compatible camelCase/React names.
 */
function svgToJsx(inner: string): string {
  return inner
    .replace(/\bclass=/g, 'className=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bstroke-dasharray=/g, 'strokeDasharray=')
    .replace(/\bstroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(/\bclip-path=/g, 'clipPath=')
    .replace(/\bfont-size=/g, 'fontSize=')
    .replace(/\bfont-family=/g, 'fontFamily=')
    .replace(/\btext-anchor=/g, 'textAnchor=')
    .replace(/\bxlink:href=/g, 'xlinkHref=')
    .replace(/\bstop-color=/g, 'stopColor=')
    .replace(/\bstop-opacity=/g, 'stopOpacity=')
}

/**
 * Read optional sidecar .meta.json for tags.
 */
function readMetaTags(svgAbsPath: string): string[] {
  const metaPath = svgAbsPath.replace(/\.svg$/, '.meta.json')
  if (!fs.existsSync(metaPath)) return []
  try {
    const raw = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
    if (Array.isArray(raw.tags)) return raw.tags as string[]
  } catch {
    // malformed meta — ignore
  }
  return []
}

/**
 * Scan svgs/ directory (recursively, one level deep) and collect all SVG entries.
 */
function collectSvgEntries(): SvgEntry[] {
  const entries: SvgEntry[] = []

  if (!fs.existsSync(SVG_DIR)) return entries

  const topLevel = fs.readdirSync(SVG_DIR)

  for (const item of topLevel) {
    const itemPath = path.join(SVG_DIR, item)
    const stat = fs.statSync(itemPath)

    if (stat.isDirectory()) {
      // subdirectory → category = directory name
      const category = item
      const files = fs.readdirSync(itemPath).filter((f) => f.endsWith('.svg'))
      for (const file of files) {
        const baseName = path.basename(file, '.svg')
        const absPath = path.join(itemPath, file)
        entries.push({
          file,
          category,
          baseName,
          pascalName: toPascalCase(baseName),
          tags: readMetaTags(absPath),
          absPath,
        })
      }
    } else if (item.endsWith('.svg')) {
      // flat file → category = "general"
      const baseName = path.basename(item, '.svg')
      entries.push({
        file: item,
        category: 'general',
        baseName,
        pascalName: toPascalCase(baseName),
        tags: readMetaTags(itemPath),
        absPath: itemPath,
      })
    }
  }

  return entries
}

// ---------------------------------------------------------------------------
// Code generators
// ---------------------------------------------------------------------------

function generateReactComponent(entry: SvgEntry, jsxInner: string): string {
  const componentName = `${entry.pascalName}Icon`
  const metaName = `${entry.pascalName}Meta`
  const tagsLiteral = JSON.stringify(entry.tags)

  return `// This file is auto-generated. Do not edit manually.
// Source: svgs/${entry.category === 'general' ? '' : entry.category + '/'}${entry.file}
import { forwardRef } from 'react'
import type { IconMeta } from '@beluga-icon/core'
import { Icon } from '../../components/Icon'
import type { IconProps } from '../../components/Icon'

export const ${metaName}: IconMeta = {
  name: '${entry.baseName}',
  category: '${entry.category}',
  tags: ${tagsLiteral},
  version: '${ICON_VERSION}',
}

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(function ${componentName}(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      ${jsxInner}
    </Icon>
  )
})

${componentName}.displayName = '${componentName}'
`
}

function generateBarrelExport(entries: SvgEntry[]): string {
  const lines = entries.map((e) => {
    const componentName = `${e.pascalName}Icon`
    const metaName = `${e.pascalName}Meta`
    const relPath = `./${e.category}/${e.pascalName}`
    return `export { ${componentName}, ${metaName} } from '${relPath}'`
  })
  return `// This file is auto-generated. Do not edit manually.\n${lines.join('\n')}\n`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const entries = collectSvgEntries()

  if (entries.length === 0) {
    console.log('⚠  No SVG files found in svgs/. Nothing to generate.')
    process.exit(0)
  }

  // Ensure category subdirectories exist
  const categories = [...new Set(entries.map((e) => e.category))]
  for (const cat of categories) {
    fs.mkdirSync(path.join(REACT_ICONS_DIR, cat), { recursive: true })
  }

  const generated: SvgEntry[] = []

  for (const entry of entries) {
    const svgContent = fs.readFileSync(entry.absPath, 'utf-8')
    const inner = svgToJsx(extractSvgInner(svgContent))

    if (!inner) {
      console.warn(`  ⚠ Skipping ${entry.file} — could not extract SVG content`)
      continue
    }

    const componentCode = generateReactComponent(entry, inner)
    const outPath = path.join(REACT_ICONS_DIR, entry.category, `${entry.pascalName}.tsx`)
    fs.writeFileSync(outPath, componentCode, 'utf-8')
    generated.push(entry)
    console.log(`  ✓ ${entry.pascalName}Icon  [${entry.category}]`)
  }

  // Write barrel index
  fs.writeFileSync(
    path.join(REACT_ICONS_DIR, 'index.ts'),
    generateBarrelExport(generated),
    'utf-8',
  )

  // Print summary by category
  const byCategory = generated.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] ?? 0) + 1
    return acc
  }, {})

  console.log('\n📦 Summary:')
  for (const [cat, count] of Object.entries(byCategory)) {
    console.log(`   ${cat}: ${count} icon(s)`)
  }
  console.log(`\n✅ Generated ${generated.length} icon(s) → packages/react/src/icons/`)
}

main()
