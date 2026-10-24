import { useState } from 'react'
import { featuredProjects } from '../Work/projects'

export function HeroShowcase() {
  const [activeId, setActiveId] = useState(featuredProjects[0].id)

  return (
    <div className="hero-showcase" aria-label="Featured projects">
      <div className="hero-showcase-shape shape-one" aria-hidden="true" />
      <div className="hero-showcase-shape shape-two" aria-hidden="true" />
      <div className="hero-feature-stack">
        {featuredProjects.map((project) => (
          <button
            className={`hero-feature hero-feature-${project.id}${activeId === project.id ? ' is-active' : ''}`}
            type="button"
            key={project.id}
            aria-pressed={activeId === project.id}
            onClick={() => setActiveId(project.id)}
          >
            <span className="hero-feature-copy">
              <span className="hero-feature-tag">{project.category}</span>
              <strong>{project.title}</strong>
              <span className="hero-feature-summary">{project.summary}</span>
              <span className="hero-feature-arrow" aria-hidden="true">↗</span>
            </span>
            <span className={`hero-preview hero-preview-${project.id}`} aria-hidden="true">
              <span className="preview-top"><i /><i /><i /><b>{project.id === 'erp' ? 'Operations' : 'Studio'}</b></span>
              <span className="preview-body">
                <span className="preview-sidebar"><i /><i /><i /><i /><i /></span>
                <span className="preview-content">
                  <span className="preview-heading" />
                  <span className="preview-metrics"><i /><i /><i /></span>
                  <span className="preview-chart"><i /><i /><i /><i /><i /><i /></span>
                  <span className="preview-rows"><i /><i /><i /></span>
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
