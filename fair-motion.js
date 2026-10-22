'use strict';
(() => {
  const active = new WeakMap();
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      resolve();
    }
    const api = {finished, cancel:finish};
    active.set(element, api);
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

  window.FairMotion = Object.freeze({animate, reveal, reduced});
})();
