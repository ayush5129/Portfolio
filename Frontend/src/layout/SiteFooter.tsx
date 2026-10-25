import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si'
import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top" aria-label="Ayush Kumar Singh, back to top">
          <span className="footer-mark" aria-hidden="true">A</span>
          <span><strong>Ayush Kumar Singh</strong><small>Software Developer</small></span>
        </a>
        <nav className="footer-links" aria-label="Footer links">
          <a href="mailto:ayushsinghmy7080@gmail.com" aria-label="Email" title="Email"><FiMail aria-hidden="true" /></a>
          <a href="https://github.com/ayush5129" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FiGithub aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/ayush-kumar-singh-5909a6202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
          <a href="https://leetcode.com/u/ayush_singh29/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" title="LeetCode"><SiLeetcode aria-hidden="true" /></a>
          <a href="https://www.geeksforgeeks.org/profile/ayush_singh5129?tab=activity" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks" title="GeeksforGeeks"><SiGeeksforgeeks aria-hidden="true" /></a>
          <a href="https://www.hackerrank.com/profile/singhayusham5129" target="_blank" rel="noopener noreferrer" aria-label="HackerRank" title="HackerRank"><SiHackerrank aria-hidden="true" /></a>
        </nav>
        <a className="footer-top" href="#top">Back to top</a>
      </div>
    </footer>
  )
}
