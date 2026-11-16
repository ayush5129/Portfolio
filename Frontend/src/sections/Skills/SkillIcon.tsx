import type { IconType } from 'react-icons'
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di'
import {
  LuBoxes, LuCodeXml, LuDatabase, LuDatabaseZap, LuLayers,
  LuLightbulb, LuMailCheck, LuMonitorSmartphone, LuNetwork, LuShieldCheck,
  LuWorkflow,
} from 'react-icons/lu'
import {
  SiAngular, SiCplusplus, SiDotnet, SiGit, SiGithub, SiJavascript,
  SiMongodb, SiPostman, SiReact, SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const icons: Record<string, IconType> = {
  'ASP.NET Core': SiDotnet,
  'Entity Framework Core': SiDotnet,
  'REST APIs': LuNetwork,
  'JWT / RBAC': LuShieldCheck,
  'SQL Server': DiMsqlServer,
  React: SiReact,
  Angular: SiAngular,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Responsive UI': LuMonitorSmartphone,
  MongoDB: SiMongodb,
  DBMS: LuDatabase,
  'Database design': LuDatabaseZap,
  'C++': SiCplusplus,
  'Data Structures & Algorithms': LuWorkflow,
  'Object-Oriented Programming': LuBoxes,
  'Clean Architecture': LuLayers,
  'Problem-solving': LuLightbulb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  'Visual Studio': DiVisualstudio,
  'VS Code': VscVscode,
  SendGrid: LuMailCheck,
}

export function SkillIcon({ name }: { name: string }) {
  if (name === 'C#') {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 3 58 18v28L32 61 6 46V18L32 3Z" fill="currentColor" />
        <text x="32" y="40" textAnchor="middle" fill="white" fontSize="25" fontWeight="800">C#</text>
      </svg>
    )
  }

  const Icon = icons[name] ?? LuCodeXml
  return <Icon aria-hidden="true" />
}
