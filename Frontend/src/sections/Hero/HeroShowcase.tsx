export function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-hidden="true">
      <div className="code-glow" />
      <div className="code-window">
        <div className="code-window-bar">
          <span className="code-window-dots"><i /><i /><i /></span>
          <span>ayush.ts</span>
        </div>
        <ol className="code-lines">
          <li><span className="code-keyword">const</span> developer = {'{'}</li>
          <li className="indent-1">name: <span className="code-string">'Ayush Kumar Singh'</span>,</li>
          <li className="indent-1">role: <span className="code-string">'Software Developer'</span>,</li>
          <li className="indent-1">focus: <span className="code-string">'Backend &amp; full-stack'</span>,</li>
          <li className="indent-1">stack: [</li>
          <li className="indent-2"><span className="code-string">'C#'</span>, <span className="code-string">'ASP.NET Core'</span>,</li>
          <li className="indent-2"><span className="code-string">'SQL Server'</span>, <span className="code-string">'React'</span></li>
          <li className="indent-1">],</li>
          <li className="indent-1">experience: <span className="code-string">'1+ year'</span></li>
          <li>{'}'};</li>
        </ol>
        <div className="code-window-status"><span className="code-prompt">›</span> nextBuild: <span className="code-string">'useful software'</span></div>
      </div>
    </div>
  )
}
