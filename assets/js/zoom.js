(function(){
var links=document.querySelectorAll('.shot a');if(!links.length)return;
var z=document.createElement('div');z.className='zoom';z.hidden=true;z.setAttribute('role','dialog');z.setAttribute('aria-modal','true');z.setAttribute('aria-label','Screenshot, full size');
z.innerHTML='<div class="zoom-bar"><span class="zoom-cap"></span><button type="button" class="zoom-size">Actual size</button><a class="zoom-open" target="_blank" rel="noopener">Open in new tab</a><button type="button" class="zoom-close" aria-label="Close">Close ✕</button></div><div class="zoom-stage"><img alt=""></div>';
document.body.appendChild(z);
var st=z.querySelector('.zoom-stage'),im=st.querySelector('img'),cap=z.querySelector('.zoom-cap'),sz=z.querySelector('.zoom-size'),op=z.querySelector('.zoom-open'),last;
function full(on){st.classList.toggle('full',on);sz.textContent=on?'Fit to screen':'Actual size'}
function close(){z.hidden=true;document.body.style.overflow='';full(false);if(last)last.focus()}
links.forEach(function(a){a.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();last=a;var i=a.querySelector('img');im.src=a.href;im.alt=i?i.alt:'';cap.textContent=i?i.alt:'';op.href=a.href;full(false);z.hidden=false;document.body.style.overflow='hidden';z.querySelector('.zoom-close').focus()})});
im.addEventListener('click',function(){full(!st.classList.contains('full'))});
sz.addEventListener('click',function(){full(!st.classList.contains('full'))});
z.querySelector('.zoom-close').addEventListener('click',close);
st.addEventListener('click',function(e){if(e.target===st)close()});
document.addEventListener('keydown',function(e){if(!z.hidden&&e.key==='Escape')close()});
})();
