## Context

The user provided an abstract paint texture image (in vertical orientation) and requested it be rotated and set as the portfolio website background.

## Goals / Non-Goals

**Goals:**
- Copy the image asset locally to the project directory.
- Implement a CSS-only background rotation to display the texture in landscape mode without altering the layout of the page's text or containers.
- Maintain a high level of text contrast and readability by applying opacity and brightness styling filters to the background layer.

**Non-Goals:**
- Resizing or modifying the image file itself via external scripting tools; the rotation is managed natively via CSS.
- Modifying project cards, skills list, or resume links.

## Decisions

### CSS-Only Rotation Using a Pseudo-Element
We will implement the background image on a `body::before` pseudo-element.
- **Implementation**:
  ```css
  body::before {
      content: '';
      position: fixed;
      top: -50vw;
      left: -50vh;
      width: 200vw;
      height: 200vh;
      background: url('bg.jpg') no-repeat center center;
      background-size: cover;
      transform: rotate(90deg);
      transform-origin: center center;
      z-index: -3;
      opacity: 0.15;
      filter: brightness(0.6) contrast(1.3);
      pointer-events: none;
  }
  ```
- **Rationale**: A square container (`200vw` by `200vh` centered) rotated by 90 degrees will cover the viewport perfectly, eliminating blank corners while keeping DOM nodes unchanged. Setting `pointer-events: none` ensures it does not interfere with mouse click events on cards.

## Risks / Trade-offs

- **[Risk] Texture Legibility Interference** → The white and bright blue highlights in the paint texture could overlap with cyan text, making it unreadable.
  - *Mitigation:* Cap opacity at `0.15` and apply `brightness(0.6)` filter to keep background details subtle and dark.
