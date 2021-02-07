

console.log('Привет от JavaScript!');



$(document).ready(function () {
	$('.des__slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			/*titleSrc: function (item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}*/
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});




});

$('.menu__btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn-active');
	$('.menu__item').toggleClass('menu-item-active');
	$('.nav').toggleClass('nav-active');
	$('.nav__link').toggleClass('link-active')
})
