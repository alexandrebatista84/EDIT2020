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
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') ;
			}
		}
	});