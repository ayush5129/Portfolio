import assert from 'node:assert/strict'
import test from 'node:test'
import { projects } from '../src/sections/Work/projects.ts'

test('four work cards include the supplied project and a clearly marked placeholder', () => {
  assert.equal(projects.length, 4)
  assert.ok(projects.find((project) => project.id === 'expenseease')?.caseStudy)
  assert.equal(projects.find((project) => project.id === 'upcoming')?.caseStudy, undefined)
})
