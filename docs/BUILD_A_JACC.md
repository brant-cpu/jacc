# Build a J.A.C.C.

Open **Crew → Build my J.A.C.C.** in either build. The nine canonical astronauts remain available, including **Chen Yuxin**, the female Chinese astronaut in the blue Sagan Model — Astronomy and Astrophysics. PIP’s matching-crew color includes Chen blue.

## Playable creator

- Helmet: round, bubble or wide visor.
- Armor: explorer, panel or padded style.
- Boots: grip, moon or water style.
- STEM core: electromagnetism, optics, geology, engineering, flight, biology, ecosystems, mathematics or astronomy.
- Back equipment: wings, twin thrusters, or both.
- Independent left and right arm tools: any STEM tool or a plain glove.
- Paint each of the seven equipment slots independently using all nine crew colors. Orange helmet, blue armor and yellow boots are the starting example. Metal stays silver and lights/energy stay teal.
- Optional name and nationality, six skin tones and three face styles. Everyone uses one child-sized body. The custom identity has no gender field and nationality never changes skills.
- Use a ready-made name, leave the default, or spell a name/country using the large tap keyboard. Letters are paged in groups of three, with remove-last, more and done controls. No keyboard typing, dragging or setup answer is required to start playing.
- Live layered preview, undo for draft choices, explicit save-and-explore, and a separate **My J.A.C.C.s** collection with up to eight saved astronauts. Edit a saved astronaut or start a fresh design. Draft edits do not change an already saved character until saving again. Switching to the main crew keeps custom designs and all other game progress.

The active saved custom character appears in normal exploration, the open flight range, digging areas, HQ and farming, in a sideways swimming pose, and as a small pilot in the training submarine. Browser rendering uses the shared layered SVG; GDevelop uses the same parts as native transparent sprites. The avatar is hidden while the existing construction board/orbit view occupies the screen.

## Mixed STEM tools

Tap **Suit** while using a custom astronaut. The core and two arms can provide three different STEM choices. Biology uses the existing Bio-Vision model, ecosystems uses Connection Vision, and mathematics uses Pattern Vision, with their existing illustrated steps and world overlays. Other tools link to the relevant working stations: magnet experiments, crystal/light observation, digging, free construction, the flight range and HQ star map. There is also a clear-overlay control.

These are reusable training tools and activity connections, not a newly implemented physical ability simulator. Wings and thrusters change appearance; flight, swimming, obstacles and automatic traversal still follow the current zone rules. No outfit is required to access an activity. Chen can use all existing activities; a dedicated Sagan powers collection is still future work.

## Files and running

Shared creator schema, compatible choices, state validation, commands, menus and original schematic parts: `prototype/src/jacc-builder.js`. Browser integration and world rendering: `prototype/src/main.js`. Native menus and layered rendering: `gdevelop/src/jacc-builder.js`. The existing browser/native profile stores now retain `jaccBuilder`; old saves load the default empty collection. Crew data, China/female character details and blue PIP support are in `data.js`, `suits.js`, `pip.js` and the existing asset generators.

Open `prototype/index.html` from the complete extracted repository, or open `gdevelop/game.json` in GDevelop and Preview TrainingGrounds. Python is not required for either path.

Rebuild after source changes:

```sh
node prototype/scripts/build.mjs
node gdevelop/scripts/jacc-assets.mjs
node gdevelop/scripts/crew-assets.mjs
node gdevelop/scripts/pip-assets.mjs
node gdevelop/scripts/open-space-assets.mjs
node gdevelop/scripts/swim-assets.mjs
node gdevelop/build.mjs
```

Asset generation uses `sharp`, with the existing optional `JACC_SHARP_PATH` override. Generated PNGs are included for ordinary play.

## Validation and limits

Shared tests cover independent colors/parts/tools, save snapshots, undo, optional identities, space-preserving tap typing, invalid/older profiles, collection limits, every equipment variation, native menu sizes and science-tool routes. Mouse and simulated-touch browser checks cover Chen selection, custom creation, tap typing, identity, mixed tools/overlays, world/flight/swim presentation, switching, editing, keyboard activation and reload. The native event harness checks matching blue PIP, creator controls, actual layered world visibility/rotation, tool mixing and profile reload alongside existing gameplay.

All new artwork is schematic placeholder art, not approved production character artwork. Saved collections are local to each build/device; there is no account sync or cross-build import/export. The tap keyboard currently provides Latin A–Z and spaces; full international text entry, broader hairstyle/face options and further body-type decisions remain future work. Real iPad, assistive hardware, narration availability, child usability and GDevelop editor/renderer checks remain necessary. No accessibility certification is claimed.

Checks completed: **95 shared Node tests**, mouse and simulated-touch creator checks, the existing mouse/touch exploration/crew regression, the full native GDevelop schema/resource/event harness, custom PIP armor-color matching, generated JavaScript syntax and patch formatting. The managed browser blocks `file://` navigation, so direct local-file launch could not be exercised here; browser checks loaded the complete build through local asset routing. PIP’s Match my J.A.C.C. uses a custom astronaut’s armor color.
