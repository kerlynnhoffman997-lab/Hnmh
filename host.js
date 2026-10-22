'use strict';
(() => {
  const ROOT_ID = '54749336813040';
  const FEEDBACK_KEY = 'henan-fair-atlas-feedback';
  const frame = document.getElementById('viewer');
  const shareDialog = document.getElementById('host-share');
  const hostDialogs = [shareDialog];
  const frameOrigin = new URL(frame.getAttribute('src'), location.href).origin;
  const targetOrigin = frameOrigin === 'null' ? '*' : frameOrigin;
  const params = new URLSearchParams(location.search);
  const requestedNode = params.get('node') || params.get('node_id') || ROOT_ID;
  const requestedPath = params.get('path');
  let storyRequestedFor = requestedPath ? requestedNode : null;
  let currentNode = ROOT_ID;
  let catalog = null;
  let stories = {};
  let catalogError = null;
  let toastTimer;
  let minimizedTimer;
  let previousFocus = null;
  let pinnedObserver = null;
  let observedPin = null;
  let home = null;
  let entering = false;
  let pictures = null;
  let journey = null;
  let continuation = null;
  let visit = null;
  let clayTrail = null;
  let souvenir = null;
  let visitRequest = 0;
  let activeFeature = null;
  let pictureRequest = 0;
  let lastPictureNode = null;
  const imageCache = new Map();
  let resolveViewerReady;
  const viewerReady = new Promise(resolve => { resolveViewerReady = resolve; });
  const reduceMotion = () => matchMedia('(prefers-reduced-motion:reduce)').matches;

  async function fetchData(file) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(file, {credentials:'same-origin',signal:controller.signal});
      if (!response.ok) throw new Error(`${file}: ${response.status}`);
      return await response.json();
    } finally { clearTimeout(timeout); }
  }

  const catalogReady = Promise.all(['catalog.json','stories.json'].map(fetchData))
      .then(([data, narrative]) => {
        stories = narrative;
        if (!data || typeof data !== 'object' || Array.isArray(data) || !data[ROOT_ID]) {
          throw new Error('catalog: invalid root');
        }
        catalog = data;
        home = window.FairHome.mount({container:document.getElementById('province-home'),catalog,onEnter:enterFair});
        visit = window.FairVisit?.mount({container:document.getElementById('province-home'),catalog,onResume:enterFair});
        window.FairAudio?.mountHome();
        document.querySelector('.home-footer')?.append(document.getElementById('review-qr'));
        home.setVisible(currentNode === ROOT_ID);
        return catalog;
      })
      .catch(error => {
        catalogError = error;
        window.FairBoot?.fail('图文暂未载入，请检查网络后重新打开。');
        return null;
      });

  function send(data) {
    frame.contentWindow?.postMessage(data, targetOrigin);
  }

  function initializeViewer(nodeId) {
    send({type: 'setIsMobileApp', value: matchMedia('(pointer:coarse)').matches});
    send({type: 'initLightboxMode', node_id: nodeId});
    send({type: 'lightboxInlineConversationVisibilityChange', action: 'hide'});
    // Retain the native tools, with readable actions and a true parent return.
    try {
      const labels = {
        'lightbox-share-button': '分享此处',
        'lightbox-collapse-button': '回到河南地图'
      };
      for (const [id, label] of Object.entries(labels)) {
        const button = frame.contentDocument?.getElementById(id);
        if (button) {
          button.title = label;
          button.setAttribute('aria-label', label);
        }
      }
    } catch { /* Labels are optional if the frame is ever served cross-origin. */ }
    updateJourney(nodeId);
  }

  function goUp() {
    const parent = catalog?.[currentNode]?.parentId;
    if (!parent) return;
    const zoomBack = frame.contentDocument?.querySelector('.mobile-breadcrumb-zoom-out.active');
    if (catalog[currentNode].kind === 'scene' && zoomBack) zoomBack.click();
    else if (catalog[parent]?.kind === 'root') navigateViewer(parent);
    else void switchPicture(parent,{direction:'previous'}).catch(()=>{});
  }

  function updateJourney(nodeId) {
    const doc = frame.contentDocument, entry = catalog?.[nodeId];
    if (!doc || !entry) return;
    journey?.update(nodeId);
    const back = doc.getElementById('lightbox-back-arrow');
    if (back && !back.dataset.journeyBound) {
      back.dataset.journeyBound = 'true'; back.setAttribute('role','button'); back.tabIndex = 0;
      back.addEventListener('click', event => { event.preventDefault(); event.stopImmediatePropagation(); goUp(); }, true);
      back.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopImmediatePropagation(); goUp(); }
      }, true);
      doc.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !hostDialogs.some(d => d.open)) { event.preventDefault(); event.stopImmediatePropagation(); goUp(); }
      }, true);
      const location = doc.createElement('div'); location.id = 'journey-location';
      location.append(doc.createElement('small'),doc.createElement('strong'));
      back.parentElement.append(location);
    }
    const parent = catalog[entry.parentId];
    const action = parent?.kind === 'scene' ? '返回活动' : parent?.kind === 'world' ? '返回会场' : '返回地图';
    if (back) { back.textContent = '← ' + action; back.title = parent ? `${action} · ${parent.label}` : '河南地图'; back.setAttribute('aria-label',back.title); }
    const location = doc.getElementById('journey-location'), fair = findFair(entry);
    if (location) {
      location.querySelector('small').textContent = [entry.city,fair?.label].filter(Boolean).join(' · ');
      location.querySelector('strong').textContent = entry.label;
    }
  }

  async function enterFair(nodeId, feature = null) {
    if (entering || !isKnownNode(nodeId) || !pictureUrl(catalog?.[nodeId])) return false;
    home?.selectWorld(findFair(catalog[nodeId])?.id);
    if (nodeId === 'fair-hb-jx' && currentNode === ROOT_ID) clayTrail?.begin();
    activeFeature = feature?.worldId === nodeId ? feature : null;
    entering = true; home?.setEntering(true); visit?.setEntering(true); clayTrail?.setEntering(true);
    try {
      await viewerReady;
      await preloadPicture(nodeId);
      navigateViewer(nodeId);
      // Keep the map in place until the destination is visible and decoded.
      if (!await waitForPicture(nodeId)) throw new Error('Entry cancelled');
      const surface = document.getElementById('province-home');
      surface.inert = true;
      if (!reduceMotion()) {
        const animation = window.FairMotion.animate(surface,{opacity:[1,0],transform:['scale(1)','scale(1.025)']},{duration:.48});
        await animation.finished; home.setVisible(false); animation.cancel();
      } else home.setVisible(false);
      frame.inert = false; frame.focus({preventScroll:true});
      return true;
    } catch {
      navigateViewer(ROOT_ID,{record:false});
      toast('画面暂未载入，请稍后重试。');
      return false;
    } finally { entering = false; home?.setEntering(false); visit?.setEntering(false); clayTrail?.setEntering(false); }
  }

  function isKnownNode(value) {
    return typeof value === 'string' && value.length <= 240 &&
        /^[a-zA-Z0-9_-]+$/.test(value) && (!catalog || Object.hasOwn(catalog, value));
  }

  function observePinnedObjects() {
    pinnedObserver?.disconnect();
    observedPin = null;
    const panel = frame.contentDocument?.getElementById('text-panel');
    if (!panel) return;
    // PIN_LEAF below identifies selection. Only the native panel's explicit
    // return to the parent heading clears it; label redraws during pan/resize
    // must not change sharing or source context.
    let lastHeading = panel.querySelector('.text-panel-title')?.textContent;
    pinnedObserver = new MutationObserver(() => {
      const heading = panel.querySelector('.text-panel-title')?.textContent;
      if (heading && heading !== lastHeading) {
        lastHeading = heading;
        const content = panel.querySelector('.text-panel-content');
        content.scrollTop = 0;
        if (!reduceMotion()) content.animate([{opacity:.3,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'ease-out'});
      }
      const parent = catalog?.[observedPin]?.parentId;
      if (observedPin && panel.querySelector('.text-panel-title')?.textContent === catalog?.[parent]?.label) {
        observedPin = null;
        if (isKnownNode(parent)) {
          currentNode = parent;
          updateAddress(parent,{record:true});
        }
      }
      renderPicture(currentNode);
    });
    pinnedObserver.observe(panel, {subtree: true, childList: true, characterData: true});
  }

  function updateAddress(nodeId,{record=false,direction}={}) {
    window.FairAudio?.navigate(catalog?.[nodeId],{direction});
    if (lastPictureNode !== nodeId) {
      lastPictureNode = nodeId; pictureRequest++;
      frame.contentDocument?.querySelectorAll('.picture-transition').forEach(image=>{if(image.dataset.target!==nodeId)image.remove();});
    }
    document.getElementById('review-qr').hidden = nodeId !== ROOT_ID;
    const surface = document.getElementById('province-home'), returning = nodeId === ROOT_ID && surface.hidden;
    home?.setVisible(nodeId === ROOT_ID || entering);
    frame.inert = nodeId === ROOT_ID || entering;
    if (returning) {
      window.FairMotion?.reveal(surface,{duration:.4});
      surface.querySelector('.home-enter')?.focus({preventScroll:true});
    }
    const url = new URL(location.href);
    url.searchParams.delete('path');
    url.searchParams.delete('node_id');
    if (nodeId === ROOT_ID) url.searchParams.delete('node');
    else url.searchParams.set('node', nodeId);
    if (url.href !== location.href) history[record?'pushState':'replaceState']({node: nodeId}, '', url);
    const label = catalog?.[nodeId]?.label;
    const fair = findFair(catalog?.[nodeId] || {});
    if (fair) home?.selectWorld(fair.id);
    if (nodeId === ROOT_ID || (activeFeature && findFair(catalog?.[nodeId] || {})?.id !== activeFeature.worldId)) activeFeature = null;
    document.title = label && nodeId !== ROOT_ID ? `${label} · 赶一场中原庙会` : '赶一场中原庙会';
    renderPicture(nodeId);
    pictures?.update(nodeId);
    updateJourney(nodeId);
    rememberVisiblePicture(nodeId);
  }

  function pictureUrl(entry) {
    if (entry?.kind === 'object') return entry.exploration?.detailImage;
    if (entry?.kind === 'scene') return `assets/scenes/${entry.caseId}-${String(entry.sceneNumber).padStart(2,'0')}.webp`;
    if (entry?.kind === 'world') return `assets/worlds/${entry.caseId}.webp`;
    return null;
  }

  function preloadPicture(nodeId) {
    const src = pictureUrl(catalog?.[nodeId]);
    if (!src) return Promise.resolve();
    if (imageCache.has(src)) return imageCache.get(src);
    const image = new Image(); image.src = src;
    const ready = new Promise((resolve,reject) => {
      const timeout = setTimeout(() => reject(new Error('Picture timeout')), 15000);
      image.decode().then(resolve,reject).finally(() => clearTimeout(timeout));
    }).catch(error => { imageCache.delete(src); throw error; });
    imageCache.set(src,ready);
    if (imageCache.size > 8) imageCache.delete(imageCache.keys().next().value);
    return ready;
  }

  function waitForPicture(nodeId, {visible = false, timeout = 12000} = {}) {
    const entry = catalog?.[nodeId], src = pictureUrl(entry);
    if (!src) return Promise.resolve(false);
    const expected = new URL(src,location.href).href, started = performance.now();
    return new Promise((resolve,reject) => {
      function check() {
        // Native deep links briefly select the containing scene before its object.
        if (currentNode !== nodeId && !(entry.kind === 'object' && currentNode === entry.parentId)) { resolve(false); return; }
        const doc = frame.contentDocument;
        const image = doc?.getElementById(entry.kind === 'object' ? 'object-picture' : 'main-image');
        const shown = !visible || (!frame.inert && !document.body.classList.contains('booting') &&
          document.getElementById('province-home').hidden && !doc?.querySelector('.picture-transition'));
        if (currentNode === nodeId && shown && image?.src === expected && image.complete && image.naturalWidth &&
            !image.hidden && +frame.contentWindow.getComputedStyle(image).opacity > .9) resolve(true);
        else if (performance.now() - started >= timeout) reject(new Error('Picture timeout'));
        else setTimeout(check,80);
      }
      check();
    });
  }

  function rememberVisiblePicture(nodeId) {
    const request = ++visitRequest;
    if (!visit || !pictureUrl(catalog?.[nodeId])) return;
    void waitForPicture(nodeId,{visible:true,timeout:25000}).then(shown => {
      if (shown && request === visitRequest) { visit.record(nodeId); clayTrail?.record(nodeId); }
    }).catch(() => {});
  }

  function renderPicture(nodeId) {
    const doc = frame.contentDocument, entry = catalog?.[nodeId];
    const caption = doc?.getElementById('picture-caption');
    if (!caption || !entry) return;
    if (caption.dataset.nodeId !== nodeId) {
      caption.dataset.nodeId = nodeId;
      caption.querySelector('small').textContent = [entry.city,entry.supplementary ? '地方手艺 · AI 概念插画' : entry.kind === 'world' ? '走进庙会' : entry.kind === 'scene' ? '会场一隅' : '人与物的故事'].filter(Boolean).join(' · ');
      caption.querySelector('h1').textContent = entry.label;
      const story = stories[nodeId];
      caption.querySelector('.caption-summary').textContent = story?.summary || '这一段故事暂未载入，请稍后再试。';
      caption.classList.remove('expanded');
      const reading = doc.getElementById('caption-reading'); reading.scrollTop = 0;
      const more = doc.getElementById('caption-more'); more.hidden = true; more.replaceChildren();
      const expand = doc.getElementById('caption-expand');
      expand.setAttribute('aria-expanded','false'); expand.textContent = '继续读故事 ↓';
      for (const paragraph of story?.paragraphs || []) {
        const block = element('section',null,'caption-section');
        block.append(element('h2',paragraph.title),element('p',paragraph.text)); more.append(block);
      }
      window.FairMotion?.reveal(caption,{duration:.4,delay:.06});
    }
    const detail = doc.getElementById('object-picture');
    if (detail) {
      const isDetail = entry.kind === 'object' && Boolean(pictureUrl(entry));
      detail.hidden = !isDetail || !detail.complete || !detail.naturalWidth;
      doc.body.classList.toggle('picture-detail',isDetail);
      doc.body.classList.toggle('independent-detail',isDetail && Boolean(entry.exploration?.independentScene));
      if (isDetail) {
        const src = new URL(pictureUrl(entry),location.href).href;
        if (detail.src !== src) {
          detail.hidden = true; detail.src = src;
          detail.decode().then(() => {
            if (currentNode !== nodeId || detail.src !== src) return;
            detail.hidden = false;
            window.FairMotion?.animate(detail,{opacity:[0,1]},{duration:.38});
          }).catch(() => {
            if (detail.src === src) { detail.hidden = true; detail.removeAttribute('src'); }
            if (currentNode === nodeId) toast('细节画面暂未载入，可返回活动后重试。');
          });
        }
        detail.alt = entry.label + (entry.exploration?.independentScene ? ' · 独立 AI 概念场景' : ' · AI 概念插画局部');
      }
    }
    renderFeatureRoute(entry, caption);
    clayTrail?.update(nodeId);
    continuation?.update(nodeId);
    doc.defaultView.FairReading?.update({nodeId, kind:entry.kind});
    // The native viewer selects the parent before pinning a deep-linked object.
    // Open its story only after that final selection, so the pin does not reset it.
    if (storyRequestedFor === nodeId && doc.querySelector('.text-panel-title')?.textContent === entry.label) {
      storyRequestedFor = null;
      showStory();
    }
  }

  function renderFeatureRoute(entry, caption) {
    const doc = caption.ownerDocument;
    let route = doc.getElementById('picture-feature-route');
    if (!route) {
      route = doc.createElement('div'); route.id = 'picture-feature-route';
      caption.querySelector('h1').after(route);
      for (const type of ['pointerdown','mousedown','touchstart','click']) route.addEventListener(type,event => event.stopPropagation());
    }
    let target = null, label = '';
    if (clayTrail && ['fair-hb-jx','scene-hb-jx-04','object-hb-jx-04-clay-bird'].includes(entry.id)) {
      route.replaceChildren(); route.hidden = true; route.dataset.target = ''; route.dataset.context = ''; return;
    }
    if (activeFeature && activeFeature.worldId === findFair(entry)?.id) {
      if (entry.kind === 'world') target = activeFeature.sceneId;
      else if (entry.id === activeFeature.sceneId && activeFeature.targetId !== entry.id) target = activeFeature.targetId;
      label = '寻找 · ' + activeFeature.title;
    }
    // This independent object scene has no documented position in the panorama.
    if (!target && ['fair-zk-th','scene-zk-th-04'].includes(entry.id)) {
      target = 'scene-zk-th-05'; label = '庙会里的地方手艺';
    }
    if (route.dataset.target === (target || '') && route.dataset.context === label) return;
    route.dataset.target = target || ''; route.dataset.context = label;
    route.replaceChildren(); route.hidden = !target;
    if (!target || !catalog[target]) return;
    const title = doc.createElement('span'); title.textContent = label;
    const button = doc.createElement('button'); button.type = 'button';
    button.textContent = '看' + catalog[target].label + ' →';
    button.addEventListener('click', async () => {
      if (button.disabled) return;
      button.disabled = true;
      try { await switchPicture(target,{direction:'next'}); }
      catch { /* switchPicture supplies the visible retry message. */ }
      finally { if (button.isConnected) button.disabled = false; }
    });
    route.append(title,button);
  }

  function showStory() {
    const doc = frame.contentDocument, caption = doc?.getElementById('picture-caption');
    if (!caption || currentNode === ROOT_ID) return;
    if (caption.hidden) doc.getElementById('picture-caption-toggle').click();
    if (!caption.classList.contains('expanded')) doc.getElementById('caption-expand').click();
  }

  async function switchPicture(nodeId,{direction}={}) {
    const entry = catalog?.[nodeId], src = pictureUrl(entry);
    if (!src) return;
    const request = ++pictureRequest;
    try { await preloadPicture(nodeId); }
    catch { toast('这张图片暂未载入，请再试一次。'); throw new Error('Picture unavailable'); }
    if (request !== pictureRequest) return;
    const doc = frame.contentDocument, stage = doc.getElementById('main-image-container');
    const current = doc.body.classList.contains('picture-detail') ? doc.getElementById('object-picture') : doc.getElementById('main-image');
    let snapshot;
    if (!reduceMotion() && current?.complete && current.naturalWidth) {
      const r = current.getBoundingClientRect(), s = stage.getBoundingClientRect();
      snapshot = doc.createElement('img'); snapshot.src = current.src; snapshot.alt = '';
      snapshot.dataset.target = nodeId;
      snapshot.className = 'picture-transition';
      const imageStyle = frame.contentWindow.getComputedStyle(current);
      Object.assign(snapshot.style,{left:(r.left-s.left)+'px',top:(r.top-s.top)+'px',width:r.width+'px',height:r.height+'px',objectFit:imageStyle.objectFit,objectPosition:imageStyle.objectPosition});
      stage.append(snapshot);
    }
    try {
      navigateViewer(nodeId,{direction});
      await new Promise((resolve,reject)=>{
        const started = performance.now(), expected = new URL(src,location.href).href;
        const ready = () => {
          if (currentNode !== nodeId) { resolve(); return; }
          const image = entry.kind === 'object' ? doc.getElementById('object-picture') : doc.getElementById('main-image');
          if (image?.src === expected && image.complete && image.naturalWidth && (entry.kind === 'object' || +frame.contentWindow.getComputedStyle(image).opacity > .9)) resolve();
          else if (performance.now()-started > 8000) reject(new Error('Picture timeout'));
          else setTimeout(ready,40);
        };
        ready();
      });
      if (snapshot && currentNode === nodeId) {
        const x = direction === 'previous' ? 36 : direction === 'next' ? -36 : 0;
        await window.FairMotion.animate(snapshot,{opacity:[1,0],transform:['translateX(0) scale(1)',`translateX(${x}px) scale(${x ? 1 : 1.025})`]},{duration:.4}).finished;
      }
    } finally { snapshot?.remove(); }
  }

  function shareUrl() {
    const url = new URL(location.href);
    url.searchParams.delete('node_id');
    url.searchParams.set('node', currentNode);
    return url.href;
  }

  function toast(message) {
    const status = document.getElementById('host-status');
    clearTimeout(toastTimer);
    status.textContent = message;
    status.hidden = false;
    toastTimer = setTimeout(() => { status.hidden = true; }, 4500);
  }

  function openDialog(dialog) {
    if (!hostDialogs.some(item => item.open)) {
      previousFocus = document.activeElement;
      try {
        if (previousFocus === frame) previousFocus = frame.contentDocument?.activeElement || frame;
      } catch { previousFocus = frame; }
    }
    for (const other of hostDialogs) {
      if (other !== dialog && other.open) other.close('switch');
    }
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('[data-close-host]')?.focus({preventScroll: true});
  }

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined && text !== null) node.textContent = String(text);
    if (className) node.className = className;
    return node;
  }

  function findFair(entry) {
    if (entry.editorial) return entry;
    return entry.caseId ? catalog?.[`fair-${entry.caseId}`] : null;
  }

  function navigateViewer(nodeId,{record=true,direction}={}) {
    // A pinned object leaves the original viewer on its parent scene. Its
    // navigateToNode handler intentionally ignores the same scene ID, so use
    // the existing object toggle to unpin before returning to that scene.
    if (observedPin && catalog?.[observedPin]?.parentId === nodeId) {
      frame.contentDocument?.getElementById('label-' + observedPin)?.click();
    }
    currentNode = nodeId; observedPin = null;
    updateAddress(nodeId,{record,direction});
    send({type: 'navigateToNode', node_id: nodeId});
  }

  let copyRequest = 0;
  function openShare() {
    copyRequest++;
    const button = document.getElementById('copy-link');
    button.textContent = '复制链接';
    button.removeAttribute('aria-busy');
    button.removeAttribute('aria-disabled');
    delete button.dataset.state;
    document.getElementById('share-url').value = shareUrl();
    document.getElementById('share-context').textContent = catalog?.[currentNode]?.label || '赶一场中原庙会';
    document.getElementById('copy-result').textContent = '';
    openDialog(shareDialog);
  }

  async function copyLink() {
    const field = document.getElementById('share-url');
    const result = document.getElementById('copy-result');
    const button = document.getElementById('copy-link');
    if (button.getAttribute('aria-busy') === 'true') return;
    const request = ++copyRequest;
    button.setAttribute('aria-busy', 'true');
    button.setAttribute('aria-disabled', 'true');
    button.textContent = '正在复制…';
    result.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(field.value);
      if (request !== copyRequest || !shareDialog.open) return;
      button.textContent = '已复制 ✓';
      button.dataset.state = 'copied';
      result.textContent = '已复制当前场景链接';
    } catch {
      if (request !== copyRequest || !shareDialog.open) return;
      button.textContent = '重新复制';
      delete button.dataset.state;
      field.focus();
      field.select();
      field.setSelectionRange(0, field.value.length);
      result.textContent = '链接已选中，可长按或按 Ctrl/Cmd+C 复制';
    } finally {
      if (request === copyRequest) {
        button.removeAttribute('aria-busy');
        button.removeAttribute('aria-disabled');
      }
    }
  }

  function saveFeedback(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return;
    const payload = {
      nodeId: currentNode,
      sentiment: typeof raw.sentiment === 'string' ? raw.sentiment.slice(0, 40) : '',
      categories: Array.isArray(raw.categories) ? raw.categories.filter(value => typeof value === 'string').slice(0, 20).map(value => value.slice(0, 120)) : [],
      comment: typeof raw.comment === 'string' ? raw.comment.slice(0, 6000) : '',
      timestamp: new Date().toISOString()
    };
    try {
      let records;
      try { records = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]'); }
      catch { records = []; }
      if (!Array.isArray(records)) records = [];
      records.push(payload);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(records.slice(-200)));
      toast('反馈已保存在此浏览器，未发送到服务器。');
    } catch {
      toast('当前浏览器无法保存反馈，内容未提交。');
    }
  }

  frame.addEventListener('load', async () => {
    clearTimeout(minimizedTimer);
    await catalogReady;
    if (catalogError || !catalog) return;
    try {
    const stage = frame.contentDocument?.getElementById('main-image-container');
    if (!stage || !frame.contentWindow.FairReading) throw new Error('Viewer unavailable');
    window.FairAudio?.attachFrame(frame);
    const detail = frame.contentDocument.createElement('img');
    detail.id = 'object-picture'; detail.hidden = true;
    frame.contentDocument.getElementById('main-image-container').append(detail);
    pictures = window.FairPictures.mount({frame,catalog,onNavigate:switchPicture,onPreload:preloadPicture});
    journey = window.FairJourney?.mount({frame,catalog,onNavigate(nodeId) {
      if (nodeId === ROOT_ID) navigateViewer(ROOT_ID);
      else return switchPicture(nodeId,{direction:'previous'});
    }});
    continuation = window.FairContinuation?.mount({frame,catalog,onNavigate:switchPicture,onMap() { navigateViewer(ROOT_ID); }});
    souvenir = window.FairSouvenir?.mount({container:document.body});
    clayTrail = window.FairClayTrail?.mount({frame,home:document.getElementById('province-home'),onNavigate:switchPicture,
      onStart:() => enterFair('fair-hb-jx'),onSouvenir:stops => souvenir?.open({stops})});
    const doc = frame.contentDocument, labels = doc.getElementById('labels-container');
    const prepareLabels = () => {
      for (const label of labels.querySelectorAll('.label[id]')) {
        const entry = catalog?.[label.id.slice(6)];
        if (!entry) continue;
        label.tabIndex = 0; label.setAttribute('role','button');
        label.setAttribute('aria-label',`走近${entry.label}`);
      }
    };
    new MutationObserver(prepareLabels).observe(labels,{childList:true});
    prepareLabels();
    labels.addEventListener('keydown',event => {
      if (!['Enter',' '].includes(event.key) || event.repeat || !event.target.matches('.label')) return;
      event.preventDefault(); event.stopImmediatePropagation(); event.target.click();
    },true);
    frame.contentDocument.addEventListener('pointerover',event => {
      const label = event.target.closest?.('.label[id]');
      const node = label?.id.slice(6);
      if (isKnownNode(node) && !navigator.connection?.saveData) void preloadPicture(node).catch(()=>{});
    },{passive:true});
    labels.addEventListener('focusin',event => {
      const node = event.target.id?.slice(6);
      if (isKnownNode(node) && !navigator.connection?.saveData) void preloadPicture(node).catch(()=>{});
    });
    const initial = isKnownNode(requestedNode) ? requestedNode : ROOT_ID;
    currentNode = initial;
    updateAddress(initial);
    initializeViewer(initial);
    observePinnedObjects();
    resolveViewerReady();
    if (initial !== ROOT_ID && !await waitForPicture(initial)) throw new Error('Initial picture unavailable');
    window.FairBoot?.ready();
    } catch {
      window.FairBoot?.fail('画面暂未载入，请重新打开，或先回到河南地图。');
    }
  });

  window.addEventListener('message', event => {
    if (event.source !== frame.contentWindow || event.origin !== frameOrigin) return;
    const message = event.data;
    if (!message || typeof message !== 'object' || Array.isArray(message)) return;
    const node = message.node_id || message.nodeId;
    if (message.type === 'nodeChanged' && isKnownNode(node)) {
      observedPin = null;
      currentNode = node;
      updateAddress(node,{record:true});
    } else if (message.type === 'DEEP_ZOOM_INTERACTION' && message.action === 'PIN_LEAF' &&
        isKnownNode(message.childId) && catalog?.[message.childId]?.kind === 'object') {
      observedPin = message.childId;
      currentNode = message.childId;
      updateAddress(currentNode,{record:true});
    } else if (message.type === 'lightboxShareRequest') {
      openShare();
    } else if (message.type === 'lightboxInlineConversationRequest') {
      showStory();
    } else if (message.type === 'lightboxFeedbackRequest') {
      saveFeedback(message.payload);
    } else if (message.type === 'lightboxFullscreenRequest') {
      initializeViewer(isKnownNode(node) ? node : currentNode);
    } else if (message.type === 'lightboxMinimizeRequest') {
      // The standalone exhibition has no surrounding Gemini page. Its original
      // close gesture returns to the province view after the viewer's teardown.
      clearTimeout(minimizedTimer);
      currentNode = ROOT_ID;
      updateAddress(ROOT_ID,{record:true});
      minimizedTimer = setTimeout(() => initializeViewer(ROOT_ID), 300);
    }
  });

  window.addEventListener('popstate', () => {
    const state = new URLSearchParams(location.search);
    const node = state.get('node') || ROOT_ID;
    if (isKnownNode(node)) {
      storyRequestedFor = state.get('path') ? node : null;
      navigateViewer(node,{record:false});
    }
  });

  for (const dialog of hostDialogs) {
    dialog.querySelectorAll('[data-close-host]').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (dialog.returnValue === 'switch') { dialog.returnValue = ''; return; }
      try { (previousFocus?.isConnected ? previousFocus : frame).focus({preventScroll: true}); }
      catch { frame.focus(); }
      previousFocus = null;
    });
  }
  document.getElementById('copy-link').addEventListener('click', copyLink);
})();
