# J.A.C.C. — native GDevelop 5 project

## Open and play

1. Download the repository ZIP from GitHub and extract the complete folder.
2. In GDevelop 5, choose **Open a project** / **Open from your computer**.
3. Select **gdevelop/game.json**. Do not select an HTML file, ZIP, source JS file, or package.json.
4. Open the **TrainingGrounds** scene, then choose **Preview**.

No Python, web server, package installation, or external assets are required. Keep the assets folder beside game.json.

Tap a picture to walk and investigate. Use Sample tray for the original three finds, or Dig site for side-view excavation. X closes every panel. PIP demonstrates digging and returns to the previous activity or home. Journal records discoveries for this preview session; settings control speech volume, optional narration, shortened digging and marker effects. Tab selects a control, Enter activates it, Escape closes panels. Touch uses GDevelop's native mouse simulation. Pausing and panels stop the movement simulation.

This is a native GDevelop scene: editable Sprite and Text objects, PNG resources, and a JavaScript event driving native object positions and GDevelop's input system. It does not load the browser prototype or use a DOM/Canvas wrapper. The eight canonical astronauts remain in configurable source data; all eight astronauts are selectable using provisional suit-color placeholders.

## Edit

Open **TrainingGrounds → Events** to inspect the gameplay event. For source-based editing, change `src/gameplay.js`, then run `node build.mjs` from this folder to regenerate game.json. The build also reads the shared configurable data/navigation in `../prototype/src/` and `project-template.json`. It has no external package dependency. Rebuilding replaces game.json: preserve editor edits before regenerating. Editing in GDevelop does not require Node.

## Validation and limits

`node tests/native.cjs` checks all resource paths and object/instance references, compiles the event code, and runs repeated digging, journal, PIP demonstration, pause, platform access, settings and keyboard logic against a native API harness. This is **not** an actual GDevelop editor or renderer test. A desktop GDevelop installation is unavailable in the development environment, so opening and Preview in your installed version remain unverified.

This is an initial native conversion, not Phase 1 acceptance or accessibility certification. Real iPad Safari, touch export, screen reader/switch input, layout rendering, emoji glyph coverage, browser speech and reading-free comprehension need validation. Progress and settings attempt host-local saving; actual GDevelop host persistence remains unverified outside the API harness. PIP hints change target opacity rather than animate a tutorial. Platform traversal is top-down with an illustrative ramp. There is no climbing physics, recorded narration or authored sound effects. Magnetism and engineering are observation stations, with experiments reserved for later phases. All art is explicitly temporary and noncanonical.

## Crew selection

Open Crew and tap one of the eight astronauts to switch immediately. Four large cards appear per page; use More crew / Previous crew to change pages. The menu opens on the current astronaut’s page. Cards show the canonical name, suit color, and scientific specialization. A selected badge identifies the current astronaut; the play screen also displays their name. Switching preserves location, movement, discoveries and pause state, and all astronauts can explore every activity. No biographies were added; Aiden has the owner-requested heavy excavation equipment advantage. All character visuals are temporary suit-color placeholders. Keyboard users can select cards with Tab and Enter. Browser selection is saved when local storage is available; native selection attempts host-local saving where available.

## My Journal

Journal opens a simple home page with five large pictorial choices: **What I Did**, **What I Discovered**, **My Adventures**, **My Experiments**, and **My Minerals**. Completed visits and digging populate short first-person entries. Each entry offers a short fact, Listen, and Do It Again, plus a back button. Lists have large page buttons rather than requiring precision scrolling. Close is always available. Fossils belong to discoveries, not minerals. Completed farm and construction models enter My Experiments; simply visiting a station does not count as completing one. Empty pages offer an Explore button. Browser history is saved locally when storage is available; native history now attempts host-local saving where available.

`prototype/src/journal.js` shares configurable journal sections, activity wording and entry filtering between both builds. Native regeneration reads this source. Thirty-three Node tests cover navigation, journal content, zones, farm models and PIP configuration; the browser and native event checks also exercise journal navigation and repeat activities. GDevelop desktop rendering, actual file opening, physical iPad testing and reading-free comprehension still require validation.

## PIP workshop

Open **PIP → Build PIP**. Native layered sprites form a live schematic preview. Move, Science, Eyes, Fins & wings, and Colors provide tap-to-fit parts; dragging a part into the large blueprint also fits it. All choices remain available without dragging. Standard resets the complete loadout; Match crew copies the selected suit color. Use Explore to return with the customized buddy. More colors cycles the palette pages. Configuration now attempts host-local saving where available.

PIP offers hover, rover wheels, four climbing arms, a swim kit, scanner, zoom lens, sample arm, three eye styles, fins/wings and seven colors. It automatically accompanies the astronaut and has no health or defeat state. Wheel, climbing and swimming locomotion are visual prototypes for future environments; this update does not add ocean, flight or climbing simulations.

Analyze lists discovered samples; Ask PIP on a discovery card opens the same science guide. Tool choice changes the explanation, and an illustrated formula shows atom symbols and counts. Quartz is described as a repeating network, magnetite is an example iron mineral, and calcium carbonate is an example shell material. These are curated offline explanations, not remote AI/search or identification of a real sample. No backend or credentials are required.

`src/pip-workshop.js` implements native UI/events. Shared configuration, schematic geometry and science content live in `../prototype/src/pip.js`. `node build.mjs` consumes checked-in native PNG layers. Regenerating the original schematic artwork is optional and uses `scripts/pip-assets.mjs` with Sharp available in Node (or a `JACC_SHARP_PATH` selector); players do not need it. All visuals are temporary original schematics, not canonical production art. The native event harness covers all slot types, crew matching, reset, tap and drag fitting, canceled drops and sample analysis. This still does not establish successful GDevelop editor rendering or physical-iPad behavior.

## HQ interior

Open **TrainingGrounds** and Preview. The project starts at the training grounds home hub. Visit HQ for its star-base arrival bay and map, science lab and PIP workbench, dormitory bunks and crew lockers, joined by a common walkway. Workbench opens Build PIP; lockers open Crew; Rest here pauses until Resume. HQ entrance in the home hub leads to the base; the Training grounds doorway brings the crew back home.

Zone switching uses native objects in the existing scene, preserving the session's crew, PIP configuration, discoveries and settings. Inactive scenery and interaction targets are hidden and excluded from input. The zones share configurable metadata, destinations, collision masks and journal records from `../prototype/src/zones.js`. The backdrop PNG is generated from that shared source by the optional Sharp-based `scripts/hq-assets.mjs`; no image-authoring dependency is needed to open or preview the checked-in project. `node build.mjs` regenerates game.json with the TrainingGrounds layout name.

The native event harness verifies startup at HQ, all room destinations, reciprocal portals, menu stations and retained session state. This is not a GDevelop desktop rendering test. Physical-iPad behavior remains unverified. Art is a provisional schematic environment foundation; the lab is observational and the dormitory has no survival or sleep-meter systems.

## Planet Farm

In **TrainingGrounds → Preview**, tap **Planet farm**. All 12 farm stations use native GDevelop menu objects and the shared `../prototype/src/farm.js` view/action model. Generated diagrams/backdrop are checked in; the optional `scripts/farm-assets.mjs` authoring step uses Sharp. No backend, package installation or live internet is needed to play.

Try the pump, greenhouse shade/vent, growth stages, pollination, water cycle/reuse, energy inputs, robot helper and leaf microscope. The plant computer covers 15 familiar plants in overlapping categories, with paging for small lists. Sample trays in five growing areas supply collectable seeds; the seed bank preserves one entry per species. Seed samples and completed model activities also enter the journal. No timer, grading, death, resource penalty or compulsory quiz is added. Native progress now attempts host-local storage, with session-only play if unavailable.

The native event harness verifies every station, all nine models, sample collection, bank/library menus, experiment journaling and return travel. Desktop GDevelop rendering and physical-iPad testing remain unverified. This is a schematic educational prototype, not a real crop-control system. Live verification against authoritative sources is blocked by network policy; see `../docs/FARM_SCIENCE.md`. No institution has approved this game's science content.

## Home hub routing

The layout is now **TrainingGrounds**, and Preview starts in the training grounds home hub. Native zone switching retains the HQ and farm interiors in this layout. Both exit paths and PIP Return home lead back to the hub; cross-zone revisits use its connecting routes. Collected seeds, experiments, crew and PIP state remain in the preview session. The native event harness explicitly checks hub startup and return-home from both farm and HQ.

## Side-view dig site

From **TrainingGrounds**, tap Dig site. Native tile sprites are excavated automatically toward a tapped tile; large find targets can be revealed through PIP Show places. Vertical paths use fictional support lifts and no held input. Aiden's yellow rig works faster; other crew get automatic PIP assistance. Tools provides drill/scoop/power arms and a tunnel reset that retains discoveries. Deep caverns include cave life, pigmentation, echoes, formations, groundwater and protected magma/deep-Earth models. The mantle view is explicitly a schematic, not physical travel into the mantle.

The Engineering zone contains three starter workbenches. Use a collected non-fossil sample for a design, then Install on farm. Native farm upgrades are retained within the preview session and shown by model badges/diagrams. The expanded construction yard now has six challenges and free build; rockets, generated worlds, colonies, My World/My Solar System and arcade adventures remain plans in `../docs/ROADMAP.md`.

Native implementation: `src/excavation.js`; shared model: `../prototype/src/excavation.js`. The checked-in native assets are generated by the optional Sharp-based `scripts/dig-assets.mjs` (plus farm module art in `farm-assets.mjs`). No generator/runtime dependencies are needed to open the project. The native harness checks other-crew hard rock, Aiden selection, cavern lessons, models and deployment through to the farm. It does not validate actual GDevelop rendering. Native progress now attempts host-local storage; availability depends on the preview/export origin. External science-source verification is pending; see `../docs/DIG_SCIENCE.md`.

## Construction yard and local progress

The Engineering zone now includes all machinery and side-view challenges described in `../docs/CONSTRUCTION_MODELS.md`. ConstructionCells is one reusable native Sprite object with 60 instances. Controls support tap placement and Tab/Enter cell selection with visible focus. Pause, settings, PIP, crew and journal remain accessible during building and the earned orbit preview. Free build has no required solution; Reset and robot demonstrations can be undone.

Native progress now attempts local storage through `src/profile.js` using `jacc-native-v1`. This retains construction layouts, earned kits, fitted farm modules, model-elevator progress and existing discoveries/crew/PIP/farm state where the GDevelop preview/export host permits persistent storage. A different preview origin or cleared/denied storage can lose that local save. If storage is unavailable the game still works for the session. No cloud/account or cross-build synchronization exists. This supersedes earlier session-only persistence notes in this README.

The native harness verifies all six construction challenges, machine kits, manual/keyboard placement, pause, reset/undo, the earned orbital animation, reduced animation, farm deployment and save/reload against a host-storage mock. This does not establish actual GDevelop desktop rendering or storage behavior; test both on your installed editor. The orbit view is an earned training model, not the full generated My Solar System endgame.

## Aquatic Learning Center

Open `game.json`, select **TrainingGrounds**, Preview, then choose **Aquatic Learning Center** at the lake. Tap destinations to swim; choose the J.A.C.C. submersible at the dock. The center offers freshwater, marine and deep-ocean simulation habitats, large illustrated wildlife/science choices and local journal records. PIP's aquatic kit is applied only here. New logic lives in `src/aquatic.js`, shared content/state in `../prototype/src/aquatic.js`, and generated art in `assets/aqua-*`. Regenerate original placeholder diagrams with `scripts/aquatic-assets.mjs` (Sharp required). Native API automation does not validate the GDevelop editor renderer or real iPad touch; see [science/validation notes](../docs/AQUATIC_SCIENCE.md).

## New crew and PIP tools

Sumati Suri (orange, Gadgil Model — Ecosystems and Environmental Science) and Lilja Jónsdóttir (purple, Mirzakhani Model — Mathematics) are selectable. PIP can match either suit color. Life Lens, Xeno Lab, Eco Probe and Pattern Projector are available in Science; More parts cycles the rack. Fit one, then use Try fitted tool (browser) / Try tool (native) to explore its three repeatable illustrated steps. See [implementation, tests and limits](../docs/CREW_AND_PIP.md).

## Astronaut suits

Choose Lucas, Sumati or Lilja and open Suit for nine powers. Reveal in world highlights relevant destinations; tap one to approach and investigate. Explore this place / Clear suit overlay returns to normal activities. Native overlays reuse ring/link/grid textures. All crew are astronauts; Lucas is French. See [suit powers and validation limits](../docs/SUIT_POWERS.md). The unnamed Chinese astronomer/astrophysicist is a pending profile, not yet selectable.

## Adaptive access

WORDS opens the communication board; ACCESS opens scanning, captions, notices, haptics, AAC voice, dim scenery and controller settings. Keys default to Space/Enter; Access offers presets. A compatible interface must translate adaptive switches into these inputs. This native Sprite/Text interface is not a verified JAWS route; the browser provides semantic HTML controls for screen-reader testing. Actual GDevelop rendering and assistive hardware remain unverified. See [access setup and limitations](../docs/ADAPTIVE_ACCESS.md).

## First Visit: GSEINHQ

VISIT opens the optional story without blocking normal startup. Choose Explore, Guided Adventure or Adaptive Play, optionally adjust supports/select crew, then enter GSEINHQ. Skip setup bypasses questions. The existing HQ entrance and home hub remain usable. See [approved script, behavior and test limits](../docs/FIRST_VISIT.md).

## Swimming exploration

Preview TrainingGrounds → Aquatic Learning Center → Swim trail. Choose a habitat to enter swimming directly. New native swimmer/wildlife/find sprites retain large stable targets, habitat filtering and saved journal records. PIP offers Show me a swim; pause/reduced motion stop the new animation. Existing submarine/science tools remain. See [build report and native-renderer testing limits](../docs/SWIMMING_EXPLORATION.md).

## Large exploration spaces

Preview TrainingGrounds and select Flight range, Forest or Open dig landscape; PLACES also offers space/landmark travel. The native world actor uses large-map coordinates, while the visible avatar, scenery, markers and PIP are offset into the following viewport. Tunnel tiles reuse one texture; cleared paths save locally. Actual editor/iPad rendering and performance need testing. See [open-space build report](../docs/OPEN_SPACES.md).
