// Runs once per frame as a native GDevelop JavaScript event.
const obj=name=>runtimeScene.getObjects(name)[0];
const text=(name,value)=>obj(name).setString(value);
if(!runtimeScene.__jacc){
 const profile=nativeLoadProfile();const known=new Set([...objects.map(o=>o.id),...materials.map(o=>o.id),...digFinds.map(o=>o.id)]);
 runtimeScene.__jacc={construction:normalizeConstruction(profile.construction),excavation:normalizeDig(profile.excavation),designs:normalizeDesigns(profile.designs),farm:normalizeFarm(profile.farm),zone:'grounds',journey:null,pip:normalizePip(profile.pip),pipTab:'travel',pipPage:0,crew:Number.isInteger(profile.crew)&&profile.crew>=0&&profile.crew<6?profile.crew:0,started:false,paused:false,path:[],pending:null,dig:0,action:0,found:new Set((Array.isArray(profile.found)?profile.found:[]).filter(id=>known.has(id))),visited:new Set((Array.isArray(profile.visited)?profile.visited:[]).filter(id=>known.has(id))),last:null,overlay:null,buttons:[],focus:0,tab:false,enter:false,settings:nativeProfileSettings(profile.settings)};
}
const s=runtimeScene.__jacc,actor=obj('Alex');
const say=message=>{text('Status',message);if(s.settings.narration&&typeof speechSynthesis!=='undefined'){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(message);u.volume=s.settings.volume;speechSynthesis.speak(u)}};
const crewUI=Array.from({length:6},(_,i)=>['CrewCard'+i,'CrewPortrait'+i,'CrewName'+i,'CrewDetail'+i]).flat();
const ui=['ConstructionArt','DigArt','DesignArt','FarmArt',...pipWorkshopUI,...crewUI,'Panel','CardTitle','CardBody','CardVisual','Close','CloseLabel',...Array.from({length:6},(_,i)=>['Option'+i,'OptionLabel'+i]).flat()];
function close(){s.overlay=null;for(const n of ui)obj(n).hide();}
function open(title,body,visual,options=[]){s.overlay=title;s.buttons=[];obj('CardBody').setCharacterSize(19);obj('WorkshopNote').setPosition(125,435);for(const n of ui)obj(n).hide();for(const n of ['Panel','CardTitle','CardBody','CardVisual','Close','CloseLabel'])obj(n).hide(false);text('CardTitle',title);text('CardBody',body.replace(/(.{1,64})(?:\s|$)/g,'$1\n').trim());text('CardVisual',visual);options.slice(0,6).forEach(([label,fn],i)=>{obj('Option'+i).hide(false);obj('OptionLabel'+i).hide(false);text('OptionLabel'+i,label);s.buttons.push({name:'Option'+i,fn})});say(title+'. '+body);}
function nativeActiveObjects(){return objects.filter(o=>!s.construction.active&&!s.construction.orbit&&o.zone===s.zone&&(s.zone!=='dig'||digVisible(s.excavation,o)))}
function nativeZone(id){s.zone=id;if(id==='dig'){s.excavation.level=0;s.excavation.path=[];s.excavation.target=null;}s.journey=null;s.pending=null;s.path=[];s.action=0;const [x,y]=zones[id].spawn;actor.setPosition(x-20,y-45);for(const name of ['Ground','Hill','Path','Trail','TopTrail','Pond','Platform','Ramp'])obj(name).hide(id!=='grounds');obj('HQBackdrop').hide(id!=='hq');obj('FarmBackdrop').hide(id!=='farm');obj('DigBackground').hide(id!=='dig');obj('EngineeringBackground').hide(id!=='engineering');for(const o of objects){obj('Target_'+o.id).hide(o.zone!==id);obj('Label_'+o.id).hide(o.zone!==id)}text('Title','J.A.C.C. | '+(id==='grounds'?'Training Grounds':zones[id].name));nativeDigVisibility();say('Welcome to '+zones[id].name+'.');}
function select(o){if(!o||s.paused)return;s.started=true;s.construction.active=null;s.construction.orbit=false;s.journey=null;if(o.zone!==s.zone){s.journey=o.id;o=objects.find(x=>x.id===zoneExit(s.zone,o.zone))}if(s.zone==='dig'){if(o.level!==s.excavation.level)nativeDigLevel(o.level);nativeDigSelect(o.x,o.y,o.id);return}s.path=pathfind([actor.getX()+20,actor.getY()+45],[o.x-65,o.y+55],s.zone);s.pending=o;s.action=0;say('Going to '+o.name);if(!s.path.length){s.pending=null;const here=cellAt(actor.getX()+20,actor.getY()+45),goal=cellAt(o.x-65,o.y+55);if(here.join()===goal.join()&&!blocked(...goal,s.zone))arrive(o);else{s.journey=null;say('Choose a clear path to explore.');}}}

function card(o){open(o.name,o.text,o.icon+'   '+o.diagram,[['Listen / replay',()=>{say(o.text);if(typeof speechSynthesis!=='undefined'){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(o.text);u.volume=s.settings.volume;speechSynthesis.speak(u)}}],['Revisit',()=>{close();select(objects.find(x=>x.id===o.id)||objects.find(x=>x.find===o.id)||objects.find(x=>x.id==='dig'))}],...(o.id==='hq-map'?[['Go exploring',()=>{close();select(objects.find(x=>x.id==='hq-exit'))}]]:[]),...(o.id==='hq-lab'?[['Find a sample',()=>{close();select(objects.find(x=>x.id==='dig'))}]]:[]),...(o.id==='hq-bunks'?[['Rest here',()=>{close();s.paused=true;text('PauseLabel','Resume');say('Resting. Resume whenever you are ready.')}]]:[]),...(materials.some(m=>m.id===o.id)?[['Ask PIP',()=>nativePipAnalysis(o.id)]]:[])]);}
function arrive(o){s.last=o.id;if(o.kind!=='dig')s.visited.add(o.id);if(o.kind==='portal'){const next=s.journey;nativeZone(o.to);if(next)select(objects.find(x=>x.id===next));return}if(o.kind==='construction'){nativeConstructionPage(o.page);return}if(o.kind==='diglevel'){nativeDigLevel(o.nextLevel);return}if(o.kind==='digtools'){nativeDigLesson('tools');return}if(o.kind==='diglesson'){nativeDigLesson(o.lesson);return}if(o.kind==='digfind'){s.found.add(o.find);card(digFinds.find(f=>f.id===o.find));return}if(o.kind==='engineering'){nativeEngineering(o.project);return}if(o.kind==='farm'){nativeFarm(o.page);return}if(o.kind==='workshop'){nativePipWorkshop();return}if(o.kind==='crew'){crewMenu();return}if(o.kind==='home'){say('Welcome home to the training grounds. Choose an adventure.');return}if(o.kind==='dig'){s.action=s.settings.reduced?.2:1.2;say('Digging through the soil...');return}s.found.add(o.id);card(o)}
function crewMenu(){open('J.A.C.C. Crew','Tap an astronaut. Everyone can explore every activity.','');for(let i=0;i<roster.length;i++){const r=roster[i];for(const name of ['CrewCard','CrewPortrait','CrewName','CrewDetail'])obj(name+i).hide(false);text('CrewName'+i,(s.crew===i?'[Selected] ':'')+r[0]);text('CrewDetail'+i,(r[1]+' suit | '+r[2]).replace(/(.{1,29})(?:\s|$)/g,'$1\n').trim());s.buttons.push({name:'CrewCard'+i,fn:()=>{s.crew=i;actor.setAnimation(i);text('ActiveCrew',r[0]+' | '+r[1]+' | '+r[2]);close();say(r[0]+' selected. '+r[2])}});}}
function pip(){open('PIP','Choose a picture. Your astronaut will walk there and explore.','PIP  >  TAP  >  DISCOVER',[
 ['Show places',()=>{close();if(s.zone==='dig'){s.excavation.hints=true;nativeDigVisibility();}s.settings.effects=true;nativeActiveObjects().forEach(o=>obj('Target_'+o.id).setOpacity(190));say('The cream pictures are places to explore.')}],
 ['Show me a dig',()=>{close();select(objects.find(o=>o.id==='dig'))}],
 ['Previous activity',()=>{close();select(objects.find(o=>o.id===s.last)||objects.find(o=>o.id===zones[s.zone].home))}],
 ['Repeat guidance',()=>say('Tap a picture to explore. Tap the pickaxe to dig. Nothing needs holding or dragging.')],
 ['Return home',()=>{close();select(objects.find(o=>o.id===zones[s.zone].home))}],
 ['Build PIP',()=>nativePipWorkshop()]
 ]);}
function listenJournal(message){if(typeof speechSynthesis!=='undefined'){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(message);u.volume=s.settings.volume;u.rate=.85;speechSynthesis.speak(u)}}
function journal(){open('My Journal','My stories. My discoveries. My adventures.','',[
 ...journalSections.map(section=>[section.icon+' '+section.title,()=>journalPage(section.id)]),
 ['Listen',()=>listenJournal('My journal. Choose what I did, what I discovered, my adventures, my experiments, or my minerals.')]
 ]);}
function journalPage(id,page=0){const section=journalSections.find(x=>x.id===id),entries=getJournalEntries(id,s.found,s.visited,objects,materials,s.farm,s.construction),chunk=entries.slice(page*3,page*3+3);const options=chunk.map(e=>[e.icon+' '+e.title,()=>journalDetail(e,id,page)]);if(!entries.length)options.push(['Explore',()=>{close();select(objects.find(o=>o.id===section.target))}]);options.push(['My Journal',journal]);if(page>0)options.push(['Previous page',()=>journalPage(id,page-1)]);if(entries.length>(page+1)*3)options.push(['Next page',()=>journalPage(id,page+1)]);if(options.length<6)options.push(['Listen',()=>listenJournal(section.title+'. '+(entries.length?chunk.map(e=>e.summary).join(' '):section.empty))]);open(section.title,entries.length?section.intro:section.empty,section.icon,options);}
function journalDetail(entry,section,page){open(entry.title,entry.summary+'\n'+entry.fact,entry.icon,[['Listen',()=>listenJournal(entry.summary+' '+entry.fact)],['Do It Again',()=>{close();select(objects.find(o=>o.id===entry.target))}],['Back to '+journalSections.find(x=>x.id===section).title,()=>journalPage(section,page)]]);}

function nativeFarm(route='home',message=''){const v=farmView(s.farm,route);open(v.title,v.body,'',v.actions.map(a=>[a.label,()=>{const result=farmAction(s.farm,a.action);s.farm=result.farm;if(result.travel){close();select(objects.find(o=>o.id===result.travel))}else nativeFarm(result.route,result.message)}]));obj('CardBody').setCharacterSize(17);text('CardBody',(message?message+'\n':'')+v.body.replace(/(.{1,46})(?:\s|$)/g,'$1\n').trim());obj('CardVisual').hide();obj('FarmArt').hide(false);obj('FarmArt').setAnimation(Math.max(0,farmArtKeys.indexOf(farmArtKey(s.farm,route))));if(s.buttons.length<6){const i=s.buttons.length;obj('Option'+i).hide(false);obj('OptionLabel'+i).hide(false);text('OptionLabel'+i,'Listen');s.buttons.push({name:'Option'+i,fn:()=>listenJournal(v.body)})}}
function settings(){const v=s.settings;open('Settings','All activities wait for you. No scores or penalties.','TAKE YOUR TIME',[
 ['Volume '+Math.round(v.volume*100)+'%',()=>{v.volume=v.volume>=1?0:Math.min(1,Math.round((v.volume+.25)*100)/100);settings()}],
 ['Narration '+(v.narration?'ON':'OFF'),()=>{v.narration=!v.narration;settings()}],
 ['Reduced animation '+(v.reduced?'ON':'OFF'),()=>{v.reduced=!v.reduced;settings()}],
 ['Visual effects '+(v.effects?'ON':'OFF'),()=>{v.effects=!v.effects;obj('Marker').hide(!v.effects);settings()}]
 ]);}
if(!s.initialized){s.initialized=true;actor.setAnimation(s.crew);text('ActiveCrew',roster[s.crew][0]+' | '+roster[s.crew][1]+' | '+roster[s.crew][2]);close();nativeZone('grounds');say('Tap a picture or the ground to explore. PIP can help.');gdjs.evtTools.input.touchSimulateMouse(runtimeScene,true);}
const actions=s.overlay?[{name:'Close',fn:close},...s.buttons]:s.construction.active||s.construction.orbit?nativeBuildActions():[
 {name:'PipButton',fn:pip},{name:'JournalButton',fn:journal},{name:'SettingsButton',fn:settings},
 {name:'PauseButton',fn:()=>{s.paused=!s.paused;text('PauseLabel',s.paused?'Resume':'Pause');say(s.paused?'Paused. Take your time.':'Ready to explore.')}},
 {name:'CrewButton',fn:crewMenu},
 ...nativeActiveObjects().map(o=>({name:'Target_'+o.id,fn:()=>{if(!s.paused)select(o)}}))];
const key=k=>gdjs.evtTools.input.isKeyPressed(runtimeScene,k);
if(key('Escape')&&s.overlay)close();
if(key('Tab')&&!s.tab)s.focus=(s.focus+1)%actions.length;
s.tab=key('Tab');s.focus%=actions.length;
if(key('Return')&&!s.enter)actions[s.focus].fn();s.enter=key('Return');
const x=gdjs.evtTools.input.getCursorX(runtimeScene,'',0),y=gdjs.evtTools.input.getCursorY(runtimeScene,'',0);
const released=gdjs.evtTools.input.isMouseButtonReleased(runtimeScene,'Left'),held=gdjs.evtTools.input.isMouseButtonPressed(runtimeScene,'Left');
let dropped=false;
if(s.overlay==='PIP Workshop'){
 if(held&&!s.pipHeld){const i=(s.pipParts||[]).findIndex((p,i)=>{const b=obj('PipPart'+i);return x>=b.getX()&&x<=b.getX()+b.getWidth()&&y>=b.getY()&&y<=b.getY()+b.getHeight()});if(i>=0)s.pipDrag={x,y,index:i,active:false};}
 if(s.pipDrag){if(held&&Math.hypot(x-s.pipDrag.x,y-s.pipDrag.y)>12)s.pipDrag.active=true;if(s.pipDrag.active&&held){obj('PipGhost').hide(false);obj('PipGhost').setPosition(x-30,y-30);}if(released){const d=s.pipDrag;s.pipDrag=null;obj('PipGhost').hide();if(d.active){dropped=true;if(x>=115&&x<=455&&y>=180&&y<=440)nativePipFit(s.pipTab,s.pipParts[d.index].id);else text('WorkshopNote','Part put back. Tap it any time to attach it.');}}else if(!held){s.pipDrag=null;obj('PipGhost').hide();}}
}else{s.pipDrag=null;obj('PipGhost').hide();}
s.pipHeld=held;
if(released&&!dropped){
 const hit=actions.find(a=>{const o=a.object||obj(a.name);return x>=o.getX()&&x<=o.getX()+o.getWidth()&&y>=o.getY()&&y<=o.getY()+o.getHeight()});
 if(hit)hit.fn();else if(!s.overlay&&s.construction.active){if(!s.paused&&x>=120&&x<840&&y>=180&&y<480){placeBuild(s.construction,Math.floor((x-120)/60),Math.floor((y-180)/60));say('Prefab placed or changed.')}}else if(!s.overlay&&s.construction.orbit){}else if(!s.overlay&&!s.paused&&s.zone==='dig'&&y>150&&y<520){nativeDigSelect(x,y);}else if(!s.overlay&&!s.paused&&y>95&&y<520){s.started=true;s.pending=null;s.action=0;s.journey=null;s.path=pathfind([actor.getX()+20,actor.getY()+45],[x,y],s.zone);obj('Marker').setPosition(x-12,y-12);obj('Marker').hide(!s.settings.effects);say(s.path.length?'Walking to your marker.':'Choose the path around the pond.');}
}
const dt=Math.min(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene),.05);
if(!s.paused&&!s.overlay&&!s.construction.active&&!s.construction.orbit){
 if(s.zone==='dig')nativeDigTick(dt);else if(s.path.length){const [x,y]=s.path[0],ax=actor.getX()+20,ay=actor.getY()+45,dx=x-ax,dy=y-ay,d=Math.hypot(dx,dy),step=150*dt;if(d<=step){actor.setPosition(x-20,y-45);s.path.shift();if(!s.path.length&&s.pending){const o=s.pending;s.pending=null;arrive(o)}}else actor.setPosition(actor.getX()+dx/d*step,actor.getY()+dy/d*step);}
 if(s.action>0){s.action-=dt;if(s.action<=0){const m=materials[s.dig++%materials.length];s.visited.add('dig');s.found.add(m.id);card(m)}}
}
nativePipUpdate();nativeConstructionUpdate(dt);obj('AidenRig').hide(s.zone!=='dig'||s.crew!==3);obj('PipRig').hide(s.zone!=='dig'||!s.excavation.path.length);obj('PipRig').setPosition(obj('PipRobot').getX()+45,obj('PipRobot').getY()+40);obj('AidenRig').setPosition(actor.getX()+35,actor.getY()+24);for(const key of ['bridge','water','habitat'])obj('FarmBuilt'+key).hide(s.zone!=='farm'||!(s.farm.upgrades[key]||(key==='water'?s.farm.constructionModules.some(k=>['pipe-kit','valve-kit'].includes(k)):key==='bridge'?s.farm.constructionModules.some(k=>['beam-kit','foundation-kit','tower-kit'].includes(k)):s.farm.constructionModules.includes('printed-kit'))));
obj('Focus').setZOrder(s.overlay?51:s.construction.active||s.construction.orbit?7:3);obj('Focus').setOpacity(actions[s.focus].object?80:255);
obj('Focus').setPosition((actions[s.focus].object||obj(actions[s.focus].name)).getX()-5,(actions[s.focus].object||obj(actions[s.focus].name)).getY()-5);obj('Focus').setWidth((actions[s.focus].object||obj(actions[s.focus].name)).getWidth()+10);obj('Focus').setHeight((actions[s.focus].object||obj(actions[s.focus].name)).getHeight()+10);

nativeSaveProfile();
