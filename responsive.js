'use strict';
(() => {
  document.body.classList.add('adaptive-layout');
  const stage = document.getElementById('main-image-container');
  const stageParent = stage.parentElement;
  const page = document.createElement('div'); page.id = 'picture-reading-page';
  page.setAttribute('role','region'); page.setAttribute('aria-label','画面与故事');
  stageParent.insertBefore(page,stage);
  let currentNode = null, currentKind = null, exploring = false, wasPortrait = null;
  let defaultExpanded = false;
  const readingPlaces = new Map();
  let restoreRequest = 0;
  let changingNode = false;
  let lastReadingPosition = null;
  const portrait = () => innerWidth <= 700 && innerHeight > innerWidth;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const caption = document.createElement('aside'); caption.id = 'picture-caption';
  caption.innerHTML = '<small></small><h1></h1><div id="caption-reading" tabindex="0" aria-label="画中故事"><p class="caption-summary"></p><div id="caption-more" hidden></div></div><button id="caption-expand" type="button" aria-expanded="false" aria-controls="caption-more">继续读故事 ↓</button>';
  caption.setAttribute('aria-label','当前画面的故事');
  const controls = document.createElement('div'); controls.id = 'picture-tools';
  controls.innerHTML = '<button type="button" id="picture-fit" aria-pressed="false">缩小看</button><button type="button" id="picture-caption-toggle" aria-pressed="true">故事</button>';
  stage.append(caption,controls);
  const fitButton = document.getElementById('picture-fit');
  const storyButton = document.getElementById('picture-caption-toggle');
  const expandButton = document.getElementById('caption-expand');
  const more = document.getElementById('caption-more');
  const returnBar = document.createElement('div'); returnBar.id = 'reading-return';
  returnBar.hidden = true;
  returnBar.innerHTML = '<div class="reading-return-progress" aria-hidden="true"></div><span>画中故事</span><button type="button">回到画面 <span aria-hidden="true">↑</span></button>';
  document.body.append(returnBar);
  const readingArea = document.getElementById('caption-reading');
  let progressFrame = 0;
  function updateReadingProgress() {
    progressFrame = 0;
    const reading = document.body.classList.contains('reading-page');
    returnBar.hidden = !reading || document.body.classList.contains('clay-listening-active') || page.scrollTop < stage.offsetHeight + 20;
    const extent = page.scrollHeight - page.clientHeight;
    returnBar.style.setProperty('--reading-progress', String(extent > 0 ? Math.min(1, page.scrollTop / extent) : 0));
  }
  function scheduleProgress() {
    if (!progressFrame) progressFrame = requestAnimationFrame(updateReadingProgress);
  }
  page.addEventListener('scroll', () => {
    // A rotation may clamp scrollTop before resize fires. Retain the last
    // position measured in the previous orientation, not the reflowed value.
    if (!changingNode && currentNode && wasPortrait === portrait() && document.body.classList.contains('reading-page')) {
      lastReadingPosition = {nodeId:currentNode,top:page.scrollTop};
    }
    scheduleProgress();
  }, {passive:true});
  new ResizeObserver(scheduleProgress).observe(caption);
  new MutationObserver(scheduleProgress).observe(document.body, {attributes:true,attributeFilter:['class']});
  returnBar.querySelector('button').addEventListener('click', () => {
    page.scrollTo({top:0,behavior:reduced()?'instant':'smooth'});
    fitButton.focus({preventScroll:true});
  });
  function capturePlace() {
    if (!currentNode || changingNode || document.body.matches('.clay-listening-active,.clay-closeup-active,.fair-trail-detail-active')) return;
    const saved = readingPlaces.get(currentNode) || {};
    if (document.body.classList.contains('reading-page')) {
      saved.page = wasPortrait !== portrait() && lastReadingPosition?.nodeId === currentNode
        ? lastReadingPosition.top : page.scrollTop;
    }
    else { saved.caption = readingArea.scrollTop; saved.expanded = caption.classList.contains('expanded'); }
    readingPlaces.delete(currentNode); readingPlaces.set(currentNode,saved);
    if (readingPlaces.size > 180) readingPlaces.delete(readingPlaces.keys().next().value);
  }
  function restorePlace() {
    const request = ++restoreRequest, nodeId = currentNode, saved = readingPlaces.get(nodeId);
    if (document.body.matches('.clay-closeup-active,.fair-trail-detail-active')) { scheduleProgress(); return; }
    if (saved && !document.body.classList.contains('reading-page')) expandStory(Boolean(saved.expanded));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (request !== restoreRequest || currentNode !== nodeId) return;
      if (document.body.classList.contains('reading-page')) {
        page.scrollTop = saved?.page || 0;
        lastReadingPosition = {nodeId,top:page.scrollTop};
      }
      else readingArea.scrollTop = saved?.caption || 0;
      scheduleProgress();
    }));
  }

  function expandStory(expanded) {
    caption.classList.toggle('expanded',expanded); more.hidden = !expanded;
    expandButton.setAttribute('aria-expanded',String(expanded));
    expandButton.textContent = expanded ? '收起细说 ↑' : '继续读故事 ↓';
  }
  function readStory() {
    ++restoreRequest; // This explicit action takes priority over layout restoration.
    caption.hidden = false; storyButton.setAttribute('aria-pressed','true');
    expandStory(true);
    requestAnimationFrame(() => {
      if (document.body.classList.contains('reading-page')) {
        page.scrollTo({top:Math.max(0,caption.offsetTop-12),behavior:reduced()?'instant':'smooth'});
        document.getElementById('caption-reading').focus({preventScroll:true});
      }
    });
  }
  // The image retains a real camera viewport; the adjacent story scrolls with it.
  // Reading does not reset the camera while the visitor is dragging a larger view.
  function layout() {
    const w = innerWidth, h = innerHeight;
    const isPortrait = portrait();
    const orientationChanged = wasPortrait !== isPortrait;
    if (orientationChanged) {
      capturePlace();
      exploring = false;
      document.body.classList.remove('picture-fit');
      if (!isPortrait && defaultExpanded) { expandStory(false); defaultExpanded = false; }
      wasPortrait = isPortrait;
    }
    const reading = isPortrait && !exploring;
    const wasReading = document.body.classList.contains('reading-page');
    if (reading !== wasReading && !orientationChanged) capturePlace();
    document.body.classList.toggle('reading-page',reading);
    document.body.classList.toggle('reading-explore',isPortrait && exploring);
    if (reading !== wasReading) {
      if (reading) {
        page.append(stage,controls,caption); document.body.classList.add('picture-fit');
        caption.hidden = false; expandStory(true); defaultExpanded = true;
        storyButton.setAttribute('aria-pressed','true'); page.scrollTop = 0;
      } else {
        stageParent.append(stage); stage.append(caption,controls);
        document.body.classList.remove('picture-fit');
        if (isPortrait && exploring) caption.hidden = true;
        else caption.hidden = false;
        storyButton.setAttribute('aria-pressed',String(!caption.hidden));
      }
    }
    const style = getComputedStyle(document.documentElement);
    const top = parseFloat(style.getPropertyValue('--fair-toolbar-height')) || 64;
    const bottom = parseFloat(style.getPropertyValue('--fair-navigation-height')) || 56;
    const available = Math.max(1,h - top - bottom);
    const fit = document.body.classList.contains('picture-fit');
    const sw = reading ? w : fit ? Math.min(w, available * 16 / 9) : w;
    const sh = reading || fit ? sw * 9 / 16 : available;
    const vars = {'stage-x':reading?0:(w-sw)/2,'stage-y':reading?0:top+(available-sh)/2,'stage-w':sw,'stage-h':sh};
    for (const [key,value] of Object.entries(vars)) document.documentElement.style.setProperty('--'+key, value+'px');
    document.body.dataset.layout = reading ? 'reading' : 'picture';
    fitButton.textContent = reading ? '放大探索' : isPortrait && exploring ? '图文阅读' : fit ? '放大逛' : '缩小看';
    fitButton.setAttribute('aria-pressed',String(fit));
    fitButton.setAttribute('aria-label',reading ? '放大画面，自由拖动探索' : isPortrait && exploring ? '返回完整画面与故事' : fitButton.textContent);
    storyButton.textContent = reading || (isPortrait && exploring) ? '读故事' : '故事';
    if (reading !== wasReading) restorePlace();
    scheduleProgress();
  }
  layout();
  addEventListener('resize', layout);
  addEventListener('orientationchange', () => requestAnimationFrame(layout));
  for (const target of [caption,controls]) for (const type of ['pointerdown','mousedown','touchstart','click']) target.addEventListener(type,event=>event.stopPropagation());
  document.getElementById('picture-fit').addEventListener('click',event=>{
    if (portrait()) exploring = !exploring;
    else document.body.classList.toggle('picture-fit');
    layout(); dispatchEvent(new Event('resize'));
  });
  document.getElementById('picture-caption-toggle').addEventListener('click',event=>{
    if (portrait()) {
      exploring = false; layout(); dispatchEvent(new Event('resize')); readStory(); return;
    }
    caption.hidden = !caption.hidden;
    event.currentTarget.setAttribute('aria-pressed',String(!caption.hidden));
    if (!caption.hidden) window.parent.FairMotion?.reveal(caption,{duration:.3});
  });
  document.getElementById('caption-expand').addEventListener('click',event=>{
    const expanded = !caption.classList.contains('expanded');
    if (expanded && !portrait() && document.body.classList.contains('picture-fit')) document.getElementById('picture-fit').click();
    expandStory(expanded); defaultExpanded = false;
    if (expanded && !reduced()) window.parent.FairMotion?.reveal(more,{duration:.32});
    if (!expanded) document.getElementById('caption-reading').scrollTop = 0;
  });
  // Reading gestures stay inside the caption instead of moving the picture.
  for (const type of ['wheel','touchmove','keydown']) caption.addEventListener(type,event=>event.stopPropagation());
  window.FairReading = {
    capture: capturePlace,
    restore: restorePlace,
    update({nodeId,kind} = {}) {
      const changed = nodeId !== currentNode;
      changingNode = changed;
      currentNode = nodeId; currentKind = kind;
      document.body.dataset.readingKind = kind || '';
      if (changed) {
        exploring = false; caption.hidden = false; storyButton.setAttribute('aria-pressed','true');
        page.scrollTop = 0;
      }
      const before = document.body.classList.contains('reading-page');
      layout();
      if (changed && document.body.classList.contains('reading-page')) {
        expandStory(true); defaultExpanded = true; page.scrollTop = 0;
      }
      expandButton.hidden = !more.children.length;
      changingNode = false;
      if (changed) restorePlace();
      if (before !== document.body.classList.contains('reading-page')) dispatchEvent(new Event('resize'));
    }
  };
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
