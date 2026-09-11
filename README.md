# Ziqi Xu — Professional Website

A React + TypeScript portfolio website designed to present projects, experience, education, and technical interests in a cleaner and more structured format than a traditional one-page resume.

## 1. Project Goal

The purpose of this project is to create a central professional portfolio that helps recruiters and collaborators quickly understand:

- my academic and professional background
- selected quantitative, statistical, actuarial, and data projects
- technical skills and tools
- project links and research context
- a concise narrative connecting otherwise different areas of experience

This repository is a software / presentation project rather than a statistical modeling project, so there is no predictive model or mathematical evaluation metric to report.

## 2. Why Build a Dedicated Website?

A resume optimizes for brevity. A GitHub repository optimizes for code. A portfolio site provides a third layer that can connect the two:

```text
Resume
  ↓
High-level experience and credentials
  ↓
Portfolio website
  ↓
Selected projects + context + links
  ↓
GitHub repositories / dashboards / research artifacts
```

The site is therefore intended to act as a navigation layer across different parts of the portfolio.

## 3. Technology Stack

The project uses:

- **React** for component-based UI construction
- **TypeScript** for static typing
- **Vite** for local development and production builds
- **Vitest** for automated tests
- **Testing Library** for UI/component testing
- **CSS** for custom responsive styling
- **pnpm** for dependency management

The package configuration defines the main development and verification commands:

```bash
pnpm dev
pnpm build
pnpm test
```

## 4. Project Structure

The source code is organized by responsibility:

```text
src/
├── app/          # application-level structure
├── components/   # reusable UI components
├── content/      # centralized portfolio content
├── i18n/         # language / localization support
├── pages/        # page-level views
├── main.tsx      # application entry point
└── styles.css    # global styling
```

This separation helps keep presentation logic independent from portfolio content.

## 5. Why Separate Content from Components?

Professional information changes more often than the site architecture. Keeping content in dedicated files reduces the need to edit layout components every time an experience, credential, or project changes.

Conceptually:

$$
\text{Rendered Page}
=
\text{Reusable Components}
+
\text{Structured Content}.
$$

This is not a statistical equation; it represents the architectural design principle used in the site.

The practical benefit is maintainability: adding or editing portfolio content should require minimal changes to UI logic.

## 6. Development Workflow

### Local Development

```bash
pnpm install
pnpm dev
```

Vite provides a local development server with fast refresh for iterative UI work.

### Production Build

```bash
pnpm build
```

The build command runs TypeScript compilation followed by the Vite production build:

```text
tsc -b
   ↓
vite build
```

A successful build therefore checks both type correctness and production bundling.

### Tests

```bash
pnpm test
```

The repository uses Vitest and Testing Library to verify UI behavior and help prevent regressions as content and components change.

## 7. Evaluation / Verification

For this project, evaluation is software-oriented rather than model-oriented.

The main checks are:

1. **Type correctness** — TypeScript compilation succeeds.
2. **Build validity** — the production bundle is generated successfully.
3. **Automated tests** — Vitest test cases pass.
4. **Navigation consistency** — project and page links resolve correctly.
5. **Responsive presentation** — content remains usable across screen sizes.
6. **Content maintainability** — portfolio data can be updated without rewriting the full UI.

A simple software-quality interpretation is:

$$
\text{Release Ready}
=
\text{Type Check Pass}
\land
\text{Build Pass}
\land
\text{Test Pass}.
$$

## 8. Design Decisions

### React + TypeScript

React is appropriate because the site contains repeated portfolio patterns—project cards, experience entries, navigation sections, and reusable layout elements. TypeScript reduces errors when those components consume structured content.

### Vite

Vite keeps the project lightweight and provides a fast development workflow without requiring a heavier application framework for a primarily client-side portfolio.

### Centralized Content

Separating content from presentation makes the website easier to maintain as projects and career information change over time.

## 9. Live Website

[Visit the website](https://ziqixu22.github.io/ziqi-personal-website/)

## 10. Current Status

The site is functional and includes the project architecture, development tooling, build pipeline, and portfolio content structure. Some content fields are intentionally centralized so they can be updated as the portfolio evolves.

## 11. Repository Contents

```text
.
├── .github/          # automation / workflow configuration
├── public/           # static assets
├── src/              # React + TypeScript source
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 12. Skills Demonstrated

React · TypeScript · Vite · Front-End Architecture · Component Design · Testing · Responsive UI · GitHub Pages · Portfolio Design

## 13. Limitations

- This is a portfolio website, not a full-stack application.
- The primary goal is communication and maintainability rather than backend complexity.
- Project-specific technical depth lives in the linked GitHub repositories rather than being duplicated in the website codebase.