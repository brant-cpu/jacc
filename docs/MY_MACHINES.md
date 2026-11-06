# My Machines — shared assembly, garage, service and deployment

## Launch and play

In GDevelop open `gdevelop/game.json` → TrainingGrounds → Preview; for the browser open `prototype/index.html` with the complete extracted folder. From the home hub enter **Engineering & Terraforming** through the Engineering zone, then tap **My Machines**. The **Test yard** gate enters the new sandbox directly. At the farm, **Robot helper → My built equipment → My Machines** opens the same garage.

Choose a blueprint from Structures, Vehicles, or Helpers and power. Tap a large slot, then a compatible part. **Next part** points to a missing slot. **PIP fit missing parts** fills the remaining slots without replacing the child's choices. Test, paint and save; Undo restores recent part/color changes. All models use silver metal fittings and teal energy marks, with four body colors.

The garage holds up to 24 designs, with incomplete drafts retained per blueprint. Saved designs can be edited or copied. Starting the same blueprint after saving begins another copy rather than silently overwriting that saved machine. Repair practice inspects and adjusts three systems, preserving the chosen parts. Service is optional and never prevents use of a finished model.

## One shared construction vocabulary

| Blueprint | Required modules |
| --- | --- |
| Bridge, tower | Frame, fastening kit, deck/platform |
| Crane, rover | Frame, fastening kit, arm, motor/drive, power, one computer |
| Solar station, habitat | Frame, fastening kit, panels/shell, power/storage, one computer |
| Rocket | Frame, fastening kit, capsule, engine, matched propellant-tank package, one computer |
| Submarine | Frame, fastening kit, fins/ballast, motor/propeller, battery package, one computer |
| Airplane | Frame, fastening kit, wings, motor/propeller, battery package, one computer |

Nuts/bolts are one fastening kit. Motors and gears come with the drive modules. Only one computer component is needed. Passive structures do not require engines or computers. Parts have common connections and blueprint-specific positions/scales, so changing chassis, decks, fins, wings, arms, locomotion or tank layouts changes the visible model while keeping it usable. Every offered option fits; incomplete drafts simply need the remaining modules before saving/testing.

The workshop supplies reusable, prepared components. Existing geology/processing lessons, construction kits, free building, pipe/power puzzles and the earned elevator project retain their own progress. This feature does not add a raw-ore processing economy or consume discoveries/fuel.

## Working copies and places

The test-yard sandbox has three large placement pads. A submarine placement gets a water bay; ground and flight demonstrations are supplied by the model. Vehicles move automatically, a crane lifts a load, a helper crosses a bridge, and solar/habitat/tower models show powered equipment. The same chosen parts are drawn in the builder, garage and world copies.

Deployment offers compatible existing destinations: test yard, farm, Earth research site, Moon research site, aquatic learning lake, and flight range. Submarines get water locations; airplanes get atmospheric locations; rockets get suitable launch-model sites. Earth/Moon solar and launch models use pad 2, the surface connection. World access follows the existing chapter rules; building a model does not bypass the story prerequisites. Generated worlds/colonies are still future work.

**Test-yard sandbox → My deployed machines** lists placed copies. Each can be run or visited. A used pad has an explicit replacement choice; saved designs remain in the garage. Deployed parts are a separate snapshot: later edits to the saved design do not change existing world copies. Re-deploy to update a placement.

Two farm applications are implemented: running a deployed rover waters one planted, unwatered waiting bed; running a solar station turns on the farm's model light/power source. Watering still follows the farm rule: growth advances when the player returns to the farm. Machines do not cause plants to grow on a real-time clock.

## Repair and access

Rockets have engine/propellant checks, submarines and airplanes have motor/propeller checks, and passive structures have support/deck checks. Computer-equipped designs use a single computer check. These are repeatable inspect/adjust activities, not a damage system or real vehicle repair instructions. No model becomes unusable through inactivity.

All assembly, service, save/copy and deployment actions are single taps with large buttons. No dragging, simultaneous controls, timed testing or fuel management. Existing mouse, keyboard, switch/controller focus, captions, optional narration, pause and contrast controls apply. New views reserve a sixth native option for Listen. Reduced animation uses a fixed demonstration pose; pause freezes moving demonstrations. Saved designs also appear in **What I Did**, with a direct garage revisit.

## Implementation

- `prototype/src/machines.js`: nine configurable blueprints; shared part roles; compatibility, normalization/recovery, draft history, save/copy/service rules, medium/access/placement constraints, deployment snapshots, menus, part geometry and demo motion.
- Browser `main.js`: builder/garage view, preview animation, saved state, farm effects and world rendering. `farm.js`/`journal.js` provide equipment access and saved-build entries.
- Shared `data.js`, `open-spaces.js`, `zones.js`: engineering bench/gate, connected test yard and placement controls.
- Native `gdevelop/src/machines.js`, `gameplay.js`, `profile.js`, `build.mjs`: equivalent actions, dynamic layered previews, stored parts/colors, helper/crane/lamp/water props and world copies. Layers reuse a bounded sprite pool.
- `gdevelop/scripts/machine-assets.mjs`: optional Sharp generation of original transparent component PNGs; checked-in assets and regenerated `prototype/game.js`/`gdevelop/game.json` are included. No runtime dependency added.

Build with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`. Optional asset regeneration uses `JACC_SHARP_PATH` and `node gdevelop/scripts/machine-assets.mjs` (plus existing open-space asset generation for the yard backdrop).

## Verification and limits

83 shared tests pass, including every blueprint/part option, visible part/paint differences, incomplete-save guards, PIP preservation of choices, undo, repairs, copies, independent snapshots, medium/world/surface constraints, old/corrupt save recovery, menu/text limits, demo/reduced-motion poses, reachable controls, journal entries and farm effects. Native API tests assemble a customized rover, repair rocket/rover models, deploy a Moon rocket, preserve old deployed parts after editing, water a farm bed, and reload the garage alongside existing game regressions. Chromium mouse/touch tests cover assembly, animation, large controls, paint/undo, service, copies, three sandbox placements, journal/keyboard, deployment browsing and reload. Core browser and original construction regressions are also checked.

Run `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/machines-browser.cjs`, `node prototype/tests/construction-browser.cjs` and `node prototype/tests/browser.cjs`.

This is a configurable model-building and automatic demonstration framework. Models are not yet rideable/pilotable vehicles, enterable habitats or a full mechanical/structural/flight/fluid simulator. Templates supply stable supports, suitable loads and matched modules. Free-form terrain placement, detailed manufacturing, rocket chemistry, damage, multiplayer and procedural colonies are not added. Placement props do not block existing navigation. Artwork is provisional, and native editor rendering, real iPad performance, adaptive hardware/screen readers and child testing remain unverified. Recommended next milestone: test building/garage navigation with children, then add approved machine art, richer behaviors and connections to future world deployment.
