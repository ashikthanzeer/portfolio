## Context

The "Download PDF" button is currently defined inside the `<header class="header-section">` section of [index.html](file:///c:/Users/ashik_rqf6ipg/Downloads/Portfolio/index.html) as a child element of `<div class="header-actions">`. We need to remove this specific HTML element to clean up the landing page's layout.

## Goals / Non-Goals

**Goals:**
- Remove the "Download PDF" button from `index.html`.

**Non-Goals:**
- Do not affect any other button (e.g., the "View Resume" button) or structure in `index.html`.
- Do not modify `resume.html`, where the "Download PDF" button should remain.

## Decisions

### Element Removal
Directly delete the following anchor tag block from [index.html](file:///c:/Users/ashik_rqf6ipg/Downloads/Portfolio/index.html#L36-L40):
```html
                <a href="Ashik_Muhammed_T_Resume_A4.pdf" download="Ashik_Muhammed_T_Resume_A4.pdf"
                    class="cyber-btn download-btn">
                    <span class="btn-text"><i class="fa-solid fa-download"></i> Download PDF</span>
                    <span class="btn-glow"></span>
                </a>
```

## Risks / Trade-offs

<!-- None -->
