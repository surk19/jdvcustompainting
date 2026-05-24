const btn=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.mobile-menu');
if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'));}
const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
