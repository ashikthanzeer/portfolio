## ADDED Requirements

### Requirement: Digital Resume Page
The system SHALL provide a dedicated, standalone web page named `resume.html` that displays the complete content of the user's resume, structured professionally for readability.

#### Scenario: Navigating to Resume
- **WHEN** the user clicks the "View Resume" button on the main portfolio page
- **THEN** a new tab MUST open displaying `resume.html`.

### Requirement: Resume Content Completeness
The `resume.html` page SHALL display all details from the user's resume, including:
- Contact information: name, phone (+91 98955 26880), email (ashikthanzeer6@outlook.com), LinkedIn, GitHub.
- About me profile summary.
- Full education history (CET Trivandrum, IIT Madras, Al Huda English School with CGPAs and entrance rankings).
- Classified technical skills list.
- All three projects with descriptions.

#### Scenario: Inspecting Resume Details
- **WHEN** the `resume.html` page is loaded
- **THEN** all contact, profile, education, skill, and project details MUST be visible.

### Requirement: Printable and Print-Friendly Styling
The `resume.html` page SHALL use clean, print-friendly styles (e.g. high contrast dark text on light background during print) formatted to fit a standard A4 page layout with minimal borders when printed.

#### Scenario: Printing Resume
- **WHEN** the user triggers the browser's print dialog on `resume.html`
- **THEN** the print layout MUST output a clean, non-interactive document optimized for standard paper sizes.
