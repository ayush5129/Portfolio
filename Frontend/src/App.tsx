import { SiteHeader } from './layout/SiteHeader'
import { SiteFooter } from './layout/SiteFooter'
import { HeroSection } from './sections/Hero/HeroSection'
import { WorkSection } from './sections/Work/WorkSection'
import { AboutSection } from './sections/About/AboutSection'
import { ExperienceSection } from './sections/Experience/ExperienceSection'
import { SkillsSection } from './sections/Skills/SkillsSection'
import { ContactSection } from './sections/Contact/ContactSection'
import './styles/layout.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
