$(document).ready(function(){
	// nav button
	var clicked = false;
	$header = $("header");
	$header.find(".nav-btn").click(function(){
		var $this = $(this);
		 if(!clicked){
		 clicked = true;
		$("nav").toggleClass('active');
		setTimeout(function(){
			clicked=false
		}, 1000)
		}
	});

	$(document).on('click', function(e){
		var clickOver = $(e.target);
		if (!clickOver.closest('header').length && $('nav').hasClass('active')) {
			$('nav').removeClass('active');
		}
	});

	var MainSection = $(".main-sec");
		
	$(window).scroll(function(){
		if ($(window).scrollTop() >= MainSection.height() -100) {
			$header.addClass('sticky');
		}else{
			$header.removeClass('sticky');

		}
	});
	// slider Function
	function menuSlider(){
		var $sliderContainer = $('.menu-slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $slider = $sliderContainer.find('.slider');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');
		var slidesToShow = 3;

		var activeSlides = slidesToShow ;
		function responsiveSlides(){
			activeSlides -= slidesToShow;

			if ($(window).width() <= 991 && $(window).width() > 550) {
				slidesToShow = 2;
			}else if ($(window).width() <= 550){

				slidesToShow = 1;
			}else{
				slidesToShow = 3;
			}

			activeSlides += slidesToShow
		}responsiveSlides();
		

		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		
		var itemWidth;
		var itemsWidth;
		$sliderBanner.width(itemsWidth);
		function fixWidth(){
			itemWidth = $('.menu-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		} fixWidth();

		function leftCalc(){
			return itemWidth * itemMove;
		}

		$(window).resize(function(){
			responsiveSlides();
			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			leftCalc();
			$sliderBanner.css('left', -leftCalc());


		});

		var left = 0;
		var itemMove = 0;
		var clicked = false;

		function checkStatus(){
			if(activeSlides == itemsLength ){
				$nextBtn.addClass('disabled');
			}else{
				$nextBtn.removeClass('disabled');
			}
			if(activeSlides == slidesToShow ){
				$prevBtn.addClass('disabled');
			}else{
				$prevBtn.removeClass('disabled');
			}
		}checkStatus();



		$nextBtn.click(function(){
			if (!clicked) {
				if (activeSlides != itemsLength) {
					clicked = true;	

					itemMove++;
					left = -leftCalc() ;	
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

			$prevBtn.click(function(){
			if(!clicked){

				if (activeSlides > slidesToShow) {
				clicked = true;

				itemMove--;
				left = -leftCalc();
				$sliderBanner.css('left', left);
				activeSlides--;
				}
				setTimeout(function(){
					clicked = false;
				}, 400);
				checkStatus();
			}
		});
	

	}menuSlider();




	// chef-slider Function
	function cheifSlider(){
		var $sliderContainer = $('.cheif-slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $slider = $sliderContainer.find('.slider');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsLength = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');
		var slidesToShow = 1;

		var activeSlides = slidesToShow ;
		// function responsiveSlides(){
		// 	activeSlides -= slidesToShow;

		// 	if ($(window).width() <= 991 && $(window).width() > 550) {
		// 		slidesToShow = 2;
		// 	}else if ($(window).width() <= 550){

		// 		slidesToShow = 1;
		// 	}else{
		// 		slidesToShow = 3;
		// 	}

		// 	activeSlides += slidesToShow
		// }responsiveSlides();
		

		$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
		
		var itemWidth;
		var itemsWidth;
		$sliderBanner.width(itemsWidth);
		function fixWidth(){
			itemWidth = $('.cheif-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsLength;
			$sliderBanner.width(itemsWidth);
		} fixWidth();

		function leftCalc(){
			return itemWidth * itemMove;
		}

		$(window).resize(function(){
			$sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
			fixWidth();
			
			$sliderBanner.css('left', -leftCalc());


		});

		var left = 0;
		var itemMove = 0;
		var clicked = false;

		function checkStatus(){
			if(activeSlides == itemsLength ){
				$nextBtn.addClass('disabled');
			}else{
				$nextBtn.removeClass('disabled');
			}
			if(activeSlides == slidesToShow ){
				$prevBtn.addClass('disabled');
			}else{
				$prevBtn.removeClass('disabled');
			}
		}checkStatus();



		$nextBtn.click(function(){
			if (!clicked) {
				if (activeSlides != itemsLength) {
					clicked = true;	

					itemMove++;
					left = -leftCalc() ;	
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function(){
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

			$prevBtn.click(function(){
			if(!clicked){

				if (activeSlides > slidesToShow) {
				clicked = true;

				itemMove--;
				left = -leftCalc();
				$sliderBanner.css('left', left);
				activeSlides--;
				}
				setTimeout(function(){
					clicked = false;
				}, 400);
				checkStatus();
			}
		});
	

	}cheifSlider();

	// //refresh page on browser resize
	// $(window).on('resize', function(e)
	// {
	//   if (window.RT) clearTimeout(window.RT);
	//   window.RT = setTimeout(function()
	//   {
	//     this.location.reload(false); /* false to get page from cache */
	//   }, 200);
	// });

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});


// plugins
$('html').niceScroll();

});