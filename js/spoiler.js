$(document).ready(function() {
  if ($(window).width() < 751) {
    if ($('.section-editions__form-item').hasClass('default')) {
      $('.section-editions__checkbox:checked').parent().slideDown(100).addClass('btn-close');
    } else { 
      $('.section-editions__checkbox:checked').parent().slideUp(100).removeClass('btn-close');
    }

      $('.section-editions__form-select').click(function() {
        $('.section-editions__form-list').toggleClass('form-active');
      let ul = $(this).toggleClass('section-editions__form-select_active').next('.section-editions__form-list');
      let itemList = ul.find($('.section-editions__form-item'));
      itemList.slideToggle(300);

      if ($('.section-editions__form-list').hasClass('form-active')) {
        $('.section-editions__checkbox:checked').parent().slideUp(100).removeClass('btn-close');
        } else {
        $('.section-editions__checkbox:checked').parent().slideDown(100).addClass('btn-close');
        }
    })
    
      $('.section-editions__label').click(function() {
      $(this).parent().slideUp(100).removeClass('btn-close');
    })
  }
})
