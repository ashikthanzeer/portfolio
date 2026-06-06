## ADDED Requirements

### Requirement: Projects List Display
The portfolio SHALL include a Projects section showcasing the user's projects: "StudyPlanner", "ScoreFusion", and "Expense Tracker", each displaying its title, tech stack badges, and description bullet points.

#### Scenario: Displaying Projects
- **WHEN** the user scrolls to the projects section
- **THEN** cards for StudyPlanner, ScoreFusion, and Expense Tracker MUST be rendered with their tech stack tags and description points.

### Requirement: Project Action Links
Each project card SHALL contain two functional action buttons/links: "GitHub" (linking to the source code repository) and "Live Demo" (linking to the project website). These links SHALL open in new tabs.

#### Scenario: Clicking Project Links
- **WHEN** the user clicks the "GitHub" or "Live Demo" button on any project card
- **THEN** a new browser tab MUST open navigating to the corresponding project URL (which may be a dummy link for now).
