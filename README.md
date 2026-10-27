# Nexcent Minimal Agency Landing Page

A clean, modern, and fully responsive agency landing page built with **HTML5, Tailwind CSS v4, Tailwind CLI, and Vanilla JavaScript**. This project recreates the visual direction of a Figma community landing page using a lightweight, framework-free frontend stack.

> **Design Reference:** [Nexcent — Minimal Landing Page Design — Figma Community](https://www.figma.com/design/QuQ8Pdt01vVH1cr9hzEd3t/Minimal-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design--Community-?node-id=0-1&p=f&t=V7W3dSZz0KOVbTS0-0)

## Table of Contents

- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Production Build](#production-build)
- [Design Implementation](#design-implementation)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Minimal Agency Landing Page is a frontend implementation of a modern agency website design sourced from Figma Community.

The project focuses on translating a visual design into clean, semantic HTML, utility-first styling with Tailwind CSS v4, and lightweight JavaScript for interactive functionality.

The implementation uses a traditional static frontend architecture without React, Vue, Angular, or other JavaScript frameworks.

### Project Goals

- Recreate the referenced Figma design as accurately as practical.
- Maintain a clean and maintainable HTML structure.
- Use Tailwind CSS v4 for responsive styling and layout.
- Use Tailwind CLI to compile optimized CSS.
- Implement interactive elements using Vanilla JavaScript.
- Follow accessibility and frontend performance best practices.
- Keep the project easy to understand, customize, and deploy.

## Objectives

The primary objective is to build a polished, responsive agency landing page while keeping the development setup simple.

The implementation should prioritize:

1. **Visual consistency:** Match the reference design's typography, colors, spacing, imagery, and layout.
2. **Responsive behavior:** Deliver a usable experience on mobile, tablet, laptop, and desktop screens.
3. **Code quality:** Keep markup semantic, styles organized, and JavaScript modular.
4. **Performance:** Avoid unnecessary dependencies and ship compiled production CSS.
5. **Maintainability:** Use reusable styling patterns and a predictable folder structure.

## Features

### Design and Layout

- Minimal, modern visual direction.
- Clean typography and consistent spacing.
- Responsive page sections.
- Structured content hierarchy.
- Reusable buttons and navigation patterns.
- Image assets organized in dedicated folders.
- Consistent colors, borders, and visual treatments.

### Responsive Experience

- Mobile-friendly navigation.
- Flexible grid and flexbox layouts.
- Responsive typography and spacing.
- Optimized image sizing.
- Touch-friendly interactive controls.
- Layout adjustments for smaller screens.

### JavaScript Functionality

Depending on the final Figma design, Vanilla JavaScript can power:

- Mobile navigation toggle.
- Navigation menu open and close behavior.
- Accessible menu dismissal.
- Smooth in-page navigation where appropriate.
- FAQ accordion or other interactive sections, if present in the design.
- Lightweight UI enhancements.

Only implement interactions that are actually required by the reference design.

### Developer Experience

- Tailwind CSS v4.
- Tailwind CLI build pipeline.
- Separate development and production commands.
- Organized source files.
- Git-friendly project structure.
- No frontend framework required.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and content |
| Tailwind CSS v4 | Utility-first styling and responsive layouts |
| Tailwind CLI | CSS compilation and production minification |
| Vanilla JavaScript | Navigation and UI interactions |
| npm | Dependency management and scripts |
| Git | Version control |
| GitHub | Source code hosting |
| VS Code | Recommended code editor |

### Why This Stack?

This stack is suitable for a static landing page because it avoids the additional complexity of a frontend framework while providing a modern CSS workflow.

Tailwind CSS generates a compiled stylesheet from the utility classes used in the project. Vanilla JavaScript handles browser interactions without requiring a framework runtime.

## Project Structure

The following folder structure is the recommended starting point:

```text
nexcent-landing-page-html/
│
├── public/
│   ├── images/
│   │   ├── hero-image.webp
│   │   ├── about-image.webp
│   │   ├── project-01.webp
│   │   └── logo.svg
│   │
│   └── favicon.svg
│
├── src/
│   ├── index.html
│   │
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   │
│   └── js/
│       └── main.js
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

**Note:** Image filenames above are examples. Replace them with the actual assets required by the Figma design.

### Folder and File Responsibilities

#### `public/images/`

Contains the image assets used throughout the landing page.

Recommended asset types:

- Brand logos and icons.
- Hero section imagery.
- Portfolio or project images.
- Team and service illustrations.
- Other visual assets from the approved design.

Prefer optimized WebP or AVIF images where suitable. Use SVG for logos and simple vector illustrations.

#### `public/favicon.svg`

Contains the browser tab icon.

#### `src/index.html`

Contains the page structure, metadata, navigation, content sections, image references, and script imports.

Use semantic HTML elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

#### `src/css/input.css`

The source stylesheet processed by Tailwind CLI.

It contains the Tailwind import and any project-specific CSS or theme customizations.

#### `src/css/output.css`

The compiled stylesheet generated by Tailwind CLI.

**Do not edit this file manually.** Changes should be made in `input.css` or in the HTML utility classes, then regenerated with the build command.

#### `src/js/main.js`

Contains JavaScript functionality such as the mobile menu, event listeners, and other interactive behaviors.

Keep JavaScript independent of styling logic wherever possible, and use clear, descriptive function names.

#### `package.json`

Defines the npm dependencies and development/build scripts.

#### `.gitignore`

Prevents generated or local-only files from being committed unnecessarily.

#### `README.md`

Documents the project, setup instructions, scripts, and contribution guidelines.

## Getting Started

### Prerequisites

Before starting, install:

- [Node.js](https://nodejs.org/) — use a currently supported LTS release.
- npm — included with Node.js.
- [Git](https://git-scm.com/).
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor.

Check your installed versions:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/nexcent-landing-page-html.git
```

Move into the project directory:

```bash
cd nexcent-landing-page-html
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Initialize npm

If the project does not already contain a `package.json` file:

```bash
npm init -y
```

### 3. Install Tailwind CSS v4 and Tailwind CLI

```bash
npm install -D tailwindcss @tailwindcss/cli
```

This installs Tailwind CSS and its dedicated CLI package as development dependencies.

### 4. Configure the CSS Entry File

Create `src/css/input.css`:

```css
@import "tailwindcss";

/* Project-specific custom CSS can be added below. */

/* Example:
:root {
  --color-brand: #111827;
}
*/
```

Tailwind CSS v4 uses the regular CSS import shown above instead of the legacy `@tailwind base`, `@tailwind components`, and `@tailwind utilities` directives.

### 5. Create the HTML File

Create `src/index.html` and add a standard HTML5 document.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <meta
      name="description"
      content="A modern, responsive agency landing page."
    />

    <title>Nexcent Agency Landing Page</title>

    <link rel="stylesheet" href="./css/output.css" />

    <script src="./js/main.js" defer></script>
  </head>

  <body>
    <header>
      <!-- Add the navigation from the Figma design. -->
    </header>

    <main>
      <!-- Add the hero and remaining page sections. -->
    </main>

    <footer>
      <!-- Add the footer from the Figma design. -->
    </footer>
  </body>
</html>
```

This is a starter template. Replace the placeholder comments with the actual content and layout from the Figma reference.

### 6. Add npm Scripts

Update the `scripts` section of `package.json`:

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch",
    "build": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css --minify"
  }
}
```

Keep the existing package metadata and dependencies generated by npm. Add or update only the scripts section rather than replacing the entire `package.json`.

The `tailwindcss` command is provided by the installed CLI package through npm's local executable path.

### 7. Start Tailwind in Watch Mode

```bash
npm run dev
```

Tailwind will watch the source files it scans and rebuild the stylesheet when relevant changes are detected.

### 8. Open the Website

Use a local development server to preview the page. For example, install the VS Code Live Server extension and open `src/index.html` through Live Server.

Keep `npm run dev` running in a separate terminal while developing.

**Important:** Tailwind CLI compiles CSS; it does not itself provide a local HTTP server. A development server is a separate convenience.

## Development Workflow

A typical development session follows this sequence:

1. Review the Figma design and inspect its sections.
2. Prepare the required image and icon assets.
3. Build the semantic HTML structure.
4. Apply Tailwind utility classes for layout and styling.
5. Add responsive breakpoints.
6. Implement the required interactions in `main.js`.
7. Preview the page using a local development server.
8. Compare the result against the Figma reference.
9. Test the page at multiple screen widths.
10. Generate the production stylesheet before deployment.

### Recommended Design Review

Before implementation, inspect the Figma file for:

- Frame dimensions and section order.
- Container widths and spacing.
- Font family, weight, size, and line height.
- Brand colors and background colors.
- Border radii and shadows.
- Image dimensions and cropping.
- Button sizes and hover states.
- Mobile and tablet variants, if available.

The exact page sections and content should be confirmed from the actual Figma frames rather than assumed from the project name.

## Production Build

Before deploying, run:

```bash
npm run build
```

This creates a minified stylesheet at:

```text
src/css/output.css
```

Tailwind scans source files for utility classes and generates the corresponding CSS. The resulting file can be served with the HTML page as a static asset.

### Production Checklist

- [ ] All required sections are implemented.
- [ ] Images load correctly.
- [ ] Navigation links work.
- [ ] Mobile menu works on touch devices.
- [ ] No broken local asset paths remain.
- [ ] Responsive layouts have been tested.
- [ ] Browser console has no unexpected errors.
- [ ] The production CSS has been regenerated.
- [ ] The production page works without a development watch process.

## Design Implementation

### Figma-to-HTML Approach

Implement the design in the following order:

1. **Global layout:** page background, content width, typography, and base spacing.
2. **Header:** logo, navigation links, CTA buttons, and mobile navigation.
3. **Hero section:** headline, supporting text, CTA, and primary visual.
4. **Content sections:** reproduce the sections that appear in the reference design, in their original order.
5. **Footer:** links, contact details, social links, and copyright text as applicable.
6. **Interactive behavior:** mobile navigation, accordions, and any other visible interactive elements.
7. **Responsive refinement:** adjust spacing, alignment, and image behavior at smaller widths.

### Styling Principles

- Use Tailwind utilities for the majority of styling.
- Keep custom CSS limited to cases that need it.
- Prefer reusable layout patterns over repeated arbitrary values.
- Use consistent spacing and typography scales.
- Avoid unnecessary JavaScript dependencies.
- Use real design assets instead of placeholder imagery in the final implementation.

## Responsive Design

The landing page should adapt to:

- Mobile phones.
- Tablets.
- Small laptops.
- Desktop monitors.
- Wide desktop screens.

Use Tailwind's responsive variants, such as `sm:`, `md:`, `lg:`, and `xl:`, when they suit the layout.

Example:

```html
<section class="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
  <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
    <div>
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Build a better digital presence.
      </h1>

      <p class="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
        Create a clear, engaging experience for your audience.
      </p>
    </div>

    <div>
      <!-- Insert the actual design image here. -->
    </div>
  </div>
</section>
```

This is an illustrative responsive layout, not a claim that the Figma reference uses this exact copy or structure.

## Accessibility

Follow these accessibility practices:

- Use semantic HTML elements.
- Provide descriptive alternative text for meaningful images.
- Use empty `alt` attributes for purely decorative images.
- Ensure buttons and links have clear accessible names.
- Support keyboard navigation.
- Maintain visible focus indicators.
- Use appropriate color contrast.
- Associate labels with form inputs.
- Apply `aria-expanded` and `aria-controls` to expandable controls when appropriate.
- Respect reduced-motion preferences for nonessential animations.

For mobile navigation, use a real button with an accessible label rather than making a generic container clickable.

## Performance

To keep the landing page lightweight:

- Use optimized image formats and appropriate dimensions.
- Avoid loading unnecessary JavaScript libraries.
- Use the minified production CSS.
- Load noncritical images lazily where appropriate.
- Reserve image dimensions to reduce layout shifts.
- Use system fonts or optimized web fonts where practical.
- Avoid loading the same asset multiple times.
- Test the final build with browser developer tools and performance audits.

Tailwind CSS v4 is designed for modern browsers. Verify the framework's current browser support requirements before promising support for older browsers.

## Deployment

Because this is a static HTML, CSS, and JavaScript project, it can be deployed to any static hosting provider that supports the required files and paths.

Possible hosting platforms include:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

### Deployment Considerations

The compiled CSS must be available wherever the HTML references it.

If deploying the current structure, make sure the hosting configuration publishes the appropriate directory and preserves the relative paths between the HTML file, stylesheet, JavaScript, and assets.

For a clean deployment setup, you can alternatively configure a dedicated `dist/` directory and copy the HTML, JavaScript, and assets into it during the build process. If you adopt that approach, update the build script and stylesheet paths accordingly.

## Future Improvements

Potential improvements include:

- Pixel-level refinement against the Figma reference.
- Optimized asset pipeline.
- Additional accessibility testing.
- SEO metadata and social sharing previews.
- Contact form integration with a real backend or form service.
- Custom 404 page.
- Automated HTML and accessibility checks.
- Lighthouse performance audits.
- Continuous deployment through GitHub Actions.

These are optional enhancements and should be prioritized according to the final design and project requirements.

## Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the website at relevant screen sizes.
5. Commit your changes with a descriptive message.
6. Open a pull request with a summary of the changes.

Suggested branch naming:

```text
feature/responsive-navigation
feature/hero-section
fix/mobile-layout
```

Suggested commit messages:

```text
feat: implement responsive navigation
feat: build hero section
style: refine mobile spacing
fix: correct image sizing
docs: update project setup instructions
```

## License

Choose a license appropriate for your implementation and the assets you use. If you intend to publish the project as open source, consider adding an MIT `LICENSE` file after confirming that you have the rights to distribute the code and assets.

The original Figma community design and any third-party assets may have separate licensing terms. Attribution or a public repository does not automatically grant redistribution rights.

---

**Built with HTML5, Tailwind CSS v4, Tailwind CLI, and Vanilla JavaScript.**
