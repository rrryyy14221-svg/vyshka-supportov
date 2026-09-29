
document.querySelectorAll('a[href^="http"]').forEach(a=>{
  a.target="_blank"; a.rel="noopener noreferrer";
});
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path) a.classList.add('active');
});
