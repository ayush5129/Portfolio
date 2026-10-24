import { experiences } from './experience'
import './Experience.css'

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-inner">
        <div className="experience-intro">
          <p className="experience-kicker">Experience</p>
          <h2 id="experience-title">The work behind <span>the code.</span></h2>
          <p>From creating technical assessments to building production applications, each role has shaped how I solve real problems.</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <details className={`experience-card${index === 0 ? ' experience-card-featured' : ''}`} key={experience.company} open={index === 0}>
              <summary>
                <span className="experience-card-title">
                  <span className="experience-company">{experience.company}</span>
                  <strong>{experience.role}</strong>
                </span>
                <span className="experience-card-meta">
                  <span>{experience.period}</span>
                  {experience.location && <span>{experience.location}</span>}
                </span>
                <span className="experience-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="experience-card-content">
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-list">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <ul className="experience-tags" aria-label={`${experience.company} technologies`}>
                  {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
