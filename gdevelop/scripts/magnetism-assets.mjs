import {createRequire} from 'node:module';import {magnetArtKeys,magnetArt} from '../../prototype/src/magnetism.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(const key of magnetArtKeys)await sharp(Buffer.from(magnetArt(key))).png().toFile(new URL('../assets/magnet-art-'+key+'.png',import.meta.url).pathname);
