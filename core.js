/* Alpha 0.4 — единая модель знаний и досье. Данные не заменяют первичные записи. */
(function(){
'use strict';
const records=[
['person','damien','Дэмиен',1,'Жрец домена жизни, агент Дома Полуночи. Значок №69.'],
['person','tarvin','Тарвин',1,'Плут, агент Дома Полуночи.'],
['person','magnus','Магнус',1,'Волшебник, агент Дома Полуночи.'],
['faction','midnight','Дом Полуночи',1,'Агентство, в котором служат Дэмиен, Тарвин и Магнус.'],
['item','teprix','Теприкс',1,'Приспособление, используемое для закрытия разломов.'],
['place','lisy-nora','Лисья нора',2,'Гостиница.'],
['place','westfield','Вестфилд',3,'Город.'],
['person','devon','Девон Лантран',3,'Старший командир комиссаров.'],
['person','martin','Мартин',2,'Рыбак, которого отправились искать.'],
['person','krom','Мастер Кром',4,'Торговец диковинками; лавка-склад на окраине форта Эклмайер.'],
['place','eklmaier','Форт Эклмайер',4,'Место, где находится лавка-склад Мастера Крома.'],
['person','yovis','Ёвис',5,'Старший целитель Дома Полуночи.'],
['person','eldrika','Леди Элдрика Вейн',5,'Глава Дома Полуночи.'],
['person','jonathan','Джонатан Фризо',5,'Эмиссар Дома Полуночи.'],
['person','mailem','Майлем Ренва',5,'Маг Дома Полуночи.'],
['person','grid','Грид Шор',6,'Дворф с топором, молчаливый.'],
['person','chona','Чона Плес',6,'Полурослик; Тарвин с ней подружился.'],
['person','liam','Лиам Торст',6,'Командир другой группы агентов.'],
['person','erlin','Эрлин Сиар',6,'Полуэльф.'],
['person','ferrando','Фаррандо Бэк [?]',6,'Эмиссар, которому Ёвис попросил помочь.'],
['item','luciat','Два камня из руин',6,'Два камня, оставшиеся после победы над существами в руинах.'],
['place','kaer-dagen','Каэр Даген',7,'Упомянут в связи с формулами из подвала.'],
['item','pathfinder','Путеискатель',7,'Компас.'],
['faction','wolf-charter','Волчья Хартия',8,'Другое агентство.'],
['person','wilhelm','Вильгельм Вена',8,'Представитель Волчьей Хартии; чёрный плащ, мечи и арбалеты.'],
['item','thunder','Громовой камень',8,'Громовой камень 3 уровня, стандартная бомба.'],
['item','opal','Замораживающий опал',8,'Найден среди предметов в крепости.'],
['item','runes','Рунные камни',8,'Три руны: усиления, возвращения и призрачного оружия.'],
['person','khrem','Хрем Бородач',9,'Кузнец, у которого Дэмиен заказал кастеты «69».'],
['place','volheim','Волхейм [?]',9,'Город, куда партия прибыла 8 июля.'],
['person','oswald','Освальд Мурк',9,'Старшина; упомянут среди наших агентов, с которыми ранее дралась Волчья Хартия.'],
['person','daen','Даен Турвин',9,'Упомянут среди наших агентов, с которыми ранее дралась Волчья Хартия.'],
['person','olli','Олли',9,'Упомянут среди наших агентов, с которыми ранее дралась Волчья Хартия.'],
['person','ship','Шип Хеккет',9,'Упомянут среди наших агентов, с которыми ранее дралась Волчья Хартия.'],
['faction','red-fists','Красные Кулаки',10,'Напали на партию по дороге в Ингхольд.'],
['place','inghold','Ингхольд',10,'Город на пути в Рейнвели.'],
['place','reinveli','Рейнвели',10,'Город на юге.'],
['person','robert','Роберт',10,'Имя, которым представился странствующий бард.'],
['place','blue-sails','Синие Паруса',11,'Заведение в Ингхольде, владелец — Торвальд.'],
['person','torvald','Торвальд',11,'Владелец «Синих Парусов».'],
['person','antal','Мастер Анталь',11,'Спрашивал о Роберте.'],
['place','last-oasis','Последний Оазис',11,'Заведение в Рейнвели.'],
['place','mercury','Меркурий',11,'Место в Рейнвели, где советовали подобрать одежду.'],
['person','dirk','Дирк',12,'Бармен «Последнего Оазиса».'],
['item','wheel','Штурвал с символами',12,'Загадочный механизм, найденный по дороге к форту.'],
['item','journal','Хирургический журнал',13,'Найден в руинах Рейнвели.'],
['item','amphora','Керамическая амфора',13,'Содержит неизвестный орган.'],
['place','cornwell','Форт Корнвелл',13,'Место, где можно найти легионеров, сопровождавших Левору Тэн [?].'],
['person','levora','Левора Тэн [?]',13,'Расспрашивала о Роберте; возможное расхождение написания с «Леора Тэн».'],
['person','misir','Мисир Элме',14,'Караванщик, собиравшийся в форт Корнвелл.'],
['person','leora','Леора Тэн [?]',16,'Сержант; на лбу число 613. Возможное расхождение с «Левора Тэн».'],
['person','varik','Варик Кэл',16,'Капитан; число 567.'],
['person','arik','Арик Гесто',17,'Присутствовал на совете Дома Полуночи.'],
['person','ilson','Илсон Грей',17,'Присутствовал на совете Дома Полуночи.'],
['person','fraiger','Фрайгер',17,'Упомянут как поддержка.'],
['person','dominik','Доминик',17,'Партия видела его живым 21 июля.'],
['person','sig','Сиг Мурт',18,'Дворф.'],
['person','thomas','Томас',18,'Упомянут во время поисков товарищей.'],
['person','hregor','Хрегор',19,'Багбир; показал жест приветствия.'],
['place','dunes','Дворец Дюн',20,'Упомянут во время событий «Сердца бури».']
].map(([type,id,name,firstSession,description])=>({type,id,name,firstSession,description,sourceSession:firstSession}));
const changes=[
{entityId:"magnus",session:3,field:'event',value:"Во время боя с волками в его сумке раскрылся Теприкс, из которого вырвался Разлом.",sourceSession:3},
{entityId:"tarvin",session:4,field:'rumor',value:"Появились слухи о золотом ордене и прошлом родителей Тарвина; достоверность не установлена.",sourceSession:4},
{entityId:"tarvin",session:6,field:'event',value:"Подружился с Чоной Плес.",sourceSession:6},
{entityId:"damien",session:9,field:'event',value:"Заказал у Хрема Бородача кастеты, складывающиеся в число «69».",sourceSession:9},
{entityId:"midnight",session:5,field:'event',value:"Партия вернулась в агентство 25 июня и получила новое задание.",sourceSession:5},
{entityId:"midnight",session:17,field:'event',value:"Утром 26 июля состоялся совет с Ариком Гесто, Джонатаном Фризо, Ферандо Бэком и Илсоном Греем.",sourceSession:17},
{entityId:"yovis",session:6,field:'event',value:"Попросил помочь эмиссару Фаррандо Бэку.",sourceSession:6},
{entityId:"yovis",session:20,field:'event',value:"Провёл эксперимент, в ходе которого Тарвин погиб.",sourceSession:20},
{entityId:"jonathan",session:5,field:'event',value:"Встретил партию при возвращении в Дом Полуночи.",sourceSession:5},
{entityId:"jonathan",session:17,field:'event',value:"Присутствовал на совете Дома Полуночи.",sourceSession:17},
{entityId:"ferrando",session:17,field:'event',value:"Присутствовал на совете Дома Полуночи.",sourceSession:17},
{entityId:"chona",session:6,field:'event',value:"Подружилась с Тарвином.",sourceSession:6},
{entityId:"westfield",session:4,field:'event',value:"Партия вернулась в город вечером 17 июня.",sourceSession:4},
{entityId:"wolf-charter",session:9,field:'event',value:"Упомянута предыдущая драка с нашими агентами.",sourceSession:9},
{entityId:"reinveli",session:11,field:'event',value:"Партия добралась до города днём 17 июля.",sourceSession:11},
{entityId:"last-oasis",session:12,field:'event',value:"Стало известно, что бармен заведения — Дирк.",sourceSession:12},
{entityId:"cornwell",session:16,field:'event',value:"Партия направлялась в сторону форта 21 июля.",sourceSession:16},
{entityId:"misir",session:14,field:'event',value:"Собирался отправиться в форт Корнвелл.",sourceSession:14},
{entityId:"robert",session:11,field:'event',value:"Мастер Анталь спрашивал о Роберте.",sourceSession:11},
{entityId:"robert",session:13,field:'event',value:"Левора Тэн расспрашивала о Роберте.",sourceSession:13},
{entityId:"hregor",session:19,field:'event',value:"Показал жест приветствия после освобождения из плена.",sourceSession:19},
{entityId:"tarvin",session:20,field:'event',value:"Не выжил в ходе эксперимента Ёвиса.",sourceSession:20},
{entityId:'martin',session:3,field:'status',value:'Найден мёртвым возле озера.',sourceSession:3},
{entityId:'tarvin',session:20,field:'status',value:'Погиб в ходе эксперимента Ёвиса.',sourceSession:20},
{entityId:'hregor',session:19,field:'status',value:'Освобождён из плена.',sourceSession:19}
];
const links=[
['damien','midnight','агент',1],['tarvin','midnight','агент',1],['magnus','midnight','агент',1],
['yovis','midnight','старший целитель',5],['eldrika','midnight','глава',5],['jonathan','midnight','эмиссар',5],['mailem','midnight','маг',5],
['krom','eklmaier','лавка-склад',4],['wilhelm','wolf-charter','представитель',8],

['damien','khrem','заказал кастеты у',9],['torvald','blue-sails','владелец',11],['dirk','last-oasis','бармен',12],
['misir','cornwell','направлялся в',14],['yovis','tarvin','эксперимент, в ходе которого Тарвин погиб',20]
].map(([from,to,relation,firstSession])=>({from,to,relation,firstSession,sourceSession:firstSession}));
links.push(...[["chona","tarvin","подружилась с",6],["liam","grid","командир группы",6],["liam","chona","командир группы",6],["liam","erlin","командир группы",6],["yovis","ferrando","попросил помочь",6],["magnus","teprix","Теприкс раскрылся в сумке",3],["misir","last-oasis","встречен в",14],["antal","robert","расспрашивал о",11],["levora","robert","расспрашивала о",13],["arik","midnight","участвовал в совете",17],["ilson","midnight","участвовал в совете",17],["ferrando","midnight","эмиссар",6],["journal","reinveli","найден в руинах",13],["amphora","reinveli","найдена в руинах",13]].map(([from,to,relation,firstSession])=>({from,to,relation,firstSession,sourceSession:firstSession})));

const archive=window.ChronicleArchive10||[];
const archiveByNumber=new Map(archive.map(a=>[a.n,a]));
const events=(window.ChronicleSessions||[]).map(e=>({...e,id:'session-'+e.number,sourceSession:e.number,archive:archiveByNumber.get(e.number)||null}));
const types={person:'Персонажи',place:'Места',faction:'Фракции',item:'Предметы'};
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const current=()=>{const n=Number(localStorage.getItem('hom-timeline-session'));return Number.isInteger(n)&&n>=1&&n<=20?n:20};
const visible=(n)=>records.filter(r=>r.firstSession<=n).map(r=>snapshot(r.id,n));
const visibleEvents=(n)=>events.filter(e=>e.number<=n);
const snapshot=(id,n)=>{const base=records.find(r=>r.id===id&&r.firstSession<=n);if(!base)return null;const state={...base};for(const c of changes.filter(c=>c.entityId===id&&c.session<=n).sort((a,b)=>a.session-b.session)){if(c.field==='status'||c.field==='description'||c.field==='name')state[c.field]=c.value}return state};
const byId=id=>records.find(r=>r.id===id);
const history=(id,n)=>changes.filter(c=>c.entityId===id&&c.session<=n).sort((a,b)=>a.session-b.session);
const related=(id,n)=>links.filter(l=>l.firstSession<=n&&(l.from===id||l.to===id)&&snapshot(l.from,n)&&snapshot(l.to,n));
const visibleLinks=(n)=>links.filter(l=>l.firstSession<=n&&snapshot(l.from,n)&&snapshot(l.to,n));
const root=()=>document.getElementById('app');
const entityButton=(id,n)=>{const r=snapshot(id,n);return r?'<button type="button" data-chronicle-entity="'+escape(id)+'" style="background:transparent;color:var(--accent);border:0;padding:4px;cursor:pointer;text-decoration:underline">'+escape(r.name)+'</button>':''};
const focusEntity=id=>{if(!snapshot(id,current()))return;const app=root();app.innerHTML='<button type="button" data-chronicle-back style="margin-bottom:12px;padding:9px;background:var(--panel);color:var(--text);border:1px solid var(--line);border-radius:9px">← Назад</button>'+dossier(id,current());app.querySelector('[data-chronicle-back]').onclick=()=>window.render();app.scrollIntoView({block:'start',behavior:'auto'})};
const bindEntityLinks=()=>{const app=root();if(!app||app.dataset.chronicleLinksBound)return;app.dataset.chronicleLinksBound='1';app.addEventListener('click',event=>{const button=event.target.closest('[data-chronicle-entity]');if(button&&app.contains(button))focusEntity(button.dataset.chronicleEntity)})};

const dossier=(id,n)=>{const r=snapshot(id,n);if(!r)return '';const rel=related(id,n);return '<article class="card"><span class="badge">'+escape(types[r.type]||r.type)+' · впервые: №'+r.firstSession+'</span><h3>'+escape(r.name)+'</h3><p>'+escape(r.description)+'</p>'+(r.status?'<p><strong>Статус:</strong> '+escape(r.status)+'</p>':'')+(rel.length?'<div class="muted"><strong>Связи:</strong><ul>'+rel.map(l=>'<li>'+entityButton(l.from===id?l.to:l.from,n)+' — '+escape(l.relation)+' <small>(№'+l.sourceSession+')</small></li>').join('')+'</ul></div>':'')+(history(id,n).length?'<div class="muted"><strong>История изменений:</strong><ul>'+history(id,n).map(c=>'<li>№'+c.session+(c.field==='rumor'?' · слух':'')+': '+escape(c.value)+'</li>').join('')+'</ul></div>':'')+'<small class="muted">Источник: сессия №'+r.sourceSession+'</small></article>'};

function renderGraph(app,n){
const all=visibleLinks(n),entityMap=new Map(visible(n).map(r=>[r.id,r]));
app.innerHTML='<h2>Паутина связей · сессия №'+n+'</h2><p class="muted">Перемещайте поле одним пальцем, масштабируйте двумя пальцами или кнопками. Нажмите на узел, чтобы открыть досье.</p><div class="card"><label for="graph-type">Тип сущностей</label> <select id="graph-type" style="background:var(--panel);color:var(--text);padding:8px;border:1px solid var(--line);border-radius:8px"><option value="all">Все</option><option value="person">Персонажи</option><option value="place">Места</option><option value="faction">Фракции</option><option value="item">Предметы</option></select> <button id="graph-zoom-in" aria-label="Приблизить">＋</button> <button id="graph-zoom-out" aria-label="Отдалить">−</button> <button id="graph-reset">Сбросить вид</button><div id="graph-canvas" style="margin-top:12px;overflow:hidden;border:1px solid var(--line);border-radius:12px;background:var(--bg);height:min(62vh,550px);min-height:300px;touch-action:none;position:relative"></div><p id="graph-count" class="muted" aria-live="polite"></p></div>';
const canvas=app.querySelector('#graph-canvas'),filter=app.querySelector('#graph-type'),count=app.querySelector('#graph-count');
const NS='http://www.w3.org/2000/svg';
const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 900 580');svg.setAttribute('width','100%');svg.setAttribute('height','100%');svg.setAttribute('role','img');svg.setAttribute('aria-label','Интерактивная схема подтверждённых связей');svg.style.display='block';canvas.appendChild(svg);
const layer=document.createElementNS(NS,'g');svg.appendChild(layer);
let scale=1,tx=0,ty=0,moved=false,gestureUsed=false;
const pointers=new Map();
let gesture=null;
const apply=()=>layer.setAttribute('transform','translate('+tx+' '+ty+') scale('+scale+')');
const setZoom=(next,x=450,y=290)=>{next=Math.max(.45,Math.min(3.5,next));tx=x-(x-tx)*next/scale;ty=y-(y-ty)*next/scale;scale=next;apply()};
const zoom=(factor,x=450,y=290)=>setZoom(scale*factor,x,y);
const svgPoint=e=>{const rect=svg.getBoundingClientRect();const vb=svg.viewBox.baseVal;return {x:vb.x+(e.clientX-rect.left)*vb.width/Math.max(1,rect.width),y:vb.y+(e.clientY-rect.top)*vb.height/Math.max(1,rect.height)}};
const midpoint=(a,b)=>({x:(a.x+b.x)/2,y:(a.y+b.y)/2});
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const startGesture=()=>{const points=[...pointers.values()];if(points.length===1){gesture={kind:'pan',start:points[0],tx,ty};return}if(points.length>=2){const center=midpoint(points[0],points[1]);gesture={kind:'pinch',center,distance:Math.max(1,distance(points[0],points[1])),scale,tx,ty};gestureUsed=true;moved=true}};
const node=(tag,attrs,text)=>{const el=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,String(v));if(text!==undefined)el.textContent=text;return el};
const draw=()=>{
layer.replaceChildren();
const selected=filter.value;
const edges=all.filter(l=>selected==='all'||entityMap.get(l.from)?.type===selected||entityMap.get(l.to)?.type===selected);
const ids=[...new Set(edges.flatMap(l=>[l.from,l.to]))].sort();
const adjacency=new Map(ids.map(id=>[id,new Set()]));
for(const l of edges){adjacency.get(l.from).add(l.to);adjacency.get(l.to).add(l.from)}
const components=[],seen=new Set();
for(const id of ids){if(seen.has(id))continue;const stack=[id],component=[];seen.add(id);while(stack.length){const next=stack.pop();component.push(next);for(const neighbor of adjacency.get(next))if(!seen.has(neighbor)){seen.add(neighbor);stack.push(neighbor)}}components.push(component.sort())}
components.sort((a,b)=>b.length-a.length||a[0].localeCompare(b[0]));
const positions=new Map();
let offset=0;
for(const component of components){
const size=component.length,columns=Math.max(1,Math.ceil(Math.sqrt(size))),spacingX=150,spacingY=105;
const centerX=offset+Math.max(180,(columns-1)*spacingX/2+90),centerY=290;
component.forEach((id,i)=>{const angle=2*Math.PI*i/Math.max(size,1)-Math.PI/2;const radius=size===1?0:Math.max(95,Math.min(300,size*16));positions.set(id,{x:centerX+radius*Math.cos(angle),y:centerY+radius*.8*Math.sin(angle)})});
offset=centerX+Math.max(180,(columns-1)*spacingX/2+90)+110;
}
// Deterministic relaxation: repulsion, edge attraction and label clearance.
for(let step=0;step<95;step++){
const forces=new Map(ids.map(id=>[id,{x:0,y:0}]));
for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++){
const a=positions.get(ids[i]),b=positions.get(ids[j]);let dx=a.x-b.x,dy=a.y-b.y;
if(Math.abs(dx)+Math.abs(dy)<.01){dx=1;dy=.1}
const dist=Math.max(1,Math.hypot(dx,dy)),minDist=110;
if(dist<minDist){const push=(minDist-dist)*.028;forces.get(ids[i]).x+=dx/dist*push;forces.get(ids[i]).y+=dy/dist*push;forces.get(ids[j]).x-=dx/dist*push;forces.get(ids[j]).y-=dy/dist*push}
}
for(const l of edges){const a=positions.get(l.from),b=positions.get(l.to),dx=b.x-a.x,dy=b.y-a.y,dist=Math.max(1,Math.hypot(dx,dy)),pull=(dist-175)*.006;forces.get(l.from).x+=dx/dist*pull;forces.get(l.from).y+=dy/dist*pull;forces.get(l.to).x-=dx/dist*pull;forces.get(l.to).y-=dy/dist*pull}
for(const id of ids){const p=positions.get(id),f=forces.get(id);p.x+=Math.max(-8,Math.min(8,f.x));p.y+=Math.max(-8,Math.min(8,f.y))}
}
const xs=ids.map(id=>positions.get(id).x),ys=ids.map(id=>positions.get(id).y);
const minX=Math.min(...xs,0)-105,maxX=Math.max(...xs,900)+105,minY=Math.min(...ys,0)-65,maxY=Math.max(...ys,580)+65;
svg.setAttribute('viewBox',minX+' '+minY+' '+(maxX-minX)+' '+(maxY-minY));

for(const l of edges){const a=positions.get(l.from),b=positions.get(l.to);const line=node('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:'#9290D4','stroke-opacity':'.38','stroke-width':'1.5'});const tip=node('title',{},l.relation+' · сессия №'+l.sourceSession);line.appendChild(tip);layer.appendChild(line)}
for(const id of ids){const r=entityMap.get(id),p=positions.get(id);const g=node('g',{role:'button',tabindex:'0','aria-label':'Открыть досье: '+r.name});g.style.cursor='pointer';const colors={person:'#9290D4',place:'#7FB8A9',faction:'#D4A576',item:'#B5A0D9'};g.appendChild(node('circle',{cx:p.x,cy:p.y,r:12,fill:colors[r.type]||'#9290D4',stroke:'#171C26','stroke-width':2}));g.appendChild(node('text',{x:p.x,y:p.y+29,'text-anchor':'middle',fill:'currentColor','font-size':'12','paint-order':'stroke',stroke:'#171C26','stroke-width':3,'stroke-linejoin':'round'},r.name));g.addEventListener('click',()=>{if(!moved&&!gestureUsed)focusEntity(id)});g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();focusEntity(id)}});layer.appendChild(g)}
count.textContent='Узлов: '+ids.length+' · связей: '+edges.length;
};
filter.onchange=()=>{scale=1;tx=0;ty=0;apply();draw()};
app.querySelector('#graph-zoom-in').onclick=()=>zoom(1.25);
app.querySelector('#graph-zoom-out').onclick=()=>zoom(.8);
app.querySelector('#graph-reset').onclick=()=>{scale=1;tx=0;ty=0;apply()};
svg.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;pointers.set(e.pointerId,svgPoint(e));if(pointers.size===1){moved=false;gestureUsed=false}startGesture();svg.setPointerCapture(e.pointerId)});
svg.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,svgPoint(e));const points=[...pointers.values()];if(!gesture)return;if(gesture.kind==='pan'&&points.length===1){const p=points[0];if(distance(p,gesture.start)>5)moved=true;tx=gesture.tx+p.x-gesture.start.x;ty=gesture.ty+p.y-gesture.start.y;apply()}else if(gesture.kind==='pinch'&&points.length>=2){const center=midpoint(points[0],points[1]);const next=Math.max(.45,Math.min(3.5,gesture.scale*distance(points[0],points[1])/gesture.distance));scale=next;tx=center.x-(gesture.center.x-gesture.tx)*next/gesture.scale;ty=center.y-(gesture.center.y-gesture.ty)*next/gesture.scale;apply();moved=true}});
const endDrag=e=>{if(!pointers.has(e.pointerId))return;pointers.delete(e.pointerId);if(pointers.size)startGesture();else gesture=null};
svg.addEventListener('pointerup',endDrag);svg.addEventListener('pointercancel',endDrag);
svg.addEventListener('click',e=>{if(moved||gestureUsed){e.stopPropagation();e.preventDefault();moved=false;gestureUsed=false}},true);
svg.addEventListener('wheel',e=>{e.preventDefault();const p=svgPoint(e);zoom(e.deltaY<0?1.1:.9,p.x,p.y)},{passive:false});
draw();
}

function show(section){const n=current(),app=root();if(!app)return;const type=Object.keys(types).find(t=>types[t]===section);if(type){const arr=visible(n).filter(r=>r.type===type);app.innerHTML='<h2>'+escape(section)+' · сессия №'+n+'</h2><p class="muted">Только сведения, известные к выбранной сессии. Источник указан в каждом досье.</p><div>'+arr.map(r=>dossier(r.id,n)).join('')+'</div>';return}
if(section==='Хроника'){app.innerHTML='<h2>Хроника · по сессию №'+n+'</h2><p class="muted">Реальные и игровые даты указаны отдельно. События доступны по мере прохождения сессий.</p>'+visibleEvents(n).slice().reverse().map(e=>'<article class="card"><span class="badge">Сессия №'+e.number+' · Дата игры: '+escape(e.realDate)+' · Игровая дата: '+escape(e.gameDate)+'</span><h3>'+escape(e.title)+'</h3><p>'+escape(e.summary)+'</p>'+(e.archive?'<details><summary>Подробности из архива</summary><ul>'+e.archive.facts.map(f=>'<li>'+escape(f)+'</li>').join('')+'</ul>'+(e.archive.notes?'<p class="muted">Примечание: '+escape(e.archive.notes)+'</p>':'')+'<small class="muted">Источники: '+escape(e.archive.sources.join('; '))+'</small></details>':'')+'<small class="muted">Источник: сессия №'+e.sourceSession+'</small></article>').join('');return}
if(section==='Поиск'){app.innerHTML='<h2>Поиск · по сессию №'+n+'</h2><p class="muted">Поиск по событиям и досье в границах выбранной сессии.</p><input id="chronicle-search" type="search" autocomplete="off" placeholder="Имя, место, событие…"><div id="chronicle-results" aria-live="polite"></div>';const input=app.querySelector('#chronicle-search'),out=app.querySelector('#chronicle-results');input.oninput=()=>{const term=input.value.trim().toLocaleLowerCase('ru');if(!term){out.innerHTML='';return}const matches=visible(n).filter(r=>{const state=snapshot(r.id,n);return state&&(state.name+' '+state.description+' '+(state.status||'')+' '+history(r.id,n).map(c=>c.value).join(' ')).toLocaleLowerCase('ru').includes(term)});const found=visibleEvents(n).filter(e=>(e.title+' '+e.summary+' '+e.mentions.join(' ')+(e.archive?' '+e.archive.facts.join(' '):'')).toLocaleLowerCase('ru').includes(term));out.innerHTML=matches.map(r=>dossier(r.id,n)).join('')+found.map(e=>'<article class="card"><span class="badge">Сессия №'+e.number+'</span><h3>'+escape(e.title)+'</h3><p>'+escape(e.summary)+'</p></article>').join('');if(!matches.length&&!found.length)out.innerHTML='<p class="muted">Совпадений нет.</p>'};return}
if(section==='Связи'){renderGraph(app,n);return}
if(section==='Герои партии'){app.innerHTML='<h2>Герои партии · сессия №'+n+'</h2>'+['damien','tarvin','magnus'].map(id=>dossier(id,n)).join('');return}
}
window.ChronicleModel=Object.freeze({records,changes,links,events,archive,snapshot,visible,visibleEvents,visibleLinks,history,related,current});
const previous=window.render;
window.render=function(){previous();show(section);bindEntityLinks()};
window.render();
})();
