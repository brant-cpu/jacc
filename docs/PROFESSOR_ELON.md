# Professor Elon — Rocket Lab & Engineering

Professor Elon heads the Rocket Lab and Engineering zone at GSEI HQ, alongside his established role as J.A.C.C. program director. He is a fictional, kid-friendly character loosely inspired by Elon Musk’s public image as an eccentric, ambitious inventor. His specialty is turning enormous ideas into machines: rockets, rovers, launch systems and engineering experiments.

## Current appearance — latest creator direction

**A younger professor with no beard or other facial hair.** Keep glasses and a lab-coat style. This replaces the earlier older, bearded description. No exact age or permanent hair color is established. The in-game portrait is an original schematic placeholder; it is not final production artwork or a real-person likeness.

## Personality

- **Big-picture thinker:** imagines bold projects and gets excited about what children might build.
- **Eccentric and theatrical:** gives machines dramatic names, talks to prototypes like colleagues and enjoys wonderfully overcomplicated demonstrations.
- **Brilliant but approachable:** treats every question as worth asking.
- **Persistent experimenter:** studies an unexpected result and invites another approach.
- **Warmly encouraging:** credits children’s ideas and gives them meaningful choices.

His eccentricity is funny and imaginative, never confusing, intimidating or overwhelming. Explanations stay brief and child-friendly. Dramatic demonstrations must respect reduced animation, reduced effects and sensory preferences.

## Teaching and PIP

Professor Elon introduces the engineering subject, explains the goal and invites experiments with designs, parts and systems. Children can explore at their own pace using taps, without timers or pressure.

**PIP remains the active companion.** PIP explains what is on screen, demonstrates when invited, offers a hint and supports the next action. The instructor introduces the purpose; PIP helps the child carry out an idea. Opening a help panel must preserve the child’s current work.

## Voice references

“Magnificent! The rocket went sideways. That’s not where we planned—but now we have an excellent engineering mystery.”

“Every great machine starts as an idea. First build it, then make it better! What should we build first?”

“PIP, would you show our engineer the next part? I appear to have misplaced my tiny screwdriver again.”

“Alright! yeah! Awesome!”

A short thoughtful pause: “Hmm Let me think…”

A pause is an optional voice-performance cue, not a mandatory gameplay wait. Describe actual results honestly: the current rocket toy launches upward, so do not claim it went sideways. The sideways line is a reference for a future experiment with such an outcome.

## Current integration

Tap Professor Elon at HQ, Engineering, or the Flight Range launch area. His menu connects existing construction plans, free building and the My Machines rocket blueprint. The greeting uses his idea-to-machine enthusiasm and missing-screwdriver handoff to PIP.

Engineering test feedback now uses his encouraging voice while preserving the model’s specific support, pipe or circuit explanation. PIP offers the next small change or an optional demonstration. The engineering PIP panel keeps the current board, offers resume, and allows a demonstration using the existing undoable helper system. Rocket assembly retains all chosen compatible parts and uses the existing save, repair, test and deployment systems.

These are instructor entry points into existing systems, not a separate newly implemented Rocket Lab scene or realistic rocket simulator. Other zone instructors remain unassigned until established by the creator. Professor Mike continues to teach the Computer Lab and Robotics Lab.

Shared profile, menu and schematic portrait: `prototype/src/construction.js`. Wiring: `data.js`, `journal.js`, browser `main.js`, native `gdevelop/src/construction.js` and `gameplay.js`. Both generated builds and the native portrait asset are included.

Validation: 90 shared tests passed; mouse and simulated-touch construction checks cover the portrait/menu, rocket-builder handoff, retained boards, PIP demonstrations and undo. The complete GDevelop schema/resource/event harness passed, including all three instructor locations and conversation while a suit scanner is active. Touch-region separation and navigation are checked, and the schematic portrait was visually reviewed. Real iPad and GDevelop editor/renderer testing remain separate.

The later creator-authorized [science faculty expansion](SCIENCE_FACULTY.md) now assigns the other subject instructors. Earlier references to unassigned zone instructors are superseded; Mike and Elon retain their established roles and appearance briefs.
