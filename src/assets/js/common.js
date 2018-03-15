'use strict';

window.onload = function() {
	var animationDuration = 200;
	
	if (window.innerWidth > 768) {
		document.querySelectorAll('.list-of-figures').forEach(function(listOfFiguresElement) {
			listOfFiguresElement.querySelectorAll('li').forEach(function(itemElement, index) {
				var currentItemAnimationDelay = animationDuration * index;

				itemElement
					.setAttribute('data-aos', 'fade-up');
				itemElement
					.setAttribute('data-aos-delay', currentItemAnimationDelay);
			});
		});
	}

	AOS.init();
}