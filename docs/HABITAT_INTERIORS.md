# Habitat interiors and decorating

Visit a placed habitat in an exploration world or My World colony. Choose **Enter / decorate my room** at its door. Each habitat has a saved, single-room interior with six large placement spots, an astronaut/PIP presence, and two obvious exits: the pictured door and the footer Exit button.

Choose **Furniture**, tap an item, then tap a spot. The first room has a bed and PIP dock; the furniture list also includes a plant pot, science desk, discovery shelf and cozy cushion. Tap a placed item to move, put away or use it. Moving does not remove the original until a new spot is chosen. Replacing and putting away are free; Undo reverses a completed layout/color change. Undo during an unfinished selection cancels that selection instead. There is no dragging, precise placement, timer, score or purchase.

**Colors** offers Sky blue, Forest green, Warm sunset, Space purple and High contrast. Global high-contrast settings take precedence for presentation while retaining the child's chosen room color.

**Displays** offers collected minerals/fossils, owned plant seeds and encountered adventure memories. Unencountered items are not offered. Displays copy keepsakes; they never consume the actual samples, seeds or journal records. Fossils are included with samples but are not called minerals. Illustrations are schematic: the mineral stand, plant pot and framed memory use generic art with the correct selected name.

The bed pauses the game; PIP's room help offers Resume, and Exit also resumes safely. The science desk opens the discovery journal. The dock provides a quiet PIP-ready card with no battery timer or maintenance. Room plants are decorations with no real-time care requirement. Outdoor movement and generated-world physics wait while the room is open.

Room layouts/colors persist through reload, colony visits and moving the habitat. Packing does not delete the room: **My Machines → Show me how → My saved rooms** opens the archived room library. Archived room IDs are reserved to prevent a later machine from overwriting them. Each exploration/colony context retains up to 80 rooms, with six spots and 12 undo snapshots per room. Reload can return directly to an open room; unfinished placement selections are temporary. Existing habitat rest controls remain available outside the room.

Implementation: `prototype/src/habitat.js` contains normalization, reversible actions, menus, spot geometry and art. Browser presentation is in `prototype/src/main.js` and `prototype/style.css`; native presentation is `gdevelop/src/habitat.js`. Room state is part of the existing trail-machine profile, so My World save isolation is retained. `gdevelop/scripts/habitat-faculty-assets.mjs` generates the native room art and faculty portraits. Existing build scripts regenerate `prototype/game.js` and `gdevelop/game.json`.

Validation covers furniture replacement/moving/removal/undo, earned-only displays, themes, bed/dock/desk, archived room retention, reload, native controls and large exits. Browser tests use mouse and 1024×768 landscape touch input. Physical iPad, GDevelop editor/device and child/assistive-technology testing remain outstanding. Art is provisional; the interior is a decorating room, not a structural simulation or fully furnished multi-room house.
