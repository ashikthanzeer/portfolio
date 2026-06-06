## Why

To make the resume easily accessible in standard printable format, the user needs an option to download their resume as an A4 formatted PDF document directly from the website.

## What Changes

This change:
- Generates a static A4-sized PDF file `resume.pdf` from the optimized `resume.html` page using a headless browser printing command.
- Adds a "Download PDF" link/button to the header section of `index.html`.
- Adds a corresponding "Download PDF" button to the print navigation panel in `resume.html` that links directly to the local `resume.pdf` file.

## Capabilities

### New Capabilities

<!-- None -->

### Modified Capabilities

- `portfolio-home`: Add a "Download PDF" button to the header action buttons that triggers direct download of `resume.pdf`.
- `resume-viewer`: Add a download action to the digital resume page linking to the static `resume.pdf` file.

## Impact

Introduces a new static asset `resume.pdf` in the workspace root. Modifies `index.html` and `resume.html` to link to this file.
