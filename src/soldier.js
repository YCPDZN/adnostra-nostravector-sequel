// =====================================================================
//  ASCENDANT SOLDIER — the rigged player / Ascendant model and its
//  procedural, Warframe-style animation: noble idle, walk, run, ninja
//  sprint, slide, bullet jump, double-jump flip, aim glide, dodge roll,
//  hero landings, weapon combos, casts and emotes.
// =====================================================================
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

// how long each move lasts (seconds); main.js advances the timers, this file draws them
export const MOVE_DUR = { flip: 0.5, bj: 0.62, roll: 0.5, landHard: 0.55, landSoft: 0.2 };

// Rigged models that share the soldier's 19-bone skeleton, so every animation below drives any of them.
// soldier: the Ascendant armour (player + other Ascendants); its emissive mask lights up in each visor colour.
// orion:   Orion Mascar, the Governor's father, who wanders the map (see main.js).
// malia:   Malia Mascar, the Governor's wife, who strolls the plaza and the Salt Lantern. Her left hand rests on her hip.
// nico:    Nico Brown, who walks between the Salt Lantern and the Lantern Market (see nico.js).
const MODELS = {
  soldier: { script: 'assets/soldier.js', global: 'SOLDIER_GLB_B64', mesh: 'soldier', lod: 'soldier_lod', energyGlow: true, proto: null, lodGeo: null },
  orion: { script: 'assets/orion.js', global: 'ORION_GLB_B64', mesh: 'orion', lod: 'orion_lod', energyGlow: false, proto: null, lodGeo: null },
  malia: { script: 'assets/malia.js', global: 'MALIA_GLB_B64', mesh: 'malia', lod: 'malia_lod', energyGlow: false, proto: null, lodGeo: null },
  nico: { script: 'assets/nico.js', global: 'NICO_GLB_B64', mesh: 'nico', lod: 'nico_lod', energyGlow: false, proto: null, lodGeo: null },
};
export const soldierReady = (model = 'soldier') => !!MODELS[model].proto;

async function loadRigged(model) {
  const M = MODELS[model];
  await new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = M.script;
    s.onload = res; s.onerror = () => rej(new Error('Could not load ' + M.script));
    document.head.appendChild(s);
  });
  const b64 = window[M.global]; window[M.global] = null;
  let buf;
  try { buf = await (await fetch('data:application/octet-stream;base64,' + b64)).arrayBuffer(); }
  catch (e) { const bin = atob(b64); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); buf = u.buffer; }
  const gltf = await new Promise((res, rej) => new GLTFLoader().parse(buf, '', res, rej));
  const root = gltf.scene;
  // the low-poly, vertex-coloured copy is for distant characters (shared BatchedMesh)
  const lod = root.getObjectByName(M.lod);
  if (lod) {
    lod.parent.remove(lod);
    const g = lod.geometry.index ? lod.geometry.toNonIndexed() : lod.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
    M.lodGeo = g;
  }
  const mesh = root.getObjectByName(M.mesh);
  mesh.material.envMapIntensity = 1.0;
  mesh.material.normalScale.set(1, -1); // glTF normal map, no tangents (GLTFLoader convention)
  M.proto = root;
}
export const loadSoldier = () => loadRigged('soldier');
export const loadOrion = () => loadRigged('orion');
export const loadMalia = () => loadRigged('malia');
export const loadNico = () => loadRigged('nico');

// ---------------------------------------------------------------- channels
const BONES = ['hips', 'spine', 'chest', 'neck', 'head', 'clavL', 'uarmL', 'farmL', 'handL', 'thighL', 'shinL', 'footL', 'clavR', 'uarmR', 'farmR', 'handR', 'thighR', 'shinR', 'footR'];
const CH = {}; BONES.forEach((b, i) => { CH[b + '.x'] = i * 3; CH[b + '.y'] = i * 3 + 1; CH[b + '.z'] = i * 3 + 2; });
const E0 = BONES.length * 3;
CH.hipsY = E0; CH.pivDY = E0 + 1; CH.pivX = E0 + 2; CH.pivY = E0 + 3; CH.pivZ = E0 + 4;
const NCH = E0 + 5;
const LEG = 0.368;                 // thigh and shin length (m)
const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ss = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const easeIO = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const wrapA = a => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };

// write helpers (weight w): S = one channel, M = mirrored pair given for the LEFT side (right negates y and z)
function S(p, ch, v, w = 1) { p[CH[ch]] += v * w; }
function R(p, b, x, y, z, w = 1) { const i = CH[b + '.x']; p[i] += x * w; p[i + 1] += y * w; p[i + 2] += z * w; }
function M(p, b, x, y, z, w = 1, xr = x) { R(p, b + 'L', x, y, z, w); R(p, b + 'R', xr, -y, -z, w); }
// keep both feet on the ground while the hips drop by h (two-bone leg, equal lengths)
function crouch(p, h, w = 1) {
  if (h <= 0 || w <= 0) return;
  const th = Math.acos(clamp((2 * LEG - h) / (2 * LEG), -1, 1));
  S(p, 'hipsY', -h, w);
  for (const s of 'LR') { S(p, 'thigh' + s + '.x', -th, w); S(p, 'shin' + s + '.x', 2 * th, w); S(p, 'foot' + s + '.x', -th, w); }
}
function lerpInto(T, Q, w) { if (w <= 0) return; if (w >= 1) { T.set(Q); return; } for (let i = 0; i < NCH; i++) T[i] += (Q[i] - T[i]) * w; }

// ---------------------------------------------------------------- acts (attacks, casts, emotes)
// each act: duration + channel keyframes [[u, value], ...]; only the listed channels are overridden
const kf = (u, keys) => {
  if (u <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) if (u <= keys[i][0]) { const [a, va] = keys[i - 1], [b, vb] = keys[i]; return va + (vb - va) * easeIO((u - a) / (b - a)); }
  return keys[keys.length - 1][1];
};
const ACT_SRC = {
  slashA: { dur: 0.52, ch: { // forehand: wind up out to the right, sweep across to the left
    'uarmR.x': [[0, -0.3], [0.3, -0.6], [0.55, -1.45], [1, -0.3]], 'uarmR.z': [[0, -0.2], [0.3, -1.25], [0.55, 0.45], [1, -0.15]],
    'farmR.x': [[0, -0.6], [0.3, -1.5], [0.55, -0.25], [1, -0.6]], 'chest.y': [[0, 0], [0.3, -0.6], [0.55, 0.65], [1, 0]],
    'spine.x': [[0, 0.1], [0.3, 0.05], [0.55, 0.3], [1, 0.1]], 'uarmL.x': [[0, -0.5], [1, -0.5]], 'farmL.x': [[0, -1.5], [1, -1.5]], 'uarmL.z': [[0, 0.3], [1, 0.3]] } },
  slashB: { dur: 0.5, ch: { // backhand: from across the body out to the right
    'uarmR.x': [[0, -0.4], [0.3, -1.3], [0.55, -0.9], [1, -0.3]], 'uarmR.z': [[0, 0.2], [0.3, 0.55], [0.55, -1.45], [1, -0.15]],
    'farmR.x': [[0, -0.6], [0.3, -1.7], [0.55, -0.2], [1, -0.6]], 'chest.y': [[0, 0], [0.3, 0.6], [0.55, -0.7], [1, 0]],
    'spine.x': [[0, 0.1], [0.55, 0.28], [1, 0.1]], 'uarmL.x': [[0, -0.5], [1, -0.5]], 'farmL.x': [[0, -1.5], [1, -1.5]], 'uarmL.z': [[0, 0.3], [1, 0.3]] } },
  heavy: { dur: 0.62, ch: { // two-handed overhead cleave with a dip of the hips
    'uarmR.x': [[0, -0.3], [0.38, -2.85], [0.6, -0.75], [1, -0.3]], 'farmR.x': [[0, -0.5], [0.38, -0.7], [0.6, -0.1], [1, -0.5]],
    'uarmL.x': [[0, -0.4], [0.38, -2.7], [0.6, -0.8], [1, -0.4]], 'farmL.x': [[0, -1.0], [0.38, -0.9], [0.6, -0.2], [1, -1.0]],
    'uarmR.z': [[0, -0.1], [0.6, 0.25], [1, -0.1]], 'uarmL.z': [[0, 0.1], [0.6, -0.25], [1, 0.1]],
    'spine.x': [[0, 0.05], [0.38, -0.3], [0.6, 0.5], [1, 0.05]], 'chest.x': [[0, 0], [0.38, -0.15], [0.6, 0.2], [1, 0]],
    'hipsY': [[0, 0], [0.5, 0], [0.62, -0.16], [1, 0]] } },
  stabR: { dur: 0.36, ch: { // reverse-grip dagger strike
    'uarmR.x': [[0, -0.4], [0.3, 0.35], [0.55, -1.5], [1, -0.4]], 'farmR.x': [[0, -1.2], [0.3, -2.0], [0.55, -0.15], [1, -1.2]],
    'uarmR.z': [[0, -0.2], [0.55, 0.2], [1, -0.2]], 'chest.y': [[0, 0], [0.3, -0.35], [0.55, 0.5], [1, 0]], 'spine.x': [[0, 0.15], [0.55, 0.35], [1, 0.15]] } },
  spin: { dur: 0.55, ch: { // Shade spin-slash: arms flung out, body turns a full circle on the pivot
    'uarmR.z': [[0, -0.3], [0.2, -1.4], [0.8, -1.4], [1, -0.3]], 'uarmL.z': [[0, 0.3], [0.2, 1.4], [0.8, 1.4], [1, 0.3]],
    'farmR.x': [[0, -1], [0.2, -0.1], [0.8, -0.1], [1, -1]], 'farmL.x': [[0, -1], [0.2, -0.1], [0.8, -0.1], [1, -1]],
    'pivY': [[0, 0], [0.85, TAU], [1, TAU]], 'hipsY': [[0, 0], [0.3, -0.14], [0.8, -0.14], [1, 0]] } },
  cast: { dur: 0.55, ch: { // thrust the staff / open hand at the target
    'uarmR.x': [[0, -0.3], [0.3, -1.6], [0.75, -1.55], [1, -0.3]], 'farmR.x': [[0, -0.7], [0.3, -0.1], [0.75, -0.15], [1, -0.7]],
    'uarmR.z': [[0, -0.15], [0.3, 0.15], [1, -0.15]], 'chest.y': [[0, 0], [0.3, -0.4], [0.75, -0.35], [1, 0]],
    'uarmL.x': [[0, -0.4], [0.3, -0.9], [0.75, -0.9], [1, -0.4]], 'farmL.x': [[0, -0.8], [0.3, -1.5], [0.75, -1.5], [1, -0.8]], 'uarmL.z': [[0, 0.2], [0.3, 0.45], [1, 0.2]],
    'spine.x': [[0, 0.05], [0.3, 0.2], [1, 0.05]], 'handR.x': [[0, 0], [0.3, 1.5], [0.75, 1.5], [1, 0]] } },
  lance: { dur: 0.8, ch: { // charge both hands at the hip, then drive them forward
    'uarmR.x': [[0, -0.3], [0.45, 0.3], [0.62, -1.6], [0.85, -1.6], [1, -0.3]], 'farmR.x': [[0, -0.7], [0.45, -1.9], [0.62, -0.05], [1, -0.7]],
    'uarmL.x': [[0, -0.3], [0.45, 0.3], [0.62, -1.6], [0.85, -1.6], [1, -0.3]], 'farmL.x': [[0, -0.7], [0.45, -1.9], [0.62, -0.05], [1, -0.7]],
    'uarmR.z': [[0, -0.1], [0.62, 0.3], [1, -0.1]], 'uarmL.z': [[0, 0.1], [0.62, -0.3], [1, 0.1]],
    'chest.y': [[0, 0], [0.45, -0.5], [0.62, 0.1], [1, 0]], 'spine.x': [[0, 0.05], [0.45, -0.1], [0.62, 0.3], [1, 0.05]], 'hipsY': [[0, 0], [0.45, -0.12], [0.62, -0.05], [1, 0]] } },
  slam: { dur: 0.75, ch: { // leap and smash both fists into the ground
    'pivDY': [[0, 0], [0.3, 0.55], [0.5, -0.45], [0.8, -0.45], [1, 0]], 'pivX': [[0, 0], [0.3, -0.2], [0.5, 0.35], [0.8, 0.35], [1, 0]],
    'uarmR.x': [[0, -0.3], [0.3, -2.9], [0.5, -0.9], [0.8, -0.9], [1, -0.3]], 'uarmL.x': [[0, -0.3], [0.3, -2.9], [0.5, -0.9], [0.8, -0.9], [1, -0.3]],
    'farmR.x': [[0, -0.5], [0.3, -0.4], [0.5, -0.1], [1, -0.5]], 'farmL.x': [[0, -0.5], [0.3, -0.4], [0.5, -0.1], [1, -0.5]],
    'thighL.x': [[0, 0], [0.3, -1.2], [0.5, -1.4], [0.8, -1.4], [1, 0]], 'shinL.x': [[0, 0], [0.3, 1.8], [0.5, 1.7], [0.8, 1.7], [1, 0]],
    'thighR.x': [[0, 0], [0.3, -0.6], [0.5, 0.2], [0.8, 0.2], [1, 0]], 'shinR.x': [[0, 0], [0.3, 1.4], [0.5, 1.3], [0.8, 1.3], [1, 0]],
    'spine.x': [[0, 0], [0.3, -0.3], [0.5, 0.4], [0.8, 0.4], [1, 0]] } },
  guard: { dur: 0.7, ch: { // brace: forearms crossed in front of the visor
    'uarmR.x': [[0, -0.3], [0.25, -1.35], [0.8, -1.35], [1, -0.3]], 'uarmL.x': [[0, -0.3], [0.25, -1.35], [0.8, -1.35], [1, -0.3]],
    'uarmR.z': [[0, -0.1], [0.25, 0.35], [0.8, 0.35], [1, -0.1]], 'uarmL.z': [[0, 0.1], [0.25, -0.35], [0.8, -0.35], [1, 0.1]],
    'farmR.x': [[0, -0.5], [0.25, -1.9], [0.8, -1.9], [1, -0.5]], 'farmL.x': [[0, -0.5], [0.25, -1.9], [0.8, -1.9], [1, -0.5]],
    'hipsY': [[0, 0], [0.25, -0.15], [0.8, -0.15], [1, 0]], 'spine.x': [[0, 0], [0.25, 0.2], [0.8, 0.2], [1, 0]] } },
  heal: { dur: 0.9, ch: { // arms open to the sky
    'uarmR.z': [[0, -0.1], [0.3, -1.9], [0.8, -1.9], [1, -0.1]], 'uarmL.z': [[0, 0.1], [0.3, 1.9], [0.8, 1.9], [1, 0.1]],
    'uarmR.x': [[0, -0.2], [0.3, -0.4], [1, -0.2]], 'uarmL.x': [[0, -0.2], [0.3, -0.4], [1, -0.2]],
    'farmR.x': [[0, -0.5], [0.3, -0.2], [1, -0.5]], 'farmL.x': [[0, -0.5], [0.3, -0.2], [1, -0.5]],
    'spine.x': [[0, 0], [0.3, -0.2], [0.8, -0.2], [1, 0]], 'neck.x': [[0, 0], [0.3, -0.4], [0.8, -0.4], [1, 0]] } },
  wave: { dur: 1.2, ch: {
    'uarmR.z': [[0, -0.1], [0.2, -2.5], [0.85, -2.5], [1, -0.1]], 'farmR.z': [[0, 0], [0.2, -0.5], [0.35, 0.2], [0.5, -0.5], [0.65, 0.2], [0.85, -0.3], [1, 0]],
    'farmR.x': [[0, -0.3], [0.2, -0.4], [1, -0.3]], 'neck.y': [[0, 0], [0.2, -0.2], [1, 0]] } },
  salute: { dur: 1.3, ch: { // fist to the chest, head bowed: an Ascendant's salute
    'uarmR.x': [[0, -0.2], [0.25, -0.9], [0.8, -0.9], [1, -0.2]], 'uarmR.z': [[0, -0.1], [0.25, 0.25], [0.8, 0.25], [1, -0.1]],
    'farmR.x': [[0, -0.4], [0.25, -2.2], [0.8, -2.2], [1, -0.4]], 'farmR.y': [[0, 0], [0.25, 0.6], [0.8, 0.6], [1, 0]],
    'neck.x': [[0, 0], [0.3, 0.35], [0.75, 0.35], [1, 0]], 'spine.x': [[0, 0], [0.3, 0.1], [0.75, 0.1], [1, 0]] } },
};
// mirror an act onto the other hand
function mirrorAct(src) {
  const ch = {};
  for (const [k, v] of Object.entries(src.ch)) {
    const [b, ax] = k.split('.'); if (!ax) { ch[k] = v; continue; }
    const nb = b.endsWith('R') ? b.slice(0, -1) + 'L' : b.endsWith('L') ? b.slice(0, -1) + 'R' : b;
    ch[nb + '.' + ax] = (ax === 'y' || ax === 'z') ? v.map(([u, x]) => [u, -x]) : v;
  }
  return { dur: src.dur, ch };
}
ACT_SRC.stabL = mirrorAct(ACT_SRC.stabR);
const ACTS = {};
for (const [name, a] of Object.entries(ACT_SRC)) ACTS[name] = { name, dur: a.dur, ch: Object.entries(a.ch).map(([k, keys]) => [CH[k], keys]) };
const COMBOS = { blade: ['slashA', 'slashB', 'heavy'], greatsword: ['slashA', 'heavy', 'slashB', 'heavy'], daggers: ['stabR', 'stabL', 'stabR', 'spin'], staff: ['cast'], none: ['slashA', 'slashB'] };
const HINTS = { slam: 'slam', guard: 'guard', restore: 'heal', bolt: 'cast', chain: 'cast', lance: 'lance', judge: 'heavy', wave: 'wave', salute: 'salute', cast: 'cast', blink: 'spin' };

// ---------------------------------------------------------------- weapons (on the hand bones)
function makeWeapon(kind, accent, mats) {
  const g = new THREE.Group(); g.position.set(0, -0.105, 0.03); // the middle of the fist
  const box = (w, h, d, m, x, y, z) => { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); me.position.set(x, y, z); me.castShadow = true; g.add(me); return me; };
  if (kind === 'blade') {
    g.rotation.x = 1.22; // the blade continues the line of the forearm, tipped a little forward
    box(0.045, 0.045, 0.22, mats.dark(), 0, 0, 0);
    box(0.06, 0.16, 0.035, mats.armor(0x59626e), 0, 0, 0.12);
    box(0.022, 0.085, 0.98, mats.armor(0x8996a6), 0, 0.005, 0.63);
    box(0.026, 0.014, 0.98, mats.glow(accent, 2.6), 0, -0.045, 0.63);
  } else if (kind === 'daggers') {
    g.rotation.x = -0.28; // reverse grip: the blade lies back along the outside of the forearm
    box(0.04, 0.12, 0.04, mats.dark(), 0, 0, 0);
    box(0.02, 0.46, 0.06, mats.armor(0x8996a6), 0, 0.29, -0.02);
    box(0.024, 0.46, 0.012, mats.glow(accent, 2.8), 0, 0.29, -0.056);
  } else if (kind === 'greatsword') {
    // Orion's sword: a long, straight blade with a dark frame round a glowing core, an angled chisel tip
    // and a heavy mechanical guard. The blade lies in the y-z plane (flat faces toward ±x), point along +z.
    g.rotation.x = 1.32;
    const DARK = mats.dark(), FRAME = mats.armor(0x3a4048), STEEL = mats.armor(0x6d7682), GLOW = mats.glow(accent, 2.8);
    const slab = (pts, th, m) => { // a flat polygon (y, z) with thickness th along x, flat-shaded
      const p = [], n = pts.length, f = (i, s) => [s * th / 2, pts[i % n][0], pts[i % n][1]];
      for (let i = 1; i < n - 1; i++) { p.push(...f(0, 1), ...f(i, 1), ...f(i + 1, 1)); p.push(...f(0, -1), ...f(i + 1, -1), ...f(i, -1)); }
      for (let i = 0; i < n; i++) p.push(...f(i, 1), ...f(i, -1), ...f(i + 1, 1), ...f(i + 1, 1), ...f(i, -1), ...f(i + 1, -1));
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); geo.computeVertexNormals();
      const me = new THREE.Mesh(geo, m); me.castShadow = true; g.add(me); return me;
    };
    // grip, pommel and guard
    box(0.042, 0.042, 0.26, DARK, 0, 0, 0);
    for (let i = 0; i < 5; i++) box(0.048, 0.048, 0.012, FRAME, 0, 0, -0.09 + i * 0.045);
    box(0.06, 0.07, 0.06, STEEL, 0, 0, -0.15);
    box(0.075, 0.2, 0.07, DARK, 0, 0, 0.15);
    box(0.06, 0.05, 0.05, FRAME, 0, 0.12, 0.13).rotation.x = 0.5; box(0.06, 0.05, 0.05, FRAME, 0, -0.12, 0.13).rotation.x = -0.5;
    box(0.078, 0.12, 0.012, GLOW, 0, 0, 0.187);
    // blade: frame, glowing core, dark centre line
    slab([[-0.056, 0.18], [0.056, 0.18], [0.056, 1.36], [-0.056, 1.5]], 0.026, FRAME);
    slab([[-0.03, 0.24], [0.03, 0.24], [0.03, 1.33], [-0.03, 1.41]], 0.034, GLOW);
    slab([[-0.005, 0.3], [0.005, 0.3], [0.005, 1.3], [-0.005, 1.34]], 0.038, STEEL);
  } else if (kind === 'sabre') {
    // Malia's short energy blade: slim, straight, with a glowing edge and an angled tip, carried point-down
    g.rotation.x = 1.4;
    const DARK = mats.dark(), STEEL = mats.armor(0x7d8794), GLOW = mats.glow(accent, 2.8);
    box(0.034, 0.034, 0.16, DARK, 0, 0, 0);
    box(0.04, 0.04, 0.03, STEEL, 0, 0, -0.095);
    box(0.045, 0.11, 0.03, DARK, 0, 0, 0.095);
    box(0.048, 0.06, 0.008, GLOW, 0, 0, 0.113);
    box(0.012, 0.042, 0.56, STEEL, 0, 0.004, 0.39);
    box(0.016, 0.01, 0.56, GLOW, 0, -0.021, 0.39);
    const tip = box(0.012, 0.042, 0.09, STEEL, 0, 0.0, 0.69); tip.rotation.x = -0.45;
  } else if (kind === 'staff') {
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 1.9, 8), mats.dark()); st.position.y = 0.25; st.castShadow = true; g.add(st);
    for (const y of [0.85, -0.55]) box(0.06, 0.08, 0.06, mats.armor(0x59626e), 0, y, 0);
    const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), mats.glow(accent, 3)); orb.position.y = 1.32; g.add(orb); g.userData.orb = orb;
  }
  return g;
}

// ---------------------------------------------------------------- build
// opts: { model: 'soldier'|'orion', energy: hex (armour lights + visor), accent: hex (weapon glow),
//         weapon: 'blade'|'staff'|'daggers'|'greatsword'|'sabre'|'none', tint: hex|null, mats,
//         hold: bone names kept in their bind pose whatever the animation (e.g. a hand resting on a hip) }
export function makeSoldier({ model = 'soldier', energy = 0x3ee6ff, accent = 0x3ee6ff, weapon = 'none', tint = null, mats, hold = null }) {
  const MD = MODELS[model];
  const root = cloneSkinned(MD.proto);
  const mesh = root.getObjectByName(MD.mesh);
  const m = mesh.material.clone(); if (MD.energyGlow) { m.emissive = new THREE.Color(energy); m.emissiveIntensity = 3.2; } if (tint != null) m.color = new THREE.Color(tint);
  mesh.material = m; mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 1, 0), 1.9); // posed silhouettes reach past the bind pose
  const B = {}; root.traverse(o => { if (o.isBone) B[o.name] = o; });
  const group = new THREE.Group(), pivot = new THREE.Group();
  pivot.position.y = 1.0; root.position.y = -1.0; pivot.rotation.order = 'XYZ';
  group.add(pivot); pivot.add(root);
  const w = makeWeapon(weapon, accent, mats);
  if (weapon === 'daggers') { B.handR.add(w); const w2 = makeWeapon('daggers', accent, mats); B.handL.add(w2); }
  else if (weapon !== 'none') B.handR.add(w);
  if (w.userData.orb) group.userData.orb = w.userData.orb;
  const rig = {
    isSoldier: true, group, pivot, bones: BONES.map(n => B[n]), hipsRest: B.hips.position.y, weapon, mesh, hold: hold ? hold.map(n => BONES.indexOf(n)) : null,
    st: { lx: null, lz: 0, lyaw: 0, yawRate: 0, spd: 0, vy: 0, ly: 0, phase: Math.random() * TAU, seed: Math.random() * 100, air: 0, slide: 0, glide: 0, combat: 0,
      act: null, actT: 0, combo: 0, lastAtk: 0, C: new Float32Array(NCH), T: new Float32Array(NCH), Q: new Float32Array(NCH), flipWas: 0, bjWas: 0, rollWas: 0 },
    farBake: () => ({ key: model, body: MD.lodGeo, glow: null }),
    // compatibility with the box rig's API (old code pokes these)
    legs: [], arms: [], torso: B.chest, head: B.head, hips: B.hips,
  };
  return rig;
}

// ---------------------------------------------------------------- poses
function poseIdle(p, w, t, st, weapon) {
  crouch(p, 0.035, w);
  M(p, 'thigh', 0, 0, 0.07, w); M(p, 'foot', 0, 0, -0.07, w);
  S(p, 'hips.z', 0.035 + 0.02 * Math.sin(t * 0.45 + st.seed), w);
  S(p, 'chest.x', 0.03 * Math.sin(t * 1.7), w); S(p, 'chest.y', 0.06, w); S(p, 'chest.z', -0.03, w);
  S(p, 'neck.y', 0.32 * Math.sin(t * 0.29 + st.seed) * Math.sin(t * 0.11 + st.seed * 2), w); S(p, 'head.x', 0.06 * Math.sin(t * 0.41 + st.seed), w);
  M(p, 'uarm', 0.04, 0, 0.13, w); M(p, 'farm', -0.32, 0, 0, w);
  if (weapon === 'blade') { R(p, 'uarmR', -0.12, 0, 0.02, w); R(p, 'farmR', -0.35, 0, 0, w); }
  if (weapon === 'greatsword') { R(p, 'uarmR', -0.05, 0, -0.1, w); R(p, 'farmR', -0.2, 0, 0, w); R(p, 'handR', 0.25, 0, 0, w); } // point down beside the boot
  if (weapon === 'staff') { R(p, 'uarmR', -0.12, 0, -0.18, w); R(p, 'farmR', -0.75, -0.2, 0, w); R(p, 'handR', 0.85, 0, 0, w); }
  if (weapon === 'daggers') { M(p, 'uarm', 0, 0, 0.08, w); M(p, 'farm', -0.15, 0, 0, w); }
}
function poseCombat(p, w, t, weapon) {
  crouch(p, 0.14, w);
  R(p, 'thighL', -0.28, 0, 0.1, w); R(p, 'thighR', 0.22, 0, -0.1, w); R(p, 'footR', -0.15, 0, 0, w);
  S(p, 'spine.x', 0.15, w); S(p, 'chest.y', 0.3, w); S(p, 'neck.y', -0.3, w); S(p, 'hips.y', 0.1, w);
  S(p, 'hipsY', 0.012 * Math.sin(t * 5), w);
  if (weapon === 'staff') { R(p, 'uarmR', -0.6, 0, -0.1, w); R(p, 'farmR', -0.85, 0, 0, w); R(p, 'handR', 1.4, 0, 0, w); R(p, 'uarmL', -0.75, 0, 0.3, w); R(p, 'farmL', -1.3, 0, 0, w); }
  else { R(p, 'uarmR', -0.7, 0, -0.25, w); R(p, 'farmR', -1.3, 0, 0, w); R(p, 'uarmL', -0.5, 0, 0.3, w); R(p, 'farmL', -1.65, 0, 0, w); }
}
// one leg of a gait cycle; ph is that leg's phase
function gaitLeg(p, s, ph, A, B, Bmin, base, w) {
  const sn = Math.sin(ph), knee = Bmin + B * Math.pow(Math.max(0, Math.cos(ph + 0.55)), 1.3);
  R(p, 'thigh' + s, -A * sn - base, 0, 0, w);
  R(p, 'shin' + s, knee, 0, 0, w);
  R(p, 'foot' + s, 0.35 * Math.max(0, -sn) * (A > 0.6 ? 1 : 0.4) - 0.1 * knee * 0.3, 0, 0, w);
}
function poseGait(p, w, ph, k, weapon) {
  // k: 0 walk → 1 run → 2 sprint (continuous)
  const run = clamp(k, 0, 1), spr = clamp(k - 1, 0, 1);
  const A = 0.42 + 0.4 * run + 0.22 * spr, B = 0.55 + 0.95 * run + 0.4 * spr, Bmin = 0.06 + 0.2 * run + 0.05 * spr;
  const base = 0.06 * run + 0.14 * spr, lean = 0.04 + 0.16 * run + 0.32 * spr;
  const sL = Math.sin(ph);
  gaitLeg(p, 'L', ph, A, B, Bmin, base, w); gaitLeg(p, 'R', ph + Math.PI, A, B, Bmin, base, w);
  // walking: highest at mid-stance; running: lowest at mid-stance, airborne between steps
  const bob = (0.025 - 0.08 * run - 0.01 * spr) * Math.cos(2 * ph);
  S(p, 'hipsY', bob - 0.02 * run - 0.04 * spr, w);
  S(p, 'hips.y', -0.13 * sL * (1 - 0.4 * spr), w); S(p, 'chest.y', 0.26 * sL * (1 - 0.5 * spr), w);
  S(p, 'hips.z', 0.04 * Math.cos(ph) * (1 - run), w);
  S(p, 'spine.x', lean * 0.55, w); S(p, 'chest.x', lean * 0.45, w); S(p, 'neck.x', -lean * 0.5, w); S(p, 'head.x', -lean * 0.3, w);
  // arms: counter-swing to the legs, or the swept-back "ninja run" when sprinting with blades
  const ninja = (weapon === 'blade' || weapon === 'greatsword' || weapon === 'daggers' || weapon === 'none') ? spr : 0;
  const armA = (0.3 + 0.6 * run) * (1 - ninja), elbow = 0.25 + 1.1 * run;
  R(p, 'uarmL', armA * sL, 0, 0.1 + 0.05 * run, w); R(p, 'farmL', -elbow - 0.25 * Math.max(0, -sL) * run, 0, 0, w);
  if (weapon === 'staff' && spr > 0) {
    R(p, 'uarmR', armA * -sL * (1 - spr) + 0.85 * spr, 0, -0.1 - 0.15 * spr, w); R(p, 'farmR', -elbow * (1 - spr) - 0.35 * spr, 0, 0, w);
  } else { R(p, 'uarmR', -armA * sL, 0, -0.1 - 0.05 * run, w); R(p, 'farmR', -elbow - 0.25 * Math.max(0, sL) * run, 0, 0, w); }
  if (ninja > 0) {
    M(p, 'uarm', 1.2 + 0.06 * Math.sin(ph * 2), 0.0, 0.32, w * ninja); M(p, 'farm', elbow - 0.2, 0, 0, w * ninja); // undo the bend, keep a little
    S(p, 'chest.x', 0.08, w * ninja); M(p, 'clav', 0, 0.12, 0, w * ninja);
  }
}
function poseAir(p, w, vy, spd) {
  const rise = ss(-5, 4, vy);
  R(p, 'thighL', -0.95 * rise - 0.3 * (1 - rise), 0, 0.05, w); R(p, 'shinL', 1.55 * rise + 0.55 * (1 - rise), 0, 0, w);
  R(p, 'thighR', -0.3 * rise - 0.55 * (1 - rise), 0, -0.05, w); R(p, 'shinR', 0.8 * rise + 1.0 * (1 - rise), 0, 0, w);
  M(p, 'foot', 0.3, 0, 0, w);
  M(p, 'uarm', -0.45 * rise - 0.15 * (1 - rise), 0, 0.4 * rise + 0.85 * (1 - rise), w); M(p, 'farm', -0.7 * rise - 0.35 * (1 - rise), 0, 0, w);
  S(p, 'spine.x', 0.1 + 0.25 * ss(10, 16, spd), w); S(p, 'neck.x', -0.15, w);
}
function poseSlide(p, w, t) {
  S(p, 'pivDY', -0.62, w); S(p, 'pivX', -0.12, w);
  R(p, 'thighL', -1.4, 0, 0.05, w); R(p, 'shinL', 0.12, 0, 0, w); R(p, 'footL', 0.35, 0, 0, w);
  R(p, 'thighR', -0.95, 0.2, -0.55, w); R(p, 'shinR', 2.3, 0, 0, w); R(p, 'footR', 0.4, 0, 0, w);
  S(p, 'spine.x', 0.28, w); S(p, 'chest.y', 0.32, w); S(p, 'neck.x', -0.32, w); S(p, 'neck.y', -0.25, w);
  R(p, 'uarmL', 0.45, 0, 0.75, w); R(p, 'farmL', -0.15, 0, 0, w);
  R(p, 'uarmR', -0.8, 0, -0.3, w); R(p, 'farmR', -0.85, 0, 0, w);
  S(p, 'hipsY', 0.008 * Math.sin(t * 40), w); // the ground chattering under the armour
}
function poseTuck(p, w) {
  M(p, 'thigh', -1.75, 0, 0.12, w); M(p, 'shin', 2.35, 0, 0, w); M(p, 'foot', 0.3, 0, 0, w);
  S(p, 'spine.x', 0.55, w); S(p, 'chest.x', 0.2, w); S(p, 'neck.x', 0.35, w);
  M(p, 'uarm', -0.75, 0, 0.3, w); M(p, 'farm', -1.4, 0, 0, w);
}
function poseBulletJump(p, w) {
  M(p, 'thigh', 0.12, 0, 0.04, w); M(p, 'shin', 0.18, 0, 0, w); M(p, 'foot', 0.55, 0, 0, w);
  M(p, 'uarm', 0.4, 0, 0.22, w); M(p, 'farm', -0.1, 0, 0, w); M(p, 'clav', 0, 0.1, 0, w);
  S(p, 'spine.x', -0.05, w); S(p, 'neck.x', -0.75, w); S(p, 'head.x', -0.2, w);
}
function poseGlide(p, w, t) {
  S(p, 'pivX', 0.55, w);
  M(p, 'uarm', -0.25, 0, 1.3 + 0.05 * Math.sin(t * 3), w); M(p, 'farm', -0.2, 0, 0, w);
  R(p, 'thighL', 0.25, 0, 0.08, w); R(p, 'shinL', 0.45, 0, 0, w); R(p, 'thighR', 0.05, 0, -0.08, w); R(p, 'shinR', 0.85, 0, 0, w); M(p, 'foot', 0.45, 0, 0, w);
  S(p, 'neck.x', -0.55, w);
}
function poseHeroLand(p, w) {
  S(p, 'pivDY', -0.5, w); S(p, 'pivX', 0.25, w);
  R(p, 'thighL', -1.45, 0, 0.12, w); R(p, 'shinL', 1.75, 0, 0, w); R(p, 'footL', -0.25, 0, 0, w);
  R(p, 'thighR', 0.15, 0, -0.12, w); R(p, 'shinR', 1.3, 0, 0, w); R(p, 'footR', 0.6, 0, 0, w);
  R(p, 'uarmR', -0.55, 0, -0.1, w); R(p, 'farmR', -0.15, 0, 0, w);
  R(p, 'uarmL', 0.75, 0, 0.7, w); R(p, 'farmL', -0.45, 0, 0, w);
  S(p, 'spine.x', 0.35, w); S(p, 'neck.x', -0.4, w);
}
function poseDance(p, t) {
  const b = Math.abs(Math.sin(t * 4));
  crouch(p, 0.04 + 0.1 * b);
  S(p, 'hips.z', 0.12 * Math.sin(t * 4)); S(p, 'chest.y', 0.35 * Math.sin(t * 4)); S(p, 'neck.x', -0.15 * b);
  R(p, 'uarmL', -0.3, 0, 2.2 + 0.45 * Math.sin(t * 8)); R(p, 'farmL', -0.7 + 0.5 * Math.sin(t * 8), 0, 0);
  R(p, 'uarmR', -0.3, 0, -2.2 - 0.45 * Math.sin(t * 8 + 1)); R(p, 'farmR', -0.7 + 0.5 * Math.sin(t * 8 + 1), 0, 0);
}
function poseDead(p) {
  M(p, 'uarm', 0, 0, 0.6); M(p, 'farm', -0.4, 0, 0); S(p, 'neck.y', 0.6); M(p, 'thigh', -0.15, 0, 0.12); M(p, 'shin', 0.4, 0, 0);
}

// ---------------------------------------------------------------- per-frame
// e: the entity (player/bot). Reads e.pos, e.group.rotation.y and the movement timers main.js keeps:
//   e.slideT (>=0 while sliding), e.rollT, e.bjT, e.flipT (elapsed s, 0 = off), e.glide, e.landT + e.landHard,
//   e.atk (rising edge starts an act; e.actHint picks it), e.danceT, e.dead / e.alive, e.combat
export function animSoldier(r, e, dt, t, visible = true) {
  const st = r.st, p = e.pos;
  if (st.lx === null) { st.lx = p.x; st.lz = p.z; st.ly = p.y; st.lyaw = e.group.rotation.y; }
  const id = Math.max(dt, 1e-4);
  let raw = Math.hypot(p.x - st.lx, p.z - st.lz) / id; if (raw > 70) raw = st.spd; // teleports (blink, respawn) don't count
  let vy = (p.y - st.ly) / id; if (Math.abs(vy) > 60) vy = 0;
  st.lx = p.x; st.lz = p.z; st.ly = p.y;
  st.spd += (raw - st.spd) * (1 - Math.exp(-dt * 12));
  st.vy += ((e.vy !== undefined ? e.vy : vy) - st.vy) * (1 - Math.exp(-dt * 15));
  const yaw = e.group.rotation.y, dyaw = wrapA(yaw - st.lyaw); st.lyaw = yaw;
  st.yawRate += (dyaw / id - st.yawRate) * (1 - Math.exp(-dt * 8));
  // a new attack / ability / emote
  const atk = e.atk || 0;
  if (atk > st.lastAtk + 0.04) {
    const hint = e.actHint && HINTS[e.actHint]; e.actHint = null;
    let name = hint;
    if (!name) { const c = COMBOS[r.weapon] || COMBOS.none; if (st.actT > 1.1) st.combo = 0; name = c[st.combo % c.length]; st.combo++; }
    st.act = ACTS[name]; st.actT = 0;
  }
  st.lastAtk = atk;
  st.actT += dt;
  const spd = st.spd, grounded = p.y - (e.gy || 0) <= 0.02;   // e.gy: the top of a block you're standing on
  if (!visible) return;

  const T = st.T, Q = st.Q, C = st.C; T.fill(0);
  let k = 16; // smoothing stiffness
  const dead = e.dead || e.alive === false;
  if (dead) { poseDead(T); k = 6; st.act = null; }
  else if (e.danceT > 0) { poseDance(T, t); k = 14; }
  else {
    // ---- locomotion
    const gk = ss(2.4, 4.6, spd) + ss(10.5, 13, spd); // 0 walk, 1 run, 2 sprint
    const stride = 1.45 + 1.25 * clamp(gk, 0, 1) + 0.95 * clamp(gk - 1, 0, 1);
    if (grounded && !(e.slideT >= 0)) st.phase += dt * spd / stride * TAU;
    const wMove = ss(0.25, 1.1, spd);
    st.combat += ((e.combat ? 1 : 0) - st.combat) * (1 - Math.exp(-dt * 6));
    if (wMove < 1) { const wi = 1 - wMove; poseIdle(T, wi * (1 - st.combat), t, st, r.weapon); poseCombat(T, wi * st.combat, t, r.weapon); }
    if (wMove > 0) poseGait(T, wMove, st.phase, gk, r.weapon);
    // ---- airborne
    st.air += ((grounded ? 0 : 1) - st.air) * (1 - Math.exp(-dt * (grounded ? 22 : 12)));
    if (st.air > 0.01) { Q.fill(0); poseAir(Q, 1, st.vy, spd); lerpInto(T, Q, st.air); }
    // ---- slide
    const sliding = grounded && e.slideT !== undefined && e.slideT >= 0;
    st.slide += ((sliding ? 1 : 0) - st.slide) * (1 - Math.exp(-dt * (sliding ? 18 : 10)));
    if (st.slide > 0.01) { Q.fill(0); poseSlide(Q, 1, t); lerpInto(T, Q, st.slide); }
    // ---- aim glide
    st.glide += ((e.glide ? 1 : 0) - st.glide) * (1 - Math.exp(-dt * 8));
    if (st.glide > 0.01) { Q.fill(0); poseGlide(Q, 1, t); lerpInto(T, Q, st.glide); }
    // ---- landings
    if (e.landT > 0) {
      if (e.landHard) { const u = e.landT / MOVE_DUR.landHard, w = u < 0.65 ? 1 : 1 - ss(0.65, 1, u); Q.fill(0); poseHeroLand(Q, 1); lerpInto(T, Q, w); k = 24; }
      else { const u = e.landT / MOVE_DUR.landSoft; crouch(T, 0.24 * (1 - u)); }
    }
    // ---- bullet jump, flip, roll (whole-body rotations on the pivot, applied directly below)
    if (e.bjT > 0) { const u = clamp(e.bjT / MOVE_DUR.bj, 0, 1); Q.fill(0); poseBulletJump(Q, 1); lerpInto(T, Q, 1 - ss(0.8, 1, u)); k = 26; }
    if (e.flipT > 0) { const u = clamp(e.flipT / MOVE_DUR.flip, 0, 1); Q.fill(0); poseTuck(Q, 1); lerpInto(T, Q, Math.sin(Math.PI * u)); k = 28; }
    if (e.rollT > 0) { const u = clamp(e.rollT / MOVE_DUR.roll, 0, 1); Q.fill(0); poseTuck(Q, 1); S(Q, 'pivDY', -0.45 * Math.sin(Math.PI * u)); lerpInto(T, Q, Math.min(1, Math.sin(Math.PI * u) * 1.6)); k = 30; }
    // ---- act overlay (only its own channels)
    if (st.act) {
      const a = st.act, u = st.actT / a.dur;
      if (u >= 1) st.act = null;
      else { const w = Math.min(1, u / 0.08) * (u > 0.85 ? (1 - u) / 0.15 : 1); for (const [ci, keys] of a.ch) T[ci] += (kf(u, keys) - T[ci]) * w; k = Math.max(k, 26); }
    }
    // lean into turns
    S(T, 'pivZ', clamp(-st.yawRate * spd * 0.011, -0.38, 0.38) * (grounded ? 1 : 0.4) * (1 - st.slide * 0.6));
  }
  // ---- smooth toward the target
  const a = 1 - Math.exp(-dt * k);
  for (const ci of [CH.pivX, CH.pivY]) C[ci] = T[ci] + wrapA(C[ci] - T[ci]); // never unwind a full turn backwards
  for (let i = 0; i < NCH; i++) C[i] += (T[i] - C[i]) * a;
  // direct (unsmoothed) whole-body rotations
  if (!dead) {
    if (e.flipT > 0) C[CH.pivX] = TAU * easeIO(clamp(e.flipT / MOVE_DUR.flip, 0, 1));
    if (e.rollT > 0) C[CH.pivX] = TAU * easeIO(clamp(e.rollT / MOVE_DUR.roll, 0, 1));
    if (e.bjT > 0) {
      const u = clamp(e.bjT / MOVE_DUR.bj, 0, 1);
      C[CH.pivX] = 1.35 * ss(0, 0.2, u) * (1 - 0.55 * ss(0.7, 1, u));   // dive forward, head first
      C[CH.pivY] = TAU * easeIO(ss(0.05, 0.85, u));                    // corkscrew
    }
    if (st.act && st.act.name === 'spin') C[CH.pivY] = T[CH.pivY];
  }
  // ---- apply
  const bones = r.bones;
  if (r.hold) for (const i of r.hold) C[i * 3] = C[i * 3 + 1] = C[i * 3 + 2] = 0;
  for (let i = 0; i < bones.length; i++) bones[i].rotation.set(C[i * 3], C[i * 3 + 1], C[i * 3 + 2]);
  bones[0].position.y = r.hipsRest + C[CH.hipsY];
  r.pivot.position.y = 1.0 + C[CH.pivDY];
  r.pivot.rotation.set(C[CH.pivX], C[CH.pivY], C[CH.pivZ]);
}
