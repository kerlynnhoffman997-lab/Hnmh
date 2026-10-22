'use strict';
(() => {
  const mounted = new WeakMap();

  function mount({frame, catalog, onNavigate, onMap}) {
    if (!frame || frame.tagName !== 'IFRAME') throw new TypeError('FairContinuation requires an iframe');
    if (typeof onNavigate !== 'function' || typeof onMap !== 'function') throw new TypeError('FairContinuation requires navigation callbacks');
    if (mounted.has(frame)) return mounted.get(frame);

    let currentNodeId = null, section = null, primary = null, mapButton = null;
    let pending = false, mountedNode = null, mountedParent = null;

    function childrenOf(parent, kind) {
      return (parent?.childrenIds || []).map(id => catalog[id])
        .filter(entry => entry?.kind === kind && entry.parentId === parent.id);
    }

    function nextStep(nodeId) {
      const entry = catalog?.[nodeId];
      if (!entry || !['scene', 'object'].includes(entry.kind)) return null;
      const scene = entry.kind === 'scene' ? entry : catalog[entry.parentId];
      if (scene?.kind !== 'scene') return null;
      const world = catalog[scene.parentId];
      if (world?.kind !== 'world') return null;
      const objects = childrenOf(scene, 'object');
      if (entry.kind === 'scene' && objects.length) {
        return {target: objects[0], description: '细看画中人物与器物', kind: 'detail'};
      }
      if (entry.kind === 'object') {
        const index = objects.findIndex(object => object.id === entry.id);
        if (index >= 0 && objects[index + 1]) {
          return {target: objects[index + 1], description: '看看同一场景的另一件物件', kind: 'sibling'};
        }
      }
      const scenes = childrenOf(world, 'scene'), sceneIndex = scenes.findIndex(item => item.id === scene.id);
      if (sceneIndex >= 0 && scenes[sceneIndex + 1]) {
        return {target: scenes[sceneIndex + 1], description: '换一幅画，读会场的另一段故事', kind: 'scene'};
      }
      return {target: world, description: '回到会场，换条线索继续逛', kind: 'overview'};
    }

    function syncPending() {
      if (!section?.isConnected) return;
      section.setAttribute('aria-busy', String(pending));
      primary.disabled = pending; mapButton.disabled = pending;
    }

    async function activate(targetId, toMap) {
      if (pending || frame.inert || frame.hidden) return;
      const expectedNode = currentNodeId;
      pending = true; syncPending();
      let succeeded = false;
      try {
        if (toMap) await onMap();
        else await onNavigate(targetId);
        succeeded = true;
      } catch {
        // The host presents its existing retry message; the controls become usable again.
      } finally {
        pending = false; syncPending();
      }
      if (!toMap && succeeded && currentNodeId === targetId && currentNodeId !== expectedNode && !frame.inert && !frame.hidden) {
        const doc = frame.contentDocument, caption = doc?.getElementById('picture-caption');
        const heading = caption?.querySelector('h1');
        if (heading && !caption.hidden && heading.getClientRects().length) {
          heading.tabIndex = -1;
          // Keep the new picture at the top of the reading page while announcing its title.
          heading.focus({preventScroll: true});
        }
      }
    }

    function render() {
      const doc = frame.contentDocument, parent = doc?.getElementById('caption-more');
      const step = nextStep(currentNodeId);
      if (!parent || !step) {
        section?.remove(); section = null; mountedNode = null; mountedParent = null;
        return;
      }
      if (mountedNode === currentNodeId && mountedParent === parent && section?.isConnected) {
        syncPending(); return;
      }
      section?.remove();
      if (![...doc.querySelectorAll('link[rel="stylesheet"]')].some(link => new URL(link.href).pathname.endsWith('/story-continuation.css'))) {
        const link = doc.createElement('link'); link.rel = 'stylesheet'; link.id = 'story-continuation-styles';
        link.href = new URL('story-continuation.css', doc.baseURI).href; doc.head.append(link);
      }
      section = doc.createElement('section'); section.className = 'story-continuation';
      section.dataset.nodeId = currentNodeId; section.dataset.targetId = step.target.id; section.dataset.kind = step.kind;
      section.setAttribute('aria-labelledby', 'story-continuation-heading');
      const heading = doc.createElement('h2'); heading.id = 'story-continuation-heading'; heading.textContent = '接着逛';
      const description = doc.createElement('p'); description.className = 'story-continuation-description'; description.textContent = step.description;
      const actions = doc.createElement('div'); actions.className = 'story-continuation-actions';
      primary = doc.createElement('button'); primary.type = 'button'; primary.className = 'story-continuation-next';
      primary.dataset.targetId = step.target.id;
      primary.setAttribute('aria-label', `${step.description}：${step.target.label}`);
      const title = doc.createElement('span'); title.className = 'story-continuation-title'; title.textContent = step.target.label;
      const arrow = doc.createElement('span'); arrow.textContent = '→'; arrow.setAttribute('aria-hidden', 'true');
      primary.append(title, arrow);
      primary.addEventListener('click', () => { void activate(step.target.id, false); });
      mapButton = doc.createElement('button'); mapButton.type = 'button'; mapButton.className = 'story-continuation-map';
      mapButton.textContent = '回河南地图'; mapButton.addEventListener('click', () => { void activate(null, true); });
      actions.append(primary, mapButton); section.append(heading, description, actions);
      for (const type of ['pointerdown', 'mousedown', 'touchstart', 'click']) section.addEventListener(type, event => event.stopPropagation());
      parent.append(section); mountedNode = currentNodeId; mountedParent = parent; syncPending();
    }

    const api = Object.freeze({update(nodeId) { currentNodeId = nodeId; render(); }});
    frame.addEventListener('load', render); mounted.set(frame, api); return api;
  }

  window.FairContinuation = Object.freeze({mount});
})();
