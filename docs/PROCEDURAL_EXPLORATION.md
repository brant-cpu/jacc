# Generated exploration worlds

Open **Places → Big exploration worlds** in the browser, or **Places → Explore worlds** in GDevelop. The Adventure desk also links to these trails. Choose one of five worlds. Existing authored zones, story chapters, machines, discoveries and saved crew remain available.

| World | View and travel | Discoveries and layers |
| --- | --- | --- |
| Sky to Orbit | Side view, backpack flight; fold boosters to fall safely | Weather balloon, meteor observation, orbital observation; troposphere through exosphere |
| Surface to Abyss | Side view, assisted swimming, optional reef passages | Dolphins, fish, octopus and deep-sea life records; sunlit surface through twilight, midnight, abyss and trench models |
| Dinosaur Dig & Deep Earth | Side view, automatic excavation and climbing supports | Fossils, dinosaur fossil models, quartz, iron-bearing samples and cave life; soil through sediment, caverns, deep crust and mantle |
| Forest Floor to Canopy | Side view, gravity, automatic hops and tree climbing; optional flight | Collect reusable seeds from the forest floor and trees; understory, canopy and open sky |
| My Open Farm | Top-down, automatic walking around obstacles | Tap brown beds, plant an owned seed, water, leave for another world, return for one growth stage, then harvest |

These are compressed fantasy science models, not distances to scale. Low Earth orbit is shown within the thermosphere. Orbit is motion around Earth, not another atmosphere layer. Most mantle rock is solid; this is not an underground lava ocean. Ocean wildlife is observed, not captured. The lake and the ocean simulation remain distinct in the authored Aquatic Learning Center.

## One-finger play

Tap a destination or discovery once. Navigation runs automatically and can be interrupted by another tap. Four large directional destination buttons move one stretch per tap; nothing requires holding, dragging, rapid tapping or timed responses. Forest and cave walking uses gravity, hops, drops and climb routes. Excavation adds supports for upward travel. There is no fall damage, drowning, oxygen timer or forced failure. Every canonical and custom astronaut can deploy backpack wings and boosters; underwater swim assistance stays on.

**Layers / map** offers explicit PIP lifts to layers, alongside continuous travel through the world. **PIP goal** offers one optional objective: discover, visit a layer, return to camp. The farm goal is plant, harvest, return. Repeat the trail without clearing collections. **Home** returns to the authored zone where the player entered. Journal records can revisit generated discoveries, layers and harvested plants. Global Crew, Settings, Pause, AAC and Access menus remain available.

**Tools / trails → Place / remove blocks** provides support blocks, platforms and ladders. Tap a cell to place a piece; remove only pieces the player placed. Choose **Explore again** to return to normal travel. Building is a simple reusable block sandbox, not a structural physics simulation. The farm uses shared reusable seed-bank entries; growth advances only on returning from another world, never through waiting, opening a menu or reloading. Water again between stages. Earlier authored farm activities still work independently.

## Implementation and saves

`prototype/src/expeditions.js` owns deterministic generation, navigation, gravity, interactions, crop stages, objectives and journal metadata. Presentation adapters are in `prototype/src/main.js` and `gdevelop/src/expeditions.js`. The GDevelop build has a bounded pool of 400 native terrain objects. Only visible cells are generated; horizontal travel continues into seeded chunks. The top-down farm also extends vertically. Another generated trail jumps to the next stretch while retaining collected records.

Each profile has its own seed. Terrain is regenerated from that seed, with sparse saved changes rather than a stored whole map. Storage is deliberately bounded per world: 12,000 recent excavated cells and climbing supports, 2,048 placed pieces, 1,024 planting beds, 800 discovery IDs and 160 recent illustrated-entry records. Very old excavation changes can eventually be regenerated. This is practically open-ended exploration, not infinite permanent storage. Local browser/host storage is required to retain progress between sessions.

The block palette and cube discoveries are placeholders. Existing PIP and astronaut assets are reused; no new canonical character designs are implied. Custom suits retain their saved colors and parts while flight equipment is shown temporarily.

## Validation and limits

Shared tests cover generation, bounded streaming, five-seed tree climbing, excavation, supported travel, gravity, universal flight, neutral swimming, scientific layer ordering, crops, construction, repeatable goals and save normalization. Browser integration exercises mouse and touch input through all five worlds, journal replay, keyboard activation, save/reload and return home. Native generated-project tests exercise the same worlds, block placement, seeds, layer lifts, crop stages and reload alongside the existing regression suite.

Real iPad performance, GDevelop editor/device preview and child/assistive-technology user testing remain outstanding. Browser testing uses Chromium through a local asset route; this environment blocks direct `file://` browser navigation, so double-click launch still needs local-device verification. Visual block-cell planting/building requires choosing a cell; PIP supplies an automatic planting destination. Eye-gaze, screen-reader and switch usability in these new landscapes needs testing; no accessibility certification is claimed. Ocean currents, structural physics, orbital dynamics and real-scale geology are not simulated.

Next milestone: apply authored adventure chapter objectives and art to these world-generation hooks, add more distinct terrain landmarks, and test navigation and sensory settings with children and their caregivers before expanding the generators.

## Polygon wildlife and clouds

Wildlife now uses original flat polygons and rectangles. Gentle ambient movement adds birds and drifting clouds to the lower flight world, rabbits/deer, squirrels and butterflies to the forest, bees and butterflies to the farm, fish/dolphins/sharks/whales/octopuses/jellyfish and coral to suitable ocean depths, and worms or small cave animals to soil and open cave passages. Clouds also drift above the forest canopy. The authored outdoor areas have matching scenery, including freshwater trout in the home lake. Indoor labs, the Moon, orbital layers and the mantle do not acquire Earth wildlife.

These animals are observation scenery with no collision, capture, attacks or required response. Existing underwater discovery targets use polygon animal shapes and retain their large tap regions. Wildlife and cloud motion stop during pause, menus, reduced animation or reduced visual effects, and resume without a time jump. Procedural ocean animals are checked against terrain to avoid swimming through solid rock. A maximum of 32 ambient sprites is rendered at once; no animal state is added to saved profiles. This is decorative habitat placement, not a population/ecosystem simulation.

Shared artwork, habitat placement and motion rules live in `prototype/src/wildlife.js`; native rendering lives in `gdevelop/src/wildlife.js`. Recreate native PNGs with `node gdevelop/scripts/wildlife-assets.mjs` using the project's Sharp setup, then rebuild the browser bundle and GDevelop project. Wildlife unit and browser tests check habitats, bounded rendering, primitive shapes, movement, paused/reduced-motion screenshots and retained click targets; native tests check the corresponding sprite visibility, movement and controls. Real-device and assistive-technology validation remains pending.
