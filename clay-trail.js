'use strict';
(() => {
  const WORLD = 'fair-hb-jx', STALL = 'scene-hb-jx-04', BIRD = 'object-hb-jx-04-clay-bird';
  const route = [WORLD, STALL, BIRD];
  const mounted = new WeakMap();
  const diagram = `<svg viewBox="0 0 440 148" role="img" aria-label="鸟形泥哨尾部小孔的位置示意，非实测结构图">
    <path class="clay-shape" d="M86 83L57 59Q104 53 140 75Q167 42 234 57Q258 65 276 75Q276 34 308 30Q336 27 344 55L366 66L341 73Q340 107 308 116Q244 141 165 122Q116 118 86 83Z"/>
    <path class="clay-wing" d="M163 84Q195 58 247 83Q227 117 180 110Z"/>
    <circle cx="319" cy="48" r="4" fill="currentColor"/>
    <path class="clay-flower" d="M204 83v24M192 95h24M195 86l18 18M195 104l18-18"/>
    <circle class="clay-hole" cx="91" cy="69" r="4"/><circle class="clay-hole" cx="107" cy="75" r="3.5"/>
    <path class="clay-leader" d="M99 62L115 24H198"/><text x="123" y="18">尾部小孔</text>
    <g class="clay-air" fill="none"><path d="M27 79Q45 71 63 80"/><path d="M20 91Q41 83 65 90"/><path d="M29 103Q48 96 67 100"/></g>
    <g class="clay-echo" fill="none"><path d="M380 59q13 12 0 24"/><path d="M394 51q22 20 0 40"/></g>
  </svg>`;

  function mount({frame, home, onNavigate, onStart, onSouvenir}) {
    if (mounted.has(frame)) return mounted.get(frame);
    const doc = frame.contentDocument;
    let nodeId = null, panel = null, marker = null, pending = false, holding = false;
    let stopAudio = null, stopTimer = null, clueTimer = null, pulseTarget = null;
    let physicalUntil = 0, pressedPointer = null;
    const visited = new Set();
    const create = (tag, className, text) => {
      const element = doc.createElement(tag); element.className = className;
      if (text) element.textContent = text;
      return element;
    };
    const button = (name, text) => { const b = create('button',name,text); b.type = 'button'; return b; };

    const start = document.createElement('button');
    start.type = 'button'; start.className = 'home-clay-trail';
    start.innerHTML = '<span class="home-clay-mark" aria-hidden="true">◌</span><span><small>循声赶会 · 浚县</small><strong>去找一只会叫的泥鸟</strong></span><span aria-hidden="true">↗</span>';
    home.querySelector('.home-reading').after(start);
    start.addEventListener('click', async () => {
      if (start.disabled) return;
      start.disabled = true;
      try { await onStart(); }
      finally { start.disabled = false; }
    });

    function cleanClue() {
      clearTimeout(clueTimer); pulseTarget?.classList.remove('clay-sound-target'); pulseTarget = null;
    }
    function stop() {
      if (holding) physicalUntil = performance.now() + 800;
      holding = false; clearTimeout(stopTimer);
      stopAudio?.(); stopAudio = null;
      panel?.classList.remove('is-breathing'); marker?.classList.remove('is-breathing');
      for (const b of doc.querySelectorAll('.clay-hold')) b.setAttribute('aria-pressed','false');
      if (pressedPointer) {
        const pointer = pressedPointer; pressedPointer = null;
        try { pointer.element.releasePointerCapture(pointer.id); } catch {}
      }
    }
    function status(text) { const target = panel?.querySelector('.clay-trail-status'); if (target) target.textContent = text; }
    function soundReady() { return Boolean(window.FairAudio?.readState().clayWhistleAvailable); }
    function refreshSound() {
      const settings = panel?.querySelector('.clay-sound-settings');
      if (settings) settings.textContent = soundReady() ? '声音设置' : '开启声音';
    }
    function revealDiagram(open = true) {
      const figure = panel?.querySelector('.clay-tail-diagram');
      if (!figure) return;
      figure.hidden = !open;
      const control = panel.querySelector('.clay-show-tail');
      control.setAttribute('aria-expanded',String(open));
      control.textContent = open ? '收起吹孔示意 ↑' : '看看吹孔 ↓';
    }
    function beginHold() {
      if (holding || pending || frame.inert || nodeId !== BIRD || document.hidden) return;
      stop(); cleanClue(); holding = true;
      revealDiagram();
      panel.classList.add('is-breathing'); marker?.classList.add('is-breathing');
      for (const b of doc.querySelectorAll('.clay-hold')) b.setAttribute('aria-pressed','true');
      stopAudio = window.FairAudio?.clayWhistle({pan:0}) || null;
      status(soundReady() ? '轻轻一声“咕咕”，名字也从声音里来。松开即停。' : '当前静音，也可以看见尾部小孔与声纹示意。');
      refreshSound(); stopTimer = setTimeout(stop,4000);
    }
    function bindHold(control) {
      control.setAttribute('aria-pressed','false');
      control.addEventListener('pointerdown', event => {
        if (event.button !== 0 || !event.isPrimary) return;
        event.preventDefault(); event.stopImmediatePropagation();
        physicalUntil = performance.now() + 800;
        beginHold();
        if (holding) {
          try { control.setPointerCapture(event.pointerId); pressedPointer = {element:control,id:event.pointerId}; } catch {}
        }
      });
      control.addEventListener('pointerup', event => { event.preventDefault(); physicalUntil = performance.now() + 800; stop(); });
      control.addEventListener('pointercancel',stop);
      control.addEventListener('lostpointercapture',stop);
      control.addEventListener('keydown', event => {
        if (![' ','Enter'].includes(event.key)) return;
        event.preventDefault(); event.stopPropagation();
        if (event.repeat) return;
        physicalUntil = performance.now() + 800; beginHold();
      });
      control.addEventListener('keyup', event => {
        if (![' ','Enter'].includes(event.key)) return;
        event.preventDefault(); event.stopPropagation(); physicalUntil = performance.now() + 800; stop();
      });
      control.addEventListener('blur',stop);
      control.addEventListener('contextmenu',event => event.preventDefault());
      control.addEventListener('click', event => {
        event.preventDefault(); event.stopPropagation();
        // Assistive technology can activate a button without a pointer or keydown.
        if (event.detail === 0 && performance.now() >= physicalUntil) { beginHold(); clearTimeout(stopTimer); stopTimer = setTimeout(stop,900); }
      });
    }
    function placeMarker() {
      if (!marker || nodeId !== BIRD) return;
      const stage = doc.getElementById('main-image-container'), image = doc.getElementById('object-picture');
      const width = stage.clientWidth, height = stage.clientHeight;
      const ratio = image?.naturalWidth ? image.naturalWidth / image.naturalHeight : 16/9;
      const w = Math.min(width,height*ratio), h = w/ratio;
      // The held red bird is visible at this point in the existing complete artwork.
      marker.style.left = ((width-w)/2+w*.50)+'px';
      marker.style.top = ((height-h)/2+h*.40)+'px';
    }
    function addMarker() {
      marker = button('clay-bird-touch clay-hold',''); marker.id = 'clay-bird-touch';
      marker.setAttribute('aria-label','按住画中泥鸟听模拟泥哨，松开停止');
      marker.innerHTML = '<span class="clay-bird-ring" aria-hidden="true"></span><span>按住听</span>';
      bindHold(marker);
      for (const type of ['mousedown','touchstart','pointerdown','click']) marker.addEventListener(type,event => event.stopPropagation());
      doc.getElementById('main-image-container').append(marker); placeMarker();
    }
    function cue(targetId) {
      stop(); cleanClue();
      pulseTarget = doc.getElementById('label-'+targetId);
      pulseTarget?.classList.add('clay-sound-target');
      const rect = pulseTarget?.getBoundingClientRect();
      const pan = rect ? Math.max(-.75,Math.min(.75,((rect.left+rect.width/2)/doc.defaultView.innerWidth)*2-1)) : 0;
      stopAudio = window.FairAudio?.clayWhistle({pan}) || null;
      status(soundReady() ? '循着这一声，找画中亮起的名字。' : '当前静音：画中亮起的名字，就是下一处线索。');
      refreshSound(); stopTimer = setTimeout(stop,1100); clueTimer = setTimeout(cleanClue,5000);
    }
    async function navigate(target) {
      if (pending || frame.inert) return;
      stop(); cleanClue(); pending = true; syncPending();
      try { await onNavigate(target,{direction:'next'}); }
      catch { status('这幅画还没展开，可以再试一次。'); }
      finally { pending = false; syncPending(); }
    }
    function syncPending() {
      if (!panel) return;
      panel.setAttribute('aria-busy',String(pending));
      panel.querySelectorAll('button').forEach(b => { b.disabled = pending; });
      const save = panel.querySelector('.clay-save');
      if (save) save.disabled = pending || !visited.has(BIRD);
      if (marker) marker.disabled = pending;
    }
    function render() {
      const parent = doc.getElementById('caption-reading');
      if (!parent) return;
      const step = route.indexOf(nodeId);
      doc.body.classList.toggle('clay-trail-active',step >= 0);
      if (step < 0) { panel?.remove(); panel = null; marker?.remove(); marker = null; return; }
      if (panel?.dataset.nodeId === nodeId && panel.isConnected) { syncPending(); return; }
      panel?.remove(); marker?.remove(); marker = null;
      panel = create('section','clay-trail'); panel.dataset.nodeId = nodeId;
      panel.setAttribute('aria-label','循声赶会：浚县泥咕咕');
      const kicker = create('div','clay-trail-kicker');
      kicker.append(create('span','','循声赶会 · 浚县'),create('span','clay-step',`${String(step+1).padStart(2,'0')} / 03`));
      const copy = create('p','clay-trail-copy',step === 0 ? '城墙下的热闹里，藏着一声小小的“咕咕”。找找泥塑摊在哪里。' : step === 1 ? '走到桌边，看见一排鸟兽。摊主掌心里的小鸟，还藏着一个会响的秘密。' : '从一场热闹，走到掌心这只泥鸟。按住画中的泥鸟，听一声，再看看它的尾部。');
      const actions = create('div','clay-trail-actions');
      if (step < 2) {
        const listen = button('clay-listen','听一声线索'); listen.addEventListener('click',() => cue(route[step+1]));
        const next = button('clay-next',step === 0 ? '找到泥咕咕摊 →' : '走近掌中的泥鸟 →');
        next.dataset.targetId = route[step+1]; next.addEventListener('click',() => { void navigate(route[step+1]); });
        actions.append(listen,next);
      } else {
        const hold = button('clay-hold clay-hold-control','按住听泥哨'); bindHold(hold);
        const tail = button('clay-show-tail','看看吹孔 ↓'); tail.setAttribute('aria-expanded','false'); tail.setAttribute('aria-controls','clay-tail-diagram');
        tail.addEventListener('click',() => revealDiagram(tail.getAttribute('aria-expanded') !== 'true'));
        const save = button('clay-save','留一张赶会小卷 ↗');
        save.addEventListener('click',() => {
          stop(); if (!save.disabled) void Promise.resolve(onSouvenir([...visited])).catch(() => status('小卷暂未展开，可以再试一次。'));
        });
        actions.append(hold,tail,save);
      }
      const state = create('p','clay-trail-status',''); state.setAttribute('role','status'); state.setAttribute('aria-live','polite');
      const meta = create('div','clay-trail-meta');
      const settings = button('clay-sound-settings','开启声音'); settings.addEventListener('click',() => { stop(); window.FairAudio?.openSettings(settings); });
      meta.append(settings,create('small','','声音为艺术模拟 · 静音也可探索'));
      panel.append(kicker,copy,actions,state);
      if (step === 2) {
        const figure = create('figure','clay-tail-diagram'); figure.id = 'clay-tail-diagram'; figure.hidden = true;
        figure.innerHTML = diagram;
        const explanation = create('figcaption','','泥咕咕尾部留有小孔，吹响时发出“咕咕”声，名字也由此而来。');
        explanation.append(create('small','','鸟形位置示意，非实测结构图。'));
        figure.append(explanation); panel.append(figure); addMarker();
      }
      panel.append(meta); parent.prepend(panel);
      for (const type of ['pointerdown','mousedown','touchstart','click']) panel.addEventListener(type,event => event.stopPropagation());
      refreshSound(); syncPending();
    }
    const onResize = () => { stop(); placeMarker(); };
    doc.defaultView.addEventListener('resize',onResize);
    new ResizeObserver(placeMarker).observe(doc.getElementById('main-image-container'));
    for (const view of [window,doc.defaultView]) {
      view.addEventListener('pointerup',stop); view.addEventListener('pointercancel',stop);
      view.addEventListener('blur',stop); view.addEventListener('pagehide',stop);
    }
    document.addEventListener('visibilitychange',() => { if (document.hidden) { stop(); cleanClue(); } });
    document.getElementById('fair-sound-dialog')?.addEventListener('close',refreshSound);
    const api = Object.freeze({
      update(next) { if (next !== nodeId) { stop(); cleanClue(); nodeId = next; } render(); },
      record(id) { if (route.includes(id)) { visited.add(id); syncPending(); } },
      begin() { stop(); cleanClue(); visited.clear(); syncPending(); },
      setEntering(value) { start.disabled = Boolean(value); },
      readState() { return {nodeId,holding,visited:[...visited]}; }
    });
    mounted.set(frame,api); return api;
  }
  window.FairClayTrail = Object.freeze({mount,readState(frame = document.getElementById('viewer')) { return mounted.get(frame)?.readState(); }});
})();
