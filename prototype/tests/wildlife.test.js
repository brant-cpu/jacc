import test from 'node:test';import assert from 'node:assert/strict';
import {normalizeExpeditions,expeditionEnter,expeditionAction,expeditionCell,expeditionCamera} from '../src/expeditions.js';
import {wildlifeTypes,wildlifeSvg,wildlifeClock,expeditionWildlife,landscapeWildlife} from '../src/wildlife.js';

test('original wildlife art uses polygon primitives with two bounded frames per animal',()=>{
 for(const type of wildlifeTypes)for(const frame of [0,1]){const svg=wildlifeSvg(type,frame);assert.match(svg,/<polygon /);assert.doesNotMatch(svg,/<(?:image|script|ellipse|circle)\b/);assert.match(svg,/viewBox="0 0 64 48"/);}
});
test('habitats stream stable bounded wildlife without changing navigation or save data',()=>{
 const s=normalizeExpeditions({seed:2063});for(const mode of ['sky','forest','ocean','cave','farm']){
  expeditionEnter(s,mode);const before=JSON.stringify(normalizeExpeditions(s));const a=expeditionWildlife(s,0);assert.ok(a.length>0,mode);assert.ok(a.length<=32);assert.deepEqual(a,expeditionWildlife(s,0));assert.equal(JSON.stringify(normalizeExpeditions(s)),before);assert.notDeepEqual(a,expeditionWildlife(s,2));
  for(const o of a){assert.ok(wildlifeTypes.includes(o.type));assert.ok(o.w>0&&o.h>0);assert.ok(Number.isFinite(o.x)&&Number.isFinite(o.y));}
 }
});
test('space and mantle contain no wildlife or weather, cave animals stay in open passages and ocean life avoids rock',()=>{
 const s=normalizeExpeditions();expeditionEnter(s,'sky');expeditionAction(s,{type:'band',index:1});assert.deepEqual(expeditionWildlife(s,4),[]);expeditionEnter(s,'cave');expeditionAction(s,{type:'band',index:4});assert.deepEqual(expeditionWildlife(s,4),[]);
 expeditionAction(s,{type:'band',index:2});const cave=s.worlds.cave,camera=expeditionCamera(cave,'cave');for(const o of expeditionWildlife(s,1))assert.equal(expeditionCell(cave,'cave',Math.floor((o.x+camera.x)/40),Math.floor((o.y+camera.y-95)/40)).solid,false);
 expeditionEnter(s,'ocean');for(const index of [0,1,2,3,4]){expeditionAction(s,{type:'band',index});const w=s.worlds.ocean,c=expeditionCamera(w,'ocean');for(const o of expeditionWildlife(s,5)){for(const dx of [0,o.w-1])for(const dy of [0,o.h-1])assert.equal(expeditionCell(w,'ocean',Math.floor((o.x+c.x+dx)/40),Math.floor((o.y+c.y-95+dy)/40)).solid,false);}}
});
test('pause, menus, inactivity, reduced animation and reduced effects freeze wildlife without a time jump',()=>{
 for(const setting of [{started:false},{paused:true},{overlay:true},{reduced:true},{effects:false}])assert.equal(wildlifeClock(12,.05,setting),12);
 assert.equal(wildlifeClock(12,.05,{}),12.05);assert.equal(wildlifeClock(12,-1,{}),12);assert.equal(wildlifeClock(12,10,{}),12.05);
});
test('authored outdoor spaces have wildlife, freshwater stays separate and indoor labs remain clear',()=>{
 for(const zone of ['grounds','farm','forest','flight','rocketlab','dig','diglands','engineering','machineyard','chapterEarth'])assert.ok(landscapeWildlife(zone).length,zone);
 assert.ok(landscapeWildlife('aquatic',[0,0],0,{habitat:'lake'}).every(o=>o.type==='trout'));assert.ok(landscapeWildlife('aquatic',[0,0],0,{habitat:'reef'}).some(o=>o.type==='coral'));
 for(const zone of ['hq','coding','robotics','magnetism','chapterMoon','elevator'])assert.deepEqual(landscapeWildlife(zone),[]);
});
