// const { reload } = require("browser-sync");

$(document).ready(function(){
	
	// Добавление класса при скролле для меню
	$(window).scroll(function(){
		const mainOffset = $('#main').offset().top;
		const scrolled = $(this).scrollTop();

		if (scrolled > mainOffset-90) {
			$('#header__wrap').addClass('nav-fixed')
		} else if (scrolled < mainOffset) {
			$('#header__wrap').removeClass('nav-fixed')
		}
	});
// Слайдер
	$('.room__wrap').slick({
		arrows: true,
		dots: false,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed:2000,
		easing:'ease',
		pauseOnFocus: true,
		pauseOnHover: true,
		infinite:true,
		autoplay:true,
		swipe: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}

			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		],
	});

	

	// Магнифики попапы
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

	$('.room__item').magnificPopup({
		callbacks: {
			open: function() {
				$('.room__main-slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					asNavFor: '.room__nav-slider',
					dots: false,
				});
				
				$('.room__nav-slider').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: '.room__main-slider',
					dots: false,
					centerMode: true,
					focusOnSelect: true,
					arrows: false,
				});
			},
			close: function(){
				$('.room__main-slider').slick('unslick')
				$('.room__nav-slider').slick('unslick')
			}
		}
	});
	

	// Плавный скролл до элемента
	$('.header__menu a').on('click', function() {
	
		let href = $(this).attr('href');
	
		$('html, body').animate({
				scrollTop: $(href).offset().top-110
		}, {
				duration: 650,   // по умолчанию «400» 
				easing: "linear" // по умолчанию «swing» 
		});
	
		return false;
	});
	

});


