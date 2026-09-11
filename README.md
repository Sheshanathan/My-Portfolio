# Sheshanathan S — Developer Portfolio

A modern, responsive portfolio for Sheshanathan S, focused on full-stack MERN development with data analytics as a complementary capability. The site includes a detailed project showcase, dedicated case-study routes, a visual full-stack workflow, project filters, contact validation, keyboard navigation and restrained motion.

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
  project-images/        Project screenshots
  resume/                Resume PDF
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
- A resume path in `personalInfo.resumePath`
- GitHub and demo URLs for each project
- Project screenshot paths in each project's `image` field

Empty URLs intentionally show an informative toast instead of sending visitors to invented or broken links.

## Add project screenshots

1. Export screenshots as optimized WebP, AVIF or compressed PNG files.
2. Place them in `public/project-images/`.
3. Set a project's `image` value, for example:

```js
image: '/project-images/wcase-dashboard.webp'
```

When `image` is empty, the site shows a styled, project-specific placeholder preview.

## Add the resume

1. Place the PDF in `public/resume/`, for example `public/resume/Sheshanathan-S-Resume.pdf`.
2. Update the central data file:

```js
resumePath: '/resume/Sheshanathan-S-Resume.pdf'
```

The navigation and hero resume actions will then download the same file.

## Contact form integration

The form currently provides client-side validation and honest status messaging without sending data. The submission handler in `src/sections/Contact.jsx` can be connected to EmailJS, Formspree or a custom API. Keep validation in place and replace the final success notification only after the provider confirms delivery.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. Import the repository in Vercel.
3. Vercel should detect Vite automatically. If needed, use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

`vercel.json` includes the SPA rewrite needed for direct visits to project routes such as `/projects/wcase`.

After deployment, add the production URL to the Open Graph metadata in `index.html` if you want an explicit canonical sharing URL. No social-preview image is included until you provide or generate a branded image.

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
