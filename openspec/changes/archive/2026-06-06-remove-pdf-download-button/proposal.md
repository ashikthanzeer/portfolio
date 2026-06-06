## Why

The portfolio landing page (`index.html`) currently has both a "View Resume" button and a "Download PDF" button. To simplify the landing page's calls to action and direct users to view the interactive web resume first before downloading, the "Download PDF" button should be removed from `index.html`. It will remain available on the standalone resume page (`resume.html`).

## What Changes

- Remove the "Download PDF" button element from the header section of `index.html`.
- The resume page (`resume.html`) will continue to provide the PDF download capability.

## Capabilities

### New Capabilities

<!-- None -->

### Modified Capabilities

- `portfolio-home`: Remove the requirement for the "Download PDF" button to be displayed on the portfolio landing page header.

## Impact

- Modifies `index.html` to remove the HTML markup for the "Download PDF" button.
- Updates specifications for the portfolio home page to align with the removal.
