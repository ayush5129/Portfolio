import { useState } from 'react'
import { skillGroups } from './skills'
import { SkillCategoryIcon } from './SkillCategoryIcon'
import { SkillIcon } from './SkillIcon'
import { ProblemSolvingPanel } from './ProblemSolvingPanel'
import './Skills.css'

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeGroup = skillGroups[activeIndex]

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">
        <div className="skills-intro">
          <p className="skills-kicker">Skills & expertise</p>
          <h2 className="skills-heading" id="skills-title">Tools for <span>real-world software.</span></h2>
          <p>From backend APIs to user interfaces, I use these technologies to build maintainable, data-driven applications.</p>
        </div>
        <div className="skills-explorer">
          <div className="skills-menu">
            {skillGroups.map((group, index) => (
              <button
                className={`skills-menu-button${activeIndex === index ? ' is-active' : ''}`}
                type="button"
                aria-pressed={activeIndex === index}
                aria-controls="skills-detail"
                onClick={() => setActiveIndex(index)}
                key={group.title}
              >
                <SkillCategoryIcon title={group.title} />
                <span className="skills-menu-name">{group.title}</span>
                <span className="skills-menu-arrow" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
          <div className="skills-menu-dots" aria-hidden="true">
            {skillGroups.map((group, index) => <span className={activeIndex === index ? 'is-active' : ''} key={group.title} />)}
          </div>
          <div className={`skills-detail${activeGroup.title === 'Problem Solving' ? ' skills-detail--problem-solving' : ''}`} id="skills-detail" aria-live="polite">
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
            {activeGroup.title === 'Problem Solving' ? <ProblemSolvingPanel /> : (
              <ul className="skills-tags" aria-label={`${activeGroup.title} skills`}>
                {activeGroup.items.map((item) => <li key={item}><span className="skills-tag-icon" aria-hidden="true"><SkillIcon name={item} /></span>{item}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
