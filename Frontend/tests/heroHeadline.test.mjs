import assert from 'node:assert/strict'
import test from 'node:test'
import { headline, visibleHeadline } from '../src/sections/Hero/heroHeadlineText.ts'

test('typed heading preserves every character and highlights only the intended word', () => {
  for (let length = 0; length <= headline.length; length++) {
    const { before, highlight, after } = visibleHeadline(length)
    assert.equal(before + highlight + after, headline.slice(0, length))
    assert.equal(highlight, 'impactful'.slice(0, Math.max(0, length - 'From ideas to '.length)))
  }
})
