import { useRef, useState } from 'react'
import { FiBriefcase, FiClock, FiCode, FiMail, FiMenu, FiUser, FiX } from 'react-icons/fi'
import './SiteHeader.css'

const navigation = [
  { label: 'Work', href: '#work', icon: FiBriefcase },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Experience', href: '#experience', icon: FiClock },
  { label: 'Skills', href: '#skills', icon: FiCode },
  { label: 'Contact', href: '#contact', icon: FiMail },
]

export function SiteHeader() {
  const menuRef = useRef<HTMLDialogElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

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
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={openMenu}
        >
          <FiMenu aria-hidden="true" />
        </button>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
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
