# Adaptive access and communication framework

## Open and use

Download/extract the repository. GDevelop: open `gdevelop/game.json`, TrainingGrounds, Preview. Browser: open `prototype/index.html` with its full folder. **My words / WORDS** opens the communication board. **Access / ACCESS** opens input and feedback preferences. All settings save in the existing device-local profile; no account or external service is used.

## Implemented capabilities and practical limits

| Request | Current framework | Verification still required |
| --- | --- | --- |
| Ball-end/wobble switches, sip-and-puff and adaptive keyboards | Compatible interfaces can send a configured keyboard key. One-switch auto-scan/select; two-switch next/select. Scan windows: 1, 2, 3, 5, 8 or 12 seconds. | Actual switches, interface drivers, individual key mappings and user setup. Raw USB devices are not read directly. A mouse-click-only switch needs its interface configured for keyboard output. |
| Trackball, mouse and mouth stick | Existing pointer/touch controls plus a large destination list; keyboard keys can also be used. | Real trackballs/mouth sticks and child usability. A mouth stick is a physical access tool, not a software device protocol. |
| Microsoft USB / adaptive controllers | Standard-mapped Gamepad API: D-pad/stick moves focus; A selects; B closes; X opens My words; Y opens Help. Press edges prevent held-button repetition. | Real Xbox/Adaptive controllers, host permissions, USB/Bluetooth and nonstandard mappings. A device may need a button press before the browser exposes it. No manufacturer plug-and-play certification. |
| JAWS / screen readers | Browser uses named dialogs, native HTML controls, live status, text descriptions, destination lists and named construction cells. Decorative canvas is hidden from the accessibility tree. Narration/AAC voice can be disabled to avoid competing with a screen reader. | JAWS on Windows, NVDA, VoiceOver, switch control and actual accessibility-tree navigation through all activities. GDevelop Sprite/Text rendering is **not** a verified screen-reader interface; use the browser semantic route for this testing. |
| Real-time captions | Requested game speech is displayed as text at utterance start; visual notices persist until replaced. Browser has Read last caption/notice. Native shows a two-line caption preview; Access provides the full last-caption text. | Audio timing and device speech voices. This is not word-synchronized captioning or transcription of people speaking nearby. No microphone is accessed. |
| Visual alerts | Nonflashing, persistent message panels/notice treatment; browser captions and notices share a feedback region to avoid duplicate visible messages. | Real-device layout, font scaling and notification comprehension. |
| Haptics | OFF by default. Selection feedback requests short vibration or standard gamepad rumble if the API is available; failures are ignored. | Actual supported hardware. Many browser/device combinations, including iPads, do not expose phone vibration; controller support varies. No vibration is required to play. |
| Smart assistant | Optional PIP helper suggests an unvisited activity, offers destinations and returns to the previous activity. | This is deterministic offline guidance, **not live AI chat**. A true AI assistant needs a separately designed backend/provider integration; none is configured and no child messages are transmitted. |

Eye-gaze devices that provide normal pointer/click output can use the same targets. Internal camera-based eye tracking and gaze-dwell selection are not implemented.

## AAC choices and behavior

The built-in board has Explore mode, My solar system, I want to dig, I want the farm, Help me Mom, Help me Dad, I need help, Too bright, Too loud, Save my game for me and All done. It is an introductory communication board, not a replacement for a child's established AAC system or a clinically validated AAC product.

- Activity choices route to real existing destinations. My Solar System explicitly leads to the space-elevator project/earned orbital preview; generated solar systems remain future work.
- Help choices pause the game and display a large phrase for someone nearby. They do **not** call, text or notify a remote caregiver. There is no emergency-service feature.
- Too bright dims scenery while leaving interface labels readable. Too loud mutes game audio/speech. Muting also silences AAC speech until volume is restored; the written request remains visible.
- Save gives an accurate local-save success/failure message. All done attempts a save and pauses; it does not close the browser or discard progress. Return to game resumes.
- Optional AAC voice uses the device speech engine and current volume, independently of automatic game narration. Phrases and explanation text remain visible when speech is unavailable.
- Browser board shows four choices per page, plus navigation and Access. Native has four choices/page and persistent WORDS/ACCESS controls in both world and menus. No dragging or simultaneous button press is required.

No scores, time limits or penalties were added to gameplay. Auto-scanning has adjustable selection windows; two-switch mode lets the child advance at their own pace. Scanning does not advance gameplay or force choices. Preferences can be turned off independently.

## Controls and key setup

One-switch default: **Space selects** the automatically highlighted control. Two-switch default: **Space advances**, **Enter selects**. Ordinary Tab/Enter remain available when switch mode is off. Browser Access can capture alternative keys and reset them. Native Access → More access → Input keys cycles Space, Enter, Control or Shift. Held switch keys do not repeatedly select; standard controller edges are also debounced. Keep browser screen-reader command keys free unless a caregiver deliberately chooses them. Text-entry fields do not consume switch keys in the browser.

## Files

- `prototype/src/access.js`: validated preferences, AAC action definitions, scan wrapping, controller commands/edges, optional haptic requests and offline helper selection.
- `prototype/src/access-ui.js`: browser communication board, semantic access UI, keyboard scanning/remapping, standard controller polling, captions/notices and helper/destination hooks.
- Browser `main.js`, `index.html`, `style.css`, build script and regenerated `game.js`: integration, honest save results, speech captions, named dialogs and controls.
- Native `src/access.js`, `gameplay.js`, `profile.js`, build script and regenerated `game.json`: corresponding native actions, scanning, controller polling, preferences and feedback objects.
- `gdevelop/scripts/display-assets.mjs` and `assets/dim-scenery.png`: original dimming overlay. Native caption/notice objects reuse existing UI assets.

Build with `node prototype/scripts/build.mjs` and `node gdevelop/build.mjs`.

## Automated verification

41 shared Node tests pass, including AAC action semantics, validated preferences, scan wrap, controller edges, haptic opt-in/failure fallback and helper suggestions. Browser mouse/touch tests cover local AAC requests, pause/resume, dimming, mute, actual successful and blocked saving, scanning, key remapping, mocked controller connection/held input, named dialog accessibility tree and reload persistence. Existing core gameplay and PIP mouse/touch flows pass after adding the controls. The native API harness checks AAC effects, saved access settings, one/two-switch behavior and existing gameplay.

Commands: `node --test prototype/tests/*.test.js`, `node gdevelop/tests/native.cjs`, `node prototype/tests/access-browser.cjs`, `node prototype/tests/browser.cjs`, `node prototype/tests/pip-browser.cjs`. Browser tests require Playwright and Chromium. These checks simulate access inputs; they do not establish compatibility with real assistive hardware, JAWS, native GDevelop rendering or physical iPad use.

Next milestone: guided setup and testing with a child/caregiver and actual switch, trackball, Xbox Adaptive Controller and screen-reader equipment. Then improve row/column scanning for large construction grids, configurable AAC vocabulary/caregiver names and accessible guided stories. Real AI assistance and human-speech captioning remain separate future integrations.
