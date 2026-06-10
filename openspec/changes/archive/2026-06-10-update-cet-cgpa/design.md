## Context

The portfolio and resume currently display a CGPA of 9.42 for the B.Tech CSE program at CET. This needs to be updated to 9.79.

## Goals / Non-Goals

**Goals:**
- Update the CET CGPA to 9.79 in the interactive education details modal of `index.html`.
- Update the CET CGPA to 9.79 in the printable resume page `resume.html`.

**Non-Goals:**
- Any updates to other education entries, projects, or styling/layout.

## Decisions

### Update CGPA in HTML directly
- **Decision**: Modify the hardcoded CGPA value `9.42` to `9.79` directly in `index.html` and `resume.html`.
- **Rationale**: Since the portfolio is a static website, editing the HTML files directly is the most straightforward and correct approach.

## Risks / Trade-offs

- **Risk**: The static PDF resume (`Ashik_Muhammed_T_Resume_A4.pdf`) will become out of sync with the website and `resume.html`.
- **Mitigation**: Mention the discrepancy or advise the user to regenerate/re-upload the PDF if needed.
