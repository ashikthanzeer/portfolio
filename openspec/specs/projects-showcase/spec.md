# projects-showcase Specification

## Purpose
TBD - created by archiving change update-portfolio-from-resume. Update Purpose after archive.
## Requirements
### Requirement: Projects List Display
The portfolio SHALL include a Projects section showcasing the user's projects: "StudyPlanner" (built using React, Vite, TypeScript, Express.js, PostgreSQL), "ScoreFusion" (built using HTML, CSS, JavaScript), and "Expense Tracker" (built using HTML, CSS, JavaScript). Each project card SHALL display its title, correct tech stack badges, and description bullet points.

#### Scenario: Displaying Projects
- **WHEN** the user scrolls to the projects section
- **THEN** cards for StudyPlanner, ScoreFusion, and Expense Tracker MUST be rendered displaying their respective corrected tech stack tags and description points.

### Requirement: Project Action Links
Each project card SHALL contain two functional action buttons/links: "GitHub" (linking to the source code repository) and "Live Demo" (linking to the project website). These links SHALL open in new tabs.

#### Scenario: Clicking Project Links
- **WHEN** the user clicks the "GitHub" or "Live Demo" button on any project card
- **THEN** a new browser tab MUST open navigating to the corresponding project URL (which may be a dummy link for now).

