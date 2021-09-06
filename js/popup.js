$('.section-gallery__slide-item').click(function(e) {
    e.preventDefault();
	let search = $(this).find(".section-gallery__img_mobile");
	let atribut = search.attr('srcset');
	$(".section-gallery__popup-img").attr('src', atribut);
    $('.section-gallery__popup').fadeIn(500);
    $('html').addClass('no-scroll');
});

$('.section-gallery__popup-btn').click(function() {
    $('.section-gallery__popup').fadeOut(500);
    $('html').removeClass('no-scroll');
});