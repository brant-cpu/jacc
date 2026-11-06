# Aquatic Learning Center — implementation and science review

The home training-grounds lake is the entrance. The freshwater lake, reef/open-ocean viewing simulation and deep-ocean simulation are separate learning habitats. Marine wildlife does not inhabit the freshwater lake. These are schematic teaching models, not real diving instructions or an animal-identification guide.

## Working framework

Both browser and GDevelop builds support interruptible one-tap swimming and J.A.C.C. submersible navigation, automatic temporary PIP aquatic gear, ten wildlife/plant observation cards, eleven nonliving sample/data records (including six swimming-exploration finds), a local aquatic journal, and global discovery-journal entries. No animals are captured. There are no oxygen timers, damage, scores or required dragging. Existing construction kits can be fitted repeatedly to a protected habitat model without being consumed. This records fitted kits; it is not an underwater building/pressure simulation.

Repeatable tools cover pressure, five depth bands, ballast/buoyancy, fresh versus salty water, seafloor volcanism/vents, sonar, coral reefs and deep-sea gigantism. Wildlife is represented by large selectable icons and original illustrated cards; swimming has simple placeholder astronaut/sub art, not finished swimming animation or autonomous animal ecology.

## Science boundaries

- Pressure uses roughly one additional atmosphere per ten metres of seawater, plus surface atmospheric pressure. It is approximate, not a dive limit.
- Sunlit (0–200 m), twilight (200–1,000 m), midnight (1,000–4,000 m), abyssal (4,000–6,000 m) and hadal (>6,000 m) are simplified ocean bands. Actual light and conditions vary; these are not the home lake's depths.
- Buoyancy compares displaced-water force with weight. The ballast activity changes mass in a fixed-volume model. Density also varies with temperature and pressure.
- Dolphins and whales breathe air. Sharks have mostly cartilaginous skeletons and gills. Octopuses are mollusks with eight arms. Many shallow reef-building corals have photosynthetic partners; deep-water corals differ.
- Some deep-sea groups have unusually large species; not every animal is giant and there is no universal single cause. Many giant isopods occur above abyssal depths.
- Erupted magma is lava. Cooling lava can form basalt. Hydrothermal vents circulate heated seawater and need not be on an erupting volcano. Some microbes use chemical energy and support vent food webs.
- Cassini evidence supports a salty subsurface ocean beneath Enceladus's ice and water-rich plumes. No life is confirmed. The exported ocean-world presets distinguish Earth lake, Earth ocean and Enceladus. Actual moon travel, procedural worlds, colonies and My Solar System remain future work.

## References awaiting live review

Intended reference pages: [NOAA pressure](https://oceanservice.noaa.gov/facts/pressure.html), [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/), [NASA Enceladus](https://science.nasa.gov/saturn/moons/enceladus/). The managed network rejected NOAA and NASA connections (403 CONNECT); their page contents were not retrieved. Reference domains were added to the cloud network configuration draft for review/publication. This content has not received external scientific approval. A marine-science review remains required before production use.

## Validation and remaining work

Shared unit tests check reachable approaches, habitat separation, repeatable state transitions, normalized saves, reusable kits, journal targets and every page's native choice/illustration limits. Chromium automation covers mouse and touch at a 1024×768 landscape viewport. The native runtime API harness checks equivalent travel, observations, models and mocked host-storage reload; it is not a GDevelop editor/rendering or real-device test. Real iPad/GDevelop rendering, optional narration availability, child usability and accessibility user testing remain outstanding. Production aquatic suits, submarine, habitats, wildlife and sound assets are still required.

Run `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, and `node prototype/tests/aquatic-browser.cjs` (browser checks require Playwright and Chromium). Rebuild with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Optional art regeneration uses `JACC_SHARP_PATH=/path/to/sharp node gdevelop/scripts/aquatic-assets.mjs`.

Next milestone: test this framework in the GDevelop editor and on an iPad with children, then add production aquatic animation and richer visual experiments before extending ocean-world travel.

## Files changed

- `prototype/src/aquatic.js`: configurable science content, habitats, world presets, validated state, actions and original SVG diagrams.
- Browser `main.js`, `data.js`, `zones.js`, `navigation.js`, `journal.js`: scene, controls, lake portal, travel, PIP gear and saved journals; regenerated `game.js` via updated bundler.
- Native `src/aquatic.js`, `gameplay.js`, `pip-workshop.js`, `construction.js`, `profile.js`: equivalent native interactions, visibility, companion gear and persistence; updated `build.mjs` and regenerated `game.json`.
- `gdevelop/scripts/aquatic-assets.mjs` and `gdevelop/assets/aqua-*`: reproducible placeholder backgrounds, diagrams and sub.
- Aquatic unit/browser tests, extended native/core-browser tests, launch documentation and roadmap.

Validation completed: 32 shared tests pass; native runtime harness including aquatic profile reload passes; aquatic and existing core browser flows pass with both mouse and touch. Browser landscape viewport: 1024×768. No real-device or native editor-renderer validation was performed.

The swimming exploration expansion adds original in-world wildlife, a horizontal swimmer, direct habitat trails and six repeatable findings. See [the current swimming build report](SWIMMING_EXPLORATION.md) for files and expanded validation.
