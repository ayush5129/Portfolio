import { useRef, useState } from 'react'
import { FiBriefcase, FiClock, FiCode, FiMail, FiMenu, FiMoon, FiSun, FiUser, FiX } from 'react-icons/fi'
import './SiteHeader.css'

const navigation = [
  { label: 'Project', href: '#work', icon: FiBriefcase },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Experience', href: '#experience', icon: FiClock },
  { label: 'Skills', href: '#skills', icon: FiCode },
  { label: 'Contact', href: '#contact', icon: FiMail },
]

export function SiteHeader() {
  const menuRef = useRef<HTMLDialogElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(document.documentElement.dataset.theme === 'dark')

  function toggleTheme() {
    const theme = darkTheme ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141025' : '#fff0e2')
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* The switch still works when storage is unavailable. */ }
    setDarkTheme(theme === 'dark')
  }

  function openMenu() {
    menuRef.current?.showModal()
    setMenuOpen(true)
  }

  function closeMenu() {
    menuRef.current?.close()
  }

  return (
    <div className="hero-header-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ayush Kumar Singh, back to top">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">Ayush Kumar Singh <small>Software Developer</small></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Dark theme" aria-pressed={darkTheme} title={darkTheme ? 'Switch to light theme' : 'Switch to dark theme'}>
            {darkTheme ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="header-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          <button className="menu-toggle" type="button" aria-label="Open navigation" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={openMenu}>
            <FiMenu aria-hidden="true" />
          </button>
        </div>
        <dialog className="mobile-menu" id="mobile-navigation" ref={menuRef} aria-label="Main navigation" onClose={() => setMenuOpen(false)}>
          <div className="mobile-menu-header">
            <strong>Explore</strong>
            <button className="menu-close" type="button" onClick={closeMenu} aria-label="Close navigation">
              <FiX aria-hidden="true" />
            </button>
          </div>
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {navigation.map(({ label, href, icon: Icon }) => <a key={href} href={href} onClick={closeMenu}><Icon aria-hidden="true" />{label}</a>)}
          </nav>
          <a className="mobile-menu-contact" href="#contact" onClick={closeMenu}>Let’s talk</a>
        </dialog>
      </header>
    </div>
  )
}
