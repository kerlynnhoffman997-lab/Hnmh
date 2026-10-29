'use strict';
(() => {
  const active = new WeakMap();
  const running = new Set();
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => preference.matches;
  const ease = [.22, .68, .2, 1];

  // A shared, cancellable motion layer. Restore inline styles after each effect
  // so the camera, responsive layout and pointer states keep owning geometry.
  function animate(element, frames, options = {}) {
    active.get(element)?.cancel();
    if (!element || reduced()) return {finished:Promise.resolve(), cancel() {}};
    const before = Object.fromEntries(Object.keys(frames).map(key => [key, element.style[key]]));
    let control, settled = false, resolve;
    const finished = new Promise(done => { resolve = done; });
    function finish() {
      if (settled) return;
      settled = true;
      try { control?.cancel(); } catch { /* Detached animation. */ }
      if (active.get(element) === api) {
        for (const [key, value] of Object.entries(before)) element.style[key] = value;
        active.delete(element);
      }
      running.delete(api);
      resolve();
    }
    const api = {finished, cancel:finish};
    active.set(element, api);
    running.add(api);
    try {
      if (window.Motion?.animate) {
        control = window.Motion.animate([element], frames, {duration:.38, ease, ...options});
        control.finished.then(finish, finish);
      } else {
        control = element.animate(frames, {duration:(options.duration ?? .38)*1000,
          delay:(options.delay || 0)*1000, easing:'cubic-bezier(.22,.68,.2,1)', fill:'both'});
        control.finished.then(finish, finish);
      }
    } catch { finish(); }
    return api;
  }

  function reveal(element, options = {}) {
    return animate(element, {opacity:[0,1], transform:['translateY(12px)','translateY(0)']}, options);
  }

  // Decorative layers never own camera geometry or receive pointer/focus input.
  function transient(element, frames, options, scrollTarget) {
    const doc = element.ownerDocument, view = doc.defaultView;
    const control = animate(element,frames,options);
    const cancel = () => control.cancel();
    const hidden = () => { if (doc.hidden) cancel(); };
    view.addEventListener('resize',cancel,{once:true});
    view.addEventListener('pagehide',cancel,{once:true});
    doc.addEventListener('visibilitychange',hidden);
    scrollTarget?.addEventListener('scroll',cancel,{capture:true,passive:true});
    const finished = control.finished.finally(() => {
      element.remove();
      view.removeEventListener('resize',cancel);
      view.removeEventListener('pagehide',cancel);
      doc.removeEventListener('visibilitychange',hidden);
      scrollTarget?.removeEventListener('scroll',cancel,true);
    });
    return {finished,cancel};
  }

  function pulseAt(doc,x,y) {
    if (reduced() || doc.hidden || !Number.isFinite(x) || !Number.isFinite(y)) return;
    doc.querySelectorAll('.fair-touch-ring').forEach(node => node.remove());
    const ring = doc.createElement('span'); ring.className = 'fair-touch-ring';
    ring.setAttribute('aria-hidden','true');
    ring.style.left = x+'px'; ring.style.top = y+'px';
    doc.body.append(ring);
    return transient(ring,{opacity:[.9,0],transform:['scale(.4)','scale(1.8)']},{duration:.5},doc);
  }

  function enterPicture(source,target,frame) {
    const none = {shared:false,finished:Promise.resolve(),cancel() {}};
    if (reduced() || document.hidden || !source?.complete || !source.naturalWidth || !target || !frame) return none;
    const from = source.getBoundingClientRect(), stage = target.getBoundingClientRect(), iframe = frame.getBoundingClientRect();
    const visibleW = Math.max(0,Math.min(innerWidth,from.right)-Math.max(0,from.left));
    const visibleH = Math.max(0,Math.min(innerHeight,from.bottom)-Math.max(0,from.top));
    if (from.width < 60 || from.height < 40 || visibleW*visibleH < from.width*from.height*.8 || stage.width < 1 || stage.height < 1) return none;
    const ratio = source.naturalWidth/source.naturalHeight;
    const width = Math.min(stage.width,stage.height*ratio), height = width/ratio;
    const x = iframe.left+stage.left+(stage.width-width)/2, y = iframe.top+stage.top+(stage.height-height)/2;
    const image = source.cloneNode(); image.className = 'fair-entry-picture'; image.alt = '';
    image.removeAttribute('id'); image.setAttribute('aria-hidden','true');
    Object.assign(image.style,{left:from.left+'px',top:from.top+'px',width:from.width+'px',height:from.height+'px'});
    document.body.append(image);
    const control = transient(image,{
      transform:['translate(0,0) scale(1)',`translate(${x-from.left}px,${y-from.top}px) scale(${width/from.width})`],
      opacity:[1,1,1,1,1,0],borderRadius:['2px','0px']
    },{duration:.64},document);
    // Portrait reading lives inside the frame, so its scroll also ends a flight.
    const frameDoc = frame.contentDocument;
    frameDoc.addEventListener('scroll',control.cancel,{capture:true,passive:true});
    control.finished.finally(() => frameDoc.removeEventListener('scroll',control.cancel,true));
    return {shared:true,...control};
  }

  preference.addEventListener('change',() => { if (reduced()) for (const control of [...running]) control.cancel(); });
  document.addEventListener('visibilitychange',() => { if (document.hidden) for (const control of [...running]) control.cancel(); });

  window.FairMotion = Object.freeze({animate, reveal, reduced, pulseAt, enterPicture});
})();
