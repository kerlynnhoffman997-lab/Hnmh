(() => {
  'use strict';

  const STORAGE_KEY = 'hnmh-last-visit-v1';
  const VERSION = 1;
  const mounted = new WeakMap();
  const kinds = new Set(['world', 'scene', 'object']);

  function mount({container, catalog, onResume}) {
    if (!(container instanceof HTMLElement)) throw new TypeError('FairVisit.mount requires a container');
    if (typeof onResume !== 'function') throw new TypeError('FairVisit.mount requires onResume');
    if (mounted.has(container)) return mounted.get(container);

    function entry(id) {
      return typeof id === 'string' && Object.prototype.hasOwnProperty.call(catalog || {}, id)
        ? catalog[id] : null;
    }

    function resolve(nodeId) {
      const node = entry(nodeId);
      if (!node || !kinds.has(node.kind)) return null;
      const seen = new Set();
      let ancestor = node;
      while (ancestor && !seen.has(ancestor.id)) {
        seen.add(ancestor.id);
        if (ancestor.kind === 'world') return {node, world: ancestor};
        if (!kinds.has(ancestor.kind)) return null;
        ancestor = entry(ancestor.parentId);
      }
      return null;
    }

    function forgetStored() {
      try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* Local memory still clears. */ }
    }

    function readStored() {
      let raw;
      try { raw = window.localStorage.getItem(STORAGE_KEY); }
      catch { return null; }
      if (!raw) return null;
      try {
        const saved = JSON.parse(raw);
        if (saved?.version === VERSION) {
          const visit = resolve(saved.nodeId);
          if (visit) return visit;
        }
      } catch { /* Invalid records are never used for navigation. */ }
      forgetStored();
      return null;
    }

    const panel = document.createElement('section');
    panel.className = 'visitor-memory';
    panel.setAttribute('aria-label', '接着上次逛');
    panel.hidden = true;
    const copy = document.createElement('div');
    copy.className = 'visitor-memory-copy';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'visitor-memory-eyebrow';
    eyebrow.textContent = '接着上次逛';
    const place = document.createElement('p');
    place.className = 'visitor-memory-place';
    const title = document.createElement('strong');
    title.className = 'visitor-memory-title';
    copy.append(eyebrow, place, title);
    const actions = document.createElement('div');
    actions.className = 'visitor-memory-actions';
    const resume = document.createElement('button');
    resume.type = 'button';
    resume.className = 'visitor-memory-resume';
    resume.textContent = '继续看 →';
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'visitor-memory-clear';
    clear.textContent = '清除';
    clear.setAttribute('aria-label', '清除上次浏览记录');
    const status = document.createElement('p');
    status.className = 'visitor-memory-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    actions.append(resume, clear);
    panel.append(copy, actions, status);
    const guide = container.querySelector('.home-intro .home-reading');
    if (guide) guide.after(panel);
    else (container.querySelector('.home-intro') || container).append(panel);

    let visit = readStored();
    let entering = false;
    let pending = false;
    let revision = 0;

    function update() {
      panel.hidden = !visit;
      panel.setAttribute('aria-busy', String(pending));
      resume.disabled = clear.disabled = !visit || entering || pending;
      resume.textContent = pending ? '正在打开…' : '继续看 →';
      if (!visit) {
        place.textContent = title.textContent = status.textContent = '';
        resume.removeAttribute('aria-label');
        return;
      }
      const worldLabel = visit.world.label || '庙会';
      const city = visit.world.city || visit.node.city || '';
      place.textContent = [city, worldLabel].filter(Boolean).join(' · ');
      title.textContent = visit.node.kind === 'world' ? '会场全景' : (visit.node.label || '画中故事');
      resume.setAttribute('aria-label', `继续看${city ? city + '·' : ''}${worldLabel}的${title.textContent}`);
    }

    resume.addEventListener('click', async () => {
      if (!visit || entering || pending) return;
      const nodeId = visit.node.id;
      const requestRevision = revision;
      pending = true;
      status.textContent = '';
      update();
      try {
        const result = await onResume(nodeId);
        if (result === false) throw new Error('Resume did not complete');
      } catch {
        if (revision === requestRevision && visit?.node.id === nodeId) {
          status.textContent = '这次没能打开，记录还在，可以再试一次。';
        }
      } finally {
        pending = false;
        update();
      }
    });

    clear.addEventListener('click', () => {
      if (!visit || entering || pending) return;
      const shouldRestoreFocus = document.activeElement === clear;
      visit = null;
      revision += 1;
      forgetStored();
      update();
      if (shouldRestoreFocus) container.querySelector('.home-title')?.focus({preventScroll: true});
    });

    const api = Object.freeze({
      record(nodeId) {
        const next = resolve(nodeId);
        if (!next) return;
        if (visit?.node.id !== next.node.id) revision += 1;
        visit = next;
        status.textContent = '';
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify({version: VERSION, nodeId: next.node.id}));
        } catch { /* Browsing and in-memory continuation work without storage. */ }
        update();
      },
      setEntering(value) {
        entering = Boolean(value);
        update();
      }
    });
    mounted.set(container, api);
    update();
    return api;
  }

  window.FairVisit = Object.freeze({mount});
})();
