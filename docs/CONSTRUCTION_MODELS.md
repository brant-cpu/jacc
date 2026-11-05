# Construction yard: models, progress and limits

## What is implemented

- One-finger, side-profile prefab placement on a 12 × 5 board. At the tested 1024 × 768 landscape viewport the grid cells are 60 CSS pixels; primary controls are at least 60 pixels. No dragging or simultaneous inputs are required.
- Six repeatable challenges: bridge deck, supported gap fill, tower with foundation/platform, connected pipes, closed valve, and a powered supply-and-return circuit.
- A separate free-build sandbox has no required answer. Blocks, beams and platforms can be placed, changed or removed. Reset and robot demonstrations can be undone. Challenge parts/kits survive retries and resets.
- Printer, crane and robot demonstration pages show layered manufacture, lifting/placement and sensor-guided repetitive work, with human planning/inspection.
- Nine reusable kits: beam, foundation, tower, pipe, valve, power, printed, lift and robot. Completion is idempotent; repeated activities do not create a competitive score or consume resources.
- Kits can be fitted at the farm. Pipe/support/printed kits are acknowledged by hydroponic, vertical-growing and greenhouse models and visible model badges/diagrams. Equipment remains available for later use.
- The home-hub Space elevator project requires all nine kits, then offers three **training model** assembly stages. Completing them unlocks an animated orbital **preview** from a station viewpoint. Pause and reduced animation freeze motion. Planets move around a star, not around the station. It is not the generated/editable My Solar System system yet.

## Physics and science boundaries

These are rule-based prefab/support/connectivity models, not a rigid-body, structural stress, fluid dynamics or electrical engineering simulator. Bridge, gap and tower outcomes use an intended supported plan. Pipes validate matching directional ports from inlet to outlet. The valve must be fitted and closed. Electrical power requires a complete model supply and return path; a source alone does not light the lamp.

The 3D printer uses prepared feedstock and a digital plan; raw rocks are not ready-made filament or metal powder. Printer processes and real part properties vary. Crane and robot pages are demonstrations, not operating instructions. People plan and inspect their work. Real structures, power systems and water systems require professional design/testing. A real Earth-to-orbit space elevator has not been constructed; the pictured tether/station is a fictional training model, not a claim that present materials enable the proposed full-scale system.

The reference-access restrictions described in FARM_SCIENCE.md remain unresolved; no live source verification or external science/engineering approval is claimed. Suggested adult-review sources include NIST additive-manufacturing resources, Department of Energy electricity/energy education, and NASA educational resources. These suggestions are not evidence that their pages were retrieved.

## Saves and accessibility

Browser progress uses the existing `jacc-v1` local save with a validated `construction` profile. The native GDevelop event implementation now uses `jacc-native-v1` in the host's local storage when available. Saved fields include boards, earned kits, fitted modules, model-elevator progress and existing crew/PIP/discoveries/farm state. It resumes at the training-grounds hub. Board selection, orbital animation time and undo stacks are not resumed. Storage denial, cleared data or a different preview origin can prevent persistence; native host behavior still needs desktop testing. No cloud account, cross-build sync, generated-world saves or parent profile system is implemented.

Mouse, emulated touch and basic keyboard routes are tested. GDevelop editor rendering, exported apps, physical iPad behavior, screen readers/switch access and comprehension with children remain unverified. The artwork is original schematic placeholder art. No accessibility certification is claimed.

## Key files

- `prototype/src/construction.js`: shared validated progress, challenge rules, machine/parts pages, SVG art and milestone gate.
- `prototype/src/construction-ui.js`: browser placement grid and controls.
- `gdevelop/src/construction.js`: native placement, keyboard focus, models, inventory and orbit renderer.
- `gdevelop/src/profile.js`: best-effort local native save/load.
- `gdevelop/scripts/construction-assets.mjs`: optional Sharp-based asset authoring. The generated art is checked in; playing requires no Sharp dependency.
- `prototype/tests/construction.test.js`, `prototype/tests/construction-browser.cjs`, `gdevelop/tests/native.cjs`: shared and functional validation.
