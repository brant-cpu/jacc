# J.A.C.C. First Visit: GSEINHQ

**Project:** J.A.C.C.  
**Deliverable:** Short onboarding script and behavior brief  
**Name:** GSEINHQ, exactly as supplied. Its expansion is not established here.

## 1. Choose how to play

**PIP:** “Welcome, Junior Astronaut! How would you like to explore today?”

Three large choices, readable aloud:

- **Explore:** roam freely; PIP is available when invited.
- **Guided Adventure:** PIP offers one small, optional goal at a time.
- **Adaptive Play:** choose supports that make playing comfortable.

Include **Skip setup — enter GSEINHQ** and **Read choices aloud**. Closing setup also leaves normal exploration available.

Adaptive Play offers optional movement help, extra/standard time, sound, visual effects and reading aloud. Everything can be skipped, changed or revisited. Supports persist independently of play style and are not reset when a child chooses Explore or Guided Adventure.

## 2. Choose a J.A.C.C.

**PIP:** “Every astronaut brings a different kind of know-how. Pick the J.A.C.C. you’d like to explore with!”

Show available astronauts’ names, colors and STEM specialties. A large **Keep my astronaut — enter GSEINHQ** choice bypasses selection. The ordinary Crew menu remains available later. The unnamed blue Sagan astronaut is not presented as selectable until his identity is completed.

## 3. Arrive at GSEINHQ

**PIP:** “Welcome to GSEINHQ! This is your place to get ready, discover new things, and see what’s happening around the team. Tap anything that catches your eye.”

Let the child continue freely. Guided Adventure offers one nearby optional point of interest, preferring an unvisited inspection; if all have been visited, a repeat visit is allowed. Keep exploring and Close dismiss the invitation. Explore and Adaptive Play do not generate optional-goal prompts. There are no idle hints, deadlines or forced demonstrations.

## 4. Try one interaction

Approach and positioning are automatic. An inspection opens its existing activity/card, followed by:

**PIP:** “Nice discovery! You can keep exploring, or tap me if you’d like a clue.”

Guided mode offers **Another optional clue**, only when requested. Explore stays quiet until the child taps an object or invites PIP. Interactions remain repeatable and nothing is permanently locked by onboarding choices.

## Implementation behavior

- Browser: choose **First Visit: GSEINHQ** on the starting screen or **First visit** in the header. The original **Explore** button still starts the home-hub game without setup.
- GDevelop: **VISIT** opens the optional story from the already playable home hub. Existing HQ entrance still works without any setup. The starting/home hub remains the training grounds; this story is a visit to HQ.
- **Tap destinations** selects large activity pictures. **Move freely — tap anywhere** permits open-ground destinations. Both use automatic navigation; no joystick, held direction or dragging is introduced. Construction UI controls remain independently operable.
- All activities already wait indefinitely. **Extra time** lengthens short optional switch-scan intervals to at least five seconds; it does not introduce timers or slow the child’s astronaut. Longer caregiver-selected intervals remain intact.
- Sound/effects/reading choices modify the existing settings. Advanced Access, AAC and ordinary settings remain available. Re-entering First visit allows changing mode/supports at any time.
- Choosing a mode or a character never creates a quiz, score, combat encounter or forced tutorial. The script uses existing PIP and crew; Professor Elon remains the established HQ/program director, with no invented additional dialogue in this visit.

## Files and validation

`prototype/src/first-visit.js` is the shared configurable script, mode/support normalization and nearest-goal logic. Browser `main.js` integrates the optional flow, support effects and saved state; `access-ui.js` exposes preference updates so extra-time changes apply immediately. Native `src/first-visit.js`, `gameplay.js`, `profile.js` and `build.mjs` provide equivalent menus, input behavior and persistence. `zones.js` uses the exact HQ display name; both builds are regenerated.

44 shared tests pass. Browser mouse/touch tests cover all three choices, setup skip, exact HQ arrival, optional guided interaction, quiet Explore, support changes, crew changes and reload persistence. Native API checks cover equivalent interactions and saved state. Existing exploration/HQ checks cover direct entry without the onboarding flow.

Run `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/first-visit-browser.cjs` and the existing browser/HQ scripts (Playwright/Chromium required). Build with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`.

GDevelop editor rendering, real iPad use, child testing, assistive-device testing, recorded PIP speech and reading-free comprehension remain unverified. Device speech is optional; all dialogue also has text. No accessibility certification is claimed.
