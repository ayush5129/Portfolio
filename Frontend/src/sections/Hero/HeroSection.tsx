import { HeroHeadline } from './HeroHeadline'
import { HeroShowcase } from './HeroShowcase'
import './Hero.css'

export function HeroSection() {
  return (
    <section className="hero page-grid" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software developer / Backend focused</p>
        <HeroHeadline />
        <p className="hero-intro">I build reliable web applications for real business workflows—from ASP.NET Core APIs and SQL Server data to responsive interfaces.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/Ayush_Kumar_Singh_Resume.pdf" download>Download resume</a>
          <a className="button button-outline" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-stats" aria-label="At a glance">
          <div><strong>5+</strong><span>Projects</span></div>
          <div><strong>1+</strong><span>Year experience</span></div>
          <div><strong>10+</strong><span>Technologies</span></div>
          <div><strong>∞</strong><span>Always learning</span></div>
        </div>
      </div>
      <HeroShowcase />
    </section>
  )
}
