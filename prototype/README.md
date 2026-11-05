# J.A.C.C. Phase 1 prototype

A dependency-free, one-finger Canvas exploration slice for GSEI Discovery Training Grounds. All visuals are provisional; the astronaut and PIP are geometric placeholders, not canonical production designs.

## Run

Extract the complete ZIP, then double-click `index.html` inside `prototype/`. Chrome, Edge, Firefox or Safari can run this build directly. Python and GDevelop are not required to play it. This is still a browser prototype, not a native GDevelop project.

Developers: edit the modular files in `src/`, then run `node scripts/build.mjs` to refresh the checked-in `game.js` classic script. That bundle supports local-file opening without blocked ES module imports. An optional web server can also serve this folder.

Tap Explore, then tap a picture or the ground. Navigation avoids the pond and is interruptible. Picture targets automatically position Alex beside an activity. Tap the pickaxe for quartz, an iron-bearing mineral, and a fossil in a repeating cycle. Close each card with X; revisit any discovered item in the journal. PIP can highlight destinations, demonstrate digging, repeat guidance, return to a previous activity, or go home. Settings control audio volume, optional synthesized narration, animation, and visual effects. Pause and modal dialogs suspend movement. Tab and Enter operate destination buttons and menus; Escape closes dialogs. Local storage remembers discoveries and settings when available.

## Files and architecture

- `scripts/build.mjs`, `game.js`: reproducible local-file-compatible browser bundle.
- `index.html`, `style.css`: responsive landscape presentation and accessible DOM controls over the Canvas.
- `src/main.js`: contextual interaction, movement updates, geology lifecycle, overlays, settings, journal and rendering.
- `src/navigation.js`: grid breadth-first pathfinding and obstacle mask.
- `src/data.js`: configurable science cards, seven mode registrations, world destinations and canonical six-person roster.
- `src/foundation.js`: optional image asset loading, scene lifecycle and extensible character registry.
- `assets/pip.svg`: noncanonical placeholder robot icon.
- `tests/navigation.test.js`: routing and content checks.
- `tests/browser.cjs`: actual mouse and emulated iPad-size touch workflow checks. Uses the managed machine's preinstalled Playwright; override its import and Chromium path for another machine.

## Validation

`node --test tests/navigation.test.js` runs three tests: every pair of destinations reachable without crossing the pond, blocked/boundary handling, and configurable material/roster/mode data. `node tests/browser.cjs` runs desktop mouse and 1024×768 touch contexts in Chromium: four digs covering the complete discovery cycle and repeat, journal entries, PIP highlighting, pause/resume, platform navigation, keyboard modal operation, minimum 60px targets, and JavaScript error collection. Each browser run writes a screenshot.

## Scope and limitations

This is a playable first implementation, not a certified-accessible or production-complete game. Magnet, crystal and engineering locations provide observation cards; later-phase experiments are deliberately unimplemented. The hill and platform use a top-down traversable grid and decorative ramp, without a physics or elevation simulation. All six canonical astronauts are selectable with temporary suit-color placeholders. There are no enemies, grades, timers, failure penalties, monetization or backend.

Physical iPad Safari, VoiceOver, switch access, speech availability and testing with children remain required. Symbols and optional browser narration help, but do not establish reading-free comprehension; validate and replace them with tested pictorial instructions and recorded narration. Emoji appearance varies across devices. Full keyboard free-ground navigation is unavailable; keyboard users can reach every activity using destination buttons. Small portrait layouts may require scrolling. Persistence can be unavailable in private browsing. Reduced animation removes walking bob and shortens digging; travel remains visible. Journal and settings are local to the browser.

## Repository and assets

At implementation time `/workspace/jacc` had only Git metadata, no HEAD, source or assets. Fetching `brant-cpu/jacc` failed because the configured network proxy was unreachable. All work is isolated under `prototype/`; upstream architecture and assets could not be inspected. The referenced PDF was not available. Reconcile this directory with upstream before merging.

Still needed: approved astronaut/PIP art, environmental pixel art, material illustrations, accessible pictorial instruction sequences, recorded narration and sound assets. No replacement art is presented as canonical.

Next milestone: reconcile upstream, test this slice with children and accessibility users on real iPads, improve pictorial navigation and audio guidance, then implement the Phase 2 magnetism experiment and tap-to-build bridge using the shared contextual interaction system.

Browser regression tests now default to intercepted static files on an opaque-origin sandbox, without a running server. This catches ES module and local-storage assumptions. Managed Chromium blocks file:// URLs, so a literal double-click test on Windows remains unverified. Set JACC_TEST_URL to test an ordinary HTTP deployment.

## Crew selection

Open Crew and tap one of the six astronauts to switch immediately. Cards show the canonical name, suit color, and scientific specialization. A selected badge identifies the current astronaut; the play screen also displays their name. Switching preserves location, movement, discoveries and pause state, and all astronauts can explore every activity. There are no new character powers or biographies. All character visuals are temporary suit-color placeholders. Keyboard users can select cards with Tab and Enter. Browser selection is saved when local storage is available; native preview selection lasts for that preview session.

## My Journal

Journal opens a simple home page with five large pictorial choices: **What I Did**, **What I Discovered**, **My Adventures**, **My Experiments**, and **My Minerals**. Completed visits and digging populate short first-person entries. Each entry offers a short fact, Listen, and Do It Again, plus a back button. Lists have large page buttons rather than requiring precision scrolling. Close is always available. Fossils belong to discoveries, not minerals. Experiment activities remain planned; visiting a station does not count as completing an experiment. Empty pages offer an Explore button. Browser history is saved locally when storage is available; native history currently lasts for the preview session.

`prototype/src/journal.js` shares configurable journal sections, activity wording and entry filtering between both builds. Native regeneration reads this source. Six Node tests cover navigation and journal content; the browser and native event checks also exercise journal navigation and repeat activities. GDevelop desktop rendering, actual file opening, physical iPad testing and reading-free comprehension still require validation.
