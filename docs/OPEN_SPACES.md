# Open flight, digging and forest spaces — playable framework

## Launch and navigation

Download/extract the repository. Open `gdevelop/game.json` in GDevelop, select TrainingGrounds and Preview; or open `prototype/index.html` with its folder intact.

From the home hub choose **Flight range**, **Forest**, or **Open dig landscape**. The original smaller Dig site remains available. **Places / PLACES** provides a large-button directory to the three spaces, home, and landmarks in the current space. Selecting a distant landmark automatically travels there while the view follows. Space/home choices in this directory are explicit fast travel. PIP → Return home returns immediately from the large spaces, without forcing a long retrace.

## Implemented spaces

| Space | Model dimensions | Working interactions |
| --- | --- | --- |
| Open Flight Range | 2400 × 1200 world units | Tap-to-fly training-suit movement, two automatic landing pads, clouds/wind/balloon observations and a distant high lookout. PIP temporarily uses hover gear. No fuel or oxygen timer. |
| Forest Exploration | 2400 × 1200 | Automatic walking/pathfinding, stream crossing through a bridge, oak grove/seed collection, tree hollow, pollinator clearing, fern/pine observations and forest-floor science. |
| Open Dig Landscape | 2400 × 1600 | Tap a point/landmark to excavate a route automatically through visible layers. Keep cleared tunnels across local saves; find quartz, iron-bearing mineral, fossil and basalt records; visit cavern/groundwater markers. Aiden moves faster through this training field; every crew member can dig. |

All spaces use a scrolling viewport, interruptible movement, stable large discovery targets, optional inspection cards and existing crew/PIP/settings. Camera offsets are separate from world coordinates so faraway points remain navigable. Native rendering reuses a viewport-sized pool of cut-ground tiles while the hidden world-position actor drives movement; a screen-position avatar and PIP layers follow the viewport. Reduced-resolution original backdrop images preserve aspect ratio and reduce texture memory.

Visits appear in the journal. Forest acorn collection uses the existing oak seed-bank entry. Mineral/fossil discoveries reuse existing collection and engineering rules; original smaller-site journal sample revisit links still lead to their established locations. Fossils remain observations, not construction supplies. Cleared tunnel coordinates are validated/bounded when loaded.

Suit scan overlays account for viewport offsets. Flight/forest/digging remain available with existing destination-only movement help; ground tapping can be disabled independently through supports. Places and Access destination lists expose distant landmarks to keyboard, configured switches and controller navigation. Pause stops movement. No timed selection, precision steering, mandatory dragging, enemy, hunger or harmful failure state is added.

## Files

- `prototype/src/open-spaces.js`: authored landscape definitions, portals, discoveries, camera calculations, obstacle rules, tunnel normalization and original background SVGs.
- `data.js`, `zones.js`, `navigation.js`, `journal.js`: three connected zones, larger pathfinding grids and journal coverage.
- Browser `main.js`, `style.css`, `suits.js`: camera-following scenes/targets, flight/landing, auto-excavation, seed/sample interactions, Places and camera-aware suit overlays; regenerated `game.js`.
- Native `src/open-spaces.js`, `gameplay.js`, `profile.js`, `pip-workshop.js`, `suits.js`, `build.mjs`: equivalent world/render coordinates, Places pages, avatars and persistence; regenerated `game.json`.
- `gdevelop/scripts/open-space-assets.mjs`, `assets/open-*`: original placeholder scenery, flight suits and reusable cut-ground texture. Optional generation needs Sharp through `JACC_SHARP_PATH`.
- New shared/open-space browser tests and extended native/core-browser tests.

Build: `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`.

## Validation

48 shared tests pass, including all landmark approaches, hub routing, obstacle avoidance at the forest stream, camera limits, tunnel validation and journal entries. The native runtime harness passes distant flight, forest seed collection, stream-crossing travel, auto-excavation, deep-camera travel, home recovery and saved tunnels, along with existing gameplay.

Chromium mouse/touch automation covers all three spaces, distant camera-followed travel, landing, forest seeds, automatic digging, sample/journal records, immediate home and reload persistence. Existing core mouse/touch flows are checked after adding the portals/Places control. Run `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/open-spaces-browser.cjs` and `node prototype/tests/browser.cjs` (Playwright/Chromium required).

## Limits and next milestone

These are authored exploratory training landscapes, not procedural planets. Flight is automatic navigation rather than aerodynamic/orbital physics; wind/balloon markers are explanatory models. Digging clears a grid automatically, without simulating terrain collapse, physical hardness or actual Earth-scale depths. Forest trees and landmarks are illustrative scenery/observations, not a complete ecological simulation; the stream is the current navigation obstacle. The hollow/cavern markers are investigations, not separate interior rooms.

A spatial minimap, favorite bookmarks, save export/recovery, generated worlds, the custom astronaut creator, populated wildlife ecosystems and the many cataloged experiments remain future work. No new completed version of those systems is implied.

GDevelop editor rendering, physical iPad performance, JAWS, real adaptive hardware and child/accessibility testing remain unverified. Browser tests use 1024×768 landscape. Smaller layouts, long translations, large-font settings and performance in long excavation sessions need further device testing. All art is provisional and noncanonical. Next milestone: target-device/child testing, then populate these spaces with the selected science stations and richer discovery animations.
