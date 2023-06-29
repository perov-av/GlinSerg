$(document).ready(function(){

	$(window).scroll(function(){
		const mainOffset = $('#main').offset().top;
		const scrolled = $(this).scrollTop();

		if (scrolled > mainOffset-80) {
			$('#header__wrap').addClass('nav-fixed')
		} else if (scrolled < mainOffset) {
			$('#header__wrap').removeClass('nav-fixed')
		}
	});
// Добавляем класс в шапку при скролле
	// window.onscroll = function() {
	// 	scrollFunction()
	// };
	// function scrollFunction() {
	// 	let scrollPos = 500;
	// 	let header = document.getElementById('header__wrap');
	// 	if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
	// 		header.classList.add('active');
	// 	} else {
	// 		header.classList.remove('active');
	// 	}
	// }



});