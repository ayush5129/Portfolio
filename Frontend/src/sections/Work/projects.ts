export type Project = {
  id: string
  category: string
  title: string
  summary: string
  stack: string[]
  image?: { src: string; alt: string }
  caseStudy?: {
    problem: string
    contribution: string
    decisions: string
    result: string
  }
}

export const projects: Project[] = [
  {
    id: 'erp',
    category: 'Manufacturing software',
    title: 'Corrugated Box ERP',
    summary: 'An end-to-end system connecting customer requests with quoting, orders, inventory, and production work.',
    stack: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Angular', 'MediatR / CQRS'],
    caseStudy: {
      problem: 'Customer, quoting, stock, and production information needed to stay connected as manufacturing work progressed.',
      contribution: 'Designed and developed ASP.NET Core API features for the workflow, with EF Core and SQL Server for persistence. The Angular application connected those features to daily operations.',
      decisions: 'Grouped commands and queries by feature using MediatR, and enforced JWT authentication and role-based access around sensitive operations.',
      result: 'A connected workflow for customer management, quoting, sales orders, inventory, BOM, job cards, and reporting.',
    },
  },
  {
    id: 'blogstudio',
    category: 'Publishing platform',
    title: 'BlogStudio',
    summary: 'A full-stack publishing workflow where authors can create, edit, and publish content with role-aware access.',
    stack: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Angular', 'FluentValidation'],
    caseStudy: {
      problem: 'Authors needed a structured way to manage posts while account access and publishing permissions remained secure.',
      contribution: 'Built ASP.NET Core APIs with typed DTOs, FluentValidation, EF Core, and SQL Server, then connected the Angular interface through reactive forms.',
      decisions: 'Separated business rules from data access and used JWT authentication, refresh-token rotation, token revocation, and salted PBKDF2 password hashing for accounts.',
      result: 'An authoring and publishing flow with server-side validation and role-based permissions.',
    },
  },
  {
    id: 'expenseease',
    category: 'Personal finance',
    title: 'ExpenseEase',
    summary: 'A responsive expense management app for recording spending and viewing it through charts.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    caseStudy: {
      problem: 'Personal expenses are difficult to understand when entries and trends are kept separately.',
      contribution: 'Built an expense management app with entry management, registration and login, responsive screens, and graph visualizations.',
      decisions: 'Used React for the interface, Node.js and Express for the API, and MongoDB for data storage.',
      result: 'A single place to track entries and review spending visually.',
    },
  },
  {
    id: 'upcoming',
    category: 'Coming soon',
    title: 'Next project',
    summary: 'A fourth project will be added here when its details and visuals are ready to share.',
    stack: [],
  },
]
