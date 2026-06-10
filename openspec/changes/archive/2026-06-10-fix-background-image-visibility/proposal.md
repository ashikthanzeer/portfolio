## Why

The background image `bg.jpg` is currently not showing up on the portfolio page. This is because the page's background color is applied directly to the `body` selector, which is rendered on top of negative z-index pseudo-elements like `body::before`. Additionally, the viewport unit values for centering the rotated background are swapped.

## What Changes

This change:
- Relocates the background color declaration (`background-color: var(--bg-color);`) from `body` to `html` in `styles.css` so that children can render on top of it.
- Corrects the `body::before` centering offsets to use `top: -50vh` and `left: -50vw` (was `top: -50vw` and `left: -50vh`).

## Capabilities

### New Capabilities

<!-- None -->

### Modified Capabilities

- `portfolio-home`: Fix styling parameters in `styles.css` to render the rotated background image correctly.

## Impact

Modifies `styles.css` only. No HTML or JS files are changed.
