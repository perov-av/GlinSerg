"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    var mainOffset = $('#main').offset().top;
    var scrolled = $(this).scrollTop();
    if (scrolled > mainOffset - 80) {
      $('#header__wrap').addClass('nav-fixed');
    } else if (scrolled < mainOffset) {
      $('#header__wrap').removeClass('nav-fixed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwid2luZG93Iiwic2Nyb2xsIiwibWFpbk9mZnNldCIsIm9mZnNldCIsInRvcCIsInNjcm9sbGVkIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3QgbWFpbk9mZnNldCA9ICQoJyNtYWluJykub2Zmc2V0KCkudG9wO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsZWQgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChzY3JvbGxlZCA+IG1haW5PZmZzZXQtODApIHtcclxuXHRcdFx0JCgnI2hlYWRlcl9fd3JhcCcpLmFkZENsYXNzKCduYXYtZml4ZWQnKVxyXG5cdFx0fSBlbHNlIGlmIChzY3JvbGxlZCA8IG1haW5PZmZzZXQpIHtcclxuXHRcdFx0JCgnI2hlYWRlcl9fd3JhcCcpLnJlbW92ZUNsYXNzKCduYXYtZml4ZWQnKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG4vLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSDQsiDRiNCw0L/QutGDINC/0YDQuCDRgdC60YDQvtC70LvQtVxyXG5cdC8vIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vIFx0c2Nyb2xsRnVuY3Rpb24oKVxyXG5cdC8vIH07XHJcblx0Ly8gZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcblx0Ly8gXHRsZXQgc2Nyb2xsUG9zID0gNTAwO1xyXG5cdC8vIFx0bGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX3dyYXAnKTtcclxuXHQvLyBcdGlmKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gc2Nyb2xsUG9zIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBzY3JvbGxQb3MpIHtcclxuXHQvLyBcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdC8vIFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHJcblxyXG5cclxufSk7Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVTtFQUUzQkYsQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVU7SUFDMUIsSUFBTUMsVUFBVSxHQUFHTCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNNLE1BQU0sRUFBRSxDQUFDQyxHQUFHO0lBQzFDLElBQU1DLFFBQVEsR0FBR1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUyxTQUFTLEVBQUU7SUFFcEMsSUFBSUQsUUFBUSxHQUFHSCxVQUFVLEdBQUMsRUFBRSxFQUFFO01BQzdCTCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNVLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQyxNQUFNLElBQUlGLFFBQVEsR0FBR0gsVUFBVSxFQUFFO01BQ2pDTCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNXLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDNUM7RUFDRCxDQUFDLENBQUM7RUFDSDtFQUNDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUlELENBQUMsQ0FBQyJ9