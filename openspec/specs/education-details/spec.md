# education-details Specification

## Purpose
TBD - created by archiving change document-existing-portfolio. Update Purpose after archive.
## Requirements
### Requirement: Interactive Education Cards
The portfolio page SHALL display distinct interactive cards for "B.Tech CSE" at "CET Trivandrum", "BS in Data Science" at "IIT Madras", and "Senior Secondary" at "Al Huda English School Neerkunnam".

#### Scenario: Displaying Cards
- **WHEN** the user views the education section
- **THEN** all three education cards (CET, IIT Madras, and Al Huda) MUST be displayed.

### Requirement: Education Details Popup Modal
Clicking on any education card SHALL display a modal overlay popup containing specific details about that program/institution, including durations, qualifications, CGPAs, and academic rankings.

#### Scenario: Opening CET Trivandrum Details
- **WHEN** the user clicks the "B.Tech CSE" card
- **THEN** a popup modal MUST appear displaying "B.Tech in Computer Science and Engineering", "College of Engineering Thiruvananthapuram", "Duration: 2025-Present", and "Current CGPA: 9.42".

#### Scenario: Opening IIT Madras Details
- **WHEN** the user clicks the "BS in Data Science" card
- **THEN** a popup modal MUST appear displaying "BS in Data Science and Applications", "Indian Institute of Technology Madras", "Duration: 2025-Present", and "Current CGPA: 8.83".

#### Scenario: Opening Al Huda English School Details
- **WHEN** the user clicks the "Senior Secondary" card
- **THEN** a popup modal MUST appear displaying "Al Huda English School Neerkunnam", "Duration: May 2023 - April 2025", "AISSCE 2025: 487/500 (97.4%)", "KEAM 2025: Rank 433", "JEE Main 2025: 96.815 Percentile", "JEE Advanced 2025: OBC-NCL Rank 8078", and "CUSAT CAT 2025: Rank 335".

### Requirement: Closing the Popup Modal
The active modal popup SHALL provide a close button (denoted by `&times;`) which, when clicked, closes/hides the modal and returns focus to the landing page.

#### Scenario: Closing Active Modal
- **WHEN** the user clicks the close (`&times;`) button on an open modal
- **THEN** the modal MUST be hidden from view.

