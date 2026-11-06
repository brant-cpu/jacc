import {createRequire} from 'node:module';import {aquaticArt,aquaticArtKeys,aquaticBackdrop} from '../../prototype/src/aquatic.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(const key of aquaticArtKeys)await sharp(Buffer.from(aquaticArt(key))).png().toFile(new URL('../assets/aqua-art-'+key+'.png',import.meta.url).pathname);
for(const key of ['lake','reef','deep'])await sharp(Buffer.from(aquaticBackdrop(key))).png().toFile(new URL('../assets/aqua-background-'+key+'.png',import.meta.url).pathname);
const sub='<svg xmlns="http://www.w3.org/2000/svg" width="130" height="80"><ellipse cx="70" cy="40" rx="58" ry="34" fill="#efd17c"/><path d="M0 25h20v30H0z" fill="#e0bb64"/><ellipse cx="70" cy="38" rx="32" ry="29" fill="#9bcbd7"/></svg>';await sharp(Buffer.from(sub)).png().toFile(new URL('../assets/aqua-sub.png',import.meta.url).pathname);
