import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top" aria-label="Ayush Kumar Singh, back to top">
          <span className="footer-mark" aria-hidden="true">A</span>
          <span><strong>Ayush Kumar Singh</strong><small>Software Developer</small></span>
        </a>
        <p>Building useful things with care.</p>
        <nav className="footer-links" aria-label="Footer links">
          <a href="mailto:ayushsinghmy7080@gmail.com">Email</a>
          <a href="https://github.com/ayush5129" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-kumar-singh-5909a6202/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
        <a className="footer-top" href="#top">Back to top</a>
      </div>
    </footer>
  )
}
