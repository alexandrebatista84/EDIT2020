$('#imagens1').slick({
	infinite: true,
	slidesToShow: 9,
	slidesToScroll: 9,
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
		duration: 300, 
		opener: function(element) {
			return element.find('img');
		}
	}
	
});


$('#slide').slick({
	autoplay: true,
	infinite: true,
	arrows:false,
	fade: true,
});
