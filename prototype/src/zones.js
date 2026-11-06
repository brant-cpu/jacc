import {openSpaces} from './open-spaces.js';
// Provisional HQ environment, shared by both builds. Ground coordinates are 1000 × 600.
export const zones={...Object.fromEntries(Object.entries(openSpaces).map(([id,z])=>[id,{id,name:z.name,spawn:z.spawn,exit:id+'-exit',home:'grounds-home'}])),aquatic:{id:'aquatic',name:'Aquatic Learning Center',spawn:[180,460],exit:'aqua-exit',home:'grounds-home'},dig:{id:'dig',name:'Side-view Dig Site',spawn:[180,180],exit:'dig-exit',home:'grounds-home'},engineering:{id:'engineering',name:'Engineering & Terraforming',spawn:[180,460],exit:'engineering-exit',home:'grounds-home'},hq:{id:'hq',name:'GSEINHQ',spawn:[420,460],exit:'hq-exit',home:'grounds-home'},farm:{id:'farm',name:'Planet Farm',spawn:[100,480],exit:'farm-exit',home:'grounds-home'},grounds:{id:'grounds',name:'GSEI Discovery Training Grounds',spawn:[200,500],exit:'home',home:'grounds-home'}};
export const hqObjects=[
 {id:'hq-map',zone:'hq',x:180,y:180,icon:'🪐',name:'Star map',kind:'inspect',text:'Our star base is a place to begin an adventure. Look at Earth, the Moon and the stars.',diagram:'🌍 → 🌙 → ✨'},
 {id:'hq-bay',zone:'hq',x:240,y:255,icon:'🚀',name:'Arrival bay',kind:'inspect',text:'Welcome to HQ! A landing bay gives a craft a clear place to arrive. HQ supports our adventures. The training grounds are our home hub.',diagram:'🚀 → 🛬 → 🏠'},
 {id:'hq-lab',zone:'hq',x:500,y:180,icon:'🔬',name:'Science lab',kind:'inspect',text:'Look closely. Compare shapes. Ask a question. This lab is our place to investigate discoveries.',diagram:'👀 → 🔎 → 💡'},
 {id:'hq-pip',zone:'hq',x:600,y:255,icon:'🤖',name:'PIP workbench',kind:'workshop'},
 {id:'hq-bunks',zone:'hq',x:820,y:180,icon:'🛏️',name:'Cozy bunks',kind:'inspect',text:'This is a quiet place to rest. There is no hurry. I can take a break whenever I want.',diagram:'🧑‍🚀 → 🛏️ → 💛'},
 {id:'hq-locker',zone:'hq',x:900,y:255,icon:'🧑‍🚀',name:'Crew lockers',kind:'crew'},
 {id:'hq-home',zone:'hq',x:500,y:450,icon:'🏢',name:'Welcome desk',kind:'inspect',text:'HQ has our science lab, arrival bay and dormitory. The training grounds are our home hub.',diagram:'🏢 ↔ 🌱'},
 {id:'hq-exit',zone:'hq',x:850,y:450,icon:'🌱',name:'Training grounds',kind:'portal',to:'grounds'}
];
export function hqBlocked(x,y){return x===0||x===24||y<=2||y>=13||((x===8||x===16)&&y>=3&&y<=7)||(y===8&&![4,12,20].includes(x))||(y===4&&((x>=3&&x<=5)||(x>=11&&x<=13)||(x>=19&&x<=21)));}
// Rectangle/ellipse/text primitives keep the Canvas and GDevelop backdrop aligned.
export const hqPlan=[
 {kind:'rect',x:0,y:0,w:1000,h:600,color:'#152f46'},
 {kind:'rect',x:40,y:120,w:280,h:200,color:'#b9d9e9'},
 {kind:'rect',x:360,y:120,w:280,h:200,color:'#c6e6d8'},
 {kind:'rect',x:680,y:120,w:280,h:200,color:'#eed7b6'},
 {kind:'rect',x:40,y:360,w:920,h:160,color:'#d8e2e4'},
 {kind:'rect',x:160,y:320,w:40,h:40,color:'#b9d9e9'},
 {kind:'rect',x:480,y:320,w:40,h:40,color:'#c6e6d8'},
 {kind:'rect',x:800,y:320,w:40,h:40,color:'#eed7b6'},
 {kind:'rect',x:55,y:205,w:65,h:70,color:'#284e68'},
 {kind:'rect',x:62,y:213,w:51,h:53,color:'#5286a6'},
 {kind:'ellipse',x:170,y:275,w:52,h:22,color:'#edf5f3'},
 {kind:'ellipse',x:170,y:275,w:36,h:14,color:'#8eafb9'},
 {kind:'rect',x:120,y:160,w:120,h:40,color:'#356682'},
 {kind:'rect',x:128,y:166,w:104,h:27,color:'#132f49'},
 {kind:'rect',x:132,y:169,w:6,h:6,color:'#fff1b8'},
 {kind:'rect',x:190,y:179,w:5,h:5,color:'#fff1b8'},
 {kind:'rect',x:220,y:168,w:5,h:5,color:'#fff1b8'},
 {kind:'rect',x:440,y:160,w:120,h:40,color:'#6eaaa4'},
 {kind:'rect',x:447,y:164,w:106,h:12,color:'#f0faf0'},
 {kind:'rect',x:570,y:245,w:62,h:42,color:'#6eaaa4'},
 {kind:'rect',x:577,y:251,w:48,h:9,color:'#f0faf0'},
 {kind:'rect',x:760,y:160,w:120,h:40,color:'#8f7062'},
 {kind:'rect',x:766,y:165,w:40,h:29,color:'#fcf4d9'},
 {kind:'rect',x:809,y:165,w:64,h:29,color:'#d39a88'},
 {kind:'rect',x:875,y:245,w:65,h:45,color:'#9a7a65'},
 {kind:'rect',x:879,y:248,w:26,h:35,color:'#e6c8a3'},
 {kind:'rect',x:911,y:248,w:25,h:35,color:'#e6c8a3'},
 {kind:'rect',x:60,y:415,w:880,h:8,color:'#a5c6ce'},
 {kind:'rect',x:792,y:420,w:130,h:72,color:'#b7d98d'},
 {kind:'text',x:60,y:145,text:'01 / STAR BASE',color:'#17384a',size:18},
 {kind:'text',x:380,y:145,text:'02 / SCIENCE LAB',color:'#17384a',size:18},
 {kind:'text',x:700,y:145,text:'03 / DORMITORY',color:'#17384a',size:18},
 {kind:'text',x:65,y:390,text:'WELCOME TO HQ',color:'#315e72',size:17},
 {kind:'text',x:690,y:512,text:'TRAINING GROUNDS →',color:'#315e72',size:16},
 {kind:'text',x:60,y:555,text:'Explore • Discover • Rest • Repeat',color:'#dfefed',size:16}
];
export function hqSvg(){return '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600">'+hqPlan.map(p=>p.kind==='rect'?`<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="3" fill="${p.color}"/>`:p.kind==='ellipse'?`<ellipse cx="${p.x}" cy="${p.y}" rx="${p.w}" ry="${p.h}" fill="${p.color}"/>`:`<text x="${p.x}" y="${p.y}" fill="${p.color}" font-size="${p.size}" font-family="sans-serif" font-weight="bold">${p.text}</text>`).join('')+'</svg>';}

// The training grounds connect every destination.
export function zoneExit(from,to){return from==='grounds'?(openSpaces[to]?(to==='diglands'?'grounds-open-dig':'grounds-'+to):to==='farm'?'grounds-farm':to==='dig'?'grounds-dig':to==='engineering'?'bridge':to==='aquatic'?'grounds-aquatic':'home'):zones[from].exit;}
