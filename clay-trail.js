'use strict';
(() => {
  const WORLD = 'fair-hb-jx', STALL = 'scene-hb-jx-04', BIRD = 'object-hb-jx-04-clay-bird';
  const route = [WORLD, STALL, BIRD];
  const mounted = new WeakMap();
  const closeups = window.FairClayCloseupsData || [];
  const closeupId = item => `closeup:${item.id}`;

  function mount({frame, home, onNavigate, onStart, onSouvenir, onRestore, onListen}) {
    if (mounted.has(frame)) return mounted.get(frame);
    const doc = frame.contentDocument;
    let nodeId = null, panel = null, marker = null, pending = false, holding = false;
    let stopAudio = null, stopTimer = null, clueTimer = null, pulseTarget = null;
    let physicalUntil = 0, pressedPointer = null;
    let entering = false, activeIndex = -1, loadingIndex = -1, detailImage = null, detailState = 'closed';
    let request = 0, loadTimer = null, viewTimer = null, cancelLoad = null;
    const stage = doc.getElementById('main-image-container'), view = doc.defaultView;
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
      try { if(await onStart()!==false) await onListen?.(STALL,start); }
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
    function beginHold() {
      if (holding || pending || entering || loadingIndex >= 0 || frame.inert || nodeId !== BIRD || document.hidden ||
          (activeIndex >= 0 && !closeups[activeIndex]?.marker)) return;
      stop(); cleanClue(); holding = true;
      panel.classList.add('is-breathing'); marker?.classList.add('is-breathing');
      for (const b of doc.querySelectorAll('.clay-hold')) b.setAttribute('aria-pressed','true');
      stopAudio = window.FairAudio?.clayWhistle({pan:0}) || null;
      status(soundReady() ? '轻轻一声“咕咕”，名字也从声音里来。松开即停。' : '当前静音，可以选“看吹孔”，走近泥鸟尾部。');
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
      const image = detailImage || doc.getElementById('object-picture');
      const point = activeIndex >= 0 ? closeups[activeIndex]?.marker : {x: .5, y: .4};
      marker.hidden = !point;
      if (!point) return;
      const width = stage.clientWidth, height = stage.clientHeight;
      const ratio = image?.naturalWidth ? image.naturalWidth / image.naturalHeight : 16/9;
      const w = Math.min(width,height*ratio), h = w/ratio;
      marker.style.left = ((width-w)/2+w*point.x)+'px';
      marker.style.top = ((height-h)/2+h*point.y)+'px';
    }
    function addMarker() {
      marker = button('clay-bird-touch clay-hold',''); marker.id = 'clay-bird-touch';
      marker.setAttribute('aria-label','按住画中泥鸟听模拟泥哨，松开停止');
      marker.innerHTML = '<span class="clay-bird-ring" aria-hidden="true"></span><span>按住听</span>';
      bindHold(marker);
      for (const type of ['mousedown','touchstart','pointerdown','click']) marker.addEventListener(type,event => event.stopPropagation());
      stage.append(marker); placeMarker();
    }

    function cancelRequest() {
      request++; clearTimeout(loadTimer); cancelLoad?.(); cancelLoad = null; loadingIndex = -1;
    }
    function closeDetail(restore = false) {
      stop(); cancelRequest(); clearTimeout(viewTimer);
      detailImage?.remove(); detailImage = null; activeIndex = -1; detailState = 'closed';
      doc.body.classList.remove('clay-closeup-active');
      syncPending(); placeMarker();
      if (restore) {
        status('回到掌中的泥鸟，还可以继续看看另外两幅小场景。');
        const restoredNode = nodeId;
        void Promise.resolve().then(() => onRestore?.(restoredNode)).catch(() => {});
      }
    }
    function recordVisibleCloseup() {
      clearTimeout(viewTimer);
      if (!detailImage?.isConnected || activeIndex < 0 || nodeId !== BIRD) return;
      const r = detailImage.getBoundingClientRect(), style = view.getComputedStyle(detailImage);
      if (!entering && !frame.inert && !document.hidden && !doc.hidden && home.hidden &&
          !document.body.classList.contains('booting') && !doc.querySelector('.picture-transition') &&
          !document.querySelector('dialog[open]') &&
          !detailImage.hidden && detailImage.complete && detailImage.naturalWidth &&
          style.display !== 'none' && style.visibility !== 'hidden' && +style.opacity > .9 &&
          r.width > 0 && r.height > 0 && r.bottom > 0 && r.right > 0 && r.top < view.innerHeight && r.left < view.innerWidth) {
        visited.add(closeupId(closeups[activeIndex])); syncPending(); return;
      }
      viewTimer = setTimeout(recordVisibleCloseup,180);
    }
    async function openDetail(index) {
      const item = closeups[index];
      if (!item || pending || entering || frame.inert || nodeId !== BIRD) return;
      if (activeIndex === index && detailImage) { cancelRequest(); detailState = 'ready'; status(''); syncPending(); return; }
      stop(); cancelRequest(); const ticket = request;
      loadingIndex = index; detailState = 'loading';
      status(`正在展开“${item.title}”…`); syncPending();
      const image = create('img','clay-closeup-image'); image.alt = item.alt;
      image.draggable = false; image.decoding = 'async';
      try {
        await new Promise((resolve,reject) => {
          cancelLoad = () => reject(new Error('Cancelled'));
          loadTimer = setTimeout(() => reject(new Error('Timeout')),15000);
          image.onload = () => image.naturalWidth ? resolve() : reject(new Error('Empty image'));
          image.onerror = () => reject(new Error('Image unavailable'));
          image.src = new URL(item.image,document.baseURI).href;
        });
        if (image.decode) await image.decode();
        if (ticket !== request || nodeId !== BIRD) return;
        clearTimeout(loadTimer); cancelLoad = null; image.onload = null; image.onerror = null;
        detailImage?.remove(); image.id = 'clay-closeup-image'; detailImage = image; stage.append(image);
        activeIndex = index; loadingIndex = -1; detailState = 'ready';
        doc.body.classList.add('clay-closeup-active'); status(''); syncPending(); placeMarker();
        if (doc.body.classList.contains('reading-page')) {
          doc.getElementById('picture-reading-page')?.scrollTo({top:0,behavior:view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
        }
        view.requestAnimationFrame(recordVisibleCloseup);
      } catch {
        if (ticket !== request || nodeId !== BIRD) return;
        clearTimeout(loadTimer); cancelLoad = null; loadingIndex = -1; detailState = 'error';
        status(`“${item.title}”暂未载入，当前画面还在。点它的名字可以重试。`); syncPending();
      }
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
      const busy = pending || entering;
      panel.setAttribute('aria-busy',String(busy || loadingIndex >= 0));
      panel.dataset.detailState = detailState;
      panel.dataset.closeupId = closeups[activeIndex]?.id || '';
      panel.querySelectorAll('button').forEach(b => { b.disabled = busy; });
      const save = panel.querySelector('.clay-save');
      if (save) save.disabled = busy || loadingIndex >= 0 || !(visited.has(BIRD) || closeups.some(item => visited.has(closeupId(item))));
      if (marker) marker.disabled = busy || loadingIndex >= 0;
      const hold = panel.querySelector('.clay-hold-control');
      if (hold) { hold.hidden = activeIndex >= 0 && !closeups[activeIndex]?.marker; hold.disabled = busy || loadingIndex >= 0; }
      const back = panel.querySelector('.clay-back-picture');
      if (back) { back.hidden = detailState === 'closed'; back.textContent = loadingIndex >= 0 ? '取消，回到原画' : '回到原画'; }
      panel.querySelectorAll('.clay-closeup-tab').forEach((control,index) => {
        control.disabled = busy || index === loadingIndex;
        control.setAttribute('aria-pressed',String(index === activeIndex));
      });
      const previous = panel.querySelector('.clay-closeup-prev'), next = panel.querySelector('.clay-closeup-next');
      if (previous) { previous.hidden = activeIndex < 0; previous.disabled = busy || loadingIndex >= 0 || activeIndex === 0; }
      if (next) { next.hidden = activeIndex < 0; next.disabled = busy || loadingIndex >= 0 || activeIndex === closeups.length - 1; }
      const story = panel.querySelector('.clay-closeup-story');
      if (story) {
        story.hidden = activeIndex < 0;
        if (activeIndex >= 0) {
          story.querySelector('h2').textContent = closeups[activeIndex].title;
          story.querySelector('p').textContent = closeups[activeIndex].story;
          panel.querySelector('.clay-closeup-count').textContent = `${String(activeIndex + 1).padStart(2,'0')} / ${String(closeups.length).padStart(2,'0')}`;
        }
      }
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
      const copy = create('p','clay-trail-copy',step === 0 ? '城墙下的热闹里，藏着一声小小的“咕咕”。找找泥塑摊在哪里。' : step === 1 ? '走到桌边，看见一排鸟兽。摊主掌心里的小鸟，还藏着一个会响的秘密。' : '从一场热闹，走到掌心这只泥鸟。接着看素坯、上彩和尾部，读一只小鸟从泥土到“咕咕”的故事。');
      const actions = create('div','clay-trail-actions');
      if (step < 2) {
        const listen = button('clay-listen',step===0?'循声找泥塑摊':'循声找掌中泥鸟');
        listen.addEventListener('click',() => { stop();cleanClue();if(onListen)void onListen(route[step+1],listen);else cue(route[step+1]); });
        const next = button('clay-next',step === 0 ? '找到泥咕咕摊 →' : '走近掌中的泥鸟 →');
        next.dataset.targetId = route[step+1]; next.addEventListener('click',() => { void navigate(route[step+1]); });
        actions.append(listen,next);
      } else {
        const hold = button('clay-hold clay-hold-control','按住听泥哨'); bindHold(hold);
        const back = button('clay-back-picture','回到原画'); back.hidden = true;
        back.addEventListener('click',() => { closeDetail(true); panel?.querySelector('.clay-closeup-tab')?.focus({preventScroll:true}); });
        const save = button('clay-save','留一张赶会小卷 ↗');
        save.addEventListener('click',() => {
          stop(); if (!save.disabled) void Promise.resolve(onSouvenir([...visited])).catch(() => status('小卷暂未展开，可以再试一次。'));
        });
        actions.append(hold,back,save);
      }
      const state = create('p','clay-trail-status',''); state.setAttribute('role','status'); state.setAttribute('aria-live','polite');
      const meta = create('div','clay-trail-meta');
      const settings = button('clay-sound-settings','开启声音'); settings.addEventListener('click',() => { stop(); window.FairAudio?.openSettings(settings); });
      meta.append(settings,create('small','','声音为艺术模拟 · 静音也可探索'));
      panel.append(kicker,copy);
      if (step === 2) {
        const tabs = create('div','clay-closeup-tabs'); tabs.setAttribute('role','group'); tabs.setAttribute('aria-label','泥咕咕的三个小场景');
        closeups.forEach((item,index) => {
          const tab = button('clay-closeup-tab',`${String(index+1).padStart(2,'0')} ${item.label}`);
          tab.dataset.closeupIndex = String(index); tab.setAttribute('aria-controls','clay-closeup-story');
          tab.addEventListener('click',() => { void openDetail(index); });
          tab.addEventListener('keydown',event => {
            const direction = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : ['ArrowLeft','ArrowUp'].includes(event.key) ? -1 : 0;
            if (!direction) return;
            event.preventDefault(); event.stopPropagation();
            const nextIndex = (index + direction + closeups.length) % closeups.length;
            tabs.children[nextIndex]?.focus({preventScroll:true}); void openDetail(nextIndex);
          });
          tabs.append(tab);
        });
        const story = create('section','clay-closeup-story'); story.id = 'clay-closeup-story'; story.hidden = true;
        story.setAttribute('aria-live','polite'); story.setAttribute('aria-atomic','true');
        story.append(create('h2',''),create('p',''));
        const paging = create('div','clay-closeup-paging');
        const previous = button('clay-closeup-prev','← 上一幅'), next = button('clay-closeup-next','下一幅 →');
        previous.addEventListener('click',() => { void openDetail(activeIndex-1); });
        next.addEventListener('click',() => { void openDetail(activeIndex+1); });
        paging.append(previous,create('span','clay-closeup-count'),next);
        panel.append(tabs,story,paging); addMarker();
      }
      panel.append(actions,state);
      if (step === 2) panel.append(create('small','clay-closeup-meta','AI 概念插画 · 手势、构图与陈设为艺术补全'));
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
    document.addEventListener('visibilitychange',() => { if (document.hidden) { stop(); cleanClue(); } else recordVisibleCloseup(); });
    document.getElementById('fair-sound-dialog')?.addEventListener('close',refreshSound);
    const api = Object.freeze({
      update(next) { if (next !== nodeId) { stop(); cleanClue(); closeDetail(); nodeId = next; } render(); },
      record(id) { if (route.includes(id) && id === nodeId && !(id === BIRD && detailImage)) { visited.add(id); syncPending(); } },
      begin() { stop(); cleanClue(); closeDetail(); visited.clear(); syncPending(); },
      setEntering(value) { entering = Boolean(value); start.disabled = entering; if (entering) stop(); syncPending(); },
      readState() { return {nodeId,holding,visited:[...visited],activeIndex,loadingIndex,detailState}; }
    });
    mounted.set(frame,api); return api;
  }
  window.FairClayTrail = Object.freeze({mount,readState(frame = document.getElementById('viewer')) { return mounted.get(frame)?.readState(); }});
})();
