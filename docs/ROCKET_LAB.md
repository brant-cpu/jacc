# Rocket Lab & Launch Pad

Enter from the new **Rocket Lab** control at the Training Grounds, the HQ door, or Engineering. The lab has clear returns to the home hub, HQ and Engineering. It is an optional science space available in Explore, Guided and Adaptive play; the existing story chapter requirements stay intact.

## Playable activities

- **Professor Elon** introduces the purpose, using his existing younger, clean-shaven schematic portrait and encouraging voice. **PIP** stays the active helper, offering one useful next step based on whether the child needs a rocket, checks, a flight step or a replay.
- **Rocket assembly** opens the existing My Machines rocket builder. Choose compatible parts/paint or let PIP fit missing modules, then save. Close the garage to return to the lab and choose the saved rocket at Launch control. No parts are spent.
- **Launch control** copies an owned, complete rocket onto the training pad. The exact selected capsule, engine, power package, connections, computer and color are retained. Later garage edits do not alter a flight copy already chosen.
- **Model checks** cover frame/connections, a matched engine/power package and the mission computer. Children can tap individual checks or ask PIP to help with all three. Changing the destination keeps the structural/power checks and asks for a new mission-computer check. These are qualitative teaching checks, not real launch procedures.
- **Player-paced flight** progresses through ignition, ascent, coasting/observation and a report. Every step waits for a tap. The selected rocket visibly rises on the pad, and its matching parts appear in the illustrated flight panel. There is no countdown, deadline, fuel depletion, damage or failure state. Leave and return, or reload, with the flight still waiting. Replay keeps the design and previous discoveries.
- **Observing missions:** Earth observer, Moon flyby and icy-moon probe. The targets are training diagrams; the lab does not fly the player into a story chapter or generate a world. Orbits, flybys and landings are distinguished. The ascent description notes that real rockets also steer and gain sideways speed to reach orbit.
- **Thrust test bench:** change relative thrust and payload-mass levels and run the comparison. Greater upward thrust than weight lifts the model; balanced forces keep this initially resting model at rest; smaller thrust leaves it on its support. More mass means more weight in the same gravity. The numbers are relative levels, not kilograms/newtons or a quantitative flight simulation. Air/vacuum changes the setting without turning off rocket propulsion: rockets push expelled propellant rather than relying on surrounding air.
- **Chen’s sky window:** observe the Sun, Moon and Enceladus, then keep the observation. The Sun is a star, the Moon reflects sunlight, and Enceladus is an icy moon of Saturn with evidence for a subsurface ocean. Water is distinguished from confirmed life. The Sun picture is a screen model, not guidance to point a real telescope at the Sun.
- **Journal:** actual checks, thrust trials and completed flights appear in My Experiments; completed mission reports appear in My Adventures; sky observations appear in What I Discovered. Revisit a sky entry to reopen that exact sky object. Merely entering the lab does not claim a completed experiment.
- The custom astronaut’s **Star finder** now links to the lab’s sky window. Canonical and player-created astronauts can all explore the zone.

The lab contains simple solid benches; automatic pathfinding routes around them to large interaction controls. All new actions use single taps, with mouse/keyboard access and optional Listen. Reduced visual effects hide the static exhaust effect. No timing is required even when reduced animation is disabled.

## Files and running

Shared zone/stations, bounded saved state, mission/check/experiment logic, menu views and original schematic art: `prototype/src/rocket-lab.js`.

Connections and navigation: `open-spaces.js`, `data.js`, `zones.js`. Browser presentation/world rocket: `main.js`. Native presentation and reusable part sprites: `gdevelop/src/rocket-lab.js`, `gameplay.js`, `profile.js`, `gdevelop/build.mjs`. Saved experiment/observation entries: `journal.js`. Custom Star finder route: `jacc-builder.js`. Both generated playable builds and PNG assets are included.

Open `prototype/index.html` from the complete extracted repository, or open **gdevelop/game.json → TrainingGrounds → Preview** in GDevelop. Python is not required. The managed browser blocks file URLs, so automated browser checks use local asset routing.

Rebuild changed sources/art:

```sh
node prototype/scripts/build.mjs
node gdevelop/scripts/rocket-assets.mjs
node gdevelop/scripts/open-space-assets.mjs
node gdevelop/build.mjs
```

The existing `sharp` dependency is needed only for regenerating PNG art. `JACC_SHARP_PATH` can select an installed copy.

## Validation and limitations

Shared tests exercise all entrances/approaches, separate touch regions, bench avoidance, owned-rocket gating, retained custom parts, independent flight copies, individual/PIP checks, every explicit flight step, mid-flight save normalization, replay, mission changes, force/mass outcomes, vacuum behavior, observed-only journal records, corrupt/older saves and native text/button bounds.

Mouse and simulated-touch browser checks cover building a custom rocket, HQ/home entries, instructor/PIP flows, the complete flight and repeat, no automatic stage advancement, thrust/mass/vacuum changes, Chen’s sky observations, correct journal replay, keyboard activation, local reload and unchanged story prerequisites. The complete native schema/resource/event harness covers the same activities, actual world/preview sprite positions, reduced effects and Engineering/HQ return gates.

Artwork is provisional schematic art; approved production environment, character, rocket-animation and audio assets are still needed. This is a small educational simulation, not realistic orbital physics or a real launch checklist. An observing mission is not a pilotable off-world trip, a procedural planet or My Solar System. Real iPad, assistive-device/child testing and GDevelop editor/renderer preview remain separate checks. No accessibility certification is claimed.

Recommended next milestone: connect an earned, story-appropriate off-world departure to the existing Moon adventure, with a clear destination choice and home return, while retaining the lab’s freely repeatable practice flights.

## Science reference links for review

- NASA Sun: https://science.nasa.gov/sun/
- NASA Moon: https://science.nasa.gov/moon/
- NASA Enceladus: https://science.nasa.gov/saturn/moons/enceladus/
- NASA Glenn rocket thrust background: https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/rocket-thrust/

These are reference links for content review; this change did not fetch or embed NASA pages, artwork or games. The models use locally authored text and diagrams.

Checks completed for this build: **101 shared Node tests**, the full mouse/simulated-touch rocket-lab browser flow, the existing mouse/touch exploration/crew regression, the complete native schema/resource/event harness, generated JavaScript syntax, visual review of the lab/flight panels and patch formatting. Native event testing is not a GDevelop editor or renderer preview.
