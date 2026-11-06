# J.A.C.C. — Junior Astronaut Cyber Command

Granite Pixel Games • Phase 1 working prototypes

## Using GDevelop 5?

Open **[gdevelop/game.json](gdevelop/game.json)** in GDevelop, open **TrainingGrounds**, then press **Preview**. Download and extract the complete repository first; opening the GitHub code page does not launch the project. Keep `gdevelop/assets/` beside the project. See [GDevelop instructions and validation limits](gdevelop/README.md).

## Playing in a desktop browser?

Double-click **prototype/index.html** in the extracted folder. This version includes a bundled classic script and no longer requires Python or a web server. Keep the complete prototype folder together. See [browser documentation](prototype/README.md).

These are separate implementations. The browser HTML is not a GDevelop project. Both use provisional art and share science content and navigation logic. Real-device testing and child/accessibility user testing remain outstanding.

## Build PIP

Open **PIP → Build PIP** for the schematic workshop. Tap parts or optionally drag them onto PIP. Standard restores the base buddy; Match crew copies the current astronaut's suit color. Use Analyze, or Ask PIP on a discovery card, for illustrated offline science explanations. See each build's README for implemented features and limits.

## Training grounds home hub and HQ

New games begin at the training grounds home hub. Visit HQ for its star-base arrival bay, science lab and dormitory. Tap pictures to visit rooms, open PIP's workbench, choose crew at the lockers, or rest at the bunks. HQ entrance leads from the hub to the base; the Training grounds door returns home. Existing discoveries and customization are retained. This is an environment foundation with provisional schematic art.

## Planet Farm

From the training grounds home hub, tap **Planet farm**. Explore the hydro farm, biodome, garden, orchard, vertical garden, solar panels, water lab, energy lab, seed bank, plant computer, leaf lab and robot helper. Collect sample seeds and revisit completed activities in My Journal. The plant computer contains 15 curated examples with overlapping flower/tree/fruit/vegetable/nut/seed categories.

These are offline, repeatable science models. See [farm science references and verification status](docs/FARM_SCIENCE.md): live source verification is pending because the managed network blocks the reference sites. The game has not received external scientific approval.

**Home hub:** both builds start at the training grounds. **HQ entrance** leads to the base, **Planet farm** leads to farming, and both return paths lead home. **PIP → Return home** routes back to the training grounds from anywhere. Travel retains crew, PIP fittings, discoveries, seeds and experiment history. Open `gdevelop/game.json`, select **TrainingGrounds**, then Preview.

## Side-view dig site

From the training grounds choose **Dig site**. Tap ground to excavate automatically, or ask PIP to Show places for large find targets. Tools include a drill, scoop and power arms; Aiden's yellow engineering rig digs faster while PIP assists the other crew. Explore the upper layers and Deep caverns, collect samples, and inspect cave life, echolocation, formations, groundwater and protected magma/mantle models. The original three-material activity remains at **Sample tray**.

The engineering portal leads to starter sample-guided workbenches. Select a reusable sample, then Install on farm to fit a raised support, water-channel or greenhouse/habitat model. The expanded construction yard is now available; see [roadmap](docs/ROADMAP.md) for the later worlds, colonies, solar-system and Adventure Mode plans. See [dig science review notes](docs/DIG_SCIENCE.md) for limits and pending verification.

## Engineering & construction yard

From the home hub, choose **Engineering zone**. Visit the **3D printer**, **Crane bay**, **Builder robots**, **Pipe workshop**, **Power workshop**, **Construction challenges**, or **Free-build sandbox**. Tap prefabs into the side-view board, then Test model. Undo, Reset, Plan and Robot build are always available; no resources are spent.

Complete the six challenges and three machine demonstrations to keep nine reusable kits. **My parts** fits kits at the farm. **Space elevator project** at Home Base assembles a training foundation/tower/dock and unlocks an animated orbital preview. The giant elevator and generated My Solar System are future systems, not completed real-scale simulations. See [construction model details and validation limits](docs/CONSTRUCTION_MODELS.md).

## Aquatic Learning Center

At the home hub lake, tap **Aquatic Learning Center**. Choose swimming or the **J.A.C.C. submersible**, then explore the freshwater lake or the reef/open-ocean and deep-ocean simulations. PIP automatically wears aquatic gear without changing its saved outfit. Observe fish, dolphins, whales, sharks, octopuses and deep-sea examples; keep nonliving sample records; repeat pressure, depth, buoyancy, sonar and volcano models. Discoveries appear in My Journal. Reusable construction kits fit the habitat model.

The Enceladus page introduces Saturn's icy ocean moon and a future ocean-world preset. Moon travel is not implemented. See [aquatic science, validation and asset requirements](docs/AQUATIC_SCIENCE.md).
