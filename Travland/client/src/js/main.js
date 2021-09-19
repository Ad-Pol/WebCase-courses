// document.getElementsByClassName('.header-burger').onclick = function(event) {
// document.getElementsByClassName('.header-menu').toggleClass('is-active');
// }

// const burger = document.getElementsByClassName('.header-burger');
// const menu = document.getElementsByClassName('.header-menu');

// burger .getElementsByClassName('click', function(e) {
//    this.classList.toggle('is-active');
//    menu.classList.toggle('is-active');
// })

// document.addEventListener

// const burger = document.getElementByClassName('header-burger')
// const menu = document.getElementsByClassName('header-menu')[0]

// burger.addEventListener('click', function(e) {
//   this.classList.toggle('is-active')
//   menu.classList.toggle('is-active')
// })


const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');

burger.addEventListener("click", function (e) { 
	this.classList.toggle('header-burger--is-active');
	menu.classList.toggle('header-menu--is-active');
});
