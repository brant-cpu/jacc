import {normalizeTech,techActivities,techHQLinks} from './hq-tech.js';
import {machineObjects,machineName,normalizeMachines} from './machines.js';
import {elevatorExtras,elevatorDecks,normalizeElevator} from './elevator.js';
import {chapterExtras,chapterFlags,chapterSites,normalizeChapter} from './adventures.js';
import {magnetExperiments} from './magnetism.js';
import {openSpaceObjects,openSpacePortals} from './open-spaces.js';
import {aquaticObjects,aquaticLife,aquaticSamples,normalizeAquatic} from './aquatic.js';
import {professorElonObjects,constructionStations,elevatorObject,normalizeConstruction,constructionProjects} from './construction.js';
import {digFinds,digObjects,engineeringObjects} from './excavation.js';
import {gardenBeds} from './garden.js';
import {farmPlants,farmStations,wildSeedObjects,farmExperiments,normalizeFarm} from './farm.js';
// Shared, first-person journal content for the browser and native GDevelop build.
export const journalSections=[
 {id:'did',title:'What I Did',icon:'👣',intro:'Things I tried.',empty:'Tap a picture to try an activity.',target:'plant'},
 {id:'found',title:'What I Discovered',icon:'🔎',intro:'Things I noticed and found.',empty:'My discoveries will go here. I can dig for a discovery.',target:'dig'},
 {id:'adventures',title:'My Adventures',icon:'🗺️',intro:'Places I explored.',empty:'My adventure starts with one tap.',target:'rock'},
 {id:'experiments',title:'My Experiments',icon:'🧲',intro:'Observe. Try. Discover.',empty:'My experiments will go here. I can try an activity at the farm.',target:'farm-garden'},
 {id:'minerals',title:'My Minerals',icon:'💎',intro:'Minerals I found in the soil.',empty:'I can dig to find a mineral.',target:'dig'}
];
export const journalActivities={
 'grounds-home':['I returned to our home hub.','The training grounds connect our adventures.'],
 'grounds-farm':['I explored the planet farm.','The training grounds lead to the farm.'],
 'hq-farm':['I visited the planet farm.','We can grow, observe and collect.'],
 'farm-exit':['I returned from the farm.','The training grounds connect our adventures.'],
 'hq-map':['I looked at the star map.','A map helps me choose where to explore.'],
 'hq-bay':['I visited the arrival bay.','A clear landing area gives a craft room to arrive.'],
 'hq-lab':['I visited the science lab.','I can observe, compare and ask questions.'],
 'hq-pip':['I visited the PIP workbench.','Tools help us investigate.'],
 'hq-bunks':['I found a cozy place to rest.','I can take a break whenever I want.'],
 'hq-locker':['I visited the crew lockers.','Every crew member can explore.'],
 'hq-home':['I explored our welcome hub.','The training grounds are our home hub.'],
 'hq-exit':['I went to the training grounds.','The path leads back to HQ.'],
 home:['I went back to HQ.','I can follow the path home.'],
 plant:['I looked at a plant.','Plants are living things.'],
 rock:['I explored the hill.','Rocks are nonliving things.'],
 dig:['I dug in the soil.','The soil has layers.'],
 magnet:['I visited the magnet station.','Some materials are attracted to magnets.'],
 crystal:['I climbed to the crystal lookout.','Crystals have repeating shapes.'],
 bridge:['I looked at a bridge.','A bridge supports a path across a gap.']
};
for(const o of [...techHQLinks,...machineObjects,...elevatorExtras,...chapterExtras,...openSpaceObjects,...openSpacePortals,...aquaticObjects,...professorElonObjects,...constructionStations,elevatorObject,...digObjects,...engineeringObjects])journalActivities[o.id]=['I explored '+o.name.toLowerCase()+'.','I can return and investigate again.'];
journalActivities['grounds-aquatic']=['I explored the Aquatic Learning Center.','Our home lake connects to protected ocean simulations.'];
journalActivities['grounds-dig']=['I explored the dig site.','Earth materials and cave habitats tell different stories.'];
for(const s of [...farmStations,...gardenBeds,...wildSeedObjects.map(o=>({...o,fact:o.text}))])journalActivities[s.id]=['I visited the '+s.name.toLowerCase()+'.',s.fact];
export function getJournalEntries(section,found,visited,objects,materials,farm={},construction={},aquatic={},chapter={},elevator={},machines={},tech={}){
 const aquaState=normalizeAquatic(aquatic);
 const farmState=normalizeFarm(farm),buildState=normalizeConstruction(construction);
 const seen=new Set(visited);const garage=normalizeMachines(machines);if(section==='did'&&garage.models.length)return garage.models.map(m=>({id:'machine-'+m.id,title:'I built '+machineName(m)+'.',icon:'🛠️',summary:'I chose modules, assembled them and saved my machine.',fact:'This compatible model can be repaired, copied and deployed.',target:'yard-my-machines',machineId:m.id})).concat(getJournalEntries(section,found,visited,objects,materials,farm,construction,aquatic,chapter,elevator));
 const story=normalizeChapter(chapter);const chapterEntries=chapterSites.filter(o=>story[o.page]).map(o=>({id:'story-'+o.page,title:'Moonbase Dig: '+o.name,icon:o.icon,summary:o.page==='finished'?'I protected the research site and stopped the harvesting.':'I tried '+o.name.toLowerCase()+' in Moonbase Dig.',fact:'A replayable story chapter. Nymions and their energy crystals are fictional.',target:o.id}));
 const lift=normalizeElevator(elevator);const liftEntries=elevatorDecks.filter((d,i)=>lift.rescued[i]).map(d=>({id:'elevator-story-'+elevatorDecks.indexOf(d),title:'Space Elevator: '+d.name,icon:'🛗',summary:d.rescue,fact:d.success,target:'elevator-system',elevatorDeck:elevatorDecks.indexOf(d)}));if(lift.resolved)liftEntries.push({id:'elevator-finale',title:'Space Elevator: Everyone safe',icon:'🌙',summary:'We freed Professor Elon and interrupted Zuglu’s hammer.',fact:'Nymlord and Zuglu escaped in the tick ship. The signal leads to the Moon.',target:'elevator-system',elevatorDeck:6});
 if(section==='adventures'&&(chapterEntries.length||liftEntries.length))return liftEntries.concat(chapterEntries).concat(getJournalEntries(section,found,visited,objects,materials,farm,construction,aquatic));
 // Older browser saves only recorded discoveries. Preserve that history.
 for(const id of found)if(objects.some(o=>o.id===id))seen.add(id);
 if(materials.some(m=>found.has(m.id)))seen.add('dig');
 if(section==='experiments'&&normalizeTech(tech).completed.length)return normalizeTech(tech).completed.map(id=>({id:'tech-'+id,title:techActivities[id][0],summary:techActivities[id][0],fact:'I can change the model and try it again. People check what computers do.',icon:'💻',target:techActivities[id][1]})).concat(getJournalEntries(section,found,visited,objects,materials,farm,construction,aquatic,chapter,elevator,machines));
 if(section==='experiments')return farmState.garden.grown.map(id=>({id:'garden-grown-'+id,title:'I grew '+farmPlants.find(p=>p.id===id).name+'.',summary:'I planted a seed, watered it and returned to see it grow.',fact:'This is a sped-up garden model. Real plants take different amounts of time to grow.',icon:farmPlants.find(p=>p.id===id).icon,target:'farm-garden'})).concat(Object.entries(magnetExperiments).filter(([id])=>seen.has('magnet-trial-'+id)).map(([id,e])=>({id:'magnet-trial-'+id,title:'I tried: '+e.name,summary:'I changed a choice and observed the result.',fact:e.fact,icon:e.icon,target:'magnetism-'+id}))).concat(farmState.experiments.map(id=>({id:'experiment-'+id,title:farmExperiments[id][0],summary:farmExperiments[id][0],fact:'I can repeat this model and try a different choice.',icon:'🔬',target:farmExperiments[id][1]}))).concat(buildState.completed.map(id=>({id:'build-'+id,title:'I tried: '+constructionProjects[id].name,summary:'I built and tested a construction model.',fact:'I can change the design and try it again.',icon:'🏗️',target:'yard-build'}))).concat(aquaState.completed.map(id=>({id:'aquatic-'+id,title:'I tried aquatic science: '+id,summary:'I explored an underwater model.',fact:'I can change the model and repeat.',icon:'🌊',target:'aqua-science'}))); // Observation visits are not completed experiments.
 if(section==='found'||section==='minerals')return [...objects,...materials,...digFinds.filter(f=>!materials.some(m=>m.id===f.id))].filter(o=>found.has(o.id)&&(section!=='minerals'||['quartz','iron','amethyst','calcite'].includes(o.id))).map(o=>({id:o.id,title:o.name,icon:o.icon,summary:section==='minerals'?'I found '+o.name.toLowerCase()+'.':'I discovered '+o.name.toLowerCase()+'.',fact:({quartz:'Quartz is a mineral with crystal faces.',iron:'Some iron-bearing minerals are attracted to magnets.',fossil:'A fossil is a trace or remain of ancient life.'})[o.id]||journalActivities[o.id]?.[1]||o.text,target:digFinds.some(f=>f.id===o.id)?'dig-'+o.id:o.id})).concat(section==='found'?farmPlants.filter(p=>farmState.seeds.includes(p.id)).map(p=>({id:'seed-'+p.id,title:p.name+' seed',icon:p.icon,summary:'I collected a '+p.name.toLowerCase()+' sample seed.',fact:p.fact,target:'farm-bank'})):[]).concat(section==='found'?[...aquaticLife.filter(a=>aquaState.observed.includes(a.id)).map(a=>({id:'observation-'+a.id,title:a.name,icon:a.icon,summary:'I observed '+a.name.toLowerCase()+'.',fact:a.text,target:'aqua-'+a.id})),...aquaticSamples.filter(a=>aquaState.samples.includes(a.id)).map(a=>({id:'aquatic-sample-'+a.id,title:a.name,icon:a.icon,summary:'I saved a '+a.name.toLowerCase()+' record.',fact:a.fact,target:'aqua-water'}))]:[]);
 return objects.filter(o=>seen.has(o.id)&&(section!=='adventures'||(['home','plant','rock','crystal','bridge'].includes(o.id)||o.zone==='hq'||o.zone==='farm'||o.zone==='dig'||o.zone==='engineering'||o.zone==='aquatic'||['elevator','chapterEarth','chapterMoon','magnetism','flight','forest','diglands'].includes(o.zone)))).map(o=>({id:o.id,title:journalActivities[o.id][0],icon:o.icon,summary:journalActivities[o.id][0],fact:journalActivities[o.id][1],target:o.id}));
}
