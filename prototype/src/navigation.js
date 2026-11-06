import {openSpaces,openBlocked} from './open-spaces.js';
import {aquaticBlocked} from './aquatic.js';
import {farmBlocked} from './farm.js';
import {hqBlocked} from './zones.js';
export const COLS=25, ROWS=15, CELL=40;
// The pond is blocked. Hill and ramp/platform cells are traversable automatically.
export function blocked(x,y,zone='grounds'){if(openSpaces[zone])return openBlocked(x,y,zone);if(zone==='aquatic')return aquaticBlocked(x,y);if(zone==='dig')return false;if(zone==='engineering')return x===0||x===24||y<=2||y>=13;if(zone==='hq')return hqBlocked(x,y);if(zone==='farm')return farmBlocked(x,y);return x>=13&&x<=16&&y>=4&&y<=7;}
export function cellAt(x,y,zone='grounds'){const cols=openSpaces[zone]?.width/CELL||COLS,rows=openSpaces[zone]?.height/CELL||ROWS;return [Math.max(0,Math.min(cols-1,Math.floor(x/CELL))),Math.max(0,Math.min(rows-1,Math.floor(y/CELL)))];}
export function pathfind(from,to,zone='grounds'){const cols=openSpaces[zone]?.width/CELL||COLS,rows=openSpaces[zone]?.height/CELL||ROWS,start=cellAt(...from,zone),goal=cellAt(...to,zone);if(blocked(...goal,zone))return [];const key=p=>p.join(',');const queue=[start],parents=new Map([[key(start),null]]);for(let i=0;i<queue.length;i++){const p=queue[i];if(key(p)===key(goal)){const out=[];let c=p;while(parents.get(key(c))!==null){out.push([c[0]*CELL+20,c[1]*CELL+20]);c=parents.get(key(c));}return out.reverse();}for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const n=[p[0]+dx,p[1]+dy];if(n[0]<0||n[1]<0||n[0]>=cols||n[1]>=rows||blocked(...n,zone)||parents.has(key(n)))continue;parents.set(key(n),p);queue.push(n);}}return [];}
