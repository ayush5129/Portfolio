import { useRef } from 'react'
import { FiX } from 'react-icons/fi'
import { projects, type Project } from './projects'
import './Work.css'

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return <img className="work-preview-image" src={project.image.src} alt={project.image.alt} loading="lazy" />
  }

  if (!project.caseStudy) {
    return <div className="work-preview work-preview-upcoming" aria-hidden="true"><span>+</span><strong>Space for what’s next</strong></div>
  }

  return (
    <div className={`work-preview work-preview-${project.id}`} role="img" aria-label={`Conceptual interface illustration for ${project.title}`}>
      <div className="work-preview-glow" />
      <div className="work-preview-window" aria-hidden="true">
        <div className="work-preview-bar"><i /><i /><i /><span>{project.title}</span></div>
        <div className="work-preview-screen">
          <div className="work-preview-rail"><i /><i /><i /><i /></div>
          <div className="work-preview-canvas">
            <span className="work-preview-heading" />
            <div className="work-preview-tiles"><i /><i /><i /></div>
            <div className="work-preview-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="work-preview-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="work-preview-orbit" aria-hidden="true" />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const caseStudyRef = useRef<HTMLDialogElement>(null)

  return (
    <article className={`work-card work-card-${project.id}`} id={`project-${project.id}`}>
      <ProjectPreview project={project} />
      <div className="work-card-content">
        <span className="work-card-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.stack.length > 0 && <ul className="work-card-stack" aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>}
        {project.caseStudy ? (
          <button className="work-case-study-trigger" type="button" aria-haspopup="dialog" onClick={() => caseStudyRef.current?.showModal()}>
            Explore case study <span aria-hidden="true">↗</span>
          </button>
        ) : <span className="work-card-pending">Project details coming soon</span>}
      </div>
      {project.caseStudy && (
        <dialog className="work-case-study" ref={caseStudyRef} aria-labelledby={`case-study-${project.id}`}>
          <div className="work-case-study-top">
            <span className="work-card-category">{project.category}</span>
            <form method="dialog"><button className="work-case-study-close" type="submit" aria-label="Close case study"><FiX aria-hidden="true" /></button></form>
          </div>
          <h3 id={`case-study-${project.id}`}>{project.title}</h3>
          <p>{project.summary}</p>
          <dl className="work-case-study-list">
            <div><dt>Problem</dt><dd>{project.caseStudy.problem}</dd></div>
            <div><dt>My work</dt><dd>{project.caseStudy.contribution}</dd></div>
            <div><dt>Approach</dt><dd>{project.caseStudy.decisions}</dd></div>
            <div><dt>Result</dt><dd>{project.caseStudy.result}</dd></div>
          </dl>
        </dialog>
      )}
    </article>
  )
}

export function WorkSection() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="work-inner">
        <div className="work-heading">
          <p className="work-kicker">Projects</p>
          <h2 id="work-title">Built for real workflows.</h2>
          <p>From complex business workflows to everyday web applications, I focus on what matters—reliable APIs, well-structured data, and software that's practical to use.</p>
        </div>
        <div className="work-grid">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
      </div>
    </section>
  )
}
