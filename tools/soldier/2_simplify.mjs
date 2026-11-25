import fs from 'fs';
import { MeshoptSimplifier as S } from 'meshoptimizer';
await S.ready;
const pos = new Float32Array(fs.readFileSync('wpos.bin').buffer.slice(0));
const idx = new Uint32Array(fs.readFileSync('widx.bin').buffer.slice(0));
for (const [name, tris] of [['hi', 16000], ['lo', 2400]]) {
  const [out, err] = S.simplify(idx, pos, 3, tris * 3, 0.5, []);
  console.log(name, out.length / 3, 'err', err);
  fs.writeFileSync(name + '_idx.bin', Buffer.from(out.buffer, out.byteOffset, out.byteLength));
}
