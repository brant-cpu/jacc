// Original instructional schematics; no production character art.
import {createRequire} from 'node:module';
import {suitArtKeys,suitArt,suitOverlay} from '../../prototype/src/suits.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp'),out=new URL('../assets/',import.meta.url);
for(const key of suitArtKeys)await sharp(Buffer.from(suitArt(key))).png().toFile(new URL('suit-art-'+key+'.png',out).pathname);
const ring='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="47" stroke="#ac72df" stroke-width="5" opacity=".8" fill="none"/></svg>',link='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="4"><path d="M0 2h100" stroke="#ac72df" stroke-width="4" opacity=".8" stroke-dasharray="10 8"/></svg>';await sharp(Buffer.from(ring)).png().toFile(new URL('suit-ring.png',out).pathname);await sharp(Buffer.from(link)).png().toFile(new URL('suit-link.png',out).pathname);const grid=suitOverlay({id:'measure-map',kind:'all'},'no-zone');await sharp(Buffer.from(grid)).png().toFile(new URL('suit-grid.png',out).pathname);
console.log('Suit diagrams and shared ring/link/grid textures generated.');
