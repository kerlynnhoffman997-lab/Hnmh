'use strict';
(() => {
  document.body.classList.add('adaptive-layout');
  // Set the camera's actual viewport geometry before the renderer initializes.
  // Resizes are observed by the original renderer; no extra camera reset on pan.
  function layout() {
    const w = innerWidth, h = innerHeight;
    const style = getComputedStyle(document.documentElement);
    const top = parseFloat(style.getPropertyValue('--fair-toolbar-height')) || 64;
    const bottom = parseFloat(style.getPropertyValue('--fair-navigation-height')) || 56;
    const available = Math.max(1,h - top - bottom);
    const fit = document.body.classList.contains('picture-fit');
    const sw = fit ? Math.min(w, available * 16 / 9) : w;
    const sh = fit ? sw * 9 / 16 : available;
    const vars = {'stage-x':(w-sw)/2,'stage-y':top+(available-sh)/2,'stage-w':sw,'stage-h':sh};
    for (const [key,value] of Object.entries(vars)) document.documentElement.style.setProperty('--'+key, value+'px');
    document.body.dataset.layout = 'picture';
  }
  layout();
  addEventListener('resize', layout);
  addEventListener('orientationchange', () => requestAnimationFrame(layout));
  const stage = document.getElementById('main-image-container');
  const caption = document.createElement('aside'); caption.id = 'picture-caption';
  caption.innerHTML = '<small></small><h1></h1><div id="caption-reading" tabindex="0" aria-label="画中故事"><p class="caption-summary"></p><div id="caption-more" hidden></div></div><button id="caption-expand" type="button" aria-expanded="false" aria-controls="caption-more">继续读故事 ↓</button>';
  caption.setAttribute('aria-live','polite');
  const controls = document.createElement('div'); controls.id = 'picture-tools';
  controls.innerHTML = '<button type="button" id="picture-fit" aria-pressed="false">缩小看</button><button type="button" id="picture-caption-toggle" aria-pressed="true">故事</button>';
  stage.append(caption, controls);
  for (const target of [caption,controls]) for (const type of ['pointerdown','mousedown','touchstart','click']) target.addEventListener(type,event=>event.stopPropagation());
  document.getElementById('picture-fit').addEventListener('click',event=>{
    const active = document.body.classList.toggle('picture-fit');
    event.currentTarget.setAttribute('aria-pressed',String(active));
    event.currentTarget.textContent = active ? '放大逛' : '缩小看';
    layout(); dispatchEvent(new Event('resize'));
  });
  document.getElementById('picture-caption-toggle').addEventListener('click',event=>{
    caption.hidden = !caption.hidden;
    event.currentTarget.setAttribute('aria-pressed',String(!caption.hidden));
    if (!caption.hidden) window.parent.FairMotion?.reveal(caption,{duration:.3});
  });
  document.getElementById('caption-expand').addEventListener('click',event=>{
    const expanded = !caption.classList.contains('expanded');
    if (expanded && document.body.classList.contains('picture-fit')) document.getElementById('picture-fit').click();
    caption.classList.toggle('expanded',expanded);
    document.getElementById('caption-more').hidden = !expanded;
    if (expanded) window.parent.FairMotion?.reveal(document.getElementById('caption-more'),{duration:.32});
    event.currentTarget.setAttribute('aria-expanded',String(expanded));
    event.currentTarget.textContent = expanded ? '收起故事 ↑' : '继续读故事 ↓';
    if (!expanded) document.getElementById('caption-reading').scrollTop = 0;
  });
  // Reading gestures stay inside the caption instead of moving the picture.
  for (const type of ['wheel','touchmove','keydown']) caption.addEventListener(type,event=>event.stopPropagation());
  // Preserve the original hidden panel for pin state, without its floating
  // geometry affecting the image surface during a resize.
  const panel = document.getElementById('text-panel');
  function clearFloatingGeometry() {
    for (const property of ['left','right','top','bottom','width','height','max-width','max-height','overflow','transform']) {
      if (panel.style.getPropertyValue(property)) panel.style.removeProperty(property);
    }
    const content = panel.querySelector('.text-panel-content');
    if (content?.style.getPropertyValue('max-height')) content.style.removeProperty('max-height');
  }
  new MutationObserver(clearFloatingGeometry).observe(panel, {attributes:true,attributeFilter:['style'],subtree:true});
  // A short mobile canvas may leave several legacy labels on the same row.
  // Stagger only colliding labels; their anchors remain on the actual objects.
  const labels = document.getElementById('labels-container');
  new MutationObserver(() => {
    if (innerWidth > 640 || innerWidth > innerHeight) return;
    const placed = [], height = document.getElementById('main-image-container').clientHeight;
    const items = [...labels.querySelectorAll('.label')].filter(el => el.id)
      .sort((a,b) => parseFloat(a.style.left) - parseFloat(b.style.left));
    for (const el of items) {
      const x = parseFloat(el.style.left), originalY = parseFloat(el.style.top);
      const w = el.offsetWidth, h = el.offsetHeight;
      let y = originalY;
      for (const offset of [0,-h-10,h+10,-2*(h+10),2*(h+10)]) {
        const candidate = Math.max(h/2+8, Math.min(height-h/2-8, originalY+offset));
        if (placed.every(p => Math.abs(x-p.x) >= (w+p.w)/2+5 || Math.abs(candidate-p.y) >= (h+p.h)/2+5)) { y = candidate; break; }
      }
      placed.push({x,y,w,h});
      if (y === originalY) continue;
      el.style.top = y+'px';
      const id = el.id.slice(6), dot = document.getElementById('dot-hit-'+id);
      if (!dot) continue;
      const ax = +dot.getAttribute('cx'), ay = +dot.getAttribute('cy');
      const dx = ax-x, dy = ay-y;
      const t = Math.min(dx ? w/2/Math.abs(dx) : Infinity, dy ? h/2/Math.abs(dy) : Infinity);
      const px = x+dx*t, py = y+dy*t;
      const distance = Math.hypot(ax-px,ay-py), end = Math.max(0,1-16/(distance||1));
      for (const lineId of ['line-'+id,'line-hit-'+id]) {
        const line = document.getElementById(lineId); if (!line) continue;
        line.setAttribute('x1',px); line.setAttribute('y1',py);
        line.setAttribute('x2',px+(ax-px)*end); line.setAttribute('y2',py+(ay-py)*end);
      }
      el.style.transformOrigin = `calc(50% + ${dx}px) calc(50% + ${dy}px)`;
    }
  }).observe(labels, {childList:true});
})();
