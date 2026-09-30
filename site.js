var WHATSAPP="32471634305", MSG="Olá, Aline! Vim pelo site Advocacia Consciente.";
document.querySelectorAll('[data-wa]').forEach(function(a){a.href="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(MSG);a.target="_blank";a.rel="noopener";});
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded',false);});});}
document.getElementById('ano').textContent=new Date().getFullYear();
