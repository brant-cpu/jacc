// Optional authoring only; generated art is checked in.
import {createRequire} from 'node:module';import {farmSvg,farmArt,farmArtKeys} from '../../prototype/src/farm.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
await sharp(Buffer.from(farmSvg())).png().toFile(new URL('../assets/farm-backdrop.png',import.meta.url).pathname);
for(const key of farmArtKeys)await sharp(Buffer.from(farmArt(key))).png().toFile(new URL('../assets/farm-art-'+key+'.png',import.meta.url).pathname);
