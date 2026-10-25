const viewer=document.getElementById('photoViewer'), image=document.getElementById('largePhoto'), count=document.getElementById('photoCount'), links=[...document.querySelectorAll('.photo')];
let current=0, opener;
function showPhoto(index){current=(index+links.length)%links.length;image.src=links[current].href;image.alt=`Devon and Brianna’s elopement, photo ${current+1} of ${links.length}`;count.textContent=`${current+1} / ${links.length}`;}
links.forEach((link,index)=>link.addEventListener('click',event=>{event.preventDefault();opener=link;showPhoto(index);viewer.showModal();document.body.style.overflow='hidden';}));
document.getElementById('closePhoto').onclick=()=>viewer.close();
document.getElementById('prevPhoto').onclick=()=>showPhoto(current-1);
document.getElementById('nextPhoto').onclick=()=>showPhoto(current+1);
viewer.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(current+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(current-1);}});
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
viewer.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
