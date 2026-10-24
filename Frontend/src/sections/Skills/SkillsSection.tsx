import { useState } from 'react'
import { skillGroups } from './skills'
import { SkillCategoryIcon } from './SkillCategoryIcon'
import { SkillIcon } from './SkillIcon'
import './Skills.css'

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeGroup = skillGroups[activeIndex]

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">
        <h2 className="skills-heading" id="skills-title">Skills <span>& expertise</span></h2>
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
          <div className="skills-detail" id="skills-detail" aria-live="polite">
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
            <ul className="skills-tags" aria-label={`${activeGroup.title} skills`}>
              {activeGroup.items.map((item) => <li key={item}><span className="skills-tag-icon" aria-hidden="true"><SkillIcon name={item} /></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
