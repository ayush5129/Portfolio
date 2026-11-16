import './About.css'

const approach = [
  {
    title: 'Business logic & data',
    description: 'I turn business requirements into database-driven applications, using C#, ASP.NET Core, Entity Framework Core, and SQL Server to build clear REST APIs.',
  },
  {
    title: 'Security & architecture',
    description: 'I work with JWT authentication, role-based authorization, and modular architectures, guided by object-oriented programming and clean architecture principles.',
  },
  {
    title: 'End-to-end development',
    description: 'I also use React, Angular, and MongoDB to deliver complete features, and keep improving my problem-solving and development practices.',
  },
]

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-intro">
          <p className="about-kicker">About me</p>
          <h2 id="about-title">Building software around <span>real business problems.</span></h2>
          <p>I’m Ayush Kumar Singh, a Software Developer at inQmise Technologies India Pvt. Ltd. I have one year of professional experience in backend and full-stack development.</p>
          <p>I care about maintainable code and sound engineering practices. My goal is to build reliable applications that solve business problems while continuing to grow as a developer.</p>
          <a className="about-link" href="#experience">See my experience <span aria-hidden="true">↗</span></a>
        </div>

        <div className="about-panel">
          <div className="about-panel-heading">
            <span className="about-monogram" aria-hidden="true">A</span>
            <div><span>How I work</span><strong>From idea to useful software</strong></div>
          </div>
          <div className="about-approach">
            {approach.map((item, index) => (
              <details key={item.title} open={index === 0}>
                <summary><span>{item.title}</span><span className="about-toggle" aria-hidden="true">+</span></summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
          <p className="about-panel-note">Explore each step to see what guides my work.</p>
        </div>
      </div>
    </section>
  )
}
