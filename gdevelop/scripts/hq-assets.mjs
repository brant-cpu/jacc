// Optional art authoring step; checked-in backdrop needs no runtime dependencies.
import {createRequire} from 'node:module';import {hqSvg} from '../../prototype/src/zones.js';
const require=createRequire(import.meta.url),sharp=require(process.env.JACC_SHARP_PATH||'sharp');
await sharp(Buffer.from(hqSvg())).png().toFile(new URL('../assets/hq-backdrop.png',import.meta.url).pathname);
