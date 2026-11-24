// AD-NOSTRA — procedural audio (WebAudio, no files needed)

export const Sound = {
  ctx: null, master: null, music: null, sfxBus: null, nodes: [], bellTimer: 0, mode: null,
  volume: 0.6, musicOn: true,

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = this.volume; this.master.connect(c.destination);
    // simple reverb via feedback delay network
    this.verb = c.createConvolver(); this.verb.buffer = this._impulse(3.2);
    const vg = c.createGain(); vg.gain.value = 0.45; this.verb.connect(vg); vg.connect(this.master);
    this.music = c.createGain(); this.music.gain.value = this.musicOn ? 0.32 : 0;
    this.music.connect(this.master); this.music.connect(this.verb);
    this.sfxBus = c.createGain(); this.sfxBus.gain.value = 0.8; this.sfxBus.connect(this.master);
    const sv = c.createGain(); sv.gain.value = 0.25; this.sfxBus.connect(sv); sv.connect(this.verb);
  },
  _impulse(sec) {
    const c = this.ctx, len = c.sampleRate * sec, b = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4); }
    return b;
  },
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05); },
  setMusic(on) { this.musicOn = on; if (this.music) this.music.gain.setTargetAtTime(on ? 0.32 : 0, this.ctx.currentTime, 0.3); },

  playMusic(mode) {
    if (!this.ctx || this.mode === mode) return;
    this.mode = mode;
    const c = this.ctx, t = c.currentTime;
    for (const n of this.nodes) { try { n.g.gain.setTargetAtTime(0, t, 0.8); n.o.forEach(o => o.stop(t + 4)); } catch (e) {} }
    this.nodes = [];
    const chords = {
      menu: [73.42, 110, 146.83, 174.61, 220, 261.63],   // D minor add9 spread
      world: [65.41, 98, 130.81, 155.56, 196, 233.08],   // C minor 7
      boss: [61.74, 92.5, 123.47, 146.83, 185, 174.61],
    };
    const g = c.createGain(); g.gain.value = 0; g.gain.setTargetAtTime(1, t, 2.5);
    const filt = c.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = mode === 'boss' ? 1400 : 700; filt.Q.value = 3;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.07; const lg = c.createGain(); lg.gain.value = 380;
    lfo.connect(lg); lg.connect(filt.frequency); lfo.start();
    filt.connect(g); g.connect(this.music);
    const os = [lfo];
    chords[mode].forEach((f, i) => {
      for (const det of [-7, 6]) {
        const o = c.createOscillator(); o.type = i < 2 ? 'sawtooth' : 'triangle'; o.frequency.value = f; o.detune.value = det + Math.random() * 3;
        const og = c.createGain(); og.gain.value = (i < 2 ? 0.05 : 0.04);
        o.connect(og); og.connect(filt); o.start(); os.push(o);
      }
    });
    if (mode === 'boss') { // pulse
      const p = c.createOscillator(); p.type = 'square'; p.frequency.value = 2.2; const pg = c.createGain(); pg.gain.value = 0.5;
      p.connect(pg); pg.connect(g.gain); p.start(); os.push(p);
    }
    this.nodes.push({ g, o: os });
  },

  // ambient bells, called each frame
  tick(dt) {
    if (!this.ctx || !this.musicOn || !this.mode) return;
    this.bellTimer -= dt;
    if (this.bellTimer <= 0) {
      this.bellTimer = 2.5 + Math.random() * 4;
      const scale = this.mode === 'menu' ? [293.66, 349.23, 440, 523.25, 587.33, 698.46] : [261.63, 311.13, 392, 466.16, 523.25];
      const f = scale[Math.random() * scale.length | 0];
      this.tone(f, 3.5, 'sine', 0.05, null, this.music);
      this.tone(f * 2.01, 2.5, 'sine', 0.015, null, this.music);
    }
  },

  tone(freq, dur, type = 'sine', vol = 0.2, slideTo = null, bus = null, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(bus || this.sfxBus); o.start(t); o.stop(t + dur + 0.05);
  },
  noise(dur, vol = 0.2, freq = 1200, q = 1, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + delay;
    const len = Math.max(1, c.sampleRate * dur | 0), b = c.createBuffer(1, len, c.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const s = c.createBufferSource(); s.buffer = b;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.sfxBus); s.start(t);
  },
  sfx(name) {
    if (!this.ctx) return;
    switch (name) {
      case 'click': this.tone(880, 0.06, 'square', 0.04); this.tone(1320, 0.05, 'sine', 0.03, null, null, 0.03); break;
      case 'hover': this.tone(1600, 0.03, 'sine', 0.015); break;
      case 'start': this.tone(110, 1.8, 'sawtooth', 0.12, 55); this.tone(440, 1.2, 'sine', 0.08, 880); this.noise(1.2, 0.08, 600, 0.5); break;
      case 'slash': this.noise(0.14, 0.25, 2600, 0.8); this.tone(320, 0.1, 'triangle', 0.08, 140); break;
      case 'heavy': this.noise(0.3, 0.35, 900, 0.6); this.tone(120, 0.35, 'sawtooth', 0.15, 50); break;
      case 'zap': this.tone(1800, 0.18, 'sawtooth', 0.06, 300); this.noise(0.12, 0.12, 4000, 2); break;
      case 'lance': this.tone(220, 0.6, 'sawtooth', 0.12, 1800); this.noise(0.5, 0.15, 3000, 1); break;
      case 'hit': this.noise(0.08, 0.22, 1500, 1); break;
      case 'hurt': this.tone(160, 0.18, 'square', 0.07, 80); this.noise(0.1, 0.15, 500, 1); break;
      case 'heal': [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.5, 'sine', 0.06, null, null, i * 0.06)); break;
      case 'shield': this.tone(300, 0.6, 'sine', 0.1, 600); this.tone(450, 0.6, 'triangle', 0.05, 900); break;
      case 'blink': this.tone(1200, 0.25, 'sine', 0.08, 200); this.noise(0.2, 0.1, 6000, 3); break;
      case 'boom': this.noise(0.9, 0.5, 200, 0.4); this.tone(70, 0.9, 'sine', 0.3, 30); break;
      case 'drone': this.tone(900, 0.2, 'square', 0.04, 1400); break;
      case 'die': this.tone(200, 0.6, 'sawtooth', 0.08, 40); break;
      case 'levelup': [392, 523, 659, 784, 1047].forEach((f, i) => { this.tone(f, 0.9, 'triangle', 0.08, null, null, i * 0.09); this.tone(f * 2, 0.6, 'sine', 0.03, null, null, i * 0.09); }); break;
      case 'quest': [659, 784, 988].forEach((f, i) => this.tone(f, 0.7, 'sine', 0.09, null, null, i * 0.12)); break;
      case 'accept': this.tone(523, 0.3, 'sine', 0.08); this.tone(784, 0.4, 'sine', 0.08, null, null, 0.1); break;
      case 'pickup': this.tone(1047, 0.3, 'sine', 0.07); this.tone(1568, 0.4, 'sine', 0.05, null, null, 0.07); break;
      case 'coin': this.tone(1318, 0.12, 'square', 0.03); this.tone(1760, 0.2, 'square', 0.03, null, null, 0.06); break;
      case 'error': this.tone(180, 0.15, 'square', 0.05); break;
      case 'chat': this.tone(1400, 0.05, 'sine', 0.02); break;
      case 'death': [330, 262, 196, 131].forEach((f, i) => this.tone(f, 1.2, 'triangle', 0.08, null, null, i * 0.25)); break;
    }
  }
};
