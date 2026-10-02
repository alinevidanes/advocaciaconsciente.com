// Índice de Bem-Estar (WHO-5), Organização Mundial da Saúde. Educativo, não diagnóstico.
// O cálculo acontece só no navegador. Respostas e pontuação nunca são enviadas nem armazenadas.
// Com autorização de cookies de estatística, o Google Analytics conta apenas que a autoavaliação foi concluída, sem pontuação.
var ITENS=[
 "Eu me senti alegre e bem-disposto(a)",
 "Eu me senti calmo(a) e tranquilo(a)",
 "Eu me senti ativo(a) e enérgico(a)",
 "Acordei me sentindo renovado(a) e descansado(a)",
 "Meu dia a dia tem sido preenchido com coisas que me interessam"];
var OPC=[[5,"O tempo todo"],[4,"A maior parte do tempo"],[3,"Mais da metade do tempo"],[2,"Menos da metade do tempo"],[1,"Algumas vezes"],[0,"Nunca"]];
var qs=document.getElementById('qs');
ITENS.forEach(function(t,i){
  var d=document.createElement('div');d.className='q';
  var h='<fieldset><legend>'+(i+1)+'. '+t+'</legend><div class="opts">';
  OPC.forEach(function(o){h+='<label><input type="radio" name="q'+i+'" value="'+o[0]+'"><span>'+o[1]+' ('+o[0]+')</span></label>';});
  d.innerHTML=h+'</div></fieldset>';qs.appendChild(d);
});
document.getElementById('calc').addEventListener('click',function(){
  var s=0,miss=0;
  for(var i=0;i<ITENS.length;i++){var c=document.querySelector('input[name=q'+i+']:checked');if(!c){miss++;continue;}s+=+c.value;}
  var err=document.getElementById('qerr');
  if(miss){err.textContent='Responda todas as afirmações para ver o resultado.';return;}
  err.textContent='';
  document.getElementById('rt').textContent='Seu resultado: '+(s*4)+' de 100';
  document.getElementById('rd').textContent='Este número mede o seu bem-estar nas últimas duas semanas: quanto maior, melhor.';
  (window.dataLayer=window.dataLayer||[]).push({event:'conversao',conversao:'autoavaliacao-concluida'});
  var r=document.getElementById('result');r.classList.add('show');r.scrollIntoView({behavior:'smooth',block:'center'});
});
