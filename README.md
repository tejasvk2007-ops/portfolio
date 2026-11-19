# Tejas V K — Personal Portfolio Website

Assignment-1: Personal Portfolio Website, built with **Next.js 14 (App Router) + React + plain CSS**.

A modern, responsive portfolio to showcase personal information, technical skills, projects, experience, education and achievements.

## Pages

| Route | Page |
|---|---|
| `/` | Home — introduction, profile summary, featured projects |
| `/about` | About — personal info, interests, career goals |
| `/projects` | Projects — descriptions, tech, GitHub links |
| `/experience` | Experience & Activities — honest, activity-based (no internships claimed) |
| `/skills` | Skills — programming languages, web dev, tools |
| `/achievements` | Achievements — Techfest 2025, IIT Bombay Robo Racer, 4th place |
| `/contact` | Contact — form with client-side validation + social links |

Reusable components: `Navbar`, `Footer`, `ProjectCard`, `Button`.
All content lives in one place: `data/portfolio.js` — edit that file to update the site.

## Tech Stack

- Next.js 14, React 18
- Plain CSS in `app/globals.css` (responsive: mobile / tablet / desktop)
- JavaScript (no TypeScript)
- Lucide React icons (no emoji icons)
- Git + GitHub, Vercel for deployment

## Run it in VS Code

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

To check the production build:

```bash
npm run build
npm start
```

## Push to GitHub (new public repo `portfolio`)

Create an empty **public** repo named `portfolio` on GitHub under `tejasvk2007-ops`
(github.com/new — do not add a README, .gitignore or licence there).

Then, in the VS Code terminal, inside this project folder:

```bash
git init
git add .
git commit -m "Add Next.js personal portfolio"
git branch -M main
git remote add origin https://github.com/tejasvk2007-ops/portfolio.git
git push -u origin main
```

## Vercel Link:

- https://portfolio-brown-six-j4zwrg42i8.vercel.app/

## Notes

- Contact form is client-side only — it validates and shows a success message. There is no backend, so it does not send an email. Real contact is via tejasvk2007@gmail.com.
- No live demo links are claimed for projects that don't have one — only real GitHub links.
- Theme toggle (dark / light) is in the navbar. Dark is the default.
