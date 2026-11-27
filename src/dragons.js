// =====================================================================
//  THE DRAGONS: Tuldran and Taiman
// =====================================================================
// Two dragons sworn to the Catharsis Remnants, each in a power level 8 lair inside the rampart: Tuldran in the west
// (beyond Kopje Heights), Taiman in the east (beyond Sunrise Ward). They never leave their lairs, or even their spot:
// they turn on nothing, they chase nothing. They claw what stands at their heads, breathe down the ground in front
// of them, sweep everything round them with wing and tail, and spit bolts at anything out of reach. When a Remnant in
// the lair is fighting, its dragon joins in from where it lies.
//
// Both are rigged (assets/tuldran.glb, assets/taiman.glb, made by tools/dragons/): every bone rests unrotated, so a
// rotation's x, y and z mean pitch, turn and roll in the dragon's own frame (+x its left, +y up, +z forward). They
// breathe, watch you, swing their tails, and every attack has its own move; see pose() below.
//
// This file has no imports: main.js hands it what it needs once, through initDragons(), so it is all in one place.

export const LAIR_R = 110;
export const LAIRS = [
  {
    id: 'tuldran', name: 'Tuldran', title: 'The Crimson Wing', x: -805, z: 0,
    yaw: Math.PI / 2,        // faces east, toward the city and the Kopje Heights tram stop
    length: 34, script: 'assets/tuldran.js', global: 'TULDRAN_GLB_B64', mouthTip: [0, 0.29, 0.5],
    glow: 0xff2b4a, breath: 0xff5a1e, bolt: 0xff3a2a, ember: 0.35,
    ground: ['#2e2220', '#241a18', '#3a2a24', '#5a1e1e'], crack: '#c0303a', mapGround: ['#3e2a26', '#2e201c', '#4a3028', '#8a2a2a'],
    guards: ['roostsworn', 'emberwing'],
    lines: {
      wake: 'The Catharsis remembers what you burned at Carax. I remember it for them.',
      call: 'You lay hands on the Sworn? Then burn with them.',
      rise: 'Sworn of the Catharsis, rise! Feed my fire!',
      fall: 'Zark... the fire... was yours...',
      back: 'Tuldran stirs again in the Roost. The Remnants of Kopje Heights howl.',
    },
  },
  {
    id: 'taiman', name: 'Taiman', title: 'The Dune Sleeper', x: 805, z: 0,
    yaw: -Math.PI / 2,       // faces west, toward the city and the Sunrise Ward tram stop
    length: 42, script: 'assets/taiman.js', global: 'TAIMAN_GLB_B64', mouthTip: [-0.02, 0.06, 0.5],
    glow: 0xe8a040, breath: 0xf0c060, bolt: 0xe8b04a, ember: 0,
    ground: ['#c9a66a', '#b8955a', '#d6b87c', '#a8844c'], crack: '#8a6a3a', mapGround: ['#d0b076', '#c0a066', '#dcc08a', '#b08c56'],
    guards: ['dunesworn', 'sanddrone'],
    lines: {
      wake: 'Sand buries every city in the end. Ad-Nostra will be the first.',
      call: 'The Sworn are mine to keep. Come and take them.',
      rise: 'Rise from the dune, Sworn of the Catharsis!',
      fall: 'The dune... remembers...',
      back: 'The dunes beyond Sunrise Ward shift. Taiman has woken.',
    },
  },
];
// The Catharsis Remnants that keep each lair (merged into main.js's VARIANTS)
export const DRAGON_VARIANTS = {
  roostsworn: { base: 'hollowed', name: 'Roost-Sworn Hollowed', armor: 0x2a0c0c, accent: 0xff3a2a, scale: 1.3, hp: 1.5, dmg: 1.3, atkCd: 2.0, radius: 0.7 },
  emberwing: { base: 'drone', name: 'Emberwing Drone', glow: 0xff5a1e, scale: 1.35, hp: 1.4, dmg: 1.25, radius: 1.1 },
  dunesworn: { base: 'hollowed', name: 'Dune-Sworn Hollowed', armor: 0x3a2c18, accent: 0xe8a040, scale: 1.3, hp: 1.6, dmg: 1.2, speed: 0.9, atkCd: 2.1, radius: 0.7 },
  sanddrone: { base: 'drone', name: 'Sandstorm Drone', glow: 0xf0c060, scale: 1.35, hp: 1.5, dmg: 1.2, radius: 1.1 },
};
export const DRAGON_PL = 8;
const GUARD_LV = [26, 30];

export function lairAt(x, z) {
  for (const L of LAIRS) { const dx = x - L.x, dz = z - L.z; if (dx * dx + dz * dz < LAIR_R * LAIR_R) return L.id; }
  return null;
}

let C = null;   // what main.js hands over: three.js classes, the game state and its helpers
export function initDragons(ctx) { C = ctx; }

// ---------------------------------------------------------------- models
const protos = {};
async function loadModel(L) {
  await new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = L.script;
    s.onload = res; s.onerror = () => rej(new Error('Could not load ' + L.script));
    document.head.appendChild(s);
  });
  const b64 = window[L.global]; window[L.global] = null;
  let buf;
  try { buf = await (await fetch('data:application/octet-stream;base64,' + b64)).arrayBuffer(); }
  catch (e) { const bin = atob(b64); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); buf = u.buffer; }
  const gltf = await new Promise((res, rej) => new C.GLTFLoader().parse(buf, '', res, rej));
  const root = gltf.scene;
  root.traverse(o => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false;   // the wings beat outside the rest pose's bounds
    const m = o.material; m.envMapIntensity = 0.9;
    if (L.ember && m.map) { m.emissive = new C.THREE.Color(L.glow); m.emissiveMap = m.map; m.emissiveIntensity = L.ember; }   // Tuldran's scales smoulder
  });
  const box = new C.THREE.Box3().setFromObject(root), sz = box.getSize(new C.THREE.Vector3());
  const bones = {}; root.traverse(o => { if (o.isBone) bones[o.name] = o; });
  // a marker at the tip of the jaws, carried by the head bone: breath and bolts come from here
  const mouth = new C.THREE.Object3D(); const hb = bones.head;
  if (hb) { const hw = new C.THREE.Vector3(); hb.updateWorldMatrix(true, false); hb.getWorldPosition(hw); mouth.position.set(L.mouthTip[0] - hw.x, L.mouthTip[1] - hw.y, L.mouthTip[2] - hw.z); hb.add(mouth); }
  protos[L.id] = { root, box, sz, bones, mouth };
}
export async function loadDragons() {
  for (const L of LAIRS) { try { await loadModel(L); } catch (err) { console.error(err); } }   // without a model, that lair keeps its Remnants but has no dragon
}

// ---------------------------------------------------------------- the lairs
const rnd = (a, b) => a + Math.random() * (b - a);
function groundTex(L) {
  return C.canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = L.ground[0]; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.fillStyle = L.ground[1 + (i % 3)]; const s = rnd(1, 4); g.fillRect(Math.random() * w, Math.random() * h, s, s); }
    g.strokeStyle = L.crack; g.globalAlpha = L.id === 'tuldran' ? 0.55 : 0.25; g.lineWidth = L.id === 'tuldran' ? 2 : 3;
    for (let i = 0; i < (L.id === 'tuldran' ? 40 : 26); i++) {   // cracks in the scorched rock, ripples in the sand
      let x = Math.random() * w, y = Math.random() * h; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += rnd(-30, 30) + (L.id === 'taiman' ? 24 : 0); y += rnd(-30, 30) * (L.id === 'taiman' ? 0.3 : 1); g.lineTo(x, y); }
      g.stroke();
    }
    g.globalAlpha = 1;
  }, 9);
}
function warnSign(L) {
  return C.canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#0b1118'; g.fillRect(0, 0, w, h); g.strokeStyle = '#ff4a5e'; g.lineWidth = 8; g.strokeRect(10, 10, w - 20, h - 20);
    g.textAlign = 'center'; g.fillStyle = '#ff4a5e'; g.font = 'bold 46px Bahnschrift, sans-serif'; g.fillText('☠ DRAGON LAIR ☠', w / 2, 78);
    g.fillStyle = '#ffffff'; g.font = 'bold 40px Bahnschrift, sans-serif'; g.fillText(L.name.toUpperCase(), w / 2, 140);
    g.fillStyle = '#ffd84a'; g.font = 'bold 34px Bahnschrift, sans-serif'; g.fillText('◆ POWER LEVEL 8', w / 2, 200);
    g.fillStyle = '#9fe9ff'; g.font = '20px Bahnschrift, sans-serif'; g.fillText('CONCORD WARNING · DO NOT ENTER ALONE', w / 2, 236);
  });
}
// Static scenery: added before the world is batched, so it costs a few draw calls. Colliders go in before the grid is built.
export function buildLairs(S) {
  const T = C.THREE;
  for (const L of LAIRS) {
    const g = new T.Mesh(new T.CircleGeometry(LAIR_R, 72), new T.MeshStandardMaterial({ map: groundTex(L), roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 }));
    g.rotation.x = -Math.PI / 2; g.position.set(L.x, 0.03, L.z); g.receiveShadow = true; S.add(g);
    const fwd = new T.Vector3(Math.sin(L.yaw), 0, Math.cos(L.yaw));
    const clearOf = (x, z, m) => {   // keep scenery off the dragon and out of the ground in front of it, where it breathes
      const rx = x - L.x, rz = z - L.z, along = rx * fwd.x + rz * fwd.z, side = Math.abs(rx * fwd.z - rz * fwd.x);
      return Math.hypot(rx, rz) > L.length * 0.75 + m && !(along > 0 && along < 70 && side < 16 + m);
    };
    const spot = (r0, r1, m) => { for (let i = 0; i < 40; i++) { const a = rnd(0, Math.PI * 2), r = rnd(r0, r1), x = L.x + Math.cos(a) * r, z = L.z + Math.sin(a) * r; if (clearOf(x, z, m)) return [x, z]; } return null; };
    const rockM = new T.MeshStandardMaterial({ color: L.id === 'tuldran' ? 0x2a2220 : 0xb08a58, roughness: 0.95, flatShading: true });
    for (let i = 0; i < 34; i++) {   // boulders, bigger toward the lair's edge
      const p = spot(24, LAIR_R - 4, 4); if (!p) continue;
      const s = rnd(1.2, 4.5) * (Math.hypot(p[0] - L.x, p[1] - L.z) > 70 ? 1.4 : 1);
      const r = new T.Mesh(C.GEO.rock, rockM); r.scale.set(s, s * rnd(0.5, 1.1), s * rnd(0.8, 1.3)); r.rotation.set(rnd(0, 3), rnd(0, 3), rnd(0, 3)); r.position.set(p[0], s * 0.35, p[1]);
      r.castShadow = true; r.receiveShadow = true; S.add(r); if (s > 2) C.addCollider(p[0], p[1], s * 1.5, s * 1.5, s);
    }
    // the Catharsis growths that mark the dragon as sworn to the Remnants: a broken ring of crimson spires round it
    const crim = C.glowMat(0xff2b4a, 1.3), crimDark = new T.MeshStandardMaterial({ color: 0x3a0610, emissive: 0xff2b4a, emissiveIntensity: 0.35, roughness: 0.5, flatShading: true });
    const ringR = L.length * 0.75 + 12;
    for (let i = 0; i < 14; i++) {
      const a = i / 14 * Math.PI * 2 + rnd(-0.1, 0.1), x = L.x + Math.cos(a) * ringR, z = L.z + Math.sin(a) * ringR;
      if (!clearOf(x, z, 0) || i % 5 === 3) continue;
      const h = rnd(3.5, 7), sp = new T.Mesh(C.GEO.oct, i % 4 === 0 ? crim : crimDark); sp.scale.set(0.9, h, 0.9); sp.position.set(x, h * 0.7, z); sp.rotation.set(rnd(-0.25, 0.25), rnd(0, 3), rnd(-0.25, 0.25));
      S.add(sp); C.addCollider(x, z, 2, 2, h);
    }
    for (let i = 0; i < 26; i++) {   // and shards scattered through the lair
      const p = spot(20, LAIR_R - 6, 1); if (!p) continue;
      const s = rnd(0.3, 0.9), c = new T.Mesh(C.GEO.oct, Math.random() < 0.25 ? crim : crimDark); c.scale.set(s, s * rnd(2, 3.5), s); c.position.set(p[0], s * 1.2, p[1]); c.rotation.z = rnd(-0.5, 0.5); S.add(c);
    }
    if (L.id === 'tuldran') {
      // burnt acacia stumps and the bones of what came too close
      const charM = new T.MeshStandardMaterial({ color: 0x15100e, roughness: 1 }), boneM = new T.MeshStandardMaterial({ color: 0xd8ccb4, roughness: 0.8 });
      for (let i = 0; i < 12; i++) {
        const p = spot(30, LAIR_R - 8, 2); if (!p) continue;
        const h = rnd(2, 6), t = new T.Mesh(C.GEO.cyl, charM); t.scale.set(0.5, h, 0.5); t.position.set(p[0], h / 2, p[1]); t.rotation.z = rnd(-0.3, 0.3); t.castShadow = true; S.add(t); C.addCollider(p[0], p[1], 1, 1, h);
      }
      for (let i = 0; i < 6; i++) {
        const p = spot(26, 80, 4); if (!p) continue; const yaw = rnd(0, 3);
        for (let k = 0; k < 7; k++) {   // a rib cage, half in the ash
          const rib = new T.Mesh(new T.TorusGeometry(2.2 - Math.abs(k - 3) * 0.22, 0.12, 5, 14, Math.PI), boneM);
          rib.position.set(p[0] + Math.cos(yaw) * (k - 3) * 0.7, 0, p[1] - Math.sin(yaw) * (k - 3) * 0.7); rib.rotation.y = yaw + Math.PI / 2; S.add(rib);
        }
      }
    } else {
      // dunes heaped against the lair's edge, and the broken columns of whatever stood here before the sand
      const sandM = new T.MeshStandardMaterial({ color: 0xcfae72, roughness: 1 }), colM = new T.MeshStandardMaterial({ color: 0xd8c39a, roughness: 0.85 });
      for (let i = 0; i < 16; i++) {
        const a = rnd(0, Math.PI * 2), r = rnd(LAIR_R - 30, LAIR_R - 8), x = L.x + Math.cos(a) * r, z = L.z + Math.sin(a) * r; if (!clearOf(x, z, 10)) continue;
        const s = rnd(8, 16), d = new T.Mesh(C.GEO.sph, sandM); d.scale.set(s, s * rnd(0.22, 0.35), s * rnd(0.5, 0.8)); d.rotation.y = a; d.position.set(x, 0, z); d.receiveShadow = true; S.add(d);
        C.addCollider(x, z, s * 0.9, s * 0.9, s * 0.25);
      }
      for (let i = 0; i < 14; i++) {
        const p = spot(28, LAIR_R - 14, 3); if (!p) continue;
        const toppled = Math.random() < 0.4, h = toppled ? rnd(6, 10) : rnd(3, 12), c = new T.Mesh(C.GEO.cyl, colM);
        c.scale.set(1.3, h, 1.3); c.castShadow = true; c.receiveShadow = true;
        if (toppled) { c.rotation.z = Math.PI / 2; c.rotation.y = rnd(0, 3); c.position.set(p[0], 1.2, p[1]); C.addCollider(p[0], p[1], 3, 3, 2.4); }
        else { c.position.set(p[0], h / 2, p[1]); C.addCollider(p[0], p[1], 2.6, 2.6, h); const cap = new T.Mesh(C.GEO.box, colM); cap.scale.set(3.4, 0.8, 3.4); cap.position.set(p[0], h + 0.4, p[1]); S.add(cap); }
        S.add(c);
      }
    }
    // a Concord warning pylon at the door, on the city side by the tram stop
    const sx = L.x - Math.sign(L.x) * (LAIR_R - 10), sz = L.z - 14, postM = new T.MeshStandardMaterial({ color: 0x2a313b, metalness: 0.75, roughness: 0.36 });
    const post = new T.Mesh(C.GEO.box, postM); post.scale.set(0.5, 6, 0.5); post.position.set(sx, 3, sz); S.add(post);
    const sign = new T.Mesh(new T.PlaneGeometry(5, 2.5), new T.MeshStandardMaterial({ map: warnSign(L), emissive: 0xffffff, emissiveMap: warnSign(L), emissiveIntensity: 0.6, side: T.DoubleSide }));
    sign.position.set(sx, 6.4, sz); sign.rotation.y = -Math.sign(L.x) * Math.PI / 2;   // facing the city S.add(sign);
    C.addCollider(sx, sz, 0.8, 0.8, 6);
    // the dragon's body: walls, so nobody walks through it (the wings and tail stay open)
    if (Math.abs(fwd.x) > 0.5) C.addCollider(L.x, L.z, L.length * 0.62, L.length * 0.3, 14); else C.addCollider(L.x, L.z, L.length * 0.3, L.length * 0.62, 14);
  }
}

// ---------------------------------------------------------------- the dragons, as Remnant bosses that never move
export const DRAGONS = [];
const _f = () => new C.THREE.Vector3();
export function spawnDragons() {
  const { THREE: T, G, W } = C;
  // the Sworn: Catharsis Remnants loyal to each dragon, spread through the lair
  for (const L of LAIRS) {
    const at = (r0) => { for (let i = 0; i < 30; i++) { const a = rnd(0, Math.PI * 2), r = rnd(r0, LAIR_R - 12), x = L.x + Math.cos(a) * r, z = L.z + Math.sin(a) * r; if (!C.pointBlocked(x, z, 1.2)) return [x, z]; } return [L.x + LAIR_R * 0.6, L.z]; };
    for (let i = 0; i < 12; i++) C.makeEnemy('hollowed', C.randi(...GUARD_LV), ...at(34), false, L.guards[0]);
    for (let i = 0; i < 6; i++) C.makeEnemy('drone', C.randi(...GUARD_LV), ...at(34), false, L.guards[1]);
  }
  for (const L of LAIRS) {
    const pr = protos[L.id]; if (!pr) continue;
    const s = L.length / Math.max(pr.sz.x, pr.sz.z), H = pr.sz.y * s;
    const group = new T.Group(); group.position.set(L.x, 0, L.z); group.rotation.y = L.yaw;
    const inner = new T.Group(); inner.scale.setScalar(s);
    const c = pr.box.getCenter(new T.Vector3()); pr.root.position.set(-c.x, -pr.box.min.y, -c.z); inner.add(pr.root);
    group.add(inner); W.scene.add(group);
    const fwd = new T.Vector3(Math.sin(L.yaw), 0, Math.cos(L.yaw));
    const mouth = new T.Vector3(L.x, 0, L.z).addScaledVector(fwd, L.length * 0.46).setY(H * 0.5);   // follows the head bone from the first frame
    const e = {
      kind: 'enemy', type: 'dragon', dragon: true, lair: L, name: L.name, level: 30, pl: DRAGON_PL,
      spawn: new T.Vector3(L.x, 0, L.z), pos: new T.Vector3(L.x, 0, L.z), alive: true, state: 'idle', target: null, dots: [], tagged: false, yours: false,
      yaw: L.yaw, anim: rnd(0, 10), temp: false, move: 0, atk: 0,
      maxHp: L.id === 'taiman' ? 21000 : 18000, dmg: L.id === 'taiman' ? 110 : 125, atkCd: 2.6, atkR: 6, speed: 0, aggroR: 46, xp: 6000,
      height: H, radius: L.length * 0.36, respawn: 300, phase: 0,
      atkT: 1.5, breathT: 7, sweepT: 11, boltT: 2.5, smokeT: 0, callT: 0, engaged: false,
      group, inner, scale: s, fwd, mouth, mouthMark: pr.mouth, bones: pr.bones, rot: {}, act: null, alert: 0, look: 0, down: 0,
    };
    for (const n in pr.bones) e.rot[n] = [0, 0, 0];
    e.hp = e.maxHp;
    C.addHitbox(e, L.length * 0.34, H, L.length * 0.78, H / 2);
    e.plate = C.makePlate('enemy', `<div class="n"><b class="pld">◆${e.pl}</b> ${C.esc(e.name)} <span style="color:#aaa">${e.level}</span></div><div class="g" style="color:#ffb3a0">&lt;${C.esc(L.title)} · Sworn to the Catharsis&gt;</div><div class="hb"><i></i></div>`);
    e.plateBar = e.plate.querySelector('.hb i');
    G.enemies.push(e); DRAGONS.push(e);
  }
}

// everyone a dragon's wide attacks can catch: you, and the Ascendants and allies standing in the lair
function victims(e, test) {
  const { G } = C, out = [];
  if (G.P.alive && !G.P.dead && test(G.P.pos)) out.push(G.P);
  for (const b of G.bots) if (b.alive && test(b.pos)) out.push(b);
  return out;
}
const inLair = (L, p) => Math.hypot(p.x - L.x, p.z - L.z) < LAIR_R + 6;
let barOwner = null;
function say(e, line) { C.addChat('zone', null, `${e.name}: "${line}"`, 'err'); }
function engage(e, t, why) {
  e.target = t; e.state = 'chase';
  if (!e.engaged) {
    e.engaged = true; say(e, why === 'call' ? e.lair.lines.call : e.lair.lines.wake); act(e, 'roar');
    C.ringFx(e.pos, e.lair.glow, e.radius + 14, 1.2); C.burst(e.mouth.clone(), e.lair.breath, 60, 7);
  }
}
function reset(e) {
  e.state = 'return'; e.target = null;
}
function setBar(e, on) {
  const bar = document.getElementById('dragonbar'); if (!bar) return;
  if (on) {
    if (barOwner !== e) { barOwner = e; bar.querySelector('.bn').textContent = `${e.name.toUpperCase()} · ${e.lair.title.toUpperCase()}`; bar.classList.remove('hidden'); C.Sound.playMusic('boss'); }
    document.getElementById('dragon-hp').style.width = (e.hp / e.maxHp * 100).toFixed(1) + '%';
  } else if (barOwner === e) { barOwner = null; bar.classList.add('hidden'); C.Sound.playMusic('world'); }
}

// called by killEnemy for a dragon
export function dragonSlain(e, src) {
  const { G } = C;
  say(e, e.lair.lines.fall);
  C.burst(e.mouth.clone(), e.lair.glow, 160, 10); C.ringFx(e.pos, e.lair.glow, e.radius + 24, 1.6); C.Sound.sfx('boom');
  if (e.tagged) {
    C.addChat('world', null, `${G.D.name} has slain ${e.name}, ${e.lair.title}!`, 'sys');
    setTimeout(() => C.botSay(C.pick(C.chatBots()), C.pick(['GG ' + G.D.name + '!!!', 'a DRAGON. o7', 'no way', `${e.name} down?? legend`, 'grats ' + G.D.name, 'the Governor will hear about this'])), 1500);
  }
  setBar(e, false);
}

export function updateDragon(e, dt) {
  const { G, W } = C, P = G.P, L = e.lair;
  e.anim += dt;
  e.group.visible = W.cam.position.distanceTo(e.pos) < 460;   // out in the fog, don't draw it
  e.down += ((e.alive ? 0 : 1) - e.down) * Math.min(1, dt * (e.alive ? 0.9 : 1.4));   // collapses when slain, rises again on its return
  e.inner.position.y = -e.down * e.height * 0.08; e.inner.rotation.z = e.down * 0.05;
  if (e.group.visible) pose(e, dt);
  if (e.mouthMark && e.mouthMark.parent) e.mouthMark.getWorldPosition(e.mouth);
  if (!e.alive) {
    e.deadT += dt; e.act = null;
    if (e.deadT > e.respawn) {
      Object.assign(e, { alive: true, hp: e.maxHp, state: 'idle', target: null, tagged: false, yours: false, phase: 0, engaged: false, dots: [] });
      C.burst(e.mouth.clone(), L.glow, 80, 6); act(e, 'roar');
      C.addChat('world', null, L.lines.back, 'sys');
    }
    return;
  }
  for (const dot of e.dots) { dot.t -= dt; dot.tick -= dt; if (dot.tick <= 0) { dot.tick = 1; C.damage(e, dot.dps, dot.src); } }
  e.dots = e.dots.filter(d => d.t > 0);
  if (!e.alive) return;

  // smoke curling from its jaws
  e.alert += ((e.state === 'chase' ? 1 : 0) - e.alert) * Math.min(1, dt * 1.5);
  e.smokeT -= dt;
  if (e.smokeT <= 0 && e.group.visible) { e.smokeT = e.state === 'chase' ? 0.35 : 1.4; C.burst(e.mouth.clone().addScaledVector(e.fwd, 1), e.state === 'chase' ? L.breath : 0x6a5a50, e.state === 'chase' ? 10 : 5, 1.4); }

  if (e.state === 'idle') {
    if (P.alive && !P.dead && C.d2(P.pos, e.pos) < e.aggroR) engage(e, P, 'wake');
    else if ((e.callT -= dt) <= 0) {
      e.callT = 0.5;   // loyal to its Sworn: when a Remnant in the lair is fighting, the dragon joins in
      for (const o of G.enemies) if (o.alive && !o.dragon && o.state === 'chase' && o.target && o.target.alive && inLair(L, o.pos) && inLair(L, o.target.pos)) { engage(e, o.target, 'call'); break; }
    }
  } else if (e.state === 'chase') {
    if (!e.engaged) engage(e, e.target, 'wake');   // struck first
    let t = e.target;
    const ok = x => x && x.alive && !(x === P && P.dead) && inLair(L, x.pos) && C.d2(x.pos, e.pos) < 100;
    if (!ok(t)) {   // it never leaves its spot: it turns its wrath on whoever else is still in the lair, or settles
      t = null; let bd = 1e9;
      for (const c of [P, ...G.bots]) if (ok(c) && (c === P || c.party || c.hitT > 0 || c.ally)) { const d = C.d2(c.pos, e.pos); if (d < bd) { bd = d; t = c; } }
      if (t) e.target = t; else reset(e);
    }
    if (t) attack(e, t, dt);
  } else if (e.state === 'return') {
    e.hp = Math.min(e.maxHp, e.hp + e.maxHp * 0.2 * dt); e.dots = []; e.tagged = false; e.yours = false;
    if (P.alive && !P.dead && C.d2(P.pos, e.pos) < e.aggroR) { e.engaged = false; engage(e, P, 'wake'); }
    else if (e.hp >= e.maxHp) { e.state = 'idle'; e.engaged = false; e.phase = 0; }
  }
  setBar(e, e.alive && e.state === 'chase' && P.alive && C.d2(P.pos, e.pos) < 150);
}

function attack(e, t, dt) {
  const L = e.lair, rel = _f().subVectors(t.pos, e.pos).setY(0);
  const dist = rel.length(), along = rel.dot(e.fwd), side = Math.abs(rel.x * e.fwd.z - rel.z * e.fwd.x);
  const edge = dist - e.radius;   // how far beyond its body
  e.atkT -= dt; e.breathT -= dt; e.sweepT -= dt; e.boltT -= dt;
  const busy = e.act && e.act.k !== 'roar' ? true : e.act && e.act.t < 1.2;   // one move at a time (a roar can be cut short)
  if (busy) { /* the timers keep running; the next move comes when this one ends */ }
  // claws and jaws, for whatever stands at its head or flanks
  else if (edge < e.atkR && along > -e.radius * 0.4 && e.atkT <= 0) {
    e.atkT = e.atkCd;
    const leftSide = (rel.x * e.fwd.z - rel.z * e.fwd.x) < 0;   // which side of its head the target stands (its own left is +x)
    act(e, 'claw', { side: leftSide ? 1 : -1, at: 0.42, fn: () => {
      if (!e.alive || !t.alive || C.d2(t.pos, e.pos) - e.radius > e.atkR + 2) return;   // stepped back in time
      C.damage(t, e.dmg * C.rand(0.9, 1.1), e); C.burst(t.pos.clone().setY(1.2), L.glow, 22, 4); C.Sound.sfx('heavy');
    } });
  }
  // wing and tail: the ground all round it
  else if (e.sweepT <= 0 && edge < 10) {
    e.sweepT = C.rand(10, 14); const R = e.radius + 10, at = e.pos.clone();
    act(e, 'sweep');
    C.telegraph(at, R, 2, () => {
      C.ringFx(at, L.glow, R, 0.6); C.burst(at.clone().setY(1), L.breath, 70, 9); C.Sound.sfx('boom');
      for (const v of victims(e, p => C.d2(p, at) < R)) C.damage(v, 150 * C.rand(0.9, 1.1), e);
    });
  }
  // its breath, down the ground in front of it
  else if (e.breathT <= 0 && along > 0 && side < along * 0.55 + 8 && dist < 85) {
    e.breathT = C.rand(9, 13); const hit = new Set();
    const base = e.pos.clone().addScaledVector(e.fwd, L.length * 0.46);
    const spots = [0, 1, 2, 3, 4, 5].map(i => ({ p: base.clone().addScaledVector(e.fwd, 6 + i * 10), r: 5 + i * 2.2 }));
    say(e, L.id === 'tuldran' ? 'BURN.' : 'BE BURIED.');
    act(e, 'breath', { far: spots[5].p });
    spots.forEach((s, i) => C.telegraph(s.p, s.r, 1.6 + i * 0.08, () => {
      C.burst(s.p.clone().setY(1.2), L.breath, 40, 6 + i); C.ringFx(s.p, L.breath, s.r, 0.5);
      for (const v of victims(e, p => C.d2(p, s.p) < s.r)) if (!hit.has(v)) { hit.add(v); C.damage(v, 210 * C.rand(0.9, 1.1), e); }
    }));
  }
  // bolts for anything out of reach
  else if (e.boltT <= 0 && edge >= e.atkR) {
    e.boltT = C.rand(2.6, 3.6);
    act(e, 'bolt', { at: 0.3, fn: () => {
      if (!e.alive || !t.alive) return;
      C.projectile(e.mouth.clone(), t, L.bolt, 0.55, 24, () => { if (!e.alive) return; C.damage(t, 85 * C.rand(0.9, 1.1), e); C.burst(t.pos.clone().setY(1), L.bolt, 16, 3); }, e);
    } });
  }
  // when it is hurt, it calls up its Sworn
  const pct = e.hp / e.maxHp;
  if ((e.phase === 0 && pct < 0.6) || (e.phase === 1 && pct < 0.3)) {
    e.phase++; say(e, L.lines.rise); C.Sound.sfx('boom'); C.ringFx(e.pos, L.glow, e.radius + 20, 1); act(e, 'roar');
    for (let i = 0; i < 3; i++) {
      const a = Math.atan2(t.pos.z - e.pos.z, t.pos.x - e.pos.x) + C.rand(-0.8, 0.8), r = e.radius + C.rand(6, 12);
      const m = C.makeEnemy('hollowed', 28, e.pos.x + Math.cos(a) * r, e.pos.z + Math.sin(a) * r, true, L.guards[0]);
      m.target = t; m.state = 'chase'; C.burst(m.pos.clone().setY(1), L.glow, 30, 3);
    }
  }
}

// ---------------------------------------------------------------- animation
// Every move is a short action; pose() builds each frame's pose from the idle (breathing, tail, a slow look round),
// how alert it is, the action under way and, when it falls, the collapse. Rotations add up per bone, in radians.
const ACT_DUR = { claw: 1.0, breath: 2.5, sweep: 2.5, bolt: 0.75, roar: 2.0 };
function act(e, k, extra) { e.act = Object.assign({ k, t: 0, dur: ACT_DUR[k], done: false }, extra); }
const ease = x => x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x);
const env = (u, a, b, c, d) => u < a ? 0 : u < b ? ease((u - a) / (b - a)) : u < c ? 1 : u < d ? 1 - ease((u - c) / (d - c)) : 0;   // up over a..b, held, down over c..d
const _l = { x: 0, z: 0 };
function pose(e, dt) {
  const R = e.rot, L = e.lair, T = L.id === 'taiman', t = e.anim;
  for (const n in R) { const r = R[n]; r[0] = r[1] = r[2] = 0; }
  const add = (n, x, y, z) => { const r = R[n]; if (r) { r[0] += x; r[1] += y; r[2] += z; } };
  const live = 1 - e.down, al = e.alert * live;
  // breathing, and the tail never quite still
  const br = Math.sin(t * 1.1) * live;
  add('chest', -0.03 * br, 0, 0); add('neck1', 0.02 * br, 0, 0); add('spine', 0.01 * br, 0, 0);
  for (let i = 1; i <= 7; i++) add('tail' + i, 0, (0.05 + 0.05 * al) * Math.sin(t * (0.55 + 0.6 * al) - i * 0.7) * live, 0.02 * Math.sin(t * 0.4 - i) * live);
  add('wing1L', 0, 0, 0.035 * Math.sin(t * 0.8) * live); add('wing1R', 0, 0, -0.035 * Math.sin(t * 0.8 + 0.4) * live);
  // it watches: the neck and head turn toward its target as far as they reach (the body never moves), or look slowly round
  let look = Math.sin(t * 0.21) * 0.3;
  if (e.state === 'chase' && e.target && e.target.pos) {
    const dx = e.target.pos.x - e.pos.x, dz = e.target.pos.z - e.pos.z, c = Math.cos(L.yaw), s = Math.sin(L.yaw);
    _l.x = dx * c - dz * s; _l.z = dx * s + dz * c;   // into its own frame
    look = Math.max(-0.8, Math.min(0.8, Math.atan2(_l.x, Math.max(_l.z, -5))));
  }
  e.look += (look * live - e.look) * Math.min(1, dt * 2.2);
  add('neck1', 0, e.look * 0.35, 0); add('neck2', 0, e.look * 0.35, 0); add('head', 0, e.look * 0.3, 0);
  if (T) {   // Taiman wakes: up off the sand, neck raised, wings lifting
    add('chest', -0.08 * al, 0, 0); add('neck1', -0.32 * al, 0, 0); add('neck2', -0.12 * al, 0, 0); add('head', 0.3 * al, 0, 0);
    add('wing1L', 0, 0, 0.12 * al); add('wing1R', 0, 0, -0.22 * al); add('wing2R', 0, 0, -0.08 * al);
  } else {   // Tuldran lowers his head at you, wings flared, jaws working
    add('neck1', 0.08 * al, 0, 0); add('head', -0.06 * al, 0, 0); add('wing1L', 0, 0, 0.14 * al); add('wing1R', 0, 0, -0.14 * al);
    add('jaw', (0.05 + 0.05 * Math.sin(t * 2.3)) * al, 0, 0);
  }
  // the move under way
  const A = e.act;
  if (A && live > 0.5) {
    A.t += dt; const u = A.t / A.dur;
    if (A.fn && !A.done && A.t >= A.at * A.dur) { A.done = true; A.fn(); }
    if (u >= 1) e.act = null;
    else if (A.k === 'claw') {
      const lift = env(u, 0, 0.32, 0.36, 0.5), strike = env(u, 0.36, 0.46, 0.6, 0.95), sd = A.side > 0 ? 'L' : 'R';
      if (T) {   // Taiman snaps with his jaws and rakes with a wing-hand
        add('neck1', -0.15 * lift + 0.32 * strike, 0.15 * A.side * strike, 0); add('neck2', -0.1 * lift + 0.12 * strike, 0, 0); add('head', 0.2 * strike, 0, 0);
        add('wing1' + sd, 0, 0, 0.3 * A.side * lift - 0.1 * A.side * strike);
      } else {
        add('uarm' + sd, -1.0 * lift + 0.15 * strike, 0, 0); add('farm' + sd, 0.9 * lift - 0.2 * strike, 0, 0); add('hand' + sd, -0.4 * lift + 0.3 * strike, 0, 0);
        add('chest', 0.1 * strike - 0.05 * lift, 0, 0.05 * A.side * lift); add('neck1', 0.12 * strike, 0, 0); add('jaw', 0.3 * strike, 0, 0);
      }
    } else if (A.k === 'breath') {
      const rear = env(u, 0, 0.5, 0.58, 0.66), thrust = env(u, 0.58, 0.66, 0.86, 1);
      add('chest', -0.12 * rear + 0.06 * thrust, 0, 0); add('neck1', -0.32 * rear + 0.2 * thrust, 0, 0); add('neck2', -0.2 * rear + 0.1 * thrust, 0, 0);
      add('head', -0.2 * rear + 0.2 * thrust, 0, 0); add('jaw', 0.15 * rear + 0.6 * thrust, 0, 0);
      add('wing1L', 0, 0, 0.3 * rear); add('wing1R', 0, 0, -0.3 * rear);
      if (thrust > 0.3 && e.group.visible && A.far) {   // the stream itself, from the jaws down to the ground before it
        for (let k = 0; k < 2; k++) { const f = Math.random(), p = e.mouth.clone().lerp(A.far, f); p.y = Math.max(0.6, p.y); C.burst(p, f < 0.5 ? L.breath : L.glow, 6, 2 + f * 3); }
      }
    } else if (A.k === 'sweep') {
      const raise = env(u, 0, 0.55, 0.7, 0.82), beat = env(u, 0.72, 0.82, 0.88, 1), swing = Math.sin(Math.min(1, Math.max(0, (u - 0.5) / 0.45)) * Math.PI * 2);
      add('wing1L', 0, 0, 0.75 * raise - 0.3 * beat); add('wing1R', 0, 0, -0.75 * raise + 0.3 * beat);
      add('wing2L', 0, 0, 0.35 * raise - 0.1 * beat); add('wing2R', 0, 0, -0.35 * raise + 0.1 * beat);
      add('chest', -0.08 * raise + 0.05 * beat, 0, 0); add('neck1', -0.1 * raise, 0, 0);
      for (let i = 1; i <= 7; i++) add('tail' + i, 0, 0.28 * swing * (0.5 + i * 0.1), 0);
    } else if (A.k === 'bolt') {
      const back = env(u, 0, 0.25, 0.28, 0.4), snap = env(u, 0.28, 0.36, 0.55, 1);
      add('neck1', -0.12 * back + 0.12 * snap, 0, 0); add('head', -0.12 * back + 0.15 * snap, 0, 0); add('jaw', 0.45 * snap, 0, 0);
    } else if (A.k === 'roar') {
      const up = env(u, 0, 0.25, 0.75, 1), shake = Math.sin(A.t * 30) * 0.03 * up;
      add('chest', -0.1 * up, 0, 0); add('neck1', -0.3 * up, 0, 0); add('neck2', -0.2 * up, shake, 0); add('head', (T ? 0.05 : -0.3) * up, shake, 0); add('jaw', 0.75 * up, 0, 0);
      add('wing1L', 0, 0, 0.55 * up); add('wing1R', 0, 0, -0.55 * up); add('wing2L', 0, 0, 0.25 * up); add('wing2R', 0, 0, -0.25 * up);
      if (T) { add('neck1', 0.08 * up, 0, 0); add('wing1R', 0, 0, -0.2 * up); }   // he is already half up when he roars
    }
  } else if (A && live <= 0.5) e.act = null;
  // slain: the head goes down to the ground, the wings sag open, the tail lies still
  const k = e.down;
  if (k > 0.001) {
    if (T) { add('neck1', 0.08 * k, 0.1 * k, 0); add('neck2', 0.05 * k, 0.15 * k, 0); add('head', 0.06 * k, 0.25 * k, -0.15 * k); add('wing1L', 0, 0, -0.2 * k); add('wing1R', 0, 0, 0.05 * k); }
    else {
      add('chest', 0.18 * k, 0, 0.04 * k); add('neck1', 0.4 * k, 0.12 * k, 0); add('neck2', 0.3 * k, 0.1 * k, 0); add('head', 0.25 * k, 0, -0.2 * k); add('jaw', 0.3 * k, 0, 0);
      add('wing1L', 0, 0, -0.35 * k); add('wing1R', 0, 0, 0.35 * k); add('wing2L', 0, 0, -0.25 * k); add('wing2R', 0, 0, 0.25 * k);
      add('uarmL', 0.25 * k, 0, 0); add('uarmR', 0.25 * k, 0, 0); add('thighL', 0.15 * k, 0, 0); add('thighR', 0.15 * k, 0, 0);
    }
    for (let i = 1; i <= 7; i++) add('tail' + i, 0.06 * k, 0, 0);
  }
  for (const n in R) { const r = R[n]; e.bones[n].rotation.set(r[0], r[1], r[2]); }
}
