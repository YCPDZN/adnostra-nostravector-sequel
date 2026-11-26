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
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05); this._syncTheme(); },
  setMusic(on) { this.musicOn = on; if (this.music) this.music.gain.setTargetAtTime(on ? 0.32 : 0, this.ctx.currentTime, 0.3); this._syncTheme(); },

  // Main menu theme: a recorded track played through an <audio> element, which also works when the game is opened by double-click.
  theme: null, themeFade: null, THEME_LEVEL: 0.8,
  _themeVol() { return this.musicOn ? Math.min(1, this.volume * this.THEME_LEVEL) : 0; },
  _fadeTheme(to, sec, then) {
    const a = this.theme; if (!a) return;
    clearInterval(this.themeFade);
    const from = a.volume, steps = Math.max(1, Math.round(sec * 30)); let i = 0;
    this.themeFade = setInterval(() => {
      i++; a.volume = Math.min(1, Math.max(0, from + (to - from) * i / steps));
      if (i >= steps) { clearInterval(this.themeFade); this.themeFade = null; if (then) then(); }
    }, 1000 / 30);
  },
  _startTheme() {
    if (!this.theme) { this.theme = new Audio('assets/main_menu_theme.mp3'); this.theme.loop = true; this.theme.preload = 'auto'; this.theme.volume = 0; }
    const p = this.theme.play(); if (p && p.catch) p.catch(() => {});
    this._fadeTheme(this._themeVol(), 1.5);
  },
  _stopTheme() {
    const a = this.theme; if (!a || a.paused) return;
    this._fadeTheme(0, 1.2, () => { a.pause(); a.currentTime = 0; });
  },
  _syncTheme() { if (this.theme && this.mode === 'menu') { clearInterval(this.themeFade); this.themeFade = null; this.theme.volume = this._themeVol(); } },

  playMusic(mode) {
    if (!this.ctx || this.mode === mode) return;
    this.mode = mode;
    const c = this.ctx, t = c.currentTime;
    for (const n of this.nodes) { try { n.g.gain.setTargetAtTime(0, t, 0.8); n.o.forEach(o => o.stop(t + 4)); } catch (e) {} }
    this.nodes = [];
    // The sustained chord pad (the background hum) has been removed; tick() still plays the bells and the cantina beat.
    if (mode === 'menu') this._startTheme(); else this._stopTheme();
  },

  // ambient bells, called each frame
  tick(dt) {
    if (!this.ctx || !this.musicOn || !this.mode || this.mode === 'menu') return; // the menu has its own theme
    if (this.mode === 'cantina') { // plucked sequencer + shaker, ~108 bpm
      this.seqT = (this.seqT || 0) - dt;
      if (this.seqT <= 0) {
        this.seqT += 60 / 108 / 2; this.step = ((this.step || 0) + 1) % 16;
        const bass = [87.31, 0, 0, 87.31, 0, 0, 130.81, 0, 98, 0, 0, 98, 0, 0, 116.54, 0];
        const mel = [349.23, 0, 440, 523.25, 0, 440, 0, 392, 349.23, 0, 293.66, 0, 349.23, 392, 0, 0];
        if (bass[this.step]) this.tone(bass[this.step], 0.35, 'triangle', 0.09, null, this.music);
        if (mel[this.step] && Math.random() < 0.85) { this.tone(mel[this.step], 0.28, 'triangle', 0.045, null, this.music); this.tone(mel[this.step] * 2, 0.12, 'sine', 0.012, null, this.music); }
        if (this.step % 2 === 1) this.noise(0.05, 0.03, 7000, 2);
        if (this.step % 8 === 4) this.noise(0.12, 0.06, 1800, 1);
      }
      return;
    }
    this.bellTimer -= dt;
    if (this.bellTimer <= 0) {
      this.bellTimer = 2.5 + Math.random() * 4;
      const scale = this.mode === 'menu' ? [293.66, 369.99, 440, 554.37, 587.33, 739.99] : this.mode === 'savannah' ? [293.66, 329.63, 369.99, 440, 493.88, 587.33] : [261.63, 311.13, 392, 466.16, 523.25];
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
  // Sound effects (clicks, hits, jumps, level-up chimes...) are switched off: every Sound.sfx() call is silent.
  // Music is unaffected: the menu theme, the world bells and the cantina tune still play.
  sfx() {}
};
