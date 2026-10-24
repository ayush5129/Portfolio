export const headline = 'From ideas to impactful software.'

const highlightStart = headline.indexOf('impactful')
const highlightEnd = highlightStart + 'impactful'.length

export function visibleHeadline(length: number) {
  const visible = headline.slice(0, length)
  return {
    before: visible.slice(0, highlightStart),
    highlight: visible.slice(highlightStart, highlightEnd),
    after: visible.slice(highlightEnd),
  }
}
