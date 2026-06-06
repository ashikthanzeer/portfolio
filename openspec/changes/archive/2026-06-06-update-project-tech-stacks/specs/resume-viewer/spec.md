## MODIFIED Requirements

### Requirement: Resume Content Completeness
The `resume.html` page SHALL display all details from the user's resume, including:
- Contact information: name, phone (+91 98955 26880), email (ashikthanzeer6@outlook.com), LinkedIn, GitHub.
- About me profile summary.
- Full education history (CET Trivandrum, IIT Madras, Al Huda English School with CGPAs and entrance rankings).
- Classified technical skills list.
- All three projects with corrected technical stack listings:
  - **StudyPlanner**: React, Vite, TypeScript, Express.js, PostgreSQL
  - **ScoreFusion**: HTML, CSS, JavaScript
  - **Expense Tracker**: HTML, CSS, JavaScript

#### Scenario: Inspecting Resume Details
- **WHEN** the `resume.html` page is loaded
- **THEN** all contact, profile, education, skill, and project details (matching the updated tech stacks) MUST be visible.
