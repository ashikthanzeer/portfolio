## Context

The portfolio is being upgraded from a simple, basic layout to a high-end, cyberpunk-themed portfolio. It must incorporate the user's complete resume details (including new projects, Al Huda English School, detailed entrance exam ranks, technical skills classifications, and contact details). A separate digital resume page must also be introduced.

## Goals / Non-Goals

**Goals:**
- Implement a futuristic, responsive design featuring glowing neon accents, monospaced typography, tech-themed card widgets, and smooth micro-animations.
- Create a printable `resume.html` page that renders the resume text beautifully, matching the structure of the provided document.
- Support all device widths (mobile, tablet, desktop) via responsive CSS.
- Keep the code lightweight, using only pure HTML, Vanilla CSS, and native JavaScript.

**Non-Goals:**
- Adding a JavaScript framework (React, Next.js, etc.) or CSS framework (Tailwind, Bootstrap).
- Implementing dynamic backends, search indexing, or databases.
- Finding the user's actual GitHub/project live links; placeholder URLs (`#`) will be used.

## Decisions

### Cyber-Tech Theme Palette & Fonts
- **Palette**: Deep void black background (`#080915`), glowing neon cyan (`#00f3ff`) for active headers/buttons, neon orange/amber (`#ff7b00`) for warning/accent labels, and terminal green/gold as accents.
- **Fonts**: `@import` Google Fonts: `Orbitron` (for high-tech cyberpunk titles), `Share Tech Mono` (for data values/labels), and `Space Grotesk` (for paragraphs/body text).
- **HUD Elements**: Semi-transparent card overlays (glassmorphism: `backdrop-filter: blur(10px)`) with glowing cyan border outlines (`box-shadow: 0 0 15px rgba(0, 243, 255, 0.2)`).

### Separate Resume View (`resume.html`)
- Instead of using a PDF viewing library, `resume.html` will be written as a static HTML page styled with a clean academic aesthetic (serif/sans-serif combination, white background, black text).
- **Print Optimization**: A stylesheet block `@media print` will hide the navigation header, set the font size, and eliminate page gaps so it prints onto a single A4 page cleanly.

### Modal Overlay Structure
- Retain the simple ID-based modal triggers (`openPopup`/`closePopup`) in `script.js` to ensure styling updates are backward compatible.
- Add an overlay modal card for Al Huda English School (`#alhudapopup`) in `index.html`.

### CSS Grid and Flexbox Layout
- Use a flexible `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` system for the education cards, skills categories, and project cards to achieve fully responsive layouts.

## Risks / Trade-offs

- **[Risk] High-Contrast Color Readability** → High-contrast neon-on-dark styles can sometimes strain eyes or be hard to read for long periods.
  - *Mitigation:* Limit neon glowing effects to borders, tags, and headlines. Use clean, readable off-white/light gray (`#d1d5db`) for core body paragraphs.
- **[Risk] Print Layout Inconsistencies** → Print behaviors vary across browsers (Chrome, Safari, Firefox).
  - *Mitigation:* Keep the styling of `resume.html` extremely simple and standard. Avoid complex CSS Grid and multiple columns in print mode to prevent weird page-breaks.
