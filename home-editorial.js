'use strict';
(() => {
  function mount({container, catalog, onLocate, onBack}) {
    const themes = (window.FairHomeEditorialData || []).map(theme => ({...theme,
      stops: theme.stops.filter(stop => catalog[stop.worldId]?.kind === 'world' && catalog[stop.sceneId])
    })).filter(theme => theme.stops.length);
    if (!themes.length) return null;
    const section = document.createElement('section');
    section.className = 'home-editorial'; section.id = 'home-editorial';
    section.setAttribute('aria-labelledby', 'home-editorial-title');
    section.innerHTML = `
      <header class="home-editorial-heading">
        <div><p class="home-overline">叁 · 画里逛会</p><h2 id="home-editorial-title" tabindex="-1">一场庙会，<em>许多种相逢。</em></h2></div>
        <div class="home-editorial-intro"><p>听锣鼓，认手艺，在一桌热饭前停一停。<br>沿着三条线索，看看中原庙会里的不同风景。</p><button class="home-editorial-back" type="button">回到地图 <span aria-hidden="true">↑</span></button></div>
      </header>
      <div class="home-theme-tabs" role="group" aria-label="选择逛会主题"></div>
      <div class="home-editorial-stops" role="group" aria-label="换一处风景"></div>
      <div class="home-editorial-spread">
        <figure class="home-editorial-picture" aria-busy="true">
          <img class="home-editorial-image" width="1664" height="936" decoding="async" alt="" hidden>
          <span class="home-editorial-mark" aria-hidden="true"></span>
          <figcaption class="home-editorial-caption"></figcaption>
          <p class="home-editorial-image-status">正在展开画面…</p>
        </figure>
        <div class="home-editorial-story">
          <div class="home-editorial-meta"><span class="home-editorial-city"></span><span class="home-editorial-count"></span></div>
          <p class="home-editorial-kicker"></p><h3 class="home-editorial-title"></h3>
          <p class="home-editorial-copy"></p>
          <button class="home-editorial-locate" type="button" disabled>在地图找到这场庙会 <span aria-hidden="true">↗</span></button>
          <p class="home-editorial-route-note">先在地图寻一座城，再走进整场庙会。</p>
        </div>
      </div>
      <p class="home-editorial-announcement home-sr-only" role="status" aria-live="polite" aria-atomic="true"></p>`;
    container.querySelector('.home-footer').before(section);
    const get = selector => section.querySelector(selector);
    const picture = get('.home-editorial-picture'), image = get('.home-editorial-image');
    const locate = get('.home-editorial-locate'), back = get('.home-editorial-back');
    const status = get('.home-editorial-image-status'), stopGroup = get('.home-editorial-stops');
    let themeIndex = 0, request = 0, started = false, entering = false, loading = false;
    let displayedStop = null, reveal = null;
    const stopIndexes = themes.map(() => 0);
    const themeTitles = ['看热闹', '识手艺', '寻烟火'];

    const themeButtons = themes.map((theme, index) => {
      const button = document.createElement('button');
      button.className = 'home-theme-button'; button.type = 'button'; button.dataset.theme = theme.id;
      button.innerHTML = `<span class="home-theme-number">${String(index + 1).padStart(2, '0')}</span><strong></strong><small></small>`;
      button.querySelector('strong').textContent = themeTitles[index] || theme.kicker;
      button.querySelector('small').textContent = theme.label;
      button.addEventListener('click', () => {
        if (entering || (index === themeIndex && section.dataset.state === 'ready')) return;
        themeIndex = index; renderChoices(); void loadStop(true);
      });
      get('.home-theme-tabs').append(button); return button;
    });

    function renderChoices() {
      const theme = themes[themeIndex];
      themeButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === themeIndex)));
      stopGroup.setAttribute('aria-label', `${theme.label}，换一处风景`);
      stopGroup.replaceChildren();
      theme.stops.forEach((stop, index) => {
        const button = document.createElement('button');
        button.className = 'home-editorial-stop'; button.type = 'button';
        button.dataset.world = stop.worldId; button.dataset.scene = stop.sceneId;
        button.setAttribute('aria-pressed', String(index === stopIndexes[themeIndex]));
        button.innerHTML = '<span></span><strong></strong>';
        button.querySelector('span').textContent = stop.city;
        button.querySelector('strong').textContent = stop.tag;
        button.disabled = entering;
        button.addEventListener('click', () => {
          if (entering || (index === stopIndexes[themeIndex] && section.dataset.state === 'ready')) return;
          stopIndexes[themeIndex] = index;
          stopGroup.querySelectorAll('button').forEach((control, i) => control.setAttribute('aria-pressed', String(i === index)));
          void loadStop(true);
        });
        stopGroup.append(button);
      });
    }

    function updateStory(stop, theme, index) {
      get('.home-editorial-city').textContent = stop.city + ' · ' + stop.tag;
      get('.home-editorial-count').textContent = `${String(index + 1).padStart(2, '0')} / ${String(theme.stops.length).padStart(2, '0')}`;
      get('.home-editorial-kicker').textContent = theme.kicker;
      get('.home-editorial-title').textContent = stop.title;
      get('.home-editorial-copy').textContent = stop.story;
      get('.home-editorial-mark').textContent = stop.tag;
      get('.home-editorial-caption').textContent = `${stop.city} · ${catalog[stop.worldId].label}`;
      locate.replaceChildren(document.createTextNode(`在地图找到${stop.city} `));
      const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); locate.append(arrow);
      locate.setAttribute('aria-label', `在地图选择${stop.city}，${catalog[stop.worldId].label}`);
      get('.home-editorial-route-note').textContent = `从${stop.city}出发，走进${catalog[stop.worldId].label}。`;
      section.dataset.world = stop.worldId; section.dataset.scene = stop.sceneId;
      displayedStop = stop;
    }

    async function loadStop(announce = false) {
      started = true; loading = true;
      const ticket = ++request, theme = themes[themeIndex], index = stopIndexes[themeIndex], stop = theme.stops[index];
      reveal?.cancel();
      section.dataset.state = 'loading'; section.setAttribute('aria-busy', 'true');
      picture.setAttribute('aria-busy', 'true'); locate.disabled = true;
      status.textContent = `正在展开${stop.city}的画面…`; status.hidden = false;
      const next = new Image(); next.src = stop.image;
      let failed = false;
      try { await next.decode(); } catch { failed = true; }
      if (ticket !== request) return;
      updateStory(stop, theme, index);
      image.hidden = failed;
      if (!failed) { image.src = stop.image; image.alt = stop.alt; }
      else { image.removeAttribute('src'); image.alt = ''; }
      status.hidden = !failed;
      if (failed) status.textContent = '这幅画暂未展开。可再点一次地点重试，也可先去地图逛逛。';
      section.dataset.state = failed ? 'error' : 'ready';
      section.setAttribute('aria-busy', 'false'); picture.setAttribute('aria-busy', 'false');
      loading = false; locate.disabled = entering;
      if (announce) get('.home-editorial-announcement').textContent = `${theme.label}，${stop.city}，${stop.title}。${failed ? '图片暂未载入。' : ''}`;
      if (!failed && announce) reveal = window.FairMotion?.animate(image, {opacity: [.3, 1]}, {duration: .32});
    }

    // Prepare only the opening image when this chapter approaches the viewport.
    renderChoices(); updateStory(themes[0].stops[0], themes[0], 0);
    section.dataset.state = 'idle';
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); if (!started) void loadStop(); }
    }, {root: container, rootMargin: '240px 0px', threshold: 0});
    observer.observe(section);
    locate.addEventListener('click', () => { if (!entering && !loading && displayedStop) onLocate(displayedStop.worldId); });
    back.addEventListener('click', () => { if (!entering) onBack(); });
    return {element: section, setEntering(value) {
      entering = Boolean(value);
      for (const button of section.querySelectorAll('button')) button.disabled = entering;
      locate.disabled = entering || loading || !started;
    }};
  }
  window.FairHomeEditorial = Object.freeze({mount});
})();
