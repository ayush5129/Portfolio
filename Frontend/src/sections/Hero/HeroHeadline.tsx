import { useEffect, useState } from 'react'
import { headline, visibleHeadline } from './heroHeadlineText'

export function HeroHeadline() {
  const [length, setLength] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? headline.length
      : 0,
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setLength((current) => {
        if (current >= headline.length) {
          window.clearInterval(timer)
          return current
        }
        return current + 1
      })
    }, 70)
    return () => window.clearInterval(timer)
  }, [])

  const visible = visibleHeadline(length)

  return (
    <h1 id="hero-title">
      <span className="headline-measure" aria-hidden="true">From ideas to <em>impactful</em> software.</span>
      <span className="headline-typing" aria-hidden="true">
        {visible.before}
        <em>{visible.highlight}</em>
        {visible.after}
        {length < headline.length && <span className="headline-caret" />}
      </span>
      <span className="sr-only">{headline}</span>
    </h1>
  )
}
