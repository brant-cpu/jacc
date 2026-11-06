# Swimming exploration build

## Launch

Download/extract the complete repository. GDevelop: open `gdevelop/game.json`, select **TrainingGrounds**, Preview. Browser: open `prototype/index.html` with its folder intact.

From the home hub lake choose **Aquatic Learning Center**, then **Swim trail**. Choose **Home lake**, **Reef & open-ocean simulation**, or **Deep-ocean simulation**. The trail closes directly into play and selects swimming. Existing saved submarine, science models, construction-kit records, accessibility settings and journal history are preserved; the dock still switches between swimming and the sub.

## Playable additions

- Horizontal astronaut swimming art for all eight available crew members, with silver metal and teal energy/fin accents. Two gentle movement frames replace the standing/walking pose while swimming.
- Ten original, selectable wildlife/plant schematics drawn in the actual environment, rather than only appearing as small menu icons. Marine wildlife stays in marine simulations; the home lake remains freshwater.
- Six repeatable observation finds: rounded pebbles and leaf litter (lake); an empty shell and reef sand (reef); a rock arch and seafloor sediment (deep). Arrival automatically saves a validated record; no live animal is collected or removed. Records enter the existing aquatic and global discovery journals.
- Three improved underwater backgrounds, steady habitat features, gentle creature motion and optional bubbles. These are original provisional schematics, not production wildlife or suit designs.
- Tap open water to swim automatically. A new destination interrupts the old route. Destination-only movement help remains available through the first-visit supports and Access destination lists.
- **PIP → Show me a swim** approaches nearby wildlife automatically. PIP wears temporary swim gear and retains its saved appearance outside the zone.
- Pause freezes travel and new animation; reduced animation freezes creature motion/fins and hides bubbles. Visual effects OFF hides bubbles. No oxygen timer, damage, required dragging, reflex challenge or failure penalty.
- Large, stable tap regions stay in place while creatures gently bob within them. Names, visible saved checkmarks and existing color-blind/contrast modes supplement the illustrations. Native name labels use white backing for readability. Existing keyboard/switch/controller/AAC routes remain available.

The new trail and finds are implemented in both builds. The separately cataloged current-routing puzzle, CubeSat work, biome experiments and other proposed activities are **not** implemented by this change.

## Files and architecture

- `prototype/src/aquatic.js`: trail routes/actions, six habitat-specific findings, normalized collection records and improved backdrops.
- `prototype/src/swimming.js`: original transparent wildlife/find/swimmer SVG generators and bounded motion helper.
- Browser `main.js` and `style.css`: world art, horizontal avatar, static touch regions, saved-find feedback and swim assistance; updated bundle script and generated `game.js`.
- Native `src/aquatic.js`, `gameplay.js`, `build.mjs`: equivalent sprite presentation, swim avatar animations, habitat filtering and direct trail entry; regenerated `game.json`.
- `gdevelop/scripts/swim-assets.mjs`, updated aquatic assets and `assets/swim-*`: reproducible original placeholder art. Optional regeneration needs Sharp via `JACC_SHARP_PATH`.
- Expanded aquatic unit tests, native harness and new `prototype/tests/swimming-browser.cjs`; existing aquatic browser tests retain science/sub/journal coverage.

## Verification and limits

45 shared Node tests pass. The native API harness verifies all three habitats, six finds, interruptible movement, swimming pose/visibility, pause/reduced-motion behavior, return home and saved reload, alongside existing gameplay. Chromium mouse and touch flows verify trail entry, free movement, observations, PIP assistance, journal entries and persistence; existing aquatic science/sub flows also pass.

Commands: `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/swimming-browser.cjs`, `node prototype/tests/aquatic-browser.cjs` (Playwright/Chromium required). Build with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`.

GDevelop editor rendering, physical iPad touch, real adaptive hardware, JAWS and child/accessibility user testing remain unverified. Native APIs are tested with mocks; browser tests use a landscape 1024×768 viewport. Wildlife motion is gentle decorative bobbing, not a full autonomous ecosystem. Water has no fluid dynamics, and the astronaut/sub do not simulate real diving safety or physiology. Portrait/small displays and longer translated labels need further layout testing. Production wildlife/astronaut art, narration and sounds remain required.

Next milestone: real-device/child testing of swim travel and stable targets, then richer object-specific discovery animations and the separately planned current workshop.
