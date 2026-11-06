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

## Character roster

See [approved character decisions](docs/CHARACTERS.md), including Lucas's Lederberg Model and Sumati Suri, the seventh, orange J.A.C.C.: a girl from India with the Gadgil Model for Ecosystems and Environmental Science. Sumati and Lilja Jónsdóttir, the purple J.A.C.C. from Iceland (Mirzakhani Model — Mathematics), are playable in both builds. The crew now has eight members.

PIP now has **Life Lens**, **Xeno Lab**, **Eco Probe**, and **Pattern Projector** attachments, plus orange/purple crew colors. Open **PIP → Build PIP → Science**, use **More parts** for the second page, fit a part, then choose **Try fitted tool** (browser) or **Try tool** (GDevelop). Every tool has three illustrated, repeatable steps. See [crew and PIP implementation notes](docs/CREW_AND_PIP.md).

## Astronaut suit powers

All J.A.C.C.s are astronauts; Lucas Turner is French. Choose **Lucas, Sumati or Lilja → Suit** for their nine contextual powers. **Reveal in world**, then tap a highlighted place. **Explore this place** resumes its normal activity. Measure & Map calculates training-map distances; environmental surveys show greenhouse model settings; restoration/geometry plans link to the actual farm/construction activities. See [implemented powers and testing limits](docs/SUIT_POWERS.md).

The ninth J.A.C.C. is recorded as a male Chinese astronaut specializing in Astronomy and Astrophysics; his blue suit is the Sagan Model, while his personal name is still to be chosen. All suits share silver metal accents and teal lights, thrusters and energy effects as the approved design standard.

## Display options

Settings now includes **High contrast** and **Color-blind support**. Enable either or both; preferences save locally. High contrast strengthens interface surfaces/text; color-blind support adds numbered destinations and crew markers alongside existing labels and symbols. See [scope, tests and remaining work](docs/DISPLAY_OPTIONS.md).

## Adaptive access & My words

Both builds now include **Access** and **My words / WORDS**. Choose one-switch scanning or two-switch selection, standard controller input, game-speech captions, visual alerts, optional haptics and scenery dimming. The AAC board offers activity choices, local caregiver-help phrases, brightness/sound requests, save and All done. PIP offers an offline helper and destination list. See [setup, device support and testing limits](docs/ADAPTIVE_ACCESS.md), particularly the unverified JAWS/native screen-reader path and real hardware. Live AI chat and room-speech transcription are not implemented.

## First Visit: GSEINHQ

Choose **First visit** (browser) or **VISIT** (GDevelop) for the optional onboarding story: Explore, Guided Adventure or Adaptive Play; optional supports; crew selection; then arrival at **GSEINHQ**. Skip setup enters HQ immediately. Guided offers one optional nearby goal; Explore has no automatic clue prompts. The training grounds remain the home hub, and direct exploration is still available. See [the script and behavior brief](docs/FIRST_VISIT.md).

## Activity ideas

The [activity and reference catalog](docs/ACTIVITY_IDEAS.md) records the requested puzzle activities and NASA Kids/Mission Biomes references. Biome exploration is proposed for the farm biodome and future world planning; these entries are plans, not newly playable activities. NASA page review remains blocked by network policy.

## Swimming exploration

**Home hub lake → Aquatic Learning Center → Swim trail** now opens free swimming in the freshwater lake, reef/open-ocean or deep-ocean simulation. All nine crew have a swimming pose; PIP follows with swim gear. Observe world wildlife and find six new sample/observation records saved in the journal. Tap open water or a large labeled target; pause and reduced-animation settings are supported. See [the swimming build report and validation limits](docs/SWIMMING_EXPLORATION.md).

## Large exploration spaces

The home hub now links to **Flight range**, **Forest**, and **Open dig landscape**. Each extends beyond one screen with a following view, automatic travel and discoveries. **Places / PLACES** selects spaces and distant landmarks; PIP → Return home is immediate from these areas. Forest seeds and dug samples save locally, along with excavated tunnels. See [features, files, tests and limitations](docs/OPEN_SPACES.md).

Magnetism Lab: tap its home-hub magnet entrance or **Places → Magnetism Lab**. Try polarity, material attraction, a switchable electromagnet and magnet/coil generation; replay them through My Experiments. See [the lab report](docs/MAGNETISM_LAB.md).

Adventure 2: **Moonbase Dig**. Choose **Adventures** at home, the **Adventure desk** at HQ, or **Places → Adventure chapters**. Dig on Earth and the Moon, build a field station, clear hostile Nymion guards with one-tap cartoon bolts, and stop their crystal machines. Explore/Adaptive offer immediate access; New Guided play follows the Elevator Hack, digging and rocket-pad readiness. See [chapter report](docs/MOONBASE_DIG.md).

**Adventure 1: The Space Elevator Hack** now precedes the Moon mission. Choose **Places → Adventure chapters → Adventure 1: Space Elevator** for six deck rescues, the five starring companions, Lucas’s supporting air scan, Professor Elon and Commander Zuglu’s relaxed four-stage encounter. See [the implementation report](docs/SPACE_ELEVATOR_HACK.md).

Simple farming: **Planet Farm → My garden** now has three saved beds. Choose an owned seed, plant and water it, then leave the farm and return to grow one stage. Harvest/replant when grown. Find sample seeds in the hills, forest, Earth research site and the Moon's sealed plant pod. See [the farm sim report](docs/SIMPLE_FARM_SIM.md).

**My Machines**: enter Engineering & Terraforming and tap **My Machines** to assemble, paint, save/copy, service and deploy eleven kinds of machines/structures. A three-pad test yard keeps working copies with the chosen parts. Farm rovers can water beds and solar stations can power the model lamp. See [the garage report](docs/MY_MACHINES.md).

**HQ Computer Lab + Robotics Bay**: tap either new HQ door for Malik and Professor Mike’s coding activities, Kaito’s drone bench, saved tool-based helper robots, PIP customization and care-for-our-world activities. See [the lab report](docs/HQ_TECH_LABS.md) for controls, science distinctions, files and validation limits.

**Chen Yuxin + Build a J.A.C.C.**: Chen is the selectable blue Sagan astronaut, a girl from China. **Crew → Build my J.A.C.C.** creates a custom astronaut with separately colored equipment, identity choices, mixed STEM tools and up to eight saved designs. Your custom astronaut appears during play, swimming and flight. See [creator controls and implementation limits](docs/BUILD_A_JACC.md).

**Rocket Lab & Launch Pad**: enter from the Training Grounds, HQ or Engineering. Build/select a saved rocket, ask PIP for model checks, and advance a repeatable flight one tap at a time. Professor Elon teaches engineering; Chen hosts sky observations. Try thrust/payload and air/vacuum comparisons, and revisit observations/missions in the journal. See [the lab report](docs/ROCKET_LAB.md) for controls, files and validation limits.
