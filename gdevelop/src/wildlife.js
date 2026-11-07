function nativeWildlifeUpdate(dt){
 s.wildlifeTime=wildlifeClock(s.wildlifeTime||0,dt,{started:s.started,paused:s.paused,overlay:!!s.overlay,reduced:s.settings.reduced,effects:s.settings.effects});
 const poses=s.construction.active||s.construction.orbit?[]:s.expeditions.active?expeditionWildlife(s.expeditions,s.wildlifeTime):landscapeWildlife(s.zone,spaceCamera(s.zone,[actor.getX()+20,actor.getY()+45]),s.wildlifeTime,{habitat:s.aquatic.habitat,level:s.excavation.level,clearCells:s.zone==='dig'?s.excavation.cleared[s.excavation.level]:s.openWorld.cleared});
 for(let i=0;i<32;i++){const o=obj('Wildlife'+i),pose=poses[i];o.hide(!pose);if(!pose)continue;o.setPosition(pose.x,pose.y);o.setWidth(pose.w);o.setHeight(pose.h);o.setAnimation(wildlifeArtKeys.indexOf(pose.type+'-'+pose.frame));o.setZOrder(pose.type==='cloud'?1:2);if(typeof o.flipX==='function')o.flipX(pose.flip);}
}
