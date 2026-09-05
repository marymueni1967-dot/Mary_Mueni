document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
menu.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='72px';links.style.left='0';links.style.right='0';links.style.padding='20px';links.style.background='white';links.style.flexDirection='column';links.style.borderBottom='1px solid #e9e4ef';});
