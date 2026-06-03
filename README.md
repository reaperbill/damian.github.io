# Damian Stevenson — Portfolio

Personal portfolio site for Damian Stevenson, a full-stack engineer and data analyst. Built with Next.js 15 and deployed to GitHub Pages.

**Live site:** [reaperbill.github.io](https://reaperbill.github.io)

## Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Plain CSS (no framework)
- **Runtime:** Node.js 24
- **Deployment:** GitHub Actions → GitHub Pages

## Project structure

```
app/                   Next.js App Router pages and API routes
  api/projects/        Returns all projects (personal + school)
  api/project/[...id]/ Returns detail for a single project
  projects/            Full projects listing page
components/            Hero, Navbar, About, Projects, Contact
data/
  hero.json            Name, title, and hero background config
  about.json           Bio paragraphs and skills list
  projects-json/       One JSON file per project (metadata only)
    College/           University coursework
    Flatiron/          Flatiron School Public apprenticeship work
    projects/          Personal projects
lib/projects.ts        Reads and caches project metadata at runtime
public/images/         Static assets (SVG backgrounds, card images)
```

## Adding a project

Create a `.json` file anywhere under `data/projects-json/`. The filename (without extension) becomes the project ID. All fields are optional — sensible defaults are applied.

```jsonc
{
  "title": "My Project",
  "shortDescription": "One-liner shown on the card.",
  "description": "Full description shown in the detail modal.",
  "category": "Software",       // "Software" | "Data" | "Tool"
  "subcategory": "Security",    // optional
  "tags": ["Python", "AWS"],
  "color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "image": "/images/my-project.png",  // optional, overrides color swatch
  "link": "https://github.com/...",
  "openInNewTab": true,
  "weight": 80                  // higher = shown first (default 50)
}
```

Changes to JSON files are picked up automatically in dev (file watcher) and on the next build in production.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
npm run start    # serve the export locally
```

Requires Node.js ≥ 24.

## Deployment

Pushing to `main` triggers the [GitHub Actions workflow](.github/workflows/nextjs.yml), which builds a static export and deploys it to GitHub Pages automatically.

## Content files

| File | Purpose |
|------|---------|
| `data/hero.json` | Name, subtitle, CTA button, background image |
| `data/about.json` | Bio paragraphs and skills chips |
| `data/projects-json/**/*.json` | Individual project metadata |
| `public/images/` | Static images referenced by project JSON or hero |
