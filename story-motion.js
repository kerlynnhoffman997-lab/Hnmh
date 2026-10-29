'use strict';
(() => {
  const caption = document.getElementById('picture-caption');
  if (!caption || !('IntersectionObserver' in window)) return;
  const frame = window.frameElement, home = window.parent.document.getElementById('province-home');
  const observed = new Map(), shown = new WeakMap();
  const version = section => `${caption.dataset.nodeId || ''}|${section.textContent}`;
  const ready = () => !document.hidden && !frame?.inert && (!home || home.hidden);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < .15 || !ready() || !entry.target.isConnected ||
          entry.boundingClientRect.width < 1 || entry.boundingClientRect.height < 1) continue;
      const key = version(entry.target);
      observer.unobserve(entry.target);
      observed.delete(entry.target);
      if (shown.get(entry.target) === key) continue;
      shown.set(entry.target,key);
      if (window.parent.FairMotion?.reduced()) continue;
      window.parent.FairMotion?.animate(entry.target,{
        opacity:[.3,1],transform:['translateY(8px)','translateY(0)']
      },{duration:.34});
    }
  },{threshold:[.15]});
  let queued = false, rearm = false;
  function scan() {
    queued = false;
    for (const section of observed.keys()) {
      if (!section.isConnected) { observer.unobserve(section); observed.delete(section); }
    }
    for (const section of caption.querySelectorAll('.caption-summary,.caption-section,.clay-closeup-story,.fair-trail-spot-story')) {
      const key = version(section);
      if (shown.get(section) === key || (!rearm && observed.get(section) === key)) continue;
      observer.unobserve(section); observed.set(section,key); observer.observe(section);
    }
    rearm = false;
  }
  function schedule(force = false) {
    rearm ||= force;
    if (!queued) { queued = true; requestAnimationFrame(() => requestAnimationFrame(scan)); }
  }
  new MutationObserver(() => schedule()).observe(caption,{childList:true,subtree:true});
  const visibility = new MutationObserver(() => schedule(true));
  if (frame) visibility.observe(frame,{attributes:true,attributeFilter:['inert']});
  if (home) visibility.observe(home,{attributes:true,attributeFilter:['hidden']});
  document.addEventListener('visibilitychange',() => { if (!document.hidden) schedule(true); });
  scan();
})();
