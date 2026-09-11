# Ziqi Xu — Professional Portfolio Website

A React + TypeScript portfolio website that brings together projects, experience, education, and technical interests in one recruiter-friendly interface.

## Why This Project Exists

A resume is intentionally compressed, while GitHub repositories are optimized for implementation detail. This website fills the gap between the two: it gives a visitor enough context to understand the overall portfolio, then routes them to the most relevant GitHub projects, dashboards, and research artifacts.

The site is designed around a simple communication flow:

```text
Recruiter / collaborator
        |
        v
High-level background
        |
        v
Selected experience and projects
        |
        v
Project-specific GitHub / Tableau / research links
```

The engineering goal is therefore not backend complexity. It is to build a maintainable, typed, reusable front-end that can evolve as the portfolio changes.

## Technology Stack

- **React** — component-based interface construction
- **TypeScript** — static typing for safer component and content interfaces
- **Vite** — development server and production bundling
- **Vitest** — automated testing
- **Testing Library** — component-level UI testing
- **CSS** — responsive layout and custom styling
- **pnpm** — dependency management
- **GitHub Actions + GitHub Pages** — automated deployment

The main scripts are defined in `package.json`:

```bash
pnpm dev
pnpm build
pnpm test
```

The production build runs TypeScript compilation before bundling:

```text
tsc -b
   |
   v
vite build
```

This catches type errors before a production artifact is generated.

## Architecture

The source tree separates application structure, reusable components, portfolio content, localization, and page-level views:

```text
src/
├── app/          # application-level structure
├── components/   # reusable UI elements
├── content/      # centralized portfolio content
├── i18n/         # localization support
├── pages/        # page-level views
├── main.tsx      # application entry point
└── styles.css    # global styling
```

A key design decision is to keep portfolio content separate from layout logic. Experience, project, and credential updates happen more frequently than structural UI changes, so centralizing content reduces repeated edits across components.

Conceptually:

```text
Structured portfolio content
        +
Reusable React components
        |
        v
Rendered portfolio pages
```

## Engineering Decisions

### React + TypeScript

The site contains repeated interface patterns such as project cards, experience entries, and navigation sections. React provides reusable composition, while TypeScript helps ensure that components receive the expected content structure.

### Centralized Content

Separating content from presentation improves maintainability. New projects or experience entries can be added without rewriting the surrounding UI architecture.

### Vite Instead of a Heavier Framework

The site is primarily a client-side portfolio and does not require server-side rendering, a database, or complex backend routing. Vite keeps the development and deployment stack lightweight.

### Automated Deployment

The repository includes a GitHub Actions workflow that runs whenever `main` is updated. The workflow checks out the repository, installs dependencies with a frozen lockfile, builds the site, uploads the `dist` artifact, and deploys it to GitHub Pages.

Deployment flow:

```text
Push to main
    |
    v
GitHub Actions
    |
    v
pnpm install --frozen-lockfile
    |
    v
pnpm build
    |
    v
Upload dist/
    |
    v
Deploy to GitHub Pages
```

## Verification Strategy

This is a software project, so evaluation focuses on reliability and maintainability rather than statistical model metrics.

The main checks are:

- **Type correctness** — `tsc -b` completes successfully
- **Production build** — Vite generates a deployable bundle
- **Automated tests** — Vitest test cases pass
- **Navigation integrity** — portfolio links resolve to the intended destinations
- **Responsive behavior** — content remains usable across device widths
- **Content maintainability** — project information can be updated without restructuring the application

A release is considered ready only when the code can be typed, built, tested, and deployed successfully.

## Local Development

```bash
pnpm install
pnpm dev
```

To verify the project before deployment:

```bash
pnpm test
pnpm build
```

## Live Website

[Visit the deployed portfolio](https://ziqixu22.github.io/ziqi-personal-website/)

## Repository Structure

```text
.
├── .github/          # GitHub Actions deployment workflow
├── public/           # static assets
├── src/              # React + TypeScript application
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## What This Project Demonstrates

React · TypeScript · Front-End Architecture · Reusable Components · Testing · Responsive UI · CI/CD · GitHub Actions · GitHub Pages · Portfolio Design

## Limitations

- This is intentionally a front-end portfolio, not a full-stack application.
- The primary objective is communication, maintainability, and deployment reliability rather than backend complexity.
- Deep technical details for individual analytics and research projects remain in their own repositories instead of being duplicated here.