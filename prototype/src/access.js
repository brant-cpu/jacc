// Device-independent, offline access actions. No microphone, account or remote messaging.
export const aacChoices=[
 {id:'explore',icon:'🌍',text:'Explore mode',target:'grounds-home'},
 {id:'solar',icon:'🪐',text:'My solar system',target:'grounds-elevator'},
 {id:'dig',icon:'⛏️',text:'I want to dig',target:'grounds-dig'},
 {id:'farm',icon:'🌱',text:'I want the farm',target:'grounds-farm'},
 {id:'mom',icon:'🙋',text:'Help me, Mom'},
 {id:'dad',icon:'🙋',text:'Help me, Dad'},
 {id:'help',icon:'🤝',text:'I need help'},
 {id:'bright',icon:'🌙',text:'Too bright'},
 {id:'loud',icon:'🔇',text:'Too loud'},
 {id:'save',icon:'💾',text:'Save my game for me'},
 {id:'done',icon:'👋',text:'All done'}
];
export function accessPreferences(raw={}){const r=raw&&typeof raw==='object'?raw:{};const p={switchMode:['off','one','two'].includes(r.switchMode)?r.switchMode:'off',scanMs:[1000,2000,3000,5000,8000,12000].includes(r.scanMs)?r.scanMs:3000,nextKey:typeof r.nextKey==='string'&&r.nextKey.length<=20&&r.nextKey.length?r.nextKey:' ',selectKey:typeof r.selectKey==='string'&&r.selectKey.length<=20&&r.selectKey.length?r.selectKey:'Enter',captions:r.captions!==false,visualAlerts:r.visualAlerts!==false,haptics:r.haptics===true,aacVoice:r.aacVoice!==false,dimWorld:r.dimWorld===true,controller:r.controller!==false};if(p.nextKey===p.selectKey)p.selectKey=p.nextKey==='Enter'?' ':'Enter';return p;}
export function aacEffect(id){const c=aacChoices.find(c=>c.id===id);if(!c)return null;return {...c,pause:['mom','dad','help','done'].includes(id),mute:id==='loud',dim:id==='bright',save:id==='save'||id==='done',future:id==='solar'};}
export function scanStep(index,count,delta=1){return count>0?((index+delta)%count+count)%count:0;}
export function gamepadCommands(pad){if(!pad||pad.connected===false||pad.mapping!=='standard')return [];const down=i=>!!pad.buttons?.[i]?.pressed,commands=[];if(down(0))commands.push('select');if(down(1))commands.push('back');if(down(2))commands.push('aac');if(down(3))commands.push('help');if(down(12)||down(14)||(pad.axes?.[0]||0)<-.65||(pad.axes?.[1]||0)<-.65)commands.push('previous');else if(down(13)||down(15)||(pad.axes?.[0]||0)>.65||(pad.axes?.[1]||0)>.65)commands.push('next');return commands;}
export function freshCommands(current,previous=[]){return current.filter(x=>!previous.includes(x));}
export function helperSuggestion(list,visited,last){return list.find(o=>!['portal','home'].includes(o.kind)&&!visited.has(o.id))||list.find(o=>o.id===last)||list.find(o=>o.kind!=='portal')||null;}
export function requestHaptic(enabled,pad,device=typeof navigator==='undefined'?null:navigator){if(!enabled)return false;try{if(pad?.vibrationActuator?.playEffect){Promise.resolve(pad.vibrationActuator.playEffect('dual-rumble',{duration:45,weakMagnitude:.15,strongMagnitude:0})).catch(()=>{});return true;}return device?.vibrate?.(35)===true;}catch{return false}}
