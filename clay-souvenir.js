'use strict';
(() => {
  const mounted = new WeakMap();
  const website = 'https://kerlynnhoffman997-lab.github.io/Hnmh/';
  const pictures = Object.freeze([
    {id: 'fair-hb-jx', image: 'assets/worlds/hb-jx.webp', title: '城墙下的庙会', caption: '灰砖城墙托住戏服与红鼓，摊前的小鸟把热闹拉近。'},
    {id: 'scene-hb-jx-04', image: 'assets/scenes/hb-jx-04.webp', title: '走近泥咕咕摊', caption: '木架把鸟兽泥塑层层摆开，一件小物被托到游客眼前。'},
    {id: 'object-hb-jx-04-clay-bird', image: 'assets/details-generated/object-hb-jx-04-clay-bird.webp', title: '一只鸟形泥咕咕', caption: '短嘴、圆腹与彩色花点，把浚县的热闹收进小小泥鸟。'}
  ]);

  function mount({container, onReturn} = {}) {
    const doc = container?.ownerDocument;
    if (!doc?.body) throw new TypeError('FairSouvenir requires a document container');
    if (mounted.has(doc)) return mounted.get(doc);
    const win = doc.defaultView;
    if (![...doc.querySelectorAll('link[rel="stylesheet"]')].some(link => new URL(link.href).pathname.endsWith('/clay-souvenir.css'))) {
      const link = doc.createElement('link'); link.rel = 'stylesheet'; link.id = 'clay-souvenir-styles';
      link.href = new URL('clay-souvenir.css', doc.baseURI).href; doc.head.append(link);
    }
    const dialog = doc.createElement('dialog'); dialog.id = 'clay-souvenir';
    dialog.setAttribute('aria-labelledby', 'clay-souvenir-heading');
    dialog.setAttribute('aria-describedby', 'clay-souvenir-intro');
    dialog.innerHTML = `
      <header class="clay-souvenir-header"><div><small>留一卷烟火</small><h2 id="clay-souvenir-heading">我的浚县赶会小卷</h2><p id="clay-souvenir-intro">把这次看过的画面，留在一张小卷里。</p></div><button type="button" class="clay-souvenir-close" aria-label="关闭小卷">×</button></header>
      <div class="clay-souvenir-body">
        <p class="clay-souvenir-record"></p>
        <div class="clay-souvenir-placeholder"><span>正在装裱这次相逢…</span></div>
        <img class="clay-souvenir-preview" alt="" tabindex="0" hidden>
        <p class="clay-souvenir-save-note">可保存 PNG，也可长按小卷图片，选择保存图片。</p>
      </div>
      <footer class="clay-souvenir-footer"><p class="clay-souvenir-status" role="status" aria-live="polite" aria-atomic="true"></p><div class="clay-souvenir-actions"><button type="button" class="clay-souvenir-save" disabled>保存 PNG</button><button type="button" class="clay-souvenir-retry" hidden>重新生成小卷</button><button type="button" class="clay-souvenir-return">继续逛会</button></div></footer>`;
    // The homepage can be hidden while the visitor is inside the scene iframe.
    doc.body.append(dialog);
    const get = selector => dialog.querySelector(selector);
    const closeButton = get('.clay-souvenir-close'), save = get('.clay-souvenir-save');
    const retry = get('.clay-souvenir-retry'), preview = get('.clay-souvenir-preview');
    const placeholder = get('.clay-souvenir-placeholder'), status = get('.clay-souvenir-status');
    const body = get('.clay-souvenir-body');
    const fallbackBackdrop = doc.createElement('div'); fallbackBackdrop.className = 'clay-souvenir-fallback-backdrop'; fallbackBackdrop.hidden = true;
    doc.body.append(fallbackBackdrop);
    let selected = [], generation = 0, imageUrl = null, fileName = '', previousFocus = null, fallback = false, modalActive = false;

    function retireUrl(url) {
      if (url) win.setTimeout(() => win.URL.revokeObjectURL(url), 30000);
    }

    function captureFocus() {
      let target = doc.activeElement;
      if (target?.tagName === 'IFRAME') {
        try { target = target.contentDocument?.activeElement || target; } catch { /* Use the iframe itself across origins. */ }
      }
      return target;
    }

    function restoreFocus() {
      const target = previousFocus; previousFocus = null;
      if (target?.isConnected && !target.closest?.('[hidden],[inert]') && !target.disabled) target.focus?.({preventScroll: true});
    }

    function finishClose() {
      if (!modalActive || dialog.open) return;
      modalActive = false;
      generation++; fallbackBackdrop.hidden = true; dialog.classList.remove('is-fallback');
      fallback = false; dialog.removeAttribute('aria-busy'); restoreFocus();
    }

    function close() {
      if (!dialog.open) return;
      if (fallback) { dialog.removeAttribute('open'); finishClose(); }
      else { dialog.close(); finishClose(); }
    }

    closeButton.addEventListener('click', close);
    dialog.addEventListener('close', finishClose);
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
    });
    fallbackBackdrop.addEventListener('click', close);
    dialog.addEventListener('keydown', event => {
      if (event.key === 'Escape' && fallback) { event.preventDefault(); close(); }
      if (event.key !== 'Tab') return;
      const focusable = [...dialog.querySelectorAll('button:not(:disabled),img[tabindex],a[href]')]
        .filter(element => !element.hidden && !element.closest('[hidden]') && element.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && doc.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && doc.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    get('.clay-souvenir-return').addEventListener('click', () => {
      close();
      if (typeof onReturn === 'function') void Promise.resolve().then(() => onReturn()).catch(() => {});
    });

    function loadImage(path) {
      return new Promise((resolve, reject) => {
        const image = new win.Image(); image.crossOrigin = 'anonymous';
        const timer = win.setTimeout(() => reject(new Error('Image timeout')), 15000);
        image.onload = () => {
          const ready = typeof image.decode === 'function' ? image.decode() : Promise.resolve();
          ready.then(() => {
            win.clearTimeout(timer);
            if (image.naturalWidth && image.naturalHeight) resolve(image);
            else reject(new Error('Empty image'));
          }, error => { win.clearTimeout(timer); reject(error); });
        };
        image.onerror = () => { win.clearTimeout(timer); reject(new Error('Image unavailable')); };
        image.src = new URL(path, doc.baseURI).href;
      });
    }

    function toBlob(canvas) {
      return new Promise((resolve, reject) => {
        if (typeof canvas.toBlob !== 'function') { reject(new Error('PNG export unavailable')); return; }
        canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('PNG export failed')), 'image/png');
      });
    }

    function fitText(ctx, text, x, y, maxWidth, size, color, serif = false) {
      const family = serif ? '"Noto Serif SC", "Songti SC", "SimSun", serif' : '"Noto Sans SC", "Microsoft YaHei", sans-serif';
      let fontSize = size;
      ctx.font = `${fontSize}px ${family}`;
      while (ctx.measureText(text).width > maxWidth && fontSize > 16) ctx.font = `${--fontSize}px ${family}`;
      ctx.fillStyle = color; ctx.fillText(text, x, y);
    }

    function compose(images, qr) {
      const width = 1200, margin = 80, imageWidth = 1040, imageHeight = 585;
      const top = 236, block = 675, gap = 22, footer = 210;
      const height = top + selected.length * block + Math.max(0, selected.length - 1) * gap + footer;
      const canvas = doc.createElement('canvas'); canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas unavailable');
      ctx.fillStyle = '#f6f0e3'; ctx.fillRect(0, 0, width, height);
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#9d452f'; ctx.fillRect(margin, 62, 48, 4);
      fitText(ctx, '我的浚县赶会小卷', margin, 88, imageWidth, 27, '#8d6948');
      fitText(ctx, '从城墙下，听见一只泥鸟', margin, 132, imageWidth, 53, '#294333', true);
      fitText(ctx, `本次看过的 ${selected.length} 处画面 · 浚县正月古庙会`, margin, 200, imageWidth, 22, '#6d765e');
      selected.forEach((stop, index) => {
        const y = top + index * (block + gap), source = images[index];
        const scale = Math.min(imageWidth / source.naturalWidth, imageHeight / source.naturalHeight);
        const w = source.naturalWidth * scale, h = source.naturalHeight * scale;
        ctx.fillStyle = '#e8e1d1'; ctx.fillRect(margin, y, imageWidth, imageHeight);
        // Place the existing illustration whole; never crop or redraw its content.
        ctx.drawImage(source, margin + (imageWidth - w) / 2, y + (imageHeight - h) / 2, w, h);
        fitText(ctx, `${String(index + 1).padStart(2, '0')}  ${stop.title}`, margin, y + imageHeight + 17, imageWidth, 27, '#914a34', true);
        fitText(ctx, stop.caption, margin, y + imageHeight + 57, imageWidth, 22, '#52644d');
      });
      const footerY = height - footer + 10;
      ctx.fillStyle = '#b9a47a80'; ctx.fillRect(margin, footerY, imageWidth, 1);
      fitText(ctx, 'AI 概念插画 · 泥哨声音为艺术模拟', margin, footerY + 29, 820, 22, '#765e42');
      fitText(ctx, '只收录这次看过的画面，让故事留在这张小卷里。', margin, footerY + 66, 820, 20, '#66715b');
      fitText(ctx, '赶一场中原庙会', margin, footerY + 112, 820, 25, '#294333', true);
      fitText(ctx, website.replace(/^https?:\/\//, ''), margin, footerY + 153, 820, 19, '#66715b');
      if (qr) {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(width - margin - 176, footerY + 18, 176, 176);
        ctx.imageSmoothingEnabled = false; ctx.drawImage(qr, width - margin - 170, footerY + 24, 164, 164);
        ctx.imageSmoothingEnabled = true;
      }
      return canvas;
    }

    async function generate() {
      const ticket = ++generation;
      dialog.dataset.state = 'loading'; dialog.setAttribute('aria-busy', 'true');
      save.disabled = true; retry.hidden = true; preview.hidden = true; placeholder.hidden = false;
      placeholder.firstElementChild.textContent = '正在装裱这次相逢…';
      status.textContent = '正在准备小卷…';
      try {
        const [images, qr] = await Promise.all([
          Promise.all(selected.map(stop => loadImage(stop.image))),
          loadImage('assets/review-qr.png').catch(() => null)
        ]);
        if (ticket !== generation || !dialog.open) return false;
        if (doc.fonts?.ready) await Promise.race([doc.fonts.ready, new Promise(resolve => win.setTimeout(resolve, 1500))]);
        if (ticket !== generation || !dialog.open) return false;
        const canvas = compose(images, qr), blob = await toBlob(canvas);
        if (ticket !== generation || !dialog.open) return false;
        const nextUrl = win.URL.createObjectURL(blob), previousUrl = imageUrl;
        preview.src = nextUrl;
        preview.alt = `我的浚县赶会小卷：${selected.map(stop => stop.title).join('、')}。AI概念插画，泥哨声音为艺术模拟。`;
        try { if (typeof preview.decode === 'function') await preview.decode(); }
        catch (error) { retireUrl(nextUrl); throw error; }
        if (ticket !== generation || !dialog.open) { retireUrl(nextUrl); return false; }
        imageUrl = nextUrl; retireUrl(previousUrl);
        fileName = `Hnmh-xunxian-scroll-${selected.length}.png`;
        dialog.dataset.width = String(canvas.width); dialog.dataset.height = String(canvas.height);
        save.dataset.filename = fileName; save.disabled = false;
        placeholder.hidden = true; preview.hidden = false;
        dialog.dataset.state = 'ready'; dialog.removeAttribute('aria-busy');
        status.textContent = `小卷已展开，${canvas.width} × ${canvas.height} 像素，可保存为 PNG。`;
        body.scrollTop = 0;
        return true;
      } catch {
        if (ticket !== generation || !dialog.open) return false;
        dialog.dataset.state = 'error'; dialog.removeAttribute('aria-busy');
        placeholder.firstElementChild.textContent = '有一幅画暂未展开';
        status.textContent = '小卷暂未生成，请检查网络后重试。';
        retry.hidden = false; retry.disabled = false; save.disabled = true;
        return false;
      }
    }

    retry.addEventListener('click', () => { if (dialog.dataset.state !== 'loading') void generate(); });
    save.addEventListener('click', () => {
      if (save.disabled || !imageUrl || dialog.dataset.state !== 'ready') return;
      const anchor = doc.createElement('a');
      if (!('download' in anchor)) {
        status.textContent = '此浏览器请长按小卷图片，选择“保存图片”。';
        preview.focus({preventScroll: true}); return;
      }
      try {
        anchor.href = imageUrl; anchor.download = fileName; anchor.hidden = true;
        dialog.append(anchor); anchor.click(); anchor.remove();
        status.textContent = '已发起 PNG 下载；若没有出现保存选项，可长按小卷图片保存。';
      } catch {
        anchor.remove(); status.textContent = '下载暂未启动，可长按小卷图片保存，或再次点击“保存 PNG”。';
      }
    });

    const api = Object.freeze({
      open({stops} = {}) {
        const visited = new Set(typeof stops === 'string' ? [] : Array.from(stops || []).filter(id => typeof id === 'string'));
        selected = pictures.filter(stop => visited.has(stop.id));
        dialog.dataset.stops = selected.map(stop => stop.id).join(','); dialog.dataset.count = String(selected.length);
        get('.clay-souvenir-record').textContent = selected.length ? `本次小卷收录：${selected.map(stop => stop.title).join(' → ')}` : '这次还没有可收进小卷的画面。';
        if (!dialog.open) {
          previousFocus = captureFocus();
          modalActive = true;
          if (typeof dialog.showModal === 'function') dialog.showModal();
          else {
            fallback = true; dialog.setAttribute('open', ''); dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true');
            dialog.classList.add('is-fallback'); fallbackBackdrop.hidden = false;
          }
          closeButton.focus({preventScroll: true});
        }
        if (!selected.length) {
          generation++; dialog.dataset.state = 'empty'; dialog.removeAttribute('aria-busy');
          preview.hidden = true; placeholder.hidden = false; placeholder.firstElementChild.textContent = '先走近一处画面，再把它留在小卷里。';
          save.disabled = true; retry.hidden = true; status.textContent = '小卷只记录这次实际看过的画面。';
          return Promise.resolve(false);
        }
        return generate();
      }
    });
    win.addEventListener('pagehide', event => { if (!event.persisted && imageUrl) win.URL.revokeObjectURL(imageUrl); });
    mounted.set(doc, api); return api;
  }

  window.FairSouvenir = Object.freeze({mount});
})();
