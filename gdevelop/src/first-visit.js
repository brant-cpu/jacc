function nativeFirstVisitWelcome(){open('First Visit: GSEINHQ',firstVisitScript.welcome,'PIP',[
 ...firstVisitModes.map(m=>[m.icon+' '+m.name+'\n'+m.description,()=>{s.firstVisit=chooseFirstVisit(s.firstVisit,m.id);if(m.id==='adaptive')nativeFirstVisitSupports();else nativeFirstVisitCrew();}]),['Skip setup / enter GSEINHQ',nativeEnterFirstVisitHQ],['Read choices aloud',()=>listenJournal(firstVisitScript.welcome+' '+firstVisitModes.map(m=>m.name+'. '+m.description).join(' '))]
 ]);listenJournal(firstVisitScript.welcome+' '+firstVisitModes.map(m=>m.name+'. '+m.description).join(' '));}
function nativeFirstVisitSupports(){const p=s.firstVisit,v=s.settings;open('Play comfortably','Optional supports. Both movement choices travel automatically. Extra time lengthens short switch-scan windows; all activities already wait.','',[
 ['Movement: '+(p.movement==='destinations'?'Tap destinations':'Move freely / tap ground'),()=>{p.movement=p.movement==='destinations'?'free':'destinations';nativeFirstVisitSupports()}],['Pace: '+(p.extraTime?'Extra time':'Standard pace'),()=>{p.extraTime=!p.extraTime;if(p.extraTime)v.access.scanMs=Math.max(5000,v.access.scanMs);nativeFirstVisitSupports()}],['Sound '+(v.volume?'ON':'OFF'),()=>{v.volume=v.volume?0:.3;nativeFirstVisitSupports()}],['Visual effects '+(v.effects?'ON':'OFF'),()=>{v.effects=!v.effects;nativeFirstVisitSupports()}],['Read aloud '+(v.narration?'ON':'OFF'),()=>{v.narration=!v.narration;nativeFirstVisitSupports()}],['Continue / skip supports',()=>nativeFirstVisitCrew()]
 ]);}
function nativeFirstVisitCrew(page=0){open('Choose a J.A.C.C.',firstVisitScript.crew,'',[
 ...roster.slice(page*4,page*4+4).map((r,i)=>[r[0]+' / '+r[1]+'\n'+r[2].split(' — ').at(-1),()=>{s.jaccBuilder.activeId=null;s.suit.overlay=null;s.crew=page*4+i;actor.setAnimation(s.crew);text('ActiveCrew',r[0]+' | '+r[1]+' | '+r[2]);nativeEnterFirstVisitHQ();}]),...(page>0?[['Previous crew',()=>nativeFirstVisitCrew(page-1)]]:[]),...(roster.length>(page+1)*4?[['More crew',()=>nativeFirstVisitCrew(page+1)]]:[]),['Keep astronaut / enter GSEINHQ',nativeEnterFirstVisitHQ]
 ]);}
function nativeEnterFirstVisitHQ(){close();nativeAccessPause(false);s.started=true;s.construction.active=null;s.construction.orbit=false;s.suit.overlay=null;s.firstVisit.entered=true;nativeZone('hq');const goal=firstVisitGoal(s.firstVisit.mode,objects,s.visited,[actor.getX()+20,actor.getY()+45]);open('Welcome to GSEINHQ',firstVisitScript.arrival,'PIP',[
 ...(goal?[['Optional: '+goal.name,()=>{close();select(goal)}]]:[]),['Keep exploring',close],['Listen',()=>listenJournal(firstVisitScript.arrival)]
 ]);}
function nativeFirstVisitGoal(){const goal=firstVisitGoal(s.firstVisit.mode,objects,s.visited,[actor.getX()+20,actor.getY()+45]);open('PIP’s optional clue',goal?'You could look at '+goal.name+'. Or keep exploring your own way.':'You can revisit anything, or keep exploring.','',[
 ...(goal?[[goal.icon+' '+goal.name,()=>{close();select(goal)}]]:[]),['Keep exploring',close]
 ]);}
