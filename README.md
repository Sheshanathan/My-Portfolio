# Sheshanathan S — Developer Portfolio

A modern, responsive portfolio for Sheshanathan S, focused on full-stack MERN development with data analytics as a complementary capability. The site includes a detailed project showcase, dedicated case-study routes, a visual full-stack workflow, project filters, contact validation, accessible navigation and restrained motion.

## Technology stack

- React 19 and Vite
- JavaScript
- Tailwind CSS 4
- React Router
- Framer Motion
- Lucide React

## Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The optimized output is written to `dist/`.

## Folder structure

```text
public/
  project-images/        Dashboard images sourced from project repositories
  project-videos/        Optimized application walkthroughs
  resume/                Downloadable resume PDF
src/
  components/            Shared UI and interaction components
  context/               Toast notification state
  data/                  Central portfolio content
  hooks/                 Active-section navigation logic
  pages/                 Home, project detail and fallback routes
  sections/              Homepage sections
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

The WCase and elog walkthroughs are stored as optimized, video-only 720p MP4 files in `public/project-videos/`. Their paths are configured with each project's `video` field in `src/data/portfolioData.js`. Videos play silently while visible in project cards and expose native playback controls on project detail pages.

## Resume

The public resume is stored at `public/resume/Sheshanathan_S_Resume.pdf` and configured through `personalInfo.resumePath`. The navigation and hero resume actions download this file.

## Contact form delivery

The contact form validates input and sends submissions directly to `sheshumaya@gmail.com` through FormSubmit. It requires no account, API key, backend or environment variables. The form is already activated; submissions work locally and after deployment.

The notification email contains the visitor's name, email address, subject and message. Replying to it uses the visitor's address through the configured Reply-To field.

## Publish to GitHub

Create a new empty repository on GitHub. Do not initialize it with another README, license or `.gitignore`. Then run these commands from this project folder:

```bash
npm ci
npm audit
npm run build
git status
git add -A
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin https://github.com/Sheshanathan/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_REPOSITORY_NAME` before running the remote command. Authenticate through GitHub; never paste an access token into source files or commit it.

## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository created above.
3. Confirm the framework preset is **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
5. No environment variables are required.
6. Deploy, then verify the homepage, all four `/projects/...` routes, both videos, mobile navigation and one contact submission.

`vercel.json` preserves client-side routes and adds a restrictive Content Security Policy plus referrer, permissions, MIME-sniffing and frame-embedding protections.

After deployment, add the permanent production URL as both `og:url` and the canonical link in `index.html`, then commit and push that SEO update. These values are intentionally omitted until the permanent URL is known. No social-preview image is included until you provide or generate a branded image.

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
- No external font or image requests in the base version

## Security and privacy

- The repository contains no API credentials, database URLs, private keys or environment variables.
- Local environment files, Vercel linkage data, prior Sites linkage data, logs, private-key formats, dependencies and build output are excluded by `.gitignore`.
- Everything placed in `public/` is downloadable by site visitors. Keep secrets, private datasets, credentials and unredacted personal records out of that directory.
- The portfolio email, LinkedIn URL and GitHub URL are intentionally public contact information.
- The contact form validates in the browser before making a real submission request.
- Contact submissions are sent to FormSubmit over HTTPS; the Content Security Policy allows only that specific external form domain.
- No API keys, account credentials or email passwords are stored in the project.
- Re-run `npm audit` and `npm run build` before each production release.
