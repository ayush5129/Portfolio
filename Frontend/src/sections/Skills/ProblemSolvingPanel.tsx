import { FiExternalLink } from 'react-icons/fi'
import { codingProfiles } from './codingProfiles'

export function ProblemSolvingPanel() {
  return (
    <div className="coding-profiles">
      {codingProfiles.map((profile) => {
        const Icon = profile.icon

        return (
          <a className={`coding-profile coding-profile--${profile.id}`} href={profile.url} target="_blank" rel="noopener noreferrer" key={profile.id}>
            <span className="coding-profile-icon"><Icon aria-hidden="true" /></span>
            <span className="coding-profile-identity"><strong>{profile.name}</strong><small>{profile.description}</small></span>
            <span className="coding-profile-metrics">
              {profile.metrics.map((metric) => <span className="coding-profile-metric" key={metric.label}><strong>{metric.value}</strong><small>{metric.label}</small></span>)}
            </span>
            <FiExternalLink className="coding-profile-external" aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
