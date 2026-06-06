## Context

The portfolio is a lightweight, single-page web application displaying academic credentials and social links. The current implementation uses static HTML, vanilla CSS, and a small client-side JavaScript script to control interactive components. 

## Goals / Non-Goals

**Goals:**
- Document the technical architecture and styling guidelines of the current codebase.
- Provide a clear reference for the CSS layout system and DOM event handling.
- Maintain a stable base layout for future updates.

**Non-Goals:**
- Modifying the styling, layouts, or wording of the existing portfolio.
- Re-architecting the application to use a JavaScript framework (e.g., React, Vue) or CSS framework (e.g., Tailwind CSS).

## Decisions

### Vanilla JavaScript for Modal Control
We use direct ID-based DOM selection to change the `display` property of details popups between `block` and `none`.
- **Alternatives Considered:** 
  - *HTML `<dialog>` element:* Better accessibility, but requires polyfills for legacy browser support.
  - *Dynamic Modal Renderer:* Generate modal content via JavaScript using a data array. Rejected as the current HTML is static and straightforward.
- **Rationale:** The current approach is extremely simple, has zero external dependencies, and has negligible performance footprint.

### CSS Flexbox and Transition Effects
The layout uses a flexbox wrapper for cards and a fixed overlay for popup modals. Hover states incorporate CSS transitions.
- **Alternatives Considered:** 
  - *Bootstrap/Tailwind Grid:* Overkill for a two-card layout.
- **Rationale:** Keeps file sizes small and page loads near-instant.

### External Assets via CDN
Third-party assets (FontAwesome, Google Fonts) are loaded directly via CDN link tags.
- **Rationale:** Minimizes local repository size and leverages browser caching for common CDNs.

## Risks / Trade-offs

- **[Risk] ID Collisions and Scalability** → As more education cards or popups are added, managing unique string IDs (`cetpopup`, `iitmpopup`) in both HTML and JavaScript calls increases complexity.
  - *Mitigation:* Document the current mapping clearly. If the list of cards grows beyond 5, a refactoring task should be scheduled to dynamically render modals from a configuration object.
- **[Risk] Accessibility (a11y) Issues** → The modal dialogs are managed via `display: none/block` style toggles, which might not be correctly announced by screen readers or accessible via keyboard navigation.
  - *Mitigation:* Keep modal interaction minimal for now. Any future feature update that touches modals must address aria-hidden, focus trap, and role attributes.
