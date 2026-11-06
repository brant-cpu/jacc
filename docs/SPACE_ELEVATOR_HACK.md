# Adventure 1: The Space Elevator Hack

## Launch

In either build choose **Places → Adventure chapters → Adventure 1: Space Elevator**, or the home hub's **Elevator adventure** marker. Open `gdevelop/game.json` → TrainingGrounds → Preview for GDevelop; open `prototype/index.html` with the complete extracted folder for the browser.

The opening establishes **2063**, Nymlord's hijack and mantis-like eyes, purple hack lights, and PIP's rescue call. It can be replayed or skipped into the rescue. **Choose astronaut** returns to the opening after selection. Existing crew choices remain available; **Alex, Malik, Aiden, Kaito and Maya** are the five starring team members and follow as provisional companion sprites. Lucas supports the upper-deck science by radio, preserving his established biology/xenobiology specialty.

## Six-deck rescue

Each deck has a persistent short objective, an observation, a system, a rescue area, the next-deck control and a PIP hint. The player can walk around through one-tap destinations, revisit observations, pause, leave or resume. Restoring a system changes its diagram; freeing the people unlocks the next deck.

| Deck | Lead | Working interaction |
| --- | --- | --- |
| Launch Lobby | Alex, Red | Redirect power to the magnetic gate's release. Keeping the lock powered gives a supportive hint without losing progress. |
| Cargo Deck | Aiden, Yellow | Place a support before lifting cargo; restore corridor access and rescue the crew. |
| Research Lab | Maya, Pink | Compare a reference sample, lower scanner gain, then calibrate. Discover the crystals' Moon origin and free the scientists. |
| Communications Deck | Malik, Green | Trace the false signal before isolating the broadcast; reconnect PIP and the team. |
| Flight Deck | Kaito, White | Align the guidance model toward the station and free the flight crew. |
| Upper Atmosphere Deck | Team, Lucas supporting | Scan the air mixture, restore air balance and free Professor Elon. Spectrometer/light analysis and the separate pressure gauge are distinguished. |

The diagrams are qualitative STEM models. Recipes are ordered actions with visible state changes, not quantitative engineering or network simulations. Incorrect/out-of-order choices offer help and retain completed work. PIP jokes and the rescue dialogue are included. The purple lamps remain steady for comfortable presentation.

## Commander Zuglu and Moon handoff

Zuglu appears on the upper platform with his crystal-tipped hammer. The script distinguishes this hostile, mutated commander from the ordinarily small, docile, squid-faced, fungus-eating Zugu.

Four stages wait indefinitely for player input: **observe the pulse → brace the deck → raise a cargo barrier → disarm the hammer with a cartoon bolt**. No phase requires aiming, timed dodging, rapid tapping or holding controls. Each phase has a diagram and optional PIP hint. Visible wave rings represent vibrations; the text distinguishes that illustration from ordinarily invisible sound. The story's electronics disruption is attributed to vibration, not to sound being electromagnetic radiation.

Professor Elon's rescue, the final shockwave, **“Zuglu! The tick ship! We leave now!”**, Nymlord/Zuglu's escape and the hammer-crystal Moon signal lead into Adventure 2. A **Tick ship trail** landmark on the Moon records the pursuit.

For a new Guided save the sequence is **Elevator rescue → digging practice + rocket-pad readiness → Moon pursuit**. The elevator itself does not require constructing the endgame elevator project. The existing construction project retains its separate progress and rewards. Explore/Adaptive can still enter Moonbase Dig independently. Existing in-progress Moon saves retain access; prior progress is preserved.

Finishing the elevator enables direct Moon entry and Moon objectives without claiming the player built the earlier Earth field station. The authored Earth dig route remains available through **Rocket pad → Earth research site**, independent/legacy Moonbase play and existing journal revisits.

## Saving, journal and access

A separate normalized local `elevator` record stores deck, per-deck science progress, rescues and Zuglu's stage. Returning through Continue resumes partial work. Actual rescues and the finale appear in **My Adventures**; journal revisits restore the correct deck context. Completed floors replay their explanations; restarting the entire rescue resets only elevator story progress. Moon progress, earned handoff, crew, PIP, collections and construction remain saved.

Large single-tap buttons, keyboard/switch/controller menu navigation, optional narration, captions, pause, contrast settings and reduced effects use the existing access layer. Floor objectives do not time out. All native pages fit six choices including Listen and Home. Artwork remains provisional and noncanonical; no established character assets or permanent powers are replaced.

## Files and verification

`prototype/src/elevator.js` contains configurable decks/cast, rules, normalization, objectives, dialogue and original diagrams/backdrops. Shared world/routing, chapter sequence and journal changes are in `open-spaces.js`, `data.js`, `zones.js`, `adventures.js` and `journal.js`. Browser `main.js`/`style.css` provide the view, HUD, crew return flow and companions. Native `src/elevator.js`, `gameplay.js`, `profile.js`, `adventures.js` and `build.mjs` provide equivalent gameplay, companion/background sprites, fitted titles and persistence. Generated `prototype/game.js` and `gdevelop/game.json` are included. `gdevelop/scripts/elevator-assets.mjs` creates the original placeholder PNGs using optional Sharp.

66 shared tests cover ordered systems, safe retry, rescue/lift gates, all four Zuglu phases, save normalization, roster/science distinctions, diagram changes, menu/text limits, reachability, Guided handoff and journal floor context. GDevelop API tests play the full rescue and Moon trail, including companions, saved replay and preserved construction/Moon data. Chromium mouse/touch tests complete the six decks and boss, reload partial progress, earn Guided prerequisites, visit the tick-ship trail, revisit the correct journal floor and restart independently. Core gameplay and original Moon-route regressions are also checked.

Build: `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Tests: `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/elevator-browser.cjs`, `node prototype/tests/browser.cjs`, `node prototype/tests/adventures-browser.cjs`.

## Limits and next milestone

This is a playable story framework using one reusable deck footprint, colored backdrops, schematic systems and simple following companions. Rescues and villain encounters use illustrated state changes; independent rescue-NPC/enemy AI, finished cinematics, dynamic damage, realistic elevator/pressure/flight physics and final character/ship animation remain future work. The tick ship is a pursuit landmark, not a playable ship interior.

GDevelop editor rendering, physical iPad performance, actual adaptive hardware/screen readers and child testing remain unverified. Next: test objectives/pacing with children, then replace the provisional deck and encounter presentation with approved production art and richer rescue/hammer animations.
