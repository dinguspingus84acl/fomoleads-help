(function(){
var q=document.getElementById('q'),res=document.getElementById('results'),browse=document.getElementById('browse');
if(!q)return;var I=window.SEARCH_INDEX||[];
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function run(v){v=(v||'').trim().toLowerCase();if(!v){res.hidden=true;browse.hidden=false;return}
var terms=v.split(/\s+/),out=[];
I.forEach(function(a){var t=a.t.toLowerCase(),d=a.d.toLowerCase(),x=a.x.toLowerCase(),s=0,ok=true;
terms.forEach(function(w){var hit=0;if(t.indexOf(w)>=0)hit+=10;if(d.indexOf(w)>=0)hit+=4;if(x.indexOf(w)>=0)hit+=1;if(!hit)ok=false;s+=hit});
if(ok)out.push([s,a])});
out.sort(function(a,b){return b[0]-a[0]});
res.innerHTML='<h2>'+out.length+' result'+(out.length==1?'':'s')+' for “'+esc(v)+'”</h2>'+(out.length?'<ul>'+out.map(function(r){var a=r[1];return '<li><a href="'+a.u+'"><strong>'+esc(a.t)+'</strong><span>'+esc(a.c)+' · '+esc(a.d)+'</span></a></li>'}).join('')+'</ul>':'<p>No articles match. Try another word, or email <a href="mailto:support@fomoleads.io">support@fomoleads.io</a>.</p>');
res.hidden=false;browse.hidden=true}
q.addEventListener('input',function(){run(q.value)});
var p=new URLSearchParams(location.search).get('q');if(p){q.value=p;run(p)}
})();
