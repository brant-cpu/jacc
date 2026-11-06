import {rocketLinks} from './rocket-lab.js';
import {techHQLinks} from './hq-tech.js';
import {machineObjects} from './machines.js';
import {elevatorExtras} from './elevator.js';
import {chapterExtras} from './adventures.js';
import {openSpaceObjects,openSpacePortals} from './open-spaces.js';
import {aquaticObjects} from './aquatic.js';
import {professorElonObjects,constructionStations,elevatorObject} from './construction.js';
import {digObjects,engineeringObjects} from './excavation.js';
import {farmObjects,wildSeedObjects} from './farm.js';
import {hqObjects} from './zones.js';
// Canonical names and specializations; visuals are temporary geometric placeholders.
export const roster=[['Alex Thompson','Red','Fleming Model — Electromagnetism'],['Malik Adeyemi','Green','Townes Model — Laser optics and computing'],['Maya Rodriguez','Pink','Allwood Model — Geology and chemistry'],['Aiden Williams','Yellow','Engineering Model — Construction and heavy engineering'],['Kaito Tanaka','White','Aeronautics Model — Flight and speed'],['Lucas Turner','Black','Lederberg Model — Biology and Xenobiology'],['Sumati Suri','Orange','Gadgil Model — Ecosystems and Environmental Science'],['Lilja Jónsdóttir','Purple','Mirzakhani Model — Mathematics'],['Chen Yuxin','Blue','Sagan Model — Astronomy and Astrophysics']];
export const materials=[
{id:'quartz',name:'Quartz',icon:'💎',diagram:'☀️ → 💎 → ✨',text:'Quartz is a mineral. Look at its crystal faces! Light can pass through some quartz.'},
{id:'iron',name:'Iron-bearing mineral',icon:'🪨',diagram:'🧲 → 🪨',text:'Some iron-bearing minerals, such as magnetite, are attracted to a magnet. Not all iron minerals are magnetic.'},
{id:'fossil',name:'Fossil',icon:'🐚',diagram:'🐚 → 🟫 → 🪨',text:'A fossil is a preserved trace or remain of ancient life. Layers of sediment can bury and preserve shells.'}];
export const trainingObjects=[
{id:'grounds-dig',x:570,y:140,icon:'⛏️',name:'Dig site',kind:'portal',to:'dig'},
{id:'grounds-home',x:120,y:150,icon:'🏠',name:'Home hub',kind:'home'},
{id:'grounds-farm',x:900,y:300,icon:'🌾',name:'Planet farm',kind:'portal',to:'farm'},
{id:'home',x:130,y:460,icon:'🏠',name:'HQ entrance',kind:'portal',to:'hq'},
{id:'plant',seed:'sunflower',seedOrigin:'hills',x:220,y:245,icon:'🌱',name:'Living plant',text:'Plants are living things. They need water and light to grow. This training sunflower has a sample seed for your seed bank.',diagram:'☀️ + 💧 → 🌱'},
{id:'rock',x:380,y:175,icon:'🪨',name:'Hill rock',text:'This rock is nonliving. Look at its shape and compare it with the plant.',diagram:'🌱 ≠ 🪨'},
{id:'dig',x:455,y:420,icon:'⛏️',name:'Sample tray',kind:'dig'},
{id:'magnet',x:710,y:410,icon:'🧲',name:'Magnetism Lab',kind:'portal',to:'magnetism',text:'Visit the Magnetism Lab. Test magnets, materials, circuits and generators.',diagram:'🧲 ← 🪨'},
{id:'crystal',x:815,y:180,icon:'💎',name:'Crystal lookout',text:'Look at the repeating shapes of crystals. This platform lets us observe from above.',diagram:'◇ ◇ ◇'},
{id:'bridge',x:830,y:480,icon:'🌉',name:'Engineering zone',kind:'portal',to:'engineering',text:'A bridge supports a path across a gap. Tap-to-build activities come in a later phase.',diagram:'🟫 🌉 🟫'}];
export const modes={exploration:{phase:1,status:'playable'},geology:{phase:1,status:'playable'},lab:{phase:2,status:'magnetism-playable'},engineering:{phase:2,status:'planned'},ocean:{phase:3,status:'planned'},flight:{phase:3,status:'planned'},pip:{phase:1,status:'basic'}};

// Temporary suit-color placeholders; not production character designs.
// Shared material standard: primary suit colors remain distinct. Hex values are configurable placeholder swatches.
export const suitFinish={metal:{name:'Silver',color:'#c4ced8'},energy:{name:'Teal',color:'#35d3c9'}};
export const suitColors={Red:'#cf4348',Green:'#38864a',Pink:'#d76a9d',Yellow:'#edc74d',White:'#f2f2e8',Black:'#303842',Orange:'#d96b24',Purple:'#8653b6',Blue:'#347ec5'};

export const objects=[...rocketLinks.filter(o=>o.zone!=='rocketlab'),...machineObjects.filter(o=>o.zone==='engineering'),...elevatorExtras.filter(o=>o.zone!=='chapterMoon'),...chapterExtras.filter(o=>!['chapterEarth','chapterMoon'].includes(o.zone)),...openSpaceObjects,...openSpacePortals,...trainingObjects.map(o=>({...o,zone:'grounds'})),...hqObjects,...techHQLinks,...farmObjects,...digObjects,...engineeringObjects,...professorElonObjects,...constructionStations,elevatorObject,...aquaticObjects,{id:'grounds-aquatic',zone:'grounds',x:680,y:280,icon:'🌊',name:'Aquatic Learning Center',kind:'portal',to:'aquatic'},...wildSeedObjects];
