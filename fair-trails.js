'use strict';
(() => {
  const mounted = new WeakMap();
  const clayIds = new Set(['fair-hb-jx', 'scene-hb-jx-04', 'object-hb-jx-04-clay-bird']);
  const detailId = trail => `detail:${trail.id}`;
  const clamp = value => Math.max(.02, Math.min(.98, value > 1 ? value / 100 : value));

  function mount({frame, home, catalog, onNavigate, onStart, onSouvenir, onRestore} = {}) {
    if (mounted.has(frame)) return mounted.get(frame);
    const doc = frame?.contentDocument, view = doc?.defaultView;
    const stage = doc?.getElementById('main-image-container');
    if (!doc || !stage) throw new TypeError('FairTrails requires the ready scene frame');
    const trails = (window.FairTrailsData || []).filter(trail => trail?.id &&
      [trail.worldId, trail.sceneId, trail.objectId].every(id => id && !clayIds.has(id) && (!catalog || catalog[id])));
    const byNode = new Map(), byWorld = new Map(), visited = new Map();
    for (const trail of trails) {
      for (const id of [trail.worldId, trail.sceneId, trail.objectId]) byNode.set(id, trail);
      byWorld.set(trail.worldId, trail); visited.set(trail.id, new Set());
    }
    let nodeId = null, trail = null, panel = null, pending = false, entering = false;
    let detailImage = null, detailState = 'closed', detailRequest = 0, activeSpot = -1;
    let cueTarget = null, cueTimer = null, viewTimer = null, imageTimer = null, cancelImage = null;
    const markers = [];
    const make = (tag, name, text) => {
      const el = doc.createElement(tag); el.className = name;
      if (text) el.textContent = text;
      return el;
    };
    const button = (name, text) => { const el = make('button', name, text); el.type = 'button'; return el; };
    const route = item => [item.worldId, item.sceneId, item.objectId];
    const status = text => { const el = panel?.querySelector('.fair-trail-status'); if (el) el.textContent = text; };
    const validSpots = () => (trail?.spots || []).filter(spot => spot.label && spot.text && Number.isFinite(+spot.x) && Number.isFinite(+spot.y)).slice(0, 3);

    function clearCue() {
      clearTimeout(cueTimer); cueTarget?.classList.remove('fair-trail-clue-target'); cueTarget = null;
    }

    function markVisited(id, item = trail) {
      if (!item) return;
      const allowed = [...route(item), detailId(item)];
      if (allowed.includes(id)) visited.get(item.id)?.add(id);
      syncControls();
    }

    function isDetailVisible() {
      if (!trail || nodeId !== trail.objectId || detailState !== 'ready' || !detailImage?.isConnected ||
          detailImage.hidden || !detailImage.complete || !detailImage.naturalWidth || entering || frame.inert ||
          document.hidden || doc.hidden || document.body.classList.contains('booting') ||
          (home && !home.hidden) || doc.querySelector('.picture-transition')) return false;
      const style = view.getComputedStyle(detailImage), r = detailImage.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && +style.opacity > .9 &&
        r.width > 0 && r.height > 0 && r.right > 0 && r.bottom > 0 && r.left < view.innerWidth && r.top < view.innerHeight;
    }

    function recordDetailWhenVisible(ticket = detailRequest) {
      clearTimeout(viewTimer);
      if (ticket !== detailRequest || detailState !== 'ready') return;
      if (isDetailVisible()) { markVisited(detailId(trail)); return; }
      // A successfully decoded image can still be behind an entry transition,
      // in a background tab, or above the current reading-page scroll position.
      viewTimer = setTimeout(() => recordDetailWhenVisible(ticket), 180);
    }

    function closeDetail({announce = false} = {}) {
      detailRequest++; clearTimeout(imageTimer); clearTimeout(viewTimer);
      cancelImage?.(); cancelImage = null;
      detailState = 'closed'; activeSpot = -1;
      detailImage?.remove(); detailImage = null;
      for (const marker of markers.splice(0)) marker.remove();
      doc.body.classList.remove('fair-trail-detail-active');
      const group = panel?.querySelector('.fair-trail-spot-controls'); if (group) group.hidden = true;
      const story = panel?.querySelector('.fair-trail-spot-story'); if (story) story.hidden = true;
      syncControls();
      if (announce) status('已回到这件器物的原画，可以继续读故事。');
    }

    function restoreOriginalReading(restoredNode) {
      void Promise.resolve().then(() => {
        if (typeof onRestore === 'function') return onRestore(restoredNode);
      }).then(() => {
        if (nodeId === restoredNode) view.FairReading?.restore();
      }).catch(() => {});
    }

    function syncControls() {
      if (!panel) return;
      const copy = panel.querySelector('.fair-trail-copy');
      const compact = text => (text || '').replace(/\s+/g, '');
      const copyText = compact(copy?.textContent);
      const summaryText = compact(doc.querySelector('#caption-reading > .caption-summary')?.textContent);
      // Keep one copy of an identical introduction. In a close-up the summary
      // is replaced, so its route introduction must be available again.
      if (copy) copy.hidden = !doc.body.classList.contains('fair-trail-detail-active') && Boolean(copyText && copyText === summaryText);
      const busy = pending || entering;
      panel.setAttribute('aria-busy', String(busy || detailState === 'loading'));
      for (const el of panel.querySelectorAll('button')) el.disabled = busy;
      for (const el of markers) el.disabled = busy;
      const open = panel.querySelector('.fair-trail-open-detail');
      if (open) {
        open.hidden = detailState === 'ready';
        open.disabled = busy || detailState === 'loading' || !trail?.image;
        open.textContent = detailState === 'loading' ? '近景正在展开…' : detailState === 'error' ? '再展开一次近景 →' : '走近看细节 →';
        open.setAttribute('aria-expanded', String(detailState === 'ready'));
      }
      const back = panel.querySelector('.fair-trail-back-picture');
      if (back) { back.hidden = detailState === 'closed'; back.textContent = detailState === 'loading' ? '取消，留在原画' : '回到原画'; }
      const save = panel.querySelector('.fair-trail-save');
      if (save) save.disabled = busy || !onSouvenir || !visited.get(trail?.id)?.size || detailState === 'loading';
      panel.dataset.detailState = detailState;
    }

    function clue() {
      if (!trail || pending || entering) return;
      clearCue();
      const step = route(trail).indexOf(nodeId), next = route(trail)[step + 1];
      if (!next) return;
      cueTarget = doc.getElementById('label-' + next);
      if (cueTarget) {
        cueTarget.classList.add('fair-trail-clue-target');
        status('找找画中亮起的名字；也可以从这里继续走近。');
        cueTimer = setTimeout(clearCue, 5000);
      } else status('这处线索可以从下方入口展开，接着走近看。');
    }

    async function navigate(target) {
      if (pending || entering || frame.inert || typeof onNavigate !== 'function') return;
      clearCue(); pending = true; syncControls();
      try { await onNavigate(target, {direction: 'next'}); }
      catch { status('下一幅画还没展开，可以再试一次。'); }
      finally { pending = false; syncControls(); }
    }

    function positionMarkers() {
      if (detailState !== 'ready' || !detailImage?.naturalWidth) return;
      const ratio = detailImage.naturalWidth / detailImage.naturalHeight;
      const w = Math.min(stage.clientWidth, stage.clientHeight * ratio), h = w / ratio;
      const x = (stage.clientWidth - w) / 2, y = (stage.clientHeight - h) / 2;
      const spots = validSpots();
      markers.forEach((marker, index) => {
        marker.style.left = `${x + w * clamp(+spots[index].x)}px`;
        marker.style.top = `${y + h * clamp(+spots[index].y)}px`;
      });
    }

    function selectSpot(index) {
      if (detailState !== 'ready' || pending || entering) return;
      const spot = validSpots()[index], story = panel?.querySelector('.fair-trail-spot-story');
      if (!spot || !story) return;
      activeSpot = index;
      for (const el of [...markers, ...panel.querySelectorAll('.fair-trail-spot-tab')]) {
        el.setAttribute('aria-pressed', String(+el.dataset.spotIndex === index));
      }
      story.querySelector('h2').textContent = spot.label;
      story.querySelector('p').textContent = spot.text;
      story.hidden = false;
      status('');
      // Keep focus on the chosen object; the accompanying story changes in place.
      const container = doc.getElementById(doc.body.classList.contains('reading-page') ? 'picture-reading-page' : 'caption-reading');
      if (container) {
        const frameRect = container.getBoundingClientRect(), storyRect = story.getBoundingClientRect();
        const top = Math.max(0, frameRect.top) + 10, bottom = Math.min(view.innerHeight, frameRect.bottom) - 10;
        let offset = 0;
        if (storyRect.height > bottom - top || storyRect.top < top) offset = storyRect.top - top;
        else if (storyRect.bottom > bottom) offset = storyRect.bottom - bottom;
        if (bottom > top && Math.abs(offset) > 1) {
          // Scroll only the active reading container, never the image stage or
          // its ancestors. Already readable stories leave the view untouched.
          container.scrollTo({top: Math.max(0, container.scrollTop + offset),
            behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
        }
      }
    }

    function bindSpot(el, index, peers) {
      el.dataset.spotIndex = String(index); el.setAttribute('aria-pressed', 'false');
      el.setAttribute('aria-controls', 'fair-trail-spot-story');
      el.addEventListener('click', event => { event.stopPropagation(); selectSpot(index); });
      el.addEventListener('keydown', event => {
        const step = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 0;
        if (!step) return;
        event.preventDefault(); event.stopPropagation();
        const controls = peers(), next = (index + step + controls.length) % controls.length;
        controls[next]?.focus({preventScroll: true}); selectSpot(next);
      });
      for (const type of ['pointerdown', 'mousedown', 'touchstart']) el.addEventListener(type, event => event.stopPropagation());
    }

    function addMarkers() {
      const group = panel.querySelector('.fair-trail-spot-controls'); group.replaceChildren();
      validSpots().forEach((spot, index) => {
        const marker = button('fair-trail-spot-marker', String(index + 1));
        marker.setAttribute('aria-label', `看细节 ${index + 1}：${spot.label}`);
        marker.title = spot.label;
        bindSpot(marker, index, () => markers); markers.push(marker); stage.append(marker);
        const tab = button('fair-trail-spot-tab', `${String(index + 1).padStart(2, '0')} ${spot.label}`);
        bindSpot(tab, index, () => [...group.querySelectorAll('button')]); group.append(tab);
      });
      group.hidden = !markers.length; positionMarkers();
    }

    async function openDetail() {
      if (!trail?.image || nodeId !== trail.objectId || pending || entering || frame.inert || detailState === 'loading') return;
      if (detailState === 'closed') view.FairReading?.capture();
      closeDetail();
      const ticket = ++detailRequest, item = trail;
      const launchControl = panel?.querySelector('.fair-trail-open-detail');
      detailState = 'loading'; status('正在展开一幅新的器物近景。'); syncControls();
      const image = make('img', 'fair-trail-detail-image'); image.id = 'fair-trail-detail-image';
      image.alt = item.alt || `${item.title} · AI 概念插画`;
      image.decoding = 'async'; image.draggable = false; image.hidden = true;
      detailImage = image; stage.append(image);
      try {
        await new Promise((resolve, reject) => {
          cancelImage = () => reject(new Error('Detail image cancelled'));
          imageTimer = setTimeout(() => reject(new Error('Detail image timeout')), 15000);
          image.onload = () => image.naturalWidth ? resolve() : reject(new Error('Empty detail image'));
          image.onerror = () => reject(new Error('Detail image unavailable'));
          image.src = new URL(item.image, document.baseURI).href;
        });
        if (typeof image.decode === 'function') await image.decode();
        if (ticket !== detailRequest || trail !== item || nodeId !== item.objectId) return;
        clearTimeout(imageTimer); cancelImage = null; image.onload = null; image.onerror = null;
        image.hidden = false; detailState = 'ready'; doc.body.classList.add('fair-trail-detail-active');
        const restoreKeyboardFocus = doc.activeElement === launchControl;
        addMarkers(); syncControls();
        const readingPage = doc.body.classList.contains('reading-page');
        if (restoreKeyboardFocus) {
          const firstControl = readingPage ? markers[0] : panel.querySelector('.fair-trail-spot-tab');
          firstControl?.focus({preventScroll: true});
        }
        if (readingPage) {
          // Only this explicit open action returns to the new artwork. Normal
          // rerenders and story selection preserve the visitor's reading place.
          const page = doc.getElementById('picture-reading-page');
          page?.scrollTo({top: 0, behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
        }
        status(markers.length ? '点画中的圆点，读一处细节。' : '这幅近景已展开，可以留在赶会小卷里。');
        view.requestAnimationFrame(() => recordDetailWhenVisible(ticket));
      } catch {
        if (ticket !== detailRequest || trail !== item || nodeId !== item.objectId) return;
        clearTimeout(imageTimer); cancelImage = null; image.remove(); detailImage = null; detailState = 'error';
        status('近景暂未载入，原画还在这里。可以再试一次。'); syncControls();
      }
    }

    function render() {
      const parent = doc.getElementById('caption-reading');
      if (!parent) return;
      doc.body.classList.toggle('fair-trail-active', Boolean(trail));
      if (!trail) { panel?.remove(); panel = null; return; }
      if (panel?.dataset.nodeId === nodeId && panel.isConnected) { syncControls(); return; }
      panel?.remove();
      const step = route(trail).indexOf(nodeId);
      panel = make('section', 'fair-trail'); panel.dataset.nodeId = nodeId; panel.dataset.trailId = trail.id;
      panel.setAttribute('aria-label', `${trail.city} · ${trail.title}`);
      const kicker = make('div', 'fair-trail-kicker');
      kicker.append(make('span', '', `入画识物 · ${trail.city}`), make('span', 'fair-trail-step', `${String(step + 1).padStart(2, '0')} / 03`));
      const copy = make('p', 'fair-trail-copy', [trail.introWorld, trail.introScene, trail.introObject][step]);
      const actions = make('div', 'fair-trail-actions');
      if (step < 2) {
        const hint = button('fair-trail-clue', '找一处线索'); hint.addEventListener('click', clue);
        const nextId = route(trail)[step + 1];
        const next = button('fair-trail-next', step === 0 ? '走进这一处 →' : '走近看人与物 →');
        next.dataset.targetId = nextId; next.setAttribute('aria-label', `走近${catalog?.[nextId]?.label || trail.title}`);
        next.addEventListener('click', () => { void navigate(nextId); }); actions.append(hint, next);
      } else {
        const open = button('fair-trail-open-detail', '走近看细节 →'); open.setAttribute('aria-controls', 'fair-trail-detail-image');
        open.addEventListener('click', () => { void openDetail(); });
        const back = button('fair-trail-back-picture', '回到原画'); back.hidden = true;
        back.addEventListener('click', () => {
          const restoredNode = nodeId;
          closeDetail({announce: true}); open.focus({preventScroll: true});
          restoreOriginalReading(restoredNode);
        });
        const save = button('fair-trail-save', '留一张赶会小卷 ↗');
        save.addEventListener('click', () => {
          if (save.disabled || !onSouvenir) return;
          const stops = [...route(trail), detailId(trail)].filter(id => visited.get(trail.id).has(id));
          void Promise.resolve(onSouvenir({trailId: trail.id, stops})).catch(() => status('小卷暂未展开，可以再试一次。'));
        }); actions.append(open, back, save);
      }
      const state = make('p', 'fair-trail-status'); state.setAttribute('role', 'status'); state.setAttribute('aria-live', 'polite');
      panel.append(kicker, copy, actions, state);
      if (step === 2) {
        const group = make('div', 'fair-trail-spot-controls'); group.setAttribute('role', 'group');
        group.setAttribute('aria-label', '近景里的三个细节'); group.hidden = true;
        const story = make('section', 'fair-trail-spot-story'); story.id = 'fair-trail-spot-story'; story.hidden = true;
        story.setAttribute('aria-live', 'polite'); story.setAttribute('aria-atomic', 'true');
        story.append(make('h2', ''), make('p', ''));
        const meta = make('small', 'fair-trail-meta', 'AI 概念插画 · 细节与构图为艺术转译');
        panel.append(group, story, meta);
      }
      for (const type of ['pointerdown', 'mousedown', 'touchstart', 'click']) panel.addEventListener(type, event => event.stopPropagation());
      parent.prepend(panel); syncControls();
    }

    view.addEventListener('resize', positionMarkers);
    if (typeof view.ResizeObserver === 'function') new view.ResizeObserver(positionMarkers).observe(stage);
    for (const currentDoc of [document, doc]) currentDoc.addEventListener('visibilitychange', () => {
      if (currentDoc.hidden) clearCue();
      else if (detailState === 'ready') recordDetailWhenVisible();
    });
    const api = Object.freeze({
      update(next) {
        if (nodeId !== next) {
          clearCue(); closeDetail(); nodeId = next; trail = byNode.get(next) || null;
        }
        render();
      },
      record(id) {
        // Host calls this only after its successful, visible picture check.
        const item = byNode.get(id);
        // A late original-image load beneath the new detail must not create a visit.
        if (item && id === nodeId && !(id === item.objectId && detailState === 'ready')) markVisited(id, item);
      },
      begin(worldId) {
        const item = byWorld.get(worldId);
        clearCue(); closeDetail();
        if (item) visited.get(item.id).clear();
        syncControls();
      },
      setEntering(value) { entering = Boolean(value); if (entering) clearCue(); syncControls(); },
      dismissDetail() {
        if (detailState === 'closed') return false;
        const restoredNode = nodeId;
        closeDetail({announce: true});
        panel?.querySelector('.fair-trail-open-detail')?.focus({preventScroll: true});
        restoreOriginalReading(restoredNode);
        return true;
      },
      handles(id) { return byNode.has(id); },
      readState() {
        return {nodeId, trailId: trail?.id || null, detailState, activeSpot, pending, entering,
          visited: trail ? [...visited.get(trail.id)] : [],
          trails: Object.fromEntries([...visited].map(([id, stops]) => [id, [...stops]]))};
      }
    });
    mounted.set(frame, api); return api;
  }
  window.FairTrails = Object.freeze({mount, readState(frame = document.getElementById('viewer')) { return mounted.get(frame)?.readState(); }});
})();
