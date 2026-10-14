'use strict';
(() => {
  const mounted = new WeakMap();

  function mount({frame, catalog, onNavigate}) {
    if (!frame || frame.tagName !== 'IFRAME') throw new TypeError('FairPictures requires an iframe');
    if (typeof onNavigate !== 'function') throw new TypeError('FairPictures requires onNavigate');
    if (mounted.has(frame)) return mounted.get(frame);

    const hostDocument = frame.ownerDocument;
    let frameDocument = null;
    let navigation = null;
    let title = null;
    let count = null;
    let dots = null;
    let previous = null;
    let next = null;
    let overview = null;
    let announcement = null;
    let currentNodeId = null;
    let currentSequence = [];
    let currentIndex = -1;
    let worldId = null;
    let pending = false;
    let sequenceKey = '';

    function findWorld(entry) {
      if (catalog?.[entry?.worldId]?.kind === 'world') return catalog[entry.worldId];
      const seen = new Set();
      while (entry && !seen.has(entry.id)) {
        if (entry.kind === 'world') return entry;
        seen.add(entry.id);
        entry = catalog?.[entry.parentId];
      }
      return null;
    }

    function getSequence(nodeId) {
      const entry = catalog?.[nodeId];
      const world = findWorld(entry);
      if (!world || !['world','scene','object'].includes(entry.kind)) return null;
      // Objects are picture details: start with their activity, then its objects.
      // Other pictures share the fair's panorama and its existing scene order.
      const parent = entry.kind === 'object' ? catalog[entry.parentId] : world;
      if (!parent || (entry.kind === 'object' && parent.kind !== 'scene')) return null;
      const kind = entry.kind === 'object' ? 'object' : 'scene';
      const ids = [...new Set([parent.id, ...(parent.childrenIds || [])
        .filter(id => catalog[id]?.kind === kind)])];
      const index = ids.indexOf(nodeId);
      return index < 0 ? null : {world, ids, index};
    }

    function button(className, label, symbol) {
      const result = frameDocument.createElement('button');
      result.type = 'button';
      result.className = className;
      result.setAttribute('aria-label', label);
      result.title = label;
      result.textContent = symbol;
      return result;
    }

    function render() {
      if (!navigation) return;
      const data = getSequence(currentNodeId);
      navigation.hidden = !data;
      if (!data) {
        currentSequence = [];
        currentIndex = -1;
        worldId = null;
        return;
      }
      currentSequence = data.ids;
      currentIndex = data.index;
      worldId = data.world.id;
      const entry = catalog[currentNodeId];
      title.textContent = entry.label;
      title.title = entry.label;
      count.textContent = `${currentIndex + 1} / ${currentSequence.length}`;
      navigation.setAttribute('aria-label', `${data.world.label}的图片翻页`);
      navigation.setAttribute('aria-busy', String(pending));
      navigation.dataset.nodeId = currentNodeId;
      overview.disabled = pending || currentNodeId === worldId;
      previous.disabled = pending || currentIndex <= 0;
      next.disabled = pending || currentIndex >= currentSequence.length - 1;

      const key = currentSequence.join('|');
      if (key !== sequenceKey) {
        sequenceKey = key;
        dots.replaceChildren();
        for (const [index, id] of currentSequence.entries()) {
          const dot = button('picture-navigation-dot', `第${index + 1}幅，共${currentSequence.length}幅：${catalog[id].label}`, '');
          dot.dataset.nodeId = id;
          dot.addEventListener('click', () => { void navigate(id); });
          dots.append(dot);
        }
      }
      for (const dot of dots.querySelectorAll('button')) {
        const selected = dot.dataset.nodeId === currentNodeId;
        dot.disabled = pending || selected;
        if (selected) dot.setAttribute('aria-current', 'step');
        else dot.removeAttribute('aria-current');
      }
    }

    async function navigate(nodeId) {
      if (pending || !catalog?.[nodeId] || nodeId === currentNodeId || frame.inert || frame.hidden) return;
      pending = true;
      render();
      announcement.textContent = `正在切换到${catalog[nodeId].label}`;
      try {
        // The host owns image readiness and transitions; do not race its camera.
        await onNavigate(nodeId);
      } catch {
        announcement.textContent = '图片暂未切换，请重试。';
      } finally {
        pending = false;
        render();
      }
    }

    function hasDialog(doc) {
      return [...doc.querySelectorAll('dialog[open], [role="dialog"][aria-modal="true"]')]
        .some(dialog => dialog.getClientRects().length && dialog.getAttribute('aria-hidden') !== 'true');
    }

    function onKeyDown(event) {
      if (!['ArrowLeft','ArrowRight'].includes(event.key) || event.defaultPrevented || event.repeat ||
          event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
          !navigation || navigation.hidden || pending || frame.hidden || frame.inert) return;
      if (hasDialog(hostDocument) || hasDialog(frameDocument)) return;
      const target = event.target;
      if (target?.closest?.('input,textarea,select,button,a,[role="button"],[contenteditable]:not([contenteditable="false"])')) return;
      const control = event.key === 'ArrowLeft' ? previous : next;
      if (control.disabled) return;
      event.preventDefault();
      void navigate(currentSequence[currentIndex + (event.key === 'ArrowLeft' ? -1 : 1)]);
    }

    function attach() {
      const doc = frame.contentDocument;
      if (!doc?.body || doc === frameDocument) return;
      if (doc.baseURI === 'about:blank' && frame.getAttribute('src') && frame.getAttribute('src') !== 'about:blank') return;
      frameDocument?.removeEventListener('keydown', onKeyDown);
      navigation?.remove();
      frameDocument = doc;
      if (!doc.getElementById('picture-navigation-styles')) {
        const link = doc.createElement('link');
        link.id = 'picture-navigation-styles';
        link.rel = 'stylesheet';
        link.href = new URL('picture-navigation.css', doc.baseURI).href;
        doc.head.append(link);
      }
      navigation = doc.createElement('nav');
      navigation.id = 'picture-navigation';
      navigation.hidden = true;
      overview = button('picture-navigation-overview', '回到这场庙会的全景', '回全景');
      previous = button('picture-navigation-step picture-navigation-previous', '上一幅图片', '←');
      next = button('picture-navigation-step picture-navigation-next', '下一幅图片', '→');
      const status = doc.createElement('div');
      status.className = 'picture-navigation-status';
      const heading = doc.createElement('div');
      heading.className = 'picture-navigation-heading';
      title = doc.createElement('span');
      title.className = 'picture-navigation-title';
      count = doc.createElement('span');
      count.className = 'picture-navigation-count';
      heading.append(title, count);
      dots = doc.createElement('div');
      dots.className = 'picture-navigation-dots';
      dots.setAttribute('role', 'group');
      dots.setAttribute('aria-label', '选择图片');
      status.append(heading, dots);
      announcement = doc.createElement('span');
      announcement.className = 'picture-navigation-announcement';
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      navigation.append(overview, previous, status, next, announcement);
      overview.addEventListener('click', () => { void navigate(worldId); });
      previous.addEventListener('click', () => { void navigate(currentSequence[currentIndex - 1]); });
      next.addEventListener('click', () => { void navigate(currentSequence[currentIndex + 1]); });
      // Keep pagination events out of the original image gesture handlers.
      for (const type of ['pointerdown','mousedown','touchstart','click']) navigation.addEventListener(type, event => event.stopPropagation());
      doc.body.append(navigation);
      doc.addEventListener('keydown', onKeyDown);
      sequenceKey = '';
      render();
    }

    const api = {
      update(nodeId) {
        currentNodeId = nodeId;
        attach();
        render();
      }
    };
    hostDocument.addEventListener('keydown', onKeyDown);
    frame.addEventListener('load', attach);
    attach();
    mounted.set(frame, api);
    return api;
  }

  window.FairPictures = Object.freeze({mount});
})();
