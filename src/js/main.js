$(document).ready(function(){
	// Добавление класса при скролле для меню
	$(window).scroll(function(){
		const mainOffset = $('#main').offset().top;
		const scrolled = $(this).scrollTop();

		if (scrolled > mainOffset-80) {
			$('#header__wrap').addClass('nav-fixed')
		} else if (scrolled < mainOffset) {
			$('#header__wrap').removeClass('nav-fixed')
		}
	});




});

$('.open-gallery-link').click(function() {
  
  var items = [];
  $( $(this).attr('href') ).find('.slide').each(function() {
    items.push( {
      src: $(this) 
    } );
  });
  
  $.magnificPopup.open({
    items:items,
    gallery: {
      enabled: true 
    }
  });
});

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true,
  mainClass: 'custom-popup-class'
});