## Context

The user wants a direct A4 PDF download option for their resume. We need to pre-generate the PDF file from the existing optimized `resume.html` page and link to it from the portfolio homepage and the digital resume page.

## Goals / Non-Goals

**Goals:**
- Programmatically generate a high-quality, print-friendly A4 `resume.pdf` file using a headless web browser print command.
- Add a "Download PDF" button in `index.html` next to the "View Resume" link.
- Add a "Download PDF" button in `resume.html` next to the "Portfolio" back link.
- Ensure the download links trigger native browser downloads with a clean filename (e.g., `Ashik_Muhammed_T_Resume.pdf`).

**Non-Goals:**
- Changing resume layout structure or styling beyond adding the download action links.

## Decisions

### PDF Pre-generation via Headless Chrome
We will use headless Chrome's built-in PDF printer to compile the HTML resume into an A4 PDF document:
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --print-to-pdf="c:\Users\ashik_rqf6ipg\Downloads\Portfolio\resume.pdf" --no-pdf-header-footer "c:\Users\ashik_rqf6ipg\Downloads\Portfolio\resume.html"
```
- **Rationale**: Headless Chrome respects all `@media print` rules, producing an exact page-by-page representation of the CSS-optimized layout in standard A4 PDF format without relying on complex, heavy npm packages.

### HTML Download Attribute
The buttons will use the HTML5 `download` attribute to force direct browser download:
```html
<a href="resume.pdf" download="Ashik_Muhammed_T_Resume.pdf">...</a>
```

## Risks / Trade-offs

- **[Risk] Path differences for Google Chrome application** → On different machines, Chrome might be installed at different directories.
  - *Mitigation:* We will check for the executable path before generating. If it is located in the standard Program Files directory, we will trigger it. If Chrome is not found, we will fall back to using standard system path lookup or instruct the user.
