# Adaptable display options

Open Settings in either build. High contrast and Color-blind support are independent, reversible options; both can be enabled together and are saved in the existing local profile. Older saves default to both OFF.

- **High contrast:** black text/borders on white interface surfaces, stronger selection/focus outlines in the browser, native high-contrast button/panel textures and contrasting interface text. Colored world art and scientific diagrams remain visible; this is an interface mode, not a complete world-art replacement.
- **Color-blind support:** stable numbered destination markers within each zone and numbered crew choices. Browser controls also use double borders/dashed selected outlines. Names, icons and selected checkmarks remain available. Canonical suit colors stay intact; no universal color filter is claimed to correct all color-vision differences.

These options preserve single-tap controls, optional narration, pause and reduced-animation settings. They do not replace future child testing, low-vision/color-vision testing, real iPad validation or GDevelop editor rendering checks. No accessibility certification is claimed. Detailed diagram patterns, individual color-vision palettes and diagram contrast improvements remain future work.

Shared configuration lives in `prototype/src/display.js`; browser rendering/settings are in `main.js` and `style.css`. Native preferences, rendering and generated UI textures are in `gdevelop/src/profile.js`, `src/display.js`, `build.mjs` and `scripts/display-assets.mjs`. Both checked-in builds are regenerated.

Verification: Chromium mouse/touch tests check combined options, actual computed text contrast styling, numbered destinations/crew, local-storage reload and independent reset. Native API tests check textures, text colors, numbered labels, settings reload and independent reset; they do not validate native rendering. Run `node prototype/tests/display-browser.cjs` (Playwright/Chromium required) and `node gdevelop/tests/native.cjs`. Shared gameplay tests remain `node --test prototype/tests/*.test.js`.
