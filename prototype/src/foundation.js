// Assets are optional: geometric presentation remains usable if an asset fails.
export class AssetLoader {
  constructor(){this.images=new Map();}
  async load(manifest){await Promise.all(Object.entries(manifest).map(([key,url])=>new Promise(resolve=>{const img=new Image();img.onload=()=>{this.images.set(key,img);resolve()};img.onerror=()=>resolve();img.src=url})));return this;}
  get(key){return this.images.get(key);}
}
export class SceneManager {
  constructor(){this.current='welcome';}
  enter(name){if(!['welcome','grounds'].includes(name))throw new Error('Unknown scene');this.current=name;}
}
export class CharacterRegistry {
  constructor(roster){this.roster=roster;this.active=roster[0];this.visuals=new Map();}
  register(name,visual){if(!this.roster.some(r=>r[0]===name))throw new Error('Unknown canonical character');this.visuals.set(name,visual);}
  select(name){if(!this.visuals.has(name))return false;this.active=this.roster.find(r=>r[0]===name);return true;}
}
