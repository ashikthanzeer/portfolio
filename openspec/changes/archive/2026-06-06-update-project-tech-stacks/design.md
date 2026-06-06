## Context

The user's projects are currently listed with incorrect technology stacks (e.g. StudyPlanner showing Python and MySQL; ScoreFusion and Expense Tracker listing Python and MySQL). These need to be updated to the correct technology stacks.

## Goals / Non-Goals

**Goals:**
- Update all project tech stack tags and description texts in `index.html` and `resume.html`.
- Maintain visual harmony and sizing of tags on project cards.

**Non-Goals:**
- Modifying the visual layout structure or CSS layout.
- Adding actual functional backend code or changing project descriptions beyond technology terms.

## Decisions

### Updated Project Badges and Labels
- **StudyPlanner**:
  - Site tags: `React`, `Vite`, `TS`, `Express`, `Postgres` (was `Python`, `JS`, `MySQL`).
  - Resume subtitle: `React, Vite, TypeScript, Express.js, PostgreSQL` (was `HTML, CSS, JavaScript, Python, MySQL`).
- **ScoreFusion**:
  - Site tags: `HTML`, `CSS`, `JS` (was `Python`, `HTML/CSS`, `MySQL`).
  - Resume subtitle: `HTML, CSS, JavaScript` (was `Python, MySQL, HTML, CSS, JavaScript`).
- **Expense Tracker**:
  - Site tags: `HTML`, `CSS`, `JS` (was `Python`, `MySQL`, `JS`).
  - Resume subtitle: `HTML, CSS, JavaScript` (was `Python, MySQL, HTML, CSS, JavaScript`).

## Risks / Trade-offs

- **[Risk] Sizing and Wrapping of Project Badges** → Adding more tags (e.g., 5 tags for StudyPlanner) could overflow the card headers on mobile devices.
  - *Mitigation:* Ensure `flex-wrap: wrap` remains active in `.project-badges` so tags line wrap cleanly on narrower viewports.
