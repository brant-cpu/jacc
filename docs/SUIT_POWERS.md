# Astronaut suit powers

All J.A.C.C.s are astronauts. The game now labels crew members accordingly; Lucas Turner is recorded as French. The eight existing astronauts remain selectable. A ninth profile records a male Chinese astronaut specializing in Astronomy and Astrophysics; his blue Sagan Model suit is approved, while his personal name is pending, so he is not a playable placeholder.

## Run and use

Download/extract the latest repository. Open `gdevelop/game.json` in GDevelop, select TrainingGrounds and Preview, or open `prototype/index.html` with the folder intact.

Choose Lucas, Sumati or Lilja, then **Suit**. Pick a power, explore its illustrated steps and choose **Reveal in world**. Tap a highlighted place: the astronaut approaches automatically and opens a contextual investigation. **Explore this place** clears the scan and resumes the normal activity. **Suit → Clear suit overlay** also returns to normal exploration. Changing crew only displays powers belonging to the selected astronaut; other crew keep access to existing activities and PIP tools.

| Astronaut | Implemented suit powers |
| --- | --- |
| Lucas Turner — French, black, Lederberg Model | Bio-Vision; Adaptation Scan; Xeno Analysis |
| Sumati Suri — Indian, orange, Gadgil Model | Connection Vision; Environmental Survey; Restoration Planner |
| Lilja Jónsdóttir — Icelandic, purple, Mirzakhani Model | Pattern Vision; Measure & Map; Geometry Builder |

Each power has three repeatable illustrated steps, optional Listen, large controls and no timing/score/cost. Activations are saved as local suit history; they are not added as completed experiments in the global journal. Active scans follow zone changes and filter aquatic habitats and digging levels. Portals and utility controls retain their normal use.

**Real actions:** measure straight-line distance and bearing from the astronaut to a selected object in training-map units; inspect current greenhouse-model shade/vent settings; follow contextual biological/environmental scan highlights; use Restoration/Survey plans to travel to the actual greenhouse; use Geometry Builder to reach the actual construction challenges.

**Teaching-model limits:** Bio-Vision uses a simplified plant-cell diagram, not a microscope simulation or a claim that every scanned object has plant cells. Adaptation examples distinguish gills, air breathing, sound and light. Xeno Analysis distinguishes suitable conditions from proof and labels imaginary life. Environmental links are illustrative, not measured food webs. Survey settings describe the greenhouse model, not real sensor readings. Restoration and geometry previews do not instantly alter habitats or place construction pieces; the linked existing models do that work. Map units are not metres; bearing uses screen-map right as zero, positive upwards.

## Files and builds

Shared `prototype/src/suits.js` contains astronaut metadata, the pending profile, nine powers, context filtering, measurements, validated history and diagram/overlay generation. Browser `main.js` adds Suit, contextual interactions, saved state and Canvas overlays. Native `src/suits.js`, `gameplay.js`, `profile.js` and `build.mjs` provide equivalent Sprite/Text controls and saves. Generated builds are `prototype/game.js` and `gdevelop/game.json`. `gdevelop/scripts/suit-assets.mjs` creates original diagrams and shared ring/link/grid PNGs; native overlays reuse these three textures rather than loading a full-scene texture for each power and location. The browser retains at most three decoded suit overlay images.

Build: `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Optional art regeneration requires Sharp: `JACC_SHARP_PATH=/path/to/sharp node gdevelop/scripts/suit-assets.mjs`.

## Validation and remaining work

All 37 shared tests pass. Shared tests cover all nine powers, contextual subjects, three-step repetition, map calculations, greenhouse settings, habitat/level filters, metadata and normalized/idempotent saves. Browser mouse/touch automation covers every power, world scanning, normal-activity bypass, real farm/construction travel, French astronaut labels and local-storage reload. The native API harness passes equivalent flows and mocked persistence. Existing core mouse/touch flows are also checked after the header changes.

The GDevelop editor renderer, physical iPad, child usability, screen-reader/switch access, narration voices and reading-free comprehension still require testing. Artwork is provisional. These are first playable suit tools, not full biological simulation, autonomous restoration or real structural analysis. Recommended next milestone: real-device/user validation, then richer object-specific biological and environmental visualizations.
