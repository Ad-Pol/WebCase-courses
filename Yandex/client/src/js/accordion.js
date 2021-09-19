document.querySelectorAll('.js-accordion').forEach((item) =>
   item.addEventListener('click', () => {
      const parent = item.parentNode;
      
      if (parent.classList.contains('accordion-item--is-active')){
         parent.classList.remove('accordion-item--is-active');
      } else {
         document
         .querySelectorAll('.js-accordion')
         .forEach((child) => 
         child.classList.remove('accordion-item--is-active'))

         parent.classList.add('accordion-item--is-active');
      }

   
   })
)