$('#imagens').slick({
	dots: true,
	fade: true,
	arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/left arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/right arrow.png'>"
  });

  $('#imagens1').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});