import {createRequire} from 'node:module';const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(const name of ['button','panel']){const svg='<svg xmlns="http://www.w3.org/2000/svg" width="360" height="180"><rect x="4" y="4" width="352" height="172" rx="18" fill="white" stroke="black" stroke-width="8"/></svg>';await sharp(Buffer.from(svg)).png().toFile(new URL('../assets/'+name+'-hc.png',import.meta.url).pathname);}

await sharp(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="black" opacity=".35"/></svg>')).png().toFile(new URL('../assets/dim-scenery.png',import.meta.url).pathname);
