// Side-view training model. Distances, rock layers and supported tunnels are not to scale.
export const digFinds=[
 {id:'quartz',name:'Quartz',icon:'💎',text:'Quartz is a mineral made of silicon and oxygen. Crystal faces can form when there is room to grow.',diagram:'SiO₂ • repeating crystal',x:300,y:260},
 {id:'iron',name:'Iron-bearing mineral',icon:'🪨',text:'Magnetite is an example of an iron-bearing mineral. It is attracted to magnets. Other iron minerals can behave differently.',diagram:'🧲 ← 🪨',x:740,y:340},
 {id:'fossil',name:'Fossil',icon:'🐚',text:'A fossil is a preserved remain or trace of ancient life. Many fossils are found in sedimentary rocks.',diagram:'🐚 → sediment → rock',x:460,y:300},
 {id:'amethyst',name:'Amethyst',icon:'🟣',text:'Amethyst is a purple variety of quartz. A gem is a material valued for uses such as jewelry; it is not a separate class of mineral.',diagram:'quartz → purple amethyst',x:860,y:420},
 {id:'calcite',name:'Calcite',icon:'◇',text:'Calcite is a mineral made of calcium carbonate. It can be deposited by dripping cave water.',diagram:'CaCO₃',x:220,y:420},
 {id:'granite',name:'Granite',icon:'🪨',text:'Granite is a rock made of several minerals, often including quartz and feldspar. It forms as magma cools slowly underground.',diagram:'minerals + minerals → rock',x:620,y:260},
 {id:'basalt',name:'Basalt',icon:'⬛',text:'Basalt is an igneous rock. It often forms as lava cools at or near the surface.',diagram:'lava → cooling → basalt',x:620,y:460}
];
export const digLessons={
 layers:{title:'Earth layers',text:'Soil can cover weathered material and rock. Real layers vary from place to place. Our striped training section is a simplified model.',visual:'soil → rock → deep Earth'},
 life:{title:'Life in dark caves',text:'Some cave fish and salamanders have reduced eyes or pigment. Not all cave animals are blind. We observe living things without digging into them.',visual:'🐟  dark cave  🦎'},
 pigment:{title:'Pigment and albinism',text:'Pigment gives living things color. Albinism reduces or prevents melanin production. Pale cave animals are not all albino: reduced pigmentation can have different causes.',visual:'color varies • traits vary'},
 echo:{title:'Echolocation',text:'Many bats make sounds and listen for returning echoes. Echoes help them sense nearby objects. Bats are not all blind; many use vision too.',visual:'🦇 → sound → wall → echo'},
 formations:{title:'Stalactites and stalagmites',text:'Stalactites hang from ceilings. Stalagmites grow upward from floors. Dripping water can leave minerals such as calcite. Real growth is often very slow.',visual:'ceiling ↓     ↑ floor'},
 groundwater:{title:'The water table',text:'The water table marks the top of a saturated groundwater zone. Water fills connected pores and cracks. It is not always an underground lake. Rain can recharge groundwater.',visual:'rain ↓ pores ↓ saturated rock'},
 magma:{title:'Magma and lava',text:'Molten rock underground is magma. At the surface it is called lava. Magma can collect in the crust; the mantle is not a giant ocean of lava. This is a protected model window.',visual:'magma underground → lava at surface'},
 mantle:{title:'Deep Earth cutaway',text:'The mantle is mostly solid rock that can deform over very long times. It lies far deeper than ordinary caves. PIP shows a model here: we are not actually drilling into the mantle.',visual:'crust → mantle → outer core → inner core'}
};
export const digObjects=[
 {id:'dig-exit',x:100,y:180,name:'Home hub',icon:'🏠',kind:'portal',to:'grounds',level:0},
 {id:'dig-tools',x:840,y:180,name:'Digging tools',icon:'🛠️',kind:'digtools',level:0},
 ...digFinds.map(f=>({...f,id:'dig-'+f.id,find:f.id,kind:'digfind',level:0})),
 {id:'dig-deeper',x:940,y:500,name:'Deep caverns',icon:'🕳️',kind:'diglevel',nextLevel:1,level:0},
 {id:'dig-layers',x:460,y:180,name:'Earth layers',icon:'▤',kind:'diglesson',lesson:'layers',level:0},
 {id:'cave-up',x:100,y:180,name:'Upper dig site',icon:'⬆️',kind:'diglevel',nextLevel:0,level:1},
 {id:'cave-life',x:300,y:260,name:'Cave life',icon:'🐟',kind:'diglesson',lesson:'life',level:1},
 {id:'cave-pigment',x:500,y:260,name:'Pigment',icon:'🦎',kind:'diglesson',lesson:'pigment',level:1},
 {id:'cave-echo',x:740,y:260,name:'Echo lab',icon:'🦇',kind:'diglesson',lesson:'echo',level:1},
 {id:'cave-formations',x:300,y:420,name:'Cave formations',icon:'♧',kind:'diglesson',lesson:'formations',level:1},
 {id:'cave-water',x:500,y:420,name:'Water table',icon:'💧',kind:'diglesson',lesson:'groundwater',level:1},
 {id:'cave-lava',x:740,y:420,name:'Magma window',icon:'🌋',kind:'diglesson',lesson:'magma',level:1},
 {id:'cave-mantle',x:900,y:340,name:'Deep Earth model',icon:'🌍',kind:'diglesson',lesson:'mantle',level:1}
].map(o=>({...o,zone:'dig'}));
export function digCell(x,y){return [Math.max(1,Math.min(23,Math.floor(x/40))),Math.max(4,Math.min(12,Math.floor(y/40)))];}
export function digBlocked(x,y,level=0){return x<1||x>23||y<4||y>12||(level===1&&y===12&&x>=17&&x<=22);}
export function initialDigOpen(x,y,level){return y===4||(level===1&&x>=3&&x<=14&&y>=8);}
export function defaultDig(){return {level:0,tool:'drill',hints:false,cleared:[[],[]],path:[],target:null,progress:0,ping:0,water:0,formation:0};}
export function normalizeDig(raw={}){const s=defaultDig();if(!raw||typeof raw!=='object')return s;for(const k of ['ping','water','formation'])if(raw[k]===1)s[k]=1;if(raw.level===1)s.level=1;if(['drill','scoop','arms'].includes(raw.tool))s.tool=raw.tool;s.hints=raw.hints===true;for(let l=0;l<2;l++)s.cleared[l]=[...new Set((Array.isArray(raw.cleared?.[l])?raw.cleared[l]:[]).filter(k=>typeof k==='string'&&/^\d+,\d+$/.test(k)&&!digBlocked(...k.split(',').map(Number),l)))];return s;}
export function digSolid(s,x,y){return !initialDigOpen(x,y,s.level)&&!s.cleared[s.level].includes(x+','+y);}
export function digHard(x,y){return x>=17&&y>=7;}
export function digRoute(from,to,level=0){const a=digCell(...from),b=digCell(...to),key=p=>p.join(',');if(digBlocked(...b,level))return [];const q=[a],parent=new Map([[key(a),null]]);for(let i=0;i<q.length;i++){const p=q[i];if(key(p)===key(b)){const out=[];let n=p;while(parent.get(key(n))!==null){out.push(n);n=parent.get(key(n));}return out.reverse()}for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){const n=[p[0]+dx,p[1]+dy];if(digBlocked(...n,level)||parent.has(key(n)))continue;parent.set(key(n),p);q.push(n)}}return [];}
export function digDuration(s,x,y,crew){if(!digSolid(s,x,y))return .08;let n=digHard(x,y)?.8:.22;if(s.tool==='scoop'&&y<=6)n*=.65;if(s.tool==='drill'&&y>6)n*=.75;if(s.tool==='arms'&&digHard(x,y))n*=.7;return crew===3?n*.42:n;}
export function beginDig(s,from,to,target=null){s.path=digRoute(from,to,s.level);s.progress=0;s.target=target;return s.path.length>0||digCell(...from).join()===digCell(...to).join();}
export function tickDig(s,position,dt,crew){let arrived=null,found=null,changed=false;s.progress+=Math.min(dt,.1);if(s.path.length){const [x,y]=s.path[0];if(s.progress>=digDuration(s,x,y,crew)){s.progress=0;if(digSolid(s,x,y)){s.cleared[s.level].push(x+','+y);if(y>4&&digSolid(s,x,y-1))s.cleared[s.level].push(x+','+(y-1));changed=true}position=[x*40+20,y*40+20];s.path.shift();const f=digObjects.find(o=>o.level===s.level&&o.find&&digCell(o.x,o.y).join()===[x,y].join());if(f)found=f.find;}}if(!s.path.length&&s.target){arrived=s.target;s.target=null}return {position,arrived,found,changed};}
export function digVisible(s,o){if(o.level!==s.level)return false;if(!o.find||s.hints)return true;const [x,y]=digCell(o.x,o.y);return [[x,y],[x-1,y],[x+1,y],[x,y-1],[x,y+1]].some(([a,b])=>!digSolid(s,a,b));}
export function digView(s,page,crew=0){const action=(label,type,value)=>({label,type,value});if(page==='tools')return {title:'Digging tools',text:crew===3?'Aiden has drills, scoops and power arms. His heavy engineering rig breaks hard rock directly.':'Choose a tool. PIP automatically helps with the hardest rock. Every astronaut can explore.',art:'tools',actions:[action('⚙ Drill','tool','drill'),action('▱ Scoop','tool','scoop'),action('🦾 Power arms','tool','arms'),action('✨ Show finds','hints',true),action('↺ Reset tunnels','reset')]};const l=digLessons[page]||digLessons.layers;return {...l,art:page,actions:page==='echo'?[action('◉ Send ping','ping')]:page==='groundwater'?[action('🌧️ Rain / recharge','water')]:page==='formations'?[action('Ceiling / floor','formation')]:[]};}
export function digArt(page,s={}){let a='';if(page==='mantle'){a='<circle cx="160" cy="90" r="78" fill="#a68060"/><circle cx="160" cy="90" r="67" fill="#c77e4c"/><circle cx="160" cy="90" r="40" fill="#e5b45d"/><circle cx="160" cy="90" r="21" fill="#f7e1a4"/>';}
else if(page==='groundwater'){const y=s.water?65:100;a='<rect x="25" y="35" width="270" height="125" fill="#bfa98c"/>'+`<rect x="25" y="${y}" width="270" height="${160-y}" fill="#78b4c5"/>`;for(let x=40;x<285;x+=26)for(let y=48;y<150;y+=24)a+=`<circle cx="${x}" cy="${y}" r="5" fill="#74695c"/>`;}
else if(page==='formations')a='<path d="M25 40h270v16H25zM80 56l15 65 15-65M220 56l14 40 14-40M25 160h270v-15H25zM140 145l17-70 17 70M240 145l10-40 10 40" fill="#c9af86"/>';
else if(page==='echo'){a='<path d="M35 90l25-25 25 25-25 25z" fill="#8f9bac"/><path d="M280 30v120" stroke="#bfa98c" stroke-width="12"/>';for(let i=0;i<3;i++)a+=`<path d="M${100+i*50} 50q35 40 0 80" fill="none" stroke="${s.ping%2?'#f2d474':'#85cddd'}" stroke-width="5"/>`;}
else if(page==='life'||page==='pigment')a='<path d="M80 85q70-65 135 0-65 65-135 0l-35-30v60z" fill="#e9e6d5"/><path d="M230 130l45-10m-25-10 5 30" stroke="#d8cdb9" stroke-width="10"/>';
else if(page==='magma')a='<path d="M25 35h270v90H25z" fill="#827468"/><path d="M150 130l18-50 18-25" stroke="#eaa061" stroke-width="13"/><ellipse cx="155" cy="135" rx="80" ry="24" fill="#eaa061"/>';
else if(page==='tools')a='<rect x="35" y="60" width="65" height="55" rx="10" fill="#edc74d"/><path d="M100 70l45 18-45 18M175 55v65h50m20-65 25 40-25 30" fill="none" stroke="#7398a3" stroke-width="12"/>';
else a='<path d="M20 30h280v40H20z" fill="#b99a6e"/><path d="M20 70h280v40H20z" fill="#9d7d67"/><path d="M20 110h280v40H20z" fill="#6c6975"/>';
if(page==='formations')a+=(s.formation?'<path d="M70 20l25 20 25-20"':'<path d="M130 170l25-20 25 20"')+' fill="none" stroke="#f2d474" stroke-width="6"/>';
return '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" rx="18" fill="#203c4b"/>'+a+'</svg>';}
export const digArtKeys=['layers','life','pigment','echo','formations','groundwater','magma','mantle','tools'];

export const engineeringObjects=[{id:'engineering-exit',x:130,y:460,name:'Home hub',icon:'🏠',kind:'portal',to:'grounds'},...[
 ['engineering-bridge',300,240,'🌉','Bridge workbench','bridge'],['engineering-water',650,240,'💧','Water-channel model','water'],['engineering-habitat',650,430,'🌱','Habitat / terraforming','habitat']
].map(([id,x,y,icon,name,project])=>({id,x,y,icon,name,project,kind:'engineering'}))].map(o=>({...o,zone:'engineering'}));
export const designUses={quartz:'Silica-rich materials can be processed into glass. A raw quartz sample is not a finished window.',iron:'Iron-bearing ore can be processed to obtain iron. Ore is not the same as a metal beam.',fossil:'Fossils are evidence of ancient life. Keep this sample for observation rather than building with it.',amethyst:'Amethyst is quartz. Its crystal form is useful to observe and compare, not a ready-made structural beam.',calcite:'Calcite occurs in limestone. Some carbonate rocks are processed for building materials.',granite:'Crushed granite can be used as aggregate. Builders test and process materials before using them.',basalt:'Basalt can be crushed for aggregate. Real channels and structures need engineering design and testing.'};
export function designView(project,found,selected){const titles={bridge:'Bridge design',water:'Water-channel design',habitat:'Habitat / terraforming model'};return {title:titles[project]||titles.habitat,text:(project==='habitat'?'Plan a protected growing space. This is a small habitat design, not instant whole-planet terraforming.':project==='water'?'Plan a water route that helps soil stay in place. This sandbox is not a real flood-control design.':'Compare samples for a bridge-support model. Real bridges require designed and tested materials.')+(selected?' '+designUses[selected]:''),samples:digFinds.filter(f=>f.id!=='fossil'&&found.has(f.id)),selected};}
export function engineeringArt(project){const a=project==='water'?'<path d="M25 145h270V95l-90 25-90-25-90 25z" fill="#a78b65"/><path d="M25 70q60 80 120 20t150 0" stroke="#76bed3" stroke-width="18" fill="none"/>':project==='bridge'?'<path d="M30 130h55V80h150v50h55" stroke="#a6c9d0" stroke-width="16" fill="none"/><path d="M85 80l75-40 75 40M160 40v40" stroke="#e7c86d" stroke-width="6" fill="none"/>':'<path d="M40 145V90a120 80 0 0 1 240 0v55z" fill="#8dbfaa"/><path d="M160 145V75m0 25-35-15m35 35 35-15" stroke="#3c7958" stroke-width="8"/>';return '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" rx="18" fill="#203c4b"/>'+a+'</svg>';}
export function normalizeDesigns(raw={}){const out={};for(const key of ['bridge','water','habitat'])if(digFinds.some(f=>f.id===raw?.[key]&&f.id!=='fossil'))out[key]=raw[key];return out;}
export function designFarmTarget(project){return project==='bridge'?'farm-vertical':project==='water'?'farm-water':'farm-biodome';}
