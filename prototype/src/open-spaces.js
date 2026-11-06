import {techWorlds,techObjects,techDoors,techBackdrop} from './hq-tech.js';
import {machineWorlds,machineObjects,machineYardSvg} from './machines.js';
import {elevatorWorld,elevatorObjects,elevatorExtras,elevatorBackdrop} from './elevator.js';
import {chapterWorlds,chapterSites,chapterExtras} from './adventures.js';
// Large, connected training landscapes. Coordinates/model layers are not real-world scale.
export const openSpaces={...techWorlds,...machineWorlds,...elevatorWorld,...chapterWorlds,magnetism:{name:'Magnetism Lab',width:1000,height:600,color:'#d2e5df',spawn:[180,460]},flight:{name:'Open Flight Range',width:2400,height:1200,color:'#76bfd4',spawn:[180,400]},forest:{name:'Forest Exploration',width:2400,height:1200,color:'#a6cb8b',spawn:[180,400]},diglands:{name:'Open Dig Landscape',width:2400,height:1600,color:'#91725e',spawn:[180,200]}};
const site=(zone,id,x,y,icon,name,text,extra={})=>({zone,id:zone+'-'+id,x,y,icon,name,text,diagram:icon,kind:'inspect',...extra});
export const openSpaceObjects=Object.entries(openSpaces).flatMap(([zone,z])=>[
 site(zone,'exit',140,zone==='diglands'?180:zone==='magnetism'?460:400,zone==='machineyard'?'🏗️':zone==='chapterMoon'?'🌍':'🏠',z.tech?'Return to HQ':zone==='machineyard'?'Engineering bay':zone==='chapterMoon'?'Earth site':'Return to home hub','The home hub is always available.',{kind:'portal',to:z.tech?'hq':zone==='machineyard'?'engineering':zone==='chapterMoon'?'chapterEarth':'grounds'}),
 ...(z.tech?[...techObjects,...techDoors].filter(o=>o.zone===zone):zone==='machineyard'?machineObjects.filter(o=>o.zone===zone):zone==='elevator'?elevatorObjects:chapterWorlds[zone]?[...chapterSites.filter(o=>o.zone===zone),...chapterExtras.filter(o=>o.zone===zone),...elevatorExtras.filter(o=>o.zone===zone)]:zone==='magnetism'?[
 site(zone,'poles',300,200,'🧲','Push and pull','Test which ends pull together.',{kind:'magnetlab',experiment:'poles'}),
 site(zone,'materials',700,200,'🔎','Material detective','Test iron, wood, copper and aluminium.',{kind:'magnetlab',experiment:'materials'}),
 site(zone,'coil',350,400,'⚡','Coil lab','Use a coil and a virtual electric circuit.',{kind:'magnetlab',experiment:'coil'}),
 site(zone,'generator',750,400,'💡','Generator','Turn motion into a voltage pulse.',{kind:'magnetlab',experiment:'generator'})
 ]:zone==='flight'?[
 site(zone,'pad',430,420,'🛬','Landing pad','Your astronaut lands automatically at this training pad. You can fly again by choosing any destination.'),
 site(zone,'cloud',820,280,'☁️','Cloud lookout','Clouds contain tiny water droplets or ice crystals. This flight range is an atmospheric training model.'),
 site(zone,'windsock',1250,400,'🎏','Wind station','A windsock helps show wind direction. This marker explains wind; it does not simulate actual wind forces.'),
 site(zone,'balloon',1800,240,'🎈','Balloon observation','An ordinary balloon can float when the surrounding air provides enough buoyant force. It does not float this way in vacuum.'),
 site(zone,'high',2050,800,'🔭','High lookout','The sky looks different from space. Wings and ordinary parachutes need an atmosphere; reaction thrust can work in vacuum.'),
 site(zone,'return-pad',650,900,'🛬','Lower landing pad','Rest, pause or take another flight. No fuel or oxygen timer is used in this training range.')
 ]:zone==='forest'?[
 site(zone,'oak',460,400,'🌳','Oak grove','An acorn is an oak seed. Trees provide shelter and interact with soil, water and other organisms.',{seed:'oak',seedOrigin:'forest'}),
 site(zone,'hollow',800,450,'🪵','Tree hollow','A hollow tree can provide shelter. Observe animals without disturbing their homes.'),
 site(zone,'bridge',1100,600,'🌉','Stream bridge','This bridge provides a route across the stream. Water moves sediment and connects habitats.'),
 site(zone,'pollinator',1500,360,'🦋','Pollinator clearing','Some flower-visiting animals move pollen between flowers. Many plants depend on this relationship.'),
 site(zone,'fern',1900,650,'🌿','Fern corner','Ferns reproduce using spores rather than flowers and seeds. Plants have different life cycles.'),
 site(zone,'pine',2100,950,'🌲','Pine lookout','Conifers produce seeds in cones. This is a mixed training landscape, not a map of one real forest ecosystem.'),
 site(zone,'soil',500,900,'🍂','Forest floor','Fallen leaves and decomposers help recycle nutrients. Soil contains mineral material, organic matter, air and water.')
 ]:[
 site(zone,'quartz',500,350,'💎','Quartz pocket','Quartz is a mineral. Observe crystal shapes and keep a reusable sample record.',{kind:'openfind',find:'quartz'}),
 site(zone,'fossil',1000,470,'🐚','Fossil layer','Fossils preserve evidence of past life. They are observations, not construction supplies.',{kind:'openfind',find:'fossil'}),
 site(zone,'iron',1650,550,'🧲','Iron-bearing pocket','Some iron-bearing minerals, such as magnetite, are magnetic. Not all iron-bearing minerals are.',{kind:'openfind',find:'iron'}),
 site(zone,'cavern',650,1000,'🦇','Deep cavern','Some cave animals use sound, touch or chemical signals in darkness. Not all cave animals are blind.'),
 site(zone,'water',1300,1150,'💧','Groundwater window','Groundwater occupies connected pores and cracks. This blue area is a cutaway model, not a route into real floodwater.'),
 site(zone,'basalt',2000,1350,'⬛','Basalt outcrop','Basalt often forms when lava cools. These model depths are not actual Earth depths.',{kind:'openfind',find:'basalt'}),
 site(zone,'lift',2100,800,'🛗','Return lift','Choose the home-hub control to return directly. You never need to retrace every tunnel.',{kind:'openlift'})
 ])
]);
export const openSpacePortals=[{id:'grounds-flight',zone:'grounds',x:950,y:140,icon:'🚀',name:'Flight range',kind:'portal',to:'flight'},{id:'grounds-forest',zone:'grounds',x:150,y:340,icon:'🌳',name:'Forest',kind:'portal',to:'forest'},{id:'grounds-open-dig',zone:'grounds',x:620,y:480,icon:'⛏️',name:'Open dig landscape',kind:'portal',to:'diglands'}];
export function openBlocked(x,y,zone){const z=openSpaces[zone];if(!z)return false;if(x<1||y<3||x>=z.width/40-1||y>=z.height/40-2)return true;return zone==='forest'&&x>=26&&x<=28&&!(y>=14&&y<=16);}
export function spaceCamera(zone,point){const z=openSpaces[zone];return z?[Math.max(0,Math.min(z.width-1000,point[0]-500)),Math.max(0,Math.min(z.height-600,point[1]-300))]:[0,0];}
export function normalizeOpenProgress(raw={}){return {cleared:[...new Set((Array.isArray(raw?.cleared)?raw.cleared:[]).filter(k=>typeof k==='string'&&/^\d+,\d+$/.test(k)&&(()=>{const [x,y]=k.split(',').map(Number);return !openBlocked(x,y,'diglands')})()))].slice(0,2400)};}
export function clearOpenGround(progress,x,y){const cell=Math.floor(x/40)+','+Math.floor(y/40);if(!openBlocked(Math.floor(x/40),Math.floor(y/40),'diglands')&&!progress.cleared.includes(cell))progress.cleared.push(cell);}
export function openSpaceSvg(zone){if(techWorlds[zone])return techBackdrop(zone);if(zone==='machineyard')return machineYardSvg();if(zone==='elevator')return elevatorBackdrop(0);const z=openSpaces[zone];let s=`<svg xmlns="http://www.w3.org/2000/svg" width="${z.width/2}" height="${z.height/2}" viewBox="0 0 ${z.width} ${z.height}"><rect width="${z.width}" height="${z.height}" fill="${z.color}"/>`;
if(chapterWorlds[zone]){for(let y=120;y<960;y+=40)for(let x=40;x<1560;x+=40)s+=`<rect x="${x}" y="${y}" width="39" height="39" fill="${zone==='chapterEarth'?(y<400?'#b49974':'#8d7569'):(y<400?'#8e96a5':'#636c83')}"/>`;s+='<rect x="40" y="120" width="220" height="120" fill="#203440"/>';for(const [x,y]of [[600,240],[1120,600]])s+=`<ellipse cx="${x}" cy="${y}" rx="130" ry="75" fill="#203440"/>`;}
if(zone==='magnetism'){s+='<path d="M70 120h860v380H70z" fill="#edf4df" stroke="#6d9696" stroke-width="8"/>';for(const [x,y]of [[300,200],[700,200],[350,400],[750,400]])s+=`<rect x="${x-115}" y="${y-60}" width="230" height="110" rx="14" fill="#aac5cd" stroke="#436679" stroke-width="4"/><path d="M${x-90} ${y-45}h180" stroke="#35d3c9" stroke-width="5"/>`;}
if(zone==='flight'){for(let i=0;i<24;i++){const x=100+(i*347)%2200,y=160+(i*163)%900;s+=`<ellipse cx="${x}" cy="${y}" rx="80" ry="25" fill="#e7f3ee" opacity=".6"/>`;}for(const [x,y]of [[430,420],[650,900]])s+=`<rect x="${x-110}" y="${y+40}" width="220" height="20" rx="8" fill="#c4ced8"/><path d="M${x-70} ${y+45}h140" stroke="#35d3c9" stroke-width="5"/>`;}
if(zone==='forest'){s+='<path d="M1040 0h120v1200h-120z" fill="#518eae"/><rect x="1020" y="560" width="160" height="120" fill="#bc9c70"/>';for(let i=0;i<70;i++){const x=80+(i*317)%2200,y=130+(i*199)%950;if(x>980&&x<1200)continue;s+=`<rect x="${x-8}" y="${y}" width="16" height="65" fill="#8a7056"/><circle cx="${x}" cy="${y}" r="43" fill="${i%2?'#558554':'#719c65'}" opacity=".65"/>`;}s+='<path d="M130 400Q450 600 850 450L1100 600l400-240 400 290" stroke="#d6c59c" stroke-width="50" fill="none"/>';}
if(zone==='diglands'){for(let y=120;y<1600;y+=40)for(let x=40;x<2360;x+=40)s+=`<rect x="${x}" y="${y}" width="39" height="39" fill="${y<480?'#b69b76':y<960?'#8f7569':'#68707d'}"/>`;s+='<rect x="40" y="120" width="220" height="120" fill="#203440"/>';}
for(const o of openSpaceObjects.filter(o=>o.zone===zone&&o.kind!=='portal'))s+=`<circle cx="${o.x}" cy="${o.y}" r="52" fill="#fffbed" opacity=".35"/>`;
return s+'</svg>';}
