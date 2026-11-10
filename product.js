const products={
apple:{title:"마시따 프리미엄 사과",sub:"엄선한 사과를 정성껏 담은 구성",img:"https://nineworksdatabase.planus253.workers.dev/cdn/uncategorized/20261110-045303-1-cff39577.webp",flavor:"싱그러운 사과의 맛을 선물하세요."},
persimmon:{title:"마시따 제철 단감",sub:"계절이 전하는 달콤한 맛",img:"https://nineworksdatabase.planus253.workers.dev/cdn/uncategorized/20261110-045304-333-63febd70.webp",flavor:"제철의 달콤함을 정성껏 담았습니다."},
carrot:{title:"마시따 신선 당근",sub:"신선하게 고른 채소",img:"https://nineworksdatabase.planus253.workers.dev/cdn/uncategorized/20261110-045305-4444-6c6596a1.webp",flavor:"일상의 식탁에 신선함을 더합니다."},
grape:{title:"마시따 샤인머스캣",sub:"풍성하게 담은 제철 과일",img:"https://nineworksdatabase.planus253.workers.dev/cdn/uncategorized/20261110-045305-4414-67def83f.webp",flavor:"상큼하고 달콤한 순간을 만나보세요."}
};
const key=new URLSearchParams(location.search).get('item')||'apple';const product=products[key]||products.apple;
document.title=product.title+' | 마시따 MASIDDA';
document.getElementById('detailTitle').textContent=product.title;document.getElementById('detailSub').textContent=product.sub;document.getElementById('detailFlavor').textContent=product.flavor;
for(const id of ['detailImage','detailBrandImage']){const el=document.getElementById(id);el.src=product.img;el.alt=product.title+' 상품 사진'}
const modal=document.getElementById('detailModal');
function showModal(title){document.getElementById('detailModalTitle').textContent=title;modal.hidden=false;document.body.style.overflow='hidden';document.getElementById('detailModalOk').focus()}
function closeModal(){modal.hidden=true;document.body.style.overflow=''}
document.querySelectorAll('.detail-demo-action,.detail-cart').forEach(el=>el.addEventListener('click',()=>showModal(el.textContent.trim()||'장바구니')));
document.getElementById('detailModalClose').addEventListener('click',closeModal);
document.getElementById('detailModalOk').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.getElementById('detailBack').addEventListener('click',()=>{if(history.length>1)history.back();else location.href='./index.html'});
let liked=false;function toggleLiked(){liked=!liked;document.getElementById('detailWish').classList.toggle('liked',liked);document.getElementById('bottomWish').classList.toggle('liked',liked);document.getElementById('detailWish').setAttribute('aria-pressed',String(liked));document.getElementById('bottomWish').setAttribute('aria-pressed',String(liked));}
document.getElementById('detailWish').addEventListener('click',toggleLiked);document.getElementById('bottomWish').addEventListener('click',toggleLiked);
document.getElementById('detailShare').addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:product.title,url:location.href});else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);showModal('상품 주소가 복사되었습니다')}else showModal('공유 기능 안내')}catch(e){/* user cancelled */}});
const overlay=document.getElementById('detailSearchOverlay');const input=document.getElementById('detailSearchInput');const results=document.getElementById('detailSearchResults');function toggleSearch(open){overlay.hidden=!open;document.body.style.overflow=open?'hidden':'';if(open)input.focus()}
document.getElementById('detailSearch').addEventListener('click',()=>toggleSearch(true));
document.getElementById('detailSearchClose').addEventListener('click',()=>toggleSearch(false));
overlay.addEventListener('click',e=>{if(e.target===overlay)toggleSearch(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();toggleSearch(false)}});
document.getElementById('detailSearchForm').addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();results.replaceChildren();const matched=Object.entries(products).filter(([,p])=>p.title.toLowerCase().includes(q));if(!matched.length){const p=document.createElement('p');p.textContent='해당하는 예시 상품이 없습니다.';results.append(p)}else for(const [key,p] of matched){const a=document.createElement('a');a.href='./product.html?item='+encodeURIComponent(key);a.textContent=p.title;results.append(a)}});
