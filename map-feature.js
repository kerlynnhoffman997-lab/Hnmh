'use strict';
(() => {
  function mount({container, catalog, onExplore}) {
    const features = (window.FairMapFeatures || []).filter(item => catalog[item.targetId] && catalog[item.sceneId] && catalog[item.worldId]);
    const section = document.createElement('section');
    section.className = 'home-map-feature'; section.hidden = true;
    section.setAttribute('aria-label', '地图上的地方风物');
    section.innerHTML = `<figure><img width="1600" height="900" decoding="async" alt="" hidden><span class="home-feature-image-note" hidden>画面暂未展开</span></figure><div class="home-feature-copy"><small>地图上的风物</small><h3 tabindex="-1"></h3><p></p><button type="button">从会场看起 <span aria-hidden="true">↗</span></button><span class="home-feature-route"></span></div>`;
    container.querySelector('.home-map-bottom').after(section);
    const img = section.querySelector('img'), button = section.querySelector('button');
    const note = section.querySelector('.home-feature-image-note');
    let selected = null, request = 0, entering = false;
    function update(world) {
      const next = features.find(feature => feature.worldId === world?.id) || null;
      if (next === selected) return;
      selected = next; const ticket = ++request;
      section.hidden = !next; section.dataset.state = next ? 'loading' : 'idle';
      img.hidden = true; img.removeAttribute('src'); note.hidden = true;
      if (!next) return;
      section.dataset.city = next.city; section.dataset.feature = next.symbol;
      section.querySelector('h3').textContent = next.title;
      section.querySelector('p').textContent = next.summary;
      section.querySelector('.home-feature-route').textContent = '会场 → ' + catalog[next.sceneId].label + (next.targetId !== next.sceneId ? ' → 器物' : '');
      button.setAttribute('aria-label', `走进${world.label}，寻找${next.title}`);
      const image = new Image(); image.src = next.image;
      image.decode().then(() => {
        if (ticket !== request) return;
        img.src = next.image; img.alt = next.alt; img.hidden = false; section.dataset.state = 'ready';
      }).catch(() => {
        if (ticket !== request) return;
        note.hidden = false; section.dataset.state = 'error';
      });
    }
    button.addEventListener('click', () => { if (!entering && selected) onExplore(selected); });
    return {update, element:section, focus() {
      if (section.hidden) return;
      section.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
      section.querySelector('h3').focus({preventScroll:true});
    }, setEntering(value) { entering = Boolean(value); button.disabled = entering; }};
  }
  window.FairMapFeature = Object.freeze({mount});
})();
