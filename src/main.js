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
import {
  CODEX, TIPS, CLASSES, VISORS, QUESTS, MASCAR_IDLE, BOT_NAMES, GUILDS,
  WORLD_CHAT, ZONE_CHAT, GOV_ANNOUNCE, LORE_REPLIES, GREET_REPLIES
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
const SAVE_KEY = 'adnostra_save_v1';
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
  enemies: [], bots: [], npcs: [], shards: [], proj: [], fx: [], timers: [], floaters: [],
  colliders: [], ui: null, zone: '', autosave: 20, chatT: 6,
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
};
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

function makeDrone(level) {
  const g = new THREE.Group(); const body = new THREE.Group(); body.position.y = 2.6; g.add(body);
  const core = new THREE.Mesh(GEO.oct, glowMat(0xff2b4a, 3)); core.scale.set(0.42, 0.55, 0.42); body.add(core);
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
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh) return;
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
  for (const b of buckets.values()) {
    const mesh = new THREE.Mesh(mergeGeometries(b.geos), b.m); mesh.castShadow = b.cs; mesh.receiveShadow = b.rs; scene.add(mesh);
  }
  return { meshes: done.length, batches: buckets.size };
}
// Distant characters. Up close each character is its animated rig; past LOD_NEAR it
// becomes one instance in a shared BatchedMesh (vertex-coloured body + glowing trim),
// so every far-off player, NPC and enemy together costs two draw calls.
const LOD_NEAR = 30;
const farChars = { body: null, glow: null, geo: new Map(), ids: new Map() };
function initFarChars(scene) {
  const body = new THREE.BatchedMesh(192, 120000, 0, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.55, roughness: 0.45 }));
  const glow = new THREE.BatchedMesh(192, 30000, 0, new THREE.MeshBasicMaterial({ vertexColors: true }));
  body.castShadow = true; body.receiveShadow = true; body.perObjectFrustumCulled = glow.perObjectFrustumCulled = true; body.frustumCulled = glow.frustumCulled = false; // instances move, so cull per character, not per batch
  scene.add(body, glow); Object.assign(farChars, { body, glow });
}
// Bake one character's rig (at rest pose, in its own local space) into body + glow geometry.
function bakeFarGeometry(ent) {
  const root = ent.group; root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert(), body = [], glow = [], sig = [];
  for (const part of root.children) if (part !== ent.hitbox) part.traverse(o => {
    if (!o.isMesh || !o.visible) return;
    const m = o.material; if (Array.isArray(m) || m.visible === false || m.transparent || m.wireframe) return;
    const g = toMergeable(o.geometry).applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld)); g.deleteAttribute('uv'); g.clearGroups();
    const isGlow = m.emissiveIntensity > 1 && m.emissive && m.emissive.getHex() !== 0;
    const c = isGlow ? m.emissive.clone().multiplyScalar(Math.min(m.emissiveIntensity, 3) * 0.7) : (m.color || new THREE.Color(0x888888)).clone();
    const n = g.attributes.position.count, arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b], i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    (isGlow ? glow : body).push(g); sig.push(m.uuid, o.geometry.uuid);
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
  for (const list of [G.enemies, G.bots, G.npcs]) for (const e of list) {
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
function makeGrass(count, area, sampler, cx = 0, cz = 0, chunk = 0) {
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
    const x = cx + rand(-area, area), z = cz + rand(-area, area); const kind = sampler(x, z); if (!kind) continue;
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
  const k = new THREE.Mesh(new THREE.ConeGeometry(230, 150, 28, 1), haze); k.position.set(330, 70, -440); S.add(k);   // the great mountain
  const cap = new THREE.Mesh(new THREE.ConeGeometry(62, 42, 28, 1), snow); cap.position.set(330, 124, -440); S.add(cap);
  const mesaM = new THREE.MeshBasicMaterial({ color: 0x9a6f6a, fog: false });
  for (let i = 0; i < 9; i++) { const a = rand(0, Math.PI * 2), r = rand(470, 540); if (Math.abs(a - Math.atan2(-440, 330)) < 0.4) continue; const m = new THREE.Mesh(new THREE.CylinderGeometry(rand(30, 70), rand(50, 90), rand(25, 55), 7), mesaM); m.position.set(Math.cos(a) * r, 10, Math.sin(a) * r); S.add(m); }
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
  mergeStatic(S, 400);
  menu.cam.position.set(1.9, 1.75, 6.4);
}
function updateMenu(dt) {
  const t = G.time;
  grassTime.value = t; menu.sky.material.uniforms.t.value = t;
  if (!menu.drag) { menu.yawVel *= 0.94; menu.yaw += menu.yawVel; menu.yaw *= 0.985; }
  if (menu.mascar) { menu.mascar.rotation.y = menu.yaw + Math.sin(t * 0.25) * 0.18; menu.mascar.children[0].scale.y = menu.mascar.children[0].scale.x * (1 + Math.sin(t * 1.6) * 0.003); }
  menu.sigil.rotation.z = t * 0.05; menu.sigil.children[3].rotation.z = Math.PI / 2 - t * 0.12; menu.sigil.children[4].rotation.z = -Math.PI / 2 + t * 0.09;
  for (const f of menu.frags) { f.rotation.y += f.userData.s * dt; f.position.y += Math.sin(t + f.userData.s * 10) * 0.004; }
  const p = menu.embers.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) { let y = p.getY(i) + dt * (0.08 + (i % 7) * 0.02); if (y > 10) y = 0; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * 0.4 + i) * 0.003 + dt * 0.05); if (p.getX(i) > 14) p.setX(i, -14); }
  p.needsUpdate = true;
  // portrait screens: pull back and centre him in the upper half, above the menu buttons
  const portrait = menu.cam.aspect < 1;
  const tx = (portrait ? 0.5 : 1.9) + menu.mx * 0.35, ty = (portrait ? 1.6 : 1.75) - menu.my * 0.2, tz = portrait ? 6.4 + 4.5 / menu.cam.aspect : 6.4;
  menu.cam.position.x += (tx - menu.cam.position.x) * 0.04; menu.cam.position.y += (ty - menu.cam.position.y) * 0.04; menu.cam.position.z += (tz - menu.cam.position.z) * 0.08;
  menu.cam.lookAt(portrait ? 0 : -0.85, portrait ? 0.35 : 1.22, 0);
}


// =====================================================================
//  WORLD
// =====================================================================
const W = { scene: new THREE.Scene(), cam: new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 900) };
const ZONES = {
  plaza: { name: 'CONCORDIA PLAZA', sub: 'SANCTUARY · SEAT OF THE GOVERNOR', safe: true },
  causeway: { name: 'CONCORD CAUSEWAY', sub: 'AD-NOSTRA' },
  ward: { name: 'SPIRE WARD', sub: 'AD-NOSTRA' },
  ashen: { name: 'SCORCHED VELD', sub: 'LEVEL 1–3 · CONTESTED' },
  echo: { name: 'ECHO PLAINS', sub: 'LEVEL 2–4 · CONTESTED' },
  crater: { name: 'THE CATHARSIS CRATER', sub: 'LEVEL 4–7 · HOSTILE' },
};
const CRATER = new V3(0, 0, -165);
function zoneAt(x, z) {
  if (Math.hypot(x, z) < 34) return 'plaza';
  if (Math.hypot(x - CRATER.x, z - CRATER.z) < 72) return 'crater';
  if (x > 34 && x < 156 && Math.abs(z) < 62) return 'ashen';
  if (x < -34 && x > -156 && Math.abs(z) < 62) return 'echo';
  if (Math.abs(z) < 12 || (Math.abs(x) < 12 && z < 0)) return 'causeway';
  return 'ward';
}
function isOpen(x, z, m) {
  if (Math.hypot(x, z) < 40 + m) return true;
  if (Math.abs(z) < 12 + m || Math.abs(x) < 12 + m) return true;
  if (x > 30 - m && x < 160 + m && Math.abs(z) < 66 + m) return true;
  if (x < -30 + m && x > -160 - m && Math.abs(z) < 66 + m) return true;
  if (Math.hypot(x - CRATER.x, z - CRATER.z) < 76 + m) return true;
  if (Math.hypot(x, z) > 232 - m) return true;
  return false;
}
function addCollider(x, z, w, d, h = 60) { G.colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h }); }

function buildWorld() {
  const S = W.scene;
  S.fog = new THREE.Fog(0xd8ae82, 70, 330);
  S.userData.post = { strength: 0.45, radius: 0.5, threshold: 0.95, exposure: 0.9 };
  S.add(new THREE.HemisphereLight(0xffe0b8, 0x5a3e28, 0.6));
  const sun = new THREE.DirectionalLight(0xffd6a0, 2.4);
  sun.castShadow = true; sun.shadow.mapSize.set(Q.shadowMap, Q.shadowMap);
  Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 300 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  S.add(sun, sun.target); W.sun = sun;

  // sky dome + the great mountain and mesas on the horizon
  const sky = makeSky(SUN_DIR, 600, { zen: 0x4a78b4, mid: 0xb9b4a8, hor: 0xd8ae82, glow: 0xffc27a, clouds: 1 }); S.add(sky); W.sky = sky;
  S.environment = envFromSky(sky); S.environmentIntensity = 0.55;
  makeMountains(S);

  // ground
  const gt = grassTex('#9a7440', '#6e5028', '#c9a160', 90);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; S.add(ground);

  const overlay = (geo, tex, x, z, y = 0.02, extra = {}) => {
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial(Object.assign({ map: tex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1 - y * 10 }, extra)));
    m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; S.add(m); return m;
  };

  // roads
  const roadE = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#8a5a3a'; g.fillRect(0, 0, w, h); speckle(g, w, h, 2500, ['#7a4e32', '#9c6a46', '#6a4229'], 3); g.fillStyle = 'rgba(240,220,180,0.35)'; g.fillRect(40, 124, 170, 8); });
  roadE.repeat.set(300 / 14, 1);
  overlay(new THREE.PlaneGeometry(300, 14), roadE, 0, 0, 0.01);
  const roadN = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#8a5a3a'; g.fillRect(0, 0, w, h); speckle(g, w, h, 2500, ['#7a4e32', '#9c6a46', '#6a4229'], 3); g.fillStyle = 'rgba(240,220,180,0.35)'; g.fillRect(124, 40, 8, 170); });
  roadN.repeat.set(1, 120 / 14);
  overlay(new THREE.PlaneGeometry(14, 120), roadN, 0, -60, 0.011);
  const stripM = mat('kerb', () => new THREE.MeshStandardMaterial({ color: 0xd8c09a, roughness: 0.9 }));
  for (const s of [-1, 1]) {
    for (const side of [-1, 1]) bx(116, 0.06, 0.12, stripM, side * 92, 0.03, s * 7.2, S).castShadow = false;
    bx(0.12, 0.06, 70, stripM, s * 7.2, 0.03, -71, S).castShadow = false;
  }

  // ---------- city blocks
  const FAC = { sand: makeFacade('sand'), white: makeFacade('white'), terra: makeFacade('terra'), glass: makeFacade('glass') };
  const roofM = new THREE.MeshStandardMaterial({ color: 0xa88a66, roughness: 0.92 });
  const trimM = new THREE.MeshStandardMaterial({ color: 0xe3d5b8, roughness: 0.85 });
  const domeM = new THREE.MeshStandardMaterial({ color: 0xeee4d0, roughness: 0.55 });
  const blink = glowMat(0xff3355, 3); W.blink = blink;
  const block = (w, h, d, x, y, z, fm) => {
    const geo = new THREE.BoxGeometry(w, h, d); scaleUV(geo, w, h, d);
    const b = new THREE.Mesh(geo, [fm, fm, roofM, roofM, fm, fm]); b.position.set(x, y + h / 2, z); b.castShadow = b.receiveShadow = true; S.add(b);
  };
  const parapet = (w, d, x, y, z) => { // low wall around a flat roof
    for (const [pw, pd, px, pz] of [[w, 0.35, 0, d / 2], [w, 0.35, 0, -d / 2], [0.35, d, w / 2, 0], [0.35, d, -w / 2, 0]]) bx(pw, 0.9, pd, trimM, x + px, y + 0.45, z + pz, S);
  };
  const spire = (x, y, z) => { const sh = rand(7, 13); bx(0.35, sh, 0.35, trimM, x, y + sh / 2, z, S); const l = new THREE.Mesh(GEO.sph, blink); l.scale.setScalar(0.35); l.position.set(x, y + sh, z); S.add(l); };
  for (let gx = -230; gx <= 230; gx += 20) for (let gz = -230; gz <= 230; gz += 20) {
    const w = rand(9, 15), d = rand(9, 15), x = gx + rand(-2, 2), z = gz + rand(-2, 2);
    if (isOpen(x, z, Math.max(w, d) / 2)) continue;
    const r = Math.hypot(x, z);
    const h = rand(14, 40) + (r < 120 ? rand(0, 45) : rand(0, 20));
    addCollider(x, z, w, d, h + 3);
    if (h > 58 && Math.random() < 0.55) {            // glass spire on a sandstone podium
      const ph = rand(7, 11); block(w, ph, d, x, 0, z, FAC.sand); parapet(w, d, x, ph, z);
      const tw = w * rand(0.55, 0.7), td = d * rand(0.55, 0.7); block(tw, h - ph, td, x, ph, z, FAC.glass);
      spire(x, h, z); continue;
    }
    const fm = pick([FAC.sand, FAC.sand, FAC.white, FAC.terra]);
    const tiers = h > 34 ? randi(2, 3) : 1; let y = 0, tw = w, td = d, rest = h;
    for (let k = 0; k < tiers; k++) {                // stepped setbacks
      const th = k === tiers - 1 ? rest : rest * rand(0.45, 0.62);
      block(tw, th, td, x, y, z, fm); y += th; rest -= th;
      if (k < tiers - 1 || fm !== FAC.white) parapet(tw, td, x, y, z);
      if (k < tiers - 1) { tw *= rand(0.62, 0.8); td *= rand(0.62, 0.8); }
    }
    if (fm === FAC.white && Math.random() < 0.7) {   // whitewashed drum and dome
      const dr = Math.min(tw, td) * 0.42; const drum = new THREE.Mesh(new THREE.CylinderGeometry(dr, dr, 1.6, 20), trimM); drum.position.set(x, y + 0.8, z); drum.castShadow = true; S.add(drum);
      const dm = new THREE.Mesh(new THREE.SphereGeometry(dr, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), domeM); dm.position.set(x, y + 1.6, z); dm.castShadow = true; S.add(dm);
    } else if (h > 50) spire(x, y, z);
  }
  // sandstone rampart around the city
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(246, 246, 34, 128, 1, true), new THREE.MeshStandardMaterial({ color: 0xb48c62, roughness: 0.95, side: THREE.BackSide }));
  wall.position.y = 17; S.add(wall);
  const wallStrip = new THREE.Mesh(new THREE.TorusGeometry(245, 0.25, 6, 256), glowMat(0xe8c46a, 1.6)); wallStrip.rotation.x = Math.PI / 2; wallStrip.position.y = 33; S.add(wallStrip);

  // hologram billboards
  const words = ['AD-NOSTRA', 'REBUILD · RENEW · REMEMBER', 'CONCORD', 'ANNO DOMINI 2137', 'THE SKY IS OURS', 'ENLIST · ASCEND'];
  words.forEach((wd, i) => {
    const tex = canvasTex(1024, 192, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.strokeStyle = i % 2 ? '#e8c46a' : '#3ee6ff'; g.lineWidth = 4; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = i % 2 ? '#e8c46a' : '#3ee6ff'; g.font = 'bold 84px Bahnschrift, Segoe UI, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(wd, w / 2, h / 2 + 4);
    });
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    const a = i / words.length * Math.PI * 2 + 0.5;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 4.9), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.85, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.set(Math.cos(a) * 46, rand(20, 30), Math.sin(a) * 46); m.lookAt(0, m.position.y, 0); S.add(m);
  });

  // ---------- CONCORDIA PLAZA
  const plazaTex = canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#b4936c'; g.fillRect(0, 0, w, h); speckle(g, w, h, 8000, ['#c0a07a', '#a6845e', '#c9ab86']);
    g.strokeStyle = 'rgba(90,60,30,0.35)'; g.lineWidth = 3;
    for (let r = 64; r < 512; r += 64) { g.beginPath(); g.arc(512, 512, r, 0, Math.PI * 2); g.stroke(); }
    for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2; g.beginPath(); g.moveTo(512 + Math.cos(a) * 64, 512 + Math.sin(a) * 64); g.lineTo(512 + Math.cos(a) * 512, 512 + Math.sin(a) * 512); g.stroke(); }
  });
  overlay(new THREE.CircleGeometry(34, 96), plazaTex, 0, 0, 0.03, { roughness: 0.85 });
  for (const [r, o] of [[33.6, 0.9], [30, 0.5], [16, 0.6]]) { const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.15, r, 128), new THREE.MeshBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: o })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; S.add(ring); }
  // lamps
  const lampM = armorMat(0x2a313b);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2 + Math.PI / 12; const x = Math.cos(a) * 31, z = Math.sin(a) * 31;
    bx(0.25, 5, 0.25, lampM, x, 2.5, z, S); bx(0.9, 0.12, 0.9, glowMat(0x9fe9ff, 3), x, 5.05, z, S); addCollider(x, z, 0.5, 0.5);
  }

  // the Governor's dais + the Statue of the Unmaking
  const daisM = new THREE.MeshStandardMaterial({ color: 0x8a7258, metalness: 0.2, roughness: 0.6 });
  for (const [r, h] of [[5.5, 0.4], [4.3, 0.8], [3.2, 1.2]]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r + 0.2, h, 48), daisM); c.position.set(0, h / 2, -12); c.receiveShadow = true; c.castShadow = true; S.add(c); }
  const dr = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.03, 6, 96), glowMat(0x3ee6ff, 4)); dr.rotation.x = Math.PI / 2; dr.position.set(0, 1.21, -12); S.add(dr);
  const statuePed = bx(9, 4, 9, daisM, 0, 2, -27, S); addCollider(0, -27, 9, 9);
  const plaque = canvasTex(512, 128, (g, w, h) => { g.fillStyle = '#c9a85a'; g.font = 'bold 40px Bahnschrift, sans-serif'; g.textAlign = 'center'; g.fillText('CARAX · SAGITTARIUS A*', w / 2, 52); g.font = '28px Bahnschrift, sans-serif'; g.fillText('MMCXXVII', w / 2, 98); });
  plaque.wrapS = plaque.wrapT = THREE.ClampToEdgeWrapping;
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), new THREE.MeshStandardMaterial({ map: plaque, transparent: true, emissive: 0xc9a85a, emissiveMap: plaque, emissiveIntensity: 0.5 })); pl.position.set(0, 2.2, -22.48); S.add(pl);
  const statue = mascarInstance(15, new THREE.MeshStandardMaterial({ color: 0x8c939c, roughness: 0.75, metalness: 0.15 }));
  statue.position.set(0, 4, -27); S.add(statue);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(7, 0.12, 8, 128), glowMat(0x3ee6ff, 3)); halo.position.set(0, 15, -29); halo.userData.dynamic = true; S.add(halo); W.halo = halo;

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

  // grass: gold in the city gaps, burnt on the veld, pale on the Echo Plains, none on roads or in the crater
  W.grass = makeGrass(Q.worldGrass, 232, (x, z) => {
    if (Math.hypot(x, z) > 236 || !isOpen(x, z, -2)) return null;
    if (Math.abs(z) < 8 || (Math.abs(x) < 8 && z < 0 && z > -120)) return null;
    const zn = zoneAt(x, z);
    if (zn === 'plaza') return null;
    if (zn === 'crater') return Math.hypot(x - CRATER.x, z - CRATER.z) > 62 && Math.random() < 0.3 ? 'burnt' : null;
    if (zn === 'ashen') return Math.random() < 0.6 ? 'burnt' : 'gold';
    if (zn === 'echo') return 'pale';
    return 'gold';
  }, 0, 0, 64);
  S.add(W.grass);

  // shared fx resources
  W.shieldMesh = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 16), new THREE.MeshBasicMaterial({ color: 0x9fe9ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
  W.shieldMesh.visible = false; S.add(W.shieldMesh);
  W.targetRing = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 48), new THREE.MeshBasicMaterial({ color: 0xff2b4a, transparent: true, opacity: 0.9, depthWrite: false }));
  W.targetRing.rotation.x = -Math.PI / 2; W.targetRing.visible = false; S.add(W.targetRing);

  W.batch = mergeStatic(S, 250);
  initFarChars(S);
  spawnNPCs(); spawnEnemies(); spawnShards(); spawnBots();
  G.world = true;
}

// =====================================================================
//  ENTITIES
// =====================================================================
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
  const m = mascarInstance(2.25); m.position.set(0, 1.2, -12); W.scene.add(m);
  const mascar = { kind: 'npc', id: 'mascar', name: 'Croxian Mascar', title: 'Governor of Ad-Nostra', pos: new V3(0, 1.2, -12), group: m, height: 2.6, radius: 1, alive: true };
  mascar.plate = makePlate('npc', `<div class="qm"></div><div class="n">Croxian Mascar</div><div class="g">&lt;Governor of Ad-Nostra&gt;</div>`);
  addHitbox(mascar, 1.2 / m.scale.x, 2.4, 1.2, 1.2);
  G.npcs.push(mascar);
  // Quartermaster Ilse Varn
  const r = makeHumanoid({ armor: 0x4a3f2c, accent: 0xe8c46a, visor: 0xe8c46a, weapon: 'none' });
  r.group.position.set(13, 0, -3); r.group.rotation.y = -Math.PI / 2.4; W.scene.add(r.group);
  const counter = bx(1, 1.1, 3.4, armorMat(0x2a313b), 11.6, 0.55, -3, W.scene); addCollider(11.6, -3, 1, 3.4);
  bx(0.05, 0.05, 3.42, glowMat(0xe8c46a, 1.5), 11.08, 1.1, -3, W.scene);
  for (let i = 0; i < 4; i++) bx(0.9, 0.9, 0.9, armorMat(0x3a3326), 14.5 + rand(-.5, .5), 0.45 + (i > 2 ? 0.9 : 0), -4.5 + i * 0.9, W.scene).rotation.y = rand(-.3, .3);
  const ilse = { kind: 'npc', id: 'ilse', name: 'Ilse Varn', title: 'Concord Quartermaster', pos: new V3(13, 0, -3), group: r.group, rig: r, height: 2.1, radius: 1, alive: true };
  ilse.plate = makePlate('npc', `<div class="n">Ilse Varn</div><div class="g">&lt;Concord Quartermaster&gt;</div>`);
  addHitbox(ilse, 1, 2, 1, 1);
  G.npcs.push(ilse);
}

function makeEnemy(type, level, x, z, temp = false) {
  const e = { kind: 'enemy', type, level, spawn: new V3(x, 0, z), pos: new V3(x, 0, z), alive: true, state: 'idle', target: null, atkT: rand(0.5, 1.5), wanderT: rand(1, 6), wanderTo: null, dots: [], tagged: false, yaw: rand(0, 6.28), anim: rand(0, 10), temp, move: 0 };
  let rig;
  if (type === 'hollowed') {
    Object.assign(e, { name: level >= 4 ? 'Beacon-Bound Hollowed' : 'Hollowed', maxHp: 70 + 30 * level, dmg: 5 + 2.6 * level, atkCd: 1.7, atkR: 2.1, speed: 3.4 + 0.25 * level, aggroR: 13, xp: 36 + 16 * level, height: 2.15, radius: 0.55, respawn: 16 });
    rig = makeHumanoid({ armor: 0x1b1517, accent: 0xff2b4a, visor: 0xff2b4a, weapon: 'none', hollow: true });
    rig.group.scale.setScalar(1 + level * 0.03);
  } else if (type === 'drone') {
    Object.assign(e, { name: 'Echo Drone', maxHp: 55 + 22 * level, dmg: 5 + 2.3 * level, atkCd: 2.2, atkR: 13, speed: 4.6, aggroR: 16, xp: 42 + 17 * level, height: 3.5, radius: 0.85, respawn: 18 });
    rig = makeDrone(level);
  } else {
    Object.assign(e, { name: 'Remnant of the Catharsis', isBoss: true, maxHp: 2600, dmg: 24, atkCd: 2.3, atkR: 4.8, speed: 3.3, aggroR: 20, xp: 950, height: 8.4, radius: 2.2, respawn: 120, slamT: 7, phase: 0 });
    rig = makeBoss();
  }
  e.rig = rig; e.group = rig.group; e.hp = e.maxHp;
  e.group.position.copy(e.pos); W.scene.add(e.group);
  const s = e.group.scale.x;
  addHitbox(e, (e.radius * 2) / s, e.height / s, (e.radius * 2) / s, e.height / 2 / s);
  e.plate = makePlate('enemy', `<div class="n">${esc(e.name)} <span style="color:#aaa">${e.level}</span></div><div class="hb"><i></i></div>`);
  e.plateBar = e.plate.querySelector('.hb i');
  G.enemies.push(e);
  return e;
}
function spawnEnemies() {
  for (let i = 0; i < 16; i++) { const x = rand(44, 150), z = rand(-56, 56); makeEnemy('hollowed', x < 75 ? 1 : x < 115 ? 2 : 3, x, z); }
  for (let i = 0; i < 14; i++) { const x = rand(-150, -44), z = rand(-56, 56); makeEnemy('drone', x > -75 ? 2 : x > -115 ? 3 : 4, x, z); }
  for (let i = 0; i < 9; i++) { const a = rand(0, Math.PI * 2), r = rand(22, 56); makeEnemy('hollowed', randi(4, 5), CRATER.x + Math.cos(a) * r, CRATER.z + Math.sin(a) * r); }
  for (let i = 0; i < 4; i++) { const a = rand(0, Math.PI * 2), r = rand(20, 50); makeEnemy('drone', 5, CRATER.x + Math.cos(a) * r, CRATER.z + Math.sin(a) * r); }
  G.boss = makeEnemy('boss', 7, CRATER.x, CRATER.z + 2);
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
const GATES = { ashen: [new V3(36, 0, 0)], echo: [new V3(-36, 0, 0)], crater: [new V3(0, 0, -38), new V3(0, 0, -106)], plaza: [] };
function zonePoint(z) {
  if (z === 'ashen') return new V3(rand(46, 145), 0, rand(-50, 50));
  if (z === 'echo') return new V3(rand(-145, -46), 0, rand(-50, 50));
  if (z === 'crater') { const a = rand(0, Math.PI * 2), r = rand(12, 50); return new V3(CRATER.x + Math.cos(a) * r, 0, CRATER.z + Math.sin(a) * r); }
  const a = rand(0, Math.PI * 2), r = rand(6, 26); const p = new V3(Math.cos(a) * r, 0, Math.sin(a) * r); if (p.z < -6 && Math.abs(p.x) < 7) p.z = 4; return p;
}
function spawnBots() {
  const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, 14);
  for (const name of names) {
    const ck = pick(Object.keys(CLASSES)); const c = CLASSES[ck];
    const rig = makeHumanoid({ armor: pick([0x2b323c, 0x3a3f4a, 0x2a2f2a, 0x3b2f36, 0x262c38]), accent: c.hex, visor: new THREE.Color(pick(VISORS)).getHex(), weapon: c.weapon });
    const b = { kind: 'bot', name, cls: ck, level: randi(3, 18), guild: pick(GUILDS), rig, group: rig.group, pos: zonePoint('plaza'), alive: true, hp: 260, maxHp: 260, state: 'idle', path: [], idleT: rand(2, 20), actT: 0, act: 'plaza', target: null, atkT: 0, yaw: 0, move: 0, atk: 0, danceT: 0, height: 2.1, radius: 0.5 };
    b.group.position.copy(b.pos); W.scene.add(b.group);
    b.plate = makePlate('bot', `<div class="n">${esc(name)}</div>${b.guild ? `<div class="g">&lt;${esc(b.guild)}&gt;</div>` : ''}`);
    addHitbox(b, 0.9, 2, 0.9, 1);
    if (Math.random() < 0.6) { b.act = pick(['ashen', 'ashen', 'echo', 'echo', 'crater']); b.pos.copy(zonePoint(b.act)); b.state = 'hunt'; b.actT = rand(40, 160); b.group.position.copy(b.pos); }
    G.bots.push(b);
  }
}

// =====================================================================
//  PLAYER
// =====================================================================
const SPAWN = new V3(0, 0, 8);
function newSave(name, cls, visor) {
  return { v: 1, name, cls, visor, level: 1, xp: 0, credits: 30, medkits: 3, wpn: 0, arm: 0, q: { i: 0, st: 'available', p: 0 }, kills: 0, deaths: 0, title: 'Ascendant', played: 0, completed: 0, pos: null, created: Date.now() };
}
const xpNext = l => Math.round(140 * Math.pow(l, 1.55));
const CL = () => CLASSES[G.D.cls];
const maxHp = () => Math.round(CL().hp * (1 + 0.1 * (G.D.level - 1)) + 18 * G.D.arm);
const maxEn = () => CL().en;
const dmgScale = () => (1 + 0.12 * (G.D.level - 1)) * (1 + 0.1 * G.D.wpn);

function setupPlayer() {
  const D = G.D, c = CL();
  if (G.P && G.P.group) { W.scene.remove(G.P.group); G.P.plate?.remove(); }
  const rig = makeHumanoid({ armor: 0x2f3742, accent: c.hex, visor: new THREE.Color(D.visor).getHex(), weapon: c.weapon });
  const P = {
    kind: 'player', rig, group: rig.group, pos: SPAWN.clone(), vy: 0, yaw: Math.PI, alive: true, dead: false,
    hp: maxHp(), en: maxEn(), shield: 0, shieldT: 0, target: null, gcd: 0, cds: {}, autoOn: false, autoT: 0, combatT: 0,
    critNext: false, atk: 0, move: 0, danceT: 0, medT: 0, height: 2.1, radius: 0.45,
  };
  if (D.pos && zoneAt(D.pos[0], D.pos[1]) !== 'ward') P.pos.set(D.pos[0], 0, D.pos[1]);
  P.group.position.copy(P.pos); W.scene.add(P.group);
  G.P = P;
  G.cam = { yaw: 0, pitch: 0.32, dist: 9.5 };
  if (P.pos.distanceTo(SPAWN) > 1) G.cam.yaw = Math.atan2(P.pos.x, P.pos.z);
  buildHotbar();
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
  amt = Math.max(1, Math.round(amt));
  const P = G.P;
  if (tgt === P) {
    if (P.dead) return;
    if (P.shield > 0) { const a = Math.min(P.shield, amt); P.shield -= a; amt -= a; floater(P.pos, 'ABSORB ' + a, '#9fdcff', 2.3); }
    P.combatT = 6;
    if (amt <= 0) return;
    P.hp -= amt; floater(P.pos, '-' + amt, '#ff5a6e', 2.3); Sound.sfx('hurt'); flashHurt();
    if (P.hp <= 0) playerDie();
    return;
  }
  tgt.hp -= amt;
  if (tgt.kind === 'enemy') {
    if (src === P) { tgt.tagged = true; floater(tgt.pos, String(amt), opt.crit ? '#ffd166' : '#ffffff', tgt.height * 0.75 + (tgt.type === 'drone' ? 0.6 : 0), opt.crit); Sound.sfx('hit'); }
    if (tgt.state === 'idle' || !tgt.target || !tgt.target.alive) { if (tgt.isBoss && src === P && tgt.state === 'idle') bossEngage(); tgt.target = src; tgt.state = 'chase'; }
    if (src === P && tgt.target && tgt.target.kind === 'bot' && Math.random() < 0.15) tgt.target = P;
    if (tgt.hp <= 0) killEnemy(tgt, src);
  } else if (tgt.kind === 'bot') {
    if (tgt.hp <= 0) botDie(tgt);
  }
}
function killEnemy(e, src) {
  e.alive = false; e.hp = 0; e.state = 'dead'; e.deadT = 0; e.dots = []; e.target = null;
  burst(e.pos.clone().setY(e.height * 0.5), e.isBoss ? 0xff2b4a : 0xff5a6e, e.isBoss ? 120 : 30, e.isBoss ? 9 : 4);
  Sound.sfx(e.isBoss ? 'boom' : 'die');
  if (G.P.target === e) setTimeout(() => { if (G.P.target === e) setTarget(null); }, 600);
  if (e.tagged) {
    const D = G.D; let xp = e.xp; const diff = D.level - e.level;
    if (diff >= 4) xp = Math.round(xp * 0.2); else if (diff >= 2) xp = Math.round(xp * 0.6);
    gainXp(xp);
    const cr = e.isBoss ? 300 : randi(2 + e.level, 6 + e.level * 3); D.credits += cr; addChat('loot', null, `You loot ${cr} credits.`); Sound.sfx('coin');
    D.kills++;
    questEvent(e.isBoss ? 'boss' : e.type, e);
    if (zoneAt(e.pos.x, e.pos.z) === 'crater' && !e.isBoss && D.q.i === 2 && D.q.st === 'active' && Math.random() < 0.4) { addChat('loot', null, 'You loot: [Beacon Shard]'); questEvent('shard'); }
    if (Math.random() < 0.06 && !e.isBoss) { D.medkits++; addChat('loot', null, 'You loot: [Concord Medkit]'); }
    if (e.isBoss) { addChat('world', null, `${D.name} has destroyed the Remnant of the Catharsis!`, 'sys'); setTimeout(() => botSay(pick(G.bots), pick(['GG ' + D.name + '!!', 'legend', 'WOW', 'grats ' + D.name, 'o7 hero'])), 1500); }
  }
  if (e.isBoss) { $('bossbar').classList.add('hidden'); Sound.playMusic('world'); }
}
function gainXp(n) {
  const D = G.D, P = G.P; if (D.level >= 30) return;
  D.xp += n; floater(P.pos, `+${n} XP`, '#c9a3ff', 2.8);
  while (D.xp >= xpNext(D.level) && D.level < 30) {
    D.xp -= xpNext(D.level); D.level++;
    P.hp = maxHp(); P.en = maxEn();
    banner('LEVEL UP', 'LEVEL ' + D.level, 'YOUR POWER GROWS', 'lv'); Sound.sfx('levelup');
    ringFx(P.pos, 0xe8c46a, 6, 1.2); burst(P.pos.clone().setY(1), 0xe8c46a, 40, 4);
    addChat('sys', null, `Congratulations, you have reached level ${D.level}!`);
    if (Math.random() < 0.6) setTimeout(() => botSay(pick(G.bots), pick(['grats!', 'gz', 'grats ' + D.name, 'ding!'])), 1200);
    saveGame();
  }
}
function playerDie() {
  const P = G.P; P.hp = 0; P.dead = true; P.alive = false; P.autoOn = false; G.D.deaths++;
  Sound.sfx('death'); P.group.rotation.x = -Math.PI / 2; P.group.position.y = 0.3;
  for (const e of G.enemies) if (e.target === P) { e.target = null; e.state = 'return'; }
  closeAllUI(); $('death').classList.remove('hidden');
}
function respawn() {
  const P = G.P; P.dead = false; P.alive = true; P.hp = maxHp(); P.en = maxEn(); P.pos.copy(SPAWN); P.group.rotation.x = 0; P.shield = 0;
  setTarget(null); $('death').classList.add('hidden'); burst(P.pos.clone().setY(1), 0x3ee6ff, 40, 3); Sound.sfx('heal');
  G.cam.yaw = 0;
}
function botDie(b) {
  b.alive = false; b.hp = 0; b.state = 'dead'; b.deadT = 0; b.target = null;
  b.group.rotation.x = -Math.PI / 2; b.group.position.y = 0.3;
  for (const e of G.enemies) if (e.target === b) { e.target = null; e.state = 'return'; }
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
  P.en -= ab.cost; P.cds[ab.id] = ab.cd; P.gcd = c.gcd; P.combatT = 6; if (t) P.autoOn = true; P.atk = 0.3;
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
function resolveCollision(p, r) {
  for (const c of G.colliders) {
    if (p.x + r < c.minX || p.x - r > c.maxX || p.z + r < c.minZ || p.z - r > c.maxZ) continue;
    const dl = p.x + r - c.minX, dr = c.maxX - (p.x - r), dt = p.z + r - c.minZ, db = c.maxZ - (p.z - r);
    const m = Math.min(dl, dr, dt, db);
    if (m === dl) p.x -= dl; else if (m === dr) p.x += dr; else if (m === dt) p.z -= dt; else p.z += db;
  }
  const R = Math.hypot(p.x, p.z); if (R > 238) { p.x *= 238 / R; p.z *= 238 / R; }
}
function moveToward(ent, dest, speed, dt, stopAt = 0.2) {
  const dx = dest.x - ent.pos.x, dz = dest.z - ent.pos.z, d = Math.hypot(dx, dz);
  if (d <= stopAt) { ent.move = Math.max(0, ent.move - dt * 5); return true; }
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
function updatePlayer(dt) {
  const P = G.P, D = G.D, c = CL();
  D.played += dt;
  P.gcd = Math.max(0, P.gcd - dt); P.medT = Math.max(0, P.medT - dt);
  for (const k in P.cds) P.cds[k] = Math.max(0, P.cds[k] - dt);
  P.combatT = Math.max(0, P.combatT - dt);
  if (P.shieldT > 0) { P.shieldT -= dt; if (P.shieldT <= 0) P.shield = 0; }
  if (P.dead) { P.group.position.copy(P.pos).setY(0.3); return; }
  P.en = Math.min(maxEn(), P.en + 9 * dt);
  if (P.combatT <= 0) P.hp = Math.min(maxHp(), P.hp + maxHp() * 0.035 * dt);

  // movement
  const typing = document.activeElement === $('chat-input');
  let fx = 0, fz = 0;
  if (!typing && !G.ui) {
    if (keys.KeyW || keys.ArrowUp) fz += 1; if (keys.KeyS || keys.ArrowDown) fz -= 1;
    if (keys.KeyA || keys.ArrowLeft) fx -= 1; if (keys.KeyD || keys.ArrowRight) fx += 1;
    if (mouse.both) fz = 1;
    if (joy.id !== null) { fx += joy.x; fz -= joy.y; }
  }
  const yaw = G.cam.yaw;
  const fwd = new V3(-Math.sin(yaw), 0, -Math.cos(yaw)), right = new V3(Math.cos(yaw), 0, -Math.sin(yaw));
  const dir = fwd.multiplyScalar(fz).add(right.multiplyScalar(fx));
  const moving = dir.lengthSq() > 0;
  if (moving) {
    dir.normalize(); const sp = (keys.ShiftLeft || keys.ShiftRight || joy.mag > 0.92) ? 10.5 : 7;
    P.pos.addScaledVector(dir, sp * dt); P.yaw = Math.atan2(dir.x, dir.z); P.move = Math.min(1, P.move + dt * 6); P.danceT = 0;
  } else { P.move = Math.max(0, P.move - dt * 6); if (P.target && P.target.alive && P.autoOn) faceTo(P, P.target.pos); }
  // jump
  P.vy -= 22 * dt; P.pos.y += P.vy * dt; if (P.pos.y <= 0) { P.pos.y = 0; P.vy = 0; }
  resolveCollision(P.pos, P.radius);

  // auto-attack
  const t = P.target;
  if (P.autoOn && t && t.alive && t.kind === 'enemy') {
    P.autoT -= dt;
    if (P.autoT <= 0 && d2(P.pos, t.pos) - t.radius <= c.range) {
      P.autoT = 2.0; P.combatT = 6;
      if (c.range > 5) { projectile(P.pos.clone().setY(1.4), t, c.hex, 0.1, 30, () => hitTarget(t, 7)); Sound.sfx('drone'); }
      else { hitTarget(t, 7); P.atk = 0.3; Sound.sfx('slash'); }
    }
  }
  P.atk = Math.max(0, P.atk - dt); P.danceT = Math.max(0, P.danceT - dt);
  P.group.position.copy(P.pos); turnTo(P.group, P.yaw + (P.danceT > 0 ? G.time * 6 : 0), dt, P.danceT > 0 ? 50 : 12);
  animHumanoid(P.rig, P.move, G.time, P.atk, P.danceT);
  if (P.rig.group.userData.orb) P.rig.group.userData.orb.rotation.y += dt * 3;
  W.shieldMesh.visible = P.shield > 0; W.shieldMesh.position.copy(P.pos).setY(1); W.shieldMesh.material.opacity = 0.12 + Math.sin(G.time * 6) * 0.05;

  // zone change
  const z = zoneAt(P.pos.x, P.pos.z);
  if (z !== G.zone) {
    const prev = G.zone; G.zone = z; const Z = ZONES[z];
    $('zone-name').textContent = Z.name; $('zone-sub').textContent = Z.sub;
    if (!(prev === 'causeway' && z === 'ward') && !(prev === 'ward' && z === 'causeway')) banner(Z.safe ? 'SANCTUARY' : 'ENTERING', Z.name, Z.sub);
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
        e.alive = true; e.hp = e.maxHp; e.pos.copy(e.spawn); e.state = 'idle'; e.tagged = false; e.phase = 0; e.group.visible = true; e.group.rotation.z = 0; e.group.position.y = 0;
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
      e.hp = Math.min(e.maxHp, e.hp + e.maxHp * 0.25 * dt); e.dots = []; e.tagged = false;
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

function updateBots(dt) {
  for (const b of G.bots) {
    if (!b.alive) {
      b.deadT += dt; if (b.deadT > 12) { b.alive = true; b.hp = b.maxHp; b.pos.copy(zonePoint('plaza')); b.group.rotation.x = 0; b.state = 'idle'; b.act = 'plaza'; b.idleT = rand(5, 20); b.path = []; }
      b.group.position.copy(b.pos).setY(0.3); continue;
    }
    b.atk = Math.max(0, b.atk - dt); b.danceT = Math.max(0, b.danceT - dt);
    if (b.state === 'idle') {
      b.idleT -= dt;
      if (!b.wp || moveToward(b, b.wp, 2.5, dt)) { if (Math.random() < 0.01) b.wp = zonePoint('plaza'); }
      if (Math.random() < 0.0008) b.danceT = 4;
      b.hp = Math.min(b.maxHp, b.hp + 20 * dt);
      if (b.idleT <= 0) { b.act = pick(['ashen', 'ashen', 'echo', 'echo', 'crater', 'crater']); b.path = [...GATES[b.act], zonePoint(b.act)]; b.state = 'travel'; b.actT = rand(60, 180); b.wp = null; }
    } else if (b.state === 'travel') {
      if (!b.path.length) { b.state = b.act === 'plaza' ? 'idle' : 'hunt'; b.idleT = rand(15, 50); continue; }
      if (moveToward(b, b.path[0], 7, dt, 1)) b.path.shift();
    } else if (b.state === 'hunt') {
      b.actT -= dt;
      if (b.actT <= 0) { b.act = 'plaza'; b.path = [...GATES[zoneAt(b.pos.x, b.pos.z) === 'crater' ? 'crater' : (b.pos.x > 0 ? 'ashen' : 'echo')]].reverse().concat([zonePoint('plaza')]); b.state = 'travel'; b.target = null; continue; }
      if (!b.target || !b.target.alive) {
        b.target = null; let bd = 30;
        for (const e of G.enemies) { if (!e.alive || (e.isBoss && Math.random() < 0.995)) continue; const d = d2(b.pos, e.pos); if (d < bd && zoneAt(e.pos.x, e.pos.z) === zoneAt(b.pos.x, b.pos.z)) { bd = d; b.target = e; } }
        if (!b.target) { if (!b.wp || moveToward(b, b.wp, 5, dt)) b.wp = zonePoint(b.act); }
      } else {
        const t = b.target, c = CLASSES[b.cls], reach = (c.range > 5 ? 14 : 2.2) + t.radius;
        if (d2(b.pos, t.pos) > reach) moveToward(b, t.pos, 6.5, dt, reach * 0.9);
        else {
          b.move = Math.max(0, b.move - dt * 5); faceTo(b, t.pos); b.atkT -= dt;
          if (b.atkT <= 0) {
            b.atkT = rand(1.4, 1.9); b.atk = 0.3; const dmg = 6 + b.level * 0.7;
            if (c.range > 5) projectile(b.pos.clone().setY(1.4), t, c.hex, 0.12, 30, () => damage(t, dmg, b), b);
            else { damage(t, dmg, b); if (d2(b.pos, G.P.pos) < 30 && Math.random() < 0.5) slashFx(t, c.hex, 0.9); }
          }
        }
        if (b.hp < b.maxHp * 0.3 && Math.random() < 0.01) { b.hp = b.maxHp; burst(b.pos.clone().setY(1), 0x4dff9a, 12, 2); }
      }
    }
    resolveCollision(b.pos, 0.4);
    b.group.position.copy(b.pos); turnTo(b.group, b.yaw + (b.danceT > 0 ? G.time * 6 : 0), dt, b.danceT > 0 ? 50 : 10);
    animHumanoid(b.rig, b.move, G.time + b.name.length, b.atk, b.danceT);
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
  W.sky.material.uniforms.t.value = t; grassTime.value = t;
  updateGrass(W.grass, W.cam); updateLOD();
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
  const masc = G.npcs[0]; if (d2(P.pos, masc.pos) < 14) turnTo(masc.group, Math.atan2(P.pos.x - masc.pos.x, P.pos.z - masc.pos.z), dt, 2); else turnTo(masc.group, 0, dt, 1);
}
function updateCamera(dt) {
  const P = G.P, c = G.cam;
  const tgt = P.pos.clone().setY(P.pos.y + 1.7);
  const cp = new V3(Math.sin(c.yaw) * Math.cos(c.pitch), Math.sin(c.pitch), Math.cos(c.yaw) * Math.cos(c.pitch)).multiplyScalar(c.dist).add(tgt);
  cp.y = Math.max(0.6, cp.y);
  // keep the camera out of walls
  const near = G.colliders.filter(k => k.maxX > Math.min(tgt.x, cp.x) - 1 && k.minX < Math.max(tgt.x, cp.x) + 1 && k.maxZ > Math.min(tgt.z, cp.z) - 1 && k.minZ < Math.max(tgt.z, cp.z) + 1);
  if (near.length) {
    const step = new V3().subVectors(cp, tgt).divideScalar(24), q = tgt.clone();
    for (let i = 0; i < 24; i++) {
      q.add(step); let hit = false;
      for (const k of near) if (q.x > k.minX - 0.3 && q.x < k.maxX + 0.3 && q.z > k.minZ - 0.3 && q.z < k.maxZ + 0.3 && q.y < k.h) { hit = true; break; }
      if (hit) { q.sub(step); cp.copy(q); W.cam.position.lerp(cp, 0.5); break; }
    }
  }
  W.cam.position.lerp(cp, Math.min(1, dt * 14)); W.cam.lookAt(tgt);
}

function updateWorld(dt) {
  updatePlayer(dt); updateEnemies(dt); updateBots(dt); updateProjectiles(dt); updateFx(dt); updateShards(dt); updateAmbient(dt); updateCamera(dt);
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
  if (q.type === type || (q.type === 'any' && (type === 'hollowed' || type === 'drone'))) {
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
    { name: `Concord Plating · Rank ${D.arm + 1}`, desc: '+18 maximum health.', cost: 100 * (D.arm + 1), buy: () => { D.arm++; } },
  ];
  const box = $('vendor-items'); box.innerHTML = '';
  for (const it of items) {
    const row = document.createElement('div'); row.className = 'vitem';
    row.innerHTML = `<div><b>${esc(it.name)}</b><p>${esc(it.desc)}</p></div>`;
    const btn = document.createElement('button'); btn.className = 'btn gold'; btn.textContent = `⬡ ${it.cost}`; btn.disabled = D.credits < it.cost;
    btn.onclick = () => { if (D.credits < it.cost) return; D.credits -= it.cost; it.buy(); Sound.sfx('coin'); addChat('loot', null, `Purchased: ${it.name}`); renderVendor(); saveGame(); };
    row.appendChild(btn); box.appendChild(row);
  }
  $('vendor-wallet').textContent = `YOUR CREDITS: ⬡ ${fmtNum(D.credits)} · MEDKITS: ${D.medkits}`;
}
function nearestInteract() {
  const P = G.P; let best = null, bd = 5;
  for (const n of G.npcs) { const d = d2(P.pos, n.pos); if (d < bd) { bd = d; best = n; } }
  for (const s of G.shards) { if (!s.active) continue; const d = d2(P.pos, s.pos); if (d < 3 && d < bd) { bd = d; best = s; } }
  return best;
}
function interact(ent = nearestInteract()) {
  if (!ent || G.P.dead) return;
  if (ent.id === 'mascar') talkMascar();
  else if (ent.id === 'ilse') openVendor();
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
    const label = n.kind === 'shard' ? 'Recover Beacon Shard' : n.id === 'mascar' ? 'Speak with Governor Mascar' : 'Trade with Ilse Varn';
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
  setT('p-name', D.name); setT('p-lvl', 'LV ' + D.level); setT('p-title', `${D.title.toUpperCase()} · ${c.name}`);
  const mh = maxHp(); setW('p-hp', P.hp / mh); setT('p-hpt', `${Math.ceil(P.hp)} / ${mh}`); setW('p-sh', P.shield / mh);
  setW('p-en', P.en / maxEn()); setT('p-ent', `${Math.floor(P.en)} / ${maxEn()}`);
  const buffs = []; if (P.shield > 0) buffs.push(`⛨ ${P.shield}`); if (P.critNext) buffs.push('◐ CRIT'); if (P.combatT > 0) buffs.push('⚔ COMBAT'); if (ZONES[G.zone]?.safe) buffs.push('✦ SANCTUARY');
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
  updateTargetFrame();
  if (G.boss && !$('bossbar').classList.contains('hidden')) setW('boss-hp', G.boss.hp / G.boss.maxHp);
}
function updateTargetFrame(force) {
  const t = G.P?.target, tf = $('tframe');
  if (!t) { tf.classList.add('hidden'); return; }
  tf.classList.remove('hidden');
  if (t.kind === 'enemy') {
    setT('t-name', t.name); setT('t-lvl', 'LV ' + t.level); setT('t-sub', t.isBoss ? 'ELITE · REMNANT' : t.type === 'drone' ? 'MECHANICAL · REMNANT' : 'HOLLOWED · REMNANT');
    $('t-bar').style.display = ''; setW('t-hp', t.hp / t.maxHp); setT('t-hpt', `${Math.max(0, Math.ceil(t.hp))} / ${t.maxHp}`);
  } else if (t.kind === 'bot') {
    setT('t-name', t.name); setT('t-lvl', 'LV ' + t.level); setT('t-sub', `${CLASSES[t.cls].name}${t.guild ? ' · ' + t.guild.toUpperCase() : ''}`);
    $('t-bar').style.display = ''; setW('t-hp', t.hp / t.maxHp); setT('t-hpt', 'ASCENDANT');
  } else { setT('t-name', t.name); setT('t-lvl', ''); setT('t-sub', t.title.toUpperCase()); $('t-bar').style.display = 'none'; }
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
  mm.fillStyle = 'rgba(30,20,12,0.45)'; mm.fillRect(X(34), Y(-62), 122 * sc, 124 * sc);
  mm.fillStyle = 'rgba(220,205,160,0.22)'; mm.fillRect(X(-156), Y(-62), 122 * sc, 124 * sc);
  mm.fillStyle = 'rgba(140,40,30,0.45)'; mm.beginPath(); mm.arc(X(CRATER.x), Y(CRATER.z), 72 * sc, 0, 7); mm.fill();
  mm.fillStyle = 'rgba(62,230,255,0.12)'; mm.beginPath(); mm.arc(X(0), Y(0), 34 * sc, 0, 7); mm.fill();
  mm.fillStyle = 'rgba(140,90,58,0.6)'; mm.fillRect(X(-150), Y(-7), 300 * sc, 14 * sc); mm.fillRect(X(-7), Y(-110), 14 * sc, 110 * sc);
  mm.fillStyle = 'rgba(220,190,150,0.3)';
  for (const c of G.colliders) { if (Math.abs(c.minX - P.pos.x) > 140 || Math.abs(c.minZ - P.pos.z) > 140) continue; const w = (c.maxX - c.minX) * sc; if (w < 2) continue; mm.fillRect(X(c.minX), Y(c.minZ), w, (c.maxZ - c.minZ) * sc); }
  mm.strokeStyle = 'rgba(232,196,106,0.6)'; mm.lineWidth = 2; mm.beginPath(); mm.arc(X(0), Y(0), 246 * sc, 0, 7); mm.stroke();
  if (G.D.q.i === 2 && G.D.q.st === 'active') { mm.fillStyle = '#ff6b7f'; for (const s of G.shards) if (s.active) { mm.save(); mm.translate(X(s.pos.x), Y(s.pos.z)); mm.rotate(Math.PI / 4); mm.fillRect(-2.5, -2.5, 5, 5); mm.restore(); } }
  for (const e of G.enemies) { if (!e.alive) continue; mm.fillStyle = e.isBoss ? '#ff2b4a' : '#ff5a6e'; const r = e.isBoss ? 5 : 2.2; mm.beginPath(); mm.arc(X(e.pos.x), Y(e.pos.z), r, 0, 7); mm.fill(); }
  mm.fillStyle = '#7fe3ff'; for (const b of G.bots) if (b.alive) { mm.beginPath(); mm.arc(X(b.pos.x), Y(b.pos.z), 2.2, 0, 7); mm.fill(); }
  mm.fillStyle = '#e8c46a'; for (const n of G.npcs) { mm.beginPath(); mm.arc(X(n.pos.x), Y(n.pos.z), 3.5, 0, 7); mm.fill(); }
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
  return { hollowed: new V3(95, 0, 0), drone: new V3(-95, 0, 0), shard: CRATER, boss: CRATER, any: G.P.pos.x >= 0 ? new V3(95, 0, 0) : new V3(-95, 0, 0) }[q.type];
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
  if (r < 0.55) botSay(pick(G.bots), pick(WORLD_CHAT));
  else if (r < 0.75) { const near = G.bots.filter(b => zoneAt(b.pos.x, b.pos.z) === G.zone); if (near.length) botSay(pick(near), pick(ZONE_CHAT), 'zone'); }
  else if (r < 0.82) addChat('gov', null, pick(GOV_ANNOUNCE));
}
function sendChat(text) {
  text = text.trim(); if (!text) return; const D = G.D, P = G.P;
  if (text[0] === '/') {
    const [cmd] = text.slice(1).toLowerCase().split(' ');
    switch (cmd) {
      case 'help': addChat('sys', null, 'Commands: /who /played /loc /dance /wave /salute /help'); break;
      case 'who': { const l = G.bots.slice(0, 6).map(b => `${b.name} (${b.level} ${CLASSES[b.cls].name.toLowerCase()}, ${ZONES[zoneAt(b.pos.x, b.pos.z)].name.toLowerCase()})`); addChat('sys', null, `Online: ${l.join(', ')} …and ${fmtNum(onlineCount - 6)} others.`); break; }
      case 'played': { const s = D.played | 0; addChat('sys', null, `Time played: ${Math.floor(s / 3600)}h ${Math.floor(s / 60) % 60}m ${s % 60}s`); break; }
      case 'loc': addChat('sys', null, `${ZONES[G.zone].name}: ${P.pos.x.toFixed(0)}, ${(-P.pos.z).toFixed(0)}`); break;
      case 'dance': P.danceT = 5; addChat('say', null, `${D.name} bursts into dance.`, 'sys'); break;
      case 'wave': P.atk = 0.3; addChat('say', null, `${D.name} waves.`, 'sys'); setTimeout(() => { const b = G.bots.find(b => d2(b.pos, P.pos) < 20); if (b) addChat('say', b.name, 'o/'); }, 900); break;
      case 'salute': {
        P.atk = 0.3; const near = d2(P.pos, G.npcs[0].pos) < 15;
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
  const reply = (pool, delay = rand(1, 3)) => setTimeout(() => botSay(pick(G.bots), pick(pool)), delay * 1000);
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
function closeAllUI() { for (const id of ['dialog', 'vendor', 'sheet', 'pause']) $(id).classList.add('hidden'); G.ui = null; $('tooltip').classList.add('hidden'); }
function openSheet() {
  const D = G.D, P = G.P, c = CL(); closeAllUI(); G.ui = 'sheet';
  $('sh-name').textContent = D.name.toUpperCase();
  const rows = [['Title', D.title], ['Class', c.name], ['Level', D.level], ['Health', `${Math.ceil(P.hp)} / ${maxHp()}`], ['Energy', maxEn()], ['Damage bonus', `+${Math.round((dmgScale() - 1) * 100)}%`], ['Critical chance', `${Math.round(c.crit * 100)}%`], ['Weapon tuning', `Rank ${D.wpn}`], ['Concord plating', `Rank ${D.arm}`], ['Remnants destroyed', fmtNum(D.kills)], ['Deaths', D.deaths], ['Quests completed', D.completed], ['Credits', fmtNum(D.credits)], ['Realm', $('realm').value.split(' · ')[0]]];
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
  if (G.mode === 'world' && e.target === canvas && !mouse.dragged && mouse.down === 0) pick3D(e.clientX, e.clientY);
  mouse.down = -1; mouse.both = false;
});
canvas.addEventListener('wheel', e => { if (G.mode === 'world') G.cam.dist = clamp(G.cam.dist + Math.sign(e.deltaY) * 1.2, 3.5, 24); }, { passive: true });
const ray = new THREE.Raycaster();
function pick3D(x, y) {
  ray.setFromCamera(new THREE.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1), W.cam);
  const hbs = [...G.enemies.filter(e => e.alive), ...G.bots, ...G.npcs].map(e => e.hitbox);
  const hit = ray.intersectObjects(hbs, false)[0];
  if (hit) {
    const ent = hit.object.userData.ent; setTarget(ent);
    if (ent.kind === 'enemy') G.P.autoOn = true;
    if (ent.kind === 'npc' && d2(G.P.pos, ent.pos) < 6) interact(ent);
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
    case 'Escape': if (G.ui) closeAllUI(); else if (G.P.target) setTarget(null); else togglePause(); break;
    case 'Tab': e.preventDefault(); cycleTarget(); break;
    case 'Digit1': useAbility(0); break; case 'Digit2': useAbility(1); break; case 'Digit3': useAbility(2); break; case 'Digit4': useAbility(3); break; case 'Digit5': useAbility(4); break;
    case 'KeyE': case 'KeyF': if (G.ui === 'dialog') break; interact(); break;
    case 'KeyC': if (G.ui === 'sheet') closeAllUI(); else openSheet(); break;
    case 'Space': e.preventDefault(); if (G.P.pos.y === 0 && !G.P.dead) G.P.vy = 8; break;
  }
});
window.addEventListener('keyup', e => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });

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
    if (pinchD) G.cam.dist = clamp(G.cam.dist - (d - pinchD) * 0.04, 3.5, 24);
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
tap('tb-jump', () => { if (G.P && G.P.pos.y === 0 && !G.P.dead) G.P.vy = 8; });
tap('tb-target', () => cycleTarget());
tap('tb-menu', () => { if (G.ui && G.ui !== 'pause') closeAllUI(); else togglePause(); });
tap('tb-sheet', () => { if (G.ui === 'sheet') closeAllUI(); else openSheet(); });
tap('tb-chat', () => { const c = $('chat-input'); c.classList.add('open'); c.focus(); });
$('chat-input').addEventListener('blur', () => $('chat-input').classList.remove('open'));
$('prompt').addEventListener('click', () => { if (G.ui !== 'dialog') interact(); });

// =====================================================================
//  SCREENS: splash → menu → create → world
// =====================================================================
let onlineCount = 4812;
function show(id) { $(id).classList.remove('hidden'); }
function hide(id) { $(id).classList.add('hidden'); }
function closeModals() { hide('codex'); hide('settings'); }

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
  const save = store.get(SAVE_KEY);
  const btn = $('btn-continue');
  if (save) { btn.disabled = false; $('continue-sub').textContent = `${save.name.toUpperCase()} · LV ${save.level} ${CLASSES[save.cls].name}`; }
  else { btn.disabled = true; $('continue-sub').textContent = 'NO ASCENDANT REGISTERED'; }
  Sound.playMusic('menu');
}
document.querySelectorAll('.mbtn, .btn').forEach(b => { b.addEventListener('mouseenter', () => Sound.sfx('hover')); b.addEventListener('click', () => Sound.sfx('click')); });
$('btn-continue').onclick = () => { const s = store.get(SAVE_KEY); if (s) { G.D = s; enterWorld(); } };
$('btn-new').onclick = () => openCreate();
$('btn-codex').onclick = () => openCodex();
$('btn-settings').onclick = () => openSettings();
$('btn-quit').onclick = () => { try { window.close(); } catch (e) {} setTimeout(() => show('farewell'), 150); };
document.querySelectorAll('[data-close]').forEach(b => b.onclick = () => hide(b.dataset.close));
$('codex').addEventListener('mousedown', e => { if (e.target.id === 'codex') hide('codex'); });
$('settings').addEventListener('mousedown', e => { if (e.target.id === 'settings') hide('settings'); });

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
  $('overwrite').classList.toggle('hidden', !store.get(SAVE_KEY));
}
$('create-back').onclick = () => { hide('create'); showMenu(); };
$('create-go').onclick = () => {
  const name = $('cname').value.trim();
  if (!/^[A-Za-z0-9_\- ]{2,16}$/.test(name)) { $('cname').style.borderColor = 'var(--crimson)'; setTimeout(() => $('cname').style.borderColor = '', 1200); return; }
  G.D = newSave(name, create.cls, create.visor); store.set(SAVE_KEY, G.D); Sound.sfx('start'); enterWorld(true);
};

function enterWorld(isNew = false) {
  hide('menu'); hide('create'); show('loading');
  $('load-tip').textContent = pick(TIPS); const bar = $('load-bar'); bar.style.transition = 'none'; bar.style.width = '0';
  requestAnimationFrame(() => { bar.style.transition = 'width 1.6s ease'; bar.style.width = '70%'; });
  setTimeout(() => {
    try { if (!G.world) buildWorld(); } catch (err) { console.error(err); showError('World failed to build: ' + err.message); }
    setupPlayer();
    // reset world state
    for (const e of G.enemies) { if (e.target === G.P || (e.target && e.target.kind === 'player')) { e.target = null; e.state = 'return'; } }
    G.zone = ''; G.ui = null; closeAllUI(); hide('death');
    $('chat-log').innerHTML = '';
    bar.style.width = '100%';
    setTimeout(() => {
      hide('loading'); show('hud'); G.mode = 'world'; setScene(W.scene, W.cam);
      updateTracker(); setTarget(null);
      W.cam.position.copy(G.P.pos).add(new V3(0, 6, 14));
      Sound.playMusic('world');
      addChat('sys', null, `Welcome to Ad-Nostra, ${G.D.name}. Realm: ${$('realm').value.split(' · ')[0]}.`);
      addChat('gov', null, 'Anno Domini 2137. Ten years since Carax. The Catharsis is fallen — but its Remnants endure.');
      if (isNew || G.D.q.i === 0 && G.D.q.st === 'available') addChat('sys', null, `Governor Croxian Mascar awaits you on his dais. Walk up and ${TOUCH ? 'tap the prompt' : 'press E'}.`);
      setTimeout(() => botSay(pick(G.bots), `welcome ${G.D.name} o7`), 3500);
    }, 500);
  }, 900);
}
function exitToMenu() { saveGame(); closeAllUI(); for (const f of G.floaters) f.el.remove(); G.floaters = []; showMenu(); }
function saveGame() { if (!G.D || !G.P) return; G.D.pos = [G.P.pos.x, G.P.pos.z]; store.set(SAVE_KEY, G.D); }
window.addEventListener('beforeunload', () => { if (G.mode === 'world') saveGame(); });

$('respawn').onclick = respawn;
$('vendor-x').onclick = closeAllUI; $('sheet-x').onclick = closeAllUI;
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
  buildMenu();
  setScene(menu.scene, menu.cam);
  loop();
  setTimeout(() => { hide('splash-load'); show('splash-press'); G.ready = true; }, 400);
  $('splash').addEventListener('pointerdown', () => { if (G.ready && G.mode === 'splash') enterMenuFromSplash(); });
  if (TOUCH) $('splash-press').textContent = 'TAP TO BEGIN';
  window.__AD = G; window.__ADdbg = { W, damage, killEnemy, talkMascar, updateTracker, stats: () => ({ batch: W.batch, res: RES_STEPS[perf.level], calls: renderer.info.render.calls, tris: renderer.info.render.triangles, geos: renderer.info.memory.geometries, tex: renderer.info.memory.textures, pr: renderer.getPixelRatio() }) }; // debug handles
})();
