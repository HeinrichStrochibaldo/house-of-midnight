/* Alpha 0.4.2 — обновление жестом сверху. */
(()=>{'use strict';
const threshold=88,max=124;let startY=0,delta=0,tracking=false,refreshing=false;
const indicator=document.createElement('div');indicator.id='pull-refresh';indicator.setAttribute('role','status');indicator.setAttribute('aria-live','polite');indicator.textContent='↓ Потяните для обновления';document.body.appendChild(indicator);
const reset=()=>{tracking=false;delta=0;indicator.classList.remove('visible','ready');indicator.style.transform='translate(-50%,-110%)'};
const allowed=t=>!t.closest('input,textarea,select,button,[contenteditable="true"],#chronicle-timeline');
document.addEventListener('touchstart',e=>{if(refreshing||e.touches.length!==1||window.scrollY>1||!allowed(e.target)){tracking=false;return}startY=e.touches[0].clientY;delta=0;tracking=true},{passive:true});
document.addEventListener('touchmove',e=>{if(!tracking||e.touches.length!==1)return;const y=e.touches[0].clientY-startY;if(y<=0||window.scrollY>1){reset();return}delta=Math.min(max,y*.55);indicator.classList.add('visible');indicator.classList.toggle('ready',delta>=threshold);indicator.textContent=delta>=threshold?'↑ Отпустите для обновления':'↓ Потяните для обновления';indicator.style.transform='translate(-50%,'+Math.min(20,delta-85)+'px)'},{passive:true});
document.addEventListener('touchend',()=>{if(!tracking)return;const ready=delta>=threshold;reset();if(ready){refreshing=true;indicator.classList.add('visible','ready');indicator.textContent='↻ Обновление…';indicator.style.transform='translate(-50%,20px)';window.location.reload()}},{passive:true});
document.addEventListener('touchcancel',reset,{passive:true});
})();
