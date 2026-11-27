// =====================================================================
//  NICO BROWN
// =====================================================================
// Born in 2000, frozen in the 2030s, awake since 2123. Wife of Daniel Brown, the man Orion Mascar fought in the
// Salt Lantern; mother of Orion Brown (born 2125), Croxian's son from long before he met Malia de Toro.
// (Lore: CODEX in data.js.)
//
// She is power level 3, like Malia, and lives the way the Mascars do (main.js, ALLIES): she walks the city and hunts
// the districts her power level allows, comes to your aid when Remnants go for you, will fight at your side if you
// ask, levels up from her kills, stops in at the Salt Lantern to stand by the plaque, and gets back up in Concordia
// Plaza when she falls. She fights with a pair of daggers, Shade-style. She is not a Mascar, so she can walk with you
// alongside Orion or Malia. She uses the Ascendant skeleton (assets/nico.js, tools/nico/), so soldier.js animates her.
//
// main.js hands this file what it needs once, through initNico().
import { NICO_LINES } from './data.js';

let C = null;
export function initNico(ctx) { C = ctx; }

export function spawnNico() {
  if (!C.soldierReady('nico')) return;   // without her model she simply isn't in the world
  const { G, W, V3, CONC } = C;
  const rig = C.makeSoldier({ model: 'nico', accent: 0xffb347, weapon: 'daggers', mats: C.SOLDIER_MATS });
  const n = C.allyBase({ legend: true, id: 'nico', name: 'Nico Brown', title: 'Wife of Daniel Brown', cls: 'shade', level: 15, rig, group: rig.group,
    pos: new V3(CONC.x + C.rand(-6, 6), 0, CONC.z + C.rand(-2, 4)), hp: 600, maxHp: 600, dmg: 19, atkCd: [0.8, 1.1], reach: 2.2, glow: 0xffb347,
    pron: 'She', poss: 'her', lines: NICO_LINES, pl: 3, zones: ['reservoir', 'tenements', 'rail'], respawnT: 45, height: 1.9, idleT: C.rand(8, 20),
    loungeSpot: new V3(-1.8, 0, 55.2), loungeLook: new V3(0.5, 0, 56) });   // in the Lantern, by the plaque where Orion fought her husband
  C.loadLegend(n);
  n.group.position.copy(n.pos); W.scene.add(n.group);
  C.allyPlate(n, 'npc'); C.addHitbox(n, 0.9, 2, 0.9, 1);
  G.bots.push(n);
}

export function talkNico(n, text) {
  C.allyDialog(n, 'WIFE OF DANIEL BROWN', text || C.pick(NICO_LINES.greet), [
    { label: 'THE YEAR 2000', fn: () => talkNico(n, NICO_LINES.woke) },
    { label: 'DANIEL', fn: () => talkNico(n, NICO_LINES.daniel) },
    { label: 'YOUR SON', fn: () => talkNico(n, NICO_LINES.son) },
  ]);
}
