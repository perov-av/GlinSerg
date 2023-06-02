// Добавляем класс active на бургер и меню
// let toggle = document.querySelector('.toggle');
// let menu = document.querySelector('.header__menu');
// toggle.onclick = function() {
// 	toggle.classList.toggle('active')
// 	menu.classList.toggle('active')
// }

document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * .006}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .02}deg;
		`
	})
});

