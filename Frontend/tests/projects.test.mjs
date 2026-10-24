import assert from 'node:assert/strict'
import test from 'node:test'
import { featuredProjects, projects } from '../src/sections/Work/projects.ts'

test('four work cards include the supplied project and a clearly marked placeholder', () => {
  assert.equal(projects.length, 4)
  assert.deepEqual(featuredProjects.map((project) => project.id), ['erp', 'blogstudio'])
  assert.ok(projects.find((project) => project.id === 'expenseease')?.caseStudy)
  assert.equal(projects.find((project) => project.id === 'upcoming')?.caseStudy, undefined)
})
