import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve('dist/esm')

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(entryPath) : entryPath
    }),
  )
  return files.flat()
}

function withJsExtension(file, specifier) {
  if (!specifier.startsWith('.')) return specifier
  if (path.extname(specifier)) return specifier

  const resolved = path.resolve(path.dirname(file), specifier)
  if (existsSync(`${resolved}.js`)) return `${specifier}.js`
  if (existsSync(path.join(resolved, 'index.js'))) return `${specifier}/index.js`

  return `${specifier}.js`
}

function rewriteImports(file, source) {
  return source
    .replace(/(\bfrom\s+['"])(\.[^'"]+)(['"])/g, (_match, before, specifier, after) => {
      return `${before}${withJsExtension(file, specifier)}${after}`
    })
    .replace(/(\bimport\s+['"])(\.[^'"]+)(['"])/g, (_match, before, specifier, after) => {
      return `${before}${withJsExtension(file, specifier)}${after}`
    })
}

const files = (await walk(root)).filter((file) => file.endsWith('.js'))

await Promise.all(
  files.map(async (file) => {
    const source = await readFile(file, 'utf8')
    const next = rewriteImports(file, source)
    if (next !== source) {
      await writeFile(file, next)
    }
  }),
)
