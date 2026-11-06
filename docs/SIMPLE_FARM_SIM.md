# Simple farm sim — persistent planting beds

## Play

Open `gdevelop/game.json` in GDevelop → TrainingGrounds → Preview, or open `prototype/index.html` with the full extracted folder. Enter **Planet Farm**, then tap **My garden** or one of its three **Bed** pictures.

1. Choose a seed from the owned seed bank. An empty bank offers a free bean starter. Owned plant cards also offer **Plant this seed**, followed by an empty or grown bed.
2. Plant with one tap, then tap **Water plant**.
3. Leave the farm and return. The watered bed advances exactly one stage: **Seed → Sprout → Young plant → Grown plant**.
4. Water again for the next return visit. A grown plant can stay, be harvested, or be replanted.

Growth uses actual entries from another zone into the farm. Opening/closing menus, looking at a different bed, repeated Water taps, and re-entering the same zone do not advance it. Reloading preserves pending water; entering the farm after reload counts as a return. There are no wall-clock timers, decay, failure states, scores or finite seed costs. Plants wait safely without care. Each collected species unlocks a reusable planting sample; the bank does not consume it on sowing.

The **Go exploring** button selects the home-hub destination with automatic travel; the farm's exit remains available. All controls use single taps, mouse or the existing keyboard/switch/controller menu navigation. New garden lists reserve room for native Listen controls. Stage pictures, numbers, seed/plant shapes and water marks accompany brief text and optional narration/captions.

## Seeds while exploring

| Place | Working collection |
| --- | --- |
| Home hills / Living plant | Sunflower sample |
| Forest / Oak grove | Existing oak/acorn sample, now with source history |
| Forest / Maple seeds | Maple sample |
| Earth research site / Field bean plant | Bean sample |
| Moon caves / Sealed plant pod | Lettuce seed packet from an astronaut-grown plant in a sealed, lit research pod |

Tapping a source automatically records its sample once and offers **Plant this seed at my farm**. That button takes the player to farm bed selection. The seed bank keeps all existing samples and records validated source locations. World destination lists include the new plants, including offscreen sources.

The Moon pod is a cultivated story research environment: the text explicitly says the Moon has no known native plants. Future authored worlds can reuse the `seed` and `seedOrigin` properties after registering species in `farmPlants` and origins in `gardenSources`. Procedural worlds and invented alien species are not introduced here.

## Existing systems and saves

The 15-species plant computer, sample trays, greenhouse/hydro/leaf/energy/water/pollination/robot activities and engineered farm equipment remain available. **My garden → Growth lab** opens the original manually advanced six-stage science demonstration. That demonstration is separate from the new persistent planting sim.

The existing local `farm` save now contains `garden.plots` (three independently watered beds), unique grown/harvested species records and per-species source IDs. Loading validates species, ownership, bed stages and source identifiers. Old saves receive empty beds while preserving their seeds, experiment states and installed equipment. Growing plants are protected from accidental replacement; empty and grown beds can be planted. Replanting explicitly resets only the selected bed.

Grown plants create **My Experiments** journal records. Merely visiting or watering a bed does not claim completed growth. Harvest/replant can be repeated indefinitely without duplicating the permanent records or consuming the seed-bank sample. Storage remains local to the browser/GDevelop host; cross-device synchronization is not added.

## Files

- `prototype/src/garden.js`: plot model, validation, return growth, planting/watering/harvest commands, sources and original schematic growth art.
- `prototype/src/farm.js`: shared garden menus, starter, source collection, planting from owned seed cards, return integration and seed encounters; original farm science retained.
- `data.js`, `open-spaces.js`: hill seed metadata, existing oak origin and reusable world seed registration.
- Browser `main.js`: farm-entry growth, visible bed pictures, dynamic bed icons/accessibility labels, farm/source actions and return feedback.
- `journal.js`: source activities and actual grown-plant experiment entries.
- Native `gdevelop/src/garden.js`, `gameplay.js`, `open-spaces.js`, `build.mjs`: equivalent scene-entry rules, menus, bed sprites, source selection and persistence through the existing profile.
- Existing `farm-assets.mjs` generates the new original plot PNGs. Updated `prototype/game.js` and `gdevelop/game.json` are included.

Build with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Optional art generation uses `JACC_SHARP_PATH` with `node gdevelop/scripts/farm-assets.mjs`.

## Validation and limits

73 shared tests pass. Garden tests cover owned-seed validation, distinct watering/return actions, idempotent repeated taps, three independent beds, save/reload, protected growing plants, harvest/replant, origins, old-save compatibility, menu limits and distinct growth pictures for every catalog species. The native GDevelop API harness plays the loop using actual scene returns, then tests hill/forest/Moon collection, saved queued water, grown-plant journal and all existing gameplay. Chromium mouse/touch tests cover the planting loop, partial/reload growth, seed-bank planting, source collecting, keyboard selection and minimum 60px action controls. The existing farm science and core browser flows are also checked.

Commands: `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/garden-browser.cjs`, `node prototype/tests/farm-browser.cjs`, `node prototype/tests/browser.cjs`.

Growth is a deliberately accelerated qualitative model shared by the species, not a real crop calendar. Actual tree maturity can take years; light, temperature, air and nutrients matter as well as water. The existing farm supplies these conditions in the model. There is no quantitative crop yield, weather, disease, soil chemistry or farm economy. Artwork is provisional. Physical iPad/GDevelop editor rendering, real adaptive hardware, screen readers and child testing remain unverified. Recommended next milestone: test garden pacing/labels with children, then add approved species art and more authored seed encounters.
