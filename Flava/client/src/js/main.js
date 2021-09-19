import './slick'


// Включение видео
const vid = document.getElementsByClassName('section__video')[0];
const play = document.getElementsByClassName('section__img--play')[0];

play.addEventListener("click", function (e) {
  vid.classList.add('section__video--is-active');
  play.classList.add('section__img--no-active');
});

const noplay = document.getElementsByTagName('video')[0];

noplay.addEventListener("click", function (e) {
   play.classList.remove('section__img--no-active');
   vid.classList.remove('section__video--is-active');
});

// Таймер на 13.09.2021

let date = new Date('Sep 13 2021 00:00:00');

function nowDate() {
  let now = new Date();
  let gap = date - now;
  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    days = days + 30;
    hours = hours + 24;
    minutes = minutes + 60;
    seconds = seconds + 60;
  }

  document.getElementById('d').innerText = days;
  document.getElementById('h').innerText = hours;
  document.getElementById('m').innerText = minutes;
  document.getElementById('s').innerText = seconds;
}

nowDate();
setInterval(nowDate, 1000);

// Меню бургер

const burger = document.getElementsByClassName('header-burger') [0];
const menu = document.getElementsByClassName('header-menu') [0];
const btn = document.getElementById('btn');

burger.addEventListener("click", function (e){
   this.classList.toggle('header-burger--is-active');
   menu.classList.toggle('header-menu--is-active');
   btn.classList.toggle('button--is-visible')
});

// Скрол хедера

function toggleScrollClass() {
   var nav = document.getElementsByClassName('main-header')[0];
   window.pageYOffset >= 100 ? nav.classList.add('main-header--is-scroll') : nav.classList.remove('main-header--is-scroll') 
 }
 window.addEventListener('scroll', function() {toggleScrollClass()});
 toggleScrollClass();

 console.log(scrollY);


//  Валидатор
import { Validator } from './vendor/js-form-validator'
document.addEventListener('DOMContentLoaded', () => {
  // ищем все формы
  const forms = Array.from(document.getElementsByClassName('js-form-ajax'))
  // идем по ним
  forms.forEach(form => {
    // создаем новый инстанс валидатора, подвязав в него нашу форму
    const validator = new Validator(form, async function (err, is_valid) {
      // если форма валидна
      if (is_valid) {
        // берем метод с дата-атрибута
        const method = form.dataset.method
        // берем ссылку с дата-атрибута
        const action = form.dataset.action
        // получаем все с полей в виде форм даты
        const body = new FormData(form)
        // преобразовываем в JSON, смотря, что хочет сервер
        const value = Object.fromEntries(body.entries());
        // создаем запрос на тот action, что нашли
        const response = await fetch(action, {
          // с тем методом, что нашли. Сокращенная запись method
          method: method,
          // так надо
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          // превращаем наш обьект с данными в строку. так надо
          body: JSON.stringify(value),
        });
        // если все ок
        if (response.ok) {
          // проверяем что нам ответил сервер
          let result = await response.json();
          form.reset()
        }
      }
    })
  })
})