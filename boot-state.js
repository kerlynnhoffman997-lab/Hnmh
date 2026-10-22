'use strict';
(() => {
  const panel = document.getElementById('opening-state');
  const message = panel.querySelector('p');
  const actions = panel.querySelector('.opening-actions');
  let finished = false;
  const slow = setTimeout(() => {
    if (!finished) message.textContent = '画卷还在准备，请稍等片刻。';
  }, 7000);
  const timeout = setTimeout(() => fail('这次打开有些慢，请检查网络后重新打开。'), 20000);
  function fail(text) {
    if (finished) return;
    clearTimeout(slow); clearTimeout(timeout);
    panel.dataset.state = 'error';
    panel.querySelector('h1').textContent = '画卷暂未展开';
    message.textContent = text || '请检查网络后重试，故事会留在这里。';
    actions.hidden = false;
  }
  panel.querySelector('button').addEventListener('click', () => location.reload());
  window.FairBoot = Object.freeze({
    fail,
    ready() {
      finished = true; clearTimeout(slow); clearTimeout(timeout);
      const restoreFocus = panel.contains(document.activeElement);
      panel.hidden = true; document.body.classList.remove('booting');
      if (restoreFocus) {
        const home = document.getElementById('province-home');
        (home.hidden ? document.getElementById('viewer') : home.querySelector('.home-enter'))?.focus({preventScroll:true});
      }
    }
  });
})();
