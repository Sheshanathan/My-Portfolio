# Sheshanathan S — Developer Portfolio

A modern, responsive portfolio for Sheshanathan S, focused on full-stack MERN development with data analytics as a complementary capability. The site includes detailed case studies, a visual full-stack workflow, project filtering, protected contact delivery, responsive media, route-aware metadata and automated quality checks.

## Technology stack

- React 19 and Vite
- JavaScript
- Tailwind CSS 4
- React Router
- Framer Motion
- Lucide React
- ESLint and Vitest
- GitHub Actions

## Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Quality and production build

```bash
npm run lint
npm run test
npm run check
npm run preview
```

`npm run check` runs linting, all tests and the production build. The optimized output is written to `dist/`.

## Folder structure

```text
.github/workflows/      Automated lint, test and build checks
public/
  og-image.png           Social sharing preview
  robots.txt             Search-engine crawler rules
  sitemap.xml            Canonical production routes
  project-images/        Dashboard and video-poster images
  project-videos/        Full application walkthroughs
  resume/                Downloadable resume PDF
src/
  components/            Shared UI and interaction components
  context/               Toast notification state
  data/                  Central portfolio content
  hooks/                 Active-section navigation logic
  pages/                 Home, project detail and fallback routes
  sections/              Homepage sections
  utils/                 Testable validation helpers
  App.jsx                Routes and application shell
  main.jsx               React entry point
  styles.css             Tailwind entry and custom design system
```

## Edit portfolio content

All profile, navigation, skill, workflow, project, education, leadership and interest content lives in:

`src/data/portfolioData.js`

This is also where you add:

- GitHub and LinkedIn profile URLs in `personalInfo.social`
- GitHub and demo URLs for each project
- Project screenshot paths in each project's `image` field

Optional buttons are rendered only when their URLs are configured, preventing visitors from seeing unfinished actions.

## Add project screenshots

1. Export screenshots as optimized WebP, AVIF or compressed PNG files.
2. Create `public/project-images/` if needed and place them there.
3. Set a project's `image` value, for example:

```js
image: '/project-images/wcase-dashboard.webp'
```

WCase and elog use video walkthroughs. The two analytics projects use dashboard images sourced from their corresponding GitHub repositories.

## Project videos

The WCase and elog walkthroughs remain as complete 720p MP4 files on their case-study pages. Project cards use lightweight poster images from `public/project-images/`, preventing both large videos from downloading while a recruiter browses the project grid.

## Resume

The public resume is stored at `public/resume/Sheshanathan_S_Resume.pdf` and configured through `personalInfo.resumePath`. The navigation and hero resume actions download this file.

## Contact form delivery

The contact form validates input and sends submissions directly to `sheshumaya@gmail.com` through FormSubmit. It requires no account, API key, backend or environment variables. The form is already activated; submissions work locally and after deployment.

The notification email contains the visitor’s name, email address, subject and message. Replying to it uses the visitor’s address through the configured Reply-To field. A hidden honeypot reduces automated spam.

The form clearly discloses that FormSubmit processes enquiries. FormSubmit states that submission archives are retained for 30 days. No contact-form data is stored in this repository.

## Publish to GitHub

The project is already connected to `https://github.com/Sheshanathan/My-Portfolio`. Run these commands from the project folder before pushing:

```bash
npm ci
npm audit --omit=dev
npm run check
git status
git add -A
git commit -m "Prepare portfolio for deployment"
git push origin master
```


## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the existing GitHub repository.
3. Confirm the framework preset is **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
5. No environment variables are required.
6. Deploy, then verify the homepage, all four `/projects/...` routes, both videos, mobile navigation and one contact submission.

`vercel.json` preserves client-side routes and adds a restrictive Content Security Policy plus referrer, permissions, MIME-sniffing and frame-embedding protections.

The verified production URL is `https://my-portfolio-sheshanathan.vercel.app/`. It is configured in the canonical tag, Open Graph metadata, structured data, `robots.txt` and `sitemap.xml`. The branded social-preview image is `public/og-image.png`.

## Available routes

- `/`
- `/projects/wcase`
- `/projects/elog`
- `/projects/customer-churn`
- `/projects/ecommerce-sales`

## Accessibility and performance

- Semantic landmarks and heading hierarchy
- Skip link, visible focus states and keyboard-accessible interactions
- Reduced-motion support
- Responsive layouts for mobile, tablet and desktop
- Lazy-loaded route bundles
- Lightweight project-card posters; full walkthrough videos load only on case-study pages
- No external font or image requests in the base version

## Security and privacy

- The repository contains no API credentials, database URLs, private keys or environment variables.
- Local environment files, Vercel linkage data, prior Sites linkage data, logs, private-key formats, dependencies and build output are excluded by `.gitignore`.
- Everything placed in `public/` is downloadable by site visitors. Keep secrets, private datasets, credentials and unredacted personal records out of that directory.
- The portfolio email, LinkedIn URL and GitHub URL are intentionally public contact information.
- The contact form validates in the browser, includes a honeypot and discloses its external processor before making a real submission request.
- Contact submissions are sent to FormSubmit over HTTPS; the Content Security Policy allows only that specific external form domain.
- No API keys, account credentials or email passwords are stored in the project.
- GitHub Actions runs linting, tests and a production build on every push and pull request.
- Re-run `npm audit --omit=dev` and `npm run check` before each production release.
