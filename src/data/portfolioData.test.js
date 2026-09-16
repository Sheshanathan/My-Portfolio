import { describe, expect, it } from 'vitest'
import { personalInfo, projects } from './portfolioData.js'

describe('portfolio data', () => {
  it('keeps project routes unique', () => {
    const slugs = projects.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('provides secure public links', () => {
    const links = [
      personalInfo.social.github,
      personalInfo.social.linkedin,
      ...projects.flatMap((project) => [project.github, project.demo]).filter(Boolean),
    ]

    links.forEach((link) => expect(link).toMatch(/^https:\/\//))
  })

  it('provides usable media for every project', () => {
    projects.forEach((project) => {
      expect(Boolean(project.image || project.video)).toBe(true)
      if (project.video) expect(project.poster).toMatch(/^\/project-images\//)
    })
  })

  it('keeps recruiter-facing technology labels version-neutral', () => {
    projects.flatMap((project) => project.technology).forEach((technology) => {
      expect(technology).not.toMatch(/\s\d+(?:\.\d+)*$/)
    })
  })
})
