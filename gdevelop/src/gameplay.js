// Runs once per frame as a native GDevelop JavaScript event.
const obj=name=>runtimeScene.getObjects(name)[0];
const text=(name,value)=>obj(name).setString(value);
if(!runtimeScene.__jacc){
 runtimeScene.__jacc={crew:0,started:false,paused:false,path:[],pending:null,dig:0,action:0,found:new Set(),last:null,overlay:null,buttons:[],focus:0,tab:false,enter:false,settings:{reduced:false,effects:true,narration:false,volume:.3}};
}
const s=runtimeScene.__jacc,actor=obj('Alex');
const say=message=>{text('Status',message);if(s.settings.narration&&typeof speechSynthesis!=='undefined'){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(message);u.volume=s.settings.volume;speechSynthesis.speak(u)}};
const crewUI=Array.from({length:6},(_,i)=>['CrewCard'+i,'CrewPortrait'+i,'CrewName'+i,'CrewDetail'+i]).flat();
const ui=[...crewUI,'Panel','CardTitle','CardBody','CardVisual','Close','CloseLabel',...Array.from({length:6},(_,i)=>['Option'+i,'OptionLabel'+i]).flat()];
function close(){s.overlay=null;for(const n of ui)obj(n).hide();}
function open(title,body,visual,options=[]){s.overlay=title;s.buttons=[];for(const n of ui)obj(n).hide();for(const n of ['Panel','CardTitle','CardBody','CardVisual','Close','CloseLabel'])obj(n).hide(false);text('CardTitle',title);text('CardBody',body.replace(/(.{1,64})(?:\s|$)/g,'$1\n').trim());text('CardVisual',visual);options.slice(0,6).forEach(([label,fn],i)=>{obj('Option'+i).hide(false);obj('OptionLabel'+i).hide(false);text('OptionLabel'+i,label);s.buttons.push({name:'Option'+i,fn})});say(title+'. '+body);}
function select(o){s.started=true;s.path=pathfind([actor.getX()+20,actor.getY()+45],[o.x-65,o.y+55]);s.pending=o;s.action=0;say('Going to '+o.name);if(!s.path.length){s.pending=null;arrive(o)}}
function card(o){open(o.name,o.text,o.icon+'   '+o.diagram,[['Listen / replay',()=>{say(o.text);if(typeof speechSynthesis!=='undefined'){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(o.text);u.volume=s.settings.volume;speechSynthesis.speak(u)}}],['Revisit',()=>{close();select(objects.find(x=>x.id===o.id)||objects.find(x=>x.id==='dig'))}]]);}
function arrive(o){s.last=o.id;if(o.kind==='home'){say('Back at the start. Choose a picture.');return}if(o.kind==='dig'){s.action=s.settings.reduced?.2:1.2;say('Digging through the soil...');return}s.found.add(o.id);card(o)}
function crewMenu(){open('J.A.C.C. Crew','Tap an astronaut. Everyone can explore every activity.','');for(let i=0;i<roster.length;i++){const r=roster[i];for(const name of ['CrewCard','CrewPortrait','CrewName','CrewDetail'])obj(name+i).hide(false);text('CrewName'+i,(s.crew===i?'[Selected] ':'')+r[0]);text('CrewDetail'+i,(r[1]+' suit | '+r[2]).replace(/(.{1,29})(?:\s|$)/g,'$1\n').trim());s.buttons.push({name:'CrewCard'+i,fn:()=>{s.crew=i;actor.setAnimation(i);text('ActiveCrew',r[0]+' | '+r[1]+' | '+r[2]);close();say(r[0]+' selected. '+r[2])}});}}
function pip(){open('PIP','Choose a picture. Your astronaut will walk there and explore.','PIP  >  TAP  >  DISCOVER',[
 ['Show places',()=>{close();s.settings.effects=true;objects.forEach(o=>obj('Target_'+o.id).setOpacity(190));say('The cream pictures are places to explore.')}],
 ['Show me a dig',()=>{close();select(objects.find(o=>o.id==='dig'))}],
 ['Previous activity',()=>{close();select(objects.find(o=>o.id===s.last)||objects[0])}],
 ['Repeat guidance',()=>say('Tap a picture to explore. Tap the pickaxe to dig. Nothing needs holding or dragging.')],
 ['Return home',()=>{close();select(objects[0])}]
 ]);}
function journal(page=0){const found=[...objects,...materials].filter(o=>s.found.has(o.id));const entries=found.slice(page*4,page*4+4).map(o=>[o.icon+' '+o.name,()=>card(o)]);if(page>0)entries.push(['Previous page',()=>journal(page-1)]);if(found.length>(page+1)*4)entries.push(['Next page',()=>journal(page+1)]);open('Discovery journal',found.length?'Choose a discovery to replay.':'Explore or dig to find a discovery.','OBSERVE > DISCOVER > REPEAT',entries);}

function settings(){const v=s.settings;open('Settings','All activities wait for you. No scores or penalties.','TAKE YOUR TIME',[
 ['Volume '+Math.round(v.volume*100)+'%',()=>{v.volume=v.volume>=1?0:Math.min(1,Math.round((v.volume+.25)*100)/100);settings()}],
 ['Narration '+(v.narration?'ON':'OFF'),()=>{v.narration=!v.narration;settings()}],
 ['Reduced animation '+(v.reduced?'ON':'OFF'),()=>{v.reduced=!v.reduced;settings()}],
 ['Visual effects '+(v.effects?'ON':'OFF'),()=>{v.effects=!v.effects;obj('Marker').hide(!v.effects);settings()}]
 ]);}
if(!s.initialized){s.initialized=true;close();say('Tap a picture or the ground to explore. PIP can help.');gdjs.evtTools.input.touchSimulateMouse(runtimeScene,true);}
const actions=s.overlay?[{name:'Close',fn:close},...s.buttons]:[
 {name:'PipButton',fn:pip},{name:'JournalButton',fn:journal},{name:'SettingsButton',fn:settings},
 {name:'PauseButton',fn:()=>{s.paused=!s.paused;text('PauseLabel',s.paused?'Resume':'Pause');say(s.paused?'Paused. Take your time.':'Ready to explore.')}},
 {name:'CrewButton',fn:crewMenu},
 ...objects.map(o=>({name:'Target_'+o.id,fn:()=>{if(!s.paused)select(o)}}))];
const key=k=>gdjs.evtTools.input.isKeyPressed(runtimeScene,k);
if(key('Escape')&&s.overlay)close();
if(key('Tab')&&!s.tab)s.focus=(s.focus+1)%actions.length;
s.tab=key('Tab');s.focus%=actions.length;
if(key('Return')&&!s.enter)actions[s.focus].fn();s.enter=key('Return');
const x=gdjs.evtTools.input.getCursorX(runtimeScene,'',0),y=gdjs.evtTools.input.getCursorY(runtimeScene,'',0);
if(gdjs.evtTools.input.isMouseButtonReleased(runtimeScene,'Left')){
 const hit=actions.find(a=>{const o=obj(a.name);return x>=o.getX()&&x<=o.getX()+o.getWidth()&&y>=o.getY()&&y<=o.getY()+o.getHeight()});
 if(hit)hit.fn();else if(!s.overlay&&!s.paused&&y>95){s.started=true;s.pending=null;s.action=0;s.path=pathfind([actor.getX()+20,actor.getY()+45],[x,y]);obj('Marker').setPosition(x-12,y-12);obj('Marker').hide(!s.settings.effects);say(s.path.length?'Walking to your marker.':'Choose the path around the pond.');}
}
const dt=Math.min(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene),.05);
if(!s.paused&&!s.overlay){
 if(s.path.length){const [x,y]=s.path[0],ax=actor.getX()+20,ay=actor.getY()+45,dx=x-ax,dy=y-ay,d=Math.hypot(dx,dy),step=150*dt;if(d<=step){actor.setPosition(x-20,y-45);s.path.shift();if(!s.path.length&&s.pending){const o=s.pending;s.pending=null;arrive(o)}}else actor.setPosition(actor.getX()+dx/d*step,actor.getY()+dy/d*step);}
 if(s.action>0){s.action-=dt;if(s.action<=0){const m=materials[s.dig++%materials.length];s.found.add(m.id);card(m)}}
}
obj('PipRobot').setPosition(actor.getX()+43,actor.getY()-10);
obj('Focus').setZOrder(s.overlay?51:3);
obj('Focus').setPosition(obj(actions[s.focus].name).getX()-5,obj(actions[s.focus].name).getY()-5);obj('Focus').setWidth(obj(actions[s.focus].name).getWidth()+10);obj('Focus').setHeight(obj(actions[s.focus].name).getHeight()+10);
