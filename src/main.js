// =====================================================================
//  AD-NOSTRA — Anno Domini 2137
//  An MMO RPG set in 2137, ten years after the defeat of the Catharsis at Carax.
// =====================================================================
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Sound } from './audio.js';
import { loadSoldier, loadOrion, loadMalia, soldierReady, makeSoldier, animSoldier, MOVE_DUR } from './soldier.js';
import {
  CODEX, TIPS, CLASSES, VISORS, QUESTS, MASCAR_IDLE, BOT_NAMES, GUILDS,
  WORLD_CHAT, ZONE_CHAT, GOV_ANNOUNCE, LORE_REPLIES, GREET_REPLIES, ZURI_LINES, CANTINA_CHAT, PLAQUE, ORION_LINES, MALIA_LINES, RESIDENT_LINES, CROXIAN_LINES, SKILLS, ITEMS, RECIPES, NODES
} from './data.js';

const V3 = THREE.Vector3;
const $ = id => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const d2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const fmtNum = n => n.toLocaleString('en-GB');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function showError(msg) { const e = $('err'); e.textContent = msg; e.classList.remove('hidden'); setTimeout(() => e.classList.add('hidden'), 8000); }
window.addEventListener('error', ev => { console.error(ev.error || ev.message); });

// ---------------------------------------------------------------- storage
const store = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
};
const SAVE_KEY = 'adnostra_save_v1';   // the old single-character save; read once to seed the registry
// The registry: every Ascendant the player has made. Residents are retired ones who live in the city.
const ROSTER_KEY = 'adnostra_roster_v1', ACTIVE_KEY = 'adnostra_active';
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
function loadRoster() {
  let r = store.get(ROSTER_KEY);
  if (!Array.isArray(r)) { r = []; const old = store.get(SAVE_KEY); if (old && old.name) { old.id = old.id || newId(); r.push(old); store.set(ACTIVE_KEY, old.id); } }
  for (const c of r) if (!c.id) c.id = newId();
  store.set(ROSTER_KEY, r);
  return r;
}
const saveRoster = () => store.set(ROSTER_KEY, G.roster);
function lastPlayable() {
  const list = G.roster.filter(c => !c.resident), id = store.get(ACTIVE_KEY);
  return list.find(c => c.id === id) || list.sort((a, b) => (b.lastPlayed || b.created || 0) - (a.lastPlayed || a.created || 0))[0] || null;
}
const settings = Object.assign({ volume: 0.6, music: true, bloom: true, shadows: true, sens: 1, plates: true, dynres: true, fps: false }, store.get('adnostra_settings', {}));
Sound.volume = settings.volume; Sound.musicOn = settings.music;

// ---------------------------------------------------------------- device
// Touch devices get on-screen controls and a lighter render load.
const TOUCH = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0 && !matchMedia('(pointer: fine)').matches;
if (TOUCH) document.documentElement.classList.add('touch');
const Q = TOUCH ? { pixelRatio: 1.5, shadowMap: 1024, worldGrass: 14000, menuGrass: 4000 } : { pixelRatio: 2, shadowMap: 2048, worldGrass: 36000, menuGrass: 9000 };

// ---------------------------------------------------------------- renderer
const canvas = $('scene');
// Canvas AA is off: the scene renders into the composer's own multisampled target instead.
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, Q.pixelRatio));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = settings.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.info.autoReset = false; // reset once per frame so stats cover every pass

const pmrem = new THREE.PMREMGenerator(renderer);
// Reflections come from each scene's own sky, so metal and armour pick up dusk or
// daylight colours instead of a white studio.
function envFromSky(sky) {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), sky.material));
  const tex = pmrem.fromScene(s, 0.03, 0.1, 100).texture;
  return tex;
}

const MSAA = 4;
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: MSAA }));
composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(innerWidth, innerHeight);
const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
composer.addPass(renderPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.85, 0.55, 0.72);
bloom.enabled = settings.bloom;
composer.addPass(bloom);
composer.addPass(new OutputPass());

const clock = new THREE.Clock();
// Each scene carries its own bloom and exposure: the dusk menu and the daylight world need different grading.
function setScene(scene, cam) {
  renderPass.scene = scene; renderPass.camera = cam;
  const p = scene.userData.post || { strength: 0.6, radius: 0.5, threshold: 0.85, exposure: 1 };
  bloom.strength = p.strength; bloom.radius = p.radius; bloom.threshold = p.threshold;
  renderer.toneMappingExposure = p.exposure;
  perf.grace = 3; // ignore shader-compile hitches right after a switch
}
const G = {
  mode: 'splash', time: 0, world: null, P: null, D: null,
  enemies: [], bots: [], npcs: [], shards: [], proj: [], fx: [], timers: [], floaters: [], props: [], animals: [], herds: [],
  colliders: [], ui: null, zone: '', autosave: 20, chatT: 6, nodes: [], build: false, satTab: 'inv',
};

// ---------------------------------------------------------------- textures
function canvasTex(w, h, draw, rep = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy(); t.repeat.set(rep, rep);
  return t;
}
// Soft round sprite for particles (points draw as hard squares without one).
let _dot = null;
const dotTex = () => _dot || (_dot = canvasTex(64, 64, (g, w, h) => {
  const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.clearRect(0, 0, w, h); g.fillStyle = gr; g.fillRect(0, 0, w, h);
}));
function speckle(g, w, h, n, colors, size = 2) {
  for (let i = 0; i < n; i++) { g.fillStyle = pick(colors); g.fillRect(Math.random() * w, Math.random() * h, size * Math.random() + 0.5, size * Math.random() + 0.5); }
}
function cracks(g, w, h, n, color, width = 1.5) {
  g.strokeStyle = color; g.lineWidth = width;
  for (let i = 0; i < n; i++) {
    let x = Math.random() * w, y = Math.random() * h; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 8; k++) { x += rand(-30, 30); y += rand(-30, 30); g.lineTo(x, y); }
    g.stroke();
  }
}

// Croxian Mascar's scythe: a tall pole gripped in his right fist, with four curved blades
// stacked near the top, each with a glowing cyan line. Built in the Mascar model's own units
// (feet at y = 0, about 0.98 tall, facing +Z), so it scales with every copy of him.
// T is the three.js namespace (only the classes used below are needed).
function makeScythe(T) {
  const X = -0.19, Z = 0.07;                         // pole axis: through the right fist, clear of the arm and cape
  const metal = new T.MeshStandardMaterial({ color: 0x5b6169, metalness: 0.75, roughness: 0.42 });
  const blade = new T.MeshStandardMaterial({ color: 0x2b3038, metalness: 0.8, roughness: 0.32 });
  const dark = new T.MeshStandardMaterial({ color: 0x171b21, metalness: 0.5, roughness: 0.6 });
  const glow = new T.MeshStandardMaterial({ color: 0x3ee6ff, emissive: 0x3ee6ff, emissiveIntensity: 2.4, roughness: 0.4, side: T.DoubleSide });
  const g = new T.Group(); g.name = 'scythe';
  const add = (geo, m, x, y, z) => { const me = new T.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; me.receiveShadow = true; g.add(me); return me; };
  const TOP = 1.3;
  // pole, pointed foot and the cyan line along its lower end
  add(new T.CylinderGeometry(0.0085, 0.0085, TOP - 0.05, 10), metal, X, 0.05 + (TOP - 0.05) / 2, Z);
  add(new T.CylinderGeometry(0.0085, 0.001, 0.05, 10), metal, X, 0.025, Z);
  add(new T.BoxGeometry(0.004, 0.32, 0.005), glow, X - 0.0085, 0.22, Z);
  // ridged grip just above the fist
  const ring = new T.CylinderGeometry(0.0115, 0.0115, 0.007, 10);
  for (let i = 0; i < 9; i++) add(ring, dark, X, 0.545 + i * 0.016, Z);
  // four blades, each fixed to the pole by a dark knuckle block
  const knuckle = new T.BoxGeometry(0.03, 0.03, 0.03);
  const bez = (a, b, c, d, t) => { const u = 1 - t; return [u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0], u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1]]; };
  // blade outline in (out, up) from its root: a sharp lower edge and a thicker spine on top, meeting at a drooping tip
  const N = 28, TH = 0.006, lo = [], up = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    lo.push(bez([0, -0.016], [0.1, -0.004], [0.27, -0.02], [0.4, -0.135], t));
    up.push(bez([0, 0.018], [0.13, 0.055], [0.3, 0.045], [0.4, -0.135], t));
  }
  const bladeGeo = (() => {
    const p = [];
    const tri = (a, b, c) => p.push(...a, ...b, ...c);
    const L = (i) => [-lo[i][0], lo[i][1], 0];             // cutting edge: sharp (zero thickness)
    const U = (i, s) => [-up[i][0], up[i][1], s * TH];     // spine: thick on both faces
    for (let i = 0; i < N; i++) {
      tri(L(i), U(i, 1), L(i + 1)); tri(L(i + 1), U(i, 1), U(i + 1, 1));                 // front face
      tri(L(i), L(i + 1), U(i, -1)); tri(L(i + 1), U(i + 1, -1), U(i, -1));              // back face
      tri(U(i, 1), U(i, -1), U(i + 1, 1)); tri(U(i + 1, 1), U(i, -1), U(i + 1, -1));     // spine
    }
    tri(L(0), U(0, -1), U(0, 1));                                                        // root
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(p, 3)); geo.computeVertexNormals(); return geo;
  })();
  const lineGeo = (() => {   // glowing line on both faces, running along the blade just above the edge
    const p = [], A = 0.17, B = 0.38, I0 = 2, I1 = N - 2;
    const at = (i, f, s) => { const x = lo[i][0] + (up[i][0] - lo[i][0]) * f, y = lo[i][1] + (up[i][1] - lo[i][1]) * f; return [-x, y, s * (f * TH + 0.0012)]; };
    for (const s of [1, -1]) for (let i = I0; i < I1; i++) p.push(...at(i, A, s), ...at(i, B, s), ...at(i + 1, A, s), ...at(i + 1, A, s), ...at(i, B, s), ...at(i + 1, B, s));
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(p, 3)); geo.computeVertexNormals(); return geo;
  })();
  for (const y of [1.28, 1.185, 1.09, 0.995]) {
    add(knuckle, dark, X, y, Z);
    add(bladeGeo, blade, X - 0.012, y, Z);
    add(lineGeo, glow, X - 0.012, y, Z);
  }
  add(new T.BoxGeometry(0.022, 0.014, 0.022), dark, X, TOP + 0.007, Z);   // cap
  return g;
}

// ---------------------------------------------------------------- Mascar model
let mascarProto = null;
async function loadMascar(progress) {
  await new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = 'assets/model.js';
    s.onload = res; s.onerror = () => rej(new Error('Could not load assets/model.js'));
    document.head.appendChild(s);
  });
  progress(0.7);
  const b64 = window.MASCAR_GLB_B64; window.MASCAR_GLB_B64 = null;
  let buf;
  try { buf = await (await fetch('data:application/octet-stream;base64,' + b64)).arrayBuffer(); }
  catch (e) { const bin = atob(b64); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); buf = u.buffer; }
  progress(0.85);
  const gltf = await new Promise((res, rej) => new GLTFLoader().parse(buf, '', res, rej));
  const root = gltf.scene;
  const box = new THREE.Box3().setFromObject(root);
  root.userData.height = box.max.y - box.min.y;
  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; if (o.material) { o.material.envMapIntensity = 1.0; } } });
  root.add(makeScythe(THREE));
  mascarProto = root;
  progress(1);
}
function mascarInstance(height, material = null) {
  if (!mascarProto) {
    const r = makeHumanoid({ armor: 0x3a424e, accent: 0x3ee6ff, visor: 0x3ee6ff, weapon: 'none' });
    r.group.scale.setScalar(height / 1.86); return r.group;
  }
  const m = mascarProto.clone(true);
  if (material) m.traverse(o => { if (o.isMesh) { const nm = material.clone(); nm.normalMap = o.material.normalMap; o.material = nm; } });
  m.scale.setScalar(height / mascarProto.userData.height);
  const g = new THREE.Group(); g.add(m); return g;
}

// =====================================================================
//  CHARACTER BUILDERS
// =====================================================================
const MATS = {};
function mat(key, make) { return MATS[key] || (MATS[key] = make()); }
const glowMat = (hex, i = 2.4) => mat('glow' + hex + i, () => new THREE.MeshStandardMaterial({ color: hex, emissive: hex, emissiveIntensity: i, roughness: 0.4 }));
const armorMat = hex => mat('arm' + hex, () => new THREE.MeshStandardMaterial({ color: hex, metalness: 0.75, roughness: 0.36 }));
const darkMat = () => mat('dark', () => new THREE.MeshStandardMaterial({ color: 0x0f1318, metalness: 0.4, roughness: 0.7 }));
const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sph: new THREE.SphereGeometry(1, 16, 12),
  oct: new THREE.OctahedronGeometry(1, 0),
  ico: new THREE.IcosahedronGeometry(1, 0),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 16),
  rock: new THREE.DodecahedronGeometry(1, 0),
  ico1: new THREE.IcosahedronGeometry(1, 1),
};
const SOLDIER_MATS = { glow: glowMat, armor: armorMat, dark: darkMat };
const BOT_TINTS = [null, null, 0xd8dde6, 0xd6c3b0, 0xbfd2bb, 0xd3bccd, 0xb7c4dc, 0xe0d2b4];
function bx(w, h, d, m, x = 0, y = 0, z = 0, parent) {
  const me = new THREE.Mesh(GEO.box, m); me.scale.set(w, h, d); me.position.set(x, y, z);
  me.castShadow = true; me.receiveShadow = true; if (parent) parent.add(me); return me;
}

function makeHumanoid({ armor = 0x2b323c, accent = 0x3ee6ff, visor = 0x3ee6ff, weapon = 'blade', hollow = false }) {
  const g = new THREE.Group();
  const A = armorMat(armor), D = darkMat(), GL = glowMat(accent, hollow ? 3 : 2.2), VS = glowMat(visor, 3);
  const hips = new THREE.Group(); hips.position.y = 0.95; g.add(hips);
  const legs = [-1, 1].map(s => {
    const p = new THREE.Group(); p.position.set(0.13 * s, 0, 0); hips.add(p);
    bx(0.17, 0.5, 0.2, A, 0, -0.25, 0, p); bx(0.15, 0.45, 0.17, D, 0, -0.68, 0, p); bx(0.18, 0.1, 0.28, A, 0, -0.9, 0.04, p);
    return p;
  });
  const torso = new THREE.Group(); hips.add(torso);
  bx(0.42, 0.22, 0.24, D, 0, 0.08, 0, torso);
  bx(0.52, 0.42, 0.3, A, 0, 0.4, 0, torso);
  bx(0.4, 0.04, 0.02, GL, 0, 0.36, 0.16, torso);
  bx(0.04, 0.2, 0.02, GL, 0, 0.5, 0.16, torso);
  bx(0.3, 0.34, 0.1, D, 0, 0.42, -0.19, torso); bx(0.04, 0.26, 0.02, GL, -0.08, 0.42, -0.25, torso); bx(0.04, 0.26, 0.02, GL, 0.08, 0.42, -0.25, torso);
  const arms = [-1, 1].map(s => {
    bx(0.22, 0.14, 0.3, A, 0.34 * s, 0.62, 0, torso);
    const p = new THREE.Group(); p.position.set(0.34 * s, 0.58, 0); torso.add(p);
    bx(0.13, 0.34, 0.15, D, 0, -0.17, 0, p); bx(0.15, 0.32, 0.17, A, 0, -0.46, 0, p);
    if (hollow) bx(0.05, 0.25, 0.05, GL, 0, -0.72, 0.04, p);
    return p;
  });
  const head = new THREE.Group(); head.position.y = 0.78; torso.add(head);
  bx(0.25, 0.27, 0.27, hollow ? D : A, 0, 0.02, 0, head);
  if (hollow) { bx(0.05, 0.04, 0.02, VS, -0.06, 0.04, 0.14, head); bx(0.05, 0.04, 0.02, VS, 0.06, 0.04, 0.14, head); }
  else { bx(0.21, 0.06, 0.02, VS, 0, 0.03, 0.14, head); bx(0.04, 0.12, 0.1, A, 0, 0.18, -0.02, head); }
  const hand = arms[1];
  if (weapon === 'blade') { bx(0.05, 0.16, 0.05, D, 0, -0.66, 0.05, hand); const bl = bx(0.04, 1.0, 0.11, armorMat(0x8996a6), 0, -0.66, 0.5, hand); bl.rotation.x = Math.PI / 2; const e = bx(0.015, 1.0, 0.02, GL, 0, -0.66, 0.5, hand); e.rotation.x = Math.PI / 2; e.position.y -= 0.06; }
  if (weapon === 'staff') { const st = bx(0.05, 1.7, 0.05, D, 0, -0.62, 0.05, hand); st.rotation.x = 0.1; const orb = new THREE.Mesh(GEO.oct, GL); orb.scale.setScalar(0.12); orb.position.set(0, 0.25, 0.1); orb.userData.keep = true; hand.add(orb); g.userData.orb = orb; }
  if (weapon === 'daggers') for (const a of arms) { const k = bx(0.03, 0.45, 0.07, GL, 0, -0.7, 0.22, a); k.rotation.x = Math.PI / 2.2; }
  if (hollow) { torso.rotation.x = 0.38; head.rotation.x = -0.25; arms.forEach(a => a.scale.y = 1.25); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  compactRig(g);
  return { group: g, legs, arms, torso, head, hips };
}
function animHumanoid(r, move, t, atk = 0, dance = 0) {
  const s = Math.sin(t * 9) * 0.75 * move;
  r.legs[0].rotation.x = s; r.legs[1].rotation.x = -s;
  r.arms[0].rotation.x = -s * 0.6; r.arms[1].rotation.x = s * 0.6;
  r.hips.position.y = 0.95 + Math.abs(Math.cos(t * 9)) * 0.05 * move;
  if (atk > 0) { const k = Math.sin((1 - atk / 0.3) * Math.PI); r.arms[1].rotation.x = -2.4 * k; r.torso.rotation.y = -0.4 * k; }
  else r.torso.rotation.y *= 0.8;
  if (dance > 0) { r.arms[0].rotation.z = -2.4 + Math.sin(t * 8) * 0.4; r.arms[1].rotation.z = 2.4 + Math.sin(t * 8 + 1) * 0.4; r.hips.position.y = 0.95 + Math.abs(Math.sin(t * 8)) * 0.12; }
  else { r.arms[0].rotation.z *= 0.8; r.arms[1].rotation.z *= 0.8; }
}

function makeDrone(level, glow = 0xff2b4a) {
  const g = new THREE.Group(); const body = new THREE.Group(); body.position.y = 2.6; g.add(body);
  const core = new THREE.Mesh(GEO.oct, glowMat(glow, 3)); core.scale.set(0.42, 0.55, 0.42); body.add(core);
  const shell = new THREE.Mesh(GEO.ico, mat('droneShell', () => new THREE.MeshStandardMaterial({ color: 0x1d2229, metalness: 0.8, roughness: 0.3, wireframe: true }))); shell.scale.setScalar(0.72); body.add(shell);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.05, 6, 32), armorMat(0x39424d)); ring.rotation.x = Math.PI / 2; body.add(ring);
  for (let i = 0; i < 3; i++) { const f = bx(0.08, 0.5, 0.35, armorMat(0x39424d), 0, 0, 0); const p = new THREE.Group(); p.rotation.y = i * 2.094; f.position.x = 0.95; p.add(f); body.add(p); }
  const eye = new THREE.Mesh(GEO.sph, glowMat(0xffe0e5, 4)); eye.scale.setScalar(0.1); eye.position.z = 0.42; body.add(eye);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, body, ring, shell };
}
function makeBoss() {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const obs = mat('obsid', () => new THREE.MeshStandardMaterial({ color: 0x14080b, metalness: 0.6, roughness: 0.25, flatShading: true }));
  const crim = glowMat(0xff2b4a, 3.2);
  const core = new THREE.Mesh(GEO.oct, crim); core.scale.set(1.3, 2.0, 1.3); core.position.y = 4.4; body.add(core);
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Mesh(GEO.oct, obs); const a = i / 7 * Math.PI * 2;
    s.scale.set(0.7, rand(1.6, 2.6), 0.5); s.position.set(Math.cos(a) * 1.35, 4.2 + rand(-0.6, 0.6), Math.sin(a) * 1.35); s.rotation.set(rand(-.3, .3), -a, 0.25 * Math.cos(a)); body.add(s);
  }
  const head = new THREE.Mesh(GEO.oct, obs); head.scale.set(0.8, 1.1, 0.8); head.position.y = 7.0; body.add(head);
  const eye = new THREE.Mesh(GEO.sph, glowMat(0xffd0d8, 5)); eye.scale.setScalar(0.22); eye.position.set(0, 7.05, 0.62); body.add(eye);
  const legs = [-1, 1].map(s => { const l = new THREE.Mesh(GEO.oct, obs); l.scale.set(0.5, 1.9, 0.5); l.position.set(0.9 * s, 1.7, 0); l.rotation.z = 0.15 * s; body.add(l); return l; });
  const arms = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(2.1 * s, 5.6, 0); body.add(p); const a = new THREE.Mesh(GEO.oct, obs); a.scale.set(0.45, 2.4, 0.45); a.position.y = -2; p.add(a); const c = new THREE.Mesh(GEO.oct, crim); c.scale.set(0.2, 1.0, 0.2); c.position.y = -3.6; p.add(c); return p; });
  const orbit = new THREE.Group(); orbit.position.y = 4.4; body.add(orbit);
  for (let i = 0; i < 9; i++) { const s = new THREE.Mesh(GEO.oct, i % 3 ? obs : crim); s.scale.set(0.18, 0.5, 0.18); const a = i / 9 * Math.PI * 2; s.position.set(Math.cos(a) * 3.2, rand(-1.5, 1.5), Math.sin(a) * 3.2); orbit.add(s); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, body, arms, legs, orbit, core };
}

// =====================================================================
//  SAVANNAH BUILDERS (shared by menu + world)
// =====================================================================
const SUN_DIR = new V3(-0.55, 0.5, -0.67).normalize();      // world: golden afternoon sun, west-north-west
const MENU_SUN = new V3(-0.18, 0.07, -0.98).normalize();    // menu: sun on the horizon just right of the Governor, rim-lighting him
const grassTime = { value: 0 };

// pal: { zen, mid, hor, glow } as hex (sRGB), plus clouds/stars amounts and sun-disc brightness.
// Pass the scene's fog colour as `hor` so distant ground melts seamlessly into the sky.
function makeSky(sunDir, radius = 600, pal = {}) {
  const P = Object.assign({ zen: 0x5d86b8, mid: 0xc9b39a, hor: 0xd9a878, glow: 0xffc27a, clouds: 1, stars: 0, sunI: 1.35 }, pal);
  const col = h => new THREE.Color(h);
  return new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sun: { value: sunDir.clone() }, t: { value: 0 }, zen: { value: col(P.zen) }, mid: { value: col(P.mid) }, hor: { value: col(P.hor) }, glow: { value: col(P.glow) }, clouds: { value: P.clouds }, stars: { value: P.stars }, sunI: { value: P.sunI } },
    vertexShader: 'varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `varying vec3 vp; uniform vec3 sun, zen, mid, hor, glow; uniform float t, clouds, stars, sunI;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
        return mix(mix(h2(i), h2(i+vec2(1,0)), f.x), mix(h2(i+vec2(0,1)), h2(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec3 d = normalize(vp); float y = d.y;
        float s = max(dot(d, sun), 0.);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.22, y));
        c = mix(c, zen, smoothstep(0.18, 0.85, y));
        c += glow * pow(s, 6.) * 0.45 * (1. - smoothstep(0., 0.6, y));   // warm haze around the sun
        c += glow * pow(s, 64.) * 0.5;
        if (clouds > 0. && y > 0.) {                                     // soft cloud bank on a flat sky plane
          vec2 uv = d.xz / (y + 0.15) * 1.3 + vec2(t * 0.006, t * 0.002);
          float n = n2(uv) * 0.5 + n2(uv * 2.1 + 3.7) * 0.3 + n2(uv * 4.3 + 9.1) * 0.2;
          float cl = smoothstep(0.52, 0.82, n) * smoothstep(0.02, 0.16, y) * (1. - smoothstep(0.45, 0.85, y)) * clouds;
          vec3 cc = mix(mix(hor, vec3(1.), 0.45), glow * 1.15, pow(s, 3.) * 0.7);
          c = mix(c, cc, cl * 0.65);
        }
        c = mix(c, vec3(1.0, 0.94, 0.82) * sunI, smoothstep(0.99935, 0.9997, s));   // sun disc
        if (stars > 0.) { vec3 cell = floor(d * 280.); float h = fract(sin(dot(cell, vec3(12.9898,78.233,45.164))) * 43758.5453);
          c += vec3(step(0.9975, h) * (0.55 + 0.45 * sin(t * 2. + h * 80.)) * smoothstep(0.3, 0.7, y) * stars); }
        if (y < 0.) c = mix(hor, hor * 0.45, smoothstep(0., -0.25, y));
        gl_FragColor = vec4(c, 1.);
      }`
  }));
}

function grassTex(base, dark, light, rep) {
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.strokeStyle = Math.random() < 0.5 ? dark : light; g.globalAlpha = rand(0.2, 0.7); g.lineWidth = rand(0.5, 1.5); const x = Math.random() * w, y = Math.random() * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + rand(-3, 3), y - rand(3, 9)); g.stroke(); }
    g.globalAlpha = 1; speckle(g, w, h, 1500, ['rgba(80,55,30,0.5)', 'rgba(60,40,20,0.4)'], 4);
  }, rep);
}

// ---------------------------------------------------------------- batching
// Merge every static mesh in a scene into one mesh per material per map cell.
// Hundreds of draw calls become a few dozen, and cells keep frustum culling useful.
function toMergeable(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  g.morphAttributes = {};
  return g;
}
function sliceGeo(g, start, count) {
  const out = new THREE.BufferGeometry();
  for (const [k, a] of Object.entries(g.attributes)) out.setAttribute(k, new THREE.BufferAttribute(a.array.slice(start * a.itemSize, (start + count) * a.itemSize), a.itemSize));
  return out;
}
function mergeStatic(scene, cell = 250) {
  scene.updateMatrixWorld(true);
  const buckets = new Map(), done = [];
  scene.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || o.userData.premerged) return;
    for (let p = o; p; p = p.parent) if (p.userData.dynamic) return;
    const mats = [].concat(o.material);
    if (mats.some(m => m.transparent || m.isShaderMaterial || m.visible === false)) return;
    const g = toMergeable(o.geometry).applyMatrix4(o.matrixWorld);
    g.computeBoundingSphere(); const c = g.boundingSphere.center;
    const ck = Math.floor(c.x / cell) + ',' + Math.floor(c.z / cell);
    const parts = Array.isArray(o.material) ? g.groups.map(gr => [sliceGeo(g, gr.start, gr.count), o.material[gr.materialIndex]]) : [[g, o.material]];
    for (const [pg, m] of parts) {
      if (!m) continue; pg.clearGroups();
      const key = m.uuid + '|' + ck + '|' + o.castShadow + '|' + o.receiveShadow;
      if (!buckets.has(key)) buckets.set(key, { m, cs: o.castShadow, rs: o.receiveShadow, geos: [] });
      buckets.get(key).geos.push(pg);
    }
    done.push(o);
  });
  for (const o of done) o.removeFromParent();
  const list = [];
  for (const b of buckets.values()) {
    const mesh = new THREE.Mesh(mergeGeometries(b.geos), b.m); mesh.castShadow = b.cs; mesh.receiveShadow = b.rs; scene.add(mesh);
    mesh.geometry.computeBoundingSphere(); list.push(mesh);
  }
  return { meshes: done.length, batches: buckets.size, list };
}
// Distant characters. Up close each character is its animated rig; past LOD_NEAR it
// becomes one instance in a shared BatchedMesh (vertex-coloured body + glowing trim),
// so every far-off player, NPC and enemy together costs two draw calls.
const LOD_NEAR = 30;
const farChars = { body: null, glow: null, geo: new Map(), ids: new Map() };
function initFarChars(scene) {
  const body = new THREE.BatchedMesh(512, 420000, 0, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.55, roughness: 0.45 }));
  const glow = new THREE.BatchedMesh(384, 90000, 0, new THREE.MeshBasicMaterial({ vertexColors: true }));
  body.castShadow = true; body.receiveShadow = true; body.perObjectFrustumCulled = glow.perObjectFrustumCulled = true; body.frustumCulled = glow.frustumCulled = false; // instances move, so cull per character, not per batch
  scene.add(body, glow); Object.assign(farChars, { body, glow });
}
// Bake one character's rig (at rest pose, in its own local space) into body + glow geometry.
function bakeFarGeometry(ent) {
  if (ent.rig && ent.rig.farBake) { const fb = ent.rig.farBake(); if (fb.body) return fb; }
  const root = ent.group; root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert(), body = [], glow = [], sig = [];
  for (const part of root.children) if (part !== ent.hitbox) part.traverse(o => {
    if (!o.isMesh || !o.visible) return;
    const m = o.material; if (Array.isArray(m) || m.visible === false || m.transparent || m.wireframe) return;
    const g = toMergeable(o.geometry).applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld)); g.deleteAttribute('uv'); g.clearGroups();
    const isGlow = m.emissiveIntensity > 1 && m.emissive && m.emissive.getHex() !== 0;
    const c = isGlow ? m.emissive.clone().multiplyScalar(Math.min(m.emissiveIntensity, 3) * 0.7) : (m.userData.lodColor != null ? new THREE.Color(m.userData.lodColor) : (m.color || new THREE.Color(0x888888)).clone());
    const n = g.attributes.position.count, arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    let cs = 0; const pa = g.attributes.position.array; for (let i = 0; i < pa.length; i += 7) cs += pa[i];
    (isGlow ? glow : body).push(g); sig.push(m.uuid, pa.length, cs.toFixed(2));
  });
  return { key: sig.join(','), body: body.length ? mergeGeometries(body) : null, glow: glow.length ? mergeGeometries(glow) : null };
}
function bakeLOD(ent) {
  ent.lod = null;
  if (!farChars.body || !ent.rig || ent.isBoss || !ent.group) return;
  try {
    const baked = bakeFarGeometry(ent);
    // identical characters (e.g. every Hollowed) share one geometry; scale comes from the instance matrix
    let ids = farChars.geo.get(baked.key);
    if (!ids) { ids = { body: baked.body && farChars.body.addGeometry(baked.body), glow: baked.glow && farChars.glow.addGeometry(baked.glow) }; farChars.geo.set(baked.key, ids); }
    ent.lod = { body: ids.body != null ? farChars.body.addInstance(ids.body) : null, glow: ids.glow != null ? farChars.glow.addInstance(ids.glow) : null };
    ent.lodParts = ent.group.children.filter(c => c !== ent.hitbox); ent.lodNear = true;
    farChars.ids.set(ent, ent.lod);
    showFar(ent, false);
  } catch (err) { ent.lod = null; console.warn('far-LOD skipped for', ent.name, err.message); } // e.g. batch full: this character just stays a full rig
}
function showFar(ent, on) {
  if (ent.lod.body != null) farChars.body.setVisibleAt(ent.lod.body, on);
  if (ent.lod.glow != null) farChars.glow.setVisibleAt(ent.lod.glow, on);
}
const _lodM = new THREE.Matrix4();
function updateLOD() {
  if (!farChars.body) return;
  const cp = W.cam.position, n2 = LOD_NEAR * LOD_NEAR, seen = new Set();
  for (const list of [G.enemies, G.bots, G.npcs, G.animals]) for (const e of list) {
    if (e.lod === undefined) bakeLOD(e);
    if (!e.lod) continue;
    seen.add(e);
    const g = e.group, near = g.position.distanceToSquared(cp) < n2, shown = g.visible && g.parent !== null;
    if (near !== e.lodNear) { e.lodNear = near; for (const p of e.lodParts) p.visible = near; }
    const far = !near && shown;
    showFar(e, far);
    if (far) {
      _lodM.compose(g.position, g.quaternion, g.scale);
      if (e.lod.body != null) farChars.body.setMatrixAt(e.lod.body, _lodM);
      if (e.lod.glow != null) farChars.glow.setMatrixAt(e.lod.glow, _lodM);
    }
  }
  // characters that left the world (e.g. temporary spawns) give their slots back
  for (const [e, lod] of farChars.ids) if (!seen.has(e)) {
    if (lod.body != null) farChars.body.deleteInstance(lod.body);
    if (lod.glow != null) farChars.glow.deleteInstance(lod.glow);
    farChars.ids.delete(e);
  }
}
// Near rigs: inside each animated limb, merge the boxes that share a material.
// Same silhouette and animation, ~40% fewer draw calls per character.
function compactRig(root) {
  root.traverse(node => {
    if (node.isMesh) return;
    const byMat = new Map();
    for (const c of node.children) if (c.isMesh && !c.userData.keep && !Array.isArray(c.material) && c.children.length === 0) {
      if (!byMat.has(c.material)) byMat.set(c.material, []);
      byMat.get(c.material).push(c);
    }
    for (const [m, list] of byMat) {
      if (list.length < 2) continue;
      const geos = list.map(c => { c.updateMatrix(); const g = toMergeable(c.geometry).applyMatrix4(c.matrix); g.clearGroups(); return g; });
      const merged = new THREE.Mesh(mergeGeometries(geos), m); merged.castShadow = true; merged.receiveShadow = list[0].receiveShadow;
      for (const c of list) node.remove(c);
      node.add(merged);
    }
  });
}

// Instanced grass tufts with wind sway. sampler(x,z) → null | 'gold' | 'pale' | 'burnt'
function makeGrass(count, area, sampler, cx = 0, cz = 0, chunk = 0, gen = null) {   // gen(): an [x, z] to try, instead of anywhere in the square
  const pos = [], col = [];
  for (let b = 0; b < 5; b++) {
    const a = b / 5 * Math.PI * 2 + rand(-.3, .3), h = rand(0.45, 0.95), lean = rand(0.1, 0.3), w = 0.05;
    const dx = Math.cos(a), dz = Math.sin(a), px = -dz * w, pz = dx * w;
    pos.push(px, 0, pz, -px, 0, -pz, dx * lean, h, dz * lean);
    col.push(0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 1.15, 1.15, 1.15);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = grassTime;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.09;
      #else
        float ph = 0.0;
      #endif
      float sw = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.0) * 0.25) * 0.16 * position.y;
      transformed.x += sw; transformed.z += sw * 0.6;`);
  };
  const tint = { gold: new THREE.Color(0xd9b26a), pale: new THREE.Color(0xc9c09a), burnt: new THREE.Color(0x3a3430) };
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new V3(), p = new V3(), up = new V3(0, 1, 0);
  const cells = new Map(); let n = 0, tries = 0;
  while (n < count && tries < count * 6) {
    tries++;
    const [x, z] = gen ? gen() : [cx + rand(-area, area), cz + rand(-area, area)]; const kind = sampler(x, z); if (!kind) continue;
    q.setFromAxisAngle(up, rand(0, 6.28)); const s = rand(0.7, 1.5); sc.set(s, s * rand(0.8, 1.3), s); p.set(x, 0, z);
    const key = chunk ? Math.floor(x / chunk) + ',' + Math.floor(z / chunk) : '0';
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push([mtx.compose(p, q, sc).clone(), tint[kind].clone().offsetHSL(rand(-0.02, 0.02), rand(-0.08, 0.05), rand(-0.08, 0.08))]);
    n++;
  }
  // one InstancedMesh per chunk: off-screen chunks are frustum-culled, far ones hidden by updateGrass()
  const group = new THREE.Group(); group.userData.chunks = [];
  for (const list of cells.values()) {
    const im = new THREE.InstancedMesh(geo, m, list.length);
    list.forEach(([mt, c], i) => { im.setMatrixAt(i, mt); im.setColorAt(i, c); });
    im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.computeBoundingSphere(); im.receiveShadow = true; im.frustumCulled = !!chunk;
    group.add(im); group.userData.chunks.push(im);
  }
  return group;
}
function updateGrass(group, cam, far = 190) {
  const f2 = far * far;
  for (const im of group.userData.chunks) { const c = im.boundingSphere.center; im.visible = (c.x - cam.position.x) ** 2 + (c.z - cam.position.z) ** 2 < f2; }
}

// Acacia trees (instanced). list: [{x,z,s,dead}]
function makeAcacias(list) {
  const g = new THREE.Group();
  const trunkGeo = new THREE.CylinderGeometry(0.1, 0.22, 1, 6); trunkGeo.translate(0, 0.5, 0);
  const canopyGeo = new THREE.IcosahedronGeometry(1, 1);
  const trunk = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), list.length * 3);
  const canopy = new THREE.InstancedMesh(canopyGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, flatShading: true }), list.length * 3);
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  let ti = 0, ci = 0;
  const live = new THREE.Color(0x3b2a1d), dead = new THREE.Color(0x1d1916);
  for (const t of list) {
    const h = rand(3.2, 5) * t.s, lean = rand(-0.12, 0.12);
    e.set(lean, rand(0, 6), rand(-0.12, 0.12)); q.setFromEuler(e);
    mtx.compose(new V3(t.x, 0, t.z), q, new V3(t.s, h, t.s)); trunk.setMatrixAt(ti, mtx); trunk.setColorAt(ti++, t.dead ? dead : live);
    for (const side of [-1, 1]) { // forked branches
      e.set(0.0, 0, side * rand(0.5, 0.8)); q.setFromEuler(e);
      mtx.compose(new V3(t.x, h * 0.7, t.z), q, new V3(t.s * 0.6, h * 0.45, t.s * 0.6)); trunk.setMatrixAt(ti, mtx); trunk.setColorAt(ti++, t.dead ? dead : live);
    }
    if (!t.dead) for (let k = 0; k < 3; k++) {
      const r = rand(2.2, 3.4) * t.s; q.identity();
      mtx.compose(new V3(t.x + rand(-1.4, 1.4) * t.s, h + rand(-0.2, 0.5), t.z + rand(-1.4, 1.4) * t.s), q, new V3(r, r * 0.22, r * rand(0.8, 1.1)));
      canopy.setMatrixAt(ci, mtx); canopy.setColorAt(ci++, new THREE.Color(0x56602c).offsetHSL(rand(-.03, .03), 0, rand(-.06, .04)));
    }
  }
  trunk.count = ti; canopy.count = ci;
  for (const m of [trunk, canopy]) { m.castShadow = true; m.receiveShadow = true; m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; g.add(m); }
  return g;
}
function makeBaobab(s = 1) {
  const g = new THREE.Group(); const bark = mat('bark', () => new THREE.MeshStandardMaterial({ color: 0x7d6650, roughness: 0.95, flatShading: true }));
  const h = rand(6, 8) * s; const t = new THREE.Mesh(new THREE.CylinderGeometry(1.1 * s, 1.7 * s, h, 9), bark); t.position.y = h / 2; g.add(t);
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const br = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.3 * s, 2.4 * s, 5), bark); br.position.set(Math.cos(a) * 0.9 * s, h + 0.7 * s, Math.sin(a) * 0.9 * s); br.rotation.set(Math.sin(a) * 0.7, 0, -Math.cos(a) * 0.7); g.add(br);
    const lf = new THREE.Mesh(GEO.ico, mat('baoLeaf', () => new THREE.MeshStandardMaterial({ color: 0x5d6a30, flatShading: true, roughness: 0.9 }))); lf.scale.set(1.0 * s, 0.5 * s, 1.0 * s); lf.position.set(Math.cos(a) * 1.8 * s, h + 1.8 * s, Math.sin(a) * 1.8 * s); g.add(lf); }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}
// Sandstone / whitewash / terracotta / glass facades: colour map + matching emissive window map
// One texture tile = 16 x 48 world units (see scaleUV): 4 window bays across, 12 floors up.
function makeFacade(style) {
  const P = {
    sand: { base: '#c9a679', band: '#b38f63', win: '#3a2c20', lit: ['#ffcf8a', '#ffdca8'], litP: 0.08, arch: true },
    white: { base: '#e2d9c6', band: '#cbbfa6', win: '#3b3631', lit: ['#ffd9a0'], litP: 0.06, arch: true },
    terra: { base: '#b56a43', band: '#9a5634', win: '#2c1a12', lit: ['#ffc070', '#ffe0b0'], litP: 0.08, arch: false },
    coral: { base: '#d6cbb2', band: '#bfb294', win: '#4a3020', lit: ['#ffcf8a'], litP: 0.06, arch: true },
    glass: { base: '#2a3d52', band: '#1b2734', win: '#34506a', lit: ['#bfe6ff', '#7fdfff'], litP: 0.14, glass: true },
  }[style];
  const COLS = 4, ROWS = 12, lit = [];
  for (let i = 0; i < COLS * ROWS; i++) lit.push(Math.random() < P.litP ? pick(P.lit) : null);
  const draw = emissive => (g, w, h) => {
    const cw = w / COLS, rh = h / ROWS;
    g.fillStyle = emissive ? '#000' : P.base; g.fillRect(0, 0, w, h);
    if (!emissive) {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(255,255,255,0.05)'); gr.addColorStop(1, 'rgba(40,20,0,0.12)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      speckle(g, w, h, 2500, ['rgba(0,0,0,0.05)', 'rgba(255,255,255,0.05)'], 2);
      g.fillStyle = P.band; for (let r = 0; r < ROWS; r++) g.fillRect(0, r * rh, w, P.glass ? 5 : 4);            // floor bands
      if (P.glass) { g.fillStyle = 'rgba(0,0,0,0.35)'; for (let c = 0; c <= COLS * 2; c++) g.fillRect(c * cw / 2 - 1.5, 0, 3, h); } // mullions
    }
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const L = lit[r * COLS + c]; if (emissive && !L) continue;
      const x = c * cw, y = r * rh;
      if (P.glass) {
        if (emissive) { g.fillStyle = L; g.globalAlpha = 0.8; g.fillRect(x + 4, y + 8, cw - 8, rh - 12); g.globalAlpha = 1; }
        else { const gg = g.createLinearGradient(x, y, x + cw, y + rh); gg.addColorStop(0, L ? '#6f97b8' : '#41627f'); gg.addColorStop(1, P.win); g.fillStyle = gg; g.fillRect(x + 4, y + 8, cw - 8, rh - 12); }
        continue;
      }
      const ww = cw * 0.36, wh = rh * 0.56, wx = x + (cw - ww) / 2, wy = y + rh * 0.26;
      if (!emissive) { g.fillStyle = 'rgba(60,35,15,0.25)'; g.fillRect(wx - 3, wy - 3, ww + 6, wh + 7); }       // recess
      g.fillStyle = emissive ? L : (L ? '#80603e' : P.win);
      g.beginPath();
      if (P.arch) { g.moveTo(wx, wy + wh); g.lineTo(wx, wy + ww / 2); g.arc(wx + ww / 2, wy + ww / 2, ww / 2, Math.PI, 0); g.lineTo(wx + ww, wy + wh); g.closePath(); }
      else g.rect(wx, wy, ww, wh);
      g.fill();
      if (!emissive) { g.fillStyle = 'rgba(255,245,225,0.22)'; g.fillRect(wx - 4, wy + wh, ww + 8, 3); }        // sill
    }
  };
  const map = canvasTex(256, 512, draw(false)), emi = canvasTex(256, 512, draw(true));
  return new THREE.MeshStandardMaterial({ map, emissive: 0xffffff, emissiveMap: emi, emissiveIntensity: 0.6, roughness: P.glass ? 0.22 : 0.88, metalness: P.glass ? 0.6 : 0.02 });
}
function scaleUV(geo, w, h, d) {
  const uv = geo.attributes.uv; const faceW = [d, d, w, w, w, w];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const i = f * 4 + k; uv.setXY(i, uv.getX(i) * faceW[f] / 16, uv.getY(i) * (f === 2 || f === 3 ? d / 16 : h / 48)); }
}
function makeMountains(S) {
  const haze = new THREE.MeshBasicMaterial({ color: 0x8c6f86, fog: false });
  const snow = new THREE.MeshBasicMaterial({ color: 0xf2dcd0, fog: false });
  const far = S === W.scene ? 4 : 1;   // the world is bigger than the menu: push the horizon out to match
  const k = new THREE.Mesh(new THREE.ConeGeometry(230 * far, 150 * far, 28, 1), haze); k.position.set(330 * far, 70 * far, -440 * far); S.add(k);   // the great mountain
  const cap = new THREE.Mesh(new THREE.ConeGeometry(62 * far, 42 * far, 28, 1), snow); cap.position.set(330 * far, 124 * far, -440 * far); S.add(cap);
  const mesaM = new THREE.MeshBasicMaterial({ color: 0x9a6f6a, fog: false });
  // mesas round the horizon (in the world, not out to sea in the south)
  for (let i = 0; i < 9; i++) { const a = rand(0, Math.PI * 2), r = rand(470, 540) * far; if (Math.abs(a - Math.atan2(-440, 330)) < 0.4 || (S === W.scene && Math.sin(a) > 0.25)) continue; const m = new THREE.Mesh(new THREE.CylinderGeometry(rand(30, 70) * far, rand(50, 90) * far, rand(25, 55) * far, 7), mesaM); m.position.set(Math.cos(a) * r, 10 * far, Math.sin(a) * r); S.add(m); }
}

// =====================================================================
//  MAIN MENU SCENE — dusk on the savannah
// =====================================================================
const menu = { scene: new THREE.Scene(), cam: new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 1200), mascar: null, yaw: 0, yawVel: 0, drag: false, mx: 0, my: 0 };
function buildMenu() {
  const S = menu.scene;
  // dusk: dark land and trees in silhouette against a bright horizon
  S.fog = new THREE.FogExp2(0x4a2e26, 0.0105);
  const sky = makeSky(MENU_SUN, 900, { zen: 0x141a38, mid: 0x6e3f4a, hor: 0xf08a48, glow: 0xff9548, clouds: 0.55, stars: 0.7, sunI: 1.25 });
  S.add(sky); menu.sky = sky;
  S.environment = envFromSky(sky); S.environmentIntensity = 0.7;
  S.userData.post = { strength: 0.5, radius: 0.45, threshold: 0.92, exposure: 1.0 };
  makeMountains(S);
  S.add(new THREE.HemisphereLight(0xffb27a, 0x22160f, 0.5));
  const key = new THREE.SpotLight(0xffe2c4, 130, 0, 0.42, 0.7, 2); key.position.set(3.5, 7.5, 5.5); key.target.position.set(0, 1, 0);
  key.castShadow = true; key.shadow.mapSize.set(Q.shadowMap / 2, Q.shadowMap / 2); key.shadow.bias = -0.0002; key.shadow.normalBias = 0.02;
  S.add(key, key.target);
  const rim = new THREE.SpotLight(0xff8a3a, 260, 0, 0.55, 0.8, 2); rim.position.set(2.2, 3.2, -6); rim.target.position.set(0, 1.2, 0); S.add(rim, rim.target);
  const rim2 = new THREE.SpotLight(0x3ee6ff, 70, 0, 0.5, 0.8, 2); rim2.position.set(-4, 3, -4); rim2.target.position.set(0, 1.4, 0); S.add(rim2, rim2.target);
  const fill = new THREE.PointLight(0x3ee6ff, 2.5, 10, 2); fill.position.set(-1.5, 1.2, 2.5); S.add(fill);

  // savannah floor + grass
  const floor = new THREE.Mesh(new THREE.CircleGeometry(400, 64), new THREE.MeshStandardMaterial({ map: grassTex('#7a5a34', '#4e3820', '#a8844e', 60), roughness: 1 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; S.add(floor);
  S.add(makeGrass(Q.menuGrass, 60, (x, z) => { const r = Math.hypot(x, z); return r > 3.2 && r < 60 && z < 8 ? 'gold' : null; }));

  // pedestal
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.45, 0.38, 48), new THREE.MeshStandardMaterial({ color: 0x2a2622, metalness: 0.85, roughness: 0.3 }));
  ped.position.y = 0.19; ped.receiveShadow = true; ped.castShadow = true; S.add(ped);
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.018, 8, 96), glowMat(0x3ee6ff, 1.6)); ring1.rotation.x = Math.PI / 2; ring1.position.y = 0.39; S.add(ring1);
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.24, 96), new THREE.MeshBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: 0.28 })); ring2.rotation.x = -Math.PI / 2; ring2.position.y = 0.02; S.add(ring2);

  // holographic sigil behind the Governor
  const sig = new THREE.Group(); sig.position.set(0, 2.1, -2.6); S.add(sig);
  const lm = new THREE.LineBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: 0.35 });
  const circle = (r, n = 96) => { const p = []; for (let i = 0; i <= n; i++) { const a = i / n * Math.PI * 2; p.push(new V3(Math.cos(a) * r, Math.sin(a) * r, 0)); } return new THREE.Line(new THREE.BufferGeometry().setFromPoints(p), lm); };
  sig.add(circle(1.9), circle(1.75), circle(1.1, 6));
  const tri = circle(1.75, 3); tri.rotation.z = Math.PI / 2; sig.add(tri);
  const tri2 = circle(1.75, 3); tri2.rotation.z = -Math.PI / 2; sig.add(tri2);
  menu.sigil = sig;

  // acacias and baobabs across the plain
  const trees = [];
  for (let i = 0; i < 46; i++) { const a = rand(-Math.PI, 0), r = rand(16, 140); trees.push({ x: Math.cos(a) * r, z: Math.sin(a) * r - 4, s: rand(0.9, 1.6) }); }
  S.add(makeAcacias(trees));
  for (const [x, z, s] of [[-22, -34, 1.3], [26, -58, 1.6], [-60, -90, 1.8]]) { const b = makeBaobab(s); b.position.set(x, 0, z); S.add(b); }

  // the city of Ad-Nostra on the horizon (right) — sandstone towers and glass spires
  const FWD = new V3(-0.39, 0, -0.92), RGT = new V3(0.92, 0, -0.39);
  const onView = (deg, dist) => FWD.clone().multiplyScalar(Math.cos(deg * Math.PI / 180) * dist).addScaledVector(RGT, Math.sin(deg * Math.PI / 180) * dist);
  const fac = [makeFacade('sand'), makeFacade('white'), makeFacade('glass')];
  const domeMM = new THREE.MeshStandardMaterial({ color: 0xe6dccb, roughness: 0.6 }), roofMM = new THREE.MeshStandardMaterial({ color: 0x9a7e5e, roughness: 0.9 });
  for (let i = 0; i < 40; i++) {
    const at = onView(rand(19, 36), rand(170, 240)), w = rand(6, 13), d = rand(6, 13), h = rand(12, 55) * (i % 6 === 0 ? 1.7 : 1);
    const fm = h > 60 ? fac[2] : pick([fac[0], fac[0], fac[1]]);
    const geo = new THREE.BoxGeometry(w, h, d); scaleUV(geo, w, h, d); const b = new THREE.Mesh(geo, [fm, fm, roofMM, roofMM, fm, fm]); b.position.set(at.x, h / 2, at.z); S.add(b);
    if (fm !== fac[2] && i % 3 === 0) { const dm = new THREE.Mesh(new THREE.SphereGeometry(Math.min(w, d) * 0.45, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMM); dm.position.set(at.x, h, at.z); S.add(dm); }
  }
  // the crashed Catharsis beacon-ship (left horizon)
  const mono = new THREE.Group(); const mAt = onView(-17, 135); mono.position.set(mAt.x, 0, mAt.z); S.add(mono);
  const crim = glowMat(0xff2b4a, 1.6);
  const stump = new THREE.Mesh(GEO.oct, crim); stump.scale.set(3, 14, 3); stump.position.y = 5; stump.rotation.z = 0.35; mono.add(stump);
  menu.frags = [];
  for (let i = 0; i < 7; i++) { const f = new THREE.Mesh(GEO.oct, crim); f.scale.set(rand(.6, 1.4), rand(2, 4), rand(.6, 1.4)); f.position.set(rand(-8, 8), rand(14, 26), rand(-3, 3)); f.rotation.set(rand(0, 3), rand(0, 3), rand(0, 3)); f.userData.s = rand(0.1, 0.4); f.userData.dynamic = true; mono.add(f); menu.frags.push(f); }

  // dust motes in the low sun
  const N = 700, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = rand(-14, 14); pos[i * 3 + 1] = rand(0, 10); pos[i * 3 + 2] = rand(-12, 6); const c = Math.random() < 0.8 ? [1, 0.75, 0.4] : [0.25, 0.9, 1]; col.set(c, i * 3); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  menu.embers = new THREE.Points(pg, new THREE.PointsMaterial({ map: dotTex(), size: 0.07, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
  S.add(menu.embers);

  // THE GOVERNOR
  menu.mascar = mascarInstance(2.05);
  menu.mascar.position.y = 0.38; menu.mascar.userData.dynamic = true; S.add(menu.mascar);
  // a slow procession along the clear stretch of horizon left of the Governor, walking toward the sunset;
  // each animal loops back to the left edge while hidden behind him, so the line never empties
  menu.onView = onView; menu.herd = [];
  for (const [kind, deg, dist] of [['elephant', -4, 62], ['elephant', -8, 66], ['giraffe', -13, 70], ['giraffe', -17, 74], ['giraffe', -22, 68]]) {
    const rig = kind === 'giraffe' ? makeGiraffe() : makeElephant();
    rig.group.userData.dynamic = true; S.add(rig.group);
    menu.herd.push({ rig, deg, dist, phase: rand(0, 6), speed: kind === 'giraffe' ? 1.5 : 1.2 });
  }
  menu.birds = makeBirdFlock(birdRing(4, onView(-6, 120).x, onView(-6, 120).z, 14, 26, 26, 34, 6, 1.6)); S.add(menu.birds);
  mergeStatic(S, 400);
  menu.cam.position.set(1.9, 1.95, 7.3);   // pulled back so the Governor's scythe fits in frame
}
function updateMenu(dt) {
  const t = G.time;
  grassTime.value = t; menu.sky.material.uniforms.t.value = t;
  for (const h of menu.herd) {
    h.deg += h.speed * dt / h.dist * 180 / Math.PI; if (h.deg > 8) h.deg -= 38;
    const p = menu.onView(h.deg, h.dist), q = menu.onView(h.deg + 1, h.dist), g = h.rig.group;
    g.position.set(p.x, 0, p.z); g.rotation.y = Math.atan2(q.x - p.x, q.z - p.z);
    h.phase += dt * h.speed / h.rig.legLen * 2.4;
    h.rig.legs.forEach((l, i) => { l.rotation.x = Math.sin(h.phase + [0, Math.PI, Math.PI, 0][i]) * 0.34; });
    h.rig.tail.rotation.z = Math.sin(t * 2 + h.dist) * 0.3;
  }
  updateBirds(menu.birds, t);
  if (!menu.drag) { menu.yawVel *= 0.94; menu.yaw += menu.yawVel; menu.yaw *= 0.985; }
  if (menu.mascar) { menu.mascar.rotation.y = menu.yaw + Math.sin(t * 0.25) * 0.18; menu.mascar.children[0].scale.y = menu.mascar.children[0].scale.x * (1 + Math.sin(t * 1.6) * 0.003); }
  menu.sigil.rotation.z = t * 0.05; menu.sigil.children[3].rotation.z = Math.PI / 2 - t * 0.12; menu.sigil.children[4].rotation.z = -Math.PI / 2 + t * 0.09;
  for (const f of menu.frags) { f.rotation.y += f.userData.s * dt; f.position.y += Math.sin(t + f.userData.s * 10) * 0.004; }
  const p = menu.embers.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) { let y = p.getY(i) + dt * (0.08 + (i % 7) * 0.02); if (y > 10) y = 0; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * 0.4 + i) * 0.003 + dt * 0.05); if (p.getX(i) > 14) p.setX(i, -14); }
  p.needsUpdate = true;
  // portrait screens: pull back and centre him in the upper half, above the menu buttons
  const portrait = menu.cam.aspect < 1;
  const tx = (portrait ? 0.5 : 1.9) + menu.mx * 0.35, ty = (portrait ? 1.6 : 1.95) - menu.my * 0.2, tz = portrait ? 6.4 + 4.5 / menu.cam.aspect : 7.3;
  menu.cam.position.x += (tx - menu.cam.position.x) * 0.04; menu.cam.position.y += (ty - menu.cam.position.y) * 0.04; menu.cam.position.z += (tz - menu.cam.position.z) * 0.08;
  menu.cam.lookAt(portrait ? 0 : -0.85, portrait ? 0.35 : 1.45, 0);
}


// =====================================================================
//  WORLD
// =====================================================================
const W = { scene: new THREE.Scene(), cam: new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 3600) };
// Every zone has a power level (0–9). Enemies there share it; fight above your own and they will take you apart.
const ZONES = {
  plaza: { name: 'AD NOSTRA: FRONTIER', sub: 'THE EDGE OF THE WILDS', pl: 0 },   // the old plaza, where Ascendants set out from
  concordia: { name: 'CONCORDIA PLAZA', sub: 'SANCTUARY · SEAT OF THE GOVERNOR', safe: true, pl: 0 },
  causeway: { name: 'CONCORD CAUSEWAY', sub: 'AD-NOSTRA', safe: true, pl: 0 },
  ward: { name: 'THE SPIRE WARDS', sub: 'AD-NOSTRA', safe: true, pl: 0 },
  // Power levels run outward from Concordia Plaza: the Dry Reservoir beside it is the gentlest, the Veld the deadliest.
  ashen: { name: 'SCORCHED VELD', sub: 'DEADLY', pl: 6 },
  echo: { name: 'ECHO PLAINS', sub: 'DEADLY', pl: 5 },
  crater: { name: 'THE CATHARSIS CRATER', sub: 'HOSTILE', pl: 4 },
  cantina: { name: 'THE SALT LANTERN', sub: 'CANTINA · SANCTUARY', safe: true, pl: 0 },
  rail: { name: 'THE SUNKEN RAIL YARDS', sub: 'OUTER WARDS · HOSTILE', pl: 3 },
  tenements: { name: 'THE ASHFALL TENEMENTS', sub: 'OUTER WARDS · CONTESTED', pl: 2 },
  reservoir: { name: 'THE DRY RESERVOIR', sub: 'BESIDE CONCORDIA · CONTESTED', pl: 1 },
  market: { name: 'THE LANTERN MARKET', sub: 'BAZAAR · SANCTUARY', safe: true, pl: 0 },
  harbour: { name: 'THE HARBOUR', sub: 'PORT OF AD-NOSTRA', safe: true, pl: 0 },
  ring: { name: 'THE RAMPART RING', sub: 'WHERE THE OLD WALL STOOD', safe: true, pl: 0 },
  northgate: { name: 'NORTHGATE', sub: 'THE GLASS WARD · AD-NOSTRA', safe: true, pl: 0 },
  sunrise: { name: 'SUNRISE WARD', sub: 'THE NEW CITY · AD-NOSTRA', safe: true, pl: 0 },
  kopje: { name: 'KOPJE HEIGHTS', sub: 'THE NEW CITY · AD-NOSTRA', safe: true, pl: 0 },
  dhow: { name: 'THE DHOW QUARTER', sub: 'OLD TOWN BY THE SEA · AD-NOSTRA', safe: true, pl: 0 },
};
// The whole city is a sanctuary; only the old districts and the Frontier beside them are not.
const QUIET_ZONES = new Set(['causeway', 'ward', 'ring']);   // walking between these doesn't throw up a banner
// The city runs out to a rampart at WORLD_R metres, four times the area inside the old wall. The old wall stood at
// OLD_R and is now the Rampart Ring, a palm boulevard. The sea closes the city to the south, where the Harbour is cut
// into the shore. (Before this the rampart stood at OLD_R; before that, at 246.)
const WORLD_R = 940, OLD_R = 470;
const RAIL = { x0: 236, x1: 420, z0: -78, z1: 78 }, TENE = { x0: -420, x1: -236, z0: -78, z1: 78 };
const RESV = new V3(0, 0, 335), RESV_R = 92;
const SOUTH_LANE = { x0: 12, x1: 30, z0: 26, z1: 92 };   // around the Salt Lantern, to the south avenue
const inRect = (R, x, z, m = 0) => x > R.x0 - m && x < R.x1 + m && z > R.z0 - m && z < R.z1 + m;
// The Salt Lantern, just south of Concordia Plaza. Interior footprint; the door faces the plaza (north, -z).
const CANTINA = { x0: -11, x1: 11, z0: 46, z1: 70, h: 6.2 };
const inCantina = (x, z) => x > CANTINA.x0 + 0.3 && x < CANTINA.x1 - 0.3 && z > CANTINA.z0 + 0.3 && z < CANTINA.z1 - 0.3;
const inCantinaLot = (x, z) => Math.abs(x) < 17 && z > 28 && z < 78;
const MARKET = { x0: -58, x1: 58, z0: 78, z1: 150 };          // the Lantern Market, behind the Salt Lantern
const CRATER = new V3(0, 0, -165);
// Concordia Plaza, the Governor's seat, at the head of the harbour where the Talina crosses. The old plaza in the middle of
// the city is now Ad Nostra: Frontier, where Ascendants gather before heading out into the old districts.
const CONC = new V3(0, 0, 524);
// the shore: open water south of COAST_Z, and the harbour basin cut into the land, with a mole either side of its mouth
const COAST_Z = 760;
const BASIN = { x0: -190, x1: 190, z0: 560, z1: COAST_Z };
const MOLES = [{ x0: -204, x1: -190, z0: COAST_Z, z1: 880 }, { x0: 190, x1: 204, z0: COAST_Z, z1: 880 }];
const HARBOUR = { x0: -246, x1: 246, z0: 520, z1: 900 };      // the port district: quays, terminals and moles
const isWaterPt = (x, z) => (z > COAST_Z || inRect(BASIN, x, z)) && !MOLES.some(M => inRect(M, x, z));
function zoneAt(x, z) {
  if (inCantina(x, z)) return 'cantina';
  const r = Math.hypot(x, z);
  if (r < 34) return 'plaza';
  if (inRect(MARKET, x, z)) return 'market';
  if (Math.hypot(x - CRATER.x, z - CRATER.z) < 72) return 'crater';
  if (x > 34 && x < 156 && Math.abs(z) < 62) return 'ashen';
  if (x < -34 && x > -156 && Math.abs(z) < 62) return 'echo';
  if (inRect(RAIL, x, z)) return 'rail';
  if (inRect(TENE, x, z)) return 'tenements';
  if (Math.hypot(x - RESV.x, z - RESV.z) < RESV_R) return 'reservoir';
  if (Math.hypot(x - CONC.x, z - CONC.z) < 34) return 'concordia';
  if (inRect(HARBOUR, x, z)) return 'harbour';
  if (r < OLD_R - 10) return (Math.abs(z) < 12 || (Math.abs(x) < 12 && z < 0)) ? 'causeway' : 'ward';
  if (r < OLD_R + 10) return 'ring';
  const a = Math.atan2(x, -z);   // 0 = north, +π/2 = east
  return Math.abs(a) < Math.PI / 4 ? 'northgate' : Math.abs(a) > Math.PI * 0.75 ? 'dhow' : a > 0 ? 'sunrise' : 'kopje';
}
function addCollider(x, z, w, d, h = 60) { G.colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h }); }

function buildWorld() {
  const S = W.scene;
  S.fog = new THREE.Fog(0xd8ae82, 80, 380);
  S.userData.post = { strength: 0.45, radius: 0.5, threshold: 0.95, exposure: 0.9 };
  S.add(new THREE.HemisphereLight(0xffe0b8, 0x5a3e28, 0.6));
  const sun = new THREE.DirectionalLight(0xffd6a0, 2.4);
  sun.castShadow = true; sun.shadow.mapSize.set(Q.shadowMap, Q.shadowMap);
  Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 300 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  S.add(sun, sun.target); W.sun = sun;

  // sky dome + the great mountain and mesas on the horizon
  const sky = makeSky(SUN_DIR, 3000, { zen: 0x4a78b4, mid: 0xb9b4a8, hor: 0xd8ae82, glow: 0xffc27a, clouds: 1 }); S.add(sky); W.sky = sky;
  S.environment = envFromSky(sky); S.environmentIntensity = 0.55;
  makeMountains(S);

  // ground
  // ground: the land, out past the rampart, with the harbour basin cut out of it and the sea to the south (see buildHarbour)
  const gt = grassTex('#9a7440', '#6e5028', '#c9a160', 1); gt.repeat.set(1 / 6.6, 1 / 6.6);
  const land = new THREE.Shape([[-2600, -2600], [2600, -2600], [2600, COAST_Z], [BASIN.x1, COAST_Z], [BASIN.x1, BASIN.z0], [BASIN.x0, BASIN.z0], [BASIN.x0, COAST_Z], [-2600, COAST_Z]].map(([x, z]) => new THREE.Vector2(x, -z)));
  const ground = new THREE.Mesh(new THREE.ShapeGeometry(land), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; S.add(ground);

  const overlay = (geo, tex, x, z, y = 0.02, extra = {}) => {
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial(Object.assign({ map: tex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1 - y * 10 }, extra)));
    m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; S.add(m); return m;
  };

  // the blinking red lights on the tallest towers (the towers themselves are built by buildCity)
  const blink = glowMat(0xff3355, 3); W.blink = blink;
  // the rampart round the city, open to the sea in the south, with a bastion where it meets the shore
  const ra = Math.acos((COAST_Z - 2) / (WORLD_R + 6));   // half the angle the sea takes out of it (three.js measures round from +z)
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(WORLD_R + 6, WORLD_R + 6, 40, 256, 1, true, ra, Math.PI * 2 - ra * 2), new THREE.MeshStandardMaterial({ color: 0xb48c62, roughness: 0.95, side: THREE.BackSide }));
  wall.position.y = 20; S.add(wall);
  const stripGeo = new THREE.TorusGeometry(WORLD_R + 5, 0.3, 6, 384, Math.PI * 2 - ra * 2); stripGeo.rotateZ(Math.PI / 2 + ra);
  const wallStrip = new THREE.Mesh(stripGeo, glowMat(0xe8c46a, 1.6)); wallStrip.rotation.x = Math.PI / 2; wallStrip.position.y = 39; S.add(wallStrip);
  const bastM = new THREE.MeshStandardMaterial({ color: 0xa8825a, roughness: 0.95, flatShading: true });
  for (const sx of [-1, 1]) {
    const x = sx * Math.sqrt((WORLD_R + 6) ** 2 - (COAST_Z - 6) ** 2), z = COAST_Z - 6;
    const b = new THREE.Mesh(new THREE.CylinderGeometry(13, 15, 46, 8), bastM); b.position.set(x, 21, z); b.castShadow = true; b.receiveShadow = true; S.add(b);
    const cap = new THREE.Mesh(new THREE.TorusGeometry(13.2, 0.35, 6, 32), glowMat(0xe8c46a, 1.6)); cap.rotation.x = Math.PI / 2; cap.position.set(x, 44, z); S.add(cap);
    addCollider(x, z, 26, 26, 46);
  }

  // ---------- CONCORDIA PLAZA, on the waterfront at the head of the harbour
  const PX = CONC.x, PZ = CONC.z;
  const words = ['AD-NOSTRA', 'REBUILD · RENEW · REMEMBER', 'CONCORD', 'ANNO DOMINI 2137', 'THE SKY IS OURS', 'ENLIST · ASCEND'];
  words.forEach((wd, i) => {   // hologram billboards round the plaza
    const tex = canvasTex(1024, 192, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.strokeStyle = i % 2 ? '#e8c46a' : '#3ee6ff'; g.lineWidth = 4; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = i % 2 ? '#e8c46a' : '#3ee6ff'; g.font = 'bold 84px Bahnschrift, Segoe UI, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(wd, w / 2, h / 2 + 4);
    });
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    const a = i / words.length * Math.PI * 2 + 0.5;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 4.9), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.85, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.set(PX + Math.cos(a) * 46, rand(20, 30), PZ + Math.sin(a) * 46); m.lookAt(PX, m.position.y, PZ); S.add(m);
  });
  const plazaTex = canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#b4936c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 8000, ['#c0a07a', '#a6845e', '#c9ab86']);
    g.strokeStyle = 'rgba(90,60,30,0.35)'; g.lineWidth = 3;
    for (let r = 64; r < 512; r += 64) { g.beginPath(); g.arc(512, 512, r, 0, Math.PI * 2); g.stroke(); }
    for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2; g.beginPath(); g.moveTo(512 + Math.cos(a) * 64, 512 + Math.sin(a) * 64); g.lineTo(512 + Math.cos(a) * 512, 512 + Math.sin(a) * 512); g.stroke(); }
  });
  const lampM = armorMat(0x2a313b);
  const plazaFloor = (cx, cz, ringCol, rings) => {   // paving, glowing rings and a circle of lamps
    overlay(new THREE.CircleGeometry(34, 96), plazaTex, cx, cz, 0.03, { roughness: 0.85 });
    for (const [r, o] of rings) { const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.15, r, 128), new THREE.MeshBasicMaterial({ color: ringCol, transparent: true, opacity: o })); ring.rotation.x = -Math.PI / 2; ring.position.set(cx, 0.05, cz); S.add(ring); }
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2 + Math.PI / 12; const x = cx + Math.cos(a) * 31, z = cz + Math.sin(a) * 31;
      bx(0.25, 5, 0.25, lampM, x, 2.5, z, S); bx(0.9, 0.12, 0.9, glowMat(0x9fe9ff, 3), x, 5.05, z, S); addCollider(x, z, 0.5, 0.5);
    }
  };
  plazaFloor(PX, PZ, 0x3ee6ff, [[33.6, 0.9], [30, 0.5], [16, 0.6]]);
  // the Governor's dais + the Statue of the Unmaking
  const daisM = new THREE.MeshStandardMaterial({ color: 0x8a7258, metalness: 0.2, roughness: 0.6 });
  for (const [r, h] of [[5.5, 0.4], [4.3, 0.8], [3.2, 1.2]]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.2, h, 48), daisM); c.position.set(PX, h / 2, PZ - 12); c.receiveShadow = true; c.castShadow = true; S.add(c); }
  const dr = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.03, 6, 96), glowMat(0x3ee6ff, 4)); dr.rotation.x = Math.PI / 2; dr.position.set(PX, 1.21, PZ - 12); S.add(dr);
  bx(9, 4, 9, daisM, PX, 2, PZ - 27, S); addCollider(PX, PZ - 27, 9, 9);
  const plaque = canvasTex(512, 128, (g, w, h) => { g.fillStyle = '#c9a85a'; g.font = 'bold 40px Bahnschrift, sans-serif'; g.textAlign = 'center'; g.fillText('CARAX · SAGITTARIUS A*', w / 2, 52); g.font = '28px Bahnschrift, sans-serif'; g.fillText('MMCXXVII', w / 2, 98); });
  plaque.wrapS = plaque.wrapT = THREE.ClampToEdgeWrapping;
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), new THREE.MeshStandardMaterial({ map: plaque, transparent: true, emissive: 0xc9a85a, emissiveMap: plaque, emissiveIntensity: 0.5 })); pl.position.set(PX, 2.2, PZ - 22.48); S.add(pl);
  const statue = mascarInstance(15, new THREE.MeshStandardMaterial({ color: 0x8c939c, roughness: 0.75, metalness: 0.15 }));
  statue.position.set(PX, 4, PZ - 27); S.add(statue);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(7, 0.12, 8, 128), glowMat(0x3ee6ff, 3)); halo.position.set(PX, 15, PZ - 29); halo.userData.dynamic = true; S.add(halo); W.halo = halo;

  // ---------- AD NOSTRA: FRONTIER, the old plaza: where Ascendants gather before heading out into the old districts
  plazaFloor(0, 0, 0xe8c46a, [[33.6, 0.8], [30, 0.4]]);
  const frontier = textTex(1024, 256, '#0b1118', [{ t: 'AD NOSTRA', y: 86, c: '#e8c46a', f: 'bold 96px Georgia, serif' }, { t: 'F R O N T I E R', y: 186, c: '#3ee6ff', f: 'bold 70px Bahnschrift, sans-serif' }]);
  bx(0.6, 9, 0.6, lampM, 0, 4.5, -16, S); addCollider(0, -16, 0.9, 0.9, 9);
  bx(9.4, 2.6, 0.5, lampM, 0, 9.4, -16, S);
  for (const sd of [-1, 1]) { const fs = new THREE.Mesh(new THREE.PlaneGeometry(9, 2.25), new THREE.MeshStandardMaterial({ map: frontier, emissive: 0xffffff, emissiveMap: frontier, emissiveIntensity: 0.7 })); fs.position.set(0, 9.4, -16 + sd * 0.27); fs.rotation.y = sd > 0 ? 0 : Math.PI; S.add(fs); }

  // ---------- SCORCHED VELD
  const ashTex = canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#4a3a2c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 9000, ['#3a2e24', '#2a221c', '#5c4834', '#6e5028'], 3); cracks(g, w, h, 18, 'rgba(0,0,0,0.6)', 2); cracks(g, w, h, 4, 'rgba(255,90,40,0.25)', 1.5); }, 8);
  overlay(new THREE.PlaneGeometry(124, 126), ashTex, 95, 0, 0.02);
  const ruinM = new THREE.MeshStandardMaterial({ color: 0x8a6e52, roughness: 0.95 });
  const burnt = new THREE.MeshStandardMaterial({ color: 0x2e2620, roughness: 1 });
  for (let i = 0; i < 46; i++) {
    const x = rand(42, 150), z = rand(-58, 58); if (Math.abs(z) < 9) continue;
    const rot = Math.random() < 0.5; const w = rand(3, 11), h = rand(0.8, 5.5), d = rand(0.6, 1.2);
    const m = bx(rot ? d : w, h, rot ? w : d, Math.random() < 0.5 ? ruinM : burnt, x, h / 2, z, S); addCollider(x, z, rot ? d : w, rot ? w : d, h);
    if (Math.random() < 0.4) for (let k = 0; k < 4; k++) { const rb = bx(rand(.4, 1.4), rand(.3, .9), rand(.4, 1.4), ruinM, x + rand(-3, 3), 0.25, z + rand(-3, 3), S); rb.rotation.set(rand(0, 1), rand(0, 3), rand(0, 1)); }
  }
  W.fires = [];
  const fireM = new THREE.MeshStandardMaterial({ color: 0xff7a2a, emissive: 0xff5a1a, emissiveIntensity: 3, transparent: true, opacity: 0.9 });
  for (let i = 0; i < 12; i++) {
    const x = rand(45, 148), z = rand(-55, 55); if (Math.abs(z) < 9) continue;
    const b = new THREE.Mesh(GEO.cyl, armorMat(0x3a2a22)); b.scale.set(0.45, 1, 0.45); b.position.set(x, 0.5, z); b.castShadow = true; S.add(b); addCollider(x, z, 0.9, 0.9, 1.2);
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.2, 8), fireM); f.position.set(x, 1.5, z); f.userData.dynamic = true; S.add(f); W.fires.push(f);
  }


  // scorched acacias across the veld
  const veldTrees = [];
  for (let i = 0; i < 22; i++) { const x = rand(44, 150), z = rand(-58, 58); if (Math.abs(z) < 12) continue; veldTrees.push({ x, z, s: rand(0.8, 1.3), dead: Math.random() < 0.7 }); addCollider(x, z, 0.7, 0.7, 4); }
  S.add(makeAcacias(veldTrees));

  // ---------- ECHO PLAINS
  const echoTex = canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#b7a77c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 6000, ['#c9bb92', '#a39268', '#d4c8a2'], 2); g.strokeStyle = 'rgba(255,43,74,0.12)'; g.lineWidth = 2; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); } cracks(g, w, h, 10, 'rgba(60,40,20,0.35)'); }, 6);
  overlay(new THREE.PlaneGeometry(124, 126), echoTex, -95, 0, 0.02);
  W.pylons = [];
  for (let i = 0; i < 9; i++) {
    const x = rand(-148, -48), z = rand(-55, 55); if (Math.abs(z) < 10) continue;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.7, 16, 8), armorMat(0x3a3430)); p.position.set(x, 8, z); p.castShadow = true; S.add(p); addCollider(x, z, 1.4, 1.4);
    const r = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 6, 32), glowMat(0xff2b4a, 3)); r.position.set(x, 12, z); r.rotation.x = Math.PI / 2; S.add(r);
    const top = new THREE.Mesh(GEO.oct, glowMat(0xff2b4a, 4)); top.scale.setScalar(0.5); top.position.set(x, 16.6, z); S.add(top);
    r.userData.dynamic = top.userData.dynamic = true; W.pylons.push({ r, top, ph: rand(0, 6) });
  }
  const echoTrees = [];
  for (let i = 0; i < 18; i++) { const x = rand(-150, -44), z = rand(-58, 58); if (Math.abs(z) < 12) continue; echoTrees.push({ x, z, s: rand(0.9, 1.5) }); addCollider(x, z, 0.7, 0.7, 4); }
  S.add(makeAcacias(echoTrees));
  for (const [x, z, s] of [[-70, -40, 1.1], [-132, 34, 1.3], [-110, -50, 0.9]]) { const b = makeBaobab(s); b.position.set(x, 0, z); S.add(b); addCollider(x, z, 3.2 * s, 3.2 * s, 8); }

  // ---------- THE CRATER
  const craterTex = canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#5a2e22'; g.fillRect(0, 0, w, h); speckle(g, w, h, 12000, ['#6a3828', '#44221a', '#7a4430', '#2a1610'], 3);
    g.shadowColor = '#ff2b4a'; g.shadowBlur = 8; cracks(g, w, h, 26, 'rgba(255,43,74,0.55)', 2.5); g.shadowBlur = 0; cracks(g, w, h, 30, 'rgba(0,0,0,0.6)', 2);
  });
  overlay(new THREE.CircleGeometry(72, 96), craterTex, CRATER.x, CRATER.z, 0.025, { emissive: 0xffffff, emissiveMap: craterTex, emissiveIntensity: 0.15 });
  const rockM = new THREE.MeshStandardMaterial({ color: 0x7a4a34, roughness: 0.9, flatShading: true });
  for (let a = 0; a < Math.PI * 2; a += 0.085) {
    if (Math.abs(a - Math.PI / 2) < 0.2) continue;
    const r = rand(64, 74), rr = rand(3.5, 7), h = rand(6, 16);
    const x = CRATER.x + Math.cos(a) * r, z = CRATER.z + Math.sin(a) * r;
    const c = new THREE.Mesh(GEO.rock, rockM); c.scale.set(rr * 1.25, h * 0.32, rr); c.position.set(x, h * 0.1, z); c.rotation.set(rand(-.15, .15), rand(0, 3), rand(-.15, .15)); c.castShadow = true; c.receiveShadow = true; S.add(c);
    addCollider(x, z, rr * 1.3, rr * 1.3, h * 0.6);
  }
  for (let i = 0; i < 26; i++) { const a = rand(0, Math.PI * 2), r = rand(18, 58); const x = CRATER.x + Math.cos(a) * r, z = CRATER.z + Math.sin(a) * r; if (z > CRATER.z + 40 && Math.abs(x) < 10) continue; const rr = rand(1, 2.5); const c = new THREE.Mesh(GEO.rock, rockM); c.scale.set(rr * 1.2, rr * rand(0.5, 0.8), rr); c.position.set(x, rr * 0.2, z); c.rotation.set(rand(-.4, .4), rand(0, 3), rand(-.4, .4)); c.castShadow = true; S.add(c); addCollider(x, z, rr * 1.2, rr * 1.2, 3); }
  // the crashed Catharsis beacon-ship
  const mono = new THREE.Group(); mono.position.set(CRATER.x, 0, CRATER.z - 12); S.add(mono);
  const crim = new THREE.MeshStandardMaterial({ color: 0x2a0309, emissive: 0xff1a3c, emissiveIntensity: 1.8, roughness: 0.2, metalness: 0.3, flatShading: true });
  const stump = new THREE.Mesh(GEO.oct, crim); stump.scale.set(5, 14, 5); stump.position.y = 4; stump.rotation.z = 0.15; mono.add(stump); stump.castShadow = true;
  addCollider(mono.position.x, mono.position.z, 8, 8);
  // the hull, nose-down in the earth behind the beacon
  const hullM = new THREE.MeshStandardMaterial({ color: 0x1a1416, metalness: 0.7, roughness: 0.45, flatShading: true });
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 5.5, 36, 8), hullM); hull.position.set(7, 4, -24); hull.rotation.set(1.32, 0.25, 0); hull.castShadow = true; hull.receiveShadow = true; mono.add(hull);
  for (let i = 0; i < 4; i++) { const seam = new THREE.Mesh(new THREE.TorusGeometry(3 + i * 0.7, 0.12, 6, 8), crim); seam.position.set(0, -12 + i * 7, 0); seam.rotation.x = Math.PI / 2; hull.add(seam); }
  for (const s of [-1, 1]) { const fin = bx(9, 0.5, 5, hullM, 0, 6, 0); fin.position.set(s * 6, 6, 0); fin.rotation.z = s * 0.4; hull.add(fin); }
  for (let k = 0; k < 4; k++) addCollider(mono.position.x + 7 + (k - 1.5) * 2.2, mono.position.z - 10 - k * 8, 10, 9, 8);
  W.frags = [];
  for (let i = 0; i < 9; i++) { const f = new THREE.Mesh(GEO.oct, crim); f.scale.set(rand(1, 2.5), rand(3, 7), rand(1, 2.5)); const a = i / 9 * Math.PI * 2; f.userData = { a, r: rand(9, 15), y: rand(16, 30), s: rand(0.05, 0.15), dynamic: true }; mono.add(f); W.frags.push(f); }

  // dust motes and seed fluff that follow the player
  const N = 1400, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = rand(-60, 60); pos[i * 3 + 1] = rand(0, 30); pos[i * 3 + 2] = rand(-60, 60); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  W.ash = new THREE.Points(pg, new THREE.PointsMaterial({ map: dotTex(), size: 0.16, color: 0xffe0a8, transparent: true, opacity: 0.55, depthWrite: false }));
  S.add(W.ash);

  // shared fx resources
  W.shieldMesh = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 16), new THREE.MeshBasicMaterial({ color: 0x9fe9ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
  W.shieldMesh.visible = false; S.add(W.shieldMesh);
  W.targetRing = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 48), new THREE.MeshBasicMaterial({ color: 0xff2b4a, transparent: true, opacity: 0.9, depthWrite: false }));
  W.targetRing.rotation.x = -Math.PI / 2; W.targetRing.visible = false; S.add(W.targetRing);

  buildCantina(S);
  buildDistricts(S);
  buildTrams(S);
  buildCity(S);
  buildHomestead(S);
  buildPeople(S); buildTraffic(S);
  // grass: burnt on the veld, pale on the Echo Plains, gold in the parks, none on the streets or in the crater
  const grassAt = (x, z) => {
    if (Math.hypot(x, z) > WORLD_R - 4 || inCantinaLot(x, z) || isWaterPt(x, z)) return null;
    const zn = zoneAt(x, z);
    if (zn === 'rail') return Math.abs(z) > 8 && Math.random() < 0.25 ? 'burnt' : null;
    if (zn === 'tenements') return Math.abs(z) > 8 && Math.random() < 0.5 ? 'burnt' : null;
    if (zn === 'reservoir') return Math.hypot(x - RESV.x, z - RESV.z) > 80 && Math.random() < 0.4 ? 'pale' : null;
    if (zn === 'crater') return Math.hypot(x - CRATER.x, z - CRATER.z) > 62 && Math.random() < 0.3 ? 'burnt' : null;
    if (zn === 'ashen') return Math.abs(z) < 8 ? null : Math.random() < 0.6 ? 'burnt' : 'gold';
    if (zn === 'echo') return Math.abs(z) < 8 ? null : 'pale';
    return null;
  };
  W.grass = makeGrass(Q.worldGrass * 2, 430, grassAt, 0, 0, 64);
  if (W.parks.length) {   // the city's parks: grass between the paths
    const inPark = (x, z) => W.parks.some(R => inRect(R, x, z, -1) && Math.abs(x - (R.x0 + R.x1) / 2) > 2.4 && Math.abs(z - (R.z0 + R.z1) / 2) > 2.4);
    const parks = makeGrass(Math.round(Q.worldGrass * 0.08 * W.parks.length), WORLD_R, (x, z) => inPark(x, z) ? 'gold' : null, 0, 0, 64, () => { const R = pick(W.parks); return [rand(R.x0, R.x1), rand(R.z0, R.z1)]; });
    for (const im of parks.userData.chunks) { W.grass.add(im); W.grass.userData.chunks.push(im); }
  }
  S.add(W.grass);
  // vultures over the crater; small flocks over the plains
  W.birds = makeBirdFlock([...birdRing(7, CRATER.x, CRATER.z, 22, 46, 30, 46, 7, 1.6), ...birdRing(10, -95, 8, 12, 24, 14, 20, 10, 0.45), ...birdRing(8, 95, -10, 12, 22, 14, 20, 10, 0.45),
    ...birdRing(6, RESV.x, RESV.z, 30, 60, 34, 50, 6, 1.6), ...birdRing(5, -330, 0, 20, 50, 30, 44, 6, 1.4)]);
  S.add(W.birds);
  W.gulls = makeBirdFlock([...birdRing(14, 0, 640, 30, 110, 12, 30, 9, 0.55), ...birdRing(8, -380, 770, 20, 60, 10, 24, 9, 0.5), ...birdRing(8, 380, 770, 20, 60, 10, 24, 9, 0.5)], 0xf2efe6);
  S.add(W.gulls);
  W.batch = mergeStatic(S, CITY_CELL);
  W.batch.list.push(...W.city);   // the street grid was batched as it was built
  initFarChars(S);
  buildColliderGrid(); buildDistrictPoints();
  spawnNPCs(); spawnZuri(); spawnEnemies(); spawnShards(); spawnBots(); spawnOrion(); spawnMalia(); spawnAnimals(); spawnNodes();
  buildColliderGrid();   // again, with the NPCs' counters
  G.world = true;
}

// =====================================================================
//  THE OUTER WARDS — districts beyond the old city, each with its own power level
// =====================================================================
function buildDistricts(S) {
  const groundOv = (geo, tex, x, z, extra = {}) => {
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial(Object.assign({ map: tex, roughness: 0.97, polygonOffset: true, polygonOffsetFactor: -1.2 }, extra)));
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.022, z); m.receiveShadow = true; S.add(m); return m;
  };
  const rust = (c) => mat('rust' + c, () => new THREE.MeshStandardMaterial({ color: c, metalness: 0.45, roughness: 0.8 }));
  const crimGlow = glowMat(0xff2b4a, 3);

  // ---------- THE SUNKEN RAIL YARDS (east, power level 4): the old freight terminus, rusting into the grass
  const rx = (RAIL.x0 + RAIL.x1) / 2, rw = RAIL.x1 - RAIL.x0, rd = RAIL.z1 - RAIL.z0;
  groundOv(new THREE.PlaneGeometry(rw, rd), canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#6a5440'; g.fillRect(0, 0, w, h); speckle(g, w, h, 9000, ['#5a4634', '#7a6048', '#4a3a2a', '#8a6a4a'], 3); cracks(g, w, h, 8, 'rgba(0,0,0,0.35)', 1.5); }, 6), rx, 0);
  const sleeperTex = canvasTex(256, 64, (g, w, h) => { g.fillStyle = '#5a4634'; g.fillRect(0, 0, w, h); g.fillStyle = '#3a2c20'; for (let i = 0; i < 8; i++) g.fillRect(i * 32 + 4, 4, 14, 56); });
  sleeperTex.repeat.set(rw / 8, 1);
  const railM = mat('railSteel', () => new THREE.MeshStandardMaterial({ color: 0x8a8278, metalness: 0.85, roughness: 0.35 }));
  const tracks = [-62, -44, -26, 26, 44, 62];
  for (const tz of tracks) {
    groundOv(new THREE.PlaneGeometry(rw, 3), sleeperTex, rx, tz);
    for (const o of [-0.72, 0.72]) bx(rw, 0.14, 0.12, railM, rx, 0.07, tz + o, S).castShadow = false;
  }
  const carCols = [0x7a3a22, 0x3a5a5a, 0x8a6a2a, 0x4a3a52, 0x6a2a2a];
  for (let i = 0; i < 18; i++) {   // freight cars, some still on the rails, some on their side
    const tz = pick(tracks), len = rand(10, 14), x = rand(RAIL.x0 + 12, RAIL.x1 - 12), tipped = Math.random() < 0.3;
    const car = bx(len, 3.2, 3, rust(pick(carCols)), x, tipped ? 1.5 : 2.1, tz + (tipped ? rand(-3, 3) : 0), S);
    if (tipped) car.rotation.x = Math.PI / 2 * (Math.random() < 0.5 ? 1 : -1) * 0.92;
    bx(len * 0.98, 0.15, 3.1, rust(0x2a2622), x, (tipped ? 1.5 : 2.1) + 1.65, tz, S).visible = !tipped;
    addCollider(x, tz, len, tipped ? 3.6 : 3.2, 3.6);
  }
  for (const gx of [rx - 50, rx + 45]) {   // gantry cranes straddling the tracks
    const gm = rust(0xb07a2a);
    for (const gz of [-70, 70]) { bx(1.4, 22, 1.4, gm, gx, 11, gz, S); bx(1.4, 22, 1.4, gm, gx + 8, 11, gz, S); addCollider(gx + 4, gz, 10, 2); }
    bx(10, 2, 146, gm, gx + 4, 22.5, 0, S); bx(6, 3, 6, rust(0x3a3a3a), gx + 4, 20, rand(-40, 40), S);
  }
  for (let i = 0; i < 10; i++) {   // signal posts, still blinking crimson for trains that will never come
    const x = rand(RAIL.x0 + 8, RAIL.x1 - 8), z = pick(tracks) + 2.6;
    bx(0.25, 5, 0.25, rust(0x2a2a2a), x, 2.5, z, S); const l = new THREE.Mesh(GEO.sph, crimGlow); l.scale.setScalar(0.3); l.position.set(x, 5, z); S.add(l); addCollider(x, z, 0.5, 0.5, 5);
  }
  const shed = bx(46, 12, 1, rust(0x5a4a3a), rx + 20, 6, RAIL.z0 + 3, S); addCollider(rx + 20, RAIL.z0 + 3, 46, 1.2, 12);   // the old engine shed's back wall
  shed.castShadow = true;

  // ---------- THE ASHFALL TENEMENTS (west, power level 5): burnt-out housing blocks you can walk through
  const tx = (TENE.x0 + TENE.x1) / 2;
  groundOv(new THREE.PlaneGeometry(TENE.x1 - TENE.x0, TENE.z1 - TENE.z0), canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#3a322c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 10000, ['#2a2420', '#4a3e34', '#1e1a18', '#5a4a3a'], 3); cracks(g, w, h, 16, 'rgba(0,0,0,0.55)', 2); cracks(g, w, h, 5, 'rgba(255,110,40,0.22)', 1.5); }, 6), tx, 0);
  const shellM = mat('tenement', () => new THREE.MeshStandardMaterial({ color: 0x6a5a4c, roughness: 0.95 }));
  const sootM = mat('soot', () => new THREE.MeshStandardMaterial({ color: 0x2a2420, roughness: 1 }));
  const fireM = new THREE.MeshStandardMaterial({ color: 0xff7a2a, emissive: 0xff5a1a, emissiveIntensity: 3, transparent: true, opacity: 0.9 });
  for (let gx = TENE.x0 + 16; gx < TENE.x1 - 10; gx += 30) for (let gz = TENE.z0 + 14; gz < TENE.z1 - 8; gz += 28) {
    if (Math.abs(gz) < 18 || Math.random() < 0.2) continue;
    const w = rand(12, 18), d = rand(10, 16), h = rand(4, 13), x = gx + rand(-3, 3), z = gz + rand(-3, 3), t = 0.7, m = Math.random() < 0.5 ? shellM : sootM;
    const door = randi(0, 3);   // one wall has a gap you can walk through
    const walls = [[w, t, x, z - d / 2], [w, t, x, z + d / 2], [t, d, x - w / 2, z], [t, d, x + w / 2, z]];
    walls.forEach(([ww, dd, cx, cz], k) => {
      const hh = h * rand(0.55, 1);
      if (k === door) {   // two stubs either side of the gap
        const horiz = ww > dd, L = horiz ? ww : dd, seg = (L - 4) / 2;
        for (const sgn of [-1, 1]) { const ox = horiz ? sgn * (seg / 2 + 2) : 0, oz = horiz ? 0 : sgn * (seg / 2 + 2); bx(horiz ? seg : t, hh, horiz ? t : seg, m, cx + ox, hh / 2, cz + oz, S); addCollider(cx + ox, cz + oz, horiz ? seg : t, horiz ? t : seg, hh); }
      } else { bx(ww, hh, dd, m, cx, hh / 2, cz, S); addCollider(cx, cz, ww, dd, hh); }
    });
    if (Math.random() < 0.5) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.8, 8), fireM); f.position.set(x + rand(-3, 3), 0.9, z + rand(-3, 3)); f.userData.dynamic = true; S.add(f); W.fires.push(f); }
    for (let k = 0; k < 3; k++) { const rb = bx(rand(.6, 2), rand(.4, 1.2), rand(.6, 2), sootM, x + rand(-w / 2, w / 2), 0.3, z + rand(-d / 2, d / 2), S); rb.rotation.set(rand(0, 1), rand(0, 3), rand(0, 1)); }
  }

  // ---------- THE DRY RESERVOIR (south, power level 6): the city's drained water basin, where the Catharsis has taken root
  groundOv(new THREE.CircleGeometry(RESV_R, 96), canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#8a7a62'; g.fillRect(0, 0, w, h); speckle(g, w, h, 12000, ['#7a6a52', '#9a8a70', '#6a5a44'], 3);
    g.strokeStyle = 'rgba(40,28,18,0.6)'; g.lineWidth = 2; for (let i = 0; i < 260; i++) { const x = rand(0, w), y = rand(0, h); g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 4; k++) g.lineTo(x + rand(-40, 40), y + rand(-40, 40)); g.stroke(); }   // mud cracks
    g.shadowColor = '#ff2b4a'; g.shadowBlur = 8; cracks(g, w, h, 12, 'rgba(255,43,74,0.45)', 2); g.shadowBlur = 0;
  }), RESV.x, RESV.z);
  const concreteM = mat('concrete', () => new THREE.MeshStandardMaterial({ color: 0xa8a090, roughness: 0.9 }));
  for (let a = 0; a < Math.PI * 2; a += 0.085) {   // the crumbling retaining wall, open to the north where the avenue comes in
    if (Math.abs(a - Math.PI * 1.5) < 0.16 || Math.abs(a - Math.PI / 2) < 0.16 || Math.random() < 0.15) continue;
    const x = RESV.x + Math.cos(a) * (RESV_R - 2), z = RESV.z + Math.sin(a) * (RESV_R - 2), h = rand(1.6, 3.4);
    const seg = bx(7.6, h, 1.2, concreteM, x, h / 2, z, S); seg.rotation.y = -a + Math.PI / 2; addCollider(x, z, 4.6, 4.6, h);
  }
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(6, 7, 28, 24), concreteM); tower.position.set(RESV.x, 14, RESV.z + 8); tower.castShadow = true; S.add(tower); addCollider(RESV.x, RESV.z + 8, 13, 13);
  const tRing = new THREE.Mesh(new THREE.TorusGeometry(7.4, 0.25, 8, 48), crimGlow); tRing.rotation.x = Math.PI / 2; tRing.position.set(RESV.x, 22, RESV.z + 8); S.add(tRing);
  const pipeM = rust(0x5a5248);
  for (const [px, pz, len, along] of [[-40, 300, 50, 'x'], [38, 356, 46, 'x'], [-30, 372, 34, 'z'], [44, 300, 30, 'z']]) {   // great outfall pipes
    const p = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, len, 16), pipeM); p.position.set(px, 1.8, pz); p.rotation.set(along === 'z' ? Math.PI / 2 : 0, 0, along === 'x' ? Math.PI / 2 : 0); p.castShadow = true; S.add(p);
    addCollider(px, pz, along === 'x' ? len : 3.6, along === 'x' ? 3.6 : len, 3.6);
  }
  for (let i = 0; i < 14; i++) {   // crimson growths: the Catharsis, spreading through the dry silt
    const a = rand(0, Math.PI * 2), r = rand(14, 78), x = RESV.x + Math.cos(a) * r, z = RESV.z + Math.sin(a) * r;
    if ((z < RESV.z - 60 || z > RESV.z + 60) && Math.abs(x) < 14) continue;
    const c = new THREE.Mesh(GEO.oct, crimGlow); const sz = rand(0.6, 1.6); c.scale.set(sz, sz * rand(2, 4), sz); c.position.set(x, sz * 1.5, z); c.rotation.z = rand(-0.4, 0.4); S.add(c); addCollider(x, z, sz * 1.6, sz * 1.6, sz * 4);
  }
}

// Concord tram stops: fast travel between the districts. A stop works once you have walked past it.
const TRAMS = [
  { id: 'concordia', name: 'Concordia Plaza', pos: new V3(CONC.x - 21, 0, CONC.z + 14) },
  { id: 'plaza', name: 'Ad Nostra: Frontier', pos: new V3(-21, 0, 14) },
  { id: 'ashen', name: 'Scorched Veld', pos: new V3(46, 0, 16) },
  { id: 'echo', name: 'Echo Plains', pos: new V3(-46, 0, 16) },
  { id: 'crater', name: 'Crater Rim', pos: new V3(16, 0, -86) },
  { id: 'rail', name: 'Sunken Rail Yards', pos: new V3(242, 0, 17) },
  { id: 'tenements', name: 'Ashfall Tenements', pos: new V3(-242, 0, 17) },
  { id: 'reservoir', name: 'Dry Reservoir', pos: new V3(16, 0, 236) },
  { id: 'harbour_w', name: 'Harbour West Pier', pos: new V3(-226, 0, 594) },
  { id: 'harbour_e', name: 'Harbour East Pier', pos: new V3(226, 0, 594) },
  { id: 'northgate', name: 'Northgate', pos: new V3(16, 0, -688) },
  { id: 'sunrise', name: 'Sunrise Ward', pos: new V3(688, 0, 16) },
  { id: 'kopje', name: 'Kopje Heights', pos: new V3(-688, 0, 16) },
  { id: 'homestead', name: 'Homestead', pos: new V3(309, 0, 692) },
];
function buildTrams(S) {
  const postM = armorMat(0x2a313b), ringM = glowMat(0x3ee6ff, 3), padM = mat('tramPad', () => new THREE.MeshStandardMaterial({ color: 0x3a4250, metalness: 0.6, roughness: 0.4 }));
  for (const t of TRAMS) {
    const { x, z } = t.pos;
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 0.25, 24), padM); pad.position.set(x, 0.12, z); pad.receiveShadow = true; S.add(pad);
    bx(0.4, 4.6, 0.4, postM, x, 2.3, z - 2, S); bx(2.6, 0.8, 0.15, postM, x, 4.4, z - 2, S);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.07, 6, 48), ringM); ring.rotation.x = Math.PI / 2; ring.position.set(x, 0.27, z); S.add(ring);
    const sign = canvasTex(256, 80, (g, w, h) => { g.fillStyle = '#0b1118'; g.fillRect(0, 0, w, h); g.fillStyle = '#3ee6ff'; g.font = 'bold 34px Bahnschrift, sans-serif'; g.textAlign = 'center'; g.fillText('⇄ TRAM', w / 2, 52); });
    sign.wrapS = sign.wrapT = THREE.ClampToEdgeWrapping;
    for (const sd of [-1, 1]) { const pl = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.72), new THREE.MeshStandardMaterial({ map: sign, emissive: 0xffffff, emissiveMap: sign, emissiveIntensity: 0.8 })); pl.position.set(x, 4.4, z - 2 + sd * 0.09); if (sd < 0) pl.rotation.y = Math.PI; S.add(pl); }
    addCollider(x, z - 2, 0.6, 0.6, 5);
    G.props.push({ kind: 'tram', id: 'tram', tram: t, name: t.name + ' Tram Stop', pos: t.pos });
  }
}
// Static batches far out in the fog cost GPU time for nothing: hide them.
function cullStatic() {
  if (!W.batch || !W.batch.list) return;
  const cp = W.cam.position;
  for (const m of W.batch.list) { const b = m.geometry.boundingSphere, d = Math.hypot(b.center.x - cp.x, b.center.z - cp.z) - b.radius; m.visible = d < 365; }   // the fog is all but opaque by then
}
// Colliders in a coarse grid, so a big city doesn't mean checking every wall for every character every frame.
const COL_CELL = 24;
function buildColliderGrid() {
  const grid = new Map();
  for (const c of G.colliders) {
    for (let gx = Math.floor(c.minX / COL_CELL); gx <= Math.floor(c.maxX / COL_CELL); gx++)
      for (let gz = Math.floor(c.minZ / COL_CELL); gz <= Math.floor(c.maxZ / COL_CELL); gz++) {
        const k = gx * 10007 + gz; let l = grid.get(k); if (!l) grid.set(k, l = []); l.push(c);
      }
  }
  G.colGrid = grid;
}

// =====================================================================
//  THE CITY: a street grid, written straight into batches
// =====================================================================
// Ad-Nostra is laid out on a grid: a street every 64 m and an avenue every 256 m, with the old districts,
// the Lantern Market and the Harbour cut out of it. Everything here is static, so instead of thousands of
// meshes it is written straight into one buffer per material per map cell. The generator is seeded, so the
// city is the same city every time you log in.
function mulberry32(a) { return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
let _srng = mulberry32(2137);
const sr = (a, b) => a + _srng() * (b - a), sri = (a, b) => Math.floor(sr(a, b + 1)), spick = a => a[Math.floor(_srng() * a.length)], sch = p => _srng() < p;

// ---------------------------------------------------------------- the batcher
class Grow {   // a typed array that grows as it is written to
  constructor(T, n = 1 << 12) { this.T = T; this.a = new T(n); this.l = 0; }
  room(k) { if (this.l + k > this.a.length) { let n = this.a.length * 2; while (n < this.l + k) n *= 2; const b = new this.T(n); b.set(this.a.subarray(0, this.l)); this.a = b; } return this.a; }
}
const TPL = {
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl6: new THREE.CylinderGeometry(1, 1, 1, 6, 1, true), cyl8: new THREE.CylinderGeometry(1, 1, 1, 8), cyl16: new THREE.CylinderGeometry(1, 1, 1, 16),
  cone6: new THREE.ConeGeometry(1, 1, 6), cone8: new THREE.ConeGeometry(1, 1, 8), dome: new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
  sph: new THREE.SphereGeometry(1, 8, 6), oct: new THREE.OctahedronGeometry(1, 0), torus: new THREE.TorusGeometry(1, 0.32, 6, 12),
};
const _gm = new THREE.Matrix4(), _gq = new THREE.Quaternion(), _ge = new THREE.Euler(), _gp = new V3(), _gs = new V3();
// a transform for B.geo(): position, scale, then rotation (Euler, in the given order)
function at(x, y, z, sx = 1, sy = sx, sz = sx, ry = 0, rx = 0, rz = 0, order = 'XYZ') { _ge.set(rx, ry, rz, order); _gq.setFromEuler(_ge); return _gm.compose(_gp.set(x, y, z), _gq, _gs.set(sx, sy, sz)); }
const CITY_CELL = 300;
function makeBatcher(cell = CITY_CELL) {
  const buckets = new Map(), C = new THREE.Color(), M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), ONE = new V3(1, 1, 1), T = new V3(), N3 = new THREE.Matrix3(), vp = new V3(), vn = new V3();
  const get = (m, x, z, cs) => {
    cs = cs && m !== CM.glow && m !== CM.water;
    const key = m.id + ':' + Math.floor(x / cell) + ':' + Math.floor(z / cell) + (cs ? 's' : '');
    let b = buckets.get(key);
    if (!b) buckets.set(key, b = { m, cs, v: 0, p: new Grow(Float32Array), n: new Grow(Float32Array), u: m.map || m.normalMap ? new Grow(Float32Array) : null, c: m.vertexColors ? new Grow(Float32Array) : null, i: new Grow(Uint32Array) });
    return b;
  };
  const vert = (b, x, y, z, nx, ny, nz, u, v) => {
    let a = b.p.room(3); a[b.p.l++] = x; a[b.p.l++] = y; a[b.p.l++] = z;
    a = b.n.room(3); a[b.n.l++] = nx; a[b.n.l++] = ny; a[b.n.l++] = nz;
    if (b.u) { a = b.u.room(2); a[b.u.l++] = u; a[b.u.l++] = v; }
    if (b.c) { a = b.c.room(3); a[b.c.l++] = C.r; a[b.c.l++] = C.g; a[b.c.l++] = C.b; }
    return b.v++;
  };
  const tri = (b, i0, i1, i2) => { const a = b.i.room(3); a[b.i.l++] = i0; a[b.i.l++] = i1; a[b.i.l++] = i2; };
  const setCol = (c, k) => { if (c == null) C.setRGB(1, 1, 1); else if (typeof c === 'number') C.setHex(c); else C.copy(c); if (k) C.multiplyScalar(k); };
  const B = {
    // A box centred on (x, y, z). Side faces use o.uv: 'unit' | 'facade' (16 x 48 m tiles, rows follow world height) |
    // { rep: metres per tile, v0, v1 } (repeat along the face, one atlas row) | { uv: [u0, v0, u1, v1] }.
    // Top faces use o.top (a material, or null for none) and o.topUV ('world' by default). Bottoms are skipped.
    // Colours (o.col, times o.glow) go to vertex-coloured materials. Everything but glow and water casts shadows.
    box(m, w, h, d, x, y, z, o = {}) {
      E.set(o.rx || 0, o.ry || 0, o.rz || 0, o.order || 'XYZ'); Q.setFromEuler(E); M4.compose(T.set(x, y, z), Q, ONE);
      const P = TPL.box.attributes.position.array, Nn = TPL.box.attributes.normal.array, U = TPL.box.attributes.uv.array;
      const fw = [d, d, w, w, w, w];
      for (let f = 0; f < 6; f++) {
        if (f === 3 && !o.bottom) continue;
        const top = f === 2 || f === 3, fm = top ? (o.top === undefined ? m : o.top) : m; if (!fm) continue;
        const b = get(fm, x, z, true);
        setCol(top && o.topCol != null ? o.topCol : o.col, o.glow);
        const mode = top ? (o.topUV || 'world') : (o.uv || 'unit'), base = b.v;
        for (let k = 0; k < 4; k++) {
          const i = f * 4 + k;
          vp.set(P[i * 3] * w, P[i * 3 + 1] * h, P[i * 3 + 2] * d).applyMatrix4(M4);
          vn.set(Nn[i * 3], Nn[i * 3 + 1], Nn[i * 3 + 2]).applyQuaternion(Q);
          let u = U[i * 2], v = U[i * 2 + 1];
          if (mode === 'facade') { u = u * fw[f] / 16 + (o.u0 || 0); v = vp.y / 48; }
          else if (mode === 'world') { const t = o.tile || 4; u = vp.x / t; v = vp.z / t; }
          else if (mode.rep) { u = u * fw[f] / mode.rep + (o.u0 || 0); v = mode.v0 + (mode.v1 - mode.v0) * v; }
          else if (mode.uv) { const r = mode.uv; u = r[0] + (r[2] - r[0]) * u; v = r[1] + (r[3] - r[1]) * v; }
          vert(b, vp.x, vp.y, vp.z, vn.x, vn.y, vn.z, u, v);
        }
        tri(b, base, base + 2, base + 1); tri(b, base + 2, base + 3, base + 1);
      }
    },
    // any geometry, through a matrix (see at())
    geo(m, g, mtx, o = {}) {
      const b = get(m, mtx.elements[12], mtx.elements[14], true);
      setCol(o.col, o.glow); N3.getNormalMatrix(mtx);
      const P = g.attributes.position.array, Nn = g.attributes.normal.array, U = g.attributes.uv ? g.attributes.uv.array : null, n = g.attributes.position.count, base = b.v;
      for (let i = 0; i < n; i++) {
        vp.fromArray(P, i * 3).applyMatrix4(mtx); vn.fromArray(Nn, i * 3).applyMatrix3(N3).normalize();
        vert(b, vp.x, vp.y, vp.z, vn.x, vn.y, vn.z, U ? U[i * 2] : 0, U ? U[i * 2 + 1] : 0);
      }
      if (g.index) { const I = g.index.array; for (let i = 0; i < I.length; i += 3) tri(b, base + I[i], base + I[i + 1], base + I[i + 2]); }
      else for (let i = 0; i < n; i += 3) tri(b, base + i, base + i + 1, base + i + 2);
    },
    // a flat quad at height y: four [x, z] corners in order round it, and their [u, v]
    quad(m, pts, y, uvs, o = {}) {
      let p = pts, t = uvs;
      const cr = (p[1][1] - p[0][1]) * (p[2][0] - p[0][0]) - (p[1][0] - p[0][0]) * (p[2][1] - p[0][1]);
      if (cr < 0) { p = [p[0], p[3], p[2], p[1]]; t = [t[0], t[3], t[2], t[1]]; }   // keep it facing up
      const b = get(m, (p[0][0] + p[2][0]) / 2, (p[0][1] + p[2][1]) / 2, false);   // ground never casts shadows
      setCol(o.col, o.glow); const base = b.v;
      for (let k = 0; k < 4; k++) vert(b, p[k][0], y, p[k][1], 0, 1, 0, t[k][0], t[k][1]);
      tri(b, base, base + 1, base + 2); tri(b, base, base + 2, base + 3);
    },
    rect(m, x0, z0, x1, z1, y, o = {}) {   // world-mapped (o.tile metres per texture tile)
      const t = o.tile || 4;
      B.quad(m, [[x0, z0], [x0, z1], [x1, z1], [x1, z0]], y, [[x0 / t, z0 / t], [x0 / t, z1 / t], [x1 / t, z1 / t], [x1 / t, z0 / t]], o);
    },
    finish(scene) {
      const out = [];
      for (const b of buckets.values()) {
        if (!b.v) continue;
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(b.p.a.slice(0, b.p.l), 3));
        g.setAttribute('normal', new THREE.BufferAttribute(b.n.a.slice(0, b.n.l), 3));
        if (b.u) g.setAttribute('uv', new THREE.BufferAttribute(b.u.a.slice(0, b.u.l), 2));
        if (b.c) g.setAttribute('color', new THREE.BufferAttribute(b.c.a.slice(0, b.c.l), 3));
        g.setIndex(new THREE.BufferAttribute(b.i.a.slice(0, b.i.l), 1));
        g.computeBoundingSphere();
        for (const a of [...Object.values(g.attributes), g.index]) a.onUpload(function () { this.array = null; });   // the GPU has it; free the copy
        const mesh = new THREE.Mesh(g, b.m); mesh.castShadow = b.cs; mesh.receiveShadow = true; mesh.userData.premerged = true;
        scene.add(mesh); out.push(mesh);
      }
      buckets.clear();
      return out;
    },
  };
  return B;
}

// ---------------------------------------------------------------- city textures and materials
const ROADV = { street: [0.755, 0.995], avenue: [0.505, 0.745], cross: [0.255, 0.495], plain: [0.005, 0.245] };   // rows of the road atlas
function roadAtlas() {
  return canvasTex(512, 512, (g, w, h) => {
    const R = h / 4;
    g.fillStyle = '#574b41'; g.fillRect(0, 0, w, h);
    speckle(g, w, h, 9000, ['#625448', '#4b4037', '#6a5c50', '#43392f'], 3);
    for (let r = 0; r < 4; r++) {   // gutters: a darker edge on each side of every row
      const g0 = g.createLinearGradient(0, r * R, 0, r * R + 14); g0.addColorStop(0, 'rgba(30,22,16,0.55)'); g0.addColorStop(1, 'rgba(30,22,16,0)'); g.fillStyle = g0; g.fillRect(0, r * R, w, 14);
      const g1 = g.createLinearGradient(0, (r + 1) * R, 0, (r + 1) * R - 14); g1.addColorStop(0, 'rgba(30,22,16,0.55)'); g1.addColorStop(1, 'rgba(30,22,16,0)'); g.fillStyle = g1; g.fillRect(0, (r + 1) * R - 14, w, 14);
    }
    g.fillStyle = 'rgba(232,220,192,0.7)'; for (const x of [0, 256]) g.fillRect(x + 20, R / 2 - 2, 128, 4);   // street: dashed centre line
    const A = R;
    g.fillStyle = 'rgba(232,196,106,0.8)'; g.fillRect(0, A + R / 2 - 6, w, 3); g.fillRect(0, A + R / 2 + 3, w, 3);   // avenue: double amber centre line
    g.fillStyle = 'rgba(232,220,192,0.55)'; for (const x of [0, 256]) { g.fillRect(x + 30, A + R / 4 - 2, 110, 3); g.fillRect(x + 30, A + R * 3 / 4 - 1, 110, 3); }
    g.fillStyle = 'rgba(236,228,206,0.82)'; for (let k = 0; k < 9; k += 2) g.fillRect(0, 2 * R + 6 + k * (R - 12) / 9, w, (R - 12) / 9);   // crosswalk bars
    speckle(g, w, h, 2500, ['rgba(60,50,40,0.5)', 'rgba(90,75,60,0.4)'], 2);   // wear over the paint
  });
}
function paveTex(base, cols, joint, bw = 32, bh = 64) {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h); speckle(g, w, h, 5000, cols, 2);
    for (let y = 0; y < h; y += bh) for (let x = -bw; x < w; x += bw) { g.fillStyle = pick(cols); g.globalAlpha = 0.18; g.fillRect(x + ((y / bh) % 2) * bw / 2, y, bw - 2, bh - 2); }
    g.globalAlpha = 1; g.strokeStyle = joint; g.lineWidth = 2;
    for (let y = 0; y <= h; y += bh) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); for (let x = ((y / bh) % 2) * bw / 2; x <= w; x += bw) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + bh); g.stroke(); } }
  });
}
const SHOPV = [[0.757, 0.993], [0.507, 0.743], [0.257, 0.493], [0.007, 0.243]];
function shopfrontMat() {
  const walls = ['#c9a679', '#e2d9c6', '#b56a43', '#3a3430'], signs = ['#1d6f7a', '#a8322a', '#e0a526', '#2b3f6e', '#4a7a3a', '#7a2a5a', '#d96a2a', '#1a1a1a'];
  const plan = walls.map(() => [0, 1].map(() => ({ sign: pick(signs), lit: Math.random() < 0.75, door: Math.random() < 0.5 ? 0 : 1 })));
  const draw = emi => (g, w, h) => {
    const R = h / 4;
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
    walls.forEach((wall, r) => {
      const y0 = r * R;
      if (!emi) { g.fillStyle = wall; g.fillRect(0, y0, w, R); speckle(g, w, R, 300, ['rgba(0,0,0,0.06)', 'rgba(255,255,255,0.06)'], 2); }
      for (let k = 0; k < 2; k++) {
        const u = plan[r][k], x0 = k * 256;
        if (!emi) { g.fillStyle = u.sign; g.fillRect(x0 + 10, y0 + 6, 236, 22); g.fillStyle = 'rgba(255,240,210,0.85)'; for (let i = 0; i < 6; i++) g.fillRect(x0 + 40 + i * 28, y0 + 12, 18, 10); }
        else if (u.lit) { g.fillStyle = u.sign; g.globalAlpha = 0.6; g.fillRect(x0 + 10, y0 + 6, 236, 22); g.globalAlpha = 1; g.fillStyle = '#fff3d8'; for (let i = 0; i < 6; i++) g.fillRect(x0 + 40 + i * 28, y0 + 12, 18, 10); }
        const wx = x0 + (u.door ? 18 : 78), dx = x0 + (u.door ? 186 : 18);
        if (!emi) {
          const gl = g.createLinearGradient(0, y0 + 36, 0, y0 + R - 4); gl.addColorStop(0, '#2a3036'); gl.addColorStop(1, u.lit ? '#6a5236' : '#1a1e22');
          g.fillStyle = '#2a2420'; g.fillRect(wx - 4, y0 + 34, 164, R - 36); g.fillStyle = gl; g.fillRect(wx, y0 + 38, 156, R - 44);
          g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(wx + 8, y0 + 40, 30, R - 50);
          g.fillStyle = '#2a1c12'; g.fillRect(dx - 3, y0 + 40, 58, R - 40); g.fillStyle = '#3a4048'; g.fillRect(dx + 3, y0 + 46, 46, R - 50);
        } else if (u.lit) {
          const gl = g.createLinearGradient(0, y0 + 38, 0, y0 + R - 4); gl.addColorStop(0, 'rgba(255,200,130,0.25)'); gl.addColorStop(1, 'rgba(255,190,110,0.8)');
          g.fillStyle = gl; g.fillRect(wx, y0 + 38, 156, R - 44); g.fillStyle = 'rgba(255,210,150,0.5)'; g.fillRect(dx + 3, y0 + 46, 46, R - 50);
        }
      }
    });
  };
  const map = canvasTex(512, 512, draw(false)), emi = canvasTex(512, 512, draw(true));
  return new THREE.MeshStandardMaterial({ map, emissive: 0xffffff, emissiveMap: emi, emissiveIntensity: 0.7, roughness: 0.6 });
}
// awning and stall canvas: eight rows of stripes and prints
const FABV = Array.from({ length: 8 }, (_, r) => [1 - (r + 1) / 8 + 0.004, 1 - r / 8 - 0.004]);
function fabricMat() {
  const rows = [['#b4502e', '#efe2c6'], ['#1d7a84', '#f2ece0'], ['#e0a526', '#b3301e'], ['#2b3f8e', '#f0ead8'], ['#3f7a3a', '#e8c46a'], ['#7a1f30', '#7a1f30'], ['#d6862a', '#d6862a'], ['#1a1a1a', '#e0a526']];
  const tex = canvasTex(512, 512, (g, w, h) => {
    const R = h / 8;
    rows.forEach(([a, b], r) => {
      for (let x = 0; x < w; x += 32) { g.fillStyle = (x / 32) % 2 ? b : a; g.fillRect(x, r * R, 32, R); }
      if (r === 7) { g.fillStyle = '#3a8a4a'; for (let x = 8; x < w; x += 64) g.fillRect(x, r * R + 20, 16, 24); }   // kente-style blocks
      if (r >= 5 && r <= 6) { g.fillStyle = 'rgba(255,230,170,0.35)'; for (let x = 0; x < w; x += 24) for (let y = 4; y < R; y += 16) g.fillRect(x + (y % 32 ? 12 : 0), r * R + y, 6, 6); }   // printed dots
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, r * R + R - 6, w, 6);
    });
    speckle(g, w, h, 4000, ['rgba(0,0,0,0.06)', 'rgba(255,255,255,0.06)'], 2);
  });
  return new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, side: THREE.DoubleSide });
}
function waterNormals() {
  const N = 256, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d'), img = g.createImageData(N, N), H = new Float32Array(N * N);
  const waves = Array.from({ length: 14 }, () => ({ kx: randi(-6, 6), ky: randi(1, 7), a: rand(0.4, 1), p: rand(0, 6.28) }));
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { let s = 0; for (const wv of waves) s += wv.a / Math.hypot(wv.kx, wv.ky) * Math.sin((wv.kx * x + wv.ky * y) / N * Math.PI * 2 + wv.p); H[y * N + x] = s; }
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const dx = H[y * N + (x + 1) % N] - H[y * N + (x + N - 1) % N], dy = H[((y + 1) % N) * N + x] - H[((y + N - 1) % N) * N + x];
    const nx = -dx * 3, ny = -dy * 3, l = Math.hypot(nx, ny, 1), i = (y * N + x) * 4;
    img.data[i] = (nx / l * 0.5 + 0.5) * 255; img.data[i + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.NoColorSpace; t.anisotropy = 4;
  return t;
}
const CM = {};   // city materials
function cityMats() {
  if (CM.props) return CM;
  CM.props = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, metalness: 0.04 });
  CM.metal = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.55 });
  CM.glow = new THREE.MeshBasicMaterial({ vertexColors: true });   // vertex colours above 1, so bloom catches them
  CM.leaf = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide });
  CM.road = new THREE.MeshStandardMaterial({ map: roadAtlas(), roughness: 0.93, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  CM.pave = new THREE.MeshStandardMaterial({ map: paveTex('#b9a17f', ['#c4ad8a', '#ad9572', '#c9b393'], 'rgba(90,70,45,0.45)'), roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1.5, polygonOffsetUnits: -3 });
  CM.paveLow = CM.pave.clone(); CM.paveLow.polygonOffsetFactor = -0.4; CM.paveLow.polygonOffsetUnits = -1;
  CM.tiles = new THREE.MeshStandardMaterial({ map: paveTex('#b0613c', ['#bd6c45', '#a35834', '#c47a50', '#9c5a3a'], 'rgba(60,35,20,0.5)', 64, 64), roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -1.5, polygonOffsetUnits: -3 });
  CM.shop = shopfrontMat();
  CM.fabric = fabricMat();
  CM.fac = { sand: makeFacade('sand'), white: makeFacade('white'), terra: makeFacade('terra'), glass: makeFacade('glass'), coral: makeFacade('coral') };
  const wn = waterNormals(); wn.repeat.set(1 / 14, 1 / 14);
  CM.water = new THREE.MeshStandardMaterial({ color: 0x1f5862, roughness: 0.1, metalness: 0.15, normalMap: wn, normalScale: new THREE.Vector2(0.55, 0.55), envMapIntensity: 1.1 });
  return CM;
}

// ---------------------------------------------------------------- the shape of the city
const GRID = 64, GRID_N = 14, SW = 3;                      // street spacing, lines each side of the centre, pavement width
const gridHW = i => (i % 4 === 0 ? 7 : 5);                 // half-widths: avenues every fourth line, streets between
const RING = { r0: OLD_R - 7, r1: OLD_R + 7 };              // the Rampart Ring, where the old wall stood
const growR = (R, m) => ({ x0: R.x0 - m, x1: R.x1 + m, z0: R.z0 - m, z1: R.z1 + m });
// Ground the street grid leaves alone: the old districts, the Lantern Market, the Harbour and the sea.
const WILD = [
  { c: [0, 0], r: 36 }, { rect: { x0: -17, x1: 17, z0: 28, z1: 78 } }, { rect: MARKET },
  { rect: { x0: 30, x1: 160, z0: -66, z1: 66 } }, { rect: { x0: -160, x1: -30, z0: -66, z1: 66 } },
  { c: [CRATER.x, CRATER.z], r: 76 }, { rect: growR(RAIL, 4) }, { rect: growR(TENE, 4) }, { rect: SOUTH_LANE },
  { c: [RESV.x, RESV.z], r: RESV_R + 4 }, { rect: HARBOUR }, { c: [CONC.x, CONC.z], r: 38 }, { rect: { x0: 267, x1: 311, z0: 649, z1: 695 } }, { rect: { x0: -2000, x1: 2000, z0: COAST_Z - 29, z1: 4000 } },
];
function wildReason(R, m) {   // why a rectangle can't simply be built over: '' if it can
  for (const Z of WILD) {
    if (Z.rect) { const Q = Z.rect; if (R.x1 > Q.x0 - m && R.x0 < Q.x1 + m && R.z1 > Q.z0 - m && R.z0 < Q.z1 + m) return 'wild'; }
    else { const nx = clamp(Z.c[0], R.x0, R.x1), nz = clamp(Z.c[1], R.z0, R.z1); if (Math.hypot(nx - Z.c[0], nz - Z.c[1]) < Z.r + m) return 'wild'; }
  }
  const near = Math.hypot(clamp(0, R.x0, R.x1), clamp(0, R.z0, R.z1)), far = Math.hypot(Math.max(Math.abs(R.x0), Math.abs(R.x1)), Math.max(Math.abs(R.z0), Math.abs(R.z1)));
  if (near < RING.r1 + SW + m && far > RING.r0 - SW - m) return 'ring';   // the ring boulevard
  if (far > WORLD_R - 12) return 'edge';                                  // the rampart
  for (const t of TRAMS) { const nx = clamp(t.pos.x, R.x0, R.x1), nz = clamp(t.pos.z, R.z0, R.z1); if (Math.hypot(nx - t.pos.x, nz - t.pos.z) < 6 + m) return 'tram'; }
  return '';
}
const rectHitsWild = (R, m) => !!wildReason(R, m);
// a street on the line x = c (fx) or z = c, from lo to hi along it: the stretches that are clear of wild ground
function freeSpans(fx, c, hw, lo, hi) {
  const block = [];
  for (const Z of WILD) {
    if (Z.rect) { const R = Z.rect, a0 = fx ? R.x0 : R.z0, a1 = fx ? R.x1 : R.z1; if (c + hw > a0 && c - hw < a1) block.push(fx ? [R.z0, R.z1] : [R.x0, R.x1]); }
    else { const off = Math.abs(c - (fx ? Z.c[0] : Z.c[1])) - hw; if (off < Z.r) { const hc = Math.sqrt(Z.r * Z.r - Math.max(0, off) ** 2), m = fx ? Z.c[1] : Z.c[0]; block.push([m - hc, m + hc]); } }
  }
  const ac = Math.abs(c), ri = RING.r0 - SW - hw, ro = RING.r1 + SW + hw;
  if (ac < ro) { const so = Math.sqrt(ro * ro - ac * ac), si = ac < ri ? Math.sqrt(ri * ri - ac * ac) : 0; if (si > 0) block.push([si, so], [-so, -si]); else block.push([-so, so]); }
  const er = WORLD_R - 10, ce = ac + hw, ext = ce < er ? Math.sqrt(er * er - ce * ce) : 0;
  block.push([-1e5, -ext], [ext, 1e5]);
  block.sort((a, b) => a[0] - b[0]);
  const out = []; let s = lo;
  for (const [b0, b1] of block) { if (b1 <= s) continue; if (b0 >= hi) break; if (b0 > s) out.push([s, Math.min(b0, hi)]); s = Math.max(s, b1); if (s >= hi) break; }
  if (s < hi) out.push([s, hi]);
  return out.filter(([a, b]) => b - a > 3);
}
// split a city block into building lots, now and then leaving an alley between two
function splitLots(R, out, depth = 0) {
  const w = R.x1 - R.x0, d = R.z1 - R.z0, lim = depth === 0 ? 30 : sr(18, 30);
  if ((w < lim && d < lim) || depth > 4) { out.push(R); return out; }
  const alongX = w >= d, L = alongX ? w : d, gap = sch(0.35) ? sr(2.5, 4) : 0, t = sr(0.36, 0.64) * L;
  if (alongX) { splitLots({ x0: R.x0, x1: R.x0 + t - gap / 2, z0: R.z0, z1: R.z1 }, out, depth + 1); splitLots({ x0: R.x0 + t + gap / 2, x1: R.x1, z0: R.z0, z1: R.z1 }, out, depth + 1); }
  else { splitLots({ x0: R.x0, x1: R.x1, z0: R.z0, z1: R.z0 + t - gap / 2 }, out, depth + 1); splitLots({ x0: R.x0, x1: R.x1, z0: R.z0 + t + gap / 2, z1: R.z1 }, out, depth + 1); }
  return out;
}

// ---------------------------------------------------------------- street furniture
let FROND = null;
function frondGeo() {   // nine drooping palm leaves round a crown, as one small indexed geometry
  if (FROND) return FROND;
  const pos = [], idx = [], SEG = 3;
  for (let k = 0; k < 9; k++) {
    const a = k / 9 * Math.PI * 2 + (k % 2) * 0.2, L = k % 3 === 0 ? 2.6 : 3.4, lift = k % 3 === 0 ? 1.1 : 0.55, ca = Math.cos(a), sa = Math.sin(a), base = pos.length / 3;
    for (let s = 0; s <= SEG; s++) {
      const u = s / SEG, r = u * L, y = lift * u * 1.6 - 1.9 * u * u * (L / 3.4), w = 0.5 * Math.pow(Math.sin(Math.PI * clamp(u, 0.08, 0.97)), 0.7);
      for (const side of [-1, 1]) pos.push(ca * r - sa * w * side, y, sa * r + ca * w * side);
    }
    for (let s = 0; s < SEG; s++) { const i = base + s * 2; idx.push(i, i + 2, i + 3, i, i + 3, i + 1); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return FROND = g;
}
function addPalm(B, x, z, s = 1, collide = true) {
  const h = sr(6.5, 9.5) * s, segs = 3, lean = sr(0.4, 1.3) * s, la = sr(0, 6.28);
  let px = x, pz = z, py = 0;
  for (let k = 0; k < segs; k++) {
    const u0 = k / segs, u1 = (k + 1) / segs, dx = Math.cos(la) * lean * (u1 * u1 - u0 * u0), dz = Math.sin(la) * lean * (u1 * u1 - u0 * u0), sh = h / segs;
    const r = (0.24 - 0.07 * u0) * s, tilt = Math.atan2(Math.hypot(dx, dz), sh);
    B.geo(CM.props, TPL.cyl6, at(px + dx / 2, py + sh / 2, pz + dz / 2, r, Math.hypot(sh, Math.hypot(dx, dz)), r, -la, 0, -tilt, 'YXZ'), { col: 0x7d6347 });
    px += dx; pz += dz; py += sh;
  }
  B.geo(CM.leaf, frondGeo(), at(px, py, pz, s * sr(0.9, 1.1), s, s * sr(0.9, 1.1), sr(0, 6.28)), { col: sch(0.5) ? 0x5f7a2c : 0x6b8233 });
  B.geo(CM.props, TPL.oct, at(px, py - 0.15, pz, 0.34 * s, 0.28 * s, 0.34 * s), { col: 0x6a5530 });
  if (collide) addCollider(x, z, 0.7, 0.7, h);
}
function addLamp(B, x, z, ax, az, h = 6.2) {   // a street lamp at the kerb, its arm reaching along (ax, az) over the road
  const l = Math.hypot(ax, az) || 1, ux = ax / l, uz = az / l, ry = Math.atan2(-uz, ux);
  B.box(CM.metal, 0.16, h, 0.16, x, h / 2, z, { col: 0x2b323b });
  B.box(CM.metal, 1.5, 0.1, 0.1, x + ux * 0.7, h - 0.1, z + uz * 0.7, { ry, col: 0x2b323b });
  B.box(CM.glow, 0.7, 0.12, 0.3, x + ux * 1.3, h - 0.22, z + uz * 1.3, { ry, col: 0xc8f1ff, glow: 2.4 });
  addCollider(x, z, 0.35, 0.35, h);
}
function addBench(B, x, z, ry) {
  const c = Math.cos(ry), s = Math.sin(ry), P = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  let [a, b] = P(0, 0); B.box(CM.props, 1.9, 0.08, 0.5, a, 0.46, b, { ry, col: 0x8a5a32 });
  [a, b] = P(0, -0.24); B.box(CM.props, 1.9, 0.45, 0.06, a, 0.75, b, { ry, col: 0x8a5a32 });
  for (const lx of [-0.8, 0.8]) { [a, b] = P(lx, 0); B.box(CM.metal, 0.08, 0.46, 0.46, a, 0.23, b, { ry, col: 0x2b2b2b }); }
}
function addFountain(B, x, z, r = 5) {
  B.geo(CM.props, TPL.cyl16, at(x, 0.35, z, r, 0.7, r), { col: 0xc9b48e });
  B.geo(CM.water, TPL.cyl16, at(x, 0.6, z, r - 0.45, 0.06, r - 0.45));
  B.geo(CM.props, TPL.cyl8, at(x, 1.3, z, 0.45, 2.4, 0.45), { col: 0xc9b48e });
  B.geo(CM.props, TPL.cyl16, at(x, 2.55, z, 1.7, 0.25, 1.7), { col: 0xd9c7a2 });
  B.geo(CM.glow, TPL.oct, at(x, 3.1, z, 0.35, 0.6, 0.35), { col: 0x9fe9ff, glow: 2.2 });
  addCollider(x, z, r * 1.8, r * 1.8, 1.2);
}
// A robed townsperson, as three geometries: robe and arms, head, headwrap. Shared by the walking crowd
// (instanced) and the merchants who stand at their stalls (baked into the city).
let CIT = null;
function citizenGeos() {
  if (CIT) return CIT;
  const prof = [[0.001, 0], [0.34, 0.02], [0.31, 0.3], [0.26, 0.8], [0.22, 1.1], [0.27, 1.3], [0.24, 1.42], [0.1, 1.5], [0.001, 1.52]].map(([r, y]) => new THREE.Vector2(r, y));
  const robe = new THREE.LatheGeometry(prof, 8).toNonIndexed();
  const arm = sx => { const g = new THREE.BoxGeometry(0.1, 0.62, 0.12); g.translate(0, -0.31, 0); g.rotateZ(sx * 0.12); g.translate(sx * 0.29, 1.38, 0.02); return g.toNonIndexed(); };
  const body = mergeGeometries([robe, arm(-1), arm(1)]);
  const head = new THREE.SphereGeometry(0.115, 8, 6); head.translate(0, 1.64, 0.01);
  const wrap = new THREE.SphereGeometry(0.125, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.55); wrap.scale(1.1, 0.95, 1.12); wrap.translate(0, 1.66, -0.005);
  return CIT = { body, head, wrap };
}
const ROBES = [0xf2efe6, 0xf2efe6, 0xe8e0cc, 0x2b3f8e, 0xb4502e, 0x1d7a84, 0xe0a526, 0x7a1f30, 0x3f7a3a, 0x2a2622, 0xd6862a, 0x6a4a8a, 0x8a8a84];
const SKINS = [0x5a3a26, 0x6e4630, 0x7e5236, 0x4a2e1e, 0x8c5e3c, 0x3e2618, 0x9a6a46];
const WRAPS = [0xf2efe6, 0xf2efe6, 0x1a1a1a, 0xb4502e, 0x1d7a84, 0xe0a526, 0x7a1f30, 0x2b3f8e, 0xd9cfbd];
function addFigure(B, x, z, ry, s = 1) {   // a merchant or a dock hand who stands still
  const g = citizenGeos();
  B.geo(CM.props, g.body, at(x, 0, z, s, s, s, ry), { col: spick(ROBES) });
  B.geo(CM.props, g.head, at(x, 0, z, s, s, s, ry), { col: spick(SKINS) });
  B.geo(CM.props, g.wrap, at(x, 0, z, s, s, s, ry), { col: spick(WRAPS) });
}

// ---------------------------------------------------------------- buildings
const ROOF = 0xa88a66, TRIM = 0xe3d5b8;
const DSTYLE = {
  ward: { fac: ['sand', 'sand', 'white', 'terra'], h: r => sr(14, 40) + (r < 120 ? sr(0, 45) : r < 300 ? sr(0, 20) : sr(0, 26)), glass: h => h > 58 && sch(0.55), dome: 0.7 },
  northgate: { fac: ['sand', 'white', 'terra', 'sand'], h: () => sch(0.5) ? sr(46, 124) : sr(16, 44), glass: h => h > 44 && sch(0.8), dome: 0.3 },
  sunrise: { fac: ['sand', 'terra', 'terra', 'white', 'coral'], h: () => sr(10, 30) + (sch(0.14) ? sr(8, 26) : 0), glass: h => h > 46 && sch(0.5), dome: 0.6 },
  dhow: { fac: ['white', 'white', 'coral', 'coral', 'sand'], h: () => sr(6, 15) + (sch(0.1) ? sr(4, 10) : 0), glass: () => false, dome: 0.5 },
};
DSTYLE.kopje = DSTYLE.sunrise; DSTYLE.causeway = DSTYLE.ward; DSTYLE.ring = DSTYLE.sunrise; DSTYLE.harbour = DSTYLE.dhow;
const NEON = [0x3ee6ff, 0xff4fa0, 0xffb347, 0x6dff9a, 0xb07bff, 0xff5a3a];
function parapet(B, w, d, x, y, z, col = TRIM) {
  for (const [pw, pd, px, pz] of [[w, 0.35, 0, d / 2], [w, 0.35, 0, -d / 2], [0.35, d, w / 2, 0], [0.35, d, -w / 2, 0]]) B.box(CM.props, pw, 0.9, pd, x + px, y + 0.45, z + pz, { col });
}
function rooftop(B, w, d, x, y, z) {
  for (let k = sri(0, 3); k > 0; k--) {
    const px = x + sr(-w / 2 + 1.6, w / 2 - 1.6), pz = z + sr(-d / 2 + 1.6, d / 2 - 1.6), t = sr(0, 1);
    if (t < 0.3) { B.geo(CM.props, TPL.cyl8, at(px, y + 1.4, pz, 1.0, 2.2, 1.0), { col: sch(0.5) ? 0x9a9a92 : 0x4f7486 }); B.box(CM.metal, 2.2, 0.3, 2.2, px, y + 0.15, pz, { col: 0x3a3a3a }); }
    else if (t < 0.55) B.box(CM.props, 1.7, 1.0, 1.3, px, y + 0.5, pz, { col: 0xb8b4aa });
    else if (t < 0.85) { const ry = sr(0, 0.3); B.box(CM.metal, 3.4, 0.1, 2.1, px, y + 0.8, pz, { rx: -0.4, ry, order: 'YXZ', col: 0x1c2e4a }); B.box(CM.metal, 0.1, 0.8, 0.1, px, y + 0.4, pz, { col: 0x555555 }); }
    else { B.box(CM.metal, 0.1, 4, 0.1, px, y + 2, pz, { col: 0x777777 }); B.box(CM.glow, 0.2, 0.2, 0.2, px, y + 4.1, pz, { col: 0xff3355, glow: 3 }); }
  }
}
function awnings(B, x0, x1, z0, z1, faces) {
  const row = () => FABV[sri(0, 7)];
  for (const f of faces) {
    const alongX = f === 'z0' || f === 'z1', L = alongX ? x1 - x0 : z1 - z0;
    if (sch(0.3)) continue;
    const n = L > 15 ? 2 : 1, R = row(), tilt = 0.34, dep = 1.9, ry = { z1: 0, z0: Math.PI, x1: Math.PI / 2, x0: -Math.PI / 2 }[f];
    const nx = f === 'x1' ? 1 : f === 'x0' ? -1 : 0, nz = f === 'z1' ? 1 : f === 'z0' ? -1 : 0;
    for (let k = 0; k < n; k++) {
      const aw = Math.min(L - 1.2, sr(3.5, 6)), off = (k - (n - 1) / 2) * (L / n), out = 0.15 + dep / 2 * Math.cos(tilt), y = 3.75 - dep / 2 * Math.sin(tilt);
      const cx = alongX ? (x0 + x1) / 2 + off : (nx > 0 ? x1 : x0) + nx * out, cz = alongX ? (nz > 0 ? z1 : z0) + nz * out : (z0 + z1) / 2 + off;
      B.box(CM.fabric, aw, 0.07, dep, cx, y, cz, { order: 'YXZ', ry, rx: tilt, uv: { rep: 2.4, v0: R[0], v1: R[1] }, topUV: { rep: 2.4, v0: R[0], v1: R[1] } });
    }
  }
}
function cityBuilding(B, L, faces) {
  const ins = sr(0, 0.3), x0 = L.x0 + ins, x1 = L.x1 - ins, z0 = L.z0 + ins, z1 = L.z1 - ins, w = x1 - x0, d = z1 - z0;
  if (w < 5 || d < 5) return;
  const x = (x0 + x1) / 2, z = (z0 + z1) / 2, r = Math.hypot(x, z), st = DSTYLE[zoneAt(x, z)] || DSTYLE.ward;
  let h = st.h(r); if (Math.min(w, d) < 9) h = Math.min(h, 22);   // a narrow lot can't carry a tower
  addCollider(x, z, w + 0.4, d + 0.4, h + 3);
  const shop = h >= 7;
  const sv = spick(SHOPV);
  if (shop) B.box(CM.shop, w + 0.3, 4.4, d + 0.3, x, 2.2, z, { uv: { rep: 8, v0: sv[0], v1: sv[1] }, u0: sr(0, 1), top: CM.props, topCol: 0xcdb894 });
  if (st.glass(h)) {   // glass tower on a sandstone podium
    const ph = sr(7, 11); B.box(CM.fac.sand, w, ph, d, x, ph / 2, z, { uv: 'facade', u0: sr(0, 1), top: CM.props, topCol: ROOF }); parapet(B, w, d, x, ph, z);
    const tw = w * sr(0.55, 0.72), td = d * sr(0.55, 0.72);
    B.box(CM.fac.glass, tw, h - ph, td, x, ph + (h - ph) / 2, z, { uv: 'facade', u0: sr(0, 1), top: CM.props, topCol: 0x2a3440 });
    const sh = sr(7, 14); B.box(CM.props, 0.35, sh, 0.35, x, h + sh / 2, z, { col: TRIM }); B.geo(W.blink, TPL.sph, at(x, h + sh, z, 0.35));
    if (shop) awnings(B, x0, x1, z0, z1, faces);
    return;
  }
  const fk = spick(st.fac), fm = CM.fac[fk], tiers = h > 34 ? sri(2, 3) : 1;
  let y = 0, tw = w, td = d, rest = h;
  for (let k = 0; k < tiers; k++) {   // stepped setbacks
    const th = k === tiers - 1 ? rest : rest * sr(0.45, 0.62);
    B.box(fm, tw, th, td, x, y + th / 2, z, { uv: 'facade', u0: sr(0, 1), top: CM.props, topCol: ROOF });
    y += th; rest -= th;
    if (k < tiers - 1 || (fk !== 'white' && fk !== 'coral')) parapet(B, tw, td, x, y, z, fk === 'coral' ? 0xd8ccb0 : TRIM);
    if (k < tiers - 1) { tw *= sr(0.62, 0.8); td *= sr(0.62, 0.8); }
  }
  if ((fk === 'white' || fk === 'coral') && sch(st.dome)) {   // whitewashed drum and dome
    const dr = Math.min(tw, td) * sr(0.3, 0.42);
    B.geo(CM.props, TPL.cyl16, at(x, y + 0.8, z, dr, 1.6, dr), { col: TRIM }); B.geo(CM.props, TPL.dome, at(x, y + 1.6, z, dr), { col: fk === 'coral' ? 0x5fa3a8 : 0xeee4d0 });
  } else {
    if (fk === 'white' || fk === 'coral') parapet(B, tw, td, x, y, z, 0xece4d2);
    rooftop(B, tw, td, x, y, z);
    if (h > 50) { const sh = sr(7, 13); B.box(CM.props, 0.35, sh, 0.35, x, y + sh / 2, z, { col: TRIM }); B.geo(W.blink, TPL.sph, at(x, y + sh, z, 0.35)); }
  }
  if (!shop) return;
  awnings(B, x0, x1, z0, z1, faces);
  if (faces.length && h > 9 && sch(0.35)) {   // a neon blade sign
    const f = spick(faces), sh = sr(2, 4), sy = sr(5.6, Math.min(h - 2, 9)), c = spick(NEON);
    const sx = f === 'x0' ? x0 - 0.6 : f === 'x1' ? x1 + 0.6 : x + sr(-w / 3, w / 3), sz = f === 'z0' ? z0 - 0.6 : f === 'z1' ? z1 + 0.6 : z + sr(-d / 3, d / 3);
    const along = f === 'z0' || f === 'z1';
    B.box(CM.props, along ? 0.16 : 1.2, sh + 0.3, along ? 1.2 : 0.16, sx, sy, sz, { col: 0x1a1d22 });
    B.box(CM.glow, along ? 0.22 : 1.0, sh, along ? 1.0 : 0.22, sx, sy, sz, { col: c, glow: 1.6 });
  }
}

// ---------------------------------------------------------------- parks and squares
function buildPark(B, R, trees) {
  W.parks.push(R);
  const cx = (R.x0 + R.x1) / 2, cz = (R.z0 + R.z1) / 2;
  B.rect(CM.pave, R.x0, cz - 2, R.x1, cz + 2, 0.016); B.rect(CM.pave, cx - 2, R.z0, cx + 2, cz - 2, 0.016); B.rect(CM.pave, cx - 2, cz + 2, cx + 2, R.z1, 0.016);
  if (sch(0.5)) addFountain(B, cx, cz, 4.5);
  else { B.rect(CM.pave, cx - 6, cz - 6, cx + 6, cz + 6, 0.016); const b = makeBaobab(sr(1.1, 1.4)); b.position.set(cx, 0, cz); W.scene.add(b); addCollider(cx, cz, 4.4, 4.4, 8); }
  for (let k = 0, tries = 0; k < 8 && tries < 40; tries++) {
    const x = sr(R.x0 + 3, R.x1 - 3), z = sr(R.z0 + 3, R.z1 - 3);
    if (Math.abs(x - cx) < 5 || Math.abs(z - cz) < 5) continue;
    trees.push({ x, z, s: sr(0.8, 1.25), dead: false }); addCollider(x, z, 0.7, 0.7, 4); k++;
  }
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { addPalm(B, cx + sx * 4.2, cz + sz * 4.2); addBench(B, cx + sx * 9, cz + sz * 3.2, sz > 0 ? Math.PI : 0); }
  addLamp(B, cx - 2.6, R.z0 + 8, 1, 0); addLamp(B, cx + 2.6, R.z1 - 8, -1, 0);
}
function buildSquare(B, R) {
  const cx = (R.x0 + R.x1) / 2, cz = (R.z0 + R.z1) / 2, rr = Math.min(R.x1 - R.x0, R.z1 - R.z0) / 2 - 4;
  B.rect(CM.tiles, R.x0, R.z0, R.x1, R.z1, 0.016);
  addFountain(B, cx, cz, 6);
  for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + Math.PI / 8; addPalm(B, cx + Math.cos(a) * rr, cz + Math.sin(a) * rr); }
  for (let k = 0; k < 4; k++) { const a = k / 4 * Math.PI * 2; addBench(B, cx + Math.cos(a) * 10, cz + Math.sin(a) * 10, Math.PI / 2 - a + Math.PI); }
}

// ---------------------------------------------------------------- the whole grid
function buildCity(S) {
  _srng = mulberry32(2137);
  cityMats();
  const B = makeBatcher(), pieces = [], inters = new Map(), trees = [];
  W.streets = []; W.parks = [];
  const touch = (ix, iz, side) => {
    const k = ix + ',' + iz; let I = inters.get(k);
    if (!I) inters.set(k, I = { x: ix * GRID, z: iz * GRID, hx: gridHW(ix), hz: gridHW(iz) });
    I[side] = true;
  };
  // streets: every grid line, cut into pieces between intersections and round the wild ground
  for (let i = -GRID_N; i <= GRID_N; i++) for (const fx of [true, false]) {
    const c = i * GRID, hw = gridHW(i);
    for (let j = -GRID_N - 1; j <= GRID_N; j++) {
      const e0 = Math.abs(j) <= GRID_N, e1 = Math.abs(j + 1) <= GRID_N;
      const lo = j * GRID + (e0 ? gridHW(j) : 0), hi = (j + 1) * GRID - (e1 ? gridHW(j + 1) : 0);
      for (const [s0, s1] of freeSpans(fx, c, hw, lo, hi)) {
        const p = { fx, c, hw, s0, s1, t0: e0 && s0 === lo, t1: e1 && s1 === hi };
        pieces.push(p);
        if (p.t0) touch(fx ? i : j, fx ? j : i, fx ? 's' : 'e');
        if (p.t1) touch(fx ? i : j + 1, fx ? j + 1 : i, fx ? 'n' : 'w');
      }
    }
  }
  const road = (fx, c, hw, s0, s1, R) => {
    const u0 = s0 / 12, u1 = s1 / 12;
    const P = fx ? [[c - hw, s0], [c - hw, s1], [c + hw, s1], [c + hw, s0]] : [[s0, c - hw], [s1, c - hw], [s1, c + hw], [s0, c + hw]];
    B.quad(CM.road, P, 0.012, [[u0, R[0]], [u1, R[0]], [u1, R[1]], [u0, R[1]]]);
  };
  for (const p of pieces) {
    let a = p.s0, b = p.s1;
    if (p.t0 && b - a > 12) { road(p.fx, p.c, p.hw, a, a + 3, ROADV.cross); a += 3; }   // zebra crossings where it meets a junction
    if (p.t1 && b - a > 9) { road(p.fx, p.c, p.hw, b - 3, b, ROADV.cross); b -= 3; }
    road(p.fx, p.c, p.hw, a, b, p.hw === 7 ? ROADV.avenue : ROADV.street);
    W.streets.push(p.fx ? { x0: p.c - p.hw, x1: p.c + p.hw, z0: p.s0, z1: p.s1 } : { x0: p.s0, x1: p.s1, z0: p.c - p.hw, z1: p.c + p.hw });
    for (const sd of [-1, 1]) {
      // pavement (running on round the corner at a junction), kerb, lamps, and palms in planters on the avenues
      const e0 = p.s0 - (p.t0 ? SW : 0), e1 = p.s1 + (p.t1 ? SW : 0), o0 = p.c + sd * p.hw, o1 = p.c + sd * (p.hw + SW);
      if (p.fx) B.rect(CM.pave, Math.min(o0, o1), e0, Math.max(o0, o1), e1, 0.016); else B.rect(CM.pave, e0, Math.min(o0, o1), e1, Math.max(o0, o1), 0.016);
      const ko = p.c + sd * (p.hw + 0.12), km = (p.s0 + p.s1) / 2, kl = p.s1 - p.s0;
      B.box(CM.props, p.fx ? 0.24 : kl, 0.12, p.fx ? kl : 0.24, p.fx ? ko : km, 0.06, p.fx ? km : ko, { col: 0xcbb48e });
      const lo = p.c + sd * (p.hw + 0.55), po = p.c + sd * (p.hw + 1.6);
      for (let s = p.s0 + 8 + (sd > 0 ? 17 : 0); s < p.s1 - 6; s += 34) {
        if (p.fx) addLamp(B, lo, s, -sd, 0); else addLamp(B, s, lo, 0, -sd);
        const ps = s + 17;
        if (p.hw === 7 && ps < p.s1 - 5) {
          const [x, z] = p.fx ? [po, ps] : [ps, po];
          addPalm(B, x, z); B.box(CM.props, 1.3, 0.4, 1.3, x, 0.2, z, { col: 0xb8a17c });
        }
      }
    }
  }
  for (const I of inters.values()) {   // junctions
    const R = ROADV.plain, x0 = I.x - I.hx, x1 = I.x + I.hx, z0 = I.z - I.hz, z1 = I.z + I.hz;
    B.quad(CM.road, [[x0, z0], [x0, z1], [x1, z1], [x1, z0]], 0.012, [[x0 / 12, R[0]], [x0 / 12, R[1]], [x1 / 12, R[1]], [x1 / 12, R[0]]]);
    W.streets.push({ x0, x1, z0, z1 });
  }
  // the lane down the Salt Lantern's east side, from the plaza to the market
  road(true, 22, 5, 31, MARKET.z0, ROADV.street); B.rect(CM.pave, 27, 31, 30, MARKET.z0, 0.016);
  W.streets.push({ x0: 17, x1: 27, z0: 31, z1: MARKET.z0 });
  // city blocks: paved, cut into lots, a building on each (now and then a park or a square instead)
  for (let i = -GRID_N - 1; i <= GRID_N; i++) for (let j = -GRID_N - 1; j <= GRID_N; j++) {
    const inner = { x0: i * GRID + gridHW(i) + SW, x1: (i + 1) * GRID - gridHW(i + 1) - SW, z0: j * GRID + gridHW(j) + SW, z1: Math.min((j + 1) * GRID - gridHW(j + 1) - SW, COAST_Z - 30) };
    if (inner.x1 - inner.x0 < 8 || inner.z1 - inner.z0 < 8) continue;
    const why = wildReason(inner, 0.5), clean = !why;
    if (why === 'ring' || why === 'edge' || why === 'tram') B.rect(CM.paveLow, inner.x0, inner.z0, inner.x1, inner.z1, 0.006);   // paved under the ring road, the stop or the wall
    if (clean) {
      const roll = sr(0, 1);
      if (roll < 0.045) { buildPark(B, inner, trees); continue; }
      if (roll < 0.075) { buildSquare(B, inner); continue; }
      B.rect(CM.pave, inner.x0, inner.z0, inner.x1, inner.z1, 0.016);
    }
    for (const L of splitLots(inner, [])) {
      if (!clean && rectHitsWild(L, 2)) continue;
      const faces = [];
      if (L.x0 - inner.x0 < 0.01) faces.push('x0'); if (inner.x1 - L.x1 < 0.01) faces.push('x1');
      if (L.z0 - inner.z0 < 0.01) faces.push('z0'); if (inner.z1 - L.z1 < 0.01) faces.push('z1');
      cityBuilding(B, L, faces);
    }
  }
  // the Rampart Ring: a palm boulevard where the old wall stood
  const RN = 180, rr = [RING.r0 - SW, RING.r0, RING.r1, RING.r1 + SW], PR = (r, a) => [Math.cos(a) * r, Math.sin(a) * r];
  for (let k = 0; k < RN; k++) {
    const a0 = k / RN * Math.PI * 2, a1 = (k + 1) / RN * Math.PI * 2, u0 = a0 * OLD_R / 12, u1 = a1 * OLD_R / 12, R = ROADV.avenue, am = (a0 + a1) / 2;
    B.quad(CM.road, [PR(rr[1], a0), PR(rr[1], a1), PR(rr[2], a1), PR(rr[2], a0)], 0.012, [[u0, R[0]], [u1, R[0]], [u1, R[1]], [u0, R[1]]]);
    for (const [ra, rb] of [[rr[0], rr[1]], [rr[2], rr[3]]]) { const q = [PR(ra, a0), PR(ra, a1), PR(rb, a1), PR(rb, a0)]; B.quad(CM.pave, q, 0.016, q.map(([x, z]) => [x / 4, z / 4])); }
    if (k % 3 === 0) { const out = k % 6 ? 1 : -1, [x, z] = PR(out > 0 ? rr[2] + 0.55 : rr[1] - 0.55, am); addLamp(B, x, z, -Math.cos(am) * out, -Math.sin(am) * out); }
    if (k % 4 === 2) for (const r of [rr[0] + 1.4, rr[3] - 1.4]) { const [x, z] = PR(r, am); addPalm(B, x, z); }
  }
  // the seafront promenade, either side of the Harbour
  for (const sx of [-1, 1]) {
    const xa = HARBOUR.x1, xb = Math.sqrt((WORLD_R + 6) ** 2 - (COAST_Z - 30) ** 2), xe = Math.sqrt((WORLD_R - 4) ** 2 - COAST_Z ** 2);
    B.rect(CM.pave, sx < 0 ? -xb : xa, COAST_Z - 30, sx < 0 ? -xa : xb, COAST_Z, 0.016);
    for (let x = xa + 8, k = 0; x < xe - 6; x += 16, k++) {
      addPalm(B, sx * x, COAST_Z - 21);
      if (k % 2) addLamp(B, sx * (x + 8), COAST_Z - 2.5, 0, -1); else addBench(B, sx * (x + 8), COAST_Z - 5, 0);
    }
    for (let x = xa; x < xe; x += 2.5) B.box(CM.metal, 0.08, 1.05, 0.08, sx * x, 0.52, COAST_Z - 0.3, { col: 0x2b323b });
    const len = xe - xa;
    for (const y of [1.05, 0.6]) B.box(CM.metal, len, 0.07, 0.07, sx * (xa + len / 2), y, COAST_Z - 0.3, { col: 0x2b323b });
  }
  // a paved square round each tram stop out in the city
  for (const t of TRAMS) if (DSTYLE[zoneAt(t.pos.x, t.pos.z)] && !inRect(HARBOUR, t.pos.x, t.pos.z)) B.rect(CM.pave, t.pos.x - 7, t.pos.z - 7, t.pos.x + 7, t.pos.z + 7, 0.016);
  if (trees.length) S.add(makeAcacias(trees));
  buildMarket(B);
  buildHarbour(S, B);
  buildWalkGraph(pieces, inters);
  W.city = B.finish(S);
}

// =====================================================================
//  THE LANTERN MARKET: stalls behind the Salt Lantern, and a few at its door
// =====================================================================
const STALL_KINDS = ['produce', 'spice', 'cloth', 'lantern', 'pottery', 'tech', 'produce', 'spice', 'cloth', 'lantern'];
const FRUIT = [0xd84a2a, 0xe8a020, 0x6aa83a, 0x8a2a5a, 0xe8d040, 0xc8781e];
const SPICE = [0xc8501e, 0xe0a526, 0x8a3a1a, 0x6a7a2a, 0xb8862a, 0xd8c070, 0x9a2a1a];
const LANTERN_COLS = [0xffb347, 0xff6a3a, 0x3ee6ff, 0x9aff6a, 0xff4fa0, 0xffd890];
function addStall(B, x, z, ry, kind, figure = true) {
  const c = Math.cos(ry), s = Math.sin(ry), P = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  const put = (w, h, d, lx, y, lz, o = {}) => { const [a, b] = P(lx, lz); B.box(o.m || CM.props, w, h, d, a, y, b, Object.assign({ ry }, o)); };
  const R = spick(FABV), R2 = spick(FABV), fab = (r) => ({ m: CM.fabric, uv: { rep: 2.4, v0: r[0], v1: r[1] }, topUV: { rep: 2.4, v0: r[0], v1: r[1] } });
  for (const [lx, lz, h] of [[-1.6, 1.15, 2.6], [1.6, 1.15, 2.6], [-1.6, -1.15, 3.0], [1.6, -1.15, 3.0]]) put(0.1, h, 0.1, lx, h / 2, lz, { col: 0x6a4428 });
  put(3.3, 0.95, 0.75, 0, 0.475, 0.85, { col: 0x7a5232 }); put(3.4, 0.06, 0.85, 0, 0.98, 0.85, { col: 0xa07a4e });
  put(3.7, 0.06, 2.9, 0, 2.86, 0, Object.assign(fab(R), { rx: 0.14, order: 'YXZ' }));   // canopy, sloping to the front
  put(3.7, 0.36, 0.04, 0, 2.5, 1.46, fab(R));                                          // valance
  put(3.2, 2.0, 0.04, 0, 1.45, -1.2, fab(R2));                                         // back cloth
  const row = (n, f) => { for (let k = 0; k < n; k++) f(-1.3 + k * 2.6 / (n - 1), k); };
  if (kind === 'produce') row(5, (lx) => { put(0.55, 0.22, 0.5, lx, 1.12, 0.85, { col: 0x8a6a42 }); put(0.5, 0.07, 0.44, lx, 1.26, 0.85, { col: spick(FRUIT) }); });
  else if (kind === 'spice') row(7, (lx, k) => { const [a, b] = P(lx, 0.68 + (k % 2) * 0.32); B.geo(CM.props, TPL.cone6, at(a, 1.14, b, 0.16, 0.26, 0.16), { col: spick(SPICE) }); });
  else if (kind === 'cloth') { row(3, (lx) => { const r = spick(FABV); put(0.7, 0.26, 0.5, lx, 1.14, 0.85, fab(r)); put(0.6, 1.3, 0.03, lx, 1.95, 1.38, fab(spick(FABV))); }); }
  else if (kind === 'lantern') { row(5, (lx) => { put(0.04, 0.5, 0.04, lx, 2.45, 1.2, { col: 0x222222 }); put(0.22, 0.3, 0.22, lx, 2.05, 1.2, { m: CM.glow, col: spick(LANTERN_COLS), glow: 2.4 }); }); row(3, (lx) => put(0.2, 0.28, 0.2, lx, 1.15, 0.85, { m: CM.glow, col: spick(LANTERN_COLS), glow: 2 })); }
  else if (kind === 'pottery') row(5, (lx, k) => { const [a, b] = P(lx, 0.85); if (k % 2) B.geo(CM.props, TPL.cyl8, at(a, 1.2, b, 0.16, 0.38, 0.16), { col: 0xa4502e }); else B.geo(CM.props, TPL.sph, at(a, 1.2, b, 0.22, 0.2, 0.22), { col: 0xb8683a }); });
  else if (kind === 'tech') row(3, (lx) => { put(0.62, 0.4, 0.04, lx, 1.28, 0.8, { m: CM.glow, col: spick([0x3ee6ff, 0x6dff9a, 0xb07bff]), glow: 1.6, rx: -0.3, order: 'YXZ' }); put(0.5, 0.08, 0.3, lx, 1.05, 1.05, { col: 0x1a1d22 }); });
  else if (kind === 'fish') { put(3.3, 0.05, 0.8, 0, 1.03, 0.85, { col: 0xdfeef2 }); row(7, (lx, k) => { const [a, b] = P(lx, 0.7 + (k % 2) * 0.3); B.geo(CM.metal, TPL.sph, at(a, 1.09, b, 0.34, 0.07, 0.11, ry + sr(-0.4, 0.4)), { col: 0xa8b4bc }); }); }
  if (figure) { const [a, b] = P(sr(-0.6, 0.6), -0.4); addFigure(B, a, b, ry); }
  const turned = Math.abs(s) > 0.5;
  addCollider(x, z, turned ? 3.0 : 3.6, turned ? 3.6 : 3.0, 3);
}
function lightString(B, x0, z0, x1, z1, y = 5.2, n = 9) {   // lanterns strung between two poles, sagging in the middle
  for (let k = 1; k < n; k++) { const u = k / n; B.geo(CM.glow, TPL.oct, at(x0 + (x1 - x0) * u, y - 1.0 * 4 * u * (1 - u), z0 + (z1 - z0) * u, 0.09, 0.13, 0.09), { col: spick(LANTERN_COLS), glow: 2.2 }); }
}
function marketGate(B, z, title) {
  for (const sx of [-1, 1]) { B.box(CM.props, 1.3, 6.6, 1.3, sx * 8.2, 3.3, z, { col: 0xc9a679 }); B.geo(CM.glow, TPL.oct, at(sx * 8.2, 7.9, z, 0.3, 0.45, 0.3), { col: 0xffb347, glow: 2.6 }); addCollider(sx * 8.2, z, 1.4, 1.4, 7); }
  B.box(CM.props, 18, 1.2, 1.3, 0, 7.0, z, { col: 0xb48c62 });
  const tex = textTex(1024, 160, '#2a1a10', [{ t: title, y: 84, c: '#f0c46a', f: 'bold 92px Georgia, serif' }]);
  for (const sd of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(11, 1.0), new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.35, roughness: 0.6 })); m.position.set(0, 7.0, z + sd * 0.67); m.rotation.y = sd > 0 ? 0 : Math.PI; W.scene.add(m); }
}
function buildMarket(B) {
  const M = MARKET;
  B.rect(CM.tiles, M.x0, M.z0, M.x1, M.z1, 0.016, { tile: 3 });
  // rows of stalls, every aisle lined with stall fronts; the central aisle runs on to the Lantern Road
  const ROWS = [[89.5, 0], [104, Math.PI], [108.4, 0], [118, Math.PI], [122.4, 0], [132, Math.PI], [136.4, 0], [146, Math.PI]];
  const XS = [10, 14, 18, 22, 26, 36, 40, 44, 48, 52];
  for (const [z, ry] of ROWS) for (const sx of [-1, 1]) for (const ax of XS) {
    if (z < 92 && sx > 0 && ax < 34) continue;   // the lane from the Lantern comes in here
    if (!sch(0.88)) continue;
    addStall(B, sx * ax, z, ry, spick(STALL_KINDS));
  }
  marketGate(B, M.z0 + 2.5, 'LANTERN MARKET'); marketGate(B, M.z1 - 1.5, 'LANTERN MARKET');
  // poles and lantern strings down the central aisle
  const PZ = [84, 106.2, 120.2, 134.2, 147.4];
  for (const z of PZ) for (const sx of [-1, 1]) { B.box(CM.props, 0.18, 5.6, 0.18, sx * 7.4, 2.8, z, { col: 0x5a3a22 }); addCollider(sx * 7.4, z, 0.3, 0.3, 5.6); }
  PZ.forEach((z, k) => { lightString(B, -7.4, z, 7.4, z); if (k < PZ.length - 1) { lightString(B, -7.4, z, 7.4, PZ[k + 1]); lightString(B, 7.4, z, -7.4, PZ[k + 1]); } });
  // stalls at the Salt Lantern's door, either side of the forecourt, with lanterns strung between them
  for (const sx of [-1, 1]) for (const z of [36.5, 40.5]) addStall(B, sx * 10.8, z, -sx * Math.PI / 2, spick(['lantern', 'spice', 'produce', 'cloth']));
  for (const sx of [-1, 1]) { B.box(CM.props, 0.16, 5, 0.16, sx * 9.1, 2.5, 33.6, { col: 0x5a3a22 }); B.box(CM.props, 0.16, 5, 0.16, sx * 9.1, 2.5, 43.6, { col: 0x5a3a22 }); }
  lightString(B, -9.1, 33.6, 9.1, 43.6, 4.7); lightString(B, 9.1, 33.6, -9.1, 43.6, 4.7); lightString(B, -9.1, 33.6, 9.1, 33.6, 4.7, 7);
}

// =====================================================================
//  THE HARBOUR: the basin, the quays, the ships, and the Talina, the ferry across
// =====================================================================
// The Talina is a double-ended ferry: she crosses the basin between the West Pier and the East Pier and back,
// never turning, lowering a ramp at whichever pier she is alongside. Walk aboard while she's in and ride across;
// anyone standing on her deck moves with her, and her rails keep you aboard until she's alongside again.
const FERRY = { z: 640, HL: 18, HW: 6, xw: BASIN.x0 + 18, xe: BASIN.x1 - 18, dock: 18, run: 40, x: BASIN.x0 + 18, aboard: new Set(), group: null, ramps: {}, lastKey: '' };
FERRY.period = 2 * (FERRY.dock + FERRY.run);
function ferryState(t) {
  const F = FERRY, ease = u => u * u * (3 - 2 * u); let ph = ((t % F.period) + F.period) % F.period;
  if (ph < F.dock) return { x: F.xw, docked: 'w', left: F.dock - ph };
  ph -= F.dock; if (ph < F.run) return { x: F.xw + (F.xe - F.xw) * ease(ph / F.run), to: 'e', left: F.run - ph };
  ph -= F.run; if (ph < F.dock) return { x: F.xe, docked: 'e', left: F.dock - ph };
  ph -= F.dock; return { x: F.xe + (F.xw - F.xe) * ease(ph / F.run), to: 'w', left: F.run - ph };
}
function ferryWait(side, t = G.time) {   // seconds until she is boarding at this pier (0: boarding now)
  const F = FERRY, ph = ((t % F.period) + F.period) % F.period, start = side === 'w' ? 0 : F.dock + F.run;
  if (ph >= start && ph < start + F.dock) return 0;
  return ((start - ph) % F.period + F.period) % F.period;
}
// A boat hull lofted from cross-sections: deck at y = 0, keel at -D, bow at +x. No UVs; flat-ish shading.
function hullGeo(L, Bm, D, sheer, n = 14) {
  const pos = [], sec = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = -L / 2 + t * L, hw = Bm / 2 * Math.pow(Math.sin(Math.PI * Math.min(1, 0.12 + t * 0.94)), 0.5), top = sheer * (2 * t - 1) ** 2;
    sec.push([[-hw, top], [-hw * 0.92, -D * 0.55], [-hw * 0.4, -D * 0.95], [0, -D], [hw * 0.4, -D * 0.95], [hw * 0.92, -D * 0.55], [hw, top]].map(([z, y]) => [x, y, z]));
  }
  const tri = (a, b, c) => pos.push(...a, ...b, ...c);
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < 6; k++) { const a = sec[i][k], b = sec[i + 1][k], c = sec[i + 1][k + 1], d = sec[i][k + 1]; tri(a, b, c); tri(a, c, d); }
    const a = sec[i][6], b = sec[i + 1][6], c = sec[i + 1][0], d = sec[i][0]; tri(a, b, c); tri(a, c, d);   // deck
  }
  const s0 = sec[0], ctr = [s0[0][0], -D * 0.4, 0];   // transom
  for (let k = 0; k < 6; k++) tri(ctr, s0[k], s0[k + 1]);
  tri(ctr, s0[6], s0[0]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
  return g;
}
const CONTAINER_COLS = [0xb3301e, 0x1d5a8a, 0xe0a526, 0x2f6a3a, 0x8a8a84, 0x6a2a5a, 0xd6862a, 0x1d7a84];
function addShip(B, x, z, L, beam, ry, hullCol) {
  const c = Math.cos(ry), s = Math.sin(ry), P = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c], deckY = 3.4;
  B.geo(CM.metal, hullGeo(L, beam, 9.5, 1.6), at(x, deckY, z, 1, 1, 1, ry), { col: hullCol });
  const put = (w, h, d, lx, y, lz, o = {}) => { const [a, b] = P(lx, lz); B.box(o.m || CM.props, w, h, d, a, y, b, Object.assign({ ry }, o)); };
  put(L * 0.84, 0.25, beam * 0.8, 0, deckY + 0.1, 0, { col: 0x5a3026 });
  const sx = -L / 2 + 11;   // the superstructure, aft
  put(12, 11, beam * 0.78, sx, deckY + 5.5, 0, { col: 0xeae6dc });
  for (const y of [deckY + 4, deckY + 7.2, deckY + 10]) put(12.1, 0.6, beam * 0.78 + 0.1, sx, y, 0, { m: CM.glow, col: 0x9fe0ff, glow: 0.9 });
  put(4, 1.2, beam + 2, sx + 3, deckY + 10.5, 0, { col: 0xeae6dc });
  const [fa, fb] = P(sx - 3, 0); B.geo(CM.props, TPL.cyl8, at(fa, deckY + 14, fb, 2.1, 6, 2.1), { col: 0xd6862a }); B.geo(CM.props, TPL.cyl8, at(fa, deckY + 17.4, fb, 2.15, 0.9, 2.15), { col: 0x1a1a1a });
  const across = Math.floor(beam * 0.78 / 2.55);
  for (let bx_ = sx + 14; bx_ < L / 2 - 10; bx_ += 12.8) for (let k = 0; k < across; k++) {
    const lz = (k - (across - 1) / 2) * 2.55, n = sri(1, 4);
    for (let h = 0; h < n; h++) put(12.2, 2.55, 2.42, bx_ + 6, deckY + 0.25 + 1.3 + h * 2.6, lz, { m: CM.metal, col: spick(CONTAINER_COLS) });
  }
}
function addJibCrane(B, x, z, ux, uz, col = 0xd09a2a) {   // a tower crane on the quay, its jib reaching out along (ux, uz)
  B.geo(CM.metal, TPL.cyl8, at(x, 7, z, 1.1, 14, 1.1), { col }); B.box(CM.metal, 4, 3, 3.2, x, 15.3, z, { col, ry: Math.atan2(-uz, ux) });
  const L = 26, a = 0.33, ry = Math.atan2(-uz, ux), h = L * Math.cos(a);
  B.box(CM.metal, L, 0.8, 0.8, x + ux * h / 2, 16 + L / 2 * Math.sin(a), z + uz * h / 2, { order: 'YXZ', ry, rz: a, col });
  const tx = x + ux * h, tz = z + uz * h, ty = 16 + L * Math.sin(a);
  B.box(CM.metal, 0.08, 12, 0.08, tx, ty - 6, tz, { col: 0x222222 }); B.box(CM.metal, 0.6, 0.8, 0.6, tx, ty - 12.4, tz, { col: 0x2b2b2b });
  addCollider(x, z, 2.6, 2.6, 16);
}
function makeDhow(sailing) {
  const g = new THREE.Group();
  const wood = mat('dhowWood', () => new THREE.MeshStandardMaterial({ color: 0x6e4a2c, roughness: 0.8 }));
  const dark = mat('dhowDark', () => new THREE.MeshStandardMaterial({ color: 0x3a2618, roughness: 0.85 }));
  const cloth = mat('dhowSail', () => new THREE.MeshStandardMaterial({ color: 0xeadfc6, roughness: 0.95, side: THREE.DoubleSide }));
  g.add(new THREE.Mesh(hullGeo(14, 3.8, 1.8, 0.9), wood));
  bx(3, 1.0, 2.6, dark, -4.2, 0.5, 0, g);                                       // the raised stern cabin
  bx(0.18, 7.5, 0.18, dark, 1.2, 3.75, 0, g);                                   // mast
  const yard = bx(11.5, 0.12, 0.12, dark, 1.2, 6.8, 0, g); yard.rotation.z = -0.42;
  if (sailing) {
    const c = Math.cos(-0.42), s = Math.sin(-0.42), fore = [1.2 + 5.6 * c, 6.8 + 5.6 * s, 0], aft = [1.2 - 5.6 * c, 6.8 - 5.6 * s, 0], foot = [-3.6, 1.2, 0], belly = [0.2, 4.0, 0.9];
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute([...fore, ...aft, ...belly, ...aft, ...foot, ...belly, ...foot, ...fore, ...belly], 3)); sg.computeVertexNormals();
    g.add(new THREE.Mesh(sg, cloth));
  } else { const furl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 10, 6), cloth); furl.rotation.z = Math.PI / 2 - 0.42; furl.position.set(1.2, 6.55, 0); g.add(furl); }
  compactRig(g);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData.dynamic = true;
  return g;
}
function buildFerry(S) {
  const F = FERRY, g = new THREE.Group(), L = F.HL * 2, Wd = F.HW * 2;
  g.position.set(F.x, 0, F.z); g.userData.dynamic = true;
  const hullM = mat('ferryHull', () => new THREE.MeshStandardMaterial({ color: 0x1f3047, metalness: 0.3, roughness: 0.5 }));
  const whiteM = mat('ferryWhite', () => new THREE.MeshStandardMaterial({ color: 0xe9e5da, roughness: 0.55 }));
  const deckM = mat('ferryDeck', () => new THREE.MeshStandardMaterial({ map: planksTex(), roughness: 0.75 }));
  const seatM = mat('ferrySeat', () => new THREE.MeshStandardMaterial({ color: 0x8a5a32, roughness: 0.7 })), railM = armorMat(0x2b323b);
  bx(L, 2.6, Wd, hullM, 0, -1.42, 0, g);
  bx(L + 0.1, 0.55, Wd + 0.1, whiteM, 0, -0.4, 0, g);
  bx(L - 0.4, 0.1, Wd - 0.4, deckM, 0, -0.04, 0, g);
  for (const s of [-1, 1]) {
    bx(L + 0.12, 0.12, 0.06, glowMat(0x3ee6ff, 2.6), 0, -0.95, s * (F.HW + 0.05), g);                 // Concord trim
    bx(L - 1, 0.08, 0.08, railM, 0, 1.05, s * (F.HW - 0.25), g); bx(L - 1, 0.06, 0.06, railM, 0, 0.55, s * (F.HW - 0.25), g);
    for (let x = -F.HL + 0.6; x <= F.HL - 0.5; x += 2) bx(0.07, 1.05, 0.07, railM, x, 0.52, s * (F.HW - 0.25), g);
    for (const x of [-8, -2.7, 2.7, 8]) bx(0.22, 3.2, 0.22, whiteM, x, 1.6, s * (F.HW - 0.7), g);
    for (const x of [-5.4, 0, 5.4]) { bx(3.6, 0.1, 0.5, seatM, x, 0.46, s * 2.2, g); bx(3.6, 0.45, 0.08, seatM, x, 0.72, s * 2.48, g); bx(0.1, 0.46, 0.4, railM, x - 1.6, 0.23, s * 2.2, g); bx(0.1, 0.46, 0.4, railM, x + 1.6, 0.23, s * 2.2, g); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.09, 6, 14), glowMat(0xff7a2a, 1.2)); ring.position.set(s * 12, 0.75, s * (F.HW - 0.2)); g.add(ring);
  }
  bx(17, 0.28, Wd - 0.6, whiteM, 0, 3.3, 0, g);                                                       // passenger canopy
  bx(6, 2.3, 6.4, whiteM, 0, 4.6, 0, g); bx(6.08, 0.7, 6.48, glowMat(0x9fe0ff, 1.3), 0, 5.05, 0, g); bx(6.6, 0.2, 7, hullM, 0, 5.85, 0, g);   // wheelhouse
  bx(0.14, 3, 0.14, railM, 0, 7.4, 0, g); bx(0.3, 0.3, 0.3, glowMat(0xff3355, 3), 0, 8.9, 0, g);
  const nameTex = textTex(512, 96, '#1f3047', [{ t: 'TALINA', y: 52, c: '#e8c46a', f: 'bold 64px Georgia, serif' }]);
  const nameM = new THREE.MeshStandardMaterial({ map: nameTex, emissive: 0xffffff, emissiveMap: nameTex, emissiveIntensity: 0.3 });
  for (const s of [-1, 1]) { const nb = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.95), nameM); nb.position.set(0, 2.82, s * (F.HW - 0.62)); nb.rotation.y = s > 0 ? 0 : Math.PI; g.add(nb); }
  for (const [side, s] of [['w', -1], ['e', 1]]) {   // the ramps, lowered at whichever pier she's alongside
    const r = new THREE.Group(); r.position.set(s * F.HL, 0.03, 0); g.add(r);
    bx(3.6, 0.12, Wd - 2.2, railM, s * 1.8, -0.04, 0, r); bx(3.6, 0.03, 0.2, glowMat(0x3ee6ff, 2.2), s * 1.8, 0.03, (F.HW - 1.2), r); bx(3.6, 0.03, 0.2, glowMat(0x3ee6ff, 2.2), s * 1.8, 0.03, -(F.HW - 1.2), r);
    r.rotation.z = s * 1.2; F.ramps[side] = r;
  }
  compactRig(g);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  S.add(g); F.group = g;
}
function buildHarbour(S, B) {
  const stone = 0x7a6c58, cope = 0xcdbb98, F = FERRY;
  // the sea, out to the horizon, filling the basin
  const seaGeo = new THREE.PlaneGeometry(6000, 3400), uv = seaGeo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 6000, uv.getY(i) * 3400);   // UVs in metres, like the rest of the water
  const sea = new THREE.Mesh(seaGeo, CM.water); sea.rotation.x = -Math.PI / 2; sea.position.set(0, -0.9, BASIN.z0 - 10 + 1700); sea.receiveShadow = true; sea.userData.dynamic = true; S.add(sea); W.sea = sea;
  // the quays: paved aprons, stone walls down to the water, coping, bollards and fenders
  B.rect(CM.pave, BASIN.x0, HARBOUR.z0, BASIN.x1, BASIN.z0, 0.016);
  B.rect(CM.pave, HARBOUR.x0, HARBOUR.z0, BASIN.x0, COAST_Z, 0.016); B.rect(CM.pave, BASIN.x1, HARBOUR.z0, HARBOUR.x1, COAST_Z, 0.016);
  const wall = (x0, z0, x1, z1) => B.box(CM.props, x1 - x0, 4, z1 - z0, (x0 + x1) / 2, -2.02, (z0 + z1) / 2, { col: stone, top: null });
  wall(BASIN.x0, BASIN.z0 - 1, BASIN.x1, BASIN.z0); wall(BASIN.x0 - 1, BASIN.z0, BASIN.x0, COAST_Z); wall(BASIN.x1, BASIN.z0, BASIN.x1 + 1, COAST_Z);
  for (const sx of [-1, 1]) for (let k = 0; k < 4; k++) { const a = 204 + k * 330, b = a + 330; wall(sx < 0 ? -b : a, COAST_Z - 1, sx < 0 ? -a : b, COAST_Z); }
  for (const M of MOLES) B.box(CM.props, M.x1 - M.x0, 4, M.z1 - M.z0, (M.x0 + M.x1) / 2, -2, (M.z0 + M.z1) / 2, { col: stone, top: CM.pave });
  const coping = (x0, z0, x1, z1) => B.box(CM.props, x1 - x0, 0.14, z1 - z0, (x0 + x1) / 2, 0.07, (z0 + z1) / 2, { col: cope });
  coping(BASIN.x0, BASIN.z0 - 0.7, BASIN.x1, BASIN.z0); coping(BASIN.x0 - 0.7, BASIN.z0, BASIN.x0, COAST_Z); coping(BASIN.x1, BASIN.z0, BASIN.x1 + 0.7, COAST_Z);
  coping(HARBOUR.x0, COAST_Z - 0.7, MOLES[0].x0, COAST_Z); coping(MOLES[1].x1, COAST_Z - 0.7, HARBOUR.x1, COAST_Z);
  for (const M of MOLES) { coping(M.x0, M.z0, M.x0 + 0.6, M.z1); coping(M.x1 - 0.6, M.z0, M.x1, M.z1); coping(M.x0, M.z1 - 0.6, M.x1, M.z1); }
  const bollard = (x, z) => { B.geo(CM.metal, TPL.cyl8, at(x, 0.35, z, 0.26, 0.7, 0.26), { col: 0x23262a }); B.geo(CM.metal, TPL.cyl8, at(x, 0.72, z, 0.34, 0.1, 0.34), { col: 0x23262a }); };
  const fender = (x, z, ry) => B.geo(CM.props, TPL.torus, at(x, -0.55, z, 0.45, 0.45, 0.45, ry), { col: 0x1a1a1a });
  for (let x = BASIN.x0 + 8; x < BASIN.x1 - 4; x += 12) { bollard(x, BASIN.z0 - 1.2); fender(x + 6, BASIN.z0 + 0.25, 0); }
  for (const sx of [-1, 1]) for (let z = BASIN.z0 + 10; z < COAST_Z - 2; z += 12) { if (Math.abs(z - F.z) < 9) continue; bollard(sx * (BASIN.x1 + 1.2), z); fender(sx * (BASIN.x1 - 0.25), z + 6, Math.PI / 2); }
  // water's edge: invisible low walls, so nobody walks into the sea (the camera passes over them)
  const wc = (x0, z0, x1, z1) => G.colliders.push({ minX: x0, maxX: x1, minZ: z0, maxZ: z1, h: 1 });
  wc(BASIN.x0, BASIN.z0, BASIN.x1, BASIN.z0 + 4);
  for (const sx of [-1, 1]) {
    const qa = sx < 0 ? BASIN.x0 : BASIN.x1 - 4, qb = qa + 4;
    wc(qa, BASIN.z0, qb, F.z - 5.5); wc(qa, F.z + 5.5, qb, MOLES[0].z1 + 4);                       // basin sides, gap at the ferry berth
    wc(sx < 0 ? -1500 : MOLES[1].x1, COAST_Z, sx < 0 ? MOLES[0].x0 : 1500, COAST_Z + 4);           // the shore
    const M = MOLES[sx < 0 ? 0 : 1];
    wc(sx < 0 ? M.x0 - 4 : M.x1, M.z0, sx < 0 ? M.x0 : M.x1 + 4, M.z1 + 4); wc(M.x0 - 4, M.z1, M.x1 + 4, M.z1 + 4);   // the moles
  }
  // the berths: the water between the quay and the ferry, closed off whenever she isn't alongside
  F.gapW = { minX: BASIN.x0, maxX: BASIN.x0 + 4, minZ: F.z - 5.5, maxZ: F.z + 5.5, h: 1 }; F.gapE = { minX: BASIN.x1 - 4, maxX: BASIN.x1, minZ: F.z - 5.5, maxZ: F.z + 5.5, h: 1 };
  G.colliders.push(F.gapW, F.gapE);
  // ferry terminals at both piers, a covered walk down to the berth, a timetable at the quay edge
  for (const sx of [-1, 1]) {
    const side = sx < 0 ? 'w' : 'e', hx = sx * 231, ex = sx * 216;
    B.box(CM.fac.white, 30, 10, 50, hx, 5, F.z, { uv: 'facade', top: CM.props, topCol: ROOF }); parapet(B, 30, 50, hx, 10, F.z); addCollider(hx, F.z, 30.4, 50.4, 13);
    B.box(CM.shop, 0.3, 4.4, 50.2, ex, 2.2, F.z, { uv: { rep: 8, v0: SHOPV[3][0], v1: SHOPV[3][1] }, top: CM.props, topCol: 0xcdb894 });
    B.box(CM.metal, 25, 0.3, 16, sx * 203.5, 5.6, F.z, { col: 0xd9d2c0 }); B.box(CM.glow, 25, 0.1, 0.12, sx * 203.5, 5.4, F.z - 8, { col: 0x3ee6ff, glow: 2.2 }); B.box(CM.glow, 25, 0.1, 0.12, sx * 203.5, 5.4, F.z + 8, { col: 0x3ee6ff, glow: 2.2 });
    for (const x of [195, 205, 214]) for (const s of [-1, 1]) { B.box(CM.metal, 0.3, 5.5, 0.3, sx * x, 2.75, F.z + s * 7.7, { col: 0xd9d2c0 }); addCollider(sx * x, F.z + s * 7.7, 0.45, 0.45, 5.5); }
    B.box(CM.glow, 0.3, 0.02, 11, sx * (BASIN.x1 + 0.5), 0.02, F.z, { col: 0x3ee6ff, glow: 1.8 });   // the boarding line
    const sign = textTex(1024, 256, '#0b1118', [{ t: 'CONCORD FERRY', y: 92, c: '#3ee6ff', f: 'bold 110px Bahnschrift, sans-serif' }, { t: sx < 0 ? 'WEST PIER  ·  TO THE EAST PIER' : 'EAST PIER  ·  TO THE WEST PIER', y: 196, c: '#e8c46a', f: '56px Bahnschrift, sans-serif' }]);
    const sm = new THREE.Mesh(new THREE.PlaneGeometry(16, 4), new THREE.MeshStandardMaterial({ map: sign, emissive: 0xffffff, emissiveMap: sign, emissiveIntensity: 0.6 }));
    sm.position.set(ex - sx * 0.2, 7.6, F.z); sm.rotation.y = -sx * Math.PI / 2; W.scene.add(sm);
    const kx = sx * 197, kz = F.z - 11;
    B.box(CM.metal, 0.9, 2.2, 0.5, kx, 1.1, kz, { col: 0x1d2228 }); B.box(CM.glow, 0.7, 0.9, 0.04, kx, 1.5, kz + 0.27, { col: 0x3ee6ff, glow: 1.4 });
    addCollider(kx, kz, 1.0, 0.6, 2.4);
    G.props.push({ kind: 'ferry', id: 'ferry', side, name: 'Ferry Timetable', pos: new V3(kx, 0, kz + 1.2) });
  }
  // west quay: warehouses and moored dhows; east quay: a container yard, a gantry crane and a ship alongside
  for (const z of [700, 734]) { B.box(CM.props, 28, 11, 30, -231, 5.5, z, { col: 0x8d7d68, topCol: 0x5a5048 }); B.box(CM.props, 0.3, 7, 10, -216.9, 3.5, z, { col: 0x4a3a2e }); addCollider(-231, z, 28.4, 30.4, 13); }
  for (const z of [680, 696, 712, 728, 744]) { B.box(CM.props, 2.2, 1.6, 1.6, -206, 0.8, z, { col: 0x7a5232 }); B.box(CM.props, 1.6, 1.4, 1.6, -206, 2.3, z + 0.3, { col: 0x4f6a7a }); addCollider(-206, z, 2.4, 2.4, 3); }
  for (let z = 678; z < 754; z += 2.7) for (const cx of [221, 235]) { const n = sri(1, 4); for (let h = 0; h < n; h++) B.box(CM.metal, 12.2, 2.55, 2.42, cx, 1.3 + h * 2.6, z, { col: spick(CONTAINER_COLS) }); }
  addCollider(228, 716, 28.6, 80, 11);
  const crane = 0xc8502a;
  for (const lx of [194, 212]) for (const lz of [700, 716]) { B.box(CM.metal, 1.3, 32, 1.3, lx, 16, lz, { col: crane }); addCollider(lx, lz, 1.5, 1.5, 32); }
  for (const lz of [700, 716]) { B.box(CM.metal, 84, 2.2, 1.4, 190, 33, lz, { col: crane }); B.box(CM.metal, 18.6, 1, 1, 203, 8, lz, { col: crane }); }
  for (const lx of [194, 212]) B.box(CM.metal, 1.3, 1.3, 17.4, lx, 31, 708, { col: crane });
  B.box(CM.metal, 7, 5, 8, 226, 36.5, 708, { col: 0xe9e5da }); B.box(CM.metal, 6, 3, 17, 168, 31, 708, { col: 0x3a3f46 });
  for (const s of [-1, 1]) B.box(CM.metal, 0.08, 12, 0.08, 168, 24, 708 + s * 3, { col: 0x222222 });
  B.box(CM.metal, 12.2, 2.55, 2.42, 168, 17, 708, { col: 0x1d5a8a, ry: Math.PI / 2 });
  addShip(B, 176, 716, 76, 14, -Math.PI / 2, 0x23324a);
  // north quay: the fish market, the Port Authority with its clock tower, the anchor, and two jib cranes
  const fmx0 = -176, fmx1 = -70, fmz = 538, fmL = fmx1 - fmx0, fmc = (fmx0 + fmx1) / 2;
  for (const s of [-1, 1]) B.box(CM.metal, fmL, 0.25, 14.6, fmc, 7.9, fmz + s * 6.6, { rx: s * 0.2, col: 0x8a9aa4 });
  for (let x = fmx0 + 1; x <= fmx1 - 1; x += fmL / 10) for (const s of [-1, 1]) { B.box(CM.metal, 0.4, 7.4, 0.4, x, 3.7, fmz + s * 12.6, { col: 0x5a6470 }); addCollider(x, fmz + s * 12.6, 0.5, 0.5, 7.5); }
  for (let x = fmx0 + 4; x < fmx1 - 3; x += 4.6) { if (sch(0.9)) addStall(B, x, fmz - 6.5, 0, 'fish'); if (sch(0.9)) addStall(B, x, fmz + 6.5, Math.PI, 'fish'); }
  for (let x = fmx0 + 6; x < fmx1; x += 10) B.box(CM.glow, 0.5, 0.2, 0.5, x, 6.2, fmz, { col: 0xffe2b0, glow: 2.2 });
  const fishSign = textTex(1024, 192, '#1d3b4a', [{ t: 'FISH MARKET', y: 100, c: '#f2ece0', f: 'bold 108px Georgia, serif' }]);
  for (const sx of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.9), new THREE.MeshStandardMaterial({ map: fishSign, emissive: 0xffffff, emissiveMap: fishSign, emissiveIntensity: 0.3 })); m.position.set(sx < 0 ? fmx0 - 0.3 : fmx1 + 0.3, 8.2, fmz); m.rotation.y = sx * Math.PI / 2; W.scene.add(m); }
  B.box(CM.fac.sand, 56, 15, 26, 88, 7.5, 537, { uv: 'facade', top: CM.props, topCol: ROOF }); parapet(B, 56, 26, 88, 15, 537); addCollider(88, 537, 56.4, 26.4, 18);
  B.box(CM.fac.sand, 10, 34, 10, 121, 17, 537, { uv: 'facade', top: CM.props, topCol: ROOF }); addCollider(121, 537, 10.4, 10.4, 36);
  B.geo(CM.props, TPL.dome, at(121, 34, 537, 4.4), { col: 0x5fa3a8 }); B.geo(CM.props, TPL.cyl16, at(121, 34.4, 537, 4.6, 0.8, 4.6), { col: TRIM });
  const clock = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#f2ece0'; g.beginPath(); g.arc(w / 2, h / 2, 120, 0, 7); g.fill(); g.strokeStyle = '#2a1a10'; g.lineWidth = 8; g.stroke();
    g.fillStyle = '#2a1a10'; for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; g.fillRect(w / 2 + Math.cos(a) * 100 - 4, h / 2 + Math.sin(a) * 100 - 4, 8, 8); }
    g.lineWidth = 10; g.beginPath(); g.moveTo(w / 2, h / 2); g.lineTo(w / 2 + 50, h / 2 - 30); g.stroke(); g.lineWidth = 6; g.beginPath(); g.moveTo(w / 2, h / 2); g.lineTo(w / 2 - 10, h / 2 - 90); g.stroke();
  });
  clock.wrapS = clock.wrapT = THREE.ClampToEdgeWrapping;
  const clockM = new THREE.MeshStandardMaterial({ map: clock, emissive: 0xffffff, emissiveMap: clock, emissiveIntensity: 0.25, transparent: false });
  for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2, m = new THREE.Mesh(new THREE.CircleGeometry(3.2, 32), clockM); m.position.set(121 + Math.sin(a) * 5.06, 28, 537 + Math.cos(a) * 5.06); m.rotation.y = a; W.scene.add(m); }
  const portSign = textTex(1024, 160, '#2a1a10', [{ t: 'PORT OF AD-NOSTRA', y: 86, c: '#f0c46a', f: 'bold 88px Georgia, serif' }]);
  const ps = new THREE.Mesh(new THREE.PlaneGeometry(24, 3.75), new THREE.MeshStandardMaterial({ map: portSign, emissive: 0xffffff, emissiveMap: portSign, emissiveIntensity: 0.3 })); ps.position.set(84, 11, 550.08); W.scene.add(ps);
  // the anchor, on its plinth where the Harbour Road reaches the water
  const AX = -50;
  B.box(CM.props, 4.4, 1.4, 4.4, AX, 0.7, 540, { col: 0xc9b48e }); addCollider(AX, 540, 4.6, 4.6, 9);
  const bronze = 0x7a5a32;
  B.box(CM.metal, 0.55, 6.4, 0.55, AX, 4.6, 540, { col: bronze }); B.box(CM.metal, 4.2, 0.45, 0.45, AX, 7.2, 540, { col: bronze });
  B.geo(CM.metal, TPL.torus, at(AX, 8.2, 540, 0.65, 0.65, 0.65), { col: bronze });
  const arms = new THREE.TorusGeometry(2.2, 0.28, 6, 14, Math.PI); arms.rotateZ(Math.PI);
  B.geo(CM.metal, arms, at(AX, 3.6, 540), { col: bronze });
  for (const s of [-1, 1]) B.geo(CM.metal, TPL.cone6, at(AX + s * 2.2, 3.9, 540, 0.45, 1.1, 0.25, 0, 0, -s * 0.5), { col: bronze });
  addJibCrane(B, 150, 556, 0, 1); addJibCrane(B, 182, 556, 0, 1, 0xc8502a);
  for (let k = 0; k < 9; k++) { const x = 132 + (k % 3) * 9, z = 526 + Math.floor(k / 3) * 7; const n = sri(1, 3); for (let h = 0; h < n; h++) B.box(CM.props, 1.7, 1.6, 1.7, x, 0.8 + h * 1.6, z, { col: sch(0.5) ? 0x7a5232 : 0x4f6a7a, ry: sr(-0.2, 0.2) }); addCollider(x, z, 2, 2, n * 1.6); }
  addShip(B, -118, 576, 100, 18, 0, 0x5a2420); addShip(B, 52, 576, 86, 16, Math.PI, 0x23324a);
  for (const x of [-150, -90, 20, 80]) B.box(CM.props, 0.12, 0.12, 10, x, 1.6, 562, { col: 0x3a2a1e, rx: -0.32 });   // mooring lines
  for (let x = BASIN.x0 + 20; x < BASIN.x1; x += 32) if (Math.abs(x - CONC.x) > 38) addLamp(B, x, 522, 0, 1);
  for (const sx of [-1, 1]) for (let z = 580; z < COAST_Z - 4; z += 36) if (Math.abs(z - F.z) > 14) addLamp(B, sx * (BASIN.x1 + 2.5), z, -sx, 0);
  // the moles, a beacon on the west one and the lighthouse on the east
  for (const M of MOLES) for (let z = M.z0 + 16; z < M.z1 - 14; z += 26) addLamp(B, (M.x0 + M.x1) / 2, z, 0, 1);
  const bx_ = (MOLES[0].x0 + MOLES[0].x1) / 2, bz = MOLES[0].z1 - 6;
  B.geo(CM.props, TPL.cyl8, at(bx_, 3, bz, 1.4, 6, 1.4), { col: 0x2f6a3a }); B.geo(CM.glow, TPL.oct, at(bx_, 6.8, bz, 0.6, 0.9, 0.6), { col: 0x6dff9a, glow: 3 }); addCollider(bx_, bz, 3, 3, 7);
  const lx = (MOLES[1].x0 + MOLES[1].x1) / 2, lz = MOLES[1].z1 - 8;
  for (let k = 0; k < 5; k++) B.geo(CM.props, TPL.cyl16, at(lx, 2.5 + k * 5, lz, 3.3 - k * 0.16, 5, 3.3 - k * 0.16), { col: k % 2 ? 0xb3301e : 0xf2efe6 });
  B.geo(CM.metal, TPL.cyl16, at(lx, 25.2, lz, 3.6, 0.4, 3.6), { col: 0x2b323b }); B.geo(CM.glow, TPL.cyl8, at(lx, 26.9, lz, 1.5, 2.8, 1.5), { col: 0xffd890, glow: 2.6 });
  B.geo(CM.metal, TPL.cone8, at(lx, 29.2, lz, 2.2, 1.8, 2.2), { col: 0x2b323b }); addCollider(lx, lz, 7, 7, 30);
  const beamM = new THREE.MeshBasicMaterial({ color: 0xffe2a8, transparent: true, opacity: 0.09, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const beam = new THREE.Group(); beam.position.set(lx, 26.9, lz); beam.userData.dynamic = true;
  for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.ConeGeometry(6, 150, 16, 1, true), beamM); c.rotation.z = s * Math.PI / 2; c.position.x = s * 75; beam.add(c); }
  S.add(beam); W.lightBeam = beam;
  // boats: dhows moored along the west quay, and a few under sail out in the bay
  W.boats = [];
  for (const z of [688, 706, 724, 742]) { const d = makeDhow(false); d.position.set(BASIN.x0 + 4.6, -0.55, z); d.rotation.y = sch(0.5) ? Math.PI / 2 : -Math.PI / 2; S.add(d); W.boats.push({ g: d, ph: sr(0, 6) }); }
  for (let k = 0; k < 4; k++) { const d = makeDhow(true); S.add(d); W.boats.push({ g: d, ph: sr(0, 6), sail: { cx: sr(-200, 200), cz: sr(1000, 1080), rx: sr(220, 340), rz: sr(60, 110), w: sr(0.008, 0.014) * (sch(0.5) ? 1 : -1), a: sr(0, 6.28) } }); }
  buildFerry(S);
}
function openFerry(side) {
  const st = ferryState(G.time), here = side === 'w' ? 'West Pier' : 'East Pier', there = side === 'w' ? 'East Pier' : 'West Pier', wait = ferryWait(side);
  const text = st.docked === side ? `The Talina is alongside. Walk aboard across the ramp; she sails for the ${there} in ${fmtTime(st.left)}.\n\nStand anywhere on her deck and she carries you across the harbour.`
    : st.docked ? `The Talina is boarding at the ${there}. She'll be back alongside here in ${fmtTime(wait)}.`
      : st.to === side ? `The Talina is crossing toward this pier and comes alongside in ${fmtTime(st.left)}.` : `The Talina has left for the ${there}. She'll be back alongside here in ${fmtTime(wait)}.`;
  dialog('CONCORD FERRY', here.toUpperCase(), '', text + '\n\nThe ferry runs all day between the West and East Piers of the Harbour, no fare.', '', [{ label: 'CLOSE', fn: closeAllUI }]);
}
function setGap(c, a, b) { if (b - a < 0.3) { c.minX = 1e9; c.maxX = -1e9; } else { c.minX = a; c.maxX = b; } }
// Moves the Talina, carries whoever is aboard, keeps them inside her rails, and fishes anyone out of the water.
function updateFerry(dt) {
  const F = FERRY; if (!F.group) return;
  const st = ferryState(G.time), prevX = F.x, dx = st.x - prevX; F.x = st.x; F.st = st;
  F.group.position.x = F.x; F.group.position.y = Math.sin(G.time * 0.9) * 0.025; F.group.rotation.x = Math.sin(G.time * 0.7) * 0.004;
  for (const side of ['w', 'e']) { const r = F.ramps[side], want = st.docked === side ? 0 : (side === 'w' ? -1.2 : 1.2); r.rotation.z += (want - r.rotation.z) * Math.min(1, dt * 2.2); }
  setGap(F.gapW, BASIN.x0, Math.min(BASIN.x0 + 4, F.x - F.HL)); setGap(F.gapE, Math.max(BASIN.x1 - 4, F.x + F.HL), BASIN.x1);
  const P = G.P, ents = [P, ...G.bots];
  for (const e of ents) {
    if (!e || !e.pos || (e !== P && !e.alive)) { F.aboard.delete(e); continue; }
    const lx = e.pos.x - prevX, lz = e.pos.z - F.z;
    let on = F.aboard.has(e);
    if (!on && Math.abs(lx) <= F.HL && Math.abs(lz) <= F.HW) { F.aboard.add(e); on = true; }
    else if (on && (Math.abs(lx) > F.HL + 4 || Math.abs(lz) > F.HW + 4)) { F.aboard.delete(e); on = false; }   // left by tram, or fell over
    if (on && ((st.docked === 'w' && lx < -F.HL) || (st.docked === 'e' && lx > F.HL))) { F.aboard.delete(e); on = false; }   // walked off down the ramp
    if (on) {
      const lim = F.HL - 0.6;
      e.pos.x = F.x + clamp(lx, st.docked === 'w' ? -F.HL : -lim, st.docked === 'e' ? F.HL : lim);
      e.pos.z = F.z + clamp(lz, -(F.HW - 0.8), F.HW - 0.8);
      if (e.group) { e.group.position.x = e.pos.x; e.group.position.z = e.pos.z; }
      continue;
    }
    // not aboard and in the water: back to where they last stood on dry land
    if (isWaterPt(e.pos.x, e.pos.z)) {
      if (e.lastLand) { e.pos.x = e.lastLand.x; e.pos.z = e.lastLand.z; } else { e.pos.z = Math.min(e.pos.z, BASIN.z0 - 1); }
      if (e === P) P.vel.set(0, 0, 0);
      if (e.group) { e.group.position.x = e.pos.x; e.group.position.z = e.pos.z; }
    } else (e.lastLand || (e.lastLand = new V3())).set(e.pos.x, 0, e.pos.z);
  }
  // your companions come aboard with you
  if (P && F.aboard.has(P)) for (const b of partyList()) if (b.alive && !F.aboard.has(b) && (d2(b.pos, P.pos) > 9 || isWaterPt(b.pos.x, b.pos.z))) {
    const o = partyOffset(b); b.pos.set(F.x + clamp(P.pos.x + o.x - F.x, -F.HL + 1.5, F.HL - 1.5), 0, F.z + clamp(P.pos.z + o.z - F.z, -F.HW + 1.2, F.HW - 1.2));
    b.group.position.copy(b.pos); b.path = []; F.aboard.add(b); burst(b.pos.clone().setY(1), 0x3ee6ff, 14, 2);
  }
  // harbour announcements, if you are near enough to hear them
  const key = st.docked || 'to' + st.to;
  if (key !== F.lastKey) {
    if (F.lastKey && P && (G.zone === 'harbour' || d2(P.pos, { x: F.x, z: F.z }) < 300)) {
      if (st.docked) addChat('zone', null, `The ferry Talina is alongside at the ${st.docked === 'w' ? 'West' : 'East'} Pier. She sails for the ${st.docked === 'w' ? 'East' : 'West'} Pier in ${Math.round(st.left)} seconds.`);
      else addChat('zone', null, `The Talina casts off for the ${st.to === 'e' ? 'East' : 'West'} Pier.`);
    }
    F.lastKey = key;
  }
}
function updateHarbour(dt) {
  const t = G.time;
  if (CM.water) CM.water.normalMap.offset.set(t * 0.012, t * 0.007);
  if (W.lightBeam) W.lightBeam.rotation.y = t * 0.45;
  const cp = W.cam.position;
  for (const b of W.boats || []) {
    const g = b.g;
    if (b.sail) {   // round an ellipse in the bay, bow along the way she's going
      const s = b.sail; s.a += s.w * dt; const vx = -Math.sin(s.a) * s.rx * s.w, vz = Math.cos(s.a) * s.rz * s.w;
      g.position.set(s.cx + Math.cos(s.a) * s.rx, -0.55, s.cz + Math.sin(s.a) * s.rz); g.rotation.y = Math.atan2(-vz, vx);
    }
    if (Math.abs(g.position.x - cp.x) + Math.abs(g.position.z - cp.z) > 700) continue;
    g.position.y = -0.55 + Math.sin(t * 1.1 + b.ph) * 0.08; g.rotation.z = Math.sin(t * 0.8 + b.ph) * 0.03; g.rotation.x = Math.sin(t * 0.6 + b.ph * 2) * 0.02;
  }
  updateFerry(dt);
}

// =====================================================================
//  CITY LIFE: townsfolk on the pavements, in the market and on the quays; traffic in the sky lanes
// =====================================================================
// The walkers follow the pavements and zebra crossings of the street grid, and only ever within a
// couple of hundred metres of you: when one falls too far behind, they turn up again somewhere ahead
// (out of sight, or far enough off to be lost in the haze). The rest browse the market, wander the
// quays and the promenade, or ride the ferry. All of them together are three instanced draw calls.
const LIFE = { edges: [], cells: new Map(), people: [], cars: [], mesh: null, carMesh: null };
const LIFE_CELL = 128, LIFE_R = 165;
function buildWalkGraph(pieces, inters) {
  const nodes = new Map(), key = (x, z) => Math.round(x * 2) + ',' + Math.round(z * 2);
  const node = (x, z, make = true) => { const k = key(x, z); let n = nodes.get(k); if (!n && make) nodes.set(k, n = { x, z, e: [] }); return n; };
  const link = (a, b) => {
    if (!a || !b || a === b || a.e.includes(b)) return;
    a.e.push(b); b.e.push(a);
    const E = [a, b], ck = Math.floor((a.x + b.x) / 2 / LIFE_CELL) + ',' + Math.floor((a.z + b.z) / 2 / LIFE_CELL);
    LIFE.edges.push(E); if (!LIFE.cells.has(ck)) LIFE.cells.set(ck, []); LIFE.cells.get(ck).push(E);
  };
  for (const p of pieces) for (const sd of [-1, 1]) {   // along each pavement, corner to corner
    const o = p.c + sd * (p.hw + 1.5), e0 = p.s0 + (p.t0 ? 1.5 : 0.5), e1 = p.s1 - (p.t1 ? 1.5 : 0.5);
    if (e1 - e0 > 2) link(p.fx ? node(o, e0) : node(e0, o), p.fx ? node(o, e1) : node(e1, o));
  }
  for (const I of inters.values()) {   // and over the zebra crossings
    const c = (sx, sz) => node(I.x + sx * (I.hx + 1.5), I.z + sz * (I.hz + 1.5), false);
    if (I.n) link(c(-1, -1), c(1, -1)); if (I.s) link(c(-1, 1), c(1, 1));
    if (I.w) link(c(-1, -1), c(-1, 1)); if (I.e) link(c(1, -1), c(1, 1));
  }
}
// places people potter about in: [rect, share of the crowd]. A rect with ferry: true is on the Talina's deck.
const MILL = [
  [{ x0: -6, x1: 6, z0: 82, z1: 148 }, 9], [{ x0: -54, x1: 54, z0: 93, z1: 101 }, 8], [{ x0: -54, x1: 54, z0: 110.5, z1: 116 }, 5], [{ x0: -54, x1: 54, z0: 124.5, z1: 130 }, 5],
  [{ x0: -54, x1: 54, z0: 138.5, z1: 144 }, 4], [{ x0: -7, x1: 7, z0: 33, z1: 45 }, 3],
  [{ x0: -60, x1: 50, z0: 525, z1: 557 }, 6], [{ x0: -172, x1: -74, z0: 535.5, z1: 540.5 }, 5], [{ x0: -214, x1: -194, z0: 572, z1: 626 }, 3], [{ x0: 194, x1: 212, z0: 572, z1: 626 }, 3],
  [{ x0: -530, x1: -262, z0: 738, z1: 756 }, 3], [{ x0: 262, x1: 530, z0: 738, z1: 756 }, 3], [{ x0: -14, x1: 14, z0: -4.4, z1: 4.4, ferry: true }, 5],
];
function buildPeople(S) {
  const g = citizenGeos(), N = TOUCH ? 130 : 260, nMill = Math.round(N * 0.32);
  const mk = (geo, rough) => { const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: rough }), N); m.frustumCulled = false; m.castShadow = true; m.receiveShadow = true; m.userData.dynamic = true; S.add(m); return m; };
  LIFE.mesh = [mk(g.body, 0.92), mk(g.head, 0.6), mk(g.wrap, 0.9)];
  const total = MILL.reduce((a, m) => a + m[1], 0), c = new THREE.Color(), areas = [];
  for (const [R, w] of MILL) for (let k = 0; k < Math.max(1, Math.round(w / total * nMill)); k++) areas.push(R);
  for (let i = 0; i < N; i++) {
    const area = i < areas.length ? areas[i] : null;
    const p = { i, s: rand(0.92, 1.08), ph: rand(0, 6.28), sp: rand(1.05, 1.55), pos: new V3(0, -50, 0), yaw: rand(0, 6.28), area, a: null, b: null, t: 0, len: 1, off: rand(-0.7, 0.7), wait: rand(0, 4), tgt: new V3(), loc: new V3(), retry: 0 };
    if (area) { millPick(p); p.loc.copy(p.tgt); p.pos.set(p.loc.x + (area.ferry ? FERRY.x : 0), 0, p.loc.z + (area.ferry ? FERRY.z : 0)); }
    _pm.compose(p.pos, _pq.identity(), _ps.setScalar(area ? p.s : 0));   // walkers stay hidden until they first appear near you
    for (const m of LIFE.mesh) m.setMatrixAt(i, _pm);
    LIFE.mesh[0].setColorAt(i, c.setHex(pick(ROBES))); LIFE.mesh[1].setColorAt(i, c.setHex(pick(SKINS))); LIFE.mesh[2].setColorAt(i, c.setHex(pick(WRAPS)));
    LIFE.people.push(p);
  }
  for (const m of LIFE.mesh) { m.instanceColor.needsUpdate = true; m.instanceMatrix.needsUpdate = true; }
}
function millPick(p) { const R = p.area; p.tgt.set(rand(R.x0, R.x1), 0, rand(R.z0, R.z1)); }
// somewhere on the pavements near you for a walker to appear: behind the camera, or far enough off to be hazy
function spawnWalker(p, first) {
  const P = G.P, cx0 = Math.floor((P.pos.x - LIFE_R) / LIFE_CELL), cx1 = Math.floor((P.pos.x + LIFE_R) / LIFE_CELL), cz0 = Math.floor((P.pos.z - LIFE_R) / LIFE_CELL), cz1 = Math.floor((P.pos.z + LIFE_R) / LIFE_CELL);
  const lists = [];
  for (let x = cx0; x <= cx1; x++) for (let z = cz0; z <= cz1; z++) { const l = LIFE.cells.get(x + ',' + z); if (l) lists.push(l); }
  if (!lists.length) return false;
  const fx = -Math.sin(G.cam.yaw), fz = -Math.cos(G.cam.yaw);
  for (let k = 0; k < 14; k++) {
    const l = pick(lists), E = pick(l), t = Math.random(), x = E[0].x + (E[1].x - E[0].x) * t, z = E[0].z + (E[1].z - E[0].z) * t, dx = x - P.pos.x, dz = z - P.pos.z, d = Math.hypot(dx, dz);
    if (d > LIFE_R) continue;
    if (!first && d < 110 && (dx * fx + dz * fz) / (d || 1) > -0.2) continue;   // never pop in where you can see it
    const fwd = Math.random() < 0.5;
    p.a = fwd ? E[0] : E[1]; p.b = fwd ? E[1] : E[0]; p.len = Math.max(0.1, Math.hypot(p.b.x - p.a.x, p.b.z - p.a.z)); p.t = fwd ? t : 1 - t;
    return true;
  }
  return false;
}
const _pq = new THREE.Quaternion(), _pe = new THREE.Euler(), _pm = new THREE.Matrix4(), _ps = new V3(), _pp = new V3();
function updatePeople(dt) {
  if (!LIFE.mesh) return;
  const P = G.P, F = FERRY, cp = W.cam.position, t = G.time;
  let budget = 24;
  for (const p of LIFE.people) {
    let moving = false;
    if (!p.area) {   // a walker on the street grid
      p.retry -= dt;
      if ((!p.a || Math.abs(p.pos.x - P.pos.x) + Math.abs(p.pos.z - P.pos.z) > LIFE_R * 1.45) && p.retry <= 0 && budget > 0) {
        budget--; if (!spawnWalker(p, !p.a)) { p.retry = 1.5; if (!p.a) continue; }
      }
      if (!p.a) continue;
      p.t += p.sp * dt / p.len;
      while (p.t >= 1) {
        const opts = p.b.e.filter(n => n !== p.a), nxt = opts.length ? pick(opts) : p.a;
        p.t = (p.t - 1) * p.len; p.a = p.b; p.b = nxt; p.len = Math.max(0.1, Math.hypot(p.b.x - p.a.x, p.b.z - p.a.z)); p.t /= p.len;
      }
      const dx = (p.b.x - p.a.x) / p.len, dz = (p.b.z - p.a.z) / p.len;
      p.pos.set(p.a.x + (p.b.x - p.a.x) * p.t - dz * p.off, 0, p.a.z + (p.b.z - p.a.z) * p.t + dx * p.off);
      p.yaw = Math.atan2(dx, dz); moving = true;
    } else {         // milling about a market, a quay, the promenade or the ferry deck (positions kept relative to it)
      const ox = p.area.ferry ? F.x : 0, oz = p.area.ferry ? F.z : 0;
      if (Math.abs(p.loc.x + ox - cp.x) + Math.abs(p.loc.z + oz - cp.z) > 520) continue;
      if (p.wait > 0) p.wait -= dt;
      else {
        const dx = p.tgt.x - p.loc.x, dz = p.tgt.z - p.loc.z, d = Math.hypot(dx, dz);
        if (d < 0.3) { p.wait = rand(2, 9); millPick(p); }
        else { const s = Math.min(d, p.sp * 0.75 * dt); p.loc.x += dx / d * s; p.loc.z += dz / d * s; p.yaw = Math.atan2(dx, dz); moving = true; }
      }
      p.pos.set(ox + p.loc.x, 0, oz + p.loc.z);
    }
    const k = moving ? t * p.sp * 5.6 + p.ph : t * 0.8 + p.ph, bob = moving ? Math.abs(Math.sin(k)) * 0.035 : 0;
    _pe.set(0, p.yaw + (moving ? 0 : Math.sin(k) * 0.15), moving ? Math.sin(k) * 0.035 : Math.sin(k * 0.7) * 0.01);
    _pq.setFromEuler(_pe); _pm.compose(_pp.set(p.pos.x, bob, p.pos.z), _pq, _ps.setScalar(p.s));
    for (const m of LIFE.mesh) m.setMatrixAt(p.i, _pm);
  }
  for (const m of LIFE.mesh) m.instanceMatrix.needsUpdate = true;
}
// Hover-cars on the sky lanes over the avenues: north-south at one height, east-west at another.
function buildTraffic(S) {
  const N = TOUCH ? 60 : 130, parts = [], glows = [];
  const box = (w, h, d, x, y, z, arr, col) => { const g = new THREE.BoxGeometry(w, h, d).toNonIndexed(); g.translate(x, y, z); if (col) { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set(col, i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); } arr.push(g); };
  box(2.2, 0.6, 4.8, 0, 0, 0, parts); box(0.36, 0.36, 3.4, -1.28, -0.12, -0.2, parts); box(0.36, 0.36, 3.4, 1.28, -0.12, -0.2, parts); box(1.7, 0.18, 1.2, 0, 0.12, 2.2, parts);
  box(1.5, 0.48, 2.3, 0, 0.5, -0.35, glows, [0.02, 0.05, 0.07]);                 // tinted canopy
  box(1.9, 0.1, 0.08, 0, 0.12, 2.42, glows, [1.8, 2.1, 2.3]);                   // headlight bar
  box(2.0, 0.12, 0.08, 0, 0.12, -2.42, glows, [2.6, 0.12, 0.18]);               // tail lights
  box(0.2, 0.06, 3.2, -1.28, -0.31, -0.2, glows, [0.4, 1.9, 2.2]); box(0.2, 0.06, 3.2, 1.28, -0.31, -0.2, glows, [0.4, 1.9, 2.2]);   // drive glow
  const body = new THREE.InstancedMesh(mergeGeometries(parts), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.32 }), N);
  const glow = new THREE.InstancedMesh(mergeGeometries(glows), new THREE.MeshBasicMaterial({ vertexColors: true }), N);
  for (const m of [body, glow]) { m.frustumCulled = false; m.userData.dynamic = true; S.add(m); }
  body.castShadow = false; LIFE.carMesh = [body, glow];
  const lanes = [];
  for (let k = -3; k <= 3; k++) for (const dir of [-1, 1]) {
    const c = k * 256, half = Math.sqrt(900 * 900 - c * c);
    lanes.push({ fx: true, c: c + dir * 3.6, dir, y: dir > 0 ? 36 : 40, half }, { fx: false, c: c - dir * 3.6, dir, y: dir > 0 ? 47 : 51, half });
  }
  const col = new THREE.Color(), CARS = [0xe8e4da, 0x9aa4ae, 0x1d2228, 0xe0a526, 0xe0a526, 0x1d7a84, 0xb3301e, 0x2b3f8e, 0xe8e4da];
  for (let i = 0; i < N; i++) {
    const L = lanes[i % lanes.length];
    LIFE.cars.push({ i, L, s: rand(-L.half, L.half), v: rand(20, 32), ph: rand(0, 6.28) });
    body.setColorAt(i, col.setHex(pick(CARS)));
  }
  body.instanceColor.needsUpdate = true;
}
function updateTraffic(dt) {
  if (!LIFE.carMesh) return;
  const t = G.time;
  for (const c of LIFE.cars) {
    const L = c.L; c.s += L.dir * c.v * dt;
    if (c.s > L.half) c.s = -L.half; else if (c.s < -L.half) c.s = L.half;
    const y = L.y + Math.sin(t * 0.9 + c.ph) * 0.35;
    _pp.set(L.fx ? L.c : c.s, y, L.fx ? c.s : L.c);
    _pe.set(0, L.fx ? (L.dir > 0 ? 0 : Math.PI) : (L.dir > 0 ? Math.PI / 2 : -Math.PI / 2), Math.sin(t * 0.7 + c.ph) * 0.03); _pq.setFromEuler(_pe);
    _pm.compose(_pp, _pq, _ps.setScalar(1));
    for (const m of LIFE.carMesh) m.setMatrixAt(c.i, _pm);
  }
  for (const m of LIFE.carMesh) m.instanceMatrix.needsUpdate = true;
}
function updateCityLife(dt) { updateHarbour(dt); updatePeople(dt); updateTraffic(dt); }

// =====================================================================
//  SKILLS, ITEMS, CRAFTING AND THE HOMESTEAD
// =====================================================================
// Five skills on RuneScape's experience curve, 1 to 99. Gather from rocks, trees and wrecks out in the districts (the
// better the resource, the further from Concordia it lies), craft materials and tools, turn them into building blocks,
// and build a home, block by block, on your Homestead plot in the Dhow Quarter.
const XP_TABLE = (() => { const t = [0, 0]; let pts = 0; for (let l = 1; l < 99; l++) { pts += Math.floor(l + 300 * Math.pow(2, l / 7)); t.push(Math.floor(pts / 4)); } return t; })();   // t[L] = xp for level L (t[99] = 13,034,431)
const SKILL_IDS = Object.keys(SKILLS), INV_SLOTS = 28, STACK = 999;
const skillXp = id => (G.D && G.D.skills && G.D.skills[id]) || 0;
const lvForXp = x => { let L = 1; while (L < 99 && x >= XP_TABLE[L + 1]) L++; return L; };
const skillLv = id => lvForXp(skillXp(id));
const totalLv = () => SKILL_IDS.reduce((a, id) => a + skillLv(id), 0);
function ensureSkills(D) {   // new characters and old saves alike
  if (!D.skills) D.skills = {};
  for (const id of SKILL_IDS) D.skills[id] = D.skills[id] | 0;
  if (!Array.isArray(D.inv)) D.inv = [{ id: 'pick1', n: 1 }, { id: 'hatchet1', n: 1 }, { id: 'cutter1', n: 1 }];
  if (!Array.isArray(D.home)) D.home = [];
}
function gainSkillXp(id, n) {
  const D = G.D, before = skillLv(id);
  D.skills[id] = Math.min(200000000, skillXp(id) + n);
  floater(G.P.pos, `+${n} ${SKILLS[id].name}`, SKILLS[id].col, 3.0);
  const after = skillLv(id);
  if (after > before) {
    const S = SKILLS[id];
    banner(`${S.icon} ${S.name.toUpperCase()}`, `LEVEL ${after}`, after === 99 ? '99 / 99 · MASTERED' : `${after} / 99`, 'lv');
    ringFx(G.P.pos, 0xe8c46a, 4, 0.9); burst(G.P.pos.clone().setY(1.2), 0xe8c46a, 24, 3);
    addChat('sys', null, `Congratulations, you've just advanced a ${S.name} level. You are now level ${after}.`);
    if (after === 99) { addChat('world', null, `${D.name} has reached 99 ${S.name}!`, 'sys'); setTimeout(() => botSay(pick(chatBots()), pick(['GZ ON 99!!!', 'gz 99 ' + D.name, 'skill cape time', 'insane grind, gz'])), 1500); }
    saveGame();
  }
  if (G.ui === 'satchel') renderSatchel();
}
// ---- the satchel: 28 slots, stacks of up to 999
const invCount = id => G.D.inv.reduce((a, s) => a + (s.id === id ? s.n : 0), 0);
function invRoom(id) { let r = 0; for (const s of G.D.inv) if (s.id === id) r += STACK - s.n; return r + (INV_SLOTS - G.D.inv.length) * STACK; }
function invAdd(id, n) {
  let left = n;
  for (const s of G.D.inv) if (s.id === id && left) { const k = Math.min(left, STACK - s.n); s.n += k; left -= k; }
  while (left > 0 && G.D.inv.length < INV_SLOTS) { const k = Math.min(left, STACK); G.D.inv.push({ id, n: k }); left -= k; }
  if (G.ui === 'satchel') renderSatchel(); if (G.build) renderBuildBar();
  return n - left;
}
function invTake(id, n) {
  if (invCount(id) < n) return false;
  for (let i = G.D.inv.length - 1; i >= 0 && n > 0; i--) { const s = G.D.inv[i]; if (s.id !== id) continue; const k = Math.min(n, s.n); s.n -= k; n -= k; if (!s.n) G.D.inv.splice(i, 1); }
  if (G.ui === 'satchel') renderSatchel(); if (G.build) renderBuildBar();
  return true;
}
const toolTier = skill => G.D.inv.reduce((a, s) => { const I = ITEMS[s.id]; return I && I.tool === skill ? Math.max(a, I.tier) : a; }, 0);

// ---- gathering: rocks, trees and wrecks out in the districts
function nodeMesh(type) {
  const g = new THREE.Group(), full = new THREE.Group(), gone = new THREE.Group(); g.add(full, gone); gone.visible = false; g.userData.dynamic = true;
  const M = (k, c, o = {}) => mat('node' + k, () => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.85, flatShading: true }, o)));
  const rock = (m, s, parent = full) => { const r = new THREE.Mesh(GEO.rock, m); r.scale.set(s * 1.2, s * 0.8, s); r.position.y = s * 0.45; r.rotation.set(rand(-.3, .3), rand(0, 6), rand(-.3, .3)); parent.add(r); return r; };
  const specks = (m, n, s) => { for (let k = 0; k < n; k++) { const o = new THREE.Mesh(GEO.oct, m); o.scale.setScalar(rand(0.12, 0.22) * s); const a = rand(0, 6.28); o.position.set(Math.cos(a) * s * 0.9, s * rand(0.4, 1.0), Math.sin(a) * s * 0.75); o.rotation.set(rand(0, 3), rand(0, 3), 0); full.add(o); } };
  const stump = (c) => { const s = new THREE.Mesh(GEO.cyl, M('stump' + c, c)); s.scale.set(0.35, 0.5, 0.35); s.position.y = 0.25; gone.add(s); };
  if (type === 'sandstone') { rock(M('sand', 0xc8a272), 1.3); rock(M('sand', 0xc8a272), 0.7).position.set(1, 0.3, 0.4); rock(M('sandD', 0x9a7a52), 0.6, gone); }
  else if (type === 'iron') { rock(M('ironR', 0x5a4a44), 1.3); specks(M('rust', 0xb0603a, { roughness: 0.6 }), 7, 1.3); rock(M('ironR', 0x5a4a44), 0.6, gone); }
  else if (type === 'carax') { rock(M('caraxR', 0x3a4048), 1.4); specks(glowMat(0x5fd8e8, 2.2), 7, 1.4); rock(M('caraxR', 0x3a4048), 0.6, gone); }
  else if (type === 'crystal') { rock(M('crysR', 0x2a1e22), 1.2); for (let k = 0; k < 5; k++) { const c = new THREE.Mesh(GEO.oct, glowMat(0xff2b4a, 2.4)); c.scale.set(0.25, rand(0.8, 1.4), 0.25); c.position.set(rand(-0.6, 0.6), 1.2, rand(-0.5, 0.5)); c.rotation.set(rand(-.4, .4), rand(0, 3), rand(-.4, .4)); full.add(c); } rock(M('crysR', 0x2a1e22), 0.6, gone); }
  else if (type === 'acacia' || type === 'ironwood') {
    const bark = M('bark' + type, type === 'acacia' ? 0x5a4030 : 0x1c1412), leaf = M('leaf' + type, type === 'acacia' ? 0x5d6a2c : 0x6a1c1e);
    const t = new THREE.Mesh(GEO.cyl, bark); t.scale.set(0.22, 3.4, 0.22); t.position.y = 1.7; full.add(t);
    for (let k = 0; k < 3; k++) { const c = new THREE.Mesh(GEO.ico1, leaf); const r = rand(1.6, 2.2); c.scale.set(r, r * 0.25, r); c.position.set(rand(-1, 1), 3.5 + rand(-0.2, 0.3), rand(-1, 1)); full.add(c); }
    stump(type === 'acacia' ? 0x5a4030 : 0x1c1412);
  } else if (type === 'baobab') { const b = makeBaobab(0.75); full.add(b); const s = new THREE.Mesh(GEO.cyl, mat('bark', () => new THREE.MeshStandardMaterial({ color: 0x7d6650 }))); s.scale.set(1.2, 0.8, 1.2); s.position.y = 0.4; gone.add(s); }
  else if (type === 'scrap') { const m = M('scrap', 0x6a5a50, { metalness: 0.5 }); for (let k = 0; k < 6; k++) { const b = bx(rand(0.5, 1.2), rand(0.2, 0.6), rand(0.4, 1), m, rand(-0.8, 0.8), rand(0.2, 0.8), rand(-0.8, 0.8), full); b.rotation.set(rand(0, 1), rand(0, 3), rand(0, 1)); } bx(1.2, 0.15, 1.2, m, 0, 0.08, 0, gone); }
  else if (type === 'circuit') { bx(1.4, 1.0, 0.9, M('crate', 0x2a2e34, { metalness: 0.4 }), 0, 0.5, 0, full); bx(1.0, 0.5, 0.05, glowMat(0x6dff9a, 1.8), 0, 0.7, 0.46, full); bx(0.3, 1.6, 0.3, M('crate', 0x2a2e34), 0.8, 0.8, 0, full); bx(1.2, 0.15, 0.8, M('crate', 0x2a2e34), 0, 0.08, 0, gone); }
  else if (type === 'wreck') { const h = new THREE.Mesh(GEO.oct, M('hull', 0x1a1416, { metalness: 0.7 })); h.scale.set(0.9, 2.2, 0.6); h.position.y = 1; h.rotation.z = 0.5; full.add(h); const s = bx(0.08, 1.8, 0.62, glowMat(0xff2b4a, 2), 0, 1, 0, full); s.rotation.z = 0.5; bx(1.0, 0.2, 0.7, M('hull', 0x1a1416), 0, 0.1, 0, gone); }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { g, full, gone };
}
function nodeSpot(where, park) {
  for (let k = 0; k < 30; k++) {
    let p;
    if (park) p = new V3(rand(park.x0 + 2.5, park.x1 - 2.5), 0, rand(park.z0 + 2.5, park.z1 - 2.5));
    else p = zonePoint0(where);
    if (park && (Math.abs(p.x - (park.x0 + park.x1) / 2) < 5 || Math.abs(p.z - (park.z0 + park.z1) / 2) < 5)) continue;   // off the paths
    if (where === 'reservoir' && Math.hypot(p.x - RESV.x, p.z - RESV.z) > RESV_R - 10) continue;
    if (pointBlocked(p.x, p.z, 2.2) || G.nodes.some(n => d2(n.pos, p) < 4)) continue;
    return p;
  }
  return null;
}
function spawnNodes() {
  for (const [type, N] of Object.entries(NODES)) for (const [where, n] of N.where) {
    const spots = where === 'parks' ? (W.parks || []).flatMap(R => Array.from({ length: n }, () => nodeSpot(null, R))) : Array.from({ length: n }, () => nodeSpot(where));
    for (const p of spots) {
      if (!p) continue;
      const m = nodeMesh(type); m.g.position.copy(p); m.g.rotation.y = rand(0, 6.28); W.scene.add(m.g);
      const node = { kind: 'node', id: 'node', type, N, name: N.name, pos: p, full: m.full, gone: m.gone, uses: randi(...N.uses), down: 0 };
      const r = type === 'baobab' ? 2.6 : N.skill === 'woodcutting' ? 0.8 : 1.6; addCollider(p.x, p.z, r, r, 3);
      G.nodes.push(node); G.props.push(node);
    }
  }
}
function updateNodes(dt) {
  for (const n of G.nodes) if (n.down > 0 && (n.down -= dt) <= 0) { n.uses = randi(...n.N.uses); n.full.visible = true; n.gone.visible = false; }
}
function startGather(n) {
  const P = G.P, N = n.N, S = SKILLS[N.skill];
  if (n.down > 0) { msg('Nothing left here. It will be back soon.'); return; }
  if (skillLv(N.skill) < N.level) { msg(`You need ${S.name} level ${N.level}.`); return; }
  const tier = toolTier(N.skill); if (!tier) { msg(`You need a ${N.skill === 'mining' ? 'pickaxe' : N.skill === 'woodcutting' ? 'hatchet' : 'salvage cutter'}.`); return; }
  if (!invRoom(N.item)) { msg('Your satchel is full.'); return; }
  P.gather = { n, t: 0, period: 2.4 / [1, 1, 1.35, 1.8][tier] }; faceTo(P, n.pos);
  addChat('sys', null, `You ${N.verb.toLowerCase()} the ${N.name.toLowerCase()}...`);
}
function stopGather() { if (!G.P.gather) return; G.P.gather = null; $('castbar').classList.add('hidden'); }
function updateGather(dt) {
  const P = G.P, Gt = P.gather; if (!Gt) return;
  const n = Gt.n, N = n.N;
  if (P.dead || G.build || n.down > 0 || d2(P.pos, n.pos) > 3.6 || P.vel.length() > 1.5) { stopGather(); return; }
  Gt.t += dt; P.move = 0; faceTo(P, n.pos);
  if ((Gt.anim = (Gt.anim || 0) - dt) <= 0) { Gt.anim = 0.75; P.atk = 0.3; }
  const bar = $('castbar'); bar.classList.remove('hidden'); bar.querySelector('span').textContent = `${N.verb} ${N.name}`; bar.querySelector('i').style.width = Math.min(100, Gt.t / Gt.period * 100) + '%';
  if (Gt.t < Gt.period) return;
  Gt.t = 0;
  const p = clamp(0.4 + 0.012 * (skillLv(N.skill) - N.level), 0.4, 0.95);
  if (Math.random() > p) return;   // a miss: keep at it
  invAdd(N.item, 1); gainSkillXp(N.skill, N.xp);
  addChat('loot', null, `You get some ${ITEMS[N.item].name.toLowerCase()}.`);
  if (--n.uses <= 0) { n.down = N.respawn; n.full.visible = false; n.gone.visible = true; stopGather(); return; }
  if (!invRoom(N.item)) { msg('Your satchel is full.'); stopGather(); }
}

// ---- crafting
function canCraft(r) { return skillLv(r.skill) >= r.level && Object.entries(r.in).every(([id, n]) => invCount(id) >= n); }
function craft(r, times = 1) {
  if (G.P.combatT > 0) { msg('You cannot craft in combat.'); return; }
  let made = 0;
  for (let k = 0; k < times && canCraft(r); k++) {
    const [oid, on] = Object.entries(r.out)[0];
    if (invRoom(oid) < on) { msg('Your satchel is full.'); break; }
    for (const [id, n] of Object.entries(r.in)) invTake(id, n);
    invAdd(oid, on); made++;
  }
  if (!made) { if (skillLv(r.skill) < r.level) msg(`You need ${SKILLS[r.skill].name} level ${r.level}.`); else msg('You do not have the materials.'); return; }
  const [oid, on] = Object.entries(r.out)[0];
  addChat('loot', null, `You make ${on * made} × ${ITEMS[oid].name}.`); Sound.sfx('coin');
  gainSkillXp(r.skill, r.xp * made); saveGame(); renderSatchel();
}

// ---- the satchel panel: items, skills, crafting
function openSatchel(tab = 'inv') { closeAllUI(); G.ui = 'satchel'; G.satTab = tab; $('satchel').classList.remove('hidden'); renderSatchel(); }
function renderSatchel() {
  const D = G.D, el = $('sat-body'); if (!D || !el) return;
  for (const b of document.querySelectorAll('#sat-tabs button')) b.classList.toggle('on', b.dataset.tab === G.satTab);
  const ic = (id, big) => { const I = ITEMS[id]; return `<b class="ig" style="color:${I.col}${big ? ';font-size:24px' : ''}">${I.icon}</b>`; };
  if (G.satTab === 'inv') {
    let h = '<div class="inv">';
    for (let i = 0; i < INV_SLOTS; i++) { const s = D.inv[i]; h += s ? `<div class="islot" title="${esc(ITEMS[s.id].name)}: ${esc(ITEMS[s.id].desc)}">${ic(s.id, true)}${s.n > 1 ? `<i>${s.n}</i>` : ''}<em>${esc(ITEMS[s.id].name)}</em></div>` : '<div class="islot empty"></div>'; }
    h += `</div><p class="sat-note">${D.inv.length} / ${INV_SLOTS} slots. Gather with E at rocks, trees and wrecks out in the districts. Build at your Homestead in the Dhow Quarter with <b>H</b>.</p>`;
    el.innerHTML = h;
  } else if (G.satTab === 'skills') {
    let h = `<div class="sk-total">TOTAL LEVEL <b>${totalLv()}</b> / ${SKILL_IDS.length * 99}</div>`;
    for (const id of SKILL_IDS) {
      const S = SKILLS[id], x = skillXp(id), L = lvForXp(x), lo = XP_TABLE[L], hi = L < 99 ? XP_TABLE[L + 1] : lo, pct = L < 99 ? (x - lo) / (hi - lo) * 100 : 100;
      h += `<div class="skrow${L === 99 ? ' max' : ''}"><b style="color:${S.col}">${S.icon}</b><div><div class="skn">${S.name.toUpperCase()}<span>${L} / 99</span></div><div class="skbar"><i style="width:${pct.toFixed(1)}%;background:${S.col}"></i></div><div class="skx">${fmtNum(x)} xp${L < 99 ? ` · ${fmtNum(hi - x)} to level ${L + 1}` : ' · MASTERED'}</div></div></div>`;
    }
    el.innerHTML = h;
  } else {
    let h = '';
    for (const sk of ['crafting', 'construction']) {
      h += `<div class="cr-h">${SKILLS[sk].icon} ${SKILLS[sk].name.toUpperCase()} <span>LEVEL ${skillLv(sk)}</span></div>`;
      RECIPES.forEach((r, i) => {
        if (r.skill !== sk) return;
        const [oid, on] = Object.entries(r.out)[0], lvOk = skillLv(sk) >= r.level, ok = canCraft(r);
        const ins = Object.entries(r.in).map(([id, n]) => `<span class="${invCount(id) >= n ? '' : 'bad'}">${n} ${esc(ITEMS[id].name)}</span>`).join(' + ');
        h += `<div class="crow${ok ? '' : ' no'}">${ic(oid)}<div><b>${esc(ITEMS[oid].name)}${on > 1 ? ' ×' + on : ''}</b><p><span class="${lvOk ? '' : 'bad'}">Lv ${r.level}</span> · ${ins} · ${r.xp} xp</p></div>
          <button class="btn ${ok ? 'gold' : 'ghost'}" data-r="${i}" data-n="1">MAKE</button><button class="btn ghost" data-r="${i}" data-n="999">ALL</button></div>`;
      });
    }
    el.innerHTML = h;
    for (const b of el.querySelectorAll('button[data-r]')) b.onclick = () => craft(RECIPES[+b.dataset.r], +b.dataset.n);
  }
}

// ---- the Homestead: a 32 x 32 m plot, up to 16 blocks high, in the Dhow Quarter
const HOME = { x0: 273, z0: 656, n: 32, h: 16, grid: null, meshes: [], ghost: null, sel: 1, remove: false, target: null };
const HOME_C = new V3(HOME.x0 + HOME.n / 2, 0, HOME.z0 + HOME.n / 2);
const BLOCK_IDS = Object.keys(ITEMS).filter(id => ITEMS[id].kind === 'block').sort((a, b) => ITEMS[a].block - ITEMS[b].block);
const hIdx = (x, y, z) => (y * HOME.n + z) * HOME.n + x;
const inHomeArea = (x, z, m = 1) => x > HOME.x0 - m && x < HOME.x0 + HOME.n + m && z > HOME.z0 - m && z < HOME.z0 + HOME.n + m;
function homeAt(cx, cy, cz) { return cx < 0 || cz < 0 || cy < 0 || cx >= HOME.n || cz >= HOME.n || cy >= HOME.h ? 0 : HOME.grid[hIdx(cx, cy, cz)]; }
function blockMats() {
  const tex = (draw) => canvasTex(128, 128, draw);
  const sand = tex((g, w, h) => { g.fillStyle = '#d0aa76'; g.fillRect(0, 0, w, h); speckle(g, w, h, 900, ['#c49c68', '#dcb886', '#b88e5c'], 2); g.strokeStyle = 'rgba(90,60,30,0.5)'; g.lineWidth = 3; g.strokeRect(1, 1, w - 2, h - 2); g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.moveTo(w / 2, 0); g.lineTo(w / 2, h / 2); g.stroke(); });
  const steel = tex((g, w, h) => { g.fillStyle = '#7d8790'; g.fillRect(0, 0, w, h); speckle(g, w, h, 600, ['#6d7780', '#8d97a0'], 2); g.strokeStyle = '#4a525a'; g.lineWidth = 4; g.strokeRect(2, 2, w - 4, h - 4); g.fillStyle = '#4a525a'; for (const [x, y] of [[12, 12], [w - 12, 12], [12, h - 12], [w - 12, h - 12]]) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); } });
  const carax = tex((g, w, h) => { g.fillStyle = '#1a2028'; g.fillRect(0, 0, w, h); g.strokeStyle = '#3ee6ff'; g.lineWidth = 3; g.strokeRect(10, 10, w - 20, h - 20); g.beginPath(); g.moveTo(10, h / 2); g.lineTo(w - 10, h / 2); g.stroke(); });
  return [null,
    new THREE.MeshStandardMaterial({ map: sand, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: planksTex(), roughness: 0.75 }),
    new THREE.MeshStandardMaterial({ map: plasterTex(), roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x9fd8ff, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.35, depthWrite: false }),
    new THREE.MeshStandardMaterial({ map: steel, metalness: 0.6, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xfff0c8, emissive: 0xffc060, emissiveIntensity: 1.6, roughness: 0.5 }),
    new THREE.MeshStandardMaterial({ map: carax, emissive: 0xffffff, emissiveMap: carax, emissiveIntensity: 1.2, metalness: 0.6, roughness: 0.35 }),
    new THREE.MeshStandardMaterial({ color: 0x6a0a18, emissive: 0xff2b4a, emissiveIntensity: 1.3, roughness: 0.25, flatShading: true }),
  ];
}
function buildHomestead(S) {
  HOME.grid = new Uint8Array(HOME.n * HOME.n * HOME.h);
  const box = new THREE.BoxGeometry(1, 1, 1), mats = blockMats();
  HOME.meshes = mats.map((m, t) => { if (!t) return null; const im = new THREE.InstancedMesh(box, m, 4096); im.count = 0; im.castShadow = t !== 4; im.receiveShadow = true; im.userData.dynamic = true; im.frustumCulled = false; S.add(im); return im; });
  // the ghost block, and the plot's grid (shown while building)
  HOME.ghost = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.02, 1.02, 1.02)), new THREE.LineBasicMaterial({ color: 0x4dff9a })); HOME.ghost.visible = false; HOME.ghost.userData.dynamic = true; S.add(HOME.ghost);
  const pts = []; for (let k = 0; k <= HOME.n; k++) { pts.push(HOME.x0 + k, 0.06, HOME.z0, HOME.x0 + k, 0.06, HOME.z0 + HOME.n, HOME.x0, 0.06, HOME.z0 + k, HOME.x0 + HOME.n, 0.06, HOME.z0 + k); }
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  HOME.lines = new THREE.LineSegments(gg, new THREE.LineBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: 0.35 })); HOME.lines.visible = false; HOME.lines.userData.dynamic = true; S.add(HOME.lines);
  // the plot itself: a sandstone pad, corner posts lit in Concord cyan, and a sign
  const padTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#a8946e'; g.fillRect(0, 0, w, h); speckle(g, w, h, 4000, ['#9c8862', '#b4a07a'], 2); g.strokeStyle = 'rgba(70,50,30,0.35)'; g.lineWidth = 2; for (let k = 0; k <= 8; k++) { g.beginPath(); g.moveTo(k * 32, 0); g.lineTo(k * 32, h); g.moveTo(0, k * 32); g.lineTo(w, k * 32); g.stroke(); } }, HOME.n / 8);
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(HOME.n, HOME.n), new THREE.MeshStandardMaterial({ map: padTex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
  pad.rotation.x = -Math.PI / 2; pad.position.set(HOME_C.x, 0.03, HOME_C.z); pad.receiveShadow = true; S.add(pad);
  for (const [x, z] of [[0, 0], [HOME.n, 0], [0, HOME.n], [HOME.n, HOME.n]]) { bx(0.4, 1.6, 0.4, armorMat(0x2b323b), HOME.x0 + x, 0.8, HOME.z0 + z, S); bx(0.5, 0.15, 0.5, glowMat(0x3ee6ff, 2.4), HOME.x0 + x, 1.65, HOME.z0 + z, S); addCollider(HOME.x0 + x, HOME.z0 + z, 0.5, 0.5, 2); }
  const sign = textTex(512, 160, '#0b1118', [{ t: 'HOMESTEAD', y: 64, c: '#3ee6ff', f: 'bold 64px Bahnschrift, sans-serif' }, { t: 'PRESS H TO BUILD', y: 126, c: '#e8c46a', f: '36px Bahnschrift, sans-serif' }]);
  for (const sd of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.0), new THREE.MeshStandardMaterial({ map: sign, emissive: 0xffffff, emissiveMap: sign, emissiveIntensity: 0.6 })); m.position.set(HOME.x0 - 1.5, 2.2, HOME.z0 - 1.5 + sd * 0.03); m.rotation.y = sd > 0 ? 0 : Math.PI; S.add(m); }
  bx(0.2, 2.2, 0.2, armorMat(0x2b323b), HOME.x0 - 1.5, 1.1, HOME.z0 - 1.6, S); addCollider(HOME.x0 - 1.5, HOME.z0 - 1.6, 0.4, 0.4, 2.5);
}
function loadHome() {
  HOME.grid.fill(0);
  for (const [i, t] of G.D.home || []) if (i >= 0 && i < HOME.grid.length && t > 0 && t < 9) HOME.grid[i] = t;
  rebuildHome();
}
function saveHome() { const out = []; HOME.grid.forEach((t, i) => { if (t) out.push([i, t]); }); G.D.home = out; }
const _hm = new THREE.Matrix4();
function rebuildHome() {
  const counts = new Array(9).fill(0);
  for (let y = 0; y < HOME.h; y++) for (let z = 0; z < HOME.n; z++) for (let x = 0; x < HOME.n; x++) {
    const t = HOME.grid[hIdx(x, y, z)]; if (!t) continue; const im = HOME.meshes[t]; if (counts[t] >= 4096) continue;
    im.setMatrixAt(counts[t]++, _hm.makeTranslation(HOME.x0 + x + 0.5, y + 0.5, HOME.z0 + z + 0.5));
  }
  HOME.meshes.forEach((im, t) => { if (!im) return; im.count = counts[t]; im.instanceMatrix.needsUpdate = true; });
}
// Standing on what you build: the top of the highest block under you that you aren't already inside.
function homeGround(x, y, z, r = 0.3) {
  if (!HOME.grid || !inHomeArea(x, z)) return 0;
  let g = 0; const top = Math.min(HOME.h, Math.floor(y + 0.05));
  for (let cx = Math.floor(x - r - HOME.x0); cx <= Math.floor(x + r - HOME.x0); cx++) for (let cz = Math.floor(z - r - HOME.z0); cz <= Math.floor(z + r - HOME.z0); cz++)
    for (let cy = top - 1; cy >= 0; cy--) if (homeAt(cx, cy, cz)) { if (cy + 1 > g) g = cy + 1; break; }
  return g;
}
// Walls: blocks at body height push you out, like any other wall; and you bump your head on a ceiling.
function homePush(P) {
  const p = P.pos, r = P.radius; if (!HOME.grid || !inHomeArea(p.x, p.z, 2)) return;
  for (let cy = Math.max(0, Math.floor(p.y + 0.15)); cy <= Math.floor(p.y + 1.8) && cy < HOME.h; cy++)
    for (let cx = Math.floor(p.x - r - HOME.x0); cx <= Math.floor(p.x + r - HOME.x0); cx++) for (let cz = Math.floor(p.z - r - HOME.z0); cz <= Math.floor(p.z + r - HOME.z0); cz++) {
      if (!homeAt(cx, cy, cz)) continue;
      const minX = HOME.x0 + cx, maxX = minX + 1, minZ = HOME.z0 + cz, maxZ = minZ + 1;
      if (p.x + r < minX || p.x - r > maxX || p.z + r < minZ || p.z - r > maxZ) continue;
      const dl = p.x + r - minX, dr = maxX - (p.x - r), dt = p.z + r - minZ, db = maxZ - (p.z - r), m = Math.min(dl, dr, dt, db);
      if (m === dl) p.x -= dl; else if (m === dr) p.x += dr; else if (m === dt) p.z -= dt; else p.z += db;
    }
  if (P.vy > 0) { const hy = Math.floor(p.y + 2.0); for (let cx = Math.floor(p.x - 0.25 - HOME.x0); cx <= Math.floor(p.x + 0.25 - HOME.x0); cx++) for (let cz = Math.floor(p.z - 0.25 - HOME.z0); cz <= Math.floor(p.z + 0.25 - HOME.z0); cz++) if (homeAt(cx, hy, cz)) { P.vy = 0; p.y = Math.min(p.y, hy - 2.0); } }
}
// ---- build mode
function toggleBuild(on = !G.build) {
  const P = G.P;
  if (on && !inHomeArea(P.pos.x, P.pos.z, 8)) { msg('Build at your Homestead in the Dhow Quarter (tram: Homestead).'); return; }
  if (on && G.ui) closeAllUI();
  G.build = on; stopGather();
  HOME.ghost.visible = HOME.lines.visible = on; $('buildbar').classList.toggle('hidden', !on);
  if (on) { if (!invCount(BLOCK_IDS[HOME.sel - 1])) { const k = BLOCK_IDS.findIndex(id => invCount(id) > 0); if (k >= 0) HOME.sel = k + 1; } renderBuildBar(); addChat('sys', null, `Building. ${TOUCH ? 'Tap to place a block; switch to REMOVE to take one back.' : 'Click to place a block, right-click to take one back, 1-8 to choose a block, H or Esc when you are done.'}`); }
}
function renderBuildBar() {
  const el = $('bb-blocks'); if (!el) return;
  el.innerHTML = BLOCK_IDS.map((id, k) => { const I = ITEMS[id], n = invCount(id); return `<button class="bblk${HOME.sel === k + 1 ? ' on' : ''}${n ? '' : ' none'}" data-k="${k + 1}" title="${esc(I.name)}"><b style="background:${I.col}"></b><i>${n}</i><em>${k + 1}</em></button>`; }).join('');
  for (const b of el.querySelectorAll('button')) b.onclick = () => { HOME.sel = +b.dataset.k; HOME.remove = false; renderBuildBar(); };
  $('bb-remove').classList.toggle('on', HOME.remove);
}
const _br = new THREE.Raycaster(), _bv = new THREE.Vector2();
// What the pointer is on: the block it hits (and which face), or the plot floor.
function homeTarget(sx, sy) {
  _bv.set(sx / innerWidth * 2 - 1, -(sy / innerHeight) * 2 + 1); _br.setFromCamera(_bv, W.cam);
  const o = _br.ray.origin, d = _br.ray.direction;
  let x = o.x - HOME.x0, y = o.y, z = o.z - HOME.z0;
  let cx = Math.floor(x), cy = Math.floor(y), cz = Math.floor(z);
  const sx_ = Math.sign(d.x), sy_ = Math.sign(d.y), sz_ = Math.sign(d.z);
  const tdx = Math.abs(1 / d.x), tdy = Math.abs(1 / d.y), tdz = Math.abs(1 / d.z);
  let tx = d.x ? ((sx_ > 0 ? cx + 1 - x : x - cx) * tdx) : 1e9, ty = d.y ? ((sy_ > 0 ? cy + 1 - y : y - cy) * tdy) : 1e9, tz = d.z ? ((sz_ > 0 ? cz + 1 - z : z - cz) * tdz) : 1e9;
  let face = [0, 0, 0], t = 0;
  for (let k = 0; k < 400 && t < 40; k++) {
    if (cy < 0) {   // reached the floor
      if (cx >= 0 && cz >= 0 && cx < HOME.n && cz < HOME.n) return { hit: null, place: [cx, 0, cz] };
      return null;
    }
    if (homeAt(cx, cy, cz)) return { hit: [cx, cy, cz], place: [cx - face[0], cy - face[1], cz - face[2]] };
    if (tx < ty && tx < tz) { cx += sx_; t = tx; tx += tdx; face = [sx_, 0, 0]; }
    else if (ty < tz) { cy += sy_; t = ty; ty += tdy; face = [0, sy_, 0]; }
    else { cz += sz_; t = tz; tz += tdz; face = [0, 0, sz_]; }
  }
  return null;
}
function updateBuild() {
  if (!G.build) return;
  const P = G.P;
  if (!inHomeArea(P.pos.x, P.pos.z, 10)) { toggleBuild(false); return; }
  const sx = TOUCH ? (HOME.tap ? HOME.tap[0] : innerWidth / 2) : mouse.lx, sy = TOUCH ? (HOME.tap ? HOME.tap[1] : innerHeight / 2) : mouse.ly;
  const tg = homeTarget(sx, sy); HOME.target = tg;
  const cell = tg && (HOME.remove ? tg.hit : tg.place);
  const ok = cell && cell[0] >= 0 && cell[2] >= 0 && cell[0] < HOME.n && cell[2] < HOME.n && cell[1] >= 0 && cell[1] < HOME.h;
  HOME.ghost.visible = !!ok;
  if (ok) { HOME.ghost.position.set(HOME.x0 + cell[0] + 0.5, cell[1] + 0.5, HOME.z0 + cell[2] + 0.5); HOME.ghost.material.color.setHex(HOME.remove ? 0xff4a5e : invCount(BLOCK_IDS[HOME.sel - 1]) ? 0x4dff9a : 0xffd84a); }
}
function buildAction(remove) {
  const P = G.P, tg = HOME.target; if (!tg) return;
  if (remove) {
    if (!tg.hit) return; const [x, y, z] = tg.hit, t = homeAt(x, y, z), id = BLOCK_IDS[t - 1];
    if (!invRoom(id)) { msg('Your satchel is full.'); return; }
    HOME.grid[hIdx(x, y, z)] = 0; invAdd(id, 1);
  } else {
    const [x, y, z] = tg.place, id = BLOCK_IDS[HOME.sel - 1];
    if (x < 0 || z < 0 || y < 0 || x >= HOME.n || z >= HOME.n || y >= HOME.h) { msg('That is outside your plot.'); return; }
    if (homeAt(x, y, z)) return;
    if (!invCount(id)) { msg(`You have no ${ITEMS[id].name.toLowerCase()}s. Make some under Construction (K).`); return; }
    const wx = HOME.x0 + x, wz = HOME.z0 + z;   // not inside yourself
    if (P.pos.x + P.radius > wx && P.pos.x - P.radius < wx + 1 && P.pos.z + P.radius > wz && P.pos.z - P.radius < wz + 1 && y + 1 > P.pos.y + 0.05 && y < P.pos.y + 1.9) { msg('You are standing there.'); return; }
    if (Math.hypot(wx + 0.5 - P.pos.x, wz + 0.5 - P.pos.z, y + 0.5 - P.pos.y) > 12) { msg('Too far away.'); return; }
    HOME.grid[hIdx(x, y, z)] = HOME.sel; invTake(id, 1);
  }
  rebuildHome(); saveHome(); renderBuildBar();
}

// =====================================================================
//  ENTITIES
// =====================================================================
// =====================================================================
//  THE SALT LANTERN
// =====================================================================
const plasterTex = () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#ece5d6'; g.fillRect(0, 0, w, h);
  speckle(g, w, h, 5000, ['rgba(0,0,0,0.035)', 'rgba(255,255,255,0.08)', 'rgba(120,90,50,0.05)'], 3);
  const gr = g.createLinearGradient(0, h, 0, h * 0.55); gr.addColorStop(0, 'rgba(150,110,60,0.28)'); gr.addColorStop(1, 'rgba(150,110,60,0)');
  g.fillStyle = gr; g.fillRect(0, h * 0.55, w, h * 0.45);   // dust splashed up from the street
});
const planksTex = () => canvasTex(512, 512, (g, w, h) => {
  const rows = 16, rh = h / rows;
  for (let r = 0; r < rows; r++) {
    let x = -rand(0, 200);
    while (x < w) { const L = rand(140, 260); g.fillStyle = pick(['#6b4527', '#5e3c22', '#74502e', '#634024']); g.fillRect(x, r * rh, L - 2, rh - 2); x += L; }
  }
  for (let i = 0; i < 900; i++) { g.fillStyle = 'rgba(30,15,5,0.18)'; g.fillRect(rand(0, w), rand(0, h), rand(8, 40), 1); } // grain
}, 3);
function textTex(w, h, bg, lines) {
  const t = canvasTex(w, h, (g) => {
    if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
    for (const L of lines) { g.fillStyle = L.c; g.font = L.f; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(L.t, w / 2, L.y); }
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t;
}

function buildCantina(S) {
  const { x0, x1, z0, z1, h: H } = CANTINA, T = 0.6, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, W_ = x1 - x0, D_ = z1 - z0;
  const plaster = mat('plaster', () => new THREE.MeshStandardMaterial({ map: plasterTex(), roughness: 0.95 }));
  const wood = mat('darkwood', () => new THREE.MeshStandardMaterial({ color: 0x3e2716, roughness: 0.75 }));
  const lightWood = mat('lightwood', () => new THREE.MeshStandardMaterial({ color: 0x8a5a32, roughness: 0.55 }));
  const iron = mat('iron', () => new THREE.MeshStandardMaterial({ color: 0x22201e, metalness: 0.7, roughness: 0.45 }));
  const brass = mat('brass', () => new THREE.MeshStandardMaterial({ color: 0xc9a050, metalness: 0.9, roughness: 0.3 }));
  const amber = glowMat(0xffb347, 2.2);
  const wall = (w, h, d, x, y, z) => { const geo = new THREE.BoxGeometry(w, h, d); scaleUV(geo, w, h * 3, d); const m = new THREE.Mesh(geo, plaster); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; S.add(m); };
  const cyl = (rt, rb, h, m, x, y, z, seg = 16) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); c.position.set(x, y, z); c.castShadow = c.receiveShadow = true; S.add(c); return c; };

  // ---- the lot: sandstone flags from the plaza to the door, two potted palms, benches
  const paveTex = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#b4936c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 6000, ['#c0a07a', '#a6845e', '#c9ab86']);
    g.strokeStyle = 'rgba(80,55,30,0.4)'; g.lineWidth = 3; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); g.beginPath(); g.moveTo(0, i * 64 + (i % 2) * 16); g.lineTo(w, i * 64 + (i % 2) * 16); g.stroke(); }
  }, 5);
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(34, 50), new THREE.MeshStandardMaterial({ map: paveTex, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1.2 }));
  lot.rotation.x = -Math.PI / 2; lot.position.set(0, 0.022, 53); lot.receiveShadow = true; S.add(lot);
  const pot = mat('terracotta', () => new THREE.MeshStandardMaterial({ color: 0xa4502e, roughness: 0.85 }));
  const frond = mat('frond', () => new THREE.MeshStandardMaterial({ color: 0x5a6a2c, roughness: 0.85, side: THREE.DoubleSide }));
  for (const sx of [-1, 1]) {
    const px = sx * 4.4, pz = z0 - 1.6;
    cyl(0.55, 0.42, 0.9, pot, px, 0.45, pz);
    const trunk = cyl(0.1, 0.16, 3.2, mat('palmTrunk', () => new THREE.MeshStandardMaterial({ color: 0x6b5236, roughness: 0.95 })), px, 2.4, pz, 6); trunk.rotation.z = sx * 0.06;
    for (let k = 0; k < 7; k++) { const f = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 2.2), frond); const a = k / 7 * Math.PI * 2; f.position.set(px + Math.sin(a) * 0.8, 3.9, pz + Math.cos(a) * 0.8); f.rotation.set(1.05, a, 0, 'YXZ'); f.castShadow = true; S.add(f); }
    addCollider(px, pz, 1.1, 1.1, 2);
    bx(2.4, 0.12, 0.6, lightWood, sx * 8, 0.55, z0 - 1.2, S); bx(0.12, 0.5, 0.5, wood, sx * 8 - 1, 0.25, z0 - 1.2, S); bx(0.12, 0.5, 0.5, wood, sx * 8 + 1, 0.25, z0 - 1.2, S);
  }

  // ---- walls: whitewashed, with the doorway facing the plaza
  wall(T, H, D_ + T, x0, H / 2, cz); wall(T, H, D_ + T, x1, H / 2, cz); wall(W_ + T, H, T, cx, H / 2, z1);
  const dw = 4.4, side = (W_ - dw) / 2;
  wall(side, H, T, x0 + side / 2, H / 2, z0); wall(side, H, T, x1 - side / 2, H / 2, z0);
  wall(dw, 2.0, T, cx, H - 1.0, z0);
  addCollider(x0, cz, T, D_ + T, H + 0.5); addCollider(x1, cz, T, D_ + T, H + 0.5); addCollider(cx, z1, W_ + T, T, H + 0.5);
  addCollider(x0 + side / 2, z0, side, T, H + 0.5); addCollider(x1 - side / 2, z0, side, T, H + 0.5);
  // carved doorframe and an open Swahili-style door with brass studs
  for (const sx of [-1, 1]) bx(0.3, 4.4, 0.8, wood, sx * (dw / 2 + 0.05), 2.2, z0, S);
  bx(dw + 0.7, 0.35, 0.8, wood, cx, 4.35, z0, S);
  const doorTex = canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = '#3a2414'; g.fillRect(0, 0, w, h); g.strokeStyle = '#24160b'; g.lineWidth = 6; g.strokeRect(10, 10, w - 20, h - 20); g.strokeRect(24, 30, w - 48, h - 60);
    g.fillStyle = '#d4a94e'; for (let y = 40; y < h - 30; y += 26) for (const x of [36, w / 2, w - 36]) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
  });
  const door = new THREE.Mesh(new THREE.BoxGeometry(2.0, 4.1, 0.14), new THREE.MeshStandardMaterial({ map: doorTex, roughness: 0.7 }));
  door.geometry.translate(1.0, 0, 0); door.position.set(cx - dw / 2 + 0.1, 2.05, z0 + 0.25); door.rotation.y = -1.75; door.castShadow = true; S.add(door);
  // arched windows glowing warm from within
  const winTex = canvasTex(64, 128, (g, w, h) => {
    g.fillStyle = '#2a1a10'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffc070'; g.beginPath(); g.moveTo(8, h - 8); g.lineTo(8, 30); g.arc(w / 2, 30, w / 2 - 8, Math.PI, 0); g.lineTo(w - 8, h - 8); g.fill();
    g.fillStyle = '#2a1a10'; g.fillRect(w / 2 - 2, 10, 4, h - 18); g.fillRect(8, h / 2, w - 16, 4);
  });
  const winM = new THREE.MeshStandardMaterial({ map: winTex, emissive: 0xffffff, emissiveMap: winTex, emissiveIntensity: 0.9, roughness: 0.4 });
  for (const zz of [51, 58, 65]) for (const xx of [x0, x1]) { const wm = new THREE.Mesh(new THREE.BoxGeometry(T + 0.06, 2.0, 1.1), winM); wm.position.set(xx, 2.8, zz); S.add(wm); }

  // ---- the sign and the great crystal lantern over the door
  const signTex = textTex(1024, 220, '#2a1a10', [{ t: 'THE SALT LANTERN', y: 100, c: '#f0c46a', f: 'bold 96px Georgia, serif' }, { t: '· EST. BEFORE ANYONE REMEMBERS ·', y: 178, c: '#b48a4a', f: '34px Georgia, serif' }]);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.0), new THREE.MeshStandardMaterial({ map: signTex, emissive: 0xffffff, emissiveMap: signTex, emissiveIntensity: 0.35, roughness: 0.6 }));
  sign.position.set(cx, 5.25, z0 - T / 2 - 0.03); sign.rotation.y = Math.PI; S.add(sign);
  bx(1.4, 0.5, 1.4, plaster, cx, H + 0.25, z0, S);                         // plinth on the facade
  const lant = new THREE.Group(); lant.position.set(cx, H + 0.5, z0); S.add(lant);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) bx(0.08, 2.0, 0.08, iron, sx * 0.5, 1.0, sz * 0.5, lant);
  bx(1.2, 0.12, 1.2, iron, 0, 0.06, 0, lant);
  const capM = new THREE.Mesh(new THREE.ConeGeometry(0.95, 0.7, 4), iron); capM.position.y = 2.35; capM.rotation.y = Math.PI / 4; capM.castShadow = true; lant.add(capM);
  const crystal = new THREE.Mesh(GEO.oct, amber); crystal.scale.set(0.38, 0.75, 0.38); crystal.position.y = 1.0; crystal.userData.dynamic = true; lant.add(crystal);
  W.lanternCrystal = crystal;

  // ---- floor, rug and the roof (which steps aside when you are inside)
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W_, D_), new THREE.MeshStandardMaterial({ map: planksTex(), roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.035, cz); floor.receiveShadow = true; S.add(floor);
  const rugTex = canvasTex(128, 512, (g, w, h) => {
    g.fillStyle = '#7a2a1c'; g.fillRect(0, 0, w, h); g.strokeStyle = '#d9a44e'; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
    g.fillStyle = '#1d3b4a'; for (let y = 40; y < h - 30; y += 48) { g.beginPath(); g.moveTo(w / 2, y); g.lineTo(w / 2 + 26, y + 20); g.lineTo(w / 2, y + 40); g.lineTo(w / 2 - 26, y + 20); g.fill(); }
  });
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 7), new THREE.MeshStandardMaterial({ map: rugTex, roughness: 1, polygonOffset: true, polygonOffsetFactor: -3 }));
  rug.rotation.x = -Math.PI / 2; rug.position.set(cx, 0.04, z0 + 4); rug.receiveShadow = true; S.add(rug);
  const roof = new THREE.Group(); roof.userData.dynamic = true; S.add(roof);
  const roofM = mat('cantinaRoof', () => new THREE.MeshStandardMaterial({ color: 0xd9cfbd, roughness: 0.95 }));
  const slab = new THREE.Mesh(new THREE.BoxGeometry(W_ + T + 0.8, 0.5, D_ + T + 0.8), roofM); slab.position.set(cx, H + 0.25, cz); roof.add(slab);
  for (const [w, d, x, z] of [[W_ + T + 0.8, 0.4, cx, z1 + 0.6], [0.4, D_ + T + 0.8, x0 - 0.6, cz], [0.4, D_ + T + 0.8, x1 + 0.6, cz]]) { const p = new THREE.Mesh(new THREE.BoxGeometry(w, 0.9, d), roofM); p.position.set(x, H + 0.95, z); roof.add(p); }
  roof.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  // shadow-only stand-in: keeps casting the roof's shadow while letting the camera see in
  W.cantinaRoof = { group: roof, solid: roofM, ghost: new THREE.MeshStandardMaterial({ colorWrite: false, depthWrite: false }), inside: false };
  // beams and hanging lanterns stay, so the room still reads as covered from above
  for (const bz of [49.5, 54, 58.5, 63, 67.5]) bx(W_, 0.35, 0.4, wood, cx, H - 0.35, bz, S);
  for (const [lx, lz] of [[-5, 54], [5, 54], [-5, 63], [5, 63], [0, 58.5]]) {
    bx(0.03, 1.2, 0.03, iron, lx, H - 1.1, lz, S);
    const l = new THREE.Mesh(GEO.oct, amber); l.scale.set(0.16, 0.26, 0.16); l.position.set(lx, H - 1.9, lz); S.add(l);
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 6), iron); c.position.set(lx, H - 1.6, lz); S.add(c);
  }
  // warm light inside (always present so the light count never changes; brightened when you enter)
  const warm = new THREE.PointLight(0xffb066, 0, 26, 1.6); warm.position.set(cx, H - 1.6, cz); S.add(warm); W.cantinaLight = warm;

  // ---- the bar, shelves of bottles, barrels and the chalkboard
  const barX0 = -2, barX1 = 9.4, barZ = 66, bl = barX1 - barX0, bcx = (barX0 + barX1) / 2;
  bx(bl, 1.1, 1.0, wood, bcx, 0.55, barZ, S);
  bx(bl + 0.2, 0.1, 1.25, lightWood, bcx, 1.15, barZ, S);
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, bl, 8), brass); rail.rotation.z = Math.PI / 2; rail.position.set(bcx, 0.25, barZ - 0.62); S.add(rail);
  addCollider(bcx, barZ, bl, 1.0, 1.4);
  for (const sy of [1.7, 2.5, 3.3]) {
    bx(10.5, 0.08, 0.38, lightWood, 4, sy, z1 - 0.5, S);
    for (let i = 0; i < 16; i++) {
      const col = pick([0xc77a22, 0x3f7a3a, 0x7a1f24, 0x6a8fa8, 0xb89a4a]);
      const bm = mat('bottle' + col, () => new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.35, roughness: 0.15, metalness: 0.1 }));
      const bh = rand(0.28, 0.42); const b = new THREE.Mesh(GEO.cyl, bm); b.scale.set(0.07, bh, 0.07); b.position.set(-0.9 + i * 0.62 + rand(-0.1, 0.1), sy + 0.04 + bh / 2, z1 - 0.5); S.add(b);
    }
  }
  const board = textTex(512, 256, '#1d211e', [{ t: 'LANTERN ALE', y: 70, c: '#f3ead6', f: 'bold 54px Georgia, serif' }, { t: 'savannah honey · and something else', y: 140, c: '#cfc6b0', f: 'italic 28px Georgia, serif' }, { t: '25 CREDITS', y: 205, c: '#f0c46a', f: 'bold 40px Georgia, serif' }]);
  const chalk = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.3), new THREE.MeshStandardMaterial({ map: board, roughness: 0.9 })); chalk.position.set(-0.2, 4.6, z1 - T / 2 - 0.02); chalk.rotation.y = Math.PI; S.add(chalk);
  for (const [bxp, by, bzp] of [[10, 0.6, 67.6], [10, 0.6, 68.9], [10, 1.72, 68.25]]) {
    const br = cyl(0.55, 0.55, 1.1, mat('barrel', () => new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.8 })), bxp, by, bzp, 14); br.rotation.x = Math.PI / 2;
    for (const o of [-0.35, 0.35]) { const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.03, 6, 20), iron); hoop.position.set(bxp, by, bzp + o); S.add(hoop); }
  }
  addCollider(10, 68.25, 1.2, 2.6, 2.3);

  // ---- tables, stools and mugs
  const mug = mat('mug', () => new THREE.MeshStandardMaterial({ color: 0xe8dcc0, roughness: 0.6 }));
  const ale = glowMat(0xd08a2a, 0.6);
  const table = (x, z) => {
    cyl(0.85, 0.85, 0.08, lightWood, x, 1.0, z, 20); cyl(0.08, 0.1, 0.96, wood, x, 0.5, z, 8); cyl(0.45, 0.5, 0.06, wood, x, 0.03, z, 12);
    for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI * 2 + rand(0, 1); const sx = x + Math.cos(a) * 1.3, sz = z + Math.sin(a) * 1.3; cyl(0.3, 0.3, 0.07, lightWood, sx, 0.64, sz, 12); cyl(0.05, 0.07, 0.6, wood, sx, 0.31, sz, 6); }
    for (let k = 0; k < randi(1, 3); k++) { const mx = x + rand(-0.45, 0.45), mz = z + rand(-0.45, 0.45); cyl(0.09, 0.08, 0.2, mug, mx, 1.14, mz, 10); cyl(0.075, 0.075, 0.01, ale, mx, 1.24, mz, 10); }
    addCollider(x, z, 1.5, 1.5, 1.2);
  };
  table(-6, 51.5); table(6.5, 51.5); table(-6.5, 58.5); table(6.5, 59);
  // the Governor's corner table: one chair, one glass he never finishes, and a brass RESERVED tag
  const gx = -8.6, gz = 67.4;
  bx(1.5, 0.08, 1.1, lightWood, gx, 1.0, gz, S); for (const [lx, lz] of [[-0.65, -0.45], [0.65, -0.45], [-0.65, 0.45], [0.65, 0.45]]) bx(0.08, 1.0, 0.08, wood, gx + lx, 0.5, gz + lz, S);
  const chair = new THREE.Group(); chair.position.set(gx - 1.15, 0, gz + 0.9); chair.rotation.y = Math.PI * 0.8; S.add(chair);
  bx(0.6, 0.08, 0.6, wood, 0, 0.62, 0, chair); bx(0.6, 0.9, 0.08, wood, 0, 1.1, -0.28, chair); for (const [lx, lz] of [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]]) bx(0.06, 0.62, 0.06, wood, lx, 0.31, lz, chair);
  cyl(0.07, 0.06, 0.22, new THREE.MeshStandardMaterial({ color: 0xbfd9e0, transparent: false, roughness: 0.05, metalness: 0.2 }), gx + 0.2, 1.15, gz - 0.1, 12); cyl(0.06, 0.06, 0.012, ale, gx + 0.2, 1.22, gz - 0.1, 12);
  bx(0.3, 0.05, 0.12, brass, gx - 0.3, 1.06, gz - 0.3, S);
  addCollider(gx, gz, 1.6, 1.2, 1.2);

  // ---- the plaque, set in the boards where it happened (and a stool nobody has bothered to stand up)
  const plaqueTex = canvasTex(512, 512, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, w / 2); gr.addColorStop(0, '#b98a3e'); gr.addColorStop(1, '#6e4a1c');
    g.fillStyle = gr; g.beginPath(); g.arc(w / 2, h / 2, w / 2, 0, 7); g.fill();
    g.strokeStyle = '#e6c27a'; g.lineWidth = 10; g.beginPath(); g.arc(w / 2, h / 2, w / 2 - 22, 0, 7); g.stroke();
    g.fillStyle = '#2e1d0a'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = 'bold 34px Georgia, serif'; g.fillText('HERE', w / 2, 150);
    g.font = 'bold 50px Georgia, serif'; g.fillText('ORION MASCAR', w / 2, 210);
    g.font = 'italic 34px Georgia, serif'; g.fillText('fought', w / 2, 262);
    g.font = 'bold 50px Georgia, serif'; g.fillText('DANIEL BROWN', w / 2, 316);
    g.font = '24px Georgia, serif'; g.fillText('THE SALT LANTERN', w / 2, 390);
  });
  plaqueTex.wrapS = plaqueTex.wrapT = THREE.ClampToEdgeWrapping;
  const PL = { x: 0.6, z: 56 };
  const plq = new THREE.Mesh(new THREE.CircleGeometry(0.75, 40), new THREE.MeshStandardMaterial({ map: plaqueTex, metalness: 0.75, roughness: 0.35, polygonOffset: true, polygonOffsetFactor: -4 }));
  plq.rotation.set(-Math.PI / 2, 0, Math.PI); plq.position.set(PL.x, 0.05, PL.z); plq.receiveShadow = true; S.add(plq);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.035, 6, 40), brass); rim.rotation.x = Math.PI / 2; rim.position.set(PL.x, 0.05, PL.z); S.add(rim);
  const stool = new THREE.Group(); stool.position.set(PL.x + 1.6, 0.3, PL.z - 1.1); stool.rotation.set(0, 0.6, 1.45); S.add(stool);
  bx(0.6, 0.07, 0.6, lightWood, 0, 0.3, 0, stool); bx(0.07, 0.6, 0.07, wood, 0, 0, 0, stool);
  G.props.push({ kind: 'prop', id: 'plaque', name: 'Memorial Plaque', pos: new V3(PL.x, 0, PL.z) });
}

// Zuri Adeyemi keeps the bar.
function spawnZuri() {
  const r = makeHumanoid({ armor: 0x6b4a2e, accent: 0xffb347, visor: 0xffb347, weapon: 'none' });
  const pos = new V3(5.5, 0, 67.9);
  r.group.position.copy(pos); r.group.rotation.y = Math.PI; W.scene.add(r.group);
  const zuri = { kind: 'npc', id: 'zuri', name: 'Zuri Adeyemi', title: 'Keeper of the Salt Lantern', pos, group: r.group, rig: r, height: 2.1, radius: 1, alive: true };
  zuri.plate = makePlate('npc', `<div class="n">Zuri Adeyemi</div><div class="g">&lt;Keeper of the Salt Lantern&gt;</div>`);
  addHitbox(zuri, 1, 2, 1, 1);
  G.npcs.push(zuri);
}
function talkZuri(text = ZURI_LINES.greet) {
  dialog('KEEPER OF THE SALT LANTERN', 'ZURI ADEYEMI', '', text, G.D.aleT > 0 ? `LANTERN ALE · ${fmtTime(G.D.aleT)} LEFT` : '', [
    { label: 'LANTERN ALE · 25 CR', gold: true, fn: buyAle },
    { label: 'THE PLAQUE', fn: () => talkZuri(ZURI_LINES.fight) },
    { label: 'THE GOVERNOR', fn: () => talkZuri(ZURI_LINES.gov) },
    { label: 'LEAVE', fn: closeAllUI },
  ]);
}
const ALE = { cost: 25, secs: 600, bonus: 0.2 };
function buyAle() {
  const D = G.D;
  if (D.credits < ALE.cost) { Sound.sfx('error'); talkZuri(ZURI_LINES.aleNo); return; }
  const again = D.aleT > 0;
  D.credits -= ALE.cost; D.aleT = ALE.secs; Sound.sfx('coin');
  addChat('loot', null, 'You drink a Lantern Ale. (+20% experience for 10 minutes)');
  ringFx(G.P.pos, 0xffb347, 2.5, 0.8); burst(G.P.pos.clone().setY(1.4), 0xffb347, 16, 1.5);
  saveGame(); talkZuri(again ? ZURI_LINES.aleAgain : ZURI_LINES.aleOk);
}
const fmtTime = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
function readPlaque() {
  dialog(PLAQUE.title, PLAQUE.name, '', PLAQUE.text, '', [{ label: 'ASK ZURI ABOUT IT', fn: () => { const z = G.npcs.find(n => n.id === 'zuri'); if (z && d2(G.P.pos, z.pos) < 16) talkZuri(ZURI_LINES.fight); else closeAllUI(); } }, { label: 'CLOSE', fn: closeAllUI }]);
}
// spots near the tables where regulars like to stand
const CANTINA_SPOTS = [[-6, 53.2], [-4.3, 51.6], [6.5, 53.2], [8.2, 51.4], [-6.5, 60.2], [-4.8, 58.4], [6.5, 60.7], [4.8, 59], [-1.5, 64.6], [1.5, 64.7], [4.5, 64.7], [7.5, 64.6]];
const cantinaSpot = () => { const [x, z] = pick(CANTINA_SPOTS); return new V3(x + rand(-0.3, 0.3), 0, z + rand(-0.3, 0.3)); };

// =====================================================================
//  WILDLIFE
// =====================================================================
const _cg = new Map();
const cylGeo = (rt, rb, seg = 8) => { const k = rt + ',' + rb + ',' + seg; if (!_cg.has(k)) _cg.set(k, new THREE.CylinderGeometry(rt, rb, 1, seg)); return _cg.get(k); };
// a leg hanging from its hip pivot
function limb(parent, x, y, z, h, rt, rb, m, hoofM) {
  const p = new THREE.Group(); p.position.set(x, y, z); parent.add(p);
  const leg = new THREE.Mesh(cylGeo(rt, rb), m); leg.scale.set(1, h, 1); leg.position.y = -h / 2; p.add(leg);
  if (hoofM) { const hf = new THREE.Mesh(cylGeo(rb * 1.1, rb * 1.3, 6), hoofM); hf.scale.set(1, 0.1, 1); hf.position.y = -h + 0.05; p.add(hf); }
  return p;
}
const darkHide = () => mat('animalDark', () => new THREE.MeshStandardMaterial({ color: 0x2b221c, roughness: 0.9 }));
// reticulated giraffe coat: a jittered grid of patches with cream gaps (tiles seamlessly)
const giraffeMat = () => mat('giraffe', () => {
  const tex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#eedcb0'; g.fillRect(0, 0, w, h);
    const N = 6, cw = w / N, P = [];
    for (let j = 0; j <= N; j++) { P[j] = []; for (let i = 0; i <= N; i++) P[j][i] = [i * cw + (i % N ? rand(-cw * 0.28, cw * 0.28) : 0), j * cw + (j % N ? rand(-cw * 0.28, cw * 0.28) : 0)]; }
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const q = [P[j][i], P[j][i + 1], P[j + 1][i + 1], P[j + 1][i]], c = q.reduce((a, p) => [a[0] + p[0] / 4, a[1] + p[1] / 4], [0, 0]);
      g.fillStyle = pick(['#8b5326', '#94592a', '#7e4a22']); g.beginPath(); q.forEach(p => g.lineTo(c[0] + (p[0] - c[0]) * 0.8, c[1] + (p[1] - c[1]) * 0.8)); g.closePath(); g.fill();
    }
  });
  const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }); m.userData.lodColor = 0xa87444; return m;
});
const zebraMat = (legs) => mat(legs ? 'zebraLegs' : 'zebra', () => {
  const tex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#ece6da'; g.fillRect(0, 0, w, h); g.fillStyle = '#1c1a19';
    for (let i = 0; i < 12; i++) {
      const o = i * (legs ? h : w) / 12; g.beginPath();
      if (legs) { for (let x = 0; x <= w; x += 8) g.lineTo(x, o + Math.sin(x * 0.05 + i) * 3); for (let x = w; x >= 0; x -= 8) g.lineTo(x, o + 9 + Math.sin(x * 0.05 + i) * 3); }
      else { for (let y = 0; y <= h; y += 8) g.lineTo(o + Math.sin(y * 0.045 + i) * 6, y); for (let y = h; y >= 0; y -= 8) g.lineTo(o + 9 + Math.sin(y * 0.045 + i + 0.7) * 6, y); }
      g.closePath(); g.fill();
    }
  });
  const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }); m.userData.lodColor = 0x8f8a82; return m;
});
function finishAnimal(g, rig) { g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); compactRig(g); rig.bodyY = rig.body.position.y; rig.group = g; return rig; }

function makeGiraffe() {
  const g = new THREE.Group(), coat = giraffeMat(), dark = darkHide();
  const body = new THREE.Group(); body.position.y = 2.45; g.add(body);
  bx(0.8, 0.9, 1.9, coat, 0, 0, 0, body); bx(0.72, 0.62, 0.55, coat, 0, 0.16, 0.8, body);
  const neck = new THREE.Group(); neck.position.set(0, 0.35, 0.95); neck.rotation.x = 0.42; body.add(neck);
  bx(0.3, 2.4, 0.42, coat, 0, 1.15, 0, neck); bx(0.06, 2.2, 0.1, dark, 0, 1.15, -0.24, neck);
  const head = new THREE.Group(); head.position.set(0, 2.35, 0.04); head.rotation.x = -0.17; neck.add(head);
  bx(0.28, 0.3, 0.72, coat, 0, 0, 0.25, head); bx(0.2, 0.2, 0.2, dark, 0, -0.04, 0.6, head);
  for (const s of [-1, 1]) { bx(0.06, 0.26, 0.06, dark, s * 0.09, 0.27, -0.02, head); bx(0.16, 0.06, 0.08, coat, s * 0.2, 0.12, -0.05, head); }
  const legs = [[-0.28, 0.78], [0.28, 0.78], [-0.28, -0.78], [0.28, -0.78]].map(([x, z]) => limb(body, x, -0.35, z, 2.1, 0.08, 0.06, coat, dark));
  const tail = new THREE.Group(); tail.position.set(0, 0.3, -0.95); tail.rotation.x = -0.25; body.add(tail); bx(0.05, 1.0, 0.05, dark, 0, -0.5, 0, tail);
  return finishAnimal(g, { body, neck, head, legs, tail, legLen: 2.1, neckRest: 0.42, neckGraze: 0.62 });
}
function makeElephant() {
  const g = new THREE.Group(), skin = mat('eleSkin', () => new THREE.MeshStandardMaterial({ color: 0x857c75, roughness: 0.95, flatShading: true }));
  const ivory = mat('ivory', () => new THREE.MeshStandardMaterial({ color: 0xeee6d2, roughness: 0.5 })), toe = mat('eleToe', () => new THREE.MeshStandardMaterial({ color: 0x5f5853, roughness: 0.9 }));
  const body = new THREE.Group(); body.position.y = 2.15; g.add(body);
  const torso = new THREE.Mesh(GEO.ico1, skin); torso.scale.set(0.95, 0.95, 1.45); body.add(torso);
  const neck = new THREE.Group(); neck.position.set(0, 0.35, 1.3); body.add(neck);    // the head pivots here
  const head = new THREE.Mesh(GEO.ico1, skin); head.scale.set(0.62, 0.7, 0.6); head.position.set(0, 0.1, 0.35); neck.add(head);
  const ears = [-1, 1].map(s => { const e = new THREE.Group(); e.position.set(s * 0.45, 0.15, 0.2); e.rotation.y = s * 0.25; neck.add(e); const m = bx(0.07, 1.1, 0.95, skin, s * 0.04, -0.05, -0.4, e); m.rotation.z = s * 0.1; return e; });
  const trunk = []; let parent = neck, y0 = -0.25, z0 = 0.85;
  for (const [len, r] of [[0.7, 0.2], [0.65, 0.15], [0.55, 0.1]]) { const seg = new THREE.Group(); seg.position.set(0, y0, z0); parent.add(seg); const m = new THREE.Mesh(cylGeo(r, r * 0.8, 8), skin); m.scale.set(1, len, 1); m.position.y = -len / 2; seg.add(m); trunk.push(seg); parent = seg; y0 = -len; z0 = 0; }
  trunk[0].rotation.x = 0.35; trunk[1].rotation.x = 0.15;
  for (const s of [-1, 1]) { const t = new THREE.Mesh(cylGeo(0.015, 0.07, 6), ivory); t.scale.set(1, 0.75, 1); t.position.set(s * 0.25, -0.35, 0.7); t.rotation.x = 2.1; neck.add(t); }
  const legs = [[-0.5, 0.82], [0.5, 0.82], [-0.5, -0.82], [0.5, -0.82]].map(([x, z]) => limb(body, x, -0.6, z, 1.55, 0.32, 0.3, skin, toe));
  const tail = new THREE.Group(); tail.position.set(0, 0.3, -1.4); tail.rotation.x = -0.15; body.add(tail); bx(0.06, 1.0, 0.06, skin, 0, -0.5, 0, tail);
  return finishAnimal(g, { body, neck, head, legs, tail, ears, trunk, legLen: 1.55, neckRest: 0, neckGraze: 0.22 });
}
function makeZebra() {
  const g = new THREE.Group(), coat = zebraMat(false), legM = zebraMat(true), dark = darkHide();
  const body = new THREE.Group(); body.position.y = 1.32; g.add(body);
  bx(0.5, 0.62, 1.35, coat, 0, 0, 0, body);
  const neck = new THREE.Group(); neck.position.set(0, 0.2, 0.62); neck.rotation.x = 0.55; body.add(neck);
  bx(0.2, 0.78, 0.38, coat, 0, 0.36, 0, neck); bx(0.06, 0.78, 0.12, dark, 0, 0.38, -0.21, neck);
  const head = new THREE.Group(); head.position.set(0, 0.75, 0.04); head.rotation.x = 0.55; neck.add(head);
  bx(0.2, 0.22, 0.55, coat, 0, 0, 0.22, head); bx(0.16, 0.16, 0.14, dark, 0, -0.02, 0.5, head);
  for (const s of [-1, 1]) bx(0.05, 0.2, 0.06, coat, s * 0.08, 0.17, -0.02, head);
  const legs = [[-0.17, 0.5], [0.17, 0.5], [-0.17, -0.5], [0.17, -0.5]].map(([x, z]) => limb(body, x, -0.3, z, 1.02, 0.065, 0.045, legM, dark));
  const tail = new THREE.Group(); tail.position.set(0, 0.2, -0.68); tail.rotation.x = -0.3; body.add(tail); bx(0.04, 0.6, 0.04, dark, 0, -0.3, 0, tail);
  return finishAnimal(g, { body, neck, head, legs, tail, legLen: 1.02, neckRest: 0.55, neckGraze: 1.95 });
}
function makeGazelle() {
  const g = new THREE.Group(), dark = darkHide();
  const coat = mat('gazelle', () => new THREE.MeshStandardMaterial({ color: 0xb8783c, roughness: 0.85 })), white = mat('gazelleBelly', () => new THREE.MeshStandardMaterial({ color: 0xefe6d6, roughness: 0.85 }));
  const body = new THREE.Group(); body.position.y = 0.98; g.add(body);
  bx(0.32, 0.36, 0.85, coat, 0, 0, 0, body); bx(0.28, 0.1, 0.7, white, 0, -0.16, 0, body); bx(0.22, 0.24, 0.05, white, 0, 0, -0.43, body);
  const neck = new THREE.Group(); neck.position.set(0, 0.12, 0.38); neck.rotation.x = 0.5; body.add(neck);
  bx(0.13, 0.5, 0.2, coat, 0, 0.24, 0, neck);
  const head = new THREE.Group(); head.position.set(0, 0.5, 0.02); head.rotation.x = 0.6; neck.add(head);
  bx(0.13, 0.14, 0.34, coat, 0, 0, 0.13, head);
  for (const s of [-1, 1]) { const horn = new THREE.Mesh(cylGeo(0.008, 0.022, 5), dark); horn.scale.set(1, 0.4, 1); horn.position.set(s * 0.04, 0.24, -0.04); horn.rotation.set(-0.45, 0, s * 0.18); head.add(horn); bx(0.04, 0.14, 0.08, coat, s * 0.08, 0.08, -0.05, head); }
  const legs = [[-0.1, 0.3], [0.1, 0.3], [-0.1, -0.3], [0.1, -0.3]].map(([x, z]) => limb(body, x, -0.12, z, 0.86, 0.035, 0.025, coat, dark));
  const tail = new THREE.Group(); tail.position.set(0, 0.1, -0.44); tail.rotation.x = -0.3; body.add(tail); bx(0.03, 0.25, 0.03, dark, 0, -0.12, 0, tail);
  return finishAnimal(g, { body, neck, head, legs, tail, legLen: 0.86, neckRest: 0.5, neckGraze: 1.95 });
}

// walk: diagonal pairs; run: front pair then back pair (a gallop)
function animAnimal(a, dt, t) {
  const r = a.rig, run = a.speed > a.spec.walk * 1.6;
  a.phase += dt * a.speed / r.legLen * (run ? 1.7 : 2.4);
  const amp = Math.min(1, a.speed / a.spec.walk) * (run ? 0.75 : 0.36);
  const off = run ? [0, 0.4, Math.PI, Math.PI + 0.4] : [0, Math.PI, Math.PI, 0];
  r.legs.forEach((l, i) => { l.rotation.x = Math.sin(a.phase + off[i]) * amp; });
  r.body.position.y = r.bodyY + (run ? Math.abs(Math.sin(a.phase)) * 0.07 * r.legLen : 0);
  const nt = a.state === 'graze' ? r.neckGraze : r.neckRest + Math.sin(t * 0.6 + a.seed) * 0.04;
  r.neck.rotation.x += (nt - r.neck.rotation.x) * Math.min(1, dt * 2);
  r.tail.rotation.z = Math.sin(t * 2.4 + a.seed) * 0.35;
  if (r.ears) { r.ears[0].rotation.y = -0.25 - Math.max(0, Math.sin(t * 1.3 + a.seed)) * 0.35; r.ears[1].rotation.y = 0.25 + Math.max(0, Math.sin(t * 1.3 + a.seed + 0.5)) * 0.35; }
  if (r.trunk) { r.trunk[0].rotation.x = 0.35 + Math.sin(t * 0.9 + a.seed) * 0.12 + (a.state === 'graze' ? 0.15 : 0); r.trunk[2].rotation.x = 0.25 + Math.sin(t * 1.4 + a.seed) * 0.3; }
}

const SPECIES = {
  giraffe: { build: makeGiraffe, walk: 1.5, run: 6.5, flee: 0, herd: [3, 4], spread: 12, r: 0.9 },
  elephant: { build: makeElephant, walk: 1.2, run: 3.5, flee: 0, herd: [3, 4], spread: 10, r: 1.4 },
  zebra: { build: makeZebra, walk: 1.4, run: 8.5, flee: 12, herd: [5, 7], spread: 9, r: 0.55 },
  gazelle: { build: makeGazelle, walk: 1.2, run: 10.5, flee: 14, herd: [6, 8], spread: 9, r: 0.35 },
};
const RANGES = { echo: { x0: -150, x1: -46, z0: -56, z1: 56 }, ashen: { x0: 46, x1: 150, z0: -56, z1: 56 } };
const HERDS = [['zebra', 'echo'], ['gazelle', 'echo'], ['giraffe', 'echo'], ['elephant', 'echo'], ['gazelle', 'ashen'], ['zebra', 'ashen'], ['giraffe', 'ashen']];
function spawnAnimals() {
  for (const [sp, rg] of HERDS) {
    const R = RANGES[rg], S = SPECIES[sp];
    const herd = { R, c: new V3(rand(R.x0 + 15, R.x1 - 15), 0, rand(R.z0 + 15, R.z1 - 15)), to: null, t: 0 };
    G.herds.push(herd);
    for (let i = 0, n = randi(...S.herd); i < n; i++) {
      const rig = S.build();
      const a = { kind: 'animal', sp, spec: S, rig, group: rig.group, herd, pos: herd.c.clone().add(new V3(rand(-S.spread, S.spread), 0, rand(-S.spread, S.spread))), yaw: rand(0, 6.28), wantYaw: undefined, speed: 0, phase: rand(0, 6), seed: rand(0, 100), state: 'graze', t: rand(1, 8), to: null, fleeT: 0, alive: true };
      a.group.scale.setScalar(rand(0.9, 1.08)); a.group.position.copy(a.pos); a.group.rotation.y = a.yaw;
      W.scene.add(a.group); G.animals.push(a); bakeLOD(a);
    }
  }
}
function startFlee(a, from) {
  for (const b of G.animals) if (b.herd === a.herd && b.state !== 'flee' && d2(b.pos, a.pos) < 18) { b.state = 'flee'; b.fleeT = rand(2.5, 4); b.from = from; b.jink = rand(-0.5, 0.5); }
}
function updateAnimals(dt) {
  const P = G.P, t = G.time;
  for (const h of G.herds) { // herds drift slowly across their range
    h.t -= dt; if (h.t <= 0 || !h.to) { h.t = rand(25, 60); h.to = new V3(rand(h.R.x0 + 12, h.R.x1 - 12), 0, rand(h.R.z0 + 12, h.R.z1 - 12)); }
    const dx = h.to.x - h.c.x, dz = h.to.z - h.c.z, L = Math.hypot(dx, dz); if (L > 0.5) { h.c.x += dx / L * 0.5 * dt; h.c.z += dz / L * 0.5 * dt; }
  }
  for (const a of G.animals) {
    const S = a.spec, dp = d2(a.pos, P.pos);
    if (S.flee && !P.dead && dp < S.flee && a.state !== 'flee') startFlee(a, P.pos);   // zebras and gazelles bolt, and spook their herd
    let target = 0;
    if (a.state === 'flee') {
      a.fleeT -= dt; target = S.run;
      if (a.fleeT <= 0 && dp > S.flee * 1.6) { a.state = 'graze'; a.t = rand(2, 5); }
      else a.wantYaw = Math.atan2(a.pos.x - a.from.x, a.pos.z - a.from.z) + a.jink;
    } else if (a.state === 'walk') {
      target = S.walk;
      if (!a.to || d2(a.pos, a.to) < 1) { a.state = 'graze'; a.t = rand(4, 12); }
      else a.wantYaw = Math.atan2(a.to.x - a.pos.x, a.to.z - a.pos.z);
    } else if ((a.t -= dt) <= 0) { a.state = 'walk'; a.to = a.herd.c.clone().add(new V3(rand(-S.spread, S.spread), 0, rand(-S.spread, S.spread))); }
    const R = a.herd.R; // never wander off the plains (into the city, the plaza or the crater)
    if (a.pos.x < R.x0 || a.pos.x > R.x1 || a.pos.z < R.z0 || a.pos.z > R.z1) a.wantYaw = Math.atan2(a.herd.c.x - a.pos.x, a.herd.c.z - a.pos.z);
    a.speed += (target - a.speed) * Math.min(1, dt * (a.state === 'flee' ? 4 : 2));
    if (a.wantYaw !== undefined) { let dy = a.wantYaw - a.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2; a.yaw += dy * Math.min(1, dt * (a.state === 'flee' ? 5 : 1.6)); }
    a.pos.x += Math.sin(a.yaw) * a.speed * dt; a.pos.z += Math.cos(a.yaw) * a.speed * dt;
    resolveCollision(a.pos, S.r);
    a.group.position.copy(a.pos); a.group.rotation.y = a.yaw;
    if (a.lodNear !== false) animAnimal(a, dt, t); // far animals are drawn from the shared batch; no need to pose limbs
  }
}

// Birds: every bird in the sky is one instanced mesh; wings flap in the vertex shader.
function makeBirdFlock(list, color = 0x2a221d) {
  const pos = [], wing = [];
  const tri = (a, b, c, w) => { pos.push(...a, ...b, ...c); wing.push(w, w, w); };
  // body (a thin diamond) and two swept wings
  tri([0, 0.06, 0.45], [-0.09, 0, 0], [0.09, 0, 0], 0); tri([0, 0.06, 0.45], [0.09, 0, 0], [0, 0.05, -0.5], 0); tri([0, 0.06, 0.45], [0, 0.05, -0.5], [-0.09, 0, 0], 0);
  for (const s of [-1, 1]) { tri([s * 0.08, 0.02, 0.2], [s * 1.3, 0, -0.15], [s * 0.08, 0.02, -0.25], 1); tri([s * 1.3, 0, -0.15], [s * 0.75, 0.01, -0.4], [s * 0.08, 0.02, -0.25], 1); }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('wing', new THREE.Float32BufferAttribute(wing, 1)); geo.computeVertexNormals();
  const m = new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = grassTime;
    sh.vertexShader = 'uniform float uTime;\nattribute float wing;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
        float rate = length(instanceMatrix[0].xyz) < 1.0 ? 11.0 : 4.5;   // small birds flap fast, vultures slow
      #else
        float ph = 0.0; float rate = 5.0;
      #endif
      float glide = 0.2 + 0.8 * step(0.2, sin(uTime * 0.5 + ph));      // soar, then a burst of beats
      transformed.y += wing * abs(position.x) * sin(uTime * rate + ph) * 0.55 * glide;`);
  };
  const im = new THREE.InstancedMesh(geo, m, list.length); im.frustumCulled = false; im.userData.birds = list;
  return im;
}
const _bq = new THREE.Quaternion(), _be = new THREE.Euler(0, 0, 0, 'YXZ'), _bm = new THREE.Matrix4(), _bs = new V3(), _bp = new V3();
function updateBirds(im, t) {
  im.userData.birds.forEach((b, i) => {
    const a = b.ph + t * b.speed / b.r * b.dir;
    _bp.set(b.cx + Math.cos(a) * b.r, b.h + Math.sin(t * 0.3 + b.ph) * 1.5, b.cz + Math.sin(a) * b.r);
    _be.set(0, Math.atan2(-Math.sin(a) * b.dir, Math.cos(a) * b.dir), -0.35 * b.dir); _bq.setFromEuler(_be);
    im.setMatrixAt(i, _bm.compose(_bp, _bq, _bs.setScalar(b.s)));
  });
  im.instanceMatrix.needsUpdate = true;
}
function birdRing(n, cx, cz, r0, r1, h0, h1, speed, s) { return Array.from({ length: n }, () => ({ cx: cx + rand(-6, 6), cz: cz + rand(-6, 6), r: rand(r0, r1), h: rand(h0, h1), speed: speed * rand(0.85, 1.15), s: s * rand(0.85, 1.15), ph: rand(0, 6.28), dir: Math.random() < 0.5 ? 1 : -1 })); }

function makePlate(cls, html) {
  const el = document.createElement('div'); el.className = 'plate ' + cls; el.innerHTML = html; el.style.display = 'none';
  $('plates').appendChild(el); return el;
}
function addHitbox(ent, w, h, d, y) {
  const hb = new THREE.Mesh(GEO.box, new THREE.MeshBasicMaterial({ visible: false }));
  hb.scale.set(w, h, d); hb.position.y = y; hb.userData.ent = ent; ent.group.add(hb); ent.hitbox = hb;
}

function spawnNPCs() {
  // Governor Croxian Mascar
  const m = mascarInstance(2.25); m.position.set(CONC.x, 1.2, CONC.z - 12); W.scene.add(m);
  const mascar = { kind: 'npc', id: 'mascar', name: 'Croxian Mascar', title: 'Governor of Ad-Nostra', pos: new V3(CONC.x, 1.2, CONC.z - 12), group: m, height: 2.6, radius: 1, alive: true, pl: 7, hp: 1600, maxHp: 1600 };
  mascar.plate = makePlate('npc', `<div class="qm"></div><div class="n"><b class="pld">◆7</b> Croxian Mascar</div><div class="g">&lt;Governor of Ad-Nostra&gt;</div>`);
  addHitbox(mascar, 1.2 / m.scale.x, 2.4, 1.2, 1.2);
  G.npcs.push(mascar);
  // Quartermaster Ilse Varn
  const r = makeHumanoid({ armor: 0x4a3f2c, accent: 0xe8c46a, visor: 0xe8c46a, weapon: 'none' });
  r.group.position.set(CONC.x + 13, 0, CONC.z - 3); r.group.rotation.y = -Math.PI / 2.4; W.scene.add(r.group);
  const counter = bx(1, 1.1, 3.4, armorMat(0x2a313b), CONC.x + 11.6, 0.55, CONC.z - 3, W.scene); addCollider(CONC.x + 11.6, CONC.z - 3, 1, 3.4);
  bx(0.05, 0.05, 3.42, glowMat(0xe8c46a, 1.5), CONC.x + 11.08, 1.1, CONC.z - 3, W.scene);
  for (let i = 0; i < 4; i++) bx(0.9, 0.9, 0.9, armorMat(0x3a3326), CONC.x + 14.5 + rand(-.5, .5), 0.45 + (i > 2 ? 0.9 : 0), CONC.z - 4.5 + i * 0.9, W.scene).rotation.y = rand(-.3, .3);
  const ilse = { kind: 'npc', id: 'ilse', name: 'Ilse Varn', title: 'Concord Quartermaster', pos: new V3(CONC.x + 13, 0, CONC.z - 3), group: r.group, rig: r, height: 2.1, radius: 1, alive: true };
  ilse.plate = makePlate('npc', `<div class="n">Ilse Varn</div><div class="g">&lt;Concord Quartermaster&gt;</div>`);
  addHitbox(ilse, 1, 2, 1, 1);
  G.npcs.push(ilse);
}

// Outer Ward Remnants: tougher takes on the Hollowed and the drones. base = which body and behaviour they use.
const VARIANTS = {
  rusthollow: { base: 'hollowed', name: 'Rail-Yard Hollowed', armor: 0x2e1e14, accent: 0xff8a2b, scale: 1.12, hp: 1.15, dmg: 1.05 },
  scrapdrone: { base: 'drone', name: 'Scrap Drone', glow: 0xff8a2b, scale: 1.1 },
  stalker: { base: 'hollowed', name: 'Ashfall Stalker', armor: 0x18161a, accent: 0xb07bff, scale: 1.15, hp: 1.1, dmg: 1.15, speed: 1.3, aggro: 1.3 },
  cinderdrone: { base: 'drone', name: 'Cinder Drone', glow: 0xffb030, scale: 1.15, hp: 1.1 },
  brute: { base: 'hollowed', name: 'Reservoir Brute', armor: 0x2a0a10, accent: 0xff2b4a, scale: 1.65, hp: 2.1, dmg: 1.5, speed: 0.8, atkCd: 2.3, radius: 0.9 },
  sentinel: { base: 'drone', name: 'Catharsis Sentinel', glow: 0xff2b4a, scale: 1.5, hp: 1.7, dmg: 1.3, radius: 1.2 },
};
function makeEnemy(type, level, x, z, temp = false, variant = null) {
  const V = variant && VARIANTS[variant]; if (V) type = V.base;
  const e = { kind: 'enemy', type, variant, level, pl: ZONES[zoneAt(x, z)].pl, spawn: new V3(x, 0, z), pos: new V3(x, 0, z), alive: true, state: 'idle', target: null, atkT: rand(0.5, 1.5), wanderT: rand(1, 6), wanderTo: null, dots: [], tagged: false, yaw: rand(0, 6.28), anim: rand(0, 10), temp, move: 0 };
  let rig;
  if (type === 'hollowed') {
    Object.assign(e, { name: level >= 4 ? 'Beacon-Bound Hollowed' : 'Hollowed', maxHp: 70 + 30 * level, dmg: 5 + 2.6 * level, atkCd: 1.7, atkR: 2.1, speed: 3.4 + 0.25 * level, aggroR: 13, xp: 36 + 16 * level, height: 2.15, radius: 0.55, respawn: 16 });
    rig = makeHumanoid({ armor: V ? V.armor : 0x1b1517, accent: V ? V.accent : 0xff2b4a, visor: V ? V.accent : 0xff2b4a, weapon: 'none', hollow: true });
    rig.group.scale.setScalar(V ? V.scale : 1 + level * 0.03);
  } else if (type === 'drone') {
    Object.assign(e, { name: 'Echo Drone', maxHp: 55 + 22 * level, dmg: 5 + 2.3 * level, atkCd: 2.2, atkR: 13, speed: 4.6, aggroR: 16, xp: 42 + 17 * level, height: 3.5, radius: 0.85, respawn: 18 });
    rig = makeDrone(level, V ? V.glow : undefined); if (V) rig.group.scale.setScalar(V.scale);
  } else {
    Object.assign(e, { name: 'Remnant of the Catharsis', isBoss: true, maxHp: 2600, dmg: 24, atkCd: 2.3, atkR: 4.8, speed: 3.3, aggroR: 20, xp: 950, height: 8.4, radius: 2.2, respawn: 120, slamT: 7, phase: 0 });
    rig = makeBoss(); e.pl = ZONES.crater.pl + 1;
  }
  if (V) {
    const f = clamp((e.pl - 1) / 5, 0, 1);   // a Brute in the gentlest district is big, but not yet twice as hard
    e.name = V.name; e.maxHp = Math.round(e.maxHp * (1 + ((V.hp || 1) - 1) * f)); e.dmg *= 1 + ((V.dmg || 1) - 1) * f; e.speed *= V.speed || 1; e.aggroR *= V.aggro || 1;
    if (V.atkCd) e.atkCd = V.atkCd; if (V.radius) e.radius = V.radius; e.height = V.base === 'hollowed' ? 2 * V.scale : 3.3 * V.scale;
    e.xp = Math.round(e.xp * 1.15); e.respawn += 6;
  }
  e.rig = rig; e.group = rig.group; e.hp = e.maxHp;
  e.group.position.copy(e.pos); W.scene.add(e.group);
  const s = e.group.scale.x;
  addHitbox(e, (e.radius * 2) / s, e.height / s, (e.radius * 2) / s, e.height / 2 / s);
  e.plate = makePlate('enemy', `<div class="n"><b class="pld">◆${e.pl}</b> ${esc(e.name)} <span style="color:#aaa">${e.level}</span></div><div class="hb"><i></i></div>`);
  e.plateBar = e.plate.querySelector('.hb i');
  G.enemies.push(e);
  return e;
}
function spawnEnemies() {
  // levels by power level: ◆1 1-3, ◆2 2-4, ◆3 4-6, ◆4 9-12, ◆5 13-16, ◆6 17-21
  const LV = { 1: [1, 3], 2: [2, 4], 3: [4, 6], 4: [9, 12], 5: [13, 16], 6: [17, 21] }, lv = id => randi(...LV[ZONES[id].pl]);
  for (let i = 0; i < 16; i++) { const x = rand(44, 150), z = rand(-56, 56); makeEnemy('hollowed', lv('ashen'), x, z); }
  for (let i = 0; i < 14; i++) { const x = rand(-150, -44), z = rand(-56, 56); makeEnemy('drone', lv('echo'), x, z); }
  for (let i = 0; i < 9; i++) { const a = rand(0, Math.PI * 2), r = rand(22, 56); makeEnemy('hollowed', lv('crater'), CRATER.x + Math.cos(a) * r, CRATER.z + Math.sin(a) * r); }
  for (let i = 0; i < 4; i++) { const a = rand(0, Math.PI * 2), r = rand(20, 50); makeEnemy('drone', lv('crater'), CRATER.x + Math.cos(a) * r, CRATER.z + Math.sin(a) * r); }
  G.boss = makeEnemy('boss', 7, CRATER.x, CRATER.z + 2);
  // the Outer Wards
  const inR = R => [rand(R.x0 + 10, R.x1 - 10), rand(R.z0 + 8, R.z1 - 8)];
  for (let i = 0; i < 15; i++) makeEnemy('hollowed', lv('rail'), ...inR(RAIL), false, 'rusthollow');
  for (let i = 0; i < 6; i++) makeEnemy('drone', lv('rail'), ...inR(RAIL), false, 'scrapdrone');
  for (let i = 0; i < 15; i++) makeEnemy('hollowed', lv('tenements'), ...inR(TENE), false, 'stalker');
  for (let i = 0; i < 7; i++) makeEnemy('drone', lv('tenements'), ...inR(TENE), false, 'cinderdrone');
  const inResv = () => { const a = rand(0, Math.PI * 2), r = rand(12, RESV_R - 12); return [RESV.x + Math.cos(a) * r, RESV.z + Math.sin(a) * r]; };
  for (let i = 0; i < 9; i++) makeEnemy('hollowed', lv('reservoir'), ...inResv(), false, 'brute');
  for (let i = 0; i < 9; i++) makeEnemy('drone', lv('reservoir'), ...inResv(), false, 'sentinel');
}
function spawnShards() {
  const sm = new THREE.MeshStandardMaterial({ color: 0x3a0610, emissive: 0xff2b4a, emissiveIntensity: 3, flatShading: true });
  const beamM = new THREE.MeshBasicMaterial({ color: 0xff2b4a, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2 + rand(-.2, .2), r = rand(24, 54);
    const g = new THREE.Group(); g.position.set(CRATER.x + Math.cos(a) * r, 0, CRATER.z + Math.sin(a) * r);
    const c = new THREE.Mesh(GEO.oct, sm); c.scale.set(0.3, 0.6, 0.3); c.position.y = 0.9; g.add(c);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 14, 6, 1, true), beamM); beam.position.y = 7; g.add(beam);
    W.scene.add(g);
    G.shards.push({ kind: 'shard', pos: g.position, group: g, crystal: c, active: true, respawnT: 0 });
  }
}

// ---------------------------------------------------------------- bots
// Each district's walk out of Concordia Plaza, along the streets. Routes share their first steps; routeTo goes back only
// as far as the fork. East: the Quay Road and the x=128 street; west, the same mirrored; north, round the Dry Reservoir
// and through the Lantern Market to the Frontier.
const QUAY_E = [new V3(31, 0, 506), new V3(128, 0, 505), new V3(128, 0, 192)], QUAY_W = [new V3(-31, 0, 506), new V3(-128, 0, 505), new V3(-128, 0, 192)];   // out between the plaza's lamps
const NORTH = [...QUAY_E, new V3(0, 0, 192), new V3(0, 0, 98), new V3(21, 0, 86), new V3(21, 0, 30)];
const GATES = {
  concordia: [], harbour: [],
  reservoir: [new V3(18, 0, 493), new V3(8, 0, 470), new V3(0, 0, 440)],   // round the statue, up the Harbour Road
  ashen: [...QUAY_E, new V3(128, 0, 70)], rail: [...QUAY_E, new V3(192, 0, 192), new V3(192, 0, 0), new V3(232, 0, 0)],
  echo: [...QUAY_W, new V3(-128, 0, 70)], tenements: [...QUAY_W, new V3(-192, 0, 192), new V3(-192, 0, 0), new V3(-232, 0, 0)],
  market: [...QUAY_E, new V3(0, 0, 192), new V3(0, 0, 140)],
  plaza: [...NORTH, new V3(6, 0, 18)], cantina: [...NORTH, new V3(0, 0, 40), new V3(0, 0, 49)],
  crater: [...NORTH, new V3(6, 0, 18), new V3(0, 0, -38), new V3(0, 0, -106)],
};
// Reachable spots in each Outer Ward district: clear of scenery, with a clear straight walk from the district's entry.
const DPOINTS = {};
const districtEntry = (zone, p) => zone === 'reservoir' ? new V3(0, 0, RESV.z + RESV_R - 10) : new V3(p.x, 0, 0);   // the Reservoir's south gap faces the plaza
function buildDistrictPoints() {
  const blocked = pointBlocked;
  const clear = (a, b) => { const n = Math.ceil(d2(a, b) / 1.5); for (let i = 0; i <= n; i++) if (blocked(a.x + (b.x - a.x) * i / n, a.z + (b.z - a.z) * i / n, 0.8)) return false; return true; };
  for (const zone of ['rail', 'tenements', 'reservoir']) {
    const list = DPOINTS[zone] = [];
    for (let tries = 0; tries < 900 && list.length < 40; tries++) {
      const q = zone === 'reservoir' ? (() => { const a = rand(0, Math.PI * 2), r = rand(6, RESV_R - 12); return new V3(RESV.x + Math.cos(a) * r, 0, RESV.z + Math.sin(a) * r); })()
        : (() => { const R = zone === 'rail' ? RAIL : TENE; return new V3(rand(R.x0 + 8, R.x1 - 8), 0, rand(R.z0 + 8, R.z1 - 8)); })();
      if (zoneAt(q.x, q.z) !== zone || blocked(q.x, q.z)) continue;
      const entry = districtEntry(zone, q);
      if (zone === 'reservoir' ? !clear(entry, q) : (blocked(entry.x, entry.z) || !clear(entry, q))) continue;
      list.push(q);
    }
  }
}
const _cin = new Set(), _cinL = [];
function collidersIn(x0, z0, x1, z1) {   // colliders overlapping a rectangle, through the grid
  _cin.clear(); _cinL.length = 0;
  if (!G.colGrid) { for (const k of G.colliders) if (k.maxX > x0 && k.minX < x1 && k.maxZ > z0 && k.minZ < z1) _cinL.push(k); return _cinL; }
  for (let gx = Math.floor(x0 / COL_CELL); gx <= Math.floor(x1 / COL_CELL); gx++) for (let gz = Math.floor(z0 / COL_CELL); gz <= Math.floor(z1 / COL_CELL); gz++)
    for (const k of G.colGrid.get(gx * 10007 + gz) || []) if (!_cin.has(k) && k.maxX > x0 && k.minX < x1 && k.maxZ > z0 && k.minZ < z1) { _cin.add(k); _cinL.push(k); }
  return _cinL;
}
function pointBlocked(x, z, m = 1.2) {
  if (!G.colGrid) return false;
  for (let gx = Math.floor((x - m) / COL_CELL); gx <= Math.floor((x + m) / COL_CELL); gx++) for (let gz = Math.floor((z - m) / COL_CELL); gz <= Math.floor((z + m) / COL_CELL); gz++)
    for (const c of G.colGrid.get(gx * 10007 + gz) || []) if (x > c.minX - m && x < c.maxX + m && z > c.minZ - m && z < c.maxZ + m) return true;
  return false;
}
// a random spot in a zone that isn't inside a wreck, a rock or a wall
function zonePoint(z) {
  let p = zonePoint0(z);
  for (let i = 0; i < 12 && z !== 'cantina' && pointBlocked(p.x, p.z); i++) p = zonePoint0(z);
  return p;
}
// Where a bot calls home: everyone lives in Concordia Plaza now, and sets out from there.
const homeZone = () => 'concordia';
const homePoint = b => zonePoint(homeZone(b));
function zonePoint0(z) {
  if (z === 'cantina') return cantinaSpot();
  if (z === 'concordia') { const a = rand(0, Math.PI * 2), r = rand(8, 26); const p = new V3(CONC.x + Math.cos(a) * r, 0, CONC.z + Math.sin(a) * r); if (p.z < CONC.z - 6 && Math.abs(p.x - CONC.x) < 8) p.z = CONC.z + 4; return p; }
  if (z === 'ashen') return new V3(rand(46, 145), 0, rand(-50, 50));
  if (z === 'echo') return new V3(rand(-145, -46), 0, rand(-50, 50));
  if (z === 'crater') { const a = rand(0, Math.PI * 2), r = rand(12, 50); return new V3(CRATER.x + Math.cos(a) * r, 0, CRATER.z + Math.sin(a) * r); }
  if (DPOINTS[z] && DPOINTS[z].length) { const p = pick(DPOINTS[z]); return new V3(p.x + rand(-1, 1), 0, p.z + rand(-1, 1)); }
  if (z === 'rail') return new V3(rand(RAIL.x0 + 10, RAIL.x1 - 10), 0, rand(-10, 10));
  if (z === 'tenements') return new V3(rand(TENE.x0 + 10, TENE.x1 - 10), 0, rand(-10, 10));
  if (z === 'reservoir') return new V3(rand(-10, 10), 0, RESV.z - 60);
  const a = rand(0, Math.PI * 2), r = rand(6, 26); const p = new V3(Math.cos(a) * r, 0, Math.sin(a) * r); if (p.z < -6 && Math.abs(p.x) < 7) p.z = 4; return p;
}
// Where an Ascendant of a given power level goes hunting: zones at or a little below their own power.
const HUNT_ZONES = ['ashen', 'echo', 'crater', 'rail', 'tenements', 'reservoir'];
function botZones(b) { const l = HUNT_ZONES.filter(z => ZONES[z].pl <= (b.pl | 0) && ZONES[z].pl >= (b.pl | 0) - 2); return l.length ? l : ['ashen']; }
function spawnBots() {
  const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, 14);
  for (const name of names) {
    const ck = pick(Object.keys(CLASSES)); const c = CLASSES[ck];
    const visor = new THREE.Color(pick(VISORS)).getHex();
    const rig = soldierReady() ? makeSoldier({ energy: visor, accent: c.hex, weapon: c.weapon, tint: pick(BOT_TINTS), mats: SOLDIER_MATS })
      : makeHumanoid({ armor: pick([0x2b323c, 0x3a3f4a, 0x2a2f2a, 0x3b2f36, 0x262c38]), accent: c.hex, visor, weapon: c.weapon });
    const b = { kind: 'bot', name, cls: ck, level: randi(3, 18), guild: pick(GUILDS), rig, group: rig.group, pos: zonePoint('concordia'), alive: true, hp: 260, maxHp: 260, state: 'idle', path: [], idleT: rand(2, 20), actT: 0, act: 'plaza', target: null, atkT: 0, yaw: 0, move: 0, atk: 0, danceT: 0, height: 2.1, radius: 0.5,
      vy: 0, slideT: -1, rollT: 0, bjT: 0, flipT: 0, landT: 0, landHard: false, boost: 1, canFlip: false };
    b.pl = clamp(1 + Math.floor(b.level / 4), 1, 5);
    b.group.position.copy(b.pos); W.scene.add(b.group);
    b.plate = makePlate('bot', `<div class="n">${esc(name)}</div>${b.guild ? `<div class="g">&lt;${esc(b.guild)}&gt;</div>` : ''}`);
    addHitbox(b, 0.9, 2, 0.9, 1);
    if (Math.random() < 0.6) { b.act = pick(botZones(b)); b.pos.copy(zonePoint(b.act)); b.state = 'hunt'; b.actT = rand(40, 160); b.group.position.copy(b.pos); }
    G.bots.push(b);
  }
}
// =====================================================================
//  ALLIES: Orion and Malia Mascar, and your Residents
// =====================================================================
// Orion and Malia are level 15 and roam the whole map like the Ascendants do: the plaza, the Scorched Veld,
// the Echo Plains, the Crater and the Salt Lantern. They hunt Remnants, come to your aid when Remnants go for
// you, and will fight at your side if you ask (Orion draws Remnants off you, Malia heals you). They can be
// defeated; when they are, they get back up in Concordia Plaza. Residents are the player's own retired
// Ascendants, living in the city as allies. Allies live in G.bots: b.ally marks them, b.legend the Mascars.
const ORION_PLAQUE_SPOT = new V3(1.9, 0, 57.3);   // where he stands in the Lantern, looking down at his plaque
const PARTY_MAX = 3, RESIDENTS_MAX = 16;
function allyBase(extra) {
  return Object.assign({ kind: 'bot', ally: true, guild: '', alive: true, state: 'idle', path: [], idleT: rand(6, 14), actT: 0, act: 'plaza', target: null,
    atkT: 0, yaw: 0, move: 0, atk: 0, danceT: 0, height: 2.1, radius: 0.5, vy: 0, slideT: -1, rollT: 0, bjT: 0, flipT: 0, landT: 0, landHard: false, boost: 1,
    canFlip: false, talkT: 0, party: false, thinkT: 0, routeT: 0, supT: 0, medT: 0, hitT: 0, swings: 0, stuckN: 0, resume: null }, extra);
}
function allyPlate(b, cls) {
  b.plate = makePlate(cls, `<div class="n"><b class="pld">◆${b.pl | 0}</b> ${esc(b.name)} <span style="color:#aaa">${b.level}</span></div><div class="g">&lt;${esc(b.title)}&gt;</div><div class="hb ally"><i></i></div>`);
  b.plateBar = b.plate.querySelector('.hb i'); b.plateHb = b.plate.querySelector('.hb'); b.plateHb.style.visibility = 'hidden';
}
// Orion and Malia level up from the Remnants they kill, as you and your Residents do. Every five levels past 15 their
// power level rises by one (they have no quartermaster), and with it the districts they hunt. Their progress is kept
// for the whole realm, not per Ascendant.
const MASCAR_KEY = 'adnostra_mascars';
// Balance: they are strong friends, not a substitute for your own blade. See the BALANCE notes in the README.
const MASCAR_BASE = { orion: { pl: 4, hp: 820, dmg: 28 }, malia: { pl: 3, hp: 640, dmg: 20 } };
const legendPL = b => clamp(MASCAR_BASE[b.id].pl + Math.floor((b.level - 15) / 5), 0, 9);
const plZones = pl => { const l = HUNT_ZONES.filter(z => ZONES[z].pl <= pl); return l.length ? l : ['ashen']; };
function applyLegendLevel(b) {
  const B = MASCAR_BASE[b.id], k = 1 + 0.04 * (b.level - 15);
  b.pl = legendPL(b); b.maxHp = Math.round(B.hp * k); b.dmg = B.dmg * k; b.hp = Math.min(b.hp || b.maxHp, b.maxHp);
  b.zones = plZones(b.pl); if (b.id === 'orion') b.zones.push('crater');   // he never tires of the Crater
}
function loadLegend(b) {
  const sv = (store.get(MASCAR_KEY, {}) || {})[b.id];
  if (sv && sv.level > 15) { b.level = Math.min(30, sv.level | 0); b.xp = sv.xp | 0; } else b.xp = 0;
  applyLegendLevel(b); b.hp = b.maxHp;
}
const saveLegends = () => { const o = {}; for (const b of G.bots) if (b.legend) o[b.id] = { level: b.level, xp: b.xp | 0 }; if (Object.keys(o).length) store.set(MASCAR_KEY, o); };
// An ally's share of a kill: experience as you'd get it, scaled down for Remnants far below them.
function allyXp(b, e) {
  if (b.level >= 30) return;
  let xp = e.xp; const diff = b.level - e.level; if (diff >= 4) xp = Math.round(xp * 0.2); else if (diff >= 2) xp = Math.round(xp * 0.6);
  b.xp = (b.xp | 0) + xp;
  const near = G.P && d2(b.pos, G.P.pos) < 40;
  while (b.xp >= xpNext(b.level) && b.level < 30) {
    b.xp -= xpNext(b.level); b.level++;
    const oldPL = b.pl | 0;
    if (b.legend && !b.fury) applyLegendLevel(b);
    else if (b.resident) { const st = residentStats({ cls: b.cls, level: b.level }); Object.assign(b, { maxHp: st.maxHp, dmg: st.dmg }); }
    b.hp = b.maxHp;
    if (b.save) { b.save.level = b.level; b.save.xp = b.xp; }
    b.plate.querySelector('.n span').textContent = b.level; b.plate.querySelector('.pld').textContent = `◆${b.pl | 0}`;
    if (near) { ringFx(b.pos, 0xe8c46a, 5, 1.1); burst(b.pos.clone().setY(1), 0xe8c46a, 30, 3.5); floater(b.pos, 'LEVEL UP', '#e8c46a', 2.8, true); }
    addChat('sys', null, `${b.name} has reached level ${b.level}${(b.pl | 0) > oldPL ? ` and power level ${b.pl}` : ''}!`);
    if (b.party) renderParty();
    if (b.legend) saveLegends(); else saveRoster();
  }
  if (b.save) b.save.xp = b.xp;
}
function spawnOrion() {
  if (!soldierReady('orion')) return;
  const rig = makeSoldier({ model: 'orion', accent: 0x8fe6ff, weapon: 'greatsword', mats: SOLDIER_MATS });
  const o = allyBase({ legend: true, id: 'orion', name: 'Orion Mascar', title: 'Father of the Governor', cls: 'vanguard', level: 15, rig, group: rig.group,
    pos: zonePoint('concordia'), hp: 820, maxHp: 820, dmg: 28, atkCd: [1.3, 1.7], reach: 2.7, glow: 0x8fe6ff, pron: 'He', poss: 'his', lines: ORION_LINES,
    pl: 4, zones: ['ashen', 'echo', 'crater', 'crater', 'rail'], respawnT: 45, loungeSpot: ORION_PLAQUE_SPOT, loungeLook: new V3(0.6, 0, 56) });
  loadLegend(o);
  o.group.position.copy(o.pos); W.scene.add(o.group);
  allyPlate(o, 'npc'); addHitbox(o, 0.9, 2, 0.9, 1);
  G.bots.push(o);
}
// Malia Mascar, the Governor's wife. Her left hand stays on her hip; the right carries a short energy blade.
function spawnMalia() {
  if (!soldierReady('malia')) return;
  const rig = makeSoldier({ model: 'malia', accent: 0x8fe6ff, weapon: 'sabre', mats: SOLDIER_MATS, hold: ['clavL', 'uarmL', 'farmL', 'handL'] });
  const m = allyBase({ legend: true, id: 'malia', name: 'Malia Mascar', title: 'Wife of the Governor', cls: 'vanguard', level: 15, rig, group: rig.group,
    pos: new V3(CONC.x + rand(-6, 6), 0, CONC.z + rand(-2, 4)), hp: 640, maxHp: 640, dmg: 20, atkCd: [0.9, 1.25], reach: 2.4, glow: 0x8fe6ff, pron: 'She', poss: 'her', lines: MALIA_LINES,
    pl: 3, zones: ['ashen', 'echo', 'echo', 'crater'], respawnT: 45, height: 2.0, idleT: rand(10, 25), loungeSpot: new V3(-7.0, 0, 65.6), loungeLook: new V3(-8.6, 0, 67.4) });
  loadLegend(m);
  m.group.position.copy(m.pos); W.scene.add(m.group);
  allyPlate(m, 'npc'); addHitbox(m, 0.9, 2, 0.9, 1);
  G.bots.push(m);
}
// ---- residents
const residentStats = s => { const c = CLASSES[s.cls] || CLASSES.vanguard; return { level: s.level, maxHp: Math.round(c.hp * (1 + 0.1 * (s.level - 1)) * 1.6), dmg: 6 + s.level * 1.4 }; };
function spawnResident(s) {
  const c = CLASSES[s.cls] || CLASSES.vanguard, visor = new THREE.Color(s.visor).getHex(), st = residentStats(s);
  const rig = soldierReady() ? makeSoldier({ energy: visor, accent: c.hex, weapon: c.weapon, mats: SOLDIER_MATS })
    : makeHumanoid({ armor: 0x2f3742, accent: c.hex, visor, weapon: c.weapon });
  const b = allyBase({ resident: true, id: 'res:' + s.id, save: s, name: s.name, title: 'Resident of Ad-Nostra', cls: s.cls, level: st.level, rig, group: rig.group,
    pos: zonePoint('concordia'), hp: st.maxHp, maxHp: st.maxHp, dmg: st.dmg, xp: s.xp | 0, pl: s.armour == null ? 1 : s.armour, pron: 'They', poss: 'their', lines: RESIDENT_LINES, respawnT: 15, idleT: rand(3, 15) });
  if (Math.random() < 0.6) { b.act = pick(botZones(b)); b.pos.copy(zonePoint(b.act)); b.state = 'hunt'; b.actT = rand(40, 160); }
  b.group.position.copy(b.pos); W.scene.add(b.group);
  allyPlate(b, 'bot res'); addHitbox(b, 0.9, 2, 0.9, 1);
  G.bots.push(b);
  return b;
}
function removeBot(b) {
  W.scene.remove(b.group); b.plate.remove(); b.removed = true;
  for (const e of G.enemies) if (e.target === b) { e.target = null; e.state = 'return'; }
  if (G.P && G.P.target === b) setTarget(null);
}
// Bring the world's residents in line with the registry (called each time you enter the world).
function syncResidents() {
  const want = G.roster.filter(c => c.resident && c.id !== G.D.id).slice(-RESIDENTS_MAX);
  const ids = new Set(want.map(c => 'res:' + c.id));
  for (const b of G.bots) if (b.resident && !ids.has(b.id)) removeBot(b);
  G.bots = G.bots.filter(b => !b.removed);
  for (const s of want) {
    const b = G.bots.find(x => x.id === 'res:' + s.id);
    if (!b) { spawnResident(s); continue; }
    const st = residentStats(s); b.save = s;
    b.pl = s.armour == null ? 1 : s.armour;
    b.xp = s.xp | 0;
    if (b.level !== st.level) { Object.assign(b, { level: st.level, maxHp: st.maxHp, dmg: st.dmg }); b.hp = Math.min(b.hp, b.maxHp); b.plate.querySelector('.n span').textContent = st.level; }
  }
}
// ---- the party: allies who fight at your side
const partyList = () => G.bots.filter(b => b.party);
const ZONE_IN = { plaza: 'the Frontier', concordia: 'Concordia Plaza', causeway: 'the Concord Causeway', ward: 'the Spire Wards', ashen: 'the Scorched Veld', echo: 'the Echo Plains', crater: 'the Catharsis Crater', cantina: 'the Salt Lantern', rail: 'the Sunken Rail Yards', tenements: 'the Ashfall Tenements', reservoir: 'the Dry Reservoir',
  market: 'the Lantern Market', harbour: 'the Harbour', ring: 'the Rampart Ring', northgate: 'Northgate', sunrise: 'Sunrise Ward', kopje: 'Kopje Heights', dhow: 'the Dhow Quarter' };
const PARTY_SLOTS = [[-1.9, -2.2], [1.9, -2.2], [0, -3.9]];   // [right, forward] from the player, in metres
function partyOffset(b) {
  const i = Math.max(0, partyList().indexOf(b)), [sx, fz] = PARTY_SLOTS[i % PARTY_SLOTS.length];
  const yaw = G.P.group.rotation.y, s = Math.sin(yaw), c = Math.cos(yaw);
  return { x: s * fz + c * sx, z: c * fz - s * sx };
}
function routeTo(from, to) {   // waypoints through the zone gates, so nobody walks into the city walls
  const zf = zoneAt(from.x, from.z), zt = zoneAt(to.x, to.z);
  const A = GATES[zf] || [], Bt = GATES[zt] || []; let k = 0;
  while (k < A.length && k < Bt.length && A[k] === Bt[k]) k++;   // shared steps: only walk back as far as the fork
  const path = (zf === zt ? [] : [...A.slice(k)].reverse().concat(k ? [A[k - 1]] : [], Bt.slice(k))).map(p => p.clone());
  if (zt !== zf && (zt === 'rail' || zt === 'tenements' || zt === 'reservoir')) path.push(districtEntry(zt, to));
  if (zf !== zt && (zf === 'rail' || zf === 'tenements' || zf === 'reservoir')) path.unshift(districtEntry(zf, from));
  path.push(new V3(to.x, 0, to.z));
  for (let i = path.length - 1; i > 0; i--) if (d2(path[i], path[i - 1]) < 1) path.splice(i, 1);   // shared gates
  while (path.length > 1 && d2(from, path[1]) < d2(path[0], path[1])) path.shift();   // gates already behind us
  return path;
}
function sendHome(b) {   // back to their own business, wherever they are
  b.party = false; b.target = null; b.resume = null; b.wp = null; b.path = [];
  const z = zoneAt(b.pos.x, b.pos.z);
  if (z === 'ashen' || z === 'echo' || z === 'crater') { b.state = 'hunt'; b.act = z; b.actT = rand(40, 120); }
  else if (z === 'cantina') { b.state = 'lounge'; b.act = 'cantina'; b.actT = rand(20, 60); }
  else if (z === homeZone(b)) { b.state = 'idle'; b.act = 'plaza'; b.idleT = rand(6, 16); }
  else { b.state = 'travel'; b.act = 'plaza'; b.path = routeTo(b.pos, homePoint(b)); }
}
function joinParty(b) {
  b.party = true; b.resume = null; b.target = null; b.path = []; b.wp = null;
  if (b.alive) b.state = 'escort';
  G.D.party = partyList().map(x => x.id); renderParty(); saveGame();
  addChat('sys', null, `${b.name} is now fighting at your side.`);
  setTimeout(() => addChat('say', b.name, pick(b.lines.joinSay)), 700);
}
function leaveParty(b, quiet = false) {
  if (b.alive) sendHome(b); else b.party = false;
  G.D.party = partyList().map(x => x.id); renderParty(); saveGame();
  if (quiet) return;
  addChat('sys', null, `${b.name} has left your side.`);
  setTimeout(() => addChat('say', b.name, pick(b.lines.partSay)), 600);
}
// On entering the world: your saved companions are with you again, standing beside you.
function restoreParty() {
  const want = new Set(G.D.party || []);
  if (want.has('orion') && want.has('malia')) want.delete('malia');   // saves from before only one Mascar could come along
  for (const b of G.bots) if (b.ally) {
    const was = b.party; b.party = want.has(b.id);
    if (b.party && b.alive) {
      b.state = 'escort'; b.target = null; b.path = []; b.resume = null; b.talkT = 0;
      const o = partyOffset(b); b.pos.set(G.P.pos.x + o.x, 0, G.P.pos.z + o.z); resolveCollision(b.pos, 0.4); b.group.position.copy(b.pos);
    } else if (was && !b.party && b.alive) sendHome(b);
  }
  G.D.party = partyList().map(x => x.id);
  renderParty();
}
function partyOpt(b, talk) {
  return b.party ? { label: 'PART WAYS', fn: () => { leaveParty(b); talk(b, fmtQ(b.lines.part)); } }
    : { label: 'FIGHT AT MY SIDE', gold: true, fn: () => {
      if (partyList().length >= PARTY_MAX) { talk(b, fmtQ(b.lines.full)); return; }
      if (b.legend && partyList().some(o => o.legend)) { talk(b, fmtQ(b.lines.family)); return; }   // the city needs the other one
      joinParty(b); talk(b, fmtQ(b.lines.join));
    } };
}
// ---- what an ally does
const engagedWith = (e, b) => e.alive && (e.target === G.P || e.target === b || (e.target && e.target.party));
function enemyOnPlayer(from, range) {   // the nearest Remnant going for you (or for one of your companions)
  let best = null, bd = range;
  for (const e of G.enemies) { if (!e.alive || !(e.target === G.P || (e.target && e.target.party))) continue; const d = d2(from, e.pos); if (d < bd) { bd = d; best = e; } }
  return best;
}
function allyPickTarget(b) {
  const P = G.P, anchor = P.dead ? b.pos : P.pos, cur = b.target;
  if (cur && engagedWith(cur, b) && d2(cur.pos, anchor) < 30) return cur;
  let best = null, bd = 1e9;
  for (const e of G.enemies) { if (!engagedWith(e, b) || d2(e.pos, anchor) > 30) continue; const d = d2(e.pos, b.pos); if (d < bd) { bd = d; best = e; } }
  if (best) return best;
  const pt = P.target;   // otherwise, whatever you are fighting
  if (!P.dead && pt && pt.kind === 'enemy' && pt.alive && P.combatT > 0 && d2(pt.pos, P.pos) < 30) return pt;
  return null;
}
// Melee or ranged strikes, shared by every bot. The Mascars add their own flourishes.
function botFight(b, t, dt) {
  const c = CLASSES[b.cls], ranged = c.range > 5, reach = (ranged ? 14 : b.reach || 2.2) + t.radius;
  if (d2(b.pos, t.pos) > reach) { moveToward(b, t.pos, b.party ? 12 : b.legend ? 7.5 : 10, dt, reach * 0.9); return; }
  b.move = Math.max(0, b.move - dt * 5); faceTo(b, t.pos); b.atkT -= dt;
  if (b.atkT > 0) return;
  b.atkT = b.atkCd ? rand(b.atkCd[0], b.atkCd[1]) : rand(1.4, 1.9); b.atk = 0.3; b.swings++;
  const dmg = (b.dmg || 6 + b.level * 0.7) * rand(0.9, 1.1), near = d2(b.pos, G.P.pos) < 30;
  if (ranged) { b.actHint = 'cast'; projectile(b.pos.clone().setY(b.pos.y + 1.4), t, c.hex, 0.12, 30, () => damage(t, dmg, b), b); return; }
  if (b.id === 'orion' && b.swings % 5 === 0) {   // a wide greatsword sweep through everything around him
    b.actHint = 'judge';
    for (const e of G.enemies) if (e.alive && d2(e.pos, b.pos) < 5 + e.radius) damage(e, dmg * (e === t ? 1.2 : 0.6), b);
    if (near) { ringFx(b.pos, 0x8fe6ff, 5, 0.45); slashFx(t, 0x8fe6ff, 1.8); Sound.sfx('heavy'); }
    return;
  }
  damage(t, dmg, b);
  if (b.id === 'malia' && b.swings % 3 === 0) setTimeout(() => { if (t.alive && b.alive) { damage(t, dmg * 0.7, b); if (near) slashFx(t, 0x8fe6ff, 0.9); } }, 220);   // a quick second cut
  if (near && (b.ally || Math.random() < 0.5)) slashFx(t, b.glow || c.hex, b.legend ? 1.3 : 0.9);
}
function stuckCheck(b, dt, moving) {   // if a companion is wedged on scenery, they catch up the quick way
  b.stuckClock = (b.stuckClock || 0) + dt; if (b.stuckClock < 1) return; b.stuckClock = 0;
  const lp = b.lastP || (b.lastP = b.pos.clone()), moved = d2(b.pos, lp); lp.copy(b.pos);
  if (!moving || moved > 1.2) { b.stuckN = 0; return; }
  if (++b.stuckN < 3) return;
  b.stuckN = 0; b.path = [];
  const o = partyOffset(b); b.pos.set(G.P.pos.x + o.x, 0, G.P.pos.z + o.z); resolveCollision(b.pos, 0.4);
  burst(b.pos.clone().setY(1), 0x3ee6ff, 16, 2);
}
const _fv = new V3();
function allyFollow(b, dt) {
  const P = G.P, d = d2(b.pos, P.pos);
  b.routeT -= dt;
  if (d > 40 && b.routeT <= 0) { b.routeT = 1.5; b.path = routeTo(b.pos, P.pos); }
  if (d < 18) b.path = [];
  if (b.path.length > 1) { if (moveToward(b, b.path[0], 14.5, dt, 1.2)) b.path.shift(); stuckCheck(b, dt, true); return; }
  const o = partyOffset(b), dest = _fv.set(P.pos.x + o.x, 0, P.pos.z + o.z), dd = d2(b.pos, dest);
  const sp = d > 16 ? 14.5 : clamp(Math.hypot(P.vel.x, P.vel.z) * 1.1 + dd * 0.8, 3.5, 14.5);
  if (dd > 0.9) { moveToward(b, dest, sp, dt, 0.6); stuckCheck(b, dt, dd > 6); }
  else { b.move = Math.max(0, b.move - dt * 5); b.stuckN = 0; }
}
function escortLogic(b, dt) {
  b.thinkT -= dt;
  if (b.thinkT <= 0) { b.thinkT = 0.3; b.target = allyPickTarget(b); }
  const t = b.target;
  if (t && t.alive) botFight(b, t, dt); else { b.target = null; allyFollow(b, dt); }
}
// Not in your party, but close by when a Remnant goes for you: they drop what they were doing and help.
function startAssist(b, e) {
  b.resume = { state: b.state, act: b.act, actT: b.actT, idleT: b.idleT, dest: b.path.length ? b.path[b.path.length - 1] : null };
  b.state = 'assist'; b.target = e; b.wp = null; b.path = [];
}
function assistCheck(b, dt) {
  b.thinkT -= dt; if (b.thinkT > 0) return; b.thinkT = 0.4;
  const P = G.P;
  if (!P || P.dead || b.state === 'lounge' || zoneAt(b.pos.x, b.pos.z) === 'cantina' || d2(b.pos, P.pos) > 30) return;
  const e = enemyOnPlayer(b.pos, 24); if (e) startAssist(b, e);
}
function assistLogic(b, dt) {
  const P = G.P;
  if (!b.target || !engagedWith(b.target, b)) b.target = enemyOnPlayer(b.pos, 24);
  if (!b.target || P.dead || d2(b.pos, P.pos) > 45) { endAssist(b); return; }
  botFight(b, b.target, dt);
}
function endAssist(b) {
  const r = b.resume; b.resume = null; b.target = null; b.path = [];
  if (!r) { sendHome(b); return; }
  Object.assign(b, { state: r.state, act: r.act, actT: r.actT, idleT: r.idleT });
  if (r.state === 'travel' && r.dest) b.path = routeTo(b.pos, r.dest);
  else if (r.state === 'travel' || r.state === 'escort') sendHome(b);
}
// Abilities that make the Mascars worth having around: Malia heals, Orion pulls Remnants off you.
function allySupport(b, dt) {
  b.supT = Math.max(0, b.supT - dt); b.medT = Math.max(0, b.medT - dt); b.hitT = Math.max(0, b.hitT - dt);
  if (b.hitT <= 0) b.hp = Math.min(b.maxHp, b.hp + b.maxHp * 0.03 * dt);   // out of the fight, they recover
  if (b.hp < b.maxHp * 0.3 && b.medT <= 0) {   // their own Concord medkit
    b.medT = 30; const h = Math.round(b.maxHp * 0.4); b.hp = Math.min(b.maxHp, b.hp + h);
    if (d2(b.pos, G.P.pos) < 30) { burst(b.pos.clone().setY(1), 0x4dff9a, 14, 2); floater(b.pos, '+' + h, '#4dff9a', 2.4); }
  }
  const P = G.P;
  if (!b.legend || b.supT > 0 || !P || P.dead || b.talkT > 0 || d2(b.pos, P.pos) > (b.party ? 28 : 20)) return;
  if (b.id === 'malia') {
    let who = P.hp < maxHp() * 0.4 ? P : null;
    if (!who) for (const o of G.bots) if (o.party && o.alive && o !== b && o.hp < o.maxHp * 0.4 && d2(o.pos, b.pos) < 22) { who = o; break; }
    if (!who) return;
    const mx = who === P ? maxHp() : who.maxHp, amt = Math.round(mx * 0.22);
    who.hp = Math.min(mx, who.hp + amt); b.supT = 24; b.atk = 0.3; b.actHint = 'restore'; faceTo(b, who.pos);
    ringFx(who.pos, 0x4dff9a, 2.4, 0.6); burst(who.pos.clone().setY(1.1), 0x4dff9a, 22, 2.2); boltFx(b.pos.clone().setY(1.4), who.pos.clone().setY(1.2), 0x4dff9a);
    floater(who.pos, '+' + amt, '#4dff9a', 2.7); Sound.sfx('heal');
    if (who === P) addChat('say', b.name, pick(MALIA_LINES.heal));
  } else if (b.id === 'orion') {
    if (P.hp >= maxHp() * 0.3) return;
    const foes = G.enemies.filter(e => e.alive && e.target === P && d2(e.pos, P.pos) < 20);
    if (!foes.length) return;
    b.supT = 30; b.atk = 0.3; b.actHint = 'slam';
    for (const e of foes) { e.target = b; e.state = 'chase'; }
    ringFx(b.pos, 0xe8c46a, 6, 0.5); floater(b.pos, 'HOLD THE LINE', '#e8c46a', 2.9); Sound.sfx('shield');
    addChat('say', b.name, pick(ORION_LINES.taunt));
    if (!b.party && b.state !== 'assist') startAssist(b, foes[0]); else b.target = foes[0];
  }
}
// ---- the Governor steps in
// Very rarely, when Malia is close to falling with Remnants on her, Croxian leaves his dais in a flash of Carax light,
// draws them onto himself and cuts them down with his scythe, then goes straight back: the Concord does not like its
// Governor out on the plains. He is power level 7, above everything in the city except whatever waits beyond the wall.
// He only ever comes for her: not for you, and not on any schedule you can count on.
const CROX = { state: 'dais', t: 0, cd: 180, rollT: 0, calm: 0, atkT: 0, spin: 0, home: new V3(CONC.x, 1.2, CONC.z - 12) };
function croxianNear() { return G.P && d2(G.P.pos, G.npcs[0].pos) < 150; }
function croxianLogic(dt) {
  const c = G.npcs[0], m = G.bots.find(b => b.id === 'malia'); if (!c || !m || c.id !== 'mascar') return;
  CROX.cd -= dt; CROX.rollT -= dt;
  if (CROX.state === 'dais') {
    if (CROX.cd > 0 || CROX.rollT > 0 || !m.alive || m.hp > m.maxHp * 0.35) return;
    const foes = G.enemies.filter(e => e.alive && e.target === m && d2(e.pos, m.pos) < 16);
    if (!foes.length) return;
    CROX.rollT = 60;                                   // one roll per time she's in trouble...
    if (Math.random() > 0.2) return;                   // ...and usually she handles it herself
    // a flash on the dais, and he's beside her
    if (d2(G.P.pos, c.pos) < 80) burst(c.pos.clone().setY(2), 0x3ee6ff, 40, 4);
    const a = rand(0, 6.28); c.pos.set(m.pos.x + Math.cos(a) * 2.6, 0, m.pos.z + Math.sin(a) * 2.6); resolveCollision(c.pos, 0.8); c.group.position.copy(c.pos);
    ringFx(c.pos, 0x3ee6ff, 6, 0.7); burst(c.pos.clone().setY(1.5), 0x3ee6ff, 60, 5);
    for (const e of foes) { e.target = c; e.state = 'chase'; }
    Object.assign(CROX, { state: 'fight', t: 24, calm: 0, atkT: 0.4, spin: 0 }); c.hp = c.maxHp; c.alive = true;
    if (croxianNear()) {
      banner('THE GOVERNOR', 'CROXIAN MASCAR', 'STANDS OVER HIS WIFE · ◆7');
      addChat('say', c.name, pick(CROXIAN_LINES.arrive));
    } else setTimeout(() => botSay(pick(chatBots()), pick(CROXIAN_LINES.seen)), 2500);
    return;
  }
  if (CROX.state === 'down') {   // on the ground; if Malia falls too, Orion comes
    CROX.t -= dt;
    if (!m.alive && !CROX.furyDone) orionFury(c);
    if (CROX.t <= 0 && !G.bots.some(b => b.fury)) croxianRise(c, m);
    return;
  }
  // fighting: Remnants on Malia or on him, within reach of her
  CROX.t -= dt;
  let tgt = null, bd = 18;
  for (const e of G.enemies) { if (!e.alive || !(e.target === m || e.target === c || d2(e.pos, m.pos) < 8)) continue; const d = d2(e.pos, c.pos); if (d < bd) { bd = d; tgt = e; } }
  CROX.calm = tgt ? 0 : CROX.calm + dt;
  if (CROX.t <= 0 || CROX.calm > 3.5) { croxianLeave(c, m); return; }
  if (CROX.spin > 0) { CROX.spin -= dt; c.group.rotation.y += dt * 22; }   // the scythe, all the way round
  else if (tgt) {
    if (d2(c.pos, tgt.pos) > 3.6 + tgt.radius) moveToward(c, tgt.pos, 9, dt, 3.2 + tgt.radius);
    turnTo(c.group, Math.atan2(tgt.pos.x - c.pos.x, tgt.pos.z - c.pos.z), dt, 10);
    CROX.atkT -= dt;
    if (CROX.atkT <= 0 && d2(c.pos, tgt.pos) < 4.6 + tgt.radius) {
      CROX.atkT = 1.7; CROX.spin = 0.45;
      for (const e of G.enemies) if (e.alive && d2(e.pos, c.pos) < 4.8 + e.radius) damage(e, 52 * rand(0.9, 1.1), c);
      if (d2(G.P.pos, c.pos) < 60) { ringFx(c.pos, 0x3ee6ff, 4.8, 0.45); slashFx(tgt, 0x8fe6ff, 2); Sound.sfx('heavy'); if (Math.random() < 0.25) addChat('say', c.name, pick(CROXIAN_LINES.strike)); }
    }
  } else if (d2(c.pos, m.pos) > 5) { moveToward(c, m.pos, 9, dt, 3); turnTo(c.group, Math.atan2(m.pos.x - c.pos.x, m.pos.z - c.pos.z), dt, 8); }
  resolveCollision(c.pos, 0.8); c.group.position.set(c.pos.x, 0, c.pos.z);
}
// He can fall, out there. If Malia falls too, Orion Mascar loses his temper.
function croxianFall(c, killer) {
  if (CROX.state !== 'fight') { c.hp = c.maxHp; return; }
  c.alive = false; c.hp = 0; CROX.state = 'down'; CROX.t = 30; CROX.killer = killer && killer.kind === 'enemy' ? killer : null; CROX.where = c.pos.clone(); CROX.furyDone = false;
  for (const e of G.enemies) if (e.target === c) { e.target = null; e.state = 'return'; }
  c.group.rotation.set(-Math.PI / 2, c.group.rotation.y, 0); c.group.position.set(c.pos.x, 0.35, c.pos.z);
  addChat('sys', null, `Governor Croxian Mascar has fallen in ${ZONE_IN[zoneAt(c.pos.x, c.pos.z)]}.`);
  if (croxianNear()) addChat('say', c.name, pick(CROXIAN_LINES.fall));
}
function croxianRise(c, m) {
  c.alive = true; c.hp = c.maxHp; c.group.rotation.set(0, 0, 0);
  if (croxianNear()) addChat('say', c.name, pick(CROXIAN_LINES.rise));
  croxianLeave(c, m);
}
// Orion, for a little while, at power level 9: straight to whatever put his son down, and through it.
function orionFury(c) {
  const o = G.bots.find(b => b.id === 'orion'); CROX.furyDone = true;
  if (!o || !o.alive) return;
  let foe = CROX.killer && CROX.killer.alive ? CROX.killer : null;
  if (!foe) { let bd = 30; for (const e of G.enemies) { if (!e.alive) continue; const d = d2(e.pos, CROX.where); if (d < bd) { bd = d; foe = e; } } }
  if (!foe) return;
  o.fury = { foe, t: 40, prev: { pl: o.pl, dmg: o.dmg, atkCd: o.atkCd, state: o.state, party: o.party }, auraT: 0 };
  o.pl = 9; o.dmg *= 2; o.atkCd = [0.55, 0.8]; o.hp = o.maxHp; o.talkT = 0; o.path = []; o.resume = null; o.target = foe;
  o.plate.querySelector('.pld').textContent = '◆9';
  if (d2(o.pos, foe.pos) > 6) { burst(o.pos.clone().setY(1.5), 0xffd27a, 40, 4); const a = rand(0, 6.28); o.pos.set(foe.pos.x + Math.cos(a) * 3, 0, foe.pos.z + Math.sin(a) * 3); resolveCollision(o.pos, 0.5); o.group.position.copy(o.pos); }
  ringFx(o.pos, 0xffd27a, 9, 0.9); burst(o.pos.clone().setY(1.5), 0xffd27a, 80, 6);
  foe.target = o; foe.state = 'chase';
  const near = G.P && d2(G.P.pos, o.pos) < 150;
  if (near) { banner('ORION MASCAR', 'POWER LEVEL 9', 'HE IS COMING FOR WHOEVER DID THIS'); addChat('say', o.name, pick(CROXIAN_LINES.fury)); }
  else setTimeout(() => botSay(pick(chatBots()), pick(CROXIAN_LINES.furySeen)), 3000);
}
function furyLogic(o, dt) {
  const F = o.fury; F.t -= dt; F.auraT -= dt;
  if (F.auraT <= 0) { F.auraT = 0.8; if (G.P && d2(G.P.pos, o.pos) < 70) { ringFx(o.pos, 0xffd27a, 3.5, 0.6); burst(o.pos.clone().setY(1.2), 0xffd27a, 10, 2); } }
  if (!F.foe.alive) {   // then anything else still on the spot where his son fell
    let next = null, bd = 16; for (const e of G.enemies) { if (!e.alive) continue; const d = d2(e.pos, CROX.where); if (d < bd) { bd = d; next = e; } }
    if (next && F.t > 0) { F.foe = next; next.target = o; next.state = 'chase'; } else { furyEnd(o); return; }
  }
  if (F.t <= 0) { furyEnd(o); return; }
  if (d2(o.pos, F.foe.pos) > 3 + F.foe.radius) moveToward(o, F.foe.pos, 16, dt, 2.5 + F.foe.radius);
  botFight(o, F.foe, dt);
}
function furyEnd(o) {
  const P = o.fury.prev; o.fury = null;
  o.pl = P.pl; o.dmg = P.dmg; o.atkCd = P.atkCd; o.target = null;
  o.plate.querySelector('.pld').textContent = `◆${o.pl}`;
  if (G.P && d2(G.P.pos, o.pos) < 150) addChat('say', o.name, pick(CROXIAN_LINES.furyDone));
  if (P.party) { o.state = 'escort'; o.party = true; } else sendHome(o);
}
function croxianLeave(c, m) {
  for (const e of G.enemies) if (e.target === c) { e.target = null; e.state = 'return'; }
  const near = croxianNear();
  if (near) { addChat('say', c.name, pick(CROXIAN_LINES.leave)); if (m.alive) setTimeout(() => addChat('say', m.name, pick(CROXIAN_LINES.malia)), 1400); }
  burst(c.pos.clone().setY(1.5), 0x3ee6ff, 40, 4);
  c.pos.copy(CROX.home); c.group.position.copy(CROX.home); c.group.rotation.y = 0; c.hp = c.maxHp;
  if (d2(G.P.pos, c.pos) < 80) burst(c.pos.clone().setY(2), 0x3ee6ff, 40, 4);
  Object.assign(CROX, { state: 'dais', cd: 900, rollT: 0 });   // at least a quarter of an hour before he can slip away again
}
function reviveBot(b) {
  Object.assign(b, { alive: true, hp: b.maxHp, act: 'plaza', idleT: rand(5, 20), path: [], vy: 0, slideT: -1, bjT: 0, flipT: 0, landT: 0, target: null, wp: null, resume: null, talkT: 0 });
  b.pos.copy(homePoint(b)); b.group.rotation.x = 0;
  b.state = b.party ? 'escort' : 'idle';
  if (!b.ally) return;
  b.hitT = 0; b.medT = 0;
  if (d2(b.pos, G.P.pos) < 60) burst(b.pos.clone().setY(1), 0x3ee6ff, 30, 3);
  if (b.party || b.legend) addChat('sys', null, `${b.name} is back on ${b.poss} feet in Concordia Plaza.`);
  if (b.party && b.lines.back) setTimeout(() => addChat('say', b.name, pick(b.lines.back)), 900);
}
// ---- talking to them
function allyDialog(b, who, text, extra) {
  b.talkT = 12;
  dialog(who, b.name.toUpperCase(), `LV ${b.level} · ${b.alive ? (b.party ? 'FIGHTING AT YOUR SIDE' : (ZONE_IN[zoneAt(b.pos.x, b.pos.z)] || '').toUpperCase()) : 'FALLEN'}`, text, '', [
    ...extra, partyOpt(b, (x, t) => allyDialog(x, who, t, extra)),
    { label: 'FAREWELL', fn: () => { b.talkT = 1.5; closeAllUI(); } },
  ]);
}
function talkMalia(m, text = pick(MALIA_LINES.greet)) {
  allyDialog(m, 'WIFE OF THE GOVERNOR', text, [
    { label: 'THE CITY', fn: () => talkMalia(m, MALIA_LINES.city) },
    { label: 'CROXIAN', fn: () => talkMalia(m, MALIA_LINES.croxian) },
    { label: 'ORION', fn: () => talkMalia(m, MALIA_LINES.orion) },
    { label: 'THE BLADE', fn: () => talkMalia(m, MALIA_LINES.blade) },
  ]);
}
function talkOrion(o, text = pick(ORION_LINES.greet)) {
  allyDialog(o, 'FATHER OF THE GOVERNOR', text, [
    { label: 'THE WAR', fn: () => talkOrion(o, ORION_LINES.war) },
    { label: 'THE SALT LANTERN', fn: () => talkOrion(o, ORION_LINES.lantern) },
    { label: 'YOUR SON', fn: () => talkOrion(o, ORION_LINES.son) },
  ]);
}
function talkResident(b, text = pick(RESIDENT_LINES.greet)) {
  const s = b.save, c = CLASSES[s.cls];
  b.talkT = 12;
  const since = s.residentSince ? new Date(s.residentSince).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
  dialog('RESIDENT OF AD-NOSTRA', s.name.toUpperCase(), `LV ${s.level} ${c.name}${s.title && s.title !== 'Ascendant' ? ' · ' + s.title.toUpperCase() : ''}`, fmtQ(text),
    `Remnants destroyed: ${fmtNum(s.kills | 0)}${since ? ' · Resident since ' + since : ''}`, [
      partyOpt(b, talkResident),
      { label: 'FAREWELL', fn: () => { b.talkT = 1.5; closeAllUI(); } },
    ]);
}
const chatBots = () => G.bots.filter(b => !b.ally);   // the simulated players (allies don't chat like them)

// =====================================================================
//  PLAYER
// =====================================================================
const SPAWN = new V3(CONC.x, 0, CONC.z + 8);   // in Concordia Plaza, in front of the Governor
function newSave(name, cls, visor) {
  return { v: 1, id: newId(), name, cls, visor, party: [], armour: 1, trams: ['concordia', 'plaza'], level: 1, xp: 0, credits: 30, medkits: 3, wpn: 0, arm: 0, q: { i: 0, st: 'available', p: 0 }, aleT: 0, kills: 0, deaths: 0, title: 'Ascendant', played: 0, completed: 0, pos: null, created: Date.now() };
}
const xpNext = l => Math.round(140 * Math.pow(l, 1.55));
// ---- power level (0–9), as in RuneScape: Dragonwilds. Yours comes from your armour; zones and enemies have their own.
// Fighting something above your power level is brutal: it hits you far harder and shrugs off your blows.
const ARMOUR = [
  { name: 'No armour', cost: 0, lvl: 1 },
  { name: 'Recruit Weave', cost: 0, lvl: 1 },
  { name: 'Salvage Plate', cost: 150, lvl: 3 },
  { name: 'Ceramite Shell', cost: 400, lvl: 6 },
  { name: 'Titan Lattice', cost: 900, lvl: 9 },
  { name: 'Carbide Mail', cost: 1600, lvl: 12 },
  { name: 'Graphene Weave', cost: 2600, lvl: 15 },
  { name: 'Aegis Plate', cost: 4000, lvl: 18 },
  { name: 'Concord Warplate', cost: 6000, lvl: 22 },
  { name: 'Carax Plate', cost: 9000, lvl: 26 },
];
const playerPL = () => clamp(G.D.armour | 0, 0, 9);
const entPL = e => e === G.P ? playerPL() : (e.pl | 0);
// damage multiplier for src hitting tgt (only between Remnants and Ascendants)
function plScale(src, tgt) {
  const gap = entPL(src) - entPL(tgt); if (!gap) return 1;
  const remnant = src.kind === 'enemy';
  if (gap > 0) return remnant ? Math.pow(1.55, gap) : Math.min(1.6, 1 + 0.15 * gap);
  return remnant ? Math.max(0.4, 1 + 0.12 * gap) : Math.pow(0.6, -gap);
}
// how something's power level looks to you: green below you, yellow level, orange one above, red with a skull two or more above
const plTag = pl => { const d = pl - playerPL(); return d >= 2 ? 'pl-r' : d === 1 ? 'pl-o' : d === 0 ? 'pl-y' : 'pl-g'; };
const PL_COL = { 'pl-r': '#ff4a5e', 'pl-o': '#ff9a3c', 'pl-y': '#ffd84a', 'pl-g': '#4dff9a' };
const plText = pl => `◆${pl}${pl - playerPL() >= 2 ? ' ☠' : ''}`;
const CL = () => CLASSES[G.D.cls];
const maxHp = () => Math.round(CL().hp * (1 + 0.1 * (G.D.level - 1)) + 18 * G.D.arm + 20 * playerPL());
const maxEn = () => CL().en;
const dmgScale = () => (1 + 0.12 * (G.D.level - 1)) * (1 + 0.1 * G.D.wpn);

function setupPlayer() {
  const D = G.D, c = CL();
  if (D.armour == null) D.armour = Math.min(3, 1 + Math.floor((D.level - 1) / 6));   // saves from before power levels
  if (!Array.isArray(D.trams)) D.trams = ['plaza'];
  ensureSkills(D);
  if (!D.trams.includes('concordia')) D.trams.unshift('concordia');   // everyone knows the way home
  if (G.P && G.P.group) { W.scene.remove(G.P.group); G.P.plate?.remove(); }
  const visor = new THREE.Color(D.visor).getHex();
  const rig = soldierReady() ? makeSoldier({ energy: visor, accent: c.hex, weapon: c.weapon, mats: SOLDIER_MATS })
    : makeHumanoid({ armor: 0x2f3742, accent: c.hex, visor, weapon: c.weapon });
  const P = {
    kind: 'player', rig, group: rig.group, pos: SPAWN.clone(), vy: 0, yaw: Math.PI, alive: true, dead: false,
    vel: new V3(), airJumps: 1, airCap: 0, slideT: -1, rollT: 0, rollDir: new V3(0, 0, 1), bjT: 0, bjUsed: false, flipT: 0, glide: false, glideT: 0,
    landT: 0, landHard: false, qHeld: false, jumpHeld: false, dustT: 0, combat: false,
    hp: maxHp(), en: maxEn(), shield: 0, shieldT: 0, target: null, gcd: 0, cds: {}, autoOn: false, autoT: 0, combatT: 0,
    critNext: false, atk: 0, move: 0, danceT: 0, medT: 0, height: 2.1, radius: 0.45,
  };
  if (D.pos && Math.hypot(D.pos[0], D.pos[1]) < WORLD_R - 3 && !isWaterPt(D.pos[0], D.pos[1]) && !pointBlocked(D.pos[0], D.pos[1], 0.6)) P.pos.set(D.pos[0], 0, D.pos[1]);
  P.group.position.copy(P.pos); W.scene.add(P.group);
  G.P = P;
  G.cam = { yaw: 0, pitch: 0.2, dist: TOUCH ? 6 : 5.2 };   // framed on the body, over the right shoulder (wheel or pinch to pull back)
  if (P.pos.distanceTo(SPAWN) > 1) G.cam.yaw = Math.atan2(P.pos.x - CONC.x, P.pos.z - CONC.z);
  buildHotbar();
  loadHome(); if (G.build) toggleBuild(false);
}

// =====================================================================
//  COMBAT
// =====================================================================
function floater(pos, text, color, h = 2.2, big = false) {
  const el = document.createElement('div'); el.className = 'fl' + (big ? ' crit' : ''); el.textContent = text; el.style.color = color;
  $('floaters').appendChild(el);
  G.floaters.push({ el, p: new V3(pos.x + rand(-.4, .4), (pos.y || 0) + h, pos.z + rand(-.4, .4)), t: 0, life: big ? 1.4 : 1.1 });
}
function msg(text) { const m = $('center-msg'); m.textContent = text; m.style.opacity = 1; clearTimeout(msg.t); msg.t = setTimeout(() => m.style.opacity = 0, 1300); Sound.sfx('error'); }
function banner(b1, b2, b3 = '', cls = '') {
  const b = $('banner'); b.className = cls; b.querySelector('.b1').textContent = b1; b.querySelector('.b2').textContent = b2; b.querySelector('.b3').textContent = b3;
  b.style.opacity = 1; clearTimeout(banner.t); banner.t = setTimeout(() => b.style.opacity = 0, 2800);
}
function flashHurt() { const v = $('vignette'); v.style.boxShadow = 'inset 0 0 160px rgba(255,20,50,.55)'; clearTimeout(flashHurt.t); flashHurt.t = setTimeout(() => v.style.boxShadow = 'inset 0 0 160px rgba(255,20,50,0)', 160); }

function damage(tgt, amt, src, opt = {}) {
  if (!tgt.alive) return;
  if (src && src.kind && (src.kind === 'enemy') !== (tgt.kind === 'enemy')) amt *= plScale(src, tgt);
  amt = Math.max(1, Math.round(amt));
  const P = G.P;
  if (tgt === P) {
    if (P.dead) return;
    if (P.rollT > 0) { floater(P.pos, 'DODGE', '#9fdcff', 2.3); return; }
    if (P.shield > 0) { const a = Math.min(P.shield, amt); P.shield -= a; amt -= a; floater(P.pos, 'ABSORB ' + a, '#9fdcff', 2.3); }
    P.combatT = 6;
    if (amt <= 0) return;
    P.hp -= amt; floater(P.pos, '-' + amt, '#ff5a6e', 2.3); Sound.sfx('hurt'); flashHurt();
    if (P.hp <= 0) playerDie();
    return;
  }
  tgt.hp -= amt;
  if (tgt.kind === 'enemy') {
    const party = src && src.party && d2(src.pos, P.pos) < 45;   // your companions' hits count as yours
    if (party) tgt.tagged = true;
    if (src === P) { tgt.tagged = true; tgt.yours = true; floater(tgt.pos, String(amt), opt.crit ? '#ffd166' : '#ffffff', tgt.height * 0.75 + (tgt.type === 'drone' ? 0.6 : 0), opt.crit); Sound.sfx('hit'); }
    if (tgt.state === 'idle' || !tgt.target || !tgt.target.alive) { if (tgt.isBoss && (src === P || party) && tgt.state === 'idle') bossEngage(); tgt.target = src; tgt.state = 'chase'; }
    if (src === P && tgt.target && tgt.target.kind === 'bot' && Math.random() < 0.15) tgt.target = P;
    if (tgt.hp <= 0) killEnemy(tgt, src);
  } else if (tgt.kind === 'bot') {
    tgt.hitT = 5;
    if (tgt.hp <= 0) botDie(tgt);
  } else if (tgt.id === 'mascar' && tgt.hp <= 0) croxianFall(tgt, src);
}
function killEnemy(e, src) {
  e.alive = false; e.hp = 0; e.state = 'dead'; e.deadT = 0; e.dots = []; e.target = null;
  burst(e.pos.clone().setY(e.height * 0.5), e.isBoss ? 0xff2b4a : 0xff5a6e, e.isBoss ? 120 : 30, e.isBoss ? 9 : 4);
  Sound.sfx(e.isBoss ? 'boom' : 'die');
  if (G.P.target === e) setTimeout(() => { if (G.P.target === e) setTarget(null); }, 600);
  if (src && src.resident && src.save) src.save.kills = (src.save.kills | 0) + 1;
  if (src && src.ally && src.alive !== false) allyXp(src, e);
  if (e.tagged) {
    const D = G.D; let xp = e.xp; const diff = D.level - e.level;
    if (diff >= 4) xp = Math.round(xp * 0.2); else if (diff >= 2) xp = Math.round(xp * 0.6);
    const share = src && src.legend && !e.yours ? 0.5 : 1;   // a Mascar's kill you never struck is worth half
    xp = Math.round(xp * share);
    gainXp(xp);
    const cr = Math.round((e.isBoss ? 300 : randi(2 + e.level, 6 + e.level * 3)) * share); D.credits += cr; addChat('loot', null, `You loot ${cr} credits.`); Sound.sfx('coin');
    D.kills++;
    questEvent(e.isBoss ? 'boss' : e.type, e);
    if (zoneAt(e.pos.x, e.pos.z) === 'crater' && !e.isBoss && D.q.i === 2 && D.q.st === 'active' && Math.random() < 0.4) { addChat('loot', null, 'You loot: [Beacon Shard]'); questEvent('shard'); }
    if (Math.random() < 0.06 && !e.isBoss) { D.medkits++; addChat('loot', null, 'You loot: [Concord Medkit]'); }
    if (Math.random() < 0.22 && invAdd('scrap', 1)) addChat('loot', null, 'You loot: [Scrap metal]');
    if (e.level >= 4 && Math.random() < 0.06 && invAdd('circuitry', 1)) addChat('loot', null, 'You loot: [Circuitry]');
    if (e.isBoss) { addChat('world', null, `${D.name} has destroyed the Remnant of the Catharsis!`, 'sys'); setTimeout(() => botSay(pick(chatBots()), pick(['GG ' + D.name + '!!', 'legend', 'WOW', 'grats ' + D.name, 'o7 hero'])), 1500); }
  }
  if (e.isBoss) { $('bossbar').classList.add('hidden'); Sound.playMusic('world'); }
}
function gainXp(n) {
  const D = G.D, P = G.P; if (D.level >= 30) return;
  if (D.aleT > 0) n = Math.round(n * (1 + ALE.bonus)); // Lantern Ale
  D.xp += n; floater(P.pos, `+${n} XP`, '#c9a3ff', 2.8);
  while (D.xp >= xpNext(D.level) && D.level < 30) {
    D.xp -= xpNext(D.level); D.level++;
    P.hp = maxHp(); P.en = maxEn();
    banner('LEVEL UP', 'LEVEL ' + D.level, 'YOUR POWER GROWS', 'lv'); Sound.sfx('levelup');
    ringFx(P.pos, 0xe8c46a, 6, 1.2); burst(P.pos.clone().setY(1), 0xe8c46a, 40, 4);
    addChat('sys', null, `Congratulations, you have reached level ${D.level}!`);
    if (Math.random() < 0.6) setTimeout(() => botSay(pick(chatBots()), pick(['grats!', 'gz', 'grats ' + D.name, 'ding!'])), 1200);
    saveGame();
  }
}
function playerDie() {
  const P = G.P; resetMotion(P); P.hp = 0; P.dead = true; P.alive = false; P.autoOn = false; G.D.deaths++;
  Sound.sfx('death'); P.group.rotation.x = -Math.PI / 2; P.group.position.y = 0.3;
  for (const e of G.enemies) if (e.target === P) { e.target = null; e.state = 'return'; }
  closeAllUI(); $('death').classList.remove('hidden');
}
function respawn() {
  const P = G.P; resetMotion(P); P.dead = false; P.alive = true; P.hp = maxHp(); P.en = maxEn(); P.pos.copy(SPAWN); P.group.rotation.x = 0; P.shield = 0;
  setTarget(null); $('death').classList.add('hidden'); burst(P.pos.clone().setY(1), 0x3ee6ff, 40, 3); Sound.sfx('heal');
  G.cam.yaw = 0;
}
function botDie(b) {
  if (b.fury) furyEnd(b);
  b.alive = false; b.hp = 0; b.state = 'dead'; b.deadT = 0; b.target = null;
  b.group.rotation.x = -Math.PI / 2; b.group.position.y = 0.3;
  for (const e of G.enemies) if (e.target === b) { e.target = null; e.state = 'return'; }
  if (b.ally) {
    b.resume = null; b.path = [];
    const near = d2(b.pos, G.P.pos) < 45;
    if (b.party || b.legend || near) addChat('sys', null, `${b.name} has fallen in ${ZONE_IN[zoneAt(b.pos.x, b.pos.z)]}. ${b.pron} will return to Concordia Plaza.`);
    if (near && b.lines.fallen) setTimeout(() => addChat('say', b.name, pick(b.lines.fallen)), 500);
    return;
  }
  if (Math.random() < 0.3) setTimeout(() => addChat('zone', b.name, pick(['ugh', 'rip', 'that thing hits HARD', 'brb corpse run', 'nooo'])), 800);
}

function setTarget(t) {
  const P = G.P; P.target = t;
  if (!t) { P.autoOn = false; }
  updateTargetFrame(true);
}
function nearestEnemy(range, from = G.P.pos, exclude = null) {
  let best = null, bd = range;
  for (const e of G.enemies) { if (!e.alive || e === exclude) continue; const d = d2(from, e.pos) - e.radius; if (d < bd) { bd = d; best = e; } }
  return best;
}
function cycleTarget() {
  const P = G.P; const list = G.enemies.filter(e => e.alive && d2(P.pos, e.pos) < 40).sort((a, b) => d2(P.pos, a.pos) - d2(P.pos, b.pos));
  if (!list.length) { msg('No enemies nearby'); return; }
  const i = list.indexOf(P.target); setTarget(list[(i + 1) % list.length]); P.autoOn = true;
}
function rollCrit() { const P = G.P; if (P.critNext) { P.critNext = false; return true; } return Math.random() < CL().crit; }
function hitTarget(t, base, opt = {}) {
  const crit = opt.noCrit ? false : rollCrit();
  damage(t, base * dmgScale() * (crit ? 1.8 : 1) * rand(0.92, 1.08), G.P, { crit });
}
function faceTo(ent, pos) { ent.yaw = Math.atan2(pos.x - ent.pos.x, pos.z - ent.pos.z); }

function useAbility(i) {
  const P = G.P; if (!P || P.dead || G.mode !== 'world') return;
  if (i === 4) return useMedkit();
  const c = CL(), ab = c.abil[i];
  if ((P.cds[ab.id] || 0) > 0 || P.gcd > 0) { if ((P.cds[ab.id] || 0) > 0) msg('Ability not ready'); return; }
  if (P.en < ab.cost) { msg('Not enough energy'); return; }
  let t = P.target;
  if (ab.target) {
    if (!t || !t.alive || t.kind !== 'enemy') { t = nearestEnemy((ab.range || c.range) + 2); if (!t) { msg('No target'); return; } setTarget(t); }
    const d = d2(P.pos, t.pos) - t.radius;
    if (d > (ab.range || c.range)) { msg('Out of range'); return; }
    faceTo(P, t.pos);
  }
  P.en -= ab.cost; P.cds[ab.id] = ab.cd; P.gcd = c.gcd; P.combatT = 6; if (t) P.autoOn = true; P.actHint = ab.id; P.atk = 0.3;
  const slot = $('hotbar').children[i]; slot.classList.remove('flash'); void slot.offsetWidth; slot.classList.add('flash');
  const hand = P.pos.clone().setY(1.4);
  switch (ab.id) {
    case 'riven': case 'cut': hitTarget(t, ab.dmg); slashFx(t, c.hex); Sound.sfx('slash'); break;
    case 'judge': hitTarget(t, ab.dmg); slashFx(t, 0xe8c46a, 1.8); ringFx(t.pos, 0xe8c46a, 3, 0.4); Sound.sfx('heavy'); break;
    case 'slam': {
      ringFx(P.pos, c.hex, ab.radius, 0.45); Sound.sfx('heavy'); let n = 0;
      for (const e of G.enemies) if (e.alive && d2(P.pos, e.pos) - e.radius < ab.radius) { hitTarget(e, ab.dmg); n++; }
      break;
    }
    case 'guard': P.shield = Math.round(ab.shield * (1 + 0.1 * (G.D.level - 1))); P.shieldT = ab.dur; Sound.sfx('shield'); break;
    case 'bolt': projectile(hand, t, c.hex, 0.18, 34, () => hitTarget(t, ab.dmg)); Sound.sfx('zap'); break;
    case 'lance': projectile(hand, t, 0xffffff, 0.35, 42, () => { hitTarget(t, ab.dmg); ringFx(t.pos, c.hex, 2.5, 0.3); }); Sound.sfx('lance'); break;
    case 'chain': {
      hitTarget(t, ab.dmg); boltFx(hand, t.pos.clone().setY(t.height * 0.6), c.hex);
      let last = t; const hit = [t];
      for (let k = 0; k < 3; k++) {
        let nx = null, bd = ab.jump; for (const e of G.enemies) { if (!e.alive || hit.includes(e)) continue; const dd = d2(last.pos, e.pos); if (dd < bd) { bd = dd; nx = e; } }
        if (!nx) break; hit.push(nx); boltFx(last.pos.clone().setY(last.height * 0.6), nx.pos.clone().setY(nx.height * 0.6), c.hex); hitTarget(nx, ab.dmg * 0.75); last = nx;
      }
      Sound.sfx('zap'); break;
    }
    case 'restore': { const h = Math.round(maxHp() * ab.heal); P.hp = Math.min(maxHp(), P.hp + h); floater(P.pos, '+' + h, '#4dff9a', 2.4); burst(P.pos.clone().setY(1), 0x4dff9a, 30, 2); ringFx(P.pos, 0x4dff9a, 3, 0.6); Sound.sfx('heal'); break; }
    case 'bleed': hitTarget(t, ab.dmg); t.dots.push({ dps: ab.dot * dmgScale(), t: ab.dur, tick: 1, src: P }); slashFx(t, 0xff2b4a); Sound.sfx('slash'); break;
    case 'blink': {
      burst(P.pos.clone().setY(1), c.hex, 20, 2);
      const dir = new V3(P.pos.x - t.pos.x, 0, P.pos.z - t.pos.z).normalize();
      const behind = t.pos.clone().addScaledVector(dir, -(t.radius + 1.0)); behind.y = 0;
      P.pos.copy(behind); resolveCollision(P.pos, P.radius); faceTo(P, t.pos); P.critNext = true;
      burst(P.pos.clone().setY(1), c.hex, 20, 2); Sound.sfx('blink'); break;
    }
    case 'flurry': for (let k = 0; k < ab.hits; k++) G.timers.push({ t: k * 0.12, fn: () => { if (t.alive) { hitTarget(t, ab.dmg); slashFx(t, c.hex, 0.8); Sound.sfx('slash'); P.atk = 0.2; } } }); break;
  }
}
function useMedkit() {
  const P = G.P, D = G.D;
  if (P.medT > 0) { msg('Medkit not ready'); return; }
  if (D.medkits <= 0) { msg('No medkits — visit Ilse Varn'); return; }
  D.medkits--; P.medT = 15; const h = Math.round(maxHp() * 0.5); P.hp = Math.min(maxHp(), P.hp + h);
  floater(P.pos, '+' + h, '#4dff9a', 2.4); burst(P.pos.clone().setY(1), 0x4dff9a, 24, 2); Sound.sfx('heal'); buildHotbarCounts();
}

// ---------------------------------------------------------------- fx
const fxGeo = { ring: new THREE.RingGeometry(0.85, 1, 64), half: new THREE.RingGeometry(0.7, 1.3, 24, 1, 0, Math.PI), disc: new THREE.CircleGeometry(1, 48) };
function addFx(obj, life, update) { W.scene.add(obj); G.fx.push({ obj, t: 0, life, update }); }
function ringFx(pos, color, r, life) {
  const m = new THREE.Mesh(fxGeo.ring, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  m.rotation.x = -Math.PI / 2; m.position.set(pos.x, 0.12, pos.z);
  addFx(m, life, (f, k) => { const s = 0.3 + k * r; m.scale.set(s, s, s); m.material.opacity = 0.9 * (1 - k); });
}
function slashFx(t, color, size = 1.2) {
  const m = new THREE.Mesh(fxGeo.half, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  m.position.set(t.pos.x, (t.pos.y || 0) + t.height * 0.55, t.pos.z); m.lookAt(W.cam.position); m.rotateZ(rand(-1, 1));
  addFx(m, 0.22, (f, k) => { m.scale.setScalar(size * (0.6 + k * 0.6)); m.material.opacity = 1 - k; });
}
function burst(pos, color, n, spd) {
  const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), v = [];
  for (let i = 0; i < n; i++) { p.set([pos.x, pos.y, pos.z], i * 3); v.push(new V3(rand(-1, 1), rand(-0.2, 1.2), rand(-1, 1)).normalize().multiplyScalar(spd * rand(0.4, 1))); }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ map: dotTex(), color, size: 0.26, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  addFx(pts, 0.9, (f, k, dt) => { const a = g.attributes.position; for (let i = 0; i < n; i++) { v[i].y -= 6 * dt; a.setXYZ(i, a.getX(i) + v[i].x * dt, Math.max(0.05, a.getY(i) + v[i].y * dt), a.getZ(i) + v[i].z * dt); } a.needsUpdate = true; pts.material.opacity = 1 - k; });
}
function boltFx(a, b, color) {
  const pts = [a.clone()]; const seg = 7;
  for (let i = 1; i < seg; i++) { const p = a.clone().lerp(b, i / seg); p.x += rand(-.4, .4); p.y += rand(-.4, .4); p.z += rand(-.4, .4); pts.push(p); }
  pts.push(b.clone());
  const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending }));
  addFx(l, 0.25, (f, k) => { l.material.opacity = 1 - k; });
}
function projectile(from, target, color, size, speed, onHit, src = G.P) {
  const m = new THREE.Mesh(GEO.sph, new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending }));
  m.scale.setScalar(size); m.position.copy(from); W.scene.add(m);
  const glow = new THREE.Mesh(GEO.sph, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.setScalar(2.2); m.add(glow);
  G.proj.push({ m, target, speed, onHit, life: 4 });
}
function telegraph(pos, r, delay, onDone) {
  const m = new THREE.Mesh(fxGeo.disc, new THREE.MeshBasicMaterial({ color: 0xff2b4a, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }));
  m.rotation.x = -Math.PI / 2; m.position.set(pos.x, 0.08, pos.z); m.scale.setScalar(r);
  const edge = new THREE.Mesh(fxGeo.ring, new THREE.MeshBasicMaterial({ color: 0xff2b4a, transparent: true, opacity: 0.9, depthWrite: false })); m.add(edge);
  addFx(m, delay, (f, k) => { m.material.opacity = 0.15 + 0.35 * k; edge.scale.setScalar(k); if (k >= 0.999 && !f.done) { f.done = true; onDone(); } });
}

// ---------------------------------------------------------------- collisions
const _colSeen = new Set();
function resolveCollision(p, r) {
  let list = G.colliders;
  if (G.colGrid) {   // only the colliders in the grid cells this circle touches
    const x0 = Math.floor((p.x - r) / COL_CELL), x1 = Math.floor((p.x + r) / COL_CELL), z0 = Math.floor((p.z - r) / COL_CELL), z1 = Math.floor((p.z + r) / COL_CELL);
    if (x0 === x1 && z0 === z1) list = G.colGrid.get(x0 * 10007 + z0) || [];
    else { _colSeen.clear(); for (let gx = x0; gx <= x1; gx++) for (let gz = z0; gz <= z1; gz++) for (const c of G.colGrid.get(gx * 10007 + gz) || []) _colSeen.add(c); list = _colSeen; }
  }
  for (const c of list) {
    if (p.x + r < c.minX || p.x - r > c.maxX || p.z + r < c.minZ || p.z - r > c.maxZ) continue;
    const dl = p.x + r - c.minX, dr = c.maxX - (p.x - r), dt = p.z + r - c.minZ, db = c.maxZ - (p.z - r);
    const m = Math.min(dl, dr, dt, db);
    if (m === dl) p.x -= dl; else if (m === dr) p.x += dr; else if (m === dt) p.z -= dt; else p.z += db;
  }
  const R = Math.hypot(p.x, p.z), RM = WORLD_R - 2; if (R > RM) { p.x *= RM / R; p.z *= RM / R; }
}
function moveToward(ent, dest, speed, dt, stopAt = 0.2) {
  const dx = dest.x - ent.pos.x, dz = dest.z - ent.pos.z, d = Math.hypot(dx, dz);
  if (d <= stopAt + 1e-3) { ent.move = Math.max(0, ent.move - dt * 5); return true; }   // (+1e-3: never creep forever toward the stop distance)
  const s = Math.min(d - stopAt, speed * dt); ent.pos.x += dx / d * s; ent.pos.z += dz / d * s;
  ent.yaw = Math.atan2(dx, dz); ent.move = Math.min(1, ent.move + dt * 5); return false;
}
function turnTo(group, yaw, dt, k = 10) {
  let d = yaw - group.rotation.y; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
  group.rotation.y += d * Math.min(1, dt * k);
}

// =====================================================================
//  UPDATE — world
// =====================================================================
const keys = {};
// ---------------------------------------------------------------- Warframe-style movement
const MV = { run: 9, sprint: 14.5, accel: 55, brake: 70, airAccel: 16, g: 26, jump: 9.2, airJump: 9.2, bjH: 21, bjV: 10.5,
  slideBoost: 3.5, slideFric: 5.5, slideMin: 4.5, rollSpeed: 13, glideFall: 2.0, glideMax: 1.6, hardLand: -12.5 };
function inputDir() {
  if (document.activeElement === $('chat-input') || G.ui) return null;
  let fx = 0, fz = 0;
  if (keys.KeyW || keys.ArrowUp) fz += 1; if (keys.KeyS || keys.ArrowDown) fz -= 1;
  if (keys.KeyA || keys.ArrowLeft) fx -= 1; if (keys.KeyD || keys.ArrowRight) fx += 1;
  if (mouse.both) fz = 1;
  if (joy.id !== null) { fx += joy.x; fz -= joy.y; }
  const yaw = G.cam.yaw;
  const d = new V3(-Math.sin(yaw) * fz + Math.cos(yaw) * fx, 0, -Math.cos(yaw) * fz - Math.sin(yaw) * fx);
  return d.lengthSq() > 0.0004 ? d.normalize() : null;
}
const camForward = () => new V3(-Math.sin(G.cam.yaw), 0, -Math.cos(G.cam.yaw));
function resetMotion(P) {
  P.vel.set(0, 0, 0); P.vy = 0; P.slideT = -1; P.rollT = 0; P.bjT = 0; P.flipT = 0; P.landT = 0; P.glide = false; P.glideT = 0; P.airJumps = 1; P.bjUsed = false;
}
function energyHex() { return new THREE.Color(G.D.visor).getHex(); }
function playerJump() {
  const P = G.P; if (!P || P.dead || G.ui || G.mode !== 'world') return;
  P.jumpHeld = true;
  const grounded = P.pos.y <= (P.gy || 0) + 0.001 && P.vy <= 0.001;
  if (grounded) {
    if (P.slideT >= 0 || P.qHeld) return bulletJump(P);
    if (P.rollT > 0) return;
    P.vy = MV.jump; P.airCap = P.vel.length(); P.landT = 0; Sound.sfx('jump');
  } else if (P.airJumps > 0) {
    P.airJumps--; P.vy = MV.airJump; P.flipT = 1e-4; P.glideT = 0;
    const d = inputDir(); if (d) { const sp = Math.max(P.vel.length(), MV.run); P.vel.copy(d).multiplyScalar(sp); P.airCap = Math.max(P.airCap, sp); }
    Sound.sfx('flip');
  }
}
function bulletJump(P) {
  const d = inputDir() || camForward();
  P.vel.copy(d).multiplyScalar(MV.bjH); P.vy = MV.bjV; P.airCap = MV.bjH; P.bjT = 1e-4; P.bjUsed = true; P.slideT = -1; P.landT = 0; P.airJumps = 1; P.glideT = 0;
  P.yaw = Math.atan2(d.x, d.z); P.group.rotation.y = P.yaw;
  const col = energyHex();
  ringFx(P.pos, col, 2.6, 0.35); burst(P.pos.clone().setY(0.4), col, 18, 4); burst(P.pos.clone().setY(0.1), 0xc9a160, 10, 2.5);
  Sound.sfx('bulletjump');
}
function playerCrouch(down) {
  const P = G.P; if (!P) return;
  P.qHeld = down; if (!down || P.dead || G.ui || G.mode !== 'world') return;
  if (P.pos.y > (P.gy || 0) + 0.001 || P.rollT > 0 || P.slideT >= 0) return;
  const sp = P.vel.length();
  if (sp > 6) { P.slideT = 0; P.landT = 0; P.vel.multiplyScalar((Math.max(sp, MV.sprint) + MV.slideBoost) / sp); Sound.sfx('slide'); }
  else {
    const d = inputDir() || new V3(Math.sin(P.yaw), 0, Math.cos(P.yaw));
    P.rollT = 1e-4; P.rollDir.copy(d); P.yaw = Math.atan2(d.x, d.z); P.landT = 0; Sound.sfx('roll');
  }
}
function landPlayer(P) {
  const impact = P.vy;
  P.airJumps = 1; P.glideT = 0; P.glide = false; P.bjT = 0; P.flipT = 0; P.bjUsed = false;
  if (impact < MV.hardLand) {
    P.landT = 1e-4; P.landHard = true; P.vel.multiplyScalar(0.2);
    ringFx(P.pos, 0xc9a160, 3.2, 0.5); burst(P.pos.clone().setY(0.15), 0xc9a160, 22, 3.5); burst(P.pos.clone().setY(0.3), energyHex(), 10, 2); Sound.sfx('land');
  } else { P.landT = 1e-4; P.landHard = false; if (impact < -6) burst(P.pos.clone().setY(0.1), 0xc9a160, 6, 1.5); }
  if (P.qHeld && P.vel.length() > 6) { P.slideT = 0; P.landT = 0; P.landHard = false; Sound.sfx('slide'); } // land straight into a slide
}
function updateMotion(P, dt) {
  const d = inputDir(), hv = P.vel;
  const sprint = keys.ShiftLeft || keys.ShiftRight || joy.mag > 0.92;
  P.gy = homeGround(P.pos.x, P.pos.y, P.pos.z);   // 0, or the top of a block you built
  const grounded = P.pos.y <= P.gy + 0.001 && P.vy <= 0;
  if (P.flipT > 0 && (P.flipT += dt) >= MOVE_DUR.flip) P.flipT = 0;
  if (P.bjT > 0 && (P.bjT += dt) >= MOVE_DUR.bj) P.bjT = 0;
  if (P.landT > 0 && (P.landT += dt) >= (P.landHard ? MOVE_DUR.landHard : MOVE_DUR.landSoft)) P.landT = 0;
  if (P.rollT > 0) {
    P.rollT += dt; const u = Math.min(1, P.rollT / MOVE_DUR.roll);
    hv.copy(P.rollDir).multiplyScalar(MV.rollSpeed * (1 - 0.55 * u));
    if (P.rollT >= MOVE_DUR.roll) { P.rollT = 0; hv.multiplyScalar(0.6); }
  } else if (P.slideT >= 0) {
    P.slideT += dt;
    let sp = hv.length(); sp = Math.max(0, sp - MV.slideFric * dt * (sp > MV.sprint ? 1.6 : 1));
    if (sp > 0.01) {
      let yaw = Math.atan2(hv.x, hv.z);
      if (d) { let dd = Math.atan2(d.x, d.z) - yaw; while (dd > Math.PI) dd -= Math.PI * 2; while (dd < -Math.PI) dd += Math.PI * 2; yaw += clamp(dd, -2.2 * dt, 2.2 * dt); }
      hv.set(Math.sin(yaw) * sp, 0, Math.cos(yaw) * sp);
    }
    if (!P.qHeld || sp < MV.slideMin || !grounded) P.slideT = -1;
    if ((P.dustT -= dt) <= 0) { P.dustT = 0.07; burst(P.pos.clone().setY(0.08), 0xc9a160, 3, 1.4); }
  } else if (grounded) {
    const locked = P.landT > 0 && P.landHard && P.landT < MOVE_DUR.landHard * 0.55; // hero landings plant you for a beat
    const want = d && !locked ? d.clone().multiplyScalar(sprint ? MV.sprint : MV.run) : new V3();
    const diff = want.sub(hv), step = (d && !locked ? MV.accel : MV.brake) * dt, dl = diff.length();
    if (dl <= step) hv.add(diff); else hv.addScaledVector(diff, step / dl);
  } else if (d) { // in the air: keep the momentum, steer a little
    hv.addScaledVector(d, MV.airAccel * dt);
    const cap = Math.max(P.airCap, MV.run), l = hv.length(); if (l > cap) hv.multiplyScalar(cap / l);
  }
  P.pos.addScaledVector(hv, dt);
  // vertical: gravity, or a slow aim glide while jump is held on the way down
  const airborne = P.pos.y > P.gy + 0.001 || P.vy > 0;
  P.glide = airborne && P.jumpHeld && P.vy < 0 && P.glideT < MV.glideMax && (P.airJumps === 0 || P.bjUsed) && P.rollT === 0;
  if (P.glide) { P.glideT += dt; P.vy = Math.max(P.vy - MV.g * 0.3 * dt, -MV.glideFall); hv.multiplyScalar(1 - dt * 0.2); }
  else P.vy -= MV.g * dt;
  const gy = homeGround(P.pos.x, P.pos.y, P.pos.z); P.gy = gy;
  P.pos.y += P.vy * dt;
  if (P.pos.y <= gy) { if (airborne && P.vy < 0) landPlayer(P); P.pos.y = gy; P.vy = 0; }
  resolveCollision(P.pos, P.radius); homePush(P);
  // facing: along the motion for moves, toward the input otherwise
  const hsp = hv.length();
  if (P.rollT > 0 || P.slideT >= 0 || P.bjT > 0 || (airborne && hsp > 2)) { if (hsp > 0.5) P.yaw = Math.atan2(hv.x, hv.z); }
  else if (d && hsp > 0.3) P.yaw = Math.atan2(d.x, d.z);
  else if (P.target && P.target.alive && P.autoOn) faceTo(P, P.target.pos);
  P.move = clamp(hsp / MV.run, 0, 1); if (d) P.danceT = 0;
}
function updatePlayer(dt) {
  const P = G.P, D = G.D, c = CL();
  D.played += dt;
  P.gcd = Math.max(0, P.gcd - dt); P.medT = Math.max(0, P.medT - dt);
  for (const k in P.cds) P.cds[k] = Math.max(0, P.cds[k] - dt);
  P.combatT = Math.max(0, P.combatT - dt);
  if (P.shieldT > 0) { P.shieldT -= dt; if (P.shieldT <= 0) P.shield = 0; }
  if (P.dead) { P.group.position.copy(P.pos).setY(0.3); if (P.rig.isSoldier) animSoldier(P.rig, P, dt, G.time); return; }
  P.en = Math.min(maxEn(), P.en + 9 * dt);
  if (D.aleT > 0) D.aleT = Math.max(0, D.aleT - dt);
  if (P.combatT <= 0) P.hp = Math.min(maxHp(), P.hp + maxHp() * 0.035 * dt);

  // movement: momentum, sprint, slide, bullet jump, double jump, aim glide, dodge roll
  updateMotion(P, dt);
  resolveCollision(P.pos, P.radius); homePush(P);

  // auto-attack
  const t = P.target;
  if (P.autoOn && t && t.alive && t.kind === 'enemy') {
    P.autoT -= dt;
    if (P.autoT <= 0 && d2(P.pos, t.pos) - t.radius <= c.range) {
      P.autoT = 2.0; P.combatT = 6;
      if (c.range > 5) { projectile(P.pos.clone().setY(P.pos.y + 1.4), t, c.hex, 0.1, 30, () => hitTarget(t, 7)); Sound.sfx('drone'); P.actHint = 'cast'; P.atk = 0.3; }
      else { hitTarget(t, 7); P.atk = 0.3; Sound.sfx('slash'); }
    }
  }
  P.atk = Math.max(0, P.atk - dt); P.danceT = Math.max(0, P.danceT - dt);
  P.group.position.copy(P.pos); turnTo(P.group, P.yaw + (P.danceT > 0 ? G.time * 6 : 0), dt, P.danceT > 0 ? 50 : 14);
  P.combat = P.combatT > 0;
  if (P.rig.isSoldier) animSoldier(P.rig, P, dt, G.time); else animHumanoid(P.rig, P.move, G.time, P.atk, P.danceT);
  if (P.rig.group.userData.orb) P.rig.group.userData.orb.rotation.y += dt * 3;
  W.shieldMesh.visible = P.shield > 0; W.shieldMesh.position.copy(P.pos).setY(1); W.shieldMesh.material.opacity = 0.12 + Math.sin(G.time * 6) * 0.05;

  // tram stops: walking past one adds it to your network
  for (const t of TRAMS) if (!D.trams.includes(t.id) && d2(P.pos, t.pos) < 12) { D.trams.push(t.id); addChat('sys', null, `Tram stop discovered: ${t.name}. You can now ride the tram here from any stop.`); banner('TRAM STOP', t.name.toUpperCase(), 'ADDED TO YOUR NETWORK'); }
  // zone change
  const z = zoneAt(P.pos.x, P.pos.z);
  if (z !== G.zone) {
    const prev = G.zone; G.zone = z; const Z = ZONES[z];
    const gap = Z.pl - playerPL(), warn = gap >= 2 ? ' · ☠ FAR ABOVE YOUR POWER' : gap === 1 ? ' · ABOVE YOUR POWER' : '';
    $('zone-name').textContent = Z.name; $('zone-sub').textContent = Z.safe || !Z.pl ? Z.sub : `${Z.sub} · ◆${Z.pl}`;
    $('zone-sub').style.color = Z.safe || !Z.pl ? '' : PL_COL[plTag(Z.pl)];
    if (!(QUIET_ZONES.has(prev) && QUIET_ZONES.has(z))) banner(Z.safe ? 'SANCTUARY' : 'ENTERING', Z.name, Z.safe || !Z.pl ? Z.sub : `◆ POWER LEVEL ${Z.pl}${warn}`);
    if (gap >= 2 && !Z.safe) addChat('err', null, `Warning: ${ZONE_IN[z]} is power level ${Z.pl} and you are power level ${playerPL()}. The Remnants here will kill you quickly. Ilse Varn in Concordia Plaza sells stronger armour.`);
    if (z === 'cantina') Sound.playMusic('cantina'); else if (prev === 'cantina') Sound.playMusic('world');
  }
}

function updateEnemies(dt) {
  const P = G.P;
  for (const e of G.enemies) {
    e.anim += dt;
    if (!e.alive) {
      e.deadT += dt;
      if (e.deadT < 2) { e.group.position.y = -e.deadT * (e.type === 'drone' ? 1.3 : 0.8); e.group.rotation.z = Math.min(1.4, e.deadT * 2) * (e.type === 'drone' ? 1 : 0.6); }
      else e.group.visible = false;
      if (e.temp && e.deadT > 2.2) { W.scene.remove(e.group); e.plate.remove(); e.removed = true; continue; }
      if (!e.temp && e.deadT > e.respawn) {
        e.alive = true; e.hp = e.maxHp; e.pos.copy(e.spawn); e.state = 'idle'; e.tagged = false; e.yours = false; e.phase = 0; e.group.visible = true; e.group.rotation.z = 0; e.group.position.y = 0;
        burst(e.pos.clone().setY(1), 0xff2b4a, 20, 2);
      }
      continue;
    }
    // DoTs
    for (const dot of e.dots) { dot.t -= dt; dot.tick -= dt; if (dot.tick <= 0) { dot.tick = 1; damage(e, dot.dps, dot.src); } }
    e.dots = e.dots.filter(d => d.t > 0);
    if (!e.alive) continue;

    const leash = e.isBoss ? 40 : 44;
    const pSafe = ZONES[zoneAt(P.pos.x, P.pos.z)].safe;
    if (e.state === 'idle') {
      e.wanderT -= dt;
      if (e.wanderT <= 0) { e.wanderT = rand(3, 8); e.wanderTo = e.spawn.clone().add(new V3(rand(-6, 6), 0, rand(-6, 6))); }
      if (e.wanderTo) { if (moveToward(e, e.wanderTo, e.speed * 0.35, dt)) e.wanderTo = null; } else e.move = Math.max(0, e.move - dt * 4);
      if (P.alive && !pSafe && d2(P.pos, e.pos) < e.aggroR) { e.target = P; e.state = 'chase'; if (e.isBoss) bossEngage(); }
    } else if (e.state === 'chase') {
      const t = e.target;
      if (!t || !t.alive || (t === P && pSafe) || d2(e.pos, e.spawn) > leash) { e.state = 'return'; e.target = null; }
      else {
        const reach = e.atkR + (t.radius || 0.5);
        const inRange = d2(e.pos, t.pos) <= reach;
        if (!inRange) moveToward(e, t.pos, e.speed, dt, reach * 0.85);
        else { e.move = Math.max(0, e.move - dt * 5); faceTo(e, t.pos); }
        e.atkT -= dt;
        if (inRange && e.atkT <= 0) {
          e.atkT = e.atkCd; e.atk = 0.3;
          if (e.type === 'drone') { projectile(e.pos.clone().setY(2.6), t, 0xff2b4a, 0.16, 18, () => damage(t, e.dmg * rand(.9, 1.1), e), e); if (t === P) Sound.sfx('drone'); }
          else { damage(t, e.dmg * rand(.9, 1.1), e); }
        }
        if (e.isBoss) bossLogic(e, dt);
      }
    } else if (e.state === 'return') {
      e.hp = Math.min(e.maxHp, e.hp + e.maxHp * 0.25 * dt); e.dots = []; e.tagged = false; e.yours = false;
      if (moveToward(e, e.spawn, e.speed * 1.6, dt, 0.5)) { e.state = 'idle'; e.hp = e.maxHp; if (e.isBoss) { e.phase = 0; $('bossbar').classList.add('hidden'); Sound.playMusic('world'); } }
    }
    // separation
    for (const o of G.enemies) { if (o === e || !o.alive) continue; const dx = e.pos.x - o.pos.x, dz = e.pos.z - o.pos.z, dd = Math.hypot(dx, dz), m = e.radius + o.radius; if (dd < m && dd > 0.001) { e.pos.x += dx / dd * (m - dd) * 0.5; e.pos.z += dz / dd * (m - dd) * 0.5; } }

    // animate
    e.group.position.set(e.pos.x, 0, e.pos.z);
    turnTo(e.group, e.yaw, dt, 8);
    e.atk = Math.max(0, (e.atk || 0) - dt);
    if (e.type === 'hollowed') { animHumanoid(e.rig, e.move * 0.8, e.anim * 0.8, e.atk); e.rig.head.rotation.z = Math.sin(e.anim * 1.3) * 0.15; }
    else if (e.type === 'drone') { e.rig.body.position.y = 2.6 + Math.sin(e.anim * 2) * 0.25; e.rig.ring.rotation.z += dt * 2; e.rig.shell.rotation.y -= dt; e.rig.body.rotation.x = e.move * 0.25; }
    else { e.rig.orbit.rotation.y += dt * 0.8; e.rig.body.position.y = Math.sin(e.anim) * 0.2; const k = e.atk > 0 ? Math.sin((1 - e.atk / 0.3) * Math.PI) : 0; e.rig.arms[1].rotation.x = -1.6 * k; e.rig.arms[0].rotation.x = Math.sin(e.anim * 0.7) * 0.1; e.rig.core.rotation.y += dt; }
  }
  G.enemies = G.enemies.filter(e => !e.removed);
}
function bossEngage() { Sound.playMusic('boss'); $('bossbar').classList.remove('hidden'); addChat('zone', null, 'The Remnant of the Catharsis: "THE WILL OF ZARK DOES NOT DIE."', 'err'); }
function bossLogic(e, dt) {
  e.slamT -= dt;
  if (e.slamT <= 0 && e.target) {
    e.slamT = rand(7, 10); const at = e.target.pos.clone();
    telegraph(at, 6, 1.8, () => {
      Sound.sfx('boom'); ringFx(at, 0xff2b4a, 7, 0.5); burst(at.clone().setY(0.5), 0xff2b4a, 50, 6);
      if (G.P.alive && d2(G.P.pos, at) < 6) damage(G.P, 46, e);
      for (const b of G.bots) if (b.alive && d2(b.pos, at) < 6) damage(b, 46, e);
    });
  }
  const pct = e.hp / e.maxHp;
  if ((e.phase === 0 && pct < 0.6) || (e.phase === 1 && pct < 0.3)) {
    e.phase++; addChat('zone', null, 'The Remnant of the Catharsis: "RISE. SERVE THE CATHARSIS."', 'err'); Sound.sfx('boom');
    for (let i = 0; i < 3; i++) { const a = rand(0, 6.28); const m = makeEnemy('hollowed', 5, e.pos.x + Math.cos(a) * 6, e.pos.z + Math.sin(a) * 6, true); m.target = e.target; m.state = 'chase'; burst(m.pos.clone().setY(1), 0xff2b4a, 30, 3); }
  }
}

// bots: the same moves as the player, driven by chance — bullet jumps, flips at the apex, slides, hero landings
function botMotion(b, dt) {
  if (b.flipT > 0 && (b.flipT += dt) >= MOVE_DUR.flip) b.flipT = 0;
  if (b.bjT > 0 && (b.bjT += dt) >= MOVE_DUR.bj) b.bjT = 0;
  if (b.landT > 0 && (b.landT += dt) >= (b.landHard ? MOVE_DUR.landHard : MOVE_DUR.landSoft)) b.landT = 0;
  if (b.slideT >= 0 && (b.slideT += dt) > 0.6) b.slideT = -1;
  if (b.pos.y > 0 || b.vy > 0) {
    if (b.canFlip && b.vy < 0.5 && b.pos.y > 1.2) { b.canFlip = false; b.vy = 9; b.flipT = 1e-4; }
    b.vy -= MV.g * dt; b.pos.y += b.vy * dt;
    if (b.pos.y <= 0) { b.landHard = b.vy < MV.hardLand; b.landT = 1e-4; b.pos.y = 0; b.vy = 0; b.boost = 1; b.bjT = 0; b.flipT = 0;
      if (b.landHard && d2(b.pos, G.P.pos) < 30) ringFx(b.pos, 0xc9a160, 2.6, 0.45); }
  }
}
function updateBots(dt) {
  for (const b of G.bots) {
    if (!b.alive) {
      b.deadT += dt; if (b.deadT > (b.respawnT || 12)) reviveBot(b);
      b.group.position.copy(b.pos).setY(b.alive ? 0 : 0.3); if (b.rig.isSoldier) animSoldier(b.rig, b, dt, G.time, b.lodNear !== false); continue;
    }
    b.atk = Math.max(0, b.atk - dt); b.danceT = Math.max(0, b.danceT - dt);
    const px = b.pos.x, pz = b.pos.z;
    if (b.ally && !b.fury) { allySupport(b, dt); if (!b.party && b.state !== 'assist' && b.talkT <= 0) assistCheck(b, dt); }
    if (b.fury) {   // Orion, avenging his son
      furyLogic(b, dt);
    } else if (b.ally && b.talkT > 0) {   // stops to talk to you
      b.talkT -= dt; b.move = Math.max(0, b.move - dt * 5); faceTo(b, G.P.pos);
    } else if (b.state === 'escort') {   // fighting at your side
      escortLogic(b, dt);
    } else if (b.state === 'assist') {   // came over to help you
      assistLogic(b, dt);
    } else if (b.state === 'idle') {
      b.idleT -= dt;
      if (!b.wp || moveToward(b, b.wp, 2.2, dt)) { if (Math.random() < 0.01) b.wp = homePoint(b); }
      if (Math.random() < 0.0008 && !b.legend) b.danceT = 4;
      if (!b.ally) b.hp = Math.min(b.maxHp, b.hp + 20 * dt);
      if (b.ally && G.P && d2(b.pos, G.P.pos) < 7 && (!b.wp || d2(b.pos, b.wp) < 0.5)) faceTo(b, G.P.pos);
      if (b.idleT <= 0) { b.act = Math.random() < (b.legend ? 0.3 : 0.25) ? 'cantina' : pick(b.zones || botZones(b)); b.path = b.act === 'cantina' ? routeTo(b.pos, b.loungeSpot ? b.loungeSpot.clone() : zonePoint('cantina')) : routeTo(b.pos, zonePoint(b.act)); b.state = 'travel'; b.actT = b.act === 'cantina' ? rand(40, 110) : rand(60, 180); b.wp = null; }
    } else if (b.state === 'travel') {
      if (!b.path.length) { b.state = b.act === 'plaza' ? 'idle' : b.act === 'cantina' ? 'lounge' : 'hunt'; b.idleT = rand(15, 50); continue; }
      if (b.rig.isSoldier && !b.legend && b.pos.y === 0 && b.slideT < 0 && b.act !== 'cantina' && d2(b.pos, b.path[0]) > 24) {
        if (Math.random() < dt * 0.3) { b.vy = 10.5; b.bjT = 1e-4; b.boost = 1.6; b.canFlip = Math.random() < 0.6; }   // bullet jump
        else if (Math.random() < dt * 0.12) b.slideT = 0;                                                         // slide
      }
      const tsp = b.legend ? (zoneAt(b.pos.x, b.pos.z) === 'cantina' || zoneAt(b.pos.x, b.pos.z) === 'plaza' || zoneAt(b.pos.x, b.pos.z) === 'concordia' ? 2.2 : 6.5)   // the Mascars walk in town and jog the plains
        : (b.act === 'cantina' && zoneAt(b.pos.x, b.pos.z) === 'cantina' ? 3 : 13) * (b.pos.y > 0 ? b.boost : 1) * (b.slideT >= 0 ? 1.15 : 1);
      if (moveToward(b, b.path[0], tsp, dt, 1)) b.path.shift();
    } else if (b.state === 'lounge') {   // a regular at the Lantern: stand about, raise a glass, then wander back out
      b.actT -= dt; b.move = Math.max(0, b.move - dt * 5);
      if (b.legend) { if (G.P && d2(b.pos, G.P.pos) < 7) faceTo(b, G.P.pos); else if (b.loungeLook) faceTo(b, b.loungeLook); }   // Orion's plaque, Croxian's table, unless you come over
      else if (Math.random() < 0.0015) b.danceT = 2.5;
      if (b.actT <= 0) { b.act = 'plaza'; b.path = routeTo(b.pos, homePoint(b)); b.state = 'travel'; }
    } else if (b.state === 'hunt') {
      b.actT -= dt;
      if (b.actT <= 0) { b.act = 'plaza'; b.path = routeTo(b.pos, homePoint(b)); b.state = 'travel'; b.target = null; b.wp = null; continue; }
      if (!b.target || !b.target.alive) {
        b.target = null; let bd = 30;
        for (const e of G.enemies) { if (!e.alive || (e.isBoss && Math.random() < 0.995)) continue; const d = d2(b.pos, e.pos); if (d < bd && zoneAt(e.pos.x, e.pos.z) === zoneAt(b.pos.x, b.pos.z)) { bd = d; b.target = e; } }
        if (!b.target) { if (!b.wp || moveToward(b, b.wp, b.legend ? 6.5 : 9, dt)) b.wp = zonePoint(b.act); }
      } else {
        botFight(b, b.target, dt);
        if (!b.ally && b.hp < b.maxHp * 0.3 && Math.random() < 0.01) { b.hp = b.maxHp; burst(b.pos.clone().setY(1), 0x4dff9a, 12, 2); }
      }
    }
    // walk around scenery instead of grinding into it: if a wall ate most of this step, sidestep along it
    const ix = b.pos.x - px, iz = b.pos.z - pz, want = Math.hypot(ix, iz);
    resolveCollision(b.pos, 0.4);
    const ax = b.pos.x - px, az = b.pos.z - pz;
    if (want > 0.01 && (ax * ix + az * iz) / want < want * 0.5) {   // less than half the step went where we meant to go
      const slide = ax * -iz + az * ix;                            // which way the wall is already letting us slide
      if (!b.side) b.side = Math.abs(slide) > want * want * 0.15 ? Math.sign(slide) : Math.random() < 0.5 ? 1 : -1;   // pick a way round once, then stick to it
      const sd = b.side, qx = b.pos.x, qz = b.pos.z;
      b.pos.x -= iz * sd; b.pos.z += ix * sd; resolveCollision(b.pos, 0.4); b.blockT = 0;
      if (Math.hypot(b.pos.x - qx, b.pos.z - qz) < want * 0.3) b.side = -sd;   // a corner: try the other way
    } else if (want > 0.01 && (b.blockT = (b.blockT || 0) + dt) > 1.5) b.side = 0;
    if (b.rig.isSoldier) botMotion(b, dt);
    b.group.position.copy(b.pos); turnTo(b.group, b.yaw + (b.danceT > 0 ? G.time * 6 : 0), dt, b.danceT > 0 ? 50 : 12);
    if (b.rig.isSoldier) { b.combat = (b.fury || b.state === 'hunt' || b.state === 'escort' || b.state === 'assist') && !!b.target && b.target.alive && d2(b.pos, b.target.pos) < 18; animSoldier(b.rig, b, dt, G.time, b.lodNear !== false); }
    else animHumanoid(b.rig, b.move, G.time + b.name.length, b.atk, b.danceT);
  }
}

function updateProjectiles(dt) {
  for (const p of G.proj) {
    p.life -= dt; const t = p.target;
    if (!t || !t.alive || p.life <= 0) { p.dead = true; continue; }
    const dest = t.pos.clone().setY((t.pos.y || 0) + (t.type === 'drone' ? 2.6 : t.height * 0.55));
    const d = p.m.position.distanceTo(dest);
    if (d < 0.6) { p.dead = true; p.onHit(); continue; }
    p.m.position.addScaledVector(dest.sub(p.m.position).normalize(), Math.min(d, p.speed * dt));
  }
  for (const p of G.proj) if (p.dead) { W.scene.remove(p.m); p.m.material.dispose(); }
  G.proj = G.proj.filter(p => !p.dead);
}
function updateFx(dt) {
  for (const f of G.fx) { f.t += dt; const k = Math.min(1, f.t / f.life); f.update(f, k, dt); if (f.t >= f.life) { f.dead = true; W.scene.remove(f.obj); f.obj.material?.dispose?.(); if (f.obj.isPoints || f.obj.isLine) f.obj.geometry.dispose(); } }
  G.fx = G.fx.filter(f => !f.dead);
  for (const t of G.timers) { t.t -= dt; if (t.t <= 0) { t.done = true; t.fn(); } }
  G.timers = G.timers.filter(t => !t.done);
}
function updateShards(dt) {
  for (const s of G.shards) {
    if (!s.active) { s.respawnT -= dt; if (s.respawnT <= 0) { s.active = true; s.group.visible = true; } continue; }
    s.crystal.rotation.y += dt * 1.5; s.crystal.position.y = 0.9 + Math.sin(G.time * 2 + s.pos.x) * 0.15;
  }
}
function updateAmbient(dt) {
  const t = G.time, P = G.P;
  W.sky.material.uniforms.t.value = t; grassTime.value = t; W.sky.position.copy(W.cam.position);   // the sky travels with you
  updateAnimals(dt); updateBirds(W.birds, t); updateBirds(W.gulls, t);
  updateGrass(W.grass, W.cam); updateLOD(); cullStatic();
  // the Salt Lantern: crystal turns and breathes; inside, the roof steps aside and the room warms up
  W.lanternCrystal.rotation.y += dt * 0.4; W.lanternCrystal.material.emissiveIntensity = 2.0 + Math.sin(t * 1.7) * 0.4;
  const inside = G.zone === 'cantina', CR = W.cantinaRoof;
  if (inside !== CR.inside) { CR.inside = inside; CR.group.traverse(o => { if (o.isMesh) o.material = inside ? CR.ghost : CR.solid; }); }
  W.cantinaLight.intensity += ((inside ? 30 : 0) - W.cantinaLight.intensity) * Math.min(1, dt * 3);
  const zuri = G.npcs.find(n => n.id === 'zuri');
  if (zuri && zuri.lodNear) { animHumanoid(zuri.rig, 0, t); zuri.rig.arms[1].rotation.x = -1.0 + Math.sin(t * 2.6) * 0.25; zuri.rig.arms[1].rotation.z = Math.sin(t * 1.3) * 0.3; // polishing the bar
    zuri.rig.head.rotation.y = d2(P.pos, zuri.pos) < 9 ? clamp(Math.atan2(P.pos.x - zuri.pos.x, P.pos.z - zuri.pos.z) - Math.PI, -0.8, 0.8) : Math.sin(t * 0.3) * 0.3; }
  W.blink.emissiveIntensity = (Math.sin(t * 3) > 0.6) ? 4 : 0.3;
  for (const f of W.fires) { const s = 0.8 + Math.random() * 0.4; f.scale.set(s, 0.8 + Math.random() * 0.5, s); if (f.userData.light) f.userData.light.intensity = 30 + Math.random() * 20; }
  for (const p of W.pylons) { p.r.rotation.z += dt; p.r.position.y = 12 + Math.sin(t + p.ph) * 1.5; p.top.material.emissiveIntensity = 2 + Math.sin(t * 4 + p.ph) * 2; }
  for (const f of W.frags) { const u = f.userData; u.a += u.s * dt; f.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(t * 0.5 + u.r) * 1.2, Math.sin(u.a) * u.r); f.rotation.y += dt * 0.2; }
  W.halo.rotation.z += dt * 0.2;
  // ash follows player
  W.ash.position.set(Math.floor(P.pos.x / 10) * 10, 0, Math.floor(P.pos.z / 10) * 10);
  const a = W.ash.geometry.attributes.position;
  for (let i = 0; i < a.count; i++) { let y = a.getY(i) + dt * (0.1 + (i % 5) * 0.04); if (y > 30) y = 0; a.setY(i, y); a.setX(i, a.getX(i) + Math.sin(t * 0.3 + i) * 0.01 + dt * 0.08); }
  a.needsUpdate = true;
  // light follows player
  W.sun.position.set(P.pos.x + SUN_DIR.x * 120, SUN_DIR.y * 120, P.pos.z + SUN_DIR.z * 120); W.sun.target.position.copy(P.pos);
  // npc idle
  const ilse = G.npcs[1]; animHumanoid(ilse.rig, 0, t); ilse.rig.head.rotation.y = Math.sin(t * 0.4) * 0.4;
  const masc = G.npcs[0]; if (CROX.state !== 'dais') { /* out defending Malia */ } else if (d2(P.pos, masc.pos) < 14) turnTo(masc.group, Math.atan2(P.pos.x - masc.pos.x, P.pos.z - masc.pos.z), dt, 2); else turnTo(masc.group, 0, dt, 1);
}
function updateCamera(dt) {
  const P = G.P, c = G.cam;
  // Body framing: the camera looks at your chest, a little over your right shoulder; the shoulder offset eases away
  // as you zoom out, so a wide view is still centred on you.
  const sh = clamp((9 - c.dist) / 6, 0, 1) * 0.55, rx = Math.cos(c.yaw) * sh, rz = -Math.sin(c.yaw) * sh;
  const head = P.pos.clone().setY(P.pos.y + 1.45);
  const tgt = head.clone().add(new V3(rx, 0, rz));
  const cp = new V3(Math.sin(c.yaw) * Math.cos(c.pitch), Math.sin(c.pitch), Math.cos(c.yaw) * Math.cos(c.pitch)).multiplyScalar(c.dist).add(tgt);
  cp.y = Math.max(0.5, cp.y);
  // keep the camera out of walls
  const near = collidersIn(Math.min(tgt.x, cp.x) - 1, Math.min(tgt.z, cp.z) - 1, Math.max(tgt.x, cp.x) + 1, Math.max(tgt.z, cp.z) + 1);
  if (near.length) {
    const step = new V3().subVectors(cp, head).divideScalar(24), q = head.clone();
    for (let i = 0; i < 24; i++) {
      q.add(step); let hit = false;
      for (const k of near) if (q.x > k.minX - 0.3 && q.x < k.maxX + 0.3 && q.z > k.minZ - 0.3 && q.z < k.maxZ + 0.3 && q.y < k.h) { hit = true; break; }
      if (hit) { q.sub(step); cp.copy(q); W.cam.position.lerp(cp, 0.5); break; }
    }
  }
  W.cam.position.lerp(cp, Math.min(1, dt * 14)); W.cam.lookAt(tgt);
  const sp = P.vel ? P.vel.length() : 0, fov = 60 + clamp((sp - MV.run) / 12, 0, 1) * 14;
  if (Math.abs(W.cam.fov - fov) > 0.05) { W.cam.fov += (fov - W.cam.fov) * Math.min(1, dt * 4); W.cam.updateProjectionMatrix(); }
}

function updateWorld(dt) {
  updatePlayer(dt); updateGather(dt); updateNodes(dt); updateBuild(); updateEnemies(dt); updateBots(dt); croxianLogic(dt); updateCityLife(dt); updateProjectiles(dt); updateFx(dt); updateShards(dt); updateAmbient(dt); updateCamera(dt);
  // target ring
  const t = G.P.target;
  if (t && t.alive) { W.targetRing.visible = true; W.targetRing.position.set(t.pos.x, 0.1, t.pos.z); W.targetRing.scale.setScalar(t.radius * 1.3); W.targetRing.rotation.z += dt; } else W.targetRing.visible = false;
  updateInteract(); updateHUD(); updatePlates(); updateFloaters(dt); drawMinimap();
  G.chatT -= dt; if (G.chatT <= 0) { G.chatT = rand(6, 14); botChatter(); }
  G.autosave -= dt; if (G.autosave <= 0) { G.autosave = 20; saveGame(); }
}

// =====================================================================
//  QUESTS & NPCs
// =====================================================================
const curQ = () => QUESTS[Math.min(G.D.q.i, QUESTS.length - 1)];
function questEvent(type) {
  const D = G.D, q = curQ();
  if (D.q.st !== 'active') return;
  if (q.type === type || (q.type === 'any' && (type === 'hollowed' || type === 'drone' || type === 'remnant'))) {
    D.q.p = Math.min(q.count, D.q.p + 1);
    addChat('sys', null, `${q.obj}: ${D.q.p}/${q.count}`);
    if (D.q.p >= q.count) { D.q.st = 'ready'; Sound.sfx('quest'); banner('OBJECTIVE COMPLETE', q.title.toUpperCase(), 'RETURN TO GOVERNOR MASCAR'); }
    updateTracker();
  }
}
function fmtQ(s) { return s.replace(/\{name\}/g, G.D.name); }
function talkMascar() {
  const D = G.D, q = curQ();
  Sound.sfx('click');
  if (D.q.st === 'available') {
    dialog('GOVERNOR OF AD-NOSTRA', 'CROXIAN MASCAR', q.title.toUpperCase(), fmtQ(q.offer), `REWARD · ${q.xp} XP · ${q.cr} CREDITS`, [
      { label: 'NOT YET', fn: closeAllUI },
      { label: 'ACCEPT', gold: true, fn: () => { D.q.st = 'active'; D.q.p = 0; Sound.sfx('accept'); addChat('sys', null, `Quest accepted: ${q.title}`); updateTracker(); closeAllUI(); saveGame(); } }
    ]);
  } else if (D.q.st === 'active') {
    dialog('GOVERNOR OF AD-NOSTRA', 'CROXIAN MASCAR', q.title.toUpperCase(), fmtQ(q.active) + `\n\nProgress: ${D.q.p} / ${q.count}`, '', [
      { label: 'ASK ABOUT THE CITY', fn: () => dialog('GOVERNOR OF AD-NOSTRA', 'CROXIAN MASCAR', '', pick(MASCAR_IDLE), '', [{ label: 'FAREWELL', fn: closeAllUI }]) },
      { label: 'FAREWELL', fn: closeAllUI }
    ]);
  } else {
    dialog('GOVERNOR OF AD-NOSTRA', 'CROXIAN MASCAR', q.title.toUpperCase() + ' — COMPLETE', fmtQ(q.done), `REWARD · ${q.xp} XP · ${q.cr} CREDITS`, [
      { label: 'COMPLETE QUEST', gold: true, fn: () => {
        Sound.sfx('quest'); D.credits += q.cr; gainXp(q.xp); D.completed++;
        addChat('sys', null, `Quest complete: ${q.title}. Received ${q.cr} credits.`);
        if (D.q.i === 3) { D.title = 'Hero of Ad-Nostra'; addChat('gov', null, `By decree of Governor Croxian Mascar, ${D.name} is named Hero of Ad-Nostra.`); banner('TITLE EARNED', 'HERO OF AD-NOSTRA', 'THE CITY WILL REMEMBER'); }
        D.q.i = Math.min(D.q.i + 1, QUESTS.length - 1); D.q.st = 'available'; D.q.p = 0;
        updateTracker(); saveGame(); closeAllUI(); setTimeout(talkMascar, 450);
      } }
    ]);
  }
}
function openVendor() {
  G.ui = 'vendor'; $('vendor').classList.remove('hidden'); Sound.sfx('click'); renderVendor();
}
function renderVendor() {
  const D = G.D;
  const items = [
    { name: 'Concord Medkit', desc: 'Restores 50% health. Press 5 to use.', cost: 25, buy: () => { D.medkits++; buildHotbarCounts(); } },
    { name: `Weapon Tuning · Rank ${D.wpn + 1}`, desc: '+10% damage with all attacks.', cost: 120 * (D.wpn + 1), buy: () => { D.wpn++; } },
  ];
  const pl = playerPL(), nx = ARMOUR[pl + 1];
  if (nx) items.push({ name: `${nx.name} · Power Level ${pl + 1}`, desc: `Armour. Raises your power level from ${pl} to ${pl + 1} and gives +20 maximum health.${D.level < nx.lvl ? ` Requires level ${nx.lvl}.` : ''}`, cost: nx.cost, req: nx.lvl,
    buy: () => { D.armour = pl + 1; G.P.hp = Math.min(maxHp(), G.P.hp + 20); banner('POWER LEVEL ' + (pl + 1), nx.name.toUpperCase(), 'YOUR ARMOUR GROWS STRONGER', 'lv'); } });
  const box = $('vendor-items'); box.innerHTML = '';
  for (const it of items) {
    const row = document.createElement('div'); row.className = 'vitem';
    row.innerHTML = `<div><b>${esc(it.name)}</b><p>${esc(it.desc)}</p></div>`;
    const btn = document.createElement('button'); btn.className = 'btn gold'; btn.textContent = `⬡ ${fmtNum(it.cost)}`; btn.disabled = D.credits < it.cost || (it.req && D.level < it.req);
    btn.onclick = () => { if (D.credits < it.cost || (it.req && D.level < it.req)) return; D.credits -= it.cost; it.buy(); Sound.sfx('coin'); addChat('loot', null, `Purchased: ${it.name}`); renderVendor(); saveGame(); };
    row.appendChild(btn); box.appendChild(row);
  }
  $('vendor-wallet').textContent = `YOUR CREDITS: ⬡ ${fmtNum(D.credits)} · MEDKITS: ${D.medkits} · ARMOUR: ${ARMOUR[playerPL()].name.toUpperCase()} (◆${playerPL()})`;
}
function nearestInteract() {
  const P = G.P; let best = null, bd = 5;
  for (const n of G.npcs) { const d = d2(P.pos, n.pos); if (d < bd) { bd = d; best = n; } }
  for (const b of G.bots) if (b.ally && b.alive) { const d = d2(P.pos, b.pos); if (d < (b.party ? 2.6 : 4) && d < bd && !(b.party && best)) { bd = d; best = b; } }   // companions at your heel don't crowd out the NPCs
  for (const p of G.props) { const d = d2(P.pos, p.pos); if (d < (p.kind === 'tram' || p.kind === 'ferry' ? 3.5 : p.kind === 'node' ? 3.3 : 2.2) && d < bd) { bd = d; best = p; } }
  for (const s of G.shards) { if (!s.active) continue; const d = d2(P.pos, s.pos); if (d < 3 && d < bd) { bd = d; best = s; } }
  return best;
}
function interact(ent = nearestInteract()) {
  if (!ent || G.P.dead) return;
  if (ent.id === 'mascar') talkMascar();
  else if (ent.id === 'ilse') openVendor();
  else if (ent.id === 'zuri') talkZuri();
  else if (ent.id === 'plaque') readPlaque();
  else if (ent.id === 'orion') talkOrion(ent);
  else if (ent.id === 'malia') talkMalia(ent);
  else if (ent.resident) talkResident(ent);
  else if (ent.kind === 'tram') openTram(ent.tram);
  else if (ent.kind === 'ferry') openFerry(ent.side);
  else if (ent.kind === 'node') startGather(ent);
  else if (ent.kind === 'shard') {
    const D = G.D;
    if (D.q.i === 2 && D.q.st === 'active') { ent.active = false; ent.group.visible = false; ent.respawnT = 25; Sound.sfx('pickup'); addChat('loot', null, 'You recover: [Beacon Shard]'); burst(ent.pos.clone().setY(1), 0xff2b4a, 20, 2); questEvent('shard'); }
    else if (D.q.i < 2) msg('The shard hums with crimson light. The Governor should know of this.');
    else msg('You have no reason to take it now.');
  }
}
function updateInteract() {
  const n = nearestInteract(), pr = $('prompt');
  if (n && !G.ui && !G.P.dead) {
    const label = n.kind === 'shard' ? 'Recover Beacon Shard' : n.id === 'mascar' ? 'Speak with Governor Mascar' : n.id === 'zuri' ? 'Talk to Zuri Adeyemi' : n.id === 'plaque' ? 'Read the memorial plaque' : n.id === 'orion' ? 'Speak with Orion Mascar' : n.id === 'malia' ? 'Speak with Malia Mascar' : n.resident ? `Speak with ${n.name}` : n.kind === 'tram' ? 'Ride the Concord tram' : n.kind === 'ferry' ? 'Read the ferry timetable' : n.kind === 'node' ? `${n.N.verb} ${n.name}${n.down > 0 ? ' (depleted)' : skillLv(n.N.skill) < n.N.level ? ` · needs ${SKILLS[n.N.skill].name} ${n.N.level}` : ''}` : 'Trade with Ilse Varn';
    pr.innerHTML = `<b>${TOUCH ? '▶' : '[E]'}</b> ${label}`; pr.classList.remove('hidden');
  } else pr.classList.add('hidden');
}

// =====================================================================
//  HUD
// =====================================================================
const _cache = new Map();
function setT(id, v) { if (_cache.get(id) !== v) { _cache.set(id, v); $(id).textContent = v; } }
function setW(id, pct) { const v = (clamp(pct, 0, 1) * 100).toFixed(1) + '%'; if (_cache.get(id + 'w') !== v) { _cache.set(id + 'w', v); $(id).style.width = v; } }
function buildHotbar() {
  const hb = $('hotbar'); hb.innerHTML = '';
  const c = CL();
  const defs = [...c.abil, { id: 'med', name: 'Concord Medkit', icon: '✚', cost: 0, cd: 15, desc: 'Restore 50% of your health. Buy more from Ilse Varn.' }];
  defs.forEach((ab, i) => {
    const s = document.createElement('div'); s.className = 'slot';
    s.innerHTML = `<span class="k">${i + 1}</span>${ab.icon}<span class="c"></span><div class="cd" style="height:0"></div><div class="cdt"></div>`;
    s.onclick = () => useAbility(i);
    if (!TOUCH) s.onmouseenter = ev => { const tt = $('tooltip'); tt.innerHTML = `<b>${esc(ab.name)}</b>${esc(ab.desc)}<br><i>${ab.cost ? ab.cost + ' energy · ' : ''}${ab.cd ? ab.cd + 's cooldown' : 'no cooldown'}${ab.dmg ? ' · ' + Math.round(ab.dmg * dmgScale()) + ' dmg' : ''}</i>`; tt.classList.remove('hidden'); const r = s.getBoundingClientRect(); tt.style.left = (r.left - 80) + 'px'; tt.style.top = (r.top - tt.offsetHeight - 10) + 'px'; };
    s.onmouseleave = () => $('tooltip').classList.add('hidden');
    hb.appendChild(s);
  });
  buildHotbarCounts();
}
function buildHotbarCounts() { const s = $('hotbar').children[4]; if (s) s.querySelector('.c').textContent = G.D.medkits; }
function updateHUD() {
  const P = G.P, D = G.D, c = CL();
  setT('p-name', D.name); setT('p-lvl', `LV ${D.level} · ◆${playerPL()}`); setT('p-title', `${D.title.toUpperCase()} · ${c.name}`);
  const mh = maxHp(); setW('p-hp', P.hp / mh); setT('p-hpt', `${Math.ceil(P.hp)} / ${mh}`); setW('p-sh', P.shield / mh);
  setW('p-en', P.en / maxEn()); setT('p-ent', `${Math.floor(P.en)} / ${maxEn()}`);
  const buffs = []; if (P.shield > 0) buffs.push(`⛨ ${P.shield}`); if (P.critNext) buffs.push('◐ CRIT'); if (P.combatT > 0) buffs.push('⚔ COMBAT'); if (ZONES[G.zone]?.safe) buffs.push('✦ SANCTUARY'); if (D.aleT > 0) buffs.push(`◈ ALE ${fmtTime(D.aleT)}`);
  const bh = buffs.map(b => `<span class="buff">${b}</span>`).join(''); if (_cache.get('buffs') !== bh) { _cache.set('buffs', bh); $('p-buffs').innerHTML = bh; }
  const nx = xpNext(D.level); setW('xp-fill', D.xp / nx); setT('xp-text', D.level >= 30 ? 'MAX LEVEL' : `LEVEL ${D.level} · ${fmtNum(D.xp)} / ${fmtNum(nx)} XP`);
  setT('wallet', `⬡ ${fmtNum(D.credits)} CR`);
  // hotbar cooldowns
  const slots = $('hotbar').children; const defs = c.abil;
  for (let i = 0; i < 5; i++) {
    const s = slots[i]; if (!s) continue; let cd, max, cost = 0;
    if (i < 4) { const ab = defs[i], ca = P.cds[ab.id] || 0; if (ca >= P.gcd) { cd = ca; max = ab.cd || 1; } else { cd = P.gcd; max = c.gcd; } cost = ab.cost; }
    else { cd = P.medT; max = 15; }
    const h = cd > 0 ? (cd / max * 100).toFixed(0) + '%' : '0';
    if (s._h !== h) { s._h = h; s.children[2].style.height = h; }
    const tx = cd > 1 ? Math.ceil(cd) : ''; if (s._t !== tx) { s._t = tx; s.children[3].textContent = tx; }
    const noen = P.en < cost || (i === 4 && D.medkits <= 0); if (s._n !== noen) { s._n = noen; s.classList.toggle('noen', noen); }
  }
  updateTargetFrame(); updateParty();
  if (G.boss && !$('bossbar').classList.contains('hidden')) setW('boss-hp', G.boss.hp / G.boss.maxHp);
}
// Party frames, under your own: who is fighting at your side, their health, and where they are.
function renderParty() {
  const box = $('party'); box.innerHTML = '';
  for (const b of partyList()) {
    const d = document.createElement('div'); d.className = 'pm panel cut pe';
    d.innerHTML = `<div class="fn"><span>${esc(b.name)}</span><em>LV ${b.level}</em></div><div class="bar2 hp"><i></i></div><div class="st"></div>`;
    d._bar = d.querySelector('.bar2 i'); d._st = d.querySelector('.st'); d._b = b;
    d.onclick = () => { setTarget(b); Sound.sfx('click'); };
    box.appendChild(d);
  }
}
function updateParty() {
  const P = G.P;
  for (const d of $('party').children) {
    const b = d._b, w = (b.alive ? b.hp / b.maxHp * 100 : 0).toFixed(0) + '%';
    if (d._w !== w) { d._w = w; d._bar.style.width = w; }
    const dist = d2(b.pos, P.pos);
    const st = !b.alive ? `FALLEN · BACK IN CONCORDIA IN ${Math.max(0, Math.ceil((b.respawnT || 12) - b.deadT))}S` : dist > 35 ? `ON THE WAY · ${Math.round(dist)}M` : b.target && b.target.alive ? 'FIGHTING' : b.talkT > 0 ? 'TALKING' : 'WITH YOU';
    if (d._s !== st) { d._s = st; d._st.textContent = st; d.classList.toggle('dead', !b.alive); }
  }
}
function updateTargetFrame(force) {
  const t = G.P?.target, tf = $('tframe');
  if (!t) { tf.classList.add('hidden'); return; }
  tf.classList.remove('hidden');
  if (t.kind === 'enemy') {
    setT('t-name', t.name); setT('t-lvl', `${plText(t.pl)} · LV ${t.level}`); setT('t-sub', t.isBoss ? 'ELITE · REMNANT' : t.type === 'drone' ? 'MECHANICAL · REMNANT' : 'HOLLOWED · REMNANT');
    $('t-bar').style.display = ''; setW('t-hp', t.hp / t.maxHp); setT('t-hpt', `${Math.max(0, Math.ceil(t.hp))} / ${t.maxHp}`);
  } else if (t.kind === 'bot' && t.ally) {
    setT('t-name', t.name); setT('t-lvl', 'LV ' + t.level); setT('t-sub', `${t.title.toUpperCase()}${t.party ? ' · WITH YOU' : ''}`);
    $('t-bar').style.display = ''; setW('t-hp', t.hp / t.maxHp); setT('t-hpt', t.alive ? `${Math.ceil(t.hp)} / ${t.maxHp}` : 'FALLEN · RETURNING TO CONCORDIA');
  } else if (t.kind === 'bot') {
    setT('t-name', t.name); setT('t-lvl', 'LV ' + t.level); setT('t-sub', `${CLASSES[t.cls].name}${t.guild ? ' · ' + t.guild.toUpperCase() : ''}`);
    $('t-bar').style.display = ''; setW('t-hp', t.hp / t.maxHp); setT('t-hpt', 'ASCENDANT');
  } else { setT('t-name', t.name); setT('t-lvl', ''); setT('t-sub', t.title.toUpperCase()); $('t-bar').style.display = 'none'; }
  const tc = t.kind === 'enemy' ? PL_COL[plTag(t.pl)] : ''; if (_cache.get('tcol') !== tc) { _cache.set('tcol', tc); $('t-lvl').style.color = tc; }
  const ally = t.kind === 'bot' && !!t.ally; if (_cache.get('tally') !== ally) { _cache.set('tally', ally); $('t-bar').classList.toggle('ally', ally); }
}
function updateTracker() {
  const D = G.D, q = curQ(), el = $('tracker');
  if (D.q.st === 'available') el.innerHTML = `<h4>${q.repeat ? 'REPEATABLE' : 'NEW QUEST'}</h4><div class="qt">${esc(q.title)}</div><div class="qo">Speak with Governor Mascar in Concordia Plaza.</div>`;
  else if (D.q.st === 'active') el.innerHTML = `<h4>QUEST</h4><div class="qt">${esc(q.title)}</div><div class="qo">• ${esc(q.obj)}: ${D.q.p} / ${q.count}</div><div class="qo" style="color:var(--dim)">${esc(q.zone)}</div>`;
  else el.innerHTML = `<h4>QUEST</h4><div class="qt">${esc(q.title)}</div><div class="qo done">✓ ${esc(q.obj)}: ${q.count} / ${q.count}</div><div class="qo">Return to Governor Mascar.</div>`;
}
const _v = new V3();
function toScreen(p, h) { _v.set(p.x, (p.y || 0) + h, p.z).project(W.cam); if (_v.z > 1) return null; return [(_v.x * 0.5 + 0.5) * innerWidth, (-_v.y * 0.5 + 0.5) * innerHeight]; }
function updatePlates() {
  const P = G.P, show = settings.plates;
  const list = [...G.npcs, ...G.enemies, ...G.bots];
  const qm = G.D.q.st === 'available' ? '!' : G.D.q.st === 'ready' ? '?' : '';
  const mq = G.npcs[0].plate.firstChild; if (mq.textContent !== qm) mq.textContent = qm;
  for (const e of list) {
    const el = e.plate; const d = W.cam.position.distanceTo(e.pos);
    let vis = show && (e.alive || e.kind === 'bot') && d < (e.kind === 'npc' ? 70 : e.isBoss ? 90 : 50);
    let s = null; if (vis) { s = toScreen(e.pos, e.height + 0.35); vis = !!s; }
    if (!vis) { if (el._v !== false) { el.style.display = 'none'; el._v = false; } continue; }
    if (el._v !== true) { el.style.display = ''; el._v = true; }
    const sc = clamp(1.25 - d / 80, 0.6, 1.1);
    el.style.transform = `translate(${s[0].toFixed(1)}px,${s[1].toFixed(1)}px) translate(-50%,-100%) scale(${sc.toFixed(2)})`;
    if (e.ally) {
      const hurt = e.alive && e.hp < e.maxHp - 1, w = (e.hp / e.maxHp * 100).toFixed(0) + '%';
      if (e._ph !== hurt) { e._ph = hurt; e.plateHb.style.visibility = hurt ? 'visible' : 'hidden'; }
      if (hurt && e._pw !== w) { e._pw = w; e.plateBar.style.width = w; }
      if (e._pp !== e.party) { e._pp = e.party; el.classList.toggle('party', e.party); }
    }
    if (e.kind === 'enemy' || e.ally || e.id === 'mascar') { const tag = plTag(e.pl | 0); if (e._pl !== tag) { if (e._pl) el.classList.remove(e._pl); el.classList.add(tag); e._pl = tag; } }
    if (e.kind === 'enemy') { const w = (e.hp / e.maxHp * 100).toFixed(0) + '%'; if (e._pw !== w) { e._pw = w; e.plateBar.style.width = w; } const isT = P.target === e; if (e._pt !== isT) { e._pt = isT; el.classList.toggle('tgt', isT); } }
  }
}
function updateFloaters(dt) {
  for (const f of G.floaters) {
    f.t += dt; const k = f.t / f.life; const s = toScreen(f.p, k * 1.4);
    if (!s || k >= 1) { f.el.style.opacity = 0; } else { f.el.style.transform = `translate(${s[0]}px,${s[1]}px) translate(-50%,-50%) scale(${k < 0.1 ? 1 + (0.1 - k) * 5 : 1})`; f.el.style.opacity = k > 0.6 ? (1 - k) / 0.4 : 1; }
    if (k >= 1) { f.el.remove(); f.dead = true; }
  }
  G.floaters = G.floaters.filter(f => !f.dead);
}
const mm = $('minimap').getContext('2d');
function drawMinimap() {
  const P = G.P, S = 184, C = S / 2, sc = 0.85;
  const X = x => C + (x - P.pos.x) * sc, Y = z => C + (z - P.pos.z) * sc;
  mm.save(); mm.clearRect(0, 0, S, S); mm.beginPath(); mm.arc(C, C, C, 0, Math.PI * 2); mm.clip();
  mm.fillStyle = '#4a3a24'; mm.fillRect(0, 0, S, S);
  // the sea and the harbour basin (the moles stay dry)
  mm.fillStyle = '#21505c'; const yc = Y(COAST_Z); if (yc < S) mm.fillRect(0, yc, S, S - yc);
  mm.fillRect(X(BASIN.x0), Y(BASIN.z0), (BASIN.x1 - BASIN.x0) * sc, (BASIN.z1 - BASIN.z0) * sc);
  mm.fillStyle = '#4a3a24'; for (const M of MOLES) mm.fillRect(X(M.x0), Y(M.z0), (M.x1 - M.x0) * sc, (M.z1 - M.z0) * sc);
  mm.fillStyle = 'rgba(30,20,12,0.45)'; mm.fillRect(X(34), Y(-62), 122 * sc, 124 * sc);
  mm.fillStyle = 'rgba(220,205,160,0.22)'; mm.fillRect(X(-156), Y(-62), 122 * sc, 124 * sc);
  mm.fillStyle = 'rgba(140,40,30,0.45)'; mm.beginPath(); mm.arc(X(CRATER.x), Y(CRATER.z), 72 * sc, 0, 7); mm.fill();
  if (Math.abs(P.pos.x) > 120 || Math.abs(P.pos.z) > 120) {   // the Outer Wards, tinted by how dangerous they are for you
    for (const [id, R] of [['rail', RAIL], ['tenements', TENE]]) { mm.fillStyle = hexA(PL_COL[plTag(ZONES[id].pl)], 0.16); mm.fillRect(X(R.x0), Y(R.z0), (R.x1 - R.x0) * sc, (R.z1 - R.z0) * sc); }
    mm.fillStyle = hexA(PL_COL[plTag(ZONES.reservoir.pl)], 0.16); mm.beginPath(); mm.arc(X(RESV.x), Y(RESV.z), RESV_R * sc, 0, 7); mm.fill();
  }
  mm.fillStyle = '#3ee6ff'; for (const t of TRAMS) if (G.D.trams.includes(t.id)) { mm.save(); mm.translate(X(t.pos.x), Y(t.pos.z)); mm.rotate(Math.PI / 4); mm.fillRect(-3, -3, 6, 6); mm.restore(); }
  mm.fillStyle = 'rgba(62,230,255,0.16)'; mm.beginPath(); mm.arc(X(CONC.x), Y(CONC.z), 34 * sc, 0, 7); mm.fill();   // Concordia Plaza
  mm.strokeStyle = 'rgba(232,196,106,0.7)'; mm.lineWidth = 1.5; mm.setLineDash([4, 3]); mm.beginPath(); mm.arc(X(0), Y(0), 34 * sc, 0, 7); mm.stroke(); mm.setLineDash([]);   // the Frontier
  mm.fillStyle = 'rgba(255,179,71,0.35)'; mm.fillRect(X(CANTINA.x0), Y(CANTINA.z0), (CANTINA.x1 - CANTINA.x0) * sc, (CANTINA.z1 - CANTINA.z0) * sc);
  mm.strokeStyle = 'rgba(255,179,71,0.9)'; mm.lineWidth = 1; mm.strokeRect(X(CANTINA.x0), Y(CANTINA.z0), (CANTINA.x1 - CANTINA.x0) * sc, (CANTINA.z1 - CANTINA.z0) * sc);
  mm.fillStyle = 'rgba(255,179,71,0.14)'; mm.fillRect(X(MARKET.x0), Y(MARKET.z0), (MARKET.x1 - MARKET.x0) * sc, (MARKET.z1 - MARKET.z0) * sc);
  // streets, the Rampart Ring and the buildings round you
  mm.fillStyle = 'rgba(140,90,58,0.6)';
  for (const r of W.streets) { if (r.x1 < P.pos.x - 115 || r.x0 > P.pos.x + 115 || r.z1 < P.pos.z - 115 || r.z0 > P.pos.z + 115) continue; mm.fillRect(X(r.x0), Y(r.z0), (r.x1 - r.x0) * sc, (r.z1 - r.z0) * sc); }
  mm.strokeStyle = 'rgba(140,90,58,0.6)'; mm.lineWidth = 14 * sc; mm.beginPath(); mm.arc(X(0), Y(0), OLD_R * sc, 0, 7); mm.stroke();
  mm.fillStyle = 'rgba(220,190,150,0.3)';
  for (const c of collidersIn(P.pos.x - 115, P.pos.z - 115, P.pos.x + 115, P.pos.z + 115)) { const w = (c.maxX - c.minX) * sc; if (w < 2 || c.h < 2) continue; mm.fillRect(X(c.minX), Y(c.minZ), w, (c.maxZ - c.minZ) * sc); }
  if (FERRY.group) { mm.fillStyle = '#3ee6ff'; mm.fillRect(X(FERRY.x - FERRY.HL), Y(FERRY.z - FERRY.HW), FERRY.HL * 2 * sc, FERRY.HW * 2 * sc); }
  mm.strokeStyle = 'rgba(232,196,106,0.6)'; mm.lineWidth = 2; mm.beginPath(); mm.arc(X(0), Y(0), (WORLD_R + 6) * sc, 0, 7); mm.stroke();
  if (G.D.q.i === 2 && G.D.q.st === 'active') { mm.fillStyle = '#ff6b7f'; for (const s of G.shards) if (s.active) { mm.save(); mm.translate(X(s.pos.x), Y(s.pos.z)); mm.rotate(Math.PI / 4); mm.fillRect(-2.5, -2.5, 5, 5); mm.restore(); } }
  for (const e of G.enemies) { if (!e.alive) continue; mm.fillStyle = e.isBoss ? '#ff2b4a' : '#ff5a6e'; const r = e.isBoss ? 5 : 2.2; mm.beginPath(); mm.arc(X(e.pos.x), Y(e.pos.z), r, 0, 7); mm.fill(); }
  for (const b of G.bots) if (b.alive && !b.legend) { mm.fillStyle = b.resident ? '#9dffb0' : '#7fe3ff'; mm.beginPath(); mm.arc(X(b.pos.x), Y(b.pos.z), b.resident ? 2.8 : 2.2, 0, 7); mm.fill(); }
  mm.fillStyle = '#e8c46a'; for (const n of [...G.npcs, ...G.bots.filter(b => b.legend && b.alive)]) { mm.beginPath(); mm.arc(X(n.pos.x), Y(n.pos.z), 3.5, 0, 7); mm.fill(); }
  mm.strokeStyle = '#4dff9a'; mm.lineWidth = 1.5; for (const b of G.bots) if (b.party && b.alive) { mm.beginPath(); mm.arc(X(b.pos.x), Y(b.pos.z), 5.5, 0, 7); mm.stroke(); }
  mm.font = 'bold 9px Bahnschrift, Segoe UI, sans-serif'; mm.textAlign = 'center'; mm.textBaseline = 'bottom';
  const placed = [];
  for (const b of G.bots) if (b.alive && (b.legend || b.resident)) {   // who they are, and their power level (stacked, never on top of each other)
    const x = X(b.pos.x); let y = Y(b.pos.z) - 5; if (Math.hypot(x - C, y - C) > C - 6) continue;
    const nm = b.legend ? b.name.split(' ')[0] : b.name, pl = `◆${b.pl | 0}`, wn = mm.measureText(nm + ' ').width, wp = mm.measureText(pl).width, x0 = x - (wn + wp) / 2;
    for (let k = 0; k < 5 && placed.some(r => x0 < r[2] && x0 + wn + wp > r[0] && y > r[1] - 10 && y - 10 < r[1]); k++) y -= 10;
    placed.push([x0, y, x0 + wn + wp]);
    mm.textAlign = 'left'; mm.fillStyle = '#000'; mm.fillText(nm + ' ' + pl, x0 + 1, y + 1);
    mm.fillStyle = b.legend ? '#e8c46a' : '#9dffb0'; mm.fillText(nm, x0, y); mm.fillStyle = PL_COL[plTag(b.pl | 0)]; mm.fillText(pl, x0 + wn, y);
  }
  mm.textAlign = 'center'; mm.textBaseline = 'alphabetic';
  // objective pointer
  const obj = objectivePos();
  if (obj) {
    let ox = X(obj.x), oy = Y(obj.z); const dx = ox - C, dy = oy - C, dd = Math.hypot(dx, dy);
    if (dd > C - 10) { ox = C + dx / dd * (C - 10); oy = C + dy / dd * (C - 10); }
    mm.fillStyle = '#e8c46a'; mm.save(); mm.translate(ox, oy); mm.rotate(Math.PI / 4); mm.fillRect(-4, -4, 8, 8); mm.restore();
  }
  // player arrow
  mm.save(); mm.translate(C, C); mm.rotate(-P.group.rotation.y + Math.PI); mm.fillStyle = '#fff'; mm.beginPath(); mm.moveTo(0, -7); mm.lineTo(5, 5); mm.lineTo(0, 2); mm.lineTo(-5, 5); mm.closePath(); mm.fill(); mm.restore();
  // camera view cone
  mm.save(); mm.translate(C, C); mm.rotate(-G.cam.yaw); mm.fillStyle = 'rgba(255,255,255,0.05)'; mm.beginPath(); mm.moveTo(0, 0); mm.arc(0, 0, 70, -Math.PI / 2 - 0.55, -Math.PI / 2 + 0.55); mm.fill(); mm.restore();
  mm.restore();
  mm.fillStyle = 'rgba(255,255,255,0.6)'; mm.font = '10px Bahnschrift, sans-serif'; mm.textAlign = 'center'; mm.fillText('N', C, 11);
}
function objectivePos() {
  const D = G.D, q = curQ();
  if (D.q.st !== 'active') return G.npcs[0].pos;
  return { hollowed: RESV, drone: new V3((TENE.x0 + TENE.x1) / 2, 0, 0), shard: CRATER, boss: CRATER, any: RESV }[q.type];
}

// =====================================================================
//  CHAT
// =====================================================================
const CH_LABEL = { world: '[World]', zone: '[Zone]', sys: '', gov: "[Governor's Office]", say: '[Say]', loot: '', err: '', whisper: '[Whisper]' };
function addChat(ch, name, text, cls) {
  const log = $('chat-log'); const d = document.createElement('div'); d.className = 'ch-' + (cls || ch);
  d.innerHTML = `${CH_LABEL[ch] ? CH_LABEL[ch] + ' ' : ''}${name ? `<span class="ch-name">[${esc(name)}]</span>: ` : ''}${esc(text)}`;
  log.appendChild(d); while (log.children.length > 80) log.firstChild.remove();
  log.scrollTop = log.scrollHeight;
}
function botSay(b, text, ch = 'world') { if (!b) return; addChat(ch, b.name, text.replace(/\{name\}/g, G.D.name)); }
function botChatter() {
  const r = Math.random();
  if (G.zone === 'cantina' && r < 0.45) { const regs = chatBots().filter(b => zoneAt(b.pos.x, b.pos.z) === 'cantina'); botSay(regs.length ? pick(regs) : pick(chatBots()), pick(CANTINA_CHAT), 'say'); return; }
  if (r < 0.55) botSay(pick(chatBots()), pick(WORLD_CHAT));
  else if (r < 0.75) { const near = chatBots().filter(b => zoneAt(b.pos.x, b.pos.z) === G.zone); if (near.length) botSay(pick(near), pick(ZONE_CHAT), 'zone'); }
  else if (r < 0.82) addChat('gov', null, pick(GOV_ANNOUNCE));
}
function sendChat(text) {
  text = text.trim(); if (!text) return; const D = G.D, P = G.P;
  if (text[0] === '/') {
    const [cmd] = text.slice(1).toLowerCase().split(' ');
    switch (cmd) {
      case 'help': addChat('sys', null, 'Commands: /who /party /dismiss [name|all] /played /loc /dance /wave /salute /help'); break;
      case 'party': {
        const l = partyList(); if (!l.length) { addChat('sys', null, 'Nobody is fighting at your side. Talk to Orion or Malia Mascar, or to one of your Residents, and ask them to.'); break; }
        addChat('sys', null, 'At your side: ' + l.map(b => `${b.name} (lv ${b.level}, ${b.alive ? Math.round(b.hp / b.maxHp * 100) + '% health, ' + Math.round(d2(b.pos, P.pos)) + 'm away' : 'fallen, returning to Concordia Plaza'})`).join(', ') + '.'); break;
      }
      case 'dismiss': {
        const arg = text.slice(1).split(' ').slice(1).join(' ').trim().toLowerCase(), l = partyList();
        const who = !arg || arg === 'all' ? l : l.filter(b => b.name.toLowerCase().includes(arg));
        if (!who.length) { addChat('err', null, l.length ? 'Nobody by that name is at your side.' : 'Nobody is fighting at your side.'); break; }
        for (const b of who) leaveParty(b); break;
      }
      case 'who': { const l = chatBots().slice(0, 6).map(b => `${b.name} (${b.level} ${CLASSES[b.cls].name.toLowerCase()}, ${ZONES[zoneAt(b.pos.x, b.pos.z)].name.toLowerCase()})`); addChat('sys', null, `Online: ${l.join(', ')} …and ${fmtNum(onlineCount - 6)} others.`); break; }
      case 'played': { const s = D.played | 0; addChat('sys', null, `Time played: ${Math.floor(s / 3600)}h ${Math.floor(s / 60) % 60}m ${s % 60}s`); break; }
      case 'loc': addChat('sys', null, `${ZONES[G.zone].name}: ${P.pos.x.toFixed(0)}, ${(-P.pos.z).toFixed(0)}`); break;
      case 'dance': P.danceT = 5; addChat('say', null, `${D.name} bursts into dance.`, 'sys'); break;
      case 'wave': P.actHint = 'wave'; P.atk = 0.3; addChat('say', null, `${D.name} waves.`, 'sys'); setTimeout(() => { const b = chatBots().find(b => d2(b.pos, P.pos) < 20); if (b) addChat('say', b.name, 'o/'); }, 900); break;
      case 'salute': {
        P.actHint = 'salute'; P.atk = 0.3; const near = d2(P.pos, G.npcs[0].pos) < 15;
        addChat('say', null, near ? `${D.name} salutes Governor Mascar.` : `${D.name} salutes.`, 'sys');
        if (near) setTimeout(() => addChat('say', 'Croxian Mascar', pick(['At ease, Ascendant.', 'The city sees you.', 'Stand tall. You have earned it.'])), 900);
        break;
      }
      default: addChat('err', null, 'Unknown command. Type /help.');
    }
    return;
  }
  addChat('world', D.name, text); Sound.sfx('chat');
  const low = text.toLowerCase();
  const reply = (pool, delay = rand(1, 3)) => setTimeout(() => botSay(pick(chatBots()), pick(pool)), delay * 1000);
  if (/\b(hi|hello|hey|yo|sup|o7|o\/|greetings)\b/.test(low)) { reply(GREET_REPLIES); if (Math.random() < 0.5) reply(GREET_REPLIES, rand(2, 4)); }
  else if (/mascar|governor|croxian/.test(low)) reply(LORE_REPLIES);
  else if (/catharsis|remnant|monolith/.test(low)) reply(['don\'t say that name too loud', 'the crater still gives me nightmares', 'the remnant hits like a tram, bring medkits']);
  else if (/lfg|group|party|help/.test(low)) reply(['inv me', 'omw', 'where at?', 'sure, what zone']);
  else if (low.includes('?')) reply(['no idea tbh', 'ask the governor', 'check the codex', 'pretty sure it\'s north']);
  else if (Math.random() < 0.3) reply(['lol', 'true', 'based', 'real', 'fr']);
}

// =====================================================================
//  UI: dialogs, panels
// =====================================================================
function dialog(who, name, qtitle, text, rew, opts) {
  G.ui = 'dialog'; $('vendor').classList.add('hidden');
  $('dlg-who').textContent = who; $('dlg-name').textContent = name; $('dlg-q').textContent = qtitle; $('dlg-text').textContent = text; $('dlg-rew').textContent = rew;
  const o = $('dlg-opts'); o.innerHTML = '';
  for (const op of opts) { const b = document.createElement('button'); b.className = 'btn' + (op.gold ? ' gold' : ' ghost'); b.textContent = op.label; b.onclick = op.fn; o.appendChild(b); }
  $('dialog').classList.remove('hidden');
}
// ---- the Concord tram network
function openTram(t) {
  const D = G.D, dests = TRAMS.filter(x => x !== t && D.trams.includes(x.id)), unknown = TRAMS.filter(x => !D.trams.includes(x.id)).length;
  const more = unknown ? `\n\n${unknown} more stop${unknown === 1 ? ' is' : 's are'} out in the city that you have not found yet. Walk past a stop to add it to your network.` : '';
  const text = dests.length ? `The Concord tram runs the length of the city, from the Plaza out to the new wards by the rampart and down to the Harbour.\n\nWhere to?${more}` : `This is the only stop on your network so far.${more}`;
  dialog('CONCORD TRAM', t.name.toUpperCase(), '', text, '', [
    ...dests.map(x => { const pl = ZONES[x.id] ? ZONES[x.id].pl : 0; return { label: `${x.name.toUpperCase()}${pl ? ' · ' + plText(pl) : ''}`, gold: true, fn: () => rideTram(x) }; }),
    { label: 'CANCEL', fn: closeAllUI },
  ]);
}
function rideTram(t) {
  const P = G.P; closeAllUI(); stopGather(); if (G.build) toggleBuild(false);
  if (P.combatT > 0) { msg('You cannot board the tram while in combat'); return; }
  for (const e of G.enemies) if (e.target === P) { e.target = null; e.state = 'return'; }
  resetMotion(P); P.pos.set(t.pos.x, 0, t.pos.z + 3.6); P.group.position.copy(P.pos); setTarget(null);
  for (const b of partyList()) if (b.alive) { const o = partyOffset(b); b.pos.set(P.pos.x + o.x, 0, P.pos.z + o.z); resolveCollision(b.pos, 0.4); b.group.position.copy(b.pos); b.path = []; b.target = null; }
  W.cam.position.copy(P.pos).add(new V3(Math.sin(G.cam.yaw) * 5, 2.5, Math.cos(G.cam.yaw) * 5));
  burst(P.pos.clone().setY(1), 0x3ee6ff, 40, 3);
  const pl = ZONES[t.id] ? ZONES[t.id].pl : 0;
  banner('CONCORD TRAM', t.name.toUpperCase(), pl ? `◆ POWER LEVEL ${pl}` : 'ARRIVED');
  saveGame();
}
// ---- the world map (M)
const hexA = (hex, a) => `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)},${a})`;
function toggleMap() {
  if (G.ui === 'map') { closeAllUI(); return; }
  closeAllUI(); G.ui = 'map'; $('worldmap').classList.remove('hidden'); drawWorldMap();
}
// The map of Ad Nostra: an adventurer's map as the Concord would draw it in 2137. The ground is painted like an old
// map (every street and every building with a dark outline, the districts in their own ground, painted icons, names
// with a hard shadow), but it sits on a holographic survey slate: a cyan grid, a glowing rampart, hexagonal beacons
// for the places that matter, a compass ring, and the title on a lit plate. Click it to switch between the whole city
// and the old city.
const MAP_SERIF = "'Palatino Linotype', 'Book Antiqua', Palatino, 'URW Palladio L', Georgia, serif";
const MAP_SANS = "Bahnschrift, 'Segoe UI', 'DIN Alternate', sans-serif";
const _mapCache = {};
function mapNoise(g, x, y, w, h, n, cols, size = 2) { for (let i = 0; i < n; i++) { g.fillStyle = cols[i % cols.length]; g.fillRect(x + Math.random() * w, y + Math.random() * h, size, size); } }
function drawMapBase(zoom) {   // everything that doesn't move, drawn once per zoom level
  const S = 760, cv = document.createElement('canvas'); cv.width = cv.height = S;
  const g = cv.getContext('2d'), sc = S / ((zoom ? OLD_R + 30 : WORLD_R + 20) * 2), C = S / 2;
  const X = x => C + x * sc, Y = z => C + z * sc, L = v => v * sc;
  const rectP = (R, m = 0) => g.rect(X(R.x0 - m), Y(R.z0 - m), L(R.x1 - R.x0 + 2 * m), L(R.z1 - R.z0 + 2 * m));
  // the savannah, out to the edge of the sheet
  g.fillStyle = '#a99a5e'; g.fillRect(0, 0, S, S); mapNoise(g, 0, 0, S, S, 9000, ['#9c8c52', '#b4a66a', '#8f8148', '#bdb077']);
  for (let i = 0; i < 260; i++) { const x = Math.random() * S, y = Math.random() * S; g.fillStyle = 'rgba(70,90,35,0.55)'; g.beginPath(); g.arc(x, y, rand(1.5, 3), 0, 7); g.fill(); }   // scrub and acacias
  // the sea, with waves
  const water = (draw) => { g.save(); g.beginPath(); draw(); g.clip(); g.fillStyle = '#17465a'; g.fillRect(0, 0, S, S); g.strokeStyle = 'rgba(110,225,255,0.38)'; g.lineWidth = 1;
    for (let y = 4; y < S; y += 9) for (let x = (y * 7) % 23; x < S; x += 23) { g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 3, y - 2.5, x + 6, y); g.quadraticCurveTo(x + 9, y + 2.5, x + 12, y); g.stroke(); } g.restore(); };
  water(() => { g.rect(0, Y(COAST_Z), S, S); g.rect(X(BASIN.x0), Y(BASIN.z0), L(BASIN.x1 - BASIN.x0), L(BASIN.z1 - BASIN.z0)); });
  g.strokeStyle = '#3ee6ff'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, Y(COAST_Z)); g.lineTo(X(BASIN.x0), Y(COAST_Z)); g.lineTo(X(BASIN.x0), Y(BASIN.z0)); g.lineTo(X(BASIN.x1), Y(BASIN.z0)); g.lineTo(X(BASIN.x1), Y(COAST_Z)); g.lineTo(S, Y(COAST_Z)); g.stroke();
  // the city's paving, inside the rampart and on dry land
  g.save(); g.beginPath(); g.arc(C, C, L(WORLD_R + 6), 0, 7); g.clip(); g.beginPath(); g.rect(0, 0, S, Y(COAST_Z)); g.clip();
  g.fillStyle = '#bdae8a'; g.fillRect(0, 0, S, S); mapNoise(g, 0, 0, S, S, 6000, ['#b2a37e', '#c6b893', '#a99a76']);
  g.restore();
  g.fillStyle = '#c3b593'; for (const M of MOLES) g.fillRect(X(M.x0), Y(M.z0), L(M.x1 - M.x0), L(M.z1 - M.z0));
  // the old districts, each in its own ground
  const ground = (fill, specks, draw) => { g.save(); g.beginPath(); draw(); g.clip(); g.fillStyle = fill; g.fillRect(0, 0, S, S); mapNoise(g, 0, 0, S, S, 2500, specks, 2); g.restore(); };
  ground('#5e4c34', ['#4a3b28', '#6e5a3c', '#7a3a22'], () => rectP({ x0: 34, x1: 156, z0: -62, z1: 62 }));            // Scorched Veld
  ground('#bdb486', ['#aea474', '#cbc398', '#9a9068'], () => rectP({ x0: -156, x1: -34, z0: -62, z1: 62 }));          // Echo Plains
  ground('#7a3b2a', ['#5e2a1e', '#9a4a32', '#c0303a'], () => g.arc(X(CRATER.x), Y(CRATER.z), L(72), 0, 7));          // the Crater
  ground('#7a6a52', ['#6a5a44', '#8a7a60'], () => rectP(RAIL)); ground('#4c4038', ['#3a3028', '#5a4c40', '#8a4a2a'], () => rectP(TENE));
  ground('#9a8a6c', ['#8a7a5c', '#aa9a7a', '#6a5a44'], () => g.arc(X(RESV.x), Y(RESV.z), L(RESV_R), 0, 7));
  ground('#b0613c', ['#a35834', '#bd6c45'], () => rectP(MARKET));
  for (const R of W.parks || []) ground('#6f8a3a', ['#5f7a2e', '#7f9a46'], () => rectP(R));
  g.strokeStyle = 'rgba(40,25,15,0.6)'; g.lineWidth = 1;   // rails in the yards, rocks round the crater
  for (const tz of [-62, -44, -26, 26, 44, 62]) { g.beginPath(); g.moveTo(X(RAIL.x0), Y(tz)); g.lineTo(X(RAIL.x1), Y(tz)); g.stroke(); }
  g.fillStyle = '#5a3a2a'; for (let a = 0; a < 6.28; a += 0.16) { if (Math.abs(a - Math.PI / 2) < 0.25) continue; g.beginPath(); g.arc(X(CRATER.x + Math.cos(a) * 70), Y(CRATER.z + Math.sin(a) * 70), L(4), 0, 7); g.fill(); }
  // Concordia Plaza
  for (const [px, pz] of [[0, 0], [CONC.x, CONC.z]]) {   // the Frontier, and Concordia Plaza by the harbour
    g.fillStyle = '#d6c49a'; g.beginPath(); g.arc(X(px), Y(pz), L(34), 0, 7); g.fill(); g.strokeStyle = '#8a7250'; g.lineWidth = 1;
    for (const r of [10, 20, 30]) { g.beginPath(); g.arc(X(px), Y(pz), L(r), 0, 7); g.stroke(); }
  }
  // roads: a dark edge, then the road
  const roads = (w, col) => { g.fillStyle = col; for (const r of W.streets) g.fillRect(X(r.x0) - w, Y(r.z0) - w, L(r.x1 - r.x0) + 2 * w, L(r.z1 - r.z0) + 2 * w);
    g.strokeStyle = col; g.lineWidth = L(14) + 2 * w; g.beginPath(); g.arc(X(0), Y(0), L(OLD_R), 0, 7); g.stroke(); };
  roads(1, '#4a4038'); roads(0, '#7d7166');
  // buildings in stone, lit from the top left
  const blds = G.colliders.filter(c => c.h >= 2 && c.maxX - c.minX > 1.2 && c.maxZ - c.minZ > 1.2);
  g.fillStyle = 'rgba(40,30,20,0.35)'; for (const c of blds) g.fillRect(X(c.minX) + 1.5, Y(c.minZ) + 1.5, L(c.maxX - c.minX), L(c.maxZ - c.minZ));
  for (const c of blds) {
    const x = X(c.minX), y = Y(c.minZ), w = L(c.maxX - c.minX), h = L(c.maxZ - c.minZ), tall = c.h > 45;
    g.fillStyle = tall ? '#7e8a96' : c.h > 9 ? '#968b78' : '#8c7c62'; g.fillRect(x, y, w, h);
    if (w > 3 && h > 3) { g.fillStyle = 'rgba(255,250,235,0.28)'; g.fillRect(x, y, w, 1); g.fillRect(x, y, 1, h); }
    g.strokeStyle = '#2e2820'; g.lineWidth = w > 2.5 ? 0.8 : 0.4; g.strokeRect(x + 0.4, y + 0.4, w - 0.8, h - 0.8);
    if (tall) { g.strokeStyle = 'rgba(62,230,255,0.85)'; g.lineWidth = 0.8; g.strokeRect(x + 1.2, y + 1.2, w - 2.4, h - 2.4); }
  }
  // the rampart, crenellated, open to the sea
  const ra = Math.acos((COAST_Z - 2) / (WORLD_R + 6)), a0 = Math.PI / 2 + ra, a1 = Math.PI * 2.5 - ra, rr = L(WORLD_R + 6);
  g.strokeStyle = '#2a2018'; g.lineWidth = 7; g.beginPath(); g.arc(C, C, rr, a0, a1); g.stroke();
  g.strokeStyle = '#a8946e'; g.lineWidth = 4; g.beginPath(); g.arc(C, C, rr, a0, a1); g.stroke();
  g.fillStyle = '#2a2018'; for (let a = a0; a < a1; a += 0.035) g.fillRect(C + Math.cos(a) * (rr + 3.5) - 1.5, C + Math.sin(a) * (rr + 3.5) - 1.5, 3, 3);
  g.save(); g.shadowColor = '#ffd27a'; g.shadowBlur = 8; g.strokeStyle = '#ffd27a'; g.lineWidth = 1.2; g.beginPath(); g.arc(C, C, rr, a0, a1); g.stroke(); g.restore();
  // the sanctuary, in blue: the whole city on dry land, less the old districts and the Frontier beside them
  g.save(); g.beginPath(); g.rect(0, 0, S, Y(COAST_Z)); g.clip();
  g.beginPath(); g.arc(C, C, L(WORLD_R + 6), 0, 7);
  const hole = R => { g.moveTo(X(R.x0), Y(R.z0)); g.lineTo(X(R.x0), Y(R.z1)); g.lineTo(X(R.x1), Y(R.z1)); g.lineTo(X(R.x1), Y(R.z0)); g.closePath(); };
  const holeC = (x, z, r) => { g.moveTo(X(x) + L(r), Y(z)); g.arc(X(x), Y(z), L(r), 0, Math.PI * 2, true); g.closePath(); };
  for (const R of [{ x0: 34, x1: 156, z0: -62, z1: 62 }, { x0: -156, x1: -34, z0: -62, z1: 62 }, RAIL, TENE, BASIN]) hole(R);
  holeC(CRATER.x, CRATER.z, 72); holeC(RESV.x, RESV.z, RESV_R); holeC(0, 0, 34);
  g.fillStyle = 'rgba(40,150,255,0.22)'; g.fill('evenodd');
  g.strokeStyle = 'rgba(90,190,255,0.9)'; g.lineWidth = 1.5; g.stroke();
  g.restore();
  g.save(); g.strokeStyle = '#e8c46a'; g.setLineDash([5, 4]); g.lineWidth = 2; g.beginPath(); g.arc(X(0), Y(0), L(34), 0, 7); g.stroke(); g.restore();   // the Frontier: not a sanctuary
  // the danger of each hostile district, as a dashed border
  g.setLineDash([5, 4]); g.lineWidth = 2;
  for (const [id, draw] of [['ashen', () => rectP({ x0: 34, x1: 156, z0: -62, z1: 62 })], ['echo', () => rectP({ x0: -156, x1: -34, z0: -62, z1: 62 })], ['crater', () => g.arc(X(CRATER.x), Y(CRATER.z), L(72), 0, 7)], ['rail', () => rectP(RAIL)], ['tenements', () => rectP(TENE)], ['reservoir', () => g.arc(X(RESV.x), Y(RESV.z), L(RESV_R), 0, 7)]]) {
    g.strokeStyle = PL_COL[plTag(ZONES[id].pl)]; g.beginPath(); draw(); g.stroke();
  }
  g.setLineDash([]);
  // the survey grid, laid over the ground
  g.strokeStyle = 'rgba(62,230,255,0.10)'; g.lineWidth = 1; const step = S / 16;
  for (let k = 1; k < 16; k++) { g.beginPath(); g.moveTo(k * step, 0); g.lineTo(k * step, S); g.stroke(); g.beginPath(); g.moveTo(0, k * step); g.lineTo(S, k * step); g.stroke(); }
  g.font = `10px ${MAP_SANS}`; g.fillStyle = 'rgba(160,240,255,0.55)'; g.textAlign = 'left'; g.textBaseline = 'top';
  for (let k = 1; k < 16; k++) { g.fillText(String.fromCharCode(64 + k), k * step + 3, 22); g.fillText(String(k), 22, k * step + 3); }
  // fading out into the dark slate at the edges, with scanlines
  const vg = g.createRadialGradient(C, C, S * 0.48, C, C, S * 0.74); vg.addColorStop(0, 'rgba(6,14,22,0)'); vg.addColorStop(0.6, 'rgba(6,14,22,0.55)'); vg.addColorStop(1, 'rgba(6,14,22,0.95)');
  g.fillStyle = vg; g.fillRect(0, 0, S, S);
  g.fillStyle = 'rgba(0,0,0,0.07)'; for (let y = 0; y < S; y += 3) g.fillRect(0, y, S, 1);
  // a cut-corner frame with lit brackets
  const cut = 22; g.strokeStyle = 'rgba(62,230,255,0.55)'; g.lineWidth = 1.5;
  g.beginPath(); g.moveTo(8 + cut, 8); g.lineTo(S - 8, 8); g.lineTo(S - 8, S - 8 - cut); g.lineTo(S - 8 - cut, S - 8); g.lineTo(8, S - 8); g.lineTo(8, 8 + cut); g.closePath(); g.stroke();
  g.save(); g.shadowColor = '#3ee6ff'; g.shadowBlur = 10; g.strokeStyle = '#3ee6ff'; g.lineWidth = 3;
  for (const [x, y, dx, dy] of [[14, 14, 1, 1], [S - 14, 14, -1, 1], [14, S - 14, 1, -1], [S - 14, S - 14, -1, -1]]) { g.beginPath(); g.moveTo(x, y + dy * 40); g.lineTo(x, y); g.lineTo(x + dx * 40, y); g.stroke(); }
  g.restore();
  // the compass ring, top right
  const cx = S - 66, cy = 70; g.strokeStyle = 'rgba(62,230,255,0.7)'; g.lineWidth = 1.5; g.beginPath(); g.arc(cx, cy, 30, 0, 7); g.stroke(); g.beginPath(); g.arc(cx, cy, 24, 0, 7); g.stroke();
  for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2, l = k % 4 ? 24 : 18; g.beginPath(); g.moveTo(cx + Math.sin(a) * l, cy - Math.cos(a) * l); g.lineTo(cx + Math.sin(a) * 30, cy - Math.cos(a) * 30); g.stroke(); }
  g.fillStyle = '#ffd27a'; g.beginPath(); g.moveTo(cx, cy - 22); g.lineTo(cx + 6, cy); g.lineTo(cx, cy + 4); g.lineTo(cx - 6, cy); g.closePath(); g.fill();
  g.fillStyle = 'rgba(160,240,255,0.8)'; g.beginPath(); g.moveTo(cx, cy + 22); g.lineTo(cx + 6, cy); g.lineTo(cx - 6, cy); g.closePath(); g.fill();
  mapText(g, 'N', cx, cy - 40, `bold 13px ${MAP_SANS}`, '#ffd27a');
  return cv;
}
function mapText(g, text, x, y, font, col) {   // names in the old style: coloured, with a hard black shadow
  g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#000'; g.fillText(text, x + 1, y + 1); g.fillStyle = col; g.fillText(text, x, y);
}
function mapIcon(g, x, y, bg, glyph, r = 8) {   // a hexagonal beacon with a glowing rim
  const hex = (rr) => { g.beginPath(); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 + Math.PI / 6; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); };
  g.fillStyle = 'rgba(0,0,0,0.5)'; g.save(); g.translate(1, 1.5); hex(r + 1); g.fill(); g.restore();
  g.fillStyle = '#0b1520'; hex(r + 1); g.fill();
  g.fillStyle = bg; hex(r - 1); g.fill();
  g.save(); g.shadowColor = '#7ff0ff'; g.shadowBlur = 6; g.strokeStyle = 'rgba(160,245,255,0.95)'; g.lineWidth = 1.2; hex(r + 1); g.stroke(); g.restore();
  g.font = `bold ${Math.round(r * 1.2)}px ${MAP_SERIF}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff'; g.fillText(glyph, x, y + 0.5);
}
function drawWorldMap() {
  const cv = $('wm-canvas'), g = cv.getContext('2d'), S = cv.width, zoom = !!G.mapZoom, sc = S / ((zoom ? OLD_R + 30 : WORLD_R + 20) * 2), C = S / 2, P = G.P;
  const X = x => C + x * sc, Y = z => C + z * sc;
  const key = zoom ? 'z' : 'w'; if (!_mapCache[key]) _mapCache[key] = drawMapBase(zoom);
  g.drawImage(_mapCache[key], 0, 0);
  // the ferry, where she is now
  g.fillStyle = '#e9e5da'; g.strokeStyle = '#1a140e'; g.lineWidth = 1; g.fillRect(X(FERRY.x - FERRY.HL), Y(FERRY.z - FERRY.HW), FERRY.HL * 2 * sc, FERRY.HW * 2 * sc); g.strokeRect(X(FERRY.x - FERRY.HL), Y(FERRY.z - FERRY.HW), FERRY.HL * 2 * sc, FERRY.HW * 2 * sc);
  // icons for the places that matter
  const r = zoom ? 9 : 7;
  for (const t of TRAMS) mapIcon(g, X(t.pos.x), Y(t.pos.z), G.D.trams.includes(t.id) ? '#1d8fa8' : '#5a6470', '⇄', r);
  for (const sx of [-1, 1]) mapIcon(g, X(sx * 205), Y(FERRY.z), '#2a5aa0', '⚓', r);
  mapIcon(g, X(0), Y(zoom ? 58 : 46), '#c87a1e', '✦', r);                           // the Salt Lantern
  mapIcon(g, X(zoom ? -30 : 0), Y(zoom ? 118 : 122), '#b0802a', '¤', r);   // the market
  mapIcon(g, X(CONC.x), Y(CONC.z - 14), '#8a6a1e', '♛', r); mapIcon(g, X(CONC.x + 14), Y(CONC.z + 2), '#6a4a8a', '⚔', r);   // the Governor and the Quartermaster
  mapIcon(g, X(197), Y(872), '#b3301e', '▲', r);
  mapIcon(g, X(HOME_C.x), Y(HOME_C.z), '#2a8a6a', '⌂', r);   // your Homestead                                          // the lighthouse
  mapIcon(g, X(-50), Y(540), '#4a6a7a', '⚓', r - 1);                                      // the anchor on the north quay
  // names
  const labels = zoom ? [['plaza', 0, -48], ['cantina', 0, 80], ['market', 0, 168], ['ashen', 108, 24], ['echo', -108, 24], ['crater', 0, -165], ['rail', 328, -30], ['tenements', -328, -30], ['reservoir', 0, 330], ['ward', 210, -230], ['ward', -230, 230], ['ring', -300, -385]]
    : [['reservoir', 0, 336], ['harbour', 0, 690], ['northgate', 0, -700], ['sunrise', 700, -110], ['kopje', -700, -110], ['dhow', -470, 640], ['dhow', 470, 640], ['ring', -300, -385], ['crater', 0, -165], ['plaza', 0, -60], ['concordia', 0, 470]];
  const cap = s => s.toLowerCase().replace(/(^|[\s-])(\S)/g, (m, a, b) => a + b.toUpperCase()).replace(/\bOf\b/g, 'of').replace(/\bThe\b(?!^)/g, 'the').replace(/^the/, 'The');
  for (const [id, x, z] of labels) {
    const Z = ZONES[id], danger = !Z.safe && Z.pl;
    mapText(g, cap(Z.name), X(x), Y(z), `bold ${zoom ? 14 : 13}px ${MAP_SANS}`, danger ? '#ff981f' : '#ffffff');
    if (danger) mapText(g, `◆ ${Z.pl}${Z.pl - playerPL() >= 2 ? ' ☠' : ''}`, X(x), Y(z) + 15, `bold 12px ${MAP_SANS}`, PL_COL[plTag(Z.pl)]);
    else if (Z.safe) mapText(g, 'SANCTUARY', X(x), Y(z) + 14, `10px ${MAP_SANS}`, '#9fe9ff');
  }
  if (!zoom) mapText(g, 'the sea', X(560), Y(860), `italic 16px ${MAP_SERIF}`, '#bfeeff');
  // the title, on a lit plate across the top
  g.save(); g.translate(C, 44);
  const pw = 128, ph = 26, k = 12;
  g.beginPath(); g.moveTo(-pw + k, -ph); g.lineTo(pw, -ph); g.lineTo(pw, ph - k); g.lineTo(pw - k, ph); g.lineTo(-pw, ph); g.lineTo(-pw, -ph + k); g.closePath();
  g.fillStyle = 'rgba(8,16,24,0.88)'; g.fill();
  g.shadowColor = '#3ee6ff'; g.shadowBlur = 12; g.strokeStyle = '#3ee6ff'; g.lineWidth = 1.5; g.stroke();
  g.fillStyle = '#e8c46a'; g.shadowColor = '#e8c46a'; g.shadowBlur = 8; g.fillRect(-pw + 22, ph - 6, 2 * pw - 44, 1.5);
  g.font = `italic bold 32px ${MAP_SERIF}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = '#3ee6ff'; g.shadowBlur = 14; g.fillStyle = '#ffffff'; g.fillText('Ad Nostra', 0, -1);
  g.shadowBlur = 0; g.font = `9px ${MAP_SANS}`; g.fillStyle = 'rgba(160,240,255,0.85)'; g.fillText('C O N C O R D   S U R V E Y   ·   2 1 3 7', 0, ph + 10);
  g.restore();
  mapText(g, zoom ? 'CLICK THE MAP FOR THE WHOLE CITY' : 'CLICK THE MAP FOR THE OLD CITY', S / 2, S - 24, `11px ${MAP_SANS}`, '#9fe9ff');
  // the Mascars, your companions, your objective and you
  const placed = [];
  for (const b of G.bots) if (b.alive && (b.legend || b.party || b.resident)) {
    g.fillStyle = b.legend ? '#ffd84a' : b.party ? '#4dff9a' : '#9dffb0'; g.strokeStyle = '#000'; g.lineWidth = 1; g.beginPath(); g.arc(X(b.pos.x), Y(b.pos.z), 3.5, 0, 7); g.fill(); g.stroke();
    if (b.legend || b.resident) {
      const t = `${b.legend ? b.name.split(' ')[0] : b.name} ◆${b.pl | 0}`; g.font = `bold 11px ${MAP_SANS}`; const w = g.measureText(t).width, x = X(b.pos.x); let y = Y(b.pos.z) - 11;
      for (let k = 0; k < 5 && placed.some(r => x - w / 2 < r[2] && x + w / 2 > r[0] && Math.abs(y - r[1]) < 12); k++) y -= 12;
      placed.push([x - w / 2, y, x + w / 2]); mapText(g, t, x, y, `bold 11px ${MAP_SANS}`, PL_COL[plTag(b.pl | 0)]);
    }
  }
  mapText(g, `You ◆${playerPL()}`, X(P.pos.x), Y(P.pos.z) + 17, `bold 11px ${MAP_SANS}`, '#ffffff');
  const obj = objectivePos();
  if (obj) { g.fillStyle = '#ffd84a'; g.strokeStyle = '#000'; g.save(); g.translate(X(obj.x), Y(obj.z)); g.rotate(Math.PI / 4); g.fillRect(-5, -5, 10, 10); g.strokeRect(-5, -5, 10, 10); g.restore(); }
  g.save(); g.translate(X(P.pos.x), Y(P.pos.z)); g.rotate(-P.group.rotation.y + Math.PI); g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, -10); g.lineTo(7, 7); g.lineTo(0, 3); g.lineTo(-7, 7); g.closePath(); g.fill(); g.stroke(); g.restore();
  $('wm-pl').textContent = `YOUR POWER LEVEL: ◆${playerPL()} · ${ARMOUR[playerPL()].name.toUpperCase()}`;
}
function closeAllUI() { for (const id of ['dialog', 'vendor', 'sheet', 'pause', 'worldmap', 'satchel']) $(id).classList.add('hidden'); G.ui = null; $('tooltip').classList.add('hidden'); }
function openSheet() {
  const D = G.D, P = G.P, c = CL(); closeAllUI(); G.ui = 'sheet';
  $('sh-name').textContent = D.name.toUpperCase();
  const rows = [['Title', D.title], ['Class', c.name], ['Level', D.level], ['Power level', `◆${playerPL()} · ${ARMOUR[playerPL()].name}`], ['Health', `${Math.ceil(P.hp)} / ${maxHp()}`], ['Energy', maxEn()], ['Damage bonus', `+${Math.round((dmgScale() - 1) * 100)}%`], ['Critical chance', `${Math.round(c.crit * 100)}%`], ['Weapon tuning', `Rank ${D.wpn}`], ['Concord plating', `Rank ${D.arm}`], ['Remnants destroyed', fmtNum(D.kills)], ['Deaths', D.deaths], ['Quests completed', D.completed], ['At your side', partyList().map(b => b.name).join(', ') || 'Nobody'], ['Credits', fmtNum(D.credits)], ['Realm', $('realm').value.split(' · ')[0]]];
  $('sheet-rows').innerHTML = rows.map(([a, b]) => `<div class="srow"><span>${a.toUpperCase()}</span><b>${esc(b)}</b></div>`).join('');
  $('sheet').classList.remove('hidden');
}
function togglePause() {
  if (G.ui === 'pause') { closeAllUI(); return; }
  closeAllUI(); G.ui = 'pause'; $('pause').classList.remove('hidden');
}

// =====================================================================
//  INPUT
// =====================================================================
const mouse = { down: -1, sx: 0, sy: 0, lx: 0, ly: 0, dragged: false, both: false, btns: 0 };
canvas.addEventListener('contextmenu', e => e.preventDefault());
canvas.addEventListener('mousedown', e => {
  Sound.init();
  mouse.down = e.button; mouse.btns = e.buttons; mouse.sx = mouse.lx = e.clientX; mouse.sy = mouse.ly = e.clientY; mouse.dragged = false;
  mouse.both = (e.buttons & 3) === 3;
  if (G.mode === 'menu') menu.drag = true;
  if (document.activeElement === $('chat-input')) $('chat-input').blur();
});
window.addEventListener('mousemove', e => {
  const dx = e.clientX - mouse.lx, dy = e.clientY - mouse.ly; mouse.lx = e.clientX; mouse.ly = e.clientY;
  if (G.mode === 'menu') {
    menu.mx = e.clientX / innerWidth * 2 - 1; menu.my = e.clientY / innerHeight * 2 - 1;
    if (menu.drag && mouse.down >= 0) { menu.yaw += dx * 0.01; menu.yawVel = dx * 0.002; }
    return;
  }
  if (mouse.down < 0 || G.mode !== 'world') return;
  if (Math.abs(e.clientX - mouse.sx) + Math.abs(e.clientY - mouse.sy) > 4) mouse.dragged = true;
  if (mouse.dragged) {
    G.cam.yaw -= dx * 0.006 * settings.sens; G.cam.pitch = clamp(G.cam.pitch + dy * 0.004 * settings.sens, -0.1, 1.35);
    if (mouse.down === 2 && G.P && !G.P.dead) G.P.yaw = G.cam.yaw + Math.PI;
  }
});
window.addEventListener('mouseup', e => {
  if (G.mode === 'menu') { menu.drag = false; mouse.down = -1; return; }
  if (G.mode === 'world' && e.target === canvas && !mouse.dragged && G.build && (mouse.down === 0 || mouse.down === 2)) buildAction(mouse.down === 2 || HOME.remove);
  else if (G.mode === 'world' && e.target === canvas && !mouse.dragged && mouse.down === 0) pick3D(e.clientX, e.clientY);
  mouse.down = -1; mouse.both = false;
});
canvas.addEventListener('wheel', e => { if (G.mode === 'world') G.cam.dist = clamp(G.cam.dist + Math.sign(e.deltaY) * 0.8, 2.4, 18); }, { passive: true });
const ray = new THREE.Raycaster();
function pick3D(x, y) {
  if (G.build) { HOME.tap = [x, y]; updateBuild(); buildAction(HOME.remove); return; }   // building: a tap places (or removes) a block
  ray.setFromCamera(new THREE.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1), W.cam);
  const hbs = [...G.enemies.filter(e => e.alive), ...G.bots, ...G.npcs].map(e => e.hitbox);
  const hit = ray.intersectObjects(hbs, false)[0];
  if (hit) {
    const ent = hit.object.userData.ent; setTarget(ent);
    if (ent.kind === 'enemy') G.P.autoOn = true;
    if ((ent.kind === 'npc' || (ent.ally && ent.alive)) && d2(G.P.pos, ent.pos) < 6) interact(ent);
    Sound.sfx('click');
  } else setTarget(null);
}
window.addEventListener('keydown', e => {
  if (G.mode === 'splash') { if (G.ready) enterMenuFromSplash(); return; }
  const chat = $('chat-input'); const typing = document.activeElement === chat;
  const inField = document.activeElement && document.activeElement.tagName === 'INPUT' && !typing;
  if (inField) return;
  if (G.mode !== 'world') { if (e.code === 'Escape') closeModals(); return; }
  if (typing) {
    if (e.code === 'Enter' || e.key === 'Enter') { sendChat(chat.value); chat.value = ''; chat.blur(); }
    else if (e.code === 'Escape') { chat.value = ''; chat.blur(); }
    return;
  }
  keys[e.code] = true;
  if (!$('codex').classList.contains('hidden') || !$('settings').classList.contains('hidden')) { if (e.code === 'Escape') closeModals(); return; }
  switch (e.code) {
    case 'Enter': e.preventDefault(); chat.focus(); break;
    case 'Slash': e.preventDefault(); chat.focus(); chat.value = '/'; break;
    case 'Escape': if (G.build) toggleBuild(false); else if (G.ui) closeAllUI(); else if (G.P.target) setTarget(null); else togglePause(); break;
    case 'Tab': e.preventDefault(); cycleTarget(); break;
    case 'Digit1': case 'Digit2': case 'Digit3': case 'Digit4': case 'Digit5': case 'Digit6': case 'Digit7': case 'Digit8': {
      const k = +e.code.slice(5);
      if (G.build) { HOME.sel = k; HOME.remove = false; renderBuildBar(); } else if (k <= 5) useAbility(k - 1);
      break;
    }
    case 'KeyI': if (G.ui === 'satchel' && G.satTab === 'inv') closeAllUI(); else openSatchel('inv'); break;
    case 'KeyK': if (G.ui === 'satchel' && G.satTab === 'craft') closeAllUI(); else openSatchel('craft'); break;
    case 'KeyO': if (G.ui === 'satchel' && G.satTab === 'skills') closeAllUI(); else openSatchel('skills'); break;
    case 'KeyH': toggleBuild(); break;
    case 'KeyE': case 'KeyF': if (G.ui === 'dialog') break; interact(); break;
    case 'KeyC': if (G.ui === 'sheet') closeAllUI(); else openSheet(); break;
    case 'KeyM': toggleMap(); break;
    case 'Space': e.preventDefault(); if (!e.repeat) playerJump(); break;
    case 'KeyQ': if (!e.repeat) playerCrouch(true); break;
  }
});
window.addEventListener('keyup', e => {
  keys[e.code] = false;
  if (G.P && e.code === 'Space') G.P.jumpHeld = false;
  if (G.P && e.code === 'KeyQ') playerCrouch(false);
});
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; if (G.P) { G.P.jumpHeld = false; G.P.qHeld = false; } });

// ---------------------------------------------------------------- touch
// Left thumb: virtual joystick. Anywhere else on the scene: drag to turn the
// camera, pinch to zoom, tap to target/interact. Buttons map to the keyboard actions.
const joy = { id: null, x: 0, y: 0, mag: 0, cx: 0, cy: 0, r: 52 };
const tcam = new Map(); // touchId -> {x, y, sx, sy, t, moved}
let pinchD = 0;
function joyMove(t) {
  let dx = t.clientX - joy.cx, dy = t.clientY - joy.cy; const d = Math.hypot(dx, dy);
  if (d > joy.r) { dx *= joy.r / d; dy *= joy.r / d; }
  joy.x = dx / joy.r; joy.y = dy / joy.r; joy.mag = Math.min(1, d / joy.r);
  if (joy.mag < 0.15) { joy.x = joy.y = 0; }
  $('joy-knob').style.transform = `translate(${dx}px, ${dy}px)`;
}
function joyEnd() { joy.id = null; joy.x = joy.y = joy.mag = 0; $('joy-knob').style.transform = ''; $('joy').classList.remove('on'); }
$('joy').addEventListener('touchstart', e => {
  e.preventDefault(); Sound.init();
  if (joy.id !== null || G.ui) return;
  const t = e.changedTouches[0], r = $('joy').getBoundingClientRect();
  joy.id = t.identifier; joy.cx = r.left + r.width / 2; joy.cy = r.top + r.height / 2; joy.r = r.width * 0.4;
  $('joy').classList.add('on'); joyMove(t);
}, { passive: false });
window.addEventListener('touchmove', e => {
  for (const t of e.changedTouches) {
    if (t.identifier === joy.id) { joyMove(t); continue; }
    const c = tcam.get(t.identifier); if (!c) continue;
    const dx = t.clientX - c.x, dy = t.clientY - c.y; c.x = t.clientX; c.y = t.clientY;
    if (Math.abs(c.x - c.sx) + Math.abs(c.y - c.sy) > 10) c.moved = true;
    if (G.mode === 'menu') { menu.yaw += dx * 0.01; menu.yawVel = dx * 0.002; continue; }
    if (G.mode !== 'world' || tcam.size > 1) continue;
    G.cam.yaw -= dx * 0.008 * settings.sens; G.cam.pitch = clamp(G.cam.pitch + dy * 0.005 * settings.sens, -0.1, 1.35);
  }
  if (tcam.size === 2 && G.mode === 'world') {
    const [a, b] = [...tcam.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchD) G.cam.dist = clamp(G.cam.dist - (d - pinchD) * 0.03, 2.4, 18);
    pinchD = d;
  }
}, { passive: true });
canvas.addEventListener('touchstart', e => {
  e.preventDefault(); Sound.init();
  if (document.activeElement === $('chat-input')) $('chat-input').blur();
  for (const t of e.changedTouches) tcam.set(t.identifier, { x: t.clientX, y: t.clientY, sx: t.clientX, sy: t.clientY, t: performance.now(), moved: false });
  if (G.mode === 'menu') menu.drag = true;
  pinchD = 0;
}, { passive: false });
function touchEnd(e) {
  for (const t of e.changedTouches) {
    if (t.identifier === joy.id) { joyEnd(); continue; }
    const c = tcam.get(t.identifier); if (!c) continue; tcam.delete(t.identifier);
    if (G.mode === 'world' && !c.moved && tcam.size === 0 && performance.now() - c.t < 350 && !G.ui) pick3D(t.clientX, t.clientY);
  }
  if (tcam.size === 0) { menu.drag = false; pinchD = 0; }
}
window.addEventListener('touchend', touchEnd); window.addEventListener('touchcancel', touchEnd);
// action buttons (pointerdown so they respond instantly, without the click delay)
const tap = (id, fn) => $(id).addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); Sound.init(); fn(); });
tap('tb-jump', () => playerJump());
tap('tb-slide', () => playerCrouch(true));
for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) {
  $('tb-jump').addEventListener(ev, () => { if (G.P) G.P.jumpHeld = false; });
  $('tb-slide').addEventListener(ev, () => playerCrouch(false));
}
tap('tb-target', () => cycleTarget());
tap('tb-menu', () => { if (G.ui && G.ui !== 'pause') closeAllUI(); else togglePause(); });
tap('tb-sheet', () => { if (G.ui === 'sheet') closeAllUI(); else openSheet(); });
tap('tb-map', () => toggleMap());
tap('tb-bag', () => { if (G.ui === 'satchel') closeAllUI(); else openSatchel('inv'); });
for (const b of document.querySelectorAll('#sat-tabs button')) b.onclick = () => { G.satTab = b.dataset.tab; renderSatchel(); };
$('satchel-x').onclick = closeAllUI; $('bb-done').onclick = () => toggleBuild(false); $('bb-remove').onclick = () => { HOME.remove = !HOME.remove; renderBuildBar(); };
$('sat-build').onclick = () => { closeAllUI(); toggleBuild(true); };
tap('tb-chat', () => { const c = $('chat-input'); c.classList.add('open'); c.focus(); });
$('chat-input').addEventListener('blur', () => $('chat-input').classList.remove('open'));
$('prompt').addEventListener('click', () => { if (G.ui !== 'dialog') interact(); });

// =====================================================================
//  SCREENS: splash → menu → create → world
// =====================================================================
let onlineCount = 4812;
function show(id) { $(id).classList.remove('hidden'); }
function hide(id) { $(id).classList.add('hidden'); }
function closeModals() { hide('codex'); hide('settings'); hide('roster'); }

function enterMenuFromSplash() {
  // phones: go fullscreen and hold landscape where the browser allows it (needs this tap's user gesture)
  if (TOUCH) { const el = document.documentElement; try { const p = el.requestFullscreen && el.requestFullscreen({ navigationUI: 'hide' }); if (p) p.then(() => screen.orientation?.lock?.('landscape')).catch(() => {}); } catch (e) {} }
  Sound.init(); Sound.sfx('start'); setTimeout(() => Sound.playMusic('menu'), 300);
  $('splash').style.opacity = 0; setTimeout(() => hide('splash'), 1000);
  G.mode = 'menu'; showMenu();
}
function showMenu() {
  G.mode = 'menu'; setScene(menu.scene, menu.cam);
  hide('hud'); hide('create'); hide('loading'); show('menu');
  if (!G.roster) G.roster = loadRoster();
  const save = lastPlayable();
  const btn = $('btn-continue');
  if (save) { btn.disabled = false; $('continue-sub').textContent = `${save.name.toUpperCase()} · LV ${save.level} ${CLASSES[save.cls].name}`; }
  else { btn.disabled = true; $('continue-sub').textContent = 'NO ASCENDANT REGISTERED'; }
  const nRes = G.roster.filter(c => c.resident).length, nAsc = G.roster.length - nRes;
  $('btn-roster').disabled = !G.roster.length;
  $('roster-sub').textContent = G.roster.length ? `${nAsc} ASCENDANT${nAsc === 1 ? '' : 'S'} · ${nRes} RESIDENT${nRes === 1 ? '' : 'S'}` : 'THE CONCORD REGISTRY';
  Sound.playMusic('menu');
}
document.querySelectorAll('.mbtn, .btn').forEach(b => { b.addEventListener('mouseenter', () => Sound.sfx('hover')); b.addEventListener('click', () => Sound.sfx('click')); });
$('btn-continue').onclick = () => { const s = lastPlayable(); if (s) { G.D = s; enterWorld(); } };
$('btn-roster').onclick = () => openRoster();
$('btn-new').onclick = () => openCreate();
$('btn-codex').onclick = () => openCodex();
$('btn-settings').onclick = () => openSettings();
$('btn-quit').onclick = () => { try { window.close(); } catch (e) {} setTimeout(() => show('farewell'), 150); };
document.querySelectorAll('[data-close]').forEach(b => b.onclick = () => hide(b.dataset.close));
$('codex').addEventListener('mousedown', e => { if (e.target.id === 'codex') hide('codex'); });
$('settings').addEventListener('mousedown', e => { if (e.target.id === 'settings') hide('settings'); });
$('roster').addEventListener('mousedown', e => { if (e.target.id === 'roster') hide('roster'); });

// The registry screen: play any Ascendant, retire one as a Resident of Ad-Nostra, recall a Resident, or delete.
function openRoster() {
  const box = $('roster-list'); box.innerHTML = '';
  const list = [...G.roster].sort((a, b) => (!!a.resident - !!b.resident) || (b.lastPlayed || b.created || 0) - (a.lastPlayed || a.created || 0));
  if (!list.length) box.innerHTML = '<p class="rs-empty">No Ascendants registered yet.</p>';
  for (const c of list) {
    const cl = CLASSES[c.cls], row = document.createElement('div'); row.className = 'rs-row' + (c.resident ? ' res' : '');
    row.innerHTML = `<i class="rs-sig" style="--c:${esc(c.visor)}"></i>
      <div class="rs-main"><div class="rs-name">${esc(c.name.toUpperCase())}${c.resident ? '<span class="rs-tag">RESIDENT</span>' : ''}</div>
      <div class="rs-sub">LV ${c.level} ${cl.name} · ◆${c.armour == null ? 1 : c.armour} · ${esc((c.title || 'Ascendant').toUpperCase())} · ${fmtNum(c.kills | 0)} REMNANTS</div></div><div class="rs-btns"></div>`;
    const btns = row.querySelector('.rs-btns');
    const add = (label, cls, fn, confirm) => {
      const b = document.createElement('button'); b.className = 'btn ' + cls; b.textContent = label;
      b.onclick = () => { if (confirm && !b._armed) { b._armed = true; b.textContent = confirm; setTimeout(() => { b._armed = false; b.textContent = label; }, 3000); return; } Sound.sfx('click'); fn(); };
      btns.appendChild(b);
    };
    if (!c.resident) {
      add('PLAY', 'gold', () => { hide('roster'); G.D = c; enterWorld(); });
      add('MAKE RESIDENT', 'ghost', () => { c.resident = true; c.residentSince = Date.now(); saveRoster(); openRoster(); showMenu(); }, 'CONFIRM?');
    } else add('RECALL', '', () => { c.resident = false; delete c.residentSince; c.lastPlayed = Date.now(); saveRoster(); openRoster(); showMenu(); });
    add('✕', 'ghost', () => { G.roster = G.roster.filter(x => x !== c); if (G.D === c) G.D = null; saveRoster(); openRoster(); showMenu(); }, 'DELETE?');
    box.appendChild(row);
  }
  show('roster');
}

function openCodex(i = 0) {
  const list = $('codex-list'); list.innerHTML = '';
  CODEX.forEach((c, k) => { const li = document.createElement('li'); li.textContent = c.title.toUpperCase(); if (k === i) li.className = 'on'; li.onclick = () => { Sound.sfx('click'); openCodex(k); }; list.appendChild(li); });
  const c = CODEX[i]; $('codex-body').innerHTML = `<h3>${esc(c.title.toUpperCase())}</h3><div class="tag">${esc(c.tag)}</div>${c.body.map(p => `<p>${esc(p)}</p>`).join('')}`;
  show('codex');
}
function openSettings() {
  $('set-volume').value = settings.volume; $('set-music').checked = settings.music; $('set-bloom').checked = settings.bloom;
  $('set-shadows').checked = settings.shadows; $('set-sens').value = settings.sens; $('set-plates').checked = settings.plates;
  $('set-dynres').checked = settings.dynres; $('set-fps').checked = settings.fps;
  show('settings');
}
function saveSettings() { store.set('adnostra_settings', settings); }
$('set-volume').oninput = e => { settings.volume = +e.target.value; Sound.setVolume(settings.volume); saveSettings(); };
$('set-music').onchange = e => { settings.music = e.target.checked; Sound.setMusic(settings.music); saveSettings(); };
$('set-bloom').onchange = e => { settings.bloom = e.target.checked; bloom.enabled = settings.bloom; saveSettings(); };
$('set-shadows').onchange = e => { settings.shadows = e.target.checked; renderer.shadowMap.enabled = settings.shadows; for (const s of [menu.scene, W.scene]) s.traverse(o => { if (o.material) [].concat(o.material).forEach(m => m.needsUpdate = true); }); saveSettings(); };
$('set-sens').oninput = e => { settings.sens = +e.target.value; saveSettings(); };
$('set-plates').onchange = e => { settings.plates = e.target.checked; saveSettings(); };
$('set-dynres').onchange = e => { settings.dynres = e.target.checked; perf.level = 0; perf.fails = 0; applyRes(); saveSettings(); };
$('set-fps').onchange = e => { settings.fps = e.target.checked; $('fps').classList.toggle('hidden', !settings.fps); saveSettings(); };
$('fps').classList.toggle('hidden', !settings.fps);

// character creation
const create = { cls: 'vanguard', visor: VISORS[0] };
function openCreate() {
  hide('menu'); show('create');
  const box = $('classes'); box.innerHTML = '';
  for (const [k, c] of Object.entries(CLASSES)) {
    const d = document.createElement('div'); d.className = 'ccard cut' + (k === create.cls ? ' on' : ''); d.style.setProperty('--c', c.color);
    d.innerHTML = `<div class="cico">${c.icon}</div><h3>${c.name}</h3><div class="role">${c.role}</div><p>${esc(c.desc)}</p>
      <div class="stats"><span>HEALTH <b>${c.hp}</b></span><span>RANGE <b>${c.range > 5 ? 'LONG' : 'MELEE'}</b></span><span>CRIT <b>${Math.round(c.crit * 100)}%</b></span></div>
      <ul>${c.abil.map(a => `<li><span>${a.icon}</span>${esc(a.name)}</li>`).join('')}</ul>`;
    d.onclick = () => { create.cls = k; Sound.sfx('click'); openCreate(); };
    box.appendChild(d);
  }
  const sw = $('swatches'); sw.innerHTML = '';
  for (const v of VISORS) { const s = document.createElement('div'); s.className = 'sw' + (v === create.visor ? ' on' : ''); s.style.setProperty('--c', v); s.onclick = () => { create.visor = v; Sound.sfx('click'); openCreate(); }; sw.appendChild(s); }
  const inp = $('cname'); if (!inp.value) inp.value = pick(['Ardent', 'Talon', 'Vesper', 'Rook', 'Cassia', 'Orin', 'Lyra', 'Dain', 'Sorrel', 'Kestrel']);
  $('overwrite').classList.add('hidden');
}
$('create-back').onclick = () => { hide('create'); showMenu(); };
$('create-go').onclick = () => {
  const name = $('cname').value.trim();
  const bad = !/^[A-Za-z0-9_\- ]{2,16}$/.test(name), taken = !bad && G.roster.some(c => c.name.toLowerCase() === name.toLowerCase());
  if (bad || taken) {
    $('cname').style.borderColor = 'var(--crimson)'; setTimeout(() => $('cname').style.borderColor = '', 1200);
    if (taken) { $('overwrite').textContent = 'THAT NAME IS ALREADY IN THE REGISTRY'; $('overwrite').classList.remove('hidden'); }
    Sound.sfx('error'); return;
  }
  G.D = newSave(name, create.cls, create.visor); G.roster.push(G.D); saveRoster(); store.set(ACTIVE_KEY, G.D.id); Sound.sfx('start'); enterWorld(true);
};

function enterWorld(isNew = false) {
  hide('menu'); hide('create'); show('loading');
  $('load-tip').textContent = pick(TIPS); const bar = $('load-bar'); bar.style.transition = 'none'; bar.style.width = '0';
  requestAnimationFrame(() => { bar.style.transition = 'width 1.6s ease'; bar.style.width = '70%'; });
  setTimeout(() => {
    try { if (!G.world) buildWorld(); } catch (err) { console.error(err); showError('World failed to build: ' + err.message); }
    G.D.lastPlayed = Date.now(); if (!G.D.id) G.D.id = newId(); store.set(ACTIVE_KEY, G.D.id);
    setupPlayer();
    syncResidents(); restoreParty();
    // reset world state
    for (const e of G.enemies) { if (e.target === G.P || (e.target && e.target.kind === 'player')) { e.target = null; e.state = 'return'; } }
    G.zone = ''; G.ui = null; closeAllUI(); hide('death');
    $('chat-log').innerHTML = '';
    bar.style.width = '100%';
    setTimeout(() => {
      hide('loading'); show('hud'); G.mode = 'world'; setScene(W.scene, W.cam);
      updateTracker(); setTarget(null);
      W.cam.position.copy(G.P.pos).add(new V3(0, 2.5, 5.5));
      Sound.playMusic('world');
      addChat('sys', null, `Welcome to Ad-Nostra, ${G.D.name}. Realm: ${$('realm').value.split(' · ')[0]}.`);
      addChat('gov', null, 'Anno Domini 2137. Ten years since Carax. The Catharsis is fallen — but its Remnants endure.');
      if (isNew || G.D.q.i === 0 && G.D.q.st === 'available') addChat('sys', null, `Governor Croxian Mascar awaits you on his dais. Walk up and ${TOUCH ? 'tap the prompt' : 'press E'}.`);
      setTimeout(() => botSay(pick(chatBots()), `welcome ${G.D.name} o7`), 3500);
    }, 500);
  }, 900);
}
function exitToMenu() { saveGame(); closeAllUI(); for (const f of G.floaters) f.el.remove(); G.floaters = []; showMenu(); }
function saveGame() {
  if (!G.D || !G.P) return;
  G.D.pos = [G.P.pos.x, G.P.pos.z];
  saveLegends();
  if (!G.roster.includes(G.D)) G.roster.push(G.D);
  saveRoster(); store.set(ACTIVE_KEY, G.D.id);
}
window.addEventListener('beforeunload', () => { if (G.mode === 'world') saveGame(); });

$('respawn').onclick = respawn;
$('vendor-x').onclick = closeAllUI; $('wm-x').onclick = closeAllUI; $('wm-canvas').onclick = () => { G.mapZoom = !G.mapZoom; drawWorldMap(); }; $('sheet-x').onclick = closeAllUI;
$('pz-resume').onclick = closeAllUI; $('pz-sheet').onclick = openSheet;
$('pz-codex').onclick = () => { closeAllUI(); openCodex(); };
$('pz-settings').onclick = () => { closeAllUI(); openSettings(); };
$('pz-exit').onclick = exitToMenu;

setInterval(() => { onlineCount = clamp(onlineCount + randi(-14, 16), 4200, 5600); $('online').textContent = fmtNum(onlineCount); }, 3000);

// ---------------------------------------------------------------- resize & loop
window.addEventListener('resize', () => {
  for (const c of [menu.cam, W.cam]) { c.aspect = innerWidth / innerHeight; c.updateProjectionMatrix(); }
  renderer.setSize(innerWidth, innerHeight); composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(innerWidth, innerHeight); bloom.resolution.set(innerWidth / 2, innerHeight / 2);
});
// ---------------------------------------------------------------- dynamic resolution
// Keeps the full-quality look on weak GPUs: if frames run long, render fewer pixels
// (then upscale); when there is headroom again, step back up. Effects stay on.
const RES_STEPS = [1, 0.85, 0.72, 0.6];
const perf = { level: 0, acc: 0, n: 0, cool: 0, grace: 3, fails: 0, frames: 0, fpsT: 0, fps: 0 };
const basePR = () => Math.min(devicePixelRatio, Q.pixelRatio);
function applyRes() {
  const pr = basePR() * (settings.dynres ? RES_STEPS[perf.level] : 1);
  if (Math.abs(renderer.getPixelRatio() - pr) < 0.01) return;
  renderer.setPixelRatio(pr); composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight);
}
function tickPerf(raw) {
  perf.frames++; perf.fpsT += raw;
  if (perf.fpsT >= 0.5) {
    perf.fps = perf.frames / perf.fpsT; perf.frames = 0; perf.fpsT = 0;
    if (settings.fps) $('fps').textContent = `${Math.round(perf.fps)} FPS · ${Math.round(RES_STEPS[settings.dynres ? perf.level : 0] * 100)}% RES · ${renderer.info.render.calls} DRAWS`;
  }
  if (!settings.dynres || document.hidden || raw > 2) return;        // ignore tab switches
  if (perf.grace > 0) { perf.grace -= raw; return; }
  const f = Math.min(raw, 0.1);                                        // clamp, so one hitch can't swing the average but slow machines still count
  perf.cool = Math.max(0, perf.cool - raw); perf.acc += f; perf.n++;
  if (perf.acc < 1.5 && perf.n < 90) return;
  const ms = perf.acc / perf.n * 1000; perf.acc = 0; perf.n = 0;
  if (ms > 21 && perf.level < RES_STEPS.length - 1) { perf.level = Math.min(RES_STEPS.length - 1, perf.level + (ms > 40 ? 2 : 1)); perf.fails++; perf.cool = Math.min(60, 6 * 2 ** perf.fails); applyRes(); }
  else if (ms < 17.8 && perf.level > 0 && perf.cool <= 0) { perf.level--; perf.cool = 4; applyRes(); }
}

function loop() {
  requestAnimationFrame(loop);
  const raw = clock.getDelta(), dt = Math.min(raw, 0.05); G.time += dt;
  tickPerf(raw);
  Sound.tick(dt);
  try { if (G.mode === 'world') updateWorld(dt); else updateMenu(dt); } catch (err) { console.error(err); }
  renderer.info.reset();
  composer.render();
}

// ---------------------------------------------------------------- boot
(async function boot() {
  const bar = $('splash-bar'), status = $('splash-status');
  const prog = p => bar.style.width = (p * 100) + '%';
  prog(0.1);
  try { await loadMascar(prog); status.textContent = 'UPLINK ESTABLISHED'; }
  catch (err) { console.error(err); status.textContent = 'GOVERNOR MODEL UNAVAILABLE — USING FALLBACK'; showError(err.message); }
  try { await loadSoldier(); }
  catch (err) { console.error(err); showError('Ascendant model unavailable, using the fallback: ' + err.message); }
  try { await loadOrion(); }
  catch (err) { console.error(err); }   // without his model, Orion simply isn't in the world
  try { await loadMalia(); }
  catch (err) { console.error(err); }   // likewise Malia
  buildMenu();
  setScene(menu.scene, menu.cam);
  loop();
  setTimeout(() => { hide('splash-load'); show('splash-press'); G.ready = true; }, 400);
  $('splash').addEventListener('pointerdown', () => { if (G.ready && G.mode === 'splash') enterMenuFromSplash(); });
  if (TOUCH) $('splash-press').textContent = 'TAP TO BEGIN';
  window.__AD = G; window.__ADdbg = { W, menu, damage, killEnemy, talkMascar, updateTracker, LIFE, FERRY, CROX, HOME, homeTarget, toggleMap, stats: () => ({ batch: W.batch, res: RES_STEPS[perf.level], calls: renderer.info.render.calls, tris: renderer.info.render.triangles, geos: renderer.info.memory.geometries, tex: renderer.info.memory.textures, pr: renderer.getPixelRatio() }) }; // debug handles
})();
