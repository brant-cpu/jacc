import {expeditionHash,expeditionSurface,expeditionCamera,expeditionCell} from './expeditions.js';

// Original placeholder animals built only from flat polygons and rectangles.
// Wildlife is scenery: it never blocks navigation, captures input or harms the player.
export const wildlifeTypes=['bird','butterfly','bee','rabbit','deer','squirrel','fish','trout','dolphin','shark','whale','octopus','jelly','angler','bat','cavefish','springtail','worm','coral','cloud'];
export const wildlifeArtKeys=wildlifeTypes.flatMap(type=>[type+'-0',type+'-1']);
export function wildlifeSvg(type,frame=0){
 const poly=(points,fill)=>`<polygon points="${points}" fill="${fill}"/>`,box=(x,y,w,h,fill)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`,eye=(x=47,y=19)=>box(x,y,3,3,'#183c4d');
 let s='';const flap=frame?8:0;
 if(type==='cloud')s=poly('2,30 8,20 18,20 23,10 35,8 46,18 55,18 62,28 58,37 10,38','#e8f3ef')+poly('8,34 29,29 59,31 58,37 10,38','#c8dfe4');
 else if(type==='bird'||type==='bat'){
  const bat=type==='bat',color=bat?'#736785':'#568db5';
  s=poly(`29,25 10,${9+flap} 3,${20+flap} 14,${22+flap} 17,${29+flap} 28,30`,color)+poly(`33,25 52,${9+flap} 61,${20+flap} 50,${22+flap} 47,${29+flap} 34,30`,color)+poly('25,22 32,18 39,23 37,34 29,38 24,30',bat?'#514b65':'#315978')+poly('25,24 19,30 27,29',bat?'#918095':'#ddb46c')+eye(29,23);
  if(bat)s+=poly('25,24 26,13 31,22 34,13 38,24','#514b65');
 }else if(type==='butterfly'||type==='bee'){
  const bee=type==='bee';s=poly(`30,25 14,${9+flap} 5,19 11,34 28,31`,bee?'#d7edf0':'#b795d1')+poly(`34,25 50,${9+flap} 59,19 53,34 36,31`,bee?'#d7edf0':'#e7bb72')+poly('27,19 36,19 40,28 35,36 28,35 24,27',bee?'#dfbd5d':'#516579')+eye(32,20);if(bee)s+=box(27,26,12,4,'#425461')+box(29,32,8,3,'#425461');
 }else if(['rabbit','deer','squirrel'].includes(type)){
  const deer=type==='deer',squirrel=type==='squirrel',c=deer?'#b3916b':squirrel?'#b58062':'#b9bdc8';
  s=poly('15,21 35,18 44,26 40,36 18,36 10,28',c)+poly('36,20 43,11 54,14 57,25 46,30 39,28',c)+poly(`18,32 24,32 22,${frame?42:44} 16,44`,c)+poly(`35,32 41,31 43,${frame?44:42} 36,44`,c)+eye(49,18);
  s+=deer?poly('43,14 38,4 43,5 47,16',c)+poly('49,14 51,3 55,5 53,18',c):squirrel?poly('16,30 4,24 2,11 9,5 19,9 14,17 24,24',c)+poly('42,14 44,5 49,14',c):poly('41,16 40,2 46,2 49,16',c)+poly('49,16 52,3 58,5 55,20',c);
 }else if(['fish','trout','dolphin','shark','whale','cavefish','angler'].includes(type)){
  const c={fish:'#dfa65d',trout:'#88b5a4',dolphin:'#91b9ca',shark:'#8d9cae',whale:'#6c91b7',cavefish:'#e2d8d0',angler:'#b194bb'}[type];
  s=poly(`18,23 4,${frame?13:16} 5,${frame?35:32} 20,29`,c)+poly('15,23 28,13 46,12 58,21 60,28 48,35 29,35 15,28',c)+poly('25,18 31,4 39,16',c)+poly('32,29 40,41 44,29',c)+eye(49,20)+box(50,29,7,2,'#355368');
  if(type==='dolphin')s+=poly('51,20 64,24 63,27 54,28',c);
  if(type==='whale')s+=poly('18,23 25,10 43,9 55,14 58,24',c);
  if(type==='trout')s+=box(27,19,3,3,'#4f7b77')+box(35,23,3,3,'#4f7b77')+box(40,18,3,3,'#4f7b77');
  if(type==='cavefish')s+=box(49,20,3,3,'#e2d8d0');
  if(type==='angler')s+=box(42,4,3,12,c)+box(43,4,8,3,c)+box(49,4,5,5,'#b4e5d1');
 }else if(type==='octopus'||type==='jelly'){
  const c=type==='octopus'?'#c79cb3':'#a5c3d1';s=poly('16,27 18,13 26,6 39,6 47,15 48,27',c);
  for(let i=0;i<(type==='octopus'?8:5);i++){const x=15+i*(type==='octopus'?4.5:8);s+=poly(`${x},25 ${x+4},25 ${x+5+(frame?3:-2)},40 ${x+1+(frame?3:-2)},43`,c);}if(type==='octopus')s+=eye(25,19)+eye(39,19);
 }else if(type==='coral'){
  s=box(29,12,7,33,'#c79d92')+poly('31,27 13,17 10,7 16,5 19,15 31,19','#c79d92')+poly('33,33 47,20 48,8 54,9 54,23 36,41','#d7b1a4')+box(23,39,21,7,'#aa8f8a');
 }else if(type==='worm')s=poly(`7,29 16,${frame?24:27} 27,30 38,24 52,27 57,33 50,38 38,34 28,39 16,34 8,36`,'#c8a6a3')+eye(50,28);
 else if(type==='springtail')s=poly('9,25 16,18 36,16 51,21 55,30 44,34 18,33','#d2d2bd')+poly('17,31 12,42 18,40 23,31 32,32 29,42 35,39 39,31 44,31 45,41 50,40 49,29','#9ba99f')+eye(47,21);
 return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 64 48">${s}</svg>`;
}
export const discoveryWildlife={fish:'fish',dolphin:'dolphin',octopus:'octopus',giant:'angler',cavelife:'springtail'};

// Clock advances only during active, unpaused play; switching sensory settings never resets it.
export function wildlifeClock(time,dt,{started=true,paused=false,overlay=false,reduced=false,effects=true}={}){
 return time+(started&&!paused&&!overlay&&!reduced&&effects?Math.max(0,Math.min(.05,dt)):0);
}
function wildlifePose(type,x,y,w=58,h=44,phase=0,time=0,travel=24){
 const stationary=type==='coral',cloud=type==='cloud',a=time*(cloud ? .055 : .25)+phase;
 return {type,x:x+(stationary?0:Math.sin(a)*travel),y:y+(stationary||cloud?0:Math.sin(a*1.3)*5),w,h,frame:stationary||cloud?0:Math.floor(time*1.5+phase)%2,flip:!stationary&&!cloud&&Math.cos(a)<0};
}
function wildlifeVisible(items,camera){return items.filter(o=>o.x+o.w>camera.x&&o.x<camera.x+1000&&o.y+o.h>camera.y+8&&o.y<camera.y+410).slice(0,32);}
export function expeditionWildlife(s,time=0){
 const mode=s.active;if(!mode||s.colony&&s.colony.kind!=='home')return [];const w=s.worlds[mode],cam=expeditionCamera(w,mode),chunk=Math.floor(w.x/640),out=[];
 for(let k=chunk-2;k<=chunk+2;k++){
  const base=k*640,n=expeditionHash(w.seed,k,83),phase=(n%628)/100;
  const add=(type,x,y,width=58,height=44,travel=24)=>out.push(wildlifePose(type,x,y,width,height,phase,time,travel));
  if(mode==='sky'){
   for(let j=0;j<3;j++)add('cloud',base+50+j*205,expeditionSurface(w.seed,k*16+3,'sky')*40-150-j*145,175+j*15,65,100);
   add('bird',base+150,expeditionSurface(w.seed,k*16+4,'sky')*40-110,60,45,85);
  }else if(mode==='forest'){
   add('cloud',base+70,9*40,180,65,90);
   add('bird',base+240,14*40,60,45,70);add('butterfly',base+340,expeditionSurface(w.seed,k*16+8,'forest')*40-110,42,34,35);
   const rabbit=wildlifePose(n%2?'rabbit':'deer',base+95,0,72,54,phase,time,30);rabbit.y=expeditionSurface(w.seed,Math.floor((rabbit.x+36)/40),'forest')*40-rabbit.h;out.push(rabbit);
   const tree=Math.floor((base+400)/400)*10+5;add('squirrel',tree*40-15,expeditionSurface(w.seed,tree,'forest')*40-270,54,42,0);
  }else if(mode==='farm'){
   const cy=Math.floor(w.y/480);for(let row=cy-1;row<=cy+1;row++){
    for(const [i,type]of ['bee','butterfly','rabbit','bird'].entries()){
     const o=wildlifePose(type,base+80+i*145,row*480+130+(i%2)*190,44,34,phase+i,time,type==='rabbit'?12:25);
     if(!expeditionCell(w,'farm',Math.floor((o.x+22)/40),Math.floor((o.y+17)/40)).solid)out.push(o);
    }
   }
  }else if(mode==='ocean'){
   for(const [type,x,row,width,height]of [['fish',100,10,56,42],['fish',220,11,42,32],['dolphin',360,17,100,62],['shark',130,24,105,62],['whale',380,43,155,90],['octopus',150,66,58,56],['jelly',330,75,50,55],['angler',200,105,65,46],['jelly',420,128,50,55],['coral',8*40,28,54,65]]){
    const o=wildlifePose(type,base+x,row*40-height,width,height,phase,time,35);if(wildlifeWaterClear(w,o))out.push(o);
   }
  }else if(mode==='cave'){
   add('worm',base+130,(expeditionSurface(w.seed,k*16+3,'cave')+2)*40,42,30,5);
   // Animals occur only in open, cool cave passages. Never populate deep crust or mantle.
   const first=Math.max(23,Math.floor(cam.y/40)),last=Math.min(83,first+12);let count=0;
   for(let y=first;y<last&&count<2;y++)for(let x=k*16;x<k*16+16&&count<2;x++){
    const cell=expeditionCell(w,'cave',x,y);if(!cell.solid&&!expeditionCell(w,'cave',x+1,y).solid&&expeditionHash(w.seed,x,y)%7===0){add(cell.type==='water'?'cavefish':count%2?'springtail':'bat',x*40+5,y*40+2,44,32,0);count++;}
   }
  }
 }
 return wildlifeVisible(out,cam).map(o=>({...o,x:o.x-cam.x,y:o.y-cam.y+95}));
}
function wildlifeWaterClear(w,o){for(const x of [o.x,o.x+o.w/2,o.x+o.w-1])for(const y of [o.y,o.y+o.h/2,o.y+o.h-1])if(expeditionCell(w,'ocean',Math.floor(x/40),Math.floor(y/40)).solid)return false;return true;}

// Outdoor authored spaces keep their established top-down/cutaway layouts.
export function landscapeWildlife(zone,camera=[0,0],time=0,{habitat='lake',level=0,clearCells=[]}={}){
 const out=[],cam={x:camera[0],y:camera[1]+87},add=(type,x,y,w=56,h=42,travel=20)=>out.push(wildlifePose(type,x,y,w,h,out.length*1.3,time,travel));
 if(['grounds','farm','forest','chapterEarth','engineering','machineyard'].includes(zone)){
  const cx=Math.floor(camera[0]/640),cy=Math.floor(camera[1]/480);
  for(let k=cx-1;k<=cx+2;k++)for(let row=cy;row<=cy+1;row++){
   add(zone==='farm'?'bee':'butterfly',k*640+190,row*480+225,42,34,25);add('bird',k*640+390,row*480+160,58,43,65);
   if(zone==='forest')add('deer',k*640+210,row*480+375,72,54,20);
  }
 }else if(['flight','rocketlab'].includes(zone)){
  const k0=Math.floor(camera[0]/640),r0=Math.floor(camera[1]/480);
  for(let k=k0-1;k<=k0+2;k++)for(let row=r0;row<=r0+1;row++){add('cloud',k*640+180,row*480+200,190,70,95);add('bird',k*640+405,row*480+320,60,45,65);}
 }else if(zone==='aquatic'){
  const types=habitat==='lake'?['trout','trout','trout']:habitat==='deep'?['angler','jelly','octopus']:['fish','shark','dolphin','coral'];
  types.forEach((type,i)=>add(type,170+i*195,220+(i%2)*155,type==='dolphin'||type==='shark'?95:58,type==='coral'?65:44,30));
 }else if(zone==='dig'||zone==='diglands'){
  // Restrict wildlife to open supported tunnels rather than drawing through solid rock.
  if(zone==='dig')add(level?'springtail':'worm',170,level?175:150,40,28,5);
  if(zone==='diglands')add('worm',Math.floor(camera[0]/640)*640+260,280,44,30,5);
  const cleared=new Set(clearCells);let count=0;for(const key of clearCells){if(count>=4)break;const [x,y]=key.split(',').map(Number);if(!cleared.has((x+1)+','+y)||y*40<camera[1]+100||y*40>camera[1]+470||x*40<camera[0]||x*40>camera[0]+900)continue;add(count%2?'springtail':'bat',x*40+5,y*40+3,45,32,0);count++;}
 }
 return wildlifeVisible(out,cam).map(o=>({...o,x:o.x-camera[0],y:o.y-camera[1]}));
}
