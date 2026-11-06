// Optional authoring tool: requires sharp. Generated PNGs are checked in; playing/building does not need sharp.
import {createRequire} from 'node:module';import fs from 'node:fs';
import {pipSvg,pipGroups,pipPalette,standardPip,pipScience,pipToolArt,pipToolArtKeys} from '../../prototype/src/pip.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
const out=new URL('../assets/',import.meta.url);
for(const color of pipPalette)await sharp(Buffer.from(pipSvg({...standardPip(),color:color.id},'body'))).png().toFile(new URL('pip-body-'+color.id+'.png',out).pathname);
for(const g of pipGroups)for(const p of g.parts)await sharp(Buffer.from(pipSvg({...standardPip(),[g.id]:p.id},g.id))).png().toFile(new URL('pip-'+g.id+'-'+p.id+'.png',out).pathname);
const grid='<svg xmlns="http://www.w3.org/2000/svg" width="340" height="260"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#49717f" stroke-width="1"/></pattern></defs><rect width="340" height="260" fill="#163f53"/><rect width="340" height="260" fill="url(#grid)"/></svg>';
await sharp(Buffer.from(grid)).png().toFile(new URL('pip-blueprint.png',out).pathname);
console.log('Original PIP schematic part assets generated.');

for(const [id,a] of Object.entries(pipScience)){let circles='',x=25;for(const [symbol,name,count] of a.atoms){for(let i=0;i<count;i++){circles+=`<circle cx="${x}" cy="72" r="19" fill="#fffbed" stroke="#234d61" stroke-width="3"/><text x="${x}" y="79" text-anchor="middle" font-size="18" font-family="sans-serif" fill="#17384a">${symbol}</text>`;x+=46;}}const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="130"><rect width="700" height="130" rx="18" fill="#d9eae5"/><text x="20" y="28" font-family="sans-serif" font-size="22" fill="#17384a">${a.formula} // illustrated formula pattern</text>${circles}</svg>`;await sharp(Buffer.from(svg)).png().toFile(new URL('pip-science-'+id+'.png',out).pathname);}

for(const key of pipToolArtKeys)await sharp(Buffer.from(pipToolArt(key))).png().toFile(new URL('pip-tool-art-'+key+'.png',out).pathname);
