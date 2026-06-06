## ADDED Requirements

### Requirement: Interactive Education Cards
The portfolio page SHALL display distinct interactive cards for "B.Tech CSE" at "CET Trivandrum" and "BS in Data Science" at "IIT Madras".

#### Scenario: Displaying Cards
- **WHEN** the user views the education section
- **THEN** both education cards MUST be displayed with hover transitions.

### Requirement: Education Details Popup Modal
Clicking on an education card SHALL display a modal overlay popup containing specific details about the selected program, including the full degree name, institution, duration, and current CGPA.

#### Scenario: Opening CET Trivandrum Details
- **WHEN** the user clicks the "B.Tech CSE" card
- **THEN** a popup modal MUST appear displaying "B.Tech in Computer Science and Engineering", "College of Engineering Thiruvananthapuram", "Duration: 2025-Present", and "Current CGPA: 9.42".

#### Scenario: Opening IIT Madras Details
- **WHEN** the user clicks the "BS in Data Science" card
- **THEN** a popup modal MUST appear displaying "BS in Data Science and Applications", "Indian Institute of Technology Madras", "Duration: 2025-Present", and "Current CGPA: 8.83".

### Requirement: Closing the Popup Modal
The active modal popup SHALL provide a close button (denoted by `&times;`) which, when clicked, closes/hides the modal and returns focus to the landing page.

#### Scenario: Closing Active Modal
- **WHEN** the user clicks the close (`&times;`) button on an open modal
- **THEN** the modal MUST be hidden from view.
