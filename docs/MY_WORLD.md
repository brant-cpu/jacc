# My World: owned colonies and travel

Use the large **My World** button in the browser or GDevelop header. There are three independently saved destinations: a home-world colony, a fictional alien planet and a fictional alien moon. Choosing a second destination never replaces an earlier one.

Open a destination, optionally name it and choose Forest, Rocky hills or Lakeside, then choose **Make this my world → Visit my world**. Names have ready-made choices and an untimed tap-letter keyboard. All setup except making the destination can be skipped. Landscapes are selected before the first visit and then retained so changing scenery cannot hide existing creations. Names can be changed later.

## Getting there

Home-world trips show J.A.C.C. and PIP flying off-screen and arriving together. Off-world trips show six gentle phases:

1. J.A.C.C. and PIP lift together.
2. They converge into a silver travel rocket with the astronaut's suit color and teal light/energy.
3. The rocket flies upward out of view.
4. It crosses a star field toward the destination planet or moon.
5. It descends to the landing area.
6. The rocket unfolds back into J.A.C.C. and PIP.

The transformation is a temporary fantasy travel animation, not a permanent change to the crew, custom suits, PIP fittings or machine designs. Canonical and custom astronauts are supported. Native rendering reuses the existing astronaut and PIP sprites; browser rendering uses their existing schematic art. Rocket and landscape artwork is provisional geometry.

The sequence runs automatically in roughly nine seconds off-world or three seconds locally, with no required timed responses. **Arrive now**, **Cancel trip**, pause/resume, sound/settings and adaptive controls remain available. Reduced animation or reduced visual effects produce immediate arrival. Reload can resume an interrupted journey; cancel does not count as arrival or grow crops. Captions and optional narration describe the phases.

## Your place

Each destination has a seeded top-down landscape, its own garden, blocks and placed machine copies. Use the current one-tap exploration and block tools. Tap a brown growing bed, choose a seed from the shared seed bank, water it, explore elsewhere and return. Each actual return advances one watered growth stage. Reloading, opening a menu, skipping a journey to a destination already active, or placing another machine within the same colony does not advance growth.

**Tools / trails → My Machines** deploys the child's saved designs into colony spots. PIP can provide editable starter designs. Rovers survey, sprayer robots water, habitats offer rest/resume, and colony bridges supply prepared top-down crossings. Prepared water/deck overlays and reserved footprints disappear when the copy is packed; original beds and own block edits are retained. Garage designs and collected seeds are shared, while placed copies and gardens remain separate for each colony.

PIP offers optional single goals: place a habitat or plant one seed. Explore mode can ignore these. My Journal records visited worlds and colony harvests/machine jobs; replay travels back to the relevant destination. **Home Base** or **My World → Fly to Home Base** returns to the training grounds. Existing authored zones, chapter gates and exploration saves are preserved outside the colony context.

Planet and moon colors differ from the home world. Their crops are explicitly supplied, protected growing-bed models, not claims that Earth crops grow unprotected on moons or that these are real alien plants. Earth wildlife is not generated on the alien destinations. These are fictional places, not scientifically modeled real planets or a completed My Solar System.

## Implementation, limits and validation

`prototype/src/my-world.js` owns safe profile normalization, separate colony contexts, names/landscapes, travel progression/poses, palette/art and journal metadata. Browser presentation is integrated in `prototype/src/main.js`; `gdevelop/src/my-world.js` adapts it to native objects. Both profile adapters capture the active colony before saving. Existing expedition, machine, gardening and journal modules are reused. `gdevelop/scripts/my-world-assets.mjs` generates the native background, colored rocket and terrain PNGs with Sharp; build scripts regenerate the classic browser bundle and GDevelop project.

The existing local-save limits still apply: 24 garage designs, 12 placed machines per compatible world, four nearby machine drawings, bounded blocks/plots/discoveries and job records. Each colony stores its own bounded state. Browser/host local storage is required; storage quotas and cleared browser data can affect retention. No account or backend is added. There is no furnished interior, colony economy, survival pressure, orbit solver or procedurally generated solar system in this milestone.

Shared tests exercise independent colony seeds/progress, preserved exploration saves, crop arrival versus reload, pause/cancel/skip, all rocket phases, safe naming, bounded native menus and colony machine copies. Browser mouse/touch tests cover home naming/landscape, gardening and habitat placement, planet/moon trips, pause and mid-flight reload, return growth, journal travel, cancel/skip and reduced-motion arrival. Native tests exercise the corresponding objects, captions, controls and profiles. Browser touch testing includes a 1024×768 landscape viewport; physical iPad, GDevelop editor/device and child/assistive-technology testing remain outstanding.

Run by extracting the complete build and opening `prototype/index.html`, or opening `gdevelop/game.json` in GDevelop and pressing Preview. Python is not required for the browser bundle. Next milestone: add persistent landing-pad landmarks, simple habitat decoration and clearer colony construction areas before expanding toward My Solar System.
