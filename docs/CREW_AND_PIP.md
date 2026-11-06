# Eight-member crew and PIP science tools

## Play

Download and extract the repository. For GDevelop, open `gdevelop/game.json`, select **TrainingGrounds** and Preview. For the browser, open `prototype/index.html` with its folder intact; no Python server is required.

Crew now includes Sumati Suri (orange, India, Gadgil Model — Ecosystems and Environmental Science) and Lilja Jónsdóttir (purple, Iceland, female math major, Mirzakhani Model — Mathematics). Lucas retains the Lederberg Model — Biology and Xenobiology. Existing roster positions are preserved so saved crew indices remain valid. New crew selections and PIP colors/parts use the existing local saves. All crew can explore every activity.

Browser crew selection shows eight cards at landscape tablet width. Native selection uses four large cards per page and opens on the current crew member's page. Previous/More crew buttons work by single tap or keyboard focus/Enter.

PIP → Build PIP → Science contains seven tools across two pages. More parts cycles pages; native Colors now cycles three pages for all nine options (standard plus eight suits). Every part supports single-tap fitting; existing optional dragging remains available. Match crew and Standard work with the expanded palette.

| Attachment | Crew science | Repeatable illustrated activity |
| --- | --- | --- |
| Life Lens | Lucas: biology | Plant cell, nucleus/DNA, chloroplasts |
| Xeno Lab | Lucas: xenobiology | Conditions for known life, evidence versus proof, explicitly fictional organism |
| Eco Probe | Sumati: ecosystems/environment | Pollination, water/soil/life connections, habitat restoration |
| Pattern Projector | Lilja: mathematics | Repeating unit, 2 + 2 grouping, mirror symmetry |

Fit a new tool, then choose Try fitted tool (browser) / Try tool (native). Next / repeat cycles its three steps indefinitely. Listen and Close are available. Existing tools still analyze discovered mineral/fossil samples. There are no scores, timed responses, costs or crew-exclusive gates. These are teaching models; extraterrestrial life is not presented as confirmed. Activities do not yet modify the farm or generate worlds.

## Files

- `prototype/src/data.js`: eight-member roster and suit colors.
- `prototype/src/pip.js`: palette, attachable layers, configurable science steps and original SVG diagrams.
- Browser `main.js`, `pip-workshop.js`, `style.css`: tool activities, paged parts and expanded crew layout; regenerated `game.js`.
- Native `build.mjs`, `src/gameplay.js`, `src/pip-workshop.js`: roster-sized resources/animations, crew paging, part/color paging, tool activities and save validation; regenerated `game.json`.
- `gdevelop/scripts/crew-assets.mjs`, expanded `pip-assets.mjs`, checked-in PNGs: reproducible original geometric placeholders.
- Shared PIP/navigation tests, expanded browser/native tests and `prototype/tests/crew-tools-browser.cjs`.

## Verification

33 shared Node tests pass. The native API harness passes crew paging/selection, nine-color paging, four science tools, repeated diagrams and new-crew/tool persistence through mocked local storage, along with existing gameplay checks. Chromium core gameplay, PIP workshop (including optional drag), and new crew/tool flows pass using mouse and touch at 1024×768. New browser crew/tool tests cover real local-storage reload. Existing six roster positions and saved PIP part IDs remain compatible.

Run `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, and the browser scripts `prototype/tests/browser.cjs`, `prototype/tests/pip-browser.cjs`, `prototype/tests/crew-tools-browser.cjs` (Playwright and Chromium required). Rebuild with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Art scripts optionally require Sharp via `JACC_SHARP_PATH`.

## Remaining work

GDevelop editor rendering and physical iPad testing are unverified. Production character/PIP artwork, recorded narration and child/accessibility user testing are still needed. Browser speech depends on available device voices. Smaller layouts may scroll. Tool models simplify science and do not replace a scientific content review. No additional personal biographies or permanent suit designs were invented.

Next milestone: validate crew and PIP activities with children on the target device, then connect these tools to selected farm/aquatic objects using richer pictorial experiments.
