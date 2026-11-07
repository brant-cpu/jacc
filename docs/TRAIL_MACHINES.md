# My Machines in generated exploration worlds

Open a generated world from **Places**, then choose **Tools / trails → My Machines**. This menu is available in both the browser and GDevelop builds. The existing workshop's saved-model and deployment pages also offer **Deploy in exploration worlds** (browser) or the **Deploy to a world** header button (GDevelop).

Choose **Place a saved machine**, choose a compatible world, then tap one of three large placement buttons. Prepared spots fit the model automatically, and PIP brings the astronaut to the spot so the machine is immediately visible. This lift does not advance crop growth when staying in the same farm. Each placed machine has a large pictorial target; tap it to use, move, pack or open its saved design. **My placed machines** provides a paged list when a copy is off-screen.

| Machine | Worlds | Working activity |
| --- | --- | --- |
| Rover | Forest, cave, farm | Surveys nearby ground. An undiscovered generated find within 220 world pixels is recorded and its normal seed/material reward is kept. Otherwise it records a terrain survey without inventing a sample. |
| Farm robot with sprayer | Farm | Waters planted, unwatered beds within 360 world pixels. Watered beds have a teal marker. Watering does not advance growth; explore another world and return for the next stage. |
| Bridge | Forest, cave | Supplies a real supported platform across a prepared demonstration gap. Cross my bridge folds boosters and automatically navigates the astronaut over the deck. A completed crossing is recorded in the journal. |
| Habitat | Forest, cave, farm | Visit the habitat, then optionally rest. Rest pauses the game. Resume exploring is always available. This is a quiet resting panel, not a furnished building interior. |

Water and survey actions close the menu so the child can see the machine in the world. Used mobile machines have a gentle patrol animation. Pause, menus and existing reduced-animation/effects options freeze that motion. Jobs can be repeated without cost, timers, scores or penalties. Survey rewards use the normal discovered-item record to prevent repeat rewards. Robot watering happens when requested; this milestone does not add unattended farming or growth while away.

## Saved designs, free changes and prepared terrain

Placement copies the exact saved parts and color. Editing the garage design does not change an existing copy. Moving keeps that copy's original parts, including when its garage design has since changed. Packing removes only the deployed copy; it keeps the saved machine, crops and discoveries. Placing on an occupied spot replaces its copy while keeping the underlying garage designs.

Prepared supports, headroom and demonstration gaps are reversible terrain overlays. Bridges have actual collision platforms, not only an illustration. Farm spots avoid already planted beds and reserve a small unplantable footprint while placed. Own blocks take priority and remain when machines are packed. Cave placements are offered above the mantle; these four land-based designs are not offered in the sky or ocean. Existing authored-zone vehicle and machine deployment is retained.

PIP's **starter designs** are optional complete rover, farm robot, bridge and habitat designs saved into My Machines. They use the existing compatible modules; their parts and colors can be edited in the workshop. Starter creation preserves current drafts and existing designs. The existing 24-design garage limit remains.

Each generated world holds up to 12 placements (36 across the three compatible worlds). At most four nearby placed machines are rendered together; other copies remain accessible through the list. Up to 80 completed-job journal records are retained. Placements, snapshots and completed jobs are saved locally in the profile. Animation phase is temporary. Journal replay returns to the world and placed copy; packed copies return to the deployment menu rather than being recreated silently.

## Files and validation

- `prototype/src/trail-machines.js`: placement state, safe normalization, compatibility, starter copies, jobs, prepared terrain, menus, poses and journal records.
- `prototype/src/expeditions.js`: reads reversible deployment terrain and supplies watered-crop artwork.
- `prototype/src/main.js`, `prototype/style.css`: browser menus, large machine targets and existing-part rendering.
- `prototype/src/journal.js`: completed machine activities and revisit metadata.
- `gdevelop/src/trail-machines.js`: native menus, prepared-model rendering and targets; native profile/gameplay/expedition/workshop adapters save and expose the same systems.
- Build scripts, browser bundle, native project and four watered-crop PNGs are rebuilt from source. Existing machine-part artwork is reused.

Run the browser by extracting the complete repository and opening `prototype/index.html`; Python is not required. For GDevelop, open `gdevelop/game.json`, select TrainingGrounds and Preview. Developers rebuild with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`; the existing Sharp asset script generates native crop tiles.

Shared tests cover exact snapshots, edits/moving/packing, preserved drafts and blocks, real bridge travel, local watering without instant growth, nearby-only survey rewards, rest/resume, bounded targets and save normalization. Browser mouse/touch tests cover all four machines, actual crossings, journal replay, reload, starters, keyboard activation and home return. The native regression suite exercises the corresponding native UI, sprite targets, jobs and persistence alongside the previous game systems.

This is a qualitative, pre-engineered deployment framework. It does not simulate load-bearing physics, robot planning, fuel, enclosed air systems or background colony production. Real iPad, GDevelop editor/device and assistive-technology user testing remain outstanding. Next milestone: use these saved placements, crops and habitats as the foundation for a named My World colony.
