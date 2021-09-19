import slick from 'slick-carousel';
import $ from 'jquery';

const slickOptions = {
   arrows: true,
   dots: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   mobileFirst: true,
   responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      },
   ],
   nextArrow: '<a class="control control--next" ><img class="control__img" src="../static/img/arrow_r.svg"/> </a>',
 prevArrow: '<a class="control control--prev" ><img class="control__img" src="../static/img/arrow_l.svg"/> </a>',
};

$('.js-slickSlide').slick(slickOptions);