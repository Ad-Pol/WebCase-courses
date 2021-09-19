function toggleScrollClass() {
   let nav = document.getElementsByClassName('main-header')[0];
   const wrap = document.getElementsByClassName('main-header')[0];
   window.pageYOffset >= 1 ? nav.classList.add('main-header--is-scroll') : nav.classList.remove('main-header--is-scroll')
 }
 
window.addEventListener('scroll', toggleScrollClass);
