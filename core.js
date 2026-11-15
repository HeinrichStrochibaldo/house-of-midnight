/* Alpha 0.4 — единая модель знаний и досье. Данные не заменяют первичные записи. */
(function(){
'use strict';
const records=[
['person','damien','Дэмиен',1,'Жрец домена жизни, агент Дома Полуночи. Значок №69.'],
['person','tarvin','Тарвин',1,'Плут, агент Дома Полуночи.'],
['person','magnus','Магнус',1,'Волшебник, агент Дома Полуночи.'],
['faction','midnight','Дом Полуночи',1,'Агентство, в котором служат Дэмиен, Тарвин и Магнус.'],
['item','teprix','Теприкс',1,'Приспособление, используемое для закрытия разломов.'],
['place','lisy-nora','Лисья Нора',2,'Гостиница.'],
['place','westfield','Вестфилд',3,'Город.'],
['person','devon','Девон Лантран',3,'Старший командир комиссаров.'],
['person','martin','Мартин',3,'Рыбак; найден мёртвым возле озера.'],
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
['person','ferrando','Ферандо Бэк',6,'Эмиссар, которому Ёвис попросил помочь.'],
['item','luciat','Люсиат',6,'Два камня, оставшиеся после победы над существами в руинах.'],
['place','kaer-dagen','Каэр Даген',7,'Упомянут в связи с формулами из подвала.'],
['item','pathfinder','Путеискатель',7,'Компас.'],
['faction','wolf-charter','Волчья Хартия',8,'Другое агентство.'],
['person','wilhelm','Вильгельм Вена',8,'Представитель Волчьей Хартии; чёрный плащ, мечи и арбалеты.'],
['item','thunder','Громовой камень',8,'Громовой камень 3 уровня, стандартная бомба.'],
['item','opal','Замораживающий опал',8,'Найден среди предметов в крепости.'],
['item','runes','Рунные камни',8,'Три руны: усиления, возвращения и призрачного оружия.'],
['person','khrem','Хрем Бородач',9,'Кузнец, у которого Дэмиен заказал кастеты «69».'],
['place','volheim','Вольхейм',9,'Город, куда партия прибыла 8 июля.'],
['person','oswald','Освальд Мурк',9,'Старшина Волчьей Хартии.'],
['person','daen','Даен Турвин',9,'Упомянут среди агентов Волчьей Хартии.'],
['person','olli','Олли',9,'Упомянут среди агентов Волчьей Хартии.'],
['person','ship','Шип Хеккет',9,'Упомянут среди агентов Волчьей Хартии.'],
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
['person','hregor','Хрегор',19,'Багбир, освобождённый из плена; показал жест приветствия.'],
['place','dunes','Дворец Дюн',20,'Упомянут во время событий «Сердца бури».']
].map(([type,id,name,firstSession,description])=>({type,id,name,firstSession,description,sourceSession:firstSession}));
const changes=[
{entityId:'tarvin',session:20,field:'status',value:'Погиб в ходе эксперимента Ёвиса.',sourceSession:20},
{entityId:'hregor',session:19,field:'status',value:'Освобождён из плена.',sourceSession:19}
];
const links=[
['damien','midnight','агент',1],['tarvin','midnight','агент',1],['magnus','midnight','агент',1],
['yovis','midnight','старший целитель',5],['eldrika','midnight','глава',5],['jonathan','midnight','эмиссар',5],['mailem','midnight','маг',5],
['krom','eklmaier','лавка-склад',4],['wilhelm','wolf-charter','представитель',8],
['oswald','wolf-charter','агент',9],['daen','wolf-charter','агент',9],['olli','wolf-charter','агент',9],['ship','wolf-charter','агент',9],
['khrem','damien','изготовил кастеты',9],['torvald','blue-sails','владелец',11],['dirk','last-oasis','бармен',12],
['misir','cornwell','направлялся в',14],['yovis','tarvin','эксперимент, в ходе которого Тарвин погиб',20]
].map(([from,to,relation,firstSession])=>({from,to,relation,firstSession,sourceSession:firstSession}));
const types={person:'Персонажи',place:'Места',faction:'Фракции',item:'Предметы'};
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const current=()=>{const n=Number(localStorage.getItem('hom-timeline-session'));return Number.isInteger(n)&&n>=1&&n<=20?n:20};
const visible=(n)=>records.filter(r=>r.firstSession<=n);
const snapshot=(id,n)=>{const base=records.find(r=>r.id===id&&r.firstSession<=n);if(!base)return null;const state={...base};for(const c of changes.filter(c=>c.entityId===id&&c.session<=n).sort((a,b)=>a.session-b.session))state[c.field]=c.value;return state};
const byId=id=>records.find(r=>r.id===id);
const history=(id,n)=>changes.filter(c=>c.entityId===id&&c.session<=n).sort((a,b)=>a.session-b.session);
const related=(id,n)=>links.filter(l=>l.firstSession<=n&&(l.from===id||l.to===id));
const root=()=>document.getElementById('app');
const dossier=(id,n)=>{const r=snapshot(id,n);if(!r)return '';const rel=related(id,n);return '<article class="card"><span class="badge">'+escape(types[r.type]||r.type)+' · впервые: №'+r.firstSession+'</span><h3>'+escape(r.name)+'</h3><p>'+escape(r.description)+'</p>'+(r.status?'<p><strong>Статус:</strong> '+escape(r.status)+'</p>':'')+(rel.length?'<p class="muted">Связи: '+rel.map(l=>{const other=byId(l.from===id?l.to:l.from);return escape((other?other.name:'?')+' — '+l.relation)}).join('; ')+'</p>':'')+(history(id,n).length?'<p class="muted">Изменения: '+history(id,n).map(c=>'№'+c.session+': '+escape(c.value)).join('; ')+'</p>':'')+'<small class="muted">Источник: сессия №'+r.sourceSession+'</small></article>'};
function show(section){const n=current(),app=root();if(!app)return;const type=Object.keys(types).find(t=>types[t]===section);if(type){const arr=visible(n).filter(r=>r.type===type);app.innerHTML='<h2>'+escape(section)+' · сессия №'+n+'</h2><p class="muted">Только сведения, известные к выбранной сессии. Источник указан в каждом досье.</p><div>'+arr.map(r=>dossier(r.id,n)).join('')+'</div>';return}
if(section==='Связи'){const arr=links.filter(l=>l.firstSession<=n);app.innerHTML='<h2>Связи · сессия №'+n+'</h2><p class="muted">Подтверждённые связи. Интерактивный граф появится в следующем обновлении.</p>'+arr.map(l=>{const a=byId(l.from),b=byId(l.to);return '<article class="card"><span class="badge">Сессия №'+l.firstSession+'</span><p><strong>'+escape(a.name)+'</strong> → <strong>'+escape(b.name)+'</strong> · '+escape(l.relation)+'</p></article>'}).join('');return}
if(section==='Герои партии'){app.innerHTML='<h2>Герои партии · сессия №'+n+'</h2>'+['damien','tarvin','magnus'].map(id=>dossier(id,n)).join('');return}
}
window.ChronicleModel=Object.freeze({records,changes,links,snapshot,visible,related,current});
const previous=window.render;
window.render=function(){previous();show(section)};
window.render();
})();
