import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1]
assert.ok(bootstrap, 'theme bootstrap runs before the app script')

function initialTheme(saved, systemDark, storageFails = false) {
  const documentElement = { dataset: {} }
  const themeColor = { content: '#fff0e2' }
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
  assert.deepEqual(initialTheme('dark', false), { theme: 'dark', color: '#141025' })
  assert.deepEqual(initialTheme('light', true), { theme: 'light', color: '#fff0e2' })
})

test('system preference is used until a valid choice is saved', () => {
  assert.deepEqual(initialTheme(null, true), { theme: 'dark', color: '#141025' })
  assert.deepEqual(initialTheme('invalid', false), { theme: 'light', color: '#fff0e2' })
  assert.deepEqual(initialTheme(null, true, true), { theme: 'light', color: '#fff0e2' })
})
