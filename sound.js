'use strict';
(() => {
  const KEY = 'hnmh-sound-v1';
  const defaults = {enabled:false,music:true,effects:true,musicVolume:.36,effectsVolume:.42};
  const prefs = {...defaults};
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    for (const key of ['enabled','music','effects']) if (typeof saved?.[key] === 'boolean') prefs[key] = saved[key];
    for (const key of ['musicVolume','effectsVolume']) if (typeof saved?.[key] === 'number' && Number.isFinite(saved[key])) prefs[key] = Math.max(0,Math.min(1,saved[key]));
  } catch { /* Private browsing can disable storage; sound still works. */ }

  let context, master, musicBus, effectsBus, musicBuffer, musicSource, loading;
  let error = '', lastNode, lastEffect = -Infinity, effectCount = 0, suspendTimer, previousFocus;
  const buttons = new Set(), documents = new WeakSet();
  const dialog = document.createElement('dialog');
  dialog.id = 'fair-sound-dialog';
  dialog.setAttribute('aria-labelledby','sound-title');
  dialog.innerHTML = `
    <div class="sound-heading"><div><h2 id="sound-title">听见庙会</h2><p class="sound-intro">一曲轻乐，伴你走进街巷烟火。</p></div><button type="button" class="sound-close" aria-label="关闭声音设置">×</button></div>
    <button type="button" id="sound-master" aria-pressed="false">开启声音</button>
    <section class="sound-layer" aria-label="背景音乐设置">
      <label class="sound-layer-heading" for="sound-music"><span class="sound-layer-title"><strong>背景音乐</strong><small>轻柔拨弦 · 循环陪伴</small></span><input id="sound-music" type="checkbox" role="switch" aria-label="背景音乐"></label>
      <div class="sound-volume"><input id="sound-music-volume" type="range" min="0" max="100" step="1" aria-label="背景音乐音量"><output for="sound-music-volume" id="sound-music-value"></output></div>
    </section>
    <section class="sound-layer" aria-label="交互音效设置">
      <label class="sound-layer-heading" for="sound-effects"><span class="sound-layer-title"><strong>交互音效</strong><small>选一座城、翻一幅画，声声回应</small></span><input id="sound-effects" type="checkbox" role="switch" aria-label="交互音效"></label>
      <div class="sound-volume"><input id="sound-effects-volume" type="range" min="0" max="100" step="1" aria-label="交互音效音量"><output for="sound-effects-volume" id="sound-effects-value"></output></div>
    </section>
    <p id="sound-state" role="status" aria-live="polite"></p>`;
  document.body.append(dialog);
  const control = id => document.getElementById(id);
  function save() { try { localStorage.setItem(KEY,JSON.stringify(prefs)); } catch {} }
  function active() { return prefs.enabled && !document.hidden && context?.state === 'running'; }
  function render() {
    const running = active(), audible = running && ((prefs.music && prefs.musicVolume > 0 && musicSource) || (prefs.effects && prefs.effectsVolume > 0));
    for (const button of buttons) {
      button.dataset.playing = String(Boolean(audible));
      button.setAttribute('aria-label',`听见庙会，声音设置，${audible ? '声音已开启' : '当前静音'}`);
      button.title = audible ? '声音设置 · 可静音' : '声音设置 · 点击开启';
    }
    control('sound-master').setAttribute('aria-pressed',String(prefs.enabled));
    control('sound-master').textContent = prefs.enabled ? '全部静音' : '开启声音';
    for (const type of ['music','effects']) {
      control('sound-'+type).checked = prefs[type];
      const value = Math.round(prefs[type+'Volume'] * 100);
      control('sound-'+type+'-volume').value = value;
      control('sound-'+type+'-value').textContent = value + '%';
    }
    control('sound-state').textContent = error || (!prefs.enabled ? '由你开启声音；音量设置会保存在此浏览器。' : !running ? '声音已记住，轻触页面即可继续。' : !prefs.music && !prefs.effects ? '两类声音均已关闭，可分别开启。' : loading && prefs.music ? '正在载入背景音乐…' : '声音已开启 · 切换到后台时自动暂停。');
  }
  function ramp(bus,value,seconds=.06) {
    if (!context || !bus) return;
    const at = context.currentTime;
    bus.gain.cancelScheduledValues(at);
    bus.gain.setValueAtTime(bus.gain.value,at);
    bus.gain.setTargetAtTime(value,at,seconds);
  }
  function ensureContext() {
    if (context) return true;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) { error = '当前浏览器无法播放声音，仍可正常看图读故事。'; render(); return false; }
    try {
      context = new AudioContext();
      master = context.createGain(); master.gain.value = 0; master.connect(context.destination);
      musicBus = context.createGain(); musicBus.gain.value = prefs.musicVolume; musicBus.connect(master);
      effectsBus = context.createGain(); effectsBus.gain.value = prefs.effectsVolume; effectsBus.connect(master);
      context.addEventListener('statechange',render);
      return true;
    } catch { error = '声音暂未开启，请再试一次。'; render(); return false; }
  }
  async function loadMusic() {
    if (musicBuffer) return musicBuffer;
    if (loading) return loading;
    loading = (async () => {
      const response = await fetch(new URL('assets/audio/fair-background.wav',document.baseURI));
      if (!response.ok) throw new Error('Music unavailable');
      return context.decodeAudioData(await response.arrayBuffer());
    })();
    render();
    try { musicBuffer = await loading; return musicBuffer; }
    finally { loading = null; render(); }
  }
  async function startMusic() {
    if (!active() || !prefs.music || !prefs.musicVolume || musicSource) return;
    try {
      const buffer = await loadMusic();
      if (!active() || !prefs.music || !prefs.musicVolume || musicSource) return;
      musicSource = context.createBufferSource(); musicSource.buffer = buffer; musicSource.loop = true;
      musicSource.connect(musicBus); musicBus.gain.value = 0;
      musicSource.start(); ramp(musicBus,prefs.musicVolume,.45); render();
    } catch { error = '背景音乐暂未载入，交互音效仍可使用；关闭再开启音乐可重试。'; render(); }
  }
  function stopMusic() {
    if (!musicSource) return;
    const source = musicSource; musicSource = null;
    // Stop the old loop before a rapid re-enable can create its replacement.
    source.stop(); source.disconnect();
    ramp(musicBus,0,.025);
  }
  async function resume() {
    if (!prefs.enabled || document.hidden || !ensureContext()) return;
    clearTimeout(suspendTimer);
    try {
      await context.resume();
      // A mute click or a visibility change can happen during resume/decode.
      if (!prefs.enabled || document.hidden) { await context.suspend(); return; }
      ramp(master,1,.08); ramp(effectsBus,prefs.effects ? prefs.effectsVolume : 0);
      if (prefs.music) { ramp(musicBus,prefs.musicVolume); void startMusic(); }
      render();
    } catch { error = '轻触“开启声音”后再试一次。'; prefs.enabled = false; save(); render(); }
  }
  function setEnabled(value) {
    prefs.enabled = value; error = ''; save();
    if (value) void resume();
    else {
      ramp(master,0,.015); clearTimeout(suspendTimer);
      suspendTimer = setTimeout(() => { if (!prefs.enabled) context?.suspend().catch(()=>{}); },100);
    }
    render();
  }
  function pluck(frequency,time,volume=.18,duration=.55) {
    const oscillator = context.createOscillator(), gain = context.createGain(), filter = context.createBiquadFilter();
    oscillator.type = 'triangle'; oscillator.frequency.value = frequency;
    filter.type = 'lowpass'; filter.frequency.setValueAtTime(2200,time); filter.frequency.exponentialRampToValueAtTime(650,time+duration);
    gain.gain.setValueAtTime(0,time); gain.gain.linearRampToValueAtTime(volume,time+.006);
    gain.gain.exponentialRampToValueAtTime(.0001,time+duration);
    oscillator.connect(filter).connect(gain).connect(effectsBus);
    oscillator.start(time); oscillator.stop(time+duration+.02);
    oscillator.onended = () => { oscillator.disconnect(); filter.disconnect(); gain.disconnect(); };
  }
  function drum(time) {
    const oscillator = context.createOscillator(), gain = context.createGain();
    oscillator.frequency.setValueAtTime(135,time); oscillator.frequency.exponentialRampToValueAtTime(65,time+.16);
    gain.gain.setValueAtTime(0,time); gain.gain.linearRampToValueAtTime(.2,time+.008); gain.gain.exponentialRampToValueAtTime(.0001,time+.28);
    oscillator.connect(gain).connect(effectsBus); oscillator.start(time); oscillator.stop(time+.3);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  }
  function effect(kind='select') {
    if (!active() || !prefs.effects || !prefs.effectsVolume) return;
    const at = context.currentTime;
    if (at-lastEffect < .12) return;
    lastEffect = at; effectCount++;
    if (kind === 'world') { drum(at); pluck(293.66,at+.045,.13,.7); pluck(440,at+.14,.1,.75); }
    else if (kind === 'scene') { pluck(440,at,.15); pluck(587.33,at+.075,.1); }
    else if (kind === 'object') { pluck(587.33,at,.14); pluck(659.25,at+.09,.075); }
    else if (kind === 'root') { pluck(440,at,.14); pluck(293.66,at+.09,.1); }
    else pluck(kind === 'story' ? 440 : 493.88,at,.13,.35);
  }
  function wireDocument(doc) {
    if (documents.has(doc)) return;
    documents.add(doc);
    const unlock = event => {
      if (!event.isTrusted || !prefs.enabled || active() || event.target?.closest?.('#sound-master')) return;
      if (event.type === 'keydown' && (event.repeat || !['Enter',' ','ArrowLeft','ArrowRight'].includes(event.key))) return;
      void resume();
    };
    doc.addEventListener('pointerdown',unlock,true);
    doc.addEventListener('keydown',unlock,true);
    doc.addEventListener('click',event => {
      if (!event.isTrusted) return;
      const target = event.target?.closest?.('.home-region,.home-map-label,.home-fair-options button,#caption-expand,#picture-caption-toggle,#picture-fit');
      if (target && !target.disabled) effect(target.id ? 'story' : 'select');
    },true);
    doc.addEventListener('change',event => { if (event.isTrusted && event.target.matches('.home-city-picker select')) effect('select'); },true);
  }
  function openSettings(button) {
    previousFocus = button;
    render();
    if (!dialog.open) dialog.showModal();
    control('sound-master').focus({preventScroll:true});
  }
  function makeButton(doc) {
    const button = doc.createElement('button'); button.type = 'button'; button.className = 'fair-sound-button';
    button.setAttribute('aria-haspopup','dialog');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l11-2v13M9 8l11-2"/><ellipse cx="6" cy="18" rx="3" ry="2.5"/><ellipse cx="17" cy="16" rx="3" ry="2.5"/></svg>';
    button.addEventListener('click',() => openSettings(button)); buttons.add(button); return button;
  }
  control('sound-master').addEventListener('click',() => setEnabled(!prefs.enabled));
  for (const type of ['music','effects']) {
    control('sound-'+type).addEventListener('change',event => {
      prefs[type] = event.target.checked; error = '';
      if (prefs[type] && !prefs.enabled) setEnabled(true);
      if (type === 'music') { if (prefs.music) void startMusic(); else stopMusic(); }
      else { ramp(effectsBus,prefs.effects ? prefs.effectsVolume : 0); if (prefs.effects) effect('select'); }
      save(); render();
    });
    control('sound-'+type+'-volume').addEventListener('input',event => {
      prefs[type+'Volume'] = Number(event.target.value)/100;
      ramp(type === 'music' ? musicBus : effectsBus,prefs[type] ? prefs[type+'Volume'] : 0);
      if (type === 'music' && prefs.music) void startMusic();
      save(); render();
    });
    control('sound-'+type+'-volume').addEventListener('change',() => { if (type === 'effects') effect('select'); });
  }
  dialog.querySelector('.sound-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
  });
  dialog.addEventListener('close',() => { if (previousFocus?.isConnected) previousFocus.focus({preventScroll:true}); });
  document.addEventListener('visibilitychange',() => {
    if (document.hidden) { clearTimeout(suspendTimer); context?.suspend().catch(()=>{}); }
    else if (prefs.enabled && context) void resume();
  });
  window.addEventListener('pagehide',() => { clearTimeout(suspendTimer); context?.suspend().catch(()=>{}); });
  window.addEventListener('pageshow',event => { if (event.persisted && prefs.enabled && context) void resume(); });
  wireDocument(document);
  window.FairAudio = {
    mountHome() {
      const header = document.querySelector('.home-masthead');
      if (!header || header.querySelector('.fair-sound-button')) return;
      const button = makeButton(document), label = document.createElement('span'); label.textContent = '听见庙会'; button.append(label); header.append(button); render();
    },
    attachFrame(frame) {
      const doc = frame.contentDocument;
      if (!doc?.body) return;
      if (!doc.getElementById('fair-sound-css')) {
        const link = doc.createElement('link'); link.id = 'fair-sound-css'; link.rel = 'stylesheet'; link.href = new URL('sound.css',document.baseURI); doc.head.append(link);
      }
      const toolbar = doc.querySelector('.toolbar-right');
      if (toolbar && !toolbar.querySelector('.fair-sound-button')) toolbar.prepend(makeButton(doc));
      wireDocument(doc); render();
    },
    navigate(entry) {
      if (!entry || entry.id === lastNode) return;
      const previous = lastNode; lastNode = entry.id;
      if (previous) effect(entry.kind);
    },
    // Read-only diagnostic state for browser QA; no audio is started by inspection.
    readState() { return {...prefs,context:context?.state || 'uninitialized',playing:Boolean(musicSource && active() && prefs.music && prefs.musicVolume),loading:Boolean(loading),effectsPlayed:effectCount,node:lastNode,musicDuration:musicBuffer?.duration || 0,error}; }
  };
  render();
})();
