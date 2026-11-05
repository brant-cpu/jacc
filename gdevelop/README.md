# J.A.C.C. — native GDevelop 5 project

## Open and play

1. Download the repository ZIP from GitHub and extract the complete folder.
2. In GDevelop 5, choose **Open a project** / **Open from your computer**.
3. Select **gdevelop/game.json**. Do not select an HTML file, ZIP, source JS file, or package.json.
4. Open the **DiscoveryGrounds** scene, then choose **Preview**.

No Python, web server, package installation, or external assets are required. Keep the assets folder beside game.json.

Tap a picture to walk and investigate. Tap the dig site repeatedly to find quartz, an iron-bearing mineral and a fossil. X closes every panel. PIP demonstrates digging and returns to the previous activity or home. Journal records discoveries for this preview session; settings control speech volume, optional narration, shortened digging and marker effects. Tab selects a control, Enter activates it, Escape closes panels. Touch uses GDevelop's native mouse simulation. Pausing and panels stop the movement simulation.

This is a native GDevelop scene: editable Sprite and Text objects, PNG resources, and a JavaScript event driving native object positions and GDevelop's input system. It does not load the browser prototype or use a DOM/Canvas wrapper. The six canonical astronauts remain in configurable source data; all six astronauts are selectable using provisional suit-color placeholders.

## Edit

Open **DiscoveryGrounds → Events** to inspect the gameplay event. For source-based editing, change `src/gameplay.js`, then run `node build.mjs` from this folder to regenerate game.json. The build also reads the shared configurable data/navigation in `../prototype/src/` and `project-template.json`. It has no external package dependency. Rebuilding replaces game.json: preserve editor edits before regenerating. Editing in GDevelop does not require Node.

## Validation and limits

`node tests/native.cjs` checks all resource paths and object/instance references, compiles the event code, and runs repeated digging, journal, PIP demonstration, pause, platform access, settings and keyboard logic against a native API harness. This is **not** an actual GDevelop editor or renderer test. A desktop GDevelop installation is unavailable in the development environment, so opening and Preview in your installed version remain unverified.

This is an initial native conversion, not Phase 1 acceptance or accessibility certification. Real iPad Safari, touch export, screen reader/switch input, layout rendering, emoji glyph coverage, browser speech and reading-free comprehension need validation. Progress and settings currently reset when a native preview restarts. PIP hints change target opacity rather than animate a tutorial. Platform traversal is top-down with an illustrative ramp. There is no climbing physics, recorded narration or authored sound effects. Magnetism and engineering are observation stations, with experiments reserved for later phases. All art is explicitly temporary and noncanonical.

## Crew selection

Open Crew and tap one of the six astronauts to switch immediately. Cards show the canonical name, suit color, and scientific specialization. A selected badge identifies the current astronaut; the play screen also displays their name. Switching preserves location, movement, discoveries and pause state, and all astronauts can explore every activity. There are no new character powers or biographies. All character visuals are temporary suit-color placeholders. Keyboard users can select cards with Tab and Enter. Browser selection is saved when local storage is available; native preview selection lasts for that preview session.

## My Journal

Journal opens a simple home page with five large pictorial choices: **What I Did**, **What I Discovered**, **My Adventures**, **My Experiments**, and **My Minerals**. Completed visits and digging populate short first-person entries. Each entry offers a short fact, Listen, and Do It Again, plus a back button. Lists have large page buttons rather than requiring precision scrolling. Close is always available. Fossils belong to discoveries, not minerals. Experiment activities remain planned; visiting a station does not count as completing an experiment. Empty pages offer an Explore button. Browser history is saved locally when storage is available; native history currently lasts for the preview session.

`prototype/src/journal.js` shares configurable journal sections, activity wording and entry filtering between both builds. Native regeneration reads this source. Nine Node tests cover navigation, journal content and PIP configuration; the browser and native event checks also exercise journal navigation and repeat activities. GDevelop desktop rendering, actual file opening, physical iPad testing and reading-free comprehension still require validation.

## PIP workshop

Open **PIP → Build PIP**. Native layered sprites form a live schematic preview. Move, Science, Eyes, Fins & wings, and Colors provide tap-to-fit parts; dragging a part into the large blueprint also fits it. All choices remain available without dragging. Standard resets the complete loadout; Match crew copies the selected suit color. Use Explore to return with the customized buddy. More colors cycles the palette pages. Configuration lasts for the native preview session.

PIP offers hover, rover wheels, four climbing arms, a swim kit, scanner, zoom lens, sample arm, three eye styles, fins/wings and seven colors. It automatically accompanies the astronaut and has no health or defeat state. Wheel, climbing and swimming locomotion are visual prototypes for future environments; this update does not add ocean, flight or climbing simulations.

Analyze lists discovered samples; Ask PIP on a discovery card opens the same science guide. Tool choice changes the explanation, and an illustrated formula shows atom symbols and counts. Quartz is described as a repeating network, magnetite is an example iron mineral, and calcium carbonate is an example shell material. These are curated offline explanations, not remote AI/search or identification of a real sample. No backend or credentials are required.

`src/pip-workshop.js` implements native UI/events. Shared configuration, schematic geometry and science content live in `../prototype/src/pip.js`. `node build.mjs` consumes checked-in native PNG layers. Regenerating the original schematic artwork is optional and uses `scripts/pip-assets.mjs` with Sharp available in Node (or a `JACC_SHARP_PATH` selector); players do not need it. All visuals are temporary original schematics, not canonical production art. The native event harness covers all slot types, crew matching, reset, tap and drag fitting, canceled drops and sample analysis. This still does not establish successful GDevelop editor rendering or physical-iPad behavior.
