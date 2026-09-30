// O cálculo acontece só no navegador. Respostas e pontuação nunca são enviadas nem armazenadas.
// Com autorização de cookies de estatística, apenas a faixa do resultado (baixo, moderado ou alto) é contada no Google Analytics.
// Autoavaliação: Escala de Estresse Percebido (PSS-10; Cohen, Kamarck & Mermelstein, 1983). Educativa, não diagnóstica.
var ITENS=[
 {t:"Com que frequência você ficou aborrecido(a) por causa de algo que aconteceu inesperadamente?"},
 {t:"Com que frequência você sentiu que foi incapaz de controlar coisas importantes na sua vida?"},
 {t:"Com que frequência você esteve nervoso(a) ou estressado(a)?"},
 {t:"Com que frequência você esteve confiante em sua capacidade de lidar com seus problemas pessoais?",inv:1},
 {t:"Com que frequência você sentiu que as coisas aconteceram da maneira que você esperava?",inv:1},
 {t:"Com que frequência você achou que não conseguiria lidar com todas as coisas que tinha por fazer?"},
 {t:"Com que frequência você foi capaz de controlar irritações na sua vida?",inv:1},
 {t:"Com que frequência você sentiu que todos os aspectos de sua vida estavam sob controle?",inv:1},
 {t:"Com que frequência você esteve bravo(a) por causa de coisas que estiveram fora de seu controle?"},
 {t:"Com que frequência você sentiu que os problemas acumularam tanto que você não conseguiria resolvê-los?"}];
var OPC=["Nunca","Quase nunca","Algumas vezes","Com frequência","Muitas vezes"];
var qs=document.getElementById('qs');
ITENS.forEach(function(it,i){
  var d=document.createElement('div');d.className='q';
  var html='<fieldset><legend>'+(i+1)+'. '+it.t+'</legend><div class="opts">';
  OPC.forEach(function(o,v){html+='<label><input type="radio" name="q'+i+'" value="'+v+'"><span>'+o+'</span></label>';});
  d.innerHTML=html+'</div></fieldset>';qs.appendChild(d);
});
document.getElementById('calc').addEventListener('click',function(){
  var s=0,miss=0;
  for(var i=0;i<ITENS.length;i++){var c=document.querySelector('input[name=q'+i+']:checked');if(!c){miss++;continue;}var v=+c.value;s+=ITENS[i].inv?4-v:v;}
  var err=document.getElementById('qerr');
  if(miss){err.textContent='Responda todas as perguntas para ver o resultado.';return;}
  err.textContent='';
  var t,d,faixa;
  if(s<=13){faixa='baixo';t='Estresse percebido baixo';d='Sua pontuação está na faixa baixa. Um bom momento para fortalecer hábitos de proteção, pausas de atenção e limites claros, antes que a pressão aumente.';}
  else if(s<=26){faixa='moderado';t='Estresse percebido moderado';d='Sua pontuação está na faixa moderada. Situações do dia a dia têm sido percebidas como imprevisíveis ou sobrecarregantes com alguma frequência. Práticas estruturadas de atenção e gestão do estresse podem ajudar a reorganizar a rotina.';}
  else{faixa='alto';t='Estresse percebido alto';d='Sua pontuação está na faixa alta. Vale olhar para isso com cuidado e, se houver sofrimento intenso, conversar com um profissional de saúde. Um programa estruturado pode complementar esse cuidado.';}
  document.getElementById('rt').textContent=t+' · '+s+' de 40 pontos';
  document.getElementById('rd').textContent=d;
  (window.dataLayer=window.dataLayer||[]).push({event:'conversao',conversao:'autoavaliacao-concluida',faixa:faixa});
  var r=document.getElementById('result');r.classList.add('show');r.scrollIntoView({behavior:'smooth',block:'center'});
});
