(function ($) {

	$.fn.carousel = function () {
		var left = $('.carousel-arrow-left');
		var right = $('.carousel-arrow-right');
		var imgList = $('.carousel-list');

		var pixelsOffset = 125;
		var currentLeftValue = 0;
		var allElements = imgList.find('li').length;
		var minimumOffset = - ((allElements - 3) * pixelsOffset);
		var maximumOffset = 0;

		console.log(allElements);

		left.click(function () {
			if (currentLeftValue != maximumOffset) {
			currentLeftValue +=125;
			imgList.animate({left : currentLeftValue + "px"}, 300);
			}
		});
		right.click(function () {
			if (currentLeftValue != minimumOffset) {
			currentLeftValue -=125;
			imgList.animate({left : currentLeftValue + "px"}, 300);
			}
		});

	return this
	}

})(jQuery);
