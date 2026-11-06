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

This is a playable first implementation, not a certified-accessible or production-complete game. Magnet and crystal stations provide observation cards; the farm and construction yard provide repeatable science/building models. The hill and platform use a top-down traversable grid and decorative ramp, without a physics or elevation simulation. All eight canonical astronauts are selectable with temporary suit-color placeholders. There are no enemies, grades, timers, failure penalties, monetization or backend.

Physical iPad Safari, VoiceOver, switch access, speech availability and testing with children remain required. Symbols and optional browser narration help, but do not establish reading-free comprehension; validate and replace them with tested pictorial instructions and recorded narration. Emoji appearance varies across devices. Full keyboard free-ground navigation is unavailable; keyboard users can reach every activity using destination buttons. Small portrait layouts may require scrolling. Persistence can be unavailable in private browsing. Reduced animation removes walking bob and shortens digging; travel remains visible. Journal and settings are local to the browser.

## Repository and assets

At implementation time `/workspace/jacc` had only Git metadata, no HEAD, source or assets. Fetching `brant-cpu/jacc` failed because the configured network proxy was unreachable. All work is isolated under `prototype/`; upstream architecture and assets could not be inspected. The referenced PDF was not available. Reconcile this directory with upstream before merging.

Still needed: approved astronaut/PIP art, environmental pixel art, material illustrations, accessible pictorial instruction sequences, recorded narration and sound assets. No replacement art is presented as canonical.

Next milestone: reconcile upstream, test this slice with children and accessibility users on real iPads, improve pictorial navigation and audio guidance, then implement the Phase 2 magnetism experiment and tap-to-build bridge using the shared contextual interaction system.

Browser regression tests now default to intercepted static files on an opaque-origin sandbox, without a running server. This catches ES module and local-storage assumptions. Managed Chromium blocks file:// URLs, so a literal double-click test on Windows remains unverified. Set JACC_TEST_URL to test an ordinary HTTP deployment.

## Crew selection

Open Crew and tap one of the eight astronauts to switch immediately. Cards show the canonical name, suit color, and scientific specialization. A selected badge identifies the current astronaut; the play screen also displays their name. Switching preserves location, movement, discoveries and pause state, and all astronauts can explore every activity. No biographies were added; Aiden has the owner-requested heavy excavation equipment advantage. All character visuals are temporary suit-color placeholders. Keyboard users can select cards with Tab and Enter. Browser selection is saved when local storage is available; native selection attempts host-local saving where available.

## My Journal

Journal opens a simple home page with five large pictorial choices: **What I Did**, **What I Discovered**, **My Adventures**, **My Experiments**, and **My Minerals**. Completed visits and digging populate short first-person entries. Each entry offers a short fact, Listen, and Do It Again, plus a back button. Lists have large page buttons rather than requiring precision scrolling. Close is always available. Fossils belong to discoveries, not minerals. Completed farm and construction models enter My Experiments; simply visiting a station does not count as completing one. Empty pages offer an Explore button. Browser history is saved locally when storage is available; native history now attempts host-local saving where available.

`prototype/src/journal.js` shares configurable journal sections, activity wording and entry filtering between both builds. Native regeneration reads this source. Thirty-three Node tests cover navigation, journal content, zones, farm models and PIP configuration; the browser and native event checks also exercise journal navigation and repeat activities. GDevelop desktop rendering, actual file opening, physical iPad testing and reading-free comprehension still require validation.

## PIP workshop and science buddy

**PIP → Build PIP** opens an original schematic workshop with a live robot preview. Every part works with a single tap or keyboard Enter; pointer dragging onto the large blueprint is optional. Pick hover, rover wheels, four climbing arms or swim gear; add a scanner, zoom lens or sample arm; choose visor, explorer or round eyes; add wings/fins; and choose standard cream or eight J.A.C.C. colors. **Match my J.A.C.C.** copies the current suit color. **Standard** resets every slot. Fitted parts appear on the automatic companion in the grounds and persist when browser storage is available. PIP has no health, defeat, cost, unlock or resource depletion mechanics.

**Analyze** lists discovered samples. **Ask PIP** on a discovery card opens an illustrated formula and short science explanation. Tools change the observation: composition, close-up properties, or sampling guidance. Quartz shows SiO₂ as a repeating-network ratio, not a discrete molecule. Magnetite Fe₃O₄ and shell calcium carbonate CaCO₃ are explicitly labeled examples, not identification of every iron mineral or fossil. PIP's current guide is curated offline content; there is no generative AI, web search, remote service, image identification or real spectroscopy.

Travel attachments are configurable visual prototypes. The buddy automatically follows the astronaut in the current grounds; wheels do not yet simulate driving, arms do not climb terrain, and swim gear does not enable an ocean scene. Future environment capabilities are not gated behind attachments. All designs are original provisional schematics, not approved production PIP art or licensed character artwork. There is no printing/crafting animation yet. `src/pip.js` shares part configuration, validation, SVG presentation and science data with the native build; `src/pip-workshop.js` contains the browser UI and optional pointer drag behavior.

`node tests/pip-browser.cjs` checks mouse and emulated-touch fitting/dragging, keyboard eyes, suit matching, reset, formula analysis, retained loadout, and target sizes. Native editor rendering and real-iPad gestures remain unverified.

## HQ interior

The browser starts at the training grounds home hub. HQ remains a connected interior with three rooms and a common walkway. The star-base area has a star map and arrival bay. The science lab has an observation bench and a PIP workbench that opens customization. The dormitory has cozy bunks with an optional Rest/pause action and crew lockers that open character selection. Resume is always available. There are no sleep meters, schedules, costs or penalties.

Tap the green Training grounds doorway to walk outside; tap HQ entrance in the grounds to return. Journal revisits and Find a sample in the lab automatically route through the doorway when necessary. Travel preserves crew selection, discoveries, PIP fittings and accessibility settings. Reload begins at the training grounds home hub while saved browser discoveries and customization remain available.

`src/zones.js` contains zone metadata, HQ destinations, wall/furniture collision masks and shared backdrop primitives. The Canvas draws the primitives; GDevelop uses a PNG generated from the same source. Doors are actual openings in the navigation grid. Actors approach clear positions and cannot activate an unreachable object remotely. `tests/zones.test.js` checks routes between every HQ interaction point, doorway crossings, blocked furniture, reciprocal exits and journal destinations. `node tests/hq-browser.cjs` checks all rooms, menus, rest/resume, journal entries, round-trip travel and automatic cross-zone revisits with mouse and emulated touch.

HQ is a provisional environment base. The lab is an observation space, not yet an interactive experiment simulator. The dormitory does not introduce survival mechanics. No additional ocean/space zones, NPC schedules, production interiors or real-device accessibility certification are included.

## Planet Farm

Tap **Planet farm** in the training grounds home hub. The zone has 12 stations and a return-to-home-hub door. It includes hydroponics with a pump model, greenhouse shade/ventilation, a six-stage flowering-plant model, a pollination sequence, vertical gardening, solar/wind/hydropower choices, water-cycle and water-reuse sequences, a leaf/cell/chloroplast/chlorophyll zoom, and a scripted robot helper. Activities use single taps, do not run against a clock, and do not kill plants or consume resources.

The plant computer has 15 familiar examples, searchable by category buttons and large Next/Previous controls (not a ranked abundance list). Visit sample trays in the garden, orchard, biodome, hydro farm and vertical garden to save seeds. Duplicate collection retains one sample. Seed bank cards link back to each plant's sample tray. Saved seeds and completed activities appear in the discovery/experiment journal and survive reload when browser local storage works. Existing browser saves migrate with an empty farm profile.

Shared content, view/action logic, validated saves, science illustrations and the farm backdrop are in `src/farm.js`. Native and browser menus project the same models. `tests/farm.test.js` checks every route, category and sample location, duplicate rules, all nine model completions, journal destinations and all navigation approaches. `node tests/farm-browser.cjs` exercises every station with mouse and emulated touch, the plant catalog, collecting, saved progress and travel. There are now 29 shared Node tests.

This is a protected fictional training farm using Earth plant examples, not a real planetary crop-production simulator. Hydroponics does not mean water without nutrients or oxygen. Filtering does not automatically make water safe to drink. A leaf makes sugars rather than electricity. Species differ in growth and seed-storage requirements. Art is schematic and not a plant-identification guide.

Reference verification and external scientific approval remain outstanding: see `../docs/FARM_SCIENCE.md`. The research-domain draft must be reviewed/saved and the environment published before the blocked reference sites can be checked. Real iPad gestures, narration availability, reading-free comprehension and native editor rendering remain unverified.

## Home hub routing

Training grounds are the starting and home zone. HQ entrance and Planet farm are separate destinations from that hub. HQ has a welcome desk rather than a second home hub; the farm and HQ exits both return to the training grounds. PIP Return home always navigates to the Home hub marker, including automatically crossing the connecting doorway. Cross-zone journal revisits pass through the training grounds when needed. `node tests/hub-browser.cjs` verifies mouse/touch startup, return-home from both destinations, retained mineral/seed discoveries, and reload at the hub.

## Side-view excavation and engineering handoff

Use **Dig site** in the home hub (the older carousel is now **Sample tray**). In the side view, one ground tap plans an automatic four-direction excavation route. A new tap replaces it. Support-lift tunnel graphics allow automatic vertical travel without jumping or held controls. Rock is removed cell by cell, keeping a two-cell clearance. Finds become clickable when uncovered; PIP Show places reveals their large targets without a search penalty. The seven samples are quartz, an iron-bearing mineral, fossil, amethyst, calcite, granite and basalt. Repeated finds do not create a score or consume a resource.

Tools offers drill/scoop/power arms, Show finds and Reset tunnels. Aiden has the heavy equipment advantage requested by the owner; the other astronauts still reach hard rock with automatic PIP help. Reset tunnels preserves discoveries. Deep caverns offer observation pages for cave life, pigment/albinism, echolocation, formations, groundwater and magma, plus a Deep Earth cutaway. Ping, recharge and ceiling/floor controls alter the models. Magma tiles are a protected observation barrier. Mantle is a model view, not a real-depth expedition.

**Engineering zone** retains three material workbenches alongside the new construction yard described below. Choose a collected non-fossil sample for a bridge-support, water-channel or habitat model, then Install on farm. Modules persist, appear at the farm, and are acknowledged in vertical/hydro/water/greenhouse models. All samples remain available. New profile fields (`excavation`, `designs`, `farm.upgrades`) are validated and preserve older saves; cleared tunnels and fitted models survive browser reload where storage works. There is no backend or per-world/solar-system save implementation yet.

`src/excavation.js` shares grid excavation, saved-state validation, finds, lessons and design mappings with GDevelop. `tests/excavation.test.js` covers routes, automatic completion/interruption, crew/tool differences, journals, fossil exclusion and deployment validation. `node tests/dig-browser.cjs` verifies excavation, seven cavern lessons, keyboard tool fitting and dig → engineer → farm installation with mouse and emulated touch, including reload. There are 29 shared Node tests. Character/PIP drawing now uses a pointer-transparent overlay so actors remain visible above destination cards.

Production art, real iPad testing, reading-free comprehension, native editor rendering and independent science review remain outstanding. See `../docs/DIG_SCIENCE.md` and `../docs/ROADMAP.md`.

## Construction yard and earned orbital model

The Engineering zone now has printer, crane, robot, pipe and power stations plus six construction challenges and an open-ended free-build sandbox. A 12 × 5 side-view board supports one-tap placement. Pipes rotate when tapped again; other repeated prefab taps remove the piece. Undo restores placements, Reset and robot demonstrations. Plan shows hints. Robot build is optional assistance; Test model inspects the result. Power needs both supply and return wires plus an enabled source. A closed valve stops the model flow. These are rule-based supported plans, not a full physics engine.

Machine demonstrations and successful challenges award nine distinct, reusable part kits. My parts can fit equipment at the farm without consuming it. The home hub's Space elevator project uses all nine kits to assemble a three-stage training model, then unlocks an animated orbit preview. The preview is a model viewed from a station; its planets orbit a star, with illustrative speeds and scale. It is not yet a generated world/colony or My Solar System editor. Pause and Reduced animation stop orbital movement.

Construction boards, completed activities, kits, fitted modules and elevator-model progress persist in the existing browser save where local storage is available. Reload returns to the home hub. `node tests/construction-browser.cjs` tests mouse/touch manual and keyboard placement, pause, reset/undo, six challenges, three machines, farm fitting, the earned animated preview and reload. There are 29 shared Node tests. See `../docs/CONSTRUCTION_MODELS.md` for the exact model/science/accessibility limits.

## Aquatic Learning Center

Home hub lake → Aquatic Learning Center. Tap to swim or choose the sub at the dock. The center switches between freshwater lake and protected reef/deep-ocean simulations. Large targets open wildlife, samples and illustrated science tools; Listen repeats explanations. Records save locally and appear in the aquatic/global journal. The PIP swim kit is temporary. See [science and validation notes](../docs/AQUATIC_SCIENCE.md); production art, real-device and child/accessibility tests remain outstanding.

## New crew and PIP tools

Sumati Suri (orange, Gadgil Model — Ecosystems and Environmental Science) and Lilja Jónsdóttir (purple, Mirzakhani Model — Mathematics) are selectable. PIP can match either suit color. Life Lens, Xeno Lab, Eco Probe and Pattern Projector are available in Science; More parts cycles the rack. Fit one, then use Try fitted tool (browser) / Try tool (native) to explore its three repeatable illustrated steps. See [implementation, tests and limits](../docs/CREW_AND_PIP.md).
