// Approved onboarding copy. GSEINHQ is deliberately not expanded.
export const firstVisitScript={
 welcome:'Welcome, Junior Astronaut! How would you like to explore today?',
 crew:'Every astronaut brings a different kind of know-how. Pick the J.A.C.C. you’d like to explore with!',
 arrival:'Welcome to GSEINHQ! This is your place to get ready, discover new things, and see what’s happening around the team. Tap anything that catches your eye.',
 discovery:'Nice discovery! You can keep exploring, or tap me if you’d like a clue.'
};
export const firstVisitModes=[{id:'explore',icon:'🌍',name:'Explore',description:'Roam freely; invite PIP for help.'},{id:'guided',icon:'🧭',name:'Guided Adventure',description:'One small, optional goal at a time.'},{id:'adaptive',icon:'♿',name:'Adaptive Play',description:'Choose comfortable supports.'}];
export function normalizeFirstVisit(raw={}){const r=raw&&typeof raw==='object'?raw:{};return {mode:firstVisitModes.some(m=>m.id===r.mode)?r.mode:'explore',movement:r.movement==='destinations'?'destinations':'free',extraTime:r.extraTime===true,entered:r.entered===true,interacted:r.interacted===true};}
export function chooseFirstVisit(raw,mode){const s=normalizeFirstVisit(raw);if(firstVisitModes.some(m=>m.id===mode))s.mode=mode;return s;}
export function firstVisitGoal(mode,list,visited,position){if(mode!=='guided')return null;const eligible=list.filter(o=>o.zone==='hq'&&!['portal','crew','workshop','chapter'].includes(o.kind)),fresh=eligible.filter(o=>!visited.has(o.id));return (fresh.length?fresh:eligible).sort((a,b)=>Math.hypot(a.x-position[0],a.y-position[1])-Math.hypot(b.x-position[0],b.y-position[1]))[0]||null;}
