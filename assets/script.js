const gifts=[
['✈️','Australia + Fiji Honeymoon Fund','Put your gift toward whichever adventure finds us next.','Any amount'],
['🍸','Drinks in Sydney','A toast to the start of our Australian adventure.','$40'],
['🥐','Breakfast for Two','Fuel for a day of exploring, reef-going, or doing absolutely nothing.','$50'],
['🐠','Great Barrier Reef Adventure','Help us spend a day exploring one of the world’s most extraordinary reef systems.','$150'],
['🌿','Daintree Rainforest Day','A day among ancient rainforest, beaches, and Tropical North Queensland.','$125'],
['🍽️','Date Night in Australia','A memorable dinner for two after a day of adventuring.','$150'],
['🤿','Fiji Dive Trip','Help us get underwater and explore Fiji’s spectacular reefs.','$200'],
['🌺','Island Cocktails','Something cold, tropical, and preferably enjoyed barefoot.','$50'],
['💆','Spa Time in Fiji','A little extra honeymoon-level relaxation.','$175'],
['🌊','Savusavu Adventure','Help us explore one of the quieter corners of Fiji.','$125']
];
const grid=document.getElementById('giftGrid');
gifts.forEach(g=>{const el=document.createElement('article');el.className='gift-card';el.innerHTML=`<div class="icon">${g[0]}</div><h3>${g[1]}</h3><p>${g[2]}</p><div class="amount">${g[3]}</div><button>Gift this experience</button>`;el.querySelector('button').onclick=()=>openGift(g);grid.appendChild(el)});
document.querySelector('.menu').onclick=()=>document.querySelector('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.querySelector('nav').classList.remove('open'));
const modal=document.getElementById('modal');function openGift(g){document.getElementById('modalTitle').textContent=g[1];document.getElementById('giftChoice').textContent=`${g[3]} · ${g[2]}`;modal.hidden=false;document.body.style.overflow='hidden'}function close(){modal.hidden=true;document.body.style.overflow=''}document.getElementById('closeModal').onclick=close;modal.onclick=e=>{if(e.target===modal)close()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const status=document.getElementById('copyStatus');try{await navigator.clipboard.writeText(b.dataset.copy);const old=b.textContent;b.textContent='Copied!';status.textContent='Payment details copied.';setTimeout(()=>b.textContent=old,1200)}catch{status.textContent='Could not copy automatically. Please select and copy the payment details shown above.'}});
