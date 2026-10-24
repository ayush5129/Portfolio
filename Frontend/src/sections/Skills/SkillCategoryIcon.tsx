export function SkillCategoryIcon({ title }: { title: string }) {
  return (
    <svg className="skills-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {title === 'Backend & APIs' && <><rect x="3" y="3" width="18" height="8" rx="2" /><rect x="3" y="13" width="18" height="8" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" /></>}
      {title === 'Frontend' && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>}
      {title === 'Data' && <><path d="M4 20V13h3v7M10.5 20V8h3v12M17 20V4h3v16" /></>}
      {title === 'Foundations' && <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>}
      {title === 'Tools' && <><path d="M14.5 6.5a5 5 0 0 0-6 6L3 18a2 2 0 0 0 3 3l5.5-5.5a5 5 0 0 0 6-6L15 12l-3-3 2.5-2.5Z" /></>}
    </svg>
  )
}
