'use strict';
(() => {
  const mounted = new WeakMap();
  const cities = ['郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','信阳','周口','驻马店','济源'];
  const cityTopics = {
    '郑州': '古柏殿院与航空新街，两种赶会风景。',
    '开封': '仿古楼阁间，看飞车演出与春节游艺。',
    '洛阳': '沿关林灰砖古墙，遇见三国人物与手作。',
    '平顶山': '沿汤王街看戏，再走近一勺糖画。',
    '安阳': '跟着竹马巡演，走进道口的街巷烟火。',
    '鹤壁': '从古城社火，看到小小泥咕咕的斑斓。',
    '新乡': '从比干庙门院，走近送福人物与手工集市。',
    '焦作': '城门、戏台和彩棚，连起一场新春游园。',
    '濮阳': '一张圆桌、一碗热菜，读懂庙会里的共食。',
    '许昌': '沿临水通道，看三国互动与新春马灯。',
    '漯河': '从临水街巷走近热食摊，细看片鸭手艺。',
    '三门峡': '双关楼下，看高桩舞狮与市集人流。',
    '南阳': '会馆、越调与年货，串起赊店古镇的一天。',
    '商丘': '跟着麒麟舞的热闹，走近糖画与面塑。',
    '信阳': '旱船鼓乐、烧饼与葫芦，走进三月三会场。',
    '周口': '从太昊陵前的桥，走近担经挑与布老虎。',
    '驻马店': '灯笼商街连着古戏台与亲子活动广场。',
    '济源': '红蓝棚下看戏赶集，尝一口土馍与鸡蛋不翻。'
  };

  // Decorative placements within the province drawing, not surveyed landmark pins.
  // Symbols follow the fair stories already illustrated in this collection.
  const mapMotifs = [
    {city:'郑州', symbol:'cypress', x:1328, y:432, width:75},
    {city:'三门峡', symbol:'gate', x:740, y:576, width:124},
    {city:'南阳', symbol:'stage', x:864, y:764, width:157},
    {city:'鹤壁', symbol:'clay-bird', x:1392, y:220, width:78},
    {city:'周口', symbol:'clay-dog', x:1464, y:592, width:122},
    {city:'商丘', symbol:'qilin', x:1760, y:568, width:104},
    {city:'信阳', symbol:'gourd', x:1388, y:1024, width:111},
    {city:'濮阳', symbol:'table', x:1556, y:204, width:68}
  ];
  function addMapMotifs(svg) {
    const ns = 'http://www.w3.org/2000/svg';
    const layer = document.createElementNS(ns, 'g');
    layer.setAttribute('class', 'home-map-folk');
    layer.setAttribute('aria-hidden', 'true');
    for (const motif of mapMotifs) {
      const group = document.createElementNS(ns, 'g');
      group.setAttribute('class', 'home-map-motif');
      group.dataset.city = motif.city;
      group.dataset.motif = motif.symbol;
      const use = document.createElementNS(ns, 'use');
      use.setAttribute('href', `assets/map-folk-motifs.svg#${motif.symbol}`);
      use.setAttribute('x', motif.x); use.setAttribute('y', motif.y);
      use.setAttribute('width', motif.width); use.setAttribute('height', motif.width * .8);
      group.append(use); layer.append(group);
    }
    svg.insertBefore(layer, svg.querySelector('.home-map-names'));
  }

  function mount({container, catalog, onEnter}) {
    if (!(container instanceof HTMLElement)) throw new TypeError('FairHome.mount requires a container element');
    if (typeof onEnter !== 'function') throw new TypeError('FairHome.mount requires onEnter');
    if (mounted.has(container)) return mounted.get(container);
    const worlds = Object.values(catalog || {}).filter(node => node.kind === 'world');
    const byCity = new Map(cities.map(city => [city, worlds.filter(node => node.city === city)
      .sort((a, b) => a.caseId === 'zz-zy' ? -1 : b.caseId === 'zz-zy' ? 1 : a.label.localeCompare(b.label, 'zh-CN'))]));
    container.classList.add('fair-home','refined-home');
    container.setAttribute('aria-label', '河南庙会地图首页');
    container.innerHTML = `
      <div class="home-shell">
        <div class="home-masthead">
          <p class="home-eyebrow"><span class="home-seal" aria-hidden="true">豫</span>河南庙会文化图谱</p>
          <nav class="home-page-nav" aria-label="首页章节"><button type="button" data-home-section="atlas" aria-current="location">地图寻城</button><button type="button" data-home-section="editorial">画里逛会</button></nav>
          <p class="home-count"><strong>18</strong> 个地区<span aria-hidden="true">／</span><strong>19</strong> 场庙会</p>
        </div>
        <div class="home-layout">
          <header class="home-intro">
            <p class="home-verse" aria-hidden="true">人间烟火<span>岁岁相逢</span></p>
            <h1 class="home-title" tabindex="-1"><em>赶一场</em><span>中原庙会</span></h1>
            <p class="home-intro-copy">循着锣鼓与烟火，走进十八方水土。<br>从一座城、一场庙会，慢慢看到手艺与人的故事。</p>
            <ol class="home-reading" aria-label="三级探索导读">
              <li><span aria-hidden="true">壹</span><div><strong>选一座城</strong><small>在地图上找到地方风物</small></div></li>
              <li><span aria-hidden="true">贰</span><div><strong>走进会场</strong><small>沿街巷、戏台与摊位探索</small></div></li>
              <li><span aria-hidden="true">叁</span><div><strong>细看人与物</strong><small>听见人与物的故事</small></div></li>
            </ol>
          </header>
          <section class="home-map-section" aria-label="选择庙会地区">
            <div class="home-map-heading"><span><i aria-hidden="true">壹</i>寻一座城</span><span class="home-map-instruction">此行 · <strong class="home-map-current"></strong></span></div>
            <div class="home-map-canvas" aria-busy="true"><p class="home-map-loading" role="status">正在展开河南地图…</p></div>
            <div class="home-map-peek" hidden aria-hidden="true"><strong></strong><span></span><small class="home-peek-story"></small></div>
            <div class="home-map-tools">
              <label class="home-city-picker">选择地区 <select aria-label="选择河南地区"></select><span aria-hidden="true">⌄</span></label>
              <div class="home-city-paging"><button class="home-city-previous" type="button" aria-label="上一座城">←</button><span class="home-city-position" aria-hidden="true"></span><button class="home-city-next" type="button" aria-label="下一座城">→</button></div>
            </div>
            <div class="home-map-bottom"><p class="home-map-key"><i aria-hidden="true"></i><span>点选一方水土，开启一场相逢</span></p><button class="home-surprise" type="button">随心选一场 <span aria-hidden="true">↗</span></button></div>
          </section>
          <section class="home-selection" aria-label="所选地区的庙会">
            <div class="home-selection-heading"><p class="home-selection-kicker">贰 · 走进 <span class="home-selected-city"></span><span class="home-fair-count"></span></p>
            <div class="home-fair-options" role="group" aria-label="选择郑州的庙会"></div></div>
            <div class="home-preview">
              <img class="home-preview-image" alt="" decoding="async" width="1664" height="936">
              <div class="home-preview-recovery" hidden><p>这幅画暂未展开</p><button class="home-preview-retry" type="button">重试预览</button></div>
              <button class="home-preview-open" type="button" aria-label="走进所选庙会"><span aria-hidden="true">↗</span></button>
              <div class="home-preview-caption"><span class="home-preview-mark" aria-hidden="true">此行<br>将至</span><h2 class="home-fair-title"></h2></div>
            </div>
            <div class="home-selection-foot">
              <p class="home-selection-description"></p>
              <button class="home-enter" type="button"><span>走进这场庙会</span><span aria-hidden="true">↗</span></button>
            </div>
            <div class="home-selection-clues"><small>这一站，先看什么</small><ul aria-label="这场庙会的画中线索"></ul></div>
            <p class="home-selection-status home-sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
          </section>
        </div>
        <button class="home-chapter-link" type="button" data-home-section="editorial">往下逛，看见更多烟火 <span aria-hidden="true">↓</span></button>
        <footer class="home-footer"><div class="home-footer-note"><span>一城一会，一步一景。</span><small>从全景到细节，读人与物的故事。<br>国漫场景叙事 · AI 概念插画</small></div></footer>
      </div>
      <div class="home-mobile-dock" hidden><div><small>此行 · <span class="home-dock-city"></span></small><strong class="home-dock-title"></strong></div><button class="home-dock-enter" type="button">走进庙会 <span aria-hidden="true">↗</span></button></div>`;
    const get = selector => container.querySelector(selector);
    const mapCanvas = get('.home-map-canvas');
    const picker = get('.home-city-picker select');
    const options = get('.home-fair-options');
    const enter = get('.home-enter');
    const status = get('.home-selection-status');
    const dock = get('.home-mobile-dock'), dockEnter = get('.home-dock-enter');
    const previewOpen = get('.home-preview-open'), peek = get('.home-map-peek');
    const cityButtons = [...container.querySelectorAll('.home-city-paging button,.home-surprise')];
    let selectedCity = byCity.get('郑州')?.length ? '郑州' : cities.find(city => byCity.get(city)?.length);
    let selectedWorld = null;
    let isEntering = false;
    const featurePanel = window.FairMapFeature?.mount({container,catalog,onExplore(feature) {
      if (!isEntering) onEnter(feature.worldId, feature);
    }});
    let previewRequest = 0;
    let previewAnimation = null;
    let enterVisible = false, editorialVisible = false;
    let peekCity = null;
    const compact = matchMedia('(max-width:700px) and (orientation:portrait)');
    function updateDock() { dock.hidden = !compact.matches || enterVisible || editorialVisible || !selectedWorld || isEntering; }
    compact.addEventListener('change', updateDock);
    new IntersectionObserver(entries => { enterVisible = entries[0].intersectionRatio >= .9; updateDock(); },{root:container,threshold:[0,.9,1],rootMargin:'0px 0px -86px 0px'}).observe(enter);

    function renderClues(world) {
      const clues = get('.home-selection-clues ul'); clues.replaceChildren();
      const trail = (window.FairTrailsData || []).find(item => item.worldId === world?.id);
      get('.home-selection-clues small').textContent = trail ? '入画识物 · ' + trail.title : world?.id === 'fair-hb-jx' ? '循声赶会 · 去找一只会叫的泥鸟' : '这一站，先看什么';
      for (const id of (world?.childrenIds || []).slice(0, 3)) {
        const scene = catalog[id]; if (!scene) continue;
        const item = document.createElement('li'); item.textContent = scene.label; clues.append(item);
      }
      get('.home-selection-clues').hidden = !clues.children.length;
    }
    async function updatePreview(world, changed, announce, retrying = false) {
      const request = ++previewRequest;
      const preview = get('.home-preview-image'), surface = get('.home-preview');
      const recovery = get('.home-preview-recovery'), retry = get('.home-preview-retry');
      const restoreRetryFocus = retrying && document.activeElement === retry;
      recovery.hidden = !retrying; retry.disabled = true;
      retry.textContent = retrying ? '正在展开…' : '重试预览';
      previewAnimation?.cancel();
      surface.querySelectorAll('.home-preview-previous').forEach(image => image.remove());
      const label = world?.label || '庙会暂未载入';
      const description = cityTopics[selectedCity] || '';
      const alt = `${selectedCity} · ${label}全景，AI 概念插画`;
      const src = world ? `assets/worlds/${world.caseId}.webp` : '';
      surface.setAttribute('aria-busy', String(Boolean(world)));
      previewOpen.disabled = true;
      if (!world) { preview.hidden = true; surface.setAttribute('aria-busy','false'); return; }
      const image = new Image(); image.src = src;
      try { await image.decode(); }
      catch {
        if (request !== previewRequest) return;
        preview.hidden = true;
        get('.home-fair-title').textContent = label;
        get('.home-selection-description').textContent = description;
        renderClues(world);
        surface.setAttribute('aria-busy','false');
        recovery.hidden = false; retry.disabled = isEntering; retry.textContent = '重试预览';
        if (restoreRetryFocus && !isEntering && !container.hidden && document.activeElement === document.body) retry.focus({preventScroll:true});
        status.textContent = '预览暂未载入，仍可点击“走进这场庙会”重试。';
        return;
      }
      if (request !== previewRequest) return;
      let previous;
      if (announce && changed && preview.complete && preview.naturalWidth && !preview.hidden) {
        previous = preview.cloneNode(); previous.className = 'home-preview-previous'; previous.alt = '';
        previous.setAttribute('aria-hidden','true'); surface.insertBefore(previous, preview.nextSibling);
      }
      preview.src = src; preview.alt = alt; preview.hidden = false;
      const retryFocused = restoreRetryFocus && [retry,document.body].includes(document.activeElement);
      recovery.hidden = true; retry.disabled = false; retry.textContent = '重试预览';
      get('.home-fair-title').textContent = label;
      get('.home-selection-description').textContent = description;
      renderClues(world);
      surface.setAttribute('aria-busy','false');
      previewOpen.disabled = isEntering;
      if (retryFocused && !isEntering && !container.hidden) previewOpen.focus({preventScroll:true});
      if (announce && changed) {
        window.FairMotion?.reveal(get('.home-fair-title'), {duration:.32});
        window.FairMotion?.reveal(get('.home-selection-description'), {duration:.38});
      }
      if (previous) {
        previewAnimation = window.FairMotion?.animate(previous, {opacity:[1,0],transform:['scale(1)','scale(1.035)']}, {duration:.42});
        await previewAnimation?.finished;
        previous.remove();
      }
    }

    for (const city of cities) {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      option.disabled = !byCity.get(city).length;
      picker.append(option);
    }

    function selectFair(world, announce = true) {
      if (isEntering && announce) return;
      const changed = selectedWorld?.id !== world?.id;
      selectedWorld = world;
      featurePanel?.update(world);
      void updatePreview(world, changed, announce);
      enter.disabled = isEntering || !world;
      for (const button of [enter, previewOpen, dockEnter]) {
        button.disabled = isEntering || !world;
        button.setAttribute('aria-label', world ? `走进${selectedCity}·${world.label}` : '庙会暂未载入');
      }
      previewOpen.disabled = isEntering || !world || get('.home-preview').getAttribute('aria-busy') === 'true' || get('.home-preview-image').hidden;
      get('.home-dock-city').textContent = selectedCity;
      get('.home-dock-title').textContent = world?.label || '';
      updateDock();
      for (const button of options.querySelectorAll('button')) button.setAttribute('aria-pressed', String(button.dataset.world === world?.id));
      if (announce) status.textContent = world ? `已选择${selectedCity}，${world.label}。点击“走进这场庙会”开始探索。` : '暂未载入庙会';
    }

    function selectCity(city, announce = true, preferredWorldId = null) {
      const choices = byCity.get(city);
      if (!choices?.length || (isEntering && announce)) return;
      if (announce && city === selectedCity && selectedWorld && !preferredWorldId) return;
      const previousChoice = preferredWorldId || (city === selectedCity ? selectedWorld?.id : null);
      selectedCity = city;
      picker.value = city;
      get('.home-selected-city').textContent = city;
      get('.home-map-current').textContent = city;
      get('.home-city-position').textContent = `${String(cities.indexOf(city)+1).padStart(2,'0')} / 18`;
      get('.home-fair-count').textContent = choices.length > 1 ? '· 两场可选' : '';
      options.replaceChildren();
      options.hidden = choices.length < 2;
      options.setAttribute('aria-label', `选择${city}的庙会`);
      if (choices.length > 1) {
        for (const world of choices) {
          const button = document.createElement('button');
          button.type = 'button';
          button.dataset.world = world.id;
          button.textContent = world.caseId === 'zz-hx' ? '航线里庙会' : world.label;
          button.addEventListener('click', () => selectFair(world));
          options.append(button);
        }
      }
      for (const region of mapCanvas.querySelectorAll('[data-city]')) {
        const active = region.dataset.city === city;
        region.classList.toggle('is-selected', active);
        if (region.matches('[role="button"]')) region.setAttribute('aria-pressed', String(active));
      }
      if (announce) {
        const region = [...mapCanvas.querySelectorAll('.home-region')].find(item => item.dataset.city === city);
        if (region) window.FairMotion?.animate(region, {opacity:[.55,1]}, {duration:.4});
      }
      selectFair(choices.find(world => world.id === previousChoice) || choices[0], announce);
      hidePeek();
    }

    function hidePeek() {
      peekCity = null; peek.hidden = true;
      mapCanvas.querySelectorAll('.is-hovered').forEach(node => node.classList.remove('is-hovered'));
    }
    function showPeek(city, target) {
      if (isEntering || !byCity.get(city)?.length || peekCity === city) return;
      peekCity = city;
      mapCanvas.querySelectorAll('[data-city]').forEach(node => node.classList.toggle('is-hovered',node.dataset.city === city));
      peek.querySelector('strong').textContent = city;
      peek.querySelector('span').textContent = byCity.get(city).map(world => world.caseId === 'zz-hx' ? '航线里庙会' : world.label).join(' · ');
      const feature = (window.FairMapFeatures || []).find(item => item.city === city);
      peek.querySelector('.home-peek-story').textContent = (feature ? feature.title + ' · ' : '') + cityTopics[city];
      const section = get('.home-map-section').getBoundingClientRect();
      const label = [...mapCanvas.querySelectorAll('.home-map-label')].find(node=>node.dataset.city === city) || target;
      const r = label.getBoundingClientRect();
      peek.hidden = false;
      peek.style.left = Math.max(8, Math.min(section.width-peek.offsetWidth-8,r.left-section.left+r.width/2-peek.offsetWidth/2))+'px';
      peek.style.top = Math.max(38,r.top-section.top-peek.offsetHeight-13)+'px';
      window.FairMotion?.reveal(peek,{duration:.2});
    }
    picker.addEventListener('change', () => selectCity(picker.value));
    get('.home-preview-retry').addEventListener('click', () => {
      if (selectedWorld && !isEntering) void updatePreview(selectedWorld,false,true,true);
    });
    for (const button of [enter,previewOpen,dockEnter]) button.addEventListener('click', () => { if (selectedWorld && !isEntering) onEnter(selectedWorld.id); });
    for (const [selector,direction] of [['.home-city-previous',-1],['.home-city-next',1]]) {
      get(selector).addEventListener('click',() => {
        const available = cities.filter(city=>byCity.get(city)?.length);
        selectCity(available[(available.indexOf(selectedCity)+direction+available.length)%available.length]);
      });
    }
    get('.home-surprise').addEventListener('click',() => {
      if (isEntering) return;
      const choices = worlds.filter(world=>world.id !== selectedWorld?.id);
      const world = choices[Math.floor(Math.random()*choices.length)];
      if (world) selectCity(world.city,true,world.id);
    });
    mapCanvas.addEventListener('pointerover',event => {
      const region = event.target.closest('[data-city]');
      if (region && event.pointerType === 'mouse') showPeek(region.dataset.city,region);
    });
    mapCanvas.addEventListener('pointerleave',hidePeek);
    mapCanvas.addEventListener('focusin',event => { const region=event.target.closest('[data-city]'); if(region)showPeek(region.dataset.city,region); });
    mapCanvas.addEventListener('focusout',hidePeek);
    container.addEventListener('scroll',hidePeek,{passive:true});
    addEventListener('resize',hidePeek,{passive:true});
    mapCanvas.addEventListener('click', event => {
      const region = event.target.closest('[data-city]');
      if (!region) return;
      const motif = [...mapCanvas.querySelectorAll('.home-map-motif')].find(item => {
        if (item.dataset.city !== region.dataset.city) return false;
        const bounds = item.getBoundingClientRect();
        return event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
      });
      const feature = motif && (window.FairMapFeatures || []).find(item => item.symbol === motif.dataset.motif);
      selectCity(region.dataset.city, true, feature?.worldId);
      if (feature) featurePanel?.focus();
    });
    mapCanvas.addEventListener('keydown', event => {
      const region = event.target.closest('[role="button"][data-city]');
      if (!region) return;
      if (event.key === 'Escape') hidePeek();
      else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectCity(region.dataset.city);
      } else if (['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','Home','End'].includes(event.key)) {
        event.preventDefault();
        const regions = [...mapCanvas.querySelectorAll('.home-region')];
        const index = regions.indexOf(region);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? regions.length - 1 :
          (index + (['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1) + regions.length) % regions.length;
        regions[next]?.focus({preventScroll:true});
      }
    });
    selectCity(selectedCity, false);
    for (const [index, selector] of ['.home-intro','.home-selection','.home-map-heading'].entries()) {
      window.FairMotion?.reveal(get(selector), {duration:.55, delay:index*.06});
    }

    fetch(new URL('assets/province-map.svg', document.baseURI))
      .then(response => { if (!response.ok) throw new Error(`map ${response.status}`); return response.text(); })
      .then(text => {
        const documentSVG = new DOMParser().parseFromString(text, 'image/svg+xml');
        if (documentSVG.querySelector('parsererror') || documentSVG.documentElement.localName !== 'svg') throw new Error('invalid map');
        mapCanvas.replaceChildren(document.importNode(documentSVG.documentElement, true));
        addMapMotifs(mapCanvas.querySelector('svg'));
        mapCanvas.setAttribute('aria-busy', 'false');
        selectCity(selectedCity, false);
        window.FairMotion?.reveal(mapCanvas, {duration:.6});
        for (const [index,region] of [...mapCanvas.querySelectorAll('.home-region')].entries()) {
          window.FairMotion?.animate(region,{opacity:[0,1]},{duration:.45,delay:index*.018});
        }
      })
      .catch(() => {
        mapCanvas.setAttribute('aria-busy', 'false');
        get('.home-map-loading').textContent = '地图暂未载入，请用下方地区选择继续探索。';
      });

    function scrollHomeSection(section) {
      const target = section === 'editorial' ? get('.home-editorial') : get('.home-map-section');
      if (!target) return;
      target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth', block: 'start'});
      const focus = section === 'editorial' ? get('#home-editorial-title') : [...mapCanvas.querySelectorAll('.home-region')].find(region => region.dataset.city === selectedCity) || picker;
      focus?.focus({preventScroll:true});
    }
    const editorial = window.FairHomeEditorial?.mount({container, catalog,
      onLocate(worldId) { const world = catalog[worldId]; if (world && !isEntering) { selectCity(world.city, true, worldId); scrollHomeSection('atlas'); } },
      onBack() { scrollHomeSection('atlas'); }
    });
    for (const button of container.querySelectorAll('[data-home-section]')) button.addEventListener('click', () => { if (!isEntering) scrollHomeSection(button.dataset.homeSection); });
    if (editorial) {
      new IntersectionObserver(entries => {
        editorialVisible = entries[0].isIntersecting; updateDock();
      }, {root: container, threshold: 0}).observe(editorial.element);
      const chapterButtons = [...container.querySelectorAll('.home-page-nav button')];
      let activeChapter = null, chapterFrame = 0;
      function updateChapter() {
        chapterFrame = 0;
        // A glimpse of the next chapter should not change the current map chapter.
        const boundary = container.getBoundingClientRect().top + Math.min(300, container.clientHeight / 2);
        const chapter = editorial.element.getBoundingClientRect().top <= boundary ? 'editorial' : 'atlas';
        if (chapter === activeChapter) return;
        activeChapter = chapter;
        for (const button of chapterButtons) {
          if (button.dataset.homeSection === chapter) button.setAttribute('aria-current', 'location');
          else button.removeAttribute('aria-current');
        }
      }
      function scheduleChapter() { if (!chapterFrame) chapterFrame = requestAnimationFrame(updateChapter); }
      container.addEventListener('scroll', scheduleChapter, {passive:true});
      new ResizeObserver(scheduleChapter).observe(container);
      updateChapter();
    } else {
      get('.home-chapter-link').hidden = true;
      get('.home-page-nav [data-home-section="editorial"]').hidden = true;
    }

    const api = {
      selectWorld(worldId) {
        const world = catalog[worldId];
        if (world?.kind === 'world' && selectedWorld?.id !== worldId) selectCity(world.city,false,worldId);
      },
      setEntering(entering) {
        isEntering = Boolean(entering);
        for (const button of [enter,previewOpen,dockEnter]) button.disabled = isEntering || !selectedWorld;
        previewOpen.disabled = isEntering || !selectedWorld || get('.home-preview').getAttribute('aria-busy') === 'true' || get('.home-preview-image').hidden;
        for (const button of cityButtons) button.disabled = isEntering;
        for (const button of container.querySelectorAll('[data-home-section]')) button.disabled = isEntering;
        editorial?.setEntering(isEntering);
        featurePanel?.setEntering(isEntering);
        get('.home-preview-retry').disabled = isEntering || get('.home-preview').getAttribute('aria-busy') === 'true';
        hidePeek(); updateDock();
        enter.setAttribute('aria-busy', String(isEntering));
        enter.querySelector('span').textContent = isEntering ? '正在走进…' : '走进这场庙会';
        enter.setAttribute('aria-label', isEntering ? `正在走进${selectedWorld?.label || '庙会'}` :
          selectedWorld ? `走进${selectedCity}·${selectedWorld.label}` : '庙会暂未载入');
        picker.disabled = isEntering;
        mapCanvas.inert = isEntering;
        for (const button of options.querySelectorAll('button')) button.disabled = isEntering;
        if (isEntering) status.textContent = `正在准备${selectedWorld?.label || '庙会'}的画面。`;
      },
      setVisible(visible) {
        container.hidden = !visible;
        container.setAttribute('aria-hidden', String(!visible));
        container.inert = !visible;
      }
    };
    mounted.set(container, api);
    return api;
  }
  window.FairHome = Object.freeze({mount});
})();
