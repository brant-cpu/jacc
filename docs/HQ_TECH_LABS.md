# HQ Computer Lab and Robotics Bay

Enter HQ from the Training Grounds, then tap **Computer lab** or **Robotics bay**. The rooms connect through a large next-door control and each has a return to HQ. These optional spaces do not require chapter unlocks. Professor Mike guides computing; Professor Elon remains the HQ program director.

## Playable activities

- Malik and Professor Mike: four-bit binary lights (0–15), tap-to-program a robot route around an obstacle, a soil-sensor IF/THEN rule, and a toy `GO()` syntax activity. PIP can supply a working route or command. Programs can be cleared, changed and repeated without penalties.
- AI examples: a small nearest-example classifier compares two features using the examples children supply. A leaf-shaped robot deliberately exposes a real limitation of those features: the model predicts plant, and the child can check its mistake. This runs locally and makes no network requests. Learning from examples differs from a fixed IF/THEN rule; speed does not guarantee correctness. PIP's superintelligence is explicitly story fiction.
- Kaito: an air/vacuum rotor experiment and a customizable saved drone, with a camera or delivery basket. Rotor lift works in air, not on the Moon. Drone placement is offered in the yard, Earth surface and Flight Range, not the Moon or underwater.
- Robotics: sense → computer decision → motor movement. Toggle an obstacle and observe a stop or clear-path response.
- PIP workshop: the existing customization system is directly available inside Robotics and remains available at its original HQ shortcut.
- My Machines now supports eleven blueprints. Helper robots share the same six roles as vehicles: chassis, connections, tool, movement, power and one computer. New tools are a gripper, water sprayer and brush. Drones use a camera/basket and a four-rotor module. Parts, paint, copies, repairs and deployments use the existing garage systems.
- The job board uses **owned saved helper robots** and offers jobs for their fitted tool. Sprayers water a waiting farm bed, or a practice pot when none needs water. Actual farm growth still waits for a later farm entry. Grippers add the existing prefab demonstration to empty positions on Engineering's free-build board, preserving occupied positions. Tidy/reuse/shared-space activities ask the child for a plan. Cartoon fire rescue is a separate pretend training diagram, not real emergency operating guidance.
- A shared-home activity emphasizes reducing waste, asking people what helps, protecting nature and checking a robot's result. Robots support human care; they do not excuse pollution or harm.
- Completed coding trials and robot jobs appear in **My Experiments** with a revisit action. Visits appear in **What I Did**. Lesson state and saved helpers persist in each build's existing local profile.

## Files and builds

Shared configuration, logic, views and original schematic artwork: `prototype/src/hq-tech.js`. World wiring: `data.js`, `open-spaces.js`, `zones.js`. Browser presentation/profile: `main.js`. Shared garage additions: `machines.js`. Journal: `journal.js`. Native presentation/profile: `gdevelop/src/hq-tech.js`, `gameplay.js`, `profile.js`; project generation: `gdevelop/build.mjs`. New artwork generator: `gdevelop/scripts/tech-assets.mjs`.

Open `prototype/index.html` from the complete extracted repository for the browser build; Python is not required. In GDevelop, open **gdevelop/game.json**, select **TrainingGrounds**, and press **Preview**. The HTML file is not a GDevelop project.

After source edits:

```sh
node prototype/scripts/build.mjs
node gdevelop/scripts/tech-assets.mjs
node gdevelop/scripts/machine-assets.mjs
node gdevelop/scripts/open-space-assets.mjs
node gdevelop/build.mjs
```

The three artwork generators require `sharp`. Set `JACC_SHARP_PATH` to an existing installation if needed; generated assets are included for ordinary play.

## Validation and remaining work

Shared tests cover binary, navigation, program behavior, syntax, classifier predictions/mistakes, owned/tool-compatible jobs, planning, save normalization, journal history, art and native menu bounds. Chromium tests exercise the rooms with mouse and simulated touch, keyboard activation, journal revisits, local reload, custom helper creation and robot jobs. The complete native event harness also exercises actual farm watering, prefab help, PIP, drone building and saved profiles. Existing shared and native regressions remain covered.

Artwork is original schematic placeholder art, not approved production character designs. Jobs use prepared diagrams and existing model effects; helpers are not yet autonomous world workers with persistent routes, deliveries or a full robotics programming language. The classifier is a deliberately tiny teaching model, not an online assistant or general intelligence. The coding activities are a beginner toy environment, not a real language editor.

Real iPad testing, GDevelop editor/renderer preview, assistive-device testing, narration availability across devices and child usability testing remain necessary. No accessibility certification is claimed. New lessons use single taps, optional read-aloud, no deadlines, no drag requirement and no penalties. Existing contrast, sensory and adaptive input controls remain available.

Next milestone: let children connect their saved robot's sense/decision/action instructions to one visible farm route, with a large stop/return control, while retaining the current ready-made helper option.

Checks completed for this build: **88 shared Node tests**, `prototype/tests/hq-tech-browser.cjs` (mouse + simulated touch), the existing `browser.cjs` and `machines-browser.cjs` regressions (both inputs), `gdevelop/tests/native.cjs` (complete schema/resource/event harness), generated JavaScript syntax and `git diff --check`. Native tests are not a substitute for opening the project in the actual GDevelop editor.

Professor Mike’s [character profile](PROFESSOR_MIKE.md) now defines him as instructor of both labs. He is available in each room, with short playful teaching dialogue and an explicit handoff to PIP. PIP’s lab toolbar help follows the last activity instead of offering the general dig demonstration.
