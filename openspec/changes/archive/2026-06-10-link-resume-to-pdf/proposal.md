## Why

Currently, clicking the "View Resume" button on the landing page opens a separate digital resume webpage (`resume.html`). The user wants to simplify the site by linking the "View Resume" button directly to the static PDF resume (`Ashik_Muhammed_T_Resume_A4.pdf`) in a new browser tab.

## What Changes

- Update the "View Resume" button in `index.html` to point directly to `Ashik_Muhammed_T_Resume_A4.pdf` and open it in a new tab.
- Remove/delete the now-redundant `resume.html` file.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `resume-viewer`: The requirements for the dedicated `resume.html` page are removed.
- `portfolio-home`: The requirements for the "View Resume" button in the personal branding header are modified to link directly to the static PDF resume.

## Impact

- Modified files: `index.html`
- Deleted files: `resume.html`
- Modified specifications: `openspec/specs/resume-viewer/spec.md`, `openspec/specs/portfolio-home/spec.md`
