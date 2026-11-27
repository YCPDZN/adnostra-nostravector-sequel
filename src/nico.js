// =====================================================================
//  NICO BROWN
// =====================================================================
// Born in 2000, frozen in the 2030s, awake since 2123. Wife of Daniel Brown, the man Orion Mascar fought in the
// Salt Lantern; mother of Orion Brown (born 2125), Croxian's son from long before he met Malia de Toro. (Lore: CODEX in data.js.)
//
// She is a townsperson, not a fighter: she spends her days between the plaque in the Salt Lantern and the Lantern
// Market behind it, walking round by the lane on the Lantern's east side. Walk up and she stops and turns to you;
// press E to talk. She uses the Ascendant skeleton (assets/nico.js, tools/nico/), so soldier.js animates her.
//
// main.js hands this file what it needs once, through initNico().
import { NICO_LINES } from './data.js';

let C = null;
export function initNico(ctx) { C = ctx; }

let N = null;   // her entity, in G.npcs
const spot = (id, x, z, lx, lz) => ({ id, x, z, lx, lz });
// where she spends her time, and which way she faces there
const SPOTS = [
  spot('lantern', -1.8, 55.2, 0.5, 56.0),     // by the plaque, where Orion Mascar fought her husband
  spot('market', -1.4, 118, -7, 118),          // browsing the stalls in the Lantern Market
  spot('market', 1.4, 133, 7, 133),
];
// from inside the Lantern's door, out and round by the lane on its east side, to the Market's north end
const ROUTE = [[0, 49], [0, 40], [21, 30], [21, 86], [0, 98]];

function pathBetween(from, to) {
  const V = C.V3, out = [];
  if (from.id !== to.id) { const r = from.id === 'lantern' ? ROUTE : ROUTE.slice().reverse(); for (const [x, z] of r) out.push(new V(x, 0, z)); }
  out.push(new V(to.x, 0, to.z));
  return out;
}

export function spawnNico() {
  if (!C.soldierReady('nico')) return;   // without her model she simply isn't in the world
  const { G, W, V3 } = C;
  const rig = C.makeSoldier({ model: 'nico', weapon: 'none', mats: C.SOLDIER_MATS });
  const at = SPOTS[0];
  N = { kind: 'npc', id: 'nico', name: 'Nico Brown', title: 'Wife of Daniel Brown', pos: new V3(at.x, 0, at.z), group: rig.group, rig, height: 1.85, radius: 0.45, alive: true,
    yaw: Math.atan2(at.lx - at.x, at.lz - at.z), move: 0, atk: 0, path: [], spot: at, stayT: C.rand(25, 60), sayT: C.rand(20, 50), greeted: false };
  N.group.position.copy(N.pos); N.group.rotation.y = N.yaw; W.scene.add(N.group);
  N.plate = C.makePlate('npc', `<div class="n">Nico Brown</div><div class="g">&lt;Wife of Daniel Brown&gt;</div>`);
  C.addHitbox(N, 0.8, 1.8, 0.8, 0.9);
  G.npcs.push(N);
}

export function updateNico(dt) {
  if (!N) return;
  const { G } = C, P = G.P, n = N;
  const dP = P ? C.d2(P.pos, n.pos) : 1e9;
  const talking = G.ui === 'dialog' && n.talking;
  if (!talking) n.talking = false;
  const near = P && !P.dead && dP < 4.2;
  if (n.path.length && !near && !talking) {
    // walking her round
    if (C.moveToward(n, n.path[0], 1.45, dt, 0.3)) n.path.shift();
    C.resolveCollision(n.pos, n.radius);
    if (!n.path.length) { n.yaw = Math.atan2(n.spot.lx - n.pos.x, n.spot.lz - n.pos.z); n.stayT = n.spot.id === 'lantern' ? C.rand(50, 110) : C.rand(30, 70); }
  } else {
    n.move = Math.max(0, n.move - dt * 4);
    if (near || talking) n.yaw = Math.atan2(P.pos.x - n.pos.x, P.pos.z - n.pos.z);   // she stops and turns to you
    else if (!n.path.length) {
      n.yaw = Math.atan2(n.spot.lx - n.pos.x, n.spot.lz - n.pos.z);
      n.stayT -= dt;
      if (n.stayT <= 0) {   // time to go: from the Lantern to a stall, between stalls, or back to the Lantern
        const next = n.spot.id === 'lantern' ? SPOTS[1 + (Math.random() < 0.5 ? 0 : 1)] : (Math.random() < 0.35 ? SPOTS.find(s => s.id === 'market' && s !== n.spot) : SPOTS[0]);
        n.path = pathBetween(n.spot, next); n.spot = next;
      }
    }
  }
  // now and then she says something to nobody in particular, if you're close enough to hear it
  n.sayT -= dt;
  if (n.sayT <= 0) { n.sayT = C.rand(40, 90); if (dP < 12 && !talking) C.addChat('say', n.name, C.pick(NICO_LINES.near)); }
  if (!near) n.greeted = false;
  n.group.position.set(n.pos.x, 0, n.pos.z); C.turnTo(n.group, n.yaw, dt, 5);
  C.animSoldier(n.rig, n, dt, G.time, n.lodNear !== false);
}

export function talkNico(text) {
  if (!N) return;
  N.talking = true;
  const say = t => talkNico(t);
  C.dialog('WIFE OF DANIEL BROWN', 'NICO BROWN', '', text || NICO_LINES.greet, '', [
    { label: 'THE YEAR 2000', gold: true, fn: () => say(NICO_LINES.woke) },
    { label: 'DANIEL', fn: () => say(NICO_LINES.daniel) },
    { label: 'YOUR SON', fn: () => say(NICO_LINES.son) },
    { label: 'LEAVE', fn: () => { C.addChat('say', 'Nico Brown', C.pick(NICO_LINES.bye)); N.talking = false; C.closeAllUI(); } },
  ]);
}
