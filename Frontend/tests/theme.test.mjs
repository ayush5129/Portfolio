import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1]
assert.ok(bootstrap, 'theme bootstrap runs before the app script')

function initialTheme(saved, systemDark, storageFails = false) {
  const documentElement = { dataset: {} }
  const themeColor = { content: '#0e131f' }
  runInNewContext(bootstrap, {
    document: { documentElement, querySelector: () => themeColor },
    localStorage: { getItem: () => {
      if (storageFails) throw new Error('storage unavailable')
      return saved
    } },
    matchMedia: () => ({ matches: systemDark }),
  })
  return { theme: documentElement.dataset.theme, color: themeColor.content }
}

test('saved theme takes priority over the system preference', () => {
  assert.deepEqual(initialTheme('dark', false), { theme: 'dark', color: '#0e131f' })
  assert.deepEqual(initialTheme('light', true), { theme: 'light', color: '#f3f4f6' })
})

test('dark is the default regardless of system preference or unavailable storage', () => {
  assert.deepEqual(initialTheme(null, true), { theme: 'dark', color: '#0e131f' })
  assert.deepEqual(initialTheme(null, false), { theme: 'dark', color: '#0e131f' })
  assert.deepEqual(initialTheme('invalid', false), { theme: 'dark', color: '#0e131f' })
  assert.deepEqual(initialTheme(null, false, true), { theme: 'dark', color: '#0e131f' })
})
