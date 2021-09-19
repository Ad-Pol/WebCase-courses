const burger = document.getElementsByClassName('header-burger') [0];
const menu = document.getElementsByClassName('header-menu') [0];
const btn = document.getElementById('btn');
const wrap = document.getElementsByClassName('main-header__bg')[0];

burger.addEventListener("click", function (e){
   this.classList.toggle('header-burger--is-active');
   menu.classList.toggle('header-menu--is-active');
   btn.classList.toggle('button--is-visible');
   wrap.classList.toggle('main-header__bg--is-change')
});