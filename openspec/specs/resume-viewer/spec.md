# resume-viewer Specification

## Purpose
TBD - created by archiving change update-portfolio-from-resume. Update Purpose after archive.
## Requirements
### Requirement: Digital Resume Page
The system SHALL provide a dedicated, standalone web page named `resume.html` that displays the complete content of the user's resume, structured professionally for readability. The page SHALL feature navigation options: a "Back to Portfolio" button and a "Download PDF" button pointing directly to the static `resume.pdf` file.

#### Scenario: Navigating to Resume
- **WHEN** the user views `resume.html`
- **THEN** the "Back to Portfolio" link and the "Download PDF" button MUST be visible and functional in the page header.

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

### Requirement: Printable and Print-Friendly Styling
The `resume.html` page SHALL use clean, print-friendly styles (e.g. high contrast dark text on light background during print) formatted to fit a standard A4 page layout with minimal borders when printed.

#### Scenario: Printing Resume
- **WHEN** the user triggers the browser's print dialog on `resume.html`
- **THEN** the print layout MUST output a clean, non-interactive document optimized for standard paper sizes.

