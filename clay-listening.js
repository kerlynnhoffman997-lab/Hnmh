'use strict';
(() => {
  const routes = {
    'fair-hb-jx': {target:'scene-hb-jx-04',point:{x:.16,y:.70},step:1,title:'热闹里，哪一处在“咕咕”？',found:'找到了，声音从泥塑摊这边传来。',action:'走进泥咕咕摊'},
    'scene-hb-jx-04': {target:'object-hb-jx-04-clay-bird',point:{x:.46,y:.40},step:2,title:'一桌泥塑，谁藏着这声“咕咕”？',found:'就在这里：摊主掌中的小小泥鸟。',action:'走近掌中的泥鸟'}
  };
  const mounted=new WeakMap();
  function mount({frame,onNavigate}) {
    if(mounted.has(frame))return mounted.get(frame);
    const doc=frame.contentDocument, view=frame.contentWindow;
    const stage=doc.getElementById('main-image-container'), labels=doc.getElementById('labels-container');
    const surface=doc.createElement('div');surface.id='clay-listening-surface';surface.hidden=true;
    surface.tabIndex=0;surface.setAttribute('role','group');
    surface.setAttribute('aria-label','循声寻物画面。按住并移动寻找，键盘方向键移动，空格或回车试听，Escape 退出。');
    surface.setAttribute('aria-describedby','clay-listening-feedback');
    surface.innerHTML='<span class="listening-cursor" aria-hidden="true"><i></i><b>听</b></span><span class="listening-found-point" aria-hidden="true"><i>✓</i><b>找到了</b></span>';
    const panel=doc.createElement('section');panel.id='clay-listening-panel';panel.hidden=true;
    panel.setAttribute('aria-label','循声寻物引导');
    panel.innerHTML='<div class="listening-heading"><span>循声寻物 <small></small></span><button class="listening-exit" type="button" aria-label="退出循声寻物">结束寻找 ×</button></div><h2></h2><p class="listening-instruction">按住画面，移动着听。越靠近，声音越清楚。</p><div class="listening-feedback"><span class="listening-direction" aria-hidden="true">↖</span><p id="clay-listening-feedback" role="status" aria-live="polite"></p><div class="listening-distance" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div><div class="listening-actions"><button class="listening-audio" type="button">开启声音</button><button class="listening-next" type="button">直接走近 →</button></div><small class="listening-note">声音为艺术模拟 · 静音也能循光寻找</small>';
    stage.append(surface,panel);
    let node=null,active=false,found=false,pending=false,settling=false,trigger=null,request=0;
    let listener={x:.74,y:.40},pointer=null,stopVoice=null,limitTimer=null,voiceTimer=null,resizeFrame=0;
    let labelsInert=false,lastMessage='',point=null;
    const discovered=new Set();
    const get=s=>panel.querySelector(s);
    const readySound=()=>Boolean(window.FairAudio?.readState().clayWhistleAvailable);
    const dialogOpen=()=>Boolean(document.querySelector('dialog[open]'));
    function message(text) { if(text!==lastMessage){get('#clay-listening-feedback').textContent=text;lastMessage=text;} }
    function silence() {
      stopVoice?.();stopVoice=null;clearTimeout(limitTimer);surface.classList.remove('is-listening');
      clearTimeout(voiceTimer);
    }
    function release() {
      silence();const held=pointer;pointer=null;
      if(held!==null){try{surface.releasePointerCapture(held);}catch{}}
    }
    function relocate() {
      if(!active)return;
      if(doc.body.classList.contains('reading-page')) {
        const page=doc.getElementById('picture-reading-page');stage.after(panel);
        if(panel.parentElement!==page)page.insertBefore(panel,doc.getElementById('picture-tools'));
      } else if(panel.parentElement!==stage)stage.append(panel);
    }
    function targetPoint() {
      // Normalized observation points in these two existing concept paintings.
      // Follow the painted subject rather than displaced legacy label anchors.
      const anchor=routes[node]?.point,image=doc.getElementById('main-image');
      if(!anchor||!image?.naturalWidth)return null;
      const r=image.getBoundingClientRect(),s=surface.getBoundingClientRect();
      if(!s.width||!s.height||!r.width||!r.height)return null;
      let width=r.width,height=r.height,left=r.left,top=r.top;
      const fit=view.getComputedStyle(image).objectFit;
      if(fit==='contain'||fit==='cover'){
        const scale=(fit==='contain'?Math.min:Math.max)(r.width/image.naturalWidth,r.height/image.naturalHeight);
        width=image.naturalWidth*scale;height=image.naturalHeight*scale;
        left+=(r.width-width)/2;top+=(r.height-height)/2;
      }
      const x=(left+width*anchor.x-s.left)/s.width,y=(top+height*anchor.y-s.top)/s.height;
      if(x<0||x>1||y<0||y>1)return null;
      return{x,y,width:s.width,height:s.height};
    }
    function update({discover=false}={}) {
      if(!active)return;
      point=targetPoint();
      const cursor=surface.querySelector('.listening-cursor');
      cursor.style.left=listener.x*100+'%';cursor.style.top=listener.y*100+'%';
      if(!point){message('画面正在就位，也可以直接走近。');return;}
      const dx=point.x-listener.x,dy=point.y-listener.y;
      const distance=Math.hypot(dx*point.width,dy*point.height);
      const radius=Math.max(28,Math.min(point.width,point.height)*.11);
      const proximity=Math.max(0,1-distance/(Math.hypot(point.width,point.height)*.68));
      const intensity=.10+.9*proximity*proximity;
      surface.style.setProperty('--listening-near',proximity.toFixed(3));
      const pan=Math.max(-.85,Math.min(.85,dx*2));
      stopVoice?.update?.({pan,intensity});
      const level=Math.max(1,Math.min(5,Math.ceil(proximity*5)));
      [...get('.listening-distance').children].forEach((e,i)=>e.classList.toggle('is-lit',i<level));
      if(discover&&distance<=radius&&!found){
        found=true;discovered.add(node);release();
        get('h2').textContent=routes[node].found;
        get('.listening-next').textContent=routes[node].action+' →';
      }
      surface.dataset.found=String(found);panel.dataset.found=String(found);
      const marker=surface.querySelector('.listening-found-point');
      marker.style.left=point.x*100+'%';marker.style.top=point.y*100+'%';
      get('.listening-audio').textContent=readySound()?'声音设置':'开启声音';
      if(found){
        get('.listening-direction').textContent='✓';
        message('这处线索找到了。走近看看，还有下一段故事。');
        return;
      }
      const horizontal=Math.abs(dx*point.width)>radius?(dx<0?'左':'右'):'';
      const vertical=Math.abs(dy*point.height)>radius?(dy<0?'上':'下'):'';
      const dir=horizontal+vertical;
      const arrows={'左上':'↖','右上':'↗','左下':'↙','右下':'↘','左':'←','右':'→','上':'↑','下':'↓'};
      get('.listening-direction').textContent=arrows[dir]||'◎';
      message(distance<radius*2.5?'很近了，在这一带再找找。':`往画面${dir||'这'}方找找${readySound()?'，留意声音的远近。':'，光格越亮，离线索越近。'}`);
      return{pan,intensity};
    }
    function listen() {
      if(!active||found||pending||settling||frame.inert||dialogOpen())return;
      silence();surface.classList.add('is-listening');
      const values=update()||{};
      stopVoice=window.FairAudio?.clayWhistle({...values,maxDurationMs:8000})||null;
      limitTimer=setTimeout(()=>{silence();if(active&&!found)message('松开，再按住画面继续寻找。');},8000);
    }
    function move(clientX,clientY) {
      const r=surface.getBoundingClientRect();
      if(!r.width||!r.height)return;
      listener={x:Math.max(.01,Math.min(.99,(clientX-r.left)/r.width)),y:Math.max(.01,Math.min(.99,(clientY-r.top)/r.height))};
      update({discover:true});
    }
    function close({restoreFocus=false}={}) {
      request++;release();active=false;pending=false;settling=false;point=null;
      surface.hidden=true;panel.hidden=true;doc.body.classList.remove('clay-listening-active');
      labels.inert=labelsInert;
      if(restoreFocus&&!frame.inert){
        const visible=trigger?.isConnected&&trigger.getClientRects().length&&getComputedStyle(trigger).visibility!=='hidden';
        const focus=visible?trigger:doc.querySelector('.clay-listen');
        if(focus&&!focus.disabled)focus.focus({preventScroll:true});
      }
    }
    async function start({nodeId,targetId,source}={}) {
      const route=routes[nodeId];
      if(!route||route.target!==targetId||frame.inert)return false;
      close();node=nodeId;trigger=source;found=false;active=true;settling=true;
      const token=++request;listener={x:.74,y:.4};lastMessage='';
      get('small').textContent=route.step===1?'01 / 会场寻摊':'02 / 摊前寻鸟';
      get('h2').textContent=route.title;get('.listening-next').textContent='直接走近 →';
      get('.listening-next').disabled=false;get('.listening-audio').disabled=false;
      // Fit the whole painting so its existing anchor stays reachable at any orientation.
      if(!doc.body.classList.contains('reading-page')&&!doc.body.classList.contains('picture-fit'))doc.getElementById('picture-fit')?.click();
      labelsInert=labels.inert;labels.inert=true;
      surface.hidden=false;panel.hidden=false;surface.dataset.found='false';panel.dataset.found='false';
      surface.setAttribute('aria-busy','true');
      doc.body.classList.add('clay-listening-active');relocate();
      doc.getElementById('picture-reading-page')?.scrollTo({top:0,behavior:'instant'});
      surface.focus({preventScroll:true});
      let previous=null,stable=0;
      for(let i=0;i<30;i++){
        if(token!==request||!active)return false;
        const next=targetPoint();
        if(next&&previous&&Math.hypot((next.x-previous.x)*next.width,(next.y-previous.y)*next.height)<.5)stable++;else stable=0;
        previous=next;update();
        if(stable>=5)break;
        await new Promise(resolve=>setTimeout(resolve,50));
      }
      if(token!==request||!active)return false;
      settling=false;surface.setAttribute('aria-busy','false');update();return true;
    }
    surface.addEventListener('pointerdown',event=>{
      if(event.button!==0||!event.isPrimary||pending||settling||found)return;
      event.preventDefault();event.stopImmediatePropagation();
      pointer=event.pointerId;try{surface.setPointerCapture(pointer);}catch{}
      surface.focus({preventScroll:true});move(event.clientX,event.clientY);listen();
    });
    surface.addEventListener('pointermove',event=>{
      if(pointer!==event.pointerId||!active||pending||found)return;
      event.preventDefault();event.stopPropagation();move(event.clientX,event.clientY);
    });
    for(const type of ['pointerup','pointercancel','lostpointercapture'])surface.addEventListener(type,release);
    for(const type of ['mousedown','mousemove','mouseup','touchstart','touchmove','touchend','click','dblclick','wheel'])surface.addEventListener(type,event=>{
      event.stopImmediatePropagation();if(event.cancelable)event.preventDefault();
    },{passive:false});
    surface.addEventListener('keydown',event=>{
      if(!active||pending||settling)return;
      if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)){
        event.preventDefault();event.stopImmediatePropagation();
        const step=event.shiftKey?.025:.065;
        listener.x=Math.max(.01,Math.min(.99,listener.x+(event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0)));
        listener.y=Math.max(.01,Math.min(.99,listener.y+(event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0)));
        update({discover:true});
      }else if([' ','Enter'].includes(event.key)){
        event.preventDefault();event.stopImmediatePropagation();if(!event.repeat){update({discover:true});listen();}
      }
    });
    surface.addEventListener('keyup',event=>{if([' ','Enter'].includes(event.key)){event.preventDefault();event.stopPropagation();release();}});
    surface.addEventListener('blur',release);
    get('.listening-exit').addEventListener('click',()=>close({restoreFocus:true}));
    get('.listening-audio').addEventListener('click',()=>{release();window.FairAudio?.openSettings(get('.listening-audio'));});
    get('.listening-next').addEventListener('click',async()=>{
      if(!active||pending)return;
      const next=routes[node].target,token=request;pending=true;release();
      get('.listening-next').disabled=true;get('.listening-next').textContent='正在走近…';
      try{await onNavigate(next,{direction:'next'});if(token===request)close();}
      catch{if(token===request){pending=false;get('.listening-next').disabled=false;get('.listening-next').textContent='再试一次 →';message('画面暂未展开，刚才的发现还在。');}}
    });
    for(const type of ['pointerdown','mousedown','touchstart','click','keydown','wheel'])panel.addEventListener(type,event=>event.stopPropagation());
    function onResize(){release();view.cancelAnimationFrame(resizeFrame);resizeFrame=view.requestAnimationFrame(()=>{relocate();update();});}
    view.addEventListener('resize',onResize);new ResizeObserver(()=>{if(active)onResize();}).observe(stage);
    new MutationObserver(()=>{if(active)update();}).observe(doc.getElementById('main-image'),{attributes:true,attributeFilter:['style']});
    for(const v of [window,view])for(const type of ['blur','pagehide'])v.addEventListener(type,release);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)release();});
    document.getElementById('fair-sound-dialog')?.addEventListener('close',()=>{if(active){update();surface.focus({preventScroll:true});}});
    const api={start,update(next){if(next!==node&&active)close();node=next;},dismiss(){if(!active)return false;close({restoreFocus:true});return true;},
      readState(){return{active,node,found,pending,settling,listener:{...listener},target:point?{x:point.x,y:point.y}:null,discovered:[...discovered]};}};
    mounted.set(frame,api);return api;
  }
  window.FairListening=Object.freeze({mount,readState(frame=document.getElementById('viewer')){return mounted.get(frame)?.readState();}});
})();
