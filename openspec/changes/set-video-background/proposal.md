## Why

The current website background relies on a static image (`bg.jpg`), which is a rotated abstract paint texture. Replacing this static image with a high-quality background video (`12118424_1920_1080_30fps.mp4`) will create a more modern, premium, immersive, and dynamic user experience, aligned with modern web design standards.

## What Changes

- Delete the existing static background image (`bg.jpg`) from the website.
- Integrate a local MP4 background video (`12118424_1920_1080_30fps.mp4`) to play in the background.
- Update HTML structure to include a background video element that loop-plays, is muted, and plays inline.
- Adjust CSS styles to overlay the background video smoothly under the existing page content, maintaining dark-theme accessibility, high contrast, and responsive layout.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `portfolio-home`: The background requirement is updated from a static abstract blue-black paint texture image to a dynamic background video.

## Impact

- **Assets**: `bg.jpg` will be deleted, and a new MP4 video file will be added as `bg.mp4` (sourced from `C:\Users\ashik_rqf6ipg\Downloads\12118424_1920_1080_30fps.mp4`).
- **HTML**: `index.html` will be updated to include the `<video>` container.
- **CSS**: `styles.css` will be modified to remove references to `bg.jpg` and style the new video background element to be fixed, cover the screen, and sit behind content with proper overlays/opacity.
