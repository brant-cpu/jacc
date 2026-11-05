# Planet Farm science references and review status

This prototype uses conventional botany, horticulture and energy concepts, with deliberately simplified, repeatable models. It has **not** received external scientific approval. Content was authored from established subject knowledge; live verification against the reference pages below is **pending**. On 2026-11-05, the managed network returned HTTP 403 CONNECT denials for the university extension, USGS and Department of Energy sites. No page text was retrieved or used as a quotation. The additional research hosts were saved in the environment draft; saving does not apply/publish network changes.

Review and save the research-domain additions in environment settings, then publish the environment to apply them. After access changes, retry the references and correct any moved links or content discrepancies. Do not describe this document as evidence that those pages were read or that an institution approved the game.

| Content | Authoritative reference for verification | Specific review points |
| --- | --- | --- |
| Hydroponics, nutrients, oxygen, light and managed water | University of Minnesota Extension: https://extension.umn.edu/planting-and-growing-guides/gardening-hydroponics | Plants grown without soil still require nutrients, water, root oxygen and light. Systems vary; a decorative loop is not a complete growing recipe. |
| Plant biology, seeds, germination, leaves and flowers | Oregon State University Extension, botany basics: https://extension.oregonstate.edu/gardening/techniques/botany-basics | Germination needs vary by species. Roots absorb water/mineral nutrients; leaves make sugars rather than absorbing food from soil. |
| Pollination | USDA Forest Service, pollinators: https://www.fs.usda.gov/wildflowers/pollinators/what-is-pollination.shtml | Pollination transfers pollen to receptive structures. Fertilization is a later event. Wind and self-pollination also matter. |
| Chlorophyll and photosynthesis | USDA Forest Service, leaves: https://www.fs.usda.gov/wildflowers/beauty/seasonals/fall/leaves.shtml | Chlorophyll absorbs light. Photosynthesis uses water and carbon dioxide, producing sugars and releasing oxygen. A leaf does not produce electricity like a photovoltaic panel. |
| Water cycle, evaporation, condensation, precipitation and transpiration | USGS Water Science School: https://www.usgs.gov/special-topics/water-science-school/science/water-cycle | The water cycle has multiple routes and storage places; water vapor is invisible. The four/five-picture loop is a teaching model. |
| Solar, wind and hydropower | US Department of Energy: https://www.energy.gov/eere/renewable-energy | Energy is converted, not created from nothing. Hydropower needs an energy supply such as flowing/falling water; pumping in a loop consumes energy. |
| Crop selection and seed storage | University extension horticulture resources on the hosts above | Some seeds tolerate drying and cold storage, others do not. Stored game samples do not represent a universal real-world seed-storage method. |

## Plant computer

The 15 entries are familiar teaching examples, **not a ranking of worldwide abundance**: bean, tomato, carrot, lettuce, sunflower, French marigold, apple, sweet orange, English oak, almond, wheat, rice, pea, garden strawberry and red maple. Common botanical names are stored in `prototype/src/farm.js`; taxonomy and cultivar exceptions require review. These entries were curated rather than scraped from the internet. Art is original schematic placeholder art and emoji, not botanical identification imagery.

The categories overlap intentionally. Tomato is a botanical fruit used as a culinary vegetable. Peas and beans are seeds. Grains are dry fruits with a closely joined seed. An almond is an edible seed commonly called a nut; an acorn is a botanical nut. Sunflower snacks and strawberry surface structures involve dry fruits. The game does not teach that every crop produces a harvest or viable seeds after a fixed number of taps.

## Model boundaries

- Growth is an accelerated flowering-plant sequence. Carrots and other biennials may flower in another season; species differ. No timed waiting, dead plants, resource costs, weather penalties or yield predictions exist.
- Greenhouse shade and ventilation change a qualitative model. No real temperatures, humidity setpoints, crop prescriptions, fertilizer doses or pesticide instructions are supplied.
- Screened irrigation water is not automatically safe. Further treatment and checks may be needed; reused farm water is not represented as drinking water.
- Leaf zoom is a schematic progression (leaf, cells, chloroplasts, chlorophyll). No live microscope images, physical magnification scale, laboratory measurements or generative AI identification are claimed.
- Robot assistance is a scripted demonstration. Actual farming needs human oversight, species knowledge and suitable equipment.
- Seeds are virtual sample keepsakes collected from trays. This is not a guide to foraging or eating real plants.

Before a public educational release, complete source verification, science-editor review and testing of comprehension with children. The source-access block does not prevent running the offline prototype, but it prevents claiming completed live reference verification.
