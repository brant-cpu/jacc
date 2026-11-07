import {createRequire} from 'node:module';
import {wildlifeArtKeys,wildlifeSvg} from '../../prototype/src/wildlife.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(const key of wildlifeArtKeys){const [type,frame]=key.split('-');await sharp(Buffer.from(wildlifeSvg(type,+frame))).png().toFile(new URL('../assets/wildlife-'+key+'.png',import.meta.url).pathname);}
