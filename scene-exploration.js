'use strict';
(() => {
  // A preview belongs to the hotspot under the pointer/focus, never to a gallery.
  function mount({frame,catalog,stories,onNavigate}) {
    const doc = frame.contentDocument, view = frame.contentWindow;
    const stage = doc.getElementById('main-image-container');
    const labels = doc.getElementById('labels-container');
    const preview = doc.createElement('aside'); preview.id = 'scene-preview';
    preview.hidden = true; preview.setAttribute('role','tooltip');
    preview.innerHTML = '<img alt="" hidden><div><small></small><strong></strong><p></p><span>点击画中热点，走近这一处 ↗</span></div>';
    doc.body.append(preview);
    let current = null, target = null, timer = null, leaveTimer = null, ticket = 0, navigating = false;
    const visited = new Set();
    const imageUrl = entry => entry?.kind === 'object' ? entry.exploration?.detailImage :
      entry?.kind === 'scene' ? `assets/scenes/${entry.caseId}-${String(entry.sceneNumber).padStart(2,'0')}.webp` : null;
    function identify(element) {
      const el = element?.closest?.('.label[id],[id^="dot-hit-"],[id^="line-hit-"],.anchor-dot[id],.label-line[id]');
      const id = el?.id.replace(/^(label-|dot-hit-|line-hit-|dot-|line-)/,'');
      return catalog[id] && imageUrl(catalog[id]) ? {element:el,id} : null;
    }
    function close() {
      clearTimeout(timer); clearTimeout(leaveTimer); ticket++;
      if (target) doc.getElementById('label-'+target.id)?.removeAttribute('aria-describedby');
      target = null; preview.hidden = true;
    }
    function place() {
      if (!target?.element.isConnected) { close(); return; }
      const r = target.element.getBoundingClientRect();
      const width = preview.offsetWidth, height = preview.offsetHeight;
      const topbar = doc.getElementById('lightbox-toolbar')?.getBoundingClientRect().bottom || 0;
      const floor = doc.getElementById('picture-navigation')?.getBoundingClientRect().top || view.innerHeight;
      let x = r.left + r.width / 2 - width / 2, y = r.top - height - 12;
      if (y < topbar + 8) y = r.bottom + 12;
      preview.style.left = Math.max(8,Math.min(view.innerWidth-width-8,x))+'px';
      preview.style.top = Math.max(topbar+8,Math.min(floor-height-8,y))+'px';
    }
    function show(found) {
      if (!found || found.id === current || navigating || frame.inert ||
          doc.body.classList.contains('fair-trail-detail-active') || doc.body.classList.contains('clay-closeup-active')) return;
      if (target?.id === found.id) return;
      close(); target = found;
      const request = ticket;
      timer = setTimeout(() => {
        if (request !== ticket || !target || frame.inert) return;
        const entry = catalog[found.id], img = preview.querySelector('img');
        preview.querySelector('small').textContent = (entry.kind === 'scene' ? '会场里的一处故事' : '走近人物与器物') + (visited.has(found.id) ? ' · 已看过' : '');
        preview.querySelector('strong').textContent = entry.label;
        const summary = stories[found.id]?.summary || '';
        preview.querySelector('p').textContent = summary.length > 72 ? summary.slice(0,71)+'…' : summary;
        img.hidden = true; img.removeAttribute('src');
        preview.hidden = false; place();
        doc.getElementById('label-'+found.id)?.setAttribute('aria-describedby',preview.id);
        window.FairMotion?.animate(preview,{opacity:[0,1],transform:['translateY(5px)','translateY(0)']},{duration:.18});
        if (navigator.connection?.saveData) return;
        const next = new Image(); next.src = imageUrl(entry);
        next.decode().then(() => {
          if (request !== ticket || preview.hidden) return;
          img.src = next.src; img.hidden = false; place();
        }).catch(() => {});
      },140);
    }
    function markVisited() {
      for (const label of labels.querySelectorAll('.label[id]')) {
        const id = label.id.slice(6);
        label.classList.toggle('scene-visited',visited.has(id));
        if (catalog[id]) label.setAttribute('aria-label',`走近${catalog[id].label}${visited.has(id)?'，本次已看过':''}`);
      }
    }
    new MutationObserver(() => { markVisited(); if (target && !target.element.isConnected) close(); }).observe(labels,{childList:true});
    preview.addEventListener('pointerenter',() => clearTimeout(leaveTimer));
    preview.addEventListener('pointerleave',() => { leaveTimer = setTimeout(close,180); });
    doc.addEventListener('pointerover',event => {
      if (event.pointerType !== 'mouse') return;
      const found = identify(event.target);
      if (found?.id === target?.id) clearTimeout(leaveTimer);
      show(found);
    },{passive:true});
    doc.addEventListener('pointerout',event => {
      if (target && identify(event.target)?.id === target.id && identify(event.relatedTarget)?.id !== target.id) leaveTimer = setTimeout(close,180);
    },{passive:true});
    doc.addEventListener('focusin',event => show(identify(event.target)));
    doc.addEventListener('focusout',event => { if (identify(event.target)) close(); });
    doc.addEventListener('keydown',event => {
      if (event.key === 'Escape' && !preview.hidden) { event.preventDefault(); event.stopImmediatePropagation(); close(); }
    },true);
    doc.addEventListener('pointerdown',close,{capture:true,passive:true});
    doc.addEventListener('scroll',close,{capture:true,passive:true});
    view.addEventListener('resize',close);
    doc.addEventListener('click',async event => {
      const found = identify(event.target), entry = found && catalog[found.id];
      if (!entry || found.id === current || entry.parentId !== current || frame.inert ||
          doc.body.classList.contains('picture-detail')) return;
      const label = doc.getElementById('label-'+found.id);
      if (label?.dataset.wasDragged === 'true') return;
      event.preventDefault(); event.stopImmediatePropagation();
      if (navigating) return;
      navigating = true; close();
      label?.setAttribute('aria-busy','true');
      const s = stage.getBoundingClientRect(), r = found.element.getBoundingClientRect();
      window.FairMotion?.pulseAt(doc,r.left+r.width/2,r.top+r.height/2);
      const origin = {x:Math.max(0,Math.min(1,(r.left+r.width/2-s.left)/s.width)),y:Math.max(0,Math.min(1,(r.top+r.height/2-s.top)/s.height))};
      try { await onNavigate(found.id,{origin}); }
      catch { /* The host supplies the failure message and preserves the current view. */ }
      finally { navigating = false; label?.removeAttribute('aria-busy'); }
    },true);
    return {
      update(id) { if (current !== id) { close(); current = id; } },
      record(id) { visited.add(id); markVisited(); },
      dismissPreview() { const open = !preview.hidden; if (open) close(); return open; },
      close
    };
  }
  window.FairSceneExplore = Object.freeze({mount});
})();
