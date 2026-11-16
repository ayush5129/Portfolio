# Ayush Kumar Singh portfolio — frontend

React, TypeScript, and Vite. The site includes selected work, about, experience, skills, profile links, a résumé download, and a contact form.

## Local development

```powershell
npm install
npm run dev
```

The contact form calls `http://localhost:5032` by default. Run the backend alongside Vite. For a different API URL, copy `.env.example` to `.env.local` and edit `VITE_API_BASE_URL` (no trailing slash). Set the same variable in Vercel when deploying.

## Checks

```powershell
npm run lint
npm test
npm run build
```

Each page section has its own component, content, and styles under `src/sections/`. Edit project cards in `src/sections/Work/projects.ts`, and experience and skills in their matching folders. Add an approved screenshot under `public/projects/`, then set that project's `image` path and alt text in `projects.ts`; the conceptual illustration will be replaced automatically. The public résumé is `public/Ayush_Kumar_Singh_Resume.pdf`.
