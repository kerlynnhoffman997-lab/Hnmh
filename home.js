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

  function mount({container, catalog, onEnter}) {
    if (!(container instanceof HTMLElement)) throw new TypeError('FairHome.mount requires a container element');
    if (typeof onEnter !== 'function') throw new TypeError('FairHome.mount requires onEnter');
    if (mounted.has(container)) return mounted.get(container);
    const worlds = Object.values(catalog || {}).filter(node => node.kind === 'world');
    const byCity = new Map(cities.map(city => [city, worlds.filter(node => node.city === city)
      .sort((a, b) => a.caseId === 'zz-zy' ? -1 : b.caseId === 'zz-zy' ? 1 : a.label.localeCompare(b.label, 'zh-CN'))]));
    container.classList.add('fair-home');
    container.setAttribute('aria-label', '河南庙会地图首页');
    container.innerHTML = `
      <div class="home-shell">
        <div class="home-masthead">
          <p class="home-eyebrow"><span class="home-seal" aria-hidden="true">豫</span>河南庙会文化图谱</p>
          <p class="home-count"><strong>18</strong> 个地区<span aria-hidden="true">／</span><strong>19</strong> 场庙会</p>
        </div>
        <div class="home-layout">
          <header class="home-intro">
            <p class="home-verse" aria-hidden="true">人间烟火<span>岁岁相逢</span></p>
            <h1 class="home-title" tabindex="-1"><em>赶一场</em><span>中原庙会</span></h1>
            <p class="home-intro-copy">循着锣鼓与烟火，<br class="home-desktop-break">走进十八方水土的庙会故事。</p>
            <ol class="home-reading" aria-label="三级探索导读">
              <li><span aria-hidden="true">壹</span><div><strong>选一座城</strong><small>在地图上找到地方风物</small></div></li>
              <li><span aria-hidden="true">贰</span><div><strong>走进会场</strong><small>沿街巷、戏台与摊位探索</small></div></li>
              <li><span aria-hidden="true">叁</span><div><strong>细看人与物</strong><small>听见人与物的故事</small></div></li>
            </ol>
          </header>
          <section class="home-map-section" aria-label="选择庙会地区">
            <div class="home-map-heading"><span><i aria-hidden="true">壹</i>展卷 · 寻一处热闹</span><span class="home-map-instruction">已选 · <strong class="home-map-current"></strong></span></div>
            <div class="home-map-canvas" aria-busy="true"><p class="home-map-loading" role="status">正在展开河南地图…</p></div>
            <div class="home-map-tools">
              <label class="home-city-picker">选择地区 <select aria-label="选择河南地区"></select><span aria-hidden="true">⌄</span></label>
              <p class="home-map-key"><i aria-hidden="true"></i><span>点选地图，遇见一方庙会</span></p>
            </div>
          </section>
          <section class="home-selection" aria-label="所选地区的庙会">
            <p class="home-selection-kicker">此刻去 <span class="home-selected-city"></span><span class="home-fair-count"></span></p>
            <div class="home-fair-options" role="group" aria-label="选择郑州的庙会"></div>
            <div class="home-preview">
              <img class="home-preview-image" alt="" decoding="async" width="1664" height="936">
              <div class="home-preview-caption"><span class="home-preview-mark" aria-hidden="true">此行<br>将至</span><h2 class="home-fair-title"></h2></div>
            </div>
            <div class="home-selection-foot">
              <p class="home-selection-description"></p>
              <button class="home-enter" type="button"><span>走进这场庙会</span><span aria-hidden="true">↗</span></button>
            </div>
            <p class="home-selection-status home-sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
          </section>
        </div>
        <footer class="home-footer"><div class="home-footer-note"><span>一城一会，一步一景。</span><small>从全景到细节，读人与物的故事。<br>国漫场景叙事 · AI 概念插画</small></div></footer>
      </div>`;
    const get = selector => container.querySelector(selector);
    const mapCanvas = get('.home-map-canvas');
    const picker = get('.home-city-picker select');
    const options = get('.home-fair-options');
    const enter = get('.home-enter');
    const status = get('.home-selection-status');
    let selectedCity = byCity.get('郑州')?.length ? '郑州' : cities.find(city => byCity.get(city)?.length);
    let selectedWorld = null;
    let isEntering = false;
    let previewRequest = 0;
    let previewAnimation = null;

    async function updatePreview(world, changed, announce) {
      const request = ++previewRequest;
      const preview = get('.home-preview-image'), surface = get('.home-preview');
      previewAnimation?.cancel();
      surface.querySelectorAll('.home-preview-previous').forEach(image => image.remove());
      const label = world?.label || '庙会暂未载入';
      const description = cityTopics[selectedCity] || '';
      const alt = `${selectedCity} · ${label}全景，AI 概念插画`;
      const src = world ? `assets/worlds/${world.caseId}.webp` : '';
      surface.setAttribute('aria-busy', String(Boolean(world)));
      if (!world) { preview.hidden = true; surface.setAttribute('aria-busy','false'); return; }
      const image = new Image(); image.src = src;
      try { await image.decode(); }
      catch {
        if (request !== previewRequest) return;
        preview.hidden = true;
        get('.home-fair-title').textContent = label;
        get('.home-selection-description').textContent = description;
        surface.setAttribute('aria-busy','false');
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
      get('.home-fair-title').textContent = label;
      get('.home-selection-description').textContent = description;
      surface.setAttribute('aria-busy','false');
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
      void updatePreview(world, changed, announce);
      enter.disabled = isEntering || !world;
      enter.setAttribute('aria-label', world ? `走进${selectedCity}·${world.label}` : '庙会暂未载入');
      for (const button of options.querySelectorAll('button')) button.setAttribute('aria-pressed', String(button.dataset.world === world?.id));
      if (announce) status.textContent = world ? `已选择${selectedCity}，${world.label}。点击“走进这场庙会”开始探索。` : '暂未载入庙会';
    }

    function selectCity(city, announce = true) {
      const choices = byCity.get(city);
      if (!choices?.length || (isEntering && announce)) return;
      if (announce && city === selectedCity && selectedWorld) return;
      const previousChoice = city === selectedCity ? selectedWorld?.id : null;
      selectedCity = city;
      picker.value = city;
      get('.home-selected-city').textContent = city;
      get('.home-map-current').textContent = city;
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
    }

    picker.addEventListener('change', () => selectCity(picker.value));
    enter.addEventListener('click', () => { if (selectedWorld && !isEntering) onEnter(selectedWorld.id); });
    mapCanvas.addEventListener('click', event => {
      const region = event.target.closest('[data-city]');
      if (region) selectCity(region.dataset.city);
    });
    mapCanvas.addEventListener('keydown', event => {
      const region = event.target.closest('[role="button"][data-city]');
      if (!region) return;
      if (event.key === 'Enter' || event.key === ' ') {
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
        mapCanvas.setAttribute('aria-busy', 'false');
        selectCity(selectedCity, false);
        window.FairMotion?.reveal(mapCanvas, {duration:.6});
      })
      .catch(() => {
        mapCanvas.setAttribute('aria-busy', 'false');
        get('.home-map-loading').textContent = '地图暂未载入，请用下方地区选择继续探索。';
      });

    const api = {
      setEntering(entering) {
        isEntering = Boolean(entering);
        enter.disabled = isEntering || !selectedWorld;
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
