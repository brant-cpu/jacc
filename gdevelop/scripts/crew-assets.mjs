// Original geometric placeholders for the two new suits, not production character art.
import {createRequire} from 'node:module';
import {roster,suitColors} from '../../prototype/src/data.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
for(let i=6;i<roster.length;i++){
 const color=suitColors[roster[i][1]],svg=`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 40 56"><path d="M10 36h8v17h-8zm14 0h8v17h-8z" fill="#23384f"/><rect x="6" y="22" width="28" height="25" rx="3" fill="${color}"/><path d="M2 27h6v18H2zm30 0h6v18h-6z" fill="#e3e5cf"/><rect x="3" y="2" width="34" height="27" rx="7" fill="#f5f4e4"/><rect x="9" y="9" width="22" height="13" rx="3" fill="#28495e"/></svg>`;
 await sharp(Buffer.from(svg)).png().toFile(new URL('../assets/crew'+i+'.png',import.meta.url).pathname);
}
console.log('Original orange and purple suit placeholders generated.');
