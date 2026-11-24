// =====================================================================
//  SAVANNAH BUILDERS (shared by menu + world)
// =====================================================================
const SUN_DIR = new V3(-0.62, 0.24, -0.75).normalize();     // world: low golden sun, west-north-west
const MENU_SUN = new V3(-0.29, 0.05, -0.96).normalize();    // menu: sun sitting on the horizon behind the Governor
const grassTime = { value: 0 };

function makeSky(sunDir, radius = 600) {
  return new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sun: { value: sunDir.clone() }, t: { value: 0 } },
    vertexShader: 'varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `varying vec3 vp; uniform vec3 sun; uniform float t;
      void main(){
        float y = vp.y;
        float s = max(dot(vp, sun), 0.);
        vec3 zen = vec3(0.13,0.17,0.33), mid = vec3(0.62,0.42,0.38), hor = vec3(0.98,0.60,0.32);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, y));
        c = mix(c, zen, smoothstep(0.18, 0.8, y));
        c += vec3(1.0,0.5,0.2) * pow(s, 5.) * 0.5 * (1. - smoothstep(0., 0.55, y));
        c += vec3(1.0,0.82,0.55) * pow(s, 48.) * 0.7;
        c = mix(c, vec3(1.0,0.93,0.78)*1.7, smoothstep(0.99935, 0.9997, s));
        if (y < 0.) c = mix(hor*0.75, vec3(0.42,0.27,0.16), smoothstep(0., -0.25, y));
        gl_FragColor = vec4(c,1.);
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

// Instanced grass tufts with wind sway. sampler(x,z) → null | 'gold' | 'pale' | 'burnt'
function makeGrass(count, area, sampler, cx = 0, cz = 0) {
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
  const im = new THREE.InstancedMesh(geo, m, count);
  const tint = { gold: new THREE.Color(0xd9b26a), pale: new THREE.Color(0xc9c09a), burnt: new THREE.Color(0x3a3430) };
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new V3(), p = new V3(), up = new V3(0, 1, 0);
  let n = 0, tries = 0;
  while (n < count && tries < count * 6) {
    tries++;
    const x = cx + rand(-area, area), z = cz + rand(-area, area); const kind = sampler(x, z); if (!kind) continue;
    q.setFromAxisAngle(up, rand(0, 6.28)); const s = rand(0.7, 1.5); sc.set(s, s * rand(0.8, 1.3), s); p.set(x, 0, z);
    mtx.compose(p, q, sc); im.setMatrixAt(n, mtx);
    const c = tint[kind].clone().offsetHSL(rand(-0.02, 0.02), rand(-0.08, 0.05), rand(-0.08, 0.08)); im.setColorAt(n, c); n++;
  }
  im.count = n; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.frustumCulled = false; im.receiveShadow = true;
  return im;
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
function makeFacade(base, glass, lit, litColors) {
  const layout = []; for (let y = 0; y < 16; y++) for (let x = 0; x < 8; x++) layout.push(Math.random() < lit ? pick(litColors) : null);
  const draw = emissive => (g, w, h) => {
    g.fillStyle = emissive ? '#000' : base; g.fillRect(0, 0, w, h);
    if (!emissive) speckle(g, w, h, 1200, ['rgba(0,0,0,0.06)', 'rgba(255,255,255,0.06)'], 2);
    layout.forEach((c, i) => { const x = (i % 8) * 16 + 3, y = Math.floor(i / 8) * 16 + 4; if (emissive) { if (c) { g.fillStyle = c; g.fillRect(x, y, 10, 8); } } else { g.fillStyle = c || glass; g.fillRect(x, y, 10, 8); if (!emissive) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, y + 8, 10, 1.5); } } });
  };
  const map = canvasTex(128, 256, draw(false)), emi = canvasTex(128, 256, draw(true));
  return new THREE.MeshStandardMaterial({ map, emissive: 0xffffff, emissiveMap: emi, emissiveIntensity: 1.0, roughness: 0.85, metalness: 0.05 });
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
  S.fog = new THREE.FogExp2(0xc7845a, 0.0095);
  S.environment = envTex; S.environmentIntensity = 0.45;
  S.add(makeSky(MENU_SUN, 900));
  makeMountains(S);
  S.add(new THREE.HemisphereLight(0xffcfa0, 0x4a3020, 0.7));
  const key = new THREE.SpotLight(0xffe6c8, 240, 0, 0.42, 0.7, 2); key.position.set(3.5, 7.5, 5.5); key.target.position.set(0, 1, 0);
  key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0002; key.shadow.normalBias = 0.02;
  S.add(key, key.target);
  const rim = new THREE.SpotLight(0xff9a4a, 420, 0, 0.55, 0.8, 2); rim.position.set(-2.5, 3.5, -6); rim.target.position.set(0, 1.2, 0); S.add(rim, rim.target);
  const rim2 = new THREE.SpotLight(0x3ee6ff, 120, 0, 0.5, 0.8, 2); rim2.position.set(4, 3, -4); rim2.target.position.set(0, 1.4, 0); S.add(rim2, rim2.target);
  const fill = new THREE.PointLight(0x3ee6ff, 5, 10, 2); fill.position.set(-1.5, 1.2, 2.5); S.add(fill);

  // savannah floor + grass
  const floor = new THREE.Mesh(new THREE.CircleGeometry(400, 64), new THREE.MeshStandardMaterial({ map: grassTex('#9a7440', '#6e5028', '#c9a160', 60), roughness: 1 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; S.add(floor);
  S.add(makeGrass(9000, 60, (x, z) => { const r = Math.hypot(x, z); return r > 3.2 && r < 60 && z < 8 ? 'gold' : null; }));

  // pedestal
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.45, 0.38, 48), new THREE.MeshStandardMaterial({ color: 0x2a2622, metalness: 0.85, roughness: 0.3 }));
  ped.position.y = 0.19; ped.receiveShadow = true; ped.castShadow = true; S.add(ped);
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.018, 8, 96), glowMat(0x3ee6ff, 4)); ring1.rotation.x = Math.PI / 2; ring1.position.y = 0.39; S.add(ring1);
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.24, 96), new THREE.MeshBasicMaterial({ color: 0x3ee6ff, transparent: true, opacity: 0.45 })); ring2.rotation.x = -Math.PI / 2; ring2.position.y = 0.02; S.add(ring2);

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
  const fac = [makeFacade('#c8a476', '#3a3128', 0.3, ['#ffcf8a', '#ffe0b0']), makeFacade('#2a3542', '#18202a', 0.45, ['#7fdfff', '#3ee6ff', '#cfe8ff'])];
  for (let i = 0; i < 34; i++) {
    const x = rand(30, 120), z = rand(-170, -110), w = rand(5, 11), h = rand(12, 70) * (i % 5 === 0 ? 1.6 : 1), d = rand(5, 11);
    const geo = new THREE.BoxGeometry(w, h, d); scaleUV(geo, w, h, d); const b = new THREE.Mesh(geo, pick(fac)); b.position.set(x, h / 2, z); S.add(b);
    if (i % 4 === 0) { const dm = new THREE.Mesh(new THREE.SphereGeometry(w * 0.45, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xe6dccb, roughness: 0.6 })); dm.position.set(x, h, z); S.add(dm); }
  }
  // the crashed Catharsis beacon-ship (left horizon)
  const mono = new THREE.Group(); mono.position.set(-48, 0, -120); S.add(mono);
  const crim = glowMat(0xff2b4a, 2.6);
  const stump = new THREE.Mesh(GEO.oct, crim); stump.scale.set(3, 14, 3); stump.position.y = 5; stump.rotation.z = 0.35; mono.add(stump);
  menu.frags = [];
  for (let i = 0; i < 7; i++) { const f = new THREE.Mesh(GEO.oct, crim); f.scale.set(rand(.6, 1.4), rand(2, 4), rand(.6, 1.4)); f.position.set(rand(-8, 8), rand(14, 26), rand(-3, 3)); f.rotation.set(rand(0, 3), rand(0, 3), rand(0, 3)); f.userData.s = rand(0.1, 0.4); mono.add(f); menu.frags.push(f); }

  // dust motes in the low sun
  const N = 700, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = rand(-14, 14); pos[i * 3 + 1] = rand(0, 10); pos[i * 3 + 2] = rand(-12, 6); const c = Math.random() < 0.8 ? [1, 0.75, 0.4] : [0.25, 0.9, 1]; col.set(c, i * 3); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  menu.embers = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
  S.add(menu.embers);

  // THE GOVERNOR
  menu.mascar = mascarInstance(2.05);
  menu.mascar.position.y = 0.38; S.add(menu.mascar);
  menu.cam.position.set(1.9, 1.75, 6.4);
}
function updateMenu(dt) {
  const t = G.time;
  grassTime.value = t;
  if (!menu.drag) { menu.yawVel *= 0.94; menu.yaw += menu.yawVel; menu.yaw *= 0.985; }
  if (menu.mascar) { menu.mascar.rotation.y = menu.yaw + Math.sin(t * 0.25) * 0.18; menu.mascar.children[0].scale.y = menu.mascar.children[0].scale.x * (1 + Math.sin(t * 1.6) * 0.003); }
  menu.sigil.rotation.z = t * 0.05; menu.sigil.children[3].rotation.z = Math.PI / 2 - t * 0.12; menu.sigil.children[4].rotation.z = -Math.PI / 2 + t * 0.09;
  for (const f of menu.frags) { f.rotation.y += f.userData.s * dt; f.position.y += Math.sin(t + f.userData.s * 10) * 0.004; }
  const p = menu.embers.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) { let y = p.getY(i) + dt * (0.08 + (i % 7) * 0.02); if (y > 10) y = 0; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * 0.4 + i) * 0.003 + dt * 0.05); if (p.getX(i) > 14) p.setX(i, -14); }
  p.needsUpdate = true;
  const tx = 1.9 + menu.mx * 0.35, ty = 1.75 - menu.my * 0.2;
  menu.cam.position.x += (tx - menu.cam.position.x) * 0.04; menu.cam.position.y += (ty - menu.cam.position.y) * 0.04;
  menu.cam.lookAt(-0.85, 1.22, 0);
}

