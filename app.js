const I18N={
es:{title:'Test PL-400',sub:'Batería de preguntas completa',avail:'preguntas disponibles',sets:'Exámenes de la batería',all:'Todos',none:'Ninguno',count:'Número de preguntas',mode:'Modo',practice:'Práctica (corrige al momento)',exam:'Examen (corrige al final)',shuffle:'Barajar preguntas',shuffleOpts:'Barajar opciones',onlyFailed:'Solo las que fallé antes',start:'Empezar test',noQ:'No hay preguntas con esa selección.',q:'Pregunta',of:'de',check:'Comprobar',next:'Siguiente',prev:'Anterior',finish:'Terminar',selectN:'Selecciona {n}',selectOne:'Selecciona una',ok:'Correcta',ko:'Incorrecta',right:'Respuesta correcta',case:'Ver enunciado completo (caso de estudio)',score:'Resultado',correct:'correctas',review:'Revisión',onlyWrong:'Solo falladas',again:'Nuevo test',retry:'Repetir falladas',unans:'Sin responder',reset:'Borrar falladas',all_:'Todas',type:'Tipo de pregunta',typeAll:'Todas',typeMcq:'Opción múltiple',typeSelf:'Hotspot / drag & drop',selfHint:'Resuelve la pregunta sobre la imagen y compara con la solución.',reveal:'Mostrar respuesta',gotIt:'La acerté',missed:'La fallé',answer:'Solución',selfMarkOk:'Marcada como acertada',selfMarkKo:'Marcada como fallada',selfTag:'autocorrección',zoomHint:'Toca la imagen para ampliarla.',close:'Cerrar',ansLetters:'Respuesta',
history:'Historial',back:'Volver',exit:'Salir',exitTitle:'¿Qué quieres hacer con este intento?',keepGoing:'Seguir con el test',finishNow:'Terminar y ver resultados',saveExit:'Guardar y salir',restart:'Reiniciar con la misma selección',discard:'Descartar intento y salir',exitHint:'Guardar y salir deja el intento en el historial para continuarlo más tarde.',
statusInProgress:'En curso',statusAbandoned:'Sin terminar',statusFinished:'Terminado',attempt:'Intento',noAttempts:'Todavía no hay intentos guardados. Cada test que hagas aparecerá aquí.',view:'Ver',resume:'Continuar',del:'Borrar',sure:'¿Seguro?',yes:'Sí, borrar',cancel:'Cancelar',compare:'Comparar',selectTwo:'Marca dos intentos para compararlos',answeredOf:'respondidas',started:'Inicio',
improved:'Mejoradas',regressed:'Empeoradas',keptOk:'Siguen bien',keptKo:'Siguen mal',noData:'Sin datos',sharedQ:'preguntas en común',onlyInA:'solo en el intento A',onlyInB:'solo en el intento B',attemptA:'Intento A (anterior)',attemptB:'Intento B (posterior)',noneInCommon:'Estos intentos no comparten ninguna pregunta.',
io:'Exportar / importar',ioTitle:'Copia de seguridad en JSON',ioText:'Los intentos se guardan automáticamente en este navegador. Exporta un JSON para conservarlos, llevarlos a otro equipo o contrastarlos con otras versiones.',download:'Descargar JSON',copy:'Copiar JSON',copied:'JSON copiado al portapapeles.',copyFail:'No se pudo copiar automáticamente. El JSON está en el cuadro de texto, selecciónalo y cópialo.',dlHint:'Si la descarga no empieza, usa Copiar JSON.',importFile:'Importar archivo',importPaste:'Importar texto pegado',pasteHere:'Pega aquí un JSON exportado',importDone:'Intentos nuevos importados: {n}.',importErr:'El JSON no es válido.',clearAll:'Borrar todo el historial',storageErr:'El navegador no permite guardar datos locales; el historial no se conservará.',
fromA:'Intento A',fromB:'Intento B',noAnswer:'sin responder',filterAll:'Todas',syncFolder:'Guardado automático en data/history.json',syncSaving:'Guardando en data/history.json...',syncError:'No se pudo guardar en la carpeta data',optMissing:'Texto de la opción A no disponible en el PDF',flagOk:'Respuesta marcada como correcta en el PDF',flagDoubt:'Respuesta marcada como dudosa en el PDF',kindHotspot:'Hotspot',kindDragdrop:'Drag & drop',kindImage:'Imagen',bank:'Respuestas',bankTitle:'Todas las preguntas con su respuesta correcta',search:'Buscar en preguntas y opciones',showMore:'Mostrar más',shown:'mostradas',nAnswers:'{n} respuestas correctas',maxReached:'máximo alcanzado',syncLocal:'Solo en este navegador',ioServer:'El servidor local escribe cada cambio en data/history.json, siempre en la misma carpeta.'},
en:{title:'PL-400 Test',sub:'Complete question bank',avail:'questions available',sets:'Exam sets',all:'All',none:'None',count:'Number of questions',mode:'Mode',practice:'Practice (instant feedback)',exam:'Exam (graded at the end)',shuffle:'Shuffle questions',shuffleOpts:'Shuffle options',onlyFailed:'Only previously failed',start:'Start test',noQ:'No questions match this selection.',q:'Question',of:'of',check:'Check',next:'Next',prev:'Previous',finish:'Finish',selectN:'Select {n}',selectOne:'Select one',ok:'Correct',ko:'Incorrect',right:'Correct answer',case:'Show full text (case study)',score:'Result',correct:'correct',review:'Review',onlyWrong:'Wrong only',again:'New test',retry:'Retry failed',unans:'Unanswered',reset:'Clear failed',all_:'All',type:'Question type',typeAll:'All',typeMcq:'Multiple choice',typeSelf:'Hotspot / drag & drop',selfHint:'Work out the answer on the image, then compare with the solution.',reveal:'Show answer',gotIt:'I got it right',missed:'I got it wrong',answer:'Solution',selfMarkOk:'Marked as correct',selfMarkKo:'Marked as wrong',selfTag:'self-graded',zoomHint:'Tap an image to enlarge it.',close:'Close',ansLetters:'Answer',
history:'History',back:'Back',exit:'Exit',exitTitle:'What do you want to do with this attempt?',keepGoing:'Keep going',finishNow:'Finish and see results',saveExit:'Save and exit',restart:'Restart with the same selection',discard:'Discard attempt and exit',exitHint:'Save and exit keeps the attempt in the history so you can resume it later.',
statusInProgress:'In progress',statusAbandoned:'Unfinished',statusFinished:'Finished',attempt:'Attempt',noAttempts:'No saved attempts yet. Every test you take will show up here.',view:'View',resume:'Resume',del:'Delete',sure:'Are you sure?',yes:'Yes, delete',cancel:'Cancel',compare:'Compare',selectTwo:'Tick two attempts to compare them',answeredOf:'answered',started:'Started',
improved:'Improved',regressed:'Regressed',keptOk:'Still right',keptKo:'Still wrong',noData:'No data',sharedQ:'shared questions',onlyInA:'only in attempt A',onlyInB:'only in attempt B',attemptA:'Attempt A (earlier)',attemptB:'Attempt B (later)',noneInCommon:'These attempts share no questions.',
io:'Export / import',ioTitle:'JSON backup',ioText:'Attempts are saved automatically in this browser. Export a JSON to keep them, move them to another computer or compare them with other versions.',download:'Download JSON',copy:'Copy JSON',copied:'JSON copied to the clipboard.',copyFail:'Automatic copy failed. The JSON is in the text box, select it and copy it.',dlHint:'If the download does not start, use Copy JSON.',importFile:'Import file',importPaste:'Import pasted text',pasteHere:'Paste an exported JSON here',importDone:'New attempts imported: {n}.',importErr:'The JSON is not valid.',clearAll:'Clear all history',storageErr:'The browser does not allow local storage; history will not be kept.',
fromA:'Attempt A',fromB:'Attempt B',noAnswer:'unanswered',filterAll:'All',syncFolder:'Auto-saved to data/history.json',syncSaving:'Saving to data/history.json...',syncError:'Could not save to the data folder',optMissing:'Option A text is not available in the PDF',flagOk:'Answer marked as correct in the PDF',flagDoubt:'Answer marked as doubtful in the PDF',kindHotspot:'Hotspot',kindDragdrop:'Drag & drop',kindImage:'Image',bank:'Answers',bankTitle:'All questions with their correct answer',search:'Search questions and options',showMore:'Show more',shown:'shown',nAnswers:'{n} correct answers',maxReached:'maximum reached',syncLocal:'This browser only',ioServer:'The local server writes every change to data/history.json, always in the same folder.'}
};
let lang='es';try{const s=localStorage.getItem('pl400.lang');if(s&&I18N[s])lang=s}catch(e){}
const T=(k,v)=>{let s=I18N[lang][k]||k;if(v)for(const[a,b]of Object.entries(v))s=s.replace('{'+a+'}',b);return s};
const LS_FAILED='pl400.failed',LS_ATT='pl400.attempts';
let failed=new Set();
try{failed=new Set(JSON.parse(localStorage.getItem(LS_FAILED)||'[]'))}catch(e){}
let attempts=[];
try{attempts=JSON.parse(localStorage.getItem(LS_ATT)||'[]');if(!Array.isArray(attempts))attempts=[]}catch(e){attempts=[]}
let storageOk=true;
let serverMode=false,syncState='local',syncTimer=null;
const syncLabel=()=>syncState==='saving'?T('syncSaving'):syncState==='error'?T('syncError'):serverMode?T('syncFolder'):T('syncLocal');
const updateBadge=()=>{const b=document.getElementById('sync');if(b){b.textContent=syncLabel();b.className='syncbadge '+(serverMode?(syncState==='error'?'err':'on'):'off')}};
const buildPayload=()=>({app:'pl400-test',version:1,savedAt:new Date().toISOString(),failed:[...failed],attempts});
function syncNow(){
 if(!serverMode)return Promise.resolve();
 syncState='saving';updateBadge();
 return fetch('api/history',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(buildPayload())})
  .then(r=>{if(!r.ok)throw new Error('http '+r.status);syncState='ok'})
  .catch(()=>{syncState='error'})
  .then(updateBadge);
}
function queueSync(){
 if(!serverMode)return;
 clearTimeout(syncTimer);syncTimer=setTimeout(syncNow,250);
}
window.addEventListener('pagehide',()=>{
 if(serverMode&&syncTimer){clearTimeout(syncTimer);syncTimer=null;try{navigator.sendBeacon('api/history',new Blob([JSON.stringify(buildPayload())],{type:'application/json'}))}catch(e){}}
});
const saveFailed=()=>{try{localStorage.setItem(LS_FAILED,JSON.stringify([...failed]))}catch(e){storageOk=false}queueSync()};
const persist=()=>{try{localStorage.setItem(LS_ATT,JSON.stringify(attempts))}catch(e){storageOk=false}queueSync()};
const byId=new Map(DATA.map(d=>[d.id,d]));
const exams=[...new Set(DATA.map(d=>d.exam))].sort();
const cfg={sel:new Set(exams),count:25,mode:'practice',type:'all',shuffle:true,shuffleOpts:false,onlyFailed:false};
let view='setup',run=null,viewAtt=null,viewFrom='history',wrongOnly=true;
let histSel=[],delConfirm=null,exitOpen=false,clearConfirm=false;
let cmpFilter='all',ioMsg='',ioText='';
const bankState={exams:new Set(exams),q:'',type:'all',limit:40};
const app=document.getElementById('app');
const mount=(...nodes)=>app.replaceChildren(...nodes.flat(Infinity).filter(n=>n&&n.nodeType));
const IMGSRC=f=>(typeof IMGDATA!=='undefined'&&IMGDATA[f])||'img/'+f;
const el=(tag,attrs={},...kids)=>{const e=document.createElement(tag);for(const[k,v]of Object.entries(attrs)){if(k==='class')e.className=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else if(k.startsWith('aria-'))e.setAttribute(k,String(!!v));else if(v===true)e.setAttribute(k,'');else if(v!==false&&v!=null)e.setAttribute(k,v)}for(const c of kids.flat()){if(c==null||c===false)continue;e.append(c.nodeType?c:document.createTextNode(c))}return e};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const fmtDate=t=>t?new Date(t).toLocaleString(lang==='es'?'es-ES':'en-GB',{dateStyle:'short',timeStyle:'short'}):'';
function closeLightbox(){
 const ov=document.getElementById('lightbox');
 if(ov)ov.remove();
 document.body.classList.remove('noscroll');
 document.removeEventListener('keydown',lightboxKey);
}
function lightboxKey(e){if(e.key==='Escape')closeLightbox()}
function openLightbox(src){
 closeLightbox();
 const ov=el('div',{id:'lightbox',class:'lightbox',role:'dialog','aria-modal':'true'},
  el('button',{class:'lbclose',id:'lbclose',onclick:closeLightbox,'aria-label':T('close')},'×'),
  el('div',{class:'lbscroll'},el('img',{src,alt:''})));
 document.body.append(ov);
 document.body.classList.add('noscroll');
 document.addEventListener('keydown',lightboxKey);
 const c=document.getElementById('lbclose');if(c)c.focus({preventScroll:true});
}
const imgNode=f=>el('img',{class:'qimg',src:IMGSRC(f),alt:'',loading:'lazy',onclick:e=>{e.preventDefault();openLightbox(e.target.src)}});
const partsNode=items=>el('div',{class:'parts'},items.map(it=>it.i?imgNode(it.i):el('p',{class:'stem'},it.t)));
const isRight=(q,s)=>q.self?s.has('OK'):(s.size===q.ans.length&&[...s].every(k=>q.ans.includes(k)));
const flagsNode=q=>{
 const items=[];
 if(q.kind)items.push(el('span',{class:'badge'},T(q.kind==='hotspot'?'kindHotspot':q.kind==='dragdrop'?'kindDragdrop':'kindImage')));
 if(q.flag==='ok')items.push(el('span',{class:'badge keptOk'},T('flagOk')));
 if(q.flag==='doubt')items.push(el('span',{class:'badge regressed'},T('flagDoubt')));
 return items.length?el('div',{class:'flags'},items):null;
};
const shortText=q=>{const texts=q.stem.filter(x=>x.t);const long=texts.reduce((n,x)=>n+x.t.length,0)>1200;const t=long?texts[texts.length-1]:texts[0];const s=t?t.t:'';return s.length>150?s.slice(0,147)+'...':s};

function buildQs(att){
 return att.qids.map(id=>{
  const q=byId.get(id);if(!q)return null;
  let opts=q.opts;const ord=att.opts&&att.opts[id];
  if(opts&&ord)opts=ord.map(k=>opts.find(o=>o.k===k)).filter(Boolean);
  return {...q,opts};
 }).filter(Boolean);
}
const selOf=(att,id)=>new Set(((att.answers||{})[id]||{}).sel||[]);
function statsOf(att){
 const qs=buildQs(att);
 const ok=qs.filter(q=>isRight(q,selOf(att,q.id))).length;
 const answered=qs.filter(q=>selOf(att,q.id).size>0).length;
 return {n:qs.length,ok,answered,pct:qs.length?Math.round(ok/qs.length*100):0};
}
const outcome=(att,id)=>{const q=byId.get(id),s=selOf(att,id);if(!q||!s.size)return 'na';return isRight(q,s)?'ok':'ko'};
const sortedAttempts=()=>attempts.slice().sort((a,b)=>b.startedAt-a.startedAt);
const rankOf=att=>attempts.slice().sort((a,b)=>a.startedAt-b.startedAt).findIndex(x=>x.id===att.id)+1;
const statusLabel=s=>s==='finished'?T('statusFinished'):s==='abandoned'?T('statusAbandoned'):T('statusInProgress');

function render(opt={}){
 const keep=!!opt.keep;
 const y=window.scrollY;
 const active=document.activeElement;
 const fk=active&&active.getAttribute?(active.getAttribute('data-f')||active.id||null):null;
 if(keep)app.style.minHeight=app.offsetHeight+'px';
 if(view==='quiz'&&run)renderQuiz();
 else if(view==='attempt')renderAttempt();
 else if(view==='history')renderHistory();
 else if(view==='compare')renderCompare();
 else if(view==='io')renderIO();
 else if(view==='bank')renderBank();
 else renderSetup();
 if(keep){
  app.style.minHeight='';
  window.scrollTo(0,y);
  if(fk){const t=app.querySelector(`[data-f="${fk}"]`)||document.getElementById(fk);if(t&&t.focus){t.focus({preventScroll:true});if(t.tagName==='INPUT'&&t.type==='text'){const n=t.value.length;t.setSelectionRange(n,n)}}}
 }else window.scrollTo(0,0);
}
const refresh=()=>render({keep:true});

function header(opts={}){
 const right=[];
 if(!opts.minimal){
  right.push(el('button',{class:'tgl',id:'bankbtn',onclick:()=>{view='bank';render()}},T('bank')));
  right.push(el('button',{class:'tgl',id:'hist',onclick:()=>{delConfirm=null;view='history';render()}},`${T('history')} (${attempts.length})`));
 }
 right.push(el('button',{class:'tgl',id:'lang',onclick:()=>{lang=lang==='es'?'en':'es';try{localStorage.setItem('pl400.lang',lang)}catch(e){}refresh()}},lang==='es'?'EN':'ES'));
 return el('div',{class:'top'+(opts.minimal?' compact':'')},el('div',{},el('h1',{},T('title')),el('p',{class:'sub'},T('sub')),el('span',{id:'sync',class:'syncbadge '+(serverMode?(syncState==='error'?'err':'on'):'off')},syncLabel())),el('div',{class:'row'},right));
}
const storageWarn=()=>storageOk?null:el('div',{class:'panel warn'},T('storageErr'));

function pool(){return DATA.filter(d=>cfg.sel.has(d.exam)&&(!cfg.onlyFailed||failed.has(d.id))&&(cfg.type==='all'||(cfg.type==='self')===!!d.self))}

function renderSetup(){
 const p=pool();
 const nSelf=DATA.filter(d=>d.self).length;
 const chips=exams.map(x=>el('button',{class:'chip','data-f':'e'+x,'aria-pressed':cfg.sel.has(x),onclick:()=>{cfg.sel.has(x)?cfg.sel.delete(x):cfg.sel.add(x);refresh()}},x));
 const counts=[10,25,50,100,0].map(n=>el('button',{class:'chip','data-f':'n'+n,'aria-pressed':cfg.count===n,onclick:()=>{cfg.count=n;refresh()}},n===0?T('all_'):String(n)));
 const modes=['practice','exam'].map(m=>el('button',{class:'chip','data-f':'m'+m,'aria-pressed':cfg.mode===m,onclick:()=>{cfg.mode=m;refresh()}},T(m)));
 const types=[['all','typeAll'],['mcq','typeMcq'],['self','typeSelf']].map(([v,k])=>el('button',{class:'chip','data-f':'t'+v,'aria-pressed':cfg.type===v,onclick:()=>{cfg.type=v;refresh()}},T(k)));
 const cb=(key,label,id)=>el('label',{class:'check',for:id},el('input',{type:'checkbox',id,checked:cfg[key],onchange:e=>{cfg[key]=e.target.checked;refresh()}}),label);
 const resumable=sortedAttempts().find(a=>a.status!=='finished'&&Object.keys(a.answers||{}).length>0);
 mount(header(),storageWarn(),
  resumable?el('div',{class:'panel resume'},el('div',{},el('strong',{},`${T('attempt')} #${rankOf(resumable)} · ${statusLabel(resumable.status)}`),el('div',{class:'sub'},`${Object.keys(resumable.answers).length}/${resumable.qids.length} ${T('answeredOf')} · ${fmtDate(resumable.startedAt)}`)),el('button',{class:'btn',id:'resume',onclick:()=>resumeAttempt(resumable)},T('resume'))):null,
  el('div',{class:'panel'},
  el('div',{class:'row'},el('span',{class:'mono'},`${DATA.length}`),el('span',{class:'sub'},`${T('avail')} (${DATA.length-nSelf} ${T('typeMcq').toLowerCase()} · ${nSelf} ${T('typeSelf').toLowerCase()})`)),
  el('div',{},el('div',{class:'label'},T('sets')),el('div',{class:'chips',style:'margin-top:8px'},chips,
   el('button',{class:'tgl',onclick:()=>{exams.forEach(x=>cfg.sel.add(x));refresh()}},T('all')),
   el('button',{class:'tgl',onclick:()=>{cfg.sel.clear();refresh()}},T('none')))),
  el('div',{},el('div',{class:'label'},T('type')),el('div',{class:'seg',style:'margin-top:8px'},types)),
  el('div',{},el('div',{class:'label'},T('count')),el('div',{class:'seg',style:'margin-top:8px'},counts)),
  el('div',{},el('div',{class:'label'},T('mode')),el('div',{class:'seg',style:'margin-top:8px'},modes)),
  el('div',{class:'row'},cb('shuffle',T('shuffle'),'c1'),cb('shuffleOpts',T('shuffleOpts'),'c2'),cb('onlyFailed',`${T('onlyFailed')} (${failed.size})`,'c3')),
  el('div',{class:'row'},el('button',{class:'btn',id:'start',disabled:!p.length,onclick:start},`${T('start')} · ${cfg.count&&cfg.count<p.length?cfg.count:p.length}`),
   failed.size?el('button',{class:'btn ghost small',onclick:()=>{failed.clear();saveFailed();refresh()}},T('reset')):null),
  p.length?null:el('p',{class:'sub'},T('noQ'))));
}

function start(){
 let p=pool();if(cfg.shuffle)p=shuf(p);if(cfg.count&&cfg.count<p.length)p=p.slice(0,cfg.count);
 const optsOrder={};
 if(cfg.shuffleOpts)p.forEach(q=>{if(q.opts&&!q.opts.some(o=>o.i))optsOrder[q.id]=shuf(q.opts).map(o=>o.k)});
 const att={id:uid(),startedAt:Date.now(),finishedAt:null,status:'in-progress',mode:cfg.mode,type:cfg.type,sets:[...cfg.sel],onlyFailed:cfg.onlyFailed,qids:p.map(q=>q.id),opts:optsOrder,answers:{}};
 attempts.push(att);persist();
 beginRun(att,0);
}
function beginRun(att,startIndex){
 const qs=buildQs(att);
 const ans=qs.map(q=>selOf(att,q.id));
 run={att,qs,ans,checked:qs.map((q,i)=>ans[i].size>0&&(q.self||att.mode==='practice')),mode:att.mode,i:startIndex};
 exitOpen=false;view='quiz';render();
}
function resumeAttempt(att){
 const qs=buildQs(att);
 let i=qs.findIndex(q=>!selOf(att,q.id).size);if(i<0)i=0;
 att.status='in-progress';persist();
 beginRun(att,i);
}
function record(q,i,right){
 const s=run.ans[i];
 if(s.size)run.att.answers[q.id]={sel:[...s],r:right,t:Date.now()};
 else delete run.att.answers[q.id];
 if(s.size){right?failed.delete(q.id):failed.add(q.id);saveFailed()}
 persist();
}

function stemNode(q){
 const it=q.stem;
 const textLen=it.reduce((n,x)=>n+(x.t?x.t.length:0),0);
 if(textLen>1200){
  const idx=[];it.forEach((x,k)=>{if(x.t)idx.push(k)});
  const keep=Math.min(3,idx.length-1);
  const cut=keep>0?idx[idx.length-keep]:0;
  if(cut>0)return el('div',{class:'parts'},el('details',{},el('summary',{},T('case')),partsNode(it.slice(0,cut))),partsNode(it.slice(cut)));
 }
 return partsNode(it);
}
function optionsNode(q,sel,reveal,onpick){
 return el('div',{class:'opts'},q.opts.map((o,idx)=>{
  let cls='opt';
  if(reveal){const c=q.ans.includes(o.k),s=sel.has(o.k);if(c&&s)cls+=' good';else if(s&&!c)cls+=' bad';else if(c)cls+=' missed'}
  const locked=!reveal&&q.multi&&sel.size>=q.ans.length&&!sel.has(o.k);
  if(locked)cls+=' locked';
  return el('button',{class:cls,'data-f':'o'+idx,'aria-pressed':sel.has(o.k),disabled:reveal||locked,onclick:()=>onpick&&onpick(o.k)},el('span',{class:'k'},o.k),el('span',{class:'t'},o.missing?el('span',{class:'miss'},T('optMissing')):o.t,(o.i||[]).map(imgNode)));
 }));
}
function solutionNode(q){
 return el('div',{class:'panel sol'},el('div',{class:'label'},T('answer')),
  q.ansText?el('div',{class:'mono'},`${T('ansLetters')}: ${q.ansText.split('').join(', ')}`):null,
  q.ex.length?partsNode(q.ex):null);
}

function leaveRun(){
 const a=run.att;
 if(Object.keys(a.answers).length){if(a.status!=='finished'){a.status='abandoned'}}
 else attempts=attempts.filter(x=>x.id!==a.id);
 persist();
}
function exitPanel(){
 const hasAns=Object.keys(run.att.answers).length>0;
 return el('div',{class:'panel exitbox'},
  el('h2',{},T('exitTitle')),
  el('p',{class:'sub'},T('exitHint')),
  el('div',{class:'exitopts'},
   el('button',{class:'btn',id:'keep',onclick:()=>{exitOpen=false;refresh()}},T('keepGoing')),
   hasAns?el('button',{class:'btn ghost',id:'fin',onclick:finish},T('finishNow')):null,
   el('button',{class:'btn ghost',id:'saveexit',onclick:()=>{leaveRun();run=null;exitOpen=false;view='setup';render()}},T('saveExit')),
   el('button',{class:'btn ghost',id:'restart',onclick:()=>{leaveRun();run=null;exitOpen=false;start()}},T('restart')),
   el('button',{class:'btn ghost danger',id:'discard',onclick:()=>{attempts=attempts.filter(x=>x.id!==run.att.id);persist();run=null;exitOpen=false;view='setup';render()}},T('discard'))));
}

function renderQuiz(){
 const q=run.qs[run.i],sel=run.ans[run.i],n=run.qs.length,last=run.i===n-1;
 const revealed=run.checked[run.i];
 const nav=i=>{run.i=i;render()};
 const advance=()=>{last?finish():nav(run.i+1)};
 let body,actions;
 if(q.self){
  const graded=sel.size>0;
  const grade=v=>{sel.clear();sel.add(v);record(q,run.i,v==='OK');refresh()};
  body=[stemNode(q),el('div',{class:'tag'},`${T('selfTag')} · ${T('selfHint')} ${T('zoomHint')}`),revealed?solutionNode(q):null,
   revealed&&graded?el('div',{class:'verdict '+(sel.has('OK')?'good':'bad')},sel.has('OK')?T('selfMarkOk'):T('selfMarkKo')):null];
  actions=!revealed
   ?[el('button',{class:'btn',id:'reveal',onclick:()=>{run.checked[run.i]=true;refresh()}},T('reveal'))]
   :[el('button',{class:'btn',id:'ok',onclick:()=>grade('OK')},T('gotIt')),el('button',{class:'btn ghost',id:'ko',onclick:()=>grade('KO')},T('missed'))];
  if(revealed&&graded)actions.push(el('button',{class:'btn',id:'next',onclick:advance},last?T('finish'):T('next')));
 }else{
  const reveal=revealed&&run.mode==='practice';
  const ok=isRight(q,sel);
  const pick=k=>{
   if(q.multi){if(sel.has(k))sel.delete(k);else if(sel.size<q.ans.length)sel.add(k);else return}else{sel.clear();sel.add(k)}
   if(run.mode==='exam')record(q,run.i,isRight(q,sel));
   refresh();
  };
  const fb=reveal?el('div',{class:'panel',style:'padding:12px 16px;gap:8px'},
   el('div',{class:'verdict '+(ok?'good':'bad')},ok?T('ok'):T('ko')),
   el('div',{class:'sub'},`${T('right')}: `,el('span',{class:'mono'},q.ans.split('').join(', '))),
   q.ex.length?partsNode(q.ex):null):null;
  body=[stemNode(q),el('div',{class:'tag'},q.multi?`${T('selectN',{n:q.ans.length})} · ${sel.size}/${q.ans.length}${sel.size>=q.ans.length&&!reveal?' · '+T('maxReached'):''}`:T('selectOne')),optionsNode(q,sel,reveal,pick),fb];
  actions=run.mode==='practice'&&!reveal
   ?[el('button',{class:'btn',id:'check',disabled:!sel.size,onclick:()=>{run.checked[run.i]=true;record(q,run.i,isRight(q,sel));refresh()}},T('check'))]
   :[el('button',{class:'btn',id:'next',onclick:advance},last?T('finish'):T('next'))];
 }
 const navBtns=[];
 if(run.i>0)navBtns.push(el('button',{class:'btn ghost',id:'prev',onclick:()=>nav(run.i-1)},T('prev')));
 const hasNext=actions.some(a=>a.id==='next');
 const skip=[];
 if(!hasNext&&!last)skip.push(el('button',{class:'btn ghost',onclick:()=>nav(run.i+1)},T('next')));
 if(!hasNext&&last)skip.push(el('button',{class:'btn ghost',onclick:finish},T('finish')));
 mount(header({minimal:true}),
  el('div',{class:'bar'},el('i',{style:`width:${(run.i+1)/n*100}%`})),
  el('div',{class:'meta'},el('span',{class:'mono'},`${T('q')} ${run.i+1} ${T('of')} ${n} · ${q.exam} · ${q.id}`),
   el('button',{class:'tgl',id:'exit',onclick:()=>{exitOpen=!exitOpen;refresh()}},T('exit'))),
  exitOpen?exitPanel():null,
  el('div',{class:'panel'},flagsNode(q),body),
  el('div',{class:'actionbar'},navBtns,actions,skip));
}

function finish(){
 const a=run.att;
 if(run.mode==='exam')run.qs.forEach((q,i)=>{if(!run.ans[i].size)failed.add(q.id)});
 saveFailed();
 a.status='finished';a.finishedAt=Date.now();persist();
 viewAtt=a;viewFrom='finish';run=null;exitOpen=false;wrongOnly=true;view='attempt';render();
}

function reviewItems(att,qs,filterWrong){
 return qs.map(q=>({q,s:selOf(att,q.id)})).map(x=>({...x,r:isRight(x.q,x.s)})).filter(x=>!filterWrong||!x.r);
}
function renderAttempt(){
 const att=viewAtt;
 if(!att){view='history';return renderHistory()}
 const qs=buildQs(att),st=statsOf(att);
 const items=reviewItems(att,qs,wrongOnly);
 const backBtn=viewFrom==='finish'
  ?el('button',{class:'btn',id:'again',onclick:()=>{view='setup';render()}},T('again'))
  :el('button',{class:'btn ghost',id:'back',onclick:()=>{view='history';render()}},T('back'));
 mount(header(),el('div',{class:'panel'},
  el('div',{class:'label'},`${T('attempt')} #${rankOf(att)} · ${statusLabel(att.status)} · ${fmtDate(att.startedAt)}`),
  el('div',{class:'score mono'},`${st.ok}/${st.n}`),
  el('div',{class:'sub'},`${st.pct}% ${T('correct')} · ${st.answered} ${T('answeredOf')} · ${T(att.mode)}`),
  el('div',{class:'bar'},el('i',{style:`width:${st.pct}%`})),
  el('div',{class:'row'},backBtn,
   att.status!=='finished'?el('button',{class:'btn',id:'res',onclick:()=>resumeAttempt(att)},T('resume')):null,
   viewFrom==='finish'&&failed.size?el('button',{class:'btn ghost',onclick:()=>{cfg.onlyFailed=true;cfg.count=0;cfg.type='all';start()}},`${T('retry')} (${failed.size})`):null,
   viewFrom==='finish'?el('button',{class:'btn ghost',onclick:()=>{viewFrom='history';view='history';render()}},T('history')):null)),
 el('div',{class:'panel'},
  el('div',{class:'row',style:'justify-content:space-between'},el('h2',{},T('review')),
   el('div',{class:'seg'},
    el('button',{class:'chip','data-f':'rw','aria-pressed':wrongOnly,onclick:()=>{wrongOnly=true;refresh()}},T('onlyWrong')),
    el('button',{class:'chip','data-f':'ra','aria-pressed':!wrongOnly,onclick:()=>{wrongOnly=false;refresh()}},T('all_')))),
  el('div',{class:'rev'},items.map(({q,s,r})=>el('div',{class:'item'},
   el('div',{class:'tag'},`${q.exam} · ${q.id} · `,el('span',{class:'verdict '+(r?'good':'bad')},s.size?(r?T('ok'):T('ko')):T('unans'))),
   flagsNode(q),stemNode(q),q.self?solutionNode(q):optionsNode(q,s,true),
   !q.self&&q.ex.length?partsNode(q.ex):null)))));
}

function renderHistory(){
 const list=sortedAttempts();
 const canCmp=histSel.length===2;
 const rows=list.map(a=>{
  const st=statsOf(a),sel=histSel.includes(a.id);
  const del=delConfirm===a.id;
  return el('div',{class:'att'+(sel?' sel':'')},
   el('label',{class:'check',for:'s'+a.id},el('input',{type:'checkbox',id:'s'+a.id,checked:sel,onchange:e=>{
    if(e.target.checked){histSel.push(a.id);if(histSel.length>2)histSel.shift()}else histSel=histSel.filter(x=>x!==a.id);refresh()}}),
    el('strong',{},`#${rankOf(a)}`)),
   el('div',{class:'attmeta'},
    el('div',{},el('span',{class:'mono'},`${st.ok}/${st.n}`),` · ${st.pct}% · ${st.answered} ${T('answeredOf')}`),
    el('div',{class:'sub'},`${fmtDate(a.startedAt)} · ${T(a.mode)} · ${statusLabel(a.status)}`)),
   el('div',{class:'row'},
    el('button',{class:'btn small ghost',onclick:()=>{viewAtt=a;viewFrom='history';wrongOnly=true;view='attempt';render()}},T('view')),
    a.status!=='finished'?el('button',{class:'btn small',onclick:()=>resumeAttempt(a)},T('resume')):null,
    del?[el('span',{class:'sub'},T('sure')),el('button',{class:'btn small danger',onclick:()=>{attempts=attempts.filter(x=>x.id!==a.id);histSel=histSel.filter(x=>x!==a.id);delConfirm=null;persist();refresh()}},T('yes')),el('button',{class:'btn small ghost',onclick:()=>{delConfirm=null;refresh()}},T('cancel'))]
       :el('button',{class:'btn small ghost danger',onclick:()=>{delConfirm=a.id;refresh()}},T('del'))));
 });
 mount(header(),el('div',{class:'row',style:'justify-content:space-between'},
  el('button',{class:'btn ghost',id:'back',onclick:()=>{view='setup';render()}},T('back')),
  el('div',{class:'row'},
   el('button',{class:'btn ghost',id:'io',onclick:()=>{ioMsg='';view='io';render()}},T('io')),
   el('button',{class:'btn',id:'cmp',disabled:!canCmp,onclick:()=>{cmpFilter='all';view='compare';render()}},T('compare')))),
  el('p',{class:'sub'},canCmp?'':T('selectTwo')),
  list.length?el('div',{class:'attlist'},rows):el('div',{class:'panel'},T('noAttempts')));
}

function renderCompare(){
 const pair=histSel.map(id=>attempts.find(a=>a.id===id)).filter(Boolean).sort((x,y)=>x.startedAt-y.startedAt);
 if(pair.length<2){view='history';return renderHistory()}
 const[a,b]=pair;
 const sa=statsOf(a),sb=statsOf(b);
 const inA=new Set(a.qids),inB=new Set(b.qids);
 const shared=b.qids.filter(id=>inA.has(id)&&byId.has(id));
 const onlyA=a.qids.filter(id=>!inB.has(id)).length,onlyB=b.qids.filter(id=>!inA.has(id)).length;
 const cat=id=>{const x=outcome(a,id),y=outcome(b,id);if(x==='na'||y==='na')return 'na';if(x==='ko'&&y==='ok')return 'improved';if(x==='ok'&&y==='ko')return 'regressed';return x==='ok'?'keptOk':'keptKo'};
 const rows=shared.map(id=>({id,c:cat(id)}));
 const counts={all:rows.length};
 ['improved','regressed','keptOk','keptKo','na'].forEach(k=>counts[k]=rows.filter(r=>r.c===k).length);
 const shown=rows.filter(r=>cmpFilter==='all'||r.c===cmpFilter);
 const delta=sb.pct-sa.pct;
 const filters=[['all','filterAll'],['improved','improved'],['regressed','regressed'],['keptOk','keptOk'],['keptKo','keptKo'],['na','noData']].map(([k,l])=>el('button',{class:'chip','data-f':'f'+k,'aria-pressed':cmpFilter===k,onclick:()=>{cmpFilter=k;refresh()}},`${T(l)} (${counts[k]})`));
 const desc=(att,q)=>{const s=selOf(att,q.id);if(!s.size)return T('noAnswer');const lab=q.self?(s.has('OK')?T('selfMarkOk'):T('selfMarkKo')):[...s].sort().join(', ');return `${lab} · ${isRight(q,s)?T('ok'):T('ko')}`};
 const col=(att,st,key)=>el('div',{class:'cmpcol'},el('div',{class:'label'},`${T(key)} · #${rankOf(att)}`),el('div',{class:'score small mono'},`${st.ok}/${st.n}`),el('div',{class:'sub'},`${st.pct}% · ${st.answered} ${T('answeredOf')}`),el('div',{class:'sub'},`${fmtDate(att.startedAt)} · ${T(att.mode)}`));
 mount(header(),
  el('div',{class:'row'},el('button',{class:'btn ghost',id:'back',onclick:()=>{view='history';render()}},T('back'))),
  el('div',{class:'panel'},
   el('div',{class:'cmpgrid'},col(a,sa,'attemptA'),col(b,sb,'attemptB')),
   el('div',{class:'verdict '+(delta>=0?'good':'bad')},`${delta>0?'+':''}${delta} pp`),
   el('div',{class:'sub'},`${shared.length} ${T('sharedQ')} · ${onlyA} ${T('onlyInA')} · ${onlyB} ${T('onlyInB')}`)),
  shared.length?el('div',{class:'panel'},
   el('div',{class:'chips'},filters),
   el('div',{class:'rev'},shown.map(({id,c})=>{
    const q=byId.get(id);
    return el('details',{class:'cmprow '+c},
     el('summary',{},el('span',{class:'tag'},`${q.exam} · ${q.id}`),el('span',{class:'badge '+c},c==='na'?T('noData'):T(c)),el('span',{class:'short'},shortText(q))),
     el('div',{class:'parts',style:'margin-top:10px'},
      el('div',{class:'sub'},`${T('fromA')}: ${desc(a,q)}`),
      el('div',{class:'sub'},`${T('fromB')}: ${desc(b,q)}`),
      stemNode(q),
      q.self?solutionNode(q):optionsNode(q,selOf(b,q.id),true)));
   })))
  :el('div',{class:'panel'},T('noneInCommon')));
}

function exportData(){return JSON.stringify({app:'pl400-test',version:1,exportedAt:new Date().toISOString(),failed:[...failed],attempts},null,1)}
function importData(text){
 let obj;try{obj=JSON.parse(text)}catch(e){ioMsg=T('importErr');return false}
 const list=Array.isArray(obj)?obj:(obj&&Array.isArray(obj.attempts)?obj.attempts:null);
 if(!list){ioMsg=T('importErr');return false}
 const have=new Set(attempts.map(a=>a.id));let added=0;
 list.forEach(a=>{
  if(a&&typeof a.id==='string'&&Array.isArray(a.qids)&&a.answers&&typeof a.answers==='object'&&!have.has(a.id)){
   attempts.push({id:a.id,startedAt:+a.startedAt||Date.now(),finishedAt:a.finishedAt||null,status:['finished','abandoned','in-progress'].includes(a.status)?a.status:'abandoned',mode:a.mode==='exam'?'exam':'practice',type:a.type||'all',sets:a.sets||[],onlyFailed:!!a.onlyFailed,qids:a.qids.filter(x=>typeof x==='string'),opts:a.opts||{},answers:a.answers});
   have.add(a.id);added++;
  }
 });
 if(obj&&Array.isArray(obj.failed))obj.failed.forEach(x=>{if(byId.has(x))failed.add(x)});
 persist();saveFailed();ioMsg=T('importDone',{n:added});return true;
}
function renderIO(){
 const ta=el('textarea',{id:'iotext',rows:'8',placeholder:T('pasteHere'),spellcheck:'false'});
 ta.value=ioText;
 ta.addEventListener('input',()=>{ioText=ta.value});
 const fileIn=el('input',{type:'file',id:'iofile',accept:'application/json,.json',hidden:true,onchange:e=>{
  const f=e.target.files&&e.target.files[0];if(!f)return;
  const r=new FileReader();r.onload=()=>{importData(String(r.result));refresh()};r.readAsText(f);
 }});
 const copy=()=>{
  const txt=exportData();
  const fallback=()=>{ioText=txt;ioMsg=T('copyFail');refresh();const t=document.getElementById('iotext');if(t){t.focus({preventScroll:true});t.select()}};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(()=>{ioMsg=T('copied');refresh()},fallback);else fallback();
 };
 const download=()=>{
  try{
   const blob=new Blob([exportData()],{type:'application/json'});
   const url=URL.createObjectURL(blob);
   const a=document.createElement('a');a.href=url;a.download='pl400-test-history.json';document.body.append(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),2000);
  }catch(e){}
  ioMsg=T('dlHint');refresh();
 };
 mount(header(),
  el('div',{class:'row'},el('button',{class:'btn ghost',id:'back',onclick:()=>{view='history';render()}},T('back'))),
  el('div',{class:'panel'},
   el('h2',{},T('ioTitle')),el('p',{class:'sub'},T('ioText')),serverMode?el('p',{class:'sub'},T('ioServer')):null,
   el('div',{class:'row'},el('button',{class:'btn',id:'dl',onclick:download},T('download')),el('button',{class:'btn ghost',id:'cp',onclick:copy},T('copy')),
    el('button',{class:'btn ghost',id:'pick',onclick:()=>fileIn.click()},T('importFile')),fileIn),
   ta,
   el('div',{class:'row'},el('button',{class:'btn ghost',id:'imp',disabled:false,onclick:()=>{if(importData(ioText))ioText='';refresh()}},T('importPaste'))),
   ioMsg?el('div',{class:'verdict',role:'status'},ioMsg):null,
   el('div',{class:'row'},
    clearConfirm
     ?[el('span',{class:'sub'},T('sure')),el('button',{class:'btn small danger',onclick:()=>{attempts=[];histSel=[];persist();clearConfirm=false;refresh()}},T('yes')),el('button',{class:'btn small ghost',onclick:()=>{clearConfirm=false;refresh()}},T('cancel'))]
     :el('button',{class:'btn small ghost danger',onclick:()=>{clearConfirm=true;refresh()}},T('clearAll')))));
}

function bankMatches(q){
 if(!bankState.exams.has(q.exam))return false;
 if(bankState.type!=='all'&&(bankState.type==='self')!==!!q.self)return false;
 const s=bankState.q.trim().toLowerCase();
 if(!s)return true;
 const hay=q.stem.map(x=>x.t||'').concat((q.opts||[]).map(o=>o.t)).join(' ').toLowerCase();
 return hay.includes(s);
}
function renderBank(){
 const list=DATA.filter(bankMatches);
 const shown=list.slice(0,bankState.limit);
 const chips=exams.map(x=>el('button',{class:'chip','data-f':'be'+x,'aria-pressed':bankState.exams.has(x),onclick:()=>{bankState.exams.has(x)?bankState.exams.delete(x):bankState.exams.add(x);bankState.limit=40;refresh()}},x));
 const types=[['all','typeAll'],['mcq','typeMcq'],['self','typeSelf']].map(([v,k])=>el('button',{class:'chip','data-f':'bt'+v,'aria-pressed':bankState.type===v,onclick:()=>{bankState.type=v;bankState.limit=40;refresh()}},T(k)));
 const input=el('input',{type:'text',id:'bq',class:'search',placeholder:T('search'),autocomplete:'off',spellcheck:'false'});
 input.value=bankState.q;
 input.addEventListener('input',()=>{bankState.q=input.value;bankState.limit=40;refresh()});
 mount(header(),
  el('div',{class:'row'},el('button',{class:'btn ghost',id:'back',onclick:()=>{view='setup';render()}},T('back'))),
  el('div',{class:'panel'},
   el('h2',{},T('bankTitle')),
   input,
   el('div',{class:'chips'},chips,
    el('button',{class:'tgl',onclick:()=>{exams.forEach(x=>bankState.exams.add(x));refresh()}},T('all')),
    el('button',{class:'tgl',onclick:()=>{bankState.exams.clear();refresh()}},T('none'))),
   el('div',{class:'seg'},types),
   el('div',{class:'sub mono'},`${shown.length}/${list.length} ${T('shown')}`)),
  el('div',{class:'panel'},
   el('div',{class:'rev'},shown.map(q=>{
    const keyOnly={...q,opts:q.opts?q.opts.filter(o=>q.ans.includes(o.k)):q.opts};
    return el('div',{class:'item'},
     el('div',{class:'tag'},`${q.exam} · ${q.id}`+(q.multi?` · ${T('nAnswers',{n:q.ans.length})}`:'')),
     flagsNode(q),stemNode(q),
     q.self?solutionNode(q):optionsNode(keyOnly,new Set(q.ans),true),
     !q.self&&q.ex.length?partsNode(q.ex):null);
   })),
   list.length>shown.length?el('div',{class:'row'},el('button',{class:'btn ghost',id:'more',onclick:()=>{bankState.limit+=40;refresh()}},`${T('showMore')} (${list.length-shown.length})`)):null));
}

if('serviceWorker' in navigator&&(location.protocol==='https:'||/[?&]sw=1/.test(location.search))){
 window.addEventListener('load',()=>{try{navigator.serviceWorker.register('sw.js').catch(()=>{})}catch(e){}});
}
render();
fetch('api/history',{cache:'no-store'}).then(r=>{
 if(!r.headers.get('X-PL400'))throw new Error('no server');
 if(r.status===404)return {missing:true};
 if(!r.ok)throw new Error('http');
 return r.json();
}).then(d=>{
 if(run)return;
 if(d&&d.missing){serverMode=true;syncState='ok';syncNow()}
 else if(d&&d.app==='pl400-test'&&Array.isArray(d.attempts)){
  serverMode=true;syncState='ok';attempts=d.attempts;failed=new Set(d.failed||[]);
  try{localStorage.setItem(LS_ATT,JSON.stringify(attempts));localStorage.setItem(LS_FAILED,JSON.stringify([...failed]))}catch(e){}
 }else return;
 updateBadge();
 if(view==='setup'||view==='history')render({keep:true});
}).catch(()=>{});
