# J.A.C.C. — native GDevelop 5 project

## Open and play

1. Download the repository ZIP from GitHub and extract the complete folder.
2. In GDevelop 5, choose **Open a project** / **Open from your computer**.
3. Select **gdevelop/game.json**. Do not select an HTML file, ZIP, source JS file, or package.json.
4. Open the **DiscoveryGrounds** scene, then choose **Preview**.

No Python, web server, package installation, or external assets are required. Keep the assets folder beside game.json.

Tap a picture to walk and investigate. Tap the dig site repeatedly to find quartz, an iron-bearing mineral and a fossil. X closes every panel. PIP demonstrates digging and returns to the previous activity or home. Journal records discoveries for this preview session; settings control speech volume, optional narration, shortened digging and marker effects. Tab selects a control, Enter activates it, Escape closes panels. Touch uses GDevelop's native mouse simulation. Pausing and panels stop the movement simulation.

This is a native GDevelop scene: editable Sprite and Text objects, PNG resources, and a JavaScript event driving native object positions and GDevelop's input system. It does not load the browser prototype or use a DOM/Canvas wrapper. The six canonical astronauts remain in configurable source data; only the provisional Alex placeholder is playable.

## Edit

Open **DiscoveryGrounds → Events** to inspect the gameplay event. For source-based editing, change `src/gameplay.js`, then run `node build.mjs` from this folder to regenerate game.json. The build also reads the shared configurable data/navigation in `../prototype/src/` and `project-template.json`. It has no external package dependency. Rebuilding replaces game.json: preserve editor edits before regenerating. Editing in GDevelop does not require Node.

## Validation and limits

`node tests/native.cjs` checks all resource paths and object/instance references, compiles the event code, and runs repeated digging, journal, PIP demonstration, pause, platform access, settings and keyboard logic against a native API harness. This is **not** an actual GDevelop editor or renderer test. A desktop GDevelop installation is unavailable in the development environment, so opening and Preview in your installed version remain unverified.

This is an initial native conversion, not Phase 1 acceptance or accessibility certification. Real iPad Safari, touch export, screen reader/switch input, layout rendering, emoji glyph coverage, browser speech and reading-free comprehension need validation. Progress and settings currently reset when a native preview restarts. PIP hints change target opacity rather than animate a tutorial. Platform traversal is top-down with an illustrative ramp. There is no climbing physics, recorded narration or authored sound effects. Magnetism and engineering are observation stations, with experiments reserved for later phases. All art is explicitly temporary and noncanonical.
