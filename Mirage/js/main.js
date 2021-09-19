$(document).ready(function() {
	$('.header__burger').click(function(event) {
			$('.header__burger,.header__menu').toggleClass('active');
         $('.burger__btn').toggleClass('close');      
	});

      $('.js-hovered-card').click(function(event) {
      $(this).toggleClass('active');
   });
  
   

});


   




