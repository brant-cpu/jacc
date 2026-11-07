import {normalizeRooms} from './habitat.js';
import {machineBlueprints,machineColors,machineReady,machineSlots,machineName,normalizeMachines} from './machines.js';
import {expeditionModes,expeditionSurface,expeditionCell,expeditionChunkItems,expeditionInteract,expeditionRequest,expeditionCamera} from './expeditions.js';

const trailTypes=['rover','helperbot','bridge','habitat'],trailCopy=o=>JSON.parse(JSON.stringify(o));
export function trailAllows(model,mode,colony=false){return !!model&&machineReady(model)&&({rover:['forest','cave','farm'],helperbot:model.parts.module==='sprayer'?['farm']:[],bridge:colony?['forest','cave','farm']:['forest','cave'],habitat:['forest','cave','farm']}[model.type]||[]).includes(mode);}
export function normalizeTrailMachines(raw={}){
 const s={placements:[],history:[],rooms:normalizeRooms(raw?.rooms),roomOpen:null};if(!raw||typeof raw!=='object')return s;
 for(const p of Array.isArray(raw.placements)?raw.placements:[]){
  if(s.placements.length>=36)break;if(!p||!/^t[1-9]\d{0,5}$/.test(p.id)||s.placements.some(q=>q.id===p.id)||!/^m[1-9]\d{0,5}$/.test(p.modelId)||!trailAllows(p.snapshot,p.mode,true)||!Object.hasOwn(machineColors,p.snapshot.color)||!Number.isFinite(p.x)||Math.abs(p.x)>1e12||!Number.isFinite(p.y)||Math.abs(p.y)>1e12||s.placements.filter(q=>q.mode===p.mode).length>=12)continue;
  s.placements.push({id:p.id,mode:p.mode,modelId:p.modelId,x:Math.round(p.x/40)*40,y:Math.round(p.y/40)*40,snapshot:{type:p.snapshot.type,color:p.snapshot.color,parts:Object.fromEntries(machineSlots(p.snapshot.type).map(k=>[k,p.snapshot.parts[k]]))},running:p.running===true,used:p.used===true});
 }
 s.history=(Array.isArray(raw.history)?raw.history:[]).filter(e=>e&&['survey','water','cross','rest'].includes(e.kind)&&Object.hasOwn(expeditionModes,e.mode)&&typeof e.placementId==='string'&&Number.isFinite(e.x)&&Number.isFinite(e.y)).slice(-80).map(e=>({kind:e.kind,mode:e.mode,placementId:e.placementId,x:e.x,y:e.y}));s.roomOpen=typeof raw.roomOpen==='string'&&s.rooms[raw.roomOpen]?raw.roomOpen:null;return s;
}
export function trailPads(exp,type){
 const mode=exp.active,w=exp.worlds[mode];if(!w||!['forest','cave','farm'].includes(mode)||type==='bridge'&&mode==='farm'&&!exp.colony||type==='helperbot'&&mode!=='farm'||mode==='cave'&&w.y>=116*40)return [];
 const chunk=Math.floor(w.x/640),out=[];
 for(let i=0;i<3;i++){
  let x=(chunk*16+2+i*6)*40,y=mode==='forest'?expeditionSurface(w.seed,Math.floor(x/40),mode)*40:mode==='farm'?Math.floor(w.y/240)*240+200:Math.floor(w.y/40)*40;
  if(mode==='farm'){
   let found=false;for(let dy=0;dy<=8&&!found;dy+=2)for(let dx=0;dx<=8&&!found;dx+=2){const px=x+dx*40,py=y+dy*40;let clear=true;for(let a=-2;a<=2;a++)for(let b=-2;b<=1;b++){const key=(px/40+a)+','+(py/40+b);if(w.plots[key]||expeditionCell(w,mode,px/40+a,py/40+b).solid)clear=false;}if(clear){x=px;y=py;found=true;}}if(!found)continue;
  }
  if(!out.some(p=>p.x===x&&p.y===y))out.push({x,y,label:['Near camp','Middle spot','Far spot'][i]});
 }return out;
}
export function syncTrailMachines(exp,raw){
 const key=JSON.stringify(raw.placements);if(raw._synced===key&&Object.values(exp.worlds).every(w=>w.deploymentCells))return;
 raw._synced=key;for(const w of Object.values(exp.worlds))w.deploymentCells={};
 for(const p of raw.placements){const w=exp.worlds[p.mode];if(!w)continue;const cx=p.x/40,cy=p.y/40,put=(x,y,type)=>{w.deploymentCells[x+','+y]=type;};
  if(p.mode==='farm'){for(let x=cx-2;x<=cx+2;x++)for(let y=cy-2;y<=cy+1;y++)put(x,y,p.snapshot.type==='bridge'?(y===cy?'platform':'pond'):'pad');continue;}
  // Prepared supports and headroom are reversible overlays: own blocks/dig edits survive packing.
  for(let x=cx-3;x<=cx+3;x++){
   for(let y=cy-3;y<cy;y++)put(x,y,'air');
   put(x,cy,'platform');if(p.snapshot.type==='bridge'&&Math.abs(x-cx)<3){for(let y=cy+1;y<=cy+3;y++)put(x,y,y===cy+1?'water':'air');}
  }
 }
}
function trailRecord(s,p,kind){p.used=true;if(!s.history.some(e=>e.kind===kind&&e.placementId===p.id))s.history.push({kind,mode:p.mode,placementId:p.id,x:p.x,y:p.y});s.history=s.history.slice(-80);}
export function trailMachineAction(exp,s,garage,a){
 let route=a.route||'home',message='',effect=null,enter=null,workshop=null,pause=null;const p=s.placements.find(p=>p.id===a.id),model=garage.models.find(m=>m.id===a.modelId);
 if(a.type==='world'&&model&&trailAllows(model,a.mode,!!exp.colony)){enter=a.mode;route='pads:'+model.id;}
 if(a.type==='starter'&&trailTypes.includes(a.machineType)){
  if(garage.models.length>=24)message='Your garage is full. Edit a saved design in the workshop.';
  else{let n=1;while(garage.models.some(m=>m.id==='m'+n))n++;const starter=normalizeMachines({models:[{id:'m'+n,type:a.machineType,color:'blue',parts:a.machineType==='helperbot'?{module:'sprayer'}:{}}]}).models[0];garage.models.push(starter);route='worlds:'+starter.id;message='PIP saved a starter design. You can change every part in the workshop.';}
 }
 if(a.type==='place'&&model&&trailAllows(s.placements.find(p=>p.id===a.moveId)?.snapshot||model,exp.active,!!exp.colony)){
  const pad=trailPads(exp,s.placements.find(p=>p.id===a.moveId)?.snapshot.type||model.type)[a.pad];if(!pad)return {route:'pads:'+model.id,message:'Choose a prepared spot.',effect,enter,workshop,pause};
  const moving=s.placements.find(p=>p.id===a.moveId),old=s.placements.find(p=>p.mode===exp.active&&p.x===pad.x&&p.y===pad.y);
  if(!moving&&!old&&s.placements.filter(p=>p.mode===exp.active).length>=12)message='This world has 12 machines. Pack one to make room.';
  else{let id=moving?.id||old?.id;if(!id){let n=1;while(s.placements.some(p=>p.id==='t'+n)||s.history.some(e=>e.placementId==='t'+n)||Object.hasOwn(s.rooms||{},'t'+n))n++;id='t'+n;}const snapshot=moving?trailCopy(moving.snapshot):trailCopy({type:model.type,color:model.color,parts:model.parts});s.placements=s.placements.filter(p=>p.id!==id&&p!==old);const placed={id,mode:exp.active,modelId:moving?.modelId||model.id,x:pad.x,y:pad.y,snapshot,running:false,used:moving?.used||false};s.placements.push(placed);enter=exp.active;effect={focus:{x:pad.x+(snapshot.type==='bridge'?-100:80),y:pad.y+(exp.active==='farm'&&snapshot.type==='bridge'?40:0)}};route='placed:'+id;message='Placed! PIP brought you to this prepared spot. Your saved design and its chosen parts stay in My Machines.';}
 }
 if(a.type==='pack'&&p){s.placements=s.placements.filter(q=>q.id!==p.id);route='placements:0';message='Packed away. Your saved machine and discoveries are safe.';}
 if(a.type==='use'&&p&&p.mode===exp.active){
  p.running=true;route='placed:'+p.id;const w=exp.worlds[p.mode];
  if(p.snapshot.type==='helperbot'){
   route=null;let count=0;for(const [key,plant]of Object.entries(w.plots)){const [x,y]=key.split(',').map(Number);if(plant.stage<3&&!plant.watered&&Math.hypot(x*40+20-p.x,y*40+20-p.y)<=360){plant.watered=true;count++;}}
   if(count)trailRecord(s,p,'water');message=count?'Robot watered '+count+' nearby planted beds. Explore and return for the next growth stage.':'No nearby plants need water. Plant a seed near this robot and try again.';
  }else if(p.snapshot.type==='rover'){
   route=null;const chunk=Math.floor(p.x/640),items=[-1,0,1].flatMap(k=>expeditionChunkItems(w,p.mode,chunk+k)).filter(o=>o.type!=='camp'&&!w.found.includes(o.id)&&Math.hypot(o.x-p.x,o.y-p.y)<=220).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y));
   const item=items[0];if(item){const found=expeditionInteract(exp,item);effect=found.effect;message='Rover survey: '+found.message+'. Kept in your journal.';}else message='Rover surveyed the nearby ground. No new sample was within reach. Try another spot or explore beside your rover.';trailRecord(s,p,'survey');
  }else if(p.snapshot.type==='bridge'){
   w.fly=false;w.vy=0;const end={x:p.x+100,y:p.y};const ok=expeditionRequest(exp,end,{kind:'trailCross',id:p.id});route=null;message=ok?'Your astronaut is traveling across the prepared bridge route.':'Bridge ready. Deploy boosters to approach, or tap a nearby end of the deck.';
  }else if(p.snapshot.type==='habitat'){
   const ok=expeditionRequest(exp,{x:p.x,y:p.y},{kind:'trailHabitat',id:p.id});route=ok?null:'rest:'+p.id;message='Visit your habitat. You can rest or explore whenever you like.';
  }
 }
 if(a.type==='rest'&&p){pause=true;trailRecord(s,p,'rest');route='rest:'+p.id;message='Resting in your habitat. Nothing needs doing. Resume whenever you like.';}
 if(a.type==='resume'){pause=false;route=null;message='Ready to explore.';}
 if(a.type==='visit'&&p){enter=p.mode;route='placed:'+p.id;effect={focus:{x:p.x,y:p.y}};}
 if(a.type==='workshop')workshop=a.modelId?'model:'+a.modelId:'home';
 syncTrailMachines(exp,s);return {route,message,effect,enter,workshop,pause};
}
const trailPage=(label,route)=>({label,type:'page',route});
export function trailMachineView(exp,s,garage,route='home'){
 const [kind,arg='0',moving='']=route.split(':'),n=Math.max(0,parseInt(arg)||0),m=garage.models.find(m=>m.id===arg),p=s.placements.find(p=>p.id===arg),back=trailPage('← My Machines','home'),v=(title,text,actions,design=null)=>({title,text,actions,design});
 if(kind==='home')return v('My Machines / exploration','Place a saved design, tap a prepared spot, then use your machine. Moving and replacing cost nothing.',[trailPage('📚 Place a saved machine','library:0'),trailPage('📍 My placed machines','placements:0'),trailPage('🤖 PIP starter designs','starters'),{label:'🛠 Build / edit machines',type:'workshop'},trailPage('🤖 Show me how','help')]);
 if(kind==='starters')return v('PIP / Try a starter design','PIP can save a complete starter. You can change its color and parts in My Machines.',trailTypes.map(type=>({label:machineBlueprints[type].icon+' '+(type==='helperbot'?'Farm robot':machineBlueprints[type].name),type:'starter',machineType:type})).concat([back]));
 if(kind==='help')return v('PIP / Place and use','Tap a saved machine, choose a world, then tap a big prepared spot. Tap its picture to use it. A rover surveys nearby ground; a sprayer robot waters nearby beds; a bridge supports travel; a habitat is a place to rest.',[trailPage('📚 Choose a saved machine','library:0'),trailPage('🤖 Try a starter','starters'),trailPage('📍 See my placed machines','placements:0'),{label:'🏠 My saved rooms',type:'rooms'},back]);
 if(kind==='library'){const list=garage.models.filter(m=>trailTypes.includes(m.type)&&!(m.type==='helperbot'&&m.parts.module!=='sprayer'));return v('Saved machines / explore',list.length?'Your exact parts and color travel with each copy.':'Your garage is ready. Build a design or let PIP make a starter.',[...list.slice(n*3,n*3+3).map(m=>trailPage(machineBlueprints[m.type].icon+' '+machineName(m),'worlds:'+m.id)),n?trailPage('← Previous machines','library:'+(n-1)):back,...(list.length>(n+1)*3?[trailPage('More machines →','library:'+(n+1))]:!list.length?[trailPage('🤖 PIP starter designs','starters')]:[])]);}
 if(kind==='worlds'&&m&&exp.colony)return v('Deploy '+machineName(m)+' on '+exp.colony.name,'Choose your colony’s prepared spots. Planted beds and saved designs stay safe.',[{label:'▣ Choose a colony spot',type:'world',modelId:m.id,mode:'farm'},back],m);
 if(kind==='worlds'&&m)return v('Deploy '+machineName(m),'Choose a compatible exploration world. Existing machines and planted beds stay saved.',Object.entries(expeditionModes).filter(([mode])=>trailAllows(m,mode)).map(([mode,w])=>({label:w.icon+' '+w.name,type:'world',modelId:m.id,mode})).concat([back]),m);
 if(kind==='pads'&&m){const pads=trailPads(exp,m.type);return v('Choose a placement spot',pads.length?'Prepared spots fit your model. Existing copies at the same spot are replaced; saved designs stay safe.':'No suitable spot here. Return to a surface world or try another stretch.',[...pads.map((p,i)=>({label:'▣ '+p.label,type:'place',modelId:m.id,pad:i,moveId:moving})),trailPage('🌍 Choose another world','worlds:'+m.id),back],m);}
 if(kind==='placements'){const list=s.placements;return v('My placed machines',list.length?'Tap a copy to use, visit, move or pack it.':'Place a saved machine to see it here.',[...list.slice(n*3,n*3+3).map(p=>trailPage(machineBlueprints[p.snapshot.type].icon+' '+expeditionModes[p.mode].name+' / '+p.id,'placed:'+p.id)),n?trailPage('← Previous copies','placements:'+(n-1)):back,...(list.length>(n+1)*3?[trailPage('More copies →','placements:'+(n+1))]:[])]);}
 if(kind==='placed'&&p)return v(machineName({...p.snapshot,id:p.modelId})+' / '+expeditionModes[p.mode].name,'This placed copy keeps its chosen parts. '+(p.snapshot.type==='helperbot'?'Waters planted beds nearby; growth still happens when you return.':p.snapshot.type==='rover'?'Surveys nearby ground and records samples within reach.':p.snapshot.type==='bridge'?'A supported deck provides a walkable crossing.':'Visit your little habitat and take a break.'),[{label:p.mode!==exp.active?'📍 Visit this world':{rover:'▶ Survey with rover',helperbot:'💧 Water my plants',bridge:'🌉 Cross my bridge',habitat:'🏠 Visit my habitat'}[p.snapshot.type],type:p.mode===exp.active?'use':'visit',id:p.id},trailPage('↔ Move this copy','pads:'+p.modelId+':'+p.id),{label:'📦 Pack this copy',type:'pack',id:p.id},{label:'🛠 My saved design',type:'workshop',modelId:p.modelId},back],p.snapshot);
 if(kind==='rest'&&p)return v('My habitat / a quiet place','You and PIP can rest here. The model includes air, shelter and support systems. There is no timer and nothing to maintain.',[{label:'🚪 Enter / decorate my room',type:'room',id:p.id},{label:'☾ Rest here',type:'rest',id:p.id},{label:'▶ Resume exploring',type:'resume'},trailPage('🤖 PIP help','help'),back],p.snapshot);
 return trailMachineView(exp,s,garage,'home');
}
export function trailMachinePoses(exp,s,time=0){if(!exp.active)return [];const w=exp.worlds[exp.active],cam=expeditionCamera(w,exp.active);return s.placements.filter(p=>p.mode===exp.active&&Math.abs(p.x-w.x)<650&&Math.abs(p.y-w.y)<360).slice(0,4).map(p=>{const mobile=['rover','helperbot'].includes(p.snapshot.type),dx=p.running&&mobile?Math.sin(time*.65)*30:0,scale=p.snapshot.type==='bridge'?.92:.48;return {p,x:p.x-cam.x-180*scale+dx,y:p.y-cam.y+95-(p.snapshot.type==='bridge'?85:190)*scale,scale,hitX:Math.max(160,Math.min(840,p.x-cam.x)),hitY:Math.max(220,Math.min(390,p.y-cam.y+95-45))};});}
export function trailMachineJournal(s,section){if(!['did','experiments'].includes(section))return [];return s.history.map(e=>({id:'trail-'+e.placementId+'-'+e.kind,title:{survey:'My rover survey',water:'My farm robot watered plants',cross:'My bridge crossing',rest:'My little habitat'}[e.kind],icon:{survey:'🚙',water:'💧',cross:'🌉',rest:'🏠'}[e.kind],summary:'I used my own machine in '+expeditionModes[e.mode].name+'.',fact:'I can revisit, change my design and try again. These are prepared training models.',target:'grounds-home',expeditionMode:e.mode,expeditionFocus:{x:e.x,y:e.y},trailPlacementId:e.placementId}));}

export function trailComplete(s,id,kind){const p=s.placements.find(p=>p.id===id);if(p&&kind==='cross')trailRecord(s,p,kind);}
