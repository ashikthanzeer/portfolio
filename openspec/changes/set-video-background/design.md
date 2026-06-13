## Context

The portfolio website currently uses a rotated static background image (`bg.jpg`) styled on `body::before` with `opacity: 0.15`, positioned fixed, and occupying the lowest layer (`z-index: -3`) of the layout. The user wants to replace this with a local MP4 background video (`12118424_1920_1080_30fps.mp4`), deleting the static image.

## Goals / Non-Goals

**Goals:**
- Copy the target MP4 file from `C:\Users\ashik_rqf6ipg\Downloads\12118424_1920_1080_30fps.mp4` into the portfolio root directory as `bg.mp4`.
- Delete the existing `bg.jpg` file.
- Insert a `<video>` container into `index.html` configured for background play (autoplay, loop, muted, playsinline).
- Update `styles.css` to style the video element as a cover background, removing the `body::before` pseudo-element that referenced `bg.jpg`.
- Ensure the background video integrates smoothly with the cyber-grid and cyber-scanline overlays.

**Non-Goals:**
- Adding user controls (play/pause buttons) to the background video.
- Changing any other colors, accent neon borders, grid overlay parameters, or contents.

## Decisions

### 1. Structure of Background Video
- **Choice**: Embed video directly in `index.html` after the opening `<body>` tag.
- **HTML**:
  ```html
  <div class="video-bg-container">
      <video autoplay muted loop playsinline class="video-bg">
          <source src="bg.mp4" type="video/mp4">
      </video>
  </div>
  ```
- **Rationale**: Direct HTML insertion is the standard way to run background videos with reliable autoplay support across browsers. Setting `muted`, `loop`, `autoplay`, and `playsinline` is crucial, as modern browsers block autoplaying videos that are not muted.

### 2. Styling and Layering
- **Choice**: Style the video to behave similarly to the old background.
- **CSS**:
  ```css
  .video-bg-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -3;
      overflow: hidden;
      pointer-events: none;
  }
  .video-bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.15;
      filter: brightness(0.6) contrast(1.3);
  }
  ```
- **Rationale**: Setting `object-fit: cover` preserves aspect ratio while filling the screen. The low opacity (`0.15`) and brightness/contrast adjustments match the previous static background's visual parameters, keeping content readable. `pointer-events: none` ensures the video doesn't intercept clicks, keeping the UI fully interactive.

### 3. File Operations
- **Choice**: Copy the file from downloads to project root as `bg.mp4`, and delete `bg.jpg`.
- **Rationale**: Keeps the codebase self-contained so it runs correctly on any local or web hosting platform without hardcoded absolute path links to external download directories.

## Risks / Trade-offs

- **[Risk] Performance and Bandwidth** → Playing videos on web pages consumes more CPU and memory than a static image.
  - *Mitigation*: The video is a short, loops nicely, and low opacity overlay renders cleanly. Keeping the container fixed helps the browser optimize rendering.
- **[Risk] Autoplay Policies** → Mobile browsers might pause autoplay in low power mode.
  - *Mitigation*: Standard `<video autoplay muted loop playsinline>` attributes ensure compatibility on almost all modern devices.
