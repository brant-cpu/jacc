# Adventure 2: Moonbase Dig — chapter prototype

Working title and original story proposal supplied by the project creator. Updated direction: **Nymions are hostile, bumblebee-like alien bugs**. Cartoon laser bolts make them spin/wobble, puff and retreat. They guard the crystal-mining equipment; the player stops their harvesting and provides a different energy supply. They are not friendly quest-givers at the beginning.

## Play

Open `gdevelop/game.json` in GDevelop → TrainingGrounds → Preview, or open `prototype/index.html` with the full folder. Choose the home hub's **Adventures** rocket, HQ's **Adventure desk**, or **Places → Adventure chapters**. Crew selection remains available through Crew.

Explore and Adaptive Play offer the chapter immediately. For new Guided saves, Adventure 1: The Space Elevator Hack comes first, followed by an actual automatic dig demonstration and then **Rocket pad → Prepare pad**. Preparing the pad requires recorded digging, not just visiting the dig-site gate. The Moon chapter appears after the elevator rescue, digging and pad readiness. Existing in-progress Moon saves retain access. The elevator finale supplies a direct Moon/tick-ship pursuit route without marking the Earth field station as built. This is a small readiness/dispatch model; a full rocket-pad environment and rocket engineering activity are still future work.

The optional Earth field mission remains available through **Rocket pad → Earth research site**, including after the elevator finale. The chapter can be left at any time using Home hub/PIP. Continue returns to the next useful location. **Places here** lists landmarks even when offscreen. Guided start offers one optional PIP goal; each station has **Next useful step**, Listen and a large close button. No fast reactions, dragging or repeated firing are required.

## Playable sequence

1. PIP's chapter briefing: crystals are disappearing from a remote Earth research site.
2. Explore a separate 1600 × 960 side-view Earth dig map. Tapping destinations automatically clears a route, with scrolling camera and saved tunnels.
3. Collect crystal/stone and iron-bearing samples. Try the sample tester, then use the collected materials and prefab kit to make a field station.
4. Scan tracks to identify the Nymions and their Moon hive. The shuttle opens after the field station and trail clue.
5. Enter a separate 1600 × 960 Moon cave map. Collect a basalt record and encounter two Nymion guards.
6. Tap **Fire cartoon bolt** once for each guard. The illustrative laser/puff response clears the corresponding machine's controls. Replay repeats the reaction. Reduced animation/effects provide a static result. No health or lives are modeled.
7. Switch off the crystal drill and conveyor. Both require their own guard to be cleared.
8. Use the Moon-rock kit to build a model surface solar array with a cable and hive battery, then send the hive signal. The machines stop harvesting and the Nymions withdraw.

Panels explain that quartz and basalt are real Earth/planetary materials, while Nymions, their glowing energy crystals and their hive are fictional. The solar model locates panels on the surface, separates generation from storage and mentions long lunar nights. It is not an actual lunar-base power design.

## Persistence and replay

A separate local `chapter` record stores mission milestones, rocket readiness and cleared cells for each map. Loaded cell coordinates are validated, bounded and deduplicated. Story milestone entries appear in **My Adventures** and can be revisited. Mission materials are reusable flags, not a finite economy; the prefab station is a single-tap recipe, not free-form construction.

Replay has a short reset choice. It clears only this chapter's mission/tunnels, retaining pad readiness and all home-world collections, equipment and crew. Existing journal visit history is preserved. Saves remain local browser/host storage; cross-device saves and export are not added.

## Implementation

- `prototype/src/adventures.js`: world/site definitions, progression, prerequisite checks, recipe gates, dialogue, tutorial readiness and original provisional diagrams.
- Shared `open-spaces.js`, `data.js`, `zones.js`: chapter maps, Earth/Moon portal routing and hub/HQ entries.
- Browser `main.js`, `style.css`: chapter interface, travel, saved excavation and optional cartoon reaction.
- `journal.js`, `first-visit.js`: story milestone records and exclusion of the chapter desk from premature onboarding clues.
- Native `src/adventures.js`, `gameplay.js`, `profile.js`, `open-spaces.js`: equivalent controls, diagrams, props, guarded progression, persistence and viewport excavation pool.
- `gdevelop/scripts/adventure-assets.mjs` and original `assets/chapter-art-*` / `open-chapter*`: placeholder presentation; no canonical character art is replaced.
- Build scripts regenerate `prototype/game.js` / `gdevelop/game.json`.

## Verification

The shared suite now has 66 passing tests, including prerequisites, entry guards, station reachability, recipes, hostile encounters, repeat/restart, validated tunnel saves, menu capacity and journal records. GDevelop runtime API tests play the complete Earth/Moon sequence, save/reload and isolated replay alongside existing gameplay. Chromium mouse/touch checks cover the full chapter, blocked early Moon/machine access, cartoon encounters, persistence, journal, replay and genuinely earned Guided prerequisites. Core browser regression checks cover retained gameplay/keyboard menus/target sizes.

Commands: `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/adventures-browser.cjs`, `node prototype/tests/browser.cjs`. Regenerate with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`.

## Remaining work

This is an authored playable framework with provisional schematic art. The guards are stationary encounter/controls gates, not roaming or attacking AI. Their reactions are illustrative diagrams and a brief optional wobble, not finished combat animation. Excavation is automatic grid clearing; crafting uses fixed recipes. No procedural worlds, destructible physics, free-form Moonbase construction, rocket flight simulation or full crystal/mineral laboratory is implied. The sample test is a one-tap narrated/illustrated demonstration.

GDevelop editor rendering, actual iPad performance, adaptive hardware/screen-reader support and child testing remain unverified. Recommended next milestone: test the chapter's readability and pacing with children, then add original Nymion/rocket/field-station art and richer encounter and test animations.
