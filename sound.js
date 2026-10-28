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
  let error = '', lastNode, lastEntry, lastEffect = -Infinity, effectCount = 0, suspendTimer, previousFocus;
  let musicStopTimer, musicStartedAt = 0, musicOffset = 0, reading = false, musicFormat = '', lastCue = '';
  let clayVoice = null, clayWhistleCount = 0;
  const buttons = new Set(), documents = new WeakSet();
  const dialog = document.createElement('dialog');
  dialog.id = 'fair-sound-dialog';
  dialog.setAttribute('aria-labelledby','sound-title');
  dialog.innerHTML = `
    <div class="sound-heading"><div><h2 id="sound-title">听见庙会</h2><p class="sound-intro">一曲轻乐，伴你走进街巷烟火。</p></div><button type="button" class="sound-close" aria-label="关闭声音设置">×</button></div>
    <button type="button" id="sound-master" aria-pressed="false">开启声音</button>
    <section class="sound-layer" aria-label="背景音乐设置">
      <label class="sound-layer-heading" for="sound-music"><span class="sound-layer-title"><strong>背景音乐</strong><small>轻柔拨弦 · 读故事时自动轻下来</small></span><input id="sound-music" type="checkbox" role="switch" aria-label="背景音乐"></label>
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
    control('sound-state').textContent = error || (!prefs.enabled ? '由你开启声音；音量设置会保存在此浏览器。' : !running ? '声音已记住，轻触页面即可继续。' : !prefs.music && !prefs.effects ? '两类声音均已关闭，可分别开启。' : loading && prefs.music ? '正在载入背景音乐…' : reading && prefs.music ? '读故事时轻一些，收起后缓缓恢复。' : '声音已开启 · 切换到后台时自动暂停。');
  }
  function ramp(bus,value,seconds=.16) {
    if (!context || !bus) return;
    const at = context.currentTime;
    // Hold the current envelope before replacing it; quick taps must not click.
    if (bus.gain.cancelAndHoldAtTime) bus.gain.cancelAndHoldAtTime(at);
    else { const held = bus.gain.value; bus.gain.cancelScheduledValues(at); bus.gain.setValueAtTime(held,at); }
    bus.gain.linearRampToValueAtTime(value,at+seconds);
  }
  function musicLevel() { return prefs.music ? prefs.musicVolume*(reading ? .48 : 1)*(clayVoice?.started && !clayVoice.stopped ? .56 : 1) : 0; }
  function ensureContext() {
    if (context) return true;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) { error = '当前浏览器无法播放声音，仍可正常看图读故事。'; render(); return false; }
    try {
      context = new AudioContext();
      master = context.createGain(); master.gain.value = 0; master.connect(context.destination);
      musicBus = context.createGain(); musicBus.gain.value = prefs.musicVolume; musicBus.connect(master);
      effectsBus = context.createGain(); effectsBus.gain.value = prefs.effectsVolume; effectsBus.connect(master);
      context.addEventListener('statechange',() => { if (context.state !== 'running') stopClayWhistle(); render(); });
      return true;
    } catch { error = '声音暂未开启，请再试一次。'; render(); return false; }
  }
  async function loadMusic() {
    if (musicBuffer) return musicBuffer;
    if (loading) return loading;
    loading = (async () => {
      for (const format of ['mp3','wav']) {
        try {
          const response = await fetch(new URL('assets/audio/fair-background.'+format,document.baseURI));
          if (!response.ok) throw new Error('Music unavailable');
          const buffer = await context.decodeAudioData(await response.arrayBuffer());
          musicFormat = format; return buffer;
        } catch { /* The original PCM is a fallback for a failed compressed decode. */ }
      }
      throw new Error('Music unavailable');
    })();
    render();
    try { musicBuffer = await loading; return musicBuffer; }
    finally { loading = null; render(); }
  }
  async function startMusic() {
    clearTimeout(musicStopTimer);
    if (!active() || !prefs.music || !prefs.musicVolume) return;
    if (musicSource) { ramp(musicBus,musicLevel(),.4); return; }
    try {
      const buffer = await loadMusic();
      if (!active() || !prefs.music || !prefs.musicVolume || musicSource) return;
      musicSource = context.createBufferSource(); musicSource.buffer = buffer; musicSource.loop = true;
      musicSource.connect(musicBus); musicBus.gain.value = 0;
      musicStartedAt = context.currentTime;
      musicSource.start(0,musicOffset % buffer.duration);
      ramp(musicBus,musicLevel(),.7); render();
    } catch { error = '背景音乐暂未载入，交互音效仍可使用；关闭再开启音乐可重试。'; render(); }
  }
  function stopMusic() {
    if (!musicSource) return;
    clearTimeout(musicStopTimer); ramp(musicBus,0,.16);
    // One source survives a quick off/on. A longer pause resumes its playhead.
    musicStopTimer = setTimeout(() => {
      if (!musicSource || (prefs.music && prefs.musicVolume)) return;
      musicOffset = (musicOffset + context.currentTime-musicStartedAt) % musicBuffer.duration;
      const source = musicSource; musicSource = null;
      source.stop(); source.disconnect(); render();
    },180);
  }
  async function resume() {
    if (!prefs.enabled || document.hidden || !ensureContext()) return;
    clearTimeout(suspendTimer);
    try {
      await context.resume();
      // A mute click or a visibility change can happen during resume/decode.
      if (!prefs.enabled || document.hidden) { await context.suspend(); return; }
      ramp(master,1,.25); ramp(effectsBus,prefs.effects ? prefs.effectsVolume : 0);
      if (prefs.music) void startMusic();
      render();
    } catch { error = '轻触“开启声音”后再试一次。'; prefs.enabled = false; save(); render(); }
  }
  function setEnabled(value) {
    prefs.enabled = value; error = ''; save();
    if (value) void resume();
    else {
      stopClayWhistle();
      ramp(master,0,.12); clearTimeout(suspendTimer);
      suspendTimer = setTimeout(() => { if (!prefs.enabled) context?.suspend().catch(()=>{}); },150);
    }
    render();
  }
  function pluck(frequency,time,volume=.1,duration=.48) {
    const oscillator = context.createOscillator(), gain = context.createGain(), filter = context.createBiquadFilter();
    oscillator.type = 'triangle'; oscillator.frequency.value = frequency;
    filter.type = 'lowpass'; filter.frequency.setValueAtTime(1650,time); filter.frequency.exponentialRampToValueAtTime(480,time+duration);
    gain.gain.setValueAtTime(0,time); gain.gain.linearRampToValueAtTime(volume,time+.012);
    gain.gain.exponentialRampToValueAtTime(.0001,time+duration);
    oscillator.connect(filter).connect(gain).connect(effectsBus);
    oscillator.start(time); oscillator.stop(time+duration+.02);
    oscillator.onended = () => { oscillator.disconnect(); filter.disconnect(); gain.disconnect(); };
  }
  function drum(time) {
    const oscillator = context.createOscillator(), gain = context.createGain();
    oscillator.frequency.setValueAtTime(135,time); oscillator.frequency.exponentialRampToValueAtTime(65,time+.16);
    gain.gain.setValueAtTime(0,time); gain.gain.linearRampToValueAtTime(.1,time+.014); gain.gain.exponentialRampToValueAtTime(.0001,time+.28);
    oscillator.connect(gain).connect(effectsBus); oscillator.start(time); oscillator.stop(time+.3);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  }
  function effect(kind='select') {
    if (!active() || !prefs.effects || !prefs.effectsVolume) return;
    const at = context.currentTime;
    if (at-lastEffect < .16) return;
    lastEffect = at; lastCue = kind; effectCount++;
    if (kind === 'world') { drum(at); pluck(293.66,at+.045,.09,.65); pluck(440,at+.14,.065,.65); }
    else if (kind === 'scene' || kind === 'next') { pluck(440,at,.09); pluck(587.33,at+.075,.065); }
    else if (kind === 'object') { pluck(587.33,at,.085); pluck(659.25,at+.09,.05); }
    else if (kind === 'root' || kind === 'back') { pluck(440,at,.085); pluck(293.66,at+.09,.065); }
    else pluck(kind === 'story' ? 440 : 493.88,at,.075,.3);
  }
  function clayWhistleAvailable() { return prefs.enabled && prefs.effects && prefs.effectsVolume > 0 && !document.hidden; }
  function stopClayWhistle() { clayVoice?.stop(); }
  // This is an artistic two-note synthesis, not a recording of a traditional whistle.
  // Return a synchronous cancellation function so pointerup can cancel a pending resume.
  function clayWhistle({pan = 0, intensity = 1, maxDurationMs = 4000} = {}) {
    stopClayWhistle();
    if (!clayWhistleAvailable()) return Object.assign(() => {}, {update() {}});
    const position = Number.isFinite(pan) ? Math.max(-1,Math.min(1,pan)) : 0;
    const strength = Number.isFinite(intensity) ? Math.max(0,Math.min(1,intensity)) : 1;
    const duration = Number.isFinite(maxDurationMs) ? Math.max(1000,Math.min(8000,maxDurationMs)) : 4000;
    const voice = {started:false,stopped:false,pan:position,intensity:strength,voices:new Set(),deadline:performance.now()+duration};
    voice.stop = () => {
      if (voice.stopped) return;
      voice.stopped = true;
      clearTimeout(voice.repeatTimer); clearTimeout(voice.limitTimer);
      if (voice.output && context) {
        ramp(voice.output,0,.045);
        for (const tone of voice.voices) {
          try { tone.oscillator.stop(context.currentTime+.055); } catch { /* A completed tone is already silent. */ }
        }
        // Disconnect on wall time too: a suspended context must not replay a held note.
        setTimeout(() => {
          for (const tone of [...voice.voices]) tone.cleanup();
          voice.output.disconnect(); voice.panner?.disconnect();
        },75);
      }
      if (clayVoice === voice) { clayVoice = null; ramp(musicBus,musicLevel(),.35); }
    };
    // Keep the callable cancellation API while allowing a held exploration
    // gesture to move the listener. Updates never start or extend a voice.
    voice.stop.update = ({pan:nextPan, intensity:nextIntensity} = {}) => {
      if (voice.stopped || clayVoice !== voice) return;
      if (!clayWhistleAvailable() || performance.now() >= voice.deadline) { voice.stop(); return; }
      if (Number.isFinite(nextPan)) voice.pan = Math.max(-1,Math.min(1,nextPan));
      if (Number.isFinite(nextIntensity)) voice.intensity = Math.max(0,Math.min(1,nextIntensity));
      if (!voice.started || !context) return;
      ramp(voice.output,voice.intensity,.1);
      if (voice.panner) {
        const parameter = voice.panner.pan, at = context.currentTime;
        if (parameter.cancelAndHoldAtTime) parameter.cancelAndHoldAtTime(at);
        else { const held = parameter.value; parameter.cancelScheduledValues(at); parameter.setValueAtTime(held,at); }
        parameter.linearRampToValueAtTime(voice.pan,at+.1);
      }
    };
    clayVoice = voice;
    voice.limitTimer = setTimeout(voice.stop,duration);

    function tone(frequency,time,duration,volume) {
      const oscillator = context.createOscillator(), gain = context.createGain(), filter = context.createBiquadFilter();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency*.97,time);
      oscillator.frequency.linearRampToValueAtTime(frequency,time+.045);
      oscillator.frequency.linearRampToValueAtTime(frequency*.985,time+duration);
      filter.type = 'lowpass'; filter.frequency.value = 1500; filter.Q.value = .4;
      gain.gain.setValueAtTime(0,time);
      gain.gain.linearRampToValueAtTime(volume,time+.025);
      gain.gain.linearRampToValueAtTime(volume*.7,time+duration*.58);
      gain.gain.linearRampToValueAtTime(0,time+duration);
      oscillator.connect(filter).connect(gain).connect(voice.output);
      const part = {oscillator,cleanup() {
        if (!voice.voices.delete(part)) return;
        oscillator.disconnect(); filter.disconnect(); gain.disconnect();
      }};
      voice.voices.add(part);
      oscillator.onended = part.cleanup;
      oscillator.start(time); oscillator.stop(time+duration+.01);
    }

    function breathe() {
      if (voice.stopped || clayVoice !== voice || !active() || !clayWhistleAvailable() || performance.now() >= voice.deadline) {
        voice.stop(); return;
      }
      try {
        const at = context.currentTime+.008;
        tone(740,at,.19,.115);
        tone(622,at+.255,.23,.095);
        voice.repeatTimer = setTimeout(breathe,760);
      } catch { voice.stop(); }
    }

    function begin() {
      if (voice.stopped || clayVoice !== voice || !active() || !clayWhistleAvailable() || performance.now() >= voice.deadline) {
        voice.stop(); return;
      }
      try {
        voice.output = context.createGain(); voice.output.gain.value = voice.intensity;
        if (typeof context.createStereoPanner === 'function') {
          voice.panner = context.createStereoPanner(); voice.panner.pan.value = voice.pan;
          voice.output.connect(voice.panner).connect(effectsBus);
        } else voice.output.connect(effectsBus);
        voice.started = true; clayWhistleCount++; lastCue = 'clay-whistle'; effectCount++;
        ramp(musicBus,musicLevel(),.12);
        breathe();
      } catch { voice.stop(); }
    }
    if (active()) begin();
    else void resume().then(begin,voice.stop);
    return voice.stop;
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
      const target = event.target?.closest?.('.home-region,.home-map-label,.home-fair-options button,.home-city-paging button,.home-surprise,.home-theme-button,.home-editorial-stop,.home-editorial-locate,.home-editorial-back,[data-home-section],#caption-expand,#picture-caption-toggle,#picture-fit');
      if (target && !target.disabled) effect(target.id ? 'story' : 'select');
    },true);
    doc.addEventListener('change',event => { if (event.isTrusted && event.target.matches('.home-city-picker select')) effect('select'); },true);
  }
  function openSettings(button = document.activeElement) {
    stopClayWhistle();
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
      else { if (!prefs.effects) stopClayWhistle(); ramp(effectsBus,prefs.effects ? prefs.effectsVolume : 0); if (prefs.effects) effect('select'); }
      save(); render();
    });
    control('sound-'+type+'-volume').addEventListener('input',event => {
      prefs[type+'Volume'] = Number(event.target.value)/100;
      if (type === 'effects' && !prefs.effectsVolume) stopClayWhistle();
      ramp(type === 'music' ? musicBus : effectsBus,type === 'music' ? musicLevel() : prefs.effects ? prefs.effectsVolume : 0);
      if (type === 'music' && prefs.music) { if (prefs.musicVolume) void startMusic(); else stopMusic(); }
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
    if (document.hidden) { stopClayWhistle(); clearTimeout(suspendTimer); context?.suspend().catch(()=>{}); }
    else if (prefs.enabled && context) void resume();
  });
  window.addEventListener('pagehide',() => { stopClayWhistle(); clearTimeout(suspendTimer); context?.suspend().catch(()=>{}); });
  window.addEventListener('pageshow',event => { if (event.persisted && prefs.enabled && context) void resume(); });
  window.addEventListener('blur',stopClayWhistle);
  window.addEventListener('orientationchange',stopClayWhistle);
  window.screen?.orientation?.addEventListener('change',stopClayWhistle);
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
      const caption = doc.getElementById('picture-caption');
      if (caption && !caption.dataset.audioObserved) {
        caption.dataset.audioObserved = 'true';
        const updateReading = () => {
          const next = !caption.hidden && caption.classList.contains('expanded') && lastEntry?.kind !== 'root';
          if (reading === next) return;
          reading = next; ramp(musicBus,musicLevel(),reading ? .5 : .85); render();
        };
        new MutationObserver(updateReading).observe(caption,{attributes:true,attributeFilter:['class','hidden']});
      }
      wireDocument(doc); render();
    },
    navigate(entry,options={}) {
      if (!entry || entry.id === lastNode) return;
      stopClayWhistle();
      const previous = lastEntry; lastNode = entry.id; lastEntry = entry;
      if (reading) { reading = false; ramp(musicBus,musicLevel(),.85); render(); }
      if (previous) {
        const rank = {root:0,world:1,scene:2,object:3};
        const backward = options.direction === 'previous' || options.direction === -1 || entry.id === previous.parentId || rank[entry.kind] < rank[previous.kind];
        effect(backward ? 'back' : options.direction === 'next' ? 'next' : entry.kind);
      }
    },
    clayWhistle,
    openSettings,
    // Read-only diagnostic state for browser QA; no audio is started by inspection.
    readState() { return {...prefs,context:context?.state || 'uninitialized',playing:Boolean(musicSource && active() && prefs.music && prefs.musicVolume),loading:Boolean(loading),effectsPlayed:effectCount,node:lastNode,musicDuration:musicBuffer?.duration || 0,musicFormat,reading,musicGain:musicBus?.gain.value || 0,musicPosition:musicBuffer ? (musicOffset+(musicSource ? context.currentTime-musicStartedAt : 0)) % musicBuffer.duration : 0,lastCue,clayWhistleAvailable:clayWhistleAvailable(),clayWhistleActive:Boolean(clayVoice?.started && !clayVoice.stopped),clayWhistlePending:Boolean(clayVoice && !clayVoice.started && !clayVoice.stopped),clayWhistleVoices:clayVoice?.voices.size || 0,clayWhistleCount,clayWhistlePan:clayVoice?.pan || 0,clayWhistleIntensity:clayVoice?.intensity || 0,error}; }
  };
  render();
})();
