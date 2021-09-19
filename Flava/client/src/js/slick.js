import slick from 'slick-carousel';
import $ from 'jquery';


// const slickOptions = {
//    arrows: true,
//    nextArrow: '<a class="control" ><img src="/static/img/arrow-right.png"/> </a>',
//    prevArrow: '<a class="control" ><img src="/static/img/arrow-right.png"/> </a>',
//    dots: true,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    mobileFirst: true,
//    responsive: [
//      {
//        breakpoint: 768,
//        settings: {
//          arrows: false,
//          slidesToShow: 2
//        }
//      },
//      {
//        breakpoint: 1200,
//        settings: {
//          slidesToShow: 3
//        }
//      },
//    ],
//  }

 $('.cards-wrapper--lineup').slick({
   arrows: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   mobileFirst: true,
   responsive: [
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 2,
             }
           },
           {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
           },
         ],

 nextArrow: '<a class="control control--next" ><img class="control__img" src="../static/img/arrow_r.svg"/> </a>',
 prevArrow: '<a class="control control--prev" ><img class="control__img" src="../static/img/arrow_l.svg"/> </a>',
 } 
 );

 $('.cards-wrapper--sponsors').slick({
   arrows: false,
   dots: true,
   slidesToShow: 2,
   slidesToScroll: 2,
   mobileFirst: true,
   responsive: [
      {
        breakpoint: 767,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 2,
              }
      },
      {
         breakpoint: 1199,
         settings: {
           slidesToShow: 6,
           slidesToScroll: 3,
         }
        },
    ],
 });
