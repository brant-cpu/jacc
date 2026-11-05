const fs=require('node:fs'),assert=require('node:assert/strict'),path=require('node:path');
const p=JSON.parse(fs.readFileSync(path.join(__dirname,'../game.json'))),scene=p.layouts[0];
assert.equal(p.firstLayout,scene.name);assert.equal(p.properties.orientation,'landscape');
const names=new Set(scene.objects.map(o=>o.name));assert.equal(names.size,scene.objects.length);
for(const i of scene.instances)assert.ok(names.has(i.name));
for(const r of p.resources.resources)assert.ok(fs.existsSync(path.join(__dirname,'..',r.file)),r.file);
const map=new Map(scene.instances.map(i=>[i.name,{...i,hidden:false,getX(){return this.x},getY(){return this.y},getWidth(){return this.width},getHeight(){return this.height},setPosition(x,y){this.x=x;this.y=y},setWidth(w){this.width=w},setHeight(h){this.height=h},hide(v=true){this.hidden=v},setOpacity(v){this.opacity=v},setString(v){this.string=v},setAnimation(v){this.animation=v},setZOrder(v){this.zOrder=v}}]));
const runtimeScene={getObjects:n=>[map.get(n)]};let cursor={x:0,y:0},release=false,keys=new Set();
const gdjs={evtTools:{input:{touchSimulateMouse(){},isKeyPressed:(s,k)=>keys.has(k),getCursorX:()=>cursor.x,getCursorY:()=>cursor.y,isMouseButtonReleased:()=>release},runtimeScene:{getElapsedTimeInSeconds:()=>.05}}};
const run=Function('runtimeScene','gdjs',scene.events.find(e=>e.inlineCode).inlineCode.join('\n'));const frame=()=>run(runtimeScene,gdjs);
const tick=n=>{for(let i=0;i<n;i++)frame()};
const click=name=>{const o=map.get(name);cursor={x:o.x+10,y:o.y+10};release=true;frame();release=false};
frame();assert.equal(map.get('Panel').hidden,true);
const option=label=>{const b=runtimeScene.__jacc.buttons.find(b=>map.get(b.name.replace('Option','OptionLabel'))?.string.includes(label));assert.ok(b,label);click(b.name)};
click('JournalButton');assert.equal(runtimeScene.__jacc.overlay,'My Journal');assert.equal(runtimeScene.__jacc.buttons.length,6);option('My Experiments');assert.match(map.get('CardBody').string,/coming later/);option('My Journal');option('What I Did');assert.match(map.get('CardBody').string,/Tap a picture/);click('Close');
click('Target_dig');tick(200);assert.equal(runtimeScene.__jacc.overlay,'Quartz');click('Close');
for(const name of ['Iron-bearing mineral','Fossil','Quartz']){click('Target_dig');tick(50);assert.equal(runtimeScene.__jacc.overlay,name);click('Close')}
click('JournalButton');option('What I Discovered');assert.equal(runtimeScene.__jacc.buttons.length,5);option('Fossil');assert.match(map.get('CardBody').string,/ancient life/);option('Back to');option('My Journal');option('My Minerals');assert.equal(runtimeScene.__jacc.buttons.length,4);assert.ok(!runtimeScene.__jacc.buttons.some(b=>map.get(b.name.replace('Option','OptionLabel')).string.includes('Fossil')));click('Close');
click('PipButton');click('Option1');tick(100);assert.equal(runtimeScene.__jacc.overlay,'Iron-bearing mineral');click('Close');
click('PauseButton');const x=map.get('Alex').x;click('Target_rock');tick(100);assert.equal(map.get('Alex').x,x);click('PauseButton');
click('Target_crystal');tick(300);assert.equal(runtimeScene.__jacc.overlay,'Crystal lookout');click('Close');
click('SettingsButton');click('Option2');assert.equal(runtimeScene.__jacc.settings.reduced,true);click('Close');
keys.add('Return');frame();keys.clear();frame();assert.equal(runtimeScene.__jacc.overlay,'PIP');keys.add('Escape');frame();keys.clear();assert.equal(runtimeScene.__jacc.overlay,null);
console.log('PASS: native schema/resources, repeated geology, journal, PIP demonstration, pause, platform navigation, settings, keyboard event logic');
console.log('NOTE: native runtime API harness, not a GDevelop editor/renderer test.');

const roster=['Alex Thompson','Malik Adeyemi','Maya Rodriguez','Aiden Williams','Kaito Tanaka','Lucas Turner'];
const foundBefore=[...runtimeScene.__jacc.found];
for(let i=0;i<6;i++){click('CrewButton');assert.equal(runtimeScene.__jacc.buttons.length,6);assert.ok(map.get('CrewName'+i).string.includes(roster[i]));click('CrewCard'+i);assert.equal(runtimeScene.__jacc.crew,i);assert.equal(map.get('Alex').animation,i);assert.ok(map.get('ActiveCrew').string.includes(roster[i]));assert.equal(runtimeScene.__jacc.overlay,null);assert.deepEqual([...runtimeScene.__jacc.found],foundBefore);click('CrewButton');assert.ok(map.get('CrewName'+i).string.startsWith('[Selected]'));click('Close');}
click('Target_dig');tick(250);assert.equal(runtimeScene.__jacc.overlay,'Fossil');assert.equal(runtimeScene.__jacc.crew,5);click('Close');
console.log('PASS: all six native selections, selected state, discovery retention and digging after switching');

for(const target of ['plant','rock','magnet','bridge']){click('Target_'+target);tick(300);click('Close')}
click('JournalButton');option('What I Discovered');option('Next page');assert.equal(runtimeScene.__jacc.overlay,'What I Discovered');option('Next page');option('Previous page');option('My Journal');option('What I Did');option('I looked at a plant.');option('Do It Again');tick(300);assert.equal(runtimeScene.__jacc.overlay,'Living plant');click('Close');
console.log('PASS: journal empty states, five categories, fossil/mineral separation, pagination, back navigation and repeat activity');
