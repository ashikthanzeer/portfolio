## Context

The background image `bg.jpg` is currently invisible due to CSS rendering stacking rules and swapped alignment values.

## Goals / Non-Goals

**Goals:**
- Fix the CSS declarations to make the background image visible.
- Correct the layout alignment offsets of the rotated pseudo-element.

**Non-Goals:**
- Modifying HTML code or other visual page components.

## Decisions

### Stacking Order Fix via HTML Selector
Apply the primary void background color `#060713` to the `html` selector instead of the `body` selector.
- **Rationale**: Setting a background color directly on `body` forces the canvas to draw the color on top of children that have negative z-indices like `body::before`. Relocating the color to `html` ensures `body` has a transparent backdrop, exposing the rotated `body::before` background layer.

### Positional Alignment Correction
Change `body::before` parameters:
- `top`: `-50vh` (was `-50vw`)
- `left`: `-50vw` (was `-50vh`)
- **Rationale**: Aligning `top` with height units (`vh`) and `left` with width units (`vw`) centers the rotated square perfectly.

## Risks / Trade-offs

- **[Risk] Transparent Body Background Issues** → Other pages or components might expect body background-color to be solid.
  - *Mitigation:* `html` background propagates to the viewport canvas, so visually the void color is still standard. No side effects exist for this static portfolio.
