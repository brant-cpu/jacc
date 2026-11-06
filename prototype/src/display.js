// Independent preferences; no single palette serves every kind of color vision.
export function displayPreferences(raw={}){return {highContrast:raw?.highContrast===true,colorBlind:raw?.colorBlind===true};}
export function destinationBadge(objects,id){const o=objects.find(o=>o.id===id);return o?String(objects.filter(x=>x.zone===o.zone).findIndex(x=>x.id===id)+1):'';}
