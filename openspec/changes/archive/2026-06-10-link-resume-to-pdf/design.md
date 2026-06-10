## Context

The "View Resume" button on the landing page (`index.html`) currently links to a standalone webpage `resume.html`. The user wants this button to link directly to the static PDF resume file (`Ashik_Muhammed_T_Resume_A4.pdf`) and open it in a new tab.

## Goals / Non-Goals

**Goals:**
- Update the "View Resume" button href to point to `Ashik_Muhammed_T_Resume_A4.pdf` in `index.html`.
- Add/confirm `target="_blank"` on the "View Resume" button to open in a new tab.
- Delete the redundant `resume.html` file.

**Non-Goals:**
- Any styling changes to the header or other buttons.

## Decisions

### Point "View Resume" directly to PDF
- **Decision**: Update the href attribute of the anchor tag in `index.html` from `resume.html` to `Ashik_Muhammed_T_Resume_A4.pdf`. Ensure `target="_blank"` is set.
- **Rationale**: Cleanest way to implement the requirement with zero overhead.

### Delete resume.html
- **Decision**: Remove the file `resume.html` from the workspace.
- **Rationale**: Since it is no longer used, deleting it keeps the codebase clean.

## Risks / Trade-offs

- **Risk**: Users who bookmarked `resume.html` will get a 404.
- **Mitigation**: This is a personal portfolio and all entries go through the main landing page, so the risk is negligible.
