// Shared, first-person journal content for the browser and native GDevelop build.
export const journalSections=[
 {id:'did',title:'What I Did',icon:'👣',intro:'Things I tried.',empty:'Tap a picture to try an activity.',target:'plant'},
 {id:'found',title:'What I Discovered',icon:'🔎',intro:'Things I noticed and found.',empty:'My discoveries will go here. I can dig for a discovery.',target:'dig'},
 {id:'adventures',title:'My Adventures',icon:'🗺️',intro:'Places I explored.',empty:'My adventure starts with one tap.',target:'rock'},
 {id:'experiments',title:'My Experiments',icon:'🧲',intro:'Observe. Try. Discover.',empty:'Experiments are coming later. For now, I can look at the science stations.',target:'magnet'},
 {id:'minerals',title:'My Minerals',icon:'💎',intro:'Minerals I found in the soil.',empty:'I can dig to find a mineral.',target:'dig'}
];
export const journalActivities={
 'hq-map':['I looked at the star map.','A map helps me choose where to explore.'],
 'hq-bay':['I visited the arrival bay.','A clear landing area gives a craft room to arrive.'],
 'hq-lab':['I visited the science lab.','I can observe, compare and ask questions.'],
 'hq-pip':['I visited the PIP workbench.','Tools help us investigate.'],
 'hq-bunks':['I found a cozy place to rest.','I can take a break whenever I want.'],
 'hq-locker':['I visited the crew lockers.','Every crew member can explore.'],
 'hq-home':['I explored our welcome hub.','This is our home base.'],
 'hq-exit':['I went to the training grounds.','The path leads back to HQ.'],
 home:['I went back to HQ.','I can follow the path home.'],
 plant:['I looked at a plant.','Plants are living things.'],
 rock:['I explored the hill.','Rocks are nonliving things.'],
 dig:['I dug in the soil.','The soil has layers.'],
 magnet:['I visited the magnet station.','Some materials are attracted to magnets.'],
 crystal:['I climbed to the crystal lookout.','Crystals have repeating shapes.'],
 bridge:['I looked at a bridge.','A bridge supports a path across a gap.']
};
export function getJournalEntries(section,found,visited,objects,materials){
 const seen=new Set(visited);
 // Older browser saves only recorded discoveries. Preserve that history.
 for(const id of found)if(objects.some(o=>o.id===id))seen.add(id);
 if(materials.some(m=>found.has(m.id)))seen.add('dig');
 if(section==='experiments')return []; // Observation visits are not completed experiments.
 if(section==='found'||section==='minerals')return [...objects,...materials].filter(o=>found.has(o.id)&&(section!=='minerals'||['quartz','iron'].includes(o.id))).map(o=>({id:o.id,title:o.name,icon:o.icon,summary:section==='minerals'?'I found '+o.name.toLowerCase()+'.':'I discovered '+o.name.toLowerCase()+'.',fact:({quartz:'Quartz is a mineral with crystal faces.',iron:'Some iron-bearing minerals are attracted to magnets.',fossil:'A fossil is a trace or remain of ancient life.'})[o.id]||journalActivities[o.id]?.[1]||o.text,target:materials.includes(o)?'dig':o.id}));
 return objects.filter(o=>seen.has(o.id)&&(section!=='adventures'||(['home','plant','rock','crystal','bridge'].includes(o.id)||o.zone==='hq'))).map(o=>({id:o.id,title:journalActivities[o.id][0],icon:o.icon,summary:journalActivities[o.id][0],fact:journalActivities[o.id][1],target:o.id}));
}
