'use strict';
(() => {
  const mounted = new WeakMap();

  function mount({frame, catalog, onNavigate}) {
    if (!frame || frame.tagName !== 'IFRAME') throw new TypeError('FairJourney requires an iframe');
    if (typeof onNavigate !== 'function') throw new TypeError('FairJourney requires onNavigate');
    if (mounted.has(frame)) return mounted.get(frame);

    let doc = null, nav = null, scroller = null, list = null, live = null;
    let currentNodeId = null, pending = false, pathKey = '', scheduled = 0;
    const root = Object.values(catalog || {}).find(entry => entry.kind === 'root');
    const kinds = {root: '河南地图', world: '庙会', scene: '活动场景', object: '人物器物'};

    function getPath(nodeId) {
      const entries = [], seen = new Set();
      let entry = catalog?.[nodeId];
      while (entry && !seen.has(entry.id)) {
        entries.push(entry); seen.add(entry.id); entry = catalog[entry.parentId];
      }
      entries.reverse();
      if (entries.length && root && entries[0].kind !== 'root') entries.unshift(root);
      return entries;
    }

    function labelFor(entry) {
      if (entry.kind === 'root') return '河南地图';
      return entry.kind === 'world' ? [entry.city, entry.label].filter(Boolean).join(' · ') : entry.label;
    }

    function updateEdges() {
      if (!scroller || !nav) return;
      nav.classList.toggle('has-earlier-steps', scroller.scrollLeft > 3);
      nav.classList.toggle('has-later-steps', scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft > 3);
    }

    function showCurrent() {
      if (!doc || !nav || nav.hidden) return;
      if (scheduled) doc.defaultView.cancelAnimationFrame(scheduled);
      scheduled = doc.defaultView.requestAnimationFrame(() => {
        scheduled = 0;
        const current = list?.querySelector('[aria-current="page"]');
        if (!current || !scroller) return;
        const item = current.getBoundingClientRect(), viewport = scroller.getBoundingClientRect();
        if (item.right > viewport.right - 12) scroller.scrollLeft += item.right - viewport.right + 12;
        else if (item.left < viewport.left + 12) scroller.scrollLeft -= viewport.left - item.left + 12;
        updateEdges();
      });
    }

    async function navigate(nodeId) {
      if (pending || nodeId === currentNodeId || !catalog?.[nodeId] || frame.hidden || frame.inert) return;
      const restoreFocus = nav.contains(doc.activeElement);
      pending = true; render();
      live.textContent = `正在返回${labelFor(catalog[nodeId])}`;
      try {
        await onNavigate(nodeId);
      } catch {
        live.textContent = '暂未返回，请重试。';
      } finally {
        pending = false; render();
        if (restoreFocus && !nav.hidden) list.querySelector('[aria-current="page"]')?.focus({preventScroll: true});
      }
    }

    function render() {
      if (!nav) return;
      const path = getPath(currentNodeId);
      nav.hidden = path.length < 2;
      nav.setAttribute('aria-busy', String(pending));
      if (nav.hidden) return;
      nav.setAttribute('aria-label', `所在位置：${path.map(labelFor).join('，')}`);
      const key = path.map(entry => `${entry.id}:${labelFor(entry)}`).join('|');
      if (pathKey !== key) {
        const focusedId = nav.contains(doc.activeElement) ? doc.activeElement.dataset.nodeId : null;
        pathKey = key; list.replaceChildren();
        path.forEach((entry, index) => {
          const item = doc.createElement('li');
          item.className = 'journey-crumb'; item.dataset.kind = entry.kind;
          if (index) {
            const separator = doc.createElement('span');
            separator.className = 'journey-crumb-separator'; separator.textContent = '›';
            separator.setAttribute('aria-hidden', 'true'); item.append(separator);
          }
          const button = doc.createElement('button');
          button.type = 'button'; button.className = 'journey-crumb-button'; button.dataset.nodeId = entry.id;
          const label = labelFor(entry), description = entry.kind === 'root' ? label : `${kinds[entry.kind] || '场景'}：${label}`;
          button.title = description; button.setAttribute('aria-label', description);
          const text = doc.createElement('span'); text.className = 'journey-crumb-label'; text.textContent = label;
          button.append(text);
          if (index === path.length - 1) button.setAttribute('aria-current', 'page');
          button.addEventListener('click', () => { void navigate(entry.id); });
          item.append(button); list.append(item);
        });
        if (focusedId) {
          const restored = [...list.querySelectorAll('button')].find(button => button.dataset.nodeId === focusedId) || list.querySelector('[aria-current="page"]');
          restored?.focus({preventScroll: true});
        }
      }
      for (const button of list.querySelectorAll('button')) button.disabled = pending;
      showCurrent();
    }

    function attach() {
      const next = frame.contentDocument;
      if (!next?.body || next === doc || (next.baseURI === 'about:blank' && frame.getAttribute('src') !== 'about:blank')) return;
      if (doc) {
        doc.defaultView.removeEventListener('resize', showCurrent);
        if (scheduled) doc.defaultView.cancelAnimationFrame(scheduled);
      }
      nav?.remove(); doc = next; pathKey = ''; scheduled = 0;
      if (![...doc.querySelectorAll('link[rel="stylesheet"]')].some(link => new URL(link.href).pathname.endsWith('/journey-navigation.css'))) {
        const link = doc.createElement('link'); link.id = 'journey-navigation-styles'; link.rel = 'stylesheet';
        link.href = new URL('journey-navigation.css', doc.baseURI).href;
        link.addEventListener('load', () => doc.defaultView.dispatchEvent(new doc.defaultView.Event('resize')));
        doc.head.append(link);
      }
      nav = doc.createElement('nav'); nav.id = 'journey-navigation'; nav.hidden = true;
      scroller = doc.createElement('div'); scroller.className = 'journey-crumb-scroll';
      list = doc.createElement('ol'); list.className = 'journey-crumb-list'; scroller.append(list);
      live = doc.createElement('span'); live.className = 'journey-navigation-announcement';
      live.setAttribute('role', 'status'); live.setAttribute('aria-live', 'polite'); live.setAttribute('aria-atomic', 'true');
      nav.append(scroller, live); doc.body.append(nav);
      for (const type of ['pointerdown', 'mousedown', 'touchstart', 'click']) nav.addEventListener(type, event => event.stopPropagation());
      scroller.addEventListener('scroll', updateEdges, {passive: true});
      scroller.addEventListener('focusin', event => {
        const button = event.target.closest?.('.journey-crumb-button');
        if (!button) return;
        const bounds = button.getBoundingClientRect(), viewport = scroller.getBoundingClientRect();
        if (bounds.left < viewport.left + 12) scroller.scrollLeft -= viewport.left - bounds.left + 12;
        else if (bounds.right > viewport.right - 12) scroller.scrollLeft += bounds.right - viewport.right + 12;
        updateEdges();
      });
      doc.defaultView.addEventListener('resize', showCurrent);
      render();
    }

    const api = Object.freeze({update(nodeId) { currentNodeId = nodeId; attach(); render(); }});
    frame.addEventListener('load', attach); attach(); mounted.set(frame, api); return api;
  }

  window.FairJourney = Object.freeze({mount});
})();
