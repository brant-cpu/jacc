function nativeMagnetLab(id,model=magnetStart()){
 const v=magnetView(id,model);
 open(v.title,v.text,'',v.actions.map(([label,action])=>[label,()=>{const next=magnetAction(model,action);if(next.tested)s.visited.add('magnet-trial-'+id);nativeMagnetLab(id,next)}]).concat([['Listen',()=>listenJournal(v.text+' '+v.fact)]]));
 obj('CardVisual').hide();obj('CardBody').setCharacterSize(17);text('CardBody',v.text.replace(/(.{1,43})(?:\s|$)/g,'$1\n').trim());obj('MagnetArt').hide(false);obj('MagnetArt').setAnimation(magnetArtKeys.indexOf(v.art));
}
