// Добавляем класс active на бургер и меню
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.header__menu');
toggle.onclick = function() {
	toggle.classList.toggle('active')
	menu.classList.toggle('active')
}

// Добавляем класс active на пункты меню
// let menu_item = document.querySelectorAll('.header__menu-item');
// menu_item.forEach(item =>{
// 	item.onclick = function(e) {
// 		if(e.currentTarget == item) {
// 			item.classList.remove('active')
// 		} else {

// 			item.classList.add('active')
// 			menu.classList.remove('active')
// 			toggle.classList.remove('active')
// 		}
		
// 	}
// })

