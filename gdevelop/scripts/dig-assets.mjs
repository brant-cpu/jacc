import {createRequire} from 'node:module';import {digArt,digArtKeys,engineeringArt} from '../../prototype/src/excavation.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(const k of digArtKeys)await sharp(Buffer.from(digArt(k))).png().toFile(new URL('../assets/dig-art-'+k+'.png',import.meta.url).pathname);
for(const p of ['bridge','water','habitat'])await sharp(Buffer.from(engineeringArt(p))).png().toFile(new URL('../assets/design-'+p+'.png',import.meta.url).pathname);
for(const [name,color]of Object.entries({soil:'#b59a73',sediment:'#9c7c68',rock:'#77717b',hard:'#66616e',open:'#283f4b',lava:'#e79856'})){const svg='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="39" height="39" fill="'+color+'"/>'+(name==='open'?'<path d="M8 8v25m21-25v25M8 30h24" stroke="#b8a47a" stroke-width="3"/>':'')+'</svg>';await sharp(Buffer.from(svg)).png().toFile(new URL('../assets/dig-tile-'+name+'.png',import.meta.url).pathname);}

for(const [key,flag]of [['echo','ping'],['groundwater','water'],['formations','formation']])await sharp(Buffer.from(digArt(key,{[flag]:1}))).png().toFile(new URL('../assets/dig-art-'+key+'-alt.png',import.meta.url).pathname);
const rig='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32"><rect x="3" y="7" width="30" height="19" rx="4" fill="#edc74d" stroke="#234d61" stroke-width="3"/><path d="M34 8l25 9-25 9" fill="#9db5bf" stroke="#234d61" stroke-width="3"/></svg>';await sharp(Buffer.from(rig)).png().toFile(new URL('../assets/dig-rig.png',import.meta.url).pathname);
